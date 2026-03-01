import{_ as a,I as s,c as r,o as i,a5 as o,J as l,j as e,a as n,bd as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.10a SDK 基础","description":"使用 SDK 编程方式控制 OpenCode，实现自动化和深度集成。","frontmatter":{"title":"5.10a SDK 基础","subtitle":"编程方式控制 OpenCode","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.10a","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"使用 SDK 编程方式控制 OpenCode，实现自动化和深度集成。","tags":["SDK","编程接口","自动化"],"prerequisite":["5.1 配置全解","5.9 远程开发"]},"headers":[],"relativePath":"5-advanced/10a-sdk-basics.md","filePath":"5-advanced/10a-sdk-basics.md","lastUpdated":1772014034000}'),p={name:"5-advanced/10a-sdk-basics.md"};function u(h,t,b,g,y,m){const d=s("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=o('<h1 id="_5-10a-sdk-基础" tabindex="-1">5.10a SDK 基础 <a class="header-anchor" href="#_5-10a-sdk-基础" aria-label="Permalink to “5.10a SDK 基础”">​</a></h1><blockquote><p><strong>一句话总结</strong>：使用 JavaScript/TypeScript SDK 以编程方式控制 OpenCode，实现自动化工作流和自定义集成。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+c+'" alt="5.10a SDK 基础学霸笔记" data-zoom-src="/images/5-advanced/10a-sdk-basics-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>安装和配置 OpenCode SDK</li><li>创建服务器和客户端实例</li><li>启动 TUI 界面</li><li>管理会话和发送消息</li><li>监听实时事件</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>想在自己的应用里调用 OpenCode</li><li>想以编程方式批量处理任务</li><li>想构建自定义集成（IDE 插件、CI/CD 工具等）</li><li>想在脚本中自动化 OpenCode 操作</li></ul><hr><h2 id="sdk-架构概览" tabindex="-1">SDK 架构概览 <a class="header-anchor" href="#sdk-架构概览" aria-label="Permalink to “SDK 架构概览”">​</a></h2>',13)),l(d),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────┐
│                    你的应用程序                           │
├─────────────────────────────────────────────────────────┤
│                   @opencode-ai/sdk                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │createOpencode│  │createOpencode│  │createOpencode│    │
│  │             │  │   Client    │  │    Tui      │      │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘      │
│         │                │                │              │
│  服务器+客户端      仅客户端连接      启动 TUI 界面       │
└─────────┼────────────────┼────────────────┼─────────────┘
          │                │                │
          ▼                ▼                ▼
┌─────────────────────────────────────────────────────────┐
│                  OpenCode Server                         │
│            HTTP API (默认端口 4096)                       │
└─────────────────────────────────────────────────────────┘`)])],-1)),t[2]||(t[2]=e("hr",null,null,-1)),t[3]||(t[3]=e("h2",{id:"安装-sdk",tabindex:"-1"},[n("安装 SDK "),e("a",{class:"header-anchor",href:"#安装-sdk","aria-label":"Permalink to “安装 SDK”"},"​")],-1)),t[4]||(t[4]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"npm install @opencode-ai/sdk")])],-1)),t[5]||(t[5]=e("hr",null,null,-1)),t[6]||(t[6]=e("h2",{id:"三种使用方式",tabindex:"-1"},[n("三种使用方式 "),e("a",{class:"header-anchor",href:"#三种使用方式","aria-label":"Permalink to “三种使用方式”"},"​")],-1)),t[7]||(t[7]=e("h3",{id:"_1-创建服务器-客户端-推荐",tabindex:"-1"},[n("1. 创建服务器 + 客户端（推荐） "),e("a",{class:"header-anchor",href:"#_1-创建服务器-客户端-推荐","aria-label":"Permalink to “1. 创建服务器 + 客户端（推荐）”"},"​")],-1)),t[8]||(t[8]=e("p",null,"同时启动服务器和客户端，适合独立脚本和自动化场景：",-1)),t[9]||(t[9]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"

const { client, server } = await createOpencode()

// 使用 client 调用 API
const sessions = await client.session.list()
console.log(\`当前有 \${sessions.data?.length} 个会话\`)

// 完成后关闭服务器
server.close()`)])],-1)),t[10]||(t[10]=o('<h4 id="serveroptions-参数" tabindex="-1">ServerOptions 参数 <a class="header-anchor" href="#serveroptions-参数" aria-label="Permalink to “ServerOptions 参数”">​</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>hostname</code></td><td><code>string</code></td><td>服务器主机名</td><td><code>127.0.0.1</code></td></tr><tr><td><code>port</code></td><td><code>number</code></td><td>服务器端口</td><td><code>4096</code></td></tr><tr><td><code>signal</code></td><td><code>AbortSignal</code></td><td>用于取消的中止信号</td><td><code>undefined</code></td></tr><tr><td><code>timeout</code></td><td><code>number</code></td><td>服务器启动超时（毫秒）</td><td><code>2000+</code></td></tr><tr><td><code>config</code></td><td><code>Config</code></td><td>配置对象，覆盖 <code>opencode.json</code></td><td><code>{}</code></td></tr></tbody></table><blockquote><p><strong>来源</strong>：<code>packages/sdk/js/src/server.ts:4-10</code></p></blockquote><h4 id="配置覆盖示例" tabindex="-1">配置覆盖示例 <a class="header-anchor" href="#配置覆盖示例" aria-label="Permalink to “配置覆盖示例”">​</a></h4>',4)),t[11]||(t[11]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"

const opencode = await createOpencode({
  hostname: "127.0.0.1",
  port: 4097,  // 使用不同端口避免冲突
  timeout: 10000,
  config: {
    model: "anthropic/claude-opus-4-5-thinking",
    logLevel: "DEBUG",
  },
})

console.log(\`服务器运行在 \${opencode.server.url}\`)

// 使用完毕后关闭
opencode.server.close()`)])],-1)),t[12]||(t[12]=e("hr",null,null,-1)),t[13]||(t[13]=e("h3",{id:"_2-仅客户端模式",tabindex:"-1"},[n("2. 仅客户端模式 "),e("a",{class:"header-anchor",href:"#_2-仅客户端模式","aria-label":"Permalink to “2. 仅客户端模式”"},"​")],-1)),t[14]||(t[14]=e("p",null,"连接到已运行的 OpenCode 实例，适合插件开发：",-1)),t[15]||(t[15]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeClient } from "@opencode-ai/sdk"

const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
})

// 直接使用 client
const sessions = await client.session.list()`)])],-1)),t[16]||(t[16]=o('<h4 id="clientoptions-参数" tabindex="-1">ClientOptions 参数 <a class="header-anchor" href="#clientoptions-参数" aria-label="Permalink to “ClientOptions 参数”">​</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>baseUrl</code></td><td><code>string</code></td><td>服务器 URL</td><td><code>http://localhost:4096</code></td></tr><tr><td><code>fetch</code></td><td><code>function</code></td><td>自定义 fetch 实现</td><td><code>globalThis.fetch</code></td></tr><tr><td><code>parseAs</code></td><td><code>string</code></td><td>响应解析方式：<code>auto</code>, <code>json</code>, <code>text</code>, <code>blob</code>, <code>arrayBuffer</code>, <code>stream</code>, <code>formData</code></td><td><code>auto</code></td></tr><tr><td><code>responseStyle</code></td><td><code>&quot;data&quot; | &quot;fields&quot;</code></td><td>返回风格：<code>data</code> 仅返回数据，<code>fields</code> 返回完整响应</td><td><code>fields</code></td></tr><tr><td><code>throwOnError</code></td><td><code>boolean</code></td><td>出错时抛出异常而非返回</td><td><code>false</code></td></tr><tr><td><code>directory</code></td><td><code>string</code></td><td>指定项目目录（通过 <code>X-Opencode-Directory</code> header 传递）</td><td><code>undefined</code></td></tr></tbody></table><blockquote><p><strong>来源</strong>：<code>packages/sdk/js/src/gen/client/types.gen.ts:10-52</code>、<code>packages/sdk/js/src/client.ts:8</code></p></blockquote><h4 id="多项目目录切换" tabindex="-1">多项目目录切换 <a class="header-anchor" href="#多项目目录切换" aria-label="Permalink to “多项目目录切换”">​</a></h4>',4)),t[17]||(t[17]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 连接到不同项目
const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
  directory: "/path/to/my-project",
})`)])],-1)),t[18]||(t[18]=e("h4",{id:"远程连接-带认证",tabindex:"-1"},[n("远程连接（带认证） "),e("a",{class:"header-anchor",href:"#远程连接-带认证","aria-label":"Permalink to “远程连接（带认证）”"},"​")],-1)),t[19]||(t[19]=e("p",null,[n("当连接远程 OpenCode 服务器时，如果服务器设置了 "),e("code",null,"OPENCODE_SERVER_PASSWORD"),n("，需要通过 "),e("code",null,"headers"),n(" 传递 Basic Auth 认证：")],-1)),t[20]||(t[20]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeClient } from "@opencode-ai/sdk"

// 远程连接（带认证）
const client = createOpencodeClient({
  baseUrl: "http://192.168.1.100:4096",
  headers: {
    // Basic Auth 格式：Base64(username:password)
    // 浏览器/Edge Runtime 用 btoa()
    Authorization: \`Basic \${btoa("opencode:your-password")}\`
  },
  directory: "/projects/my-app"  // 指定远程项目目录
})`)])],-1)),t[21]||(t[21]=e("details",{class:"details custom-block"},[e("summary",null,"Node.js 环境用 Buffer"),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},'// Node.js 没有 btoa，用 Buffer 代替\nAuthorization: `Basic ${Buffer.from("opencode:password").toString("base64")}`')])])],-1)),t[22]||(t[22]=o('<table tabindex="0"><thead><tr><th>场景</th><th>用户名</th><th>说明</th></tr></thead><tbody><tr><td>默认</td><td><code>opencode</code></td><td>服务器默认用户名</td></tr><tr><td>自定义</td><td>环境变量 <code>OPENCODE_SERVER_USERNAME</code> 的值</td><td>如果服务器设置了自定义用户名</td></tr></tbody></table><blockquote><p><strong>来源</strong>：<code>packages/opencode/src/server/server.ts:84-87</code>（Basic Auth 中间件）</p></blockquote><hr><h3 id="_3-启动-tui-界面" tabindex="-1">3. 启动 TUI 界面 <a class="header-anchor" href="#_3-启动-tui-界面" aria-label="Permalink to “3. 启动 TUI 界面”">​</a></h3><p>以编程方式启动 OpenCode 的终端界面：</p>',5)),t[23]||(t[23]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeTui } from "@opencode-ai/sdk"

const tui = createOpencodeTui({
  project: "/path/to/my-project",
  model: "anthropic/claude-opus-4-5-thinking",
  session: "abc123",  // 恢复指定会话
  agent: "build",
})

// 用户可以在 TUI 中交互
// ...

// 关闭 TUI
tui.close()`)])],-1)),t[24]||(t[24]=o('<h4 id="tuioptions-参数" tabindex="-1">TuiOptions 参数 <a class="header-anchor" href="#tuioptions-参数" aria-label="Permalink to “TuiOptions 参数”">​</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>project</code></td><td><code>string</code></td><td>项目目录路径</td></tr><tr><td><code>model</code></td><td><code>string</code></td><td>使用的模型（格式：<code>provider/model</code>）</td></tr><tr><td><code>session</code></td><td><code>string</code></td><td>恢复指定会话 ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>使用的 Agent（如 <code>build</code>, <code>plan</code>）</td></tr><tr><td><code>signal</code></td><td><code>AbortSignal</code></td><td>用于取消的中止信号</td></tr><tr><td><code>config</code></td><td><code>Config</code></td><td>配置对象</td></tr></tbody></table><blockquote><p><strong>来源</strong>：<code>packages/sdk/js/src/server.ts:12-19</code></p></blockquote><hr><h2 id="基础-api-使用" tabindex="-1">基础 API 使用 <a class="header-anchor" href="#基础-api-使用" aria-label="Permalink to “基础 API 使用”">​</a></h2><h3 id="会话管理" tabindex="-1">会话管理 <a class="header-anchor" href="#会话管理" aria-label="Permalink to “会话管理”">​</a></h3>',6)),t[25]||(t[25]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 创建新会话
const session = await client.session.create({
  body: { title: "我的任务" },
})
console.log(\`创建会话: \${session.data?.id}\`)

// 列出所有会话
const sessions = await client.session.list()

// 获取单个会话
const detail = await client.session.get({
  path: { id: session.data!.id },
})

// 删除会话
await client.session.delete({
  path: { id: session.data!.id },
})`)])],-1)),t[26]||(t[26]=e("h3",{id:"发送消息",tabindex:"-1"},[n("发送消息 "),e("a",{class:"header-anchor",href:"#发送消息","aria-label":"Permalink to “发送消息”"},"​")],-1)),t[27]||(t[27]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 发送提示并等待 AI 响应
const result = await client.session.prompt({
  path: { id: sessionId },
  body: {
    model: { providerID: "anthropic", modelID: "claude-opus-4-5-thinking" },
    parts: [{ type: "text", text: "请帮我分析这段代码的性能问题" }],
  },
})

// 注入上下文（不触发 AI 响应）
await client.session.prompt({
  path: { id: sessionId },
  body: {
    noReply: true,
    parts: [{ type: "text", text: "你是一个专业的代码审查助手。" }],
  },
})`)])],-1)),t[28]||(t[28]=e("h3",{id:"异步发送-不等待响应",tabindex:"-1"},[n("异步发送（不等待响应） "),e("a",{class:"header-anchor",href:"#异步发送-不等待响应","aria-label":"Permalink to “异步发送（不等待响应）”"},"​")],-1)),t[29]||(t[29]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 发送后立即返回，适合长时间任务
await client.session.promptAsync({
  path: { id: sessionId },
  body: {
    parts: [{ type: "text", text: "请重构整个模块" }],
  },
})

// 通过事件监听获取响应`)])],-1)),t[30]||(t[30]=e("h3",{id:"文件操作",tabindex:"-1"},[n("文件操作 "),e("a",{class:"header-anchor",href:"#文件操作","aria-label":"Permalink to “文件操作”"},"​")],-1)),t[31]||(t[31]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 搜索文本内容
const textResults = await client.find.text({
  query: { pattern: "function.*opencode" },
})

// 查找文件（支持 glob 模式）
const files = await client.find.files({
  query: { 
    query: "*.ts", 
    type: "file",
    limit: 100,  // 最多返回 100 个结果
  },
})

// 查找目录
const dirs = await client.find.files({
  query: { query: "src", type: "directory" },
})

// 读取文件内容
const content = await client.file.read({
  query: { path: "src/index.ts" },
})

// 获取文件状态（git 变更）
const status = await client.file.status()`)])],-1)),t[32]||(t[32]=e("h3",{id:"tui-控制",tabindex:"-1"},[n("TUI 控制 "),e("a",{class:"header-anchor",href:"#tui-控制","aria-label":"Permalink to “TUI 控制”"},"​")],-1)),t[33]||(t[33]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 向输入框追加文本
await client.tui.appendPrompt({
  body: { text: "请检查这个文件" },
})

// 提交当前输入
await client.tui.submitPrompt()

// 清空输入
await client.tui.clearPrompt()

// 显示通知
await client.tui.showToast({
  body: { 
    message: "任务完成！", 
    variant: "success",
    duration: 3000,  // 显示 3 秒
  },
})

// 打开对话框
await client.tui.openHelp()
await client.tui.openSessions()
await client.tui.openThemes()
await client.tui.openModels()

// 执行 TUI 命令
await client.tui.executeCommand({
  body: { command: "agent_cycle" },
})`)])],-1)),t[34]||(t[34]=e("hr",null,null,-1)),t[35]||(t[35]=e("h2",{id:"实时事件监听",tabindex:"-1"},[n("实时事件监听 "),e("a",{class:"header-anchor",href:"#实时事件监听","aria-label":"Permalink to “实时事件监听”"},"​")],-1)),t[36]||(t[36]=e("h3",{id:"订阅事件流",tabindex:"-1"},[n("订阅事件流 "),e("a",{class:"header-anchor",href:"#订阅事件流","aria-label":"Permalink to “订阅事件流”"},"​")],-1)),t[37]||(t[37]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`const events = await client.event.subscribe()

for await (const event of events.stream) {
  console.log(\`事件类型: \${event.type}\`)
  console.log(\`事件数据:\`, event.properties)
  
  // 根据事件类型处理
  switch (event.type) {
    case "message.updated":
      console.log("消息更新:", event.properties.info)
      break
    case "session.idle":
      console.log("会话空闲:", event.properties.sessionID)
      break
    case "permission.updated":
      console.log("权限请求:", event.properties)
      break
  }
}`)])],-1)),t[38]||(t[38]=o('<h3 id="常用事件类型" tabindex="-1">常用事件类型 <a class="header-anchor" href="#常用事件类型" aria-label="Permalink to “常用事件类型”">​</a></h3><table tabindex="0"><thead><tr><th>事件类型</th><th>说明</th></tr></thead><tbody><tr><td><code>message.updated</code></td><td>消息内容更新</td></tr><tr><td><code>message.part.updated</code></td><td>消息部分更新（含 delta 增量）</td></tr><tr><td><code>session.status</code></td><td>会话状态变更（idle/busy/retry）</td></tr><tr><td><code>session.idle</code></td><td>会话进入空闲状态</td></tr><tr><td><code>permission.updated</code></td><td>权限请求待处理</td></tr><tr><td><code>file.edited</code></td><td>文件被编辑</td></tr><tr><td><code>todo.updated</code></td><td>Todo 列表更新</td></tr></tbody></table><blockquote><p>完整事件类型列表请参阅 <a href="./10b-sdk-reference.html#事件类型完整列表">5.10b API 参考</a></p></blockquote><hr><h2 id="类型导入" tabindex="-1">类型导入 <a class="header-anchor" href="#类型导入" aria-label="Permalink to “类型导入”">​</a></h2><p>SDK 提供完整的 TypeScript 类型定义：</p>',6)),t[39]||(t[39]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import type { 
  // 核心类型
  Session,
  Message,
  Part,
  
  // 事件类型
  Event,
  EventMessageUpdated,
  EventSessionIdle,
  
  // 配置类型
  Config,
  AgentConfig,
  ProviderConfig,
  
  // 其他
  Todo,
  Permission,
  Agent,
  Provider,
  Model,
} from "@opencode-ai/sdk"`)])],-1)),t[40]||(t[40]=e("hr",null,null,-1)),t[41]||(t[41]=e("h2",{id:"错误处理",tabindex:"-1"},[n("错误处理 "),e("a",{class:"header-anchor",href:"#错误处理","aria-label":"Permalink to “错误处理”"},"​")],-1)),t[42]||(t[42]=e("h3",{id:"标准错误处理",tabindex:"-1"},[n("标准错误处理 "),e("a",{class:"header-anchor",href:"#标准错误处理","aria-label":"Permalink to “标准错误处理”"},"​")],-1)),t[43]||(t[43]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`try {
  const session = await client.session.get({ 
    path: { id: "invalid-id" } 
  })
} catch (error) {
  console.error("获取会话失败:", (error as Error).message)
}`)])],-1)),t[44]||(t[44]=e("h3",{id:"使用-throwonerror-选项",tabindex:"-1"},[n("使用 throwOnError 选项 "),e("a",{class:"header-anchor",href:"#使用-throwonerror-选项","aria-label":"Permalink to “使用 throwOnError 选项”"},"​")],-1)),t[45]||(t[45]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 全局配置
const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
  throwOnError: true,  // 所有请求出错都抛出异常
})

// 或在单个请求中使用
const result = await client.session.get({
  path: { id: sessionId },
  throwOnError: true,
})`)])],-1)),t[46]||(t[46]=e("h3",{id:"检查返回值",tabindex:"-1"},[n("检查返回值 "),e("a",{class:"header-anchor",href:"#检查返回值","aria-label":"Permalink to “检查返回值”"},"​")],-1)),t[47]||(t[47]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`const result = await client.session.get({
  path: { id: sessionId },
})

if (result.error) {
  console.error("错误:", result.error)
} else {
  console.log("会话:", result.data)
}`)])],-1)),t[48]||(t[48]=e("hr",null,null,-1)),t[49]||(t[49]=e("h2",{id:"实战示例-批量代码审查",tabindex:"-1"},[n("实战示例：批量代码审查 "),e("a",{class:"header-anchor",href:"#实战示例-批量代码审查","aria-label":"Permalink to “实战示例：批量代码审查”"},"​")],-1)),t[50]||(t[50]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"
import { readdir } from "fs/promises"

async function batchCodeReview(directory: string) {
  const { client, server } = await createOpencode({
    config: {
      model: "anthropic/claude-opus-4-5-thinking",
    },
  })

  try {
    // 创建会话
    const session = await client.session.create({
      body: { title: \`批量代码审查 - \${directory}\` },
    })
    const sessionId = session.data!.id

    // 查找所有 TypeScript 文件
    const files = await client.find.files({
      query: { query: "*.ts", type: "file", directory },
    })

    console.log(\`找到 \${files.data?.length} 个文件\`)

    // 逐个审查
    for (const file of files.data ?? []) {
      console.log(\`审查: \${file}\`)
      
      await client.session.prompt({
        path: { id: sessionId },
        body: {
          parts: [{ 
            type: "text", 
            text: \`请审查文件 \${file}，检查潜在问题和改进建议。\` 
          }],
        },
      })
    }

    console.log("审查完成！")
  } finally {
    server.close()
  }
}

batchCodeReview("./src")`)])],-1)),t[51]||(t[51]=o('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>SDK 连接失败</td><td>服务器未启动</td><td>先运行 <code>opencode serve</code> 或使用 <code>createOpencode()</code></td></tr><tr><td>端口冲突</td><td>默认端口 4096 被占用</td><td>指定其他端口 <code>port: 4097</code></td></tr><tr><td>类型错误</td><td>SDK 版本不匹配</td><td>更新到最新版本 <code>npm update @opencode-ai/sdk</code></td></tr><tr><td>超时错误</td><td>服务器启动慢或网络问题</td><td>增加 <code>timeout</code> 值</td></tr><tr><td>事件流中断</td><td>连接断开</td><td>实现重连逻辑</td></tr><tr><td>响应格式困惑</td><td><code>responseStyle</code> 配置</td><td>默认为 <code>fields</code>，返回 <code>{ data, error, request, response }</code></td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>安装 SDK</strong>：<code>npm install @opencode-ai/sdk</code></li><li><strong>三种使用方式</strong>： <ul><li><code>createOpencode()</code> - 服务器 + 客户端</li><li><code>createOpencodeClient()</code> - 仅客户端</li><li><code>createOpencodeTui()</code> - 启动 TUI</li></ul></li><li><strong>基础 API</strong>：会话管理、消息发送、文件操作、TUI 控制</li><li><strong>事件监听</strong>：实时接收状态变更</li></ol><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./10b-sdk-reference.html">5.10b API 参考</a> - 完整 API 文档</li><li><a href="./09a-remote-basics.html">5.9 远程开发</a> - HTTP Server 详解</li><li><a href="https://opencode.ai/docs/sdk" target="_blank" rel="noreferrer">官方 SDK 文档</a></li></ul><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p><a href="./10b-sdk-reference.html">5.10b API 参考</a> 将详细介绍所有 21 个 API 模块、完整类型定义和 35+ 种事件类型。</p></blockquote>',13))])}const C=a(p,[["render",u]]);export{k as __pageData,C as default};
