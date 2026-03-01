import{_ as a,I as s,c as r,o as d,a5 as o,j as e,J as p,a as t,b8 as i}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.7b MCP 进阶","description":"学习 MCP OAuth 认证、权限管理、常用服务集成，构建安全的扩展体系。","frontmatter":{"title":"5.7b MCP 进阶","subtitle":"OAuth、权限管理与常用服务","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.7b","duration":"20 分钟","practice":"20 分钟","level":"进阶","description":"学习 MCP OAuth 认证、权限管理、常用服务集成，构建安全的扩展体系。","tags":["MCP","OAuth","权限管理"],"prerequisite":["5.7a MCP 基础","5.5 权限管控"]},"headers":[],"relativePath":"5-advanced/07b-mcp-advanced.md","filePath":"5-advanced/07b-mcp-advanced.md","lastUpdated":1772014034000}'),m={name:"5-advanced/07b-mcp-advanced.md"};function u(c,n,g,b,y,C){const l=s("AdInArticle");return d(),r("div",null,[n[0]||(n[0]=o('<h1 id="_5-7b-mcp-进阶" tabindex="-1">5.7b MCP 进阶 <a class="header-anchor" href="#_5-7b-mcp-进阶" aria-label="Permalink to “5.7b MCP 进阶”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：掌握 OAuth 认证、权限管理和常用 MCP 服务配置。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+i+'" alt="MCP进阶学霸笔记" data-zoom-src="/images/5-advanced/07b-mcp-advanced-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>使用 OAuth 认证连接安全服务</li><li>管理 MCP 工具的权限和启用状态</li><li>在规则文件中集成 MCP 使用</li><li>配置常用 MCP 服务</li></ul><hr><h2 id="oauth-认证" tabindex="-1">OAuth 认证 <a class="header-anchor" href="#oauth-认证" aria-label="Permalink to “OAuth 认证”">​</a></h2><p>OpenCode 自动处理 OAuth 认证流程：</p><ol><li>检测到 401 响应，启动 OAuth 流程</li><li>使用 <strong>动态客户端注册 (RFC 7591)</strong>（如服务器支持）</li><li>Token 安全存储在 <code>~/.local/share/opencode/mcp-auth.json</code></li></ol><h3 id="自动认证" tabindex="-1">自动认证 <a class="header-anchor" href="#自动认证" aria-label="Permalink to “自动认证”">​</a></h3><p>大多数情况下无需特殊配置：</p>',14)),n[1]||(n[1]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "my-oauth-server": {
      "type": "remote",
      "url": "https://mcp.example.com/mcp"
    }
  }
}`)])],-1)),n[2]||(n[2]=e("p",null,"首次使用时 OpenCode 会自动提示认证。",-1)),n[3]||(n[3]=e("h3",{id:"预注册客户端",tabindex:"-1"},[t("预注册客户端 "),e("a",{class:"header-anchor",href:"#预注册客户端","aria-label":"Permalink to “预注册客户端”"},"​")],-1)),n[4]||(n[4]=e("p",null,"如果服务器不支持动态注册，需要配置客户端凭证：",-1)),n[5]||(n[5]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "my-oauth-server": {
      "type": "remote",
      "url": "https://mcp.example.com/mcp",
      "oauth": {
        "clientId": "{env:MY_MCP_CLIENT_ID}",
        "clientSecret": "{env:MY_MCP_CLIENT_SECRET}",
        "scope": "tools:read tools:execute"
      }
    }
  }
}`)])],-1)),n[6]||(n[6]=e("h3",{id:"管理命令",tabindex:"-1"},[t("管理命令 "),e("a",{class:"header-anchor",href:"#管理命令","aria-label":"Permalink to “管理命令”"},"​")],-1)),n[7]||(n[7]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 手动触发认证
opencode mcp auth my-oauth-server

# 查看所有服务器认证状态
opencode mcp auth list

# 列出所有 MCP 服务器
opencode mcp list

# 移除存储的凭据
opencode mcp logout my-oauth-server

# 调试连接和 OAuth 流程
opencode mcp debug my-oauth-server`)])],-1)),n[8]||(n[8]=e("h3",{id:"调试命令详解",tabindex:"-1"},[t("调试命令详解 "),e("a",{class:"header-anchor",href:"#调试命令详解","aria-label":"Permalink to “调试命令详解”"},"​")],-1)),n[9]||(n[9]=e("p",null,[t("当 MCP 连接出问题时，用 "),e("code",null,"debug"),t(" 命令诊断：")],-1)),n[10]||(n[10]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode mcp debug my-oauth-server")])],-1)),n[11]||(n[11]=e("p",null,[e("strong",null,"输出示例"),t("：")],-1)),n[12]||(n[12]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`MCP OAuth Debug

Server: my-oauth-server
URL: https://mcp.example.com/mcp
Auth status: ✓ authenticated
  Access token: eyJhbGciOiJSUzI1NiIs...
  Expires: 2026-02-15T12:00:00.000Z
  Refresh token: present

Testing connection...
HTTP response: 200 OK
✓ Server responded successfully`)])],-1)),n[13]||(n[13]=o('<p><strong>状态含义</strong>：</p><table tabindex="0"><thead><tr><th>状态</th><th>说明</th></tr></thead><tbody><tr><td><code>authenticated</code></td><td>已认证，可以正常使用</td></tr><tr><td><code>expired</code></td><td>Token 已过期，需要重新认证</td></tr><tr><td><code>not authenticated</code></td><td>未认证，需要运行 <code>opencode mcp auth</code></td></tr></tbody></table><h3 id="服务器状态图标" tabindex="-1">服务器状态图标 <a class="header-anchor" href="#服务器状态图标" aria-label="Permalink to “服务器状态图标”">​</a></h3><p><code>opencode mcp list</code> 输出中的图标含义：</p><table tabindex="0"><thead><tr><th>图标</th><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>✓</td><td>connected</td><td>已连接，工具可用</td></tr><tr><td>○</td><td>disabled</td><td>已禁用，<code>enabled: false</code></td></tr><tr><td>⚠</td><td>needs_auth</td><td>需要 OAuth 认证</td></tr><tr><td>✗</td><td>failed</td><td>连接失败，查看错误信息</td></tr></tbody></table><p><strong>示例输出</strong>：</p>',6)),n[14]||(n[14]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`MCP Servers

✓ filesystem connected
    npx -y @modelcontextprotocol/server-filesystem /projects
✓ context7 connected
    https://mcp.context7.com/mcp
○ disabled-server disabled
    npx -y some-command
✗ failed-server failed
    Connection timeout`)])],-1)),n[15]||(n[15]=e("h3",{id:"禁用-oauth",tabindex:"-1"},[t("禁用 OAuth "),e("a",{class:"header-anchor",href:"#禁用-oauth","aria-label":"Permalink to “禁用 OAuth”"},"​")],-1)),n[16]||(n[16]=e("p",null,"如果服务器使用 API Key 而非 OAuth：",-1)),n[17]||(n[17]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "my-api-key-server": {
      "type": "remote",
      "url": "https://mcp.example.com/mcp",
      "oauth": false,
      "headers": {
        "Authorization": "Bearer {env:MY_API_KEY}"
      }
    }
  }
}`)])],-1)),n[18]||(n[18]=e("hr",null,null,-1)),n[19]||(n[19]=e("h2",{id:"工具权限管理",tabindex:"-1"},[t("工具权限管理 "),e("a",{class:"header-anchor",href:"#工具权限管理","aria-label":"Permalink to “工具权限管理”"},"​")],-1)),p(l),n[20]||(n[20]=e("p",null,[t("MCP 工具注册时使用 "),e("code",null,"{服务器名}_{工具名}"),t(" 格式命名。")],-1)),n[21]||(n[21]=e("h3",{id:"全局禁用",tabindex:"-1"},[t("全局禁用 "),e("a",{class:"header-anchor",href:"#全局禁用","aria-label":"Permalink to “全局禁用”"},"​")],-1)),n[22]||(n[22]=e("p",null,[t("使用 "),e("code",null,"permission"),t(" 配置禁用 MCP 工具：")],-1)),n[23]||(n[23]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "my-mcp-foo": {
      "type": "local",
      "command": ["bun", "x", "my-mcp-command-foo"]
    },
    "my-mcp-bar": {
      "type": "local",
      "command": ["bun", "x", "my-mcp-command-bar"]
    }
  },
  "permission": {
    "my-mcp-foo_*": "deny"
  }
}`)])],-1)),n[24]||(n[24]=e("p",null,"使用通配符批量禁用：",-1)),n[25]||(n[25]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "my-mcp*": "deny"
  }
}`)])],-1)),n[26]||(n[26]=e("h3",{id:"按-agent-启用",tabindex:"-1"},[t("按 Agent 启用 "),e("a",{class:"header-anchor",href:"#按-agent-启用","aria-label":"Permalink to “按 Agent 启用”"},"​")],-1)),n[27]||(n[27]=e("p",null,"全局禁用后，在特定 Agent 中启用：",-1)),n[28]||(n[28]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "my-mcp": {
      "type": "local",
      "command": ["bun", "x", "my-mcp-command"]
    }
  },
  "permission": {
    "my-mcp*": "deny"
  },
  "agent": {
    "my-agent": {
      "permission": {
        "my-mcp*": "allow"
      }
    }
  }
}`)])],-1)),n[29]||(n[29]=o('<h3 id="通配符规则" tabindex="-1">通配符规则 <a class="header-anchor" href="#通配符规则" aria-label="Permalink to “通配符规则”">​</a></h3><ul><li><code>*</code> 匹配零个或多个任意字符</li><li><code>?</code> 匹配正好一个字符</li><li>其他字符字面匹配</li></ul><hr><h2 id="在规则文件中集成" tabindex="-1">在规则文件中集成 <a class="header-anchor" href="#在规则文件中集成" aria-label="Permalink to “在规则文件中集成”">​</a></h2><p>在 <code>AGENTS.md</code> 或 <code>.opencode/agents/*.md</code> 中配置默认使用 MCP：</p>',5)),n[30]||(n[30]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},"## MCP 使用规则\n\n当需要查询文档时，使用 `context7` 工具。\n\n当不确定如何实现某功能时，使用 `gh_grep` 搜索 GitHub 代码示例。")])],-1)),n[31]||(n[31]=e("p",null,"这样 AI 会自动选择合适的 MCP 工具，无需每次在提示词中指定。",-1)),n[32]||(n[32]=e("hr",null,null,-1)),n[33]||(n[33]=e("h2",{id:"工具自动发现与更新",tabindex:"-1"},[t("工具自动发现与更新 "),e("a",{class:"header-anchor",href:"#工具自动发现与更新","aria-label":"Permalink to “工具自动发现与更新”"},"​")],-1)),n[34]||(n[34]=e("h3",{id:"工具命名规则",tabindex:"-1"},[t("工具命名规则 "),e("a",{class:"header-anchor",href:"#工具命名规则","aria-label":"Permalink to “工具命名规则”"},"​")],-1)),n[35]||(n[35]=e("p",null,[t("MCP 工具注册时使用 "),e("code",null,"{服务器名}_{工具名}"),t(" 格式：")],-1)),n[36]||(n[36]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`filesystem     服务器的 read_file 工具 → filesystem_read_file
context7 服务器的 search 工具  → context7_search`)])],-1)),n[37]||(n[37]=o('<h3 id="自动发现机制" tabindex="-1">自动发现机制 <a class="header-anchor" href="#自动发现机制" aria-label="Permalink to “自动发现机制”">​</a></h3><p>配置 MCP 服务器后，OpenCode 会<strong>自动发现</strong>服务器提供的所有工具：</p><ol><li>连接到 MCP 服务器</li><li>调用 <code>listTools</code> 获取工具列表</li><li>将工具转换为 OpenCode 可用格式</li><li>添加到当前会话的工具集中</li></ol><h3 id="工具变更通知" tabindex="-1">工具变更通知 <a class="header-anchor" href="#工具变更通知" aria-label="Permalink to “工具变更通知”">​</a></h3><p>如果 MCP 服务器的工具列表发生变化（新增/删除工具），OpenCode 会<strong>自动接收通知并更新</strong>：</p><ul><li>服务器发送工具列表变更通知（<code>notifications/tools/list_changed</code>）</li><li>OpenCode 重新获取工具列表</li><li>无需重启 OpenCode</li></ul><p>这意味着：升级 MCP 服务器版本后，新工具会自动可用。</p><hr><h2 id="常用-mcp-推荐" tabindex="-1">常用 MCP 推荐 <a class="header-anchor" href="#常用-mcp-推荐" aria-label="Permalink to “常用 MCP 推荐”">​</a></h2><h3 id="sentry" tabindex="-1">Sentry <a class="header-anchor" href="#sentry" aria-label="Permalink to “Sentry”">​</a></h3><p>连接 Sentry 监控平台，查询错误和问题：</p>',11)),n[38]||(n[38]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "sentry": {
      "type": "remote",
      "url": "https://mcp.sentry.dev/mcp",
      "oauth": {}
    }
  }
}`)])],-1)),n[39]||(n[39]=e("p",null,"首次使用需要认证：",-1)),n[40]||(n[40]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode mcp auth sentry")])],-1)),n[41]||(n[41]=e("p",null,"使用示例：",-1)),n[42]||(n[42]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use sentry 查看最近未解决的错误")])],-1)),n[43]||(n[43]=e("h3",{id:"context7",tabindex:"-1"},[t("Context7 "),e("a",{class:"header-anchor",href:"#context7","aria-label":"Permalink to “Context7”"},"​")],-1)),n[44]||(n[44]=e("p",null,"搜索各种库和框架的文档：",-1)),n[45]||(n[45]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}`)])],-1)),n[46]||(n[46]=e("p",null,"使用 API Key 获取更高速率限制：",-1)),n[47]||(n[47]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "{env:CONTEXT7_API_KEY}"
      }
    }
  }
}`)])],-1)),n[48]||(n[48]=e("p",null,"使用示例：",-1)),n[49]||(n[49]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use context7 查询 Cloudflare Worker 如何缓存 JSON 响应")])],-1)),n[50]||(n[50]=e("h3",{id:"grep-by-vercel",tabindex:"-1"},[t("Grep by Vercel "),e("a",{class:"header-anchor",href:"#grep-by-vercel","aria-label":"Permalink to “Grep by Vercel”"},"​")],-1)),n[51]||(n[51]=e("p",null,"搜索 GitHub 上的代码片段：",-1)),n[52]||(n[52]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "gh_grep": {
      "type": "remote",
      "url": "https://mcp.grep.app"
    }
  }
}`)])],-1)),n[53]||(n[53]=e("p",null,"使用示例：",-1)),n[54]||(n[54]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use the gh_grep tool 搜索 SST 框架中如何配置自定义域名")])],-1)),n[55]||(n[55]=e("h3",{id:"filesystem",tabindex:"-1"},[t("Filesystem "),e("a",{class:"header-anchor",href:"#filesystem","aria-label":"Permalink to “Filesystem”"},"​")],-1)),n[56]||(n[56]=e("p",null,"本地文件系统操作（沙箱模式）：",-1)),n[57]||(n[57]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "filesystem": {
      "type": "local",
      "command": [
        "npx", "-y", "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
    }
  }
}`)])],-1)),n[58]||(n[58]=e("h3",{id:"postgres",tabindex:"-1"},[t("Postgres "),e("a",{class:"header-anchor",href:"#postgres","aria-label":"Permalink to “Postgres”"},"​")],-1)),n[59]||(n[59]=e("p",null,"直接查询 PostgreSQL 数据库：",-1)),n[60]||(n[60]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "postgres": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-postgres"],
      "environment": {
        "POSTGRES_CONNECTION_STRING": "{env:DATABASE_URL}"
      }
    }
  }
}`)])],-1)),n[61]||(n[61]=e("h3",{id:"puppeteer",tabindex:"-1"},[t("Puppeteer "),e("a",{class:"header-anchor",href:"#puppeteer","aria-label":"Permalink to “Puppeteer”"},"​")],-1)),n[62]||(n[62]=e("p",null,"浏览器自动化和网页抓取：",-1)),n[63]||(n[63]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "puppeteer": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}`)])],-1)),n[64]||(n[64]=e("h3",{id:"memory",tabindex:"-1"},[t("Memory "),e("a",{class:"header-anchor",href:"#memory","aria-label":"Permalink to “Memory”"},"​")],-1)),n[65]||(n[65]=e("p",null,"持久化键值存储：",-1)),n[66]||(n[66]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "memory": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-memory"]
    }
  }
}`)])],-1)),n[67]||(n[67]=e("h3",{id:"sqlite",tabindex:"-1"},[t("SQLite "),e("a",{class:"header-anchor",href:"#sqlite","aria-label":"Permalink to “SQLite”"},"​")],-1)),n[68]||(n[68]=e("p",null,"轻量级数据库操作：",-1)),n[69]||(n[69]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "sqlite": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-sqlite", "/path/to/database.db"]
    }
  }
}`)])],-1)),n[70]||(n[70]=e("h3",{id:"slack",tabindex:"-1"},[t("Slack "),e("a",{class:"header-anchor",href:"#slack","aria-label":"Permalink to “Slack”"},"​")],-1)),n[71]||(n[71]=e("p",null,"与 Slack 工作空间交互：",-1)),n[72]||(n[72]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "slack": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-slack"],
      "environment": {
        "SLACK_BOT_TOKEN": "{env:SLACK_BOT_TOKEN}",
        "SLACK_TEAM_ID": "{env:SLACK_TEAM_ID}"
      }
    }
  }
}`)])],-1)),n[73]||(n[73]=o('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>MCP 工具不出现</td><td>全局禁用或 Agent 未配置</td><td>检查 <code>permission</code> 配置</td></tr><tr><td>OAuth 认证失败</td><td>Token 过期或凭据无效</td><td>运行 <code>opencode mcp logout &amp;&amp; opencode mcp auth</code></td></tr><tr><td>状态显示 <code>needs_client_registration</code></td><td>服务器不支持动态注册</td><td>在 <code>oauth</code> 中配置 <code>clientId</code></td></tr><tr><td>上下文快速耗尽</td><td>启用了太多 MCP 工具</td><td>禁用不常用的 MCP，使用按 Agent 启用</td></tr><tr><td>工具名称冲突</td><td>多个 MCP 有同名工具</td><td>使用 <code>{服务器名}_{工具名}</code> 格式区分</td></tr><tr><td>认证后仍显示 needs_auth</td><td>Token 存储失败</td><td>检查 <code>~/.local/share/opencode/mcp-auth.json</code> 权限</td></tr><tr><td><strong>命令格式错误</strong></td><td><code>command</code> 写成字符串而非数组</td><td>❌ <code>&quot;command&quot;: &quot;npx xxx&quot;</code> → ✓ <code>&quot;command&quot;: [&quot;npx&quot;, &quot;-y&quot;, &quot;xxx&quot;]</code></td></tr><tr><td><strong>URL 格式错误</strong></td><td>URL 缺少协议前缀</td><td>❌ <code>&quot;url&quot;: &quot;example.com/mcp&quot;</code> → ✓ <code>&quot;url&quot;: &quot;https://example.com/mcp&quot;</code></td></tr><tr><td><strong>浏览器无法自动打开</strong></td><td>在 SSH/远程环境下</td><td>OpenCode 会显示 URL，手动复制到浏览器打开</td></tr><tr><td><strong>超时时间太短</strong></td><td><code>timeout</code> 设为 1000ms</td><td>远程服务器建议 2000+-10000ms，默认 30000ms</td></tr><tr><td><strong>忘记启用服务器</strong></td><td><code>enabled: false</code> 但疑惑为什么不工作</td><td>默认就是启用的，检查是否误设为 <code>false</code></td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>OAuth 认证</strong>：自动处理或手动配置客户端凭证</li><li><strong>调试命令</strong>：<code>opencode mcp debug</code> 诊断连接问题</li><li><strong>状态图标</strong>：✓ ○ ⚠ ✗ 四种状态的含义</li><li><strong>权限管理</strong>：使用 <code>permission</code> 控制工具访问</li><li><strong>工具自动发现</strong>：工具命名规则和变更通知机制</li><li><strong>规则集成</strong>：在 AGENTS.md 中配置默认 MCP 使用</li><li><strong>常用 MCP</strong>：Sentry、Context7、Grep、Postgres 等</li></ol><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./07a-mcp-basics.html">5.7a MCP 基础</a> - MCP 入门配置</li><li><a href="./01a-config-basics.html">5.1 配置全解</a> - 配置文件基础</li><li><a href="./02a-agent-quickstart.html">5.2 自定义 Agent</a> - Agent 工具配置</li><li><a href="./05-permissions.html">5.5 权限管控</a> - 详细权限设置</li><li><a href="https://opencode.ai/docs/mcp-servers/" target="_blank" rel="noreferrer">官方 MCP 文档</a> - 英文原版</li></ul><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习 IDE 集成，让 OpenCode 与 VS Code、JetBrains 等编辑器无缝协作。</p></blockquote>',13))])}const P=a(m,[["render",u]]);export{v as __pageData,P as default};
