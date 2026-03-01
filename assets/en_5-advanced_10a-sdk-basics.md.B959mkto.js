import{_ as a,I as r,c as i,o as d,a5 as o,J as l,j as e,a as n,bd as c}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.10a SDK Basics","description":"Use the SDK to control OpenCode programmatically for automation and deep integration.","frontmatter":{"title":"5.10a SDK Basics","subtitle":"Control OpenCode Programmatically","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.10a","duration":"25 min","practice":"30 min","level":"Advanced","description":"Use the SDK to control OpenCode programmatically for automation and deep integration.","tags":["SDK","Programming Interface","Automation"],"prerequisite":["5.1 Configuration Guide","5.9 Remote Development"]},"headers":[],"relativePath":"en/5-advanced/10a-sdk-basics.md","filePath":"en/5-advanced/10a-sdk-basics.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/10a-sdk-basics.md"};function u(m,t,h,g,b,f){const s=r("AdInArticle");return d(),i("div",null,[t[0]||(t[0]=o('<h1 id="_5-10a-sdk-basics" tabindex="-1">5.10a SDK Basics <a class="header-anchor" href="#_5-10a-sdk-basics" aria-label="Permalink to “5.10a SDK Basics”">​</a></h1><blockquote><p><strong>TL;DR</strong>: Use the JavaScript/TypeScript SDK to control OpenCode programmatically for automated workflows and custom integrations.</p></blockquote><h2 id="course-notes" tabindex="-1">Course Notes <a class="header-anchor" href="#course-notes" aria-label="Permalink to “Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+c+'" alt="5.10a SDK Basics Notes" data-zoom-src="/images/5-advanced/10a-sdk-basics-notes.jpeg"></p><hr><h2 id="what-you-ll-learn" tabindex="-1">What You&#39;ll Learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to “What You&#39;ll Learn”">​</a></h2><ul><li>Install and configure the OpenCode SDK</li><li>Create server and client instances</li><li>Launch the TUI interface</li><li>Manage sessions and send messages</li><li>Listen to real-time events</li></ul><hr><h2 id="your-current-challenges" tabindex="-1">Your Current Challenges <a class="header-anchor" href="#your-current-challenges" aria-label="Permalink to “Your Current Challenges”">​</a></h2><ul><li>Want to call OpenCode from your own application</li><li>Want to batch process tasks programmatically</li><li>Want to build custom integrations (IDE plugins, CI/CD tools, etc.)</li><li>Want to automate OpenCode operations in scripts</li></ul><hr><h2 id="sdk-architecture-overview" tabindex="-1">SDK Architecture Overview <a class="header-anchor" href="#sdk-architecture-overview" aria-label="Permalink to “SDK Architecture Overview”">​</a></h2>',13)),l(s),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────┐
│                    Your Application                       │
├─────────────────────────────────────────────────────────┤
│                   @opencode-ai/sdk                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │createOpencode│  │createOpencode│  │createOpencode│    │
│  │             │  │   Client    │  │    Tui      │      │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘      │
│         │                │                │              │
│  Server+Client     Client Only      Launch TUI          │
└─────────┼────────────────┼────────────────┼─────────────┘
          │                │                │
          ▼                ▼                ▼
┌─────────────────────────────────────────────────────────┐
│                  OpenCode Server                         │
│            HTTP API (default port 4096)                  │
└─────────────────────────────────────────────────────────┘`)])],-1)),t[2]||(t[2]=e("hr",null,null,-1)),t[3]||(t[3]=e("h2",{id:"install-sdk",tabindex:"-1"},[n("Install SDK "),e("a",{class:"header-anchor",href:"#install-sdk","aria-label":"Permalink to “Install SDK”"},"​")],-1)),t[4]||(t[4]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"npm install @opencode-ai/sdk")])],-1)),t[5]||(t[5]=e("hr",null,null,-1)),t[6]||(t[6]=e("h2",{id:"three-usage-modes",tabindex:"-1"},[n("Three Usage Modes "),e("a",{class:"header-anchor",href:"#three-usage-modes","aria-label":"Permalink to “Three Usage Modes”"},"​")],-1)),t[7]||(t[7]=e("h3",{id:"_1-create-server-client-recommended",tabindex:"-1"},[n("1. Create Server + Client (Recommended) "),e("a",{class:"header-anchor",href:"#_1-create-server-client-recommended","aria-label":"Permalink to “1. Create Server + Client (Recommended)”"},"​")],-1)),t[8]||(t[8]=e("p",null,"Start both server and client, ideal for standalone scripts and automation:",-1)),t[9]||(t[9]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"

const { client, server } = await createOpencode()

// Use client to call APIs
const sessions = await client.session.list()
console.log(\`Currently \${sessions.data?.length} sessions\`)

// Close server when done
server.close()`)])],-1)),t[10]||(t[10]=o('<h4 id="serveroptions-parameters" tabindex="-1">ServerOptions Parameters <a class="header-anchor" href="#serveroptions-parameters" aria-label="Permalink to “ServerOptions Parameters”">​</a></h4><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>hostname</code></td><td><code>string</code></td><td>Server hostname</td><td><code>127.0.0.1</code></td></tr><tr><td><code>port</code></td><td><code>number</code></td><td>Server port</td><td><code>4096</code></td></tr><tr><td><code>signal</code></td><td><code>AbortSignal</code></td><td>Abort signal for cancellation</td><td><code>undefined</code></td></tr><tr><td><code>timeout</code></td><td><code>number</code></td><td>Server startup timeout (ms)</td><td><code>2000+</code></td></tr><tr><td><code>config</code></td><td><code>Config</code></td><td>Config object to override <code>opencode.json</code></td><td><code>{}</code></td></tr></tbody></table><blockquote><p><strong>Source</strong>: <code>packages/sdk/js/src/server.ts:4-10</code></p></blockquote><h4 id="configuration-override-example" tabindex="-1">Configuration Override Example <a class="header-anchor" href="#configuration-override-example" aria-label="Permalink to “Configuration Override Example”">​</a></h4>',4)),t[11]||(t[11]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"

const opencode = await createOpencode({
  hostname: "127.0.0.1",
  port: 4097,  // Use different port to avoid conflicts
  timeout: 10000,
  config: {
    model: "anthropic/claude-opus-4-5-thinking",
    logLevel: "DEBUG",
  },
})

console.log(\`Server running at \${opencode.server.url}\`)

// Close when done
opencode.server.close()`)])],-1)),t[12]||(t[12]=e("hr",null,null,-1)),t[13]||(t[13]=e("h3",{id:"_2-client-only-mode",tabindex:"-1"},[n("2. Client-Only Mode "),e("a",{class:"header-anchor",href:"#_2-client-only-mode","aria-label":"Permalink to “2. Client-Only Mode”"},"​")],-1)),t[14]||(t[14]=e("p",null,"Connect to a running OpenCode instance, ideal for plugin development:",-1)),t[15]||(t[15]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeClient } from "@opencode-ai/sdk"

const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
})

// Use client directly
const sessions = await client.session.list()`)])],-1)),t[16]||(t[16]=o('<h4 id="clientoptions-parameters" tabindex="-1">ClientOptions Parameters <a class="header-anchor" href="#clientoptions-parameters" aria-label="Permalink to “ClientOptions Parameters”">​</a></h4><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>baseUrl</code></td><td><code>string</code></td><td>Server URL</td><td><code>http://localhost:4096</code></td></tr><tr><td><code>fetch</code></td><td><code>function</code></td><td>Custom fetch implementation</td><td><code>globalThis.fetch</code></td></tr><tr><td><code>parseAs</code></td><td><code>string</code></td><td>Response parsing: <code>auto</code>, <code>json</code>, <code>text</code>, <code>blob</code>, <code>arrayBuffer</code>, <code>stream</code>, <code>formData</code></td><td><code>auto</code></td></tr><tr><td><code>responseStyle</code></td><td><code>&quot;data&quot; | &quot;fields&quot;</code></td><td>Return style: <code>data</code> returns only data, <code>fields</code> returns full response</td><td><code>fields</code></td></tr><tr><td><code>throwOnError</code></td><td><code>boolean</code></td><td>Throw on error instead of returning</td><td><code>false</code></td></tr><tr><td><code>directory</code></td><td><code>string</code></td><td>Project directory (passed via <code>X-Opencode-Directory</code> header)</td><td><code>undefined</code></td></tr></tbody></table><blockquote><p><strong>Source</strong>: <code>packages/sdk/js/src/gen/client/types.gen.ts:10-52</code>, <code>packages/sdk/js/src/client.ts:8</code></p></blockquote><h4 id="switching-project-directories" tabindex="-1">Switching Project Directories <a class="header-anchor" href="#switching-project-directories" aria-label="Permalink to “Switching Project Directories”">​</a></h4>',4)),t[17]||(t[17]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Connect to different projects
const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
  directory: "/path/to/my-project",
})`)])],-1)),t[18]||(t[18]=e("h4",{id:"remote-connection-with-authentication",tabindex:"-1"},[n("Remote Connection (with Authentication) "),e("a",{class:"header-anchor",href:"#remote-connection-with-authentication","aria-label":"Permalink to “Remote Connection (with Authentication)”"},"​")],-1)),t[19]||(t[19]=e("p",null,[n("When connecting to a remote OpenCode server with "),e("code",null,"OPENCODE_SERVER_PASSWORD"),n(" set, pass Basic Auth via "),e("code",null,"headers"),n(":")],-1)),t[20]||(t[20]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeClient } from "@opencode-ai/sdk"

// Remote connection (with auth)
const client = createOpencodeClient({
  baseUrl: "http://192.168.1.100:4096",
  headers: {
    // Basic Auth format: Base64(username:password)
    // Use btoa() in browser/Edge Runtime
    Authorization: \`Basic \${btoa("opencode:your-password")}\`
  },
  directory: "/projects/my-app"  // Specify remote project directory
})`)])],-1)),t[21]||(t[21]=e("details",{class:"details custom-block"},[e("summary",null,"Use Buffer in Node.js"),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},'// Node.js doesn\'t have btoa, use Buffer instead\nAuthorization: `Basic ${Buffer.from("opencode:password").toString("base64")}`')])])],-1)),t[22]||(t[22]=o('<table tabindex="0"><thead><tr><th>Scenario</th><th>Username</th><th>Description</th></tr></thead><tbody><tr><td>Default</td><td><code>opencode</code></td><td>Server default username</td></tr><tr><td>Custom</td><td>Value of <code>OPENCODE_SERVER_USERNAME</code> env var</td><td>If server has custom username</td></tr></tbody></table><blockquote><p><strong>Source</strong>: <code>packages/opencode/src/server/server.ts:84-87</code> (Basic Auth middleware)</p></blockquote><hr><h3 id="_3-launch-tui-interface" tabindex="-1">3. Launch TUI Interface <a class="header-anchor" href="#_3-launch-tui-interface" aria-label="Permalink to “3. Launch TUI Interface”">​</a></h3><p>Programmatically start OpenCode&#39;s terminal interface:</p>',5)),t[23]||(t[23]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeTui } from "@opencode-ai/sdk"

const tui = createOpencodeTui({
  project: "/path/to/my-project",
  model: "anthropic/claude-opus-4-5-thinking",
  session: "abc123",  // Resume specific session
  agent: "build",
})

// User can interact in TUI
// ...

// Close TUI
tui.close()`)])],-1)),t[24]||(t[24]=o('<h4 id="tuioptions-parameters" tabindex="-1">TuiOptions Parameters <a class="header-anchor" href="#tuioptions-parameters" aria-label="Permalink to “TuiOptions Parameters”">​</a></h4><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>project</code></td><td><code>string</code></td><td>Project directory path</td></tr><tr><td><code>model</code></td><td><code>string</code></td><td>Model to use (format: <code>provider/model</code>)</td></tr><tr><td><code>session</code></td><td><code>string</code></td><td>Session ID to resume</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>Agent to use (e.g., <code>build</code>, <code>plan</code>)</td></tr><tr><td><code>signal</code></td><td><code>AbortSignal</code></td><td>Abort signal for cancellation</td></tr><tr><td><code>config</code></td><td><code>Config</code></td><td>Configuration object</td></tr></tbody></table><blockquote><p><strong>Source</strong>: <code>packages/sdk/js/src/server.ts:12-19</code></p></blockquote><hr><h2 id="basic-api-usage" tabindex="-1">Basic API Usage <a class="header-anchor" href="#basic-api-usage" aria-label="Permalink to “Basic API Usage”">​</a></h2><h3 id="session-management" tabindex="-1">Session Management <a class="header-anchor" href="#session-management" aria-label="Permalink to “Session Management”">​</a></h3>',6)),t[25]||(t[25]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Create new session
const session = await client.session.create({
  body: { title: "My Task" },
})
console.log(\`Created session: \${session.data?.id}\`)

// List all sessions
const sessions = await client.session.list()

// Get single session
const detail = await client.session.get({
  path: { id: session.data!.id },
})

// Delete session
await client.session.delete({
  path: { id: session.data!.id },
})`)])],-1)),t[26]||(t[26]=e("h3",{id:"send-messages",tabindex:"-1"},[n("Send Messages "),e("a",{class:"header-anchor",href:"#send-messages","aria-label":"Permalink to “Send Messages”"},"​")],-1)),t[27]||(t[27]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Send prompt and wait for AI response
const result = await client.session.prompt({
  path: { id: sessionId },
  body: {
    model: { providerID: "anthropic", modelID: "claude-opus-4-5-thinking" },
    parts: [{ type: "text", text: "Please analyze the performance issues in this code" }],
  },
})

// Inject context (without triggering AI response)
await client.session.prompt({
  path: { id: sessionId },
  body: {
    noReply: true,
    parts: [{ type: "text", text: "You are a professional code review assistant." }],
  },
})`)])],-1)),t[28]||(t[28]=e("h3",{id:"async-send-don-t-wait-for-response",tabindex:"-1"},[n("Async Send (Don't Wait for Response) "),e("a",{class:"header-anchor",href:"#async-send-don-t-wait-for-response","aria-label":"Permalink to “Async Send (Don't Wait for Response)”"},"​")],-1)),t[29]||(t[29]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Returns immediately, ideal for long tasks
await client.session.promptAsync({
  path: { id: sessionId },
  body: {
    parts: [{ type: "text", text: "Please refactor the entire module" }],
  },
})

// Get response via event listener`)])],-1)),t[30]||(t[30]=e("h3",{id:"file-operations",tabindex:"-1"},[n("File Operations "),e("a",{class:"header-anchor",href:"#file-operations","aria-label":"Permalink to “File Operations”"},"​")],-1)),t[31]||(t[31]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Search text content
const textResults = await client.find.text({
  query: { pattern: "function.*opencode" },
})

// Find files (supports glob patterns)
const files = await client.find.files({
  query: { 
    query: "*.ts", 
    type: "file",
    limit: 100,  // Max 100 results
  },
})

// Find directories
const dirs = await client.find.files({
  query: { query: "src", type: "directory" },
})

// Read file content
const content = await client.file.read({
  query: { path: "src/index.ts" },
})

// Get file status (git changes)
const status = await client.file.status()`)])],-1)),t[32]||(t[32]=e("h3",{id:"tui-control",tabindex:"-1"},[n("TUI Control "),e("a",{class:"header-anchor",href:"#tui-control","aria-label":"Permalink to “TUI Control”"},"​")],-1)),t[33]||(t[33]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Append text to input box
await client.tui.appendPrompt({
  body: { text: "Please check this file" },
})

// Submit current input
await client.tui.submitPrompt()

// Clear input
await client.tui.clearPrompt()

// Show notification
await client.tui.showToast({
  body: { 
    message: "Task completed!", 
    variant: "success",
    duration: 3000,  // Show for 3 seconds
  },
})

// Open dialogs
await client.tui.openHelp()
await client.tui.openSessions()
await client.tui.openThemes()
await client.tui.openModels()

// Execute TUI commands
await client.tui.executeCommand({
  body: { command: "agent_cycle" },
})`)])],-1)),t[34]||(t[34]=e("hr",null,null,-1)),t[35]||(t[35]=e("h2",{id:"real-time-event-listening",tabindex:"-1"},[n("Real-time Event Listening "),e("a",{class:"header-anchor",href:"#real-time-event-listening","aria-label":"Permalink to “Real-time Event Listening”"},"​")],-1)),t[36]||(t[36]=e("h3",{id:"subscribe-to-event-stream",tabindex:"-1"},[n("Subscribe to Event Stream "),e("a",{class:"header-anchor",href:"#subscribe-to-event-stream","aria-label":"Permalink to “Subscribe to Event Stream”"},"​")],-1)),t[37]||(t[37]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`const events = await client.event.subscribe()

for await (const event of events.stream) {
  console.log(\`Event type: \${event.type}\`)
  console.log(\`Event data:\`, event.properties)
  
  // Handle by event type
  switch (event.type) {
    case "message.updated":
      console.log("Message updated:", event.properties.info)
      break
    case "session.idle":
      console.log("Session idle:", event.properties.sessionID)
      break
    case "permission.updated":
      console.log("Permission request:", event.properties)
      break
  }
}`)])],-1)),t[38]||(t[38]=o('<h3 id="common-event-types" tabindex="-1">Common Event Types <a class="header-anchor" href="#common-event-types" aria-label="Permalink to “Common Event Types”">​</a></h3><table tabindex="0"><thead><tr><th>Event Type</th><th>Description</th></tr></thead><tbody><tr><td><code>message.updated</code></td><td>Message content updated</td></tr><tr><td><code>message.part.updated</code></td><td>Message part updated (includes delta)</td></tr><tr><td><code>session.status</code></td><td>Session status changed (idle/busy/retry)</td></tr><tr><td><code>session.idle</code></td><td>Session entered idle state</td></tr><tr><td><code>permission.updated</code></td><td>Permission request pending</td></tr><tr><td><code>file.edited</code></td><td>File was edited</td></tr><tr><td><code>todo.updated</code></td><td>Todo list updated</td></tr></tbody></table><blockquote><p>For complete event types, see <a href="./10b-sdk-reference.html#event-types-complete-list">5.10b API Reference</a></p></blockquote><hr><h2 id="type-imports" tabindex="-1">Type Imports <a class="header-anchor" href="#type-imports" aria-label="Permalink to “Type Imports”">​</a></h2><p>SDK provides complete TypeScript type definitions:</p>',6)),t[39]||(t[39]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import type { 
  // Core types
  Session,
  Message,
  Part,
  
  // Event types
  Event,
  EventMessageUpdated,
  EventSessionIdle,
  
  // Config types
  Config,
  AgentConfig,
  ProviderConfig,
  
  // Others
  Todo,
  Permission,
  Agent,
  Provider,
  Model,
} from "@opencode-ai/sdk"`)])],-1)),t[40]||(t[40]=e("hr",null,null,-1)),t[41]||(t[41]=e("h2",{id:"error-handling",tabindex:"-1"},[n("Error Handling "),e("a",{class:"header-anchor",href:"#error-handling","aria-label":"Permalink to “Error Handling”"},"​")],-1)),t[42]||(t[42]=e("h3",{id:"standard-error-handling",tabindex:"-1"},[n("Standard Error Handling "),e("a",{class:"header-anchor",href:"#standard-error-handling","aria-label":"Permalink to “Standard Error Handling”"},"​")],-1)),t[43]||(t[43]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`try {
  const session = await client.session.get({ 
    path: { id: "invalid-id" } 
  })
} catch (error) {
  console.error("Failed to get session:", (error as Error).message)
}`)])],-1)),t[44]||(t[44]=e("h3",{id:"using-throwonerror-option",tabindex:"-1"},[n("Using throwOnError Option "),e("a",{class:"header-anchor",href:"#using-throwonerror-option","aria-label":"Permalink to “Using throwOnError Option”"},"​")],-1)),t[45]||(t[45]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Global configuration
const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
  throwOnError: true,  // Throw on all request errors
})

// Or use in single request
const result = await client.session.get({
  path: { id: sessionId },
  throwOnError: true,
})`)])],-1)),t[46]||(t[46]=e("h3",{id:"check-return-value",tabindex:"-1"},[n("Check Return Value "),e("a",{class:"header-anchor",href:"#check-return-value","aria-label":"Permalink to “Check Return Value”"},"​")],-1)),t[47]||(t[47]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`const result = await client.session.get({
  path: { id: sessionId },
})

if (result.error) {
  console.error("Error:", result.error)
} else {
  console.log("Session:", result.data)
}`)])],-1)),t[48]||(t[48]=e("hr",null,null,-1)),t[49]||(t[49]=e("h2",{id:"practical-example-batch-code-review",tabindex:"-1"},[n("Practical Example: Batch Code Review "),e("a",{class:"header-anchor",href:"#practical-example-batch-code-review","aria-label":"Permalink to “Practical Example: Batch Code Review”"},"​")],-1)),t[50]||(t[50]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"
import { readdir } from "fs/promises"

async function batchCodeReview(directory: string) {
  const { client, server } = await createOpencode({
    config: {
      model: "anthropic/claude-opus-4-5-thinking",
    },
  })

  try {
    // Create session
    const session = await client.session.create({
      body: { title: \`Batch Code Review - \${directory}\` },
    })
    const sessionId = session.data!.id

    // Find all TypeScript files
    const files = await client.find.files({
      query: { query: "*.ts", type: "file", directory },
    })

    console.log(\`Found \${files.data?.length} files\`)

    // Review each file
    for (const file of files.data ?? []) {
      console.log(\`Reviewing: \${file}\`)
      
      await client.session.prompt({
        path: { id: sessionId },
        body: {
          parts: [{ 
            type: "text", 
            text: \`Please review file \${file} for potential issues and improvement suggestions.\` 
          }],
        },
      })
    }

    console.log("Review complete!")
  } finally {
    server.close()
  }
}

batchCodeReview("./src")`)])],-1)),t[51]||(t[51]=o('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>SDK connection failed</td><td>Server not running</td><td>Run <code>opencode serve</code> first or use <code>createOpencode()</code></td></tr><tr><td>Port conflict</td><td>Default port 4096 in use</td><td>Specify different port <code>port: 4097</code></td></tr><tr><td>Type errors</td><td>SDK version mismatch</td><td>Update to latest <code>npm update @opencode-ai/sdk</code></td></tr><tr><td>Timeout error</td><td>Slow server startup or network issues</td><td>Increase <code>timeout</code> value</td></tr><tr><td>Event stream interrupted</td><td>Connection dropped</td><td>Implement reconnection logic</td></tr><tr><td>Response format confusion</td><td><code>responseStyle</code> config</td><td>Default is <code>fields</code>, returns <code>{ data, error, request, response }</code></td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><strong>Install SDK</strong>: <code>npm install @opencode-ai/sdk</code></li><li><strong>Three usage modes</strong>: <ul><li><code>createOpencode()</code> - Server + Client</li><li><code>createOpencodeClient()</code> - Client only</li><li><code>createOpencodeTui()</code> - Launch TUI</li></ul></li><li><strong>Basic APIs</strong>: Session management, message sending, file operations, TUI control</li><li><strong>Event listening</strong>: Real-time status change notifications</li></ol><hr><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to “Related Resources”">​</a></h2><ul><li><a href="./10b-sdk-reference.html">5.10b API Reference</a> - Complete API documentation</li><li><a href="./09a-remote-basics.html">5.9 Remote Development</a> - HTTP Server details</li><li><a href="https://opencode.ai/docs/sdk" target="_blank" rel="noreferrer">Official SDK Docs</a></li></ul><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p><a href="./10b-sdk-reference.html">5.10b API Reference</a> will cover all 21 API modules, complete type definitions, and 35+ event types in detail.</p></blockquote>',13))])}const C=a(p,[["render",u]]);export{v as __pageData,C as default};
