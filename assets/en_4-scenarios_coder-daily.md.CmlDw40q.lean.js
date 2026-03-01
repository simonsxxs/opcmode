import{_ as i,I as l,c as r,o as s,a5 as a,j as e,J as d,a as n,aF as u}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"B1 Developer Daily","description":"Use Plan Agent to understand code, Build Agent to write new features, and AI to locate and fix bugs—boost your development efficiency.","frontmatter":{"title":"B1 Developer Daily","subtitle":"Understanding Code, Writing Features, Fixing Bugs","course":"OpenCode Practical Course","stage":"Stage 4","lesson":"B1","duration":"20 minutes","practice":"25 minutes","level":"Advanced","description":"Use Plan Agent to understand code, Build Agent to write new features, and AI to locate and fix bugs—boost your development efficiency.","tags":["Code","Development","Bug Fixing"],"prerequisite":["3.1 Plan vs Build"]},"headers":[],"relativePath":"en/4-scenarios/coder-daily.md","filePath":"en/4-scenarios/coder-daily.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/coder-daily.md"};function c(h,t,m,g,f,b){const o=l("AdInArticle");return s(),r("div",null,[t[0]||(t[0]=a("",21)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Understand Code(Plan) → Plan Solution(Plan) → Implement Feature(Build) → Verify & Test(Build)")])],-1)),t[2]||(t[2]=a("",10)),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@explore Help me understand the overall structure of this project, including:
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
- ❌ Avoid giving answers without explaining reasons`)])],-1)),t[35]||(t[35]=a("",20))])}const k=i(p,[["render",c]]);export{v as __pageData,k as default};
