import{_ as n,I as d,c as l,o as s,a5 as t,J as p,j as e,a as r,bf as i}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.11 企业版功能","description":"了解 OpenCode 企业版的部署选项和数据安全保障，支持团队协作。","frontmatter":{"title":"5.11 企业版功能","subtitle":"团队和企业特性","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.11","duration":"15 分钟","level":"进阶","description":"了解 OpenCode 企业版的部署选项和数据安全保障，支持团队协作。","tags":["企业","团队"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/11-enterprise.md","filePath":"5-advanced/11-enterprise.md","lastUpdated":1772014034000}'),h={name:"5-advanced/11-enterprise.md"};function c(b,a,u,m,_,g){const o=d("AdInArticle");return s(),l("div",null,[a[0]||(a[0]=t("",20)),p(o),a[1]||(a[1]=t("",7)),a[2]||(a[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "share": "disabled"
}`)])],-1)),a[3]||(a[3]=t("",31)),a[4]||(a[4]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "enterprise": {
    "url": "https://your-company.opencode.internal"
  }
}`)])],-1)),a[5]||(a[5]=t("",6)),a[6]||(a[6]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"npm login --registry=https://your-company.jfrog.io/api/npm/npm-virtual/")])],-1)),a[7]||(a[7]=e("p",null,[r("这会在 "),e("code",null,"~/.npmrc"),r(" 中创建认证信息，OpenCode 会自动使用它。")],-1)),a[8]||(a[8]=e("p",null,[e("strong",null,[r("手动配置 "),e("code",null,".npmrc"),r("：")])],-1)),a[9]||(a[9]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# ~/.npmrc
registry=https://your-company.jfrog.io/api/npm/npm-virtual/
//your-company.jfrog.io/api/npm/npm-virtual/:_authToken=\${NPM_AUTH_TOKEN}`)])],-1)),a[10]||(a[10]=t("",18))])}const C=n(h,[["render",c]]);export{k as __pageData,C as default};
