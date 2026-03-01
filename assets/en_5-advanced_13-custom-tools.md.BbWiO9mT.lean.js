import{_ as s,I as l,c as r,o as i,a5 as n,j as e,J as d,a as o,bm as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse(`{"title":"5.13 Custom Tools","description":"Create custom tools that allow LLMs to call your functions during conversations, extending OpenCode's capabilities.","frontmatter":{"title":"5.13 Custom Tools","subtitle":"Extending OpenCode's Tool Capabilities","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.13","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Create custom tools that allow LLMs to call your functions during conversations, extending OpenCode's capabilities.","tags":["Tools","TypeScript","Extension"],"prerequisite":["5.1 Configuration Guide"]},"headers":[],"relativePath":"en/5-advanced/13-custom-tools.md","filePath":"en/5-advanced/13-custom-tools.md","lastUpdated":1772014034000}`),p={name:"en/5-advanced/13-custom-tools.md"};function u(m,t,g,h,b,f){const a=l("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=n("",13)),t[1]||(t[1]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/database.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Query the project database",
  args: {
    query: tool.schema.string().describe("SQL query to execute"),
  },
  async execute(args) {
    // Database logic
    return \`Executed query: \${args.query}\`
  },
})`)])],-1)),t[2]||(t[2]=n("",3)),t[3]||(t[3]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/math.ts
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
})`)])],-1)),t[4]||(t[4]=n("",4)),t[5]||(t[5]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Restricted bash wrapper",
  args: {
    command: tool.schema.string().describe("Command to execute"),
  },
  async execute(args) {
    // Block dangerous commands
    const blocked = ["rm -rf", "sudo", "mkfs"]
    for (const cmd of blocked) {
      if (args.command.includes(cmd)) {
        return \`⛔ Blocked dangerous command: \${args.command}\`
      }
    }
    // Execute other commands...
    return \`Executing: \${args.command}\`
  },
})`)])],-1)),t[6]||(t[6]=n("",3)),t[7]||(t[7]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`args: {
  query: tool.schema.string().describe("SQL query to execute")
}`)])],-1)),t[8]||(t[8]=e("p",null,"Common type examples:",-1)),t[9]||(t[9]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Demo of parameter types",
  args: {
    // String
    name: tool.schema.string().describe("User name"),

    // Optional parameter
    email: tool.schema.string().email().optional().describe("Optional email"),

    // With default value
    limit: tool.schema.number().default(10).describe("Max results"),

    // Enum
    status: tool.schema.enum(["pending", "done"]).describe("Task status"),

    // Boolean
    verbose: tool.schema.boolean().describe("Enable verbose output"),

    // Array
    tags: tool.schema.array(tool.schema.string()).describe("List of tags"),

    // Object
    config: tool.schema.object({
      host: tool.schema.string(),
      port: tool.schema.number(),
    }).describe("Server config"),
  },
  async execute(args) {
    return JSON.stringify(args, null, 2)
  },
})`)])],-1)),t[10]||(t[10]=e("p",null,"You can also import Zod directly and return a plain object:",-1)),t[11]||(t[11]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`import { z } from "zod"

export default {
  description: "Tool description",
  args: {
    param: z.string().describe("Parameter description"),
  },
  async execute(args, context) {
    // Tool implementation
    return "result"
  },
}`)])],-1)),t[12]||(t[12]=e("h3",{id:"context",tabindex:"-1"},[o("Context "),e("a",{class:"header-anchor",href:"#context","aria-label":"Permalink to “Context”"},"​")],-1)),d(a),t[13]||(t[13]=e("p",null,"Tools can receive context information about the current session:",-1)),t[14]||(t[14]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/project.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Get project information",
  args: {},
  async execute(args, context) {
    // Access context information
    const { agent, sessionID, messageID, abort } = context
    return \`Agent: \${agent}, Session: \${sessionID}, Message: \${messageID}\`
  },
})`)])],-1)),t[15]||(t[15]=n("",4)),t[16]||(t[16]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/long-task.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "A long-running task",
  args: {},
  async execute(args, context) {
    // Check if already cancelled
    if (context.abort.aborted) {
      return "Task cancelled"
    }

    // Pass to APIs that support AbortSignal
    const response = await fetch("https://api.example.com/data", {
      signal: context.abort,
    })

    return await response.text()
  },
})`)])],-1)),t[17]||(t[17]=e("h2",{id:"dependencies",tabindex:"-1"},[o("Dependencies "),e("a",{class:"header-anchor",href:"#dependencies","aria-label":"Permalink to “Dependencies”"},"​")],-1)),t[18]||(t[18]=e("p",null,[o("Custom tools can use external npm packages. Add a "),e("code",null,"package.json"),o(" in the configuration directory to declare dependencies:")],-1)),t[19]||(t[19]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/package.json
{
  "dependencies": {
    "node-fetch": "^3.0.0",
    "cheerio": "^1.0.0"
  }
}`)])],-1)),t[20]||(t[20]=e("p",null,[o("OpenCode automatically runs "),e("code",null,"bun install"),o(" to install these dependencies on startup. Tools can then import and use them:")],-1)),t[21]||(t[21]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/scraper.ts
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
})`)])],-1)),t[22]||(t[22]=e("h2",{id:"examples",tabindex:"-1"},[o("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":"Permalink to “Examples”"},"​")],-1)),t[23]||(t[23]=e("h3",{id:"writing-tools-in-python",tabindex:"-1"},[o("Writing Tools in Python "),e("a",{class:"header-anchor",href:"#writing-tools-in-python","aria-label":"Permalink to “Writing Tools in Python”"},"​")],-1)),t[24]||(t[24]=e("p",null,"You can write tools in any language. The following example uses Python to add two numbers.",-1)),t[25]||(t[25]=e("p",null,"First, create the Python script:",-1)),t[26]||(t[26]=e("div",{class:"language-python"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"python"),e("pre",null,[e("code",{"v-pre":""},`# .opencode/tool/add.py
import sys

a = int(sys.argv[1])
b = int(sys.argv[2])
print(a + b)`)])],-1)),t[27]||(t[27]=e("p",null,"Then create a tool definition that calls it:",-1)),t[28]||(t[28]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/python-add.ts
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
})`)])],-1)),t[29]||(t[29]=e("p",null,[o("This uses the "),e("a",{href:"https://bun.com/docs/runtime/shell",target:"_blank",rel:"noreferrer"},[e("code",null,"Bun.$")]),o(" utility to run the Python script.")],-1)),t[30]||(t[30]=e("h3",{id:"calling-http-apis",tabindex:"-1"},[o("Calling HTTP APIs "),e("a",{class:"header-anchor",href:"#calling-http-apis","aria-label":"Permalink to “Calling HTTP APIs”"},"​")],-1)),t[31]||(t[31]=e("p",null,"A common tool in real projects is wrapping HTTP API calls:",-1)),t[32]||(t[32]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/jira.ts
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
})`)])],-1)),t[33]||(t[33]=n("",9)),t[34]||(t[34]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tools": {
    "database": false,
    "math_*": false
  }
}`)])],-1)),t[35]||(t[35]=n("",13))])}const C=s(p,[["render",u]]);export{x as __pageData,C as default};
