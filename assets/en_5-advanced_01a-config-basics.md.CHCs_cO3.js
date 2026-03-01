import{_ as i,I as r,c as l,o as d,a5 as n,j as e,J as s,a as t,aW as c}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse(`{"title":"5.1a Configuration Basics","description":"Learn opencode.json core configuration to control OpenCode's basic behavior and customize your development environment.","frontmatter":{"title":"5.1a Configuration Basics","subtitle":"opencode.json Core Configuration","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.1a","duration":"15 minutes","level":"Advanced","description":"Learn opencode.json core configuration to control OpenCode's basic behavior and customize your development environment.","tags":["Configuration","JSON","Basics"],"prerequisite":["2.1 Interface and Basic Operations"]},"headers":[],"relativePath":"en/5-advanced/01a-config-basics.md","filePath":"en/5-advanced/01a-config-basics.md","lastUpdated":1772014034000}`),u={name:"en/5-advanced/01a-config-basics.md"};function p(m,o,h,f,g,b){const a=r("AdInArticle");return d(),l("div",null,[o[0]||(o[0]=n('<h1 id="_5-1a-configuration-basics" tabindex="-1">5.1a Configuration Basics <a class="header-anchor" href="#_5-1a-configuration-basics" aria-label="Permalink to “5.1a Configuration Basics”">​</a></h1><blockquote><p>Control OpenCode&#39;s core behavior through the opencode.json configuration file.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><img src="'+c+'" alt="Configuration Basics Notes" data-zoom-src="/images/5-advanced/config-basics-notes.jpeg"><hr><h2 id="what-you-ll-learn" tabindex="-1">What You&#39;ll Learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to “What You&#39;ll Learn”">​</a></h2><ul><li>Understand configuration file locations and priority</li><li>Master model and Provider configuration</li><li>Use variable substitution for dynamic configuration</li><li>Configure username and auto-update</li></ul><hr><h2 id="your-current-challenge" tabindex="-1">Your Current Challenge <a class="header-anchor" href="#your-current-challenge" aria-label="Permalink to “Your Current Challenge”">​</a></h2><ul><li>Have to manually set things up every time, don&#39;t know how to save configuration</li><li>Don&#39;t want to write API Keys in plain text in configuration</li><li>Don&#39;t know how to configure multiple Providers</li></ul><hr><h2 id="when-to-use-this" tabindex="-1">When to Use This <a class="header-anchor" href="#when-to-use-this" aria-label="Permalink to “When to Use This”">​</a></h2><ul><li>When you need to: Personalize OpenCode&#39;s behavior</li><li>And don&#39;t want to: Reset everything each time you start</li></ul><hr><h2 id="configuration-file-locations" tabindex="-1">Configuration File Locations <a class="header-anchor" href="#configuration-file-locations" aria-label="Permalink to “Configuration File Locations”">​</a></h2><p>OpenCode loads configuration in the following order, from lowest to highest priority (later ones override earlier ones):</p><table tabindex="0"><thead><tr><th>Priority</th><th>Location</th><th>Description</th></tr></thead><tbody><tr><td>1 (lowest)</td><td>Remote <code>.well-known/opencode</code></td><td>Remote organization default config (obtained via Auth mechanism)</td></tr><tr><td>2</td><td><code>~/.config/opencode/opencode.json</code></td><td>Global user configuration</td></tr><tr><td>3</td><td><code>OPENCODE_CONFIG</code> environment variable</td><td>Custom config file path</td></tr><tr><td>4</td><td><code>./opencode.json</code></td><td>Project root directory configuration</td></tr><tr><td>5</td><td><code>./.opencode/opencode.json</code></td><td>Project .opencode directory configuration</td></tr><tr><td>6</td><td><code>OPENCODE_CONFIG_CONTENT</code> environment variable</td><td>Inline config content (JSON string)</td></tr><tr><td>7 (highest)</td><td>Managed config directory</td><td>Enterprise deployment, admin-controlled</td></tr></tbody></table><blockquote><p>Configuration files are <strong>merged</strong>, not replaced. Later configurations override conflicting keys from earlier ones, but non-conflicting settings are preserved.</p></blockquote><details class="details custom-block"><summary>Managed Config Directory (Enterprise Deployment)</summary><p>In enterprise environments, administrators can place configuration in system-level directories with the highest priority, overriding all user and project configurations:</p><table tabindex="0"><thead><tr><th>Platform</th><th>Path</th></tr></thead><tbody><tr><td>macOS</td><td><code>/Library/Application Support/opencode</code></td></tr><tr><td>Windows</td><td><code>%ProgramData%\\opencode</code></td></tr><tr><td>Linux</td><td><code>/etc/opencode</code></td></tr></tbody></table><p>Regular users generally don&#39;t need this, just be aware it exists.</p></details><h3 id="configuration-directory-structure" tabindex="-1">Configuration Directory Structure <a class="header-anchor" href="#configuration-directory-structure" aria-label="Permalink to “Configuration Directory Structure”">​</a></h3>',21)),o[1]||(o[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`~/.config/opencode/
├── opencode.json       # Global configuration
├── AGENTS.md           # Global rules
├── agent/              # Global Agents
├── command/            # Global commands
└── plugin/             # Global plugins

Project directory/
├── opencode.json       # Project configuration (priority 4)
├── AGENTS.md           # Project rules
└── .opencode/
    ├── opencode.json   # Project configuration (priority 5, recommended)
    ├── agent/          # Project Agents
    ├── command/        # Project commands
    └── plugin/         # Project plugins`)])],-1)),o[2]||(o[2]=e("hr",null,null,-1)),o[3]||(o[3]=e("h2",{id:"configuration-format",tabindex:"-1"},[t("Configuration Format "),e("a",{class:"header-anchor",href:"#configuration-format","aria-label":"Permalink to “Configuration Format”"},"​")],-1)),o[4]||(o[4]=e("p",null,"Supports JSON and JSONC (JSON with comments):",-1)),o[5]||(o[5]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  // This is a comment, JSONC format supports it
  "model": "anthropic/claude-opus-4-5-thinking"
}`)])],-1)),o[6]||(o[6]=e("blockquote",null,[e("p",null,[t("Configuration filename can be "),e("code",null,"opencode.json"),t(" or "),e("code",null,"opencode.jsonc"),t(".")])],-1)),o[7]||(o[7]=e("hr",null,null,-1)),o[8]||(o[8]=e("h2",{id:"model-configuration",tabindex:"-1"},[t("Model Configuration "),e("a",{class:"header-anchor",href:"#model-configuration","aria-label":"Permalink to “Model Configuration”"},"​")],-1)),s(a),o[9]||(o[9]=e("h3",{id:"main-model-and-small-model",tabindex:"-1"},[t("Main Model and Small Model "),e("a",{class:"header-anchor",href:"#main-model-and-small-model","aria-label":"Permalink to “Main Model and Small Model”"},"​")],-1)),o[10]||(o[10]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-opus-4-5-thinking",
  "small_model": "anthropic/claude-haiku-4-5"
}`)])],-1)),o[11]||(o[11]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>model</code></td><td>Main model (format: provider/model)</td></tr><tr><td><code>small_model</code></td><td>Small model for simple tasks (like generating titles)</td></tr></tbody></table><blockquote><p><code>small_model</code> configures a cheaper model for lightweight tasks. If not set, OpenCode will try to use a cheaper model provided by the Provider, otherwise falls back to the main model.</p></blockquote><h3 id="default-agent" tabindex="-1">Default Agent <a class="header-anchor" href="#default-agent" aria-label="Permalink to “Default Agent”">​</a></h3>',3)),o[12]||(o[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "default_agent": "build"
}`)])],-1)),o[13]||(o[13]=n('<p>Sets the default primary agent to use (must be primary mode). Options:</p><ul><li><code>&quot;build&quot;</code> - Default, all tools available</li><li><code>&quot;plan&quot;</code> - Read-only mode, editing requires confirmation</li><li>Or a custom primary agent name you&#39;ve defined</li></ul><hr><h2 id="provider-configuration" tabindex="-1">Provider Configuration <a class="header-anchor" href="#provider-configuration" aria-label="Permalink to “Provider Configuration”">​</a></h2><h3 id="basic-configuration" tabindex="-1">Basic Configuration <a class="header-anchor" href="#basic-configuration" aria-label="Permalink to “Basic Configuration”">​</a></h3>',5)),o[14]||(o[14]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}",
        "baseURL": "https://api.anthropic.com",
        "timeout": 600000,
        "setCacheKey": true
      }
    }
  }
}`)])],-1)),o[15]||(o[15]=n('<blockquote><p>Note: Configuration key is <code>provider</code> (singular), not <code>providers</code>.</p></blockquote><h3 id="options-field-reference" tabindex="-1">Options Field Reference <a class="header-anchor" href="#options-field-reference" aria-label="Permalink to “Options Field Reference”">​</a></h3><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>apiKey</code></td><td>string</td><td>API key</td></tr><tr><td><code>baseURL</code></td><td>string</td><td>Custom API endpoint (commonly used for proxies)</td></tr><tr><td><code>timeout</code></td><td>number | false</td><td>Request timeout (milliseconds), default 300000, set to false to disable</td></tr><tr><td><code>setCacheKey</code></td><td>boolean</td><td>Enable prompt cache key (default false)</td></tr></tbody></table><h3 id="amazon-bedrock-special-configuration" tabindex="-1">Amazon Bedrock Special Configuration <a class="header-anchor" href="#amazon-bedrock-special-configuration" aria-label="Permalink to “Amazon Bedrock Special Configuration”">​</a></h3><p>Amazon Bedrock supports AWS-specific configuration:</p>',5)),o[16]||(o[16]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "amazon-bedrock": {
      "options": {
        "region": "us-east-1",
        "profile": "my-aws-profile",
        "endpoint": "https://bedrock-runtime.us-east-1.vpce-xxxxx.amazonaws.com"
      }
    }
  }
}`)])],-1)),o[17]||(o[17]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>region</code></td><td>AWS region (default from <code>AWS_REGION</code> env var or <code>us-east-1</code>)</td></tr><tr><td><code>profile</code></td><td>AWS profile name (from <code>~/.aws/credentials</code>)</td></tr><tr><td><code>endpoint</code></td><td>Custom endpoint URL (for VPC endpoints)</td></tr></tbody></table><h3 id="provider-allowlist-blocklist" tabindex="-1">Provider Allowlist/Blocklist <a class="header-anchor" href="#provider-allowlist-blocklist" aria-label="Permalink to “Provider Allowlist/Blocklist”">​</a></h3><p>Control which Providers to load:</p>',3)),o[18]||(o[18]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "disabled_providers": ["openai", "gemini"],
  "enabled_providers": ["anthropic"]
}`)])],-1)),o[19]||(o[19]=n('<table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>disabled_providers</code></td><td>List of disabled Providers, won&#39;t load even with API Key</td></tr><tr><td><code>enabled_providers</code></td><td>Only enable these Providers, ignore all others</td></tr></tbody></table><blockquote><p><code>disabled_providers</code> has higher priority than <code>enabled_providers</code>. If a Provider appears in both lists, it will be disabled.</p></blockquote><hr><h2 id="user-configuration" tabindex="-1">User Configuration <a class="header-anchor" href="#user-configuration" aria-label="Permalink to “User Configuration”">​</a></h2><h3 id="custom-username" tabindex="-1">Custom Username <a class="header-anchor" href="#custom-username" aria-label="Permalink to “Custom Username”">​</a></h3>',5)),o[20]||(o[20]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "username": "Developer"
}`)])],-1)),o[21]||(o[21]=e("p",null,"Displays a custom username in conversations instead of the system username.",-1)),o[22]||(o[22]=e("hr",null,null,-1)),o[23]||(o[23]=e("h2",{id:"theme-configuration",tabindex:"-1"},[t("Theme Configuration "),e("a",{class:"header-anchor",href:"#theme-configuration","aria-label":"Permalink to “Theme Configuration”"},"​")],-1)),o[24]||(o[24]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "theme": "tokyonight"
}`)])],-1)),o[25]||(o[25]=e("blockquote",null,[e("p",null,[t("Note: Configuration key is "),e("code",null,"theme"),t(", not "),e("code",null,"tui.theme"),t(".")])],-1)),o[26]||(o[26]=e("hr",null,null,-1)),o[27]||(o[27]=e("h2",{id:"auto-update",tabindex:"-1"},[t("Auto-Update "),e("a",{class:"header-anchor",href:"#auto-update","aria-label":"Permalink to “Auto-Update”"},"​")],-1)),o[28]||(o[28]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "autoupdate": true
}`)])],-1)),o[29]||(o[29]=n('<table tabindex="0"><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>true</code></td><td>Automatically download updates on startup (default)</td></tr><tr><td><code>false</code></td><td>Disable auto-update</td></tr><tr><td><code>&quot;notify&quot;</code></td><td>Only notify of new versions, don&#39;t auto-update</td></tr></tbody></table><hr><h2 id="variable-substitution" tabindex="-1">Variable Substitution <a class="header-anchor" href="#variable-substitution" aria-label="Permalink to “Variable Substitution”">​</a></h2><p>Variables can be used in configuration to dynamically obtain values:</p><h3 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-label="Permalink to “Environment Variables”">​</a></h3><p>Use <code>{env:VARIABLE_NAME}</code> to reference environment variables:</p>',6)),o[30]||(o[30]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "model": "{env:OPENCODE_MODEL}",
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}"
      }
    }
  }
}`)])],-1)),o[31]||(o[31]=e("blockquote",null,[e("p",null,"If the environment variable doesn't exist, it will be replaced with an empty string.")],-1)),o[32]||(o[32]=e("h3",{id:"file-contents",tabindex:"-1"},[t("File Contents "),e("a",{class:"header-anchor",href:"#file-contents","aria-label":"Permalink to “File Contents”"},"​")],-1)),o[33]||(o[33]=e("p",null,[t("Use "),e("code",null,"{file:path}"),t(" to reference file contents:")],-1)),o[34]||(o[34]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "options": {
        "apiKey": "{file:~/.secrets/openai-key}"
      }
    }
  }
}`)])],-1)),o[35]||(o[35]=n('<p>File paths support:</p><ul><li>Relative paths from the configuration file</li><li>Absolute paths starting with <code>/</code></li><li>Home directory paths starting with <code>~</code></li></ul><p>Variable substitution is useful for:</p><ul><li>Protecting sensitive data (API Keys in separate files)</li><li>Cross-environment configuration (different variables for dev/production)</li><li>Sharing configuration snippets</li></ul><hr><h2 id="complete-basic-configuration-example" tabindex="-1">Complete Basic Configuration Example <a class="header-anchor" href="#complete-basic-configuration-example" aria-label="Permalink to “Complete Basic Configuration Example”">​</a></h2>',6)),o[36]||(o[36]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  
  // Models
  "model": "anthropic/claude-opus-4-5-thinking",
  "small_model": "anthropic/claude-haiku-4-5",
  "default_agent": "build",
  
  // Provider
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}",
        "timeout": 600000
      }
    }
  },
  
  // Provider control
  "disabled_providers": ["gemini"],
  
  // User
  "username": "Developer",
  
  // Theme
  "theme": "catppuccin",
  
  // Auto-update
  "autoupdate": true
}`)])],-1)),o[37]||(o[37]=n('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Configuration not taking effect</td><td>Priority issue</td><td>Project-level config takes precedence over global</td></tr><tr><td>Variable substitution fails</td><td>Environment variable doesn&#39;t exist</td><td>Confirm the env var is set</td></tr><tr><td>JSON parsing error</td><td>Format error</td><td>Use JSONC format or check syntax</td></tr><tr><td>Used <code>providers</code></td><td>Wrong key name</td><td>Should be <code>provider</code> (singular)</td></tr><tr><td>Provider not loading</td><td>In disabled list</td><td>Check <code>disabled_providers</code></td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Configuration file locations and priority</li><li>Model configuration (model, small_model, default_agent)</li><li>Provider configuration (options, allowlist/blocklist)</li><li>Variable substitution (environment variables, file contents)</li><li>Username, theme, and auto-update configuration</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next lesson we&#39;ll learn advanced configuration, including interface configuration, behavior configuration, and detailed explanations of various feature configurations.</p></blockquote>',10))])}const y=i(u,[["render",p]]);export{C as __pageData,y as default};
