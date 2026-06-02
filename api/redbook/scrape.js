import { allowMethods, ApiError, readJson, sendJson, withApi } from '../_lib/http.js'
import { getCurrentUser, insertSource } from '../_lib/supabase.js'

const XHS_HOSTS = ['xiaohongshu.com', 'www.xiaohongshu.com', 'xhslink.com', 'www.xhslink.com']

function assertXhsUrl(raw) {
  let url
  try {
    url = new URL(raw)
  } catch {
    throw new ApiError(400, '请输入有效的小红书链接')
  }

  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new ApiError(400, '只支持 http/https 链接')
  }

  const allowed = XHS_HOSTS.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`))
  if (!allowed) throw new ApiError(400, '当前只支持小红书公开链接')
  return url.toString()
}

function pickMeta(html, names) {
  for (const name of names) {
    const propMatch = html.match(new RegExp(`<meta[^>]+property=["']${name}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i'))
    if (propMatch?.[1]) return decodeHtml(propMatch[1])
    const nameMatch = html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i'))
    if (nameMatch?.[1]) return decodeHtml(nameMatch[1])
  }
  return ''
}

function decodeHtml(value) {
  return String(value)
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()
}

function extractTitle(html) {
  const ogTitle = pickMeta(html, ['og:title', 'twitter:title'])
  if (ogTitle) return ogTitle
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
  return title ? decodeHtml(title).replace(/- 小红书$/, '').trim() : ''
}

function extractTags(text) {
  const tags = new Set()
  for (const match of text.matchAll(/#([\p{Script=Han}\w-]{2,24})/gu)) {
    tags.add(match[1])
  }
  return Array.from(tags).slice(0, 12)
}

async function fetchPublicHtml(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 10000)
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        Accept: 'text/html,application/xhtml+xml',
        'User-Agent': 'Mozilla/5.0 (compatible; opcmode-redbook-mvp/1.0)',
      },
    })
    const html = await response.text()
    return {
      ok: response.ok,
      status: response.status,
      finalUrl: response.url || url,
      html: html.slice(0, 260000),
    }
  } finally {
    clearTimeout(timer)
  }
}

async function handlePost(req, res) {
  const user = await getCurrentUser(req)
  const body = await readJson(req)
  const url = assertXhsUrl(body.url)

  try {
    const fetched = await fetchPublicHtml(url)
    const title = extractTitle(fetched.html)
    const description = pickMeta(fetched.html, ['description', 'og:description', 'twitter:description'])
    const tags = extractTags(`${title}\n${description}\n${fetched.html}`)

    if (!fetched.ok || (!title && !description)) {
      sendJson(res, 200, {
        status: 'needs_paste',
        message: '公开链接没有解析出有效内容，请粘贴标题、正文或截图 OCR 文案继续分析。',
        source: {
          url: fetched.finalUrl,
          title,
          body: description,
          tags,
        },
      })
      return
    }

    const source = await insertSource(user, {
      source_type: body.action === 'profile_advice' ? 'xhs_profile_link' : 'xhs_note_link',
      url: fetched.finalUrl,
      title,
      body: description,
      tags,
      raw: {
        status: fetched.status,
        parsed_at: new Date().toISOString(),
      },
    })

    sendJson(res, 200, {
      status: 'parsed',
      message: '已解析公开页面元信息；如果正文不完整，请继续粘贴补充。',
      source: {
        id: source?.id,
        url: fetched.finalUrl,
        title,
        body: description,
        tags,
      },
    })
  } catch (error) {
    if (error instanceof ApiError) throw error
    sendJson(res, 200, {
      status: 'needs_paste',
      message: '公开链接解析失败，请粘贴标题、正文或截图 OCR 文案继续分析。',
    })
  }
}

export default function handler(req, res) {
  return withApi(async () => {
    if (!allowMethods(req, res, ['POST'])) return
    return handlePost(req, res)
  }, req, res)
}
