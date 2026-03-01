import{_ as r,I as a,c as i,o as l,a5 as o,j as t,J as s,a as d,b6 as c}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"5.6b Keybindings","description":"Customize 60+ keybindings for a smooth operational experience.","frontmatter":{"title":"5.6b Keybindings","subtitle":"Muscle Memory for Efficient Operations","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.6b","duration":"10 minutes","practice":"15 minutes","level":"Advanced","description":"Customize 60+ keybindings for a smooth operational experience.","tags":["keybindings","efficiency","TUI"],"prerequisite":["5.1 Configuration Guide"]},"headers":[],"relativePath":"en/5-advanced/06b-keybinds.md","filePath":"en/5-advanced/06b-keybinds.md","lastUpdated":1772014034000}'),h={name:"en/5-advanced/06b-keybinds.md"};function p(u,e,b,g,m,y){const n=a("AdInArticle");return l(),i("div",null,[e[0]||(e[0]=o("",13)),e[1]||(e[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`Ctrl+X → n    # New session
Ctrl+X → l    # Session list
Ctrl+X → m    # Model list`)])],-1)),e[2]||(e[2]=t("hr",null,null,-1)),e[3]||(e[3]=t("h2",{id:"keybinding-configuration",tabindex:"-1"},[d("Keybinding Configuration "),t("a",{class:"header-anchor",href:"#keybinding-configuration","aria-label":"Permalink to “Keybinding Configuration”"},"​")],-1)),e[4]||(e[4]=t("p",null,[d("Configure in "),t("code",null,"opencode.json"),d(":")],-1)),e[5]||(e[5]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "keybinds": {
    // Change Leader key
    "leader": "ctrl+x",
    
    // Custom keybindings
    "session_new": "<leader>n",
    "model_list": "<leader>m",
    
    // Multiple keys for same function (comma-separated)
    "app_exit": "ctrl+c,ctrl+d,<leader>q",
    
    // Disable keybinding
    "session_compact": "none"
  }
}`)])],-1)),e[6]||(e[6]=t("blockquote",null,[t("p",null,[t("strong",null,"Note"),d(": The config key is "),t("code",null,"keybinds"),d(" (plural), this is the only config key that uses plural form!")])],-1)),e[7]||(e[7]=t("h3",{id:"disable-keybindings",tabindex:"-1"},[d("Disable Keybindings "),t("a",{class:"header-anchor",href:"#disable-keybindings","aria-label":"Permalink to “Disable Keybindings”"},"​")],-1)),e[8]||(e[8]=t("p",null,[d("Set to "),t("code",null,'"none"'),d(" to disable:")],-1)),e[9]||(e[9]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "session_compact": "none",
    "sidebar_toggle": "none"
  }
}`)])],-1)),e[10]||(e[10]=t("h3",{id:"multiple-key-bindings",tabindex:"-1"},[d("Multiple Key Bindings "),t("a",{class:"header-anchor",href:"#multiple-key-bindings","aria-label":"Permalink to “Multiple Key Bindings”"},"​")],-1)),e[11]||(e[11]=t("p",null,"Use commas to separate multiple keys:",-1)),e[12]||(e[12]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "input_newline": "shift+return,ctrl+return,alt+return,ctrl+j"
  }
}`)])],-1)),e[13]||(e[13]=o("",7)),s(n),e[14]||(e[14]=o("",31)),e[15]||(e[15]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "command": {
    "action": "sendInput",
    "input": "\\u001b[13;2u"
  },
  "id": "User.sendInput.ShiftEnterCustom"
}`)])],-1)),e[16]||(e[16]=t("p",null,[d("Add to the "),t("code",null,"keybindings"),d(" array:")],-1)),e[17]||(e[17]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keys": "shift+enter",
  "id": "User.sendInput.ShiftEnterCustom"
}`)])],-1)),e[18]||(e[18]=o("",6)),e[19]||(e[19]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "space",
    "messages_page_up": "ctrl+u",
    "messages_page_down": "ctrl+d",
    "messages_first": "gg",
    "messages_last": "G"
  }
}`)])],-1)),e[20]||(e[20]=t("h3",{id:"minimal-mode",tabindex:"-1"},[d("Minimal Mode "),t("a",{class:"header-anchor",href:"#minimal-mode","aria-label":"Permalink to “Minimal Mode”"},"​")],-1)),e[21]||(e[21]=t("p",null,"Disable uncommon keybindings:",-1)),e[22]||(e[22]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "sidebar_toggle": "none",
    "scrollbar_toggle": "none",
    "session_fork": "none",
    "session_share": "none",
    "session_unshare": "none",
    "tips_toggle": "none"
  }
}`)])],-1)),e[23]||(e[23]=t("h3",{id:"one-handed-operation",tabindex:"-1"},[d("One-Handed Operation "),t("a",{class:"header-anchor",href:"#one-handed-operation","aria-label":"Permalink to “One-Handed Operation”"},"​")],-1)),e[24]||(e[24]=t("p",null,"Concentrate common operations on the left hand:",-1)),e[25]||(e[25]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "session_new": "ctrl+n",
    "session_list": "ctrl+l",
    "model_list": "ctrl+m",
    "agent_cycle": "ctrl+tab"
  }
}`)])],-1)),e[26]||(e[26]=o("",5)),e[27]||(e[27]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`Tab cycles Agent, Ctrl+C clears
Leader plus letter, any function appears
n for new, l for list, m for model
u for undo, r for redo, no need to huddle
Arrow keys left and right, child sessions take flight`)])],-1)),e[28]||(e[28]=o("",7))])}const k=r(h,[["render",p]]);export{_ as __pageData,k as default};
