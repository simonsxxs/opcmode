import{_ as c,I as a,c as n,o as s,a5 as o,J as l,j as t,a as d}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"Keyboard Shortcuts Reference","description":"Complete reference for all OpenCode keyboard shortcuts","frontmatter":{"title":"Keyboard Shortcuts Reference","description":"Complete reference for all OpenCode keyboard shortcuts"},"headers":[],"relativePath":"en/appendix/keybinds.md","filePath":"en/appendix/keybinds.md","lastUpdated":1772014034000}'),i={name:"en/appendix/keybinds.md"};function h(p,e,u,b,m,g){const r=a("AdInArticle");return s(),n("div",null,[e[0]||(e[0]=o("",25)),l(r),e[1]||(e[1]=o("",9)),e[2]||(e[2]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n",
    "session_list": "<leader>l",
    "model_list": "<leader>m"
  }
}`)])],-1)),e[3]||(e[3]=t("h3",{id:"disable-shortcuts",tabindex:"-1"},[d("Disable Shortcuts "),t("a",{class:"header-anchor",href:"#disable-shortcuts","aria-label":"Permalink to “Disable Shortcuts”"},"​")],-1)),e[4]||(e[4]=t("p",null,[d("Set to "),t("code",null,'"none"'),d(" to disable:")],-1)),e[5]||(e[5]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "session_compact": "none"
  }
}`)])],-1)),e[6]||(e[6]=t("h3",{id:"multiple-key-bindings",tabindex:"-1"},[d("Multiple Key Bindings "),t("a",{class:"header-anchor",href:"#multiple-key-bindings","aria-label":"Permalink to “Multiple Key Bindings”"},"​")],-1)),e[7]||(e[7]=t("p",null,"Separate multiple keys with commas:",-1)),e[8]||(e[8]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "app_exit": "ctrl+c,ctrl+d,<leader>q"
  }
}`)])],-1)),e[9]||(e[9]=o("",22)),e[10]||(e[10]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "actions": [
    {
      "command": {
        "action": "sendInput",
        "input": "\\u001b[13;2u"
      },
      "id": "User.sendInput.ShiftEnterCustom"
    }
  ],
  "keybindings": [
    {
      "keys": "shift+enter",
      "id": "User.sendInput.ShiftEnterCustom"
    }
  ]
}`)])],-1)),e[11]||(e[11]=t("hr",null,null,-1)),e[12]||(e[12]=t("h2",{id:"quick-mnemonic",tabindex:"-1"},[d("Quick Mnemonic "),t("a",{class:"header-anchor",href:"#quick-mnemonic","aria-label":"Permalink to “Quick Mnemonic”"},"​")],-1)),e[13]||(e[13]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`Tab switches Agents, Ctrl+C clears
Leader plus letters, functions appear
n for new, l for list, m for models
u for undo, r for redo, no worries
Arrow keys left and right, child sessions go back and forth`)])],-1)),e[14]||(e[14]=o("",3))])}const y=c(i,[["render",h]]);export{f as __pageData,y as default};
