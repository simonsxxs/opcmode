import{_ as r,I as n,c as s,o as i,a5 as o,J as l,j as t,a,bq as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"5.18 Code Formatters","description":"Configure OpenCode to use formatters like Prettier, Biome, gofmt, etc., for automatic code formatting.","frontmatter":{"title":"5.18 Code Formatters","subtitle":"Automatic Code Formatting Configuration","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.18","duration":"10 minutes","level":"Advanced","description":"Configure OpenCode to use formatters like Prettier, Biome, gofmt, etc., for automatic code formatting.","tags":["Formatting","Code Style","Prettier"],"prerequisite":["5.1 Configuration Complete Guide"]},"headers":[],"relativePath":"en/5-advanced/18-formatters.md","filePath":"en/5-advanced/18-formatters.md","lastUpdated":1772014034000}'),m={name:"en/5-advanced/18-formatters.md"};function p(f,e,u,h,g,b){const d=n("AdInArticle");return i(),s("div",null,[e[0]||(e[0]=o("",10)),l(d),e[1]||(e[1]=o("",5)),e[2]||(e[2]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "formatter": {}
}`)])],-1)),e[3]||(e[3]=o("",4)),e[4]||(e[4]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "formatter": false
}`)])],-1)),e[5]||(e[5]=t("p",null,[a("Disable a "),t("strong",null,"specific"),a(" formatter:")],-1)),e[6]||(e[6]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "formatter": {
    "prettier": {
      "disabled": true
    }
  }
}`)])],-1)),e[7]||(e[7]=t("h3",{id:"custom-formatters",tabindex:"-1"},[a("Custom Formatters "),t("a",{class:"header-anchor",href:"#custom-formatters","aria-label":"Permalink to “Custom Formatters”"},"​")],-1)),e[8]||(e[8]=t("p",null,"You can override built-in formatters or add new ones:",-1)),e[9]||(e[9]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
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
}`)])],-1)),e[10]||(e[10]=o("",3))])}const C=r(m,[["render",p]]);export{x as __pageData,C as default};
