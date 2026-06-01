# opcmode 个人品牌站

> 站点：opcmode.com · 仓库：simonsxxs/opcmode · 主理人：半仙赛蒙

记录 AI 时代的工作方式与个人创作可能的独立站点。暗色电影感 / 高级感 / 中文。

## 技术栈

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 3**（自定义色板 + 字体 + 噪点工具类）
- **framer-motion**（动画：上推、字符渐显、卡片入场）
- **lucide-react**（图标）
- **react-router-dom 7**（/ 和 /jobs 和 /story 三路由）

> ⚠️ **已从 VitePress 完全迁出**。`/docs/` 下的旧 VitePress 资源保留作参考，不再构建。

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
│   ├── App.tsx                           # BrowserRouter + 3 路由
│   ├── index.css                         # Tailwind + .noise-overlay / .bg-noise
│   ├── components/
│   │   ├── Navbar.tsx                    # 共享顶部导航（黑胶囊）
│   │   ├── ScrollToTop.tsx               # 路由切换时滚顶
│   │   ├── Hero.tsx                      # 主页首屏（视频 + opcmode 大字 + CTA）
│   │   ├── About.tsx                     # 主页关于段（中文三段标题 + 字符渐显）
│   │   ├── Features.tsx                  # 主页 4 卡片（视频 + 职业图谱/一人公司/提示词库）
│   │   ├── WordsPullUp.tsx               # 单词上推 + 上标 *
│   │   ├── WordsPullUpMultiStyle.tsx     # 多样式段上推
│   │   └── AnimatedLetter.tsx            # 字符级滚动渐显
│   ├── pages/
│   │   ├── JobsPage.tsx                  # 147 职业图谱（港自 Vue）
│   │   ├── jobs.css                      # Jobs 主题样式
│   │   ├── StoryPage.tsx                 # 我们的故事（玻璃拟态 + 中文 Hero）
│   │   └── story.css                     # Story 主题样式（深海军蓝 + Liquid Glass）
│   └── data/
│       └── jobs.ts                       # INDUSTRY_GDP + Job 类型
│
├── public/
│   ├── ai-jobs/data.json                 # 147 职业数据（从旧 VitePress 复制）
│   ├── hero-poster.jpg                   # 主页视频首帧
│   └── story-poster.jpg                  # 故事页视频首帧
│
├── docs/                                 # 旧 VitePress 资源（保留，不构建）
│   ├── .omc/                             # 头脑风暴档案
│   └── .vitepress/theme/AiJobsHome.vue   # 已港到 React，留作参考
│
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── vercel.json                           # SPA fallback
└── README.md
```

## 路由

| 路径 | 页面 | 描述 |
|------|------|------|
| `/` | HomePage | Hero + About + Features |
| `/jobs` | JobsPage | 147 职业图谱（可交互 treemap） |
| `/story` | StoryPage | 我们的故事（全屏视频 + 玻璃拟态） |

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

## License

MIT
