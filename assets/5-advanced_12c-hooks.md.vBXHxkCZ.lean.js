import{_ as l,I as r,c as a,o as i,a5 as n,j as t,J as s,a as e,bl as u}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.12c Hook 教程","description":"系统学习 OpenCode Hook（插件钩子/配置钩子），掌握事件订阅、工具拦截、LLM 参数改写、权限控制等关键能力。","frontmatter":{"title":"5.12c Hook 教程","subtitle":"插件钩子与配置钩子全解","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.12c","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"系统学习 OpenCode Hook（插件钩子/配置钩子），掌握事件订阅、工具拦截、LLM 参数改写、权限控制等关键能力。","tags":["钩子","Hook","插件","扩展"],"prerequisite":["5.12a 插件基础","5.12b 插件进阶（推荐先学）"]},"headers":[],"relativePath":"5-advanced/12c-hooks.md","filePath":"5-advanced/12c-hooks.md","lastUpdated":1772014034000}'),p={name:"5-advanced/12c-hooks.md"};function c(h,o,g,b,k,m){const d=r("AdInArticle");return i(),a("div",null,[o[0]||(o[0]=n("",34)),o[1]||(o[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 在项目目录创建插件文件
mkdir -p .opencode/plugin`)])],-1)),o[2]||(o[2]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/plugin/notify.ts
import type { Plugin } from "@opencode-ai/plugin"

export const NotifyPlugin: Plugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await $\`osascript -e 'display notification "会话已完成" with title "OpenCode"'\`
      }
    },
  }
}`)])],-1)),o[3]||(o[3]=t("p",null,[t("strong",null,"你应该看到"),e("："),t("br"),e(" OpenCode 启动时会加载这个插件，会话完成后会弹出通知。")],-1)),o[4]||(o[4]=t("hr",null,null,-1)),o[5]||(o[5]=t("h3",{id:"第-2-步-实现敏感文件拦截",tabindex:"-1"},[e("第 2 步：实现敏感文件拦截 "),t("a",{class:"header-anchor",href:"#第-2-步-实现敏感文件拦截","aria-label":"Permalink to “第 2 步：实现敏感文件拦截”"},"​")],-1)),s(d),o[6]||(o[6]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" 用 "),t("code",null,"tool.execute.before"),e(" Hook 拦截工具调用，阻止 AI 读取敏感文件。")],-1)),o[7]||(o[7]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/plugin/guard.ts
import type { Plugin } from "@opencode-ai/plugin"

export const GuardPlugin: Plugin = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool !== "read") return

      const filePath = String(output.args.filePath)
      const sensitivePatterns = [".env", ".pem", ".key", "credentials"]

      for (const pattern of sensitivePatterns) {
        if (filePath.includes(pattern)) {
          throw new Error(\`安全策略：禁止读取敏感文件：\${filePath}\`)
        }
      }
    },
  }
}`)])],-1)),o[8]||(o[8]=n("",4)),o[9]||(o[9]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/plugin/params.ts
import type { Plugin } from "@opencode-ai/plugin"

export const ParamsPlugin: Plugin = async () => {
  return {
    "chat.params": async (input, output) => {
      // 代码生成需要更确定性的输出
      if (input.agent === "code") {
        output.temperature = 0.2
      }

      // 规划任务需要更多创造性
      if (input.agent === "plan") {
        output.temperature = 0.7
      }

      // 添加自定义追踪头
      output.options["X-Trace-Session"] = input.sessionID
    },
  }
}`)])],-1)),o[10]||(o[10]=t("p",null,[t("strong",null,"你应该看到"),e("："),t("br"),e(" 不同 Agent 会话的 LLM 参数自动变化。")],-1)),o[11]||(o[11]=t("hr",null,null,-1)),o[12]||(o[12]=t("h3",{id:"第-4-步-自动决策权限请求",tabindex:"-1"},[e("第 4 步：自动决策权限请求 "),t("a",{class:"header-anchor",href:"#第-4-步-自动决策权限请求","aria-label":"Permalink to “第 4 步：自动决策权限请求”"},"​")],-1)),o[13]||(o[13]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" 减少手动确认次数，对安全的操作自动批准。")],-1)),o[14]||(o[14]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/plugin/auto-permit.ts
import type { Plugin } from "@opencode-ai/plugin"

export const AutoPermitPlugin: Plugin = async () => {
  return {
    "permission.ask": async (input, output) => {
      // 读取操作自动允许
      if (input.tool === "read") {
        output.status = "allow"
        return
      }

      // 危险命令自动拒绝
      if (input.tool === "bash" && String(input.metadata?.command).includes("rm -rf")) {
        output.status = "deny"
        return
      }

      // 其他操作保持询问
      output.status = "ask"
    },
  }
}`)])],-1)),o[15]||(o[15]=t("p",null,[t("strong",null,"你应该看到"),e("："),t("br"),e(" 读取文件不再弹出权限提示，但删除命令会被阻止。")],-1)),o[16]||(o[16]=t("hr",null,null,-1)),o[17]||(o[17]=t("h3",{id:"第-5-步-增强会话压缩上下文",tabindex:"-1"},[e("第 5 步：增强会话压缩上下文 "),t("a",{class:"header-anchor",href:"#第-5-步-增强会话压缩上下文","aria-label":"Permalink to “第 5 步：增强会话压缩上下文”"},"​")],-1)),o[18]||(o[18]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" 当对话过长需要压缩时，注入项目特定的关键信息。")],-1)),o[19]||(o[19]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/plugin/compaction.ts
import type { Plugin } from "@opencode-ai/plugin"

export const CompactionPlugin: Plugin = async () => {
  return {
    "experimental.session.compacting": async (input, output) => {
      output.context.push(\`
## 项目关键信息
- 正在修改的文件：src/**
- 关键约束：禁止读取 .env、密钥文件
- 当前任务：实现 Hook 教程并加入侧边栏
- 重要决策：使用 TypeScript 严格模式
\`)
    },
  }
}`)])],-1)),o[20]||(o[20]=t("p",null,[t("strong",null,"你应该看到"),e("："),t("br"),e(" 当对话被压缩时，压缩后的上下文会包含你的自定义信息。")],-1)),o[21]||(o[21]=t("hr",null,null,-1)),o[22]||(o[22]=t("h3",{id:"第-6-步-修改工具定义-v1-1-65",tabindex:"-1"},[e("第 6 步：修改工具定义（v1.1.65+） "),t("a",{class:"header-anchor",href:"#第-6-步-修改工具定义-v1-1-65","aria-label":"Permalink to “第 6 步：修改工具定义（v1.1.65+）”"},"​")],-1)),o[23]||(o[23]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" 在某些场景下，你可能需要修改工具的描述或参数 Schema，让 AI 更好地理解工具用途，或添加额外约束。")],-1)),o[24]||(o[24]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/plugin/tool-definition.ts
import type { Plugin } from "@opencode-ai/plugin"

export const ToolDefinitionPlugin: Plugin = async () => {
  return {
    "tool.definition": async (input, output) => {
      // 为 read 工具添加中文描述
      if (input.toolID === "read") {
        output.description = "读取文件内容。支持文本文件和图片。路径必须是绝对路径。"
      }

      // 为 bash 工具添加安全提示
      if (input.toolID === "bash") {
        output.description += "\\n\\n⚠️ 注意：危险命令（如 rm -rf）需要用户确认。"
      }

      // 修改参数 Schema（例如添加默认值或约束）
      if (input.toolID === "write" && output.parameters?.properties?.filePath) {
        output.parameters.properties.filePath.description = "文件绝对路径，必须以 / 开头"
      }
    },
  }
}`)])],-1)),o[25]||(o[25]=n("",26)),o[26]||(o[26]=t("details",null,[t("summary",null,[t("strong",null,"点击展开查看源码位置")]),t("table",{tabindex:"0"},[t("thead",null,[t("tr",null,[t("th",null,"功能"),t("th",null,"文件路径"),t("th",null,"行号")])]),t("tbody",null,[t("tr",null,[t("td",null,"Hook 类型定义"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/plugin/src/index.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/plugin/src/index.ts")])]),t("td",null,"148-231")]),t("tr",null,[t("td",null,[t("code",null,"tool.definition"),e(" Hook 定义")]),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/plugin/src/index.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/plugin/src/index.ts")])]),t("td",null,"227-230")]),t("tr",null,[t("td",null,[t("code",null,"tool.definition"),e(" Hook 触发")]),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/tool/registry.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/tool/registry.ts")])]),t("td",null,"157")]),t("tr",null,[t("td",null,"插件加载逻辑"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/plugin/index.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/plugin/index.ts")])]),t("td",null,"20-82")]),t("tr",null,[t("td",null,"插件目录扫描"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/config/config.ts")])]),t("td",null,"322-335")]),t("tr",null,[t("td",null,"插件去重逻辑"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/config/config.ts")])]),t("td",null,"369-387")]),t("tr",null,[t("td",null,"配置 Hook Schema"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/config/config.ts")])]),t("td",null,"1009-1030")])])]),t("p",null,[t("strong",null,"关键代码片段"),e("：")]),t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Hook 类型定义
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

// 插件加载
export async function trigger<Name extends keyof Required<Hooks>>(name: Name, input: Input, output: Output): Promise<Output> {
  if (!name) return output
  for (const hook of await state().then((x) => x.hooks)) {
    const fn = hook[name]
    if (!fn) continue
    await fn(input, output)
  }
  return output
}`)])])],-1))])}const v=l(p,[["render",c]]);export{P as __pageData,v as default};
