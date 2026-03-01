import{_ as s,c as i,o as n,a5 as e,j as a,a as o}from"./chunks/framework.Dtwt352Q.js";const u=JSON.parse('{"title":"v1.1.1：权限系统大重构","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/v1.1.1.md","filePath":"changelog/v1.1.1.md","lastUpdated":1772014034000}'),r={name:"changelog/v1.1.1.md"};function t(d,l,c,h,p,_){return n(),i("div",null,[...l[0]||(l[0]=[e("",9),a("div",{class:"language-json"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"json"),a("pre",null,[a("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "npm *": "allow",
      "git *": "allow",
      "rm *": "deny",
      "*": "ask"
    }
  }
}`)])],-1),e("",4),a("div",{class:"language-json"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"json"),a("pre",null,[a("code",{"v-pre":""},`{
  "tools": {
    "bash": true,
    "edit": false
  }
}`)])],-1),a("p",null,[a("strong",null,"新写法"),o("：")],-1),a("div",{class:"language-json"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"json"),a("pre",null,[a("code",{"v-pre":""},`{
  "permission": {
    "bash": "allow",
    "edit": "deny"
  }
}`)])],-1),a("blockquote",null,[a("p",null,"旧配置仍然兼容，会自动迁移。但建议尽快更新。")],-1),a("h3",{id:"一键全局权限",tabindex:"-1"},[o("一键全局权限 "),a("a",{class:"header-anchor",href:"#一键全局权限","aria-label":"Permalink to “一键全局权限”"},"​")],-1),a("p",null,"想简化配置？一句话搞定：",-1),a("div",{class:"language-json"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"json"),a("pre",null,[a("code",{"v-pre":""},`{
  "permission": "allow"
}`)])],-1),e("",9),a("div",{class:"language-bash"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",null,[a("code",{"v-pre":""},"opencode upgrade")])],-1),e("",5)])])}const b=s(r,[["render",t]]);export{u as __pageData,b as default};
