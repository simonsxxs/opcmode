import{_ as o,c as i,o as r,a5 as n,j as e,a as t,a$ as s}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"5.2d Agent Advanced Techniques","description":"Learn tool interface design, ACI passthrough parameters, Agent debugging, and other advanced techniques to build more powerful custom Agents.","frontmatter":{"title":"5.2d Agent Advanced Techniques","subtitle":"Tool Interface Design, Passthrough Parameters, and Debugging","course":"OpenCode Practical Course","stage":"Phase 5","lesson":"5.2d","duration":"20 minutes","practice":"20 minutes","level":"Advanced","description":"Learn tool interface design, ACI passthrough parameters, Agent debugging, and other advanced techniques to build more powerful custom Agents.","tags":["Agent","ACI","Debugging"],"prerequisite":["5.2a Agent Quickstart","5.2c Agent Permissions and Security"]},"headers":[],"relativePath":"en/5-advanced/02d-agent-advanced.md","filePath":"en/5-advanced/02d-agent-advanced.md","lastUpdated":1772014034000}'),l={name:"en/5-advanced/02d-agent-advanced.md"};function d(c,a,p,u,h,m){return r(),i("div",null,[...a[0]||(a[0]=[n('<h1 id="_5-2d-agent-advanced-techniques" tabindex="-1">5.2d Agent Advanced Techniques <a class="header-anchor" href="#_5-2d-agent-advanced-techniques" aria-label="Permalink to “5.2d Agent Advanced Techniques”">​</a></h1><blockquote><p>Tool interface design, Prompt engineering, passthrough parameters, and debugging methods.</p></blockquote><h2 id="course-notes" tabindex="-1">Course Notes <a class="header-anchor" href="#course-notes" aria-label="Permalink to “Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><img src="'+s+'" alt="Agent Advanced Techniques Notes" data-zoom-src="/images/5-advanced/02d-agent-advanced-notes.jpeg"><hr><h2 id="what-you-ll-learn" tabindex="-1">What You&#39;ll Learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to “What You&#39;ll Learn”">​</a></h2><ul><li>Design excellent tool interfaces (ACI)</li><li>Write high-quality Agent prompts</li><li>Use passthrough parameters to fine-tune Agent behavior</li><li>Troubleshoot and debug Agent issues</li></ul><hr><h2 id="tool-interface-design-aci" tabindex="-1">Tool Interface Design (ACI) <a class="header-anchor" href="#tool-interface-design-aci" aria-label="Permalink to “Tool Interface Design (ACI)”">​</a></h2><blockquote><p>&quot;Invest as much effort in designing the Agent-Computer Interface (ACI) as you would in designing the Human-Computer Interface (HCI).&quot; — Anthropic</p></blockquote><p>ACI (Agent-Computer Interface) is the interface through which Agents interact with tools. Well-designed ACI enables Agents to complete tasks efficiently; poorly-designed ACI leads to frequent errors.</p><h3 id="core-principles" tabindex="-1">Core Principles <a class="header-anchor" href="#core-principles" aria-label="Permalink to “Core Principles”">​</a></h3><h4 id="_1-give-the-model-room-to-think" tabindex="-1">1. Give the Model Room to Think <a class="header-anchor" href="#_1-give-the-model-room-to-think" aria-label="Permalink to “1. Give the Model Room to Think”">​</a></h4><p>Avoid formats that &quot;back the LLM into a corner.&quot;</p>',15),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- Bad: Requires knowing line numbers in advance -->
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
4. If I were the user, would I be satisfied with this result?`)])],-1),n('<hr><h2 id="passthrough-parameters-additional-options" tabindex="-1">Passthrough Parameters (Additional Options) <a class="header-anchor" href="#passthrough-parameters-additional-options" aria-label="Permalink to “Passthrough Parameters (Additional Options)”">​</a></h2><p>Unknown fields in Agent configuration are <strong>passed through to the provider</strong>. This allows you to use provider-specific parameters.</p><blockquote><p>Source: <code>agents.mdx:569-591</code>, <code>config.ts:487</code>, <code>agent.ts:193</code></p></blockquote><h3 id="configuration-example" tabindex="-1">Configuration Example <a class="header-anchor" href="#configuration-example" aria-label="Permalink to “Configuration Example”">​</a></h3>',5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),n('<h3 id="common-passthrough-parameters" tabindex="-1">Common Passthrough Parameters <a class="header-anchor" href="#common-passthrough-parameters" aria-label="Permalink to “Common Passthrough Parameters”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Provider</th><th>Description</th></tr></thead><tbody><tr><td><code>reasoningEffort</code></td><td>OpenAI o-series</td><td><code>high</code> / <code>medium</code> / <code>low</code></td></tr><tr><td><code>textVerbosity</code></td><td>OpenAI</td><td>Output verbosity</td></tr><tr><td><code>top_k</code></td><td>Anthropic</td><td>Sampling parameter</td></tr><tr><td><code>max_tokens</code></td><td>Most providers</td><td>Maximum output tokens</td></tr></tbody></table><blockquote><p>Check the specific provider&#39;s documentation for supported parameters.</p></blockquote><hr><h2 id="advanced-configuration-techniques" tabindex="-1">Advanced Configuration Techniques <a class="header-anchor" href="#advanced-configuration-techniques" aria-label="Permalink to “Advanced Configuration Techniques”">​</a></h2><h3 id="nested-subdirectory-agents" tabindex="-1">Nested Subdirectory Agents <a class="header-anchor" href="#nested-subdirectory-agents" aria-label="Permalink to “Nested Subdirectory Agents”">​</a></h3><p>Agents can be organized in subdirectories:</p>',7),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/agent/
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
---`)])],-1),n('<table tabindex="0"><thead><tr><th>Setting</th><th>Behavior</th></tr></thead><tbody><tr><td>Not set</td><td>Unlimited, until model decides to stop</td></tr><tr><td>Set value</td><td>Force summary generation and stop when limit is reached</td></tr></tbody></table><p><strong>Recommendations</strong>:</p><ul><li>Simple tasks: 10-20 steps</li><li>Medium tasks: 30-50 steps</li><li>Complex tasks: 50-100 steps</li><li>Unlimited: For tasks that need thorough completion</li></ul><h3 id="custom-color" tabindex="-1">Custom Color <a class="header-anchor" href="#custom-color" aria-label="Permalink to “Custom Color”">​</a></h3>',4),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
color: "#FF5733"  # Hex color
---`)])],-1),e("p",null,"Distinguish different Agents in the interface for easy identification.",-1),e("h3",{id:"hidden-agent",tabindex:"-1"},[t("Hidden Agent "),e("a",{class:"header-anchor",href:"#hidden-agent","aria-label":"Permalink to “Hidden Agent”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
hidden: true  # Hide from @ menu
---`)])],-1),e("p",null,"Use cases:",-1),e("ul",null,[e("li",null,"Internal tool Agents not meant for direct user invocation"),e("li",null,"Only called by other Agents via Task tool"),e("li",null,"System-level Agents")],-1),e("blockquote",null,[e("p",null,[t("Source: "),e("code",null,"config.ts:468-471")])],-1),e("h3",{id:"name-override",tabindex:"-1"},[t("Name Override "),e("a",{class:"header-anchor",href:"#name-override","aria-label":"Permalink to “Name Override”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
name: my-custom-name  # Override filename
description: ...
---`)])],-1),n('<p>By default, the Agent name is the filename (without .md). Use the <code>name</code> field to override.</p><blockquote><p>Source: <code>agent.ts:191</code></p></blockquote><hr><h2 id="agent-debugging-techniques" tabindex="-1">Agent Debugging Techniques <a class="header-anchor" href="#agent-debugging-techniques" aria-label="Permalink to “Agent Debugging Techniques”">​</a></h2><h3 id="_1-view-actual-conversations" tabindex="-1">1. View Actual Conversations <a class="header-anchor" href="#_1-view-actual-conversations" aria-label="Permalink to “1. View Actual Conversations”">​</a></h3><p>OpenCode session data is stored in the <code>.opencode/data/</code> directory.</p>',6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View recent sessions
ls -la .opencode/data/sessions/

# View specific session messages
cat .opencode/data/sessions/<session-id>/messages.json`)])],-1),e("h3",{id:"_2-simplified-testing",tabindex:"-1"},[t("2. Simplified Testing "),e("a",{class:"header-anchor",href:"#_2-simplified-testing","aria-label":"Permalink to “2. Simplified Testing”"},"​")],-1),e("p",null,"When Agent behaves abnormally:",-1),e("ol",null,[e("li",null,[t("Create a "),e("strong",null,"minimal version"),t(" of the prompt")]),e("li",null,"Gradually add complexity"),e("li",null,"Find the problematic part")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- Minimal version -->
---
description: Test Agent
mode: subagent
---

You are a test assistant. Answer user questions.`)])],-1),e("h3",{id:"_3-check-permission-configuration",tabindex:"-1"},[t("3. Check Permission Configuration "),e("a",{class:"header-anchor",href:"#_3-check-permission-configuration","aria-label":"Permalink to “3. Check Permission Configuration”"},"​")],-1),e("p",null,"Permission issues are the most common source of problems.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View current configuration (including merged permissions)
opencode config`)])],-1),n('<p>Check:</p><ul><li>Whether rule order is correct (<code>*</code> should come first)</li><li>Whether there are conflicting rules</li><li>Whether Agent-level settings override expected global rules</li></ul><h3 id="_4-verify-model-capabilities" tabindex="-1">4. Verify Model Capabilities <a class="header-anchor" href="#_4-verify-model-capabilities" aria-label="Permalink to “4. Verify Model Capabilities”">​</a></h3><p>Different models have vastly different capabilities.</p><table tabindex="0"><thead><tr><th>Task Type</th><th>Recommended Model</th></tr></thead><tbody><tr><td>Complex reasoning</td><td>Claude Opus, GPT-4, o1</td></tr><tr><td>Code generation</td><td>Claude Sonnet, GPT-4</td></tr><tr><td>Simple tasks</td><td>Claude Haiku, GPT-4o-mini</td></tr></tbody></table><p>If Agent performs poorly, try a stronger model.</p><h3 id="_5-use-steps-limit-for-debugging" tabindex="-1">5. Use Steps Limit for Debugging <a class="header-anchor" href="#_5-use-steps-limit-for-debugging" aria-label="Permalink to “5. Use Steps Limit for Debugging”">​</a></h3><p>Set a smaller <code>steps</code> value to observe Agent&#39;s first few actions:</p>',8),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
steps: 5  # Stop after just 5 steps
---`)])],-1),n('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Agent ignores instructions</td><td>Prompt too long/vague</td><td>Simplify core rules, use structured format</td></tr><tr><td>Agent loops calling subagent</td><td>No stop condition</td><td>Set steps limit or task deny</td></tr><tr><td>Passthrough parameter not working</td><td>Provider doesn&#39;t support</td><td>Check provider documentation</td></tr><tr><td>Nested directory Agent not found</td><td>Path format error</td><td>Use / separator: <code>folder/agent</code></td></tr><tr><td>MCP tool permission ineffective</td><td>Wildcard match failed</td><td>Confirm tool name prefix matches</td></tr><tr><td>temperature not working</td><td>Some models don&#39;t support/have fixed value</td><td>Check model documentation</td></tr><tr><td>description not effective</td><td>Content too generic</td><td>Specifically state <strong>when</strong> to use this Agent</td></tr><tr><td>Wrong Agent auto-selected</td><td>Similar descriptions</td><td>Make each Agent&#39;s description clearly distinct</td></tr><tr><td>hidden Agent still shows</td><td>mode is not subagent</td><td>hidden only works for subagent</td></tr><tr><td>steps limit reached but task incomplete</td><td>Limit too small</td><td>Increase steps or optimize prompt</td></tr></tbody></table><hr><h2 id="advanced-use-case-examples" tabindex="-1">Advanced Use Case Examples <a class="header-anchor" href="#advanced-use-case-examples" aria-label="Permalink to “Advanced Use Case Examples”">​</a></h2><h3 id="automated-code-review-bot" tabindex="-1">Automated Code Review Bot <a class="header-anchor" href="#automated-code-review-bot" aria-label="Permalink to “Automated Code Review Bot”">​</a></h3>',6),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),n('<p>Usage:</p><ol><li>Tab switch to planner, create plan</li><li>Tab switch to executor, implement</li><li><code>@reviewer</code> to invoke review</li></ol><hr><h2 id="chapter-summary" tabindex="-1">Chapter Summary <a class="header-anchor" href="#chapter-summary" aria-label="Permalink to “Chapter Summary”">​</a></h2><p>You learned:</p><ol><li><strong>ACI Design Principles</strong>: Room to think, natural formats, excellent descriptions</li><li><strong>Prompt Engineering</strong>: Structured approach, reflection mechanism</li><li><strong>Passthrough Parameters</strong>: reasoningEffort, textVerbosity, etc.</li><li><strong>Advanced Configuration</strong>: Nested directories, MCP wildcards, steps, hidden</li><li><strong>Debugging Techniques</strong>: View sessions, simplified testing, check permissions</li></ol><hr><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to “Further Reading”">​</a></h2><ul><li><a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noreferrer">Anthropic: Building Effective Agents - Appendix 2</a></li><li><a href="https://opencode.ai/docs/agents" target="_blank" rel="noreferrer">OpenCode Official Documentation: Agents</a></li></ul><hr><h2 id="agent-system-learning-complete" tabindex="-1">Agent System Learning Complete <a class="header-anchor" href="#agent-system-learning-complete" aria-label="Permalink to “Agent System Learning Complete”">​</a></h2><p>Congratulations! You&#39;ve completed the entire Agent system:</p><table tabindex="0"><thead><tr><th>Chapter</th><th>Content</th></tr></thead><tbody><tr><td><a href="./02a-agent-quickstart.html">5.2a Quickstart</a></td><td>Create your first Agent</td></tr><tr><td><a href="./02b-agent-patterns.html">5.2b Design Patterns</a></td><td>Five Workflow patterns</td></tr><tr><td><a href="./02c-agent-permissions.html">5.2c Permissions and Security</a></td><td>Fine-grained permission control</td></tr><tr><td><strong>5.2d Advanced Techniques</strong> (This chapter)</td><td>ACI, passthrough parameters, debugging</td></tr></tbody></table><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Agents can invoke Skills to gain specialized knowledge. Next lesson we&#39;ll learn about the Skill system.</p></blockquote><p><strong>Next Lesson</strong>: <a href="./03a-skills-basics.html">5.3 Skill</a></p>',17)])])}const b=o(l,[["render",d]]);export{f as __pageData,b as default};
