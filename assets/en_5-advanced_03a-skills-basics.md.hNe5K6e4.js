import{_ as s,I as o,c as i,o as r,a5 as l,j as e,J as d,a as t,b0 as u}from"./chunks/framework.Dtwt352Q.js";const h=JSON.parse('{"title":"5.3a Skill Basics","description":"Learn Skill basics, encapsulate reusable domain knowledge, enable on-demand loading for Agents, and enhance AI capabilities.","frontmatter":{"title":"5.3a Skill Basics","subtitle":"Encapsulating Reusable Domain Knowledge","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.3a","duration":"20 minutes","practice":"25 minutes","level":"Advanced","description":"Learn Skill basics, encapsulate reusable domain knowledge, enable on-demand loading for Agents, and enhance AI capabilities.","tags":["Skill","Progressive Disclosure"],"prerequisite":["5.2 Custom Agents"]},"headers":[],"relativePath":"en/5-advanced/03a-skills-basics.md","filePath":"en/5-advanced/03a-skills-basics.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/03a-skills-basics.md"};function c(m,n,g,b,y,k){const a=o("AdInArticle");return r(),i("div",null,[n[0]||(n[0]=l('<h1 id="_5-3a-skill-basics" tabindex="-1">5.3a Skill Basics <a class="header-anchor" href="#_5-3a-skill-basics" aria-label="Permalink to “5.3a Skill Basics”">​</a></h1><blockquote><p>A Skill is an <strong>on-demand loaded</strong> domain knowledge package, defined through SKILL.md, that Agents automatically discover and load based on task semantics.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key concepts from this lesson:</p><img src="'+u+'" alt="Skill Basics Study Notes" data-zoom-src="/images/5-advanced/03a-skills-basics-notes.jpeg"><hr><h2 id="what-you-ll-learn" tabindex="-1">What You&#39;ll Learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to “What You&#39;ll Learn”">​</a></h2><ul><li>Understand the core design philosophy of Skills</li><li>Create SKILL.md files that follow conventions</li><li>Configure Skill permission controls</li><li>Distinguish between Skill and CLAUDE.md use cases</li></ul><hr><h2 id="why-skills-are-needed" tabindex="-1">Why Skills Are Needed <a class="header-anchor" href="#why-skills-are-needed" aria-label="Permalink to “Why Skills Are Needed”">​</a></h2><h3 id="your-current-problem" tabindex="-1">Your Current Problem <a class="header-anchor" href="#your-current-problem" aria-label="Permalink to “Your Current Problem”">​</a></h3>',11)),n[1]||(n[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`User: Help me query revenue data from the data warehouse

Claude: I suggest using this SQL query...
SELECT * FROM revenue WHERE date > '2024-01-01'`)])],-1)),n[2]||(n[2]=e("p",null,"Claude provides a generic SQL pattern, but it doesn't know:",-1)),n[3]||(n[3]=e("ul",null,[e("li",null,"What your table structure looks like"),e("li",null,'How "revenue" is defined in your company'),e("li",null,"Test accounts must be excluded"),e("li",null,"Which summary table should be used")],-1)),n[4]||(n[4]=e("p",null,[e("strong",null,"Root Cause"),t(": Claude starts fresh with every conversation, lacking your team's domain knowledge.")],-1)),n[5]||(n[5]=e("h3",{id:"how-skills-solve-this",tabindex:"-1"},[t("How Skills Solve This "),e("a",{class:"header-anchor",href:"#how-skills-solve-this","aria-label":"Permalink to “How Skills Solve This”"},"​")],-1)),n[6]||(n[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`User: Help me query revenue data from the data warehouse

Claude: [Automatically loads sql-analysis Skill]
I'll help you query revenue data. Based on your data conventions:
- Use the monthly_revenue summary table
- Exclude test accounts (account != 'Test')
- Revenue is calculated as ARR (monthly * 12)

SELECT ...`)])],-1)),n[7]||(n[7]=e("p",null,"Skills encapsulate your domain knowledge into resources that Claude can load on demand.",-1)),n[8]||(n[8]=e("hr",null,null,-1)),n[9]||(n[9]=e("h2",{id:"core-design-philosophy-of-skills",tabindex:"-1"},[t("Core Design Philosophy of Skills "),e("a",{class:"header-anchor",href:"#core-design-philosophy-of-skills","aria-label":"Permalink to “Core Design Philosophy of Skills”"},"​")],-1)),n[10]||(n[10]=e("h3",{id:"progressive-disclosure",tabindex:"-1"},[t("Progressive Disclosure "),e("a",{class:"header-anchor",href:"#progressive-disclosure","aria-label":"Permalink to “Progressive Disclosure”"},"​")],-1)),n[11]||(n[11]=e("p",null,[t("Skills don't stuff everything into context; they use "),e("strong",null,"layered loading"),t(":")],-1)),n[12]||(n[12]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────┐
│ Layer 1: name + description (~100 words)               │
│ → Always visible, used to determine if loading is needed│
├─────────────────────────────────────────────────────────┤
│ Layer 2: SKILL.md body content                         │
│ → Loaded when task matches, contains main instructions  │
├─────────────────────────────────────────────────────────┤
│ Layer 3: Detailed documents in references/ directory    │
│ → Loaded only when specific details are needed          │
└─────────────────────────────────────────────────────────┘`)])],-1)),n[13]||(n[13]=l('<p><strong>Why This Design?</strong></p><p>Context window is a precious resource. Stuffing all domain knowledge causes:</p><ul><li>Excessive token consumption</li><li>Distracted model attention</li><li>Irrelevant content interfering with output</li></ul><p>Progressive disclosure lets Claude load only what&#39;s needed for the current task.</p><h3 id="skill-vs-claude-md" tabindex="-1">Skill vs CLAUDE.md <a class="header-anchor" href="#skill-vs-claude-md" aria-label="Permalink to “Skill vs CLAUDE.md”">​</a></h3><table tabindex="0"><thead><tr><th>Feature</th><th>CLAUDE.md</th><th>Skill</th></tr></thead><tbody><tr><td><strong>Loading Timing</strong></td><td>Always loaded to context</td><td>Only loaded when task matches</td></tr><tr><td><strong>Scope</strong></td><td>Current project</td><td>Reusable across projects</td></tr><tr><td><strong>Content Type</strong></td><td>Pure Markdown</td><td>Markdown + code + resource files</td></tr><tr><td><strong>Platform Support</strong></td><td>Claude Code / OpenCode only</td><td>Claude.ai / Code / API</td></tr><tr><td><strong>Typical Use</strong></td><td>Project coding conventions, local commands</td><td>Domain knowledge, workflows</td></tr></tbody></table><p><strong>Selection Principle</strong>:</p><ul><li>Project-specific conventions (code style, branch naming) → CLAUDE.md</li><li>Reusable domain knowledge (data analysis workflows, audit standards) → Skill</li></ul><hr><h2 id="skill-directory-structure" tabindex="-1">Skill Directory Structure <a class="header-anchor" href="#skill-directory-structure" aria-label="Permalink to “Skill Directory Structure”">​</a></h2><h3 id="basic-structure" tabindex="-1">Basic Structure <a class="header-anchor" href="#basic-structure" aria-label="Permalink to “Basic Structure”">​</a></h3>',11)),n[14]||(n[14]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/
└── skill/
    └── code-review/
        └── SKILL.md      # Skill definition file (must be uppercase)`)])],-1)),n[15]||(n[15]=e("h3",{id:"recommended-complete-structure",tabindex:"-1"},[t("Recommended Complete Structure "),e("a",{class:"header-anchor",href:"#recommended-complete-structure","aria-label":"Permalink to “Recommended Complete Structure”"},"​")],-1)),n[16]||(n[16]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/
└── skill/
    └── sql-analysis/
        ├── SKILL.md              # Main file: workflow and key logic
        └── references/           # Detailed documents (loaded on demand)
            ├── finance.md        # Finance table structures
            ├── product.md        # Product table structures
            └── examples.md       # Query examples`)])],-1)),n[17]||(n[17]=l('<p><strong>Principle</strong>: Keep SKILL.md concise, put detailed content in references/, let Claude read it when needed.</p><h3 id="opencode-search-locations" tabindex="-1">OpenCode Search Locations <a class="header-anchor" href="#opencode-search-locations" aria-label="Permalink to “OpenCode Search Locations”">​</a></h3><table tabindex="0"><thead><tr><th>Location</th><th>Scope</th><th>Description</th></tr></thead><tbody><tr><td><code>.opencode/skill/&lt;name&gt;/SKILL.md</code></td><td>Current project</td><td>Project-specific skills</td></tr><tr><td><code>~/.config/opencode/skill/&lt;name&gt;/SKILL.md</code></td><td>Global</td><td>Available for all projects</td></tr><tr><td><code>.claude/skills/&lt;name&gt;/SKILL.md</code></td><td>Current project</td><td>Claude compatible format</td></tr><tr><td><code>~/.claude/skills/&lt;name&gt;/SKILL.md</code></td><td>Global</td><td>Claude compatible format</td></tr></tbody></table><blockquote><p>Project paths are traversed from current directory up to git root.</p></blockquote>',4)),n[18]||(n[18]=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"Custom Configuration Directory"),e("p",null,[t("You can specify additional Skill search paths via the "),e("code",null,"OPENCODE_CONFIG_DIR"),t(" environment variable:")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'export OPENCODE_CONFIG_DIR="/path/to/custom/config"')])]),e("p",null,"OpenCode will scan both:"),e("ul",null,[e("li",null,[t("Default config directory: "),e("code",null,"~/.config/opencode/skill/")]),e("li",null,[t("Custom config directory: "),e("code",null,"$OPENCODE_CONFIG_DIR/skill/")])]),e("p",null,"This is useful for team-shared Skills or using different Skill sets in different environments."),e("p",null,[t("Source evidence: "),e("code",null,"skill/skill.ts:82-85")]),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`const configDirs = process.env.OPENCODE_CONFIG_DIR
  ? [process.env.OPENCODE_CONFIG_DIR, ...defaultConfigDirs]
  : defaultConfigDirs`)])])],-1)),n[19]||(n[19]=e("h3",{id:"nested-directory-support",tabindex:"-1"},[t("Nested Directory Support "),e("a",{class:"header-anchor",href:"#nested-directory-support","aria-label":"Permalink to “Nested Directory Support”"},"​")],-1)),n[20]||(n[20]=e("p",null,"OpenCode supports nested Skill directories:",-1)),n[21]||(n[21]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/
└── skill/
    └── audit/
        └── security/
            └── SKILL.md    # Skill name determined by frontmatter name field`)])],-1)),n[22]||(n[22]=e("p",null,[t("Source evidence: "),e("code",null,"skill/skill.ts:38")],-1)),n[23]||(n[23]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},'const OPENCODE_SKILL_GLOB = new Bun.Glob("{skill,skills}/**/SKILL.md")')])],-1)),n[24]||(n[24]=e("p",null,[t("The "),e("code",null,"**"),t(" means matching subdirectories at any depth.")],-1)),n[25]||(n[25]=e("hr",null,null,-1)),n[26]||(n[26]=e("h2",{id:"skill-md-format",tabindex:"-1"},[t("SKILL.md Format "),e("a",{class:"header-anchor",href:"#skill-md-format","aria-label":"Permalink to “SKILL.md Format”"},"​")],-1)),d(a),n[27]||(n[27]=e("h3",{id:"required-frontmatter",tabindex:"-1"},[t("Required Frontmatter "),e("a",{class:"header-anchor",href:"#required-frontmatter","aria-label":"Permalink to “Required Frontmatter”"},"​")],-1)),n[28]||(n[28]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
name: sql-analysis
description: Used for analyzing business data: revenue, ARR, customer segmentation, product usage, sales pipeline. Provides table structures, metric definitions, required filters, and query patterns.
---`)])],-1)),n[29]||(n[29]=l('<table tabindex="0"><thead><tr><th>Field</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>Yes</td><td>Skill identifier, used for invocation</td></tr><tr><td><code>description</code></td><td>Yes</td><td>Trigger condition description (<strong>most important!</strong>)</td></tr><tr><td><code>license</code></td><td>No</td><td>License information</td></tr><tr><td><code>compatibility</code></td><td>No</td><td>Compatibility markers</td></tr><tr><td><code>metadata</code></td><td>No</td><td>Custom key-value pairs</td></tr></tbody></table><h3 id="name-naming-convention" tabindex="-1">name Naming Convention <a class="header-anchor" href="#name-naming-convention" aria-label="Permalink to “name Naming Convention”">​</a></h3><p>Official recommendations (source doesn&#39;t enforce, but following ensures compatibility):</p>',3)),n[30]||(n[30]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`✓ code-review
✓ sql-analysis
✓ git-release
✗ Code_Review    ← Don't use uppercase
✗ sql--analysis  ← Don't use consecutive hyphens
✗ -review        ← Don't start with hyphen`)])],-1)),n[31]||(n[31]=e("p",null,[t("Regex reference: "),e("code",null,"^[a-z0-9]+(-[a-z0-9]+)*$")],-1)),n[32]||(n[32]=e("h3",{id:"description-writing-key-to-triggering",tabindex:"-1"},[t("description Writing (Key to Triggering) "),e("a",{class:"header-anchor",href:"#description-writing-key-to-triggering","aria-label":"Permalink to “description Writing (Key to Triggering)”"},"​")],-1)),n[33]||(n[33]=e("p",null,[t("description is the "),e("strong",null,"sole factor determining whether a Skill triggers"),t(". Claude uses semantic understanding (not keyword matching) to judge if a task needs a certain Skill.")],-1)),n[34]||(n[34]=e("p",null,[e("strong",null,"Poor Example"),t(":")],-1)),n[35]||(n[35]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},"description: Help with documents")])],-1)),n[36]||(n[36]=e("p",null,"Problem: Too vague, AI can't determine when to trigger.",-1)),n[37]||(n[37]=e("p",null,[e("strong",null,"Good Example"),t(":")],-1)),n[38]||(n[38]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`description: |
  Extract tables from PDFs and convert to CSV format for data analysis workflows.
  Suitable for: filling PDF forms, batch processing PDF documents, extracting embedded PDF data.
  Not suitable for: simple PDF viewing, basic format conversion, PDF editing.`)])],-1)),n[39]||(n[39]=e("p",null,[e("strong",null,"description Writing Template"),t(":")],-1)),n[40]||(n[40]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`description: |
  [One sentence explaining core capability]
  Provides: [resources this Skill contains, like table structures, formulas, templates]
  Suitable for: [trigger scenario 1], [trigger scenario 2], [trigger scenario 3]
  Not suitable for: [boundary scenario 1], [boundary scenario 2]`)])],-1)),n[41]||(n[41]=l('<p><strong>description Elements</strong>:</p><ol><li><strong>Specific Capability</strong>: What it can do (extract tables, convert formats)</li><li><strong>Provided Resources</strong>: What it contains (table structures, formulas, templates)</li><li><strong>Trigger Scenarios</strong>: When to use (batch processing, form filling)</li><li><strong>Boundary Constraints</strong>: When not to use (simple viewing)</li></ol><h3 id="complete-example" tabindex="-1">Complete Example <a class="header-anchor" href="#complete-example" aria-label="Permalink to “Complete Example”">​</a></h3>',3)),n[42]||(n[42]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: sql-analysis
description: |
  Used for analyzing business data: revenue trends, ARR calculation, customer segmentation, product usage, sales pipeline.
  Provides: company table structures, metric definition formulas, standard filters, common query templates.
  Suitable for: writing SQL to analyze business data, understanding company metric definitions, querying data warehouse.
  Not suitable for: database administration, DDL operations, performance tuning, general SQL education.
---

# SQL Analysis Skill

## Quick Workflow

When user requests data analysis:

1. **Clarify Requirements**
   - What time range? (Default: current year)
   - Which customer segment?
   - What decision is this analysis for?

2. **Check Existing Dashboards**
   - See if \`references/dashboards.md\` has ready-made reports
   - If yes, prioritize guiding user to use them

3. **Determine Data Source**
   - Prefer summary tables over raw event data
   - Confirm table has required fields before querying

4. **Execute Analysis**
   - Apply required filters (exclude test accounts, etc.)
   - Validate results against known baselines

## Standard Query Filters

All revenue queries must:
- Exclude test accounts: \`WHERE account != 'Test'\`
- Use only complete periods: \`WHERE month <= DATE_TRUNC(CURRENT_DATE(), MONTH)\`

## ARR Calculation Method

- Monthly to ARR: \`monthly_revenue * 12\`
- 7-day run rate: \`rolling_7d * 52\`

## Detailed Documentation

When table structures and query patterns are needed, refer to:
- **Revenue & Finance** → \`references/finance.md\`
- **Product Usage** → \`references/product.md\`
- **Sales Pipeline** → \`references/sales.md\``)])],-1)),n[43]||(n[43]=e("p",null,"Note: SKILL.md only contains workflow and key logic; detailed table structures go in the references/ directory.",-1)),n[44]||(n[44]=e("hr",null,null,-1)),n[45]||(n[45]=e("h2",{id:"how-skills-are-discovered-and-loaded",tabindex:"-1"},[t("How Skills Are Discovered and Loaded "),e("a",{class:"header-anchor",href:"#how-skills-are-discovered-and-loaded","aria-label":"Permalink to “How Skills Are Discovered and Loaded”"},"​")],-1)),n[46]||(n[46]=e("h3",{id:"discovery-mechanism",tabindex:"-1"},[t("Discovery Mechanism "),e("a",{class:"header-anchor",href:"#discovery-mechanism","aria-label":"Permalink to “Discovery Mechanism”"},"​")],-1)),n[47]||(n[47]=e("p",null,[t("At startup, OpenCode scans all Skills and aggregates name and description into the "),e("code",null,"skill"),t(" tool description:")],-1)),n[48]||(n[48]=e("div",{class:"language-xml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"xml"),e("pre",null,[e("code",{"v-pre":""},`<available_skills>
  <skill>
    <name>sql-analysis</name>
    <description>Used for analyzing business data: revenue, ARR, customer segmentation...</description>
  </skill>
  <skill>
    <name>code-review</name>
    <description>Perform code review, check conventions, bugs, performance and security</description>
  </skill>
</available_skills>`)])],-1)),n[49]||(n[49]=e("h3",{id:"loading-mechanism",tabindex:"-1"},[t("Loading Mechanism "),e("a",{class:"header-anchor",href:"#loading-mechanism","aria-label":"Permalink to “Loading Mechanism”"},"​")],-1)),n[50]||(n[50]=e("p",null,"When user sends a message, Claude determines whether to load a Skill based on semantics:",-1)),n[51]||(n[51]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`User message: Help me analyze last quarter's revenue data

Claude determines: This is a data analysis task, matches sql-analysis Skill

Claude invokes: skill({ name: "sql-analysis" })

Result: SKILL.md content loaded to context`)])],-1)),n[52]||(n[52]=e("h3",{id:"output-after-loading",tabindex:"-1"},[t("Output After Loading "),e("a",{class:"header-anchor",href:"#output-after-loading","aria-label":"Permalink to “Output After Loading”"},"​")],-1)),n[53]||(n[53]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Skill: sql-analysis

**Base directory**: /path/to/.opencode/skill/sql-analysis

[SKILL.md content]`)])],-1)),n[54]||(n[54]=e("p",null,[t("The "),e("code",null,"Base directory"),t(" information tells Claude how to access relative path files in references/.")],-1)),n[55]||(n[55]=e("hr",null,null,-1)),n[56]||(n[56]=e("h2",{id:"permission-configuration",tabindex:"-1"},[t("Permission Configuration "),e("a",{class:"header-anchor",href:"#permission-configuration","aria-label":"Permalink to “Permission Configuration”"},"​")],-1)),n[57]||(n[57]=e("h3",{id:"global-permissions",tabindex:"-1"},[t("Global Permissions "),e("a",{class:"header-anchor",href:"#global-permissions","aria-label":"Permalink to “Global Permissions”"},"​")],-1)),n[58]||(n[58]=e("p",null,[t("Configure in "),e("code",null,"opencode.json"),t(":")],-1)),n[59]||(n[59]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "skill": {
      "pr-review": "allow",        // Load immediately
      "internal-*": "deny",        // Hidden, access denied
      "experimental-*": "ask",     // Ask user before loading
      "*": "allow"                 // Default allow others
    }
  }
}`)])],-1)),n[60]||(n[60]=l('<table tabindex="0"><thead><tr><th>Permission Value</th><th>Behavior</th></tr></thead><tbody><tr><td><code>allow</code></td><td>Skill loads immediately</td></tr><tr><td><code>deny</code></td><td>Skill hidden from Agent, access denied</td></tr><tr><td><code>ask</code></td><td>Prompt user confirmation before loading</td></tr></tbody></table><blockquote><p>Wildcards supported: <code>internal-*</code> matches <code>internal-docs</code>, <code>internal-tools</code>, etc.</p></blockquote><h3 id="override-permissions-per-agent" tabindex="-1">Override Permissions per Agent <a class="header-anchor" href="#override-permissions-per-agent" aria-label="Permalink to “Override Permissions per Agent”">​</a></h3><p><strong>In Markdown Agent</strong>:</p>',4)),n[61]||(n[61]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
permission:
  skill:
    "documents-*": "allow"
---`)])],-1)),n[62]||(n[62]=e("p",null,[e("strong",null,"In opencode.json"),t(":")],-1)),n[63]||(n[63]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "plan": {
      "permission": {
        "skill": {
          "internal-*": "allow"
        }
      }
    }
  }
}`)])],-1)),n[64]||(n[64]=e("h3",{id:"disable-skill-tool",tabindex:"-1"},[t("Disable Skill Tool "),e("a",{class:"header-anchor",href:"#disable-skill-tool","aria-label":"Permalink to “Disable Skill Tool”"},"​")],-1)),n[65]||(n[65]=e("p",null,"For Agents that don't need Skills, you can completely disable:",-1)),n[66]||(n[66]=e("p",null,[e("strong",null,"Markdown Method"),t(":")],-1)),n[67]||(n[67]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
tools:
  skill: false
---`)])],-1)),n[68]||(n[68]=e("p",null,[e("strong",null,"JSON Method"),t(":")],-1)),n[69]||(n[69]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "plan": {
      "tools": {
        "skill": false
      }
    }
  }
}`)])],-1)),n[70]||(n[70]=e("p",null,[t("When disabled, "),e("code",null,"<available_skills>"),t(" section won't appear in that Agent's tool description at all.")],-1)),n[71]||(n[71]=e("hr",null,null,-1)),n[72]||(n[72]=e("h2",{id:"simple-examples",tabindex:"-1"},[t("Simple Examples "),e("a",{class:"header-anchor",href:"#simple-examples","aria-label":"Permalink to “Simple Examples”"},"​")],-1)),n[73]||(n[73]=e("h3",{id:"translation-skill",tabindex:"-1"},[t("Translation Skill "),e("a",{class:"header-anchor",href:"#translation-skill","aria-label":"Permalink to “Translation Skill”"},"​")],-1)),n[74]||(n[74]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: translate
description: Professional translation, preserving format and terminology. Used for translating technical documentation, API docs, code comments.
---

# Translation Skill

## Translation Standards

1. Preserve original format and paragraph structure
2. Keep proper nouns in original with annotation
3. Check terminology table for technical terms
4. Proofread after translation

## Output Format

Wrap translation result in code block:
`)])],-1)),n[75]||(n[75]=e("p",{translated:"",text:""},null,-1)),n[76]||(n[76]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
For uncertain translations, annotate original in parentheses.`)])],-1)),n[77]||(n[77]=e("h3",{id:"brand-guidelines-skill",tabindex:"-1"},[t("Brand Guidelines Skill "),e("a",{class:"header-anchor",href:"#brand-guidelines-skill","aria-label":"Permalink to “Brand Guidelines Skill”"},"​")],-1)),n[78]||(n[78]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: brand-guidelines
description: Apply company official brand colors and typography standards. Used for creating documents, presentations, interface designs requiring company visual style.
---

# Brand Guidelines Skill

## Colors

**Primary Colors**:
- Dark: \`#141413\` - Main text and dark backgrounds
- Light: \`#faf9f5\` - Light backgrounds and text on dark
- Medium Gray: \`#b0aea5\` - Secondary elements

**Accent Colors**:
- Orange: \`#d97757\` - Primary accent
- Blue: \`#6a9bcc\` - Secondary accent
- Green: \`#788c5d\` - Tertiary accent

## Typography

- **Headings**: Poppins (fallback Arial)
- **Body**: Lora (fallback Georgia)

## Application Rules

- Use Poppins for headings (24pt and above)
- Use Lora for body text
- Intelligently select text color based on background`)])],-1)),n[79]||(n[79]=l('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Skill won&#39;t load</td><td>SKILL.md case incorrect</td><td>Must be uppercase <code>SKILL.md</code></td></tr><tr><td>Skill not showing</td><td>Missing frontmatter fields</td><td>Must include <code>name</code> and <code>description</code></td></tr><tr><td>Task matches but doesn&#39;t trigger</td><td>description too vague</td><td>Add specific capabilities, scenarios, boundaries</td></tr><tr><td>Same-name Skill conflict</td><td>Same name defined in multiple places</td><td>Later loaded overwrites earlier, check log warnings</td></tr><tr><td>Access denied</td><td>Permission set to deny</td><td>Check permission configuration</td></tr><tr><td>Skill directory not recognized</td><td>Directory spelling issue</td><td>Both <code>skill/</code> and <code>skills/</code> supported</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><strong>Skill Core Concept</strong>: Progressive disclosure, on-demand loading</li><li><strong>Directory Structure</strong>: <code>skill/&lt;name&gt;/SKILL.md</code> + <code>references/</code></li><li><strong>SKILL.md Format</strong>: name and description required</li><li><strong>description Writing</strong>: Specific capability + trigger scenarios + boundary constraints</li><li><strong>Permission Control</strong>: allow/ask/deny + wildcards</li><li><strong>Skill vs CLAUDE.md</strong>: On-demand loading vs always loaded</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next lesson dives into advanced Skill usage: progressive disclosure three-layer structure, executable scripts, creation workflow, testing validation, and real-world examples.</p></blockquote><p><a href="./03b-skills-advanced.html">Continue Learning: 5.3b Skill Advanced</a></p>',11))])}const v=s(p,[["render",c]]);export{h as __pageData,v as default};
