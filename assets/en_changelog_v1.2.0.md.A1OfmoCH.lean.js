import{_ as n,c as o,o as r,a5 as t,j as e,a}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"v1.2.0: SQLite Database Refactoring","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/v1.2.0.md","filePath":"en/changelog/v1.2.0.md","lastUpdated":1772014034000}'),l={name:"en/changelog/v1.2.0.md"};function s(d,i,c,u,h,m){return r(),o("div",null,[...i[0]||(i[0]=[t("",17),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Run in a specific directory
opencode run --dir /path/to/project "Fix the login page bug"`)])],-1),e("h3",{id:"timeout-argument-set-timeout-duration",tabindex:"-1"},[e("code",null,"--timeout"),a(" Argument: Set Timeout Duration "),e("a",{class:"header-anchor",href:"#timeout-argument-set-timeout-duration","aria-label":"Permalink to “--timeout Argument: Set Timeout Duration”"},"​")],-1),e("p",null,"Timeout configuration moved from API to CLI, making it easier to control:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set a 5-minute timeout
opencode --timeout 300`)])],-1),e("hr",null,null,-1),e("h2",{id:"sdk-update-partdelta-event",tabindex:"-1"},[a("SDK Update: PartDelta Event "),e("a",{class:"header-anchor",href:"#sdk-update-partdelta-event","aria-label":"Permalink to “SDK Update: PartDelta Event”"},"​")],-1),e("p",null,[a("If you use OpenCode SDK to develop applications, there's a new "),e("code",null,"PartDelta"),a(" event that sends only "),e("strong",null,"incremental changes"),a(" of text, rather than sending the full content each time:")],-1),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`PartDelta: BusEvent.define(
  "message.part.delta",
  z.object({
    sessionID: z.string(),
    messageID: z.string(),
    partID: z.string(),
    field: z.string(),
    delta: z.string(),
  }),
)`)])],-1),t("",12),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode upgrade")])],-1),t("",5)])])}const f=n(l,[["render",s]]);export{g as __pageData,f as default};
