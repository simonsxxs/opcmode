import{_ as i,I as l,c as s,o as r,a5 as o,J as d,j as e,a as t,bj as p}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.12a Plugin Basics","description":"Learn OpenCode plugin basics, extend functionality through hooks mechanism, install and configure plugins.","frontmatter":{"title":"5.12a Plugin Basics","subtitle":"Extending functionality through hooks","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.12a","duration":"20 minutes","practice":"25 minutes","level":"Advanced","description":"Learn OpenCode plugin basics, extend functionality through hooks mechanism, install and configure plugins.","tags":["plugin","hook","extension"],"prerequisite":["5.1 Configuration Complete"]},"headers":[],"relativePath":"en/5-advanced/12a-plugins-basics.md","filePath":"en/5-advanced/12a-plugins-basics.md","lastUpdated":1772014034000}'),c={name:"en/5-advanced/12a-plugins-basics.md"};function u(g,n,h,m,f,b){const a=l("AdInArticle");return r(),s("div",null,[n[0]||(n[0]=o("",21)),d(a),n[1]||(n[1]=e("p",null,"Specify npm packages in your configuration file:",-1)),n[2]||(n[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "opencode-helicone-session",
    "opencode-wakatime",
    "@my-org/custom-plugin"
  ]
}`)])],-1)),n[3]||(n[3]=e("p",null,[t("Both regular and scoped packages ("),e("code",null,"@scope/package"),t(") are supported.")],-1)),n[4]||(n[4]=e("hr",null,null,-1)),n[5]||(n[5]=e("h2",{id:"plugin-installation-mechanism",tabindex:"-1"},[t("Plugin Installation Mechanism "),e("a",{class:"header-anchor",href:"#plugin-installation-mechanism","aria-label":"Permalink to “Plugin Installation Mechanism”"},"​")],-1)),n[6]||(n[6]=e("h3",{id:"npm-plugins",tabindex:"-1"},[t("npm Plugins "),e("a",{class:"header-anchor",href:"#npm-plugins","aria-label":"Permalink to “npm Plugins”"},"​")],-1)),n[7]||(n[7]=e("p",null,"Automatically installed using Bun at startup. Packages and their dependencies are cached at:",-1)),n[8]||(n[8]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"~/.cache/opencode/node_modules/")])],-1)),n[9]||(n[9]=e("h3",{id:"local-plugins",tabindex:"-1"},[t("Local Plugins "),e("a",{class:"header-anchor",href:"#local-plugins","aria-label":"Permalink to “Local Plugins”"},"​")],-1)),n[10]||(n[10]=e("p",null,[t("Loaded directly from plugin directories. To use external npm packages, create a "),e("code",null,"package.json"),t(" in the config directory:")],-1)),n[11]||(n[11]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/package.json
{
  "dependencies": {
    "shescape": "^2.1.0"
  }
}`)])],-1)),n[12]||(n[12]=o("",14)),n[13]||(n[13]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/example.js
export const MyPlugin = async ({ project, client, $, directory, worktree, serverUrl }) => {
  console.log("Plugin initialized!")

  return {
    // Hook implementations
  }
}`)])],-1)),n[14]||(n[14]=o("",4)),n[15]||(n[15]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/my-plugin.ts
import type { Plugin } from "@opencode-ai/plugin"

export const MyPlugin: Plugin = async ({ project, client, $, directory, worktree, serverUrl }) => {
  return {
    // Type-safe hook implementations
  }
}`)])],-1)),n[16]||(n[16]=e("p",null,[t("The plugin package is automatically installed to "),e("code",null,".opencode/node_modules/"),t(" at startup.")],-1)),n[17]||(n[17]=e("hr",null,null,-1)),n[18]||(n[18]=e("h2",{id:"simple-examples",tabindex:"-1"},[t("Simple Examples "),e("a",{class:"header-anchor",href:"#simple-examples","aria-label":"Permalink to “Simple Examples”"},"​")],-1)),n[19]||(n[19]=e("h3",{id:"sending-notifications",tabindex:"-1"},[t("Sending Notifications "),e("a",{class:"header-anchor",href:"#sending-notifications","aria-label":"Permalink to “Sending Notifications”"},"​")],-1)),n[20]||(n[20]=e("p",null,"Send a system notification when a session completes:",-1)),n[21]||(n[21]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/notification.js
export const NotificationPlugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await $\`osascript -e 'display notification "Session completed!" with title "OpenCode"'\`
      }
    },
  }
}`)])],-1)),n[22]||(n[22]=e("blockquote",null,[e("p",null,"If you use the OpenCode desktop app, it can automatically send system notifications when a response is ready or a session encounters an error.")],-1)),n[23]||(n[23]=e("h3",{id:"env-file-protection",tabindex:"-1"},[t(".env File Protection "),e("a",{class:"header-anchor",href:"#env-file-protection","aria-label":"Permalink to “.env File Protection”"},"​")],-1)),n[24]||(n[24]=e("p",null,[t("Prevent OpenCode from reading "),e("code",null,".env"),t(" files:")],-1)),n[25]||(n[25]=e("div",{class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/env-protection.js
export const EnvProtection = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool === "read" && output.args.filePath.includes(".env")) {
        throw new Error("Do not read .env files")
      }
    },
  }
}`)])],-1)),n[26]||(n[26]=e("h3",{id:"logging",tabindex:"-1"},[t("Logging "),e("a",{class:"header-anchor",href:"#logging","aria-label":"Permalink to “Logging”"},"​")],-1)),n[27]||(n[27]=e("p",null,[t("Use "),e("code",null,"client.app.log()"),t(" instead of "),e("code",null,"console.log"),t(" for structured logging:")],-1)),n[28]||(n[28]=e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`// .opencode/plugin/my-plugin.ts
export const MyPlugin = async ({ client }) => {
  await client.app.log({
    service: "my-plugin",
    level: "info",
    message: "Plugin initialized",
    extra: { foo: "bar" },
  })

  return {}
}`)])],-1)),n[29]||(n[29]=o("",11))])}const x=i(c,[["render",u]]);export{P as __pageData,x as default};
