import{_ as d,I as l,c as r,o as i,a5 as t,j as e,J as s,a as n,ba as p}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.8b ACP 协议","description":"通过 ACP 协议在 Zed、JetBrains、Neovim 等编辑器中使用 OpenCode。","frontmatter":{"title":"5.8b ACP 协议","subtitle":"Zed、JetBrains、Neovim 等编辑器集成","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.8b","duration":"15 分钟","practice":"20 分钟","level":"进阶","description":"通过 ACP 协议在 Zed、JetBrains、Neovim 等编辑器中使用 OpenCode。","tags":["ACP","Zed","JetBrains","Neovim"],"prerequisite":["5.8a VS Code 扩展"]},"headers":[],"relativePath":"5-advanced/08b-acp.md","filePath":"5-advanced/08b-acp.md","lastUpdated":1772014034000}'),c={name:"5-advanced/08b-acp.md"};function h(b,a,m,u,C,v){const o=l("AdInArticle");return i(),r("div",null,[a[0]||(a[0]=t('<h1 id="_5-8b-acp-协议" tabindex="-1">5.8b ACP 协议 <a class="header-anchor" href="#_5-8b-acp-协议" aria-label="Permalink to “5.8b ACP 协议”">​</a></h1><blockquote><p>通过 ACP 协议在 Zed、JetBrains、Neovim 等编辑器中使用 OpenCode。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+p+'" alt="ACP协议学霸笔记" data-zoom-src="/images/5-advanced/08b-acp-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解 ACP 协议是什么</li><li>在 Zed 中配置 OpenCode</li><li>在 JetBrains IDE 中配置 OpenCode</li><li>在 Neovim 中配置 OpenCode</li></ul><hr><h2 id="什么是-acp" tabindex="-1">什么是 ACP <a class="header-anchor" href="#什么是-acp" aria-label="Permalink to “什么是 ACP”">​</a></h2><p><strong>ACP</strong>（Agent Client Protocol）是一个开放协议，标准化代码编辑器和 AI 编程代理之间的通信。</p><ul><li>官网：<a href="https://agentclientprotocol.com" target="_blank" rel="noreferrer">agentclientprotocol.com</a></li><li>支持的编辑器列表：<a href="https://zed.dev/blog/acp-progress-report#available-now" target="_blank" rel="noreferrer">ACP 进度报告</a></li></ul><h3 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to “工作原理”">​</a></h3>',13)),a[1]||(a[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"编辑器 ←→ JSON-RPC (stdio) ←→ opencode acp")])],-1)),a[2]||(a[2]=e("p",null,[n("编辑器启动 "),e("code",null,"opencode acp"),n(" 作为子进程，通过 stdin/stdout 使用 nd-JSON（newline-delimited JSON）格式进行 JSON-RPC 通信。")],-1)),a[3]||(a[3]=e("hr",null,null,-1)),a[4]||(a[4]=e("h2",{id:"启动-acp-服务",tabindex:"-1"},[n("启动 ACP 服务 "),e("a",{class:"header-anchor",href:"#启动-acp-服务","aria-label":"Permalink to “启动 ACP 服务”"},"​")],-1)),a[5]||(a[5]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode acp")])],-1)),a[6]||(a[6]=t('<h3 id="命令参数" tabindex="-1">命令参数 <a class="header-anchor" href="#命令参数" aria-label="Permalink to “命令参数”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>--cwd</code></td><td>工作目录</td><td><code>--cwd /path/to/project</code></td></tr><tr><td><code>--port</code></td><td>监听端口</td><td><code>--port 4096</code></td></tr><tr><td><code>--hostname</code></td><td>监听主机名</td><td><code>--hostname 0.0.0.0</code></td></tr></tbody></table><blockquote><p>来源：<code>cli.mdx:481-487</code>、<code>acp.ts:16-20</code></p></blockquote><hr><h2 id="zed-配置" tabindex="-1">Zed 配置 <a class="header-anchor" href="#zed-配置" aria-label="Permalink to “Zed 配置”">​</a></h2><p>添加到 <a href="https://zed.dev" target="_blank" rel="noreferrer">Zed</a> 配置文件 <code>~/.config/zed/settings.json</code>：</p>',6)),a[7]||(a[7]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent_servers": {
    "OpenCode": {
      "command": "opencode",
      "args": ["acp"]
    }
  }
}`)])],-1)),a[8]||(a[8]=e("h3",{id:"使用方式",tabindex:"-1"},[n("使用方式 "),e("a",{class:"header-anchor",href:"#使用方式","aria-label":"Permalink to “使用方式”"},"​")],-1)),s(o),a[9]||(a[9]=e("ol",null,[e("li",null,"打开命令面板"),e("li",null,[n("执行 "),e("code",null,"agent: new thread")])],-1)),a[10]||(a[10]=e("h3",{id:"绑定快捷键-可选",tabindex:"-1"},[n("绑定快捷键（可选） "),e("a",{class:"header-anchor",href:"#绑定快捷键-可选","aria-label":"Permalink to “绑定快捷键（可选）”"},"​")],-1)),a[11]||(a[11]=e("p",null,[n("编辑 "),e("code",null,"keymap.json"),n("：")],-1)),a[12]||(a[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`[
  {
    "bindings": {
      "cmd-alt-o": [
        "agent::NewExternalAgentThread",
        {
          "agent": {
            "custom": {
              "name": "OpenCode",
              "command": {
                "command": "opencode",
                "args": ["acp"]
              }
            }
          }
        }
      ]
    }
  }
]`)])],-1)),a[13]||(a[13]=e("hr",null,null,-1)),a[14]||(a[14]=e("h2",{id:"jetbrains-ide-配置",tabindex:"-1"},[n("JetBrains IDE 配置 "),e("a",{class:"header-anchor",href:"#jetbrains-ide-配置","aria-label":"Permalink to “JetBrains IDE 配置”"},"​")],-1)),a[15]||(a[15]=e("p",null,"支持所有 JetBrains IDE（IntelliJ IDEA、WebStorm、PyCharm 等）。",-1)),a[16]||(a[16]=e("p",null,[n("根据 "),e("a",{href:"https://www.jetbrains.com/help/ai-assistant/acp.html",target:"_blank",rel:"noreferrer"},"官方文档"),n(" 创建 "),e("code",null,"acp.json"),n("：")],-1)),a[17]||(a[17]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent_servers": {
    "OpenCode": {
      "command": "/absolute/path/bin/opencode",
      "args": ["acp"]
    }
  }
}`)])],-1)),a[18]||(a[18]=e("blockquote",null,[e("p",null,[e("strong",null,"注意"),n("：JetBrains 需要使用 opencode 的"),e("strong",null,"绝对路径"),n("。")])],-1)),a[19]||(a[19]=e("h3",{id:"查找-opencode-路径",tabindex:"-1"},[n("查找 opencode 路径 "),e("a",{class:"header-anchor",href:"#查找-opencode-路径","aria-label":"Permalink to “查找 opencode 路径”"},"​")],-1)),a[20]||(a[20]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# macOS / Linux
which opencode

# Windows
where opencode`)])],-1)),a[21]||(a[21]=t('<h3 id="使用方式-1" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式-1" aria-label="Permalink to “使用方式”">​</a></h3><p>在 AI Chat 代理选择器中选择 &quot;OpenCode&quot;。</p><hr><h2 id="neovim-配置" tabindex="-1">Neovim 配置 <a class="header-anchor" href="#neovim-配置" aria-label="Permalink to “Neovim 配置”">​</a></h2><h3 id="avante-nvim" tabindex="-1">Avante.nvim <a class="header-anchor" href="#avante-nvim" aria-label="Permalink to “Avante.nvim”">​</a></h3><p>添加到 <a href="https://github.com/yetone/avante.nvim" target="_blank" rel="noreferrer">Avante.nvim</a> 配置：</p>',6)),a[22]||(a[22]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`{
  acp_providers = {
    ["opencode"] = {
      command = "opencode",
      args = { "acp" }
    }
  }
}`)])],-1)),a[23]||(a[23]=e("p",null,"如需传递环境变量：",-1)),a[24]||(a[24]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`{
  acp_providers = {
    ["opencode"] = {
      command = "opencode",
      args = { "acp" },
      env = {
        OPENCODE_API_KEY = os.getenv("OPENCODE_API_KEY")
      }
    }
  }
}`)])],-1)),a[25]||(a[25]=e("h3",{id:"codecompanion-nvim",tabindex:"-1"},[n("CodeCompanion.nvim "),e("a",{class:"header-anchor",href:"#codecompanion-nvim","aria-label":"Permalink to “CodeCompanion.nvim”"},"​")],-1)),a[26]||(a[26]=e("p",null,[n("添加到 "),e("a",{href:"https://github.com/olimorris/codecompanion.nvim",target:"_blank",rel:"noreferrer"},"CodeCompanion.nvim"),n(" 配置：")],-1)),a[27]||(a[27]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`require("codecompanion").setup({
  strategies = {
    chat = {
      adapter = {
        name = "opencode",
        model = "claude-sonnet-4",
      },
    },
  },
})`)])],-1)),a[28]||(a[28]=t('<p>如需传递环境变量，请参考 <a href="https://codecompanion.olimorris.dev/configuration/adapters#environment-variables-setting-an-api-key" target="_blank" rel="noreferrer">CodeCompanion 文档</a>。</p><hr><h2 id="支持的功能" tabindex="-1">支持的功能 <a class="header-anchor" href="#支持的功能" aria-label="Permalink to “支持的功能”">​</a></h2><p>通过 ACP 使用 OpenCode，功能与终端版完全相同：</p><table tabindex="0"><thead><tr><th>功能</th><th>支持</th></tr></thead><tbody><tr><td>内置工具（文件操作、终端命令等）</td><td>✅</td></tr><tr><td>自定义工具和斜杠命令</td><td>✅</td></tr><tr><td>MCP 服务器</td><td>✅</td></tr><tr><td><code>AGENTS.md</code> 项目规则</td><td>✅</td></tr><tr><td>自定义格式化器</td><td>✅</td></tr><tr><td>Agent 和权限系统</td><td>✅</td></tr></tbody></table><h3 id="不支持的功能" tabindex="-1">不支持的功能 <a class="header-anchor" href="#不支持的功能" aria-label="Permalink to “不支持的功能”">​</a></h3><p>以下 TUI 专用命令在 ACP 模式下不可用：</p><ul><li><code>/undo</code> - 撤销消息</li><li><code>/redo</code> - 重做消息</li></ul><blockquote><p>来源：<code>acp.mdx:147-149</code></p></blockquote><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>JetBrains 找不到命令</td><td>使用相对路径</td><td>改用 opencode 绝对路径</td></tr><tr><td>Zed 无响应</td><td>opencode 未安装或不在 PATH</td><td>确认 <code>which opencode</code> 返回正确路径</td></tr><tr><td>Neovim 环境变量无效</td><td>未正确传递 env</td><td>使用 <code>env = { ... }</code> 配置</td></tr><tr><td><code>/undo</code> 不工作</td><td>ACP 不支持此命令</td><td>这是预期行为，使用编辑器自带的撤销功能</td></tr></tbody></table><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./08a-ide-vscode.html">5.8a VS Code 扩展</a> - VS Code/Cursor 扩展安装</li><li><a href="./../appendix/cli.html">速查/CLI 参考</a> - 完整命令行选项</li><li><a href="https://agentclientprotocol.com" target="_blank" rel="noreferrer">ACP 官网</a> - 协议规范</li></ul><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>ACP 协议的基本概念</li><li>Zed 编辑器配置（settings.json + keymap）</li><li>JetBrains IDE 配置（需要绝对路径）</li><li>Neovim 配置（Avante.nvim、CodeCompanion.nvim）</li><li>ACP 模式的功能限制</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习远程模式，在服务器上运行 OpenCode 并通过 Web 界面访问。</p></blockquote>',22))])}const A=d(c,[["render",h]]);export{P as __pageData,A as default};
