import{_ as a,I as s,c as r,o as i,a5 as o,J as l,j as e,a as n,bd as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.10a SDK 基础","description":"使用 SDK 编程方式控制 OpenCode，实现自动化和深度集成。","frontmatter":{"title":"5.10a SDK 基础","subtitle":"编程方式控制 OpenCode","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.10a","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"使用 SDK 编程方式控制 OpenCode，实现自动化和深度集成。","tags":["SDK","编程接口","自动化"],"prerequisite":["5.1 配置全解","5.9 远程开发"]},"headers":[],"relativePath":"5-advanced/10a-sdk-basics.md","filePath":"5-advanced/10a-sdk-basics.md","lastUpdated":1772014034000}'),p={name:"5-advanced/10a-sdk-basics.md"};function u(h,t,b,g,y,m){const d=s("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=o("",13)),l(d),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────┐
│                    你的应用程序                           │
├─────────────────────────────────────────────────────────┤
│                   @opencode-ai/sdk                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │createOpencode│  │createOpencode│  │createOpencode│    │
│  │             │  │   Client    │  │    Tui      │      │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘      │
│         │                │                │              │
│  服务器+客户端      仅客户端连接      启动 TUI 界面       │
└─────────┼────────────────┼────────────────┼─────────────┘
          │                │                │
          ▼                ▼                ▼
┌─────────────────────────────────────────────────────────┐
│                  OpenCode Server                         │
│            HTTP API (默认端口 4096)                       │
└─────────────────────────────────────────────────────────┘`)])],-1)),t[2]||(t[2]=e("hr",null,null,-1)),t[3]||(t[3]=e("h2",{id:"安装-sdk",tabindex:"-1"},[n("安装 SDK "),e("a",{class:"header-anchor",href:"#安装-sdk","aria-label":"Permalink to “安装 SDK”"},"​")],-1)),t[4]||(t[4]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"npm install @opencode-ai/sdk")])],-1)),t[5]||(t[5]=e("hr",null,null,-1)),t[6]||(t[6]=e("h2",{id:"三种使用方式",tabindex:"-1"},[n("三种使用方式 "),e("a",{class:"header-anchor",href:"#三种使用方式","aria-label":"Permalink to “三种使用方式”"},"​")],-1)),t[7]||(t[7]=e("h3",{id:"_1-创建服务器-客户端-推荐",tabindex:"-1"},[n("1. 创建服务器 + 客户端（推荐） "),e("a",{class:"header-anchor",href:"#_1-创建服务器-客户端-推荐","aria-label":"Permalink to “1. 创建服务器 + 客户端（推荐）”"},"​")],-1)),t[8]||(t[8]=e("p",null,"同时启动服务器和客户端，适合独立脚本和自动化场景：",-1)),t[9]||(t[9]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"

const { client, server } = await createOpencode()

// 使用 client 调用 API
const sessions = await client.session.list()
console.log(\`当前有 \${sessions.data?.length} 个会话\`)

// 完成后关闭服务器
server.close()`)])],-1)),t[10]||(t[10]=o("",4)),t[11]||(t[11]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"

const opencode = await createOpencode({
  hostname: "127.0.0.1",
  port: 4097,  // 使用不同端口避免冲突
  timeout: 10000,
  config: {
    model: "anthropic/claude-opus-4-5-thinking",
    logLevel: "DEBUG",
  },
})

console.log(\`服务器运行在 \${opencode.server.url}\`)

// 使用完毕后关闭
opencode.server.close()`)])],-1)),t[12]||(t[12]=e("hr",null,null,-1)),t[13]||(t[13]=e("h3",{id:"_2-仅客户端模式",tabindex:"-1"},[n("2. 仅客户端模式 "),e("a",{class:"header-anchor",href:"#_2-仅客户端模式","aria-label":"Permalink to “2. 仅客户端模式”"},"​")],-1)),t[14]||(t[14]=e("p",null,"连接到已运行的 OpenCode 实例，适合插件开发：",-1)),t[15]||(t[15]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeClient } from "@opencode-ai/sdk"

const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
})

// 直接使用 client
const sessions = await client.session.list()`)])],-1)),t[16]||(t[16]=o("",4)),t[17]||(t[17]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 连接到不同项目
const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
  directory: "/path/to/my-project",
})`)])],-1)),t[18]||(t[18]=e("h4",{id:"远程连接-带认证",tabindex:"-1"},[n("远程连接（带认证） "),e("a",{class:"header-anchor",href:"#远程连接-带认证","aria-label":"Permalink to “远程连接（带认证）”"},"​")],-1)),t[19]||(t[19]=e("p",null,[n("当连接远程 OpenCode 服务器时，如果服务器设置了 "),e("code",null,"OPENCODE_SERVER_PASSWORD"),n("，需要通过 "),e("code",null,"headers"),n(" 传递 Basic Auth 认证：")],-1)),t[20]||(t[20]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeClient } from "@opencode-ai/sdk"

// 远程连接（带认证）
const client = createOpencodeClient({
  baseUrl: "http://192.168.1.100:4096",
  headers: {
    // Basic Auth 格式：Base64(username:password)
    // 浏览器/Edge Runtime 用 btoa()
    Authorization: \`Basic \${btoa("opencode:your-password")}\`
  },
  directory: "/projects/my-app"  // 指定远程项目目录
})`)])],-1)),t[21]||(t[21]=e("details",{class:"details custom-block"},[e("summary",null,"Node.js 环境用 Buffer"),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},'// Node.js 没有 btoa，用 Buffer 代替\nAuthorization: `Basic ${Buffer.from("opencode:password").toString("base64")}`')])])],-1)),t[22]||(t[22]=o("",5)),t[23]||(t[23]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencodeTui } from "@opencode-ai/sdk"

const tui = createOpencodeTui({
  project: "/path/to/my-project",
  model: "anthropic/claude-opus-4-5-thinking",
  session: "abc123",  // 恢复指定会话
  agent: "build",
})

// 用户可以在 TUI 中交互
// ...

// 关闭 TUI
tui.close()`)])],-1)),t[24]||(t[24]=o("",6)),t[25]||(t[25]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 创建新会话
const session = await client.session.create({
  body: { title: "我的任务" },
})
console.log(\`创建会话: \${session.data?.id}\`)

// 列出所有会话
const sessions = await client.session.list()

// 获取单个会话
const detail = await client.session.get({
  path: { id: session.data!.id },
})

// 删除会话
await client.session.delete({
  path: { id: session.data!.id },
})`)])],-1)),t[26]||(t[26]=e("h3",{id:"发送消息",tabindex:"-1"},[n("发送消息 "),e("a",{class:"header-anchor",href:"#发送消息","aria-label":"Permalink to “发送消息”"},"​")],-1)),t[27]||(t[27]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 发送提示并等待 AI 响应
const result = await client.session.prompt({
  path: { id: sessionId },
  body: {
    model: { providerID: "anthropic", modelID: "claude-opus-4-5-thinking" },
    parts: [{ type: "text", text: "请帮我分析这段代码的性能问题" }],
  },
})

// 注入上下文（不触发 AI 响应）
await client.session.prompt({
  path: { id: sessionId },
  body: {
    noReply: true,
    parts: [{ type: "text", text: "你是一个专业的代码审查助手。" }],
  },
})`)])],-1)),t[28]||(t[28]=e("h3",{id:"异步发送-不等待响应",tabindex:"-1"},[n("异步发送（不等待响应） "),e("a",{class:"header-anchor",href:"#异步发送-不等待响应","aria-label":"Permalink to “异步发送（不等待响应）”"},"​")],-1)),t[29]||(t[29]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 发送后立即返回，适合长时间任务
await client.session.promptAsync({
  path: { id: sessionId },
  body: {
    parts: [{ type: "text", text: "请重构整个模块" }],
  },
})

// 通过事件监听获取响应`)])],-1)),t[30]||(t[30]=e("h3",{id:"文件操作",tabindex:"-1"},[n("文件操作 "),e("a",{class:"header-anchor",href:"#文件操作","aria-label":"Permalink to “文件操作”"},"​")],-1)),t[31]||(t[31]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 搜索文本内容
const textResults = await client.find.text({
  query: { pattern: "function.*opencode" },
})

// 查找文件（支持 glob 模式）
const files = await client.find.files({
  query: { 
    query: "*.ts", 
    type: "file",
    limit: 100,  // 最多返回 100 个结果
  },
})

// 查找目录
const dirs = await client.find.files({
  query: { query: "src", type: "directory" },
})

// 读取文件内容
const content = await client.file.read({
  query: { path: "src/index.ts" },
})

// 获取文件状态（git 变更）
const status = await client.file.status()`)])],-1)),t[32]||(t[32]=e("h3",{id:"tui-控制",tabindex:"-1"},[n("TUI 控制 "),e("a",{class:"header-anchor",href:"#tui-控制","aria-label":"Permalink to “TUI 控制”"},"​")],-1)),t[33]||(t[33]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 向输入框追加文本
await client.tui.appendPrompt({
  body: { text: "请检查这个文件" },
})

// 提交当前输入
await client.tui.submitPrompt()

// 清空输入
await client.tui.clearPrompt()

// 显示通知
await client.tui.showToast({
  body: { 
    message: "任务完成！", 
    variant: "success",
    duration: 3000,  // 显示 3 秒
  },
})

// 打开对话框
await client.tui.openHelp()
await client.tui.openSessions()
await client.tui.openThemes()
await client.tui.openModels()

// 执行 TUI 命令
await client.tui.executeCommand({
  body: { command: "agent_cycle" },
})`)])],-1)),t[34]||(t[34]=e("hr",null,null,-1)),t[35]||(t[35]=e("h2",{id:"实时事件监听",tabindex:"-1"},[n("实时事件监听 "),e("a",{class:"header-anchor",href:"#实时事件监听","aria-label":"Permalink to “实时事件监听”"},"​")],-1)),t[36]||(t[36]=e("h3",{id:"订阅事件流",tabindex:"-1"},[n("订阅事件流 "),e("a",{class:"header-anchor",href:"#订阅事件流","aria-label":"Permalink to “订阅事件流”"},"​")],-1)),t[37]||(t[37]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`const events = await client.event.subscribe()

for await (const event of events.stream) {
  console.log(\`事件类型: \${event.type}\`)
  console.log(\`事件数据:\`, event.properties)
  
  // 根据事件类型处理
  switch (event.type) {
    case "message.updated":
      console.log("消息更新:", event.properties.info)
      break
    case "session.idle":
      console.log("会话空闲:", event.properties.sessionID)
      break
    case "permission.updated":
      console.log("权限请求:", event.properties)
      break
  }
}`)])],-1)),t[38]||(t[38]=o("",6)),t[39]||(t[39]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import type { 
  // 核心类型
  Session,
  Message,
  Part,
  
  // 事件类型
  Event,
  EventMessageUpdated,
  EventSessionIdle,
  
  // 配置类型
  Config,
  AgentConfig,
  ProviderConfig,
  
  // 其他
  Todo,
  Permission,
  Agent,
  Provider,
  Model,
} from "@opencode-ai/sdk"`)])],-1)),t[40]||(t[40]=e("hr",null,null,-1)),t[41]||(t[41]=e("h2",{id:"错误处理",tabindex:"-1"},[n("错误处理 "),e("a",{class:"header-anchor",href:"#错误处理","aria-label":"Permalink to “错误处理”"},"​")],-1)),t[42]||(t[42]=e("h3",{id:"标准错误处理",tabindex:"-1"},[n("标准错误处理 "),e("a",{class:"header-anchor",href:"#标准错误处理","aria-label":"Permalink to “标准错误处理”"},"​")],-1)),t[43]||(t[43]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`try {
  const session = await client.session.get({ 
    path: { id: "invalid-id" } 
  })
} catch (error) {
  console.error("获取会话失败:", (error as Error).message)
}`)])],-1)),t[44]||(t[44]=e("h3",{id:"使用-throwonerror-选项",tabindex:"-1"},[n("使用 throwOnError 选项 "),e("a",{class:"header-anchor",href:"#使用-throwonerror-选项","aria-label":"Permalink to “使用 throwOnError 选项”"},"​")],-1)),t[45]||(t[45]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// 全局配置
const client = createOpencodeClient({
  baseUrl: "http://localhost:4096",
  throwOnError: true,  // 所有请求出错都抛出异常
})

// 或在单个请求中使用
const result = await client.session.get({
  path: { id: sessionId },
  throwOnError: true,
})`)])],-1)),t[46]||(t[46]=e("h3",{id:"检查返回值",tabindex:"-1"},[n("检查返回值 "),e("a",{class:"header-anchor",href:"#检查返回值","aria-label":"Permalink to “检查返回值”"},"​")],-1)),t[47]||(t[47]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`const result = await client.session.get({
  path: { id: sessionId },
})

if (result.error) {
  console.error("错误:", result.error)
} else {
  console.log("会话:", result.data)
}`)])],-1)),t[48]||(t[48]=e("hr",null,null,-1)),t[49]||(t[49]=e("h2",{id:"实战示例-批量代码审查",tabindex:"-1"},[n("实战示例：批量代码审查 "),e("a",{class:"header-anchor",href:"#实战示例-批量代码审查","aria-label":"Permalink to “实战示例：批量代码审查”"},"​")],-1)),t[50]||(t[50]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`import { createOpencode } from "@opencode-ai/sdk"
import { readdir } from "fs/promises"

async function batchCodeReview(directory: string) {
  const { client, server } = await createOpencode({
    config: {
      model: "anthropic/claude-opus-4-5-thinking",
    },
  })

  try {
    // 创建会话
    const session = await client.session.create({
      body: { title: \`批量代码审查 - \${directory}\` },
    })
    const sessionId = session.data!.id

    // 查找所有 TypeScript 文件
    const files = await client.find.files({
      query: { query: "*.ts", type: "file", directory },
    })

    console.log(\`找到 \${files.data?.length} 个文件\`)

    // 逐个审查
    for (const file of files.data ?? []) {
      console.log(\`审查: \${file}\`)
      
      await client.session.prompt({
        path: { id: sessionId },
        body: {
          parts: [{ 
            type: "text", 
            text: \`请审查文件 \${file}，检查潜在问题和改进建议。\` 
          }],
        },
      })
    }

    console.log("审查完成！")
  } finally {
    server.close()
  }
}

batchCodeReview("./src")`)])],-1)),t[51]||(t[51]=o("",13))])}const C=a(p,[["render",u]]);export{k as __pageData,C as default};
