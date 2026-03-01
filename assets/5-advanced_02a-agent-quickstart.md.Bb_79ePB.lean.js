import{_ as o,I as r,c as l,o as s,a5 as d,j as t,J as i,a as n,aY as g}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.2a Agent 快速入门","description":"理解 Agent 的本质，创建你的第一个自定义 Agent，扩展 OpenCode 的能力。","frontmatter":{"title":"5.2a Agent 快速入门","subtitle":"理解并创建你的第一个 Agent","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.2a","duration":"15 分钟","practice":"15 分钟","level":"进阶","description":"理解 Agent 的本质，创建你的第一个自定义 Agent，扩展 OpenCode 的能力。","tags":["Agent","自定义"],"prerequisite":["3.2 认识 Agent"]},"headers":[],"relativePath":"5-advanced/02a-agent-quickstart.md","filePath":"5-advanced/02a-agent-quickstart.md","lastUpdated":1772014034000}'),c={name:"5-advanced/02a-agent-quickstart.md"};function p(h,e,b,u,m,A){const a=r("AdInArticle");return s(),l("div",null,[e[0]||(e[0]=d("",23)),e[1]||(e[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`用户 ←→ Primary Agent (build/plan)
              ↓
         Task Tool (创建独立 Session)
              ↓
         Subagent (explore/general/你的自定义 Agent)
              ↓
         返回结果给 Primary`)])],-1)),e[2]||(e[2]=d("",5)),i(a),e[3]||(e[3]=d("",15)),e[4]||(e[4]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
description: 简短描述这个 Agent 做什么
mode: subagent
---

这里是系统提示词（System Prompt）。

告诉 Agent 它是谁、擅长什么、如何工作。`)])],-1)),e[5]||(e[5]=t("h3",{id:"完整示例-文档写作-agent",tabindex:"-1"},[n("完整示例：文档写作 Agent "),t("a",{class:"header-anchor",href:"#完整示例-文档写作-agent","aria-label":"Permalink to “完整示例：文档写作 Agent”"},"​")],-1)),e[6]||(e[6]=t("p",null,[n("创建文件 "),t("code",null,".opencode/agent/docs-writer.md"),n("：")],-1)),e[7]||(e[7]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
description: |
  技术文档写作专家，擅长 API 文档、README、用户手册。
  适用场景：写新项目文档、更新现有文档、解释代码功能。
  不适用：代码审查、Bug 修复、功能实现。
mode: subagent
temperature: 0.3
---

# 角色

你是技术文档专家，擅长将复杂概念解释得通俗易懂。你的文档被评价为"看完就会用"。

# 文档规范

- 使用 Markdown 格式
- 代码示例必须可运行
- 包含输入/输出说明
- 中文优先，专业术语保留英文

# 文档结构

1. 概述（一句话说明是什么）
2. 快速开始（30 秒能跑起来）
3. 详细 API（完整参数说明）
4. 示例代码（覆盖常见场景）
5. 常见问题（预判用户疑惑）

# 工作原则

- 先理解代码，再写文档
- 不确定的地方要验证
- 保持风格一致

# 约束条件

- ✅ 快速开始的代码必须可直接复制运行
- ✅ 参数说明要包含类型和默认值
- ❌ 避免假设用户已有背景知识

# 错误处理

- 如果代码功能不明确，先询问或查阅相关源码
- 如果缺少上下文，列出需要补充的信息
- 如果遇到不熟悉的框架，声明并建议其他 Agent`)])],-1)),e[8]||(e[8]=t("h3",{id:"markdown-中的权限配置",tabindex:"-1"},[n("Markdown 中的权限配置 "),t("a",{class:"header-anchor",href:"#markdown-中的权限配置","aria-label":"Permalink to “Markdown 中的权限配置”"},"​")],-1)),e[9]||(e[9]=t("p",null,"你可以在 Frontmatter 中直接配置权限（使用 YAML 语法）：",-1)),e[10]||(e[10]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
description: 只读代码审计 Agent
mode: subagent
permission:
  edit: deny            # 禁止编辑
  bash:
    "*": deny           # 禁止所有命令
    "git log*": allow   # 只允许查看日志
  task:
    "*": deny           # 禁止调用其他 Agent
---`)])],-1)),e[11]||(e[11]=d("",10)),e[12]||(e[12]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "code-reviewer": {
      "description": "代码审查专家，专注安全、性能、可维护性。适用于 PR 审查、代码健康检查。",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-20250514",
      "temperature": 0.2,
      "steps": 30,
      "color": "#4CAF50",
      "prompt": "你是代码审查专家。\\n\\n## 检查要点\\n- 安全漏洞（SQL注入、XSS、硬编码密钥）\\n- 性能问题（时间复杂度、资源泄漏）\\n- 代码风格（命名、结构、可读性）\\n- 可维护性（耦合度、测试覆盖）\\n\\n## 输出格式\\n- 🔴 严重问题（必须修复，说明风险和修复方案）\\n- 🟡 建议改进（推荐修复，说明原因）\\n- 🟢 优点（值得保持）\\n\\n## 约束条件\\n- ✅ 问题要具体到行号\\n- ✅ 每个问题都要有修复建议\\n- ❌ 避免只批评不给方案"
    }
  }
}`)])],-1)),e[13]||(e[13]=t("h3",{id:"使用外部-prompt-文件",tabindex:"-1"},[n("使用外部 Prompt 文件 "),t("a",{class:"header-anchor",href:"#使用外部-prompt-文件","aria-label":"Permalink to “使用外部 Prompt 文件”"},"​")],-1)),e[14]||(e[14]=t("p",null,"当 prompt 很长时，可以引用外部文件：",-1)),e[15]||(e[15]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "code-reviewer": {
      "description": "代码审查专家",
      "mode": "subagent",
      "prompt": "{file:./prompts/code-reviewer.txt}"
    }
  }
}`)])],-1)),e[16]||(e[16]=d("",8)),e[17]||(e[17]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"@docs-writer 帮我写一个 README")])],-1)),e[18]||(e[18]=d("",9)),e[19]||(e[19]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "explore": {
      "disable": true
    },
    "general": {
      "disable": true
    }
  }
}`)])],-1)),e[20]||(e[20]=t("hr",null,null,-1)),e[21]||(e[21]=t("h2",{id:"设置默认-agent",tabindex:"-1"},[n("设置默认 Agent "),t("a",{class:"header-anchor",href:"#设置默认-agent","aria-label":"Permalink to “设置默认 Agent”"},"​")],-1)),e[22]||(e[22]=t("p",null,"启动 OpenCode 时默认使用哪个 primary agent：",-1)),e[23]||(e[23]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "default_agent": "plan"  // 默认使用 plan agent
}`)])],-1)),e[24]||(e[24]=d("",13))])}const y=o(c,[["render",p]]);export{P as __pageData,y as default};
