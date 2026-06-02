import { ApiError, requireEnv } from './http.js'
import { buildPrompt, normalizeRunOutput } from './redbook.js'

const OPENAI_BASE_URL = 'https://api.openai.com/v1'

function getTextModel() {
  return process.env.OPENAI_TEXT_MODEL || 'gpt-5.2'
}

function getImageModel() {
  return process.env.OPENAI_IMAGE_MODEL || 'gpt-image-1.5'
}

function assertOpenAIReady() {
  requireEnv(['OPENAI_API_KEY'])
}

async function openAIJson(path, payload) {
  assertOpenAIReady()
  const response = await fetch(`${OPENAI_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
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
    const message = data?.error?.message || data?.message || `OpenAI HTTP ${response.status}`
    throw new ApiError(response.status, message, data)
  }

  return data
}

function extractText(response) {
  if (typeof response?.output_text === 'string') return response.output_text

  const parts = []
  for (const item of response?.output || []) {
    for (const content of item?.content || []) {
      if (typeof content?.text === 'string') parts.push(content.text)
      if (typeof content?.output_text === 'string') parts.push(content.output_text)
    }
  }
  return parts.join('\n')
}

function parseJsonObject(text) {
  if (!text) throw new ApiError(502, 'OpenAI 没有返回可解析文本')
  try {
    return JSON.parse(text)
  } catch {
    const match = text.match(/\{[\s\S]*\}/)
    if (!match) throw new ApiError(502, 'OpenAI 返回不是 JSON')
    return JSON.parse(match[0])
  }
}

export async function generateRedbookOutput(action, payload) {
  const response = await openAIJson('/responses', {
    model: getTextModel(),
    input: buildPrompt(action, payload),
    max_output_tokens: 3200,
  })

  const parsed = parseJsonObject(extractText(response))
  return normalizeRunOutput(parsed, action, payload)
}

export async function generateImage(prompt) {
  const response = await openAIJson('/images/generations', {
    model: getImageModel(),
    prompt,
    size: '1024x1536',
    quality: 'medium',
    output_format: 'webp',
    n: 1,
  })

  const first = response?.data?.[0]
  if (!first?.b64_json) throw new ApiError(502, '图片模型没有返回图片')

  return {
    b64: first.b64_json,
    mimeType: 'image/webp',
    revisedPrompt: first.revised_prompt || prompt,
  }
}
