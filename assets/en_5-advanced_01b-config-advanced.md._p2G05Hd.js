import{_ as a,I as i,c as r,o as s,a5 as n,J as l,j as e,a as o,aX as c}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"5.1b Advanced Configuration","description":"Master all OpenCode configuration options to build a fully customized development environment and AI tool.","frontmatter":{"title":"5.1b Advanced Configuration","subtitle":"Complete opencode.json Reference","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.1b","duration":"20 min","level":"Advanced","description":"Master all OpenCode configuration options to build a fully customized development environment and AI tool.","tags":["Configuration","JSON","Advanced"],"prerequisite":["5.1a Configuration Basics"]},"headers":[],"relativePath":"en/5-advanced/01b-config-advanced.md","filePath":"en/5-advanced/01b-config-advanced.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/01b-config-advanced.md"};function p(m,t,h,g,f,b){const d=i("AdInArticle");return s(),r("div",null,[t[0]||(t[0]=n('<h1 id="_5-1b-advanced-configuration" tabindex="-1">5.1b Advanced Configuration <a class="header-anchor" href="#_5-1b-advanced-configuration" aria-label="Permalink to “5.1b Advanced Configuration”">​</a></h1><blockquote><p>Master all OpenCode configuration options to build a fully customized development environment.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><img src="'+c+'" alt="Advanced Configuration Notes" data-zoom-src="/images/5-advanced/config-advanced-notes.jpeg"><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Configure the interface (TUI, keybinds, server)</li><li>Configure behavior (share, compaction, watcher)</li><li>Configure features (Provider, tools, permissions, agents, commands, MCP, etc.)</li><li>Use experimental features</li><li>Configure custom API URLs for models</li></ul><hr><h2 id="your-current-pain-points" tabindex="-1">Your Current Pain Points <a class="header-anchor" href="#your-current-pain-points" aria-label="Permalink to “Your Current Pain Points”">​</a></h2><ul><li>Want to customize keybinds</li><li>Want to control which tools the AI can use</li><li>Want to batch disable certain MCP tools</li><li>Want to configure privately deployed APIs for models</li><li>Want to know what hidden configurations exist</li></ul><hr><h2 id="when-to-use-this" tabindex="-1">When to Use This <a class="header-anchor" href="#when-to-use-this" aria-label="Permalink to “When to Use This”">​</a></h2><ul><li>When you need: Full control over OpenCode&#39;s behavior</li><li>And you don&#39;t want: To be limited by default settings</li></ul><hr><h2 id="interface-configuration" tabindex="-1">Interface Configuration <a class="header-anchor" href="#interface-configuration" aria-label="Permalink to “Interface Configuration”">​</a></h2>',16)),l(d),t[1]||(t[1]=e("h3",{id:"tui-configuration",tabindex:"-1"},[o("TUI Configuration "),e("a",{class:"header-anchor",href:"#tui-configuration","aria-label":"Permalink to “TUI Configuration”"},"​")],-1)),t[2]||(t[2]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tui": {
    "scroll_speed": 3,
    "scroll_acceleration": {
      "enabled": true
    },
    "diff_style": "auto"
  }
}`)])],-1)),t[3]||(t[3]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>scroll_speed</code></td><td>Scroll speed multiplier (minimum 0.001)</td><td>3</td></tr><tr><td><code>scroll_acceleration.enabled</code></td><td>Enable macOS-style accelerated scrolling</td><td>false</td></tr><tr><td><code>diff_style</code></td><td>Diff display style</td><td><code>&quot;auto&quot;</code></td></tr></tbody></table><blockquote><p><code>scroll_acceleration.enabled</code> takes precedence over <code>scroll_speed</code>. When enabled, scroll_speed is ignored.</p></blockquote><p><code>diff_style</code> options:</p><ul><li><code>&quot;auto&quot;</code> - Adapts based on terminal width</li><li><code>&quot;stacked&quot;</code> - Always displays in single column</li></ul><h3 id="keybinds-configuration" tabindex="-1">Keybinds Configuration <a class="header-anchor" href="#keybinds-configuration" aria-label="Permalink to “Keybinds Configuration”">​</a></h3><p>Customize keyboard shortcuts:</p>',6)),t[4]||(t[4]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n",
    "session_compact": "<leader>c",
    "model_list": "<leader>m",
    "agent_list": "<leader>a",
    "session_interrupt": "escape"
  }
}`)])],-1)),t[5]||(t[5]=e("blockquote",null,[e("p",null,[o("Note: The config key is "),e("code",null,"keybinds"),o(" ("),e("strong",null,"plural"),o("!), unlike permission/agent which use singular.")])],-1)),t[6]||(t[6]=e("h4",{id:"leader-key",tabindex:"-1"},[o("Leader Key "),e("a",{class:"header-anchor",href:"#leader-key","aria-label":"Permalink to “Leader Key”"},"​")],-1)),t[7]||(t[7]=e("p",null,[o("Most shortcuts use a "),e("code",null,"leader"),o(" key prefix to avoid terminal conflicts:")],-1)),t[8]||(t[8]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "ctrl+x"
  }
}`)])],-1)),t[9]||(t[9]=n('<p>Default is <code>ctrl+x</code>. Press the leader key followed by the shortcut, e.g., <code>ctrl+x</code> then <code>n</code> to create a new session.</p><h4 id="disabling-keybinds" tabindex="-1">Disabling Keybinds <a class="header-anchor" href="#disabling-keybinds" aria-label="Permalink to “Disabling Keybinds”">​</a></h4><p>Set the value to <code>&quot;none&quot;</code> to disable:</p>',3)),t[10]||(t[10]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "keybinds": {
    "session_compact": "none"
  }
}`)])],-1)),t[11]||(t[11]=n('<h4 id="common-keybinds" tabindex="-1">Common Keybinds <a class="header-anchor" href="#common-keybinds" aria-label="Permalink to “Common Keybinds”">​</a></h4><table tabindex="0"><thead><tr><th>Config Key</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>app_exit</code></td><td><code>ctrl+c,ctrl+d,&lt;leader&gt;q</code></td><td>Exit application</td></tr><tr><td><code>session_new</code></td><td><code>&lt;leader&gt;n</code></td><td>New session</td></tr><tr><td><code>session_list</code></td><td><code>&lt;leader&gt;l</code></td><td>Session list</td></tr><tr><td><code>session_interrupt</code></td><td><code>escape</code></td><td>Interrupt current operation</td></tr><tr><td><code>session_compact</code></td><td><code>&lt;leader&gt;c</code></td><td>Compact session</td></tr><tr><td><code>model_list</code></td><td><code>&lt;leader&gt;m</code></td><td>Model list</td></tr><tr><td><code>agent_list</code></td><td><code>&lt;leader&gt;a</code></td><td>Agent list</td></tr><tr><td><code>agent_cycle</code></td><td><code>tab</code></td><td>Switch Agent</td></tr><tr><td><code>command_list</code></td><td><code>ctrl+p</code></td><td>Command list</td></tr><tr><td><code>messages_undo</code></td><td><code>&lt;leader&gt;u</code></td><td>Undo message</td></tr><tr><td><code>messages_redo</code></td><td><code>&lt;leader&gt;r</code></td><td>Redo message</td></tr></tbody></table><p>For the complete keybinds list, see <a href="./../appendix/keybinds.html">Quick Reference/Keybinds</a>.</p><h3 id="server-configuration" tabindex="-1">Server Configuration <a class="header-anchor" href="#server-configuration" aria-label="Permalink to “Server Configuration”">​</a></h3><p>Configure the server for <code>opencode serve</code> and <code>opencode web</code> commands:</p>',5)),t[12]||(t[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "server": {
    "port": 4096,
    "hostname": "0.0.0.0",
    "mdns": true,
    "mdnsDomain": "opencode.local",
    "cors": ["http://localhost:5173"]
  }
}`)])],-1)),t[13]||(t[13]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>port</code></td><td>Listen port</td></tr><tr><td><code>hostname</code></td><td>Listen address (defaults to <code>0.0.0.0</code> when mdns is enabled)</td></tr><tr><td><code>mdns</code></td><td>Enable mDNS service discovery (LAN devices can discover)</td></tr><tr><td><code>mdnsDomain</code></td><td>Custom domain for mDNS service (default <code>opencode.local</code>)</td></tr><tr><td><code>cors</code></td><td>List of allowed CORS origins</td></tr></tbody></table><hr><h2 id="behavior-configuration" tabindex="-1">Behavior Configuration <a class="header-anchor" href="#behavior-configuration" aria-label="Permalink to “Behavior Configuration”">​</a></h2><h3 id="share-configuration" tabindex="-1">Share Configuration <a class="header-anchor" href="#share-configuration" aria-label="Permalink to “Share Configuration”">​</a></h3><p>Control session sharing behavior:</p>',5)),t[14]||(t[14]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "share": "manual"
}`)])],-1)),t[15]||(t[15]=n('<table tabindex="0"><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>&quot;manual&quot;</code></td><td>Manual sharing (default), use <code>/share</code> command</td></tr><tr><td><code>&quot;auto&quot;</code></td><td>Automatically share new sessions</td></tr><tr><td><code>&quot;disabled&quot;</code></td><td>Disable sharing feature</td></tr></tbody></table><h3 id="compaction-configuration" tabindex="-1">Compaction Configuration <a class="header-anchor" href="#compaction-configuration" aria-label="Permalink to “Compaction Configuration”">​</a></h3><p>Control context compaction behavior:</p>',3)),t[16]||(t[16]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "compaction": {
    "auto": true,
    "prune": true,
    "reserved": 10000
  }
}`)])],-1)),t[17]||(t[17]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>auto</code></td><td>Auto-compact when context is full</td><td>true</td></tr><tr><td><code>prune</code></td><td>Remove old tool outputs to save tokens</td><td>true</td></tr><tr><td><code>reserved</code></td><td>Token buffer during compaction, reserves enough window to prevent overflow</td><td>-</td></tr></tbody></table><h3 id="watcher-configuration" tabindex="-1">Watcher Configuration <a class="header-anchor" href="#watcher-configuration" aria-label="Permalink to “Watcher Configuration”">​</a></h3><p>Configure file watcher ignore patterns:</p>',3)),t[18]||(t[18]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "watcher": {
    "ignore": ["node_modules/**", "dist/**", ".git/**", "*.log"]
  }
}`)])],-1)),t[19]||(t[19]=e("p",null,"Use glob syntax to exclude noisy directories and reduce file watcher overhead.",-1)),t[20]||(t[20]=e("h3",{id:"instructions-configuration",tabindex:"-1"},[o("Instructions Configuration "),e("a",{class:"header-anchor",href:"#instructions-configuration","aria-label":"Permalink to “Instructions Configuration”"},"​")],-1)),t[21]||(t[21]=e("p",null,"Specify additional instruction files (merged with AGENTS.md):",-1)),t[22]||(t[22]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "instructions": [
    "CONTRIBUTING.md",
    "docs/guidelines.md",
    ".cursor/rules/*.md",
    "packages/*/AGENTS.md"
  ]
}`)])],-1)),t[23]||(t[23]=n('<p>Supports glob patterns. Use cases:</p><ul><li>Reuse existing rule files (e.g., Cursor&#39;s rules)</li><li>Share team coding standards</li><li>Include subproject rules in monorepos</li></ul><hr><h2 id="feature-configuration" tabindex="-1">Feature Configuration <a class="header-anchor" href="#feature-configuration" aria-label="Permalink to “Feature Configuration”">​</a></h2><h3 id="provider-configuration" tabindex="-1">Provider Configuration <a class="header-anchor" href="#provider-configuration" aria-label="Permalink to “Provider Configuration”">​</a></h3><p>Configure AI providers and their models:</p>',6)),t[24]||(t[24]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[25]||(t[25]=n('<h4 id="provider-level-options" tabindex="-1">Provider-level Options <a class="header-anchor" href="#provider-level-options" aria-label="Permalink to “Provider-level Options”">​</a></h4><table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>options.apiKey</code></td><td>API key, supports <code>{env:VAR_NAME}</code> environment variable replacement</td></tr><tr><td><code>options.baseURL</code></td><td>Custom API base URL (for proxies or private deployments)</td></tr><tr><td><code>options.timeout</code></td><td>Request timeout (milliseconds), set to <code>false</code> to disable</td></tr><tr><td><code>options.setCacheKey</code></td><td>Enable Prompt Caching (Anthropic only)</td></tr><tr><td><code>options.enterpriseUrl</code></td><td>GitHub Enterprise URL (Copilot only)</td></tr></tbody></table><h4 id="model-level-custom-api-url" tabindex="-1">Model-level Custom API URL <a class="header-anchor" href="#model-level-custom-api-url" aria-label="Permalink to “Model-level Custom API URL”">​</a></h4><blockquote><p>Added in v1.1.60+</p></blockquote><p>Configure independent API URL for individual models:</p>',5)),t[26]||(t[26]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[27]||(t[27]=e("p",null,"Use cases:",-1)),t[28]||(t[28]=e("ul",null,[e("li",null,"Use different deployments of the same provider (e.g., Azure OpenAI in different regions)"),e("li",null,"Test privately deployed models"),e("li",null,"Configure model-specific proxy servers")],-1)),t[29]||(t[29]=e("h4",{id:"whitelist-blacklist",tabindex:"-1"},[o("Whitelist/Blacklist "),e("a",{class:"header-anchor",href:"#whitelist-blacklist","aria-label":"Permalink to “Whitelist/Blacklist”"},"​")],-1)),t[30]||(t[30]=e("p",null,"Control available models:",-1)),t[31]||(t[31]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "whitelist": ["gpt-4o", "gpt-4o-mini"],
      "blacklist": ["gpt-3.5-turbo"]
    }
  }
}`)])],-1)),t[32]||(t[32]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>whitelist</code></td><td>Only allow these models</td></tr><tr><td><code>blacklist</code></td><td>Disable these models</td></tr></tbody></table><blockquote><p><code>whitelist</code> and <code>blacklist</code> are mutually exclusive. When both exist, <code>whitelist</code> takes precedence.</p></blockquote><h3 id="tools-configuration" tabindex="-1">Tools Configuration <a class="header-anchor" href="#tools-configuration" aria-label="Permalink to “Tools Configuration”">​</a></h3><p>Control tools available to the LLM:</p>',4)),t[33]||(t[33]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "write": false,
    "bash": false,
    "webfetch": true
  }
}`)])],-1)),t[34]||(t[34]=e("p",null,[o("All tools are enabled by default. Set to "),e("code",null,"false"),o(" to disable.")],-1)),t[35]||(t[35]=e("h4",{id:"wildcards",tabindex:"-1"},[o("Wildcards "),e("a",{class:"header-anchor",href:"#wildcards","aria-label":"Permalink to “Wildcards”"},"​")],-1)),t[36]||(t[36]=e("p",null,[o("The "),e("code",null,"tools"),o(" key is ultimately converted to "),e("code",null,"permission"),o(" rules, so wildcards work indirectly through the permission system:")],-1)),t[37]||(t[37]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "mymcp_*": false
  }
}`)])],-1)),t[38]||(t[38]=n('<p>Disables all tools from the MCP server named <code>mymcp</code>.</p><blockquote><p>Recommend using <code>permission</code> configuration directly for wildcard control with finer-grained allow/ask/deny options.</p></blockquote><h4 id="tools-vs-permission" tabindex="-1">Tools vs Permission <a class="header-anchor" href="#tools-vs-permission" aria-label="Permalink to “Tools vs Permission”">​</a></h4><p><code>tools</code> is a legacy configuration that automatically converts to <code>permission</code>:</p><table tabindex="0"><thead><tr><th>tools setting</th><th>Equivalent permission</th></tr></thead><tbody><tr><td><code>&quot;write&quot;: false</code></td><td><code>&quot;edit&quot;: &quot;deny&quot;</code></td></tr><tr><td><code>&quot;bash&quot;: false</code></td><td><code>&quot;bash&quot;: &quot;deny&quot;</code></td></tr></tbody></table><blockquote><p>Recommend using <code>permission</code> configuration for finer-grained control (allow/ask/deny). See <a href="./05-permissions.html">5.5 Permissions</a>.</p></blockquote><h3 id="permission-configuration" tabindex="-1">Permission Configuration <a class="header-anchor" href="#permission-configuration" aria-label="Permalink to “Permission Configuration”">​</a></h3><p>Fine-grained permission control:</p>',8)),t[39]||(t[39]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "edit": "ask",
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm *": "deny"
    }
  }
}`)])],-1)),t[40]||(t[40]=n('<blockquote><p>Note: The config key is <code>permission</code> (singular), not <code>permissions</code>.</p></blockquote><p>For detailed configuration, see <a href="./05-permissions.html">5.5 Permissions</a>.</p><h3 id="agent-configuration" tabindex="-1">Agent Configuration <a class="header-anchor" href="#agent-configuration" aria-label="Permalink to “Agent Configuration”">​</a></h3><p>Configure Agent behavior:</p>',4)),t[41]||(t[41]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "code-reviewer": {
      "description": "Code review expert",
      "mode": "subagent",
      "model": "anthropic/claude-opus-4-5-thinking",
      "prompt": "You are a code review expert...",
      
      // Advanced configuration
      "temperature": 0.3,
      "top_p": 0.9,
      "steps": 50,
      "color": "#FF5733",
      "hidden": true,
      
      // Permissions
      "permission": {
        "edit": "deny"
      }
    }
  }
}`)])],-1)),t[42]||(t[42]=n('<blockquote><p>Note: The config key is <code>agent</code> (singular), not <code>agents</code>.</p></blockquote><h4 id="advanced-configuration-fields" tabindex="-1">Advanced Configuration Fields <a class="header-anchor" href="#advanced-configuration-fields" aria-label="Permalink to “Advanced Configuration Fields”">​</a></h4><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>temperature</code></td><td>number</td><td>Creativity parameter (0-1), lower is more deterministic</td></tr><tr><td><code>top_p</code></td><td>number</td><td>Nucleus sampling parameter (0-1)</td></tr><tr><td><code>variant</code></td><td>string</td><td>Default model variant (only effective when using the model configured for this Agent)</td></tr><tr><td><code>steps</code></td><td>number</td><td>Maximum iteration steps</td></tr><tr><td><code>color</code></td><td>string</td><td>Hex color (e.g., <code>#FF5733</code>) or theme color name (e.g., <code>primary</code>)</td></tr><tr><td><code>hidden</code></td><td>boolean</td><td>Hide from @ menu (only effective for subagents)</td></tr></tbody></table><blockquote><p><code>maxSteps</code> is deprecated, use <code>steps</code> instead.</p></blockquote><p>For detailed configuration, see <a href="./02a-agent-quickstart.html">5.2 Custom Agents</a>.</p><h3 id="command-configuration" tabindex="-1">Command Configuration <a class="header-anchor" href="#command-configuration" aria-label="Permalink to “Command Configuration”">​</a></h3><p>Define commands in the configuration file:</p>',7)),t[43]||(t[43]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "command": {
    "test": {
      "template": "Run tests and show failed results",
      "description": "Run tests",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking"
    },
    "component": {
      "template": "Create a React component named $ARGUMENTS",
      "description": "Create new component"
    }
  }
}`)])],-1)),t[44]||(t[44]=n('<blockquote><p>Note: The config key is <code>command</code> (singular), not <code>commands</code>.</p></blockquote><table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>template</code></td><td>Command template, <code>$ARGUMENTS</code> represents the argument</td></tr><tr><td><code>description</code></td><td>Command description</td></tr><tr><td><code>agent</code></td><td>Agent to use</td></tr><tr><td><code>model</code></td><td>Model to use</td></tr><tr><td><code>subtask</code></td><td>Whether to run as a subtask</td></tr></tbody></table><p>For detailed configuration, see <a href="./04-commands.html">5.4 Custom Commands</a>.</p><h3 id="formatter-configuration" tabindex="-1">Formatter Configuration <a class="header-anchor" href="#formatter-configuration" aria-label="Permalink to “Formatter Configuration”">​</a></h3><p>Configure code formatters:</p>',5)),t[45]||(t[45]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[46]||(t[46]=e("blockquote",null,[e("p",null,[o("Note: The config key is "),e("code",null,"formatter"),o(" (singular), not "),e("code",null,"formatters"),o(".")])],-1)),t[47]||(t[47]=e("p",null,[o("Set to "),e("code",null,"false"),o(" to completely disable formatting:")],-1)),t[48]||(t[48]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "formatter": false
}`)])],-1)),t[49]||(t[49]=e("p",null,[o("For detailed configuration, see "),e("a",{href:"./18-formatters.html"},"5.18 Formatters"),o(".")],-1)),t[50]||(t[50]=e("h3",{id:"mcp-configuration",tabindex:"-1"},[o("MCP Configuration "),e("a",{class:"header-anchor",href:"#mcp-configuration","aria-label":"Permalink to “MCP Configuration”"},"​")],-1)),t[51]||(t[51]=e("p",null,"Configure MCP servers:",-1)),t[52]||(t[52]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[53]||(t[53]=n('<p>Remote MCP servers support <code>headers</code> (custom request headers) and <code>oauth</code> (OAuth authentication). Set <code>oauth</code> to <code>false</code> to disable automatic OAuth detection.</p><p>For detailed configuration, see <a href="./07a-mcp-basics.html">5.7 MCP Extensions</a>.</p><h3 id="plugin-configuration" tabindex="-1">Plugin Configuration <a class="header-anchor" href="#plugin-configuration" aria-label="Permalink to “Plugin Configuration”">​</a></h3><p>Load npm plugins:</p>',4)),t[54]||(t[54]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "plugin": ["opencode-helicone-session", "@my-org/custom-plugin"]
}`)])],-1)),t[55]||(t[55]=n('<p>You can also place local plugins (<code>.ts</code> or <code>.js</code> files) in the <code>.opencode/plugin/</code> directory.</p><p>For detailed configuration, see <a href="./12a-plugins-basics.html">5.12 Plugin System</a>.</p><h3 id="lsp-configuration" tabindex="-1">LSP Configuration <a class="header-anchor" href="#lsp-configuration" aria-label="Permalink to “LSP Configuration”">​</a></h3><p>Configure LSP servers:</p>',4)),t[56]||(t[56]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[57]||(t[57]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>disabled</code></td><td>Disable this LSP</td></tr><tr><td><code>command</code></td><td>Startup command</td></tr><tr><td><code>extensions</code></td><td>File extensions (required for custom LSP)</td></tr><tr><td><code>env</code></td><td>Environment variables</td></tr><tr><td><code>initialization</code></td><td>LSP initialization configuration</td></tr></tbody></table><p>Set to <code>false</code> to disable all LSP:</p>',2)),t[58]||(t[58]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "lsp": false
}`)])],-1)),t[59]||(t[59]=e("p",null,[o("For detailed configuration, see "),e("a",{href:"./19-lsp.html"},"5.19 LSP Servers"),o(".")],-1)),t[60]||(t[60]=e("hr",null,null,-1)),t[61]||(t[61]=e("h2",{id:"experimental-features",tabindex:"-1"},[o("Experimental Features "),e("a",{class:"header-anchor",href:"#experimental-features","aria-label":"Permalink to “Experimental Features”"},"​")],-1)),t[62]||(t[62]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true,
    "openTelemetry": true,
    "continue_loop_on_deny": false
  }
}`)])],-1)),t[63]||(t[63]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>batch_tool</code></td><td>Enable batch tools</td></tr><tr><td><code>openTelemetry</code></td><td>Enable OpenTelemetry tracing</td></tr><tr><td><code>disable_paste_summary</code></td><td>Disable automatic summary when pasting large text</td></tr><tr><td><code>primary_tools</code></td><td>List of tools restricted to Primary Agent only</td></tr><tr><td><code>continue_loop_on_deny</code></td><td>Continue loop when tool is denied</td></tr><tr><td><code>mcp_timeout</code></td><td>Global timeout for MCP requests (milliseconds)</td></tr></tbody></table><blockquote><p>⚠️ Experimental features may change or be removed at any time.</p></blockquote><div class="tip custom-block"><p class="custom-block-title">About Hooks</p><p>Hook functionality is implemented through the <strong>plugin system</strong>, not the <code>experimental</code> configuration. See <a href="./12c-hooks.html">5.12c Hooks</a>.</p></div><hr><h2 id="complete-configuration-example" tabindex="-1">Complete Configuration Example <a class="header-anchor" href="#complete-configuration-example" aria-label="Permalink to “Complete Configuration Example”">​</a></h2>',5)),t[64]||(t[64]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  
  // === Models ===
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
  
  // === User ===
  "username": "Developer",
  
  // === Interface ===
  "theme": "catppuccin",
  "tui": {
    "scroll_speed": 3,
    "diff_style": "auto"
  },
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n"
  },
  
  // === Server ===
  "server": {
    "port": 4096,
    "hostname": "localhost"
  },
  
  // === Behavior ===
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
  
  // === Permissions ===
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
      "description": "Code review expert",
      "mode": "subagent",
      "temperature": 0.2,
      "permission": {
        "edit": "deny"
      }
    }
  },
  
  // === Commands ===
  "command": {
    "test": {
      "template": "Run tests",
      "description": "Run test suite"
    }
  },
  
  // === Formatter ===
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
}`)])],-1)),t[65]||(t[65]=n('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Used <code>keybind</code></td><td>Wrong key name</td><td>Should be <code>keybinds</code> (<strong>plural</strong>)</td></tr><tr><td>Used <code>permissions</code></td><td>Wrong key name</td><td>Should be <code>permission</code> (singular)</td></tr><tr><td>Used <code>agents</code></td><td>Wrong key name</td><td>Should be <code>agent</code> (singular)</td></tr><tr><td>Used <code>commands</code></td><td>Wrong key name</td><td>Should be <code>command</code> (singular)</td></tr><tr><td>Used <code>formatters</code></td><td>Wrong key name</td><td>Should be <code>formatter</code> (singular)</td></tr><tr><td>Used <code>tui.theme</code></td><td>Wrong key name</td><td>Use <code>theme</code> directly</td></tr><tr><td>tools config not working</td><td>Legacy config</td><td>Recommend using <code>permission</code></td></tr><tr><td>baseURL not working</td><td>Wrong location</td><td>Should be in <code>provider.options.baseURL</code>, not top-level</td></tr><tr><td>Model API URL not working</td><td>Wrong field</td><td>Model-level uses <code>provider.api</code>, Provider-level uses <code>options.baseURL</code></td></tr><tr><td>Keybind conflicts</td><td>Terminal conflict</td><td>Use leader key prefix</td></tr><tr><td>LSP customization failed</td><td>Missing extensions</td><td>Custom LSP must specify extensions</td></tr></tbody></table><hr><h2 id="config-key-quick-reference" tabindex="-1">Config Key Quick Reference <a class="header-anchor" href="#config-key-quick-reference" aria-label="Permalink to “Config Key Quick Reference”">​</a></h2><table tabindex="0"><thead><tr><th>Config Item</th><th>Correct Key</th><th>Common Mistake</th></tr></thead><tbody><tr><td>Provider</td><td><code>provider</code></td><td><s>providers</s></td></tr><tr><td>Permission</td><td><code>permission</code></td><td><s>permissions</s></td></tr><tr><td>Agent</td><td><code>agent</code></td><td><s>agents</s></td></tr><tr><td>Command</td><td><code>command</code></td><td><s>commands</s></td></tr><tr><td>Formatter</td><td><code>formatter</code></td><td><s>formatters</s></td></tr><tr><td><strong>Keybinds</strong></td><td><code>keybinds</code></td><td><s>keybind</s></td></tr><tr><td>Theme</td><td><code>theme</code></td><td><s>tui.theme</s></td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Interface configuration: TUI, keybinds, server</li><li>Behavior configuration: share, compaction, watcher, instruction files</li><li>Feature configuration: Provider, tools, permissions, agents, commands, formatters, MCP, plugins, LSP</li><li>Experimental features: batch tools, OpenTelemetry, etc.</li><li>Custom model API URLs (v1.1.60+)</li></ol><hr><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to “Related Resources”">​</a></h2><ul><li><a href="./01a-config-basics.html">5.1a Configuration Basics</a> - Core configuration</li><li><a href="./02a-agent-quickstart.html">5.2 Custom Agents</a> - Detailed Agent configuration</li><li><a href="./04-commands.html">5.4 Custom Commands</a> - Detailed Command configuration</li><li><a href="./05-permissions.html">5.5 Permissions</a> - Detailed Permission configuration</li><li><a href="./07a-mcp-basics.html">5.7 MCP Extensions</a> - Detailed MCP configuration</li><li><a href="./../appendix/keybinds.html">Quick Reference/Keybinds</a> - Complete keybinds list</li><li><a href="./../appendix/config-ref.html">Quick Reference/Config Reference</a> - Configuration cheat sheet</li></ul><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>In the next lesson, we&#39;ll learn how to create custom Agents.</p></blockquote>',16))])}const v=a(u,[["render",p]]);export{C as __pageData,v as default};
