# opcmode 个人品牌站

> 站点：opcmode.com · 仓库：simonsxxs/opcmode · 主理人：半仙赛蒙

记录 AI 时代的工作方式与个人创作可能的独立站点。暗色电影感 / 高级感 / 中文。

## 技术栈

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 3**（自定义色板 + 字体 + 噪点工具类）
- **framer-motion**（动画：上推、字符渐显、卡片入场）
- **lucide-react**（图标）
- **react-router-dom 7**（/、/jobs、/story、/redbook 四路由）
- **Vercel Functions**（/api/redbook/* 产品接口）
- **Supabase**（Auth / Postgres / Storage，用于登录、积分、卡密、生成历史）
- **OpenAI API**（文本生成 + GPT Image 图片生成）

> ⚠️ **已从 VitePress 完全迁出**。`/docs/` 已删除，不再构建。

## 当前维护重点（2026-06-02）

- **Redbook 真实链路**：线上 `/api/health` 已能命中函数，但 OpenAI / Supabase / `CARD_CODE_PEPPER` 环境变量仍需在 Vercel Production 配好。
- **上线占位清理**：`/workflow` 暂无路由，Navbar 的“工作坊 / 联系”仍是 `#`，Story 页还有开发占位提示和无动作按钮。
- **品牌资源**：`index.html` 已引用 `/favicon.svg`，但 `public/favicon.svg` 暂缺；同时建议补 `og:image` 和 Open Graph meta。
- **Redbook 产品说明**：未登录首屏建议补样例输出、积分说明、卡密获取方式，降低首次使用门槛。

完整维护队列见 [`MAINTAIN.md`](./MAINTAIN.md)。

## 快速开始

```bash
npm install
npm run dev        # 开发：http://localhost:5173
npm run build      # 生产构建到 dist/
npm run preview    # 预览：http://localhost:4173
```

## 目录结构

```
opcmode/
├── src/
│   ├── main.tsx                          # React 入口
│   ├── App.tsx                           # BrowserRouter + 4 路由
│   ├── index.css                         # Tailwind + .noise-overlay / .bg-noise
│   ├── components/
│   │   ├── Navbar.tsx                    # 共享顶部导航（黑胶囊）
│   │   ├── ScrollToTop.tsx               # 路由切换时滚顶
│   │   ├── Hero.tsx                      # 主页首屏（视频 + opcmode 大字 + CTA）
│   │   ├── About.tsx                     # 主页关于段（中文三段标题 + 字符渐显）
│   │   ├── Features.tsx                  # 主页 4 卡片（视频 + 职业图谱/一人公司/图文生成器）
│   │   ├── WordsPullUp.tsx               # 单词上推 + 上标 *
│   │   ├── WordsPullUpMultiStyle.tsx     # 多样式段上推
│   │   └── AnimatedLetter.tsx            # 字符级滚动渐显
│   ├── pages/
│   │   ├── JobsPage.tsx                  # 147 职业图谱（港自 Vue）
│   │   ├── jobs.css                      # Jobs 主题样式
│   │   ├── StoryPage.tsx                 # 我们的故事（玻璃拟态 + 中文 Hero）
│   │   ├── story.css                     # Story 主题样式（深海军蓝 + Liquid Glass）
│   │   ├── RedbookPage.tsx               # 小红书爆款图文生成器工作台
│   │   └── redbook.css                   # Redbook 产品工作台样式
│   └── data/
│       └── jobs.ts                       # INDUSTRY_GDP + Job 类型
│
├── public/
│   ├── ai-jobs/data.json                 # 147 职业数据（从旧 VitePress 复制）
│   ├── hero-poster.jpg                   # 主页视频首帧
│   └── story-poster.jpg                  # 故事页视频首帧
│
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── vercel.json                           # SPA fallback + API function duration
├── api/redbook/                          # Vercel Functions：生成、拆解、卡密、抓取
├── supabase/redbook-schema.sql           # Supabase 初始化 SQL
├── scripts/redbook-generate-codes.mjs    # 卡密批量生成脚本
└── README.md
```

## 路由

| 路径 | 页面 | 描述 |
|------|------|------|
| `/` | HomePage | Hero + About + Features |
| `/jobs` | JobsPage | 147 职业图谱（可交互 treemap） |
| `/story` | StoryPage | 我们的故事（全屏视频 + 玻璃拟态） |
| `/redbook` | RedbookPage | 小红书爆款图文生成器 MVP |

## Redbook MVP 配置

1. 在 Supabase SQL Editor 执行 `supabase/redbook-schema.sql`。
2. 复制 `.env.example` 为 `.env.local`，填写 OpenAI / Supabase / `CARD_CODE_PEPPER`。
3. 在 Vercel Dashboard 配置同名环境变量；不要提交 `.env.local`。
4. 生成卡密：

```bash
CARD_CODE_PEPPER="你的长随机字符串" \
SUPABASE_URL="https://xxx.supabase.co" \
SUPABASE_SERVICE_ROLE_KEY="..." \
node scripts/redbook-generate-codes.mjs --count 20 --credits 100 --label launch-pack --push
```

API 路由：
- `GET /api/health`
- `GET|POST /api/redbook/runs`
- `POST /api/redbook/redeem`
- `POST /api/redbook/scrape`

健康检查：

```bash
curl https://opcmode.com/api/health
```

返回里的 `openai`、`supabase`、`cardPepper` 都为 `true` 时，Redbook 真实生成 / 登录 / 卡密链路才算点亮。

## 主题色

| 变量 | 值 | 用途 |
|------|----|------|
| `primary` | `#DEDBC8` | 暖奶白，主文字 + 强调 |
| `ink` | `#E1E0CC` | Hero 巨字色（与 primary 微差） |
| `about` | `#101010` | About 卡片背景 |
| `feature` | `#212121` | Features 卡片背景 |
| 主品牌 | `#10b981` | Jobs 页面 accent / GitHub 风格绿 |

## 部署

推 GitHub → Vercel 自动构建。

- buildCommand: `npm run build`
- outputDirectory: `dist`
- SPA fallback 由 `vercel.json` 的 `rewrites` 兜底
- API functions 由 `api/` 目录提供，`/api/*` 不会走 SPA fallback

部署后至少检查：

- `/`、`/jobs`、`/story`、`/redbook` 四个路由可刷新
- `/api/health` 返回 JSON
- favicon / 社交分享图不返回 HTML fallback
- Navbar 没有长期保留的 `#` 占位入口

## License

MIT

---

## 作者

**simon**，一个不懂代码的AI极客

- 微信交流群：simonsxxs
- GitHub：https://github.com/simonsxxs
- Gitee：https://gitee.com/simonsxx
