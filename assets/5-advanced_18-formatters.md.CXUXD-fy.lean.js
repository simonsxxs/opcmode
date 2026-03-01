import{_ as a,I as n,c as s,o as l,a5 as e,J as i,j as t,a as o,bq as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"5.18 代码格式化器","description":"配置 OpenCode 使用 Prettier、Biome、gofmt 等格式化器，自动格式化代码。","frontmatter":{"title":"5.18 代码格式化器","subtitle":"自动代码格式化配置","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.18","duration":"10 分钟","level":"进阶","description":"配置 OpenCode 使用 Prettier、Biome、gofmt 等格式化器，自动格式化代码。","tags":["格式化","代码风格","Prettier"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/18-formatters.md","filePath":"5-advanced/18-formatters.md","lastUpdated":1772014034000}'),p={name:"5-advanced/18-formatters.md"};function m(f,d,h,b,g,_){const r=n("AdInArticle");return l(),s("div",null,[d[0]||(d[0]=e("",10)),i(r),d[1]||(d[1]=e("",5)),d[2]||(d[2]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "formatter": {}
}`)])],-1)),d[3]||(d[3]=e("",4)),d[4]||(d[4]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "formatter": false
}`)])],-1)),d[5]||(d[5]=t("p",null,[o("禁用"),t("strong",null,"特定"),o("格式化器：")],-1)),d[6]||(d[6]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "formatter": {
    "prettier": {
      "disabled": true
    }
  }
}`)])],-1)),d[7]||(d[7]=t("h3",{id:"自定义格式化器",tabindex:"-1"},[o("自定义格式化器 "),t("a",{class:"header-anchor",href:"#自定义格式化器","aria-label":"Permalink to “自定义格式化器”"},"​")],-1)),d[8]||(d[8]=t("p",null,"可以覆盖内置格式化器或添加新的：",-1)),d[9]||(d[9]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "formatter": {
    "prettier": {
      "command": ["npx", "prettier", "--write", "$FILE"],
      "environment": {
        "NODE_ENV": "development"
      },
      "extensions": [".js", ".ts", ".jsx", ".tsx"]
    },
    "custom-markdown-formatter": {
      "command": ["deno", "fmt", "$FILE"],
      "extensions": [".md"]
    }
  }
}`)])],-1)),d[10]||(d[10]=e("",3))])}const j=a(p,[["render",m]]);export{x as __pageData,j as default};
