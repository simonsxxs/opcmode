import{_ as a,I as r,c as s,o as i,a5 as e,J as c,j as t,a as o,be as l}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.10b API 参考","description":"OpenCode SDK 提供 21 个 API 模块、35+ 种事件类型，覆盖会话、文件、配置、MCP、LSP 等全部功能。","frontmatter":{"title":"5.10b API 参考","subtitle":"SDK 完整 API 文档","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.10b","duration":"30 分钟","practice":"40 分钟","level":"进阶","description":"OpenCode SDK 提供 21 个 API 模块、35+ 种事件类型，覆盖会话、文件、配置、MCP、LSP 等全部功能。","tags":["SDK","API","参考文档"],"prerequisite":["5.10a SDK 基础"]},"headers":[],"relativePath":"5-advanced/10b-sdk-reference.md","filePath":"5-advanced/10b-sdk-reference.md","lastUpdated":1772014034000}'),p={name:"5-advanced/10b-sdk-reference.md"};function h(b,d,u,g,y,m){const n=r("AdInArticle");return i(),s("div",null,[d[0]||(d[0]=e("",11)),c(n),d[1]||(d[1]=e("",5)),d[2]||(d[2]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 创建会话
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
})`)])],-1)),d[3]||(d[3]=e("",5)),d[4]||(d[4]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取当前项目
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
}`)])],-1)),d[7]||(d[7]=e("",3)),d[8]||(d[8]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 列出目录内容
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
}`)])],-1)),d[9]||(d[9]=e("",5)),d[10]||(d[10]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 搜索文本
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
})`)])],-1)),d[11]||(d[11]=e("",3)),d[12]||(d[12]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取配置
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
const { providers, default: defaults } = (await client.config.providers()).data!`)])],-1)),d[13]||(d[13]=e("",3)),d[14]||(d[14]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 写入日志
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
}`)])],-1)),d[15]||(d[15]=e("",5)),d[16]||(d[16]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 显示成功通知
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
})`)])],-1)),d[17]||(d[17]=e("",3)),d[18]||(d[18]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 设置 API Key
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
})`)])],-1)),d[19]||(d[19]=e("",3)),d[20]||(d[20]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取提供商列表
const providers = await client.provider.list()
for (const p of providers.data ?? []) {
  console.log(\`\${p.name} (\${p.id}): \${Object.keys(p.models).length} 个模型\`)
}

// 获取认证方法
const authMethods = await client.provider.auth()`)])],-1)),d[21]||(d[21]=e("",4)),d[22]||(d[22]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type McpStatus = 
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
}`)])],-1)),d[27]||(d[27]=e("",5)),d[28]||(d[28]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Pty = {
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
})`)])],-1)),d[30]||(d[30]=e("",4)),d[31]||(d[31]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 获取所有工具 ID
const toolIds = await client.tool.ids()
console.log("可用工具:", toolIds.data)

// 获取工具详情（需指定模型）
const tools = await client.tool.list({
  query: {
    provider: "anthropic",
    model: "claude-opus-4-5-thinking",
  },
})`)])],-1)),d[32]||(d[32]=t("hr",null,null,-1)),d[33]||(d[33]=t("h2",{id:"path-和-vcs-信息",tabindex:"-1"},[o("Path 和 VCS 信息 "),t("a",{class:"header-anchor",href:"#path-和-vcs-信息","aria-label":"Permalink to “Path 和 VCS 信息”"},"​")],-1)),d[34]||(d[34]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},"// 获取路径信息\nconst pathInfo = await client.path.get()\nconsole.log(`状态目录: ${pathInfo.data?.state}`)\nconsole.log(`配置目录: ${pathInfo.data?.config}`)\nconsole.log(`工作树: ${pathInfo.data?.worktree}`)\nconsole.log(`当前目录: ${pathInfo.data?.directory}`)\n\n// 获取 VCS 信息\nconst vcsInfo = await client.vcs.get()\nconsole.log(`当前分支: ${vcsInfo.data?.branch}`)")])],-1)),d[35]||(d[35]=t("hr",null,null,-1)),d[36]||(d[36]=t("h2",{id:"instance-实例管理",tabindex:"-1"},[o("Instance 实例管理 "),t("a",{class:"header-anchor",href:"#instance-实例管理","aria-label":"Permalink to “Instance 实例管理”"},"​")],-1)),d[37]||(d[37]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 销毁当前实例
await client.instance.dispose()`)])],-1)),d[38]||(d[38]=t("hr",null,null,-1)),d[39]||(d[39]=t("h2",{id:"command-命令列表",tabindex:"-1"},[o("Command 命令列表 "),t("a",{class:"header-anchor",href:"#command-命令列表","aria-label":"Permalink to “Command 命令列表”"},"​")],-1)),d[40]||(d[40]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},"// 获取所有命令\nconst commands = await client.command.list()\nfor (const cmd of commands.data ?? []) {\n  console.log(`/${cmd.name}: ${cmd.description}`)\n}")])],-1)),d[41]||(d[41]=e("",28)),d[42]||(d[42]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`const events = await client.event.subscribe()

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
}`)])],-1)),d[53]||(d[53]=e("",10))])}const T=a(p,[["render",h]]);export{P as __pageData,T as default};
