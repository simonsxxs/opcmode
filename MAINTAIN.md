# opcmode 维护手册

> 最后更新：2026-06-02（v1.0 已部署上线） · 最近会话：2026-06-01 ~ 06-02

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

### 2. Story 故事正文（已上线后必做）

`src/pages/StoryPage.tsx` 找到 `<section className="story-content">`，里面的占位文案是：

> "你好，我是半仙赛蒙，独立创作者 / 一人公司实践者 / AI 工具重度使用者..."

把这段替换成你自己的真实故事。已预留的样式：

- `story-content-title` — 大标题（Instrument Serif）
- `story-content-body` — 正文段落
- `story-quote` — 居中斜体引用
- `story-divider` — 48px 细线分割

想加新段落、图片、列表，直接塞进 `.story-content-inner` 里，主题色自动跟随。改完 `git add . && git commit -m "..." && git push` 自动部署。

### 3. Hero / Features 文案最终定稿

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

### 4. Redbook 图文生成器上线前配置

当前 `/redbook` 已有完整产品工作台和 API 骨架，但真实生成依赖你手动配置 OpenAI / Supabase 环境变量。上线前检查：

- [ ] Supabase SQL 已执行
- [ ] Supabase Auth Email OTP 已开启
- [ ] `OPENAI_API_KEY` 已在 Vercel 配好
- [ ] `CARD_CODE_PEPPER` 已在 Vercel 配好
- [ ] 已生成至少一批卡密并导入 `credit_codes`
- [ ] `/api/health` 返回 `openai/supabase/cardPepper=true`

### 5. 真实视频 / poster 替换

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

### 6. Logo / favicon

`public/` 下还没有 favicon.svg / logo。生产前要补：
- favicon（16x16, 32x32, .ico）
- og:image（社交分享用，1200x630）

## 🐛 已知小问题

- Headless 截图很慢（视频加载），所以 **headless 验证不可靠**，都用真实浏览器看
- Jobs 页的"项目"导航现在指向 /jobs，未来如果加 /projects 路由要分开
- Redbook 公开链接解析只做 best-effort，不做登录态 / cookie / 验证码 / 反爬绕过；失败就粘贴标题正文兜底
- Navbar 暂无 active 状态（当前页面对应菜单项不变高亮），需要时再改 `Navbar.tsx` 用 `useLocation` 标记
- Story 页的"Begin Journey"按钮目前没链，可以连到 `/` 或 `#` 占位

## 📋 TODO（按优先级）

- [x] **P0**：v1.0 部署上线（2026-06-02 完成）
- [ ] **P0**：用户在 `StoryPage.tsx` 加真实故事正文
- [ ] **P0**：用户过目 3 段文案，必要处微调
- [ ] **P1**：替换 3 段视频为自有素材（Hero / Features / Story）
- [ ] **P1**：补 favicon + og:image
- [ ] **P2**：Navbar active 状态（`useLocation`）
- [ ] **P2**：剩余节点（创作集 / 工作坊 / 联系 / 项目 / 文章）路由搭建
- [ ] **P2**：Redbook 管理后台 / 第三方支付 / 发卡平台 webhook
- [ ] **P3**：英文版（未来出海用）

## 🔧 调试技巧

- 视频加载慢 → 浏览器 DevTools Network 看 cloudfront 响应头
- 字体没加载 → 浏览器 DevTools Network 看 fonts.googleapis.com 是否 200
- 路由 404 → 检查 `vercel.json` 的 `rewrites` 是否还在
- 动画卡 → 可能是 framer-motion 太多 `<motion.span>` 嵌套，考虑用 CSS 替代

## 🗑️ 旧资源

`/docs/` 下的 VitePress 资产**已在 2026-06-02 v1.0 部署时全部删除**。git 历史里还能找回来，但工作树里已经清空：

```bash
# 想找回旧 Vue 代码：
git log --all --full-history -- "docs/.vitepress/theme/AiJobsHome.vue"
git show <commit>^:docs/.vitepress/theme/AiJobsHome.vue  # 恢复到文件
```
