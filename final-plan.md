# opcmode 个人品牌站 最终方案

> 站点：opcmode.com（已上线）
> 主理人：半仙赛蒙
> 制定日期：2026-06-01
> **最近更新：2026-06-02**（v1.2 Redbook 接入与站点巡检）

---

## ⚠️ 重大转向记录

**2026-06-01 晚**：从"晨光光尘"暖色方向切换为 **Prisma 风格暗色电影感**。技术栈从 **VitePress 完全迁出**，改为 **React + Vite + TypeScript + Tailwind CSS**。参考站点 Prisma 的设计被 1:1 复刻（Hero + About + Features），文字全中文化适配 opcmode 品牌。

**2026-06-02**：v1.0 部署上线。删除 `/docs/` 旧 VitePress 资源，仓库变为纯 React 项目。Vercel 自动部署已通。

**2026-06-02 后续**：接入 Redbook 小红书图文生成器 MVP，新增 `/redbook` 路由和 `/api/redbook/*` Vercel Functions。站点巡检后确认：Redbook 线上环境变量待配置，Story 页仍有开发占位，`/workflow` / Navbar 占位入口 / favicon / og:image 需要优先处理。

详见 `MAINTAIN.md` 当前状态 + TODO。

---

## 品牌定位

| 元素 | 定位 |
|------|------|
| 主品牌 | **opcmode**（站点 / 域名） |
| 主理人 | **半仙赛蒙**（创作者 / 真人 IP） |
| 内容支柱 | AI × 职业洞察 / 一人公司 / AI 工具实战 |
| 调性 | 专业 / 温柔 / 可信（阮一峰、混瀑布气质） |
| 视觉 | Prisma 复刻 · 暗色电影感 · 暖奶白主色 |

---

## 站点结构（首期 4 个节点，已上线）

| 路由 | 节点 | 说明 | 状态 |
|------|------|------|------|
| `/` | 主页 | Hero + About + Features 三段，Prisma 复刻 | 🟢 线上 |
| `/jobs` | 147 职业分析 | 港自 AiJobsHome.vue，三模式 treemap | 🟢 线上 |
| `/story` | 我们的故事 | 玻璃拟态 + 中文 Hero（待用户加故事正文） | 🟢 线上（待补内容） |
| `/redbook` | 小红书图文生成器 | 图文生成、爆款拆解、复刻、主页诊断、起号路线 | 🟡 页面已上线，env 待配置 |
| `/blog` | 文章 | 随笔、思考、行业观察 | ⏳ 待建 |
| `/projects` | 项目 / 作品集 | 产品、代码、实验 | ⏳ 待建 |
| `/newsletter` | Newsletter 订阅 | Buttondown 嵌入 | ⏳ 待建 |
| `/workflow` | 一人公司工作流 | 方法论 + 工具链；当前 Features 卡片已指向这里但路由未建 | 🔴 死链待修 |
| `/prompts` | 提示词库 | AI 提示词集合 | ⏳ 待建 |

---

## 视觉系统（2026-06-02 更新）

| 维度 | 选型 |
|------|------|
| 标题字体（主页 Hero） | Almarai（300/400/700/800），硬朗现代感 |
| 衬线强调（中文） | Noto Serif SC（备用） |
| 衬线强调（Story 页） | Instrument Serif（标题） |
| 正文（Story 页） | Inter（400/500） |
| 数据数字 | JetBrains Mono |
| 主色 | 暖奶白 `#DEDBC8`（文字 / 强调） |
| 辅色 | `#E1E0CC`（Hero 巨字） |
| 强调 | `#10b981`（绿色，仅 Jobs 页） |
| 主页背景 | `#000` 黑 |
| Jobs 页背景 | 顶部深绿径向 + 下半 `#f3f5f7` 浅灰（继承自原 Vue） |
| Story 页背景 | `hsl(201 100% 13%)` 深海军蓝 |
| 视频 | cloudfront 4K（Higgs.ai 示例素材，**生产前需替换**） |

---

## 实施分阶段（2026-06-02 实际进度）

### Phase 1：技术栈迁移 ✅ 完成
- 从 VitePress 迁出，全栈换成 React + Vite + TS + Tailwind
- 保留 VitePress 资源（`/docs/`）作历史参考

### Phase 2：主页（Hero + About + Features）✅ 完成
- 严格按 Prisma 规范复刻
- 中文化 + opcmode 品牌化
- 含 WordsPullUp / WordsPullUpMultiStyle / AnimatedLetter 三个动画组件
- 1.6s fallback 防止 IntersectionObserver 失效

### Phase 3：Jobs 页面 ✅ 完成
- 1543 行 Vue (`AiJobsHome.vue`) 港成 React 单文件
- 三模式 treemap、tooltip、histogram、tier、pay/edu hbar 全保留
- 数据从 `/ai-jobs/data.json` 拉

### Phase 4：Story 页面 ✅ 完成（框架）
- 玻璃拟态 + Liquid Glass + Instrument Serif
- 中文 hero + 用户延展占位
- 故事正文待用户填写

### Phase 5：共享组件 + 路由 ✅ 完成
- Navbar 共享组件，4 页面顶部统一
- ScrollToTop，路由切换自动滚顶
- React Router 4 路由 + Vercel SPA fallback

### Phase 6：移动端优化 ✅ 完成
- 视频 poster 兜底
- 字号偏小优化（text-xs → text-sm）
- Jobs 侧栏移动端紧凑化

### Phase 7：素材替换 ⏳ 待用户
- 把 Higgs.ai 示例视频换成自有素材
- 补 favicon + og:image

### Phase 8：Redbook MVP 🟡 框架完成，配置待办
- `/redbook` 工作台已接入
- `/api/redbook/runs`、`/redeem`、`/scrape`、`/api/health` 已接入
- Supabase schema 与卡密生成脚本已接入
- 线上 OpenAI / Supabase / Card Pepper env 待配置
- 未登录首屏还需补样例输出、卡密获取方式、积分说明

### Phase 9：剩余节点 ⏳ 待建
- /blog, /projects, /newsletter, /workflow, /prompts

### Phase 10：v1.0 部署上线 ✅ 完成（2026-06-02）
- 推送 main 到 GitHub → Vercel 自动构建
- 解决 rebase 冲突 5 个（全部以 React 版本为准）
- 删除 `/docs/` 下旧 VitePress 1300+ 文件
- 新 commit `579c133` 推上 `main`
- 线上：https://opcmode.com

### Phase 11：v1.2 巡检维护队列 🟡 待处理
- P0：配置 Redbook 线上 env，直到 `/api/health` 三项为 `true`
- P0：修 `/workflow` 死链、Navbar `#` 占位、Story 无动作按钮
- P0：替换 Story 开发占位文案
- P0：补 `public/favicon.svg`、`og:image`、Open Graph / Twitter card
- P1：Jobs 页轻量统一品牌视觉，不大改 canvas
- P1：Redbook 历史图片由签名 URL 改为 storage path + 读取时重新签名
