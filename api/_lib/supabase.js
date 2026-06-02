import { ApiError, requireEnv } from './http.js'

const DEFAULT_IMAGE_BUCKET = 'redbook-images'

function getSupabaseUrl() {
  return process.env.SUPABASE_URL?.replace(/\/$/, '')
}

function getServiceKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY
}

function getBucketName() {
  return process.env.SUPABASE_IMAGE_BUCKET || DEFAULT_IMAGE_BUCKET
}

export function assertSupabaseReady() {
  requireEnv(['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'])
}

export function getBearerToken(req) {
  const auth = req.headers.authorization || req.headers.Authorization
  if (!auth || typeof auth !== 'string' || !auth.startsWith('Bearer ')) {
    throw new ApiError(401, '请先登录')
  }
  return auth.slice('Bearer '.length).trim()
}

async function parseResponse(response) {
  const text = await response.text()
  let data = null
  if (text) {
    try {
      data = JSON.parse(text)
    } catch {
      data = { message: text }
    }
  }
  if (!response.ok) {
    const message = data?.message || data?.msg || data?.hint || `Supabase HTTP ${response.status}`
    throw new ApiError(response.status, message, data)
  }
  return data
}

export async function supabaseFetch(path, options = {}) {
  assertSupabaseReady()
  const url = `${getSupabaseUrl()}${path}`
  const headers = new Headers(options.headers)
  headers.set('apikey', getServiceKey())
  headers.set('Authorization', `Bearer ${getServiceKey()}`)
  if (!headers.has('Content-Type') && options.body != null) headers.set('Content-Type', 'application/json')

  const response = await fetch(url, {
    ...options,
    headers,
  })

  return parseResponse(response)
}

export async function getCurrentUser(req) {
  assertSupabaseReady()
  const token = getBearerToken(req)
  const response = await fetch(`${getSupabaseUrl()}/auth/v1/user`, {
    headers: {
      apikey: getServiceKey(),
      Authorization: `Bearer ${token}`,
    },
  })
  const user = await parseResponse(response)
  if (!user?.id) throw new ApiError(401, '登录状态无效，请重新登录')
  return {
    id: user.id,
    email: user.email || '',
    token,
  }
}

export async function rpc(name, payload) {
  return supabaseFetch(`/rest/v1/rpc/${name}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function ensureProfile(user) {
  const existing = await supabaseFetch(
    `/rest/v1/profiles?id=eq.${encodeURIComponent(user.id)}&select=id,email,credits`,
  )

  if (Array.isArray(existing) && existing[0]) return existing[0]

  const inserted = await supabaseFetch('/rest/v1/profiles?select=id,email,credits', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify({
      id: user.id,
      email: user.email,
      credits: 0,
    }),
  })

  return inserted?.[0]
}

export async function listRuns(userId) {
  const rows = await supabaseFetch(
    `/rest/v1/redbook_runs?user_id=eq.${encodeURIComponent(userId)}&select=id,action,status,cost,input,output,image_urls,created_at,completed_at&order=created_at.desc&limit=24`,
  )
  return Array.isArray(rows) ? rows : []
}

export async function insertSource(user, source) {
  const inserted = await supabaseFetch('/rest/v1/redbook_sources?select=id,url,title,body,tags,source_type', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify({
      user_id: user.id,
      source_type: source.source_type || 'xhs_link',
      url: source.url,
      title: source.title || null,
      body: source.body || null,
      tags: source.tags || [],
      raw: source.raw || {},
    }),
  })

  return inserted?.[0] || null
}

function storagePathFor(bucket, path) {
  return `${bucket}/${path.split('/').map(encodeURIComponent).join('/')}`
}

export async function uploadImageBase64({ userId, runId, index, b64, mimeType = 'image/webp' }) {
  assertSupabaseReady()
  const bucket = getBucketName()
  const extension = mimeType.includes('png') ? 'png' : mimeType.includes('jpeg') ? 'jpg' : 'webp'
  const objectPath = `${userId}/${runId}/${Date.now()}-${index}.${extension}`
  const bytes = Buffer.from(b64, 'base64')
  const storagePath = storagePathFor(bucket, objectPath)

  const uploadResponse = await fetch(`${getSupabaseUrl()}/storage/v1/object/${storagePath}`, {
    method: 'POST',
    headers: {
      apikey: getServiceKey(),
      Authorization: `Bearer ${getServiceKey()}`,
      'Content-Type': mimeType,
      'x-upsert': 'false',
    },
    body: bytes,
  })

  await parseResponse(uploadResponse)

  const signResponse = await fetch(`${getSupabaseUrl()}/storage/v1/object/sign/${storagePath}`, {
    method: 'POST',
    headers: {
      apikey: getServiceKey(),
      Authorization: `Bearer ${getServiceKey()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ expiresIn: 60 * 60 * 24 * 7 }),
  })
  const signed = await parseResponse(signResponse)
  const signedURL = signed?.signedURL || signed?.signedUrl

  return {
    path: objectPath,
    url: signedURL?.startsWith('http') ? signedURL : `${getSupabaseUrl()}/storage/v1${signedURL}`,
  }
}
