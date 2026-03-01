import{_ as a,I as n,c as l,o as c,a5 as e,j as t,J as s,a as o,b5 as i}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.6a 主题系统","description":"使用 50+ 内置主题或自定义颜色，打造个性化的终端视觉体验。","frontmatter":{"title":"5.6a 主题系统","subtitle":"定制你的视觉体验","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.6a","duration":"10 分钟","practice":"10 分钟","level":"进阶","description":"使用 50+ 内置主题或自定义颜色，打造个性化的终端视觉体验。","tags":["主题","外观","TUI"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/06a-themes.md","filePath":"5-advanced/06a-themes.md","lastUpdated":1772014034000}'),h={name:"5-advanced/06a-themes.md"};function p(b,d,u,g,m,f){const r=n("AdInArticle");return c(),l("div",null,[d[0]||(d[0]=e("",11)),d[1]||(d[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 检查支持
echo $COLORTERM  # 应输出 truecolor 或 24bit

# 如不支持，添加到 shell 配置
export COLORTERM=truecolor`)])],-1)),d[2]||(d[2]=t("p",null,[t("strong",null,"兼容性说明"),o("：")],-1)),d[3]||(d[3]=t("ul",null,[t("li",null,"支持：iTerm2、Alacritty、Kitty、Windows Terminal、GNOME Terminal（新版）"),t("li",null,"不支持 truecolor 时，主题会降级到 256 色近似")],-1)),d[4]||(d[4]=t("hr",null,null,-1)),d[5]||(d[5]=t("h2",{id:"切换主题",tabindex:"-1"},[o("切换主题 "),t("a",{class:"header-anchor",href:"#切换主题","aria-label":"Permalink to “切换主题”"},"​")],-1)),d[6]||(d[6]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/theme")])],-1)),d[7]||(d[7]=e("",12)),d[8]||(d[8]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "theme": "system"
}`)])],-1)),d[9]||(d[9]=t("hr",null,null,-1)),d[10]||(d[10]=t("h2",{id:"配置默认主题",tabindex:"-1"},[o("配置默认主题 "),t("a",{class:"header-anchor",href:"#配置默认主题","aria-label":"Permalink to “配置默认主题”"},"​")],-1)),s(r),d[11]||(d[11]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "theme": "tokyonight"
}`)])],-1)),d[12]||(d[12]=e("",9)),d[13]||(d[13]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`mkdir -p ~/.config/opencode/themes
vim ~/.config/opencode/themes/my-theme.json`)])],-1)),d[14]||(d[14]=t("p",null,[t("strong",null,"项目专属主题"),o("：")],-1)),d[15]||(d[15]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`mkdir -p .opencode/themes
vim .opencode/themes/my-theme.json`)])],-1)),d[16]||(d[16]=t("h3",{id:"主题-json-格式",tabindex:"-1"},[o("主题 JSON 格式 "),t("a",{class:"header-anchor",href:"#主题-json-格式","aria-label":"Permalink to “主题 JSON 格式”"},"​")],-1)),d[17]||(d[17]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/theme.json",
  "defs": {
    // 颜色定义（可选），用于复用
    "bg": "#1a1b26",
    "fg": "#c0caf5",
    "blue": "#7aa2f7",
    "green": "#9ece6a",
    "red": "#f7768e"
  },
  "theme": {
    // 必须定义的颜色属性
    "primary": { "dark": "blue", "light": "#3b7dd8" },
    "text": { "dark": "fg", "light": "#1a1a1a" },
    "background": { "dark": "bg", "light": "#ffffff" }
    // ... 其他属性
  }
}`)])],-1)),d[18]||(d[18]=e("",18)),d[19]||(d[19]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/theme.json",
  "defs": {
    "nord0": "#2E3440",
    "nord1": "#3B4252",
    "nord4": "#D8DEE9",
    "nord8": "#88C0D0",
    "nord11": "#BF616A",
    "nord14": "#A3BE8C"
  },
  "theme": {
    "primary": { "dark": "nord8", "light": "#5E81AC" },
    "secondary": { "dark": "#81A1C1", "light": "#81A1C1" },
    "error": { "dark": "nord11", "light": "nord11" },
    "success": { "dark": "nord14", "light": "nord14" },
    "text": { "dark": "nord4", "light": "nord0" },
    "background": { "dark": "nord0", "light": "#ECEFF4" },
    "diffAdded": { "dark": "nord14", "light": "nord14" },
    "diffRemoved": { "dark": "nord11", "light": "nord11" },
    "syntaxKeyword": { "dark": "#81A1C1", "light": "#81A1C1" },
    "syntaxString": { "dark": "nord14", "light": "nord14" }
    // ... 其他属性
  }
}`)])],-1)),d[20]||(d[20]=t("hr",null,null,-1)),d[21]||(d[21]=t("h2",{id:"tui-配置",tabindex:"-1"},[o("TUI 配置 "),t("a",{class:"header-anchor",href:"#tui-配置","aria-label":"Permalink to “TUI 配置”"},"​")],-1)),d[22]||(d[22]=t("p",null,"除了主题颜色，还可以配置 TUI 行为：",-1)),d[23]||(d[23]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tui": {
    // 滚动速度（最小 0.001，默认 Unix 为 1，Windows 为 3）
    "scroll_speed": 3,
    
    // 滚动加速度（启用后覆盖 scroll_speed）
    "scroll_acceleration": {
      "enabled": true
    },
    
    // Diff 渲染样式
    // "auto": 根据终端宽度自适应
    // "stacked": 始终单列显示
    "diff_style": "auto"
  }
}`)])],-1)),d[24]||(d[24]=e("",6)),d[25]||(d[25]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 设置编辑器（添加到 ~/.zshrc 或 ~/.bashrc）
export EDITOR="code --wait"  # VS Code
export EDITOR="cursor --wait" # Cursor
export EDITOR="vim"          # Vim
export EDITOR="nano"         # Nano`)])],-1)),d[26]||(d[26]=t("p",null,"在 OpenCode 中使用：",-1)),d[27]||(d[27]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/editor")])],-1)),d[28]||(d[28]=e("",13))])}const C=a(h,[["render",p]]);export{y as __pageData,C as default};
