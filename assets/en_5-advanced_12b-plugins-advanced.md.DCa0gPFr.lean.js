import{_ as s,I as d,c as r,o as i,a5 as o,J as l,j as t,a as n,bk as c}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.12b Plugins Advanced","description":"Master all event hooks and functional hooks, create custom tools and authentication plugins, implement advanced plugin features.","frontmatter":{"title":"5.12b Plugins Advanced","subtitle":"All Hook Types and Advanced Features","course":"OpenCode Chinese Practical Course","stage":"Stage 5","lesson":"5.12b","duration":"30 minutes","practice":"40 minutes","level":"Advanced","description":"Master all event hooks and functional hooks, create custom tools and authentication plugins, implement advanced plugin features.","tags":["plugins","hooks","advanced features"],"prerequisite":["5.12a Plugins Basics"]},"headers":[],"relativePath":"en/5-advanced/12b-plugins-advanced.md","filePath":"en/5-advanced/12b-plugins-advanced.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/12b-plugins-advanced.md"};function u(h,e,m,g,b,y){const a=d("AdInArticle");return i(),r("div",null,[e[0]||(e[0]=o("",13)),l(a),e[1]||(e[1]=t("p",null,[n("Subscribe to all events using "),t("code",null,"event"),n(":")],-1)),e[2]||(e[2]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
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
}`)])],-1)),e[6]||(e[6]=o("",27)),e[7]||(e[7]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
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
}`)])],-1)),e[12]||(e[12]=o("",6)),e[13]||(e[13]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
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
}`)])],-1)),e[14]||(e[14]=o("",6)),e[15]||(e[15]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
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
}`)])],-1)),e[19]||(e[19]=o("",7)),e[20]||(e[20]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "tool.execute.after": async (input, output) => {
      // input: { tool, sessionID, callID }
      // output: { title, output, metadata }
      
      // Add execution timestamp
      output.metadata.executedAt = new Date().toISOString()
    },
  }
}`)])],-1)),e[21]||(e[21]=o("",9)),e[22]||(e[22]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const CompactionPlugin: Plugin = async () => {
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
}`)])],-1)),e[38]||(e[38]=o("",6)),e[39]||(e[39]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`tool({
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
}`)])],-1)),e[47]||(e[47]=o("",8)),e[48]||(e[48]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import type { Plugin } from "@opencode-ai/plugin"

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
}`)])],-1)),e[49]||(e[49]=o("",10))])}const x=s(p,[["render",u]]);export{v as __pageData,x as default};
