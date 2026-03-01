import{_ as d,I as l,c as r,o as i,a5 as o,J as s,j as e,a as n,bj as p}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.12a 插件基础","description":"学习 OpenCode 插件基础，通过钩子机制扩展功能，安装和配置插件。","frontmatter":{"title":"5.12a 插件基础","subtitle":"通过钩子扩展功能","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.12a","duration":"20 分钟","practice":"25 分钟","level":"进阶","description":"学习 OpenCode 插件基础，通过钩子机制扩展功能，安装和配置插件。","tags":["插件","钩子","扩展"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/12a-plugins-basics.md","filePath":"5-advanced/12a-plugins-basics.md","lastUpdated":1772014034000}'),c={name:"5-advanced/12a-plugins-basics.md"};function u(h,t,b,g,m,f){const a=l("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=o("",21)),s(a),t[1]||(t[1]=e("p",null,"在配置文件中指定 npm 包：",-1)),t[2]||(t[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "opencode-helicone-session",
    "opencode-wakatime",
    "@my-org/custom-plugin"
  ]
}`)])],-1)),t[3]||(t[3]=e("p",null,[n("支持普通包和作用域包（"),e("code",null,"@scope/package"),n("）。")],-1)),t[4]||(t[4]=e("hr",null,null,-1)),t[5]||(t[5]=e("h2",{id:"插件安装机制",tabindex:"-1"},[n("插件安装机制 "),e("a",{class:"header-anchor",href:"#插件安装机制","aria-label":"Permalink to “插件安装机制”"},"​")],-1)),t[6]||(t[6]=e("h3",{id:"npm-插件",tabindex:"-1"},[n("npm 插件 "),e("a",{class:"header-anchor",href:"#npm-插件","aria-label":"Permalink to “npm 插件”"},"​")],-1)),t[7]||(t[7]=e("p",null,"启动时使用 Bun 自动安装。包及其依赖缓存在：",-1)),t[8]||(t[8]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"~/.cache/opencode/node_modules/")])],-1)),t[9]||(t[9]=e("h3",{id:"本地插件",tabindex:"-1"},[n("本地插件 "),e("a",{class:"header-anchor",href:"#本地插件","aria-label":"Permalink to “本地插件”"},"​")],-1)),t[10]||(t[10]=e("p",null,[n("直接从插件目录加载。要使用外部 npm 包，需在配置目录创建 "),e("code",null,"package.json"),n("：")],-1)),t[11]||(t[11]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/package.json
{
  "dependencies": {
    "shescape": "^2.1.0"
  }
}`)])],-1)),t[12]||(t[12]=o("",14)),t[13]||(t[13]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/example.js
export const MyPlugin = async ({ project, client, $, directory, worktree, serverUrl }) => {
  console.log("Plugin initialized!")

  return {
    // 钩子实现
  }
}`)])],-1)),t[14]||(t[14]=o("",4)),t[15]||(t[15]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/my-plugin.ts
import type { Plugin } from "@opencode-ai/plugin"

export const MyPlugin: Plugin = async ({ project, client, $, directory, worktree, serverUrl }) => {
  return {
    // 类型安全的钩子实现
  }
}`)])],-1)),t[16]||(t[16]=e("p",null,[n("插件包会在启动时自动安装到 "),e("code",null,".opencode/node_modules/"),n("。")],-1)),t[17]||(t[17]=e("hr",null,null,-1)),t[18]||(t[18]=e("h2",{id:"简单示例",tabindex:"-1"},[n("简单示例 "),e("a",{class:"header-anchor",href:"#简单示例","aria-label":"Permalink to “简单示例”"},"​")],-1)),t[19]||(t[19]=e("h3",{id:"发送通知",tabindex:"-1"},[n("发送通知 "),e("a",{class:"header-anchor",href:"#发送通知","aria-label":"Permalink to “发送通知”"},"​")],-1)),t[20]||(t[20]=e("p",null,"当会话完成时发送系统通知：",-1)),t[21]||(t[21]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/notification.js
export const NotificationPlugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await $\`osascript -e 'display notification "Session completed!" with title "OpenCode"'\`
      }
    },
  }
}`)])],-1)),t[22]||(t[22]=e("blockquote",null,[e("p",null,"如果你使用 OpenCode 桌面应用，它可以在响应就绪或会话出错时自动发送系统通知。")],-1)),t[23]||(t[23]=e("h3",{id:"env-文件保护",tabindex:"-1"},[n(".env 文件保护 "),e("a",{class:"header-anchor",href:"#env-文件保护","aria-label":"Permalink to “.env 文件保护”"},"​")],-1)),t[24]||(t[24]=e("p",null,[n("阻止 OpenCode 读取 "),e("code",null,".env"),n(" 文件：")],-1)),t[25]||(t[25]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/env-protection.js
export const EnvProtection = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool === "read" && output.args.filePath.includes(".env")) {
        throw new Error("Do not read .env files")
      }
    },
  }
}`)])],-1)),t[26]||(t[26]=e("h3",{id:"日志记录",tabindex:"-1"},[n("日志记录 "),e("a",{class:"header-anchor",href:"#日志记录","aria-label":"Permalink to “日志记录”"},"​")],-1)),t[27]||(t[27]=e("p",null,[n("使用 "),e("code",null,"client.app.log()"),n(" 替代 "),e("code",null,"console.log"),n(" 进行结构化日志记录：")],-1)),t[28]||(t[28]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/my-plugin.ts
export const MyPlugin = async ({ client }) => {
  await client.app.log({
    service: "my-plugin",
    level: "info",
    message: "Plugin initialized",
    extra: { foo: "bar" },
  })

  return {}
}`)])],-1)),t[29]||(t[29]=o("",11))])}const v=d(c,[["render",u]]);export{P as __pageData,v as default};
