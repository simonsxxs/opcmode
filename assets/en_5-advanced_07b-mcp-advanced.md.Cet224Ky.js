import{_ as s,I as l,c as r,o as i,a5 as o,j as e,J as d,a as n,b8 as p}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"5.7b MCP Advanced","description":"Learn MCP OAuth authentication, permission management, and common service integration to build a secure extension system.","frontmatter":{"title":"5.7b MCP Advanced","subtitle":"OAuth, Permission Management & Common Services","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.7b","duration":"20 minutes","practice":"20 minutes","level":"Advanced","description":"Learn MCP OAuth authentication, permission management, and common service integration to build a secure extension system.","tags":["MCP","OAuth","Permission Management"],"prerequisite":["5.7a MCP Basics","5.5 Permissions"]},"headers":[],"relativePath":"en/5-advanced/07b-mcp-advanced.md","filePath":"en/5-advanced/07b-mcp-advanced.md","lastUpdated":1772014034000}'),c={name:"en/5-advanced/07b-mcp-advanced.md"};function m(u,t,g,h,b,y){const a=l("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=o('<h1 id="_5-7b-mcp-advanced" tabindex="-1">5.7b MCP Advanced <a class="header-anchor" href="#_5-7b-mcp-advanced" aria-label="Permalink to “5.7b MCP Advanced”">​</a></h1><blockquote><p>💡 <strong>TL;DR</strong>: Master OAuth authentication, permission management, and common MCP service configuration.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key concepts from this lesson:</p><img src="'+p+'" alt="MCP Advanced Notes" data-zoom-src="/images/5-advanced/07b-mcp-advanced-notes.jpeg"><hr><h2 id="what-you-ll-learn" tabindex="-1">What You&#39;ll Learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to “What You&#39;ll Learn”">​</a></h2><ul><li>Use OAuth authentication to connect to secure services</li><li>Manage MCP tool permissions and enable/disable status</li><li>Integrate MCP usage in rule files</li><li>Configure common MCP services</li></ul><hr><h2 id="oauth-authentication" tabindex="-1">OAuth Authentication <a class="header-anchor" href="#oauth-authentication" aria-label="Permalink to “OAuth Authentication”">​</a></h2><p>OpenCode automatically handles the OAuth authentication flow:</p><ol><li>Detects 401 response and initiates OAuth flow</li><li>Uses <strong>Dynamic Client Registration (RFC 7591)</strong> (if server supports it)</li><li>Tokens are securely stored in <code>~/.local/share/opencode/mcp-auth.json</code></li></ol><h3 id="automatic-authentication" tabindex="-1">Automatic Authentication <a class="header-anchor" href="#automatic-authentication" aria-label="Permalink to “Automatic Authentication”">​</a></h3><p>In most cases, no special configuration is needed:</p>',14)),t[1]||(t[1]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "my-oauth-server": {
      "type": "remote",
      "url": "https://mcp.example.com/mcp"
    }
  }
}`)])],-1)),t[2]||(t[2]=e("p",null,"OpenCode will automatically prompt for authentication on first use.",-1)),t[3]||(t[3]=e("h3",{id:"pre-registered-client",tabindex:"-1"},[n("Pre-registered Client "),e("a",{class:"header-anchor",href:"#pre-registered-client","aria-label":"Permalink to “Pre-registered Client”"},"​")],-1)),t[4]||(t[4]=e("p",null,"If the server doesn't support dynamic registration, configure client credentials:",-1)),t[5]||(t[5]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[6]||(t[6]=e("h3",{id:"management-commands",tabindex:"-1"},[n("Management Commands "),e("a",{class:"header-anchor",href:"#management-commands","aria-label":"Permalink to “Management Commands”"},"​")],-1)),t[7]||(t[7]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Manually trigger authentication
opencode mcp auth my-oauth-server

# View authentication status for all servers
opencode mcp auth list

# List all MCP servers
opencode mcp list

# Remove stored credentials
opencode mcp logout my-oauth-server

# Debug connection and OAuth flow
opencode mcp debug my-oauth-server`)])],-1)),t[8]||(t[8]=e("h3",{id:"debug-command-details",tabindex:"-1"},[n("Debug Command Details "),e("a",{class:"header-anchor",href:"#debug-command-details","aria-label":"Permalink to “Debug Command Details”"},"​")],-1)),t[9]||(t[9]=e("p",null,[n("When MCP connection issues arise, use the "),e("code",null,"debug"),n(" command to diagnose:")],-1)),t[10]||(t[10]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode mcp debug my-oauth-server")])],-1)),t[11]||(t[11]=e("p",null,[e("strong",null,"Sample Output"),n(":")],-1)),t[12]||(t[12]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`MCP OAuth Debug

Server: my-oauth-server
URL: https://mcp.example.com/mcp
Auth status: ✓ authenticated
  Access token: eyJhbGciOiJSUzI1NiIs...
  Expires: 2026-02-15T12:00:00.000Z
  Refresh token: present

Testing connection...
HTTP response: 200 OK
✓ Server responded successfully`)])],-1)),t[13]||(t[13]=o('<p><strong>Status Meanings</strong>:</p><table tabindex="0"><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td><code>authenticated</code></td><td>Authenticated, ready to use</td></tr><tr><td><code>expired</code></td><td>Token expired, needs re-authentication</td></tr><tr><td><code>not authenticated</code></td><td>Not authenticated, run <code>opencode mcp auth</code></td></tr></tbody></table><h3 id="server-status-icons" tabindex="-1">Server Status Icons <a class="header-anchor" href="#server-status-icons" aria-label="Permalink to “Server Status Icons”">​</a></h3><p>Icons in <code>opencode mcp list</code> output:</p><table tabindex="0"><thead><tr><th>Icon</th><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>✓</td><td>connected</td><td>Connected, tools available</td></tr><tr><td>○</td><td>disabled</td><td>Disabled via <code>enabled: false</code></td></tr><tr><td>⚠</td><td>needs_auth</td><td>Requires OAuth authentication</td></tr><tr><td>✗</td><td>failed</td><td>Connection failed, check error message</td></tr></tbody></table><p><strong>Sample Output</strong>:</p>',6)),t[14]||(t[14]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`MCP Servers

✓ filesystem connected
    npx -y @modelcontextprotocol/server-filesystem /projects
✓ context7 connected
    https://mcp.context7.com/mcp
○ disabled-server disabled
    npx -y some-command
✗ failed-server failed
    Connection timeout`)])],-1)),t[15]||(t[15]=e("h3",{id:"disabling-oauth",tabindex:"-1"},[n("Disabling OAuth "),e("a",{class:"header-anchor",href:"#disabling-oauth","aria-label":"Permalink to “Disabling OAuth”"},"​")],-1)),t[16]||(t[16]=e("p",null,"If the server uses API Key instead of OAuth:",-1)),t[17]||(t[17]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[18]||(t[18]=e("hr",null,null,-1)),t[19]||(t[19]=e("h2",{id:"tool-permission-management",tabindex:"-1"},[n("Tool Permission Management "),e("a",{class:"header-anchor",href:"#tool-permission-management","aria-label":"Permalink to “Tool Permission Management”"},"​")],-1)),d(a),t[20]||(t[20]=e("p",null,[n("MCP tools are registered using "),e("code",null,"{server_name}_{tool_name}"),n(" format.")],-1)),t[21]||(t[21]=e("h3",{id:"global-disable",tabindex:"-1"},[n("Global Disable "),e("a",{class:"header-anchor",href:"#global-disable","aria-label":"Permalink to “Global Disable”"},"​")],-1)),t[22]||(t[22]=e("p",null,[n("Use "),e("code",null,"permission"),n(" configuration to disable MCP tools:")],-1)),t[23]||(t[23]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[24]||(t[24]=e("p",null,"Use wildcards to batch disable:",-1)),t[25]||(t[25]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "my-mcp*": "deny"
  }
}`)])],-1)),t[26]||(t[26]=e("h3",{id:"per-agent-enable",tabindex:"-1"},[n("Per-Agent Enable "),e("a",{class:"header-anchor",href:"#per-agent-enable","aria-label":"Permalink to “Per-Agent Enable”"},"​")],-1)),t[27]||(t[27]=e("p",null,"After global disable, enable in specific agents:",-1)),t[28]||(t[28]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[29]||(t[29]=o('<h3 id="wildcard-rules" tabindex="-1">Wildcard Rules <a class="header-anchor" href="#wildcard-rules" aria-label="Permalink to “Wildcard Rules”">​</a></h3><ul><li><code>*</code> matches zero or more characters</li><li><code>?</code> matches exactly one character</li><li>Other characters match literally</li></ul><hr><h2 id="integration-in-rule-files" tabindex="-1">Integration in Rule Files <a class="header-anchor" href="#integration-in-rule-files" aria-label="Permalink to “Integration in Rule Files”">​</a></h2><p>Configure default MCP usage in <code>AGENTS.md</code> or <code>.opencode/agents/*.md</code>:</p>',5)),t[30]||(t[30]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},"## MCP Usage Rules\n\nWhen querying documentation, use the `context7` tool.\n\nWhen unsure how to implement a feature, use `gh_grep` to search GitHub for code examples.")])],-1)),t[31]||(t[31]=e("p",null,"This way the AI automatically selects appropriate MCP tools without specifying them in every prompt.",-1)),t[32]||(t[32]=e("hr",null,null,-1)),t[33]||(t[33]=e("h2",{id:"tool-auto-discovery-and-updates",tabindex:"-1"},[n("Tool Auto-Discovery and Updates "),e("a",{class:"header-anchor",href:"#tool-auto-discovery-and-updates","aria-label":"Permalink to “Tool Auto-Discovery and Updates”"},"​")],-1)),t[34]||(t[34]=e("h3",{id:"tool-naming-convention",tabindex:"-1"},[n("Tool Naming Convention "),e("a",{class:"header-anchor",href:"#tool-naming-convention","aria-label":"Permalink to “Tool Naming Convention”"},"​")],-1)),t[35]||(t[35]=e("p",null,[n("MCP tools are registered using "),e("code",null,"{server_name}_{tool_name}"),n(" format:")],-1)),t[36]||(t[36]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`filesystem server's read_file tool → filesystem_read_file
context7 server's search tool     → context7_search`)])],-1)),t[37]||(t[37]=o('<h3 id="auto-discovery-mechanism" tabindex="-1">Auto-Discovery Mechanism <a class="header-anchor" href="#auto-discovery-mechanism" aria-label="Permalink to “Auto-Discovery Mechanism”">​</a></h3><p>After configuring an MCP server, OpenCode <strong>automatically discovers</strong> all tools the server provides:</p><ol><li>Connect to MCP server</li><li>Call <code>listTools</code> to get tool list</li><li>Convert tools to OpenCode format</li><li>Add to current session&#39;s tool set</li></ol><h3 id="tool-change-notifications" tabindex="-1">Tool Change Notifications <a class="header-anchor" href="#tool-change-notifications" aria-label="Permalink to “Tool Change Notifications”">​</a></h3><p>If the MCP server&#39;s tool list changes (tools added/removed), OpenCode <strong>automatically receives notifications and updates</strong>:</p><ul><li>Server sends tool list change notification (<code>notifications/tools/list_changed</code>)</li><li>OpenCode re-fetches the tool list</li><li>No need to restart OpenCode</li></ul><p>This means: after upgrading an MCP server version, new tools become automatically available.</p><hr><h2 id="recommended-mcp-services" tabindex="-1">Recommended MCP Services <a class="header-anchor" href="#recommended-mcp-services" aria-label="Permalink to “Recommended MCP Services”">​</a></h2><h3 id="sentry" tabindex="-1">Sentry <a class="header-anchor" href="#sentry" aria-label="Permalink to “Sentry”">​</a></h3><p>Connect to Sentry monitoring platform to query errors and issues:</p>',11)),t[38]||(t[38]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "sentry": {
      "type": "remote",
      "url": "https://mcp.sentry.dev/mcp",
      "oauth": {}
    }
  }
}`)])],-1)),t[39]||(t[39]=e("p",null,"First-time use requires authentication:",-1)),t[40]||(t[40]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode mcp auth sentry")])],-1)),t[41]||(t[41]=e("p",null,"Usage example:",-1)),t[42]||(t[42]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use sentry to view recent unresolved errors")])],-1)),t[43]||(t[43]=e("h3",{id:"context7",tabindex:"-1"},[n("Context7 "),e("a",{class:"header-anchor",href:"#context7","aria-label":"Permalink to “Context7”"},"​")],-1)),t[44]||(t[44]=e("p",null,"Search documentation for various libraries and frameworks:",-1)),t[45]||(t[45]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}`)])],-1)),t[46]||(t[46]=e("p",null,"Use API Key for higher rate limits:",-1)),t[47]||(t[47]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "{env:CONTEXT7_API_KEY}"
      }
    }
  }
}`)])],-1)),t[48]||(t[48]=e("p",null,"Usage example:",-1)),t[49]||(t[49]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use context7 to query how Cloudflare Worker caches JSON responses")])],-1)),t[50]||(t[50]=e("h3",{id:"grep-by-vercel",tabindex:"-1"},[n("Grep by Vercel "),e("a",{class:"header-anchor",href:"#grep-by-vercel","aria-label":"Permalink to “Grep by Vercel”"},"​")],-1)),t[51]||(t[51]=e("p",null,"Search code snippets on GitHub:",-1)),t[52]||(t[52]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "gh_grep": {
      "type": "remote",
      "url": "https://mcp.grep.app"
    }
  }
}`)])],-1)),t[53]||(t[53]=e("p",null,"Usage example:",-1)),t[54]||(t[54]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use the gh_grep tool to search how to configure custom domains in SST framework")])],-1)),t[55]||(t[55]=e("h3",{id:"filesystem",tabindex:"-1"},[n("Filesystem "),e("a",{class:"header-anchor",href:"#filesystem","aria-label":"Permalink to “Filesystem”"},"​")],-1)),t[56]||(t[56]=e("p",null,"Local filesystem operations (sandbox mode):",-1)),t[57]||(t[57]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "filesystem": {
      "type": "local",
      "command": [
        "npx", "-y", "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
    }
  }
}`)])],-1)),t[58]||(t[58]=e("h3",{id:"postgres",tabindex:"-1"},[n("Postgres "),e("a",{class:"header-anchor",href:"#postgres","aria-label":"Permalink to “Postgres”"},"​")],-1)),t[59]||(t[59]=e("p",null,"Query PostgreSQL databases directly:",-1)),t[60]||(t[60]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "postgres": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-postgres"],
      "environment": {
        "POSTGRES_CONNECTION_STRING": "{env:DATABASE_URL}"
      }
    }
  }
}`)])],-1)),t[61]||(t[61]=e("h3",{id:"puppeteer",tabindex:"-1"},[n("Puppeteer "),e("a",{class:"header-anchor",href:"#puppeteer","aria-label":"Permalink to “Puppeteer”"},"​")],-1)),t[62]||(t[62]=e("p",null,"Browser automation and web scraping:",-1)),t[63]||(t[63]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "puppeteer": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}`)])],-1)),t[64]||(t[64]=e("h3",{id:"memory",tabindex:"-1"},[n("Memory "),e("a",{class:"header-anchor",href:"#memory","aria-label":"Permalink to “Memory”"},"​")],-1)),t[65]||(t[65]=e("p",null,"Persistent key-value storage:",-1)),t[66]||(t[66]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "memory": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-memory"]
    }
  }
}`)])],-1)),t[67]||(t[67]=e("h3",{id:"sqlite",tabindex:"-1"},[n("SQLite "),e("a",{class:"header-anchor",href:"#sqlite","aria-label":"Permalink to “SQLite”"},"​")],-1)),t[68]||(t[68]=e("p",null,"Lightweight database operations:",-1)),t[69]||(t[69]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "mcp": {
    "sqlite": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-sqlite", "/path/to/database.db"]
    }
  }
}`)])],-1)),t[70]||(t[70]=e("h3",{id:"slack",tabindex:"-1"},[n("Slack "),e("a",{class:"header-anchor",href:"#slack","aria-label":"Permalink to “Slack”"},"​")],-1)),t[71]||(t[71]=e("p",null,"Interact with Slack workspace:",-1)),t[72]||(t[72]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[73]||(t[73]=o('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>MCP tools not appearing</td><td>Globally disabled or agent not configured</td><td>Check <code>permission</code> configuration</td></tr><tr><td>OAuth authentication failed</td><td>Token expired or invalid credentials</td><td>Run <code>opencode mcp logout &amp;&amp; opencode mcp auth</code></td></tr><tr><td>Status shows <code>needs_client_registration</code></td><td>Server doesn&#39;t support dynamic registration</td><td>Configure <code>clientId</code> in <code>oauth</code></td></tr><tr><td>Context quickly exhausted</td><td>Too many MCP tools enabled</td><td>Disable unused MCPs, use per-agent enable</td></tr><tr><td>Tool name conflicts</td><td>Multiple MCPs have same-named tools</td><td>Use <code>{server_name}_{tool_name}</code> format to distinguish</td></tr><tr><td>Still shows needs_auth after auth</td><td>Token storage failed</td><td>Check <code>~/.local/share/opencode/mcp-auth.json</code> permissions</td></tr><tr><td><strong>Command format error</strong></td><td><code>command</code> written as string instead of array</td><td>❌ <code>&quot;command&quot;: &quot;npx xxx&quot;</code> → ✓ <code>&quot;command&quot;: [&quot;npx&quot;, &quot;-y&quot;, &quot;xxx&quot;]</code></td></tr><tr><td><strong>URL format error</strong></td><td>URL missing protocol prefix</td><td>❌ <code>&quot;url&quot;: &quot;example.com/mcp&quot;</code> → ✓ <code>&quot;url&quot;: &quot;https://example.com/mcp&quot;</code></td></tr><tr><td><strong>Browser can&#39;t auto-open</strong></td><td>Running in SSH/remote environment</td><td>OpenCode displays URL, manually copy to browser</td></tr><tr><td><strong>Timeout too short</strong></td><td><code>timeout</code> set to 1000ms</td><td>Remote servers recommend 2000+-10000ms, default 30000ms</td></tr><tr><td><strong>Forgot to enable server</strong></td><td><code>enabled: false</code> but wondering why it doesn&#39;t work</td><td>Enabled by default, check if mistakenly set to <code>false</code></td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><strong>OAuth Authentication</strong>: Automatic handling or manual client credential configuration</li><li><strong>Debug Commands</strong>: <code>opencode mcp debug</code> to diagnose connection issues</li><li><strong>Status Icons</strong>: Meanings of ✓ ○ ⚠ ✗ four states</li><li><strong>Permission Management</strong>: Using <code>permission</code> to control tool access</li><li><strong>Tool Auto-Discovery</strong>: Tool naming rules and change notification mechanism</li><li><strong>Rule Integration</strong>: Configuring default MCP usage in AGENTS.md</li><li><strong>Common MCPs</strong>: Sentry, Context7, Grep, Postgres, etc.</li></ol><hr><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to “Related Resources”">​</a></h2><ul><li><a href="/en/5-advanced/07a-mcp-basics.html">5.7a MCP Basics</a> - MCP introduction and configuration</li><li><a href="/en/5-advanced/01a-config-basics.html">5.1 Configuration Basics</a> - Configuration file basics</li><li><a href="/en/5-advanced/02a-agent-quickstart.html">5.2 Custom Agents</a> - Agent tool configuration</li><li><a href="/en/5-advanced/05-permissions.html">5.5 Permissions</a> - Detailed permission settings</li><li><a href="https://opencode.ai/docs/mcp-servers/" target="_blank" rel="noreferrer">Official MCP Docs</a> - English original</li></ul><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>In the next lesson, we&#39;ll learn about IDE integration, making OpenCode work seamlessly with editors like VS Code and JetBrains.</p></blockquote>',13))])}const f=s(c,[["render",m]]);export{C as __pageData,f as default};
