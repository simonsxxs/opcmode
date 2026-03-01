import{_ as a,I as r,c as s,o as l,a5 as n,J as i,j as t,a as d,bk as c}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.12b 插件进阶","description":"掌握所有事件钩子和功能钩子，创建自定义工具和认证插件，实现高级插件功能。","frontmatter":{"title":"5.12b 插件进阶","subtitle":"所有钩子类型与高级功能","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.12b","duration":"30 分钟","practice":"40 分钟","level":"进阶","description":"掌握所有事件钩子和功能钩子，创建自定义工具和认证插件，实现高级插件功能。","tags":["插件","钩子","高级功能"],"prerequisite":["5.12a 插件基础"]},"headers":[],"relativePath":"5-advanced/12b-plugins-advanced.md","filePath":"5-advanced/12b-plugins-advanced.md","lastUpdated":1772014034000}'),p={name:"5-advanced/12b-plugins-advanced.md"};function u(h,e,b,g,m,y){const o=r("AdInArticle");return l(),s("div",null,[e[0]||(e[0]=n('<h1 id="插件进阶" tabindex="-1">插件进阶 <a class="header-anchor" href="#插件进阶" aria-label="Permalink to “插件进阶”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：掌握所有钩子类型，实现高级插件功能。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+c+'" alt="5.12b 插件进阶学霸笔记" data-zoom-src="/images/5-advanced/plugins-advanced-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解事件钩子与功能钩子的区别</li><li>使用所有可用的钩子类型</li><li>创建自定义工具</li><li>实现认证插件</li></ul><hr><h2 id="钩子分类" tabindex="-1">钩子分类 <a class="header-anchor" href="#钩子分类" aria-label="Permalink to “钩子分类”">​</a></h2><p>OpenCode 插件有两类钩子：</p><table tabindex="0"><thead><tr><th>类型</th><th>特点</th><th>用途</th></tr></thead><tbody><tr><td><strong>事件钩子</strong></td><td>被动监听，不修改数据</td><td>日志、通知、统计</td></tr><tr><td><strong>功能钩子</strong></td><td>主动拦截，可修改数据</td><td>权限控制、参数修改、数据转换</td></tr></tbody></table><h3 id="事件钩子" tabindex="-1">事件钩子 <a class="header-anchor" href="#事件钩子" aria-label="Permalink to “事件钩子”">​</a></h3>',13)),i(o),e[1]||(e[1]=t("p",null,[d("使用 "),t("code",null,"event"),d(" 统一订阅所有事件：")],-1)),e[2]||(e[2]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
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
}`)])],-1)),e[6]||(e[6]=n('<hr><h2 id="事件类型" tabindex="-1">事件类型 <a class="header-anchor" href="#事件类型" aria-label="Permalink to “事件类型”">​</a></h2><p>所有事件通过 <code>event</code> 钩子订阅，按 <code>event.type</code> 区分：</p><h3 id="命令事件" tabindex="-1">命令事件 <a class="header-anchor" href="#命令事件" aria-label="Permalink to “命令事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>command.executed</code></td><td>斜杠命令执行后</td></tr></tbody></table><h3 id="文件事件" tabindex="-1">文件事件 <a class="header-anchor" href="#文件事件" aria-label="Permalink to “文件事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>file.edited</code></td><td>文件被编辑后</td></tr><tr><td><code>file.watcher.updated</code></td><td>文件监视器检测到变化</td></tr></tbody></table><h3 id="安装事件" tabindex="-1">安装事件 <a class="header-anchor" href="#安装事件" aria-label="Permalink to “安装事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>installation.updated</code></td><td>OpenCode 安装/更新后</td></tr></tbody></table><h3 id="lsp-事件" tabindex="-1">LSP 事件 <a class="header-anchor" href="#lsp-事件" aria-label="Permalink to “LSP 事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>lsp.client.diagnostics</code></td><td>LSP 诊断信息更新</td></tr><tr><td><code>lsp.updated</code></td><td>LSP 服务状态变化</td></tr></tbody></table><h3 id="消息事件" tabindex="-1">消息事件 <a class="header-anchor" href="#消息事件" aria-label="Permalink to “消息事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>message.part.removed</code></td><td>消息片段被删除</td></tr><tr><td><code>message.part.updated</code></td><td>消息片段被更新</td></tr><tr><td><code>message.removed</code></td><td>消息被删除</td></tr><tr><td><code>message.updated</code></td><td>消息被更新</td></tr></tbody></table><h3 id="权限事件" tabindex="-1">权限事件 <a class="header-anchor" href="#权限事件" aria-label="Permalink to “权限事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>permission.replied</code></td><td>用户响应权限请求</td></tr><tr><td><code>permission.updated</code></td><td>权限状态变化</td></tr></tbody></table><h3 id="服务器事件" tabindex="-1">服务器事件 <a class="header-anchor" href="#服务器事件" aria-label="Permalink to “服务器事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>server.connected</code></td><td>服务器连接成功</td></tr></tbody></table><h3 id="会话事件" tabindex="-1">会话事件 <a class="header-anchor" href="#会话事件" aria-label="Permalink to “会话事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>session.created</code></td><td>新会话创建</td></tr><tr><td><code>session.compacted</code></td><td>会话压缩完成</td></tr><tr><td><code>session.deleted</code></td><td>会话被删除</td></tr><tr><td><code>session.diff</code></td><td>会话差异生成</td></tr><tr><td><code>session.error</code></td><td>会话发生错误</td></tr><tr><td><code>session.idle</code></td><td>会话进入空闲状态（AI 响应完成）</td></tr><tr><td><code>session.status</code></td><td>会话状态变化</td></tr><tr><td><code>session.updated</code></td><td>会话信息更新</td></tr></tbody></table><h3 id="待办事件" tabindex="-1">待办事件 <a class="header-anchor" href="#待办事件" aria-label="Permalink to “待办事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>todo.updated</code></td><td>待办列表更新</td></tr></tbody></table><h3 id="tui-事件" tabindex="-1">TUI 事件 <a class="header-anchor" href="#tui-事件" aria-label="Permalink to “TUI 事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td><code>tui.prompt.append</code></td><td>提示框追加内容</td></tr><tr><td><code>tui.command.execute</code></td><td>TUI 命令执行</td></tr><tr><td><code>tui.toast.show</code></td><td>显示提示通知</td></tr></tbody></table><hr><h2 id="功能钩子详解" tabindex="-1">功能钩子详解 <a class="header-anchor" href="#功能钩子详解" aria-label="Permalink to “功能钩子详解”">​</a></h2><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to “config”">​</a></h3><p>配置加载后触发，可修改配置：</p>',27)),e[7]||(e[7]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
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
}`)])],-1)),e[12]||(e[12]=n('<p><strong>input 类型</strong>：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>sessionID</code></td><td><code>string</code></td><td>会话 ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>Agent 名称</td></tr><tr><td><code>model</code></td><td><code>{ providerID, modelID }</code></td><td>模型信息</td></tr><tr><td><code>messageID</code></td><td><code>string</code></td><td>消息 ID</td></tr><tr><td><code>variant</code></td><td><code>string</code></td><td>消息变体</td></tr></tbody></table><p><strong>output 类型</strong>：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>message</code></td><td><code>Message</code></td><td>消息对象（可修改）</td></tr><tr><td><code>parts</code></td><td><code>Part[]</code></td><td>消息内容部分（可修改）</td></tr></tbody></table><h3 id="chat-params" tabindex="-1">chat.params <a class="header-anchor" href="#chat-params" aria-label="Permalink to “chat.params”">​</a></h3><p>LLM 调用前触发，可修改模型参数：</p>',6)),e[13]||(e[13]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
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
}`)])],-1)),e[14]||(e[14]=n('<p><strong>input 类型</strong>：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>sessionID</code></td><td><code>string</code></td><td>会话 ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>Agent 名称</td></tr><tr><td><code>model</code></td><td><code>{ providerID, modelID }</code></td><td>模型信息</td></tr><tr><td><code>provider</code></td><td><code>Provider</code></td><td>提供商对象</td></tr><tr><td><code>message</code></td><td><code>Message</code></td><td>当前消息</td></tr></tbody></table><p><strong>output 类型</strong>（可修改）：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>temperature</code></td><td><code>number?</code></td><td>温度参数</td></tr><tr><td><code>topP</code></td><td><code>number?</code></td><td>Top-P 参数</td></tr><tr><td><code>topK</code></td><td><code>number?</code></td><td>Top-K 参数</td></tr><tr><td><code>options</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>自定义选项（作为 HTTP 头传递）</td></tr></tbody></table><h3 id="permission-ask" tabindex="-1">permission.ask <a class="header-anchor" href="#permission-ask" aria-label="Permalink to “permission.ask”">​</a></h3><p>权限请求时触发，可修改权限决策：</p>',6)),e[15]||(e[15]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
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
}`)])],-1)),e[19]||(e[19]=n('<p><strong>input 类型</strong>：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>tool</code></td><td><code>string</code></td><td>工具名称（如 <code>read</code>、<code>bash</code>、<code>write</code>）</td></tr><tr><td><code>sessionID</code></td><td><code>string</code></td><td>会话 ID</td></tr><tr><td><code>callID</code></td><td><code>string</code></td><td>工具调用 ID</td></tr></tbody></table><p><strong>output 类型</strong>（可修改）：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>args</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>工具参数（可修改或拦截）</td></tr></tbody></table><p><strong>抛出错误</strong>：抛出 <code>Error</code> 会阻止工具执行，错误信息返回给 LLM。</p><h3 id="tool-execute-after" tabindex="-1">tool.execute.after <a class="header-anchor" href="#tool-execute-after" aria-label="Permalink to “tool.execute.after”">​</a></h3><p>工具执行后触发，可修改输出：</p>',7)),e[20]||(e[20]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const MyPlugin: Plugin = async () => {
  return {
    "tool.execute.after": async (input, output) => {
      // input: { tool, sessionID, callID }
      // output: { title, output, metadata }
      
      // 添加执行时间戳
      output.metadata.executedAt = new Date().toISOString()
    },
  }
}`)])],-1)),e[21]||(e[21]=n('<p><strong>input 类型</strong>：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>tool</code></td><td><code>string</code></td><td>工具名称</td></tr><tr><td><code>sessionID</code></td><td><code>string</code></td><td>会话 ID</td></tr><tr><td><code>callID</code></td><td><code>string</code></td><td>工具调用 ID</td></tr></tbody></table><p><strong>output 类型</strong>（可修改）：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td><code>string</code></td><td>工具执行标题（显示在 UI 中）</td></tr><tr><td><code>output</code></td><td><code>string</code></td><td>工具输出内容（返回给 LLM）</td></tr><tr><td><code>metadata</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>元数据（可自由添加）</td></tr></tbody></table><hr><h2 id="实验性钩子" tabindex="-1">实验性钩子 <a class="header-anchor" href="#实验性钩子" aria-label="Permalink to “实验性钩子”">​</a></h2><blockquote><p>⚠️ <strong>警告</strong>：以下钩子以 <code>experimental.</code> 开头，API 可能在未来版本变化。</p></blockquote><h3 id="experimental-session-compacting" tabindex="-1">experimental.session.compacting <a class="header-anchor" href="#experimental-session-compacting" aria-label="Permalink to “experimental.session.compacting”">​</a></h3><p>会话压缩前触发，可自定义压缩上下文：</p>',9)),e[22]||(e[22]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`export const CompactionPlugin: Plugin = async () => {
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
}`)])],-1)),e[38]||(e[38]=n('<h3 id="tool-函数参数" tabindex="-1">tool 函数参数 <a class="header-anchor" href="#tool-函数参数" aria-label="Permalink to “tool 函数参数”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>description</code></td><td><code>string</code></td><td>工具功能描述，AI 根据此决定何时使用</td></tr><tr><td><code>args</code></td><td><code>Record&lt;string, ZodType&gt;</code></td><td>使用 Zod schema 定义参数</td></tr><tr><td><code>execute</code></td><td><code>(args, ctx) =&gt; Promise&lt;string&gt;</code></td><td>工具执行函数</td></tr></tbody></table><h3 id="toolcontext" tabindex="-1">ToolContext <a class="header-anchor" href="#toolcontext" aria-label="Permalink to “ToolContext”">​</a></h3><p><code>execute</code> 函数的第二个参数提供执行上下文：</p><table tabindex="0"><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>sessionID</code></td><td><code>string</code></td><td>当前会话 ID</td></tr><tr><td><code>messageID</code></td><td><code>string</code></td><td>当前消息 ID</td></tr><tr><td><code>agent</code></td><td><code>string</code></td><td>调用工具的 Agent 名称</td></tr><tr><td><code>abort</code></td><td><code>AbortSignal</code></td><td>中止信号，用于取消长时间操作</td></tr></tbody></table><h3 id="使用-abort-信号" tabindex="-1">使用 abort 信号 <a class="header-anchor" href="#使用-abort-信号" aria-label="Permalink to “使用 abort 信号”">​</a></h3>',6)),e[39]||(e[39]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`tool({
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
}`)])],-1)),e[47]||(e[47]=n('<h3 id="认证方法类型" tabindex="-1">认证方法类型 <a class="header-anchor" href="#认证方法类型" aria-label="Permalink to “认证方法类型”">​</a></h3><table tabindex="0"><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>api</code></td><td>API Key 方式，用户直接输入密钥</td></tr><tr><td><code>oauth</code></td><td>OAuth 方式，跳转浏览器授权</td></tr></tbody></table><h3 id="prompts-配置" tabindex="-1">prompts 配置 <a class="header-anchor" href="#prompts-配置" aria-label="Permalink to “prompts 配置”">​</a></h3><table tabindex="0"><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>text</code></td><td>文本输入框</td></tr><tr><td><code>select</code></td><td>下拉选择框</td></tr></tbody></table><p>每个 prompt 可以配置：</p><ul><li><code>key</code>：输入值的键名</li><li><code>message</code>：提示信息</li><li><code>validate</code>：验证函数</li><li><code>condition</code>：条件函数，决定是否显示此 prompt</li></ul><hr><h2 id="完整示例-时间追踪插件" tabindex="-1">完整示例：时间追踪插件 <a class="header-anchor" href="#完整示例-时间追踪插件" aria-label="Permalink to “完整示例：时间追踪插件”">​</a></h2>',8)),e[48]||(e[48]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`import type { Plugin } from "@opencode-ai/plugin"

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
}`)])],-1)),e[49]||(e[49]=n('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>钩子不触发</td><td>函数名拼写错误</td><td>使用 TypeScript 获得类型检查</td></tr><tr><td><code>output</code> 修改无效</td><td>返回了新对象而非修改原对象</td><td>直接修改 <code>output.xxx = ...</code></td></tr><tr><td>实验性钩子失效</td><td>版本更新后 API 变化</td><td>查看更新日志，调整代码</td></tr><tr><td>认证插件无效</td><td><code>provider</code> 名称不匹配</td><td>确保与配置中的提供商 ID 一致</td></tr><tr><td>abort 信号未响应</td><td>未检查 <code>ctx.abort.aborted</code></td><td>在长循环中定期检查</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>事件钩子与功能钩子的区别</li><li>所有可用的钩子类型及其用途</li><li>创建自定义工具（含 abort 信号处理）</li><li>实现认证插件</li></ol><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./12a-plugins-basics.html">5.12a 插件基础</a> - 插件安装和基本用法</li><li><a href="./10a-sdk-basics.html">5.10 SDK 开发</a> - 使用 SDK 客户端</li><li><a href="./13-custom-tools.html">5.13 自定义工具</a> - 更多工具开发示例</li><li><a href="./../appendix/ecosystem.html#插件">生态系统</a> - 社区插件示例</li></ul>',10))])}const f=a(p,[["render",u]]);export{P as __pageData,f as default};
