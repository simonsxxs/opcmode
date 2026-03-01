import{_ as a,I as l,c,o as n,a5 as o,j as t,J as s,a as e,b6 as i}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.6b 快捷键","description":"自定义 60+ 快捷键，打造顺手的操作体验，提升效率。","frontmatter":{"title":"5.6b 快捷键","subtitle":"高效操作的肌肉记忆","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.6b","duration":"10 分钟","practice":"15 分钟","level":"进阶","description":"自定义 60+ 快捷键，打造顺手的操作体验，提升效率。","tags":["快捷键","效率","TUI"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/06b-keybinds.md","filePath":"5-advanced/06b-keybinds.md","lastUpdated":1772014034000}'),h={name:"5-advanced/06b-keybinds.md"};function b(_,d,p,u,g,m){const r=l("AdInArticle");return n(),c("div",null,[d[0]||(d[0]=o("",13)),d[1]||(d[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`Ctrl+X → n    # 新建会话
Ctrl+X → l    # 会话列表
Ctrl+X → m    # 模型列表`)])],-1)),d[2]||(d[2]=t("hr",null,null,-1)),d[3]||(d[3]=t("h2",{id:"快捷键配置",tabindex:"-1"},[e("快捷键配置 "),t("a",{class:"header-anchor",href:"#快捷键配置","aria-label":"Permalink to “快捷键配置”"},"​")],-1)),d[4]||(d[4]=t("p",null,[e("在 "),t("code",null,"opencode.json"),e(" 中配置：")],-1)),d[5]||(d[5]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "keybinds": {
    // 修改 Leader 键
    "leader": "ctrl+x",
    
    // 自定义快捷键
    "session_new": "<leader>n",
    "model_list": "<leader>m",
    
    // 多个按键绑定同一功能（逗号分隔）
    "app_exit": "ctrl+c,ctrl+d,<leader>q",
    
    // 禁用快捷键
    "session_compact": "none"
  }
}`)])],-1)),d[6]||(d[6]=t("blockquote",null,[t("p",null,[t("strong",null,"注意"),e("：配置键是 "),t("code",null,"keybinds"),e("（复数），这是唯一使用复数的配置键！")])],-1)),d[7]||(d[7]=t("h3",{id:"禁用快捷键",tabindex:"-1"},[e("禁用快捷键 "),t("a",{class:"header-anchor",href:"#禁用快捷键","aria-label":"Permalink to “禁用快捷键”"},"​")],-1)),d[8]||(d[8]=t("p",null,[e("设置为 "),t("code",null,'"none"'),e(" 禁用：")],-1)),d[9]||(d[9]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "session_compact": "none",
    "sidebar_toggle": "none"
  }
}`)])],-1)),d[10]||(d[10]=t("h3",{id:"多键绑定",tabindex:"-1"},[e("多键绑定 "),t("a",{class:"header-anchor",href:"#多键绑定","aria-label":"Permalink to “多键绑定”"},"​")],-1)),d[11]||(d[11]=t("p",null,"用逗号分隔多个按键：",-1)),d[12]||(d[12]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "input_newline": "shift+return,ctrl+return,alt+return,ctrl+j"
  }
}`)])],-1)),d[13]||(d[13]=o("",7)),s(r),d[14]||(d[14]=o("",31)),d[15]||(d[15]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "command": {
    "action": "sendInput",
    "input": "\\u001b[13;2u"
  },
  "id": "User.sendInput.ShiftEnterCustom"
}`)])],-1)),d[16]||(d[16]=t("p",null,[e("在 "),t("code",null,"keybindings"),e(" 数组添加：")],-1)),d[17]||(d[17]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keys": "shift+enter",
  "id": "User.sendInput.ShiftEnterCustom"
}`)])],-1)),d[18]||(d[18]=o("",6)),d[19]||(d[19]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "space",
    "messages_page_up": "ctrl+u",
    "messages_page_down": "ctrl+d",
    "messages_first": "gg",
    "messages_last": "G"
  }
}`)])],-1)),d[20]||(d[20]=t("h3",{id:"精简模式",tabindex:"-1"},[e("精简模式 "),t("a",{class:"header-anchor",href:"#精简模式","aria-label":"Permalink to “精简模式”"},"​")],-1)),d[21]||(d[21]=t("p",null,"禁用不常用的快捷键：",-1)),d[22]||(d[22]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "sidebar_toggle": "none",
    "scrollbar_toggle": "none",
    "session_fork": "none",
    "session_share": "none",
    "session_unshare": "none",
    "tips_toggle": "none"
  }
}`)])],-1)),d[23]||(d[23]=t("h3",{id:"单手操作",tabindex:"-1"},[e("单手操作 "),t("a",{class:"header-anchor",href:"#单手操作","aria-label":"Permalink to “单手操作”"},"​")],-1)),d[24]||(d[24]=t("p",null,"将常用操作集中到左手：",-1)),d[25]||(d[25]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "session_new": "ctrl+n",
    "session_list": "ctrl+l",
    "model_list": "ctrl+m",
    "agent_cycle": "ctrl+tab"
  }
}`)])],-1)),d[26]||(d[26]=o("",5)),d[27]||(d[27]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`Tab 切 Agent，Ctrl+C 清
Leader 加字母，功能随便挑
n 新建 l 列表 m 模型
u 撤销 r 重做不用愁
方向键左右，子会话来回走`)])],-1)),d[28]||(d[28]=o("",7))])}const k=a(h,[["render",b]]);export{y as __pageData,k as default};
