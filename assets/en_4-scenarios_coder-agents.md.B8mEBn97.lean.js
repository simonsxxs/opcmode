import{_ as i,I as r,c as s,o as l,a5 as o,j as e,J as d,a as n,aD as c}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"B5 Dedicated Development Agents","description":"Create dedicated Code Reviewer and Security Auditor agents to automate code review and security checks.","frontmatter":{"title":"B5 Dedicated Development Agents","subtitle":"Create Code Reviewer, Security Auditor","course":"OpenCode Practical Course","stage":"Phase 4","lesson":"B5","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Create dedicated Code Reviewer and Security Auditor agents to automate code review and security checks.","tags":["Agent","Code Review","Security Audit"],"prerequisite":["B1 Development Daily","3.2 Understanding Agents"]},"headers":[],"relativePath":"en/4-scenarios/coder-agents.md","filePath":"en/4-scenarios/coder-agents.md","lastUpdated":1772014034000}'),u={name:"en/4-scenarios/coder-agents.md"};function p(m,t,g,h,v,y){const a=r("AdInArticle");return l(),s("div",null,[t[0]||(t[0]=o("",26)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p ~/.config/opencode/agent")])],-1)),t[2]||(t[2]=o("",2)),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a Code Reviewer Agent, save to ~/.config/opencode/agent/code-reviewer.md:

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

Finally, summarize all issues and sort by priority.`)])],-1)),t[26]||(t[26]=e("p",null,"Sources (custom command directory and parameter placeholder):",-1)),t[27]||(t[27]=e("ul",null,[e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/commands.mdx:20")]),e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/commands.mdx:113")]),e("li",null,[e("code",null,"opencode/packages/opencode/src/config/config.ts:191")]),e("li",null,[e("code",null,"opencode/packages/opencode/src/command/index.ts:49")])],-1)),t[28]||(t[28]=e("p",null,"Usage:",-1)),t[29]||(t[29]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/comprehensive-review src/services/payment.ts")])],-1)),t[30]||(t[30]=o("",14))])}const w=i(u,[["render",p]]);export{C as __pageData,w as default};
