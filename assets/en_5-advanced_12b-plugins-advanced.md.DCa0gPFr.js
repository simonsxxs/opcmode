import{_ as s,I as d,c as r,o as i,a5 as o,J as l,j as t,a as n,bk as c}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.12b Plugins Advanced","description":"Master all event hooks and functional hooks, create custom tools and authentication plugins, implement advanced plugin features.","frontmatter":{"title":"5.12b Plugins Advanced","subtitle":"All Hook Types and Advanced Features","course":"OpenCode Chinese Practical Course","stage":"Stage 5","lesson":"5.12b","duration":"30 minutes","practice":"40 minutes","level":"Advanced","description":"Master all event hooks and functional hooks, create custom tools and authentication plugins, implement advanced plugin features.","tags":["plugins","hooks","advanced features"],"prerequisite":["5.12a Plugins Basics"]},"headers":[],"relativePath":"en/5-advanced/12b-plugins-advanced.md","filePath":"en/5-advanced/12b-plugins-advanced.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/12b-plugins-advanced.md"};function u(h,e,m,g,b,y){const a=d("AdInArticle");return i(),r("div",null,[e[0]||(e[0]=o('<h1 id="plugins-advanced" tabindex="-1">Plugins Advanced <a class="header-anchor" href="#plugins-advanced" aria-label="Permalink to “Plugins Advanced”">​</a></h1><blockquote><p>💡 <strong>One-line summary</strong>: Master all hook types and implement advanced plugin features.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key knowledge points from this lesson:</p><p><img src="'+c+'" alt="5.12b Plugins Advanced Notes" data-zoom-src="/images/5-advanced/plugins-advanced-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Understand the difference between event hooks and functional hooks</li><li>Use all available hook types</li><li>Create custom tools</li><li>Implement authentication plugins</li></ul><hr><h2 id="hook-categories" tabindex="-1">Hook Categories <a class="header-anchor" href="#hook-categories" aria-label="Permalink to “Hook Categories”">​</a></h2><p>OpenCode plugins have two types of hooks:</p><table tabindex="0"><thead><tr><th>Type</th><th>Characteristics</th><th>Use Cases</th></tr></thead><tbody><tr><td><strong>Event Hooks</strong></td><td>Passive listening, no data modification</td><td>Logging, notifications, statistics</td></tr><tr><td><strong>Functional Hooks</strong></td><td>Active interception, can modify data</td><td>Permission control, parameter modification, data transformation</td></tr></tbody></table><h3 id="event-hooks" tabindex="-1">Event Hooks <a class="header-anchor" href="#event-hooks" aria-label="Permalink to “Event Hooks”">​</a></h3>',13)),l(a),e[1]||(e[1]=t("p",null,[n("Subscribe to all events using "),t("code",null,"event"),n(":")],-1)),e[2]||(e[2]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    event: async ({ event }) => {
      console.log(\`Event: \${event.type}\`, event.properties)
    },
  }
}`)])],-1)),e[3]||(e[3]=t("h3",{id:"functional-hooks",tabindex:"-1"},[n("Functional Hooks "),t("a",{class:"header-anchor",href:"#functional-hooks","aria-label":"Permalink to “Functional Hooks”"},"​")],-1)),e[4]||(e[4]=t("p",null,"Intercept specific operations using concrete hook names:",-1)),e[5]||(e[5]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      // Can modify output to affect subsequent execution
      console.log(\`Tool: \${input.tool}\`)
    },
  }
}`)])],-1)),e[6]||(e[6]=o('<hr><h2 id="event-types" tabindex="-1">Event Types <a class="header-anchor" href="#event-types" aria-label="Permalink to “Event Types”">​</a></h2><p>All events are subscribed via the <code>event</code> hook and distinguished by <code>event.type</code>:</p><h3 id="command-events" tabindex="-1">Command Events <a class="header-anchor" href="#command-events" aria-label="Permalink to “Command Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>command.executed</code></td><td>After slash command execution</td></tr></tbody></table><h3 id="file-events" tabindex="-1">File Events <a class="header-anchor" href="#file-events" aria-label="Permalink to “File Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>file.edited</code></td><td>After file is edited</td></tr><tr><td><code>file.watcher.updated</code></td><td>File watcher detects changes</td></tr></tbody></table><h3 id="installation-events" tabindex="-1">Installation Events <a class="header-anchor" href="#installation-events" aria-label="Permalink to “Installation Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>installation.updated</code></td><td>After OpenCode installation/update</td></tr></tbody></table><h3 id="lsp-events" tabindex="-1">LSP Events <a class="header-anchor" href="#lsp-events" aria-label="Permalink to “LSP Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>lsp.client.diagnostics</code></td><td>LSP diagnostics update</td></tr><tr><td><code>lsp.updated</code></td><td>LSP service status change</td></tr></tbody></table><h3 id="message-events" tabindex="-1">Message Events <a class="header-anchor" href="#message-events" aria-label="Permalink to “Message Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>message.part.removed</code></td><td>Message part is deleted</td></tr><tr><td><code>message.part.updated</code></td><td>Message part is updated</td></tr><tr><td><code>message.removed</code></td><td>Message is deleted</td></tr><tr><td><code>message.updated</code></td><td>Message is updated</td></tr></tbody></table><h3 id="permission-events" tabindex="-1">Permission Events <a class="header-anchor" href="#permission-events" aria-label="Permalink to “Permission Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>permission.replied</code></td><td>User responds to permission request</td></tr><tr><td><code>permission.updated</code></td><td>Permission status change</td></tr></tbody></table><h3 id="server-events" tabindex="-1">Server Events <a class="header-anchor" href="#server-events" aria-label="Permalink to “Server Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>server.connected</code></td><td>Server connection successful</td></tr></tbody></table><h3 id="session-events" tabindex="-1">Session Events <a class="header-anchor" href="#session-events" aria-label="Permalink to “Session Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>session.created</code></td><td>New session created</td></tr><tr><td><code>session.compacted</code></td><td>Session compaction completed</td></tr><tr><td><code>session.deleted</code></td><td>Session is deleted</td></tr><tr><td><code>session.diff</code></td><td>Session diff generated</td></tr><tr><td><code>session.error</code></td><td>Session error occurs</td></tr><tr><td><code>session.idle</code></td><td>Session enters idle state (AI response complete)</td></tr><tr><td><code>session.status</code></td><td>Session status change</td></tr><tr><td><code>session.updated</code></td><td>Session info update</td></tr></tbody></table><h3 id="todo-events" tabindex="-1">Todo Events <a class="header-anchor" href="#todo-events" aria-label="Permalink to “Todo Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>todo.updated</code></td><td>Todo list update</td></tr></tbody></table><h3 id="tui-events" tabindex="-1">TUI Events <a class="header-anchor" href="#tui-events" aria-label="Permalink to “TUI Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event</th><th>Trigger Timing</th></tr></thead><tbody><tr><td><code>tui.prompt.append</code></td><td>Content appended to prompt</td></tr><tr><td><code>tui.command.execute</code></td><td>TUI command execution</td></tr><tr><td><code>tui.toast.show</code></td><td>Show toast notification</td></tr></tbody></table><hr><h2 id="functional-hooks-details" tabindex="-1">Functional Hooks Details <a class="header-anchor" href="#functional-hooks-details" aria-label="Permalink to “Functional Hooks Details”">​</a></h2><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to “config”">​</a></h3><p>Triggered after config is loaded, can modify configuration:</p>',27)),e[7]||(e[7]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    config: async (config) => {
      // config: Config object (see config.ts for full type definition)
      // Can directly modify properties, e.g.:
      config.model = "anthropic/claude-opus-4-5-thinking"
    },
  }
}`)])],-1)),e[8]||(e[8]=t("p",null,[t("strong",null,"Parameter Type"),n(": "),t("code",null,"config: Config"),n(" (read/write)")],-1)),e[9]||(e[9]=t("h3",{id:"chat-message",tabindex:"-1"},[n("chat.message "),t("a",{class:"header-anchor",href:"#chat-message","aria-label":"Permalink to “chat.message”"},"​")],-1)),e[10]||(e[10]=t("p",null,"Triggered when new message is received, can modify message content:",-1)),e[11]||(e[11]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "chat.message": async (input, output) => {
      // input: { sessionID, agent, model, messageID, variant }
      // output: { message, parts }
      console.log(\`New message in session: \${input.sessionID}\`)
    },
  }
}`)])],-1)),e[12]||(e[12]=o('<p><strong>input Type</strong>:</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>sessionID</code></td><td><code>string</code></td><td>Session ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>Agent name</td></tr><tr><td><code>model</code></td><td><code>{ providerID, modelID }</code></td><td>Model info</td></tr><tr><td><code>messageID</code></td><td><code>string</code></td><td>Message ID</td></tr><tr><td><code>variant</code></td><td><code>string</code></td><td>Message variant</td></tr></tbody></table><p><strong>output Type</strong>:</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>message</code></td><td><code>Message</code></td><td>Message object (modifiable)</td></tr><tr><td><code>parts</code></td><td><code>Part[]</code></td><td>Message content parts (modifiable)</td></tr></tbody></table><h3 id="chat-params" tabindex="-1">chat.params <a class="header-anchor" href="#chat-params" aria-label="Permalink to “chat.params”">​</a></h3><p>Triggered before LLM call, can modify model parameters:</p>',6)),e[13]||(e[13]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "chat.params": async (input, output) => {
      // input: { sessionID, agent, model, provider, message }
      // output: { temperature, topP, topK, options }
      
      // Force low temperature
      output.temperature = 0.3
      
      // Add custom options (passed as HTTP headers)
      output.options.customHeader = "my-value"
    },
  }
}`)])],-1)),e[14]||(e[14]=o('<p><strong>input Type</strong>:</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>sessionID</code></td><td><code>string</code></td><td>Session ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>Agent name</td></tr><tr><td><code>model</code></td><td><code>{ providerID, modelID }</code></td><td>Model info</td></tr><tr><td><code>provider</code></td><td><code>Provider</code></td><td>Provider object</td></tr><tr><td><code>message</code></td><td><code>Message</code></td><td>Current message</td></tr></tbody></table><p><strong>output Type</strong> (modifiable):</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>temperature</code></td><td><code>number?</code></td><td>Temperature parameter</td></tr><tr><td><code>topP</code></td><td><code>number?</code></td><td>Top-P parameter</td></tr><tr><td><code>topK</code></td><td><code>number?</code></td><td>Top-K parameter</td></tr><tr><td><code>options</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>Custom options (passed as HTTP headers)</td></tr></tbody></table><h3 id="permission-ask" tabindex="-1">permission.ask <a class="header-anchor" href="#permission-ask" aria-label="Permalink to “permission.ask”">​</a></h3><p>Triggered on permission request, can modify permission decision:</p>',6)),e[15]||(e[15]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "permission.ask": async (input, output) => {
      // input: Permission object
      // output: { status: "ask" | "deny" | "allow" }
      
      // Auto-allow specific tools
      if (input.tool === "read" && input.path?.startsWith("/safe/")) {
        output.status = "allow"
      }
    },
  }
}`)])],-1)),e[16]||(e[16]=t("h3",{id:"tool-execute-before",tabindex:"-1"},[n("tool.execute.before "),t("a",{class:"header-anchor",href:"#tool-execute-before","aria-label":"Permalink to “tool.execute.before”"},"​")],-1)),e[17]||(e[17]=t("p",null,"Triggered before tool execution, can modify parameters or throw error to block execution:",-1)),e[18]||(e[18]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      // input: { tool, sessionID, callID }
      // output: { args }
      
      if (input.tool === "bash" && output.args.command.includes("rm -rf")) {
        throw new Error("Dangerous command blocked!")
      }
    },
  }
}`)])],-1)),e[19]||(e[19]=o('<p><strong>input Type</strong>:</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>tool</code></td><td><code>string</code></td><td>Tool name (e.g., <code>read</code>, <code>bash</code>, <code>write</code>)</td></tr><tr><td><code>sessionID</code></td><td><code>string</code></td><td>Session ID</td></tr><tr><td><code>callID</code></td><td><code>string</code></td><td>Tool call ID</td></tr></tbody></table><p><strong>output Type</strong> (modifiable):</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>args</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>Tool arguments (modifiable or interceptable)</td></tr></tbody></table><p><strong>Throwing Error</strong>: Throwing <code>Error</code> will block tool execution, error message is returned to LLM.</p><h3 id="tool-execute-after" tabindex="-1">tool.execute.after <a class="header-anchor" href="#tool-execute-after" aria-label="Permalink to “tool.execute.after”">​</a></h3><p>Triggered after tool execution, can modify output:</p>',7)),e[20]||(e[20]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "tool.execute.after": async (input, output) => {
      // input: { tool, sessionID, callID }
      // output: { title, output, metadata }
      
      // Add execution timestamp
      output.metadata.executedAt = new Date().toISOString()
    },
  }
}`)])],-1)),e[21]||(e[21]=o('<p><strong>input Type</strong>:</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>tool</code></td><td><code>string</code></td><td>Tool name</td></tr><tr><td><code>sessionID</code></td><td><code>string</code></td><td>Session ID</td></tr><tr><td><code>callID</code></td><td><code>string</code></td><td>Tool call ID</td></tr></tbody></table><p><strong>output Type</strong> (modifiable):</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>title</code></td><td><code>string</code></td><td>Tool execution title (displayed in UI)</td></tr><tr><td><code>output</code></td><td><code>string</code></td><td>Tool output content (returned to LLM)</td></tr><tr><td><code>metadata</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>Metadata (freely addable)</td></tr></tbody></table><hr><h2 id="experimental-hooks" tabindex="-1">Experimental Hooks <a class="header-anchor" href="#experimental-hooks" aria-label="Permalink to “Experimental Hooks”">​</a></h2><blockquote><p>⚠️ <strong>Warning</strong>: The following hooks are prefixed with <code>experimental.</code> and API may change in future versions.</p></blockquote><h3 id="experimental-session-compacting" tabindex="-1">experimental.session.compacting <a class="header-anchor" href="#experimental-session-compacting" aria-label="Permalink to “experimental.session.compacting”">​</a></h3><p>Triggered before session compaction, can customize compaction context:</p>',9)),e[22]||(e[22]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const CompactionPlugin: Plugin = async () => {
  return {
    "experimental.session.compacting": async (input, output) => {
      // input: { sessionID }
      // output: { context: string[], prompt?: string }
      
      // Method 1: Append extra context
      output.context.push(\`
## Custom Context

Preserve the following state:
- Current task status
- Important decisions
- Files being processed
\`)
    },
  }
}`)])],-1)),e[23]||(e[23]=t("p",null,"Completely replace compaction prompt:",-1)),e[24]||(e[24]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const CustomCompactionPlugin: Plugin = async () => {
  return {
    "experimental.session.compacting": async (input, output) => {
      // Setting prompt completely replaces default compaction prompt
      // output.context array will be ignored
      output.prompt = \`
You are generating a continuation prompt for a multi-agent session.

Please summarize:
1. Current task and its status
2. Files being modified and who is responsible
3. Dependencies between agents
4. Next steps to complete the work

Format as a structured prompt that a new agent can use to resume work.
\`
    },
  }
}`)])],-1)),e[25]||(e[25]=t("h3",{id:"experimental-chat-messages-transform",tabindex:"-1"},[n("experimental.chat.messages.transform "),t("a",{class:"header-anchor",href:"#experimental-chat-messages-transform","aria-label":"Permalink to “experimental.chat.messages.transform”"},"​")],-1)),e[26]||(e[26]=t("p",null,"Triggered before messages are sent to LLM, can transform message list:",-1)),e[27]||(e[27]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "experimental.chat.messages.transform": async (input, output) => {
      // output.messages: Array<{ info: Message, parts: Part[] }>
      
      // Filter certain messages
      output.messages = output.messages.filter(m => 
        !m.parts.some(p => p.type === "text" && p.text.includes("SECRET"))
      )
    },
  }
}`)])],-1)),e[28]||(e[28]=t("h3",{id:"experimental-chat-system-transform",tabindex:"-1"},[n("experimental.chat.system.transform "),t("a",{class:"header-anchor",href:"#experimental-chat-system-transform","aria-label":"Permalink to “experimental.chat.system.transform”"},"​")],-1)),e[29]||(e[29]=t("p",null,"Triggered before system prompt is sent to LLM:",-1)),e[30]||(e[30]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "experimental.chat.system.transform": async (input, output) => {
      // output.system: string[]
      
      // Append custom system instructions
      output.system.push("Always respond in formal English.")
    },
  }
}`)])],-1)),e[31]||(e[31]=t("h3",{id:"experimental-text-complete",tabindex:"-1"},[n("experimental.text.complete "),t("a",{class:"header-anchor",href:"#experimental-text-complete","aria-label":"Permalink to “experimental.text.complete”"},"​")],-1)),e[32]||(e[32]=t("p",null,"Triggered after text completion:",-1)),e[33]||(e[33]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "experimental.text.complete": async (input, output) => {
      // input: { sessionID, messageID, partID }
      // output: { text }
      
      // Can modify the final output text
      output.text = output.text.replace(/\\bAI\\b/g, "Assistant")
    },
  }
}`)])],-1)),e[34]||(e[34]=t("hr",null,null,-1)),e[35]||(e[35]=t("h2",{id:"custom-tools",tabindex:"-1"},[n("Custom Tools "),t("a",{class:"header-anchor",href:"#custom-tools","aria-label":"Permalink to “Custom Tools”"},"​")],-1)),e[36]||(e[36]=t("p",null,"Plugins can add custom tools for AI to call:",-1)),e[37]||(e[37]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import { type Plugin, tool } from "@opencode-ai/plugin"

export const CustomToolsPlugin: Plugin = async () => {
  return {
    tool: {
      mytool: tool({
        description: "This is a custom tool",
        args: {
          foo: tool.schema.string().describe("Input parameter"),
          count: tool.schema.number().optional().describe("Optional number parameter"),
        },
        async execute(args, ctx) {
          // args: { foo: string, count?: number }
          // ctx: ToolContext
          return \`Hello \${args.foo}!\`
        },
      }),
    },
  }
}`)])],-1)),e[38]||(e[38]=o('<h3 id="tool-function-parameters" tabindex="-1">tool Function Parameters <a class="header-anchor" href="#tool-function-parameters" aria-label="Permalink to “tool Function Parameters”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>description</code></td><td><code>string</code></td><td>Tool description, AI decides when to use based on this</td></tr><tr><td><code>args</code></td><td><code>Record&lt;string, ZodType&gt;</code></td><td>Define parameters using Zod schema</td></tr><tr><td><code>execute</code></td><td><code>(args, ctx) =&gt; Promise&lt;string&gt;</code></td><td>Tool execution function</td></tr></tbody></table><h3 id="toolcontext" tabindex="-1">ToolContext <a class="header-anchor" href="#toolcontext" aria-label="Permalink to “ToolContext”">​</a></h3><p>The second parameter of <code>execute</code> function provides execution context:</p><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>sessionID</code></td><td><code>string</code></td><td>Current session ID</td></tr><tr><td><code>messageID</code></td><td><code>string</code></td><td>Current message ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>Agent name calling the tool</td></tr><tr><td><code>abort</code></td><td><code>AbortSignal</code></td><td>Abort signal for canceling long operations</td></tr></tbody></table><h3 id="using-abort-signal" tabindex="-1">Using abort Signal <a class="header-anchor" href="#using-abort-signal" aria-label="Permalink to “Using abort Signal”">​</a></h3>',6)),e[39]||(e[39]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`tool({
  description: "Long running task",
  args: {},
  async execute(args, ctx) {
    for (let i = 0; i < 100; i++) {
      if (ctx.abort.aborted) {
        return "Task cancelled"
      }
      await doWork(i)
    }
    return "Task completed"
  },
})`)])],-1)),e[40]||(e[40]=t("h3",{id:"zod-schema-quick-reference",tabindex:"-1"},[n("Zod Schema Quick Reference "),t("a",{class:"header-anchor",href:"#zod-schema-quick-reference","aria-label":"Permalink to “Zod Schema Quick Reference”"},"​")],-1)),e[41]||(e[41]=t("p",null,[t("code",null,"tool.schema"),n(" is Zod, common types:")],-1)),e[42]||(e[42]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`tool.schema.string()           // String
tool.schema.number()           // Number
tool.schema.boolean()          // Boolean
tool.schema.array(...)         // Array
tool.schema.object({...})      // Object
tool.schema.enum(["a", "b"])   // Enum
tool.schema.optional()         // Optional (chained)
tool.schema.describe("...")    // Description (chained)`)])],-1)),e[43]||(e[43]=t("hr",null,null,-1)),e[44]||(e[44]=t("h2",{id:"authentication-hooks",tabindex:"-1"},[n("Authentication Hooks "),t("a",{class:"header-anchor",href:"#authentication-hooks","aria-label":"Permalink to “Authentication Hooks”"},"​")],-1)),e[45]||(e[45]=t("p",null,"Plugins can implement custom authentication for providers:",-1)),e[46]||(e[46]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyAuthPlugin: Plugin = async () => {
  return {
    auth: {
      provider: "my-provider",
      
      // Optional: Load config from existing auth
      loader: async (auth, provider) => {
        const token = await auth()
        return { apiKey: token.key }
      },
      
      methods: [
        {
          type: "api",
          label: "API Key",
          prompts: [
            {
              type: "text",
              key: "apiKey",
              message: "Enter your API key",
              validate: (value) => value.length < 10 ? "Key too short" : undefined,
            },
          ],
          authorize: async (inputs) => {
            // Validate and return result
            return {
              type: "success",
              key: inputs.apiKey,
            }
          },
        },
        {
          type: "oauth",
          label: "OAuth Login",
          authorize: async () => {
            return {
              url: "https://example.com/oauth/authorize",
              instructions: "Complete login in browser",
              method: "auto",
              callback: async () => {
                // Wait for OAuth callback
                return {
                  type: "success",
                  access: "access_token",
                  refresh: "refresh_token",
                  expires: Date.now() + 3600000,
                }
              },
            }
          },
        },
      ],
    },
  }
}`)])],-1)),e[47]||(e[47]=o('<h3 id="authentication-method-types" tabindex="-1">Authentication Method Types <a class="header-anchor" href="#authentication-method-types" aria-label="Permalink to “Authentication Method Types”">​</a></h3><table tabindex="0"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>api</code></td><td>API Key method, user directly enters key</td></tr><tr><td><code>oauth</code></td><td>OAuth method, redirects to browser for authorization</td></tr></tbody></table><h3 id="prompts-configuration" tabindex="-1">prompts Configuration <a class="header-anchor" href="#prompts-configuration" aria-label="Permalink to “prompts Configuration”">​</a></h3><table tabindex="0"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>text</code></td><td>Text input field</td></tr><tr><td><code>select</code></td><td>Dropdown select</td></tr></tbody></table><p>Each prompt can configure:</p><ul><li><code>key</code>: Key name for input value</li><li><code>message</code>: Prompt message</li><li><code>validate</code>: Validation function</li><li><code>condition</code>: Condition function to determine whether to show this prompt</li></ul><hr><h2 id="complete-example-time-tracking-plugin" tabindex="-1">Complete Example: Time Tracking Plugin <a class="header-anchor" href="#complete-example-time-tracking-plugin" aria-label="Permalink to “Complete Example: Time Tracking Plugin”">​</a></h2>',8)),e[48]||(e[48]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import type { Plugin } from "@opencode-ai/plugin"

export const TimeTrackingPlugin: Plugin = async ({ client }) => {
  const sessionTimes = new Map<string, number>()

  return {
    event: async ({ event }) => {
      if (event.type === "session.created") {
        sessionTimes.set(event.properties.id, Date.now())
        await client.app.log({
          service: "time-tracking",
          level: "info",
          message: \`Session started: \${event.properties.id}\`,
        })
      }
      
      if (event.type === "session.idle") {
        const startTime = sessionTimes.get(event.properties.sessionID)
        if (startTime) {
          const duration = Date.now() - startTime
          await client.app.log({
            service: "time-tracking",
            level: "info",
            message: \`Session duration: \${Math.round(duration / 1000)}s\`,
            extra: { sessionID: event.properties.sessionID, duration },
          })
        }
      }
    },
    
    "chat.params": async (input, output) => {
      // Add tracking headers to all requests
      output.options["X-Session-ID"] = input.sessionID
    },
  }
}`)])],-1)),e[49]||(e[49]=o('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Hook doesn&#39;t trigger</td><td>Function name typo</td><td>Use TypeScript for type checking</td></tr><tr><td><code>output</code> modification ineffective</td><td>Returned new object instead of modifying original</td><td>Directly modify <code>output.xxx = ...</code></td></tr><tr><td>Experimental hook fails</td><td>API changed after version update</td><td>Check changelog, adjust code</td></tr><tr><td>Auth plugin ineffective</td><td><code>provider</code> name mismatch</td><td>Ensure it matches provider ID in config</td></tr><tr><td>abort signal not responding</td><td>Not checking <code>ctx.abort.aborted</code></td><td>Periodically check in long loops</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>The difference between event hooks and functional hooks</li><li>All available hook types and their use cases</li><li>Creating custom tools (with abort signal handling)</li><li>Implementing authentication plugins</li></ol><hr><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to “Related Resources”">​</a></h2><ul><li><a href="./12a-plugins-basics.html">5.12a Plugins Basics</a> - Plugin installation and basic usage</li><li><a href="./10a-sdk-basics.html">5.10 SDK Development</a> - Using SDK client</li><li><a href="./13-custom-tools.html">5.13 Custom Tools</a> - More tool development examples</li><li><a href="./../appendix/ecosystem.html#plugins">Ecosystem</a> - Community plugin examples</li></ul>',10))])}const x=s(p,[["render",u]]);export{v as __pageData,x as default};
