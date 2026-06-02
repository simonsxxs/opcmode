import { ApiError } from './http.js'

export const ACTION_COSTS = {
  generate: 12,
  deconstruct: 3,
  imitate: 6,
  profile_advice: 5,
  growth_plan: 5,
}

export const ACTION_LABELS = {
  generate: '图文生成',
  deconstruct: '爆款拆解',
  imitate: '复刻生成',
  profile_advice: '主页诊断',
  growth_plan: '起号路线',
}

export function normalizeAction(action) {
  if (!ACTION_COSTS[action]) throw new ApiError(400, '未知任务类型')
  return action
}

export function costForAction(action) {
  return ACTION_COSTS[normalizeAction(action)]
}

export function normalizeImageCount(value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return 3
  return Math.max(0, Math.min(3, Math.round(n)))
}

export function normalizeRunOutput(raw, action, payload = {}) {
  const fallbackTitle = payload.topic || payload.sourceTitle || '一篇值得收藏的小红书笔记'
  const output = raw && typeof raw === 'object' ? raw : {}

  const titles = Array.isArray(output.titles) && output.titles.length
    ? output.titles.map(String).slice(0, 8)
    : [
        `${fallbackTitle}，我建议你这样做`,
        `别再低效刷 AI 工具了，先看这个方法`,
        `普通人做内容，最该复制的是这套结构`,
      ]

  const tags = Array.isArray(output.tags)
    ? output.tags.map((tag) => String(tag).replace(/^#/, '')).filter(Boolean).slice(0, 12)
    : ['小红书运营', 'AI工具', '一人公司']

  const imagePrompts = Array.isArray(output.image_prompts)
    ? output.image_prompts.map(String).filter(Boolean).slice(0, 3)
    : []

  return {
    summary: String(output.summary || `${ACTION_LABELS[action]}已完成。`),
    titles,
    body: String(output.body || ''),
    tags,
    cover_text: String(output.cover_text || titles[0] || fallbackTitle),
    image_prompts: imagePrompts,
    deconstruction: output.deconstruction || null,
    profile_advice: Array.isArray(output.profile_advice) ? output.profile_advice.map(String) : [],
    growth_plan: Array.isArray(output.growth_plan) ? output.growth_plan.map(String) : [],
    notes: Array.isArray(output.notes) ? output.notes.map(String) : [],
  }
}

export function buildPrompt(action, payload) {
  const sharedRules = [
    '你是小红书中文图文内容增长顾问，擅长爆款结构拆解、标题钩子、封面文案、账号定位和一人公司内容转化。',
    '不要输出违法、医疗诊断、金融承诺、平台刷量、诱导违规交易或侵犯他人权益的建议。',
    '保持中文表达，风格高级、具体、可执行，避免空泛鸡汤。',
    '只输出一个 JSON 对象，不要 Markdown，不要代码块。',
  ].join('\n')

  const expectedShape = {
    summary: '一句话说明本次结果',
    titles: ['6-8 个小红书标题候选'],
    body: '可直接编辑发布的正文，包含分段、钩子、方法和收束',
    tags: ['8-12 个标签，不带 # 也可以'],
    cover_text: '适合放在封面上的短句，12 个中文字以内优先',
    image_prompts: ['1-3 个竖版小红书图片生成提示词，适合 1024x1536'],
    deconstruction: {
      hook: '原文或策略中的核心钩子',
      structure: ['结构步骤'],
      emotion_triggers: ['情绪触发点'],
      conversion_triggers: ['转化触发点'],
      reusable_formula: ['可复用公式'],
    },
    profile_advice: ['主页个性化建议'],
    growth_plan: ['起号路线步骤'],
    notes: ['限制、风险、使用提醒'],
  }

  const actionBrief = {
    generate: '根据输入，生成一篇完整小红书图文作品，重点是标题、正文、标签、封面文案和图片提示词。',
    deconstruct: '拆解用户提供的小红书爆款内容，提炼可复用结构、钩子、情绪价值和转化机制。',
    imitate: '保留参考爆款的结构和节奏，但换成用户的新选题，生成一篇不抄原文的复刻稿。',
    profile_advice: '基于主页链接、主页描述或用户粘贴的信息，给出账号定位、主页包装、内容栏目和转化建议。',
    growth_plan: '基于用户目标，设计 30 天起号路线，包括内容栏目、发布节奏、选题池和转化节点。',
  }[action]

  return [
    sharedRules,
    `当前任务：${actionBrief}`,
    `必须按这个 JSON 形状输出：${JSON.stringify(expectedShape, null, 2)}`,
    `用户输入：${JSON.stringify(payload, null, 2)}`,
  ].join('\n\n')
}

export function pickImagePrompts(output, payload) {
  const desired = normalizeImageCount(payload.imageCount)
  if (desired <= 0) return []

  const prompts = output.image_prompts?.length
    ? output.image_prompts
    : [
        `小红书竖版封面，主题：${payload.topic || output.cover_text}。${payload.visualStyle || ''}`,
        `小红书图文配图，展示方法步骤和关键概念，主题：${payload.topic || output.summary}。${payload.visualStyle || ''}`,
        `小红书图文配图，适合收藏的知识卡片，主题：${payload.topic || output.summary}。${payload.visualStyle || ''}`,
      ]

  return prompts.slice(0, desired).map((prompt, index) => {
    const role = index === 0 ? '封面图' : `第 ${index} 张配图`
    return `${role}。${prompt}。画面必须为小红书竖版 1024x1536，可读性强，避免真实平台 logo，避免仿冒特定品牌。`
  })
}
