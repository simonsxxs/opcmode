# AI+一人公司教程

基于 VitePress + Obsidian 构建的文档网站。

## 项目结构

```
opcmode/
├── docs/                          ← Obsidian 打开这个文件夹
│   ├── .vitepress/               ← VitePress 配置（勿动）
│   │   ├── config.js            ← 站点配置
│   │   └── theme/
│   │       ├── custom.css       ← 自定义样式
│   │       └── index.js         ← 主题入口
│   │
│   ├── 1-start/                  ← 第一章：起步
│   ├── 2-daily/                  ← 第二章：日常使用
│   ├── 3-workflow/               ← 第三章：工作流
│   ├── 4-scenarios/              ← 第四章：场景实战
│   ├── 5-advanced/               ← 第五章：进阶
│   ├── appendix/                 ← 附录
│   ├── public/images/            ← 图片资源
│   └── index.md                  ← 首页
│
├── package.json                  ← 依赖配置
└── OBSIDIAN-GUIDE.md            ← Obsidian 使用指南
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地预览

```bash
npm run docs:dev
```

访问 http://localhost:5173

### 3. 构建

```bash
npm run docs:build
```

输出到 `docs/.vitepress/dist/`

### 4. 部署

```bash
git add .
git commit -m "update: 更新内容"
git push
```

Vercel 自动部署。

## Obsidian 写作

详见 [OBSIDIAN-GUIDE.md](./OBSIDIAN-GUIDE.md)

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [Obsidian](https://obsidian.md/) - Markdown 编辑器

## 许可证

MIT
