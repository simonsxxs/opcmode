import{_ as a,I as r,c as s,o as i,a5 as e,J as c,j as t,a as o,be as l}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.10b API 参考","description":"OpenCode SDK 提供 21 个 API 模块、35+ 种事件类型，覆盖会话、文件、配置、MCP、LSP 等全部功能。","frontmatter":{"title":"5.10b API 参考","subtitle":"SDK 完整 API 文档","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.10b","duration":"30 分钟","practice":"40 分钟","level":"进阶","description":"OpenCode SDK 提供 21 个 API 模块、35+ 种事件类型，覆盖会话、文件、配置、MCP、LSP 等全部功能。","tags":["SDK","API","参考文档"],"prerequisite":["5.10a SDK 基础"]},"headers":[],"relativePath":"5-advanced/10b-sdk-reference.md","filePath":"5-advanced/10b-sdk-reference.md","lastUpdated":1772014034000}'),p={name:"5-advanced/10b-sdk-reference.md"};function h(b,d,u,g,y,m){const n=r("AdInArticle");return i(),s("div",null,[d[0]||(d[0]=e('<h1 id="_5-10b-api-参考" tabindex="-1">5.10b API 参考 <a class="header-anchor" href="#_5-10b-api-参考" aria-label="Permalink to “5.10b API 参考”">​</a></h1><blockquote><p><strong>一句话总结</strong>：OpenCode SDK 提供 21 个 API 模块、35+ 种事件类型，覆盖会话、文件、配置、MCP、LSP 等全部功能。</p></blockquote><hr><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+l+'" alt="5.10b API 参考学霸笔记" data-zoom-src="/images/5-advanced/10b-sdk-reference-notes.jpeg"></p><hr><h2 id="api-模块总览" tabindex="-1">API 模块总览 <a class="header-anchor" href="#api-模块总览" aria-label="Permalink to “API 模块总览”">​</a></h2><p>SDK 客户端通过 <code>OpencodeClient</code> 类暴露以下模块：</p><table tabindex="0"><thead><tr><th>模块</th><th>描述</th><th>来源</th></tr></thead><tbody><tr><td><code>global</code></td><td>全局事件订阅</td><td><code>sdk.gen.ts:233-243</code></td></tr><tr><td><code>project</code></td><td>项目管理</td><td><code>sdk.gen.ts:245-265</code></td></tr><tr><td><code>session</code></td><td>会话管理（核心）</td><td><code>sdk.gen.ts:431-700</code></td></tr><tr><td><code>file</code></td><td>文件操作</td><td><code>sdk.gen.ts:808-838</code></td></tr><tr><td><code>find</code></td><td>搜索功能</td><td><code>sdk.gen.ts:776-806</code></td></tr><tr><td><code>config</code></td><td>配置管理</td><td><code>sdk.gen.ts:337-371</code></td></tr><tr><td><code>app</code></td><td>应用信息</td><td><code>sdk.gen.ts:840-864</code></td></tr><tr><td><code>tui</code></td><td>TUI 界面控制</td><td><code>sdk.gen.ts:1026-1143</code></td></tr><tr><td><code>event</code></td><td>事件订阅</td><td><code>sdk.gen.ts:1145-1155</code></td></tr><tr><td><code>auth</code></td><td>认证管理</td><td><code>sdk.gen.ts:866-926</code></td></tr><tr><td><code>provider</code></td><td>模型提供商</td><td><code>sdk.gen.ts:753-774</code></td></tr><tr><td><code>mcp</code></td><td>MCP 服务器管理</td><td><code>sdk.gen.ts:928-974</code></td></tr><tr><td><code>lsp</code></td><td>LSP 服务器状态</td><td><code>sdk.gen.ts:976-986</code></td></tr><tr><td><code>formatter</code></td><td>格式化器状态</td><td><code>sdk.gen.ts:988-998</code></td></tr><tr><td><code>command</code></td><td>命令列表</td><td><code>sdk.gen.ts:703-713</code></td></tr><tr><td><code>path</code></td><td>路径信息</td><td><code>sdk.gen.ts:407-417</code></td></tr><tr><td><code>vcs</code></td><td>版本控制信息</td><td><code>sdk.gen.ts:419-429</code></td></tr><tr><td><code>pty</code></td><td>PTY 终端会话</td><td><code>sdk.gen.ts:267-335</code></td></tr><tr><td><code>tool</code></td><td>工具管理（实验性）</td><td><code>sdk.gen.ts:373-393</code></td></tr><tr><td><code>instance</code></td><td>实例管理</td><td><code>sdk.gen.ts:395-405</code></td></tr></tbody></table><hr>',11)),c(n),d[1]||(d[1]=e('<h2 id="session-会话管理" tabindex="-1">Session 会话管理 <a class="header-anchor" href="#session-会话管理" aria-label="Permalink to “Session 会话管理”">​</a></h2><p>会话是 SDK 最核心的模块，提供消息发送、历史管理等功能。</p><h3 id="方法列表" tabindex="-1">方法列表 <a class="header-anchor" href="#方法列表" aria-label="Permalink to “方法列表”">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>session.list()</code></td><td>列出所有会话</td><td><code>Session[]</code></td></tr><tr><td><code>session.get({ path })</code></td><td>获取单个会话</td><td><code>Session</code></td></tr><tr><td><code>session.create({ body })</code></td><td>创建新会话</td><td><code>Session</code></td></tr><tr><td><code>session.delete({ path })</code></td><td>删除会话</td><td><code>boolean</code></td></tr><tr><td><code>session.update({ path, body })</code></td><td>更新会话属性</td><td><code>Session</code></td></tr><tr><td><code>session.status()</code></td><td>获取所有会话状态</td><td><code>{ [sessionID: string]: SessionStatus }</code></td></tr><tr><td><code>session.children({ path })</code></td><td>获取子会话列表</td><td><code>Session[]</code></td></tr><tr><td><code>session.todo({ path })</code></td><td>获取会话 Todo 列表</td><td><code>Todo[]</code></td></tr><tr><td><code>session.init({ path, body })</code></td><td>分析项目并创建 AGENTS.md</td><td><code>boolean</code></td></tr><tr><td><code>session.fork({ path, body })</code></td><td>在指定消息处分叉会话</td><td><code>Session</code></td></tr><tr><td><code>session.abort({ path })</code></td><td>中止运行中的会话</td><td><code>boolean</code></td></tr><tr><td><code>session.share({ path })</code></td><td>分享会话</td><td><code>Session</code></td></tr><tr><td><code>session.unshare({ path })</code></td><td>取消分享</td><td><code>Session</code></td></tr><tr><td><code>session.diff({ path })</code></td><td>获取会话的文件变更</td><td><code>FileDiff[]</code></td></tr><tr><td><code>session.summarize({ path, body })</code></td><td>总结会话内容</td><td><code>boolean</code></td></tr><tr><td><code>session.messages({ path })</code></td><td>获取会话消息列表</td><td><code>{info: Message, parts: Part[]}[]</code></td></tr><tr><td><code>session.message({ path })</code></td><td>获取单条消息详情</td><td><code>{info: Message, parts: Part[]}</code></td></tr><tr><td><code>session.prompt({ path, body })</code></td><td>发送消息并等待响应</td><td><code>AssistantMessage</code></td></tr><tr><td><code>session.promptAsync({ path, body })</code></td><td>异步发送消息（不等待）</td><td><code>204 No Content</code></td></tr><tr><td><code>session.command({ path, body })</code></td><td>发送命令</td><td><code>{info: AssistantMessage, parts: Part[]}</code></td></tr><tr><td><code>session.shell({ path, body })</code></td><td>运行 shell 命令</td><td><code>AssistantMessage</code></td></tr><tr><td><code>session.revert({ path, body })</code></td><td>撤销到指定消息</td><td><code>Session</code></td></tr><tr><td><code>session.unrevert({ path })</code></td><td>恢复已撤销的消息</td><td><code>Session</code></td></tr><tr><td><code>session.permission({ path, body })</code></td><td>响应权限请求</td><td><code>boolean</code></td></tr></tbody></table><h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to “代码示例”">​</a></h3>',5)),d[2]||(d[2]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 创建会话
const session = await client.session.create({
  body: { title: "代码重构任务" },
})

// 发送消息
const result = await client.session.prompt({
  path: { id: session.data!.id },
  body: {
    model: { providerID: "anthropic", modelID: "claude-opus-4-5-thinking" },
    parts: [{ type: "text", text: "请帮我重构这个函数" }],
  },
})

// 获取消息列表
const messages = await client.session.messages({
  path: { id: session.data!.id },
})

// 获取 Todo 列表
const todos = await client.session.todo({
  path: { id: session.data!.id },
})

// 分叉会话
const forked = await client.session.fork({
  path: { id: session.data!.id },
  body: { messageID: "msg-123" },
})

// 获取文件变更
const diff = await client.session.diff({
  path: { id: session.data!.id },
})

// 中止会话
await client.session.abort({
  path: { id: session.data!.id },
})`)])],-1)),d[3]||(d[3]=e('<h3 id="prompt-body-参数" tabindex="-1">prompt body 参数 <a class="header-anchor" href="#prompt-body-参数" aria-label="Permalink to “prompt body 参数”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>parts</code></td><td><code>Part[]</code></td><td>消息内容部分</td></tr><tr><td><code>model</code></td><td><code>{providerID, modelID}</code></td><td>指定模型</td></tr><tr><td><code>noReply</code></td><td><code>boolean</code></td><td>设为 <code>true</code> 则不触发 AI 响应（注入上下文）</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>使用指定 Agent</td></tr></tbody></table><hr><h2 id="project-项目管理" tabindex="-1">Project 项目管理 <a class="header-anchor" href="#project-项目管理" aria-label="Permalink to “Project 项目管理”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>project.list()</code></td><td>列出所有项目</td><td><code>Project[]</code></td></tr><tr><td><code>project.current()</code></td><td>获取当前项目</td><td><code>Project</code></td></tr></tbody></table>',5)),d[4]||(d[4]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取当前项目
const current = await client.project.current()
console.log(\`项目路径: \${current.data?.worktree}\`)

// 列出所有项目
const projects = await client.project.list()`)])],-1)),d[5]||(d[5]=t("h3",{id:"project-类型",tabindex:"-1"},[o("Project 类型 "),t("a",{class:"header-anchor",href:"#project-类型","aria-label":"Permalink to “Project 类型”"},"​")],-1)),d[6]||(d[6]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Project = {
  id: string
  worktree: string      // 工作目录
  vcsDir?: string       // VCS 目录（如 .git）
  vcs?: "git"           // 版本控制类型
  time: {
    created: number
    initialized?: number
  }
}`)])],-1)),d[7]||(d[7]=e('<hr><h2 id="file-文件操作" tabindex="-1">File 文件操作 <a class="header-anchor" href="#file-文件操作" aria-label="Permalink to “File 文件操作”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>file.list({ query })</code></td><td>列出文件和目录</td><td><code>FileNode[]</code></td></tr><tr><td><code>file.read({ query })</code></td><td>读取文件内容</td><td><code>FileContent</code></td></tr><tr><td><code>file.status()</code></td><td>获取文件状态（git 变更）</td><td><code>File[]</code></td></tr></tbody></table>',3)),d[8]||(d[8]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 列出目录内容
const nodes = await client.file.list({
  query: { path: "src" },
})

// 读取文件
const content = await client.file.read({
  query: { path: "src/index.ts" },
})
console.log(content.data?.content)

// 获取 git 状态
const status = await client.file.status()
for (const file of status.data ?? []) {
  console.log(\`\${file.status}: \${file.path} (+\${file.added}/-\${file.removed})\`)
}`)])],-1)),d[9]||(d[9]=e('<hr><h2 id="find-搜索功能" tabindex="-1">Find 搜索功能 <a class="header-anchor" href="#find-搜索功能" aria-label="Permalink to “Find 搜索功能”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>find.text({ query })</code></td><td>在文件内容中搜索文本</td><td>匹配结果数组</td></tr><tr><td><code>find.files({ query })</code></td><td>按名称查找文件/目录</td><td><code>string[]</code></td></tr><tr><td><code>find.symbols({ query })</code></td><td>查找工作区符号</td><td><code>Symbol[]</code></td></tr></tbody></table><h3 id="find-files-查询参数" tabindex="-1">find.files 查询参数 <a class="header-anchor" href="#find-files-查询参数" aria-label="Permalink to “find.files 查询参数”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>query</code></td><td><code>string</code></td><td>搜索模式（支持 glob）</td></tr><tr><td><code>type</code></td><td><code>&quot;file&quot; | &quot;directory&quot;</code></td><td>搜索类型</td></tr><tr><td><code>directory</code></td><td><code>string</code></td><td>覆盖搜索根目录</td></tr><tr><td><code>limit</code></td><td><code>number</code></td><td>最大结果数（1-200）</td></tr></tbody></table>',5)),d[10]||(d[10]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 搜索文本
const matches = await client.find.text({
  query: { pattern: "TODO|FIXME" },
})

// 查找文件
const tsFiles = await client.find.files({
  query: { query: "*.ts", type: "file", limit: 50 },
})

// 查找符号
const symbols = await client.find.symbols({
  query: { query: "handleRequest" },
})`)])],-1)),d[11]||(d[11]=e('<hr><h2 id="config-配置管理" tabindex="-1">Config 配置管理 <a class="header-anchor" href="#config-配置管理" aria-label="Permalink to “Config 配置管理”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>config.get()</code></td><td>获取当前配置</td><td><code>Config</code></td></tr><tr><td><code>config.update({ body })</code></td><td>更新配置</td><td><code>Config</code></td></tr><tr><td><code>config.providers()</code></td><td>获取提供商列表和默认模型</td><td><code>{providers, default}</code></td></tr></tbody></table>',3)),d[12]||(d[12]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取配置
const config = await client.config.get()
console.log(\`当前模型: \${config.data?.model}\`)

// 动态更新配置
await client.config.update({
  body: {
    model: "anthropic/claude-haiku-4-5",
    logLevel: "DEBUG",
  },
})

// 获取提供商信息
const { providers, default: defaults } = (await client.config.providers()).data!`)])],-1)),d[13]||(d[13]=e('<hr><h2 id="app-应用信息" tabindex="-1">App 应用信息 <a class="header-anchor" href="#app-应用信息" aria-label="Permalink to “App 应用信息”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>app.log({ body })</code></td><td>写入日志条目</td><td><code>boolean</code></td></tr><tr><td><code>app.agents()</code></td><td>列出所有 Agent</td><td><code>Agent[]</code></td></tr></tbody></table>',3)),d[14]||(d[14]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 写入日志
await client.app.log({
  body: {
    service: "my-plugin",
    level: "info",
    message: "操作完成",
  },
})

// 获取 Agent 列表
const agents = await client.app.agents()
for (const agent of agents.data ?? []) {
  console.log(\`\${agent.name}: \${agent.description}\`)
}`)])],-1)),d[15]||(d[15]=e('<hr><h2 id="tui-界面控制" tabindex="-1">TUI 界面控制 <a class="header-anchor" href="#tui-界面控制" aria-label="Permalink to “TUI 界面控制”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>tui.appendPrompt({ body })</code></td><td>向输入框追加文本</td><td><code>boolean</code></td></tr><tr><td><code>tui.submitPrompt()</code></td><td>提交当前输入</td><td><code>boolean</code></td></tr><tr><td><code>tui.clearPrompt()</code></td><td>清空输入框</td><td><code>boolean</code></td></tr><tr><td><code>tui.showToast({ body })</code></td><td>显示通知</td><td><code>boolean</code></td></tr><tr><td><code>tui.openHelp()</code></td><td>打开帮助对话框</td><td><code>boolean</code></td></tr><tr><td><code>tui.openSessions()</code></td><td>打开会话选择器</td><td><code>boolean</code></td></tr><tr><td><code>tui.openThemes()</code></td><td>打开主题选择器</td><td><code>boolean</code></td></tr><tr><td><code>tui.openModels()</code></td><td>打开模型选择器</td><td><code>boolean</code></td></tr><tr><td><code>tui.executeCommand({ body })</code></td><td>执行 TUI 命令</td><td><code>boolean</code></td></tr><tr><td><code>tui.publish({ body })</code></td><td>发布 TUI 事件</td><td><code>boolean</code></td></tr><tr><td><code>tui.control.next()</code></td><td>获取下一个 TUI 请求</td><td>-</td></tr><tr><td><code>tui.control.response()</code></td><td>提交 TUI 响应</td><td>-</td></tr></tbody></table><h3 id="showtoast-参数" tabindex="-1">showToast 参数 <a class="header-anchor" href="#showtoast-参数" aria-label="Permalink to “showToast 参数”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>message</code></td><td><code>string</code></td><td>通知内容</td></tr><tr><td><code>title</code></td><td><code>string</code></td><td>通知标题（可选）</td></tr><tr><td><code>variant</code></td><td><code>&quot;info&quot; | &quot;success&quot; | &quot;warning&quot; | &quot;error&quot;</code></td><td>通知类型</td></tr><tr><td><code>duration</code></td><td><code>number</code></td><td>显示时长（毫秒）</td></tr></tbody></table>',5)),d[16]||(d[16]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 显示成功通知
await client.tui.showToast({
  body: {
    title: "操作成功",
    message: "文件已保存",
    variant: "success",
    duration: 3000,
  },
})

// 执行命令
await client.tui.executeCommand({
  body: { command: "session.new" },
})`)])],-1)),d[17]||(d[17]=e('<hr><h2 id="auth-认证管理" tabindex="-1">Auth 认证管理 <a class="header-anchor" href="#auth-认证管理" aria-label="Permalink to “Auth 认证管理”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>auth.set({ path, body })</code></td><td>设置认证凭据</td><td><code>boolean</code></td></tr><tr><td><code>auth.remove({ path })</code></td><td>移除 MCP OAuth 凭据</td><td><code>boolean</code></td></tr><tr><td><code>auth.start({ path })</code></td><td>启动 OAuth 流程</td><td>-</td></tr><tr><td><code>auth.callback({ path, body })</code></td><td>OAuth 回调</td><td>-</td></tr><tr><td><code>auth.authenticate({ path })</code></td><td>自动 OAuth（打开浏览器）</td><td>-</td></tr></tbody></table>',3)),d[18]||(d[18]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 设置 API Key
await client.auth.set({
  path: { id: "anthropic" },
  body: { type: "api", key: "sk-xxx" },
})

// 设置 OAuth 凭据
await client.auth.set({
  path: { id: "github" },
  body: {
    type: "oauth",
    access: "access-token",
    refresh: "refresh-token",
    expires: Date.now() + 3600000,
  },
})`)])],-1)),d[19]||(d[19]=e('<hr><h2 id="provider-提供商管理" tabindex="-1">Provider 提供商管理 <a class="header-anchor" href="#provider-提供商管理" aria-label="Permalink to “Provider 提供商管理”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>provider.list()</code></td><td>列出所有提供商</td><td><code>Provider[]</code></td></tr><tr><td><code>provider.auth()</code></td><td>获取提供商认证方法</td><td><code>ProviderAuthMethod[]</code></td></tr><tr><td><code>provider.oauth.authorize({ path, body })</code></td><td>OAuth 授权</td><td>-</td></tr><tr><td><code>provider.oauth.callback({ path, body })</code></td><td>OAuth 回调</td><td>-</td></tr></tbody></table>',3)),d[20]||(d[20]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取提供商列表
const providers = await client.provider.list()
for (const p of providers.data ?? []) {
  console.log(\`\${p.name} (\${p.id}): \${Object.keys(p.models).length} 个模型\`)
}

// 获取认证方法
const authMethods = await client.provider.auth()`)])],-1)),d[21]||(d[21]=e('<hr><h2 id="mcp-服务器管理" tabindex="-1">MCP 服务器管理 <a class="header-anchor" href="#mcp-服务器管理" aria-label="Permalink to “MCP 服务器管理”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>mcp.status()</code></td><td>获取 MCP 服务器状态</td><td><code>McpStatus[]</code></td></tr><tr><td><code>mcp.add({ body })</code></td><td>动态添加 MCP 服务器</td><td>-</td></tr><tr><td><code>mcp.connect({ path })</code></td><td>连接 MCP 服务器</td><td>-</td></tr><tr><td><code>mcp.disconnect({ path })</code></td><td>断开 MCP 服务器</td><td>-</td></tr><tr><td><code>mcp.auth.*</code></td><td>MCP OAuth 认证</td><td>-</td></tr></tbody></table><h3 id="mcpstatus-类型" tabindex="-1">McpStatus 类型 <a class="header-anchor" href="#mcpstatus-类型" aria-label="Permalink to “McpStatus 类型”">​</a></h3>',4)),d[22]||(d[22]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type McpStatus = 
  | { status: "connected" }
  | { status: "disabled" }
  | { status: "failed"; error: string }
  | { status: "needs_auth" }
  | { status: "needs_client_registration"; error: string }`)])],-1)),d[23]||(d[23]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取状态
const status = await client.mcp.status()

// 动态添加 MCP 服务器
await client.mcp.add({
  body: {
    name: "my-mcp",
    type: "local",
    command: ["node", "mcp-server.js"],
  },
})

// 连接/断开
await client.mcp.connect({ path: { name: "my-mcp" } })
await client.mcp.disconnect({ path: { name: "my-mcp" } })`)])],-1)),d[24]||(d[24]=t("hr",null,null,-1)),d[25]||(d[25]=t("h2",{id:"lsp-和-formatter-状态",tabindex:"-1"},[o("LSP 和 Formatter 状态 "),t("a",{class:"header-anchor",href:"#lsp-和-formatter-状态","aria-label":"Permalink to “LSP 和 Formatter 状态”"},"​")],-1)),d[26]||(d[26]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// LSP 状态
const lspStatus = await client.lsp.status()
for (const lsp of lspStatus.data ?? []) {
  console.log(\`\${lsp.name}: \${lsp.status}\`)
}

// 格式化器状态
const formatterStatus = await client.formatter.status()
for (const fmt of formatterStatus.data ?? []) {
  console.log(\`\${fmt.name}: \${fmt.enabled ? "启用" : "禁用"}\`)
}`)])],-1)),d[27]||(d[27]=e('<hr><h2 id="pty-终端会话" tabindex="-1">PTY 终端会话 <a class="header-anchor" href="#pty-终端会话" aria-label="Permalink to “PTY 终端会话”">​</a></h2><p>用于管理伪终端会话（实验性功能）。</p><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>pty.list()</code></td><td>列出所有 PTY 会话</td><td><code>Pty[]</code></td></tr><tr><td><code>pty.create({ body })</code></td><td>创建 PTY 会话</td><td><code>Pty</code></td></tr><tr><td><code>pty.get({ path })</code></td><td>获取 PTY 会话信息</td><td><code>Pty</code></td></tr><tr><td><code>pty.update({ path, body })</code></td><td>更新 PTY 会话</td><td><code>Pty</code></td></tr><tr><td><code>pty.remove({ path })</code></td><td>移除 PTY 会话</td><td><code>boolean</code></td></tr><tr><td><code>pty.connect({ path })</code></td><td>连接 PTY 会话</td><td><code>boolean</code></td></tr></tbody></table><h3 id="pty-类型" tabindex="-1">Pty 类型 <a class="header-anchor" href="#pty-类型" aria-label="Permalink to “Pty 类型”">​</a></h3>',5)),d[28]||(d[28]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Pty = {
  id: string
  title: string
  command: string
  args: string[]
  cwd: string
  status: "running" | "exited"
  pid: number
}`)])],-1)),d[29]||(d[29]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 创建 PTY 会话
const pty = await client.pty.create({
  body: {
    command: "bash",
    cwd: "/home/user/project",
    title: "开发终端",
  },
})

// 更新窗口大小
await client.pty.update({
  path: { id: pty.data!.id },
  body: {
    size: { rows: 24, cols: 80 },
  },
})`)])],-1)),d[30]||(d[30]=e('<hr><h2 id="tool-工具管理-实验性" tabindex="-1">Tool 工具管理（实验性） <a class="header-anchor" href="#tool-工具管理-实验性" aria-label="Permalink to “Tool 工具管理（实验性）”">​</a></h2><blockquote><p>以下 API 位于 <code>/experimental/</code> 路径，可能在未来版本变更。</p></blockquote><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td><code>tool.ids()</code></td><td>列出所有工具 ID</td><td><code>string[]</code></td></tr><tr><td><code>tool.list({ query })</code></td><td>获取工具的 JSON Schema</td><td><code>ToolListItem[]</code></td></tr></tbody></table>',4)),d[31]||(d[31]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取所有工具 ID
const toolIds = await client.tool.ids()
console.log("可用工具:", toolIds.data)

// 获取工具详情（需指定模型）
const tools = await client.tool.list({
  query: {
    provider: "anthropic",
    model: "claude-opus-4-5-thinking",
  },
})`)])],-1)),d[32]||(d[32]=t("hr",null,null,-1)),d[33]||(d[33]=t("h2",{id:"path-和-vcs-信息",tabindex:"-1"},[o("Path 和 VCS 信息 "),t("a",{class:"header-anchor",href:"#path-和-vcs-信息","aria-label":"Permalink to “Path 和 VCS 信息”"},"​")],-1)),d[34]||(d[34]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},"// 获取路径信息\nconst pathInfo = await client.path.get()\nconsole.log(`状态目录: ${pathInfo.data?.state}`)\nconsole.log(`配置目录: ${pathInfo.data?.config}`)\nconsole.log(`工作树: ${pathInfo.data?.worktree}`)\nconsole.log(`当前目录: ${pathInfo.data?.directory}`)\n\n// 获取 VCS 信息\nconst vcsInfo = await client.vcs.get()\nconsole.log(`当前分支: ${vcsInfo.data?.branch}`)")])],-1)),d[35]||(d[35]=t("hr",null,null,-1)),d[36]||(d[36]=t("h2",{id:"instance-实例管理",tabindex:"-1"},[o("Instance 实例管理 "),t("a",{class:"header-anchor",href:"#instance-实例管理","aria-label":"Permalink to “Instance 实例管理”"},"​")],-1)),d[37]||(d[37]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 销毁当前实例
await client.instance.dispose()`)])],-1)),d[38]||(d[38]=t("hr",null,null,-1)),d[39]||(d[39]=t("h2",{id:"command-命令列表",tabindex:"-1"},[o("Command 命令列表 "),t("a",{class:"header-anchor",href:"#command-命令列表","aria-label":"Permalink to “Command 命令列表”"},"​")],-1)),d[40]||(d[40]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},"// 获取所有命令\nconst commands = await client.command.list()\nfor (const cmd of commands.data ?? []) {\n  console.log(`/${cmd.name}: ${cmd.description}`)\n}")])],-1)),d[41]||(d[41]=e('<hr><h2 id="事件类型完整列表" tabindex="-1">事件类型完整列表 <a class="header-anchor" href="#事件类型完整列表" aria-label="Permalink to “事件类型完整列表”">​</a></h2><p>SDK 支持 35+ 种实时事件，通过 <code>client.event.subscribe()</code> 订阅。</p><h3 id="服务器事件" tabindex="-1">服务器事件 <a class="header-anchor" href="#服务器事件" aria-label="Permalink to “服务器事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>server.connected</code></td><td>服务器已连接</td><td>-</td></tr><tr><td><code>server.instance.disposed</code></td><td>实例已销毁</td><td><code>directory</code></td></tr></tbody></table><h3 id="安装事件" tabindex="-1">安装事件 <a class="header-anchor" href="#安装事件" aria-label="Permalink to “安装事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>installation.updated</code></td><td>安装已更新</td><td><code>version</code></td></tr><tr><td><code>installation.update-available</code></td><td>有可用更新</td><td><code>version</code></td></tr></tbody></table><h3 id="会话事件" tabindex="-1">会话事件 <a class="header-anchor" href="#会话事件" aria-label="Permalink to “会话事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>session.created</code></td><td>会话已创建</td><td><code>info: Session</code></td></tr><tr><td><code>session.updated</code></td><td>会话已更新</td><td><code>info: Session</code></td></tr><tr><td><code>session.deleted</code></td><td>会话已删除</td><td><code>info: Session</code></td></tr><tr><td><code>session.status</code></td><td>会话状态变更</td><td><code>sessionID</code>, <code>status</code></td></tr><tr><td><code>session.idle</code></td><td>会话进入空闲</td><td><code>sessionID</code></td></tr><tr><td><code>session.compacted</code></td><td>会话已压缩</td><td><code>sessionID</code></td></tr><tr><td><code>session.diff</code></td><td>会话文件变更</td><td><code>sessionID</code>, <code>diff: FileDiff[]</code></td></tr><tr><td><code>session.error</code></td><td>会话错误</td><td><code>sessionID?</code>, <code>error</code></td></tr></tbody></table><h3 id="消息事件" tabindex="-1">消息事件 <a class="header-anchor" href="#消息事件" aria-label="Permalink to “消息事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>message.updated</code></td><td>消息已更新</td><td><code>info: Message</code></td></tr><tr><td><code>message.removed</code></td><td>消息已删除</td><td><code>sessionID</code>, <code>messageID</code></td></tr><tr><td><code>message.part.updated</code></td><td>消息部分更新</td><td><code>part: Part</code>, <code>delta?: string</code></td></tr><tr><td><code>message.part.removed</code></td><td>消息部分删除</td><td><code>sessionID</code>, <code>messageID</code>, <code>partID</code></td></tr></tbody></table><h3 id="权限事件" tabindex="-1">权限事件 <a class="header-anchor" href="#权限事件" aria-label="Permalink to “权限事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>permission.updated</code></td><td>权限请求待处理</td><td><code>Permission</code></td></tr><tr><td><code>permission.replied</code></td><td>权限已响应</td><td><code>sessionID</code>, <code>permissionID</code>, <code>response</code></td></tr></tbody></table><h3 id="文件事件" tabindex="-1">文件事件 <a class="header-anchor" href="#文件事件" aria-label="Permalink to “文件事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>file.edited</code></td><td>文件已编辑</td><td><code>file</code></td></tr><tr><td><code>file.watcher.updated</code></td><td>文件监视器更新</td><td><code>file</code>, <code>event: &quot;add&quot; | &quot;change&quot; | &quot;unlink&quot;</code></td></tr></tbody></table><h3 id="todo-事件" tabindex="-1">Todo 事件 <a class="header-anchor" href="#todo-事件" aria-label="Permalink to “Todo 事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>todo.updated</code></td><td>Todo 列表更新</td><td><code>sessionID</code>, <code>todos: Todo[]</code></td></tr></tbody></table><h3 id="命令事件" tabindex="-1">命令事件 <a class="header-anchor" href="#命令事件" aria-label="Permalink to “命令事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>command.executed</code></td><td>命令已执行</td><td><code>name</code>, <code>sessionID</code>, <code>arguments</code>, <code>messageID</code></td></tr></tbody></table><h3 id="vcs-事件" tabindex="-1">VCS 事件 <a class="header-anchor" href="#vcs-事件" aria-label="Permalink to “VCS 事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>vcs.branch.updated</code></td><td>分支已切换</td><td><code>branch?</code></td></tr></tbody></table><h3 id="lsp-事件" tabindex="-1">LSP 事件 <a class="header-anchor" href="#lsp-事件" aria-label="Permalink to “LSP 事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>lsp.updated</code></td><td>LSP 状态更新</td><td>-</td></tr><tr><td><code>lsp.client.diagnostics</code></td><td>LSP 诊断信息</td><td><code>serverID</code>, <code>path</code></td></tr></tbody></table><h3 id="tui-事件" tabindex="-1">TUI 事件 <a class="header-anchor" href="#tui-事件" aria-label="Permalink to “TUI 事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>tui.prompt.append</code></td><td>输入框追加文本</td><td><code>text</code></td></tr><tr><td><code>tui.command.execute</code></td><td>TUI 命令执行</td><td><code>command</code></td></tr><tr><td><code>tui.toast.show</code></td><td>显示通知</td><td><code>title?</code>, <code>message</code>, <code>variant</code>, <code>duration?</code></td></tr></tbody></table><h3 id="pty-事件" tabindex="-1">PTY 事件 <a class="header-anchor" href="#pty-事件" aria-label="Permalink to “PTY 事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>描述</th><th>属性</th></tr></thead><tbody><tr><td><code>pty.created</code></td><td>PTY 会话已创建</td><td><code>info: Pty</code></td></tr><tr><td><code>pty.updated</code></td><td>PTY 会话已更新</td><td><code>info: Pty</code></td></tr><tr><td><code>pty.exited</code></td><td>PTY 会话已退出</td><td><code>id</code>, <code>exitCode</code></td></tr><tr><td><code>pty.deleted</code></td><td>PTY 会话已删除</td><td><code>id</code></td></tr></tbody></table><h3 id="事件监听示例" tabindex="-1">事件监听示例 <a class="header-anchor" href="#事件监听示例" aria-label="Permalink to “事件监听示例”">​</a></h3>',28)),d[42]||(d[42]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`const events = await client.event.subscribe()

for await (const event of events.stream) {
  switch (event.type) {
    case "message.part.updated":
      // 增量更新，可用于流式显示
      if (event.properties.delta) {
        process.stdout.write(event.properties.delta)
      }
      break
      
    case "session.status":
      const { sessionID, status } = event.properties
      if (status.type === "busy") {
        console.log(\`会话 \${sessionID} 正在处理...\`)
      } else if (status.type === "idle") {
        console.log(\`会话 \${sessionID} 已完成\`)
      } else if (status.type === "retry") {
        console.log(\`会话 \${sessionID} 重试中 (\${status.attempt})\`)
      }
      break
      
    case "permission.updated":
      console.log(\`权限请求: \${event.properties.title}\`)
      // 可以自动响应权限请求
      await client.postSessionIdPermissionsPermissionId({
        path: {
          id: event.properties.sessionID,
          permissionID: event.properties.id,
        },
        body: { allow: true },
      })
      break
      
    case "file.edited":
      console.log(\`文件已修改: \${event.properties.file}\`)
      break
      
    case "todo.updated":
      console.log(\`Todo 更新:\`, event.properties.todos)
      break
  }
}`)])],-1)),d[43]||(d[43]=t("hr",null,null,-1)),d[44]||(d[44]=t("h2",{id:"完整类型定义",tabindex:"-1"},[o("完整类型定义 "),t("a",{class:"header-anchor",href:"#完整类型定义","aria-label":"Permalink to “完整类型定义”"},"​")],-1)),d[45]||(d[45]=t("h3",{id:"核心类型",tabindex:"-1"},[o("核心类型 "),t("a",{class:"header-anchor",href:"#核心类型","aria-label":"Permalink to “核心类型”"},"​")],-1)),d[46]||(d[46]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 会话
type Session = {
  id: string
  projectID: string
  directory: string
  parentID?: string
  title: string
  version: string
  summary?: {
    additions: number
    deletions: number
    files: number
    diffs?: FileDiff[]
  }
  share?: { url: string }
  time: {
    created: number
    updated: number
    compacting?: number
  }
  revert?: {
    messageID: string
    partID?: string
    snapshot?: string
    diff?: string
  }
}

// 会话状态
type SessionStatus =
  | { type: "idle" }
  | { type: "busy" }
  | { type: "retry"; attempt: number; message: string; next: number }

// 消息
type Message = UserMessage | AssistantMessage

type UserMessage = {
  id: string
  sessionID: string
  role: "user"
  agent: string
  model: { providerID: string; modelID: string }
  time: { created: number }
  summary?: { title?: string; body?: string; diffs: FileDiff[] }
  system?: string
  tools?: { [key: string]: boolean }
}

type AssistantMessage = {
  id: string
  sessionID: string
  role: "assistant"
  parentID: string
  modelID: string
  providerID: string
  mode: string
  path: { cwd: string; root: string }
  time: { created: number; completed?: number }
  error?: MessageError
  cost: number
  tokens: {
    input: number
    output: number
    reasoning: number
    cache: { read: number; write: number }
  }
  finish?: string
  summary?: boolean
}`)])],-1)),d[47]||(d[47]=t("h3",{id:"part-类型",tabindex:"-1"},[o("Part 类型 "),t("a",{class:"header-anchor",href:"#part-类型","aria-label":"Permalink to “Part 类型”"},"​")],-1)),d[48]||(d[48]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Part =
  | TextPart
  | ReasoningPart
  | FilePart
  | ToolPart
  | StepStartPart
  | StepFinishPart
  | SnapshotPart
  | PatchPart
  | AgentPart
  | RetryPart
  | CompactionPart
  | SubtaskPart

type TextPart = {
  id: string
  sessionID: string
  messageID: string
  type: "text"
  text: string
  synthetic?: boolean
  ignored?: boolean
  time?: { start: number; end?: number }
  metadata?: { [key: string]: unknown }
}

type ToolPart = {
  id: string
  sessionID: string
  messageID: string
  type: "tool"
  callID: string
  tool: string
  state: ToolState
  metadata?: { [key: string]: unknown }
}

type ToolState =
  | { status: "pending"; input: object; raw: string }
  | { status: "running"; input: object; title?: string; time: { start: number } }
  | { status: "completed"; input: object; output: string; title: string; time: { start: number; end: number } }
  | { status: "error"; input: object; error: string; time: { start: number; end: number } }`)])],-1)),d[49]||(d[49]=t("h3",{id:"错误类型",tabindex:"-1"},[o("错误类型 "),t("a",{class:"header-anchor",href:"#错误类型","aria-label":"Permalink to “错误类型”"},"​")],-1)),d[50]||(d[50]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type MessageError =
  | ProviderAuthError
  | UnknownError
  | MessageOutputLengthError
  | MessageAbortedError
  | ApiError

type ApiError = {
  name: "APIError"
  data: {
    message: string
    statusCode?: number
    isRetryable: boolean
    responseHeaders?: { [key: string]: string }
    responseBody?: string
  }
}`)])],-1)),d[51]||(d[51]=t("h3",{id:"其他类型",tabindex:"-1"},[o("其他类型 "),t("a",{class:"header-anchor",href:"#其他类型","aria-label":"Permalink to “其他类型”"},"​")],-1)),d[52]||(d[52]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Todo = {
  id: string
  content: string
  status: string  // pending, in_progress, completed, cancelled
  priority: string  // high, medium, low
}

type Permission = {
  id: string
  type: string
  pattern?: string | string[]
  sessionID: string
  messageID: string
  callID?: string
  title: string
  metadata: { [key: string]: unknown }
  time: { created: number }
}

type Agent = {
  name: string
  description?: string
  mode: "subagent" | "primary" | "all"
  builtIn: boolean
  topP?: number
  temperature?: number
  color?: string
  model?: { modelID: string; providerID: string }
  prompt?: string
  tools: { [key: string]: boolean }
  options: { [key: string]: unknown }
  maxSteps?: number
  permission: {
    edit: "ask" | "allow" | "deny"
    bash: { [key: string]: "ask" | "allow" | "deny" }
    webfetch?: "ask" | "allow" | "deny"
    doom_loop?: "ask" | "allow" | "deny"
    external_directory?: "ask" | "allow" | "deny"
  }
}

type FileDiff = {
  file: string
  before: string
  after: string
  additions: number
  deletions: number
}`)])],-1)),d[53]||(d[53]=e('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td><code>data</code> 返回 <code>undefined</code></td><td>请求失败，检查 <code>error</code> 字段</td><td>检查 <code>result.error</code></td></tr><tr><td>事件流断开</td><td>网络中断或服务器重启</td><td>实现重连逻辑</td></tr><tr><td><code>tool.list</code> 返回空</td><td>需要指定 <code>provider</code> 和 <code>model</code></td><td>添加 query 参数</td></tr><tr><td>权限请求无响应</td><td>需要手动响应</td><td>使用 <code>postSessionIdPermissionsPermissionId</code></td></tr><tr><td>MCP 状态 <code>needs_auth</code></td><td>MCP 服务器需要 OAuth 认证</td><td>调用 <code>mcp.auth.authenticate</code></td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>21 个 API 模块</strong>的完整方法列表</li><li><strong>35+ 种事件类型</strong>及其属性</li><li><strong>核心类型定义</strong>：Session、Message、Part、Todo、Agent 等</li><li><strong>实验性 API</strong>：Tool 管理、PTY 终端</li></ol><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./10a-sdk-basics.html">5.10a SDK 基础</a> - 入门教程</li><li><a href="./09a-remote-basics.html">5.9 远程开发</a> - HTTP Server 详解</li><li><a href="https://github.com/opencode-ai/opencode/blob/dev/packages/sdk/js/src/gen/types.gen.ts" target="_blank" rel="noreferrer">SDK 类型定义源码</a></li></ul>',10))])}const T=a(p,[["render",h]]);export{P as __pageData,T as default};
