import{_ as a,I as s,c as r,o as d,a5 as o,j as e,J as p,a as t,b8 as i}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.7b MCP 进阶","description":"学习 MCP OAuth 认证、权限管理、常用服务集成，构建安全的扩展体系。","frontmatter":{"title":"5.7b MCP 进阶","subtitle":"OAuth、权限管理与常用服务","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.7b","duration":"20 分钟","practice":"20 分钟","level":"进阶","description":"学习 MCP OAuth 认证、权限管理、常用服务集成，构建安全的扩展体系。","tags":["MCP","OAuth","权限管理"],"prerequisite":["5.7a MCP 基础","5.5 权限管控"]},"headers":[],"relativePath":"5-advanced/07b-mcp-advanced.md","filePath":"5-advanced/07b-mcp-advanced.md","lastUpdated":1772014034000}'),m={name:"5-advanced/07b-mcp-advanced.md"};function u(c,n,g,b,y,C){const l=s("AdInArticle");return d(),r("div",null,[n[0]||(n[0]=o("",14)),n[1]||(n[1]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
✓ Server responded successfully`)])],-1)),n[13]||(n[13]=o("",6)),n[14]||(n[14]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`MCP Servers

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
}`)])],-1)),n[29]||(n[29]=o("",5)),n[30]||(n[30]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},"## MCP 使用规则\n\n当需要查询文档时，使用 `context7` 工具。\n\n当不确定如何实现某功能时，使用 `gh_grep` 搜索 GitHub 代码示例。")])],-1)),n[31]||(n[31]=e("p",null,"这样 AI 会自动选择合适的 MCP 工具，无需每次在提示词中指定。",-1)),n[32]||(n[32]=e("hr",null,null,-1)),n[33]||(n[33]=e("h2",{id:"工具自动发现与更新",tabindex:"-1"},[t("工具自动发现与更新 "),e("a",{class:"header-anchor",href:"#工具自动发现与更新","aria-label":"Permalink to “工具自动发现与更新”"},"​")],-1)),n[34]||(n[34]=e("h3",{id:"工具命名规则",tabindex:"-1"},[t("工具命名规则 "),e("a",{class:"header-anchor",href:"#工具命名规则","aria-label":"Permalink to “工具命名规则”"},"​")],-1)),n[35]||(n[35]=e("p",null,[t("MCP 工具注册时使用 "),e("code",null,"{服务器名}_{工具名}"),t(" 格式：")],-1)),n[36]||(n[36]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`filesystem     服务器的 read_file 工具 → filesystem_read_file
context7 服务器的 search 工具  → context7_search`)])],-1)),n[37]||(n[37]=o("",11)),n[38]||(n[38]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),n[73]||(n[73]=o("",13))])}const P=a(m,[["render",u]]);export{v as __pageData,P as default};
