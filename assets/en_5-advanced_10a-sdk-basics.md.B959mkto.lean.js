import{_ as a,I as r,c as i,o as d,a5 as o,J as l,j as e,a as n,bd as c}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.10a SDK Basics","description":"Use the SDK to control OpenCode programmatically for automation and deep integration.","frontmatter":{"title":"5.10a SDK Basics","subtitle":"Control OpenCode Programmatically","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.10a","duration":"25 min","practice":"30 min","level":"Advanced","description":"Use the SDK to control OpenCode programmatically for automation and deep integration.","tags":["SDK","Programming Interface","Automation"],"prerequisite":["5.1 Configuration Guide","5.9 Remote Development"]},"headers":[],"relativePath":"en/5-advanced/10a-sdk-basics.md","filePath":"en/5-advanced/10a-sdk-basics.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/10a-sdk-basics.md"};function u(m,t,h,g,b,f){const s=r("AdInArticle");return d(),i("div",null,[t[0]||(t[0]=o("",13)),l(s),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────┐
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
server.close()`)])],-1)),t[10]||(t[10]=o("",4)),t[11]||(t[11]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"

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
const sessions = await client.session.list()`)])],-1)),t[16]||(t[16]=o("",4)),t[17]||(t[17]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Connect to different projects
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
})`)])],-1)),t[21]||(t[21]=e("details",{class:"details custom-block"},[e("summary",null,"Use Buffer in Node.js"),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},'// Node.js doesn\'t have btoa, use Buffer instead\nAuthorization: `Basic ${Buffer.from("opencode:password").toString("base64")}`')])])],-1)),t[22]||(t[22]=o("",5)),t[23]||(t[23]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeTui } from "@opencode-ai/sdk"

const tui = createOpencodeTui({
  project: "/path/to/my-project",
  model: "anthropic/claude-opus-4-5-thinking",
  session: "abc123",  // Resume specific session
  agent: "build",
})

// User can interact in TUI
// ...

// Close TUI
tui.close()`)])],-1)),t[24]||(t[24]=o("",6)),t[25]||(t[25]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Create new session
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
}`)])],-1)),t[38]||(t[38]=o("",6)),t[39]||(t[39]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import type { 
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

batchCodeReview("./src")`)])],-1)),t[51]||(t[51]=o("",13))])}const C=a(p,[["render",u]]);export{v as __pageData,C as default};
