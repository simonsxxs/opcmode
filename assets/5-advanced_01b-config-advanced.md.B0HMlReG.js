import{_ as a,I as r,c as l,o as s,a5 as o,J as i,j as t,a as d,aX as c}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.1b 配置进阶","description":"掌握 OpenCode 的全部配置项，打造完全定制化的开发环境和 AI 工具。","frontmatter":{"title":"5.1b 配置进阶","subtitle":"opencode.json 完整参考","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.1b","duration":"20 分钟","level":"进阶","description":"掌握 OpenCode 的全部配置项，打造完全定制化的开发环境和 AI 工具。","tags":["配置","JSON","进阶"],"prerequisite":["5.1a 配置基础"]},"headers":[],"relativePath":"5-advanced/01b-config-advanced.md","filePath":"5-advanced/01b-config-advanced.md","lastUpdated":1772014034000}'),p={name:"5-advanced/01b-config-advanced.md"};function u(m,e,h,b,g,_){const n=r("AdInArticle");return s(),l("div",null,[e[0]||(e[0]=o('<h1 id="_5-1b-配置进阶" tabindex="-1">5.1b 配置进阶 <a class="header-anchor" href="#_5-1b-配置进阶" aria-label="Permalink to “5.1b 配置进阶”">​</a></h1><blockquote><p>掌握 OpenCode 的全部配置项，打造完全定制化的开发环境。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+c+'" alt="配置进阶学霸笔记" data-zoom-src="/images/5-advanced/config-advanced-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>配置界面（TUI、快捷键、服务器）</li><li>配置行为（分享、压缩、监视器）</li><li>配置功能（Provider、工具、权限、Agent、命令、MCP 等）</li><li>使用实验性功能</li><li>为模型配置自定义 API URL</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>想自定义快捷键</li><li>想控制 AI 能用哪些工具</li><li>想批量禁用某些 MCP 工具</li><li>想为模型配置私有部署的 API</li><li>想知道还有什么隐藏配置</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：完全掌控 OpenCode 的行为</li><li>而且不想：被默认配置限制</li></ul><hr><h2 id="界面配置" tabindex="-1">界面配置 <a class="header-anchor" href="#界面配置" aria-label="Permalink to “界面配置”">​</a></h2>',16)),i(n),e[1]||(e[1]=t("h3",{id:"tui-配置",tabindex:"-1"},[d("TUI 配置 "),t("a",{class:"header-anchor",href:"#tui-配置","aria-label":"Permalink to “TUI 配置”"},"​")],-1)),e[2]||(e[2]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tui": {
    "scroll_speed": 3,
    "scroll_acceleration": {
      "enabled": true
    },
    "diff_style": "auto"
  }
}`)])],-1)),e[3]||(e[3]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>scroll_speed</code></td><td>滚动速度倍数（最小 0.001）</td><td>3</td></tr><tr><td><code>scroll_acceleration.enabled</code></td><td>启用 macOS 风格加速滚动</td><td>false</td></tr><tr><td><code>diff_style</code></td><td>差异显示样式</td><td><code>&quot;auto&quot;</code></td></tr></tbody></table><blockquote><p><code>scroll_acceleration.enabled</code> 优先于 <code>scroll_speed</code>。启用后会忽略 scroll_speed。</p></blockquote><p><code>diff_style</code> 选项：</p><ul><li><code>&quot;auto&quot;</code> - 根据终端宽度自适应</li><li><code>&quot;stacked&quot;</code> - 始终单列显示</li></ul><h3 id="keybinds-配置" tabindex="-1">Keybinds 配置 <a class="header-anchor" href="#keybinds-配置" aria-label="Permalink to “Keybinds 配置”">​</a></h3><p>自定义快捷键：</p>',6)),e[4]||(e[4]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n",
    "session_compact": "<leader>c",
    "model_list": "<leader>m",
    "agent_list": "<leader>a",
    "session_interrupt": "escape"
  }
}`)])],-1)),e[5]||(e[5]=t("blockquote",null,[t("p",null,[d("注意：配置键是 "),t("code",null,"keybinds"),d("（"),t("strong",null,"复数"),d("！），这与 permission/agent 用单数不同。")])],-1)),e[6]||(e[6]=t("h4",{id:"leader-键",tabindex:"-1"},[d("Leader 键 "),t("a",{class:"header-anchor",href:"#leader-键","aria-label":"Permalink to “Leader 键”"},"​")],-1)),e[7]||(e[7]=t("p",null,[d("大多数快捷键使用 "),t("code",null,"leader"),d(" 键前缀，避免与终端冲突：")],-1)),e[8]||(e[8]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "ctrl+x"
  }
}`)])],-1)),e[9]||(e[9]=o('<p>默认 <code>ctrl+x</code>。按下 leader 键后再按快捷键，如 <code>ctrl+x</code> 然后 <code>n</code> 创建新会话。</p><h4 id="禁用快捷键" tabindex="-1">禁用快捷键 <a class="header-anchor" href="#禁用快捷键" aria-label="Permalink to “禁用快捷键”">​</a></h4><p>将值设为 <code>&quot;none&quot;</code> 禁用：</p>',3)),e[10]||(e[10]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "session_compact": "none"
  }
}`)])],-1)),e[11]||(e[11]=o('<h4 id="常用快捷键" tabindex="-1">常用快捷键 <a class="header-anchor" href="#常用快捷键" aria-label="Permalink to “常用快捷键”">​</a></h4><table tabindex="0"><thead><tr><th>配置键</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>app_exit</code></td><td><code>ctrl+c,ctrl+d,&lt;leader&gt;q</code></td><td>退出应用</td></tr><tr><td><code>session_new</code></td><td><code>&lt;leader&gt;n</code></td><td>新建会话</td></tr><tr><td><code>session_list</code></td><td><code>&lt;leader&gt;l</code></td><td>会话列表</td></tr><tr><td><code>session_interrupt</code></td><td><code>escape</code></td><td>中断当前操作</td></tr><tr><td><code>session_compact</code></td><td><code>&lt;leader&gt;c</code></td><td>压缩会话</td></tr><tr><td><code>model_list</code></td><td><code>&lt;leader&gt;m</code></td><td>模型列表</td></tr><tr><td><code>agent_list</code></td><td><code>&lt;leader&gt;a</code></td><td>Agent 列表</td></tr><tr><td><code>agent_cycle</code></td><td><code>tab</code></td><td>切换 Agent</td></tr><tr><td><code>command_list</code></td><td><code>ctrl+p</code></td><td>命令列表</td></tr><tr><td><code>messages_undo</code></td><td><code>&lt;leader&gt;u</code></td><td>撤销消息</td></tr><tr><td><code>messages_redo</code></td><td><code>&lt;leader&gt;r</code></td><td>重做消息</td></tr></tbody></table><p>完整快捷键列表见 <a href="./../appendix/keybinds.html">速查/快捷键</a>。</p><h3 id="server-配置" tabindex="-1">Server 配置 <a class="header-anchor" href="#server-配置" aria-label="Permalink to “Server 配置”">​</a></h3><p>配置 <code>opencode serve</code> 和 <code>opencode web</code> 命令的服务器：</p>',5)),e[12]||(e[12]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "server": {
    "port": 4096,
    "hostname": "0.0.0.0",
    "mdns": true,
    "mdnsDomain": "opencode.local",
    "cors": ["http://localhost:5173"]
  }
}`)])],-1)),e[13]||(e[13]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>port</code></td><td>监听端口</td></tr><tr><td><code>hostname</code></td><td>监听地址（启用 mdns 时默认 <code>0.0.0.0</code>）</td></tr><tr><td><code>mdns</code></td><td>启用 mDNS 服务发现（局域网设备可发现）</td></tr><tr><td><code>mdnsDomain</code></td><td>mDNS 服务的自定义域名（默认 <code>opencode.local</code>）</td></tr><tr><td><code>cors</code></td><td>允许的 CORS 来源列表</td></tr></tbody></table><hr><h2 id="行为配置" tabindex="-1">行为配置 <a class="header-anchor" href="#行为配置" aria-label="Permalink to “行为配置”">​</a></h2><h3 id="share-配置" tabindex="-1">Share 配置 <a class="header-anchor" href="#share-配置" aria-label="Permalink to “Share 配置”">​</a></h3><p>控制会话分享行为：</p>',5)),e[14]||(e[14]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "share": "manual"
}`)])],-1)),e[15]||(e[15]=o('<table tabindex="0"><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td><code>&quot;manual&quot;</code></td><td>手动分享（默认），使用 <code>/share</code> 命令</td></tr><tr><td><code>&quot;auto&quot;</code></td><td>自动分享新会话</td></tr><tr><td><code>&quot;disabled&quot;</code></td><td>禁用分享功能</td></tr></tbody></table><h3 id="compaction-配置" tabindex="-1">Compaction 配置 <a class="header-anchor" href="#compaction-配置" aria-label="Permalink to “Compaction 配置”">​</a></h3><p>控制上下文压缩行为：</p>',3)),e[16]||(e[16]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "compaction": {
    "auto": true,
    "prune": true,
    "reserved": 10000
  }
}`)])],-1)),e[17]||(e[17]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>auto</code></td><td>上下文满时自动压缩</td><td>true</td></tr><tr><td><code>prune</code></td><td>删除旧工具输出节省 token</td><td>true</td></tr><tr><td><code>reserved</code></td><td>压缩时的 Token 缓冲区，预留足够窗口避免溢出</td><td>-</td></tr></tbody></table><h3 id="watcher-配置" tabindex="-1">Watcher 配置 <a class="header-anchor" href="#watcher-配置" aria-label="Permalink to “Watcher 配置”">​</a></h3><p>配置文件监视器忽略模式：</p>',3)),e[18]||(e[18]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "watcher": {
    "ignore": ["node_modules/**", "dist/**", ".git/**", "*.log"]
  }
}`)])],-1)),e[19]||(e[19]=t("p",null,"使用 glob 语法排除噪声目录，减少文件监视开销。",-1)),e[20]||(e[20]=t("h3",{id:"instructions-配置",tabindex:"-1"},[d("Instructions 配置 "),t("a",{class:"header-anchor",href:"#instructions-配置","aria-label":"Permalink to “Instructions 配置”"},"​")],-1)),e[21]||(e[21]=t("p",null,"指定额外的指令文件（与 AGENTS.md 合并）：",-1)),e[22]||(e[22]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "instructions": [
    "CONTRIBUTING.md",
    "docs/guidelines.md",
    ".cursor/rules/*.md",
    "packages/*/AGENTS.md"
  ]
}`)])],-1)),e[23]||(e[23]=o('<p>支持 glob 模式。适用于：</p><ul><li>复用现有规则文件（如 Cursor 的 rules）</li><li>共享团队编码规范</li><li>monorepo 中引入子项目规则</li></ul><hr><h2 id="功能配置" tabindex="-1">功能配置 <a class="header-anchor" href="#功能配置" aria-label="Permalink to “功能配置”">​</a></h2><h3 id="provider-配置" tabindex="-1">Provider 配置 <a class="header-anchor" href="#provider-配置" aria-label="Permalink to “Provider 配置”">​</a></h3><p>配置 AI 提供商及其模型：</p>',6)),e[24]||(e[24]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}",
        "baseURL": "https://custom-anthropic.example.com/v1",
        "timeout": 600000,
        "setCacheKey": true
      },
      "models": {
        "claude-sonnet-4-5": {
          "provider": {
            "api": "https://custom-api.example.com/v1"
          }
        }
      }
    }
  }
}`)])],-1)),e[25]||(e[25]=o('<h4 id="provider-级别选项" tabindex="-1">Provider 级别选项 <a class="header-anchor" href="#provider-级别选项" aria-label="Permalink to “Provider 级别选项”">​</a></h4><table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>options.apiKey</code></td><td>API 密钥，支持 <code>{env:VAR_NAME}</code> 环境变量替换</td></tr><tr><td><code>options.baseURL</code></td><td>自定义 API 基础 URL（适用于代理或私有部署）</td></tr><tr><td><code>options.timeout</code></td><td>请求超时时间（毫秒），设为 <code>false</code> 禁用</td></tr><tr><td><code>options.setCacheKey</code></td><td>启用 Prompt Caching（仅 Anthropic）</td></tr><tr><td><code>options.enterpriseUrl</code></td><td>GitHub Enterprise URL（仅 Copilot）</td></tr></tbody></table><h4 id="模型级别自定义-api-url" tabindex="-1">模型级别自定义 API URL <a class="header-anchor" href="#模型级别自定义-api-url" aria-label="Permalink to “模型级别自定义 API URL”">​</a></h4><blockquote><p>v1.1.60+ 新增</p></blockquote><p>为单个模型配置独立的 API URL：</p>',5)),e[26]||(e[26]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "models": {
        "gpt-4o": {
          "provider": {
            "api": "https://api.custom-openai.com/v1"
          }
        }
      }
    }
  }
}`)])],-1)),e[27]||(e[27]=t("p",null,"适用场景：",-1)),e[28]||(e[28]=t("ul",null,[t("li",null,"使用同一 provider 的不同部署（如不同区域的 Azure OpenAI）"),t("li",null,"测试私有部署的模型"),t("li",null,"配置模型专用的代理服务器")],-1)),e[29]||(e[29]=t("h4",{id:"黑白名单",tabindex:"-1"},[d("黑白名单 "),t("a",{class:"header-anchor",href:"#黑白名单","aria-label":"Permalink to “黑白名单”"},"​")],-1)),e[30]||(e[30]=t("p",null,"控制可用模型：",-1)),e[31]||(e[31]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "whitelist": ["gpt-4o", "gpt-4o-mini"],
      "blacklist": ["gpt-3.5-turbo"]
    }
  }
}`)])],-1)),e[32]||(e[32]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>whitelist</code></td><td>只允许这些模型</td></tr><tr><td><code>blacklist</code></td><td>禁用这些模型</td></tr></tbody></table><blockquote><p><code>whitelist</code> 和 <code>blacklist</code> 互斥，同时存在时 <code>whitelist</code> 优先。</p></blockquote><h3 id="tools-配置" tabindex="-1">Tools 配置 <a class="header-anchor" href="#tools-配置" aria-label="Permalink to “Tools 配置”">​</a></h3><p>控制 LLM 可用的工具：</p>',4)),e[33]||(e[33]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "write": false,
    "bash": false,
    "webfetch": true
  }
}`)])],-1)),e[34]||(e[34]=t("p",null,[d("默认所有工具启用。设为 "),t("code",null,"false"),d(" 禁用。")],-1)),e[35]||(e[35]=t("h4",{id:"通配符",tabindex:"-1"},[d("通配符 "),t("a",{class:"header-anchor",href:"#通配符","aria-label":"Permalink to “通配符”"},"​")],-1)),e[36]||(e[36]=t("p",null,[t("code",null,"tools"),d(" 的 key 最终会转换为 "),t("code",null,"permission"),d(" 规则，因此通配符能通过权限系统间接生效：")],-1)),e[37]||(e[37]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "mymcp_*": false
  }
}`)])],-1)),e[38]||(e[38]=o('<p>禁用名为 <code>mymcp</code> 的 MCP 服务器的所有工具。</p><blockquote><p>推荐直接使用 <code>permission</code> 配置来实现通配符控制，提供更细粒度的 allow/ask/deny 选项。</p></blockquote><h4 id="tools-vs-permission" tabindex="-1">Tools vs Permission <a class="header-anchor" href="#tools-vs-permission" aria-label="Permalink to “Tools vs Permission”">​</a></h4><p><code>tools</code> 是遗留配置，会自动转换为 <code>permission</code>：</p><table tabindex="0"><thead><tr><th>tools 设置</th><th>等效 permission</th></tr></thead><tbody><tr><td><code>&quot;write&quot;: false</code></td><td><code>&quot;edit&quot;: &quot;deny&quot;</code></td></tr><tr><td><code>&quot;bash&quot;: false</code></td><td><code>&quot;bash&quot;: &quot;deny&quot;</code></td></tr></tbody></table><blockquote><p>推荐使用 <code>permission</code> 配置，提供更细粒度控制（allow/ask/deny）。详见 <a href="./05-permissions.html">5.5 权限管控</a>。</p></blockquote><h3 id="permission-配置" tabindex="-1">Permission 配置 <a class="header-anchor" href="#permission-配置" aria-label="Permalink to “Permission 配置”">​</a></h3><p>细粒度权限控制：</p>',8)),e[39]||(e[39]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "edit": "ask",
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm *": "deny"
    }
  }
}`)])],-1)),e[40]||(e[40]=o('<blockquote><p>注意：配置键是 <code>permission</code>（单数），不是 <code>permissions</code>。</p></blockquote><p>详细配置见 <a href="./05-permissions.html">5.5 权限管控</a>。</p><h3 id="agent-配置" tabindex="-1">Agent 配置 <a class="header-anchor" href="#agent-配置" aria-label="Permalink to “Agent 配置”">​</a></h3><p>配置 Agent 行为：</p>',4)),e[41]||(e[41]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "code-reviewer": {
      "description": "代码审查专家",
      "mode": "subagent",
      "model": "anthropic/claude-opus-4-5-thinking",
      "prompt": "你是代码审查专家...",
      
      // 高级配置
      "temperature": 0.3,
      "top_p": 0.9,
      "steps": 50,
      "color": "#FF5733",
      "hidden": true,
      
      // 权限
      "permission": {
        "edit": "deny"
      }
    }
  }
}`)])],-1)),e[42]||(e[42]=o('<blockquote><p>注意：配置键是 <code>agent</code>（单数），不是 <code>agents</code>。</p></blockquote><h4 id="高级配置字段" tabindex="-1">高级配置字段 <a class="header-anchor" href="#高级配置字段" aria-label="Permalink to “高级配置字段”">​</a></h4><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>temperature</code></td><td>number</td><td>创造性参数（0-1），越低越确定</td></tr><tr><td><code>top_p</code></td><td>number</td><td>核采样参数（0-1）</td></tr><tr><td><code>variant</code></td><td>string</td><td>默认模型变体（仅在使用该 Agent 配置的模型时生效）</td></tr><tr><td><code>steps</code></td><td>number</td><td>最大迭代步数</td></tr><tr><td><code>color</code></td><td>string</td><td>十六进制颜色（如 <code>#FF5733</code>）或主题色名（如 <code>primary</code>）</td></tr><tr><td><code>hidden</code></td><td>boolean</td><td>从 @ 菜单隐藏（仅 subagent 生效）</td></tr></tbody></table><blockquote><p><code>maxSteps</code> 已废弃，请使用 <code>steps</code>。</p></blockquote><p>详细配置见 <a href="./02a-agent-quickstart.html">5.2 自定义 Agent</a>。</p><h3 id="command-配置" tabindex="-1">Command 配置 <a class="header-anchor" href="#command-配置" aria-label="Permalink to “Command 配置”">​</a></h3><p>在配置文件中定义命令：</p>',7)),e[43]||(e[43]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "command": {
    "test": {
      "template": "运行测试并显示失败结果",
      "description": "运行测试",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking"
    },
    "component": {
      "template": "创建名为 $ARGUMENTS 的 React 组件",
      "description": "创建新组件"
    }
  }
}`)])],-1)),e[44]||(e[44]=o('<blockquote><p>注意：配置键是 <code>command</code>（单数），不是 <code>commands</code>。</p></blockquote><table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>template</code></td><td>命令模板，<code>$ARGUMENTS</code> 代表参数</td></tr><tr><td><code>description</code></td><td>命令描述</td></tr><tr><td><code>agent</code></td><td>使用的 Agent</td></tr><tr><td><code>model</code></td><td>使用的模型</td></tr><tr><td><code>subtask</code></td><td>是否作为子任务运行</td></tr></tbody></table><p>详细配置见 <a href="./04-commands.html">5.4 快捷命令</a>。</p><h3 id="formatter-配置" tabindex="-1">Formatter 配置 <a class="header-anchor" href="#formatter-配置" aria-label="Permalink to “Formatter 配置”">​</a></h3><p>配置代码格式化器：</p>',5)),e[45]||(e[45]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "formatter": {
    "prettier": {
      "disabled": true
    },
    "custom-prettier": {
      "command": ["npx", "prettier", "--write", "$FILE"],
      "environment": {
        "NODE_ENV": "development"
      },
      "extensions": [".js", ".ts", ".jsx", ".tsx"]
    }
  }
}`)])],-1)),e[46]||(e[46]=t("blockquote",null,[t("p",null,[d("注意：配置键是 "),t("code",null,"formatter"),d("（单数），不是 "),t("code",null,"formatters"),d("。")])],-1)),e[47]||(e[47]=t("p",null,[d("设为 "),t("code",null,"false"),d(" 完全禁用格式化：")],-1)),e[48]||(e[48]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "formatter": false
}`)])],-1)),e[49]||(e[49]=t("p",null,[d("详细配置见 "),t("a",{href:"./18-formatters.html"},"5.18 格式化器"),d("。")],-1)),e[50]||(e[50]=t("h3",{id:"mcp-配置",tabindex:"-1"},[d("MCP 配置 "),t("a",{class:"header-anchor",href:"#mcp-配置","aria-label":"Permalink to “MCP 配置”"},"​")],-1)),e[51]||(e[51]=t("p",null,"配置 MCP 服务器：",-1)),e[52]||(e[52]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "mcp": {
    "context7": {
      "type": "local",
      "command": ["npx", "-y", "@upstash/context7-mcp"]
    },
    "sentry": {
      "type": "remote",
      "url": "https://mcp.sentry.dev/mcp",
      "headers": {
        "Authorization": "Bearer your-token"
      },
      "oauth": {
        "clientId": "xxx",
        "clientSecret": "xxx",
        "scope": "read write"
      }
    }
  }
}`)])],-1)),e[53]||(e[53]=o('<p>远程 MCP 服务器支持 <code>headers</code>（自定义请求头）和 <code>oauth</code>（OAuth 认证）。<code>oauth</code> 设为 <code>false</code> 可禁用自动 OAuth 检测。</p><p>详细配置见 <a href="./07a-mcp-basics.html">5.7 MCP 扩展</a>。</p><h3 id="plugin-配置" tabindex="-1">Plugin 配置 <a class="header-anchor" href="#plugin-配置" aria-label="Permalink to “Plugin 配置”">​</a></h3><p>加载 npm 插件：</p>',4)),e[54]||(e[54]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "plugin": ["opencode-helicone-session", "@my-org/custom-plugin"]
}`)])],-1)),e[55]||(e[55]=o('<p>也可以在 <code>.opencode/plugin/</code> 目录放置本地插件（<code>.ts</code> 或 <code>.js</code> 文件）。</p><p>详细配置见 <a href="./12a-plugins-basics.html">5.12 插件系统</a>。</p><h3 id="lsp-配置" tabindex="-1">LSP 配置 <a class="header-anchor" href="#lsp-配置" aria-label="Permalink to “LSP 配置”">​</a></h3><p>配置 LSP 服务器：</p>',4)),e[56]||(e[56]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "lsp": {
    "typescript": {
      "disabled": true
    },
    "custom-lsp": {
      "command": ["my-lsp-server", "--stdio"],
      "extensions": [".custom", ".myext"],
      "env": {
        "DEBUG": "true"
      },
      "initialization": {
        "settings": {}
      }
    }
  }
}`)])],-1)),e[57]||(e[57]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>disabled</code></td><td>禁用此 LSP</td></tr><tr><td><code>command</code></td><td>启动命令</td></tr><tr><td><code>extensions</code></td><td>文件扩展名（自定义 LSP 必填）</td></tr><tr><td><code>env</code></td><td>环境变量</td></tr><tr><td><code>initialization</code></td><td>LSP 初始化配置</td></tr></tbody></table><p>设为 <code>false</code> 禁用所有 LSP：</p>',2)),e[58]||(e[58]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "lsp": false
}`)])],-1)),e[59]||(e[59]=t("p",null,[d("详细配置见 "),t("a",{href:"./19-lsp.html"},"5.19 LSP 服务器"),d("。")],-1)),e[60]||(e[60]=t("hr",null,null,-1)),e[61]||(e[61]=t("h2",{id:"实验性功能",tabindex:"-1"},[d("实验性功能 "),t("a",{class:"header-anchor",href:"#实验性功能","aria-label":"Permalink to “实验性功能”"},"​")],-1)),e[62]||(e[62]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true,
    "openTelemetry": true,
    "continue_loop_on_deny": false
  }
}`)])],-1)),e[63]||(e[63]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>batch_tool</code></td><td>启用批量工具</td></tr><tr><td><code>openTelemetry</code></td><td>启用 OpenTelemetry 追踪</td></tr><tr><td><code>disable_paste_summary</code></td><td>禁用粘贴大段文本时的自动摘要</td></tr><tr><td><code>primary_tools</code></td><td>仅限 Primary Agent 使用的工具列表</td></tr><tr><td><code>continue_loop_on_deny</code></td><td>工具被拒绝时继续循环</td></tr><tr><td><code>mcp_timeout</code></td><td>MCP 请求的全局超时时间（毫秒）</td></tr></tbody></table><blockquote><p>⚠️ 实验性功能可能随时变更或移除。</p></blockquote><div class="tip custom-block"><p class="custom-block-title">关于 Hook（事件钩子）</p><p>Hook 功能通过<strong>插件系统</strong>实现，不是 <code>experimental</code> 配置。详见 <a href="./12c-hooks.html">5.12c Hooks 机制</a>。</p></div><hr><h2 id="完整配置示例" tabindex="-1">完整配置示例 <a class="header-anchor" href="#完整配置示例" aria-label="Permalink to “完整配置示例”">​</a></h2>',5)),e[64]||(e[64]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  
  // === 模型 ===
  "model": "anthropic/claude-opus-4-5-thinking",
  "small_model": "anthropic/claude-haiku-4-5",
  "default_agent": "build",
  
  // === Provider ===
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}",
        "timeout": 600000,
        "setCacheKey": true
      }
    },
    "openai": {
      "models": {
        "gpt-4o": {
          "provider": {
            "api": "https://custom-api.example.com/v1"
          }
        }
      }
    }
  },
  "disabled_providers": ["gemini"],
  
  // === 用户 ===
  "username": "开发者",
  
  // === 界面 ===
  "theme": "catppuccin",
  "tui": {
    "scroll_speed": 3,
    "diff_style": "auto"
  },
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n"
  },
  
  // === 服务器 ===
  "server": {
    "port": 4096,
    "hostname": "localhost"
  },
  
  // === 行为 ===
  "share": "manual",
  "compaction": {
    "auto": true,
    "prune": true
  },
  "autoupdate": true,
  "watcher": {
    "ignore": ["node_modules/**", "dist/**"]
  },
  "instructions": ["CONTRIBUTING.md"],
  
  // === 权限 ===
  "permission": {
    "edit": "ask",
    "bash": {
      "*": "ask",
      "git *": "allow"
    }
  },
  
  // === Agent ===
  "agent": {
    "code-reviewer": {
      "description": "代码审查专家",
      "mode": "subagent",
      "temperature": 0.2,
      "permission": {
        "edit": "deny"
      }
    }
  },
  
  // === 命令 ===
  "command": {
    "test": {
      "template": "运行测试",
      "description": "运行测试套件"
    }
  },
  
  // === 格式化器 ===
  "formatter": {
    "prettier": {
      "disabled": false
    }
  },
  
  // === MCP ===
  "mcp": {
    "context7": {
      "type": "local",
      "command": ["npx", "-y", "@upstash/context7-mcp"]
    }
  }
}`)])],-1)),e[65]||(e[65]=o('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>用了 <code>keybind</code></td><td>键名错误</td><td>应为 <code>keybinds</code>（<strong>复数</strong>）</td></tr><tr><td>用了 <code>permissions</code></td><td>键名错误</td><td>应为 <code>permission</code>（单数）</td></tr><tr><td>用了 <code>agents</code></td><td>键名错误</td><td>应为 <code>agent</code>（单数）</td></tr><tr><td>用了 <code>commands</code></td><td>键名错误</td><td>应为 <code>command</code>（单数）</td></tr><tr><td>用了 <code>formatters</code></td><td>键名错误</td><td>应为 <code>formatter</code>（单数）</td></tr><tr><td>用了 <code>tui.theme</code></td><td>键名错误</td><td>应直接用 <code>theme</code></td></tr><tr><td>tools 配置不生效</td><td>遗留配置</td><td>推荐使用 <code>permission</code></td></tr><tr><td>baseURL 不生效</td><td>位置错误</td><td>应在 <code>provider.options.baseURL</code> 而非顶层</td></tr><tr><td>模型 API URL 不生效</td><td>字段错误</td><td>模型级别用 <code>provider.api</code>，Provider 级别用 <code>options.baseURL</code></td></tr><tr><td>快捷键冲突</td><td>与终端冲突</td><td>使用 leader 键前缀</td></tr><tr><td>LSP 自定义失败</td><td>缺少 extensions</td><td>自定义 LSP 必须指定 extensions</td></tr></tbody></table><hr><h2 id="配置键名速查表" tabindex="-1">配置键名速查表 <a class="header-anchor" href="#配置键名速查表" aria-label="Permalink to “配置键名速查表”">​</a></h2><table tabindex="0"><thead><tr><th>配置项</th><th>正确键名</th><th>常见错误</th></tr></thead><tbody><tr><td>Provider</td><td><code>provider</code></td><td><s>providers</s></td></tr><tr><td>Permission</td><td><code>permission</code></td><td><s>permissions</s></td></tr><tr><td>Agent</td><td><code>agent</code></td><td><s>agents</s></td></tr><tr><td>Command</td><td><code>command</code></td><td><s>commands</s></td></tr><tr><td>Formatter</td><td><code>formatter</code></td><td><s>formatters</s></td></tr><tr><td><strong>Keybinds</strong></td><td><code>keybinds</code></td><td><s>keybind</s></td></tr><tr><td>Theme</td><td><code>theme</code></td><td><s>tui.theme</s></td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>界面配置：TUI、快捷键、服务器</li><li>行为配置：分享、压缩、监视器、指令文件</li><li>功能配置：Provider、工具、权限、Agent、命令、格式化器、MCP、插件、LSP</li><li>实验性功能：批量工具、OpenTelemetry 等</li><li>自定义模型 API URL（v1.1.60+）</li></ol><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./01a-config-basics.html">5.1a 配置基础</a> - 核心配置</li><li><a href="./02a-agent-quickstart.html">5.2 自定义 Agent</a> - Agent 详细配置</li><li><a href="./04-commands.html">5.4 快捷命令</a> - 命令详细配置</li><li><a href="./05-permissions.html">5.5 权限管控</a> - 权限详细配置</li><li><a href="./07a-mcp-basics.html">5.7 MCP 扩展</a> - MCP 详细配置</li><li><a href="./../appendix/keybinds.html">速查/快捷键</a> - 完整快捷键列表</li><li><a href="./../appendix/config-ref.html">速查/配置参考</a> - 配置速查表</li></ul><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习如何创建自定义 Agent。</p></blockquote>',16))])}const P=a(p,[["render",u]]);export{y as __pageData,P as default};
