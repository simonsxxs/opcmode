import{_ as o,c as n,o as l,a5 as a,j as e,a as t,b3 as r}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"5.4 快捷命令","description":"自定义斜杠命令，用 /命令名 一键触发复杂任务，提升操作效率。","frontmatter":{"title":"5.4 快捷命令","subtitle":"一键触发常用任务","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.4","duration":"15 分钟","practice":"15 分钟","level":"进阶","description":"自定义斜杠命令，用 /命令名 一键触发复杂任务，提升操作效率。","tags":["命令","快捷"],"prerequisite":["5.2 自定义 Agent"]},"headers":[],"relativePath":"5-advanced/04-commands.md","filePath":"5-advanced/04-commands.md","lastUpdated":1772014034000}'),c={name:"5-advanced/04-commands.md"};function s(i,d,p,h,m,u){return l(),n("div",null,[...d[0]||(d[0]=[a("",19),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/
└── command/
    ├── review.md           → /review
    ├── git/
    │   ├── commit.md       → /git/commit
    │   └── changelog.md    → /git/changelog
    └── test/
        └── coverage.md     → /test/coverage`)])],-1),e("hr",null,null,-1),e("h2",{id:"两种配置方式",tabindex:"-1"},[t("两种配置方式 "),e("a",{class:"header-anchor",href:"#两种配置方式","aria-label":"Permalink to “两种配置方式”"},"​")],-1),e("h3",{id:"方式一-markdown-文件-推荐",tabindex:"-1"},[t("方式一：Markdown 文件（推荐） "),e("a",{class:"header-anchor",href:"#方式一-markdown-文件-推荐","aria-label":"Permalink to “方式一：Markdown 文件（推荐）”"},"​")],-1),e("p",null,[t("创建 "),e("code",null,".opencode/command/test.md"),t("：")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 运行测试并显示覆盖率
agent: build
model: anthropic/claude-opus-4-5-thinking
---

运行完整的测试套件，生成覆盖率报告。
重点关注失败的测试并提供修复建议。`)])],-1),e("p",null,[t("使用："),e("code",null,"/test")],-1),e("h3",{id:"方式二-json-配置",tabindex:"-1"},[t("方式二：JSON 配置 "),e("a",{class:"header-anchor",href:"#方式二-json-配置","aria-label":"Permalink to “方式二：JSON 配置”"},"​")],-1),e("p",null,[t("在 "),e("code",null,"opencode.jsonc"),t(" 中配置：")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "command": {
    // 键名就是命令名
    "test": {
      // template 是必需字段
      "template": "运行完整的测试套件，生成覆盖率报告。\\n重点关注失败的测试并提供修复建议。",
      "description": "运行测试并显示覆盖率",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking"
    }
  }
}`)])],-1),a("",10),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 快速代码审查
---`)])],-1),e("h3",{id:"agent-可选",tabindex:"-1"},[t("agent（可选） "),e("a",{class:"header-anchor",href:"#agent-可选","aria-label":"Permalink to “agent（可选）”"},"​")],-1),e("p",null,"指定执行此命令的 Agent。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
agent: plan
---`)])],-1),a("",5),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
model: anthropic/claude-opus-4-5-thinking
---`)])],-1),e("h3",{id:"subtask-可选",tabindex:"-1"},[t("subtask（可选） "),e("a",{class:"header-anchor",href:"#subtask-可选","aria-label":"Permalink to “subtask（可选）”"},"​")],-1),e("p",null,"强制命令作为子任务运行。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
subtask: true
---`)])],-1),a("",7),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 创建 React 组件
---

创建一个名为 $ARGUMENTS 的 React 组件，包含 TypeScript 类型支持。`)])],-1),e("p",null,[t("使用："),e("code",null,"/component Button"),t(" → 将 "),e("code",null,"$ARGUMENTS"),t(" 替换为 "),e("code",null,"Button")],-1),e("h3",{id:"_1-2-3-位置参数",tabindex:"-1"},[t("$1, $2, $3... - 位置参数 "),e("a",{class:"header-anchor",href:"#_1-2-3-位置参数","aria-label":"Permalink to “$1, $2, $3... - 位置参数”"},"​")],-1),e("p",null,"按位置引用各个参数。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 创建指定文件
---

在目录 $2 中创建名为 $1 的文件，内容为：$3`)])],-1),e("p",null,"使用：",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'/create-file config.json src "{ \\"key\\": \\"value\\" }"')])],-1),a("",4),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 分析测试覆盖率
---

当前测试结果：
!\`npm test\`

根据这些结果，建议提升覆盖率的方法。`)])],-1),e("p",null,"另一个示例：",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 审查最近变更
---

最近的 Git 提交：
!\`git log --oneline -10\`

请审查这些变更并提出改进建议。`)])],-1),e("blockquote",null,[e("p",null,"命令在项目根目录执行，输出成为提示词的一部分。")],-1),e("h3",{id:"file-文件引用",tabindex:"-1"},[t("@file - 文件引用 "),e("a",{class:"header-anchor",href:"#file-文件引用","aria-label":"Permalink to “@file - 文件引用”"},"​")],-1),e("p",null,"引用文件内容。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 审查组件
---

审查 @src/components/Button.tsx 组件。
检查性能问题并提出改进建议。`)])],-1),a("",7),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 审查指定文件的代码质量
agent: plan
---

@$1

请审查这个文件的代码质量，重点关注：
1. 代码规范和命名
2. 潜在 Bug
3. 性能问题
4. 可维护性`)])],-1),e("p",null,[t("使用："),e("code",null,"/review src/main.ts")],-1),e("h3",{id:"智能-commit-命令",tabindex:"-1"},[t("智能 Commit 命令 "),e("a",{class:"header-anchor",href:"#智能-commit-命令","aria-label":"Permalink to “智能 Commit 命令”"},"​")],-1),e("p",null,[e("code",null,".opencode/command/commit.md"),t("：")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 根据变更生成 Commit 消息
---

根据以下变更生成 commit 消息：

!\`git diff --staged\`

要求：
- 遵循 Conventional Commits 规范
- 简洁明了，说明"为什么"而非"做了什么"`)])],-1),e("p",null,[t("使用："),e("code",null,"/commit")],-1),e("h3",{id:"翻译命令",tabindex:"-1"},[t("翻译命令 "),e("a",{class:"header-anchor",href:"#翻译命令","aria-label":"Permalink to “翻译命令”"},"​")],-1),e("p",null,[e("code",null,".opencode/command/translate.md"),t("：")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 翻译为中文
subtask: true
---

请将以下内容翻译为中文：

$ARGUMENTS`)])],-1),a("",10),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 项目专属帮助
---

这是项目专属的帮助信息。

## 常用命令

- /review <file> - 代码审查
- /commit - 智能 Commit
- /translate <text> - 翻译`)])],-1),a("",10)])])}const _=o(c,[["render",s]]);export{g as __pageData,_ as default};
