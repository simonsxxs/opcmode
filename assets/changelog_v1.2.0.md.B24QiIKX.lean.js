import{_ as t,c as r,o as n,a5 as l,j as a,a as e}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"v1.2.0：SQLite 数据库重构","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/v1.2.0.md","filePath":"changelog/v1.2.0.md","lastUpdated":1772014034000}'),o={name:"changelog/v1.2.0.md"};function d(s,i,h,c,p,u){return n(),r("div",null,[...i[0]||(i[0]=[l("",17),a("div",{class:"language-bash"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",null,[a("code",{"v-pre":""},`# 在指定目录运行
opencode run --dir /path/to/project "修复登录页面的 Bug"`)])],-1),a("h3",{id:"timeout-参数-设置超时时间",tabindex:"-1"},[a("code",null,"--timeout"),e(" 参数：设置超时时间 "),a("a",{class:"header-anchor",href:"#timeout-参数-设置超时时间","aria-label":"Permalink to “--timeout 参数：设置超时时间”"},"​")],-1),a("p",null,"超时配置从 API 移到 CLI，更容易控制：",-1),a("div",{class:"language-bash"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",null,[a("code",{"v-pre":""},`# 设置 5 分钟超时
opencode --timeout 300`)])],-1),a("hr",null,null,-1),a("h2",{id:"sdk-更新-partdelta-事件",tabindex:"-1"},[e("SDK 更新：PartDelta 事件 "),a("a",{class:"header-anchor",href:"#sdk-更新-partdelta-事件","aria-label":"Permalink to “SDK 更新：PartDelta 事件”"},"​")],-1),a("p",null,[e("如果你使用 OpenCode SDK 开发应用，新增了 "),a("code",null,"PartDelta"),e(" 事件，只发送文本的"),a("strong",null,"增量变化"),e("，而不是每次都发送完整内容：")],-1),a("div",{class:"language-typescript"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"typescript"),a("pre",null,[a("code",{"v-pre":""},`PartDelta: BusEvent.define(
  "message.part.delta",
  z.object({
    sessionID: z.string(),
    messageID: z.string(),
    partID: z.string(),
    field: z.string(),
    delta: z.string(),
  }),
)`)])],-1),l("",12),a("div",{class:"language-bash"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",null,[a("code",{"v-pre":""},"opencode upgrade")])],-1),l("",5)])])}const g=t(o,[["render",d]]);export{_ as __pageData,g as default};
