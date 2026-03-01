import{_ as o,I as r,c as i,o as l,a5 as s,j as e,J as d,a as n,aI as c}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"B2 Refactoring & Testing","description":"Use AI to identify code smells, safely refactor code structure, and automatically generate test cases to improve code quality.","frontmatter":{"title":"B2 Refactoring & Testing","subtitle":"Identify code smells, safe refactoring, test generation","course":"OpenCode Practical Course","stage":"Stage 4","lesson":"B2","duration":"20 min","practice":"25 min","level":"Advanced","description":"Use AI to identify code smells, safely refactor code structure, and automatically generate test cases to improve code quality.","tags":["Refactoring","Testing","Code Quality"],"prerequisite":["B1 Daily Development"]},"headers":[],"relativePath":"en/4-scenarios/coder-refactor.md","filePath":"en/4-scenarios/coder-refactor.md","lastUpdated":1772014034000}'),u={name:"en/4-scenarios/coder-refactor.md"};function p(g,t,m,f,h,y){const a=r("AdInArticle");return l(),i("div",null,[t[0]||(t[0]=s('<h1 id="b2-refactoring-testing" tabindex="-1">B2 Refactoring &amp; Testing <a class="header-anchor" href="#b2-refactoring-testing" aria-label="Permalink to “B2 Refactoring &amp; Testing”">​</a></h1><blockquote><p>💡 <strong>One-liner</strong>: Use AI to identify code smells, refactor safely, and automatically generate test cases.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+c+'" alt="B2 Refactoring &amp; Testing Notes" data-zoom-src="/images/4-scenarios/coder-refactor-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Let AI identify &quot;code smells&quot; in your code</li><li>Safely refactor code</li><li>Automatically generate unit tests</li><li>Analyze edge cases and supplement tests</li></ul><hr><h2 id="your-current-struggles" tabindex="-1">Your Current Struggles <a class="header-anchor" href="#your-current-struggles" aria-label="Permalink to “Your Current Struggles”">​</a></h2><ul><li>Code gets messier over time, but you&#39;re afraid to change it</li><li>Want to refactor but lack test coverage</li><li>Too few test cases, can&#39;t improve coverage</li></ul><hr><h2 id="when-to-use-this-technique" tabindex="-1">When to Use This Technique <a class="header-anchor" href="#when-to-use-this-technique" aria-label="Permalink to “When to Use This Technique”">​</a></h2><ul><li>When you need to: Improve code quality and test coverage</li><li>And don&#39;t want to: Manually write numerous test cases</li></ul><hr><h2 id="🎒-before-you-start" tabindex="-1">🎒 Before You Start <a class="header-anchor" href="#🎒-before-you-start" aria-label="Permalink to “🎒 Before You Start”">​</a></h2><blockquote><p>Make sure you&#39;ve completed the following:</p></blockquote><ul><li>[ ] Completed <a href="./coder-daily.html">B1 Daily Development</a></li><li>[ ] Have a code file that needs refactoring or testing</li></ul><hr><h2 id="core-concepts" tabindex="-1">Core Concepts <a class="header-anchor" href="#core-concepts" aria-label="Permalink to “Core Concepts”">​</a></h2><h3 id="safe-refactoring-in-three-steps" tabindex="-1">Safe Refactoring in Three Steps <a class="header-anchor" href="#safe-refactoring-in-three-steps" aria-label="Permalink to “Safe Refactoring in Three Steps”">​</a></h3>',21)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"1. Tests first → 2. Small refactoring steps → 3. Tests pass")])],-1)),t[2]||(t[2]=s('<h3 id="code-smells-overview" tabindex="-1">Code Smells Overview <a class="header-anchor" href="#code-smells-overview" aria-label="Permalink to “Code Smells Overview”">​</a></h3><table tabindex="0"><thead><tr><th>Code Smell</th><th>Symptoms (Experience Signals)</th><th>Refactoring Direction</th></tr></thead><tbody><tr><td>Long Function</td><td>Can&#39;t see the whole thing at a glance, mixing multiple concerns</td><td>Extract function / Split responsibilities</td></tr><tr><td>Too Many Parameters</td><td>Callers struggle to remember what each parameter means</td><td>Introduce Parameter Object / Split function</td></tr><tr><td>Duplicated Code</td><td>Similar logic appears in multiple places</td><td>Extract common function</td></tr><tr><td>Deep Nesting</td><td>Reading code requires repeatedly tracing back through conditions</td><td>Early return / Extract conditional logic</td></tr><tr><td>Unclear Naming</td><td>Can&#39;t tell purpose from the name</td><td>Rename</td></tr></tbody></table><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2>',4)),d(a),t[3]||(t[3]=e("h3",{id:"step-1-identify-code-smells",tabindex:"-1"},[n("Step 1: Identify Code Smells "),e("a",{class:"header-anchor",href:"#step-1-identify-code-smells","aria-label":"Permalink to “Step 1: Identify Code Smells”"},"​")],-1)),t[4]||(t[4]=e("p",null,[e("strong",null,"Why"),n(" Diagnose first, then treat.")],-1)),t[5]||(t[5]=e("p",null,"Switch to Plan Agent:",-1)),t[6]||(t[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@src/utils/data.ts Please analyze the code quality of this file:
1. List discovered "code smells"
2. Severity of each issue (High/Medium/Low)
3. Recommended refactoring approaches
4. Priority suggestions for refactoring`)])],-1)),t[7]||(t[7]=e("h3",{id:"step-2-generate-tests-first",tabindex:"-1"},[n("Step 2: Generate Tests First "),e("a",{class:"header-anchor",href:"#step-2-generate-tests-first","aria-label":"Permalink to “Step 2: Generate Tests First”"},"​")],-1)),t[8]||(t[8]=e("p",null,[e("strong",null,"Why"),n(" Tests enable safe refactoring.")],-1)),t[9]||(t[9]=e("p",null,"Switch to Build Agent:",-1)),t[10]||(t[10]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@src/utils/data.ts Generate unit tests for this file:
1. Use Vitest framework
2. Cover all exported functions
3. Include normal cases and edge cases
4. Save as src/utils/data.test.ts`)])],-1)),t[11]||(t[11]=e("h3",{id:"step-3-safe-refactoring",tabindex:"-1"},[n("Step 3: Safe Refactoring "),e("a",{class:"header-anchor",href:"#step-3-safe-refactoring","aria-label":"Permalink to “Step 3: Safe Refactoring”"},"​")],-1)),t[12]||(t[12]=e("p",null,[e("strong",null,"Why"),n(" Small steps, verify each step.")],-1)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@src/utils/data.ts Please refactor the parseUserData function:
- Issue: Function is too long (50 lines), single responsibility violation
- Requirements: Split into 3 smaller functions
- Keep the public interface unchanged
- Run tests after refactoring to confirm`)])],-1)),t[14]||(t[14]=e("h3",{id:"step-4-supplement-edge-case-tests",tabindex:"-1"},[n("Step 4: Supplement Edge Case Tests "),e("a",{class:"header-anchor",href:"#step-4-supplement-edge-case-tests","aria-label":"Permalink to “Step 4: Supplement Edge Case Tests”"},"​")],-1)),t[15]||(t[15]=e("p",null,[e("strong",null,"Why"),n(" Edge cases are often bug-prone areas.")],-1)),t[16]||(t[16]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@src/utils/data.ts @src/utils/data.test.ts

Analyze the code's edge cases and supplement the following tests:
1. Empty inputs (null, undefined, empty arrays)
2. Extreme values (very large numbers, very long strings)
3. Type errors (passing wrong types)
4. Concurrency scenarios (if async operations exist)`)])],-1)),t[17]||(t[17]=e("h3",{id:"step-5-run-tests-to-verify",tabindex:"-1"},[n("Step 5: Run Tests to Verify "),e("a",{class:"header-anchor",href:"#step-5-run-tests-to-verify","aria-label":"Permalink to “Step 5: Run Tests to Verify”"},"​")],-1)),t[18]||(t[18]=e("p",null,[e("strong",null,"Why"),n(" Confirm refactoring didn't break functionality.")],-1)),t[19]||(t[19]=e("blockquote",null,[e("p",null,[n("In OpenCode TUI, messages starting with "),e("code",null,"!"),n(" execute shell commands and bring output into the conversation: "),e("a",{href:"https://opencode.ai/docs/tui",target:"_blank",rel:"noreferrer"},"https://opencode.ai/docs/tui")])],-1)),t[20]||(t[20]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"!npm test src/utils/data.test.ts")])],-1)),t[21]||(t[21]=e("p",null,[e("strong",null,"You should see"),n(": All tests pass")],-1)),t[22]||(t[22]=e("hr",null,null,-1)),t[23]||(t[23]=e("h2",{id:"📋-magic-prompts",tabindex:"-1"},[n("📋 Magic Prompts "),e("a",{class:"header-anchor",href:"#📋-magic-prompts","aria-label":"Permalink to “📋 Magic Prompts”"},"​")],-1)),t[24]||(t[24]=e("h3",{id:"✅-code-review",tabindex:"-1"},[n("✅ Code Review "),e("a",{class:"header-anchor",href:"#✅-code-review","aria-label":"Permalink to “✅ Code Review”"},"​")],-1)),t[25]||(t[25]=e("blockquote",null,[e("p",null,"Expected outcome: Comprehensive analysis of code quality issues with improvement suggestions")],-1)),t[26]||(t[26]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a Tech Lead responsible for code quality. Your review style is strict but constructive.

## Task
Perform a comprehensive review of submitted code, identify issues, and provide improvement suggestions.

## Input
### Required
- Programming Language: [Language]
- Code: @[File Path] or [Paste Code]

### Optional
- Review Focus: [What aspects to focus on?]
- Project Context: [What is the code's context?]

## Review Dimensions
1. **Code Quality**: Naming conventions, code structure, readability, duplicated code
2. **Potential Issues**: Bug risks, edge cases, error handling, performance issues
3. **Security Concerns**: Input validation, sensitive information, injection risks
4. **Best Practices**: Design patterns, SOLID principles, test coverage

## Output Format
### Review Summary
- **Code Rating**: A(Excellent)/B(Good)/C(Average)/D(Needs Refactoring)
- **One-liner Comment**
- **Must Fix Before Merge**: Yes/No

### Issues List
- 🔴 **Critical Issues**: \`[File:Line]\` Issue + Risk + Suggestion
- 🟡 **Suggested Improvements**: Issues recommended to fix
- 🟢 **Strengths**: Things worth keeping

## Constraints
- ✅ Issues should be specific to line numbers
- ✅ Every issue should have a fix suggestion
- ✅ Acknowledge what's done well
- ❌ Avoid replacing objective standards with subjective preferences
- ❌ Avoid criticism without solutions`)])],-1)),t[27]||(t[27]=e("h3",{id:"🧪-test-generation",tabindex:"-1"},[n("🧪 Test Generation "),e("a",{class:"header-anchor",href:"#🧪-test-generation","aria-label":"Permalink to “🧪 Test Generation”"},"​")],-1)),t[28]||(t[28]=e("blockquote",null,[e("p",null,"Expected outcome: Generate comprehensive unit tests covering edge cases")],-1)),t[29]||(t[29]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a QA Engineer skilled at designing comprehensive test cases covering normal flows and edge cases.

## Task
Generate unit tests for the function or module provided by the user.

## Input
### Required
- Programming Language: [Language]
- Code: @[File Path] or [Paste Code]

### Optional
- Test Framework: [Jest/Vitest/Pytest/JUnit?] (Default: auto-detect)
- Test Style: [BDD describe/it style?]

## Output Format
Use AAA Pattern (Arrange-Act-Assert), covering:
1. **Happy Path** (Normal flow)
2. **Edge Cases** (Null values, extremes, boundary points)
3. **Exception Cases** (Invalid input, thrown exceptions)
4. **Async Operations** (If Promise/async exists)

Each test case should include:
- Clear naming (describing test intent)
- Necessary comments (explaining test scenario)

## Constraints
- ✅ Test case names should clearly express test intent
- ✅ Cover main edge cases
- ✅ Test code should be directly runnable
- ❌ Avoid testing implementation details
- ❌ Avoid dependencies between test cases`)])],-1)),t[30]||(t[30]=e("h3",{id:"🔧-refactoring-suggestions",tabindex:"-1"},[n("🔧 Refactoring Suggestions "),e("a",{class:"header-anchor",href:"#🔧-refactoring-suggestions","aria-label":"Permalink to “🔧 Refactoring Suggestions”"},"​")],-1)),t[31]||(t[31]=e("blockquote",null,[e("p",null,"Expected outcome: Provide safe refactoring plan to reduce change risk")],-1)),t[32]||(t[32]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a Refactoring Expert skilled at identifying code smells and providing safe refactoring plans.

## Task
Analyze code issues and provide safe refactoring steps and suggestions.

## Input
### Required
- Code: @[File Path] or [Paste Code]

### Optional
- Known Issues: [What problems have you noticed?]
- Refactoring Goal: [What effect do you want to achieve?]

## Output Format
1. **Current Problem Analysis**
   - Discovered code smells (Long Function/Too Many Parameters/Deep Nesting/Duplicated Code/Unclear Naming)
   - Severity of each issue (High/Medium/Low)

2. **Recommended Refactoring Steps** (in order)
   - What to do in each step
   - Risk assessment for each step
   - How to verify step success

3. **Tests to Add**
   - Tests that should exist before refactoring
   - Tests to add after refactoring

4. **Expected Results After Refactoring**
   - Code quality improvements
   - Maintainability improvements

## Constraints
- ✅ Small refactoring steps, each verifiable
- ✅ Keep public interface unchanged
- ✅ Tests before refactoring
- ❌ Avoid changing too much at once
- ❌ Avoid changing business logic`)])],-1)),t[33]||(t[33]=s('<hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><blockquote><p>All items must pass to continue</p></blockquote><ul><li>[ ] Identified code smells using AI</li><li>[ ] Generated unit tests</li><li>[ ] Completed safe refactoring</li><li>[ ] All tests pass</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Functionality broken after refactoring</td><td>No tests written first</td><td>Generate tests before refactoring</td></tr><tr><td>Low test coverage</td><td>Only testing normal cases</td><td>Add edge case and exception tests</td></tr><tr><td>Inaccurate smell detection</td><td>Code snippet too small</td><td>Give AI complete file context</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Using AI to identify code smells</li><li>Safe refactoring flow with tests first</li><li>Automatically generating unit tests</li><li>Analyzing and supplementing edge case tests</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next lesson we&#39;ll learn about documentation automation and Git collaboration techniques.</p></blockquote><hr><p>📚 <strong>More Complete Templates</strong>: <a href="./../appendix/prompts.html">Prompt Template Library</a></p>',16))])}const C=o(u,[["render",p]]);export{v as __pageData,C as default};
