import{_ as o,I as i,c as s,o as l,a5 as a,J as d,j as e,a as r,bf as p}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.11 Enterprise Features","description":"Learn about OpenCode Enterprise deployment options and data security features for team collaboration.","frontmatter":{"title":"5.11 Enterprise Features","subtitle":"Team and Enterprise Capabilities","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.11","duration":"15 minutes","level":"Advanced","description":"Learn about OpenCode Enterprise deployment options and data security features for team collaboration.","tags":["Enterprise","Team"],"prerequisite":["5.1 Configuration Guide"]},"headers":[],"relativePath":"en/5-advanced/11-enterprise.md","filePath":"en/5-advanced/11-enterprise.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/11-enterprise.md"};function c(h,t,g,f,m,y){const n=i("AdInArticle");return l(),s("div",null,[t[0]||(t[0]=a("",20)),d(n),t[1]||(t[1]=a("",7)),t[2]||(t[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "share": "disabled"
}`)])],-1)),t[3]||(t[3]=a("",31)),t[4]||(t[4]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "enterprise": {
    "url": "https://your-company.opencode.internal"
  }
}`)])],-1)),t[5]||(t[5]=a("",6)),t[6]||(t[6]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"npm login --registry=https://your-company.jfrog.io/api/npm/npm-virtual/")])],-1)),t[7]||(t[7]=e("p",null,[r("This creates authentication credentials in "),e("code",null,"~/.npmrc"),r(", which OpenCode will automatically use.")],-1)),t[8]||(t[8]=e("p",null,[e("strong",null,[r("Manually configure "),e("code",null,".npmrc"),r(":")])],-1)),t[9]||(t[9]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# ~/.npmrc
registry=https://your-company.jfrog.io/api/npm/npm-virtual/
//your-company.jfrog.io/api/npm/npm-virtual/:_authToken=\${NPM_AUTH_TOKEN}`)])],-1)),t[10]||(t[10]=a("",18))])}const C=o(u,[["render",c]]);export{v as __pageData,C as default};
