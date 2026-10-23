# opcmode 维护手册

> 最后更新：2026-06-02（v1.2 站点巡检与维护队列） · 最近会话：2026-06-01 ~ 06-02

## 📍 站点当前状态

**🟢 v1.0 已上线**：`https://opcmode.com`（Vercel 自动部署）

- ✅ React + Vite + TS + Tailwind 站点跑通
- ✅ 4 路由：`/`（主页）、`/jobs`（147 职业图谱）、`/story`（我们的故事）、`/redbook`（小红书图文生成器）
- ✅ Redbook MVP：Vercel Functions + Supabase + OpenAI API 的产品节点骨架已接入
- ✅ Navbar 共享组件，4 页面顶部一致
- ✅ ScrollToTop，路由切换自动滚顶
- ✅ Hero 视频循环 + poster 兜底
- ✅ 移动端响应式（46 sm: + 39 md: + 5 lg: + 2 xl: + 1 2xl: 断点）
- ✅ 旧 VitePress 资源已从仓库清除

**当前预览**：`http://localhost:4173/`（本地 preview server，已停）

**线上验证清单**：
- [ ] `opcmode.com/` 加载 Hero 视频
- [ ] `opcmode.com/jobs` 加载 147 职业图谱
- [ ] `opcmode.com/story` 加载玻璃拟态 Hero
- [ ] `opcmode.com/redbook` 加载图文生成器工作台
- [ ] `opcmode.com/api/health` 返回 JSON
- [ ] 任意子路由刷新不 404

## 🔎 2026-06-02 站点巡检结论

> 本轮已跑 `npm run build`，构建通过。线上 `GET https://opcmode.com/api/health` 可命中函数，但当前环境变量状态为 `openai=false`、`supabase=false`、`cardPepper=false`。

### P0：先处理会影响真实使用的问题

- [ ] **Redbook 真实链路点亮**：在 Vercel 配好 `OPENAI_API_KEY`、`SUPABASE_URL`、`SUPABASE_SERVICE_ROLE_KEY`、`VITE_SUPABASE_URL`、`VITE_SUPABASE_ANON_KEY`、`CARD_CODE_PEPPER`，直到 `/api/health` 返回三项为 `true`。
- [ ] **补 Supabase 初始化和卡密**：执行 `supabase/redbook-schema.sql`，确认 Auth Email OTP 已开启，生成并导入至少一批卡密。
- [ ] **移除上线占位文案**：`src/pages/StoryPage.tsx` 的 `.story-placeholder` 仍是开发提示，上线前必须替换成真实故事或删除。
- [ ] **修空链接 / 死按钮**：`src/components/Features.tsx` 里“一人公司”指向 `/workflow`，但 `src/App.tsx` 暂无该路由；`Navbar` 的“工作坊 / 联系”还是 `#`；`StoryPage` 的“开启旅程”按钮目前没有动作。
- [ ] **补品牌资源**：`index.html` 引了 `/favicon.svg`，但 `public/` 中没有该文件；同时缺 `og:image` / Open Graph / Twitter card。

### P1：产品转化与用户理解

- [ ] **Redbook 未登录首屏说明**：补“样例输出 / 适合谁用 / 卡密怎么获得 / 积分价格或内测入口”，否则用户只看到工作台但不知道怎么开始。
- [ ] **主页 CTA 分层**：保留“进入 opcmode”的氛围 CTA，同时加一个更具体的动作，如“试用图文生成器”或“查看职业图谱”。
- [ ] **Jobs 视觉轻统一**：职业图谱内容很强，尽量只统一页头、按钮、说明文案和品牌调性，不大改 canvas / treemap。
- [ ] **Redbook 历史图片有效期**：当前 `api/_lib/supabase.js` 存的是 7 天签名 URL，历史记录里的图片未来会过期。建议改成存 storage path，读取历史时重新签名。

### P2：稳定性与观测

- [ ] 给 `Navbar` 加 active 状态，避免用户不知道当前页面。
- [ ] 加 404 / fallback 页面，未知路由不要空白。
- [ ] 给 Redbook 的 icon-only 按钮补 `aria-label` / `title`。
- [ ] 接入轻量 analytics，至少记录：Redbook 登录、兑换、生成、解析失败、生成失败、CTA 点击。
- [ ] Features 视频卡补 poster；生产视频换自有素材后再做一次真实浏览器移动端巡检。

## 🛠️ 开发命令

```bash
npm install          # 装依赖
npm run dev          # 开发，:5173
npm run build        # 生产构建到 dist/
npm run preview      # 预览生产构建，:4173
```

> `/api/*` 需要用 Vercel Functions 运行。完整本地联调用 `vercel dev`，普通 `npm run dev` 只跑 Vite 前端。

## 🔐 Redbook MVP 环境变量

`.env.local` 不要提交。用 `.env.example` 做模板：

```bash
OPENAI_API_KEY=
OPENAI_TEXT_MODEL=gpt-5.2
OPENAI_IMAGE_MODEL=gpt-image-1.5
OPENAI_GENERATE_IMAGES=true
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_IMAGE_BUCKET=redbook-images
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
CARD_CODE_PEPPER=
```

初始化流程：
1. 在 Supabase SQL Editor 执行 `supabase/redbook-schema.sql`
2. 在 Vercel Dashboard 配同名环境变量
3. 本地复制 `.env.example` 为 `.env.local`
4. 生成卡密：

```bash
CARD_CODE_PEPPER="长随机字符串" \
SUPABASE_URL="https://xxx.supabase.co" \
SUPABASE_SERVICE_ROLE_KEY="..." \
node scripts/redbook-generate-codes.mjs --count 20 --credits 100 --label launch-pack --push
```

## 🚀 部署流程

本地 main 推送 → GitHub webhook → Vercel 自动构建 → opcmode.com 更新（1-2 分钟）

```bash
git add <改了的文件>
git commit -m "feat/fix/chore: 描述"
git push origin main
# 然后去 https://vercel.com/dashboard 看部署状态
```

**Rebase 模式**：如果 push 报「non-fast-forward」（远程有新 commit）：

```bash
git add -u  # 暂存所有已跟踪文件的修改/删除
git commit --amend --no-edit  # 合并到当前 commit
git pull --rebase origin main  # rebase
# 冲突时：保留 React 版本（你的），放弃 VitePress 版本（远程的）
git push origin main
```

## 📁 重要文件速查

| 想改什么 | 改这个文件 |
|---------|----------|
| 主页首屏视频 / 标题 / CTA | `src/components/Hero.tsx` |
| 关于文案 / 字符渐显 | `src/components/About.tsx` |
| Features 4 卡片内容 | `src/components/Features.tsx`（看 `CARDS` 常量） |
| 顶部导航菜单项 | `src/components/Navbar.tsx`（看 `NAV_ITEMS`） |
| Jobs 页布局 / 3 模式切换 | `src/pages/JobsPage.tsx` |
| Jobs 行业 GDP 数据 | `src/data/jobs.ts` |
| Jobs 147 职业原始数据 | `public/ai-jobs/data.json` |
| Story Hero 文字 / 视频 | `src/pages/StoryPage.tsx` |
| **Story 故事正文**（用户延展） | `src/pages/StoryPage.tsx` 的 `<section className="story-content">` |
| Redbook 产品工作台 | `src/pages/RedbookPage.tsx` + `src/pages/redbook.css` |
| Redbook API | `api/redbook/*.js` + `api/_lib/*.js` |
| Redbook 数据库 | `supabase/redbook-schema.sql` |
| 卡密批量生成 | `scripts/redbook-generate-codes.mjs` |
| 暗色高级感主题色 | `tailwind.config.js` |
| 字体加载 | `index.html`（Google Fonts） |

## ⏭️ 用户（半仙赛蒙）下一步要做的

### 1. 验证线上版本（最高优先）

打开 https://opcmode.com 四个页面，看效果。如果 Vercel 部署失败或样式不对，看 Vercel dashboard 的构建日志。

### 2. Redbook 上线配置（最高优先）

当前 `/redbook` 已有完整产品工作台和 API 骨架，但线上环境变量还没点亮。上线前检查：

- [ ] Supabase SQL 已执行
- [ ] Supabase Auth Email OTP 已开启
- [ ] `OPENAI_API_KEY` 已在 Vercel 配好
- [ ] `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` 已在 Vercel 配好
- [ ] `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` 已在 Vercel 配好
- [ ] `CARD_CODE_PEPPER` 已在 Vercel 配好
- [ ] 已生成至少一批卡密并导入 `credit_codes`
- [ ] `GET https://opcmode.com/api/health` 返回 `openai/supabase/cardPepper=true`

### 3. Story 故事正文（已上线后必做）

`src/pages/StoryPage.tsx` 找到 `<section className="story-content">`，里面的占位文案是：

> "你好，我是半仙赛蒙，独立创作者 / 一人公司实践者 / AI 工具重度使用者..."

把这段替换成你自己的真实故事。已预留的样式：

- `story-content-title` — 大标题（Instrument Serif）
- `story-content-body` — 正文段落
- `story-quote` — 居中斜体引用
- `story-divider` — 48px 细线分割

想加新段落、图片、列表，直接塞进 `.story-content-inner` 里，主题色自动跟随。改完 `git add . && git commit -m "..." && git push` 自动部署。

### 4. 修死链和占位入口

当前这几个地方要么需要真正路由，要么要先隐藏：

| 位置 | 当前状态 | 建议 |
|------|----------|------|
| `Features.tsx` 一人公司卡片 | `link: "/workflow"`，但暂无 `/workflow` 路由 | 建 `/workflow`，或临时指向 `/story` / `/redbook` |
| `Navbar.tsx` 工作坊 | `to: "#"` | 建 `/workshop`，或移除 |
| `Navbar.tsx` 联系 | `to: "#"` | 建 `/contact`，或改成 mailto / 微信二维码段落 |
| `StoryPage.tsx` 开启旅程 | `<button>` 无动作 | 改 `<a href="#story-content">` 或 `<Link to="/redbook">` |
| 未知路由 | 无 `*` fallback | 增加 404 或 redirect |

### 5. Hero / Features 文案最终定稿

目前是中文 + 品牌化改写版，等你过目后可以微调：

| 位置 | 当前文案 | 文件 |
|------|---------|------|
| Hero 主标 | `opcmode*` | `Hero.tsx` |
| Hero 副标 | "opcmode 是一个记录 AI 时代工作方式与个人创作可能的独立站点..." | `Hero.tsx` |
| Hero CTA | "进入 opcmode" | `Hero.tsx` |
| About 三段 | "我是半仙赛蒙，一个独立创作者。我专注于 AI 工具..." | `About.tsx` |
| About 正文 | "过去三年，我持续追踪 AI 对 147 个职业的重塑..." | `About.tsx` |
| Features 4 卡 | 职业图谱 / 一人公司 / 图文生成器（带 3-4 项 checklist） | `Features.tsx` |
| Navbar 6 项 | 首页 / 我们的故事 / 图文生成器 / 工作坊 / 项目 / 联系 | `Navbar.tsx` |

### 6. Redbook 未登录首屏和产品说明

当前 `/redbook` 已有完整产品工作台和 API 骨架，但用户未登录时还缺少“为什么值得用、怎么开始”的说明。建议补：

- [ ] 一组真实样例输出：标题、正文、标签、封面文案、图片
- [ ] 适合谁用：内容号、起号、图文批量生产、爆款拆解
- [ ] 卡密怎么获得：内测申请、购买入口、微信/邮箱联系
- [ ] 积分说明：每个功能扣多少、一次卡密有多少积分
- [ ] 隐私说明：用户输入、生成历史、图片保存方式

### 7. 真实视频 / poster 替换

当前用 Higgs.ai 示例视频（cloudfront CDN），版权不确定。生产环境建议替换：

| 视频 | 用途 | 建议来源 |
|------|------|---------|
| `HERO_VIDEO`（Hero 主页） | 首屏震撼 | Pexels / Coverr 城市延时 |
| `FEATURES_VIDEO`（Features 卡片 1） | 视频背景 | 同上 |
| `STORY_VIDEO`（Story 视频） | 故事页 Hero | 自行拍摄 / Stock |

替换方法：
1. 视频文件放 `public/`（如 `public/hero-video.mp4`）
2. 改 `HERO_VIDEO` 常量指向 `/hero-video.mp4`
3. 重新抽 poster：`ffmpeg -y -ss 00:00:01 -i public/hero-video.mp4 -vframes 1 -q:v 3 -vf "scale=1920:-1" public/hero-poster.jpg`
4. `git add public/hero-video.mp4 src/components/Hero.tsx && git commit -m "..." && git push`

### 8. Logo / favicon / 社交分享

`public/` 下还没有 favicon.svg / logo。生产前要补：
- favicon（16x16, 32x32, .ico）
- og:image（社交分享用，1200x630）
- `index.html` 中补 Open Graph / Twitter card / canonical

## 🐛 已知小问题

- Headless 截图很慢（视频加载），所以 **headless 验证不可靠**，都用真实浏览器看
- `index.html` 引用 `/favicon.svg`，但 `public/favicon.svg` 暂缺；线上会被 SPA fallback 返回 HTML，不是真图标
- `Features.tsx` 的 `/workflow` 链接暂时没有对应路由
- Navbar 的“工作坊 / 联系”是 `#` 占位链接
- Story 页的“开启旅程”按钮目前无动作，`.story-placeholder` 仍是开发提示
- 线上 `/api/health` 当前能返回 JSON，但 OpenAI / Supabase / Card Pepper 环境变量尚未配置成功
- Jobs 页的"项目"导航现在指向 /jobs，未来如果加 /projects 路由要分开
- Redbook 公开链接解析只做 best-effort，不做登录态 / cookie / 验证码 / 反爬绕过；失败就粘贴标题正文兜底
- Redbook 生成图片当前保存 7 天签名 URL，历史图片可能过期；应存 path 并读取时重新签名
- Navbar 暂无 active 状态（当前页面对应菜单项不变高亮），需要时再改 `Navbar.tsx` 用 `useLocation` 标记

## 📋 TODO（按优先级）

- [x] **P0**：v1.0 部署上线（2026-06-02 完成）
- [ ] **P0**：配置 Redbook 线上环境变量，让 `/api/health` 三项为 true
- [ ] **P0**：执行 Supabase SQL、开启 Email OTP、生成首批卡密
- [ ] **P0**：修 `/workflow` 死链、Navbar `#` 占位、Story 无动作按钮
- [ ] **P0**：用户在 `StoryPage.tsx` 加真实故事正文，删除开发占位提示
- [ ] **P0**：补 favicon.svg + og:image，避免品牌资源缺失
- [ ] **P1**：用户过目 3 段文案，必要处微调
- [ ] **P1**：替换 3 段视频为自有素材（Hero / Features / Story）
- [ ] **P1**：Redbook 未登录首屏补样例输出、卡密获取方式、积分说明
- [ ] **P2**：Navbar active 状态（`useLocation`）
- [ ] **P2**：未知路由 404 / fallback 页面
- [ ] **P2**：Redbook 历史图片改为 path + 读取时重新签名
- [ ] **P2**：剩余节点（创作集 / 工作坊 / 联系 / 项目 / 文章）路由搭建
- [ ] **P2**：Redbook 管理后台 / 第三方支付 / 发卡平台 webhook
- [ ] **P3**：英文版（未来出海用）

## 🔧 调试技巧

- 视频加载慢 → 浏览器 DevTools Network 看 cloudfront 响应头
- 字体没加载 → 浏览器 DevTools Network 看 fonts.googleapis.com 是否 200
- 路由 404 → 检查 `vercel.json` 的 `rewrites` 是否还在
- 动画卡 → 可能是 framer-motion 太多 `<motion.span>` 嵌套，考虑用 CSS 替代
- Redbook 不能登录 / 生成 → 先看 `GET /api/health`，再看 Vercel 环境变量是否部署到 Production
- favicon 不显示 → 确认 `public/favicon.svg` 存在，且线上 `https://opcmode.com/favicon.svg` 的 `Content-Type` 不是 `text/html`

## 🗑️ 旧资源

`/docs/` 下的 VitePress 资产**已在 2026-06-02 v1.0 部署时全部删除**。git 历史里还能找回来，但工作树里已经清空：

```bash
# 想找回旧 Vue 代码：
git log --all --full-history -- "docs/.vitepress/theme/AiJobsHome.vue"
git show <commit>^:docs/.vitepress/theme/AiJobsHome.vue  # 恢复到文件
```
