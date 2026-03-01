import{_ as t,c as r,o as i,a5 as a,j as e}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"v1.1.50：shell.env Hook、Skills 路径扩展、内存泄漏修复","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/v1.1.50.md","filePath":"changelog/v1.1.50.md","lastUpdated":1772014034000}'),o={name:"changelog/v1.1.50.md"};function n(s,l,d,h,c,p){return i(),r("div",null,[...l[0]||(l[0]=[a("",13),e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugins/inject-env.js
export const InjectEnvPlugin = async () => {
  return {
    "shell.env": async (input, output) => {
      output.env.MY_API_KEY = "secret"
      output.env.PROJECT_ROOT = input.cwd
    },
  }
}`)])],-1),a("",44),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode upgrade")])],-1),a("",5)])])}const b=t(o,[["render",n]]);export{k as __pageData,b as default};
