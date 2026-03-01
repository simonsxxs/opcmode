import{_ as d,c as o,o as n,a5 as l,j as t,a as e}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"内置工具","description":"","frontmatter":{},"headers":[],"relativePath":"5-advanced/17-tools.md","filePath":"5-advanced/17-tools.md","lastUpdated":1772014034000}'),s={name:"5-advanced/17-tools.md"};function r(c,a,i,p,h,u){return n(),o("div",null,[...a[0]||(a[0]=[l("",8),t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"如何启用"),t("p",null,[e("在 "),t("code",null,"opencode.json"),e(" 中配置：")]),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true
  }
}`)])]),t("p",null,"或设置环境变量："),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`export OPENCODE_ENABLE_EXA=true
export OPENCODE_EXPERIMENTAL_LSP_TOOL=1`)])])],-1),t("hr",null,null,-1),t("h2",{id:"配置",tabindex:"-1"},[e("配置 "),t("a",{class:"header-anchor",href:"#配置","aria-label":"Permalink to “配置”"},"​")],-1),t("p",null,"你可以全局或按代理配置工具。代理配置会覆盖全局设置。",-1),t("p",null,"默认所有工具设为 true。要禁用工具，设为 false。",-1),t("h3",{id:"全局配置",tabindex:"-1"},[e("全局配置 "),t("a",{class:"header-anchor",href:"#全局配置","aria-label":"Permalink to “全局配置”"},"​")],-1),t("p",null,"使用 tools 选项全局禁用或启用工具：",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tools": {
    "write": false,
    "bash": false,
    "webfetch": true
  }
}`)])],-1),t("h3",{id:"按代理配置",tabindex:"-1"},[e("按代理配置 "),t("a",{class:"header-anchor",href:"#按代理配置","aria-label":"Permalink to “按代理配置”"},"​")],-1),t("p",null,"在代理定义中使用 tools 覆盖全局设置：",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tools": {
    "write": true,
    "bash": true
  },
  "agent": {
    "plan": {
      "tools": {
        "write": false,
        "bash": false
      }
    }
  }
}`)])],-1),t("h2",{id:"内置工具列表",tabindex:"-1"},[e("内置工具列表 "),t("a",{class:"header-anchor",href:"#内置工具列表","aria-label":"Permalink to “内置工具列表”"},"​")],-1),t("h3",{id:"bash",tabindex:"-1"},[e("bash "),t("a",{class:"header-anchor",href:"#bash","aria-label":"Permalink to “bash”"},"​")],-1),t("p",null,"在项目环境中执行 shell 命令。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "bash": true
  }
}`)])],-1),l("",4),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "edit": true
  }
}`)])],-1),l("",3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "write": true
  }
}`)])],-1),l("",3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "read": true
  }
}`)])],-1),t("details",{class:"details custom-block"},[t("summary",null,"AI 调用参数"),t("table",{tabindex:"0"},[t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"类型"),t("th",null,"必填"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"filePath")]),t("td",null,"string"),t("td",null,"✅"),t("td",null,"文件或目录的绝对路径")]),t("tr",null,[t("td",null,[t("code",null,"offset")]),t("td",null,"number"),t("td",null,"❌"),t("td",null,[e("从第几行/条开始读（"),t("strong",null,"1-indexed"),e("，从 1 开始计数）")])]),t("tr",null,[t("td",null,[t("code",null,"limit")]),t("td",null,"number"),t("td",null,"❌"),t("td",null,"最多读多少行/条（默认 2000）")])])]),t("p",null,[t("strong",null,"文件读取限制"),e("：")]),t("ul",null,[t("li",null,[e("默认读取 2000 行（"),t("code",null,"DEFAULT_READ_LIMIT"),e("）")]),t("li",null,[e("单行超过 2000 字符截断（"),t("code",null,"MAX_LINE_LENGTH"),e("）")]),t("li",null,[e("总输出限制 50KB（"),t("code",null,"MAX_BYTES"),e("）")])]),t("p",null,[t("strong",null,"目录读取"),e("（v1.1.60+）：")]),t("ul",null,[t("li",null,[e("读取目录时返回条目列表，子目录以 "),t("code",null,"/"),e(" 结尾")]),t("li",null,"条目按字母排序"),t("li",null,[e("支持 "),t("code",null,"offset"),e(" 和 "),t("code",null,"limit"),e(" 分页（与文件读取一致，1-indexed）")])]),t("p",null,[t("strong",null,"目录读取输出示例"),e("：")]),t("div",{class:"language-xml"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"xml"),t("pre",null,[t("code",{"v-pre":""},`<path>/Users/xxx/project/src</path>
<type>directory</type>
<entries>
components/
utils/
index.ts
(3 entries)
</entries>`)])]),t("p",null,[t("strong",null,"特殊文件"),e("：支持读取图片（PNG、JPG、GIF，不含 SVG）和 PDF，转为 base64 附件。二进制文件（.zip、.exe 等）会报错。")]),t("p",null,[t("strong",null,"智能纠错"),e("：文件不存在时，会在同目录下搜索相似文件名并建议。")])],-1),t("h3",{id:"grep",tabindex:"-1"},[e("grep "),t("a",{class:"header-anchor",href:"#grep","aria-label":"Permalink to “grep”"},"​")],-1),t("p",null,"使用正则表达式搜索文件内容。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "grep": true
  }
}`)])],-1),l("",3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "glob": true
  }
}`)])],-1),l("",3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "list": true
  }
}`)])],-1),t("h3",{id:"lsp-实验性",tabindex:"-1"},[e("lsp（实验性） "),t("a",{class:"header-anchor",href:"#lsp-实验性","aria-label":"Permalink to “lsp（实验性）”"},"​")],-1),t("p",null,"与配置的 LSP 服务器交互，获取代码智能功能如定义、引用、悬停信息和调用层次。",-1),t("h3",{id:"patch",tabindex:"-1"},[e("patch "),t("a",{class:"header-anchor",href:"#patch","aria-label":"Permalink to “patch”"},"​")],-1),t("p",null,"对文件应用补丁。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "patch": true
  }
}`)])],-1),t("h3",{id:"multiedit",tabindex:"-1"},[e("multiedit "),t("a",{class:"header-anchor",href:"#multiedit","aria-label":"Permalink to “multiedit”"},"​")],-1),t("p",null,"批量修改同一个文件的多个位置。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "multiedit": true
  }
}`)])],-1),t("h3",{id:"skill",tabindex:"-1"},[e("skill "),t("a",{class:"header-anchor",href:"#skill","aria-label":"Permalink to “skill”"},"​")],-1),t("p",null,"加载 SKILL.md 文件并在对话中返回其内容。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "skill": true
  }
}`)])],-1),t("h3",{id:"todowrite",tabindex:"-1"},[e("todowrite "),t("a",{class:"header-anchor",href:"#todowrite","aria-label":"Permalink to “todowrite”"},"​")],-1),t("p",null,"在编码会话期间管理待办列表。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "todowrite": true
  }
}`)])],-1),t("h3",{id:"todoread",tabindex:"-1"},[e("todoread "),t("a",{class:"header-anchor",href:"#todoread","aria-label":"Permalink to “todoread”"},"​")],-1),t("p",null,"读取现有待办列表。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "todoread": true
  }
}`)])],-1),t("h3",{id:"question",tabindex:"-1"},[e("question "),t("a",{class:"header-anchor",href:"#question","aria-label":"Permalink to “question”"},"​")],-1),t("p",null,"允许 AI 在执行任务时向你提问。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "question": true
  }
}`)])],-1),t("p",null,"这个工具让 AI 能够：",-1),t("ul",null,[t("li",null,"收集你的偏好或需求"),t("li",null,"澄清模糊的指令"),t("li",null,"获取实现选择的决策"),t("li",null,"提供多个方向让你选择")],-1),t("p",null,"每个问题包含标题、问题文本和选项列表。你可以从选项中选择，或输入自定义答案。当有多个问题时，可以在提交前在问题间导航。",-1),t("p",null,[t("strong",null,"使用场景"),e("：")],-1),t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`你：帮我重构这个模块

AI：我注意到有几种重构方式，请问你更倾向哪种？
    ○ 提取为独立函数
    ○ 拆分成多个类
    ○ 保持结构，只优化命名
    [输入自定义答案]`)])],-1),t("p",null,[t("strong",null,"注意"),e("："),t("code",null,"todowrite"),e(" 和 "),t("code",null,"todoread"),e(" 工具在 subagent 中默认禁用，但 "),t("code",null,"question"),e(" 工具默认启用。")],-1),t("h3",{id:"webfetch",tabindex:"-1"},[e("webfetch "),t("a",{class:"header-anchor",href:"#webfetch","aria-label":"Permalink to “webfetch”"},"​")],-1),t("p",null,"获取网页内容，支持 HTML、Markdown、纯文本和图片。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "webfetch": true
  }
}`)])],-1),l("",3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "websearch": true
  }
}`)])],-1),t("blockquote",null,[t("p",null,"需要设置环境变量 OPENCODE_ENABLE_EXA=true 或使用 OpenCode Zen 托管模型。")],-1),t("h3",{id:"codesearch-实验性",tabindex:"-1"},[e("codesearch（实验性） "),t("a",{class:"header-anchor",href:"#codesearch-实验性","aria-label":"Permalink to “codesearch（实验性）”"},"​")],-1),t("p",null,"搜索代码库和在线资源，查找相关 API、库和文档。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "codesearch": true
  }
}`)])],-1),l("",5),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true
  }
}`)])],-1),t("details",{class:"details custom-block"},[t("summary",null,"AI 调用参数"),t("p",null,[t("strong",null,"参数结构"),e("：")]),t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`{
  tool_calls: [
    { tool: "工具名", parameters: { /* 参数 */ } },
    { tool: "工具名", parameters: { /* 参数 */ } },
    // ... 最多 25 个
  ]
}`)])]),t("p",null,[t("strong",null,"实际调用示例"),e("：")]),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`[
  {"tool": "read", "parameters": {"filePath": "src/index.ts", "limit": 350}},
  {"tool": "grep", "parameters": {"pattern": "Session\\\\.updatePart", "include": "src/**/*.ts"}},
  {"tool": "bash", "parameters": {"command": "git status", "description": "Shows working tree status"}}
]`)])]),t("p",null,[t("strong",null,"返回格式"),e("：")]),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "title": "Batch execution (3/3 successful)",
  "output": "All 3 tools executed successfully.\\n\\nKeep using the batch tool for optimal performance in your next response!",
  "metadata": {
    "totalCalls": 3,
    "successful": 3,
    "failed": 0,
    "tools": ["read", "grep", "bash"],
    "details": [
      {"tool": "read", "success": true},
      {"tool": "grep", "success": true},
      {"tool": "bash", "success": true}
    ]
  }
}`)])])],-1),l("",10),t("div",{class:"language-text"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"text"),t("pre",null,[t("code",{"v-pre":""},`!node_modules/
!dist/
!build/`)])],-1),l("",6),t("ol",null,[t("li",null,[t("p",null,[t("strong",null,"先 glob 找文件，再 grep 搜内容")]),t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`你：帮我找所有 TypeScript 文件中定义了 interface User 的地方
AI：先用 glob 找 *.ts 文件，再用 grep 搜索 "interface User"`)])])]),t("li",null,[t("p",null,[t("strong",null,"codesearch 找示例，grep 找本地实现")]),t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`你：我想知道 React useEffect 怎么正确清理，然后检查我们项目里用得对不对
AI：先用 codesearch 查文档，再用 grep 在本地搜索 useEffect`)])])])],-1),l("",6)])])}const _=d(s,[["render",r]]);export{g as __pageData,_ as default};
