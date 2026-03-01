import{_ as r,I as d,c as i,o,a5 as n,j as a,J as s,a as l}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"Prompt 工程规范","description":"编写高质量提示词的原则和最佳实践","frontmatter":{"title":"Prompt 工程规范","description":"编写高质量提示词的原则和最佳实践"},"headers":[],"relativePath":"appendix/prompt-guidelines.md","filePath":"appendix/prompt-guidelines.md","lastUpdated":1772014034000}'),p={name:"appendix/prompt-guidelines.md"};function h(u,t,g,b,m,f){const e=d("AdInArticle");return o(),i("div",null,[t[0]||(t[0]=n("",6)),t[1]||(t[1]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},"角色定义 → 任务说明 → 输入规范 → 输出规范 → 示例 → 约束条件")])],-1)),t[2]||(t[2]=n("",14)),t[3]||(t[3]=a("div",{class:"language-markdown"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"markdown"),a("pre",null,[a("code",{"v-pre":""},`## 角色
你是[专业身份]，擅长[核心能力]。[额外的身份锚定描述]

## 任务
[清晰描述要完成的任务]

## 输入信息
### 必填项
- 变量名：【变量说明】

### 选填项
- 变量名：【变量说明?】（默认：xxx）

## 输出规范
按以下结构输出：
1. [输出项1]
2. [输出项2]
...

## 示例

### 输入
[具体输入示例]

### 输出
[对应的理想输出]

## 约束条件
- ✅ 应该：[正面行为]
- ❌ 避免：[负面行为]

## 自检清单
完成前确认：
- [ ] [检查项1]
- [ ] [检查项2]

## 错误处理
- 如果缺少关键信息，请先询问用户
- 如果任务超出范围，说明原因并建议替代方案`)])],-1)),t[4]||(t[4]=a("hr",null,null,-1)),t[5]||(t[5]=a("h2",{id:"🏷️-占位符规范",tabindex:"-1"},[l("🏷️ 占位符规范 "),a("a",{class:"header-anchor",href:"#🏷️-占位符规范","aria-label":"Permalink to “🏷️ 占位符规范”"},"​")],-1)),s(e),t[6]||(t[6]=n("",4)),t[7]||(t[7]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},`类型：玄幻/都市/言情
语言：语言
粘贴代码`)])],-1)),t[8]||(t[8]=a("p",null,[a("strong",null,"✅ 好的写法"),l("：")],-1)),t[9]||(t[9]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},`类型：【玄幻/都市/言情/悬疑/科幻】
语言：【编程语言】

[粘贴代码]`)])],-1)),t[10]||(t[10]=n("",12)),t[11]||(t[11]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},"你是一个助手。")])],-1)),t[12]||(t[12]=a("p",null,[a("strong",null,"✅ 好的写法"),l("：")],-1)),t[13]||(t[13]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},`你是资深技术文档工程师，擅长将复杂代码解释得通俗易懂。
你的解释被初学者评价为"终于看懂了"。`)])],-1)),t[14]||(t[14]=a("hr",null,null,-1)),t[15]||(t[15]=a("h2",{id:"⚖️-约束条件规范",tabindex:"-1"},[l("⚖️ 约束条件规范 "),a("a",{class:"header-anchor",href:"#⚖️-约束条件规范","aria-label":"Permalink to “⚖️ 约束条件规范”"},"​")],-1)),t[16]||(t[16]=a("p",null,"使用 ✅ 和 ❌ 明确区分正面和负面行为：",-1)),t[17]||(t[17]=a("div",{class:"language-markdown"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"markdown"),a("pre",null,[a("code",{"v-pre":""},`## 约束条件
- ✅ 问题要具体到行号
- ✅ 每个问题都要有修复建议
- ✅ 肯定做得好的地方
- ❌ 避免主观偏好替代客观标准
- ❌ 避免只批评不给方案`)])],-1)),t[18]||(t[18]=a("hr",null,null,-1)),t[19]||(t[19]=a("h2",{id:"🔧-错误处理规范",tabindex:"-1"},[l("🔧 错误处理规范 "),a("a",{class:"header-anchor",href:"#🔧-错误处理规范","aria-label":"Permalink to “🔧 错误处理规范”"},"​")],-1)),t[20]||(t[20]=a("p",null,"每个模板都应该包含错误处理部分：",-1)),t[21]||(t[21]=a("div",{class:"language-markdown"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"markdown"),a("pre",null,[a("code",{"v-pre":""},`## 错误处理
- 如果信息不足，列出需要补充的信息并说明为什么需要
- 如果问题超出能力范围，说明并建议求助渠道
- 如果有多个独立问题，建议逐个处理`)])],-1)),t[22]||(t[22]=a("hr",null,null,-1)),t[23]||(t[23]=a("h2",{id:"✅-自检清单规范",tabindex:"-1"},[l("✅ 自检清单规范 "),a("a",{class:"header-anchor",href:"#✅-自检清单规范","aria-label":"Permalink to “✅ 自检清单规范”"},"​")],-1)),t[24]||(t[24]=a("p",null,"复杂任务应包含自检清单：",-1)),t[25]||(t[25]=a("div",{class:"language-markdown"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"markdown"),a("pre",null,[a("code",{"v-pre":""},`## 自检清单
完成前确认：
- [ ] 每个主角都有清晰的弧线
- [ ] 起承转合节奏合理
- [ ] 核心冲突能贯穿全文
- [ ] 亮点足以吸引目标读者`)])],-1)),t[26]||(t[26]=a("hr",null,null,-1)),t[27]||(t[27]=a("h2",{id:"🤖-agent-skill-description-规范",tabindex:"-1"},[l("🤖 Agent/Skill description 规范 "),a("a",{class:"header-anchor",href:"#🤖-agent-skill-description-规范","aria-label":"Permalink to “🤖 Agent/Skill description 规范”"},"​")],-1)),t[28]||(t[28]=a("h3",{id:"结构模板",tabindex:"-1"},[l("结构模板 "),a("a",{class:"header-anchor",href:"#结构模板","aria-label":"Permalink to “结构模板”"},"​")],-1)),t[29]||(t[29]=a("div",{class:"language-yaml"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"yaml"),a("pre",null,[a("code",{"v-pre":""},`description: |
  [一句话说明核心能力]
  提供：[该 Skill 包含的资源]
  适用：[触发场景1]、[触发场景2]
  不适用：[边界场景1]、[边界场景2]`)])],-1)),t[30]||(t[30]=a("h3",{id:"示例-1",tabindex:"-1"},[l("示例 "),a("a",{class:"header-anchor",href:"#示例-1","aria-label":"Permalink to “示例”"},"​")],-1)),t[31]||(t[31]=a("p",null,[a("strong",null,"❌ 差的写法"),l("：")],-1)),t[32]||(t[32]=a("div",{class:"language-yaml"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"yaml"),a("pre",null,[a("code",{"v-pre":""},"description: 代码审查专家")])],-1)),t[33]||(t[33]=a("p",null,[a("strong",null,"✅ 好的写法"),l("：")],-1)),t[34]||(t[34]=a("div",{class:"language-yaml"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"yaml"),a("pre",null,[a("code",{"v-pre":""},`description: |
  代码审查专家，专注安全漏洞、性能问题、代码质量。
  适用场景：PR 审查、代码健康检查、安全审计。
  不适用：代码生成、功能实现、测试编写。`)])],-1)),t[35]||(t[35]=n("",7))])}const P=r(p,[["render",h]]);export{k as __pageData,P as default};
