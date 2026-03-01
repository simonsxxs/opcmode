import{_ as o,I as i,c as s,o as l,a5 as t,J as d,j as e,a,aZ as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.2b Agent Design Patterns","description":"Learn industry Agent design patterns and best practices for creating efficient Agents, based on experience from Anthropic and Lilian Weng.","frontmatter":{"title":"5.2b Agent Design Patterns","subtitle":"Industry Best Practices and Case Studies","course":"OpenCode Practical Course","stage":"Phase 5","lesson":"5.2b","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Learn industry Agent design patterns and best practices for creating efficient Agents, based on experience from Anthropic and Lilian Weng.","tags":["Agent","Design Patterns","Best Practices"],"prerequisite":["5.2a Agent Quick Start"]},"headers":[],"relativePath":"en/5-advanced/02b-agent-patterns.md","filePath":"en/5-advanced/02b-agent-patterns.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/02b-agent-patterns.md"};function u(g,n,m,h,f,y){const r=i("AdInArticle");return l(),s("div",null,[n[0]||(n[0]=t('<h1 id="_5-2b-agent-design-patterns" tabindex="-1">5.2b Agent Design Patterns <a class="header-anchor" href="#_5-2b-agent-design-patterns" aria-label="Permalink to “5.2b Agent Design Patterns”">​</a></h1><blockquote><p>Sources: Anthropic &quot;Building Effective Agents&quot;, Lilian Weng &quot;LLM Powered Autonomous Agents&quot;</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><img src="'+c+'" alt="Agent Design Patterns Study Notes" data-zoom-src="/images/5-advanced/02b-agent-patterns-notes.jpeg"><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Choose the right Agent architecture</li><li>Implement five Workflow patterns</li><li>Design complex multi-Agent collaboration systems</li><li>Avoid common design pitfalls</li></ul><hr><h2 id="core-principles" tabindex="-1">Core Principles <a class="header-anchor" href="#core-principles" aria-label="Permalink to “Core Principles”">​</a></h2><p>After working with dozens of teams to build Agents, Anthropic summarized three core principles:</p><h3 id="_1-keep-it-simple" tabindex="-1">1. Keep It Simple <a class="header-anchor" href="#_1-keep-it-simple" aria-label="Permalink to “1. Keep It Simple”">​</a></h3><blockquote><p>&quot;The most successful implementations use simple, composable patterns rather than complex frameworks.&quot;</p></blockquote><p><strong>Practices</strong>:</p><ul><li>If a single Agent can solve it, don&#39;t use multiple</li><li>If a fixed workflow works, don&#39;t use dynamic decisions</li><li>If a prompt can solve it, don&#39;t add tools</li></ul><h3 id="_2-transparency-first" tabindex="-1">2. Transparency First <a class="header-anchor" href="#_2-transparency-first" aria-label="Permalink to “2. Transparency First”">​</a></h3><blockquote><p>&quot;Explicitly show the Agent&#39;s planning steps.&quot;</p></blockquote><p><strong>Practices</strong>:</p><ul><li>The Agent&#39;s thinking process should be visible</li><li>Each step has clear inputs and outputs</li><li>Users can understand what the Agent is doing</li></ul><h3 id="_3-carefully-design-tool-interfaces-aci" tabindex="-1">3. Carefully Design Tool Interfaces (ACI) <a class="header-anchor" href="#_3-carefully-design-tool-interfaces-aci" aria-label="Permalink to “3. Carefully Design Tool Interfaces (ACI)”">​</a></h3>',20)),d(r),n[1]||(n[1]=t('<blockquote><p>&quot;Invest as much effort in designing Agent-Computer Interface (ACI) as you would in Human-Computer Interface (HCI).&quot;</p></blockquote><p><strong>Practices</strong>:</p><ul><li>Tool descriptions should be like excellent docstrings for junior developers</li><li>Include usage examples and edge cases</li><li>Avoid formats requiring precise counting or complex escaping</li></ul><hr><h2 id="workflow-vs-agent-how-to-choose" tabindex="-1">Workflow vs Agent: How to Choose <a class="header-anchor" href="#workflow-vs-agent-how-to-choose" aria-label="Permalink to “Workflow vs Agent: How to Choose”">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Characteristics</th><th>Use Cases</th><th>OpenCode Implementation</th></tr></thead><tbody><tr><td><strong>Workflow</strong></td><td>Predefined code paths, fixed steps</td><td>Predictable tasks, clear structure</td><td>Skill, Command</td></tr><tr><td><strong>Agent</strong></td><td>LLM dynamic decisions, autonomous exploration</td><td>Open-ended problems, unpredictable steps</td><td>Agent + Task tool</td></tr></tbody></table><h3 id="decision-flowchart" tabindex="-1">Decision Flowchart <a class="header-anchor" href="#decision-flowchart" aria-label="Permalink to “Decision Flowchart”">​</a></h3>',7)),n[2]||(n[2]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Task arrives
    ↓
Are steps fixed?
    ├─ Yes → Use Workflow (Skill/Command)
    └─ No → How much autonomy needed?
              ├─ Low → Constrained Agent (steps + permission control)
              └─ High → Fully autonomous Agent`)])],-1)),n[3]||(n[3]=t('<hr><h2 id="five-workflow-patterns" tabindex="-1">Five Workflow Patterns <a class="header-anchor" href="#five-workflow-patterns" aria-label="Permalink to “Five Workflow Patterns”">​</a></h2><h3 id="pattern-1-prompt-chaining" tabindex="-1">Pattern 1: Prompt Chaining <a class="header-anchor" href="#pattern-1-prompt-chaining" aria-label="Permalink to “Pattern 1: Prompt Chaining”">​</a></h3><p><strong>Principle</strong>: Break down tasks into sequential steps, where each step&#39;s output is the next step&#39;s input.</p><p><strong>Use Cases</strong>:</p><ul><li>Tasks can be clearly decomposed into fixed subtasks</li><li>Willing to trade latency for accuracy</li></ul><p><strong>Example</strong>: Translation + Polishing + Formatting</p>',7)),n[4]||(n[4]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: "Multi-step translation processing"
mode: subagent
steps: 10
---

# Task Flow

Execute in the following steps, proceed to next step only after completing each:

## Step 1: Literal Translation
Translate the original text sentence by sentence, preserving original meaning.

## Step 2: Free Translation and Polishing
Based on literal translation, adjust for fluent Chinese expression.

## Step 3: Technical Term Check
Check if technical terms are accurate, keep English when necessary.

## Step 4: Formatting
Organize output in target format (Markdown).

# Output Requirements
Output intermediate results for each step, then provide final version.`)])],-1)),n[5]||(n[5]=t('<hr><h3 id="pattern-2-routing" tabindex="-1">Pattern 2: Routing <a class="header-anchor" href="#pattern-2-routing" aria-label="Permalink to “Pattern 2: Routing”">​</a></h3><p><strong>Principle</strong>: Route tasks to different specialized processing flows based on input characteristics.</p><p><strong>Use Cases</strong>:</p><ul><li>Different categories need different handling</li><li>Classification can be done accurately</li></ul><p><strong>Example</strong>: Code Issue Classifier</p>',6)),n[6]||(n[6]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: "Code issue classification router"
mode: subagent
---

# Role
You are a code issue classification expert, responsible for routing issues to the correct processing flow.

# Classification Rules

Analyze the user's code issue and determine which category it belongs to:

1. **Bug Fix** → Call @bug-fixer
   - Signs: Code errors, unexpected behavior

2. **Performance Optimization** → Call @performance-optimizer
   - Signs: Slow execution, high memory usage

3. **Security Audit** → Call @security-auditor
   - Signs: Involves authentication, data handling, external input

4. **Code Refactoring** → Call @refactor-expert
   - Signs: Code works but needs structural improvement

5. **New Feature Development** → Don't route, handle directly
   - Signs: Implementing new requirements

# Output Format
First explain the classification rationale, then call the corresponding subagent.`)])],-1)),n[7]||(n[7]=e("p",null,[e("strong",null,"With Task Permission Control"),a(":")],-1)),n[8]||(n[8]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "router": {
      "description": "Code issue classification router",
      "mode": "primary",
      "permission": {
        "task": {
          "*": "deny",
          "bug-fixer": "allow",
          "performance-optimizer": "allow",
          "security-auditor": "allow",
          "refactor-expert": "allow"
        }
      }
    }
  }
}`)])],-1)),n[9]||(n[9]=t('<hr><h3 id="pattern-3-parallelization" tabindex="-1">Pattern 3: Parallelization <a class="header-anchor" href="#pattern-3-parallelization" aria-label="Permalink to “Pattern 3: Parallelization”">​</a></h3><p><strong>Principle</strong>: Execute multiple tasks simultaneously, then aggregate results.</p><p><strong>Two Variants</strong>:</p><ul><li><strong>Sectioning</strong>: Independent subtasks in parallel</li><li><strong>Voting</strong>: Same task from multiple perspectives for validation</li></ul><p><strong>Use Cases</strong>:</p><ul><li>Subtasks are independent of each other</li><li>Need multiple perspectives to improve accuracy</li><li>Time-sensitive, need acceleration</li></ul><p><strong>Example: Parallel Code Quality Check</strong></p>',8)),n[10]||(n[10]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: "Parallel code quality checker"
mode: subagent
---

# Task
Perform multi-dimensional checks on given code simultaneously.

# Parallel Tasks

Call the following subagents **simultaneously** (using multiple Task tool calls):

1. @security-auditor - Security vulnerability check
2. @performance-reviewer - Performance analysis
3. @style-checker - Code style check
4. @test-coverage-analyzer - Test coverage analysis

# Aggregation Rules

After collecting all results, generate a comprehensive report:

## Overall Score
- Security: X/10
- Performance: X/10
- Code Style: X/10
- Test Coverage: X/10
- **Total**: X/40

## Issue Summary
Sort all discovered issues by severity.

## Priority Fix Recommendations
Top 3 issues that should be addressed first.`)])],-1)),n[11]||(n[11]=t('<hr><h3 id="pattern-4-orchestrator-workers" tabindex="-1">Pattern 4: Orchestrator-Workers <a class="header-anchor" href="#pattern-4-orchestrator-workers" aria-label="Permalink to “Pattern 4: Orchestrator-Workers”">​</a></h3><p><strong>Principle</strong>: A central LLM (orchestrator) dynamically analyzes tasks, decomposes them, and assigns to specialized Worker Agents.</p><p><strong>Use Cases</strong>:</p><ul><li>Cannot predict which subtasks are needed</li><li>Task complexity is uncertain</li><li>Need flexible response</li></ul><p><strong>Example: Project Analysis Orchestrator</strong></p>',6)),n[12]||(n[12]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: "Project analysis orchestrator, dynamically assigns analysis tasks"
mode: primary
---

# Role
You are a project analysis orchestrator, responsible for understanding user needs and coordinating expert teams.

# Available Experts

You can call the following experts (choose as needed):

- @architecture-analyst - Architecture analysis, for "How is this project structured?"
- @dependency-auditor - Dependency audit, for "Any outdated/dangerous dependencies?"
- @security-auditor - Security audit, for "Any security risks?"
- @performance-profiler - Performance analysis, for "Where might bottlenecks be?"
- @docs-reviewer - Documentation review, for "Is documentation complete?"
- @test-analyzer - Test analysis, for "Is test coverage sufficient?"

# Workflow

1. **Understand Requirements**: Analyze what the user wants to know
2. **Plan**: Decide which experts to call, in what order
3. **Execute Analysis**: Call selected experts
4. **Integrate Results**: Aggregate all expert findings
5. **Provide Recommendations**: Give actionable advice based on overall analysis

# Principles
- Don't over-analyze, select necessary experts based on user needs
- If user question is simple, may not need any experts
- Expert analysis results may trigger more analysis needs`)])],-1)),n[13]||(n[13]=t('<hr><h3 id="pattern-5-evaluator-optimizer" tabindex="-1">Pattern 5: Evaluator-Optimizer <a class="header-anchor" href="#pattern-5-evaluator-optimizer" aria-label="Permalink to “Pattern 5: Evaluator-Optimizer”">​</a></h3><p><strong>Principle</strong>: One Agent generates content, another Agent evaluates, looping until standards are met.</p><p><strong>Use Cases</strong>:</p><ul><li>Clear evaluation criteria exist</li><li>Iterative improvement is valuable</li><li>Similar to human &quot;write-revise&quot; process</li></ul><p><strong>Example: Code Optimization Loop</strong></p>',6)),n[14]||(n[14]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: "Iterative code optimizer"
mode: subagent
steps: 15
---

# Role
You are a code optimization expert, improving code quality through iteration.

# Optimization Loop

Execute the following loop until goals are met or step limit reached:

## 1. Analysis Phase
- Read current code
- Identify optimization opportunities
- Evaluate current quality score (see scoring criteria)

## 2. Optimization Phase
- Select highest-impact optimization point
- Implement optimization
- Ensure functionality is not broken

## 3. Verification Phase
- Run tests to ensure functionality works
- Re-evaluate quality score

## 4. Decision Phase
- If quality score >= 8, stop optimization
- If quality score improvement < 0.5, stop (diminishing returns)
- Otherwise, continue next round

# Quality Scoring Criteria

| Score | Readability | Performance | Security | Test Coverage |
|-------|-------------|-------------|----------|---------------|
| 9-10 | Clear naming, complete comments | O(n) or better | No vulnerabilities | >90% |
| 7-8 | Reasonable naming, key comments | O(n log n) | Low risk | 70-90% |
| 5-6 | Basically readable | O(n²) | Medium risk | 50-70% |
| <5 | Hard to understand | O(n³)+ | High risk | <50% |

Composite Score = Readability×0.3 + Performance×0.3 + Security×0.25 + Test Coverage×0.15

# Output
Each round output:
- This round's optimization content
- Score breakdown by dimension
- Quality score change
- Decision rationale for continuing or not

Final output:
- Optimization summary
- Before/after comparison
- Further optimization suggestions (if any)

# Failure Handling
- Test failure: Immediately rollback this round's changes, record failure reason, try other optimization directions
- Steps exhausted: Output current best version and remaining optimization suggestions
- Cannot continue optimization: Explain reason, state achieved quality level`)])],-1)),n[15]||(n[15]=t('<hr><h2 id="three-major-agent-components" tabindex="-1">Three Major Agent Components <a class="header-anchor" href="#three-major-agent-components" aria-label="Permalink to “Three Major Agent Components”">​</a></h2><p>According to Lilian Weng&#39;s research, a complete Agent system contains three major components:</p><h3 id="_1-planning" tabindex="-1">1. Planning <a class="header-anchor" href="#_1-planning" aria-label="Permalink to “1. Planning”">​</a></h3><p><strong>Task Decomposition Techniques</strong>:</p><table tabindex="0"><thead><tr><th>Technique</th><th>Description</th><th>Use Cases</th></tr></thead><tbody><tr><td><strong>Chain of Thought</strong></td><td>&quot;Think step by step&quot;</td><td>General reasoning</td></tr><tr><td><strong>Tree of Thoughts</strong></td><td>Explore multiple reasoning paths</td><td>Complex decisions</td></tr><tr><td><strong>ReAct</strong></td><td>Think-Act-Observe loop</td><td>Need to interact with environment</td></tr></tbody></table><p><strong>Applying in Agent prompt</strong>:</p>',7)),n[16]||(n[16]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# Working Mode

Use ReAct pattern:

1. **Think**: Analyze current state, decide next step
2. **Act**: Execute specific operations (call tools)
3. **Observe**: Analyze operation results
4. **Repeat**: Until task is complete`)])],-1)),n[17]||(n[17]=t('<h3 id="_2-memory" tabindex="-1">2. Memory <a class="header-anchor" href="#_2-memory" aria-label="Permalink to “2. Memory”">​</a></h3><table tabindex="0"><thead><tr><th>Type</th><th>Correspondence</th><th>Characteristics</th></tr></thead><tbody><tr><td><strong>Short-term Memory</strong></td><td>Context window</td><td>Limited, about tens of thousands of tokens</td></tr><tr><td><strong>Long-term Memory</strong></td><td>External vector store</td><td>Unlimited, requires retrieval</td></tr></tbody></table><p><strong>Implementation in OpenCode</strong>:</p><ul><li>Short-term: Session context</li><li>Long-term: MCP integration with vector database</li></ul><h3 id="_3-tool-use" tabindex="-1">3. Tool Use <a class="header-anchor" href="#_3-tool-use" aria-label="Permalink to “3. Tool Use”">​</a></h3><p><strong>Tool Design Principles</strong>:</p><ol><li><strong>Clear Description</strong>: Like docstrings for junior developers</li><li><strong>Simple Input</strong>: Avoid complex format requirements</li><li><strong>Parseable Output</strong>: Structured, easy for subsequent processing</li><li><strong>Friendly Errors</strong>: Clear error messages</li></ol><hr><h2 id="case-study-1-multi-language-documentation-generation-system" tabindex="-1">Case Study 1: Multi-language Documentation Generation System <a class="header-anchor" href="#case-study-1-multi-language-documentation-generation-system" aria-label="Permalink to “Case Study 1: Multi-language Documentation Generation System”">​</a></h2><p><strong>Requirement</strong>: Automatically translate API documentation into multiple languages.</p><h3 id="system-design" tabindex="-1">System Design <a class="header-anchor" href="#system-design" aria-label="Permalink to “System Design”">​</a></h3>',11)),n[18]||(n[18]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`User inputs API documentation
        ↓
    @doc-parser (Parse document structure)
        ↓
    @translator-zh (Translate to Chinese)
    @translator-ja (Translate to Japanese)  ← Parallel
    @translator-ko (Translate to Korean)
        ↓
    @doc-formatter (Format output)
        ↓
    Multi-language documentation`)])],-1)),n[19]||(n[19]=e("h3",{id:"configuration-file",tabindex:"-1"},[a("Configuration File "),e("a",{class:"header-anchor",href:"#configuration-file","aria-label":"Permalink to “Configuration File”"},"​")],-1)),n[20]||(n[20]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "doc-generator": {
      "description": "Multi-language documentation generation orchestrator",
      "mode": "primary",
      "prompt": "{file:./prompts/doc-generator.md}",
      "permission": {
        "task": {
          "*": "deny",
          "doc-parser": "allow",
          "translator-*": "allow",
          "doc-formatter": "allow"
        }
      }
    },
    "doc-parser": {
      "description": "Parse API documentation structure, extract translatable content",
      "mode": "subagent",
      "temperature": 0.1
    },
    "translator-zh": {
      "description": "English to Chinese expert, maintain technical term accuracy",
      "mode": "subagent",
      "temperature": 0.3
    },
    "translator-ja": {
      "description": "English to Japanese expert",
      "mode": "subagent",
      "temperature": 0.3
    },
    "translator-ko": {
      "description": "English to Korean expert",
      "mode": "subagent",
      "temperature": 0.3
    },
    "doc-formatter": {
      "description": "Document formatting, ensure consistent format across languages",
      "mode": "subagent",
      "temperature": 0.1
    }
  }
}`)])],-1)),n[21]||(n[21]=e("h3",{id:"orchestrator-prompt",tabindex:"-1"},[a("Orchestrator Prompt "),e("a",{class:"header-anchor",href:"#orchestrator-prompt","aria-label":"Permalink to “Orchestrator Prompt”"},"​")],-1)),n[22]||(n[22]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- prompts/doc-generator.md -->
---
description: "Multi-language documentation generation orchestrator"
mode: primary
---

# Role
You are the orchestrator for the multi-language documentation generation system.

# Workflow

## 1. Parsing Phase
Call @doc-parser to analyze input document:
- Extract title, description, parameters, return values etc.
- Mark which content needs translation
- Which content stays as-is (like code examples)

## 2. Translation Phase
**Parallel** call translation experts:
- @translator-zh: Translate to Chinese
- @translator-ja: Translate to Japanese
- @translator-ko: Translate to Korean

Tell each translation expert:
- Document structure
- Content to translate
- Glossary (if any)

## 3. Formatting Phase
Call @doc-formatter:
- Integrate all language versions
- Ensure format consistency
- Generate final output

# Output Format
Generate directory structure suggestion containing all language versions.`)])],-1)),n[23]||(n[23]=e("hr",null,null,-1)),n[24]||(n[24]=e("h2",{id:"case-study-2-code-audit-pipeline",tabindex:"-1"},[a("Case Study 2: Code Audit Pipeline "),e("a",{class:"header-anchor",href:"#case-study-2-code-audit-pipeline","aria-label":"Permalink to “Case Study 2: Code Audit Pipeline”"},"​")],-1)),n[25]||(n[25]=e("p",null,[e("strong",null,"Requirement"),a(": Comprehensive code audit for PRs.")],-1)),n[26]||(n[26]=e("h3",{id:"system-design-1",tabindex:"-1"},[a("System Design "),e("a",{class:"header-anchor",href:"#system-design-1","aria-label":"Permalink to “System Design”"},"​")],-1)),n[27]||(n[27]=e("p",null,[a("Using "),e("strong",null,"Parallelization + Orchestrator-Workers"),a(" hybrid pattern.")],-1)),n[28]||(n[28]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`PR code changes
        ↓
    @audit-coordinator (Coordinator)
        ↓
    ┌──────────────────────────────────┐
    │  Parallel Execution (Sectioning) │
    │  @security-auditor               │
    │  @performance-auditor            │
    │  @quality-auditor                │
    │  @test-auditor                   │
    └──────────────────────────────────┘
        ↓
    Aggregate all findings
        ↓
    @report-generator (Generate report)
        ↓
    Audit report`)])],-1)),n[29]||(n[29]=e("h3",{id:"configuration-file-1",tabindex:"-1"},[a("Configuration File "),e("a",{class:"header-anchor",href:"#configuration-file-1","aria-label":"Permalink to “Configuration File”"},"​")],-1)),n[30]||(n[30]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "audit-coordinator": {
      "description": "Code audit coordinator, orchestrating multi-dimensional audits",
      "mode": "subagent",
      "model": "anthropic/claude-opus-4-5-thinking",
      "prompt": "{file:./prompts/audit-coordinator.md}",
      "steps": 50
    },
    "security-auditor": {
      "description": "Security vulnerability audit: injection, authentication, data leakage",
      "mode": "subagent",
      "temperature": 0.1,
      "prompt": "{file:./prompts/security-auditor.md}",
      "permission": {
        "edit": "deny"
      }
    },
    "performance-auditor": {
      "description": "Performance audit: complexity, memory, concurrency",
      "mode": "subagent",
      "temperature": 0.1,
      "permission": {
        "edit": "deny"
      }
    },
    "quality-auditor": {
      "description": "Code quality audit: readability, SOLID, duplicate code",
      "mode": "subagent",
      "temperature": 0.2,
      "permission": {
        "edit": "deny"
      }
    },
    "test-auditor": {
      "description": "Test audit: coverage, edge cases, mock quality",
      "mode": "subagent",
      "temperature": 0.1,
      "permission": {
        "edit": "deny",
        "bash": {
          "*": "deny",
          "npm test*": "allow",
          "npm run test*": "allow"
        }
      }
    },
    "report-generator": {
      "description": "Generate structured audit report",
      "mode": "subagent",
      "temperature": 0.2
    }
  }
}`)])],-1)),n[31]||(n[31]=e("h3",{id:"coordinator-prompt",tabindex:"-1"},[a("Coordinator Prompt "),e("a",{class:"header-anchor",href:"#coordinator-prompt","aria-label":"Permalink to “Coordinator Prompt”"},"​")],-1)),n[32]||(n[32]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- prompts/audit-coordinator.md -->
# Code Audit Coordinator

## Responsibilities
Coordinate multiple specialized audit Agents for comprehensive code change audits.

## Audit Process

### 1. Change Analysis
First analyze the changes:
- Which files are affected
- Change type (new feature/bug fix/refactoring)
- Change scale

### 2. Audit Task Assignment
**Parallel** call the following audit experts:

| Expert | Focus |
|--------|-------|
| @security-auditor | SQL injection, XSS, auth bypass, sensitive data |
| @performance-auditor | O(n²) complexity, memory leaks, N+1 queries |
| @quality-auditor | Naming, function length, duplicate code, SOLID |
| @test-auditor | Test coverage, edge cases, mock quality |

### 3. Result Aggregation
Collect all audit results:

**Severity Definitions**:
| Level | Definition | Example |
|-------|------------|---------|
| Critical | Exploitable remotely, data breach risk | SQL injection, hardcoded keys |
| High | Requires login to exploit, functional defects | Auth bypass, resource leaks |
| Medium | Requires specific conditions | Unhandled boundary conditions |
| Low | Code style, minor performance | Non-standard naming |

**Conflict Resolution**:
- Same line flagged by multiple audits → Keep highest severity
- Contradictory recommendations → Mark as "needs manual review"
- False positive identification → Downgrade if 2+ auditors consider no issue

### 4. Report Generation
Call @report-generator to produce final report:
- Executive summary
- Detailed findings
- Fix recommendations
- Risk assessment

## Failure Handling
- Audit Agent timeout: Log and continue, note in report "partial audit incomplete"
- Audit Agent error: Retry once, skip and log if still fails
- No changes to audit: Return directly "no audit needed"

## Output
Output structured audit report.`)])],-1)),n[33]||(n[33]=t('<hr><h2 id="design-checklist" tabindex="-1">Design Checklist <a class="header-anchor" href="#design-checklist" aria-label="Permalink to “Design Checklist”">​</a></h2><p>Before designing an Agent, ask yourself:</p><ul><li>[ ] <strong>Simplicity</strong>: Can a simpler solution work?</li><li>[ ] <strong>Pattern Selection</strong>: Did you choose the right Workflow pattern?</li><li>[ ] <strong>Tool Description</strong>: Is the description clear and understandable?</li><li>[ ] <strong>Evaluation Criteria</strong>: How to judge if Agent completed the task?</li><li>[ ] <strong>Failure Handling</strong>: How to recover from errors?</li><li>[ ] <strong>Permission Control</strong>: Are unnecessary permissions restricted?</li><li>[ ] <strong>Resource Limits</strong>: Are steps limits set?</li></ul><hr><h2 id="common-design-pitfalls" tabindex="-1">Common Design Pitfalls <a class="header-anchor" href="#common-design-pitfalls" aria-label="Permalink to “Common Design Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Pitfall</th><th>Symptom</th><th>Solution</th></tr></thead><tbody><tr><td><strong>Over-engineering</strong></td><td>Using multiple Agents for simple problems</td><td>Try single Agent first</td></tr><tr><td><strong>Vague Description</strong></td><td>description too generic causing wrong calls</td><td>Specify applicable scenarios</td></tr><tr><td><strong>Infinite Loop</strong></td><td>Agents call each other without stopping</td><td>Set steps limit</td></tr><tr><td><strong>Loose Permissions</strong></td><td>subagent can do anything</td><td>Define task/edit/bash permissions</td></tr><tr><td><strong>Lack of Transparency</strong></td><td>Don&#39;t know what Agent is doing</td><td>Require intermediate step output</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><strong>Three Core Principles</strong>: Simple, Transparent, Carefully designed ACI</li><li><strong>Five Workflow Patterns</strong>: Prompt Chaining, Routing, Parallelization, Orchestrator-Workers, Evaluator-Optimizer</li><li><strong>Three Agent Components</strong>: Planning, Memory, Tool Use</li><li><strong>Two Case Studies</strong>: Multi-language documentation system, Code audit pipeline</li><li><strong>Design Checklist</strong>: Avoid common pitfalls</li></ol><hr><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to “Further Reading”">​</a></h2><ul><li><a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noreferrer">Anthropic: Building Effective Agents</a> (2024.12)</li><li><a href="https://lilianweng.github.io/posts/2023-06-23-agent/" target="_blank" rel="noreferrer">Lilian Weng: LLM Powered Autonomous Agents</a> (2023.06)</li><li><a href="https://platform.openai.com/docs/guides/agents" target="_blank" rel="noreferrer">OpenAI: Agents Overview</a></li></ul><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>After designing an Agent, how do you precisely control what it can and cannot do? Next lesson dives into the permission system.</p></blockquote><p><strong>Next Lesson</strong>: <a href="./02c-agent-permissions.html">5.2c Agent Permissions and Security</a></p>',18))])}const C=o(p,[["render",u]]);export{k as __pageData,C as default};
