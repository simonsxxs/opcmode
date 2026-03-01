import{_ as o,c as l,o as i,a5 as n,j as e,a as t,b2 as r}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.3c Skill Advanced Patterns","description":"Learn Skill-MCP collaboration patterns, five workflow patterns, and distribution strategies to build enterprise-grade knowledge packages.","frontmatter":{"title":"5.3c Skill Advanced Patterns","subtitle":"MCP Collaboration, Workflow Patterns & Distribution","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.3c","duration":"25 min","practice":"30 min","level":"Advanced","description":"Learn Skill-MCP collaboration patterns, five workflow patterns, and distribution strategies to build enterprise-grade knowledge packages.","tags":["Skill","MCP","Workflow Patterns","Distribution"],"prerequisite":["5.3b Skill Advanced","5.7a MCP Basics"]},"headers":[],"relativePath":"en/5-advanced/03c-skills-patterns.md","filePath":"en/5-advanced/03c-skills-patterns.md","lastUpdated":1772014034000}'),s={name:"en/5-advanced/03c-skills-patterns.md"};function c(d,a,p,u,h,m){return i(),l("div",null,[...a[0]||(a[0]=[n('<h1 id="_5-3c-skill-advanced-patterns" tabindex="-1">5.3c Skill Advanced Patterns <a class="header-anchor" href="#_5-3c-skill-advanced-patterns" aria-label="Permalink to “5.3c Skill Advanced Patterns”">​</a></h1><blockquote><p>This lesson dives into advanced Skill applications: MCP collaboration, five workflow patterns, and distribution strategies to help you build enterprise-grade knowledge packages.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key concepts from this lesson:</p><p><img src="'+r+'" alt="Skill Advanced Patterns Notes" data-zoom-src="/images/5-advanced/skills-patterns-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Understand the Skill-MCP collaboration relationship (Kitchen vs. Recipe)</li><li>Design five workflow patterns: Sequential Orchestration, Multi-MCP Coordination, Iterative Optimization, Context Selection, Domain Intelligence</li><li>Choose appropriate Skill design strategies based on use case classification</li><li>Distribute and share Skills via GitHub and API</li></ul><hr><h2 id="your-current-pain-points" tabindex="-1">Your Current Pain Points <a class="header-anchor" href="#your-current-pain-points" aria-label="Permalink to “Your Current Pain Points”">​</a></h2><p>You&#39;ve learned how to create Skills, but in practice you encounter these issues:</p>',11),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Scenario 1: Company has 5 MCP services (Notion, Linear, Slack, Drive, GitHub)

User: Help me create a new project

AI: [Called Notion MCP, but didn't create Linear tasks or notify Slack]`)])],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Scenario 2: Skill can only do single-step operations

User: Help me generate a report and auto-optimize until quality standards are met

AI: I can only generate reports, what does "optimize" mean?`)])],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Scenario 3: Team wants to share Skills

Developer A: I put the Skill on GitHub
Developer B: How do I use it? Do I need to download manually every time?`)])],-1),n('<p><strong>Root Cause</strong>: Skill is not just a &quot;knowledge package&quot;, it&#39;s a &quot;workflow orchestrator&quot;. You need to understand how it collaborates with MCP and how to design complex workflow patterns.</p><hr><h2 id="when-to-use-this" tabindex="-1">When to Use This <a class="header-anchor" href="#when-to-use-this" aria-label="Permalink to “When to Use This”">​</a></h2><ul><li>You have multiple MCP services that need coordination for complex tasks</li><li>You need to design multi-step, iterative workflows</li><li>You want to share Skills with your team or community</li></ul><hr><h2 id="🎒-prerequisites" tabindex="-1">🎒 Prerequisites <a class="header-anchor" href="#🎒-prerequisites" aria-label="Permalink to “🎒 Prerequisites”">​</a></h2><ul><li>[ ] Completed <a href="./03b-skills-advanced.html">5.3b Skill Advanced</a></li><li>[ ] Learned <a href="./07a-mcp-basics.html">5.7a MCP Basics</a></li><li>[ ] Have a working MCP service (for practice)</li></ul><hr><h2 id="core-concepts" tabindex="-1">Core Concepts <a class="header-anchor" href="#core-concepts" aria-label="Permalink to “Core Concepts”">​</a></h2><h3 id="skill-mcp-kitchen-and-recipe" tabindex="-1">Skill + MCP: Kitchen and Recipe <a class="header-anchor" href="#skill-mcp-kitchen-and-recipe" aria-label="Permalink to “Skill + MCP: Kitchen and Recipe”">​</a></h3><p>Think of the MCP and Skill relationship as a professional kitchen:</p>',11),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────┐
│                     Professional Kitchen (MCP)                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ Stove    │  │ Fridge   │  │ Knives   │  │ Spice    │            │
│  │ (Tools)  │  │ (Data)   │  │ (Actions)│  │ (Resources)│          │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                         Recipe (Skill)                              │
│                                                                     │
│  "Kung Pao Chicken"                                                 │
│  1. Get 200g chicken from fridge                                    │
│  2. Dice with knives                                                │
│  3. Turn stove to high heat, add oil...                             │
│  4. Add spices: Sichuan peppercorn, dried chili...                  │
└─────────────────────────────────────────────────────────────────────┘`)])],-1),n('<p><strong>MCP Provides</strong>:</p><ul><li>Connections to various services (Notion, Linear, GitHub...)</li><li>Real-time data access</li><li>Tool invocation capabilities</li></ul><p><strong>Skill Provides</strong>:</p><ul><li>Best practices for using these tools</li><li>Multi-step workflow orchestration</li><li>Domain expertise</li></ul><p><strong>MCP without Skill</strong> is like &quot;having a kitchen without recipes&quot; — users know what tools are available, but not how to combine them effectively.</p><h3 id="three-use-case-categories" tabindex="-1">Three Use Case Categories <a class="header-anchor" href="#three-use-case-categories" aria-label="Permalink to “Three Use Case Categories”">​</a></h3><p>Based on practical experience, Skills primarily serve three use cases:</p><table tabindex="0"><thead><tr><th>Category</th><th>Characteristics</th><th>Skill Focus</th></tr></thead><tbody><tr><td><strong>1. Document/Asset Creation</strong></td><td>Output quality priority</td><td>Embed style guides, templates, quality checklists</td></tr><tr><td><strong>2. Workflow Automation</strong></td><td>Multi-step consistency</td><td>Step definitions, validation gates, error handling</td></tr><tr><td><strong>3. MCP Enhancement</strong></td><td>Tool usage optimization</td><td>Coordinate MCP calls, embed domain knowledge</td></tr></tbody></table><hr><h2 id="five-workflow-patterns" tabindex="-1">Five Workflow Patterns <a class="header-anchor" href="#five-workflow-patterns" aria-label="Permalink to “Five Workflow Patterns”">​</a></h2><h3 id="pattern-1-sequential-workflow-orchestration" tabindex="-1">Pattern 1: Sequential Workflow Orchestration <a class="header-anchor" href="#pattern-1-sequential-workflow-orchestration" aria-label="Permalink to “Pattern 1: Sequential Workflow Orchestration”">​</a></h3><p><strong>Best For</strong>: Multi-step processes requiring fixed order execution</p><p><strong>Structure Example</strong>:</p>',13),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: customer-onboarding
description: End-to-end customer onboarding workflow. Handles account creation,
  payment setup, subscription management. Use when user says "onboard new customer",
  "setup subscription", "create account".
---

# Customer Onboarding Workflow

## Step 1: Create Account
Call MCP tool: \`create_customer\`
Parameters: name, email, company

## Step 2: Setup Payment
Call MCP tool: \`setup_payment_method\`
Wait for: Payment method verification

## Step 3: Create Subscription
Call MCP tool: \`create_subscription\`
Parameters: plan_id, customer_id (from Step 1)

## Step 4: Send Welcome Email
Call MCP tool: \`send_email\`
Template: welcome_email_template

## Failure Rollback
If any step fails:
1. Log failure reason
2. Rollback created resources
3. Notify administrator`)])],-1),n('<p><strong>Key Techniques</strong>:</p><ul><li>Clear step ordering</li><li>Define dependencies between steps (Step 3 needs Step 1 output)</li><li>Provide failure rollback instructions</li></ul><hr><h3 id="pattern-2-multi-mcp-coordination" tabindex="-1">Pattern 2: Multi-MCP Coordination <a class="header-anchor" href="#pattern-2-multi-mcp-coordination" aria-label="Permalink to “Pattern 2: Multi-MCP Coordination”">​</a></h3><p><strong>Best For</strong>: Workflows spanning multiple services</p><p><strong>Structure Example</strong>: Design to Development Handoff</p>',6),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: design-to-dev
description: Generate development tasks from design files. Use when user mentions
  "design handoff", "Figma to tasks".
---

# Design to Development Handoff

## Phase 1: Design Export (Figma MCP)

1. Export design assets from Figma
2. Generate design specification document
3. Create asset manifest

## Phase 2: Asset Storage (Drive MCP)

1. Create project folder in Drive
2. Upload all assets
3. Generate share links

## Phase 3: Task Creation (Linear MCP)

1. Create development tasks
2. Attach asset links to tasks
3. Assign to engineering team

## Phase 4: Notification (Slack MCP)

1. Post handoff summary in #engineering
2. Include asset links and task references`)])],-1),n('<p><strong>Key Techniques</strong>:</p><ul><li>Clear phase separation</li><li>Define data passing between phases</li><li>Validate before proceeding to next phase</li></ul><hr><h3 id="pattern-3-iterative-optimization" tabindex="-1">Pattern 3: Iterative Optimization <a class="header-anchor" href="#pattern-3-iterative-optimization" aria-label="Permalink to “Pattern 3: Iterative Optimization”">​</a></h3><p><strong>Best For</strong>: Output quality requires multiple improvement cycles</p><p><strong>Structure Example</strong>: Report Generation</p>',6),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: report-generator
description: Generate high-quality reports, auto-iterate until standards are met.
---

# Iterative Report Generation

## Initial Draft

1. Fetch data via MCP
2. Generate first version of report
3. Save to temporary file

## Quality Check

Run validation script: \`scripts/check_report.py\`
Check items:
- Missing sections
- Format inconsistencies
- Data validation errors

## Optimization Loop
`)])],-1),e("p",null,"WHILE quality not met: 1. Fix identified issues 2. Regenerate affected sections 3. Validate again",-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
## Finalization

1. Apply final formatting
2. Generate summary
3. Save final version`)])],-1),n('<p><strong>Key Techniques</strong>:</p><ul><li>Clear quality standards</li><li>Iterative improvement loop</li><li>Know when to stop iterating</li></ul><hr><h3 id="pattern-4-context-aware-tool-selection" tabindex="-1">Pattern 4: Context-Aware Tool Selection <a class="header-anchor" href="#pattern-4-context-aware-tool-selection" aria-label="Permalink to “Pattern 4: Context-Aware Tool Selection”">​</a></h3><p><strong>Best For</strong>: Same goal, different tools based on context</p><p><strong>Structure Example</strong>: Smart File Storage</p>',6),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: smart-storage
description: Automatically select best storage location based on file type and purpose.
---

# Smart File Storage

## Decision Tree

1. Check file type and size
2. Determine best storage location:
   - Large files (>10MB) → Cloud storage MCP
   - Collaborative docs → Notion/Docs MCP
   - Code files → GitHub MCP
   - Temporary files → Local storage

## Execute Storage

Based on decision:
- Call corresponding MCP tool
- Apply service-specific metadata
- Generate access link

## User Feedback

Explain why that storage location was chosen`)])],-1),n('<p><strong>Key Techniques</strong>:</p><ul><li>Clear decision criteria</li><li>Provide fallback options</li><li>Be transparent with user (explain reasoning)</li></ul><hr><h3 id="pattern-5-domain-intelligence" tabindex="-1">Pattern 5: Domain Intelligence <a class="header-anchor" href="#pattern-5-domain-intelligence" aria-label="Permalink to “Pattern 5: Domain Intelligence”">​</a></h3><p><strong>Best For</strong>: Skill provides expertise beyond tool access</p><p><strong>Structure Example</strong>: Financial Compliance</p>',6),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: payment-compliance
description: Payment processing with compliance checks. Use for cross-border
  payments, large transactions.
---

# Compliant Payment Processing

## Pre-Processing (Compliance Check)

1. Get transaction details via MCP
2. Apply compliance rules:
   - Check sanctions list
   - Verify jurisdiction allowed
   - Assess risk level
3. Record compliance decision

## Processing

IF compliance passed:
    - Call payment processing MCP tool
    - Apply appropriate fraud checks
    - Process transaction
ELSE:
    - Flag for manual review
    - Create compliance case

## Audit Trail

- Log all compliance checks
- Record processing decisions
- Generate audit report`)])],-1),n('<p><strong>Key Techniques</strong>:</p><ul><li>Embed domain knowledge before action</li><li>Compliance before operations</li><li>Complete documentation trail</li></ul><hr><h2 id="distribution-sharing" tabindex="-1">Distribution &amp; Sharing <a class="header-anchor" href="#distribution-sharing" aria-label="Permalink to “Distribution &amp; Sharing”">​</a></h2><p>OpenCode provides multiple Skill distribution methods, from local to remote.</p><h3 id="opencode-skill-search-path" tabindex="-1">OpenCode Skill Search Path <a class="header-anchor" href="#opencode-skill-search-path" aria-label="Permalink to “OpenCode Skill Search Path”">​</a></h3><p>OpenCode searches for Skills in the following order:</p>',7),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────┐
│ Search Priority (later loaded overrides earlier)                     │
├─────────────────────────────────────────────────────────────────────┤
│ 1. Global External Directories                                       │
│    ~/.claude/skills/**/SKILL.md                                     │
│    ~/.agents/skills/**/SKILL.md                                     │
├─────────────────────────────────────────────────────────────────────┤
│ 2. Project External Directories (traverse from current dir to git)  │
│    .claude/skills/**/SKILL.md                                       │
│    .agents/skills/**/SKILL.md                                       │
├─────────────────────────────────────────────────────────────────────┤
│ 3. OpenCode Configuration Directories                               │
│    ~/.config/opencode/skill/**/SKILL.md                             │
│    .opencode/skill/**/SKILL.md                                      │
├─────────────────────────────────────────────────────────────────────┤
│ 4. Extra Paths from Config (skills.paths)                           │
├─────────────────────────────────────────────────────────────────────┤
│ 5. Remote URL Downloads (skills.urls)                               │
│    Cached to ~/.cache/opencode/skills/                              │
└─────────────────────────────────────────────────────────────────────┘`)])],-1),n('<h3 id="method-1-local-directory-placement" tabindex="-1">Method 1: Local Directory Placement <a class="header-anchor" href="#method-1-local-directory-placement" aria-label="Permalink to “Method 1: Local Directory Placement”">​</a></h3><p>Simplest approach is to place directly in standard directories:</p><table tabindex="0"><thead><tr><th>Directory</th><th>Scope</th><th>Description</th></tr></thead><tbody><tr><td><code>.opencode/skill/&lt;name&gt;/SKILL.md</code></td><td>Current project</td><td>Project-specific</td></tr><tr><td><code>~/.config/opencode/skill/&lt;name&gt;/SKILL.md</code></td><td>Global</td><td>Available to all projects</td></tr></tbody></table><h3 id="method-2-configure-extra-paths" tabindex="-1">Method 2: Configure Extra Paths <a class="header-anchor" href="#method-2-configure-extra-paths" aria-label="Permalink to “Method 2: Configure Extra Paths”">​</a></h3><p>Specify additional Skill directories in <code>opencode.json</code>:</p>',5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "skills": {
    "paths": [
      "~/my-skills",                    // Absolute path (~ expands to home)
      "../shared-skills",               // Relative to project directory
      "/opt/company-skills"             // Absolute path
    ]
  }
}`)])],-1),e("p",null,[e("strong",null,"Best For"),t(":")],-1),e("ul",null,[e("li",null,"Team-shared Skill library (on NAS or shared directory)"),e("li",null,"Reusing same Skills across multiple projects")],-1),e("h3",{id:"method-3-remote-url-discovery-recommended-for-teams-community",tabindex:"-1"},[t("Method 3: Remote URL Discovery (Recommended for Teams/Community) "),e("a",{class:"header-anchor",href:"#method-3-remote-url-discovery-recommended-for-teams-community","aria-label":"Permalink to “Method 3: Remote URL Discovery (Recommended for Teams/Community)”"},"​")],-1),e("p",null,"OpenCode supports automatic Skill downloads from remote servers:",-1),e("p",null,[e("strong",null,"Configuration"),t(":")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "skills": {
    "urls": [
      "https://your-company.com/.well-known/skills/",
      "https://skills.example.com/index.json"
    ]
  }
}`)])],-1),e("p",null,[e("strong",null,"Server-side index.json format"),t(":")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "skills": [
    {
      "name": "project-setup",
      "description": "Project initialization workflow",
      "files": [
        "SKILL.md",
        "references/templates.md",
        "references/checklist.md"
      ]
    },
    {
      "name": "code-review",
      "description": "Code review assistant",
      "files": [
        "SKILL.md"
      ]
    }
  ]
}`)])],-1),e("p",null,[e("strong",null,"Server directory structure"),t(":")],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`https://your-company.com/.well-known/skills/
├── index.json              # Skill index
├── project-setup/
│   ├── SKILL.md
│   └── references/
│       ├── templates.md
│       └── checklist.md
└── code-review/
    └── SKILL.md`)])],-1),n('<p>OpenCode will:</p><ol><li>Fetch <code>index.json</code></li><li>Download each Skill&#39;s files</li><li>Cache to <code>~/.cache/opencode/skills/</code></li></ol><p><strong>Best For</strong>:</p><ul><li>Enterprise internal Skill library</li><li>Open source community Skill distribution</li><li>Regularly updated Skill collections</li></ul><h3 id="method-4-git-repository-sharing" tabindex="-1">Method 4: Git Repository Sharing <a class="header-anchor" href="#method-4-git-repository-sharing" aria-label="Permalink to “Method 4: Git Repository Sharing”">​</a></h3><p>Combine Git repository with extra path configuration:</p><p><strong>Step 1</strong>: Create Skill repository</p>',7),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`my-skills/
├── README.md               # Human-readable documentation
├── skills/
│   ├── project-setup/
│   │   └── SKILL.md
│   └── code-review/
│       └── SKILL.md
└── examples/
    └── screenshots/`)])],-1),e("p",null,[e("strong",null,"Step 2"),t(": Team members clone and configure")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Clone to fixed location
git clone https://github.com/yourcompany/opencode-skills.git ~/opencode-skills

# Reference in project opencode.json`)])],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "skills": {
    "paths": ["~/opencode-skills/skills"]
  }
}`)])],-1),e("p",null,[e("strong",null,"Step 3"),t(": Update Skills")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`cd ~/opencode-skills
git pull`)])],-1),n('<h3 id="distribution-methods-comparison" tabindex="-1">Distribution Methods Comparison <a class="header-anchor" href="#distribution-methods-comparison" aria-label="Permalink to “Distribution Methods Comparison”">​</a></h3><table tabindex="0"><thead><tr><th>Method</th><th>Best For</th><th>Pros</th><th>Cons</th></tr></thead><tbody><tr><td><strong>Local Directory</strong></td><td>Personal use</td><td>Simple and direct</td><td>Not easy to share</td></tr><tr><td><strong>Extra Paths</strong></td><td>Team sharing (NAS)</td><td>Configure once, use everywhere</td><td>Requires filesystem sharing</td></tr><tr><td><strong>Remote URL</strong></td><td>Enterprise/Community</td><td>Auto-update, version management</td><td>Requires server setup</td></tr><tr><td><strong>Git Repository</strong></td><td>Open source/Team</td><td>Version control, easy collaboration</td><td>Requires manual pull updates</td></tr></tbody></table><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Remote Skill download fails</td><td>index.json format error</td><td>Check JSON format and files array</td></tr><tr><td>Skill not showing</td><td>Path config error</td><td>Verify <code>skills.paths</code> expands correctly</td></tr><tr><td>Same-name Skill conflict</td><td>Defined in multiple places</td><td>Later loaded overrides, check log warnings</td></tr><tr><td>MCP call fails but Skill loads</td><td>MCP service not connected</td><td>Check MCP config in <code>opencode.json</code></td></tr><tr><td>Multiple MCP calls in wrong order</td><td>No explicit step numbering</td><td>Use &quot;Step 1/2/3&quot; to define order clearly</td></tr><tr><td>Iterative optimization infinite loop</td><td>Missing termination condition</td><td>Add &quot;max N iterations&quot; or quality threshold</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><strong>Skill + MCP Collaboration</strong>: MCP is the kitchen (provides tools), Skill is the recipe (guides usage)</li><li><strong>Three Use Case Categories</strong>: Document creation, workflow automation, MCP enhancement</li><li><strong>Five Workflow Patterns</strong>: <ul><li>Sequential Orchestration: Fixed steps, dependency passing</li><li>Multi-MCP Coordination: Cross-service orchestration, phase separation</li><li>Iterative Optimization: Quality loop, termination conditions</li><li>Context Selection: Decision tree, transparent choices</li><li>Domain Intelligence: Compliance first, audit trail</li></ul></li><li><strong>OpenCode Distribution Methods</strong>: Local directory, extra paths, remote URL, Git repository</li></ol><hr><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to “Further Reading”">​</a></h2><ul><li><a href="https://github.com/anomalyco/opencode/tree/dev/packages/opencode/src/skill" target="_blank" rel="noreferrer">OpenCode Skill Source Code</a></li><li><a href="https://github.com/anomalyco/opencode/blob/dev/packages/docs/mcp.mdx" target="_blank" rel="noreferrer">OpenCode MCP Documentation</a></li></ul><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next lesson we&#39;ll learn about shortcut commands to trigger common tasks with a single keystroke.</p></blockquote><p><a href="./04-commands.html">Continue Learning: 5.4 Shortcut Commands</a></p><hr><h2 id="appendix-source-code-reference" tabindex="-1">Appendix: Source Code Reference <a class="header-anchor" href="#appendix-source-code-reference" aria-label="Permalink to “Appendix: Source Code Reference”">​</a></h2>',18),e("details",null,[e("summary",null,[e("strong",null,"Click to expand source code locations")]),e("blockquote",null,[e("p",null,"Last updated: 2026-02-14")]),e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"Feature"),e("th",null,"File Path"),e("th",null,"Lines")])]),e("tbody",null,[e("tr",null,[e("td",null,"Skill Loading & Discovery"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L52-L175",target:"_blank",rel:"noreferrer"},[e("code",null,"src/skill/skill.ts")])]),e("td",null,"52-175")]),e("tr",null,[e("td",null,"Skill Info Schema"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L18-L24",target:"_blank",rel:"noreferrer"},[e("code",null,"src/skill/skill.ts")])]),e("td",null,"18-24")]),e("tr",null,[e("td",null,"External Skill Directory Scanning"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L90-L122",target:"_blank",rel:"noreferrer"},[e("code",null,"src/skill/skill.ts")])]),e("td",null,"90-122")]),e("tr",null,[e("td",null,"Remote Skill Download"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/discovery.ts#L38-L96",target:"_blank",rel:"noreferrer"},[e("code",null,"src/skill/discovery.ts")])]),e("td",null,"38-96")]),e("tr",null,[e("td",null,"Skill URL Configuration"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L664-L668",target:"_blank",rel:"noreferrer"},[e("code",null,"src/config/config.ts")])]),e("td",null,"664-668")]),e("tr",null,[e("td",null,"MCP Connection Management"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/mcp/index.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"src/mcp/index.ts")])]),e("td",null,"Full file")])])]),e("p",null,[e("strong",null,"Key Constants"),t(":")]),e("ul",null,[e("li",null,[e("code",null,'EXTERNAL_DIRS = [".claude", ".agents"]'),t(": External Skill search directories")]),e("li",null,[e("code",null,'OPENCODE_SKILL_GLOB = "{skill,skills}/**/SKILL.md"'),t(": Skill file match pattern")])]),e("p",null,[e("strong",null,"Key Functions"),t(":")]),e("ul",null,[e("li",null,[e("code",null,"Skill.state()"),t(": Scan and load all Skills (includes external directory scanning logic)")]),e("li",null,[e("code",null,"Skill.get(name)"),t(": Get specific Skill")]),e("li",null,[e("code",null,"Skill.all()"),t(": Get all Skills list")]),e("li",null,[e("code",null,"Skill.dirs()"),t(": Get all Skill directories")]),e("li",null,[e("code",null,"Discovery.pull(url)"),t(": Download Skill from remote URL")])]),e("p",null,[e("strong",null,"Configuration Schema"),t(":")]),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`skills: {
  paths: string[]    // Additional Skill directory paths
  urls: string[]     // Remote Skill index URLs
}`)])])],-1)])])}const b=o(s,[["render",c]]);export{k as __pageData,b as default};
