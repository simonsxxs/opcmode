import{_ as a,I as r,c as s,o as l,a5 as n,J as i,j as t,a as d,bk as c}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.12b 插件进阶","description":"掌握所有事件钩子和功能钩子，创建自定义工具和认证插件，实现高级插件功能。","frontmatter":{"title":"5.12b 插件进阶","subtitle":"所有钩子类型与高级功能","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.12b","duration":"30 分钟","practice":"40 分钟","level":"进阶","description":"掌握所有事件钩子和功能钩子，创建自定义工具和认证插件，实现高级插件功能。","tags":["插件","钩子","高级功能"],"prerequisite":["5.12a 插件基础"]},"headers":[],"relativePath":"5-advanced/12b-plugins-advanced.md","filePath":"5-advanced/12b-plugins-advanced.md","lastUpdated":1772014034000}'),p={name:"5-advanced/12b-plugins-advanced.md"};function u(h,e,b,g,m,y){const o=r("AdInArticle");return l(),s("div",null,[e[0]||(e[0]=n("",13)),i(o),e[1]||(e[1]=t("p",null,[d("使用 "),t("code",null,"event"),d(" 统一订阅所有事件：")],-1)),e[2]||(e[2]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    event: async ({ event }) => {
      console.log(\`Event: \${event.type}\`, event.properties)
    },
  }
}`)])],-1)),e[3]||(e[3]=t("h3",{id:"功能钩子",tabindex:"-1"},[d("功能钩子 "),t("a",{class:"header-anchor",href:"#功能钩子","aria-label":"Permalink to “功能钩子”"},"​")],-1)),e[4]||(e[4]=t("p",null,"使用具体钩子名拦截特定操作：",-1)),e[5]||(e[5]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      // 可以修改 output 影响后续执行
      console.log(\`Tool: \${input.tool}\`)
    },
  }
}`)])],-1)),e[6]||(e[6]=n("",27)),e[7]||(e[7]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    config: async (config) => {
      // config: Config 对象（完整类型定义见 config.ts）
      // 可直接修改属性，如：
      config.model = "anthropic/claude-opus-4-5-thinking"
    },
  }
}`)])],-1)),e[8]||(e[8]=t("p",null,[t("strong",null,"参数类型"),d("："),t("code",null,"config: Config"),d("（可读写）")],-1)),e[9]||(e[9]=t("h3",{id:"chat-message",tabindex:"-1"},[d("chat.message "),t("a",{class:"header-anchor",href:"#chat-message","aria-label":"Permalink to “chat.message”"},"​")],-1)),e[10]||(e[10]=t("p",null,"新消息接收时触发，可修改消息内容：",-1)),e[11]||(e[11]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "chat.message": async (input, output) => {
      // input: { sessionID, agent, model, messageID, variant }
      // output: { message, parts }
      console.log(\`New message in session: \${input.sessionID}\`)
    },
  }
}`)])],-1)),e[12]||(e[12]=n("",6)),e[13]||(e[13]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "chat.params": async (input, output) => {
      // input: { sessionID, agent, model, provider, message }
      // output: { temperature, topP, topK, options }
      
      // 强制使用低温度
      output.temperature = 0.3
      
      // 添加自定义选项（会作为 HTTP 头传递）
      output.options.customHeader = "my-value"
    },
  }
}`)])],-1)),e[14]||(e[14]=n("",6)),e[15]||(e[15]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "permission.ask": async (input, output) => {
      // input: Permission 对象
      // output: { status: "ask" | "deny" | "allow" }
      
      // 自动允许特定工具
      if (input.tool === "read" && input.path?.startsWith("/safe/")) {
        output.status = "allow"
      }
    },
  }
}`)])],-1)),e[16]||(e[16]=t("h3",{id:"tool-execute-before",tabindex:"-1"},[d("tool.execute.before "),t("a",{class:"header-anchor",href:"#tool-execute-before","aria-label":"Permalink to “tool.execute.before”"},"​")],-1)),e[17]||(e[17]=t("p",null,"工具执行前触发，可修改参数或抛出错误阻止执行：",-1)),e[18]||(e[18]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      // input: { tool, sessionID, callID }
      // output: { args }
      
      if (input.tool === "bash" && output.args.command.includes("rm -rf")) {
        throw new Error("Dangerous command blocked!")
      }
    },
  }
}`)])],-1)),e[19]||(e[19]=n("",7)),e[20]||(e[20]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "tool.execute.after": async (input, output) => {
      // input: { tool, sessionID, callID }
      // output: { title, output, metadata }
      
      // 添加执行时间戳
      output.metadata.executedAt = new Date().toISOString()
    },
  }
}`)])],-1)),e[21]||(e[21]=n("",9)),e[22]||(e[22]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const CompactionPlugin: Plugin = async () => {
  return {
    "experimental.session.compacting": async (input, output) => {
      // input: { sessionID }
      // output: { context: string[], prompt?: string }
      
      // 方式1：追加额外上下文
      output.context.push(\`
## 自定义上下文

保留以下状态：
- 当前任务状态
- 重要决策
- 正在处理的文件
\`)
    },
  }
}`)])],-1)),e[23]||(e[23]=t("p",null,"完全替换压缩提示：",-1)),e[24]||(e[24]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const CustomCompactionPlugin: Plugin = async () => {
  return {
    "experimental.session.compacting": async (input, output) => {
      // 设置 prompt 会完全替换默认压缩提示
      // 此时 output.context 数组将被忽略
      output.prompt = \`
你正在为多代理会话生成续写提示。

请总结：
1. 当前任务及其状态
2. 正在修改的文件及负责人
3. 代理之间的依赖关系
4. 完成工作的下一步

格式化为新代理可以用来恢复工作的结构化提示。
\`
    },
  }
}`)])],-1)),e[25]||(e[25]=t("h3",{id:"experimental-chat-messages-transform",tabindex:"-1"},[d("experimental.chat.messages.transform "),t("a",{class:"header-anchor",href:"#experimental-chat-messages-transform","aria-label":"Permalink to “experimental.chat.messages.transform”"},"​")],-1)),e[26]||(e[26]=t("p",null,"消息发送给 LLM 前触发，可转换消息列表：",-1)),e[27]||(e[27]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "experimental.chat.messages.transform": async (input, output) => {
      // output.messages: Array<{ info: Message, parts: Part[] }>
      
      // 过滤某些消息
      output.messages = output.messages.filter(m => 
        !m.parts.some(p => p.type === "text" && p.text.includes("SECRET"))
      )
    },
  }
}`)])],-1)),e[28]||(e[28]=t("h3",{id:"experimental-chat-system-transform",tabindex:"-1"},[d("experimental.chat.system.transform "),t("a",{class:"header-anchor",href:"#experimental-chat-system-transform","aria-label":"Permalink to “experimental.chat.system.transform”"},"​")],-1)),e[29]||(e[29]=t("p",null,"系统提示发送给 LLM 前触发：",-1)),e[30]||(e[30]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "experimental.chat.system.transform": async (input, output) => {
      // output.system: string[]
      
      // 追加自定义系统指令
      output.system.push("Always respond in formal English.")
    },
  }
}`)])],-1)),e[31]||(e[31]=t("h3",{id:"experimental-text-complete",tabindex:"-1"},[d("experimental.text.complete "),t("a",{class:"header-anchor",href:"#experimental-text-complete","aria-label":"Permalink to “experimental.text.complete”"},"​")],-1)),e[32]||(e[32]=t("p",null,"文本补全后触发：",-1)),e[33]||(e[33]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "experimental.text.complete": async (input, output) => {
      // input: { sessionID, messageID, partID }
      // output: { text }
      
      // 可以修改最终输出的文本
      output.text = output.text.replace(/\\bAI\\b/g, "Assistant")
    },
  }
}`)])],-1)),e[34]||(e[34]=t("hr",null,null,-1)),e[35]||(e[35]=t("h2",{id:"自定义工具",tabindex:"-1"},[d("自定义工具 "),t("a",{class:"header-anchor",href:"#自定义工具","aria-label":"Permalink to “自定义工具”"},"​")],-1)),e[36]||(e[36]=t("p",null,"插件可以添加自定义工具供 AI 调用：",-1)),e[37]||(e[37]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import { type Plugin, tool } from "@opencode-ai/plugin"

export const CustomToolsPlugin: Plugin = async () => {
  return {
    tool: {
      mytool: tool({
        description: "这是一个自定义工具",
        args: {
          foo: tool.schema.string().describe("输入参数"),
          count: tool.schema.number().optional().describe("可选的数字参数"),
        },
        async execute(args, ctx) {
          // args: { foo: string, count?: number }
          // ctx: ToolContext
          return \`Hello \${args.foo}!\`
        },
      }),
    },
  }
}`)])],-1)),e[38]||(e[38]=n("",6)),e[39]||(e[39]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`tool({
  description: "长时间运行的任务",
  args: {},
  async execute(args, ctx) {
    for (let i = 0; i < 100; i++) {
      if (ctx.abort.aborted) {
        return "任务被取消"
      }
      await doWork(i)
    }
    return "任务完成"
  },
})`)])],-1)),e[40]||(e[40]=t("h3",{id:"zod-schema-速查",tabindex:"-1"},[d("Zod Schema 速查 "),t("a",{class:"header-anchor",href:"#zod-schema-速查","aria-label":"Permalink to “Zod Schema 速查”"},"​")],-1)),e[41]||(e[41]=t("p",null,[t("code",null,"tool.schema"),d(" 就是 Zod，常用类型：")],-1)),e[42]||(e[42]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`tool.schema.string()           // 字符串
tool.schema.number()           // 数字
tool.schema.boolean()          // 布尔
tool.schema.array(...)         // 数组
tool.schema.object({...})      // 对象
tool.schema.enum(["a", "b"])   // 枚举
tool.schema.optional()         // 可选（链式调用）
tool.schema.describe("...")    // 描述（链式调用）`)])],-1)),e[43]||(e[43]=t("hr",null,null,-1)),e[44]||(e[44]=t("h2",{id:"认证钩子",tabindex:"-1"},[d("认证钩子 "),t("a",{class:"header-anchor",href:"#认证钩子","aria-label":"Permalink to “认证钩子”"},"​")],-1)),e[45]||(e[45]=t("p",null,"插件可以为提供商实现自定义认证：",-1)),e[46]||(e[46]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyAuthPlugin: Plugin = async () => {
  return {
    auth: {
      provider: "my-provider",
      
      // 可选：从已有认证加载配置
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
            // 验证并返回结果
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
                // 等待 OAuth 回调
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
}`)])],-1)),e[47]||(e[47]=n("",8)),e[48]||(e[48]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import type { Plugin } from "@opencode-ai/plugin"

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
      // 为所有请求添加追踪头
      output.options["X-Session-ID"] = input.sessionID
    },
  }
}`)])],-1)),e[49]||(e[49]=n("",10))])}const f=a(p,[["render",u]]);export{P as __pageData,f as default};
