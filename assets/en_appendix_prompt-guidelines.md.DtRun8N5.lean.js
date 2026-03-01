import{_ as r,I as o,c as l,o as s,a5 as a,j as e,J as d,a as i}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"Prompt Engineering Guidelines","description":"Principles and best practices for writing high-quality prompts","frontmatter":{"title":"Prompt Engineering Guidelines","description":"Principles and best practices for writing high-quality prompts"},"headers":[],"relativePath":"en/appendix/prompt-guidelines.md","filePath":"en/appendix/prompt-guidelines.md","lastUpdated":1772014034000}'),p={name:"en/appendix/prompt-guidelines.md"};function c(u,t,h,g,m,f){const n=o("AdInArticle");return s(),l("div",null,[t[0]||(t[0]=a("",6)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Role Definition → Task Description → Input Specification → Output Specification → Examples → Constraints")])],-1)),t[2]||(t[2]=a("",14)),t[3]||(t[3]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Role
You are [professional identity], expert in [core capabilities]. [Additional identity anchoring description]

## Task
[Clear description of the task to complete]

## Input Information
### Required
- Variable Name: [Variable Description]

### Optional
- Variable Name: [Variable Description?] (Default: xxx)

## Output Specification
Output in the following structure:
1. [Output Item 1]
2. [Output Item 2]
...

## Example

### Input
[Specific input example]

### Output
[Corresponding ideal output]

## Constraints
- ✅ Should: [Positive behavior]
- ❌ Avoid: [Negative behavior]

## Self-Check List
Confirm before completion:
- [ ] [Check Item 1]
- [ ] [Check Item 2]

## Error Handling
- If missing key information, ask the user first
- If task is out of scope, explain why and suggest alternatives`)])],-1)),t[4]||(t[4]=e("hr",null,null,-1)),t[5]||(t[5]=e("h2",{id:"🏷️-placeholder-specification",tabindex:"-1"},[i("🏷️ Placeholder Specification "),e("a",{class:"header-anchor",href:"#🏷️-placeholder-specification","aria-label":"Permalink to “🏷️ Placeholder Specification”"},"​")],-1)),d(n),t[6]||(t[6]=a("",4)),t[7]||(t[7]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Type: Fantasy/Urban/Romance
Language: Language
Paste code`)])],-1)),t[8]||(t[8]=e("p",null,[e("strong",null,"✅ Good Writing"),i(":")],-1)),t[9]||(t[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Type: [Fantasy/Urban/Romance/Mystery/Sci-Fi]
Language: [Programming Language]

[Paste Code]`)])],-1)),t[10]||(t[10]=a("",12)),t[11]||(t[11]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"You are an assistant.")])],-1)),t[12]||(t[12]=e("p",null,[e("strong",null,"✅ Good Writing"),i(":")],-1)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`You are a senior technical documentation engineer, expert at explaining complex code in easy-to-understand terms.
Your explanations have been praised by beginners as "finally understood."`)])],-1)),t[14]||(t[14]=e("hr",null,null,-1)),t[15]||(t[15]=e("h2",{id:"⚖️-constraints-specification",tabindex:"-1"},[i("⚖️ Constraints Specification "),e("a",{class:"header-anchor",href:"#⚖️-constraints-specification","aria-label":"Permalink to “⚖️ Constraints Specification”"},"​")],-1)),t[16]||(t[16]=e("p",null,"Use ✅ and ❌ to clearly distinguish positive and negative behaviors:",-1)),t[17]||(t[17]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Constraints
- ✅ Questions should be specific to line numbers
- ✅ Every issue should have a fix suggestion
- ✅ Acknowledge what was done well
- ❌ Avoid substituting subjective preferences for objective standards
- ❌ Avoid criticizing without providing solutions`)])],-1)),t[18]||(t[18]=e("hr",null,null,-1)),t[19]||(t[19]=e("h2",{id:"🔧-error-handling-specification",tabindex:"-1"},[i("🔧 Error Handling Specification "),e("a",{class:"header-anchor",href:"#🔧-error-handling-specification","aria-label":"Permalink to “🔧 Error Handling Specification”"},"​")],-1)),t[20]||(t[20]=e("p",null,"Every template should include an error handling section:",-1)),t[21]||(t[21]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Error Handling
- If information is insufficient, list what needs to be added and explain why
- If the problem is beyond capability scope, explain and suggest help channels
- If there are multiple independent issues, suggest handling them one by one`)])],-1)),t[22]||(t[22]=e("hr",null,null,-1)),t[23]||(t[23]=e("h2",{id:"✅-self-check-list-specification",tabindex:"-1"},[i("✅ Self-Check List Specification "),e("a",{class:"header-anchor",href:"#✅-self-check-list-specification","aria-label":"Permalink to “✅ Self-Check List Specification”"},"​")],-1)),t[24]||(t[24]=e("p",null,"Complex tasks should include a self-check list:",-1)),t[25]||(t[25]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`## Self-Check List
Confirm before completion:
- [ ] Every protagonist has a clear arc
- [ ] The pacing of introduction, development, climax, and resolution is reasonable
- [ ] The core conflict runs through the entire text
- [ ] The highlights are enough to attract target readers`)])],-1)),t[26]||(t[26]=e("hr",null,null,-1)),t[27]||(t[27]=e("h2",{id:"🤖-agent-skill-description-specification",tabindex:"-1"},[i("🤖 Agent/Skill Description Specification "),e("a",{class:"header-anchor",href:"#🤖-agent-skill-description-specification","aria-label":"Permalink to “🤖 Agent/Skill Description Specification”"},"​")],-1)),t[28]||(t[28]=e("h3",{id:"structure-template",tabindex:"-1"},[i("Structure Template "),e("a",{class:"header-anchor",href:"#structure-template","aria-label":"Permalink to “Structure Template”"},"​")],-1)),t[29]||(t[29]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`description: |
  [One sentence explaining core capability]
  Provides: [Resources included in this Skill]
  Suitable for: [Trigger scenario 1], [Trigger scenario 2]
  Not suitable for: [Boundary scenario 1], [Boundary scenario 2]`)])],-1)),t[30]||(t[30]=e("h3",{id:"example-1",tabindex:"-1"},[i("Example "),e("a",{class:"header-anchor",href:"#example-1","aria-label":"Permalink to “Example”"},"​")],-1)),t[31]||(t[31]=e("p",null,[e("strong",null,"❌ Poor Writing"),i(":")],-1)),t[32]||(t[32]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},"description: Code review expert")])],-1)),t[33]||(t[33]=e("p",null,[e("strong",null,"✅ Good Writing"),i(":")],-1)),t[34]||(t[34]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`description: |
  Code review expert, focused on security vulnerabilities, performance issues, code quality.
  Suitable for: PR review, code health check, security audit.
  Not suitable for: code generation, feature implementation, test writing.`)])],-1)),t[35]||(t[35]=a("",7))])}const x=r(p,[["render",c]]);export{y as __pageData,x as default};
