import{_ as a,I as o,c as r,o as i,a5 as n,j as t,J as s,a as e,aU as p}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"A9 打造创作工作站","description":"创建专属创作 Agent、自定义 Skill 和斜杠命令，打造你的个人 AI 创作工作站。","frontmatter":{"title":"A9 打造创作工作站","subtitle":"创建专属 Agent、Skill 和命令","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"A9","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"创建专属创作 Agent、自定义 Skill 和斜杠命令，打造你的个人 AI 创作工作站。","tags":["Agent","Skill","命令","工作站"],"prerequisite":["A1 创作工作流","3.2 认识 Agent"]},"headers":[],"relativePath":"4-scenarios/writer-workstation.md","filePath":"4-scenarios/writer-workstation.md","lastUpdated":1772014034000}'),g={name:"4-scenarios/writer-workstation.md"};function u(c,d,b,h,m,k){const l=o("AdInArticle");return i(),r("div",null,[d[0]||(d[0]=n("",35)),d[1]||(d[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"mkdir -p ~/.config/opencode/agent")])],-1)),d[2]||(d[2]=t("p",null,"创建 Agent 配置文件。注意：",-1)),d[3]||(d[3]=t("ul",null,[t("li",null,[t("strong",null,"文件名就是 Agent 名称"),e("，例如 "),t("code",null,"novelist.md")]),t("li",null,[e("frontmatter 中使用 "),t("code",null,"mode"),e(" 字段（不是 "),t("code",null,"agent"),e("）")])],-1)),d[4]||(d[4]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode")])],-1)),d[5]||(d[5]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`帮我创建一个写作 Agent，保存到 ~/.config/opencode/agent/novelist.md，内容如下：

---
name: novelist
description: 专业小说创作助手，擅长构思情节、设计角色、润色文字
mode: subagent
temperature: 0.8
---

# 小说家 Agent

你是一位经验丰富的小说创作导师，擅长：
- 故事结构设计（三幕结构、英雄之旅）
- 角色塑造（性格、动机、弧光）
- 情节发展（冲突、转折、高潮）
- 文字润色（节奏、意境、对话）

## 工作原则
1. 先理解作者意图，再提供建议
2. 建议具体可操作，附带示例
3. 尊重作者风格，不强加己见
4. 鼓励创新，避免套路化`)])],-1)),d[6]||(d[6]=t("h3",{id:"第-2-步-创建写作-skill",tabindex:"-1"},[e("第 2 步：创建写作 Skill "),t("a",{class:"header-anchor",href:"#第-2-步-创建写作-skill","aria-label":"Permalink to “第 2 步：创建写作 Skill”"},"​")],-1)),s(l),d[7]||(d[7]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" Skill 封装复杂的写作指令，一键调用。")],-1)),d[8]||(d[8]=t("p",null,[t("strong",null,"重要"),e("：Skill 目录结构必须是 "),t("code",null,"skill/<名称>/SKILL.md")],-1)),d[9]||(d[9]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"mkdir -p .opencode/skill/character-design")])],-1)),d[10]||(d[10]=t("p",null,"创建角色设计 Skill：",-1)),d[11]||(d[11]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`帮我创建一个角色设计 Skill，保存到 .opencode/skill/character-design/SKILL.md：

> ⚠️ **命名规则（推荐）**
> - 使用小写字母、数字、连字符
> - 1-64 个字符
> - 不以连字符开头或结尾
> - 不包含连续连字符（\`--\`）
> - 必须与目录名一致
> 
> 推荐格式：\`^[a-z0-9]+(-[a-z0-9]+)*$\`

---
name: character-design
description: 生成详细的小说角色卡
---

# 角色设计技能

根据用户提供的角色类型，生成完整的角色卡。

## 输出格式

### 基本信息
- 姓名、年龄、职业、外貌

### 性格光谱
- 3 个正面特质
- 2 个负面特质

### 背景故事
- 影响性格形成的关键事件

### 核心动机
- 外在目标
- 内在需求

### 人物弧光
- 起点状态 → 终点状态

### 标志性特征
- 口头禅或小动作`)])],-1)),d[12]||(d[12]=t("h3",{id:"skill-权限控制",tabindex:"-1"},[e("Skill 权限控制 "),t("a",{class:"header-anchor",href:"#skill-权限控制","aria-label":"Permalink to “Skill 权限控制”"},"​")],-1)),d[13]||(d[13]=t("p",null,[e("你可以通过配置控制哪些 Skill 可以被 agent 使用。在 "),t("code",null,"opencode.json"),e(" 中配置：")],-1)),d[14]||(d[14]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "skill": {
      "character-design": "allow",
      "internal-*": "deny",
      "*": "allow"
    }
  }
}`)])],-1)),d[15]||(d[15]=n("",4)),d[16]||(d[16]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"mkdir -p .opencode/command")])],-1)),d[17]||(d[17]=t("p",null,"创建 /角色 命令：",-1)),d[18]||(d[18]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`帮我创建一个快捷命令，保存到 .opencode/command/角色.md：

---
description: 快速生成角色卡
agent: novelist
---

请使用 character-design 技能，为我设计一个角色：

角色类型：$ARGUMENTS`)])],-1)),d[19]||(d[19]=t("p",null,"创建 /润色 命令：",-1)),d[20]||(d[20]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`帮我创建一个快捷命令，保存到 .opencode/command/润色.md：

---
description: 润色选中的文本
---

请润色以下内容，提升文字表现力，保持原意：

$ARGUMENTS`)])],-1)),d[21]||(d[21]=n("",7)),d[22]||(d[22]=t("div",{class:"language-md"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"md"),t("pre",null,[t("code",{"v-pre":""},`---
description: 创建文件并写入内容
---

创建文件名为 $1 的文件，目录为 $2，内容为：
$3`)])],-1)),d[23]||(d[23]=t("p",null,[e("运行："),t("code",null,'/创建-file config.json src "{ \\"key\\": \\"value\\" }"')],-1)),d[24]||(d[24]=t("h3",{id:"子任务模式",tabindex:"-1"},[e("子任务模式 "),t("a",{class:"header-anchor",href:"#子任务模式","aria-label":"Permalink to “子任务模式”"},"​")],-1)),d[25]||(d[25]=t("p",null,[e("使用 "),t("code",null,"subtask: true"),e(" 强制命令作为子任务执行，不污染主上下文。")],-1)),d[26]||(d[26]=t("div",{class:"language-md"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"md"),t("pre",null,[t("code",{"v-pre":""},`---
description: 深度分析代码
subtask: true
---

执行深度代码分析：
$ARGUMENTS`)])],-1)),d[27]||(d[27]=t("h3",{id:"shell-输出注入",tabindex:"-1"},[e("Shell 输出注入 "),t("a",{class:"header-anchor",href:"#shell-输出注入","aria-label":"Permalink to “Shell 输出注入”"},"​")],-1)),d[28]||(d[28]=t("p",null,[e("使用 "),t("code",null,"!command"),e(" 将 bash 命令输出注入到命令模板。")],-1)),d[29]||(d[29]=t("p",null,"示例：分析测试结果",-1)),d[30]||(d[30]=t("div",{class:"language-md"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"md"),t("pre",null,[t("code",{"v-pre":""},`---
description: 分析测试覆盖率
---

当前测试结果：
!\`npm test\`

基于结果建议优化方案。`)])],-1)),d[31]||(d[31]=t("p",null,"示例：审查最近更改",-1)),d[32]||(d[32]=t("div",{class:"language-md"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"md"),t("pre",null,[t("code",{"v-pre":""},`---
description: 审查最近的更改
---

最近的 Git 提交：
!\`git log --oneline -10\`

审查并建议改进。`)])],-1)),d[33]||(d[33]=t("h3",{id:"第-4-步-测试写作工作站",tabindex:"-1"},[e("第 4 步：测试写作工作站 "),t("a",{class:"header-anchor",href:"#第-4-步-测试写作工作站","aria-label":"Permalink to “第 4 步：测试写作工作站”"},"​")],-1)),d[34]||(d[34]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" 确认配置生效。")],-1)),d[35]||(d[35]=t("p",null,"重启 OpenCode：",-1)),d[36]||(d[36]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode")])],-1)),d[37]||(d[37]=t("p",null,"测试 Agent：",-1)),d[38]||(d[38]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},'按 Tab 切换，看看是否有 "小说家" Agent')])],-1)),d[39]||(d[39]=t("p",null,"测试命令：",-1)),d[40]||(d[40]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/角色 霸道总裁")])],-1)),d[41]||(d[41]=t("p",null,[t("strong",null,"你应该看到"),e("：AI 用小说家 Agent 和角色设计 Skill 生成角色卡")],-1)),d[42]||(d[42]=t("hr",null,null,-1)),d[43]||(d[43]=t("h2",{id:"高级配置技巧",tabindex:"-1"},[e("高级配置技巧 "),t("a",{class:"header-anchor",href:"#高级配置技巧","aria-label":"Permalink to “高级配置技巧”"},"​")],-1)),d[44]||(d[44]=t("h3",{id:"权限控制",tabindex:"-1"},[e("权限控制 "),t("a",{class:"header-anchor",href:"#权限控制","aria-label":"Permalink to “权限控制”"},"​")],-1)),d[45]||(d[45]=t("p",null,"Agent 可以精细控制工具和技能的访问权限。在 agent 的 frontmatter 中配置：",-1)),d[46]||(d[46]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
name: readonly-reviewer
description: 只读代码审查
permission:
  edit: deny
  bash:
    "*": ask
    "git diff": allow
    "git log*": allow
  webfetch: deny
---

只分析代码，不修改。`)])],-1)),d[47]||(d[47]=n("",4)),d[48]||(d[48]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`.opencode/agent/
  ├── writing/
  │   ├── novelist.md
  │   └── copywriter.md
  └── coding/
      ├── frontend.md
      └── backend.md`)])],-1)),d[49]||(d[49]=n("",16))])}const y=a(g,[["render",u]]);export{f as __pageData,y as default};
