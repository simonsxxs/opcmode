import{_ as s,I as r,c as d,o as l,a5 as n,j as t,J as i,a as o,bm as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"5.13 自定义工具","description":"创建自定义工具，让 LLM 可以在对话中调用你的函数，扩展 OpenCode 能力。","frontmatter":{"title":"5.13 自定义工具","subtitle":"扩展 OpenCode 的工具能力","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.13","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"创建自定义工具，让 LLM 可以在对话中调用你的函数，扩展 OpenCode 能力。","tags":["工具","TypeScript","扩展"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/13-custom-tools.md","filePath":"5-advanced/13-custom-tools.md","lastUpdated":1772014034000}'),p={name:"5-advanced/13-custom-tools.md"};function u(g,e,m,b,h,y){const a=r("AdInArticle");return l(),d("div",null,[e[0]||(e[0]=n("",13)),e[1]||(e[1]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/database.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Query the project database",
  args: {
    query: tool.schema.string().describe("SQL query to execute"),
  },
  async execute(args) {
    // 数据库逻辑
    return \`Executed query: \${args.query}\`
  },
})`)])],-1)),e[2]||(e[2]=t("p",null,[t("strong",null,"文件名"),o("即为"),t("strong",null,"工具名"),o("。上面的示例创建了一个 "),t("code",null,"database"),o(" 工具。")],-1)),e[3]||(e[3]=t("h3",{id:"单文件多工具",tabindex:"-1"},[o("单文件多工具 "),t("a",{class:"header-anchor",href:"#单文件多工具","aria-label":"Permalink to “单文件多工具”"},"​")],-1)),e[4]||(e[4]=t("p",null,[o("可以从单个文件导出多个工具。每个导出成为一个独立工具，名称格式为 "),t("code",null,"<文件名>_<导出名>"),o("：")],-1)),e[5]||(e[5]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/math.ts
import { tool } from "@opencode-ai/plugin"

export const add = tool({
  description: "Add two numbers",
  args: {
    a: tool.schema.number().describe("First number"),
    b: tool.schema.number().describe("Second number"),
  },
  async execute(args) {
    return args.a + args.b
  },
})

export const multiply = tool({
  description: "Multiply two numbers",
  args: {
    a: tool.schema.number().describe("First number"),
    b: tool.schema.number().describe("Second number"),
  },
  async execute(args) {
    return args.a * args.b
  },
})`)])],-1)),e[6]||(e[6]=n("",4)),e[7]||(e[7]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "受限的 bash 封装",
  args: {
    command: tool.schema.string().describe("要执行的命令"),
  },
  async execute(args) {
    // 拦截危险命令
    const blocked = ["rm -rf", "sudo", "mkfs"]
    for (const cmd of blocked) {
      if (args.command.includes(cmd)) {
        return \`⛔ 已拦截危险命令: \${args.command}\`
      }
    }
    // 执行其他命令...
    return \`执行: \${args.command}\`
  },
})`)])],-1)),e[8]||(e[8]=n("",3)),e[9]||(e[9]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`args: {
  query: tool.schema.string().describe("SQL query to execute")
}`)])],-1)),e[10]||(e[10]=t("p",null,"常用类型示例：",-1)),e[11]||(e[11]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Demo of parameter types",
  args: {
    // 字符串
    name: tool.schema.string().describe("User name"),

    // 可选参数
    email: tool.schema.string().email().optional().describe("Optional email"),

    // 带默认值
    limit: tool.schema.number().default(10).describe("Max results"),

    // 枚举
    status: tool.schema.enum(["pending", "done"]).describe("Task status"),

    // 布尔
    verbose: tool.schema.boolean().describe("Enable verbose output"),

    // 数组
    tags: tool.schema.array(tool.schema.string()).describe("List of tags"),

    // 对象
    config: tool.schema.object({
      host: tool.schema.string(),
      port: tool.schema.number(),
    }).describe("Server config"),
  },
  async execute(args) {
    return JSON.stringify(args, null, 2)
  },
})`)])],-1)),e[12]||(e[12]=t("p",null,"也可以直接导入 Zod 并返回普通对象：",-1)),e[13]||(e[13]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import { z } from "zod"

export default {
  description: "Tool description",
  args: {
    param: z.string().describe("Parameter description"),
  },
  async execute(args, context) {
    // 工具实现
    return "result"
  },
}`)])],-1)),e[14]||(e[14]=t("h3",{id:"上下文",tabindex:"-1"},[o("上下文 "),t("a",{class:"header-anchor",href:"#上下文","aria-label":"Permalink to “上下文”"},"​")],-1)),i(a),e[15]||(e[15]=t("p",null,"工具可以接收当前会话的上下文信息：",-1)),e[16]||(e[16]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/project.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Get project information",
  args: {},
  async execute(args, context) {
    // 访问上下文信息
    const { agent, sessionID, messageID, abort } = context
    return \`Agent: \${agent}, Session: \${sessionID}, Message: \${messageID}\`
  },
})`)])],-1)),e[17]||(e[17]=n("",4)),e[18]||(e[18]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/long-task.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "A long-running task",
  args: {},
  async execute(args, context) {
    // 检查是否已取消
    if (context.abort.aborted) {
      return "Task cancelled"
    }

    // 传递给支持 AbortSignal 的 API
    const response = await fetch("https://api.example.com/data", {
      signal: context.abort,
    })

    return await response.text()
  },
})`)])],-1)),e[19]||(e[19]=t("h2",{id:"依赖项",tabindex:"-1"},[o("依赖项 "),t("a",{class:"header-anchor",href:"#依赖项","aria-label":"Permalink to “依赖项”"},"​")],-1)),e[20]||(e[20]=t("p",null,[o("自定义工具可以使用外部 npm 包。在配置目录添加 "),t("code",null,"package.json"),o(" 声明依赖：")],-1)),e[21]||(e[21]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/package.json
{
  "dependencies": {
    "node-fetch": "^3.0.0",
    "cheerio": "^1.0.0"
  }
}`)])],-1)),e[22]||(e[22]=t("p",null,[o("OpenCode 启动时会自动运行 "),t("code",null,"bun install"),o(" 安装这些依赖。然后工具可以导入使用：")],-1)),e[23]||(e[23]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/scraper.ts
import { tool } from "@opencode-ai/plugin"
import * as cheerio from "cheerio"

export default tool({
  description: "Extract text from a webpage",
  args: {
    url: tool.schema.string().url().describe("URL to scrape"),
  },
  async execute(args, context) {
    const response = await fetch(args.url, { signal: context.abort })
    const html = await response.text()
    const $ = cheerio.load(html)
    return $("body").text().trim()
  },
})`)])],-1)),e[24]||(e[24]=t("h2",{id:"示例",tabindex:"-1"},[o("示例 "),t("a",{class:"header-anchor",href:"#示例","aria-label":"Permalink to “示例”"},"​")],-1)),e[25]||(e[25]=t("h3",{id:"用-python-编写工具",tabindex:"-1"},[o("用 Python 编写工具 "),t("a",{class:"header-anchor",href:"#用-python-编写工具","aria-label":"Permalink to “用 Python 编写工具”"},"​")],-1)),e[26]||(e[26]=t("p",null,"你可以用任何语言编写工具。以下示例使用 Python 实现两数相加。",-1)),e[27]||(e[27]=t("p",null,"首先，创建 Python 脚本：",-1)),e[28]||(e[28]=t("div",{class:"language-python"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"python"),t("pre",null,[t("code",{"v-pre":""},`# .opencode/tool/add.py
import sys

a = int(sys.argv[1])
b = int(sys.argv[2])
print(a + b)`)])],-1)),e[29]||(e[29]=t("p",null,"然后创建调用它的工具定义：",-1)),e[30]||(e[30]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/python-add.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Add two numbers using Python",
  args: {
    a: tool.schema.number().describe("First number"),
    b: tool.schema.number().describe("Second number"),
  },
  async execute(args) {
    const result = await Bun.$\`python3 .opencode/tool/add.py \${args.a} \${args.b}\`.text()
    return result.trim()
  },
})`)])],-1)),e[31]||(e[31]=t("p",null,[o("这里使用 "),t("a",{href:"https://bun.com/docs/runtime/shell",target:"_blank",rel:"noreferrer"},[t("code",null,"Bun.$")]),o(" 工具运行 Python 脚本。")],-1)),e[32]||(e[32]=t("h3",{id:"调用-http-api",tabindex:"-1"},[o("调用 HTTP API "),t("a",{class:"header-anchor",href:"#调用-http-api","aria-label":"Permalink to “调用 HTTP API”"},"​")],-1)),e[33]||(e[33]=t("p",null,"实际项目中常见的工具是封装 HTTP API 调用：",-1)),e[34]||(e[34]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/jira.ts
import { tool } from "@opencode-ai/plugin"

export const getIssue = tool({
  description: "Get JIRA issue details by key",
  args: {
    key: tool.schema.string().describe("Issue key, e.g. PROJ-123"),
  },
  async execute(args, context) {
    const response = await fetch(
      \`https://your-company.atlassian.net/rest/api/3/issue/\${args.key}\`,
      {
        headers: {
          Authorization: \`Basic \${btoa("email@example.com:API_TOKEN")}\`,
          Accept: "application/json",
        },
        signal: context.abort,
      }
    )

    if (!response.ok) {
      throw new Error(\`Failed to fetch issue: \${response.status}\`)
    }

    const issue = await response.json()
    return JSON.stringify(issue, null, 2)
  },
})`)])],-1)),e[35]||(e[35]=n("",9)),e[36]||(e[36]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tools": {
    "database": false,
    "math_*": false
  }
}`)])],-1)),e[37]||(e[37]=n("",13))])}const C=s(p,[["render",u]]);export{x as __pageData,C as default};
