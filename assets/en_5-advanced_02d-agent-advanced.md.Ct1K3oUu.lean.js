import{_ as o,c as i,o as r,a5 as n,j as e,a as t,a$ as s}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"5.2d Agent Advanced Techniques","description":"Learn tool interface design, ACI passthrough parameters, Agent debugging, and other advanced techniques to build more powerful custom Agents.","frontmatter":{"title":"5.2d Agent Advanced Techniques","subtitle":"Tool Interface Design, Passthrough Parameters, and Debugging","course":"OpenCode Practical Course","stage":"Phase 5","lesson":"5.2d","duration":"20 minutes","practice":"20 minutes","level":"Advanced","description":"Learn tool interface design, ACI passthrough parameters, Agent debugging, and other advanced techniques to build more powerful custom Agents.","tags":["Agent","ACI","Debugging"],"prerequisite":["5.2a Agent Quickstart","5.2c Agent Permissions and Security"]},"headers":[],"relativePath":"en/5-advanced/02d-agent-advanced.md","filePath":"en/5-advanced/02d-agent-advanced.md","lastUpdated":1772014034000}'),l={name:"en/5-advanced/02d-agent-advanced.md"};function d(c,a,p,u,h,m){return r(),i("div",null,[...a[0]||(a[0]=[n("",15),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- Bad: Requires knowing line numbers in advance -->
Please output:
- Lines 1-5: Import statements
- Lines 6-20: Function definitions
- ...

<!-- Good: Natural language description -->
Organize the code with this structure:
1. Import statements
2. Constant definitions
3. Function definitions
4. Main logic`)])],-1),e("h4",{id:"_2-format-close-to-natural-language",tabindex:"-1"},[t("2. Format Close to Natural Language "),e("a",{class:"header-anchor",href:"#_2-format-close-to-natural-language","aria-label":"Permalink to “2. Format Close to Natural Language”"},"​")],-1),e("p",null,"Formats the model has seen on the internet are easier to generate.",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- Bad: Requires precise JSON escaping -->
Output format: {"code": "function foo() {\\n  return \\"bar\\";\\n}"}

<!-- Good: Markdown code blocks (the model has seen countless examples) -->
Output format:
\`\`\`javascript
function foo() {
  return "bar";
}`)])],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
#### 3. Descriptions Like Excellent Docstrings

Tool descriptions should include:
- **Functionality**: What this tool does
- **Usage examples**: Typical use cases
- **Edge cases**: When not to use it
- **Input format**: Parameter requirements

### Anthropic's Real-World Experience

> "When building the SWE-bench Agent, we spent more time optimizing tools than optimizing the overall prompt."

They found that models made errors when using relative paths (after the Agent moved out of the root directory). Solution: Require **absolute paths** instead—the model executed perfectly.

**Insight**: If an Agent frequently errors on a particular tool, the problem may be in the tool design, not the prompt.

---

## Prompt Engineering

<AdInArticle />

### System Prompt Structure

A good Agent prompt should include:

\`\`\`markdown
---
description: Brief description (affects auto-selection)
mode: subagent
temperature: 0.2
---

# Role Definition
Who you are, what you're good at.

# Workflow
1. First step
2. Second step
3. ...

# Constraints
- What not to do
- When to stop

# Output Format
- How to organize output
- What sections to include

# Self-Check (Optional)
Questions to ask yourself before completion.`)])],-1),e("h3",{id:"complete-example",tabindex:"-1"},[t("Complete Example "),e("a",{class:"header-anchor",href:"#complete-example","aria-label":"Permalink to “Complete Example”"},"​")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Security auditor focused on OWASP Top 10 vulnerability detection
mode: subagent
temperature: 0.1
steps: 30
permission:
  edit: deny
---

# Role

You are a security auditor focused on discovering security vulnerabilities in web applications.

Main detection areas:
- SQL Injection
- XSS (Cross-Site Scripting)
- CSRF (Cross-Site Request Forgery)
- Authentication/Authorization issues
- Sensitive data exposure
- Dependency vulnerabilities

# Workflow

## 1. Information Gathering
- Understand the project tech stack
- Identify entry points (APIs, forms, URL parameters)
- Review authentication mechanisms

## 2. Vulnerability Scanning
Check each OWASP Top 10 item:
1. Injection flaws
2. Broken authentication
3. Sensitive data exposure
4. XML external entities
5. Broken access control
6. Security misconfiguration
7. XSS
8. Insecure deserialization
9. Using components with known vulnerabilities
10. Insufficient logging and monitoring

## 3. Verify Findings
- Confirm vulnerabilities are exploitable
- Assess impact severity
- Rule out false positives

# Output Format

For each issue found:

## [Severity] Issue Title

**Location**: file_path:line_number

**Description**: What the problem is

**Impact**: Potential consequences

**Fix Suggestion**:
\`\`\`code example\`\`\`

**Reference**: Related CWE/CVE numbers

# Constraints

- Do not modify any code
- Do not execute potentially destructive commands
- Report critical vulnerabilities immediately, don't wait for scan completion

# Self-Check

Before completion, confirm:
1. Did I check all entry points?
2. Did I verify each finding?
3. Are the fix suggestions feasible?`)])],-1),e("h3",{id:"reflection-mechanism",tabindex:"-1"},[t("Reflection Mechanism "),e("a",{class:"header-anchor",href:"#reflection-mechanism","aria-label":"Permalink to “Reflection Mechanism”"},"​")],-1),e("p",null,"Adding self-check steps to prompts can improve Agent accuracy.",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# Pre-Completion Self-Check

Before submitting results, ask yourself:
1. Did I fully understand the user's requirements?
2. Is my solution complete?
3. Are there any missed edge cases?
4. If I were the user, would I be satisfied with this result?`)])],-1),n("",5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "deep-thinker": {
      "description": "Deep thinking for complex problems",
      "model": "openai/o1",
      "reasoningEffort": "high",     // OpenAI-specific parameter
      "textVerbosity": "low"          // OpenAI-specific parameter
    },
    "quick-helper": {
      "description": "Quick response for simple questions",
      "model": "anthropic/claude-haiku-4-5",
      "temperature": 0.3
    }
  }
}`)])],-1),n("",7),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/agent/
├── review/
│   ├── security.md       → Name: review/security
│   └── performance.md    → Name: review/performance
├── docs/
│   └── api.md            → Name: docs/api
└── translator.md         → Name: translator`)])],-1),e("p",null,"Usage:",-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@review/security Help me audit this code")])],-1),e("blockquote",null,[e("p",null,[t("Source: "),e("code",null,"config.ts:243-255")])],-1),e("h3",{id:"mcp-tool-wildcard-control",tabindex:"-1"},[t("MCP Tool Wildcard Control "),e("a",{class:"header-anchor",href:"#mcp-tool-wildcard-control","aria-label":"Permalink to “MCP Tool Wildcard Control”"},"​")],-1),e("p",null,"Disable all tools from an MCP server:",-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "safe-agent": {
      "permission": {
        "mymcp_*": "deny",           // Disable all mymcp tools
        "postgres_query": "ask"       // Database queries require confirmation
      }
    }
  }
}`)])],-1),e("blockquote",null,[e("p",null,[t("Source: "),e("code",null,"agents.mdx:366-379")])],-1),e("h3",{id:"steps-parameter-tuning",tabindex:"-1"},[t("Steps Parameter Tuning "),e("a",{class:"header-anchor",href:"#steps-parameter-tuning","aria-label":"Permalink to “Steps Parameter Tuning”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
steps: 50  # Maximum iteration steps
---`)])],-1),n("",4),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
color: "#FF5733"  # Hex color
---`)])],-1),e("p",null,"Distinguish different Agents in the interface for easy identification.",-1),e("h3",{id:"hidden-agent",tabindex:"-1"},[t("Hidden Agent "),e("a",{class:"header-anchor",href:"#hidden-agent","aria-label":"Permalink to “Hidden Agent”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
hidden: true  # Hide from @ menu
---`)])],-1),e("p",null,"Use cases:",-1),e("ul",null,[e("li",null,"Internal tool Agents not meant for direct user invocation"),e("li",null,"Only called by other Agents via Task tool"),e("li",null,"System-level Agents")],-1),e("blockquote",null,[e("p",null,[t("Source: "),e("code",null,"config.ts:468-471")])],-1),e("h3",{id:"name-override",tabindex:"-1"},[t("Name Override "),e("a",{class:"header-anchor",href:"#name-override","aria-label":"Permalink to “Name Override”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
name: my-custom-name  # Override filename
description: ...
---`)])],-1),n("",6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View recent sessions
ls -la .opencode/data/sessions/

# View specific session messages
cat .opencode/data/sessions/<session-id>/messages.json`)])],-1),e("h3",{id:"_2-simplified-testing",tabindex:"-1"},[t("2. Simplified Testing "),e("a",{class:"header-anchor",href:"#_2-simplified-testing","aria-label":"Permalink to “2. Simplified Testing”"},"​")],-1),e("p",null,"When Agent behaves abnormally:",-1),e("ol",null,[e("li",null,[t("Create a "),e("strong",null,"minimal version"),t(" of the prompt")]),e("li",null,"Gradually add complexity"),e("li",null,"Find the problematic part")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- Minimal version -->
---
description: Test Agent
mode: subagent
---

You are a test assistant. Answer user questions.`)])],-1),e("h3",{id:"_3-check-permission-configuration",tabindex:"-1"},[t("3. Check Permission Configuration "),e("a",{class:"header-anchor",href:"#_3-check-permission-configuration","aria-label":"Permalink to “3. Check Permission Configuration”"},"​")],-1),e("p",null,"Permission issues are the most common source of problems.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View current configuration (including merged permissions)
opencode config`)])],-1),n("",8),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
steps: 5  # Stop after just 5 steps
---`)])],-1),n("",6),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "pr-reviewer": {
      "description": "PR review bot, automatically reviews code changes",
      "mode": "primary",
      "model": "anthropic/claude-opus-4-5-thinking",
      "steps": 100,
      "temperature": 0.1,
      "prompt": "{file:./prompts/pr-reviewer.md}",
      "permission": {
        "edit": "deny",
        "bash": {
          "*": "deny",
          "git log*": "allow",
          "git diff*": "allow",
          "git show*": "allow",
          "npm test": "allow"
        },
        "task": {
          "*": "deny",
          "security-auditor": "allow",
          "performance-checker": "allow",
          "style-checker": "allow"
        }
      }
    }
  }
}`)])],-1),e("h3",{id:"multi-model-collaboration",tabindex:"-1"},[t("Multi-Model Collaboration "),e("a",{class:"header-anchor",href:"#multi-model-collaboration","aria-label":"Permalink to “Multi-Model Collaboration”"},"​")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "planner": {
      "description": "Planner: Analyze requirements, create plan",
      "mode": "primary",
      "model": "anthropic/claude-opus-4-5-thinking",
      "temperature": 0.2,
      "steps": 20
    },
    "executor": {
      "description": "Executor: Implement specific code",
      "mode": "primary", 
      "model": "anthropic/claude-sonnet-4-20250514",
      "temperature": 0.3,
      "steps": 100
    },
    "reviewer": {
      "description": "Reviewer: Check code quality",
      "mode": "subagent",
      "model": "anthropic/claude-haiku-4-5",
      "temperature": 0.1,
      "permission": {
        "edit": "deny"
      }
    }
  }
}`)])],-1),n("",17)])])}const b=o(l,[["render",d]]);export{f as __pageData,b as default};
