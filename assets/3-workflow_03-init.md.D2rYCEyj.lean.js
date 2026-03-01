import{_ as n,I as d,c as i,o as r,a5 as t,J as s,j as e,a as l,aC as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"项目初始化：让 AI 读懂你的项目","description":"使用 /init 命令生成 AGENTS.md 规则文件，让 AI 自动了解你的项目规范和技术栈，避免重复介绍项目。","frontmatter":{"title":"项目初始化：让 AI 读懂你的项目","subtitle":"用 /init 生成项目规则","course":"OpenCode 中文实战课","stage":"第三阶段","lesson":"3.3","duration":"10 分钟","practice":"15 分钟","level":"新手","description":"使用 /init 命令生成 AGENTS.md 规则文件，让 AI 自动了解你的项目规范和技术栈，避免重复介绍项目。","tags":["初始化","AGENTS.md","项目规则"],"prerequisite":["3.2 认识 Agent"]},"headers":[],"relativePath":"3-workflow/03-init.md","filePath":"3-workflow/03-init.md","lastUpdated":1772014034000}'),p={name:"3-workflow/03-init.md"};function u(m,o,h,b,g,A){const a=d("AdInArticle");return r(),i("div",null,[o[0]||(o[0]=t("",20)),s(a),o[1]||(o[1]=t("",12)),o[2]||(o[2]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`cd ~/your-project
opencode`)])],-1)),o[3]||(o[3]=e("h3",{id:"第-2-步-执行初始化",tabindex:"-1"},[l("第 2 步：执行初始化 "),e("a",{class:"header-anchor",href:"#第-2-步-执行初始化","aria-label":"Permalink to “第 2 步：执行初始化”"},"​")],-1)),o[4]||(o[4]=e("p",null,[e("strong",null,"为什么"),e("br"),l(" 让 AI 分析项目并生成规则文件。")],-1)),o[5]||(o[5]=e("p",null,"输入：",-1)),o[6]||(o[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/init")])],-1)),o[7]||(o[7]=e("p",null,[e("strong",null,"你应该看到"),l("：AI 开始分析项目结构、技术栈、代码风格")],-1)),o[8]||(o[8]=e("h4",{id:"高级用法",tabindex:"-1"},[l("高级用法 "),e("a",{class:"header-anchor",href:"#高级用法","aria-label":"Permalink to “高级用法”"},"​")],-1)),o[9]||(o[9]=e("blockquote",null,[e("p",null,[l("无默认快捷键，需手动输入 "),e("code",null,"/init")])],-1)),o[10]||(o[10]=e("p",null,[e("strong",null,"带参数执行"),l("：")],-1)),o[11]||(o[11]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/init 特别关注 TypeScript 类型安全和错误处理")])],-1)),o[12]||(o[12]=t("",5)),o[13]||(o[13]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# SST v3 Monorepo Project

This is an SST v3 monorepo with TypeScript. The project uses bun workspaces for package management.

## Project Structure

- \`packages/\` - Contains all workspace packages (functions, core, web, etc.)
- \`infra/\` - Infrastructure definitions split by service (storage.ts, api.ts, web.ts)
- \`sst.config.ts\` - Main SST configuration with dynamic imports

## Code Standards

- Use TypeScript with strict mode enabled
- Shared code goes in \`packages/core/\` with proper exports configuration
- Functions go in \`packages/functions/\`
- Infrastructure should be split into logical files in \`infra/\`

## Monorepo Conventions

- Import shared modules using workspace names: \`@my-app/core/example\``)])],-1)),o[14]||(o[14]=e("p",null,[l("检查这些内容是否正确。完整的 AGENTS.md 示例可以参考官方文档："),e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/web/src/content/docs/rules.mdx",target:"_blank",rel:"noreferrer"},"https://github.com/anomalyco/opencode/blob/dev/packages/web/src/content/docs/rules.mdx")],-1)),o[15]||(o[15]=e("hr",null,null,-1)),o[16]||(o[16]=e("h3",{id:"进阶-使用-opencode-json-加载更多规则",tabindex:"-1"},[l("进阶：使用 opencode.json 加载更多规则 "),e("a",{class:"header-anchor",href:"#进阶-使用-opencode-json-加载更多规则","aria-label":"Permalink to “进阶：使用 opencode.json 加载更多规则”"},"​")],-1)),o[17]||(o[17]=e("p",null,[l("除了 "),e("code",null,"AGENTS.md"),l("，你还可以在配置中指定额外的规则文件：")],-1)),o[18]||(o[18]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "instructions": [
    "CONTRIBUTING.md",
    "docs/guidelines.md",
    "packages/*/AGENTS.md"
  ]
}`)])],-1)),o[19]||(o[19]=t("",3)),o[20]||(o[20]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "instructions": [
    "~/team-rules/typescript.md",
    "https://example.com/company-coding-standards.md",
    "docs/**/*.md"
  ]
}`)])],-1)),o[21]||(o[21]=t("",5)),o[22]||(o[22]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Additional Rules
- Always use Chinese comments
- Prefer async/await over callbacks
- Error messages should be user-friendly`)])],-1)),o[23]||(o[23]=e("h3",{id:"第-5-步-验证规则生效",tabindex:"-1"},[l("第 5 步：验证规则生效 "),e("a",{class:"header-anchor",href:"#第-5-步-验证规则生效","aria-label":"Permalink to “第 5 步：验证规则生效”"},"​")],-1)),o[24]||(o[24]=e("p",null,[e("strong",null,"为什么"),e("br"),l(" 确认 AI 真的读取了你的规则。")],-1)),o[25]||(o[25]=e("p",null,"输入：",-1)),o[26]||(o[26]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"这个项目用的什么技术栈？")])],-1)),o[27]||(o[27]=t("",16)),o[28]||(o[28]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "instructions": ["packages/*/AGENTS.md"]
}`)])],-1)),o[29]||(o[29]=e("p",null,"这样每个子项目可以有自己的规则，同时又能被统一加载。",-1)),o[30]||(o[30]=e("hr",null,null,-1)),o[31]||(o[31]=e("h2",{id:"进阶技巧-在-agents-md-中引用外部文件",tabindex:"-1"},[l("进阶技巧：在 AGENTS.md 中引用外部文件 "),e("a",{class:"header-anchor",href:"#进阶技巧-在-agents-md-中引用外部文件","aria-label":"Permalink to “进阶技巧：在 AGENTS.md 中引用外部文件”"},"​")],-1)),o[32]||(o[32]=e("p",null,[l("虽然 OpenCode 不会自动解析文件引用，但你可以在 "),e("code",null,"AGENTS.md"),l(" 中显式指示 AI 读取外部文件：")],-1)),o[33]||(o[33]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# 项目规则

## 外部文件引用

当遇到文件引用（如 \`@docs/xxx.md\`）时，使用 Read 工具按需加载：
- 不要预先加载所有引用，按实际需要懒加载
- 加载后的内容作为必须遵守的指令
- 必要时递归加载引用

## 技术规范

TypeScript 风格：@docs/typescript-guidelines.md
React 组件模式：@docs/react-patterns.md
REST API 设计：@docs/api-standards.md
测试策略：@test/testing-guidelines.md`)])],-1)),o[34]||(o[34]=t("",17))])}const S=n(p,[["render",u]]);export{k as __pageData,S as default};
