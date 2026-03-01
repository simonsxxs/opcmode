import{_ as a,I as l,c as s,o as n,a5 as c,j as e,J as r,a as d,aL as p}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"C1 文件整理","description":"用 AI 批量重命名文件、分类归档、检索文件内容，提升文件管理效率。","frontmatter":{"title":"C1 文件整理","subtitle":"批量重命名、分类归档","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"C1","duration":"15 分钟","practice":"20 分钟","level":"新手","description":"用 AI 批量重命名文件、分类归档、检索文件内容，提升文件管理效率。","tags":["文件","整理","批量处理"],"prerequisite":["2.1 界面与基础操作"]},"headers":[],"relativePath":"4-scenarios/office-files.md","filePath":"4-scenarios/office-files.md","lastUpdated":1772014034000}'),i={name:"4-scenarios/office-files.md"};function g(b,o,h,u,k,m){const t=l("AdInArticle");return n(),s("div",null,[o[0]||(o[0]=c("",21)),o[1]||(o[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"分析现状 → 制定规则 → 批量执行")])],-1)),o[2]||(o[2]=c("",8)),r(t),o[3]||(o[3]=e("p",null,[e("strong",null,"为什么"),d(" 先了解有什么文件，才能制定整理规则。")],-1)),o[4]||(o[4]=e("p",null,"进入目标文件夹启动 OpenCode：",-1)),o[5]||(o[5]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`cd ~/Downloads  # 换成你要整理的目录
opencode`)])],-1)),o[6]||(o[6]=e("blockquote",null,[e("p",null,[d("也可以直接："),e("code",null,"opencode /path/to/project"),d("（官方："),e("code",null,"opencode/packages/web/src/content/docs/tui.mdx:16"),d("～"),e("code",null,"opencode/packages/web/src/content/docs/tui.mdx:20"),d("）。")])],-1)),o[7]||(o[7]=e("h4",{id:"方法一-使用-list-工具查看目录结构",tabindex:"-1"},[d("方法一：使用 list 工具查看目录结构 "),e("a",{class:"header-anchor",href:"#方法一-使用-list-工具查看目录结构","aria-label":"Permalink to “方法一：使用 list 工具查看目录结构”"},"​")],-1)),o[8]||(o[8]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`列出当前目录的文件和子目录（树形结构），并告诉我：
1. 大致有哪些子目录
2. 文件类型分布（图片/文档/压缩包等）
3. 哪些命名看起来像一类`)])],-1)),o[9]||(o[9]=c("",2)),o[10]||(o[10]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"查找所有图片文件（例如 jpg/png/gif），并按修改时间从新到旧列出")])],-1)),o[11]||(o[11]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"查找所有 PDF 文件（**/*.pdf）")])],-1)),o[12]||(o[12]=c("",3)),o[13]||(o[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`分析这个目录的文件情况：
1. 有多少个文件和子目录（如果你拿不到精确数量，请说明原因）
2. 文件类型分布（图片、文档、视频等）
3. 命名规律分析
4. 建议的整理方案（先给“规则”，再给“执行步骤”）`)])],-1)),o[14]||(o[14]=e("h3",{id:"第-2-步-批量重命名",tabindex:"-1"},[d("第 2 步：批量重命名 "),e("a",{class:"header-anchor",href:"#第-2-步-批量重命名","aria-label":"Permalink to “第 2 步：批量重命名”"},"​")],-1)),o[15]||(o[15]=e("p",null,[e("strong",null,"为什么"),d(" 统一命名便于管理。")],-1)),o[16]||(o[16]=e("h4",{id:"推荐-先列-改名清单-再执行",tabindex:"-1"},[d("推荐：先列“改名清单”，再执行 "),e("a",{class:"header-anchor",href:"#推荐-先列-改名清单-再执行","aria-label":"Permalink to “推荐：先列“改名清单”，再执行”"},"​")],-1)),o[17]||(o[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`把这个目录下所有的图片文件按以下规则重命名：
- 格式：照片_YYYYMMDD_序号.扩展名
- 日期从文件修改时间获取
- 序号从 001 开始

要求：
1. 先只输出“将要修改的文件清单（旧名→新名）”，不要执行
2. 我确认后再执行`)])],-1)),o[18]||(o[18]=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"⚠️ 安全提醒"),e("p",null,[d("OpenCode 的“是否会提示确认”由 "),e("code",null,"permission"),d(" 决定。")]),e("ul",null,[e("li",null,[e("code",null,"permission"),d(" 支持 "),e("code",null,"allow/ask/deny"),d("（官方："),e("code",null,"opencode/packages/web/src/content/docs/permissions.mdx:14"),d("～"),e("code",null,"opencode/packages/web/src/content/docs/permissions.mdx:18"),d("）。")]),e("li",null,[e("code",null,"edit"),d(" 权限覆盖写入/修改/patch 等文件变更类操作（官方："),e("code",null,"opencode/packages/web/src/content/docs/permissions.mdx:86"),d("～"),e("code",null,"opencode/packages/web/src/content/docs/permissions.mdx:88"),d("）。")])]),e("p",null,[d("如果你想强制每次改文件都确认，可在配置里设为 "),e("code",null,"ask"),d("：")]),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "edit": "ask"
  }
}`)])])],-1)),o[19]||(o[19]=c("",5)),o[20]||(o[20]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`把这个目录下的文件按类型分类到子目录：
- 图片（jpg, png, gif）→ 图片/
- 文档（pdf, doc, docx, txt）→ 文档/
- 视频（mp4, mov, avi）→ 视频/
- 其他 → 其他/

要求：
1. 先展示分类结果让我确认
2. 再执行移动`)])],-1)),o[21]||(o[21]=e("h3",{id:"第-4-步-检索文件内容",tabindex:"-1"},[d("第 4 步：检索文件内容 "),e("a",{class:"header-anchor",href:"#第-4-步-检索文件内容","aria-label":"Permalink to “第 4 步：检索文件内容”"},"​")],-1)),o[22]||(o[22]=e("p",null,[e("strong",null,"为什么"),d(" 找到包含特定内容的文件。")],-1)),o[23]||(o[23]=e("h4",{id:"使用-grep-工具搜索内容",tabindex:"-1"},[d("使用 grep 工具搜索内容 "),e("a",{class:"header-anchor",href:"#使用-grep-工具搜索内容","aria-label":"Permalink to “使用 grep 工具搜索内容”"},"​")],-1)),o[24]||(o[24]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"搜索包含“发票”的所有 txt 和 md 文件")])],-1)),o[25]||(o[25]=c("",3)),o[26]||(o[26]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`总结一下刚才的整理工作：
1. 重命名了多少文件
2. 移动了多少文件
3. 最终的目录结构`)])],-1)),o[27]||(o[27]=c("",15)),o[28]||(o[28]=e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`!node_modules/
!dist/
!build/`)])],-1)),o[29]||(o[29]=c("",10))])}const f=a(i,[["render",g]]);export{_ as __pageData,f as default};
