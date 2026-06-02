import { allowMethods, sendJson, withApi } from './_lib/http.js'

export default function handler(req, res) {
  return withApi(async () => {
    if (!allowMethods(req, res, ['GET'])) return
    sendJson(res, 200, {
      ok: true,
      service: 'opcmode-redbook',
      env: {
        openai: Boolean(process.env.OPENAI_API_KEY),
        supabase: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
        cardPepper: Boolean(process.env.CARD_CODE_PEPPER),
      },
    })
  }, req, res)
}
