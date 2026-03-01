import{_ as n,c as s,o as r,a5 as a,j as e,a as i}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"v1.1.1: Permission System Overhaul","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/v1.1.1.md","filePath":"en/changelog/v1.1.1.md","lastUpdated":1772014034000}'),l={name:"en/changelog/v1.1.1.md"};function t(d,o,c,h,m,p){return r(),s("div",null,[...o[0]||(o[0]=[a("",9),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "npm *": "allow",
      "git *": "allow",
      "rm *": "deny",
      "*": "ask"
    }
  }
}`)])],-1),a("",4),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "bash": true,
    "edit": false
  }
}`)])],-1),e("p",null,[e("strong",null,"New syntax"),i(":")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": "allow",
    "edit": "deny"
  }
}`)])],-1),e("blockquote",null,[e("p",null,"Old configuration is still compatible and will be auto-migrated. But we recommend updating soon.")],-1),e("h3",{id:"one-click-global-permission",tabindex:"-1"},[i("One-click Global Permission "),e("a",{class:"header-anchor",href:"#one-click-global-permission","aria-label":"Permalink to “One-click Global Permission”"},"​")],-1),e("p",null,"Want to simplify configuration? One line does it all:",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": "allow"
}`)])],-1),a("",9),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode upgrade")])],-1),a("",5)])])}const b=n(l,[["render",t]]);export{g as __pageData,b as default};
