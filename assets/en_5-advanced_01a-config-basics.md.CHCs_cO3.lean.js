import{_ as i,I as r,c as l,o as d,a5 as n,j as e,J as s,a as t,aW as c}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse(`{"title":"5.1a Configuration Basics","description":"Learn opencode.json core configuration to control OpenCode's basic behavior and customize your development environment.","frontmatter":{"title":"5.1a Configuration Basics","subtitle":"opencode.json Core Configuration","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.1a","duration":"15 minutes","level":"Advanced","description":"Learn opencode.json core configuration to control OpenCode's basic behavior and customize your development environment.","tags":["Configuration","JSON","Basics"],"prerequisite":["2.1 Interface and Basic Operations"]},"headers":[],"relativePath":"en/5-advanced/01a-config-basics.md","filePath":"en/5-advanced/01a-config-basics.md","lastUpdated":1772014034000}`),u={name:"en/5-advanced/01a-config-basics.md"};function p(m,o,h,f,g,b){const a=r("AdInArticle");return d(),l("div",null,[o[0]||(o[0]=n("",21)),o[1]||(o[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`~/.config/opencode/
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
}`)])],-1)),o[11]||(o[11]=n("",3)),o[12]||(o[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "default_agent": "build"
}`)])],-1)),o[13]||(o[13]=n("",5)),o[14]||(o[14]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),o[15]||(o[15]=n("",5)),o[16]||(o[16]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "amazon-bedrock": {
      "options": {
        "region": "us-east-1",
        "profile": "my-aws-profile",
        "endpoint": "https://bedrock-runtime.us-east-1.vpce-xxxxx.amazonaws.com"
      }
    }
  }
}`)])],-1)),o[17]||(o[17]=n("",3)),o[18]||(o[18]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "disabled_providers": ["openai", "gemini"],
  "enabled_providers": ["anthropic"]
}`)])],-1)),o[19]||(o[19]=n("",5)),o[20]||(o[20]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "username": "Developer"
}`)])],-1)),o[21]||(o[21]=e("p",null,"Displays a custom username in conversations instead of the system username.",-1)),o[22]||(o[22]=e("hr",null,null,-1)),o[23]||(o[23]=e("h2",{id:"theme-configuration",tabindex:"-1"},[t("Theme Configuration "),e("a",{class:"header-anchor",href:"#theme-configuration","aria-label":"Permalink to “Theme Configuration”"},"​")],-1)),o[24]||(o[24]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "theme": "tokyonight"
}`)])],-1)),o[25]||(o[25]=e("blockquote",null,[e("p",null,[t("Note: Configuration key is "),e("code",null,"theme"),t(", not "),e("code",null,"tui.theme"),t(".")])],-1)),o[26]||(o[26]=e("hr",null,null,-1)),o[27]||(o[27]=e("h2",{id:"auto-update",tabindex:"-1"},[t("Auto-Update "),e("a",{class:"header-anchor",href:"#auto-update","aria-label":"Permalink to “Auto-Update”"},"​")],-1)),o[28]||(o[28]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "autoupdate": true
}`)])],-1)),o[29]||(o[29]=n("",6)),o[30]||(o[30]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),o[35]||(o[35]=n("",6)),o[36]||(o[36]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),o[37]||(o[37]=n("",10))])}const y=i(u,[["render",p]]);export{C as __pageData,y as default};
