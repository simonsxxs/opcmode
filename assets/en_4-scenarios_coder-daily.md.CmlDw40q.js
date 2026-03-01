import{_ as i,I as l,c as r,o as s,a5 as a,j as e,J as d,a as n,aF as u}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"B1 Developer Daily","description":"Use Plan Agent to understand code, Build Agent to write new features, and AI to locate and fix bugs—boost your development efficiency.","frontmatter":{"title":"B1 Developer Daily","subtitle":"Understanding Code, Writing Features, Fixing Bugs","course":"OpenCode Practical Course","stage":"Stage 4","lesson":"B1","duration":"20 minutes","practice":"25 minutes","level":"Advanced","description":"Use Plan Agent to understand code, Build Agent to write new features, and AI to locate and fix bugs—boost your development efficiency.","tags":["Code","Development","Bug Fixing"],"prerequisite":["3.1 Plan vs Build"]},"headers":[],"relativePath":"en/4-scenarios/coder-daily.md","filePath":"en/4-scenarios/coder-daily.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/coder-daily.md"};function c(h,t,m,g,f,b){const o=l("AdInArticle");return s(),r("div",null,[t[0]||(t[0]=a('<h1 id="b1-developer-daily" tabindex="-1">B1 Developer Daily <a class="header-anchor" href="#b1-developer-daily" aria-label="Permalink to “B1 Developer Daily”">​</a></h1><blockquote><p>💡 <strong>One-line summary</strong>: Use Plan Agent to understand code, use Build Agent to write features and fix bugs.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+u+'" alt="B1 Developer Daily Notes" data-zoom-src="/images/4-scenarios/coder-daily-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Quickly understand unfamiliar codebases</li><li>Use AI to assist in developing new features</li><li>Efficiently locate and fix bugs</li><li>Master the Plan → Build development workflow</li></ul><hr><h2 id="your-current-struggles" tabindex="-1">Your Current Struggles <a class="header-anchor" href="#your-current-struggles" aria-label="Permalink to “Your Current Struggles”">​</a></h2><ul><li>Taking over unfamiliar projects, spending hours reading code</li><li>Not knowing where to start when adding new features</li><li>Difficulty locating bugs, unsure where the problem lies</li></ul><hr><h2 id="when-to-use-this-approach" tabindex="-1">When to Use This Approach <a class="header-anchor" href="#when-to-use-this-approach" aria-label="Permalink to “When to Use This Approach”">​</a></h2><ul><li>When you need: AI to boost your daily development efficiency</li><li>And you don&#39;t want to: Write and search everything manually</li></ul><hr><h2 id="🎒-before-you-start" tabindex="-1">🎒 Before You Start <a class="header-anchor" href="#🎒-before-you-start" aria-label="Permalink to “🎒 Before You Start”">​</a></h2><blockquote><p>Make sure you&#39;ve completed the following:</p></blockquote><ul><li>[ ] Completed <a href="./../3-workflow/01-plan-build.html">3.1 Plan vs Build</a></li><li>[ ] Have a code project ready</li></ul><hr><h2 id="core-concept" tabindex="-1">Core Concept <a class="header-anchor" href="#core-concept" aria-label="Permalink to “Core Concept”">​</a></h2><h3 id="development-workflow" tabindex="-1">Development Workflow <a class="header-anchor" href="#development-workflow" aria-label="Permalink to “Development Workflow”">​</a></h3>',21)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Understand Code(Plan) → Plan Solution(Plan) → Implement Feature(Build) → Verify & Test(Build)")])],-1)),t[2]||(t[2]=a('<h3 id="three-common-scenarios" tabindex="-1">Three Common Scenarios <a class="header-anchor" href="#three-common-scenarios" aria-label="Permalink to “Three Common Scenarios”">​</a></h3><table tabindex="0"><thead><tr><th>Scenario</th><th>Recommended Agent</th><th>Typical Operations</th></tr></thead><tbody><tr><td>Understand code</td><td>Plan</td><td>@file analysis, @explore exploration</td></tr><tr><td>Write new feature</td><td>Build</td><td>Step-by-step implementation, iterative changes</td></tr><tr><td>Fix bug</td><td>Plan→Build</td><td>Analyze root cause first, then fix</td></tr></tbody></table><h3 id="syntax-quick-reference-only-3-used-in-this-lesson" tabindex="-1">Syntax Quick Reference (Only 3 Used in This Lesson) <a class="header-anchor" href="#syntax-quick-reference-only-3-used-in-this-lesson" aria-label="Permalink to “Syntax Quick Reference (Only 3 Used in This Lesson)”">​</a></h3><ul><li><code>@path</code>: Include file content in the conversation</li><li><code>!command</code>: Execute command in TUI and include output in the conversation</li><li><code>/undo</code>: Undo the last conversation change and roll back related file modifications (requires Git repository)</li></ul><p>For detailed syntax, see: <a href="https://opencode.ai/docs/tui" target="_blank" rel="noreferrer">https://opencode.ai/docs/tui</a></p><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2><h3 id="step-1-quickly-understand-code" tabindex="-1">Step 1: Quickly Understand Code <a class="header-anchor" href="#step-1-quickly-understand-code" aria-label="Permalink to “Step 1: Quickly Understand Code”">​</a></h3><p><strong>Why</strong> The first step in taking over a project is understanding the code structure.</p><p>Switch to Plan Agent:</p>',10)),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@explore Help me understand the overall structure of this project, including:
1. Main directories and functional modules
2. Entry files and core workflows
3. Technology stack and frameworks used`)])],-1)),t[4]||(t[4]=e("p",null,"Dive into a specific file:",-1)),t[5]||(t[5]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@src/services/auth.ts What's the logic of this authentication module? List all exported functions and their purposes")])],-1)),t[6]||(t[6]=e("h3",{id:"step-2-plan-feature-implementation",tabindex:"-1"},[n("Step 2: Plan Feature Implementation "),e("a",{class:"header-anchor",href:"#step-2-plan-feature-implementation","aria-label":"Permalink to “Step 2: Plan Feature Implementation”"},"​")],-1)),d(o),t[7]||(t[7]=e("p",null,[e("strong",null,"Why"),n(" Think through the plan before writing code.")],-1)),t[8]||(t[8]=e("p",null,"Continue in Plan Agent:",-1)),t[9]||(t[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`I want to add an "email notification" feature to this project that sends a welcome email after a user successfully registers.
Please help me analyze:
1. Which files need to be modified
2. Recommended implementation approaches (2-3 options)
3. Pros and cons of each approach
4. Which approach you recommend and why`)])],-1)),t[10]||(t[10]=e("h3",{id:"step-3-implement-feature-step-by-step",tabindex:"-1"},[n("Step 3: Implement Feature Step by Step "),e("a",{class:"header-anchor",href:"#step-3-implement-feature-step-by-step","aria-label":"Permalink to “Step 3: Implement Feature Step by Step”"},"​")],-1)),t[11]||(t[11]=e("p",null,[e("strong",null,"Why"),n(" Break complex features into small steps to reduce the risk of errors.")],-1)),t[12]||(t[12]=e("p",null,"Switch to Build Agent:",-1)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Implement the email notification feature according to approach 1:

Step 1: Create email service module src/services/email.ts
- Use nodemailer
- Support SMTP configuration
- Export sendEmail function`)])],-1)),t[14]||(t[14]=e("p",null,"After confirming Step 1 is complete:",-1)),t[15]||(t[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Step 2: Call email service after successful user registration
@src/controllers/auth.ts Add logic to send welcome email after successful register function`)])],-1)),t[16]||(t[16]=e("h3",{id:"step-4-locate-bug",tabindex:"-1"},[n("Step 4: Locate Bug "),e("a",{class:"header-anchor",href:"#step-4-locate-bug","aria-label":"Permalink to “Step 4: Locate Bug”"},"​")],-1)),t[17]||(t[17]=e("p",null,[e("strong",null,"Why"),n(" Understand the problem before fixing the bug.")],-1)),t[18]||(t[18]=e("p",null,"Switch to Plan Agent:",-1)),t[19]||(t[19]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Users report "page keeps loading after login", please help me analyze:
1. What are the possible causes
2. How to investigate (give specific steps)
3. Which file is most likely to have the problem`)])],-1)),t[20]||(t[20]=e("h3",{id:"step-5-fix-bug",tabindex:"-1"},[n("Step 5: Fix Bug "),e("a",{class:"header-anchor",href:"#step-5-fix-bug","aria-label":"Permalink to “Step 5: Fix Bug”"},"​")],-1)),t[21]||(t[21]=e("p",null,[e("strong",null,"Why"),n(" Fix only after you've clearly located the issue.")],-1)),t[22]||(t[22]=e("p",null,"Switch to Build Agent:",-1)),t[23]||(t[23]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@src/hooks/useAuth.ts Problem located here:
- isLoading is not reset to false after successful login
- Please fix this issue`)])],-1)),t[24]||(t[24]=e("hr",null,null,-1)),t[25]||(t[25]=e("h2",{id:"📋-magic-prompts",tabindex:"-1"},[n("📋 Magic Prompts "),e("a",{class:"header-anchor",href:"#📋-magic-prompts","aria-label":"Permalink to “📋 Magic Prompts”"},"​")],-1)),t[26]||(t[26]=e("h3",{id:"🔍-code-explanation",tabindex:"-1"},[n("🔍 Code Explanation "),e("a",{class:"header-anchor",href:"#🔍-code-explanation","aria-label":"Permalink to “🔍 Code Explanation”"},"​")],-1)),t[27]||(t[27]=e("blockquote",null,[e("p",null,"Expected result: Clear explanation of code logic, helping understand unfamiliar code")],-1)),t[28]||(t[28]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a senior technical documentation engineer, skilled at explaining complex code in simple terms.

## Task
Explain the code provided by the user, helping them understand its functionality, principles, and potential issues.

## Input Information
### Required
- Programming Language: [Language]
- Code: @[file path] or [paste code]

### Optional
- Reader Level: [Beginner/Intermediate/Advanced] (Default: Intermediate)
- Focus Areas: [Specific aspects you want to understand?]

## Output Format
1. **One-line Summary** (≤50 characters)
2. **Block-by-block Explanation**: Code snippet (with line numbers) + Purpose + Principle
3. **Key Concepts**: Design patterns/algorithms/language features involved
4. **Potential Issues**: 🔴Critical / 🟡Suggested / 🟢Tip
5. **Usage Example**: How to call this code

## Constraints
- ✅ Explain progressively, from shallow to deep
- ✅ Add analogies for beginners
- ✅ Keep technical terms in English, explain in native language
- ❌ Avoid only saying "what it does" without "why"
- ❌ Avoid assuming the reader knows advanced concepts`)])],-1)),t[29]||(t[29]=e("h3",{id:"⚡-feature-implementation",tabindex:"-1"},[n("⚡ Feature Implementation "),e("a",{class:"header-anchor",href:"#⚡-feature-implementation","aria-label":"Permalink to “⚡ Feature Implementation”"},"​")],-1)),t[30]||(t[30]=e("blockquote",null,[e("p",null,"Expected result: Step-by-step implementation of new features, each step verifiable")],-1)),t[31]||(t[31]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a full-stack developer, skilled at translating requirements into runnable code.

## Task
Implement complete features step by step based on requirements description.

## Input Information
### Required
- Requirements Description: [Describe the feature you want]
- Programming Language: [Language]

### Optional
- Framework: [Framework?]
- Related Dependencies: [Installed dependencies?]
- Constraints: [Performance/compatibility requirements?]

## Output Format
Each step outputs:
1. **Step Goal**: What this step accomplishes
2. **Code Implementation**: Complete runnable code
3. **Verification Method**: How to confirm this step succeeded
4. **Next Step Preview**: What comes next

## Constraints
- ✅ Code must be directly runnable
- ✅ Include necessary error handling
- ✅ Clear and standardized naming
- ✅ Wait for user confirmation after each step before continuing
- ❌ Avoid outputting too much code at once
- ❌ Avoid over-engineering`)])],-1)),t[32]||(t[32]=e("h3",{id:"🐛-bug-localization",tabindex:"-1"},[n("🐛 Bug Localization "),e("a",{class:"header-anchor",href:"#🐛-bug-localization","aria-label":"Permalink to “🐛 Bug Localization”"},"​")],-1)),t[33]||(t[33]=e("blockquote",null,[e("p",null,"Expected result: Systematic analysis and root cause identification")],-1)),t[34]||(t[34]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a senior troubleshooting engineer, skilled at reverse-engineering root causes from symptoms. Clear troubleshooting approach and rigorous hypothesis testing.

## Task
Analyze the bug described by the user, locate possible causes, and provide fix solutions.

## Input Information
### Required
- Problem Description: [Describe the issue phenomenon]
- Expected Behavior: [What it should be]
- Actual Behavior: [What it actually is]

### Optional
- Reproduction Steps: [How to reproduce?]
- Related Code: @[file path?]
- Error Message: [Error logs?]
- Environment Info: [Runtime environment?]
- Attempted Solutions: [What have you tried?]

## Output Format
1. **Problem Summary**: One-sentence summary of core symptoms
2. **Root Cause Analysis**: Sorted by likelihood from high to low
   | Rank | Possible Cause | Likelihood | Evidence |
3. **Verification Methods**: Verification steps for each cause
4. **Fix Solutions**:
   - Temporary Fix: Quick stopgap
   - Permanent Fix: Thorough repair
   - Prevention Measures: Avoid recurrence

## Constraints
- ✅ Sort by likelihood, verify most likely first
- ✅ Verification methods must be specific and executable
- ✅ Fix solutions must consider side effects
- ❌ Avoid making too many changes at once
- ❌ Avoid giving answers without explaining reasons`)])],-1)),t[35]||(t[35]=a('<hr><h2 id="agent-switching-and-session-navigation-scenario-course-quick-reference" tabindex="-1">Agent Switching and Session Navigation (Scenario Course Quick Reference) <a class="header-anchor" href="#agent-switching-and-session-navigation-scenario-course-quick-reference" aria-label="Permalink to “Agent Switching and Session Navigation (Scenario Course Quick Reference)”">​</a></h2><ul><li>Main Agents (<code>build</code> / <code>plan</code>): Switch with <code>Tab</code>; reverse switch with <code>Shift+Tab</code>.</li><li>Agent List: <code>&lt;leader&gt;a</code> (default leader is <code>ctrl+x</code>, i.e., press <code>ctrl+x</code> then <code>a</code>).</li><li>Sub-session Navigation: <code>&lt;leader&gt;right</code> / <code>&lt;leader&gt;left</code> / <code>&lt;leader&gt;up</code>.</li></ul><p>For a complete keybinding list: see <a href="./../5-advanced/06b-keybinds.html">5.6b Keybindings</a>.</p><hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><blockquote><p>All items must be completed before proceeding</p></blockquote><ul><li>[ ] Used @explore to understand project structure</li><li>[ ] Used Plan Agent to create feature plan</li><li>[ ] Used Build Agent to implement features step by step</li><li>[ ] Know how to use Plan+Build to fix bugs</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>AI starts changing code immediately</td><td>In Build Agent</td><td>Switch to Plan Agent first for analysis</td></tr><tr><td>Feature works but breaks other things</td><td>Didn&#39;t implement step by step</td><td>Confirm after each step before continuing</td></tr><tr><td>Bug location inaccurate</td><td>Insufficient information</td><td>Provide complete error messages and reproduction steps</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Using Plan Agent to understand code and create plans</li><li>Using Build Agent to implement features step by step</li><li>Using Plan→Build workflow to fix bugs</li><li>Combining @explore and @file references</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>In the next lesson, we&#39;ll learn about code refactoring and test generation to improve code quality.</p></blockquote><hr><p>📚 <strong>More Complete Templates</strong>: <a href="./../appendix/prompts.html">Prompt Template Library</a></p>',20))])}const k=i(p,[["render",c]]);export{v as __pageData,k as default};
