import{_ as r,I as a,c as l,o as s,a5 as n,J as d,j as e,a as o,aC as c}from"./chunks/framework.Dtwt352Q.js";const A=JSON.parse('{"title":"Project Initialization: Let AI Understand Your Project","description":"Use the /init command to generate an AGENTS.md rules file, allowing AI to automatically understand your project specifications and tech stack, avoiding repetitive project introductions.","frontmatter":{"title":"Project Initialization: Let AI Understand Your Project","subtitle":"Generate project rules with /init","course":"OpenCode Practical Course","stage":"Stage 3","lesson":"3.3","duration":"10 min","practice":"15 min","level":"Beginner","description":"Use the /init command to generate an AGENTS.md rules file, allowing AI to automatically understand your project specifications and tech stack, avoiding repetitive project introductions.","tags":["Initialization","AGENTS.md","Project Rules"],"prerequisite":["3.2 Understanding Agents"]},"headers":[],"relativePath":"en/3-workflow/03-init.md","filePath":"en/3-workflow/03-init.md","lastUpdated":1772014034000}'),u={name:"en/3-workflow/03-init.md"};function p(h,t,m,g,f,b){const i=a("AdInArticle");return s(),l("div",null,[t[0]||(t[0]=n("",20)),d(i),t[1]||(t[1]=n("",12)),t[2]||(t[2]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`cd ~/your-project
opencode`)])],-1)),t[3]||(t[3]=e("h3",{id:"step-2-run-initialization",tabindex:"-1"},[o("Step 2: Run Initialization "),e("a",{class:"header-anchor",href:"#step-2-run-initialization","aria-label":"Permalink to “Step 2: Run Initialization”"},"​")],-1)),t[4]||(t[4]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Let AI analyze the project and generate a rules file.")],-1)),t[5]||(t[5]=e("p",null,"Enter:",-1)),t[6]||(t[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/init")])],-1)),t[7]||(t[7]=e("p",null,[e("strong",null,"You should see"),o(": AI starts analyzing project structure, tech stack, and code style")],-1)),t[8]||(t[8]=e("h4",{id:"advanced-usage",tabindex:"-1"},[o("Advanced Usage "),e("a",{class:"header-anchor",href:"#advanced-usage","aria-label":"Permalink to “Advanced Usage”"},"​")],-1)),t[9]||(t[9]=e("blockquote",null,[e("p",null,[o("No default shortcut, enter "),e("code",null,"/init"),o(" manually")])],-1)),t[10]||(t[10]=e("p",null,[e("strong",null,"Run with parameters"),o(":")],-1)),t[11]||(t[11]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/init Pay special attention to TypeScript type safety and error handling")])],-1)),t[12]||(t[12]=n("",5)),t[13]||(t[13]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# SST v3 Monorepo Project

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

- Import shared modules using workspace names: \`@my-app/core/example\``)])],-1)),t[14]||(t[14]=e("p",null,[o("Check if this content is correct. For complete AGENTS.md examples, refer to the official documentation: "),e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/web/src/content/docs/rules.mdx",target:"_blank",rel:"noreferrer"},"https://github.com/anomalyco/opencode/blob/dev/packages/web/src/content/docs/rules.mdx")],-1)),t[15]||(t[15]=e("hr",null,null,-1)),t[16]||(t[16]=e("h3",{id:"advanced-loading-more-rules-with-opencode-json",tabindex:"-1"},[o("Advanced: Loading More Rules with opencode.json "),e("a",{class:"header-anchor",href:"#advanced-loading-more-rules-with-opencode-json","aria-label":"Permalink to “Advanced: Loading More Rules with opencode.json”"},"​")],-1)),t[17]||(t[17]=e("p",null,[o("Besides "),e("code",null,"AGENTS.md"),o(", you can specify additional rules files in the configuration:")],-1)),t[18]||(t[18]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "instructions": [
    "CONTRIBUTING.md",
    "docs/guidelines.md",
    "packages/*/AGENTS.md"
  ]
}`)])],-1)),t[19]||(t[19]=n("",3)),t[20]||(t[20]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "instructions": [
    "~/team-rules/typescript.md",
    "https://example.com/company-coding-standards.md",
    "docs/**/*.md"
  ]
}`)])],-1)),t[21]||(t[21]=n("",5)),t[22]||(t[22]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Additional Rules
- Always use Chinese comments
- Prefer async/await over callbacks
- Error messages should be user-friendly`)])],-1)),t[23]||(t[23]=e("h3",{id:"step-5-verify-rules-are-working",tabindex:"-1"},[o("Step 5: Verify Rules Are Working "),e("a",{class:"header-anchor",href:"#step-5-verify-rules-are-working","aria-label":"Permalink to “Step 5: Verify Rules Are Working”"},"​")],-1)),t[24]||(t[24]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Confirm AI actually read your rules.")],-1)),t[25]||(t[25]=e("p",null,"Enter:",-1)),t[26]||(t[26]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"What tech stack does this project use?")])],-1)),t[27]||(t[27]=n("",16)),t[28]||(t[28]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "instructions": ["packages/*/AGENTS.md"]
}`)])],-1)),t[29]||(t[29]=e("p",null,"This way each subproject can have its own rules while being loaded together.",-1)),t[30]||(t[30]=e("hr",null,null,-1)),t[31]||(t[31]=e("h2",{id:"advanced-tip-referencing-external-files-in-agents-md",tabindex:"-1"},[o("Advanced Tip: Referencing External Files in AGENTS.md "),e("a",{class:"header-anchor",href:"#advanced-tip-referencing-external-files-in-agents-md","aria-label":"Permalink to “Advanced Tip: Referencing External Files in AGENTS.md”"},"​")],-1)),t[32]||(t[32]=e("p",null,[o("While OpenCode doesn't automatically parse file references, you can explicitly instruct AI in "),e("code",null,"AGENTS.md"),o(" to read external files:")],-1)),t[33]||(t[33]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# Project Rules

## External File References

When encountering file references (like \`@docs/xxx.md\`), use the Read tool to load on demand:
- Don't preload all references, load lazily as needed
- Loaded content is treated as mandatory instructions
- Recursively load references when necessary

## Technical Specifications

TypeScript style: @docs/typescript-guidelines.md
React component patterns: @docs/react-patterns.md
REST API design: @docs/api-standards.md
Testing strategy: @test/testing-guidelines.md`)])],-1)),t[34]||(t[34]=n("",17))])}const T=r(u,[["render",p]]);export{A as __pageData,T as default};
