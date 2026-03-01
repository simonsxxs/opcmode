import{_ as s,I as a,c as r,o as i,a5 as d,J as c,j as t,a as o,be as l}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.10b API Reference","description":"OpenCode SDK provides 21 API modules and 35+ event types, covering all features including sessions, files, configuration, MCP, LSP, and more.","frontmatter":{"title":"5.10b API Reference","subtitle":"Complete SDK API Documentation","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.10b","duration":"30 minutes","practice":"40 minutes","level":"Advanced","description":"OpenCode SDK provides 21 API modules and 35+ event types, covering all features including sessions, files, configuration, MCP, LSP, and more.","tags":["SDK","API","Reference"],"prerequisite":["5.10a SDK Basics"]},"headers":[],"relativePath":"en/5-advanced/10b-sdk-reference.md","filePath":"en/5-advanced/10b-sdk-reference.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/10b-sdk-reference.md"};function h(m,e,u,b,g,y){const n=a("AdInArticle");return i(),r("div",null,[e[0]||(e[0]=d("",11)),c(n),e[1]||(e[1]=d("",5)),e[2]||(e[2]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Create session
const session = await client.session.create({
  body: { title: "Code Refactoring Task" },
})

// Send message
const result = await client.session.prompt({
  path: { id: session.data!.id },
  body: {
    model: { providerID: "anthropic", modelID: "claude-opus-4-5-thinking" },
    parts: [{ type: "text", text: "Please help me refactor this function" }],
  },
})

// Get message list
const messages = await client.session.messages({
  path: { id: session.data!.id },
})

// Get Todo list
const todos = await client.session.todo({
  path: { id: session.data!.id },
})

// Fork session
const forked = await client.session.fork({
  path: { id: session.data!.id },
  body: { messageID: "msg-123" },
})

// Get file changes
const diff = await client.session.diff({
  path: { id: session.data!.id },
})

// Abort session
await client.session.abort({
  path: { id: session.data!.id },
})`)])],-1)),e[3]||(e[3]=d("",5)),e[4]||(e[4]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get current project
const current = await client.project.current()
console.log(\`Project path: \${current.data?.worktree}\`)

// List all projects
const projects = await client.project.list()`)])],-1)),e[5]||(e[5]=t("h3",{id:"project-type",tabindex:"-1"},[o("Project Type "),t("a",{class:"header-anchor",href:"#project-type","aria-label":"Permalink to “Project Type”"},"​")],-1)),e[6]||(e[6]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Project = {
  id: string
  worktree: string      // Working directory
  vcsDir?: string       // VCS directory (e.g., .git)
  vcs?: "git"           // Version control type
  time: {
    created: number
    initialized?: number
  }
}`)])],-1)),e[7]||(e[7]=d("",3)),e[8]||(e[8]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// List directory contents
const nodes = await client.file.list({
  query: { path: "src" },
})

// Read file
const content = await client.file.read({
  query: { path: "src/index.ts" },
})
console.log(content.data?.content)

// Get git status
const status = await client.file.status()
for (const file of status.data ?? []) {
  console.log(\`\${file.status}: \${file.path} (+\${file.added}/-\${file.removed})\`)
}`)])],-1)),e[9]||(e[9]=d("",5)),e[10]||(e[10]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Search text
const matches = await client.find.text({
  query: { pattern: "TODO|FIXME" },
})

// Find files
const tsFiles = await client.find.files({
  query: { query: "*.ts", type: "file", limit: 50 },
})

// Find symbols
const symbols = await client.find.symbols({
  query: { query: "handleRequest" },
})`)])],-1)),e[11]||(e[11]=d("",3)),e[12]||(e[12]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get configuration
const config = await client.config.get()
console.log(\`Current model: \${config.data?.model}\`)

// Dynamically update configuration
await client.config.update({
  body: {
    model: "anthropic/claude-haiku-4-5",
    logLevel: "DEBUG",
  },
})

// Get provider information
const { providers, default: defaults } = (await client.config.providers()).data!`)])],-1)),e[13]||(e[13]=d("",3)),e[14]||(e[14]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Write log
await client.app.log({
  body: {
    service: "my-plugin",
    level: "info",
    message: "Operation complete",
  },
})

// Get Agent list
const agents = await client.app.agents()
for (const agent of agents.data ?? []) {
  console.log(\`\${agent.name}: \${agent.description}\`)
}`)])],-1)),e[15]||(e[15]=d("",5)),e[16]||(e[16]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Show success notification
await client.tui.showToast({
  body: {
    title: "Success",
    message: "File saved",
    variant: "success",
    duration: 3000,
  },
})

// Execute command
await client.tui.executeCommand({
  body: { command: "session.new" },
})`)])],-1)),e[17]||(e[17]=d("",3)),e[18]||(e[18]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Set API Key
await client.auth.set({
  path: { id: "anthropic" },
  body: { type: "api", key: "sk-xxx" },
})

// Set OAuth credentials
await client.auth.set({
  path: { id: "github" },
  body: {
    type: "oauth",
    access: "access-token",
    refresh: "refresh-token",
    expires: Date.now() + 3600000,
  },
})`)])],-1)),e[19]||(e[19]=d("",3)),e[20]||(e[20]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get provider list
const providers = await client.provider.list()
for (const p of providers.data ?? []) {
  console.log(\`\${p.name} (\${p.id}): \${Object.keys(p.models).length} models\`)
}

// Get authentication methods
const authMethods = await client.provider.auth()`)])],-1)),e[21]||(e[21]=d("",4)),e[22]||(e[22]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type McpStatus = 
  | { status: "connected" }
  | { status: "disabled" }
  | { status: "failed"; error: string }
  | { status: "needs_auth" }
  | { status: "needs_client_registration"; error: string }`)])],-1)),e[23]||(e[23]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get status
const status = await client.mcp.status()

// Dynamically add MCP server
await client.mcp.add({
  body: {
    name: "my-mcp",
    type: "local",
    command: ["node", "mcp-server.js"],
  },
})

// Connect/disconnect
await client.mcp.connect({ path: { name: "my-mcp" } })
await client.mcp.disconnect({ path: { name: "my-mcp" } })`)])],-1)),e[24]||(e[24]=t("hr",null,null,-1)),e[25]||(e[25]=t("h2",{id:"lsp-and-formatter-status",tabindex:"-1"},[o("LSP and Formatter Status "),t("a",{class:"header-anchor",href:"#lsp-and-formatter-status","aria-label":"Permalink to “LSP and Formatter Status”"},"​")],-1)),e[26]||(e[26]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// LSP status
const lspStatus = await client.lsp.status()
for (const lsp of lspStatus.data ?? []) {
  console.log(\`\${lsp.name}: \${lsp.status}\`)
}

// Formatter status
const formatterStatus = await client.formatter.status()
for (const fmt of formatterStatus.data ?? []) {
  console.log(\`\${fmt.name}: \${fmt.enabled ? "enabled" : "disabled"}\`)
}`)])],-1)),e[27]||(e[27]=d("",5)),e[28]||(e[28]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Pty = {
  id: string
  title: string
  command: string
  args: string[]
  cwd: string
  status: "running" | "exited"
  pid: number
}`)])],-1)),e[29]||(e[29]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Create PTY session
const pty = await client.pty.create({
  body: {
    command: "bash",
    cwd: "/home/user/project",
    title: "Dev Terminal",
  },
})

// Update window size
await client.pty.update({
  path: { id: pty.data!.id },
  body: {
    size: { rows: 24, cols: 80 },
  },
})`)])],-1)),e[30]||(e[30]=d("",4)),e[31]||(e[31]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get all tool IDs
const toolIds = await client.tool.ids()
console.log("Available tools:", toolIds.data)

// Get tool details (need to specify model)
const tools = await client.tool.list({
  query: {
    provider: "anthropic",
    model: "claude-opus-4-5-thinking",
  },
})`)])],-1)),e[32]||(e[32]=t("hr",null,null,-1)),e[33]||(e[33]=t("h2",{id:"path-and-vcs-information",tabindex:"-1"},[o("Path and VCS Information "),t("a",{class:"header-anchor",href:"#path-and-vcs-information","aria-label":"Permalink to “Path and VCS Information”"},"​")],-1)),e[34]||(e[34]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},"// Get path information\nconst pathInfo = await client.path.get()\nconsole.log(`State directory: ${pathInfo.data?.state}`)\nconsole.log(`Config directory: ${pathInfo.data?.config}`)\nconsole.log(`Worktree: ${pathInfo.data?.worktree}`)\nconsole.log(`Current directory: ${pathInfo.data?.directory}`)\n\n// Get VCS information\nconst vcsInfo = await client.vcs.get()\nconsole.log(`Current branch: ${vcsInfo.data?.branch}`)")])],-1)),e[35]||(e[35]=t("hr",null,null,-1)),e[36]||(e[36]=t("h2",{id:"instance-management",tabindex:"-1"},[o("Instance Management "),t("a",{class:"header-anchor",href:"#instance-management","aria-label":"Permalink to “Instance Management”"},"​")],-1)),e[37]||(e[37]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Dispose current instance
await client.instance.dispose()`)])],-1)),e[38]||(e[38]=t("hr",null,null,-1)),e[39]||(e[39]=t("h2",{id:"command-list",tabindex:"-1"},[o("Command List "),t("a",{class:"header-anchor",href:"#command-list","aria-label":"Permalink to “Command List”"},"​")],-1)),e[40]||(e[40]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},"// Get all commands\nconst commands = await client.command.list()\nfor (const cmd of commands.data ?? []) {\n  console.log(`/${cmd.name}: ${cmd.description}`)\n}")])],-1)),e[41]||(e[41]=d("",28)),e[42]||(e[42]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`const events = await client.event.subscribe()

for await (const event of events.stream) {
  switch (event.type) {
    case "message.part.updated":
      // Incremental update, can be used for streaming display
      if (event.properties.delta) {
        process.stdout.write(event.properties.delta)
      }
      break
      
    case "session.status":
      const { sessionID, status } = event.properties
      if (status.type === "busy") {
        console.log(\`Session \${sessionID} processing...\`)
      } else if (status.type === "idle") {
        console.log(\`Session \${sessionID} completed\`)
      } else if (status.type === "retry") {
        console.log(\`Session \${sessionID} retrying (\${status.attempt})\`)
      }
      break
      
    case "permission.updated":
      console.log(\`Permission request: \${event.properties.title}\`)
      // Can auto-respond to permission requests
      await client.postSessionIdPermissionsPermissionId({
        path: {
          id: event.properties.sessionID,
          permissionID: event.properties.id,
        },
        body: { allow: true },
      })
      break
      
    case "file.edited":
      console.log(\`File modified: \${event.properties.file}\`)
      break
      
    case "todo.updated":
      console.log(\`Todo updated:\`, event.properties.todos)
      break
  }
}`)])],-1)),e[43]||(e[43]=t("hr",null,null,-1)),e[44]||(e[44]=t("h2",{id:"complete-type-definitions",tabindex:"-1"},[o("Complete Type Definitions "),t("a",{class:"header-anchor",href:"#complete-type-definitions","aria-label":"Permalink to “Complete Type Definitions”"},"​")],-1)),e[45]||(e[45]=t("h3",{id:"core-types",tabindex:"-1"},[o("Core Types "),t("a",{class:"header-anchor",href:"#core-types","aria-label":"Permalink to “Core Types”"},"​")],-1)),e[46]||(e[46]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Session
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

// Session status
type SessionStatus =
  | { type: "idle" }
  | { type: "busy" }
  | { type: "retry"; attempt: number; message: string; next: number }

// Message
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
}`)])],-1)),e[47]||(e[47]=t("h3",{id:"part-types",tabindex:"-1"},[o("Part Types "),t("a",{class:"header-anchor",href:"#part-types","aria-label":"Permalink to “Part Types”"},"​")],-1)),e[48]||(e[48]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Part =
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
  | { status: "error"; input: object; error: string; time: { start: number; end: number } }`)])],-1)),e[49]||(e[49]=t("h3",{id:"error-types",tabindex:"-1"},[o("Error Types "),t("a",{class:"header-anchor",href:"#error-types","aria-label":"Permalink to “Error Types”"},"​")],-1)),e[50]||(e[50]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type MessageError =
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
}`)])],-1)),e[51]||(e[51]=t("h3",{id:"other-types",tabindex:"-1"},[o("Other Types "),t("a",{class:"header-anchor",href:"#other-types","aria-label":"Permalink to “Other Types”"},"​")],-1)),e[52]||(e[52]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Todo = {
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
}`)])],-1)),e[53]||(e[53]=d("",10))])}const P=s(p,[["render",h]]);export{v as __pageData,P as default};
