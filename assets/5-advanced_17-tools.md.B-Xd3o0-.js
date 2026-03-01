import{_ as d,c as o,o as n,a5 as l,j as t,a as e}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"内置工具","description":"","frontmatter":{},"headers":[],"relativePath":"5-advanced/17-tools.md","filePath":"5-advanced/17-tools.md","lastUpdated":1772014034000}'),s={name:"5-advanced/17-tools.md"};function r(c,a,i,p,h,u){return n(),o("div",null,[...a[0]||(a[0]=[l('<h1 id="内置工具" tabindex="-1">内置工具 <a class="header-anchor" href="#内置工具" aria-label="Permalink to “内置工具”">​</a></h1><h2 id="课程笔记" tabindex="-1">课程笔记 <a class="header-anchor" href="#课程笔记" aria-label="Permalink to “课程笔记”">​</a></h2><p>工具允许 LLM 在你的代码库中执行操作。OpenCode 内置了一组工具，你也可以通过 <a href="./13-custom-tools.html">自定义工具</a> 或 <a href="./07a-mcp-basics.html">MCP 服务器</a> 扩展。</p><p>默认情况下，所有工具都启用且无需权限即可运行。但你可以通过配置控制 <a href="./05-permissions.html">权限</a>。</p><hr><h2 id="条件激活" tabindex="-1">条件激活 <a class="header-anchor" href="#条件激活" aria-label="Permalink to “条件激活”">​</a></h2><p>某些工具需要特定条件才会启用：</p><table tabindex="0"><thead><tr><th>工具</th><th>激活条件</th></tr></thead><tbody><tr><td><code>websearch</code></td><td>使用 OpenCode Zen 托管模型 或 设置 <code>OPENCODE_ENABLE_EXA=true</code></td></tr><tr><td><code>codesearch</code></td><td>使用 OpenCode Zen 托管模型 或 设置 <code>OPENCODE_ENABLE_EXA=true</code></td></tr><tr><td><code>batch</code></td><td>配置 <code>experimental.batch_tool: true</code></td></tr><tr><td><code>lsp</code></td><td>启用 <code>OPENCODE_EXPERIMENTAL_LSP_TOOL</code> 标志</td></tr><tr><td><code>plan_enter</code> / <code>plan_exit</code></td><td>CLI 模式 + 实验性计划模式标志</td></tr></tbody></table>',8),t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"如何启用"),t("p",null,[e("在 "),t("code",null,"opencode.json"),e(" 中配置：")]),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
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
}`)])],-1),l('<p>允许 LLM 运行 npm install、git status 等终端命令。</p><details class="details custom-block"><summary>AI 调用参数</summary><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td><code>command</code></td><td>string</td><td>✅</td><td>要执行的命令</td></tr><tr><td><code>description</code></td><td>string</td><td>✅</td><td>命令描述（5-10 个词）</td></tr><tr><td><code>workdir</code></td><td>string</td><td>❌</td><td>工作目录，默认项目根目录</td></tr><tr><td><code>timeout</code></td><td>number</td><td>❌</td><td>超时时间（毫秒），默认 120000（2 分钟）</td></tr></tbody></table><p><strong>安全机制</strong>：</p><ul><li>使用 tree-sitter-bash 解析命令语法</li><li>检测 <code>cd</code>、<code>rm</code>、<code>cp</code>、<code>mv</code>、<code>mkdir</code>、<code>touch</code>、<code>chmod</code>、<code>chown</code>、<code>cat</code> 等命令</li><li>涉及项目外目录时请求 <code>external_directory</code> 权限确认</li><li>输出超过 2000 行或 50KB 自动截断，完整输出保存到文件</li></ul></details><h3 id="edit" tabindex="-1">edit <a class="header-anchor" href="#edit" aria-label="Permalink to “edit”">​</a></h3><p>使用精确字符串替换修改现有文件。</p>',4),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "edit": true
  }
}`)])],-1),l('<details class="details custom-block"><summary>AI 调用参数</summary><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td><code>filePath</code></td><td>string</td><td>✅</td><td>文件绝对路径</td></tr><tr><td><code>oldString</code></td><td>string</td><td>✅</td><td>要替换的原始文本</td></tr><tr><td><code>newString</code></td><td>string</td><td>✅</td><td>替换后的文本（必须与 oldString 不同）</td></tr><tr><td><code>replaceAll</code></td><td>boolean</td><td>❌</td><td>是否替换所有匹配（默认 false）</td></tr></tbody></table><p><strong>智能匹配</strong>：edit 有 9 层匹配策略（SimpleReplacer → LineTrimmedReplacer → BlockAnchorReplacer → WhitespaceNormalizedReplacer → IndentationFlexibleReplacer → EscapeNormalizedReplacer → TrimmedBoundaryReplacer → ContextAwareReplacer → MultiOccurrenceReplacer），从严格到宽松逐层尝试。</p><p><strong>前置条件</strong>：必须先用 read 读取文件，否则会报错。</p><p><strong>写入后检查</strong>：自动触发 LSP 诊断，报告语法和类型错误。</p></details><h3 id="write" tabindex="-1">write <a class="header-anchor" href="#write" aria-label="Permalink to “write”">​</a></h3><p>创建新文件或覆盖现有文件。</p>',3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "write": true
  }
}`)])],-1),l('<details class="details custom-block"><summary>AI 调用参数</summary><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td><code>filePath</code></td><td>string</td><td>✅</td><td>文件绝对路径（必须是绝对路径）</td></tr><tr><td><code>content</code></td><td>string</td><td>✅</td><td>要写入的内容</td></tr></tbody></table><p><strong>前置条件</strong>：如果文件已存在，必须先用 read 读取，否则会报错。</p><p><strong>写入后检查</strong>：自动触发 LSP 诊断，报告当前文件和其他受影响文件的错误（最多 5 个文件）。</p><p><strong>Diff 预览</strong>：写入前会生成 diff 并请求权限确认。</p></details><h3 id="read" tabindex="-1">read <a class="header-anchor" href="#read" aria-label="Permalink to “read”">​</a></h3><p>从代码库读取文件或目录内容。</p>',3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
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
}`)])],-1),l('<details class="details custom-block"><summary>AI 调用参数</summary><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td><code>pattern</code></td><td>string</td><td>✅</td><td>正则表达式模式</td></tr><tr><td><code>path</code></td><td>string</td><td>❌</td><td>搜索路径，默认当前目录</td></tr><tr><td><code>include</code></td><td>string</td><td>❌</td><td>文件过滤模式，如 <code>&quot;*.ts&quot;</code></td></tr></tbody></table><p><strong>结果限制</strong>：</p><ul><li>最多返回 100 个匹配，超出会截断</li><li>单行超过 2000 字符会被截断</li></ul></details><h3 id="glob" tabindex="-1">glob <a class="header-anchor" href="#glob" aria-label="Permalink to “glob”">​</a></h3><p>通过模式匹配查找文件。</p>',3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "glob": true
  }
}`)])],-1),l('<details class="details custom-block"><summary>glob 模式语法</summary><table tabindex="0"><thead><tr><th>模式</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>*</code></td><td>匹配任意字符（不含 <code>/</code>）</td><td><code>*.ts</code></td></tr><tr><td><code>**</code></td><td>匹配任意目录层级</td><td><code>src/**/*.ts</code></td></tr><tr><td><code>?</code></td><td>匹配单个字符</td><td><code>file?.ts</code></td></tr><tr><td><code>[abc]</code></td><td>匹配指定字符</td><td><code>file[123].ts</code></td></tr><tr><td><code>{a,b}</code></td><td>匹配多个模式</td><td><code>*.{ts,tsx}</code></td></tr></tbody></table><p><strong>结果限制</strong>：最多返回 100 个文件，超出会截断。</p></details><h3 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-label="Permalink to “list”">​</a></h3><p>列出的文件和目录在给定路径下。</p>',3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
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
}`)])],-1),l('<details class="details custom-block"><summary>AI 调用参数</summary><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td><code>url</code></td><td>string</td><td>✅</td><td>要获取的 URL（必须以 http:// 或 https:// 开头）</td></tr><tr><td><code>format</code></td><td>string</td><td>❌</td><td>返回格式：<code>markdown</code>（默认）、<code>text</code>、<code>html</code></td></tr><tr><td><code>timeout</code></td><td>number</td><td>❌</td><td>超时秒数（最大 120 秒，默认 30 秒）</td></tr></tbody></table><p><strong>图片支持</strong>（v1.1.62+）：</p><ul><li>当 URL 指向图片时（image/*），自动转为 base64 附件返回</li><li>不支持 SVG（image/svg+xml）和 FastBidSheet（image/vnd.fastbidsheet）</li></ul><p><strong>HTML 转换</strong>：</p><ul><li><code>format: &quot;markdown&quot;</code> - HTML 自动转为 Markdown</li><li><code>format: &quot;text&quot;</code> - 提取纯文本，去除 script/style 标签</li><li><code>format: &quot;html&quot;</code> - 返回原始 HTML</li></ul><p><strong>限制</strong>：响应大小限制 5MB。</p></details><h3 id="websearch-实验性" tabindex="-1">websearch（实验性） <a class="header-anchor" href="#websearch-实验性" aria-label="Permalink to “websearch（实验性）”">​</a></h3><p>搜索网页内容，使用 OpenCode Exa AI 服务。</p>',3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "websearch": true
  }
}`)])],-1),t("blockquote",null,[t("p",null,"需要设置环境变量 OPENCODE_ENABLE_EXA=true 或使用 OpenCode Zen 托管模型。")],-1),t("h3",{id:"codesearch-实验性",tabindex:"-1"},[e("codesearch（实验性） "),t("a",{class:"header-anchor",href:"#codesearch-实验性","aria-label":"Permalink to “codesearch（实验性）”"},"​")],-1),t("p",null,"搜索代码库和在线资源，查找相关 API、库和文档。",-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "codesearch": true
  }
}`)])],-1),l('<blockquote><p>需要设置环境变量 OPENCODE_ENABLE_EXA=true 或使用 OpenCode Zen 托管模型。</p></blockquote><details class="details custom-block"><summary>AI 调用参数</summary><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>query</code></td><td>string</td><td>必填</td><td>搜索查询，如 <code>&quot;React useState hook examples&quot;</code></td></tr><tr><td><code>tokensNum</code></td><td>number</td><td>2000+</td><td>返回的 token 数量（1000-2000+）</td></tr></tbody></table><p><strong>tokensNum 选择建议</strong>：</p><table tabindex="0"><thead><tr><th>值</th><th>使用场景</th></tr></thead><tbody><tr><td>1000-2000</td><td>精确查询，只需简短示例</td></tr><tr><td>2000+</td><td>常规查询（默认）</td></tr><tr><td>10000-20000</td><td>需要完整文档</td></tr><tr><td>30000-2000+</td><td>需要全面参考资料</td></tr></tbody></table><p><strong>其他限制</strong>：请求超时 30 秒。</p></details><h3 id="batch-实验性" tabindex="-1">batch（实验性） <a class="header-anchor" href="#batch-实验性" aria-label="Permalink to “batch（实验性）”">​</a></h3><p>并行执行多个工具调用，减少等待时间。当 AI 需要同时读取多个文件、执行多条搜索命令等互不依赖的操作时，batch 可以一次性并行完成，比逐个执行快 2-5 倍。</p><p><strong>启用方式</strong>：</p>',5),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
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
}`)])])],-1),l('<p><strong>适合 batch 的场景</strong>：</p><table tabindex="0"><thead><tr><th>场景</th><th>说明</th></tr></thead><tbody><tr><td>同时读取多个文件</td><td>一次读 package.json、tsconfig.json、.eslintrc.json</td></tr><tr><td>grep + glob + read 组合</td><td>先搜索再读取，互不依赖的部分并行</td></tr><tr><td>多条 bash 命令</td><td>同时执行 git status、npm test 等</td></tr><tr><td>多处编辑</td><td>同时修改多个文件的不同位置</td></tr></tbody></table><p><strong>不适合 batch 的场景</strong>：</p><table tabindex="0"><thead><tr><th>场景</th><th>原因</th></tr></thead><tbody><tr><td>前后有依赖的操作</td><td>比如先创建文件再读取，顺序不能保证</td></tr><tr><td>有状态的顺序操作</td><td>比如先 git add 再 git commit</td></tr></tbody></table><p><strong>限制</strong>：</p><table tabindex="0"><thead><tr><th>限制项</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>最大调用数</td><td>25</td><td>超出的调用会被丢弃并报错</td></tr><tr><td>禁止嵌套</td><td>batch</td><td>不能在 batch 里再调 batch</td></tr><tr><td>外部工具</td><td>不支持</td><td>MCP 工具不能通过 batch 执行，需要单独调用</td></tr><tr><td>部分失败</td><td>不影响其他</td><td>某个调用失败不会中断其他并行调用</td></tr></tbody></table><h2 id="内部实现" tabindex="-1">内部实现 <a class="header-anchor" href="#内部实现" aria-label="Permalink to “内部实现”">​</a></h2><p>grep、glob 和 list 等工具底层使用 ripgrep。默认情况下 ripgrep 遵守 .gitignore 模式，因此 .gitignore 中列出的文件和目录会从搜索和列表中排除。</p><h3 id="忽略模式" tabindex="-1">忽略模式 <a class="header-anchor" href="#忽略模式" aria-label="Permalink to “忽略模式”">​</a></h3><p>要包含通常会被忽略的文件，在项目根目录创建 .ignore 文件：</p>',10),t("div",{class:"language-text"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"text"),t("pre",null,[t("code",{"v-pre":""},`!node_modules/
!dist/
!build/`)])],-1),l('<h2 id="搜索工具使用技巧" tabindex="-1">搜索工具使用技巧 <a class="header-anchor" href="#搜索工具使用技巧" aria-label="Permalink to “搜索工具使用技巧”">​</a></h2><p>这些技巧可以帮助你写出更精准的提示词，让 AI 更高效地找到目标代码。</p><h3 id="三种搜索工具的区别" tabindex="-1">三种搜索工具的区别 <a class="header-anchor" href="#三种搜索工具的区别" aria-label="Permalink to “三种搜索工具的区别”">​</a></h3><table tabindex="0"><thead><tr><th>场景</th><th>AI 会用什么工具</th></tr></thead><tbody><tr><td>找某个 API 的使用示例</td><td>codesearch（在线搜索文档和示例）</td></tr><tr><td>在本地代码中搜索特定字符串</td><td>grep（正则匹配文件内容）</td></tr><tr><td>按文件名找文件</td><td>glob（模式匹配文件路径）</td></tr></tbody></table><h3 id="组合使用" tabindex="-1">组合使用 <a class="header-anchor" href="#组合使用" aria-label="Permalink to “组合使用”">​</a></h3><p>AI 常见的组合策略：</p>',6),t("ol",null,[t("li",null,[t("p",null,[t("strong",null,"先 glob 找文件，再 grep 搜内容")]),t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`你：帮我找所有 TypeScript 文件中定义了 interface User 的地方
AI：先用 glob 找 *.ts 文件，再用 grep 搜索 "interface User"`)])])]),t("li",null,[t("p",null,[t("strong",null,"codesearch 找示例，grep 找本地实现")]),t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`你：我想知道 React useEffect 怎么正确清理，然后检查我们项目里用得对不对
AI：先用 codesearch 查文档，再用 grep 在本地搜索 useEffect`)])])])],-1),l('<h3 id="结果限制要注意" tabindex="-1">结果限制要注意 <a class="header-anchor" href="#结果限制要注意" aria-label="Permalink to “结果限制要注意”">​</a></h3><p><strong>grep</strong> 和 <strong>glob</strong> 工具有 100 条结果限制。如果你发现 AI 说&quot;结果被截断&quot;，可以：</p><ul><li>让 AI 用更具体的搜索条件</li><li>指定更小的目录范围</li><li>用更精确的正则表达式</li></ul><p><strong>codesearch</strong> 没有条数限制，但有 30 秒超时限制。</p><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./13-custom-tools.html">自定义工具</a> - 创建自定义工具</li><li><a href="./07a-mcp-basics.html">MCP 服务器</a> - 集成外部工具</li><li><a href="./05-permissions.html">权限配置</a> - 控制工具权限</li></ul>',6)])])}const _=d(s,[["render",r]]);export{g as __pageData,_ as default};
