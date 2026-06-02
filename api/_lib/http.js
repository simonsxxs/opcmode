export class ApiError extends Error {
  constructor(status, message, details = undefined) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }
}

export function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

export function setNoStore(res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')
}

export function allowMethods(req, res, methods) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', methods.join(', '))
    sendJson(res, 204, {})
    return false
  }

  if (!methods.includes(req.method)) {
    res.setHeader('Allow', methods.join(', '))
    sendJson(res, 405, { error: 'method_not_allowed', message: '请求方法不支持' })
    return false
  }

  return true
}

export async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}')

  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

export function requireEnv(names) {
  const missing = names.filter((name) => !process.env[name])
  if (missing.length) {
    throw new ApiError(503, `服务端缺少环境变量：${missing.join(', ')}`, {
      missing,
    })
  }
}

export async function withApi(handler, req, res) {
  try {
    setNoStore(res)
    await handler(req, res)
  } catch (error) {
    const status = error instanceof ApiError ? error.status : 500
    const message = error instanceof Error ? error.message : '服务器内部错误'
    sendJson(res, status, {
      error: error?.name || 'server_error',
      message,
      details: error instanceof ApiError ? error.details : undefined,
    })
  }
}
