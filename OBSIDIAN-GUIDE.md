# Obsidian 使用指南

本文档说明如何使用 Obsidian 编辑网站内容。

## 项目结构

```
docs/                          ← 用 Obsidian 打开这个文件夹
├── .vitepress/               ← 配置文件（不要修改）
│   ├── config.js            ← 站点配置
│   └── theme/
│       └── custom.css       ← 样式文件
│
├── 1-start/                  ← 第一章：起步
├── 2-daily/                  ← 第二章：日常使用
├── 3-workflow/               ← 第三章：工作流
├── 4-scenarios/              ← 第四章：场景实战
├── 5-advanced/               ← 第五章：进阶
├── appendix/                 ← 附录
├── public/                   ← 静态资源
│   ├── images/              ← 配图
│   ├── hero/                ← 首页轮播图
│   └── icons/               ← 图标
│
└── index.md                  ← 首页
```

## 快速开始

### 1. 打开项目

1. 打开 Obsidian
2. 选择「打开文件夹作为仓库」
3. 选择 `opcmode/docs/` 文件夹

### 2. 推荐设置

**设置 → 文件与链接：**
- ✅ 使用 Markdown 格式的链接
- ✅ 新笔记的默认位置：当前文件夹
- ✅ 附件默认位置：当前文件所在文件夹

**设置 → 编辑器：**
- ❌ 严格换行（关闭）
- ✅ 显示行号

## 写作规范

### 文章头部（Frontmatter）

每篇新文章开头添加：

```markdown
---
title: 文章标题
description: 文章描述（SEO用）
---
```

### 内容格式

```markdown
# 一级标题

正文段落...

## 二级标题

### 三级标题

- 列表项 1
- 列表项 2

1. 有序列表 1
2. 有序列表 2

**加粗文字**
*斜体文字*
`行内代码`

[链接文字](./其他文章.md)

![图片描述](/images/章节名/图片名.png)

> 引用块

| 表头1 | 表头2 |
|-------|-------|
| 内容1 | 内容2 |

```代码块
多行代码
```
```

### 图片存放

1. 文章配图放在 `docs/public/images/对应章节/`
2. 在文章中引用：
   ```markdown
   ![描述](/images/4-scenarios/example.png)
   ```

## 工作流程

### 新建文章

1. 在对应章节文件夹右键 → 新建笔记
2. 添加 Frontmatter
3. 用 Markdown 写内容
4. 保存

### 本地预览

```bash
cd opcmode
npm install          # 第一次
npm run docs:dev     # 启动预览
```

访问 http://localhost:5173

### 构建部署

```bash
npm run docs:build   # 构建
```

生成的网站在 `docs/.vitepress/dist/`

### 发布

```bash
git add .
git commit -m "add: 新文章标题"
git push
```

Vercel 会自动部署。

## 注意事项

- ❌ 不要修改 `.vitepress/` 目录的文件
- ✅ 图片一定要放 `public/images/` 目录
- ✅ 内部链接用相对路径 `./xxx.md`
- ✅ 外部链接用完整 URL

## 获取帮助

- VitePress 文档：https://vitepress.dev/
- 项目 GitHub：https://github.com/simonsxxs/opcmode
