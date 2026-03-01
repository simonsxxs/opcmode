import{_ as c,I as d,c as s,o as i,a5 as t,j as e,J as r,a,aJ as l}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"C4 Automation Scripts","description":"Use AI to help you write automation scripts and scheduled tasks, freeing yourself from repetitive work and improving office efficiency.","frontmatter":{"title":"C4 Automation Scripts","subtitle":"Free Yourself from Repetitive Work","course":"OpenCode Practical Course","stage":"Stage 4","lesson":"C4","duration":"20 minutes","practice":"25 minutes","level":"Advanced","description":"Use AI to help you write automation scripts and scheduled tasks, freeing yourself from repetitive work and improving office efficiency.","tags":["Automation","Scripts","Scheduled Tasks"],"prerequisite":["C1 File Organization"]},"headers":[],"relativePath":"en/4-scenarios/office-automation.md","filePath":"en/4-scenarios/office-automation.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/office-automation.md"};function m(u,o,h,g,f,b){const n=d("AdInArticle");return i(),s("div",null,[o[0]||(o[0]=t("",23)),o[1]||(o[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Manual Operation → One-click Command → Scripted → (Optional) External Scheduling")])],-1)),o[2]||(o[2]=t("",4)),r(n),o[3]||(o[3]=e("h3",{id:"step-1-describe-your-repetitive-task-get-rules-first-then-execution",tabindex:"-1"},[a('Step 1: Describe Your Repetitive Task (Get "Rules" First, Then "Execution") '),e("a",{class:"header-anchor",href:"#step-1-describe-your-repetitive-task-get-rules-first-then-execution","aria-label":'Permalink to “Step 1: Describe Your Repetitive Task (Get "Rules" First, Then "Execution")”'},"​")],-1)),o[4]||(o[4]=e("p",null,[e("strong",null,"Why"),a(' The biggest fear in automation is "unclear rules". You need to express the process as rules that machines can execute.')],-1)),o[5]||(o[5]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`I need to do these repetitive tasks every day:
1. Move invoice PDFs from the downloads folder to Finance/Invoices/
2. Create subdirectories by month (e.g., 2025-01/)
3. Rename to "Invoice_Date_Amount.pdf" format

Please do two things first:
A) Write down the rules clearly (date source, amount source, how to handle conflicts)
B) Provide a "preview first, execute later" solution`)])],-1)),o[6]||(o[6]=t("",7)),o[7]||(o[7]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Organize invoices (archive + rename)
agent: build
model: anthropic/claude-opus-4-5-thinking
---

Please organize invoice PDFs from the $1 directory into $2:

Requirements:
1. First output "list of operations to be performed" (move/rename), don't execute directly
2. Execute after I confirm

Hint: Today's date is !\`date +%Y-%m-%d\``)])],-1)),o[8]||(o[8]=e("p",null,"Run the command:",-1)),o[9]||(o[9]=e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"/organize-invoices ~/Downloads ~/Documents/Finance/Invoices")])],-1)),o[10]||(o[10]=t("",2)),o[11]||(o[11]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "command": {
    "organize-invoices": {
      "template": "Please organize invoice PDFs from the $1 directory into $2:\\n\\nRequirements:\\n1. First output operation list (move/rename), don't execute directly\\n2. Execute after I confirm\\n",
      "description": "Organize invoices (archive + rename)",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking",
      "subtask": true
    }
  }
}`)])],-1)),o[12]||(o[12]=t("",3)),o[13]||(o[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Based on the rules above, help me create a script scripts/organize_invoices.py:
1. Scan source directory for PDFs
2. Parse date/amount (provide strategy if parsing fails)
3. Generate target directory structure
4. Output detailed logs (how each file is processed)

Requirements:
- Implement both "preview mode (dry-run)" and "execute mode"
- Give me a minimal runnable command`)])],-1)),o[14]||(o[14]=e("h3",{id:"step-4-use-cli-to-chain-automation-for-scripted-invocation",tabindex:"-1"},[a('Step 4: Use CLI to Chain Automation for "Scripted Invocation" '),e("a",{class:"header-anchor",href:"#step-4-use-cli-to-chain-automation-for-scripted-invocation","aria-label":'Permalink to “Step 4: Use CLI to Chain Automation for "Scripted Invocation"”'},"​")],-1)),o[15]||(o[15]=e("p",null,[e("strong",null,"Why"),a(" You may want to trigger the same prompts in terminal scripts or pipelines.")],-1)),o[16]||(o[16]=e("p",null,"OpenCode CLI supports non-interactive execution:",-1)),o[17]||(o[17]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'opencode run "Please help me check the parameter design of scripts/organize_invoices.py and provide improvement suggestions"')])],-1)),o[18]||(o[18]=t("",6)),o[19]||(o[19]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp_everything": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-everything"]
    }
  }
}`)])],-1)),o[20]||(o[20]=t("",3)),o[21]||(o[21]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/compact")])],-1)),o[22]||(o[22]=t("",5)),o[23]||(o[23]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}"
      }
    }
  },
  "model": "anthropic/claude-opus-4-5-thinking",
  "small_model": "anthropic/claude-haiku-4-5"
}`)])],-1)),o[24]||(o[24]=t("",19))])}const x=c(p,[["render",m]]);export{v as __pageData,x as default};
