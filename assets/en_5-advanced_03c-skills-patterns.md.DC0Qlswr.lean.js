import{_ as o,c as l,o as i,a5 as n,j as e,a as t,b2 as r}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.3c Skill Advanced Patterns","description":"Learn Skill-MCP collaboration patterns, five workflow patterns, and distribution strategies to build enterprise-grade knowledge packages.","frontmatter":{"title":"5.3c Skill Advanced Patterns","subtitle":"MCP Collaboration, Workflow Patterns & Distribution","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.3c","duration":"25 min","practice":"30 min","level":"Advanced","description":"Learn Skill-MCP collaboration patterns, five workflow patterns, and distribution strategies to build enterprise-grade knowledge packages.","tags":["Skill","MCP","Workflow Patterns","Distribution"],"prerequisite":["5.3b Skill Advanced","5.7a MCP Basics"]},"headers":[],"relativePath":"en/5-advanced/03c-skills-patterns.md","filePath":"en/5-advanced/03c-skills-patterns.md","lastUpdated":1772014034000}'),s={name:"en/5-advanced/03c-skills-patterns.md"};function c(d,a,p,u,h,m){return i(),l("div",null,[...a[0]||(a[0]=[n("",11),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Scenario 1: Company has 5 MCP services (Notion, Linear, Slack, Drive, GitHub)

User: Help me create a new project

AI: [Called Notion MCP, but didn't create Linear tasks or notify Slack]`)])],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Scenario 2: Skill can only do single-step operations

User: Help me generate a report and auto-optimize until quality standards are met

AI: I can only generate reports, what does "optimize" mean?`)])],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Scenario 3: Team wants to share Skills

Developer A: I put the Skill on GitHub
Developer B: How do I use it? Do I need to download manually every time?`)])],-1),n("",11),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────────┘`)])],-1),n("",13),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
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
3. Notify administrator`)])],-1),n("",6),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
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
2. Include asset links and task references`)])],-1),n("",6),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
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
3. Save final version`)])],-1),n("",6),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
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

Explain why that storage location was chosen`)])],-1),n("",6),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
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
- Generate audit report`)])],-1),n("",7),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────────┘`)])],-1),n("",5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
    └── SKILL.md`)])],-1),n("",7),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`my-skills/
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
git pull`)])],-1),n("",18),e("details",null,[e("summary",null,[e("strong",null,"Click to expand source code locations")]),e("blockquote",null,[e("p",null,"Last updated: 2026-02-14")]),e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"Feature"),e("th",null,"File Path"),e("th",null,"Lines")])]),e("tbody",null,[e("tr",null,[e("td",null,"Skill Loading & Discovery"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L52-L175",target:"_blank",rel:"noreferrer"},[e("code",null,"src/skill/skill.ts")])]),e("td",null,"52-175")]),e("tr",null,[e("td",null,"Skill Info Schema"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L18-L24",target:"_blank",rel:"noreferrer"},[e("code",null,"src/skill/skill.ts")])]),e("td",null,"18-24")]),e("tr",null,[e("td",null,"External Skill Directory Scanning"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L90-L122",target:"_blank",rel:"noreferrer"},[e("code",null,"src/skill/skill.ts")])]),e("td",null,"90-122")]),e("tr",null,[e("td",null,"Remote Skill Download"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/discovery.ts#L38-L96",target:"_blank",rel:"noreferrer"},[e("code",null,"src/skill/discovery.ts")])]),e("td",null,"38-96")]),e("tr",null,[e("td",null,"Skill URL Configuration"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L664-L668",target:"_blank",rel:"noreferrer"},[e("code",null,"src/config/config.ts")])]),e("td",null,"664-668")]),e("tr",null,[e("td",null,"MCP Connection Management"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/mcp/index.ts",target:"_blank",rel:"noreferrer"},[e("code",null,"src/mcp/index.ts")])]),e("td",null,"Full file")])])]),e("p",null,[e("strong",null,"Key Constants"),t(":")]),e("ul",null,[e("li",null,[e("code",null,'EXTERNAL_DIRS = [".claude", ".agents"]'),t(": External Skill search directories")]),e("li",null,[e("code",null,'OPENCODE_SKILL_GLOB = "{skill,skills}/**/SKILL.md"'),t(": Skill file match pattern")])]),e("p",null,[e("strong",null,"Key Functions"),t(":")]),e("ul",null,[e("li",null,[e("code",null,"Skill.state()"),t(": Scan and load all Skills (includes external directory scanning logic)")]),e("li",null,[e("code",null,"Skill.get(name)"),t(": Get specific Skill")]),e("li",null,[e("code",null,"Skill.all()"),t(": Get all Skills list")]),e("li",null,[e("code",null,"Skill.dirs()"),t(": Get all Skill directories")]),e("li",null,[e("code",null,"Discovery.pull(url)"),t(": Download Skill from remote URL")])]),e("p",null,[e("strong",null,"Configuration Schema"),t(":")]),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`skills: {
  paths: string[]    // Additional Skill directory paths
  urls: string[]     // Remote Skill index URLs
}`)])])],-1)])])}const b=o(s,[["render",c]]);export{k as __pageData,b as default};
