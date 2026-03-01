import{_ as r,I as s,c as a,o as l,a5 as n,j as e,J as d,a as o,bl as c}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.12c Hook Tutorial","description":"Systematically learn OpenCode Hooks (plugin hooks / configuration hooks), master event subscription, tool interception, LLM parameter modification, permission control and other key capabilities.","frontmatter":{"title":"5.12c Hook Tutorial","subtitle":"Complete guide to plugin hooks and configuration hooks","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.12c","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Systematically learn OpenCode Hooks (plugin hooks / configuration hooks), master event subscription, tool interception, LLM parameter modification, permission control and other key capabilities.","tags":["hook","plugin","extension"],"prerequisite":["5.12a Plugin Basics","5.12b Advanced Plugins (recommended)"]},"headers":[],"relativePath":"en/5-advanced/12c-hooks.md","filePath":"en/5-advanced/12c-hooks.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/12c-hooks.md"};function p(m,t,h,g,f,b){const i=s("AdInArticle");return l(),a("div",null,[t[0]||(t[0]=n('<h1 id="hook-tutorial" tabindex="-1">Hook Tutorial <a class="header-anchor" href="#hook-tutorial" aria-label="Permalink to “Hook Tutorial”">​</a></h1><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key knowledge points from this lesson:</p><p><img src="'+c+'" alt="5.12c Hook Tutorial Notes" data-zoom-src="/images/5-advanced/hooks-notes.jpeg"></p><hr><blockquote><p>💡 <strong>One-line summary</strong>: Hooks are OpenCode&#39;s &quot;extension interface&quot; - you can execute logic when events occur, or intercept and modify data in critical workflows.</p></blockquote><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Know which Hooks OpenCode supports (plugin hooks / configuration hooks)</li><li>Choose the right Hook: event listening vs functionality interception</li><li>Write common Hooks: notifications, auditing, security interception, parameter tuning, context compression enhancement</li></ul><hr><h2 id="your-current-challenges" tabindex="-1">Your Current Challenges <a class="header-anchor" href="#your-current-challenges" aria-label="Permalink to “Your Current Challenges”">​</a></h2><ul><li>Want to automatically run scripts after a session completes, but don&#39;t know where to configure it</li><li>Want to prevent AI from reading certain sensitive files, but can&#39;t find the right place to intercept</li><li>See others mention &quot;Hook&quot; but don&#39;t understand its relationship with plugins</li><li>Want to automatically adjust LLM parameters based on different Agents, but don&#39;t know where to start</li></ul><hr><h2 id="when-to-use-this" tabindex="-1">When to Use This <a class="header-anchor" href="#when-to-use-this" aria-label="Permalink to “When to Use This”">​</a></h2><ul><li>When you need to: <ul><li>Execute custom logic when specific events occur (notifications, logs, auditing)</li><li>Intercept tool calls and modify parameters or block execution</li><li>Modify LLM call parameters (temperature, top_p, etc.)</li><li>Customize permission decision logic</li><li>Enhance session compression context</li></ul></li><li>And you don&#39;t want to: <ul><li>Modify OpenCode source code</li><li>Manually execute these operations every time</li></ul></li></ul><hr><h2 id="🎒-before-you-start" tabindex="-1">🎒 Before You Start <a class="header-anchor" href="#🎒-before-you-start" aria-label="Permalink to “🎒 Before You Start”">​</a></h2><ul><li>[ ] Completed <a href="./12a-plugins-basics.html">5.12a Plugin Basics</a></li><li>[ ] Completed <a href="./12b-plugins-advanced.html">5.12b Advanced Plugins</a> (recommended)</li><li>[ ] Have a running OpenCode project</li><li>[ ] Can access <code>~/.config/opencode/</code> or the project&#39;s <code>.opencode/</code> folder</li></ul><hr><h2 id="core-concepts" tabindex="-1">Core Concepts <a class="header-anchor" href="#core-concepts" aria-label="Permalink to “Core Concepts”">​</a></h2><ul><li>Hooks are essentially a set of &quot;pluggable callback functions&quot;</li><li>OpenCode triggers Hooks at specific times, giving you control</li><li>There are two Hook approaches: <ul><li><strong>Plugin Hooks</strong>: Write code, return hooks object (more powerful, more flexible)</li><li><strong>Configuration Hooks</strong>: Configure commands in <code>opencode.json</code> (simpler, but limited functionality)</li></ul></li><li>Event Hooks passively listen without modifications (logs, notifications)</li><li>Functional Hooks actively intercept and can modify data (parameter modification, permission control)</li></ul><hr><h3 id="🆕-new-hooks-in-v1-1-65" tabindex="-1">🆕 New Hooks in v1.1.65 <a class="header-anchor" href="#🆕-new-hooks-in-v1-1-65" aria-label="Permalink to “🆕 New Hooks in v1.1.65”">​</a></h3><table tabindex="0"><thead><tr><th>Hook</th><th>Description</th><th>Use Case</th></tr></thead><tbody><tr><td><code>tool.definition</code></td><td>Modify tool definitions</td><td>Customize tool descriptions, adjust parameter schemas</td></tr><tr><td><code>command.execute.before</code></td><td>Intercept before command execution</td><td>Modify command arguments, add logging</td></tr><tr><td><code>shell.env</code></td><td>Before shell execution</td><td>Inject environment variables</td></tr></tbody></table><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2><h3 id="step-1-create-your-first-plugin-hook" tabindex="-1">Step 1: Create Your First Plugin Hook <a class="header-anchor" href="#step-1-create-your-first-plugin-hook" aria-label="Permalink to “Step 1: Create Your First Plugin Hook”">​</a></h3><p><strong>Why</strong><br> Start with the simplest session completion notification to verify the entire workflow works.</p>',28)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Create plugin file in project directory
mkdir -p .opencode/plugin`)])],-1)),t[2]||(t[2]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/notify.ts
import type { Plugin } from "@opencode-ai/plugin"

export const NotifyPlugin: Plugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await $\`osascript -e 'display notification "Session completed" with title "OpenCode"'\`
      }
    },
  }
}`)])],-1)),t[3]||(t[3]=e("p",null,[e("strong",null,"You should see"),o(":"),e("br"),o(" OpenCode loads this plugin at startup, and you'll receive a notification when a session completes.")],-1)),t[4]||(t[4]=e("hr",null,null,-1)),t[5]||(t[5]=e("h3",{id:"step-2-implement-sensitive-file-interception",tabindex:"-1"},[o("Step 2: Implement Sensitive File Interception "),e("a",{class:"header-anchor",href:"#step-2-implement-sensitive-file-interception","aria-label":"Permalink to “Step 2: Implement Sensitive File Interception”"},"​")],-1)),d(i),t[6]||(t[6]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Use the "),e("code",null,"tool.execute.before"),o(" Hook to intercept tool calls and prevent AI from reading sensitive files.")],-1)),t[7]||(t[7]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/guard.ts
import type { Plugin } from "@opencode-ai/plugin"

export const GuardPlugin: Plugin = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool !== "read") return

      const filePath = String(output.args.filePath)
      const sensitivePatterns = [".env", ".pem", ".key", "credentials"]

      for (const pattern of sensitivePatterns) {
        if (filePath.includes(pattern)) {
          throw new Error(\`Security policy: Reading sensitive files is prohibited: \${filePath}\`)
        }
      }
    },
  }
}`)])],-1)),t[8]||(t[8]=n('<p><strong>You should see</strong>:<br> When attempting to have AI read a <code>.env</code> file, an error is thrown and execution is blocked.</p><hr><h3 id="step-3-adjust-llm-parameters-based-on-agent" tabindex="-1">Step 3: Adjust LLM Parameters Based on Agent <a class="header-anchor" href="#step-3-adjust-llm-parameters-based-on-agent" aria-label="Permalink to “Step 3: Adjust LLM Parameters Based on Agent”">​</a></h3><p><strong>Why</strong><br> Different scenarios require different parameter configurations. Use the <code>chat.params</code> Hook to automatically adjust them.</p>',4)),t[9]||(t[9]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/params.ts
import type { Plugin } from "@opencode-ai/plugin"

export const ParamsPlugin: Plugin = async () => {
  return {
    "chat.params": async (input, output) => {
      // Code generation needs more deterministic output
      if (input.agent === "code") {
        output.temperature = 0.2
      }

      // Planning tasks need more creativity
      if (input.agent === "plan") {
        output.temperature = 0.7
      }

      // Add custom tracing headers
      output.options["X-Trace-Session"] = input.sessionID
    },
  }
}`)])],-1)),t[10]||(t[10]=e("p",null,[e("strong",null,"You should see"),o(":"),e("br"),o(" LLM parameters automatically change for different Agent sessions.")],-1)),t[11]||(t[11]=e("hr",null,null,-1)),t[12]||(t[12]=e("h3",{id:"step-4-auto-decision-on-permission-requests",tabindex:"-1"},[o("Step 4: Auto-Decision on Permission Requests "),e("a",{class:"header-anchor",href:"#step-4-auto-decision-on-permission-requests","aria-label":"Permalink to “Step 4: Auto-Decision on Permission Requests”"},"​")],-1)),t[13]||(t[13]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Reduce manual confirmations by automatically approving safe operations.")],-1)),t[14]||(t[14]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/auto-permit.ts
import type { Plugin } from "@opencode-ai/plugin"

export const AutoPermitPlugin: Plugin = async () => {
  return {
    "permission.ask": async (input, output) => {
      // Automatically allow read operations
      if (input.tool === "read") {
        output.status = "allow"
        return
      }

      // Automatically deny dangerous commands
      if (input.tool === "bash" && String(input.metadata?.command).includes("rm -rf")) {
        output.status = "deny"
        return
      }

      // Keep asking for other operations
      output.status = "ask"
    },
  }
}`)])],-1)),t[15]||(t[15]=e("p",null,[e("strong",null,"You should see"),o(":"),e("br"),o(" Reading files no longer prompts for permission, but delete commands are blocked.")],-1)),t[16]||(t[16]=e("hr",null,null,-1)),t[17]||(t[17]=e("h3",{id:"step-5-enhance-session-compression-context",tabindex:"-1"},[o("Step 5: Enhance Session Compression Context "),e("a",{class:"header-anchor",href:"#step-5-enhance-session-compression-context","aria-label":"Permalink to “Step 5: Enhance Session Compression Context”"},"​")],-1)),t[18]||(t[18]=e("p",null,[e("strong",null,"Why"),e("br"),o(" When conversations become too long and need compression, inject project-specific key information.")],-1)),t[19]||(t[19]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/compaction.ts
import type { Plugin } from "@opencode-ai/plugin"

export const CompactionPlugin: Plugin = async () => {
  return {
    "experimental.session.compacting": async (input, output) => {
      output.context.push(\`
## Project Key Information
- Files being modified: src/**
- Key constraints: Prohibit reading .env, key files
- Current task: Implement Hook tutorial and add to sidebar
- Important decisions: Use TypeScript strict mode
\`)
    },
  }
}`)])],-1)),t[20]||(t[20]=e("p",null,[e("strong",null,"You should see"),o(":"),e("br"),o(" When a conversation is compressed, the compressed context will include your custom information.")],-1)),t[21]||(t[21]=e("hr",null,null,-1)),t[22]||(t[22]=e("h3",{id:"step-6-modify-tool-definitions-v1-1-65",tabindex:"-1"},[o("Step 6: Modify Tool Definitions (v1.1.65+) "),e("a",{class:"header-anchor",href:"#step-6-modify-tool-definitions-v1-1-65","aria-label":"Permalink to “Step 6: Modify Tool Definitions (v1.1.65+)”"},"​")],-1)),t[23]||(t[23]=e("p",null,[e("strong",null,"Why"),e("br"),o(" In certain scenarios, you may need to modify a tool's description or parameter schema to help AI better understand the tool's purpose, or add additional constraints.")],-1)),t[24]||(t[24]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/tool-definition.ts
import type { Plugin } from "@opencode-ai/plugin"

export const ToolDefinitionPlugin: Plugin = async () => {
  return {
    "tool.definition": async (input, output) => {
      // Add description for read tool
      if (input.toolID === "read") {
        output.description = "Read file contents. Supports text files and images. Path must be absolute."
      }

      // Add security warning for bash tool
      if (input.toolID === "bash") {
        output.description += "\\n\\n⚠️ Warning: Dangerous commands (like rm -rf) require user confirmation."
      }

      // Modify parameter schema (e.g., add default values or constraints)
      if (input.toolID === "write" && output.parameters?.properties?.filePath) {
        output.parameters.properties.filePath.description = "Absolute file path, must start with /"
      }
    },
  }
}`)])],-1)),t[25]||(t[25]=n('<p><strong>You should see</strong>:<br> AI uses the modified descriptions and parameter definitions when calling tools.</p><hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><ul><li>[ ] Plugin files are in <code>.opencode/plugin/</code> directory</li><li>[ ] OpenCode loads plugins at startup (check startup logs)</li><li>[ ] Received notification after session completes</li><li>[ ] Error thrown when attempting to read <code>.env</code></li><li>[ ] Parameters change for different Agent sessions</li><li>[ ] Permission request behavior matches expectations</li><li>[ ] (v1.1.65+) Tool definitions successfully modified</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Plugin not loaded</td><td>Wrong file extension</td><td>Ensure it&#39;s a <code>.ts</code> or <code>.js</code> file</td></tr><tr><td><code>output</code> modification ineffective</td><td>Returned new object instead of modifying original</td><td>Directly modify <code>output.xxx = ...</code></td></tr><tr><td>Event not triggered</td><td><code>event.type</code> typo</td><td>Use TypeScript for type hints</td></tr><tr><td>Experimental Hook fails</td><td>API changed after version update</td><td>Check changelog, adjust code</td></tr><tr><td>Configuration Hook not working</td><td>Execution logic may not be implemented</td><td>Prefer plugin Hooks</td></tr><tr><td>Multiple plugins conflict</td><td>Duplicate Hook definitions</td><td>Check for duplicate Hook implementations</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Understanding the two types of Hooks (plugin hooks / configuration hooks)</li><li>Choosing the right Hook type for your problem</li><li>Implementing common Hook scenarios (notifications, interception, parameter tuning, permissions, compression)</li><li>Following Hook writing best practices</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>In the next lesson, we&#39;ll learn about custom tools, which will use the Hook and plugin knowledge from this lesson.</p></blockquote><hr><h2 id="quick-reference-common-hooks" tabindex="-1">Quick Reference: Common Hooks <a class="header-anchor" href="#quick-reference-common-hooks" aria-label="Permalink to “Quick Reference: Common Hooks”">​</a></h2><table tabindex="0"><thead><tr><th>Hook</th><th>Trigger Timing</th><th>Use Case</th><th>Can Modify Data</th></tr></thead><tbody><tr><td><code>event</code></td><td>All events</td><td>Unified subscription, logs/notifications/stats</td><td>❌</td></tr><tr><td><code>config</code></td><td>After config loaded</td><td>Initialize plugins, modify config</td><td>✅</td></tr><tr><td><code>tool.execute.before</code></td><td>Before tool execution</td><td>Intercept/modify parameters, block execution</td><td>✅</td></tr><tr><td><code>tool.execute.after</code></td><td>After tool execution</td><td>Record results, modify output</td><td>✅</td></tr><tr><td><code>chat.message</code></td><td>When new message received</td><td>Record/modify message content</td><td>✅</td></tr><tr><td><code>chat.params</code></td><td>Before LLM call</td><td>Modify temperature/Top-P/Top-K</td><td>✅</td></tr><tr><td><code>permission.ask</code></td><td>When permission requested</td><td>Auto allow/deny</td><td>✅</td></tr><tr><td><code>tool</code></td><td>Tool registration</td><td>Add custom tools</td><td>-</td></tr><tr><td><code>experimental.session.compacting</code></td><td>Before session compression</td><td>Inject project key info</td><td>✅</td></tr><tr><td><code>tool.definition</code></td><td>Tool registration</td><td>Modify tool description/parameters</td><td>✅</td></tr><tr><td><code>command.execute.before</code></td><td>Before command execution</td><td>Intercept/modify command arguments</td><td>✅</td></tr><tr><td><code>shell.env</code></td><td>Before shell execution</td><td>Inject environment variables</td><td>✅</td></tr><tr><td><code>auth</code></td><td>Authentication flow</td><td>Custom authentication method</td><td>-</td></tr></tbody></table><hr><h2 id="quick-reference-common-events" tabindex="-1">Quick Reference: Common Events <a class="header-anchor" href="#quick-reference-common-events" aria-label="Permalink to “Quick Reference: Common Events”">​</a></h2><table tabindex="0"><thead><tr><th>Event</th><th>Description</th><th>Hook Use Case</th></tr></thead><tbody><tr><td><code>session.idle</code></td><td>Session complete (idle)</td><td>Send notifications, cleanup resources, record duration</td></tr><tr><td><code>session.created</code></td><td>New session created</td><td>Initialize session-level state</td></tr><tr><td><code>file.edited</code></td><td>File edited</td><td>Trigger formatting, trigger build</td></tr><tr><td><code>message.updated</code></td><td>Message updated</td><td>Record conversation history, statistics</td></tr><tr><td><code>tool.execute.after</code></td><td>After tool execution</td><td>Record logs, audit trail</td></tr><tr><td><code>tool.execute.before</code></td><td>Before tool execution</td><td>Parameter validation, permission check</td></tr><tr><td><code>permission.replied</code></td><td>User responded to permission</td><td>Record permission decisions</td></tr><tr><td><code>command.executed</code></td><td>After command execution</td><td>Command auditing</td></tr><tr><td><code>session.error</code></td><td>Session error</td><td>Error reporting, notifications</td></tr><tr><td><code>server.connected</code></td><td>Server connected</td><td>Connection status notification</td></tr></tbody></table><hr><h2 id="appendix-source-code-reference" tabindex="-1">Appendix: Source Code Reference <a class="header-anchor" href="#appendix-source-code-reference" aria-label="Permalink to “Appendix: Source Code Reference”">​</a></h2>',22)),t[26]||(t[26]=e("details",null,[e("summary",null,[e("strong",null,"Click to expand source code locations")]),e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"Feature"),e("th",null,"File Path"),e("th",null,"Line")])]),e("tbody",null,[e("tr",null,[e("td",null,"Hook type definitions"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/plugin/src/index.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/plugin/src/index.ts")])]),e("td",null,"148-231")]),e("tr",null,[e("td",null,[e("code",null,"tool.definition"),o(" Hook definition")]),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/plugin/src/index.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/plugin/src/index.ts")])]),e("td",null,"227-230")]),e("tr",null,[e("td",null,[e("code",null,"tool.definition"),o(" Hook trigger")]),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/tool/registry.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/tool/registry.ts")])]),e("td",null,"157")]),e("tr",null,[e("td",null,"Plugin loading logic"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/plugin/index.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/plugin/index.ts")])]),e("td",null,"20-82")]),e("tr",null,[e("td",null,"Plugin directory scanning"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/config/config.ts")])]),e("td",null,"322-335")]),e("tr",null,[e("td",null,"Plugin deduplication logic"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/config/config.ts")])]),e("td",null,"369-387")]),e("tr",null,[e("td",null,"Configuration Hook Schema"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/config/config.ts")])]),e("td",null,"1009-1030")])])]),e("p",null,[e("strong",null,"Key Code Snippets"),o(":")]),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Hook type definitions
export interface Hooks {
  event?: (input: { event: Event }) => Promise<void>
  config?: (input: Config) => Promise<void>
  tool?: { [key: string]: ToolDefinition }
  auth?: AuthHook
  "chat.message"?: (input: {...}, output: {...}) => Promise<void>
  "chat.params"?: (input: {...}, output: {...}) => Promise<void>
  "permission.ask"?: (input: Permission, output: {...}) => Promise<void>
  "tool.execute.before"?: (input: {...}, output: {...}) => Promise<void>
  "tool.execute.after"?: (input: {...}, output: {...}) => Promise<void>
  "command.execute.before"?: (input: { command: string; sessionID: string; arguments: string }, output: {...}) => Promise<void>
  "shell.env"?: (input: { cwd: string }, output: { env: Record<string, string> }) => Promise<void>
  "tool.definition"?: (input: { toolID: string }, output: { description: string; parameters: any }) => Promise<void>
  "experimental.chat.messages.transform"?: (input: {}, output: {...}) => Promise<void>
  "experimental.chat.system.transform"?: (input: {}, output: {...}) => Promise<void>
  "experimental.session.compacting"?: (input: {...}, output: {...}) => Promise<void>
  "experimental.text.complete"?: (input: {...}, output: {...}) => Promise<void>
}

// Plugin loading
export async function trigger<Name extends keyof Required<Hooks>>(name: Name, input: Input, output: Output): Promise<Output> {
  if (!name) return output
  for (const hook of await state().then((x) => x.hooks)) {
    const fn = hook[name]
    if (!fn) continue
    await fn(input, output)
  }
  return output
}`)])])],-1))])}const v=r(u,[["render",p]]);export{y as __pageData,v as default};
