import{_ as s,I as a,c as r,o as i,a5 as d,J as c,j as t,a as o,be as l}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.10b API Reference","description":"OpenCode SDK provides 21 API modules and 35+ event types, covering all features including sessions, files, configuration, MCP, LSP, and more.","frontmatter":{"title":"5.10b API Reference","subtitle":"Complete SDK API Documentation","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.10b","duration":"30 minutes","practice":"40 minutes","level":"Advanced","description":"OpenCode SDK provides 21 API modules and 35+ event types, covering all features including sessions, files, configuration, MCP, LSP, and more.","tags":["SDK","API","Reference"],"prerequisite":["5.10a SDK Basics"]},"headers":[],"relativePath":"en/5-advanced/10b-sdk-reference.md","filePath":"en/5-advanced/10b-sdk-reference.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/10b-sdk-reference.md"};function h(m,e,u,b,g,y){const n=a("AdInArticle");return i(),r("div",null,[e[0]||(e[0]=d('<h1 id="_5-10b-api-reference" tabindex="-1">5.10b API Reference <a class="header-anchor" href="#_5-10b-api-reference" aria-label="Permalink to “5.10b API Reference”">​</a></h1><blockquote><p><strong>One-line summary</strong>: OpenCode SDK provides 21 API modules and 35+ event types, covering all features including sessions, files, configuration, MCP, LSP, and more.</p></blockquote><hr><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+l+'" alt="5.10b API Reference Notes" data-zoom-src="/images/5-advanced/10b-sdk-reference-notes.jpeg"></p><hr><h2 id="api-module-overview" tabindex="-1">API Module Overview <a class="header-anchor" href="#api-module-overview" aria-label="Permalink to “API Module Overview”">​</a></h2><p>The SDK client exposes the following modules through the <code>OpencodeClient</code> class:</p><table tabindex="0"><thead><tr><th>Module</th><th>Description</th><th>Source</th></tr></thead><tbody><tr><td><code>global</code></td><td>Global event subscription</td><td><code>sdk.gen.ts:233-243</code></td></tr><tr><td><code>project</code></td><td>Project management</td><td><code>sdk.gen.ts:245-265</code></td></tr><tr><td><code>session</code></td><td>Session management (core)</td><td><code>sdk.gen.ts:431-700</code></td></tr><tr><td><code>file</code></td><td>File operations</td><td><code>sdk.gen.ts:808-838</code></td></tr><tr><td><code>find</code></td><td>Search functionality</td><td><code>sdk.gen.ts:776-806</code></td></tr><tr><td><code>config</code></td><td>Configuration management</td><td><code>sdk.gen.ts:337-371</code></td></tr><tr><td><code>app</code></td><td>Application info</td><td><code>sdk.gen.ts:840-864</code></td></tr><tr><td><code>tui</code></td><td>TUI interface control</td><td><code>sdk.gen.ts:1026-1143</code></td></tr><tr><td><code>event</code></td><td>Event subscription</td><td><code>sdk.gen.ts:1145-1155</code></td></tr><tr><td><code>auth</code></td><td>Authentication management</td><td><code>sdk.gen.ts:866-926</code></td></tr><tr><td><code>provider</code></td><td>Model providers</td><td><code>sdk.gen.ts:753-774</code></td></tr><tr><td><code>mcp</code></td><td>MCP server management</td><td><code>sdk.gen.ts:928-974</code></td></tr><tr><td><code>lsp</code></td><td>LSP server status</td><td><code>sdk.gen.ts:976-986</code></td></tr><tr><td><code>formatter</code></td><td>Formatter status</td><td><code>sdk.gen.ts:988-998</code></td></tr><tr><td><code>command</code></td><td>Command list</td><td><code>sdk.gen.ts:703-713</code></td></tr><tr><td><code>path</code></td><td>Path information</td><td><code>sdk.gen.ts:407-417</code></td></tr><tr><td><code>vcs</code></td><td>Version control info</td><td><code>sdk.gen.ts:419-429</code></td></tr><tr><td><code>pty</code></td><td>PTY terminal sessions</td><td><code>sdk.gen.ts:267-335</code></td></tr><tr><td><code>tool</code></td><td>Tool management (experimental)</td><td><code>sdk.gen.ts:373-393</code></td></tr><tr><td><code>instance</code></td><td>Instance management</td><td><code>sdk.gen.ts:395-405</code></td></tr></tbody></table><hr>',11)),c(n),e[1]||(e[1]=d('<h2 id="session-management" tabindex="-1">Session Management <a class="header-anchor" href="#session-management" aria-label="Permalink to “Session Management”">​</a></h2><p>Sessions are the core module of the SDK, providing message sending, history management, and more.</p><h3 id="method-list" tabindex="-1">Method List <a class="header-anchor" href="#method-list" aria-label="Permalink to “Method List”">​</a></h3><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>session.list()</code></td><td>List all sessions</td><td><code>Session[]</code></td></tr><tr><td><code>session.get({ path })</code></td><td>Get a single session</td><td><code>Session</code></td></tr><tr><td><code>session.create({ body })</code></td><td>Create a new session</td><td><code>Session</code></td></tr><tr><td><code>session.delete({ path })</code></td><td>Delete a session</td><td><code>boolean</code></td></tr><tr><td><code>session.update({ path, body })</code></td><td>Update session properties</td><td><code>Session</code></td></tr><tr><td><code>session.status()</code></td><td>Get all session statuses</td><td><code>{ [sessionID: string]: SessionStatus }</code></td></tr><tr><td><code>session.children({ path })</code></td><td>Get child session list</td><td><code>Session[]</code></td></tr><tr><td><code>session.todo({ path })</code></td><td>Get session Todo list</td><td><code>Todo[]</code></td></tr><tr><td><code>session.init({ path, body })</code></td><td>Analyze project and create AGENTS.md</td><td><code>boolean</code></td></tr><tr><td><code>session.fork({ path, body })</code></td><td>Fork session at specified message</td><td><code>Session</code></td></tr><tr><td><code>session.abort({ path })</code></td><td>Abort running session</td><td><code>boolean</code></td></tr><tr><td><code>session.share({ path })</code></td><td>Share session</td><td><code>Session</code></td></tr><tr><td><code>session.unshare({ path })</code></td><td>Unshare session</td><td><code>Session</code></td></tr><tr><td><code>session.diff({ path })</code></td><td>Get session file changes</td><td><code>FileDiff[]</code></td></tr><tr><td><code>session.summarize({ path, body })</code></td><td>Summarize session content</td><td><code>boolean</code></td></tr><tr><td><code>session.messages({ path })</code></td><td>Get session message list</td><td><code>{info: Message, parts: Part[]}[]</code></td></tr><tr><td><code>session.message({ path })</code></td><td>Get single message details</td><td><code>{info: Message, parts: Part[]}</code></td></tr><tr><td><code>session.prompt({ path, body })</code></td><td>Send message and wait for response</td><td><code>AssistantMessage</code></td></tr><tr><td><code>session.promptAsync({ path, body })</code></td><td>Send message asynchronously (no wait)</td><td><code>204 No Content</code></td></tr><tr><td><code>session.command({ path, body })</code></td><td>Send command</td><td><code>{info: AssistantMessage, parts: Part[]}</code></td></tr><tr><td><code>session.shell({ path, body })</code></td><td>Run shell command</td><td><code>AssistantMessage</code></td></tr><tr><td><code>session.revert({ path, body })</code></td><td>Revert to specified message</td><td><code>Session</code></td></tr><tr><td><code>session.unrevert({ path })</code></td><td>Restore reverted message</td><td><code>Session</code></td></tr><tr><td><code>session.permission({ path, body })</code></td><td>Respond to permission request</td><td><code>boolean</code></td></tr></tbody></table><h3 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to “Code Example”">​</a></h3>',5)),e[2]||(e[2]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Create session
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
})`)])],-1)),e[3]||(e[3]=d('<h3 id="prompt-body-parameters" tabindex="-1">prompt body Parameters <a class="header-anchor" href="#prompt-body-parameters" aria-label="Permalink to “prompt body Parameters”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>parts</code></td><td><code>Part[]</code></td><td>Message content parts</td></tr><tr><td><code>model</code></td><td><code>{providerID, modelID}</code></td><td>Specify model</td></tr><tr><td><code>noReply</code></td><td><code>boolean</code></td><td>Set to <code>true</code> to not trigger AI response (inject context)</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>Use specified Agent</td></tr></tbody></table><hr><h2 id="project-management" tabindex="-1">Project Management <a class="header-anchor" href="#project-management" aria-label="Permalink to “Project Management”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>project.list()</code></td><td>List all projects</td><td><code>Project[]</code></td></tr><tr><td><code>project.current()</code></td><td>Get current project</td><td><code>Project</code></td></tr></tbody></table>',5)),e[4]||(e[4]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get current project
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
}`)])],-1)),e[7]||(e[7]=d('<hr><h2 id="file-operations" tabindex="-1">File Operations <a class="header-anchor" href="#file-operations" aria-label="Permalink to “File Operations”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>file.list({ query })</code></td><td>List files and directories</td><td><code>FileNode[]</code></td></tr><tr><td><code>file.read({ query })</code></td><td>Read file content</td><td><code>FileContent</code></td></tr><tr><td><code>file.status()</code></td><td>Get file status (git changes)</td><td><code>File[]</code></td></tr></tbody></table>',3)),e[8]||(e[8]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// List directory contents
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
}`)])],-1)),e[9]||(e[9]=d('<hr><h2 id="find-search-functionality" tabindex="-1">Find Search Functionality <a class="header-anchor" href="#find-search-functionality" aria-label="Permalink to “Find Search Functionality”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>find.text({ query })</code></td><td>Search text in file contents</td><td>Match result array</td></tr><tr><td><code>find.files({ query })</code></td><td>Find files/directories by name</td><td><code>string[]</code></td></tr><tr><td><code>find.symbols({ query })</code></td><td>Find workspace symbols</td><td><code>Symbol[]</code></td></tr></tbody></table><h3 id="find-files-query-parameters" tabindex="-1">find.files Query Parameters <a class="header-anchor" href="#find-files-query-parameters" aria-label="Permalink to “find.files Query Parameters”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>query</code></td><td><code>string</code></td><td>Search pattern (supports glob)</td></tr><tr><td><code>type</code></td><td><code>&quot;file&quot; | &quot;directory&quot;</code></td><td>Search type</td></tr><tr><td><code>directory</code></td><td><code>string</code></td><td>Override search root directory</td></tr><tr><td><code>limit</code></td><td><code>number</code></td><td>Maximum results (1-200)</td></tr></tbody></table>',5)),e[10]||(e[10]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Search text
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
})`)])],-1)),e[11]||(e[11]=d('<hr><h2 id="config-configuration-management" tabindex="-1">Config Configuration Management <a class="header-anchor" href="#config-configuration-management" aria-label="Permalink to “Config Configuration Management”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>config.get()</code></td><td>Get current configuration</td><td><code>Config</code></td></tr><tr><td><code>config.update({ body })</code></td><td>Update configuration</td><td><code>Config</code></td></tr><tr><td><code>config.providers()</code></td><td>Get provider list and default models</td><td><code>{providers, default}</code></td></tr></tbody></table>',3)),e[12]||(e[12]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get configuration
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
const { providers, default: defaults } = (await client.config.providers()).data!`)])],-1)),e[13]||(e[13]=d('<hr><h2 id="app-application-info" tabindex="-1">App Application Info <a class="header-anchor" href="#app-application-info" aria-label="Permalink to “App Application Info”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>app.log({ body })</code></td><td>Write log entry</td><td><code>boolean</code></td></tr><tr><td><code>app.agents()</code></td><td>List all Agents</td><td><code>Agent[]</code></td></tr></tbody></table>',3)),e[14]||(e[14]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Write log
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
}`)])],-1)),e[15]||(e[15]=d('<hr><h2 id="tui-interface-control" tabindex="-1">TUI Interface Control <a class="header-anchor" href="#tui-interface-control" aria-label="Permalink to “TUI Interface Control”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>tui.appendPrompt({ body })</code></td><td>Append text to input box</td><td><code>boolean</code></td></tr><tr><td><code>tui.submitPrompt()</code></td><td>Submit current input</td><td><code>boolean</code></td></tr><tr><td><code>tui.clearPrompt()</code></td><td>Clear input box</td><td><code>boolean</code></td></tr><tr><td><code>tui.showToast({ body })</code></td><td>Show notification</td><td><code>boolean</code></td></tr><tr><td><code>tui.openHelp()</code></td><td>Open help dialog</td><td><code>boolean</code></td></tr><tr><td><code>tui.openSessions()</code></td><td>Open session selector</td><td><code>boolean</code></td></tr><tr><td><code>tui.openThemes()</code></td><td>Open theme selector</td><td><code>boolean</code></td></tr><tr><td><code>tui.openModels()</code></td><td>Open model selector</td><td><code>boolean</code></td></tr><tr><td><code>tui.executeCommand({ body })</code></td><td>Execute TUI command</td><td><code>boolean</code></td></tr><tr><td><code>tui.publish({ body })</code></td><td>Publish TUI event</td><td><code>boolean</code></td></tr><tr><td><code>tui.control.next()</code></td><td>Get next TUI request</td><td>-</td></tr><tr><td><code>tui.control.response()</code></td><td>Submit TUI response</td><td>-</td></tr></tbody></table><h3 id="showtoast-parameters" tabindex="-1">showToast Parameters <a class="header-anchor" href="#showtoast-parameters" aria-label="Permalink to “showToast Parameters”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>message</code></td><td><code>string</code></td><td>Notification content</td></tr><tr><td><code>title</code></td><td><code>string</code></td><td>Notification title (optional)</td></tr><tr><td><code>variant</code></td><td><code>&quot;info&quot; | &quot;success&quot; | &quot;warning&quot; | &quot;error&quot;</code></td><td>Notification type</td></tr><tr><td><code>duration</code></td><td><code>number</code></td><td>Display duration (milliseconds)</td></tr></tbody></table>',5)),e[16]||(e[16]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Show success notification
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
})`)])],-1)),e[17]||(e[17]=d('<hr><h2 id="auth-authentication-management" tabindex="-1">Auth Authentication Management <a class="header-anchor" href="#auth-authentication-management" aria-label="Permalink to “Auth Authentication Management”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>auth.set({ path, body })</code></td><td>Set authentication credentials</td><td><code>boolean</code></td></tr><tr><td><code>auth.remove({ path })</code></td><td>Remove MCP OAuth credentials</td><td><code>boolean</code></td></tr><tr><td><code>auth.start({ path })</code></td><td>Start OAuth flow</td><td>-</td></tr><tr><td><code>auth.callback({ path, body })</code></td><td>OAuth callback</td><td>-</td></tr><tr><td><code>auth.authenticate({ path })</code></td><td>Auto OAuth (open browser)</td><td>-</td></tr></tbody></table>',3)),e[18]||(e[18]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Set API Key
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
})`)])],-1)),e[19]||(e[19]=d('<hr><h2 id="provider-management" tabindex="-1">Provider Management <a class="header-anchor" href="#provider-management" aria-label="Permalink to “Provider Management”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>provider.list()</code></td><td>List all providers</td><td><code>Provider[]</code></td></tr><tr><td><code>provider.auth()</code></td><td>Get provider authentication methods</td><td><code>ProviderAuthMethod[]</code></td></tr><tr><td><code>provider.oauth.authorize({ path, body })</code></td><td>OAuth authorize</td><td>-</td></tr><tr><td><code>provider.oauth.callback({ path, body })</code></td><td>OAuth callback</td><td>-</td></tr></tbody></table>',3)),e[20]||(e[20]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get provider list
const providers = await client.provider.list()
for (const p of providers.data ?? []) {
  console.log(\`\${p.name} (\${p.id}): \${Object.keys(p.models).length} models\`)
}

// Get authentication methods
const authMethods = await client.provider.auth()`)])],-1)),e[21]||(e[21]=d('<hr><h2 id="mcp-server-management" tabindex="-1">MCP Server Management <a class="header-anchor" href="#mcp-server-management" aria-label="Permalink to “MCP Server Management”">​</a></h2><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>mcp.status()</code></td><td>Get MCP server status</td><td><code>McpStatus[]</code></td></tr><tr><td><code>mcp.add({ body })</code></td><td>Dynamically add MCP server</td><td>-</td></tr><tr><td><code>mcp.connect({ path })</code></td><td>Connect MCP server</td><td>-</td></tr><tr><td><code>mcp.disconnect({ path })</code></td><td>Disconnect MCP server</td><td>-</td></tr><tr><td><code>mcp.auth.*</code></td><td>MCP OAuth authentication</td><td>-</td></tr></tbody></table><h3 id="mcpstatus-type" tabindex="-1">McpStatus Type <a class="header-anchor" href="#mcpstatus-type" aria-label="Permalink to “McpStatus Type”">​</a></h3>',4)),e[22]||(e[22]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type McpStatus = 
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
}`)])],-1)),e[27]||(e[27]=d('<hr><h2 id="pty-terminal-sessions" tabindex="-1">PTY Terminal Sessions <a class="header-anchor" href="#pty-terminal-sessions" aria-label="Permalink to “PTY Terminal Sessions”">​</a></h2><p>For managing pseudo-terminal sessions (experimental feature).</p><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>pty.list()</code></td><td>List all PTY sessions</td><td><code>Pty[]</code></td></tr><tr><td><code>pty.create({ body })</code></td><td>Create PTY session</td><td><code>Pty</code></td></tr><tr><td><code>pty.get({ path })</code></td><td>Get PTY session info</td><td><code>Pty</code></td></tr><tr><td><code>pty.update({ path, body })</code></td><td>Update PTY session</td><td><code>Pty</code></td></tr><tr><td><code>pty.remove({ path })</code></td><td>Remove PTY session</td><td><code>boolean</code></td></tr><tr><td><code>pty.connect({ path })</code></td><td>Connect PTY session</td><td><code>boolean</code></td></tr></tbody></table><h3 id="pty-type" tabindex="-1">Pty Type <a class="header-anchor" href="#pty-type" aria-label="Permalink to “Pty Type”">​</a></h3>',5)),e[28]||(e[28]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`type Pty = {
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
})`)])],-1)),e[30]||(e[30]=d('<hr><h2 id="tool-management-experimental" tabindex="-1">Tool Management (Experimental) <a class="header-anchor" href="#tool-management-experimental" aria-label="Permalink to “Tool Management (Experimental)”">​</a></h2><blockquote><p>The following APIs are located at <code>/experimental/</code> path and may change in future versions.</p></blockquote><table tabindex="0"><thead><tr><th>Method</th><th>Description</th><th>Return Type</th></tr></thead><tbody><tr><td><code>tool.ids()</code></td><td>List all tool IDs</td><td><code>string[]</code></td></tr><tr><td><code>tool.list({ query })</code></td><td>Get tool JSON Schema</td><td><code>ToolListItem[]</code></td></tr></tbody></table>',4)),e[31]||(e[31]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Get all tool IDs
const toolIds = await client.tool.ids()
console.log("Available tools:", toolIds.data)

// Get tool details (need to specify model)
const tools = await client.tool.list({
  query: {
    provider: "anthropic",
    model: "claude-opus-4-5-thinking",
  },
})`)])],-1)),e[32]||(e[32]=t("hr",null,null,-1)),e[33]||(e[33]=t("h2",{id:"path-and-vcs-information",tabindex:"-1"},[o("Path and VCS Information "),t("a",{class:"header-anchor",href:"#path-and-vcs-information","aria-label":"Permalink to “Path and VCS Information”"},"​")],-1)),e[34]||(e[34]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},"// Get path information\nconst pathInfo = await client.path.get()\nconsole.log(`State directory: ${pathInfo.data?.state}`)\nconsole.log(`Config directory: ${pathInfo.data?.config}`)\nconsole.log(`Worktree: ${pathInfo.data?.worktree}`)\nconsole.log(`Current directory: ${pathInfo.data?.directory}`)\n\n// Get VCS information\nconst vcsInfo = await client.vcs.get()\nconsole.log(`Current branch: ${vcsInfo.data?.branch}`)")])],-1)),e[35]||(e[35]=t("hr",null,null,-1)),e[36]||(e[36]=t("h2",{id:"instance-management",tabindex:"-1"},[o("Instance Management "),t("a",{class:"header-anchor",href:"#instance-management","aria-label":"Permalink to “Instance Management”"},"​")],-1)),e[37]||(e[37]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Dispose current instance
await client.instance.dispose()`)])],-1)),e[38]||(e[38]=t("hr",null,null,-1)),e[39]||(e[39]=t("h2",{id:"command-list",tabindex:"-1"},[o("Command List "),t("a",{class:"header-anchor",href:"#command-list","aria-label":"Permalink to “Command List”"},"​")],-1)),e[40]||(e[40]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},"// Get all commands\nconst commands = await client.command.list()\nfor (const cmd of commands.data ?? []) {\n  console.log(`/${cmd.name}: ${cmd.description}`)\n}")])],-1)),e[41]||(e[41]=d('<hr><h2 id="complete-event-types-list" tabindex="-1">Complete Event Types List <a class="header-anchor" href="#complete-event-types-list" aria-label="Permalink to “Complete Event Types List”">​</a></h2><p>The SDK supports 35+ real-time events, subscribable via <code>client.event.subscribe()</code>.</p><h3 id="server-events" tabindex="-1">Server Events <a class="header-anchor" href="#server-events" aria-label="Permalink to “Server Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>server.connected</code></td><td>Server connected</td><td>-</td></tr><tr><td><code>server.instance.disposed</code></td><td>Instance disposed</td><td><code>directory</code></td></tr></tbody></table><h3 id="installation-events" tabindex="-1">Installation Events <a class="header-anchor" href="#installation-events" aria-label="Permalink to “Installation Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>installation.updated</code></td><td>Installation updated</td><td><code>version</code></td></tr><tr><td><code>installation.update-available</code></td><td>Update available</td><td><code>version</code></td></tr></tbody></table><h3 id="session-events" tabindex="-1">Session Events <a class="header-anchor" href="#session-events" aria-label="Permalink to “Session Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>session.created</code></td><td>Session created</td><td><code>info: Session</code></td></tr><tr><td><code>session.updated</code></td><td>Session updated</td><td><code>info: Session</code></td></tr><tr><td><code>session.deleted</code></td><td>Session deleted</td><td><code>info: Session</code></td></tr><tr><td><code>session.status</code></td><td>Session status changed</td><td><code>sessionID</code>, <code>status</code></td></tr><tr><td><code>session.idle</code></td><td>Session became idle</td><td><code>sessionID</code></td></tr><tr><td><code>session.compacted</code></td><td>Session compacted</td><td><code>sessionID</code></td></tr><tr><td><code>session.diff</code></td><td>Session file changes</td><td><code>sessionID</code>, <code>diff: FileDiff[]</code></td></tr><tr><td><code>session.error</code></td><td>Session error</td><td><code>sessionID?</code>, <code>error</code></td></tr></tbody></table><h3 id="message-events" tabindex="-1">Message Events <a class="header-anchor" href="#message-events" aria-label="Permalink to “Message Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>message.updated</code></td><td>Message updated</td><td><code>info: Message</code></td></tr><tr><td><code>message.removed</code></td><td>Message removed</td><td><code>sessionID</code>, <code>messageID</code></td></tr><tr><td><code>message.part.updated</code></td><td>Message part updated</td><td><code>part: Part</code>, <code>delta?: string</code></td></tr><tr><td><code>message.part.removed</code></td><td>Message part removed</td><td><code>sessionID</code>, <code>messageID</code>, <code>partID</code></td></tr></tbody></table><h3 id="permission-events" tabindex="-1">Permission Events <a class="header-anchor" href="#permission-events" aria-label="Permalink to “Permission Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>permission.updated</code></td><td>Permission request pending</td><td><code>Permission</code></td></tr><tr><td><code>permission.replied</code></td><td>Permission responded</td><td><code>sessionID</code>, <code>permissionID</code>, <code>response</code></td></tr></tbody></table><h3 id="file-events" tabindex="-1">File Events <a class="header-anchor" href="#file-events" aria-label="Permalink to “File Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>file.edited</code></td><td>File edited</td><td><code>file</code></td></tr><tr><td><code>file.watcher.updated</code></td><td>File watcher updated</td><td><code>file</code>, <code>event: &quot;add&quot; | &quot;change&quot; | &quot;unlink&quot;</code></td></tr></tbody></table><h3 id="todo-events" tabindex="-1">Todo Events <a class="header-anchor" href="#todo-events" aria-label="Permalink to “Todo Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>todo.updated</code></td><td>Todo list updated</td><td><code>sessionID</code>, <code>todos: Todo[]</code></td></tr></tbody></table><h3 id="command-events" tabindex="-1">Command Events <a class="header-anchor" href="#command-events" aria-label="Permalink to “Command Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>command.executed</code></td><td>Command executed</td><td><code>name</code>, <code>sessionID</code>, <code>arguments</code>, <code>messageID</code></td></tr></tbody></table><h3 id="vcs-events" tabindex="-1">VCS Events <a class="header-anchor" href="#vcs-events" aria-label="Permalink to “VCS Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>vcs.branch.updated</code></td><td>Branch switched</td><td><code>branch?</code></td></tr></tbody></table><h3 id="lsp-events" tabindex="-1">LSP Events <a class="header-anchor" href="#lsp-events" aria-label="Permalink to “LSP Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>lsp.updated</code></td><td>LSP status updated</td><td>-</td></tr><tr><td><code>lsp.client.diagnostics</code></td><td>LSP diagnostics</td><td><code>serverID</code>, <code>path</code></td></tr></tbody></table><h3 id="tui-events" tabindex="-1">TUI Events <a class="header-anchor" href="#tui-events" aria-label="Permalink to “TUI Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>tui.prompt.append</code></td><td>Input box text appended</td><td><code>text</code></td></tr><tr><td><code>tui.command.execute</code></td><td>TUI command executed</td><td><code>command</code></td></tr><tr><td><code>tui.toast.show</code></td><td>Show notification</td><td><code>title?</code>, <code>message</code>, <code>variant</code>, <code>duration?</code></td></tr></tbody></table><h3 id="pty-events" tabindex="-1">PTY Events <a class="header-anchor" href="#pty-events" aria-label="Permalink to “PTY Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><code>pty.created</code></td><td>PTY session created</td><td><code>info: Pty</code></td></tr><tr><td><code>pty.updated</code></td><td>PTY session updated</td><td><code>info: Pty</code></td></tr><tr><td><code>pty.exited</code></td><td>PTY session exited</td><td><code>id</code>, <code>exitCode</code></td></tr><tr><td><code>pty.deleted</code></td><td>PTY session deleted</td><td><code>id</code></td></tr></tbody></table><h3 id="event-listener-example" tabindex="-1">Event Listener Example <a class="header-anchor" href="#event-listener-example" aria-label="Permalink to “Event Listener Example”">​</a></h3>',28)),e[42]||(e[42]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`const events = await client.event.subscribe()

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
}`)])],-1)),e[53]||(e[53]=d('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td><code>data</code> returns <code>undefined</code></td><td>Request failed, check <code>error</code> field</td><td>Check <code>result.error</code></td></tr><tr><td>Event stream disconnected</td><td>Network interruption or server restart</td><td>Implement reconnection logic</td></tr><tr><td><code>tool.list</code> returns empty</td><td>Need to specify <code>provider</code> and <code>model</code></td><td>Add query parameters</td></tr><tr><td>Permission request no response</td><td>Need manual response</td><td>Use <code>postSessionIdPermissionsPermissionId</code></td></tr><tr><td>MCP status <code>needs_auth</code></td><td>MCP server requires OAuth authentication</td><td>Call <code>mcp.auth.authenticate</code></td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><strong>21 API modules</strong> complete method list</li><li><strong>35+ event types</strong> and their properties</li><li><strong>Core type definitions</strong>: Session, Message, Part, Todo, Agent, etc.</li><li><strong>Experimental APIs</strong>: Tool management, PTY terminal</li></ol><hr><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to “Related Resources”">​</a></h2><ul><li><a href="./10a-sdk-basics.html">5.10a SDK Basics</a> - Getting started tutorial</li><li><a href="./09a-remote-basics.html">5.9 Remote Development</a> - HTTP Server details</li><li><a href="https://github.com/opencode-ai/opencode/blob/dev/packages/sdk/js/src/gen/types.gen.ts" target="_blank" rel="noreferrer">SDK Type Definitions Source</a></li></ul>',10))])}const P=s(p,[["render",h]]);export{v as __pageData,P as default};
