import{_ as n,I as t,c as s,o as r,a5 as d,j as e,J as l,a as c,aJ as p}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"C4 自动化脚本","description":"用 AI 帮你写自动化脚本和定时任务，解放重复劳动，提升办公效率。","frontmatter":{"title":"C4 自动化脚本","subtitle":"解放重复劳动","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"C4","duration":"20 分钟","practice":"25 分钟","level":"进阶","description":"用 AI 帮你写自动化脚本和定时任务，解放重复劳动，提升办公效率。","tags":["自动化","脚本","定时任务"],"prerequisite":["C1 文件整理"]},"headers":[],"relativePath":"4-scenarios/office-automation.md","filePath":"4-scenarios/office-automation.md","lastUpdated":1772014034000}'),i={name:"4-scenarios/office-automation.md"};function m(b,o,g,h,k,u){const a=t("AdInArticle");return r(),s("div",null,[o[0]||(o[0]=d("",23)),o[1]||(o[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"手动操作 → 一键命令 → 脚本化 →（可选）外部调度")])],-1)),o[2]||(o[2]=d("",4)),l(a),o[3]||(o[3]=e("h3",{id:"第-1-步-描述你的重复任务-先要-规则-再要-执行",tabindex:"-1"},[c('第 1 步：描述你的重复任务（先要"规则"，再要"执行"） '),e("a",{class:"header-anchor",href:"#第-1-步-描述你的重复任务-先要-规则-再要-执行","aria-label":'Permalink to “第 1 步：描述你的重复任务（先要"规则"，再要"执行"）”'},"​")],-1)),o[4]||(o[4]=e("p",null,[e("strong",null,"为什么"),c(" 自动化最怕“规则不清”。你要先把流程说成机器能执行的规则。")],-1)),o[5]||(o[5]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`我每天都要做这些重复工作：
1. 把下载目录里的发票 PDF 移动到 财务/发票/ 目录
2. 按月份创建子目录（如 2025-01/）
3. 重命名为「发票_日期_金额.pdf」格式

请先做两件事：
A) 把规则写清楚（日期来源、金额来源、冲突如何处理）
B) 给一个“先预览、后执行”的方案`)])],-1)),o[6]||(o[6]=d("",7)),o[7]||(o[7]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 整理发票（归档 + 重命名）
agent: build
model: anthropic/claude-opus-4-5-thinking
---

请把 $1 目录中的发票 PDF 整理到 $2：

要求：
1. 先输出“将要执行的操作清单”（移动/重命名），不要直接执行
2. 我确认后再执行

提示：今天日期是 !\`date +%Y-%m-%d\``)])],-1)),o[8]||(o[8]=e("p",null,"运行命令：",-1)),o[9]||(o[9]=e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"/organize-invoices ~/Downloads ~/Documents/财务/发票")])],-1)),o[10]||(o[10]=d("",2)),o[11]||(o[11]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "command": {
    "organize-invoices": {
      "template": "请把 $1 目录中的发票 PDF 整理到 $2：\\n\\n要求：\\n1. 先输出操作清单（移动/重命名），不要直接执行\\n2. 我确认后再执行\\n",
      "description": "整理发票（归档 + 重命名）",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking",
      "subtask": true
    }
  }
}`)])],-1)),o[12]||(o[12]=d("",3)),o[13]||(o[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`根据刚才的规则，帮我创建一个脚本 scripts/organize_invoices.py：
1. 扫描源目录找 PDF
2. 解析日期/金额（如果解析不到也要给策略）
3. 生成目标目录结构
4. 输出详细日志（每个文件怎么处理）

要求：
- 把“预览模式（dry-run）”和“执行模式”都做出来
- 给我一条最小可运行命令`)])],-1)),o[14]||(o[14]=e("h3",{id:"第-4-步-用-cli-把自动化接到-脚本化调用",tabindex:"-1"},[c("第 4 步：用 CLI 把自动化接到“脚本化调用” "),e("a",{class:"header-anchor",href:"#第-4-步-用-cli-把自动化接到-脚本化调用","aria-label":"Permalink to “第 4 步：用 CLI 把自动化接到“脚本化调用””"},"​")],-1)),o[15]||(o[15]=e("p",null,[e("strong",null,"为什么"),e("br"),c(" 你可能希望在终端脚本或流水线里触发同一套提示词。")],-1)),o[16]||(o[16]=e("p",null,"OpenCode CLI 支持非交互运行：",-1)),o[17]||(o[17]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'opencode run "请帮我检查 scripts/organize_invoices.py 的参数设计，并给出改进建议"')])],-1)),o[18]||(o[18]=d("",6)),o[19]||(o[19]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp_everything": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-everything"]
    }
  }
}`)])],-1)),o[20]||(o[20]=d("",3)),o[21]||(o[21]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/compact")])],-1)),o[22]||(o[22]=d("",5)),o[23]||(o[23]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),o[24]||(o[24]=d("",19))])}const _=n(i,[["render",m]]);export{f as __pageData,_ as default};
