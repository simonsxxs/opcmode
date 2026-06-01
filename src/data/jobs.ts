// 147 职业数据 + GDP 行业常量
// 复制自 docs/public/ai-jobs/data.json 与 AiJobsHome.vue 的 INDUSTRY_GDP

export interface Job {
  name: string
  category: string
  industry: string
  employment: number
  salary: number
  education: string
  growth: string
  ai_score: number
  rationale: string
}

// 各行业 GDP 贡献（亿元）
export const INDUSTRY_GDP: Record<string, number> = {
  '农林牧渔业': 94463,
  '采矿业': 28000,
  '制造业': 330028,
  '电力热力燃气及水生产和供应业': 41075,
  '建筑业': 85691,
  '批发和零售业': 123072,
  '交通运输仓储和邮政业': 57820,
  '住宿和餐饮业': 21024,
  '信息传输软件和信息技术服务业': 55194,
  '金融业': 100677,
  '房地产业': 73723,
  '租赁和商务服务业': 44347,
  '科学研究和技术服务业': 37000,
  '水利环境和公共设施管理业': 9000,
  '居民服务修理和其他服务业': 22000,
  '教育': 42000,
  '卫生和社会工作': 30000,
  '文化体育和娱乐业': 14000,
  '公共管理社会保障和社会组织': 51469,
}

export type Mode = 'employment' | 'wages' | 'gdp'
