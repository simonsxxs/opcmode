import{_ as i,I as r,c as s,o as l,a5 as o,j as e,J as d,a as n,aD as c}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"B5 Dedicated Development Agents","description":"Create dedicated Code Reviewer and Security Auditor agents to automate code review and security checks.","frontmatter":{"title":"B5 Dedicated Development Agents","subtitle":"Create Code Reviewer, Security Auditor","course":"OpenCode Practical Course","stage":"Phase 4","lesson":"B5","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Create dedicated Code Reviewer and Security Auditor agents to automate code review and security checks.","tags":["Agent","Code Review","Security Audit"],"prerequisite":["B1 Development Daily","3.2 Understanding Agents"]},"headers":[],"relativePath":"en/4-scenarios/coder-agents.md","filePath":"en/4-scenarios/coder-agents.md","lastUpdated":1772014034000}'),u={name:"en/4-scenarios/coder-agents.md"};function p(m,t,g,h,v,y){const a=r("AdInArticle");return l(),s("div",null,[t[0]||(t[0]=o('<h1 id="b5-dedicated-development-agents" tabindex="-1">B5 Dedicated Development Agents <a class="header-anchor" href="#b5-dedicated-development-agents" aria-label="Permalink to “B5 Dedicated Development Agents”">​</a></h1><blockquote><p>💡 <strong>One-line summary</strong>: Create dedicated development agents like Code Reviewer, Security Auditor, and Test Writer.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+c+'" alt="B5 Dedicated Development Agents - Course Notes" data-zoom-src="/images/4-scenarios/coder-agents-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Create a Code Reviewer Agent</li><li>Create a Security Auditor Agent</li><li>Create a Test Writer Agent</li><li>Combine multiple agents into a development workflow</li></ul><hr><h2 id="your-current-pain-points" tabindex="-1">Your Current Pain Points <a class="header-anchor" href="#your-current-pain-points" aria-label="Permalink to “Your Current Pain Points”">​</a></h2><ul><li>You have to do code review, security checks, and test generation yourself</li><li>You need to tell the AI what standards to use for review every time</li><li>You want multiple &quot;experts&quot; to collaborate but don&#39;t know how to implement it</li></ul><hr><h2 id="when-to-use-this-technique" tabindex="-1">When to Use This Technique <a class="header-anchor" href="#when-to-use-this-technique" aria-label="Permalink to “When to Use This Technique”">​</a></h2><ul><li>When you need: Use specialized agents to improve development quality</li><li>And you don&#39;t want: Repeatedly input review standards every time</li></ul><hr><h2 id="🎒-prerequisites" tabindex="-1">🎒 Prerequisites <a class="header-anchor" href="#🎒-prerequisites" aria-label="Permalink to “🎒 Prerequisites”">​</a></h2><blockquote><p>Make sure you&#39;ve completed the following:</p></blockquote><ul><li>[ ] Completed <a href="./coder-daily.html">B1 Development Daily</a></li><li>[ ] Completed <a href="./../3-workflow/02-agents.html">3.2 Understanding Agents</a></li></ul><hr><h2 id="core-concept" tabindex="-1">Core Concept <a class="header-anchor" href="#core-concept" aria-label="Permalink to “Core Concept”">​</a></h2><h3 id="development-agent-matrix" tabindex="-1">Development Agent Matrix <a class="header-anchor" href="#development-agent-matrix" aria-label="Permalink to “Development Agent Matrix”">​</a></h3><table tabindex="0"><thead><tr><th>Agent</th><th>Responsibility</th><th>Use Case</th></tr></thead><tbody><tr><td>Code Reviewer</td><td>Code review</td><td>PR review, self-check</td></tr><tr><td>Security Auditor</td><td>Security audit</td><td>Pre-release check</td></tr><tr><td>Test Writer</td><td>Test generation</td><td>Test coverage supplement</td></tr><tr><td>Doc Writer</td><td>Documentation</td><td>Comments, README</td></tr></tbody></table><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2><h3 id="step-1-create-code-reviewer-agent" tabindex="-1">Step 1: Create Code Reviewer Agent <a class="header-anchor" href="#step-1-create-code-reviewer-agent" aria-label="Permalink to “Step 1: Create Code Reviewer Agent”">​</a></h3><p><strong>Why</strong><br> A professional code review agent can discover more issues.</p>',26)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p ~/.config/opencode/agent")])],-1)),t[2]||(t[2]=o("<blockquote><p>Agent configuration file locations:</p><ul><li>Global: <code>~/.config/opencode/agent/</code></li><li>Project-level: <code>.opencode/agent/</code></li></ul><p>The agent&#39;s invocation name defaults to the filename: for example, <code>code-reviewer.md</code> corresponds to <code>@code-reviewer</code>.</p></blockquote><p>Create the configuration:</p>",2)),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a Code Reviewer Agent, save to ~/.config/opencode/agent/code-reviewer.md:

---
description: Strict code review expert
mode: subagent
model: anthropic/claude-opus-4-5-thinking
temperature: 0.3
permission:
  edit: deny
  bash: deny
---


# Code Reviewer Agent

You are an experienced senior engineer specializing in code review.

## Review Checklist

### Code Quality
- [ ] Single responsibility per function
- [ ] Clear and accurate naming
- [ ] No duplicate code
- [ ] Appropriate comments

### Potential Issues
- [ ] Boundary condition handling
- [ ] Complete error handling
- [ ] No memory leak risks
- [ ] No race conditions

### Maintainability
- [ ] Code is easy to understand
- [ ] Good testability
- [ ] Follows project conventions

## Output Format

For each issue, output in the following format:
- **Location**: filename:line_number
- **Issue**: description of the problem
- **Severity**: High / Medium / Low
- **Suggestion**: fix recommendation`)])],-1)),t[4]||(t[4]=e("p",null,"Sources (Agent Markdown field and tools syntax examples):",-1)),t[5]||(t[5]=e("ul",null,[e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/agents.mdx:163")]),e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/agents.mdx:167")]),e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/agents.mdx:169")])],-1)),t[6]||(t[6]=e("h3",{id:"step-2-create-security-auditor-agent",tabindex:"-1"},[n("Step 2: Create Security Auditor Agent "),e("a",{class:"header-anchor",href:"#step-2-create-security-auditor-agent","aria-label":"Permalink to “Step 2: Create Security Auditor Agent”"},"​")],-1)),d(a),t[7]||(t[7]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Security audits require a specialized perspective.")],-1)),t[8]||(t[8]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a Security Auditor Agent, save to ~/.config/opencode/agent/security-auditor.md:

---
description: Security vulnerability hunter
mode: subagent
model: anthropic/claude-opus-4-5-thinking
temperature: 0.2
permission:
  edit: deny
  bash: deny
---

# Security Auditor Agent

You are a security expert specializing in discovering security vulnerabilities in code.

## Check Items

### Input Validation
- SQL injection
- XSS attacks
- Command injection
- Path traversal

### Authentication & Authorization
- Authentication bypass
- Privilege escalation
- Session management

### Sensitive Data
- Hardcoded secrets
- Sensitive information leakage
- Insecure storage

### Dependency Security
- Known vulnerable dependencies
- Outdated package versions

## Output Format

For each security issue:
- **Vulnerability Type**: OWASP classification
- **Location**: filename:line_number
- **Risk Level**: Critical/High/Medium/Low
- **Description**: vulnerability description
- **Fix Suggestion**: how to fix
- **Reference**: relevant CWE/CVE`)])],-1)),t[9]||(t[9]=e("h3",{id:"step-3-create-test-writer-agent",tabindex:"-1"},[n("Step 3: Create Test Writer Agent "),e("a",{class:"header-anchor",href:"#step-3-create-test-writer-agent","aria-label":"Permalink to “Step 3: Create Test Writer Agent”"},"​")],-1)),t[10]||(t[10]=e("p",null,[e("strong",null,"Why"),e("br"),n(" A dedicated test agent can generate more comprehensive tests.")],-1)),t[11]||(t[11]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a Test Writer Agent, save to ~/.config/opencode/agent/test-writer.md:

---
description: Test case expert
mode: subagent
model: anthropic/claude-opus-4-5-thinking
temperature: 0.4
permission:
  edit: deny
  bash: deny
---

# Test Writer Agent

You are a testing expert skilled at designing and writing test cases.

## Test Strategy

1. **Unit Tests**: Isolate and test each function
2. **Integration Tests**: Test module interactions
3. **Boundary Tests**: Test boundary conditions
4. **Exception Tests**: Test error handling

## Test Coverage

Each function must cover:
- Normal inputs
- Boundary values (max, min, threshold)
- Invalid inputs (null, undefined, wrong type)
- Exception cases (network errors, timeouts)

## Output Format

Use the project's test framework to generate runnable test code.`)])],-1)),t[12]||(t[12]=e("h3",{id:"step-4-use-dedicated-agents",tabindex:"-1"},[n("Step 4: Use Dedicated Agents "),e("a",{class:"header-anchor",href:"#step-4-use-dedicated-agents","aria-label":"Permalink to “Step 4: Use Dedicated Agents”"},"​")],-1)),t[13]||(t[13]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Invoke dedicated agents to complete tasks.")],-1)),t[14]||(t[14]=e("p",null,"Restart OpenCode:",-1)),t[15]||(t[15]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1)),t[16]||(t[16]=e("p",null,"Invoke Code Reviewer:",-1)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@code-reviewer @src/services/auth.ts Please review this authentication module")])],-1)),t[18]||(t[18]=e("p",null,"Invoke Security Auditor:",-1)),t[19]||(t[19]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@security-auditor @src/controllers/ Perform a security audit on this directory")])],-1)),t[20]||(t[20]=e("p",null,"Invoke Test Writer:",-1)),t[21]||(t[21]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@test-writer @src/utils/validate.ts Generate complete test cases for this file")])],-1)),t[22]||(t[22]=e("h3",{id:"step-5-combine-into-a-workflow",tabindex:"-1"},[n("Step 5: Combine into a Workflow "),e("a",{class:"header-anchor",href:"#step-5-combine-into-a-workflow","aria-label":"Permalink to “Step 5: Combine into a Workflow”"},"​")],-1)),t[23]||(t[23]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Multiple agents working together is more efficient.")],-1)),t[24]||(t[24]=e("p",null,[n("Create a comprehensive review command "),e("code",null,".opencode/command/comprehensive-review.md"),n(":")],-1)),t[25]||(t[25]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`---
description: Comprehensive code review
---

Please execute in order:
1. @code-reviewer review code quality
2. @security-auditor check security risks
3. @test-writer analyze test coverage

Target file: $ARGUMENTS

Finally, summarize all issues and sort by priority.`)])],-1)),t[26]||(t[26]=e("p",null,"Sources (custom command directory and parameter placeholder):",-1)),t[27]||(t[27]=e("ul",null,[e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/commands.mdx:20")]),e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/commands.mdx:113")]),e("li",null,[e("code",null,"opencode/packages/opencode/src/config/config.ts:191")]),e("li",null,[e("code",null,"opencode/packages/opencode/src/command/index.ts:49")])],-1)),t[28]||(t[28]=e("p",null,"Usage:",-1)),t[29]||(t[29]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/comprehensive-review src/services/payment.ts")])],-1)),t[30]||(t[30]=o('<hr><h2 id="checkpoint-✅" tabindex="-1">Checkpoint ✅ <a class="header-anchor" href="#checkpoint-✅" aria-label="Permalink to “Checkpoint ✅”">​</a></h2><blockquote><p>Must pass all items to continue</p></blockquote><ul><li>[ ] Created Code Reviewer Agent</li><li>[ ] Created Security Auditor Agent</li><li>[ ] Created Test Writer Agent</li><li>[ ] Can invoke with @agent-name</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>@agent-name doesn&#39;t respond</td><td>Invocation name doesn&#39;t match filename (or typo)</td><td>Confirm filename (without .md) is the invocation name, e.g., <code>code-reviewer.md</code> → <code>@code-reviewer</code></td></tr><tr><td>Agent configuration doesn&#39;t take effect</td><td>Config file not in agent directory</td><td>Put in <code>~/.config/opencode/agent/</code> (global) or <code>.opencode/agent/</code> (project-level)</td></tr><tr><td>Multiple agents give inconsistent results</td><td>Each executes independently</td><td>Chain with command and summarize together</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Create Code Reviewer Agent</li><li>Create Security Auditor Agent</li><li>Create Test Writer Agent</li><li>Combine multiple agents into a workflow</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next lesson we&#39;ll learn <strong><a href="./coder-intranet.html">B6 Intranet/Offline Deployment</a></strong>.</p><p>You&#39;ll learn:</p><ul><li>Run OpenCode in enterprise intranet environment</li><li>Disable all external network requests</li><li>Configure internal AI gateway</li></ul></blockquote>',14))])}const w=i(u,[["render",p]]);export{C as __pageData,w as default};
