import{_ as r,I as d,c as i,o as l,a5 as a,J as s,j as e,a as o,b9 as c}from"./chunks/framework.Dtwt352Q.js";const S=JSON.parse('{"title":"5.8a VS Code Extension","description":"Use OpenCode in VS Code, Cursor, and other editors, seamlessly integrated into your development workflow.","frontmatter":{"title":"5.8a VS Code Extension","subtitle":"VS Code, Cursor, and other editor integrations","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.8a","duration":"10 minutes","practice":"10 minutes","level":"Advanced","description":"Use OpenCode in VS Code, Cursor, and other editors, seamlessly integrated into your development workflow.","tags":["IDE","VS Code","Cursor"],"prerequisite":["2.1 Interface and Basic Operations"]},"headers":[],"relativePath":"en/5-advanced/08a-ide-vscode.md","filePath":"en/5-advanced/08a-ide-vscode.md","lastUpdated":1772014034000}'),h={name:"en/5-advanced/08a-ide-vscode.md"};function u(m,t,p,b,C,f){const n=d("AdInArticle");return l(),i("div",null,[t[0]||(t[0]=a("",20)),s(n),t[1]||(t[1]=a("",12)),t[2]||(t[2]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# VS Code
export EDITOR="code --wait"

# Cursor
export EDITOR="cursor --wait"

# Vim
export EDITOR="vim"

# Nano
export EDITOR="nano"`)])],-1)),t[3]||(t[3]=e("p",null,[o("Add to your shell configuration ("),e("code",null,"~/.bashrc"),o(" or "),e("code",null,"~/.zshrc"),o(") to make it permanent.")],-1)),t[4]||(t[4]=e("h3",{id:"windows-cmd",tabindex:"-1"},[o("Windows CMD "),e("a",{class:"header-anchor",href:"#windows-cmd","aria-label":"Permalink to “Windows CMD”"},"​")],-1)),t[5]||(t[5]=e("div",{class:"language-cmd"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"cmd"),e("pre",null,[e("code",{"v-pre":""},`set EDITOR=notepad

rem VS Code (requires --wait)
set EDITOR=code --wait`)])],-1)),t[6]||(t[6]=e("p",null,[o("Use "),e("strong",null,"System Properties"),o(" > "),e("strong",null,"Environment Variables"),o(" to make it permanent.")],-1)),t[7]||(t[7]=e("h3",{id:"windows-powershell",tabindex:"-1"},[o("Windows PowerShell "),e("a",{class:"header-anchor",href:"#windows-powershell","aria-label":"Permalink to “Windows PowerShell”"},"​")],-1)),t[8]||(t[8]=e("div",{class:"language-powershell"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",null,[e("code",{"v-pre":""},`$env:EDITOR = "notepad"

# VS Code (requires --wait)
$env:EDITOR = "code --wait"`)])],-1)),t[9]||(t[9]=a("",25))])}const g=r(h,[["render",u]]);export{S as __pageData,g as default};
