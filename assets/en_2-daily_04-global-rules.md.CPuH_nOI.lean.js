import{_ as n,I as a,c as s,o as i,a5 as l,j as e,J as d,a as o,ax as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"Global Instructions","description":"Use rule files to make AI permanently remember your preferences without repeating yourself in every conversation.","frontmatter":{"title":"Global Instructions","subtitle":"Make AI remember your work habits","course":"OpenCode Practical Course","stage":"Phase 2","lesson":"2.4","duration":"12 min","practice":"15 min","level":"Beginner","description":"Use rule files to make AI permanently remember your preferences without repeating yourself in every conversation.","tags":["Rules","Instructions","Personalization","Daily Use"],"prerequisite":["2.1 Interface & Operations"]},"headers":[],"relativePath":"en/2-daily/04-global-rules.md","filePath":"en/2-daily/04-global-rules.md","lastUpdated":1772014034000}'),u={name:"en/2-daily/04-global-rules.md"};function p(m,t,h,g,f,y){const r=a("AdInArticle");return i(),s("div",null,[t[0]||(t[0]=l("",35)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`1. Global ~/.config/opencode/AGENTS.md
2. Global ~/.claude/CLAUDE.md (compatibility mode)
3. Project directory searches upward for AGENTS.md / CLAUDE.md
4. Files specified in config instructions`)])],-1)),t[2]||(t[2]=e("p",null,[e("strong",null,"Result"),o(": All rules take effect and are merged together.")],-1)),t[3]||(t[3]=e("hr",null,null,-1)),t[4]||(t[4]=e("h2",{id:"follow-along",tabindex:"-1"},[o("Follow Along "),e("a",{class:"header-anchor",href:"#follow-along","aria-label":"Permalink to “Follow Along”"},"​")],-1)),d(r),t[5]||(t[5]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"💡 Core Philosophy"),e("p",null,[e("strong",null,"Don't leave OpenCode"),o("! Let AI create the rule file for you—that's the easiest way.")])],-1)),t[6]||(t[6]=e("h3",{id:"step-1-let-ai-create-global-rules",tabindex:"-1"},[o("Step 1: Let AI Create Global Rules "),e("a",{class:"header-anchor",href:"#step-1-let-ai-create-global-rules","aria-label":"Permalink to “Step 1: Let AI Create Global Rules”"},"​")],-1)),t[7]||(t[7]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Since you're already using OpenCode, having AI write the file for you is most convenient.")],-1)),t[8]||(t[8]=e("p",null,"In OpenCode's input box, type:",-1)),t[9]||(t[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a global rule file at ~/.config/opencode/AGENTS.md with the following content:

Always reply in English`)])],-1)),t[10]||(t[10]=l("",11)),t[11]||(t[11]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me update the global rule file at ~/.config/opencode/AGENTS.md to:

## Language & Style

- Always reply in English
- Answer questions directly, no pleasantries
- Code comments in English too

## Code Standards

- Use 2-space indentation
- Variable names in camelCase
- Function names start with verbs (e.g., getUserById)

## Work Habits

- Read relevant files before modifying code
- Ask first when uncertain, don't guess
- Make only minimal necessary changes each time`)])],-1)),t[12]||(t[12]=e("p",null,[e("strong",null,"You should see"),o(": AI has updated the rule file.")],-1)),t[13]||(t[13]=e("h3",{id:"step-4-optional-create-project-rules",tabindex:"-1"},[o("Step 4: (Optional) Create Project Rules "),e("a",{class:"header-anchor",href:"#step-4-optional-create-project-rules","aria-label":"Permalink to “Step 4: (Optional) Create Project Rules”"},"​")],-1)),t[14]||(t[14]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Some rules only apply to specific projects.")],-1)),t[15]||(t[15]=e("p",null,"Start OpenCode in your project directory, then say:",-1)),t[16]||(t[16]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create AGENTS.md in the project root with:

# Project Rules

## Tech Stack
- Frontend: React + TypeScript
- Backend: NestJS
- Database: PostgreSQL

## Code Standards
- Use project's ESLint config
- Component files use PascalCase naming
- API routes use kebab-case`)])],-1)),t[17]||(t[17]=e("p",null,[e("strong",null,"You should see"),o(": In this project, AI will follow both global rules and project rules.")],-1)),t[18]||(t[18]=e("h3",{id:"step-5-optional-use-init-to-auto-generate-project-rules",tabindex:"-1"},[o("Step 5: (Optional) Use /init to Auto-Generate Project Rules "),e("a",{class:"header-anchor",href:"#step-5-optional-use-init-to-auto-generate-project-rules","aria-label":"Permalink to “Step 5: (Optional) Use /init to Auto-Generate Project Rules”"},"​")],-1)),t[19]||(t[19]=e("p",null,[e("strong",null,"Why"),e("br"),o(" If you don't know what rules to write, let AI analyze the project and generate them automatically.")],-1)),t[20]||(t[20]=e("p",null,"In OpenCode, type:",-1)),t[21]||(t[21]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/init")])],-1)),t[22]||(t[22]=l("",6)),t[23]||(t[23]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Work Attitude

- Approach every task with rigor and maintain perfect quality standards

## Communication Style

- Output code or solutions directly, no pleasantries ("sorry", "I understand", etc.)
- Don't provide code summaries unless explicitly requested

## Truth-Seeking Principle (No Guessing)

- When uncertain or lacking information, verify or ask clarifying questions first
- Conclusions about environment/config/source code/behavior must have evidence
- Separate "facts" from "assumptions/hypotheses" in responses`)])],-1)),t[24]||(t[24]=e("h3",{id:"code-quality-rules",tabindex:"-1"},[o("Code Quality Rules "),e("a",{class:"header-anchor",href:"#code-quality-rules","aria-label":"Permalink to “Code Quality Rules”"},"​")],-1)),t[25]||(t[25]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Code Quality Principles

- Prioritize code readability, make the simplest changes
- Never use \`eslint-disable\` or \`@ts-ignore\` to bypass issues
- Never use \`any\` type, must define explicit types
- Don't keep deprecated code for backward compatibility
- Delete unused code, don't comment it out

## Reuse First

- Before writing new code, confirm if similar implementation exists in project
- Prioritize reusing existing components and utility functions over creating new ones`)])],-1)),t[26]||(t[26]=e("h3",{id:"workflow-rules",tabindex:"-1"},[o("Workflow Rules "),e("a",{class:"header-anchor",href:"#workflow-rules","aria-label":"Permalink to “Workflow Rules”"},"​")],-1)),t[27]||(t[27]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Execution Standards

- For any non-trivial task, plan before acting
- Must read relevant files before modifying code
- Run tests to verify after completing modifications

## Sub-agent Delegation Strategy

- Delegate tasks to sub-agents whenever possible
- Assign to experts when possible, don't do everything yourself`)])],-1)),t[28]||(t[28]=e("hr",null,null,-1)),t[29]||(t[29]=e("h2",{id:"advanced-usage-config-file-references",tabindex:"-1"},[o("Advanced Usage: Config File References "),e("a",{class:"header-anchor",href:"#advanced-usage-config-file-references","aria-label":"Permalink to “Advanced Usage: Config File References”"},"​")],-1)),t[30]||(t[30]=e("p",null,"If your rules are spread across multiple files, you can reference them uniformly in the config file:",-1)),t[31]||(t[31]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "instructions": [
    "CONTRIBUTING.md",
    "docs/coding-standards.md",
    ".cursor/rules/*.md",
    "~/my-rules/common.md"
  ]
}`)])],-1)),t[32]||(t[32]=l("",24))])}const C=n(u,[["render",p]]);export{k as __pageData,C as default};
