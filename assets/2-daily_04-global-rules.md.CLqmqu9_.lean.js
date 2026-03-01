import{_ as n,I as d,c as r,o as s,a5 as l,j as o,J as i,a as e,ax as p}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"全局提示词","description":"用规则文件让 AI 永久记住你的偏好，不用每次对话都重复。","frontmatter":{"title":"全局提示词","subtitle":"让 AI 记住你的工作习惯","course":"OpenCode 中文实战课","stage":"第二阶段","lesson":"2.4","duration":"12 分钟","practice":"15 分钟","level":"新手","description":"用规则文件让 AI 永久记住你的偏好，不用每次对话都重复。","tags":["规则","提示词","个性化","日常使用"],"prerequisite":["2.1 界面与操作"]},"headers":[],"relativePath":"2-daily/04-global-rules.md","filePath":"2-daily/04-global-rules.md","lastUpdated":1772014034000}'),c={name:"2-daily/04-global-rules.md"};function u(m,t,b,h,g,k){const a=d("AdInArticle");return s(),r("div",null,[t[0]||(t[0]=l("",35)),t[1]||(t[1]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},`1. 全局 ~/.config/opencode/AGENTS.md
2. 全局 ~/.claude/CLAUDE.md（兼容模式）
3. 项目目录向上查找 AGENTS.md / CLAUDE.md
4. 配置文件 instructions 指定的文件`)])],-1)),t[2]||(t[2]=o("p",null,[o("strong",null,"结果"),e("：所有规则都会生效，合并在一起。")],-1)),t[3]||(t[3]=o("hr",null,null,-1)),t[4]||(t[4]=o("h2",{id:"跟我做",tabindex:"-1"},[e("跟我做 "),o("a",{class:"header-anchor",href:"#跟我做","aria-label":"Permalink to “跟我做”"},"​")],-1)),i(a),t[5]||(t[5]=o("div",{class:"tip custom-block"},[o("p",{class:"custom-block-title"},"💡 核心理念"),o("p",null,[o("strong",null,"不用离开 OpenCode"),e("！直接让 AI 帮你创建规则文件，这是最简单的方式。")])],-1)),t[6]||(t[6]=o("h3",{id:"第-1-步-让-ai-帮你创建全局规则",tabindex:"-1"},[e("第 1 步：让 AI 帮你创建全局规则 "),o("a",{class:"header-anchor",href:"#第-1-步-让-ai-帮你创建全局规则","aria-label":"Permalink to “第 1 步：让 AI 帮你创建全局规则”"},"​")],-1)),t[7]||(t[7]=o("p",null,[o("strong",null,"为什么"),o("br"),e(" 既然已经在用 OpenCode，直接让 AI 帮你写文件最方便。")],-1)),t[8]||(t[8]=o("p",null,"在 OpenCode 输入框里输入：",-1)),t[9]||(t[9]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},`帮我创建全局规则文件 ~/.config/opencode/AGENTS.md，内容是：

始终使用简体中文回复`)])],-1)),t[10]||(t[10]=l("",11)),t[11]||(t[11]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},`帮我更新全局规则文件 ~/.config/opencode/AGENTS.md，改成：

## 语言和风格

- 始终使用简体中文回复
- 直接回答问题，不要客套话
- 代码注释也用中文

## 代码规范

- 使用 2 空格缩进
- 变量名用驼峰命名（camelCase）
- 函数名用动词开头（如 getUserById）

## 工作习惯

- 修改代码前先阅读相关文件
- 不确定时先问，不要猜测
- 每次只做最小必要的修改`)])],-1)),t[12]||(t[12]=o("p",null,[o("strong",null,"你应该看到"),e("：AI 更新了规则文件。")],-1)),t[13]||(t[13]=o("h3",{id:"第-4-步-可选-创建项目规则",tabindex:"-1"},[e("第 4 步：（可选）创建项目规则 "),o("a",{class:"header-anchor",href:"#第-4-步-可选-创建项目规则","aria-label":"Permalink to “第 4 步：（可选）创建项目规则”"},"​")],-1)),t[14]||(t[14]=o("p",null,[o("strong",null,"为什么"),o("br"),e(" 有些规则只对特定项目有效。")],-1)),t[15]||(t[15]=o("p",null,"在项目目录里启动 OpenCode，然后说：",-1)),t[16]||(t[16]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},`帮我在项目根目录创建 AGENTS.md，内容是：

# 项目规则

## 技术栈
- 前端：React + TypeScript
- 后端：NestJS
- 数据库：PostgreSQL

## 代码规范
- 使用项目的 ESLint 配置
- 组件文件用 PascalCase 命名
- API 路由用 kebab-case`)])],-1)),t[17]||(t[17]=o("p",null,[o("strong",null,"你应该看到"),e("：在这个项目里，AI 会同时遵守全局规则和项目规则。")],-1)),t[18]||(t[18]=o("h3",{id:"第-5-步-可选-用-init-自动生成项目规则",tabindex:"-1"},[e("第 5 步：（可选）用 /init 自动生成项目规则 "),o("a",{class:"header-anchor",href:"#第-5-步-可选-用-init-自动生成项目规则","aria-label":"Permalink to “第 5 步：（可选）用 /init 自动生成项目规则”"},"​")],-1)),t[19]||(t[19]=o("p",null,[o("strong",null,"为什么"),o("br"),e(" 如果你不知道该写什么规则，让 AI 分析项目自动生成。")],-1)),t[20]||(t[20]=o("p",null,"在 OpenCode 输入：",-1)),t[21]||(t[21]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},"/init")])],-1)),t[22]||(t[22]=l("",6)),t[23]||(t[23]=o("div",{class:"language-markdown"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"markdown"),o("pre",null,[o("code",{"v-pre":""},`## 工作态度

- 每次工作都要用严谨的工作态度，保证完美的质量标准

## 沟通风格

- 直接输出代码或方案，禁止客套话（"抱歉"、"我明白了"等）
- 除非明确要求，否则不提供代码摘要

## 求真原则（禁止瞎猜）

- 不确定/信息不足时先查证或提问澄清
- 对环境/配置/源码/行为的结论必须有证据
- 回答里把"事实"和"推测/假设"分开写`)])],-1)),t[24]||(t[24]=o("h3",{id:"代码质量规则",tabindex:"-1"},[e("代码质量规则 "),o("a",{class:"header-anchor",href:"#代码质量规则","aria-label":"Permalink to “代码质量规则”"},"​")],-1)),t[25]||(t[25]=o("div",{class:"language-markdown"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"markdown"),o("pre",null,[o("code",{"v-pre":""},`## 代码质量原则

- 优先代码可读性，做最简单的修改
- 禁止使用 \`eslint-disable\` 或 \`@ts-ignore\` 绕过问题
- 禁止使用 \`any\` 类型，必须定义明确的类型
- 不要为了向后兼容而保留废弃代码
- 删除未使用的代码，不要注释掉

## 复用优先

- 编写新代码前，先确认项目中是否已有类似实现
- 优先复用现有组件和工具函数，而非新建`)])],-1)),t[26]||(t[26]=o("h3",{id:"工作流程规则",tabindex:"-1"},[e("工作流程规则 "),o("a",{class:"header-anchor",href:"#工作流程规则","aria-label":"Permalink to “工作流程规则”"},"​")],-1)),t[27]||(t[27]=o("div",{class:"language-markdown"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"markdown"),o("pre",null,[o("code",{"v-pre":""},`## 执行规范

- 任何非平凡任务，先制定计划再动手
- 修改代码前必须先阅读相关文件
- 修改完成后自行运行测试验证

## 子代理调度策略

- 尽可能调用子代理完成任务
- 能派给专家的就派，不要什么都自己干`)])],-1)),t[28]||(t[28]=o("hr",null,null,-1)),t[29]||(t[29]=o("h2",{id:"高级用法-配置文件引用",tabindex:"-1"},[e("高级用法：配置文件引用 "),o("a",{class:"header-anchor",href:"#高级用法-配置文件引用","aria-label":"Permalink to “高级用法：配置文件引用”"},"​")],-1)),t[30]||(t[30]=o("p",null,"如果你的规则分散在多个文件，可以用配置文件统一引用：",-1)),t[31]||(t[31]=o("div",{class:"language-json"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"json"),o("pre",null,[o("code",{"v-pre":""},`// opencode.json
{
  "instructions": [
    "CONTRIBUTING.md",
    "docs/coding-standards.md",
    ".cursor/rules/*.md",
    "~/my-rules/common.md"
  ]
}`)])],-1)),t[32]||(t[32]=l("",24))])}const C=n(c,[["render",u]]);export{f as __pageData,C as default};
