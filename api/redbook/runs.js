import { allowMethods, ApiError, readJson, sendJson, withApi } from '../_lib/http.js'
import {
  ensureProfile,
  getCurrentUser,
  listRuns,
  rpc,
  uploadImageBase64,
} from '../_lib/supabase.js'
import { generateImage, generateRedbookOutput } from '../_lib/openai.js'
import { costForAction, normalizeAction, pickImagePrompts } from '../_lib/redbook.js'

async function handleGet(req, res) {
  const user = await getCurrentUser(req)
  const profile = await ensureProfile(user)
  const runs = await listRuns(user.id)
  sendJson(res, 200, { profile, runs })
}

async function createReservedRun(user, action, cost, payload) {
  const result = await rpc('reserve_redbook_run', {
    p_user_id: user.id,
    p_email: user.email,
    p_action: action,
    p_cost: cost,
    p_input: payload,
  })

  if (!result?.ok) {
    throw new ApiError(402, result?.message || '积分不足，请先兑换卡密', result)
  }

  return result
}

async function completeRun(user, runId, output, imageUrls) {
  const result = await rpc('complete_redbook_run', {
    p_user_id: user.id,
    p_run_id: runId,
    p_output: output,
    p_image_urls: imageUrls,
  })
  if (!result?.ok) throw new ApiError(500, result?.message || '生成记录写入失败', result)
  return result
}

async function failRun(user, runId, message) {
  if (!runId) return null
  return rpc('fail_redbook_run', {
    p_user_id: user.id,
    p_run_id: runId,
    p_error: message,
  }).catch(() => null)
}

async function handlePost(req, res) {
  const user = await getCurrentUser(req)
  const body = await readJson(req)
  const action = normalizeAction(body.action)
  const payload = body.payload && typeof body.payload === 'object' ? body.payload : {}
  const cost = costForAction(action)
  let runId = null

  const reserved = await createReservedRun(user, action, cost, payload)
  runId = reserved.run?.id

  try {
    const output = await generateRedbookOutput(action, payload)
    const imageUrls = []

    if (action === 'generate' && process.env.OPENAI_GENERATE_IMAGES !== 'false') {
      const prompts = pickImagePrompts(output, payload)
      for (let i = 0; i < prompts.length; i += 1) {
        const generated = await generateImage(prompts[i])
        const uploaded = await uploadImageBase64({
          userId: user.id,
          runId,
          index: i + 1,
          b64: generated.b64,
          mimeType: generated.mimeType,
        })
        imageUrls.push(uploaded.url)
      }
    }

    const finalOutput = { ...output, image_urls: imageUrls }
    const completed = await completeRun(user, runId, finalOutput, imageUrls)

    sendJson(res, 200, {
      profile: completed.profile,
      run: completed.run,
      output: finalOutput,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : '生成失败'
    await failRun(user, runId, message)
    throw error
  }
}

export default function handler(req, res) {
  return withApi(async () => {
    if (!allowMethods(req, res, ['GET', 'POST'])) return
    if (req.method === 'GET') return handleGet(req, res)
    return handlePost(req, res)
  }, req, res)
}
