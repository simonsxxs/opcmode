import{_ as a,c as r,o as n,a5 as d,j as t,a as e,by as c}from"./chunks/framework.Dtwt352Q.js";const m=JSON.parse('{"title":"opencode.json 配置详解","description":"opencode.json 配置文件的详细参考手册，涵盖所有可用字段","frontmatter":{"title":"opencode.json 配置详解","description":"opencode.json 配置文件的详细参考手册，涵盖所有可用字段"},"headers":[],"relativePath":"appendix/config-ref.md","filePath":"appendix/config-ref.md","lastUpdated":1772014034000}'),l={name:"appendix/config-ref.md"};function s(i,o,h,p,b,_){return n(),r("div",null,[...o[0]||(o[0]=[d("",23),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"tui": {
  "scroll_speed": 3,
  "diff_style": "auto"
}`)])],-1),d("",5),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"provider": {
  "anthropic": {
    "options": {
      "apiKey": "sk-...",
      "timeout": 600000
    }
  }
}`)])],-1),d("",8),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"provider": {
  "anthropic": {
    "models": {
      "claude-3-7-sonnet": {
        "variants": {
          "thinking": { "disabled": true }
        }
      }
    }
  }
}`)])],-1),d("",4),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"agent": {
  "code-reviewer": {
    "mode": "subagent",
    "prompt": "You are a code reviewer...",
    "permission": { "edit": "deny" }
  }
}`)])],-1),d("",8),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"permission": {
  "edit": "ask",
  "bash": {
    "*": "ask",
    "git *": "allow",
    "rm *": "deny"
  }
}`)])],-1),d("",6),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"command": {
  "commit": {
    "template": "Generate a commit message for these changes:\\n$DIFF",
    "agent": "build"
  }
}`)])],-1),d("",5),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"keybinds": {
  "leader": "ctrl+x",
  "session_new": "<leader>n"
}`)])],-1),d("",5),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"server": {
  "port": 4096,
  "hostname": "0.0.0.0",
  "mdns": true,
  "mdnsDomain": "opencode.local"
}`)])],-1),d("",4),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"experimental": {
  "batch_tool": true,
  "openTelemetry": true
}`)])],-1),d("",6),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"compaction": {
  "auto": true,
  "prune": true,
  "reserved": 10000
}`)])],-1),d("",3),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"watcher": {
  "ignore": ["node_modules/**", ".git/**"]
}`)])],-1),t("ul",null,[t("li",null,[t("code",null,"ignore"),e(": 忽略监视的文件 glob 模式列表。")])],-1),t("h3",{id:"instructions-指令",tabindex:"-1"},[e("instructions (指令) "),t("a",{class:"header-anchor",href:"#instructions-指令","aria-label":"Permalink to “instructions (指令)”"},"​")],-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},'"instructions": ["docs/rules.md", ".cursor/rules/*.md"]')])],-1),t("p",null,"指定额外的全局指令文件列表。",-1),t("h3",{id:"plugin-插件",tabindex:"-1"},[e("plugin (插件) "),t("a",{class:"header-anchor",href:"#plugin-插件","aria-label":"Permalink to “plugin (插件)”"},"​")],-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},'"plugin": ["opencode-helicone-session", "./my-plugin.js"]')])],-1),t("p",null,"要加载的插件列表。支持 npm 包名或本地文件路径。",-1),t("h3",{id:"skills-技能路径",tabindex:"-1"},[e("skills (技能路径) "),t("a",{class:"header-anchor",href:"#skills-技能路径","aria-label":"Permalink to “skills (技能路径)”"},"​")],-1),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"skills": {
  "paths": ["./skills", "~/shared-skills"],
  "urls": ["https://example.com/.well-known/skills/"]
}`)])],-1),d("",8),t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`"enterprise": {
  "url": "https://github.example.com"
}`)])],-1),d("",4)])])}const g=a(l,[["render",s]]);export{m as __pageData,g as default};
