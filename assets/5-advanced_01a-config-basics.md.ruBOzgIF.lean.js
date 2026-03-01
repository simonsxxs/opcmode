import{_ as n,I as l,c as r,o as i,a5 as o,j as e,J as s,a as d,aW as p}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.1a 配置基础","description":"学习 opencode.json 核心配置，控制 OpenCode 的基础行为，定制你的开发环境。","frontmatter":{"title":"5.1a 配置基础","subtitle":"opencode.json 核心配置","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.1a","duration":"15 分钟","level":"进阶","description":"学习 opencode.json 核心配置，控制 OpenCode 的基础行为，定制你的开发环境。","tags":["配置","JSON","基础"],"prerequisite":["2.1 界面与基础操作"]},"headers":[],"relativePath":"5-advanced/01a-config-basics.md","filePath":"5-advanced/01a-config-basics.md","lastUpdated":1772014034000}'),c={name:"5-advanced/01a-config-basics.md"};function h(b,t,u,m,g,P){const a=l("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=o("",21)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`~/.config/opencode/
├── opencode.json       # 全局配置
├── AGENTS.md           # 全局规则
├── agent/              # 全局 Agent
├── command/            # 全局命令
└── plugin/             # 全局插件

项目目录/
├── opencode.json       # 项目配置（优先级 4）
├── AGENTS.md           # 项目规则
└── .opencode/
    ├── opencode.json   # 项目配置（优先级 5，推荐）
    ├── agent/          # 项目 Agent
    ├── command/        # 项目命令
    └── plugin/         # 项目插件`)])],-1)),t[2]||(t[2]=e("hr",null,null,-1)),t[3]||(t[3]=e("h2",{id:"配置格式",tabindex:"-1"},[d("配置格式 "),e("a",{class:"header-anchor",href:"#配置格式","aria-label":"Permalink to “配置格式”"},"​")],-1)),t[4]||(t[4]=e("p",null,"支持 JSON 和 JSONC（带注释的 JSON）：",-1)),t[5]||(t[5]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  // 这是注释，JSONC 格式支持
  "model": "anthropic/claude-opus-4-5-thinking"
}`)])],-1)),t[6]||(t[6]=e("blockquote",null,[e("p",null,[d("配置文件名可以是 "),e("code",null,"opencode.json"),d(" 或 "),e("code",null,"opencode.jsonc"),d("。")])],-1)),t[7]||(t[7]=e("hr",null,null,-1)),t[8]||(t[8]=e("h2",{id:"模型配置",tabindex:"-1"},[d("模型配置 "),e("a",{class:"header-anchor",href:"#模型配置","aria-label":"Permalink to “模型配置”"},"​")],-1)),s(a),t[9]||(t[9]=e("h3",{id:"主模型和小模型",tabindex:"-1"},[d("主模型和小模型 "),e("a",{class:"header-anchor",href:"#主模型和小模型","aria-label":"Permalink to “主模型和小模型”"},"​")],-1)),t[10]||(t[10]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-opus-4-5-thinking",
  "small_model": "anthropic/claude-haiku-4-5"
}`)])],-1)),t[11]||(t[11]=o("",3)),t[12]||(t[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "default_agent": "build"
}`)])],-1)),t[13]||(t[13]=o("",5)),t[14]||(t[14]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[15]||(t[15]=o("",5)),t[16]||(t[16]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "amazon-bedrock": {
      "options": {
        "region": "us-east-1",
        "profile": "my-aws-profile",
        "endpoint": "https://bedrock-runtime.us-east-1.vpce-xxxxx.amazonaws.com"
      }
    }
  }
}`)])],-1)),t[17]||(t[17]=o("",3)),t[18]||(t[18]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "disabled_providers": ["openai", "gemini"],
  "enabled_providers": ["anthropic"]
}`)])],-1)),t[19]||(t[19]=o("",5)),t[20]||(t[20]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "username": "张三"
}`)])],-1)),t[21]||(t[21]=e("p",null,"在对话中显示自定义用户名，而不是系统用户名。",-1)),t[22]||(t[22]=e("hr",null,null,-1)),t[23]||(t[23]=e("h2",{id:"主题配置",tabindex:"-1"},[d("主题配置 "),e("a",{class:"header-anchor",href:"#主题配置","aria-label":"Permalink to “主题配置”"},"​")],-1)),t[24]||(t[24]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "theme": "tokyonight"
}`)])],-1)),t[25]||(t[25]=e("blockquote",null,[e("p",null,[d("注意：配置键是 "),e("code",null,"theme"),d("，不是 "),e("code",null,"tui.theme"),d("。")])],-1)),t[26]||(t[26]=e("hr",null,null,-1)),t[27]||(t[27]=e("h2",{id:"自动更新",tabindex:"-1"},[d("自动更新 "),e("a",{class:"header-anchor",href:"#自动更新","aria-label":"Permalink to “自动更新”"},"​")],-1)),t[28]||(t[28]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "autoupdate": true
}`)])],-1)),t[29]||(t[29]=o("",6)),t[30]||(t[30]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "model": "{env:OPENCODE_MODEL}",
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}"
      }
    }
  }
}`)])],-1)),t[31]||(t[31]=e("blockquote",null,[e("p",null,"如果环境变量不存在，会被替换为空字符串。")],-1)),t[32]||(t[32]=e("h3",{id:"文件内容",tabindex:"-1"},[d("文件内容 "),e("a",{class:"header-anchor",href:"#文件内容","aria-label":"Permalink to “文件内容”"},"​")],-1)),t[33]||(t[33]=e("p",null,[d("使用 "),e("code",null,"{file:路径}"),d(" 引用文件内容：")],-1)),t[34]||(t[34]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "options": {
        "apiKey": "{file:~/.secrets/openai-key}"
      }
    }
  }
}`)])],-1)),t[35]||(t[35]=o("",6)),t[36]||(t[36]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  
  // 模型
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
  
  // Provider 控制
  "disabled_providers": ["gemini"],
  
  // 用户
  "username": "开发者",
  
  // 主题
  "theme": "catppuccin",
  
  // 自动更新
  "autoupdate": true
}`)])],-1)),t[37]||(t[37]=o("",10))])}const C=n(c,[["render",h]]);export{v as __pageData,C as default};
