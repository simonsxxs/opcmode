import{_ as o,c as r,o as i,a5 as a,j as e}from"./chunks/framework.Dtwt352Q.js";const u=JSON.parse('{"title":"v1.1.50: shell.env Hook, Skills Path Extension, Memory Leak Fix","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/v1.1.50.md","filePath":"en/changelog/v1.1.50.md","lastUpdated":1772014034000}'),l={name:"en/changelog/v1.1.50.md"};function s(n,t,d,h,c,p){return i(),r("div",null,[...t[0]||(t[0]=[a("",13),e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugins/inject-env.js
export const InjectEnvPlugin = async () => {
  return {
    "shell.env": async (input, output) => {
      output.env.MY_API_KEY = "secret"
      output.env.PROJECT_ROOT = input.cwd
    },
  }
}`)])],-1),a("",44),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode upgrade")])],-1),a("",5)])])}const g=o(l,[["render",s]]);export{u as __pageData,g as default};
