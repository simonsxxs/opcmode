import{_ as n,I as t,c as l,o as d,a5 as o,j as e,J as s,a as i}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"Migration Guide","description":"Complete guide for migrating from OpenCode 0.x to 1.0","frontmatter":{"title":"Migration Guide","description":"Complete guide for migrating from OpenCode 0.x to 1.0"},"headers":[],"relativePath":"en/appendix/migration.md","filePath":"en/appendix/migration.md","lastUpdated":1772014034000}'),c={name:"en/appendix/migration.md"};function g(p,a,h,u,m,b){const r=t("AdInArticle");return d(),l("div",null,[a[0]||(a[0]=o("",11)),a[1]||(a[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Upgrade to 1.0
opencode upgrade 1.0.0

# Downgrade back to 0.x
opencode upgrade 0.15.31`)])],-1)),a[2]||(a[2]=e("h3",{id:"manual-upgrade",tabindex:"-1"},[i("Manual Upgrade "),e("a",{class:"header-anchor",href:"#manual-upgrade","aria-label":"Permalink to “Manual Upgrade”"},"​")],-1)),a[3]||(a[3]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# npm
npm install -g opencode-ai

# Homebrew
brew upgrade opencode

# Scoop
scoop update opencode`)])],-1)),a[4]||(a[4]=e("blockquote",null,[e("p",null,"Note: If you are using an older version, it may not automatically upgrade to 1.0. Some older versions will automatically fetch the latest version.")],-1)),a[5]||(a[5]=e("hr",null,null,-1)),a[6]||(a[6]=e("h2",{id:"ux-changes",tabindex:"-1"},[i("UX Changes "),e("a",{class:"header-anchor",href:"#ux-changes","aria-label":"Permalink to “UX Changes”"},"​")],-1)),s(r),a[7]||(a[7]=o("",20)),a[8]||(a[8]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Downgrade to 0.x
opencode upgrade 0.15.31`)])],-1)),a[9]||(a[9]=o("",6))])}const k=n(c,[["render",g]]);export{_ as __pageData,k as default};
