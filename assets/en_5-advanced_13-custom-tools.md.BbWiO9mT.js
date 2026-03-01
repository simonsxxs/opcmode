import{_ as s,I as l,c as r,o as i,a5 as n,j as e,J as d,a as o,bm as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse(`{"title":"5.13 Custom Tools","description":"Create custom tools that allow LLMs to call your functions during conversations, extending OpenCode's capabilities.","frontmatter":{"title":"5.13 Custom Tools","subtitle":"Extending OpenCode's Tool Capabilities","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.13","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Create custom tools that allow LLMs to call your functions during conversations, extending OpenCode's capabilities.","tags":["Tools","TypeScript","Extension"],"prerequisite":["5.1 Configuration Guide"]},"headers":[],"relativePath":"en/5-advanced/13-custom-tools.md","filePath":"en/5-advanced/13-custom-tools.md","lastUpdated":1772014034000}`),p={name:"en/5-advanced/13-custom-tools.md"};function u(m,t,g,h,b,f){const a=l("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=n('<h1 id="custom-tools" tabindex="-1">Custom Tools <a class="header-anchor" href="#custom-tools" aria-label="Permalink to “Custom Tools”">​</a></h1><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key concepts from this lesson:</p><p><img src="'+c+'" alt="5.13 Custom Tools Notes" data-zoom-src="/images/5-advanced/13-custom-tools-notes.jpeg"></p><hr><p>Custom tools are functions you create that LLMs can call during conversations. They work alongside OpenCode&#39;s built-in tools (like <code>read</code>, <code>write</code>, <code>bash</code>).</p><h2 id="creating-tools" tabindex="-1">Creating Tools <a class="header-anchor" href="#creating-tools" aria-label="Permalink to “Creating Tools”">​</a></h2><p>Tools are defined as <strong>TypeScript</strong> or <strong>JavaScript</strong> files. However, tool definitions can call scripts written in any language—TypeScript/JavaScript is only for the tool definition itself.</p><h3 id="location" tabindex="-1">Location <a class="header-anchor" href="#location" aria-label="Permalink to “Location”">​</a></h3><p>Tools can be placed in:</p><ul><li><strong>Project-level</strong>: <code>.opencode/tool/</code> directory</li><li><strong>Global-level</strong>: <code>~/.config/opencode/tool/</code> directory</li></ul><h3 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to “Structure”">​</a></h3><p>Use the <code>tool()</code> helper function to create tools with type safety and validation:</p>',13)),t[1]||(t[1]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/database.ts
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
})`)])],-1)),t[2]||(t[2]=n('<p>The <strong>filename</strong> becomes the <strong>tool name</strong>. The example above creates a <code>database</code> tool.</p><h3 id="multiple-tools-in-one-file" tabindex="-1">Multiple Tools in One File <a class="header-anchor" href="#multiple-tools-in-one-file" aria-label="Permalink to “Multiple Tools in One File”">​</a></h3><p>You can export multiple tools from a single file. Each export becomes a separate tool with the naming format <code>&lt;filename&gt;_&lt;export-name&gt;</code>:</p>',3)),t[3]||(t[3]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/math.ts
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
})`)])],-1)),t[4]||(t[4]=n('<p>This creates two tools: <code>math_add</code> and <code>math_multiply</code>.</p><h3 id="same-name-as-built-in-tools" tabindex="-1">Same Name as Built-in Tools <a class="header-anchor" href="#same-name-as-built-in-tools" aria-label="Permalink to “Same Name as Built-in Tools”">​</a></h3><p>Custom tools are indexed by tool name. If a custom tool uses the same name as a built-in tool, <strong>the custom tool takes precedence</strong>.</p><p>For example, this file would replace the built-in <code>bash</code> tool:</p>',4)),t[5]||(t[5]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`import { tool } from "@opencode-ai/plugin"

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
})`)])],-1)),t[6]||(t[6]=n('<div class="tip custom-block"><p class="custom-block-title">💡 Best Practices</p><ul><li><strong>Unless intentionally replacing</strong>, use unique tool names to avoid conflicts with built-in tools</li><li><strong>Want to disable</strong> a built-in tool rather than replace it? Use <a href="./05-permissions.html">permission configuration</a> instead of name overriding</li><li><strong>Want to enhance</strong> a built-in tool? You can call the original logic within your custom tool (execute commands via <code>Bun.$</code>)</li></ul></div><h3 id="argument-definition" tabindex="-1">Argument Definition <a class="header-anchor" href="#argument-definition" aria-label="Permalink to “Argument Definition”">​</a></h3><p>Use <code>tool.schema</code> (which is <a href="https://zod.dev" target="_blank" rel="noreferrer">Zod</a>) to define argument types:</p>',3)),t[7]||(t[7]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`args: {
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
})`)])],-1)),t[15]||(t[15]=n('<p>Context contains the following fields:</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>sessionID</code></td><td><code>string</code></td><td>Current session ID</td></tr><tr><td><code>messageID</code></td><td><code>string</code></td><td>Current message ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>Name of the agent calling this tool</td></tr><tr><td><code>directory</code></td><td><code>string</code></td><td>Current project directory (prefer when resolving relative paths)</td></tr><tr><td><code>worktree</code></td><td><code>string</code></td><td>Project&#39;s worktree root directory</td></tr><tr><td><code>abort</code></td><td><code>AbortSignal</code></td><td>Used to detect user cancellation</td></tr></tbody></table><h4 id="handling-cancellation" tabindex="-1">Handling Cancellation <a class="header-anchor" href="#handling-cancellation" aria-label="Permalink to “Handling Cancellation”">​</a></h4><p>When a user cancels an operation (e.g., pressing Ctrl+C), the <code>abort</code> signal is triggered. For long-running tools, you should listen to this signal and exit promptly:</p>',4)),t[16]||(t[16]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/tool/long-task.ts
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
})`)])],-1)),t[33]||(t[33]=n('<blockquote><p>In production, API tokens should be read from environment variables rather than hardcoded.</p></blockquote><h2 id="output-limits" tabindex="-1">Output Limits <a class="header-anchor" href="#output-limits" aria-label="Permalink to “Output Limits”">​</a></h2><p>Tool return values are automatically truncated to prevent context overflow:</p><table tabindex="0"><thead><tr><th>Limit</th><th>Value</th></tr></thead><tbody><tr><td>Max lines</td><td>2000 lines</td></tr><tr><td>Max bytes</td><td>50 KB</td></tr></tbody></table><p>When limits are exceeded, OpenCode appends <code>...N lines truncated...</code> or <code>...N chars truncated...</code> at the end.</p><p>If your tool needs to return large amounts of data, consider:</p><ol><li><strong>Return a summary</strong> - Return only key information, write complete data to files</li><li><strong>Pagination</strong> - Add pagination parameters, return partial results each time</li><li><strong>Structured output</strong> - Return JSON format for easier LLM parsing</li></ol><h2 id="disabling-custom-tools" tabindex="-1">Disabling Custom Tools <a class="header-anchor" href="#disabling-custom-tools" aria-label="Permalink to “Disabling Custom Tools”">​</a></h2><p>Custom tools can also be disabled via the <code>tools</code> configuration:</p>',9)),t[34]||(t[34]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tools": {
    "database": false,
    "math_*": false
  }
}`)])],-1)),t[35]||(t[35]=n('<p>Wildcard patterns are supported. <code>math_*</code> will disable all tools starting with <code>math_</code> (e.g., <code>math_add</code>, <code>math_multiply</code>).</p><h2 id="debugging-and-validation" tabindex="-1">Debugging and Validation <a class="header-anchor" href="#debugging-and-validation" aria-label="Permalink to “Debugging and Validation”">​</a></h2><h3 id="confirm-tool-loading" tabindex="-1">Confirm Tool Loading <a class="header-anchor" href="#confirm-tool-loading" aria-label="Permalink to “Confirm Tool Loading”">​</a></h3><p>After starting OpenCode, use the <code>/tools</code> command to view all available tools and confirm your custom tools appear in the list.</p><h3 id="common-debugging-methods" tabindex="-1">Common Debugging Methods <a class="header-anchor" href="#common-debugging-methods" aria-label="Permalink to “Common Debugging Methods”">​</a></h3><ol><li><strong>Check logs</strong> - Tool loading errors are logged. Start with <code>OPENCODE_DEBUG=1</code> for detailed logs</li><li><strong>Test execution</strong> - Ask the LLM to call the tool directly in conversation and observe the results</li><li><strong>Syntax check</strong> - Use <code>bun check .opencode/tool/your-tool.ts</code> to check TypeScript syntax</li></ol><h2 id="difference-between-tools-and-plugins" tabindex="-1">Difference Between Tools and Plugins <a class="header-anchor" href="#difference-between-tools-and-plugins" aria-label="Permalink to “Difference Between Tools and Plugins”">​</a></h2><table tabindex="0"><thead><tr><th>Feature</th><th>Custom Tools</th><th>Tools in Plugins</th></tr></thead><tbody><tr><td>Purpose</td><td>Functions for LLM to call</td><td>Extend OpenCode behavior + tools</td></tr><tr><td>Location</td><td><code>.opencode/tool/</code></td><td><code>.opencode/plugin/</code></td></tr><tr><td>Naming</td><td><code>&lt;filename&gt;</code> or <code>&lt;filename&gt;_&lt;export-name&gt;</code></td><td>Specified directly in <code>tool</code> object</td></tr><tr><td>Use Case</td><td>Simple standalone functions</td><td>Need plugin context or combine multiple hooks</td></tr></tbody></table><p>For defining tools within plugins, see <a href="./12a-plugins-basics.html#custom-tools-1">Plugin Development</a>.</p><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Tool not in <code>/tools</code> list</td><td>Wrong file extension or syntax error</td><td>Ensure <code>.ts</code> or <code>.js</code> extension, check TypeScript syntax</td></tr><tr><td>Parameter validation fails</td><td>Zod schema mismatch</td><td>Ensure <code>.describe()</code> is clear so LLM understands parameters</td></tr><tr><td>Tool output truncated</td><td>Exceeds 2000 lines or 50KB</td><td>Return summary or paginate, write full data to files</td></tr><tr><td>Tool call timeout</td><td>Long-running task not handling abort</td><td>Use <code>context.abort</code> signal to support cancellation</td></tr><tr><td>Dependency not found</td><td>Not declared in <code>.opencode/package.json</code></td><td>Add dependency and restart OpenCode</td></tr><tr><td>Python tool fails on Windows</td><td><code>python3</code> command doesn&#39;t exist</td><td>Use <code>python</code> or detect platform dynamically</td></tr><tr><td>Tool name same as built-in</td><td>Custom tool overrides built-in tool</td><td>Use permission config to disable built-in tools instead of name override</td></tr></tbody></table><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to “Related Resources”">​</a></h2><ul><li><a href="./17-tools.html">Built-in Tools</a> - List of OpenCode built-in tools</li><li><a href="./07a-mcp-basics.html">MCP Servers</a> - Integrate external tools via MCP</li><li><a href="./12a-plugins-basics.html">Plugin Development</a> - Create plugins and define tools</li></ul>',13))])}const C=s(p,[["render",u]]);export{x as __pageData,C as default};
