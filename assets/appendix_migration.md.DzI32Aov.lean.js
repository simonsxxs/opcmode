import{_ as r,I as t,c as d,o as n,a5 as l,j as e,J as s,a as o}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"迁移指南","description":"从 OpenCode 0.x 迁移到 1.0 的完整指南","frontmatter":{"title":"迁移指南","description":"从 OpenCode 0.x 迁移到 1.0 的完整指南"},"headers":[],"relativePath":"appendix/migration.md","filePath":"appendix/migration.md","lastUpdated":1772014034000}'),c={name:"appendix/migration.md"};function h(p,a,b,g,_,u){const i=t("AdInArticle");return n(),d("div",null,[a[0]||(a[0]=l("",11)),a[1]||(a[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 升级到 1.0
opencode upgrade 1.0.0

# 降级回 0.x
opencode upgrade 0.15.31`)])],-1)),a[2]||(a[2]=e("h3",{id:"手动升级",tabindex:"-1"},[o("手动升级 "),e("a",{class:"header-anchor",href:"#手动升级","aria-label":"Permalink to “手动升级”"},"​")],-1)),a[3]||(a[3]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# npm
npm install -g opencode-ai

# Homebrew
brew upgrade opencode

# Scoop
scoop update opencode`)])],-1)),a[4]||(a[4]=e("blockquote",null,[e("p",null,"注意：如果你使用的是旧版本，可能不会自动升级到 1.0。某些更老的版本会自动获取最新版。")],-1)),a[5]||(a[5]=e("hr",null,null,-1)),a[6]||(a[6]=e("h2",{id:"ux-变更",tabindex:"-1"},[o("UX 变更 "),e("a",{class:"header-anchor",href:"#ux-变更","aria-label":"Permalink to “UX 变更”"},"​")],-1)),s(i),a[7]||(a[7]=l("",20)),a[8]||(a[8]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 降级到 0.x
opencode upgrade 0.15.31`)])],-1)),a[9]||(a[9]=l("",6))])}const x=r(c,[["render",h]]);export{f as __pageData,x as default};
