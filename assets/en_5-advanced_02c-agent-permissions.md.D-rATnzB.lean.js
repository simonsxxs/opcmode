import{_ as a,I as i,c as l,o as r,a5 as o,j as e,J as d,a as t,a_ as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.2c Agent Permissions & Security","description":"Precisely control what Agents can and cannot do to ensure AI operation security.","frontmatter":{"title":"5.2c Agent Permissions & Security","subtitle":"Precisely control what Agents can do","course":"OpenCode Chinese Practical Course","stage":"Stage 5","lesson":"5.2c","duration":"25 minutes","practice":"20 minutes","level":"Advanced","description":"Precisely control what Agents can and cannot do to ensure AI operation security.","tags":["Agent","Permissions","Security","TaskTool"],"prerequisite":["5.2a Agent Quick Start"]},"headers":[],"relativePath":"en/5-advanced/02c-agent-permissions.md","filePath":"en/5-advanced/02c-agent-permissions.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/02c-agent-permissions.md"};function u(g,n,m,h,b,f){const s=i("AdInArticle");return r(),l("div",null,[n[0]||(n[0]=o("",13)),n[1]||(n[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Default Permissions (defined in source code)
    ↓ overrides
Global Config permission
    ↓ overrides
Agent-level permission`)])],-1)),n[2]||(n[2]=o("",4)),n[3]||(n[3]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",           // Rule 1: All commands need confirmation
      "git *": "allow",     // Rule 2: git commands allowed
      "git push*": "deny"   // Rule 3: git push denied
    }
  }
}`)])],-1)),n[4]||(n[4]=o("",10)),n[5]||(n[5]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),n[10]||(n[10]=o("",4)),d(s),n[11]||(n[11]=e("p",null,[t("The bash permission matches the "),e("strong",null,"parsed command string"),t(".")],-1)),n[12]||(n[12]=e("h3",{id:"common-configuration",tabindex:"-1"},[t("Common Configuration "),e("a",{class:"header-anchor",href:"#common-configuration","aria-label":"Permalink to “Common Configuration”"},"​")],-1)),n[13]||(n[13]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),n[16]||(n[16]=o("",5)),n[17]||(n[17]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),n[20]||(n[20]=o("",8)),n[21]||(n[21]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),n[24]||(n[24]=o("",5)),n[25]||(n[25]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Main Agent (Build)
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
       - Return to Main Agent`)])],-1)),n[26]||(n[26]=o("",6)),n[27]||(n[27]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),n[52]||(n[52]=o("",7)),n[53]||(n[53]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),n[65]||(n[65]=o("",18))])}const w=a(p,[["render",u]]);export{k as __pageData,w as default};
