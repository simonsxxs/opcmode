import{_ as d,I as l,c as r,o as i,a5 as o,J as s,j as e,a as n,bj as p}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.12a 插件基础","description":"学习 OpenCode 插件基础，通过钩子机制扩展功能，安装和配置插件。","frontmatter":{"title":"5.12a 插件基础","subtitle":"通过钩子扩展功能","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.12a","duration":"20 分钟","practice":"25 分钟","level":"进阶","description":"学习 OpenCode 插件基础，通过钩子机制扩展功能，安装和配置插件。","tags":["插件","钩子","扩展"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/12a-plugins-basics.md","filePath":"5-advanced/12a-plugins-basics.md","lastUpdated":1772014034000}'),c={name:"5-advanced/12a-plugins-basics.md"};function u(h,t,b,g,m,f){const a=l("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=o('<h1 id="插件基础" tabindex="-1">插件基础 <a class="header-anchor" href="#插件基础" aria-label="Permalink to “插件基础”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：插件让你通过钩子机制扩展 OpenCode 的功能。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="5.12a 插件基础学霸笔记" data-zoom-src="/images/5-advanced/plugins-basics-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>安装和配置插件</li><li>创建简单的本地插件</li><li>理解插件加载机制</li></ul><hr><h2 id="什么是插件" tabindex="-1">什么是插件 <a class="header-anchor" href="#什么是插件" aria-label="Permalink to “什么是插件”">​</a></h2><p>插件是 JavaScript/TypeScript 模块，通过钩子机制扩展 OpenCode。你可以：</p><ul><li>添加新功能（如自定义工具、通知）</li><li>集成外部服务（如时间追踪、监控）</li><li>修改默认行为（如拦截文件读取、修改 LLM 参数）</li></ul><p>社区插件示例请查看 <a href="./../appendix/ecosystem.html#插件">生态系统</a>。</p><hr><h2 id="使用插件" tabindex="-1">使用插件 <a class="header-anchor" href="#使用插件" aria-label="Permalink to “使用插件”">​</a></h2><p>有两种方式加载插件：</p><h3 id="从本地文件加载" tabindex="-1">从本地文件加载 <a class="header-anchor" href="#从本地文件加载" aria-label="Permalink to “从本地文件加载”">​</a></h3><p>将 JavaScript 或 TypeScript 文件放在插件目录中：</p><table tabindex="0"><thead><tr><th>目录</th><th>作用域</th></tr></thead><tbody><tr><td><code>.opencode/plugin/</code></td><td>项目级插件</td></tr><tr><td><code>~/.config/opencode/plugin/</code></td><td>全局插件</td></tr></tbody></table><p>这些目录中的 <code>.js</code> 和 <code>.ts</code> 文件会在启动时自动加载。</p><h3 id="从-npm-加载" tabindex="-1">从 npm 加载 <a class="header-anchor" href="#从-npm-加载" aria-label="Permalink to “从 npm 加载”">​</a></h3>',21)),s(a),t[1]||(t[1]=e("p",null,"在配置文件中指定 npm 包：",-1)),t[2]||(t[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "opencode-helicone-session",
    "opencode-wakatime",
    "@my-org/custom-plugin"
  ]
}`)])],-1)),t[3]||(t[3]=e("p",null,[n("支持普通包和作用域包（"),e("code",null,"@scope/package"),n("）。")],-1)),t[4]||(t[4]=e("hr",null,null,-1)),t[5]||(t[5]=e("h2",{id:"插件安装机制",tabindex:"-1"},[n("插件安装机制 "),e("a",{class:"header-anchor",href:"#插件安装机制","aria-label":"Permalink to “插件安装机制”"},"​")],-1)),t[6]||(t[6]=e("h3",{id:"npm-插件",tabindex:"-1"},[n("npm 插件 "),e("a",{class:"header-anchor",href:"#npm-插件","aria-label":"Permalink to “npm 插件”"},"​")],-1)),t[7]||(t[7]=e("p",null,"启动时使用 Bun 自动安装。包及其依赖缓存在：",-1)),t[8]||(t[8]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"~/.cache/opencode/node_modules/")])],-1)),t[9]||(t[9]=e("h3",{id:"本地插件",tabindex:"-1"},[n("本地插件 "),e("a",{class:"header-anchor",href:"#本地插件","aria-label":"Permalink to “本地插件”"},"​")],-1)),t[10]||(t[10]=e("p",null,[n("直接从插件目录加载。要使用外部 npm 包，需在配置目录创建 "),e("code",null,"package.json"),n("：")],-1)),t[11]||(t[11]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/package.json
{
  "dependencies": {
    "shescape": "^2.1.0"
  }
}`)])],-1)),t[12]||(t[12]=o('<p>OpenCode 启动时会运行 <code>bun install</code> 安装这些依赖。</p><h3 id="内置插件" tabindex="-1">内置插件 <a class="header-anchor" href="#内置插件" aria-label="Permalink to “内置插件”">​</a></h3><p>OpenCode 自带两个内置插件（可通过 <code>OPENCODE_DISABLE_DEFAULT_PLUGINS=1</code> 禁用）：</p><table tabindex="0"><thead><tr><th>插件</th><th>功能</th></tr></thead><tbody><tr><td><code>opencode-copilot-auth</code></td><td>GitHub Copilot 认证</td></tr><tr><td><code>opencode-anthropic-auth</code></td><td>Anthropic 认证</td></tr></tbody></table><hr><h2 id="加载顺序" tabindex="-1">加载顺序 <a class="header-anchor" href="#加载顺序" aria-label="Permalink to “加载顺序”">​</a></h2><p>插件从所有来源加载，钩子按以下顺序执行：</p><ol><li>全局配置（<code>~/.config/opencode/opencode.json</code>）</li><li>项目配置（<code>opencode.json</code>）</li><li>全局插件目录（<code>~/.config/opencode/plugin/</code>）</li><li>项目插件目录（<code>.opencode/plugin/</code>）</li></ol><p><strong>去重规则</strong>：</p><ul><li>同名同版本的 npm 包只加载一次</li><li>本地插件和同名 npm 插件会分别加载</li><li>同一模块导出的相同函数只初始化一次（防止 <code>export default</code> 和命名导出重复）</li></ul><hr><h2 id="创建插件" tabindex="-1">创建插件 <a class="header-anchor" href="#创建插件" aria-label="Permalink to “创建插件”">​</a></h2><p>插件是一个导出插件函数的模块。每个函数接收上下文对象并返回钩子对象。</p><h3 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to “基本结构”">​</a></h3>',14)),t[13]||(t[13]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/example.js
export const MyPlugin = async ({ project, client, $, directory, worktree, serverUrl }) => {
  console.log("Plugin initialized!")

  return {
    // 钩子实现
  }
}`)])],-1)),t[14]||(t[14]=o('<h3 id="插件上下文参数" tabindex="-1">插件上下文参数 <a class="header-anchor" href="#插件上下文参数" aria-label="Permalink to “插件上下文参数”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>project</code></td><td><code>Project</code></td><td>当前项目信息</td></tr><tr><td><code>directory</code></td><td><code>string</code></td><td>当前工作目录</td></tr><tr><td><code>worktree</code></td><td><code>string</code></td><td>Git 工作树路径</td></tr><tr><td><code>client</code></td><td><code>OpencodeClient</code></td><td>OpenCode SDK 客户端，用于与 AI 交互</td></tr><tr><td><code>$</code></td><td><code>BunShell</code></td><td>Bun 的 <a href="https://bun.sh/docs/runtime/shell" target="_blank" rel="noreferrer">shell API</a>，用于执行命令</td></tr><tr><td><code>serverUrl</code></td><td><code>URL</code></td><td>OpenCode 服务器 URL（如 <code>http://localhost:4096</code>）</td></tr></tbody></table><h3 id="typescript-支持" tabindex="-1">TypeScript 支持 <a class="header-anchor" href="#typescript-支持" aria-label="Permalink to “TypeScript 支持”">​</a></h3><p>使用 TypeScript 时，可以从插件包导入类型：</p>',4)),t[15]||(t[15]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/my-plugin.ts
import type { Plugin } from "@opencode-ai/plugin"

export const MyPlugin: Plugin = async ({ project, client, $, directory, worktree, serverUrl }) => {
  return {
    // 类型安全的钩子实现
  }
}`)])],-1)),t[16]||(t[16]=e("p",null,[n("插件包会在启动时自动安装到 "),e("code",null,".opencode/node_modules/"),n("。")],-1)),t[17]||(t[17]=e("hr",null,null,-1)),t[18]||(t[18]=e("h2",{id:"简单示例",tabindex:"-1"},[n("简单示例 "),e("a",{class:"header-anchor",href:"#简单示例","aria-label":"Permalink to “简单示例”"},"​")],-1)),t[19]||(t[19]=e("h3",{id:"发送通知",tabindex:"-1"},[n("发送通知 "),e("a",{class:"header-anchor",href:"#发送通知","aria-label":"Permalink to “发送通知”"},"​")],-1)),t[20]||(t[20]=e("p",null,"当会话完成时发送系统通知：",-1)),t[21]||(t[21]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/notification.js
export const NotificationPlugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await $\`osascript -e 'display notification "Session completed!" with title "OpenCode"'\`
      }
    },
  }
}`)])],-1)),t[22]||(t[22]=e("blockquote",null,[e("p",null,"如果你使用 OpenCode 桌面应用，它可以在响应就绪或会话出错时自动发送系统通知。")],-1)),t[23]||(t[23]=e("h3",{id:"env-文件保护",tabindex:"-1"},[n(".env 文件保护 "),e("a",{class:"header-anchor",href:"#env-文件保护","aria-label":"Permalink to “.env 文件保护”"},"​")],-1)),t[24]||(t[24]=e("p",null,[n("阻止 OpenCode 读取 "),e("code",null,".env"),n(" 文件：")],-1)),t[25]||(t[25]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/env-protection.js
export const EnvProtection = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool === "read" && output.args.filePath.includes(".env")) {
        throw new Error("Do not read .env files")
      }
    },
  }
}`)])],-1)),t[26]||(t[26]=e("h3",{id:"日志记录",tabindex:"-1"},[n("日志记录 "),e("a",{class:"header-anchor",href:"#日志记录","aria-label":"Permalink to “日志记录”"},"​")],-1)),t[27]||(t[27]=e("p",null,[n("使用 "),e("code",null,"client.app.log()"),n(" 替代 "),e("code",null,"console.log"),n(" 进行结构化日志记录：")],-1)),t[28]||(t[28]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/my-plugin.ts
export const MyPlugin = async ({ client }) => {
  await client.app.log({
    service: "my-plugin",
    level: "info",
    message: "Plugin initialized",
    extra: { foo: "bar" },
  })

  return {}
}`)])],-1)),t[29]||(t[29]=o('<p>日志级别：<code>debug</code>、<code>info</code>、<code>warn</code>、<code>error</code>。</p><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>插件未加载</td><td>文件扩展名错误</td><td>确保是 <code>.js</code> 或 <code>.ts</code> 文件</td></tr><tr><td>依赖找不到</td><td>未配置 package.json</td><td>在 <code>.opencode/</code> 目录添加 <code>package.json</code></td></tr><tr><td>TypeScript 类型错误</td><td>插件包未安装</td><td>OpenCode 启动后会自动安装，或手动运行 <code>bun add @opencode-ai/plugin</code></td></tr><tr><td>插件重复执行</td><td>同时使用 npm 和本地插件</td><td>检查配置文件和插件目录是否有重复</td></tr><tr><td>环境变量未生效</td><td>本地插件无法访问外部包</td><td>在 <code>.opencode/package.json</code> 中声明依赖</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>两种加载插件的方式（本地文件 / npm 包）</li><li>插件的加载顺序和去重机制</li><li>创建简单插件的基本结构</li><li>使用 <code>event</code> 和 <code>tool.execute.before</code> 钩子</li></ol><hr><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to “下一步”">​</a></h2><p>→ <a href="./12b-plugins-advanced.html">5.12b 插件进阶</a> - 学习所有钩子类型和高级用法</p>',11))])}const v=d(c,[["render",u]]);export{P as __pageData,v as default};
