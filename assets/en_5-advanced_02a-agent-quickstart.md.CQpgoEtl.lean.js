import{_ as r,I as i,c as s,o as d,a5 as n,j as e,J as l,a as o,aY as c}from"./chunks/framework.Dtwt352Q.js";const A=JSON.parse(`{"title":"5.2a Agent Quick Start","description":"Understand the essence of Agents, create your first custom Agent, and extend OpenCode's capabilities.","frontmatter":{"title":"5.2a Agent Quick Start","subtitle":"Understand and create your first Agent","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.2a","duration":"15 minutes","practice":"15 minutes","level":"Advanced","description":"Understand the essence of Agents, create your first custom Agent, and extend OpenCode's capabilities.","tags":["Agent","Custom"],"prerequisite":["3.2 Understanding Agents"]},"headers":[],"relativePath":"en/5-advanced/02a-agent-quickstart.md","filePath":"en/5-advanced/02a-agent-quickstart.md","lastUpdated":1772014034000}`),u={name:"en/5-advanced/02a-agent-quickstart.md"};function g(h,t,p,m,b,f){const a=i("AdInArticle");return d(),s("div",null,[t[0]||(t[0]=n("",23)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`User ←→ Primary Agent (build/plan)
              ↓
         Task Tool (creates independent Session)
              ↓
         Subagent (explore/general/your custom Agent)
              ↓
         Returns result to Primary`)])],-1)),t[2]||(t[2]=n("",5)),l(a),t[3]||(t[3]=n("",15)),t[4]||(t[4]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Brief description of what this Agent does
mode: subagent
---

This is the System Prompt.

Tell the Agent who they are, what they excel at, how to work.`)])],-1)),t[5]||(t[5]=e("h3",{id:"complete-example-documentation-writer-agent",tabindex:"-1"},[o("Complete Example: Documentation Writer Agent "),e("a",{class:"header-anchor",href:"#complete-example-documentation-writer-agent","aria-label":"Permalink to “Complete Example: Documentation Writer Agent”"},"​")],-1)),t[6]||(t[6]=e("p",null,[o("Create file "),e("code",null,".opencode/agent/docs-writer.md"),o(":")],-1)),t[7]||(t[7]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: |
  Technical documentation expert, specializing in API docs, READMEs, user manuals.
  Best for: Writing new project docs, updating existing docs, explaining code functionality.
  Not for: Code review, bug fixes, feature implementation.
mode: subagent
temperature: 0.3
---

# Role

You are a technical documentation expert, skilled at explaining complex concepts in simple terms. Your docs are known as "read and use immediately".

# Documentation Standards

- Use Markdown format
- Code examples must be runnable
- Include input/output descriptions
- English preferred, keep technical terms in original

# Documentation Structure

1. Overview (one sentence explaining what it is)
2. Quick Start (can run in 30 seconds)
3. Detailed API (complete parameter descriptions)
4. Example Code (cover common scenarios)
5. FAQ (anticipate user questions)

# Working Principles

- Understand code before writing docs
- Verify uncertain parts
- Maintain consistent style

# Constraints

- ✅ Quick start code must be directly copyable and runnable
- ✅ Parameter descriptions must include type and default value
- ❌ Avoid assuming users have background knowledge

# Error Handling

- If code functionality is unclear, ask or check relevant source code first
- If context is missing, list what needs to be added
- If encountering unfamiliar framework, state it and suggest other Agents`)])],-1)),t[8]||(t[8]=e("h3",{id:"permission-configuration-in-markdown",tabindex:"-1"},[o("Permission Configuration in Markdown "),e("a",{class:"header-anchor",href:"#permission-configuration-in-markdown","aria-label":"Permalink to “Permission Configuration in Markdown”"},"​")],-1)),t[9]||(t[9]=e("p",null,"You can configure permissions directly in Frontmatter (using YAML syntax):",-1)),t[10]||(t[10]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Read-only code audit Agent
mode: subagent
permission:
  edit: deny            # Disable editing
  bash:
    "*": deny           # Disable all commands
    "git log*": allow   # Only allow viewing logs
  task:
    "*": deny           # Disable calling other Agents
---`)])],-1)),t[11]||(t[11]=n("",10)),t[12]||(t[12]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "code-reviewer": {
      "description": "Code review expert, focusing on security, performance, maintainability. Best for PR reviews, code health checks.",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-20250514",
      "temperature": 0.2,
      "steps": 30,
      "color": "#4CAF50",
      "prompt": "You are a code review expert.\\n\\n## Check Points\\n- Security vulnerabilities (SQL injection, XSS, hardcoded keys)\\n- Performance issues (time complexity, resource leaks)\\n- Code style (naming, structure, readability)\\n- Maintainability (coupling, test coverage)\\n\\n## Output Format\\n- 🔴 Critical issues (must fix, explain risk and solution)\\n- 🟡 Suggestions (recommended fix, explain reason)\\n- 🟢 Strengths (worth keeping)\\n\\n## Constraints\\n- ✅ Issues must specify line numbers\\n- ✅ Every issue must have a fix suggestion\\n- ❌ Avoid criticism without solutions"
    }
  }
}`)])],-1)),t[13]||(t[13]=e("h3",{id:"using-external-prompt-files",tabindex:"-1"},[o("Using External Prompt Files "),e("a",{class:"header-anchor",href:"#using-external-prompt-files","aria-label":"Permalink to “Using External Prompt Files”"},"​")],-1)),t[14]||(t[14]=e("p",null,"When the prompt is long, you can reference an external file:",-1)),t[15]||(t[15]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "code-reviewer": {
      "description": "Code review expert",
      "mode": "subagent",
      "prompt": "{file:./prompts/code-reviewer.txt}"
    }
  }
}`)])],-1)),t[16]||(t[16]=n("",8)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@docs-writer Help me write a README")])],-1)),t[18]||(t[18]=n("",9)),t[19]||(t[19]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "explore": {
      "disable": true
    },
    "general": {
      "disable": true
    }
  }
}`)])],-1)),t[20]||(t[20]=e("hr",null,null,-1)),t[21]||(t[21]=e("h2",{id:"set-default-agent",tabindex:"-1"},[o("Set Default Agent "),e("a",{class:"header-anchor",href:"#set-default-agent","aria-label":"Permalink to “Set Default Agent”"},"​")],-1)),t[22]||(t[22]=e("p",null,"Which primary agent to use by default when starting OpenCode:",-1)),t[23]||(t[23]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "default_agent": "plan"  // Use plan agent by default
}`)])],-1)),t[24]||(t[24]=n("",13))])}const k=r(u,[["render",g]]);export{A as __pageData,k as default};
