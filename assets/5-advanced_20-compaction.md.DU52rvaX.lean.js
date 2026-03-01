import{_ as a,I as r,c as d,o as i,a5 as n,j as t,J as s,a as o,bs as p}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"5.20 上下文压缩","description":"学习上下文压缩机制，理解 Context 百分比计算，掌握压缩命令和自动触发原理。","frontmatter":{"title":"5.20 上下文压缩","subtitle":"智能管理超长对话","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.20","duration":"15 分钟","level":"进阶","description":"学习上下文压缩机制，理解 Context 百分比计算，掌握压缩命令和自动触发原理。","tags":["上下文","压缩","模型配置"],"prerequisite":["5.1a 配置基础","2.1 界面与基础操作"]},"headers":[],"relativePath":"5-advanced/20-compaction.md","filePath":"5-advanced/20-compaction.md","lastUpdated":1772014034000}'),c={name:"5-advanced/20-compaction.md"};function u(h,e,g,b,m,C){const l=r("AdInArticle");return i(),d("div",null,[e[0]||(e[0]=n("",28)),e[1]||(e[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"Context 百分比 = (input + output + reasoning + cache.read + cache.write) / model.limit.context * 100")])],-1)),e[2]||(e[2]=n("",4)),e[3]||(e[3]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`触发条件: token_count >= (input_limit - reserved)
其中 reserved = min(20000, model_max_output)`)])],-1)),e[4]||(e[4]=n("",7)),s(l),e[5]||(e[5]=t("h4",{id:"第-1-步-prune-工具输出",tabindex:"-1"},[o("第 1 步：Prune 工具输出 "),t("a",{class:"header-anchor",href:"#第-1-步-prune-工具输出","aria-label":"Permalink to “第 1 步：Prune 工具输出”"},"​")],-1)),e[6]||(e[6]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 保留最近 40K tokens 的工具输出
PRUNE_PROTECT = 40_000
PRUNE_MINIMUM = 20_000`)])],-1)),e[7]||(e[7]=t("ul",null,[t("li",null,"从后往前遍历消息"),t("li",null,"累积工具输出 token，直到达到 40,000"),t("li",null,[o("超出部分的工具输出标记为 "),t("code",null,"compacted")]),t("li",null,"如果清理量 > 20,000，才真正执行（避免微不足道的清理）")],-1)),e[8]||(e[8]=t("h4",{id:"第-2-步-调用-compaction-agent",tabindex:"-1"},[o("第 2 步：调用 Compaction Agent "),t("a",{class:"header-anchor",href:"#第-2-步-调用-compaction-agent","aria-label":"Permalink to “第 2 步：调用 Compaction Agent”"},"​")],-1)),e[9]||(e[9]=t("ul",null,[t("li",null,[o("创建一个隐藏的 agent（名称："),t("code",null,"compaction"),o("）")]),t("li",null,[o("禁用所有工具权限（"),t("code",null,'PermissionNext.fromConfig({ "*": "deny" })'),o("）")]),t("li",null,[o("发送总结 prompt："),t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`"Provide a detailed prompt for continuing our conversation above. 
Focus on information that would be helpful for continuing the conversation, 
including what we did, what we're doing, which files we're working on, 
and what we're going to do next considering new session will not have access to our conversation."`)])])])],-1)),e[10]||(e[10]=n("",15)),e[11]||(e[11]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`Context
145,234 tokens 73% used`)])],-1)),e[12]||(e[12]=n("",6)),e[13]||(e[13]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/compact")])],-1)),e[14]||(e[14]=t("p",null,"或别名：",-1)),e[15]||(e[15]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/summarize")])],-1)),e[16]||(e[16]=n("",5)),e[17]||(e[17]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`Context
45,678 tokens 23% used`)])],-1)),e[18]||(e[18]=n("",14)),e[19]||(e[19]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "compaction": {
    "reserved": 30000
  }
}`)])],-1)),e[20]||(e[20]=n("",5)),e[21]||(e[21]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "compaction": {
    "auto": false
  }
}`)])],-1)),e[22]||(e[22]=t("p",null,"或在命令行中：",-1)),e[23]||(e[23]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"OPENCODE_DISABLE_AUTOCOMPACT=true opencode")])],-1)),e[24]||(e[24]=t("h3",{id:"禁用工具输出裁剪",tabindex:"-1"},[o("禁用工具输出裁剪 "),t("a",{class:"header-anchor",href:"#禁用工具输出裁剪","aria-label":"Permalink to “禁用工具输出裁剪”"},"​")],-1)),e[25]||(e[25]=t("p",null,"Prune 功能会自动清除旧的工具输出。如果你想保留所有工具输出：",-1)),e[26]||(e[26]=t("p",null,[t("strong",null,"opencode.json")],-1)),e[27]||(e[27]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "compaction": {
    "prune": false
  }
}`)])],-1)),e[28]||(e[28]=t("p",null,"或在命令行中：",-1)),e[29]||(e[29]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"OPENCODE_DISABLE_PRUNE=true opencode")])],-1)),e[30]||(e[30]=t("h3",{id:"自定义模型上下文限制",tabindex:"-1"},[o("自定义模型上下文限制 "),t("a",{class:"header-anchor",href:"#自定义模型上下文限制","aria-label":"Permalink to “自定义模型上下文限制”"},"​")],-1)),e[31]||(e[31]=t("p",null,"如果你想修改某个模型的 context 或 output 限制（例如，想提前触发压缩）：",-1)),e[32]||(e[32]=t("p",null,[t("strong",null,"opencode.json")],-1)),e[33]||(e[33]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "models": {
        "gpt-5.2": {
          "limit": {
            "context": 100000,
            "output": 10000
          }
        }
      }
    }
  }
}`)])],-1)),e[34]||(e[34]=n("",23))])}const _=a(c,[["render",u]]);export{x as __pageData,_ as default};
