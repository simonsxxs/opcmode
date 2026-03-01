import{_ as n,c as d,o as r,a5 as o,j as e,a as t,b3 as s}from"./chunks/framework.Dtwt352Q.js";const b=JSON.parse('{"title":"5.4 Slash Commands","description":"Customize slash commands to trigger complex tasks with /command-name for improved efficiency.","frontmatter":{"title":"5.4 Slash Commands","subtitle":"One-click triggers for common tasks","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.4","duration":"15 minutes","practice":"15 minutes","level":"Advanced","description":"Customize slash commands to trigger complex tasks with /command-name for improved efficiency.","tags":["command","shortcut"],"prerequisite":["5.2 Custom Agents"]},"headers":[],"relativePath":"en/5-advanced/04-commands.md","filePath":"en/5-advanced/04-commands.md","lastUpdated":1772014034000}'),l={name:"en/5-advanced/04-commands.md"};function i(c,a,m,p,u,h){return r(),d("div",null,[...a[0]||(a[0]=[o("",19),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/
└── command/
    ├── review.md           → /review
    ├── git/
    │   ├── commit.md       → /git/commit
    │   └── changelog.md    → /git/changelog
    └── test/
        └── coverage.md     → /test/coverage`)])],-1),e("hr",null,null,-1),e("h2",{id:"two-configuration-methods",tabindex:"-1"},[t("Two Configuration Methods "),e("a",{class:"header-anchor",href:"#two-configuration-methods","aria-label":"Permalink to “Two Configuration Methods”"},"​")],-1),e("h3",{id:"method-1-markdown-file-recommended",tabindex:"-1"},[t("Method 1: Markdown File (Recommended) "),e("a",{class:"header-anchor",href:"#method-1-markdown-file-recommended","aria-label":"Permalink to “Method 1: Markdown File (Recommended)”"},"​")],-1),e("p",null,[t("Create "),e("code",null,".opencode/command/test.md"),t(":")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Run tests and show coverage
agent: build
model: anthropic/claude-opus-4-5-thinking
---

Run the complete test suite and generate a coverage report.
Focus on failed tests and provide fix suggestions.`)])],-1),e("p",null,[t("Usage: "),e("code",null,"/test")],-1),e("h3",{id:"method-2-json-configuration",tabindex:"-1"},[t("Method 2: JSON Configuration "),e("a",{class:"header-anchor",href:"#method-2-json-configuration","aria-label":"Permalink to “Method 2: JSON Configuration”"},"​")],-1),e("p",null,[t("Configure in "),e("code",null,"opencode.jsonc"),t(":")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "command": {
    // Key name is the command name
    "test": {
      // template is required
      "template": "Run the complete test suite and generate a coverage report.\\nFocus on failed tests and provide fix suggestions.",
      "description": "Run tests and show coverage",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking"
    }
  }
}`)])],-1),o("",10),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Quick code review
---`)])],-1),e("h3",{id:"agent-optional",tabindex:"-1"},[t("agent (Optional) "),e("a",{class:"header-anchor",href:"#agent-optional","aria-label":"Permalink to “agent (Optional)”"},"​")],-1),e("p",null,"Specify which agent executes this command.",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
agent: plan
---`)])],-1),o("",5),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
model: anthropic/claude-opus-4-5-thinking
---`)])],-1),e("h3",{id:"subtask-optional",tabindex:"-1"},[t("subtask (Optional) "),e("a",{class:"header-anchor",href:"#subtask-optional","aria-label":"Permalink to “subtask (Optional)”"},"​")],-1),e("p",null,"Force command to run as a subtask.",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
subtask: true
---`)])],-1),o("",7),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Create React component
---

Create a React component named $ARGUMENTS with TypeScript type support.`)])],-1),e("p",null,[t("Usage: "),e("code",null,"/component Button"),t(" → replaces "),e("code",null,"$ARGUMENTS"),t(" with "),e("code",null,"Button")],-1),e("h3",{id:"_1-2-3-positional-arguments",tabindex:"-1"},[t("$1, $2, $3... - Positional Arguments "),e("a",{class:"header-anchor",href:"#_1-2-3-positional-arguments","aria-label":"Permalink to “$1, $2, $3... - Positional Arguments”"},"​")],-1),e("p",null,"Reference each argument by position.",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Create specified file
---

Create a file named $1 in directory $2 with content: $3`)])],-1),e("p",null,"Usage:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'/create-file config.json src "{ \\"key\\": \\"value\\" }"')])],-1),o("",4),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Analyze test coverage
---

Current test results:
!\`npm test\`

Based on these results, suggest ways to improve coverage.`)])],-1),e("p",null,"Another example:",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Review recent changes
---

Recent Git commits:
!\`git log --oneline -10\`

Please review these changes and provide improvement suggestions.`)])],-1),e("blockquote",null,[e("p",null,"Commands execute in the project root directory, output becomes part of the prompt.")],-1),e("h3",{id:"file-file-reference",tabindex:"-1"},[t("@file - File Reference "),e("a",{class:"header-anchor",href:"#file-file-reference","aria-label":"Permalink to “@file - File Reference”"},"​")],-1),e("p",null,"Reference file contents.",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Review component
---

Review the @src/components/Button.tsx component.
Check for performance issues and provide improvement suggestions.`)])],-1),o("",7),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Review code quality of specified file
agent: plan
---

@$1

Please review this file's code quality, focusing on:
1. Code conventions and naming
2. Potential bugs
3. Performance issues
4. Maintainability`)])],-1),e("p",null,[t("Usage: "),e("code",null,"/review src/main.ts")],-1),e("h3",{id:"smart-commit-command",tabindex:"-1"},[t("Smart Commit Command "),e("a",{class:"header-anchor",href:"#smart-commit-command","aria-label":"Permalink to “Smart Commit Command”"},"​")],-1),e("p",null,[e("code",null,".opencode/command/commit.md"),t(":")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Generate commit message from changes
---

Generate a commit message based on the following changes:

!\`git diff --staged\`

Requirements:
- Follow Conventional Commits specification
- Be concise, explain "why" not "what"`)])],-1),e("p",null,[t("Usage: "),e("code",null,"/commit")],-1),e("h3",{id:"translation-command",tabindex:"-1"},[t("Translation Command "),e("a",{class:"header-anchor",href:"#translation-command","aria-label":"Permalink to “Translation Command”"},"​")],-1),e("p",null,[e("code",null,".opencode/command/translate.md"),t(":")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Translate to Chinese
subtask: true
---

Please translate the following content to Chinese:

$ARGUMENTS`)])],-1),o("",10),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Project-specific help
---

This is project-specific help information.

## Common Commands

- /review <file> - Code review
- /commit - Smart commit
- /translate <text> - Translation`)])],-1),o("",10)])])}const f=n(l,[["render",i]]);export{b as __pageData,f as default};
