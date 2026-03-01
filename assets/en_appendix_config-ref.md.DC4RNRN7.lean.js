import{_ as n,c as r,o as a,a5 as t,j as e,a as o,by as i}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"opencode.json Configuration Reference","description":"Complete reference manual for opencode.json configuration file, covering all available fields","frontmatter":{"title":"opencode.json Configuration Reference","description":"Complete reference manual for opencode.json configuration file, covering all available fields"},"headers":[],"relativePath":"en/appendix/config-ref.md","filePath":"en/appendix/config-ref.md","lastUpdated":1772014034000}'),s={name:"en/appendix/config-ref.md"};function c(l,d,p,h,u,m){return a(),r("div",null,[...d[0]||(d[0]=[t("",23),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"tui": {
  "scroll_speed": 3,
  "diff_style": "auto"
}`)])],-1),t("",5),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"provider": {
  "anthropic": {
    "options": {
      "apiKey": "sk-...",
      "timeout": 600000
    }
  }
}`)])],-1),t("",8),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"provider": {
  "anthropic": {
    "models": {
      "claude-3-7-sonnet": {
        "variants": {
          "thinking": { "disabled": true }
        }
      }
    }
  }
}`)])],-1),t("",4),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"agent": {
  "code-reviewer": {
    "mode": "subagent",
    "prompt": "You are a code reviewer...",
    "permission": { "edit": "deny" }
  }
}`)])],-1),t("",8),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"permission": {
  "edit": "ask",
  "bash": {
    "*": "ask",
    "git *": "allow",
    "rm *": "deny"
  }
}`)])],-1),t("",6),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"command": {
  "commit": {
    "template": "Generate a commit message for these changes:\\n$DIFF",
    "agent": "build"
  }
}`)])],-1),t("",5),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"keybinds": {
  "leader": "ctrl+x",
  "session_new": "<leader>n"
}`)])],-1),t("",5),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"server": {
  "port": 4096,
  "hostname": "0.0.0.0",
  "mdns": true,
  "mdnsDomain": "opencode.local"
}`)])],-1),t("",4),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"experimental": {
  "batch_tool": true,
  "openTelemetry": true
}`)])],-1),t("",6),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"compaction": {
  "auto": true,
  "prune": true,
  "reserved": 10000
}`)])],-1),t("",3),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"watcher": {
  "ignore": ["node_modules/**", ".git/**"]
}`)])],-1),e("ul",null,[e("li",null,[e("code",null,"ignore"),o(": List of file glob patterns to ignore watching.")])],-1),e("h3",{id:"instructions",tabindex:"-1"},[o("instructions "),e("a",{class:"header-anchor",href:"#instructions","aria-label":"Permalink to “instructions”"},"​")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},'"instructions": ["docs/rules.md", ".cursor/rules/*.md"]')])],-1),e("p",null,"List of additional global instruction files.",-1),e("h3",{id:"plugin",tabindex:"-1"},[o("plugin "),e("a",{class:"header-anchor",href:"#plugin","aria-label":"Permalink to “plugin”"},"​")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},'"plugin": ["opencode-helicone-session", "./my-plugin.js"]')])],-1),e("p",null,"List of plugins to load. Supports npm package names or local file paths.",-1),e("h3",{id:"skills",tabindex:"-1"},[o("skills "),e("a",{class:"header-anchor",href:"#skills","aria-label":"Permalink to “skills”"},"​")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"skills": {
  "paths": ["./skills", "~/shared-skills"],
  "urls": ["https://example.com/.well-known/skills/"]
}`)])],-1),t("",8),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`"enterprise": {
  "url": "https://github.example.com"
}`)])],-1),t("",4)])])}const b=n(s,[["render",c]]);export{f as __pageData,b as default};
