import{_ as r,I as s,c as a,o as l,a5 as n,j as e,J as d,a as o,bl as c}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.12c Hook Tutorial","description":"Systematically learn OpenCode Hooks (plugin hooks / configuration hooks), master event subscription, tool interception, LLM parameter modification, permission control and other key capabilities.","frontmatter":{"title":"5.12c Hook Tutorial","subtitle":"Complete guide to plugin hooks and configuration hooks","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.12c","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Systematically learn OpenCode Hooks (plugin hooks / configuration hooks), master event subscription, tool interception, LLM parameter modification, permission control and other key capabilities.","tags":["hook","plugin","extension"],"prerequisite":["5.12a Plugin Basics","5.12b Advanced Plugins (recommended)"]},"headers":[],"relativePath":"en/5-advanced/12c-hooks.md","filePath":"en/5-advanced/12c-hooks.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/12c-hooks.md"};function p(m,t,h,g,f,b){const i=s("AdInArticle");return l(),a("div",null,[t[0]||(t[0]=n("",28)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Create plugin file in project directory
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
}`)])],-1)),t[8]||(t[8]=n("",4)),t[9]||(t[9]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/params.ts
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
}`)])],-1)),t[25]||(t[25]=n("",22)),t[26]||(t[26]=e("details",null,[e("summary",null,[e("strong",null,"Click to expand source code locations")]),e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"Feature"),e("th",null,"File Path"),e("th",null,"Line")])]),e("tbody",null,[e("tr",null,[e("td",null,"Hook type definitions"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/plugin/src/index.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/plugin/src/index.ts")])]),e("td",null,"148-231")]),e("tr",null,[e("td",null,[e("code",null,"tool.definition"),o(" Hook definition")]),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/plugin/src/index.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/plugin/src/index.ts")])]),e("td",null,"227-230")]),e("tr",null,[e("td",null,[e("code",null,"tool.definition"),o(" Hook trigger")]),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/tool/registry.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/tool/registry.ts")])]),e("td",null,"157")]),e("tr",null,[e("td",null,"Plugin loading logic"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/plugin/index.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/plugin/index.ts")])]),e("td",null,"20-82")]),e("tr",null,[e("td",null,"Plugin directory scanning"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/config/config.ts")])]),e("td",null,"322-335")]),e("tr",null,[e("td",null,"Plugin deduplication logic"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/config/config.ts")])]),e("td",null,"369-387")]),e("tr",null,[e("td",null,"Configuration Hook Schema"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/config/config.ts")])]),e("td",null,"1009-1030")])])]),e("p",null,[e("strong",null,"Key Code Snippets"),o(":")]),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Hook type definitions
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
