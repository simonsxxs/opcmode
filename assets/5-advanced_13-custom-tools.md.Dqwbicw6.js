import{_ as s,I as r,c as d,o as l,a5 as n,j as t,J as i,a as o,bm as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"5.13 自定义工具","description":"创建自定义工具，让 LLM 可以在对话中调用你的函数，扩展 OpenCode 能力。","frontmatter":{"title":"5.13 自定义工具","subtitle":"扩展 OpenCode 的工具能力","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.13","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"创建自定义工具，让 LLM 可以在对话中调用你的函数，扩展 OpenCode 能力。","tags":["工具","TypeScript","扩展"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/13-custom-tools.md","filePath":"5-advanced/13-custom-tools.md","lastUpdated":1772014034000}'),p={name:"5-advanced/13-custom-tools.md"};function u(g,e,m,b,h,y){const a=r("AdInArticle");return l(),d("div",null,[e[0]||(e[0]=n('<h1 id="自定义工具" tabindex="-1">自定义工具 <a class="header-anchor" href="#自定义工具" aria-label="Permalink to “自定义工具”">​</a></h1><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+c+'" alt="5.13 自定义工具学霸笔记" data-zoom-src="/images/5-advanced/13-custom-tools-notes.jpeg"></p><hr><p>自定义工具是你创建的函数，LLM 可以在对话中调用它们。它们与 OpenCode 的内置工具（如 <code>read</code>、<code>write</code>、<code>bash</code>）并行工作。</p><h2 id="创建工具" tabindex="-1">创建工具 <a class="header-anchor" href="#创建工具" aria-label="Permalink to “创建工具”">​</a></h2><p>工具定义为 <strong>TypeScript</strong> 或 <strong>JavaScript</strong> 文件。但工具定义可以调用任何语言编写的脚本——TypeScript/JavaScript 只用于工具定义本身。</p><h3 id="位置" tabindex="-1">位置 <a class="header-anchor" href="#位置" aria-label="Permalink to “位置”">​</a></h3><p>工具可以放置在：</p><ul><li><strong>项目级</strong>：<code>.opencode/tool/</code> 目录</li><li><strong>全局级</strong>：<code>~/.config/opencode/tool/</code> 目录</li></ul><h3 id="结构" tabindex="-1">结构 <a class="header-anchor" href="#结构" aria-label="Permalink to “结构”">​</a></h3><p>使用 <code>tool()</code> 辅助函数创建工具，提供类型安全和验证：</p>',13)),e[1]||(e[1]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/database.ts
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
})`)])],-1)),e[6]||(e[6]=n('<p>这创建了两个工具：<code>math_add</code> 和 <code>math_multiply</code>。</p><h3 id="与内置工具同名" tabindex="-1">与内置工具同名 <a class="header-anchor" href="#与内置工具同名" aria-label="Permalink to “与内置工具同名”">​</a></h3><p>自定义工具按工具名索引。如果自定义工具使用与内置工具相同的名称，<strong>自定义工具优先</strong>。</p><p>例如，这个文件会替换内置的 <code>bash</code> 工具：</p>',4)),e[7]||(e[7]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import { tool } from "@opencode-ai/plugin"

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
})`)])],-1)),e[8]||(e[8]=n('<div class="tip custom-block"><p class="custom-block-title">💡 使用建议</p><ul><li><strong>除非有意替换</strong>，否则使用唯一的工具名，避免与内置工具冲突</li><li><strong>想禁用内置工具</strong>而非替换？使用 <a href="./05-permissions.html">权限配置</a> 而非同名覆盖</li><li><strong>想增强内置工具</strong>？可以在自定义工具中调用原有逻辑（通过 <code>Bun.$</code> 执行命令）</li></ul></div><h3 id="参数定义" tabindex="-1">参数定义 <a class="header-anchor" href="#参数定义" aria-label="Permalink to “参数定义”">​</a></h3><p>使用 <code>tool.schema</code>（即 <a href="https://zod.dev" target="_blank" rel="noreferrer">Zod</a>）定义参数类型：</p>',3)),e[9]||(e[9]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`args: {
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
})`)])],-1)),e[17]||(e[17]=n('<p>上下文包含以下字段：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>sessionID</code></td><td><code>string</code></td><td>当前会话 ID</td></tr><tr><td><code>messageID</code></td><td><code>string</code></td><td>当前消息 ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>调用此工具的代理名称</td></tr><tr><td><code>directory</code></td><td><code>string</code></td><td>当前项目目录（解析相对路径时优先使用）</td></tr><tr><td><code>worktree</code></td><td><code>string</code></td><td>项目的 worktree 根目录</td></tr><tr><td><code>abort</code></td><td><code>AbortSignal</code></td><td>用于检测用户取消操作</td></tr></tbody></table><h4 id="处理取消操作" tabindex="-1">处理取消操作 <a class="header-anchor" href="#处理取消操作" aria-label="Permalink to “处理取消操作”">​</a></h4><p>当用户取消操作（如按 Ctrl+C）时，<code>abort</code> 信号会被触发。对于长时间运行的工具，应监听此信号并及时退出：</p>',4)),e[18]||(e[18]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/tool/long-task.ts
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
})`)])],-1)),e[35]||(e[35]=n('<blockquote><p>生产环境中，API Token 应从环境变量读取而非硬编码。</p></blockquote><h2 id="输出限制" tabindex="-1">输出限制 <a class="header-anchor" href="#输出限制" aria-label="Permalink to “输出限制”">​</a></h2><p>工具返回值会被自动截断以避免上下文溢出：</p><table tabindex="0"><thead><tr><th>限制</th><th>值</th></tr></thead><tbody><tr><td>最大行数</td><td>2000 行</td></tr><tr><td>最大字节</td><td>50 KB</td></tr></tbody></table><p>超出限制时，OpenCode 会在末尾添加 <code>...N lines truncated...</code> 或 <code>...N chars truncated...</code> 提示。</p><p>如果你的工具需要返回大量数据，建议：</p><ol><li><strong>返回摘要</strong> - 只返回关键信息，将完整数据写入文件</li><li><strong>分页处理</strong> - 添加分页参数，每次返回部分结果</li><li><strong>结构化输出</strong> - 返回 JSON 格式便于 LLM 解析</li></ol><h2 id="禁用自定义工具" tabindex="-1">禁用自定义工具 <a class="header-anchor" href="#禁用自定义工具" aria-label="Permalink to “禁用自定义工具”">​</a></h2><p>自定义工具也可以通过 <code>tools</code> 配置禁用：</p>',9)),e[36]||(e[36]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tools": {
    "database": false,
    "math_*": false
  }
}`)])],-1)),e[37]||(e[37]=n('<p>支持通配符模式，<code>math_*</code> 会禁用所有以 <code>math_</code> 开头的工具（如 <code>math_add</code>、<code>math_multiply</code>）。</p><h2 id="调试与验证" tabindex="-1">调试与验证 <a class="header-anchor" href="#调试与验证" aria-label="Permalink to “调试与验证”">​</a></h2><h3 id="确认工具加载成功" tabindex="-1">确认工具加载成功 <a class="header-anchor" href="#确认工具加载成功" aria-label="Permalink to “确认工具加载成功”">​</a></h3><p>启动 OpenCode 后，使用 <code>/tools</code> 命令查看所有可用工具列表，确认自定义工具出现在列表中。</p><h3 id="常见调试方法" tabindex="-1">常见调试方法 <a class="header-anchor" href="#常见调试方法" aria-label="Permalink to “常见调试方法”">​</a></h3><ol><li><strong>查看日志</strong> - 工具加载错误会记录在日志中，使用 <code>OPENCODE_DEBUG=1</code> 启动可查看详细日志</li><li><strong>测试执行</strong> - 在对话中直接要求 LLM 调用工具，观察返回结果</li><li><strong>语法检查</strong> - 使用 <code>bun check .opencode/tool/your-tool.ts</code> 检查 TypeScript 语法</li></ol><h2 id="工具与插件的区别" tabindex="-1">工具与插件的区别 <a class="header-anchor" href="#工具与插件的区别" aria-label="Permalink to “工具与插件的区别”">​</a></h2><table tabindex="0"><thead><tr><th>特性</th><th>自定义工具</th><th>插件中的工具</th></tr></thead><tbody><tr><td>用途</td><td>供 LLM 调用的功能</td><td>扩展 OpenCode 行为 + 工具</td></tr><tr><td>位置</td><td><code>.opencode/tool/</code></td><td><code>.opencode/plugin/</code></td></tr><tr><td>命名规则</td><td><code>&lt;文件名&gt;</code> 或 <code>&lt;文件名&gt;_&lt;导出名&gt;</code></td><td>在 <code>tool</code> 对象中直接指定</td></tr><tr><td>适用场景</td><td>简单的独立功能</td><td>需要访问插件上下文或组合多种钩子</td></tr></tbody></table><p>如需在插件中定义工具，请参考 <a href="./12a-plugins-basics.html#自定义工具-1">插件开发</a>。</p><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>工具未出现在 <code>/tools</code> 列表</td><td>文件扩展名错误或语法错误</td><td>确保使用 <code>.ts</code> 或 <code>.js</code> 扩展名，检查 TypeScript 语法</td></tr><tr><td>工具调用时参数验证失败</td><td>Zod schema 定义不匹配</td><td>确保 <code>.describe()</code> 描述清晰，LLM 能理解参数含义</td></tr><tr><td>工具返回内容被截断</td><td>返回超过 2000 行或 50KB</td><td>返回摘要或分页，完整数据写入文件</td></tr><tr><td>工具调用超时</td><td>长时间运行的任务未处理 abort</td><td>使用 <code>context.abort</code> 信号支持取消</td></tr><tr><td>依赖包找不到</td><td>未在 <code>.opencode/package.json</code> 声明</td><td>添加依赖并重启 OpenCode</td></tr><tr><td>Windows 上 Python 工具失败</td><td>命令 <code>python3</code> 不存在</td><td>使用 <code>python</code> 或检测平台动态选择</td></tr><tr><td>工具名与内置工具同名</td><td>自定义工具会覆盖同名内置工具</td><td>如需禁用内置工具，用权限配置而非同名覆盖</td></tr></tbody></table><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./17-tools.html">内置工具</a> - OpenCode 内置工具列表</li><li><a href="./07a-mcp-basics.html">MCP 服务器</a> - 通过 MCP 集成外部工具</li><li><a href="./12a-plugins-basics.html">插件开发</a> - 创建插件并定义工具</li></ul>',13))])}const C=s(p,[["render",u]]);export{x as __pageData,C as default};
