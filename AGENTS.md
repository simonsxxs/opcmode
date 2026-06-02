# opcmode 个人品牌站

> 站点：**opcmode.com**（已上线） · 仓库：simonsxxs/opcmode · 主理人：半仙赛蒙
> 最后更新：2026-06-02（v1.1 Redbook MVP 接入）

## 项目一句话

暗色电影感 / 中文 / 高级感的 opcmode 个人品牌站。React SPA，4 路由，Vercel 自动部署；新增小红书图文生成器产品节点。

## 技术栈

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 3**（自定义色板）
- **framer-motion**（动画）
- **lucide-react**（图标）
- **react-router-dom 7**（4 路由）
- **Vercel Functions**（`/api/redbook/*`）
- **Supabase**（Auth / Postgres / Storage）
- **OpenAI API**（文本生成 + GPT Image 图片生成）

**绝对不要**：VitePress / Vue / Next.js（已迁出）。`/docs/` 已删除，不再构建。

## 路由 & 入口

| 路径 | 组件 | 说明 | 线上地址 |
|------|------|------|---------|
| `/` | `<HomePage />` = Hero + About + Features | 主页 | https://opcmode.com/ |
| `/jobs` | `<JobsPage />` | 147 职业图谱（港自旧 Vue） | https://opcmode.com/jobs |
| `/story` | `<StoryPage />` | 我们的故事（玻璃拟态） | https://opcmode.com/story |
| `/redbook` | `<RedbookPage />` | 小红书爆款图文生成器 MVP | https://opcmode.com/redbook |

路由配置在 `src/App.tsx`。

## 共享组件

- `<Navbar />` — 黑胶囊顶部导航（4 页面共用）
- `<ScrollToTop />` — 路由切换时自动滚顶
- `<WordsPullUp />` / `<WordsPullUpMultiStyle />` — 单词上推动画（带 1.6s 兜底）
- `<AnimatedLetter />` — 字符级滚动渐显

## 关键文件

| 改什么 | 改这个 |
|--------|--------|
| Hero 视频/标题/CTA | `src/components/Hero.tsx` |
| About 文案 | `src/components/About.tsx` |
| Features 4 卡片 | `src/components/Features.tsx`（`CARDS` 常量） |
| 顶部菜单项（含首页入口） | `src/components/Navbar.tsx`（`NAV_ITEMS`） |
| Jobs 布局/3 模式 | `src/pages/JobsPage.tsx` |
| Jobs 行业 GDP | `src/data/jobs.ts` |
| 147 职业数据 | `public/ai-jobs/data.json` |
| **Story 故事正文（用户延展）** | `src/pages/StoryPage.tsx` 的 `<section className="story-content">` |
| Redbook 产品工作台 | `src/pages/RedbookPage.tsx` + `src/pages/redbook.css` |
| Redbook API | `api/redbook/*.js` + `api/_lib/*.js` |
| Redbook 数据库 | `supabase/redbook-schema.sql` |
| 卡密生成 | `scripts/redbook-generate-codes.mjs` |
| 主题色 | `tailwind.config.js` |
| 字体加载 | `index.html` |
| Vercel 部署 | `vercel.json`（含 SPA fallback） |

## 命令

```bash
npm install
npm run dev        # :5173
npm run build      # → dist/
npm run preview    # :4173
```

`/api/*` 需要 Vercel Functions；完整联调用 `vercel dev`。普通 `npm run dev` 只跑 Vite 前端。

## Redbook 环境变量

项目现在有服务端环境变量。复制 `.env.example` 为 `.env.local` 后填写；不要提交 `.env.local`。

必需项：`OPENAI_API_KEY`、`SUPABASE_URL`、`SUPABASE_SERVICE_ROLE_KEY`、`VITE_SUPABASE_URL`、`VITE_SUPABASE_ANON_KEY`、`CARD_CODE_PEPPER`。

Supabase 初始化：先在 SQL Editor 执行 `supabase/redbook-schema.sql`。

## 主题色（Tailwind extended）

- `primary` `#DEDBC8` 暖奶白（主文字 / 强调）
- `ink` `#E1E0CC` Hero 巨字
- `about` `#101010` About 卡片
- `feature` `#212121` Features 卡片
- 主页黑底：`#000`
- Story 深海军蓝：`hsl(201 100% 13%)`

## ⚠️ 6 大注意事项

1. **视频是 Higgs.ai 示例素材**（cloudfront CDN），**生产前必须替换**。当前视频常量在 Hero.tsx / StoryPage.tsx / Features.tsx 顶部。
2. **headless 截图极慢**（视频加载），验证都用真实浏览器，别用 puppeteer。
3. **`/jobs` 路由的 link** 在 Features 卡片用 `<Link to="/jobs">`，**别换成 `<a href>`**（会刷新整页）。
4. **Navbar `<Link>` vs `<a>`**：跳转内部路由用 `<Link>`，锚点用 `<a>`。Navbar 内部已分流。
5. **1.6s fallback** 在 WordsPullUp / WordsPullUpMultiStyle 里——别删，否则 headless 永远看不到字。
6. **Jobs 页面 CSS 用了大量绝对定位 / canvas**，改样式前先看 `src/pages/jobs.css` 的注释。原 Vue `AiJobsHome.vue` 已在清理 `/docs/` 时删除（**没保留备份**），改 Jobs 页面前谨慎，必要时回 git 找历史。

## 🚀 部署流程

**已配置 Vercel 自动部署**：

```
本地 main 推送 → GitHub 触发 webhook → Vercel 自动构建 → opcmode.com 更新
```

部署后验证 6 件事：
- [ ] `opcmode.com/` 加载 Hero 视频
- [ ] `opcmode.com/jobs` 加载 147 职业图谱
- [ ] `opcmode.com/story` 加载玻璃拟态 Hero
- [ ] `opcmode.com/redbook` 加载图文生成器工作台
- [ ] `opcmode.com/api/health` 返回 JSON
- [ ] 任意子路由刷新不 404（SPA fallback 生效）

### 部署时 rebase 模式

如果推送时 `git push` 报「non-fast-forward」（远程有新 commit），按这个流程：

```bash
git add -u  # 暂存所有已跟踪文件的修改/删除
git commit --amend --no-edit  # 合并到当前 commit
git pull --rebase origin main  # rebase
# 如果有冲突：保留 React 版本（你的），放弃 VitePress 版本（远程的）
git push origin main
```

**关键冲突解决原则**：**全部以 React 版本为准**（Vercel 配置 / index.html / package.json / 删除的 `docs/`）。

## 用户（半仙赛蒙）当前优先级

1. 🔥 **Redbook 上线配置**：执行 Supabase SQL、配置 OpenAI/Supabase env、生成卡密
2. 🔥 **Story 故事正文**：`src/pages/StoryPage.tsx` 找 `<section className="story-content">`，把占位文案换成自己的故事
3. ⭐ 视频素材替换：自己拍或 Pexels 找
4. ⭐ 补 favicon + og:image
5. 中等：剩余节点（工作坊 / 联系 / 项目 / 文章）

完整维护手册：`MAINTAIN.md`
完整方案档案：`final-plan.md`

## 不要做的事

- 不要重新引入 VitePress / Vue（已迁出）
- 不要用 `<a href="/jobs">`（应用 `<Link to="/jobs">`）
- 不要在 Hero 加额外视频源（一个就够，多了卡）
- 不要在移动端强制横向滚动（PC 端 layout 直接复用会出问题）
- 不要手动改 Vercel dashboard 里的 build command（改 vercel.json 就行）
- 不要提交 `.env.local`、`.env`、卡密 CSV 或任何 secret；只提交 `.env.example`
