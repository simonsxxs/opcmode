import{_ as a,I as i,c as l,o as r,a5 as o,j as e,J as d,a as t,a_ as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.2c Agent Permissions & Security","description":"Precisely control what Agents can and cannot do to ensure AI operation security.","frontmatter":{"title":"5.2c Agent Permissions & Security","subtitle":"Precisely control what Agents can do","course":"OpenCode Chinese Practical Course","stage":"Stage 5","lesson":"5.2c","duration":"25 minutes","practice":"20 minutes","level":"Advanced","description":"Precisely control what Agents can and cannot do to ensure AI operation security.","tags":["Agent","Permissions","Security","TaskTool"],"prerequisite":["5.2a Agent Quick Start"]},"headers":[],"relativePath":"en/5-advanced/02c-agent-permissions.md","filePath":"en/5-advanced/02c-agent-permissions.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/02c-agent-permissions.md"};function u(g,n,m,h,b,f){const s=i("AdInArticle");return r(),l("div",null,[n[0]||(n[0]=o('<h1 id="_5-2c-agent-permissions-security" tabindex="-1">5.2c Agent Permissions &amp; Security <a class="header-anchor" href="#_5-2c-agent-permissions-security" aria-label="Permalink to “5.2c Agent Permissions &amp; Security”">​</a></h1><blockquote><p>Precisely control what Agents can and cannot do.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key concepts from this lesson:</p><img src="'+c+'" alt="Agent Permissions &amp; Security Notes" data-zoom-src="/images/5-advanced/02c-agent-permissions-notes.jpeg"><hr><h2 id="what-you-ll-learn" tabindex="-1">What You&#39;ll Learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to “What You&#39;ll Learn”">​</a></h2><ul><li>Understand the permission system architecture</li><li>Configure bash/edit/task/skill permissions</li><li>Design secure Agent systems</li><li>Implement the principle of least privilege</li></ul><hr><h2 id="permission-system-architecture" tabindex="-1">Permission System Architecture <a class="header-anchor" href="#permission-system-architecture" aria-label="Permalink to “Permission System Architecture”">​</a></h2><h3 id="three-permission-actions" tabindex="-1">Three Permission Actions <a class="header-anchor" href="#three-permission-actions" aria-label="Permalink to “Three Permission Actions”">​</a></h3><table tabindex="0"><thead><tr><th>Action</th><th>Description</th><th>Effect</th></tr></thead><tbody><tr><td><code>allow</code></td><td>Allow</td><td>Execute directly, no confirmation needed</td></tr><tr><td><code>ask</code></td><td>Ask</td><td>Show confirmation dialog, user decides</td></tr><tr><td><code>deny</code></td><td>Deny</td><td>Refuse to execute, Agent receives error</td></tr></tbody></table><h3 id="permission-configuration-hierarchy" tabindex="-1">Permission Configuration Hierarchy <a class="header-anchor" href="#permission-configuration-hierarchy" aria-label="Permalink to “Permission Configuration Hierarchy”">​</a></h3>',13)),n[1]||(n[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Default Permissions (defined in source code)
    ↓ overrides
Global Config permission
    ↓ overrides
Agent-level permission`)])],-1)),n[2]||(n[2]=o('<p><strong>Later configurations override earlier ones.</strong></p><blockquote><p>Source: <code>config.ts:418-447</code>, <code>agent.ts:194</code></p></blockquote><h3 id="rule-priority-last-match-wins" tabindex="-1">Rule Priority: Last Match Wins <a class="header-anchor" href="#rule-priority-last-match-wins" aria-label="Permalink to “Rule Priority: Last Match Wins”">​</a></h3><p>This is the most important rule! When multiple rules match, <strong>the last matching rule wins</strong>.</p>',4)),n[3]||(n[3]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",           // Rule 1: All commands need confirmation
      "git *": "allow",     // Rule 2: git commands allowed
      "git push*": "deny"   // Rule 3: git push denied
    }
  }
}`)])],-1)),n[4]||(n[4]=o('<p>Executing <code>git push origin main</code>:</p><ol><li>Matches Rule 1 (<code>*</code>) → ask</li><li>Matches Rule 2 (<code>git *</code>) → allow</li><li>Matches Rule 3 (<code>git push*</code>) → deny</li><li><strong>Final result: deny</strong> (Rule 3 is last)</li></ol><blockquote><p>Source: <code>agents.mdx:473</code>, <code>permissions.mdx:70</code></p></blockquote><hr><h2 id="configurable-permission-types" tabindex="-1">Configurable Permission Types <a class="header-anchor" href="#configurable-permission-types" aria-label="Permalink to “Configurable Permission Types”">​</a></h2><table tabindex="0"><thead><tr><th>Permission</th><th>Match Target</th><th>Description</th></tr></thead><tbody><tr><td><code>read</code></td><td>File path</td><td>Read files</td></tr><tr><td><code>edit</code></td><td>File path</td><td>All file modifications (edit/write/patch/multiedit)</td></tr><tr><td><code>glob</code></td><td>glob pattern</td><td>File search</td></tr><tr><td><code>grep</code></td><td>Regex pattern</td><td>Content search</td></tr><tr><td><code>list</code></td><td>Directory path</td><td>List directory contents</td></tr><tr><td><code>bash</code></td><td>Command string</td><td>Execute shell commands</td></tr><tr><td><code>task</code></td><td>subagent name</td><td>Call sub-agents</td></tr><tr><td><code>skill</code></td><td>skill name</td><td>Load skills</td></tr><tr><td><code>lsp</code></td><td>-</td><td>LSP queries (currently no fine-grained support)</td></tr><tr><td><code>todoread</code></td><td>-</td><td>Read Todo list</td></tr><tr><td><code>todowrite</code></td><td>-</td><td>Update Todo list</td></tr><tr><td><code>webfetch</code></td><td>URL</td><td>Fetch web content</td></tr><tr><td><code>websearch</code></td><td>Query string</td><td>Web search</td></tr><tr><td><code>codesearch</code></td><td>Query string</td><td>Code search</td></tr><tr><td><code>external_directory</code></td><td>-</td><td>Access paths outside project directory</td></tr><tr><td><code>doom_loop</code></td><td>-</td><td>Detect repeated calls (same tool called 3 times with same input)</td></tr></tbody></table><blockquote><p>Source: <code>config.ts:418-447</code></p></blockquote><hr><h2 id="permission-configuration-syntax" tabindex="-1">Permission Configuration Syntax <a class="header-anchor" href="#permission-configuration-syntax" aria-label="Permalink to “Permission Configuration Syntax”">​</a></h2><h3 id="simple-syntax-single-action" tabindex="-1">Simple Syntax: Single Action <a class="header-anchor" href="#simple-syntax-single-action" aria-label="Permalink to “Simple Syntax: Single Action”">​</a></h3>',10)),n[5]||(n[5]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "edit": "allow",      // All file edits allowed
    "bash": "ask",        // All commands need confirmation
    "webfetch": "deny"    // Web fetching denied
  }
}`)])],-1)),n[6]||(n[6]=e("h3",{id:"global-setting",tabindex:"-1"},[t("Global Setting "),e("a",{class:"header-anchor",href:"#global-setting","aria-label":"Permalink to “Global Setting”"},"​")],-1)),n[7]||(n[7]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": "allow"   // All permissions allowed
}`)])],-1)),n[8]||(n[8]=e("h3",{id:"object-syntax-fine-grained-control",tabindex:"-1"},[t("Object Syntax: Fine-grained Control "),e("a",{class:"header-anchor",href:"#object-syntax-fine-grained-control","aria-label":"Permalink to “Object Syntax: Fine-grained Control”"},"​")],-1)),n[9]||(n[9]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",              // Default: need confirmation
      "git status": "allow",   // git status allowed
      "git log*": "allow",     // git log commands allowed
      "rm -rf*": "deny"        // rm -rf denied
    }
  }
}`)])],-1)),n[10]||(n[10]=o('<h3 id="wildcards" tabindex="-1">Wildcards <a class="header-anchor" href="#wildcards" aria-label="Permalink to “Wildcards”">​</a></h3><table tabindex="0"><thead><tr><th>Symbol</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td><code>*</code></td><td>Match any characters (0 or more)</td><td><code>git *</code> matches <code>git status</code>, <code>git log</code></td></tr><tr><td><code>?</code></td><td>Match single character</td><td><code>file?.txt</code> matches <code>file1.txt</code></td></tr></tbody></table><hr><h2 id="bash-permission-details" tabindex="-1">bash Permission Details <a class="header-anchor" href="#bash-permission-details" aria-label="Permalink to “bash Permission Details”">​</a></h2>',4)),d(s),n[11]||(n[11]=e("p",null,[t("The bash permission matches the "),e("strong",null,"parsed command string"),t(".")],-1)),n[12]||(n[12]=e("h3",{id:"common-configuration",tabindex:"-1"},[t("Common Configuration "),e("a",{class:"header-anchor",href:"#common-configuration","aria-label":"Permalink to “Common Configuration”"},"​")],-1)),n[13]||(n[13]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",                    // Default: need confirmation

      // Git commands
      "git status": "allow",
      "git log*": "allow",
      "git diff*": "allow",
      "git branch*": "allow",
      "git checkout*": "ask",        // Branch switch needs confirmation
      "git push*": "ask",            // Push needs confirmation
      "git reset --hard*": "deny",   // Hard reset denied

      // Package management
      "npm install*": "allow",
      "npm run*": "allow",
      "npm publish*": "deny",        // Publishing denied

      // Dangerous commands
      "rm -rf*": "deny",
      "sudo*": "deny",
      "chmod 777*": "deny"
    }
  }
}`)])],-1)),n[14]||(n[14]=e("h3",{id:"best-practice-for-plan-agent",tabindex:"-1"},[t("Best Practice for Plan Agent "),e("a",{class:"header-anchor",href:"#best-practice-for-plan-agent","aria-label":"Permalink to “Best Practice for Plan Agent”"},"​")],-1)),n[15]||(n[15]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "plan": {
      "permission": {
        "bash": {
          "*": "deny",               // Default: deny all
          "git log*": "allow",       // Read-only commands allowed
          "git diff*": "allow",
          "git status": "allow",
          "ls*": "allow",
          "cat*": "allow",
          "head*": "allow",
          "tail*": "allow"
        }
      }
    }
  }
}`)])],-1)),n[16]||(n[16]=o('<hr><h2 id="edit-permission-details" tabindex="-1">edit Permission Details <a class="header-anchor" href="#edit-permission-details" aria-label="Permalink to “edit Permission Details”">​</a></h2><p>The edit permission controls <strong>all file modification operations</strong>, including:</p><ul><li><code>edit</code> tool</li><li><code>write</code> tool</li><li><code>patch</code> tool</li><li><code>multiedit</code> tool</li></ul><h3 id="common-configuration-1" tabindex="-1">Common Configuration <a class="header-anchor" href="#common-configuration-1" aria-label="Permalink to “Common Configuration”">​</a></h3>',5)),n[17]||(n[17]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "edit": {
      "*": "allow",                    // Default: allow

      // Sensitive files
      "*.env": "deny",
      "*.env.*": "deny",
      "*.env.example": "allow",        // Example files allowed
      ".env.local": "deny",

      // System files
      "package-lock.json": "deny",     // Don't modify lock files
      "pnpm-lock.yaml": "deny",
      "yarn.lock": "deny",

      // Directories
      "node_modules/*": "deny",
      ".git/*": "deny",
      "dist/*": "deny"
    }
  }
}`)])],-1)),n[18]||(n[18]=e("h3",{id:"read-only-agent-configuration",tabindex:"-1"},[t("Read-only Agent Configuration "),e("a",{class:"header-anchor",href:"#read-only-agent-configuration","aria-label":"Permalink to “Read-only Agent Configuration”"},"​")],-1)),n[19]||(n[19]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "readonly-auditor": {
      "description": "Read-only code audit, no file modifications",
      "mode": "subagent",
      "permission": {
        "edit": "deny"                 // Deny all edits
      }
    }
  }
}`)])],-1)),n[20]||(n[20]=o('<hr><h2 id="task-permission-control-subagent-calls" tabindex="-1">task Permission: Control Subagent Calls <a class="header-anchor" href="#task-permission-control-subagent-calls" aria-label="Permalink to “task Permission: Control Subagent Calls”">​</a></h2><p>The task permission controls <strong>which subagents an Agent can call</strong>.</p><h3 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to “How It Works”">​</a></h3><p>When <code>task: deny</code> is set:</p><ol><li>The subagent is <strong>completely removed</strong> from the Task tool&#39;s description</li><li>The model won&#39;t attempt to call it (because it can&#39;t see it)</li></ol><blockquote><p>Note: Users can still manually call any subagent via <code>@agent-name</code>. The task permission only affects automatic Agent calls.</p><p>Source: <code>agents.mdx:557-565</code></p></blockquote><h3 id="configuration-example" tabindex="-1">Configuration Example <a class="header-anchor" href="#configuration-example" aria-label="Permalink to “Configuration Example”">​</a></h3>',8)),n[21]||(n[21]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "safe-orchestrator": {
      "description": "Security orchestrator, can only call specified subagents",
      "mode": "primary",
      "permission": {
        "task": {
          "*": "deny",                   // Deny all
          "docs-writer": "allow",        // Allow docs
          "code-reviewer": "allow",      // Allow review
          "dangerous-agent": "deny"      // Explicitly deny
        }
      }
    }
  }
}`)])],-1)),n[22]||(n[22]=e("h3",{id:"using-wildcards",tabindex:"-1"},[t("Using Wildcards "),e("a",{class:"header-anchor",href:"#using-wildcards","aria-label":"Permalink to “Using Wildcards”"},"​")],-1)),n[23]||(n[23]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "orchestrator": {
      "permission": {
        "task": {
          "*": "deny",
          "safe-*": "allow",            // All safe-* allowed
          "internal/*": "allow",        // Nested directory allowed
          "code-reviewer": "ask"        // Needs confirmation
        }
      }
    }
  }
}`)])],-1)),n[24]||(n[24]=o('<h3 id="tasktool-parameter-details" tabindex="-1">TaskTool Parameter Details <a class="header-anchor" href="#tasktool-parameter-details" aria-label="Permalink to “TaskTool Parameter Details”">​</a></h3><p>The complete parameter definition for the Task tool:</p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>description</code></td><td>string</td><td>Yes</td><td>Task description (3-5 words), used as sub-session title</td></tr><tr><td><code>prompt</code></td><td>string</td><td>Yes</td><td>Task prompt for the sub-agent to execute</td></tr><tr><td><code>subagent_type</code></td><td>string</td><td>Yes</td><td>Sub-agent name to call (must be non-primary agent)</td></tr><tr><td><code>session_id</code></td><td>string</td><td>No</td><td>Continue an existing sub-session</td></tr><tr><td><code>command</code></td><td>string</td><td>No</td><td>Command that triggered this task (for debugging)</td></tr></tbody></table><h3 id="execution-flow" tabindex="-1">Execution Flow <a class="header-anchor" href="#execution-flow" aria-label="Permalink to “Execution Flow”">​</a></h3><p>The TaskTool workflow:</p>',5)),n[25]||(n[25]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Main Agent (Build)
    ↓
    1. Permission Check
       - Check if caller has task permission
       - Filter accessible subagents
       ↓
    2. Create Sub-session
       - Create independent session under main session
       - Title: description + (@subagent subagent)
       - Apply restricted permissions (todowrite/todoread/task)
       ↓
    3. Call Sub-agent
       - Sub-agent executes in independent session
       - Context only contains passed prompt
       - Listen to PartUpdated events for progress
       ↓
    4. Return Result
       - Collect all tool call summaries
       - Generate conversation summary
       - Return to Main Agent`)])],-1)),n[26]||(n[26]=o('<blockquote><p><strong>Key Point</strong>: Sub-agents run in <strong>independent Sessions</strong> and cannot see the Main Agent&#39;s conversation history. You must provide complete context when calling.</p></blockquote><h3 id="default-restrictions-for-sub-agents" tabindex="-1">Default Restrictions for Sub-agents <a class="header-anchor" href="#default-restrictions-for-sub-agents" aria-label="Permalink to “Default Restrictions for Sub-agents”">​</a></h3><p>To prevent infinite recursion, sub-agents (whether called via task or <code>@</code> manually) have the following <strong>hardcoded restrictions</strong>:</p><table tabindex="0"><thead><tr><th>Restriction</th><th>Description</th><th>Reason</th></tr></thead><tbody><tr><td><code>todowrite: deny</code></td><td>Deny writing to todo list</td><td>Prevent sub-agent from interfering with Main Agent task management</td></tr><tr><td><code>todoread: deny</code></td><td>Deny reading todo list</td><td>Same as above</td></tr><tr><td><code>task: deny</code></td><td>Deny calling other sub-agents</td><td>Prevent infinite recursion</td></tr></tbody></table><h3 id="practical-usage-examples" tabindex="-1">Practical Usage Examples <a class="header-anchor" href="#practical-usage-examples" aria-label="Permalink to “Practical Usage Examples”">​</a></h3><h4 id="configure-to-allow-specific-sub-agents" tabindex="-1">Configure to Allow Specific Sub-agents <a class="header-anchor" href="#configure-to-allow-specific-sub-agents" aria-label="Permalink to “Configure to Allow Specific Sub-agents”">​</a></h4>',6)),n[27]||(n[27]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "orchestrator": {
      "description": "Task orchestration Agent, can call specialized sub-agents",
      "mode": "primary",
      "permission": {
        "task": {
          "docs-writer": "allow",      // Allow docs writing
          "code-reviewer": "allow",    // Allow code review
          "general": "allow",          // Allow general tasks
          "*": "deny"                  // Deny others
        }
      }
    }
  }
}`)])],-1)),n[28]||(n[28]=e("h4",{id:"agent-internal-tasktool-call",tabindex:"-1"},[t("Agent Internal TaskTool Call "),e("a",{class:"header-anchor",href:"#agent-internal-tasktool-call","aria-label":"Permalink to “Agent Internal TaskTool Call”"},"​")],-1)),n[29]||(n[29]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# Pseudo-code example
Main Agent receives: Help me write API documentation

1. Analyze task type → Determine docs-writer sub-agent is needed
2. Call TaskTool:
   - description: "Write API documentation"
   - prompt: "Write documentation for the following functions..."
   - subagent_type: "docs-writer"
3. Sub-agent executes → Returns documentation content
4. Main Agent receives result → Continues conversation`)])],-1)),n[30]||(n[30]=e("h4",{id:"continue-sub-session",tabindex:"-1"},[t("Continue Sub-session "),e("a",{class:"header-anchor",href:"#continue-sub-session","aria-label":"Permalink to “Continue Sub-session”"},"​")],-1)),n[31]||(n[31]=e("p",null,[t("When a sub-agent needs to execute in steps, you can pass "),e("code",null,"session_id"),t(" to continue previous work:")],-1)),n[32]||(n[32]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`TaskTool(
  description: "Complete documentation",
  prompt: "Check documentation completeness and fill in missing content",
  subagent_type: "docs-writer",
  session_id: "abc123"  // Continue previous session
)`)])],-1)),n[33]||(n[33]=e("blockquote",null,[e("p",null,[e("strong",null,"Source"),t(": "),e("code",null,"packages/opencode/src/tool/task.ts:23-193")])],-1)),n[34]||(n[34]=e("hr",null,null,-1)),n[35]||(n[35]=e("h2",{id:"skill-permission-control-skill-loading",tabindex:"-1"},[t("skill Permission: Control Skill Loading "),e("a",{class:"header-anchor",href:"#skill-permission-control-skill-loading","aria-label":"Permalink to “skill Permission: Control Skill Loading”"},"​")],-1)),n[36]||(n[36]=e("p",null,"The skill permission controls which skills an Agent can load.",-1)),n[37]||(n[37]=e("h3",{id:"configuration-example-1",tabindex:"-1"},[t("Configuration Example "),e("a",{class:"header-anchor",href:"#configuration-example-1","aria-label":"Permalink to “Configuration Example”"},"​")],-1)),n[38]||(n[38]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "restricted-agent": {
      "description": "Restricted Agent, can only use specified skills",
      "mode": "subagent",
      "permission": {
        "skill": {
          "*": "deny",                   // Deny all skills
          "docs-writer": "allow",        // Only allow docs skill
          "translator": "allow"
        }
      }
    }
  }
}`)])],-1)),n[39]||(n[39]=e("blockquote",null,[e("p",null,[t("Source: "),e("code",null,"skill.ts:15-21")])],-1)),n[40]||(n[40]=e("hr",null,null,-1)),n[41]||(n[41]=e("h2",{id:"built-in-security-rules",tabindex:"-1"},[t("Built-in Security Rules "),e("a",{class:"header-anchor",href:"#built-in-security-rules","aria-label":"Permalink to “Built-in Security Rules”"},"​")],-1)),n[42]||(n[42]=e("p",null,"OpenCode has some default security rules configured:",-1)),n[43]||(n[43]=e("h3",{id:"env-file-protection",tabindex:"-1"},[t(".env File Protection "),e("a",{class:"header-anchor",href:"#env-file-protection","aria-label":"Permalink to “.env File Protection”"},"​")],-1)),n[44]||(n[44]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// Built-in default configuration
{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "deny",          // .env files denied
      "*.env.*": "deny",        // .env.xxx also denied
      "*.env.example": "allow"  // Example files allowed
    }
  }
}`)])],-1)),n[45]||(n[45]=e("blockquote",null,[e("p",null,[t("Source: "),e("code",null,"agent.ts:51-56")])],-1)),n[46]||(n[46]=e("h3",{id:"doom-loop-detection",tabindex:"-1"},[t("doom_loop Detection "),e("a",{class:"header-anchor",href:"#doom-loop-detection","aria-label":"Permalink to “doom_loop Detection”"},"​")],-1)),n[47]||(n[47]=e("p",null,"When the same tool is called 3 times consecutively with identical input, doom_loop detection is triggered.",-1)),n[48]||(n[48]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "doom_loop": "ask"    // Default: prompt user for confirmation
  }
}`)])],-1)),n[49]||(n[49]=e("h3",{id:"external-directory-protection",tabindex:"-1"},[t("external_directory Protection "),e("a",{class:"header-anchor",href:"#external-directory-protection","aria-label":"Permalink to “external_directory Protection”"},"​")],-1)),n[50]||(n[50]=e("p",null,"When an Agent attempts to access paths outside the project directory:",-1)),n[51]||(n[51]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "external_directory": "ask"    // Default: prompt user for confirmation
  }
}`)])],-1)),n[52]||(n[52]=o('<h3 id="implicit-restrictions-for-sub-agents" tabindex="-1">Implicit Restrictions for Sub-agents <a class="header-anchor" href="#implicit-restrictions-for-sub-agents" aria-label="Permalink to “Implicit Restrictions for Sub-agents”">​</a></h3><p>Besides configured permissions, sub-agents (whether subagent mode or called all mode) have the following <strong>hardcoded restrictions</strong>:</p><ol><li><p><strong>Todo Tools Disabled</strong></p><ul><li>Sub-agents <strong>can never use</strong> <code>todowrite</code> and <code>todoread</code>.</li><li>This prevents sub-agents from interfering with Main Agent&#39;s task list management.</li></ul></li><li><p><strong>Primary Agent Exclusive Tools Disabled</strong></p><ul><li>Tools configured in <code>primary_tools</code> cannot be used by sub-agents.</li></ul></li><li><p><strong>Task Nesting Restriction</strong></p><ul><li>Sub-agents <strong>cannot</strong> call other sub-agents by default (unless explicitly granted <code>task</code> permission).</li><li>Example: <code>explore</code> cannot call <code>general</code> because its default permission is <code>*: deny</code>.</li></ul><p><strong>Why this design?</strong></p><ul><li><strong>Prevent infinite recursion</strong>: Avoid circular call chains between sub-agents that never complete</li><li><strong>Control complexity</strong>: Make task execution paths more predictable and easier to debug</li><li><strong>Resource management</strong>: Each sub-agent call creates a new session, consuming tokens and compute</li><li><strong>Separation of concerns</strong>: Sub-agents should focus on one thing, orchestration is for the main agent</li></ul></li></ol><hr><h2 id="agent-level-permission-override" tabindex="-1">Agent-level Permission Override <a class="header-anchor" href="#agent-level-permission-override" aria-label="Permalink to “Agent-level Permission Override”">​</a></h2><p>Permissions set in Agent configuration <strong>override</strong> global permissions.</p><h3 id="json-configuration" tabindex="-1">JSON Configuration <a class="header-anchor" href="#json-configuration" aria-label="Permalink to “JSON Configuration”">​</a></h3>',7)),n[53]||(n[53]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow"
    }
  },
  "agent": {
    "build": {
      "permission": {
        "bash": {
          "git push": "allow"       // build agent additionally allows push
        }
      }
    },
    "plan": {
      "permission": {
        "bash": {
          "*": "deny",              // plan agent denies all commands
          "git log*": "allow"       // except viewing logs
        }
      }
    }
  }
}`)])],-1)),n[54]||(n[54]=e("h3",{id:"markdown-configuration",tabindex:"-1"},[t("Markdown Configuration "),e("a",{class:"header-anchor",href:"#markdown-configuration","aria-label":"Permalink to “Markdown Configuration”"},"​")],-1)),n[55]||(n[55]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Read-only audit Agent
mode: subagent
permission:
  edit: deny
  bash:
    "*": deny
    "git log*": allow
    "git diff*": allow
  webfetch: deny
---

Only analyzes code, makes no modifications.`)])],-1)),n[56]||(n[56]=e("hr",null,null,-1)),n[57]||(n[57]=e("h2",{id:"security-best-practices",tabindex:"-1"},[t("Security Best Practices "),e("a",{class:"header-anchor",href:"#security-best-practices","aria-label":"Permalink to “Security Best Practices”"},"​")],-1)),n[58]||(n[58]=e("h3",{id:"_1-principle-of-least-privilege",tabindex:"-1"},[t("1. Principle of Least Privilege "),e("a",{class:"header-anchor",href:"#_1-principle-of-least-privilege","aria-label":"Permalink to “1. Principle of Least Privilege”"},"​")],-1)),n[59]||(n[59]=e("p",null,"Only grant the minimum permissions an Agent needs to complete its task.",-1)),n[60]||(n[60]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// ❌ Bad: Too permissive
{
  "agent": {
    "my-agent": {
      "permission": "allow"
    }
  }
}

// ✅ Good: Explicitly list needed permissions
{
  "agent": {
    "my-agent": {
      "permission": {
        "read": "allow",
        "edit": {
          "docs/*": "allow"
        },
        "bash": "deny"
      }
    }
  }
}`)])],-1)),n[61]||(n[61]=e("h3",{id:"_2-explicitly-list-allowed-commands",tabindex:"-1"},[t("2. Explicitly List Allowed Commands "),e("a",{class:"header-anchor",href:"#_2-explicitly-list-allowed-commands","aria-label":"Permalink to “2. Explicitly List Allowed Commands”"},"​")],-1)),n[62]||(n[62]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// ❌ Bad: Allow all, then deny dangerous ones
{
  "permission": {
    "bash": {
      "*": "allow",
      "rm -rf*": "deny"
    }
  }
}

// ✅ Good: Deny all, then allow needed ones
{
  "permission": {
    "bash": {
      "*": "deny",
      "git status": "allow",
      "npm test": "allow"
    }
  }
}`)])],-1)),n[63]||(n[63]=e("h3",{id:"_3-set-sensitive-operations-to-ask",tabindex:"-1"},[t("3. Set Sensitive Operations to ask "),e("a",{class:"header-anchor",href:"#_3-set-sensitive-operations-to-ask","aria-label":"Permalink to “3. Set Sensitive Operations to ask”"},"​")],-1)),n[64]||(n[64]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "allow",
      "git push*": "ask",        // Push needs confirmation
      "npm publish*": "ask",     // Publish needs confirmation
      "docker *": "ask"          // Docker operations need confirmation
    }
  }
}`)])],-1)),n[65]||(n[65]=o('<h3 id="_4-regularly-review-permission-configuration" tabindex="-1">4. Regularly Review Permission Configuration <a class="header-anchor" href="#_4-regularly-review-permission-configuration" aria-label="Permalink to “4. Regularly Review Permission Configuration”">​</a></h3><p>Checklist:</p><ul><li>[ ] Are there permissions no longer needed?</li><li>[ ] Are all sensitive operations set to ask?</li><li>[ ] Are new Agent permissions reasonable?</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Permission not working</td><td>Wrong rule order</td><td>Put <code>*</code> first, specific rules after</td></tr><tr><td>Subagent still callable</td><td>User @ calls are unrestricted</td><td>task permission only affects Task tool</td></tr><tr><td>bash command match fails</td><td>Matches parsed command</td><td>Check actual command format (with arguments)</td></tr><tr><td>.env still readable</td><td>Custom rule overrode default</td><td>Remember to keep .env deny rule</td></tr><tr><td>Permissions too strict</td><td>Set <code>*: deny</code> forgot to allow necessary ones</td><td>Add allow rules one by one</td></tr></tbody></table><hr><h2 id="relationship-with-5-5-permission-control" tabindex="-1">Relationship with 5.5 Permission Control <a class="header-anchor" href="#relationship-with-5-5-permission-control" aria-label="Permalink to “Relationship with 5.5 Permission Control”">​</a></h2><p>This chapter focuses on <strong>Agent-level permission configuration</strong>.</p><p>For global permission configuration and more details, see <a href="/en/5-advanced/05-permissions.html">5.5 Permission Control</a>.</p><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><strong>Permission System Architecture</strong>: Three actions, configuration hierarchy, last match wins</li><li><strong>12+ Permission Types</strong>: bash, edit, task, skill, etc.</li><li><strong>Fine-grained Control</strong>: Using object syntax and wildcards</li><li><strong>TaskTool Mechanism</strong>: Sub-agent calls, parameter definition, execution flow</li><li><strong>Sub-agent Restrictions</strong>: todowrite/todoread/task disabled to prevent infinite recursion</li><li><strong>Built-in Security Rules</strong>: .env protection, doom_loop, external_directory</li><li><strong>Security Best Practices</strong>: Least privilege, explicit allow, sensitive operations ask</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>With permissions configured, there are more advanced techniques: tool interface design, pass-through parameters, debugging methods.</p></blockquote><p><strong>Next Lesson</strong>: <a href="/en/5-advanced/02d-agent-advanced.html">5.2d Agent Advanced Techniques</a></p>',18))])}const w=a(p,[["render",u]]);export{k as __pageData,w as default};
