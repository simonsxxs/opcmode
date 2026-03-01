import{_ as l,I as r,c as a,o as i,a5 as n,j as t,J as s,a as e,bl as u}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.12c Hook 教程","description":"系统学习 OpenCode Hook（插件钩子/配置钩子），掌握事件订阅、工具拦截、LLM 参数改写、权限控制等关键能力。","frontmatter":{"title":"5.12c Hook 教程","subtitle":"插件钩子与配置钩子全解","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.12c","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"系统学习 OpenCode Hook（插件钩子/配置钩子），掌握事件订阅、工具拦截、LLM 参数改写、权限控制等关键能力。","tags":["钩子","Hook","插件","扩展"],"prerequisite":["5.12a 插件基础","5.12b 插件进阶（推荐先学）"]},"headers":[],"relativePath":"5-advanced/12c-hooks.md","filePath":"5-advanced/12c-hooks.md","lastUpdated":1772014034000}'),p={name:"5-advanced/12c-hooks.md"};function c(h,o,g,b,k,m){const d=r("AdInArticle");return i(),a("div",null,[o[0]||(o[0]=n('<h1 id="hook-教程" tabindex="-1">Hook 教程 <a class="header-anchor" href="#hook-教程" aria-label="Permalink to “Hook 教程”">​</a></h1><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+u+'" alt="Hook 教程学霸笔记" data-zoom-src="/images/5-advanced/hooks-notes.jpeg"></p><hr><blockquote><p>💡 <strong>一句话总结</strong>：Hook 是 OpenCode 的&quot;扩展接口&quot;，你可以在事件发生时执行逻辑，或在关键流程中拦截并修改数据。</p></blockquote><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><blockquote><p>不吹牛，只写「立刻能干」的事</p></blockquote><ul><li>知道 OpenCode 支持哪些 Hook（插件 Hook / 配置 Hook）</li><li>选择正确的 Hook：事件监听 vs 功能拦截</li><li>写出常见 Hook：通知、审计、安全拦截、参数调优、上下文压缩增强</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><blockquote><p>如果你正在经历这些，这课就是给你的</p></blockquote><ul><li>想在会话完成后自动运行脚本，但不知道该在哪里配置</li><li>想禁止 AI 读取某些敏感文件，找不到合适的地方拦截</li><li>看到别人提到&quot;Hook&quot;，不知道和插件是什么关系</li><li>想根据不同 Agent 自动调整 LLM 参数，不知道从哪里入手</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><blockquote><p>不是每天都用，但用到就很爽</p></blockquote><ul><li>当你需要： <ul><li>在特定事件发生时执行自定义逻辑（通知、日志、审计）</li><li>拦截工具调用并修改参数或阻止执行</li><li>修改 LLM 调用参数（温度、top_p 等）</li><li>自定义权限决策逻辑</li><li>增强会话压缩的上下文</li></ul></li><li>而且不想： <ul><li>修改 OpenCode 源码</li><li>每次都手动执行这些操作</li></ul></li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项，否则请先停下</p></blockquote><ul><li>[ ] 完成了 <a href="./12a-plugins-basics.html">5.12a 插件基础</a></li><li>[ ] 完成了 <a href="./12b-plugins-advanced.html">5.12b 插件进阶</a>（推荐）</li><li>[ ] 有一个运行中的 OpenCode 项目</li><li>[ ] 可以访问 <code>~/.config/opencode/</code> 或项目目录的 <code>.opencode/</code> 文件夹</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><blockquote><p>先讲「怎么想」，不讲命令</p></blockquote><ul><li>Hook 本质是一组&quot;可插拔的回调函数&quot;</li><li>OpenCode 在特定时机触发 Hook，把控制权交给你</li><li>有两种 Hook 途径： <ul><li><strong>插件 Hook</strong>：写代码，返回 hooks 对象（更强大、更灵活）</li><li><strong>配置 Hook</strong>：在 <code>opencode.json</code> 里配置命令（更简单，但功能有限）</li></ul></li><li>事件 Hook 被动监听，不做修改（日志、通知）</li><li>功能 Hook 主动拦截，可以修改数据（参数改写、权限控制）</li></ul><hr><h3 id="🆕-v1-1-65-新增-hook" tabindex="-1">🆕 v1.1.65 新增 Hook <a class="header-anchor" href="#🆕-v1-1-65-新增-hook" aria-label="Permalink to “🆕 v1.1.65 新增 Hook”">​</a></h3><table tabindex="0"><thead><tr><th>Hook</th><th>说明</th><th>用途</th></tr></thead><tbody><tr><td><code>tool.definition</code></td><td>修改工具定义</td><td>自定义工具描述、调整参数 Schema</td></tr><tr><td><code>command.execute.before</code></td><td>命令执行前拦截</td><td>修改命令参数、添加日志</td></tr><tr><td><code>shell.env</code></td><td>Shell 执行前</td><td>注入环境变量</td></tr></tbody></table><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2><blockquote><p>一步一步来，假设你会犯错</p></blockquote><h3 id="第-1-步-创建你的第一个插件-hook" tabindex="-1">第 1 步：创建你的第一个插件 Hook <a class="header-anchor" href="#第-1-步-创建你的第一个插件-hook" aria-label="Permalink to “第 1 步：创建你的第一个插件 Hook”">​</a></h3><p><strong>为什么</strong><br> 先做一个最简单的会话完成通知，验证整个流程能跑通。</p>',34)),o[1]||(o[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 在项目目录创建插件文件
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
}`)])],-1)),o[8]||(o[8]=n('<p><strong>你应该看到</strong>：<br> 尝试让 AI 读取 <code>.env</code> 文件时，会抛出错误并阻止执行。</p><hr><h3 id="第-3-步-根据-agent-调整-llm-参数" tabindex="-1">第 3 步：根据 Agent 调整 LLM 参数 <a class="header-anchor" href="#第-3-步-根据-agent-调整-llm-参数" aria-label="Permalink to “第 3 步：根据 Agent 调整 LLM 参数”">​</a></h3><p><strong>为什么</strong><br> 不同场景需要不同的参数配置，用 <code>chat.params</code> Hook 自动调整。</p>',4)),o[9]||(o[9]=t("div",{class:"language-ts"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"ts"),t("pre",null,[t("code",{"v-pre":""},`// .opencode/plugin/params.ts
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
}`)])],-1)),o[25]||(o[25]=n('<p><strong>你应该看到</strong>：<br> AI 调用工具时会使用修改后的描述和参数定义。</p><hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续；任一项失败，回到第 X 步重来</p></blockquote><ul><li>[ ] 插件文件放在 <code>.opencode/plugin/</code> 目录</li><li>[ ] OpenCode 启动时加载了插件（查看启动日志）</li><li>[ ] 会话完成后收到了通知</li><li>[ ] 尝试读取 <code>.env</code> 时抛出了错误</li><li>[ ] 不同 Agent 会话的参数有变化</li><li>[ ] 权限请求的行为符合预期</li><li>[ ] （v1.1.65+）工具定义被成功修改</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><blockquote><p>80% 的人会卡在这里</p></blockquote><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>插件未加载</td><td>文件扩展名错误</td><td>确保是 <code>.ts</code> 或 <code>.js</code> 文件</td></tr><tr><td><code>output</code> 修改无效</td><td>返回了新对象而非修改原对象</td><td>直接修改 <code>output.xxx = ...</code></td></tr><tr><td>事件没触发</td><td><code>event.type</code> 拼写错误</td><td>用 TypeScript 获得类型提示</td></tr><tr><td>实验性 Hook 失效</td><td>版本更新后 API 变化</td><td>查看更新日志，调整代码</td></tr><tr><td>配置 Hook 不生效</td><td>可能未实现执行逻辑</td><td>优先使用插件 Hook</td></tr><tr><td>多个插件冲突</td><td>Hook 重复定义</td><td>检查是否有重复的 Hook 实现</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>理解 Hook 的两种类型（插件 Hook / 配置 Hook）</li><li>选择合适的 Hook 类型解决问题</li><li>实现常见的 Hook 场景（通知、拦截、调参、权限、压缩）</li><li>遵循 Hook 编写的最佳实践</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习自定义工具，需要用到本课的 Hook 和插件知识。</p></blockquote><hr><h2 id="快速查阅-常用-hook" tabindex="-1">快速查阅：常用 Hook <a class="header-anchor" href="#快速查阅-常用-hook" aria-label="Permalink to “快速查阅：常用 Hook”">​</a></h2><blockquote><p>开发时最常用的 10 个 Hook，快速参考</p></blockquote><table tabindex="0"><thead><tr><th>Hook</th><th>触发时机</th><th>用途</th><th>是否可修改数据</th></tr></thead><tbody><tr><td><code>event</code></td><td>所有事件</td><td>统一订阅，日志/通知/统计</td><td>❌</td></tr><tr><td><code>config</code></td><td>配置加载后</td><td>初始化插件，修改配置</td><td>✅</td></tr><tr><td><code>tool.execute.before</code></td><td>工具执行前</td><td>拦截/修改参数，阻止执行</td><td>✅</td></tr><tr><td><code>tool.execute.after</code></td><td>工具执行后</td><td>记录结果，修改输出</td><td>✅</td></tr><tr><td><code>chat.message</code></td><td>新消息接收时</td><td>记录/修改消息内容</td><td>✅</td></tr><tr><td><code>chat.params</code></td><td>LLM 调用前</td><td>修改温度/Top-P/Top-K</td><td>✅</td></tr><tr><td><code>permission.ask</code></td><td>权限请求时</td><td>自动允许/拒绝</td><td>✅</td></tr><tr><td><code>tool</code></td><td>注册工具</td><td>添加自定义工具</td><td>-</td></tr><tr><td><code>experimental.session.compacting</code></td><td>会话压缩前</td><td>注入项目关键信息</td><td>✅</td></tr><tr><td><code>tool.definition</code></td><td>工具注册时</td><td>修改工具描述/参数</td><td>✅</td></tr><tr><td><code>command.execute.before</code></td><td>命令执行前</td><td>拦截/修改命令参数</td><td>✅</td></tr><tr><td><code>shell.env</code></td><td>Shell 执行前</td><td>注入环境变量</td><td>✅</td></tr><tr><td><code>auth</code></td><td>认证流程</td><td>自定义认证方式</td><td>-</td></tr></tbody></table><hr><h2 id="快速查阅-常用事件" tabindex="-1">快速查阅：常用事件 <a class="header-anchor" href="#快速查阅-常用事件" aria-label="Permalink to “快速查阅：常用事件”">​</a></h2><blockquote><p>开发时最常用的 10 个事件，快速参考</p></blockquote><table tabindex="0"><thead><tr><th>事件</th><th>说明</th><th>Hook 用途</th></tr></thead><tbody><tr><td><code>session.idle</code></td><td>会话完成（空闲）</td><td>发送通知、清理资源、记录耗时</td></tr><tr><td><code>session.created</code></td><td>新会话创建</td><td>初始化会话级状态</td></tr><tr><td><code>file.edited</code></td><td>文件被编辑</td><td>触发格式化、触发构建</td></tr><tr><td><code>message.updated</code></td><td>消息更新</td><td>记录对话历史、统计</td></tr><tr><td><code>tool.execute.after</code></td><td>工具执行后</td><td>记录日志、审计追踪</td></tr><tr><td><code>tool.execute.before</code></td><td>工具执行前</td><td>参数验证、权限检查</td></tr><tr><td><code>permission.replied</code></td><td>用户响应权限</td><td>记录权限决策</td></tr><tr><td><code>command.executed</code></td><td>命令执行后</td><td>命令审计</td></tr><tr><td><code>session.error</code></td><td>会话错误</td><td>错误上报、通知</td></tr><tr><td><code>server.connected</code></td><td>服务器连接</td><td>连接状态通知</td></tr></tbody></table><hr><h2 id="附录-源码参考" tabindex="-1">附录：源码参考 <a class="header-anchor" href="#附录-源码参考" aria-label="Permalink to “附录：源码参考”">​</a></h2>',26)),o[26]||(o[26]=t("details",null,[t("summary",null,[t("strong",null,"点击展开查看源码位置")]),t("table",{tabindex:"0"},[t("thead",null,[t("tr",null,[t("th",null,"功能"),t("th",null,"文件路径"),t("th",null,"行号")])]),t("tbody",null,[t("tr",null,[t("td",null,"Hook 类型定义"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/plugin/src/index.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/plugin/src/index.ts")])]),t("td",null,"148-231")]),t("tr",null,[t("td",null,[t("code",null,"tool.definition"),e(" Hook 定义")]),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/plugin/src/index.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/plugin/src/index.ts")])]),t("td",null,"227-230")]),t("tr",null,[t("td",null,[t("code",null,"tool.definition"),e(" Hook 触发")]),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/tool/registry.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/tool/registry.ts")])]),t("td",null,"157")]),t("tr",null,[t("td",null,"插件加载逻辑"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/plugin/index.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/plugin/index.ts")])]),t("td",null,"20-82")]),t("tr",null,[t("td",null,"插件目录扫描"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/config/config.ts")])]),t("td",null,"322-335")]),t("tr",null,[t("td",null,"插件去重逻辑"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/config/config.ts")])]),t("td",null,"369-387")]),t("tr",null,[t("td",null,"配置 Hook Schema"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/config/config.ts")])]),t("td",null,"1009-1030")])])]),t("p",null,[t("strong",null,"关键代码片段"),e("：")]),t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// Hook 类型定义
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
