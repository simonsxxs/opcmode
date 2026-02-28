# One Person Business Hub

一人公司创业指南 - 汇集全网优质资源，助你开启独立创业之路。

## 项目简介

这是一个收集和整理一人公司创业相关资源的静态网站，包括：

- **YouTube 教程区**：精选优质视频教程
- **X 精华区**：汇集 X 平台的高质量创业干货
- **AI+一人公司专区**：AI 工具在创业中的应用

## 技术栈

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript

## 本地开发

直接在浏览器中打开 `index.html` 即可预览网站。

```bash
# 使用 Python 启动本地服务器
python3 -m http.server 8000

# 或使用 Node.js
npx serve .
```

## 数据结构

### YouTube 视频数据 (`data/youtube_tutorials.json`)

```json
[
  {
    "title": "视频标题",
    "description": "视频描述",
    "url": "https://youtube.com/watch?v=...",
    "thumbnail": "https://img.youtube.com/vi/...",
    "channel": "频道名称",
    "duration": "10:30"
  }
]
```

### X 内容数据 (`data/x_content.json`)

```json
[
  {
    "author": "作者名",
    "handle": "username",
    "content": "帖子内容",
    "url": "https://x.com/...",
    "date": "2025-01-01",
    "tags": ["创业", "AI"]
  }
]
```

## 部署

### GitHub Pages

1. 进入仓库 Settings -> Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main"，文件夹选择 "/ (root)"
4. 保存后等待部署完成

访问地址：`https://simonsxxs.github.io/opcmodev1/`

## 贡献

欢迎提交 PR 补充更多优质资源！

## License

MIT
