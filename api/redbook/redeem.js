import crypto from 'node:crypto'
import { allowMethods, ApiError, readJson, requireEnv, sendJson, withApi } from '../_lib/http.js'
import { getCurrentUser, rpc } from '../_lib/supabase.js'

function normalizeCode(code) {
  return String(code || '')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '')
}

function codeHash(code) {
  requireEnv(['CARD_CODE_PEPPER'])
  return crypto
    .createHash('sha256')
    .update(`${normalizeCode(code)}:${process.env.CARD_CODE_PEPPER}`)
    .digest('hex')
}

async function handlePost(req, res) {
  const user = await getCurrentUser(req)
  const body = await readJson(req)
  const code = normalizeCode(body.code)
  if (!code) throw new ApiError(400, '请输入卡密')

  const result = await rpc('redeem_redbook_code', {
    p_user_id: user.id,
    p_email: user.email,
    p_code_hash: codeHash(code),
  })

  if (!result?.ok) throw new ApiError(400, result?.message || '卡密无效', result)

  sendJson(res, 200, {
    message: result.message || `已兑换 ${result.added} 积分`,
    added: result.added,
    credits: result.credits,
  })
}

export default function handler(req, res) {
  return withApi(async () => {
    if (!allowMethods(req, res, ['POST'])) return
    return handlePost(req, res)
  }, req, res)
}
