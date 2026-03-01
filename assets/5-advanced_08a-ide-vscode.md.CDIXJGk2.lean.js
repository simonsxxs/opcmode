import{_ as l,I as r,c as i,o as n,a5 as a,J as s,j as e,a as t,b9 as c}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"5.8a VS Code 扩展","description":"在 VS Code、Cursor 等编辑器中使用 OpenCode，无缝集成到你的开发流程。","frontmatter":{"title":"5.8a VS Code 扩展","subtitle":"VS Code、Cursor 等编辑器集成","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.8a","duration":"10 分钟","practice":"10 分钟","level":"进阶","description":"在 VS Code、Cursor 等编辑器中使用 OpenCode，无缝集成到你的开发流程。","tags":["IDE","VS Code","Cursor"],"prerequisite":["2.1 界面与基础操作"]},"headers":[],"relativePath":"5-advanced/08a-ide-vscode.md","filePath":"5-advanced/08a-ide-vscode.md","lastUpdated":1772014034000}'),h={name:"5-advanced/08a-ide-vscode.md"};function p(b,d,C,u,m,S){const o=r("AdInArticle");return n(),i("div",null,[d[0]||(d[0]=a("",20)),s(o),d[1]||(d[1]=a("",12)),d[2]||(d[2]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# VS Code
export EDITOR="code --wait"

# Cursor
export EDITOR="cursor --wait"

# Vim
export EDITOR="vim"

# Nano
export EDITOR="nano"`)])],-1)),d[3]||(d[3]=e("p",null,[t("添加到你的 shell 配置（"),e("code",null,"~/.bashrc"),t(" 或 "),e("code",null,"~/.zshrc"),t("）使其永久生效。")],-1)),d[4]||(d[4]=e("h3",{id:"windows-cmd",tabindex:"-1"},[t("Windows CMD "),e("a",{class:"header-anchor",href:"#windows-cmd","aria-label":"Permalink to “Windows CMD”"},"​")],-1)),d[5]||(d[5]=e("div",{class:"language-cmd"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"cmd"),e("pre",null,[e("code",{"v-pre":""},`set EDITOR=notepad

rem VS Code（需要 --wait）
set EDITOR=code --wait`)])],-1)),d[6]||(d[6]=e("p",null,[t("使用 "),e("strong",null,"系统属性"),t(" > "),e("strong",null,"环境变量"),t(" 使其永久生效。")],-1)),d[7]||(d[7]=e("h3",{id:"windows-powershell",tabindex:"-1"},[t("Windows PowerShell "),e("a",{class:"header-anchor",href:"#windows-powershell","aria-label":"Permalink to “Windows PowerShell”"},"​")],-1)),d[8]||(d[8]=e("div",{class:"language-powershell"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",null,[e("code",{"v-pre":""},`$env:EDITOR = "notepad"

# VS Code（需要 --wait）
$env:EDITOR = "code --wait"`)])],-1)),d[9]||(d[9]=a("",25))])}const P=l(h,[["render",p]]);export{f as __pageData,P as default};
