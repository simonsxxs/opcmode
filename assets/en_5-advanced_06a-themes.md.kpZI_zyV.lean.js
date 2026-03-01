import{_ as a,I as n,c as l,o as s,a5 as d,j as t,J as i,a as o,b5 as c}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.6a Theme System","description":"Use 50+ built-in themes or customize colors to create a personalized terminal visual experience.","frontmatter":{"title":"5.6a Theme System","subtitle":"Customize Your Visual Experience","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.6a","duration":"10 minutes","practice":"10 minutes","level":"Advanced","description":"Use 50+ built-in themes or customize colors to create a personalized terminal visual experience.","tags":["Theme","Appearance","TUI"],"prerequisite":["5.1 Configuration Deep Dive"]},"headers":[],"relativePath":"en/5-advanced/06a-themes.md","filePath":"en/5-advanced/06a-themes.md","lastUpdated":1772014034000}'),h={name:"en/5-advanced/06a-themes.md"};function m(p,e,u,g,b,f){const r=n("AdInArticle");return s(),l("div",null,[e[0]||(e[0]=d("",11)),e[1]||(e[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Check support
echo $COLORTERM  # Should output truecolor or 24bit

# If not supported, add to shell config
export COLORTERM=truecolor`)])],-1)),e[2]||(e[2]=t("p",null,[t("strong",null,"Compatibility Notes"),o(":")],-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"Supported: iTerm2, Alacritty, Kitty, Windows Terminal, GNOME Terminal (newer versions)"),t("li",null,"When truecolor is not supported, themes will degrade to 256-color approximation")],-1)),e[4]||(e[4]=t("hr",null,null,-1)),e[5]||(e[5]=t("h2",{id:"switch-themes",tabindex:"-1"},[o("Switch Themes "),t("a",{class:"header-anchor",href:"#switch-themes","aria-label":"Permalink to “Switch Themes”"},"​")],-1)),e[6]||(e[6]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/theme")])],-1)),e[7]||(e[7]=d("",12)),e[8]||(e[8]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "theme": "system"
}`)])],-1)),e[9]||(e[9]=t("hr",null,null,-1)),e[10]||(e[10]=t("h2",{id:"configure-default-theme",tabindex:"-1"},[o("Configure Default Theme "),t("a",{class:"header-anchor",href:"#configure-default-theme","aria-label":"Permalink to “Configure Default Theme”"},"​")],-1)),i(r),e[11]||(e[11]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "theme": "tokyonight"
}`)])],-1)),e[12]||(e[12]=d("",9)),e[13]||(e[13]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`mkdir -p ~/.config/opencode/themes
vim ~/.config/opencode/themes/my-theme.json`)])],-1)),e[14]||(e[14]=t("p",null,[t("strong",null,"Project-specific theme"),o(":")],-1)),e[15]||(e[15]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`mkdir -p .opencode/themes
vim .opencode/themes/my-theme.json`)])],-1)),e[16]||(e[16]=t("h3",{id:"theme-json-format",tabindex:"-1"},[o("Theme JSON Format "),t("a",{class:"header-anchor",href:"#theme-json-format","aria-label":"Permalink to “Theme JSON Format”"},"​")],-1)),e[17]||(e[17]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/theme.json",
  "defs": {
    // Color definitions (optional), for reuse
    "bg": "#1a1b26",
    "fg": "#c0caf5",
    "blue": "#7aa2f7",
    "green": "#9ece6a",
    "red": "#f7768e"
  },
  "theme": {
    // Required color properties
    "primary": { "dark": "blue", "light": "#3b7dd8" },
    "text": { "dark": "fg", "light": "#1a1a1a" },
    "background": { "dark": "bg", "light": "#ffffff" }
    // ... other properties
  }
}`)])],-1)),e[18]||(e[18]=d("",18)),e[19]||(e[19]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
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
    // ... other properties
  }
}`)])],-1)),e[20]||(e[20]=t("hr",null,null,-1)),e[21]||(e[21]=t("h2",{id:"tui-configuration",tabindex:"-1"},[o("TUI Configuration "),t("a",{class:"header-anchor",href:"#tui-configuration","aria-label":"Permalink to “TUI Configuration”"},"​")],-1)),e[22]||(e[22]=t("p",null,"Besides theme colors, you can also configure TUI behavior:",-1)),e[23]||(e[23]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tui": {
    // Scroll speed (minimum 0.001, default 1 on Unix, 3 on Windows)
    "scroll_speed": 3,
    
    // Scroll acceleration (overrides scroll_speed when enabled)
    "scroll_acceleration": {
      "enabled": true
    },
    
    // Diff render style
    // "auto": adapt based on terminal width
    // "stacked": always single column display
    "diff_style": "auto"
  }
}`)])],-1)),e[24]||(e[24]=d("",6)),e[25]||(e[25]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Set editor (add to ~/.zshrc or ~/.bashrc)
export EDITOR="code --wait"  # VS Code
export EDITOR="cursor --wait" # Cursor
export EDITOR="vim"          # Vim
export EDITOR="nano"         # Nano`)])],-1)),e[26]||(e[26]=t("p",null,"Use in OpenCode:",-1)),e[27]||(e[27]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/editor")])],-1)),e[28]||(e[28]=d("",13))])}const C=a(h,[["render",m]]);export{y as __pageData,C as default};
