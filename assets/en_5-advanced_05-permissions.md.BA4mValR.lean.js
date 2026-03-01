import{_ as r,I as i,c as s,o as d,a5 as n,j as e,J as l,a as o,b4 as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"5.5 Permission Control","description":"Configure permission policies to control what AI can and cannot do, ensuring safe operations. Including external directory access control.","frontmatter":{"title":"5.5 Permission Control","subtitle":"Security Policy Configuration","course":"OpenCode Chinese Practical Course","stage":"Stage 5","lesson":"5.5","duration":"15 minutes","level":"Advanced","description":"Configure permission policies to control what AI can and cannot do, ensuring safe operations. Including external directory access control.","tags":["Permissions","Security","external_directory"],"prerequisite":["5.1 Configuration Complete Guide"]},"headers":[],"relativePath":"en/5-advanced/05-permissions.md","filePath":"en/5-advanced/05-permissions.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/05-permissions.md"};function u(m,t,g,h,b,f){const a=i("AdInArticle");return d(),s("div",null,[t[0]||(t[0]=n("",20)),t[1]||(t[1]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "*": "ask",          // Default: all operations require confirmation
    "bash": "allow",     // Bash commands auto-approved
    "edit": "deny"       // Deny file editing
  }
}`)])],-1)),t[2]||(t[2]=e("p",null,"Set all permissions at once:",-1)),t[3]||(t[3]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": "allow"  // All operations auto-approved
}`)])],-1)),t[4]||(t[4]=e("hr",null,null,-1)),t[5]||(t[5]=e("h2",{id:"fine-grained-rules-object-syntax",tabindex:"-1"},[o("Fine-Grained Rules (Object Syntax) "),e("a",{class:"header-anchor",href:"#fine-grained-rules-object-syntax","aria-label":"Permalink to “Fine-Grained Rules (Object Syntax)”"},"​")],-1)),t[6]||(t[6]=e("p",null,"Apply different actions based on tool input:",-1)),t[7]||(t[7]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",                    // Default: require confirmation
      "git *": "allow",              // git commands allowed
      "npm *": "allow",              // npm commands allowed
      "rm *": "deny"                 // deny rm commands
    },
    "edit": {
      "*": "deny",                   // Default: deny editing
      "packages/web/src/content/docs/*.mdx": "allow"  // Only allow editing docs
    }
  }
}`)])],-1)),t[8]||(t[8]=n("",7)),l(a),t[9]||(t[9]=n("",12)),t[10]||(t[10]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "deny",
      "*.env.*": "deny",
      "*.env.example": "allow"  // Example files allowed
    }
  }
}`)])],-1)),t[11]||(t[11]=n("",16)),t[12]||(t[12]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`// Source: opencode/packages/opencode/src/util/filesystem.ts:25-27
export function contains(parent: string, child: string) {
  return !relative(parent, child).startsWith("..")
}`)])],-1)),t[13]||(t[13]=e("p",null,[o("If the relative path starts with "),e("code",null,".."),o(", the file is outside the project directory.")],-1)),t[14]||(t[14]=e("h3",{id:"default-behavior",tabindex:"-1"},[o("Default Behavior "),e("a",{class:"header-anchor",href:"#default-behavior","aria-label":"Permalink to “Default Behavior”"},"​")],-1)),t[15]||(t[15]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "external_directory": "ask"  // Default: ask for confirmation each time for non-GLOB paths
  }
}`)])],-1)),t[16]||(t[16]=e("h3",{id:"common-configuration-allow-external-folder-access",tabindex:"-1"},[o("Common Configuration: Allow External Folder Access "),e("a",{class:"header-anchor",href:"#common-configuration-allow-external-folder-access","aria-label":"Permalink to “Common Configuration: Allow External Folder Access”"},"​")],-1)),t[17]||(t[17]=e("p",null,[o("If you want OpenCode to access external folders "),e("strong",null,"without requiring authorization each time"),o(", add the following configuration:")],-1)),t[18]||(t[18]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "permission": {
    "external_directory": "allow"
  }
}`)])],-1)),t[19]||(t[19]=e("p",null,"This is one of the most common configurations, especially suitable for:",-1)),t[20]||(t[20]=e("ul",null,[e("li",null,[o("Frequently accessing configuration directories like "),e("code",null,"~/.config/")]),e("li",null,"Project depends on files in other directories"),e("li",null,"Using monorepo but only starting OpenCode in a subdirectory")],-1)),t[21]||(t[21]=e("h3",{id:"fine-grained-control-by-path",tabindex:"-1"},[o("Fine-Grained Control (By Path) "),e("a",{class:"header-anchor",href:"#fine-grained-control-by-path","aria-label":"Permalink to “Fine-Grained Control (By Path)”"},"​")],-1)),t[22]||(t[22]=e("p",null,[e("code",null,"external_directory"),o(" supports object syntax for path-based configuration:")],-1)),t[23]||(t[23]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "external_directory": {
      "*": "ask",                    // Default: require confirmation
      "/tmp/*": "allow",             // /tmp directory allowed
      "/home/user/shared/*": "allow", // Shared directory allowed
      "/etc/*": "deny"               // System config denied
    }
  }
}`)])],-1)),t[24]||(t[24]=n("",3)),t[25]||(t[25]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "file-manager": {
      "description": "File management Agent, can access external directories",
      "permission": {
        "external_directory": "allow"
      }
    },
    "safe-agent": {
      "description": "Safe Agent, cannot access external directories",
      "permission": {
        "external_directory": "deny"
      }
    }
  }
}`)])],-1)),t[26]||(t[26]=n("",9)),t[27]||(t[27]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow",
      "git diff": "allow",
      "git log*": "allow",
      "npm run*": "allow",
      "rm*": "deny"           // Deny all delete operations
    }
  }
}`)])],-1)),t[28]||(t[28]=n("",13)),t[29]||(t[29]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow"
    }
  },
  "agent": {
    "deploy": {
      "permission": {
        "bash": {
          "*": "ask",
          "git status": "allow",
          "git push": "allow"     // Only deploy agent can push
        }
      }
    }
  }
}`)])],-1)),t[30]||(t[30]=e("h3",{id:"markdown-agent-configuration",tabindex:"-1"},[o("Markdown Agent Configuration "),e("a",{class:"header-anchor",href:"#markdown-agent-configuration","aria-label":"Permalink to “Markdown Agent Configuration”"},"​")],-1)),t[31]||(t[31]=e("p",null,"Configure permissions in Markdown agents:",-1)),t[32]||(t[32]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Read-only code review
mode: subagent
permission:
  edit: deny
  bash: ask
  webfetch: deny
---

Only analyze code and suggest changes, don't execute any modifications.`)])],-1)),t[33]||(t[33]=n("",4)),t[34]||(t[34]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// ❌ Old syntax (deprecated, but still backward compatible)
{
  "tools": {
    "bash": true,
    "edit": false
  }
}

// ✅ New syntax
{
  "permission": {
    "bash": "allow",
    "edit": "deny"
  }
}`)])],-1)),t[35]||(t[35]=e("blockquote",null,[e("p",null,"Old configuration still works, OpenCode will automatically convert to new format.")],-1)),t[36]||(t[36]=e("hr",null,null,-1)),t[37]||(t[37]=e("h2",{id:"security-best-practices",tabindex:"-1"},[o("Security Best Practices "),e("a",{class:"header-anchor",href:"#security-best-practices","aria-label":"Permalink to “Security Best Practices”"},"​")],-1)),t[38]||(t[38]=e("h3",{id:"_1-protect-sensitive-files",tabindex:"-1"},[o("1. Protect Sensitive Files "),e("a",{class:"header-anchor",href:"#_1-protect-sensitive-files","aria-label":"Permalink to “1. Protect Sensitive Files”"},"​")],-1)),t[39]||(t[39]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "deny",
      "*.env.*": "deny",
      "*.key": "deny",
      "*.pem": "deny",
      "credentials/*": "deny"
    }
  }
}`)])],-1)),t[40]||(t[40]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},".env File Protection"),e("p",null,[o("OpenCode protects all "),e("code",null,".env"),o(" and "),e("code",null,".env.*"),o(" files by default, but allows direct access to "),e("code",null,".env.example"),o(" (example files don't contain sensitive information).")])],-1)),t[41]||(t[41]=e("h3",{id:"_2-restrict-dangerous-commands",tabindex:"-1"},[o("2. Restrict Dangerous Commands "),e("a",{class:"header-anchor",href:"#_2-restrict-dangerous-commands","aria-label":"Permalink to “2. Restrict Dangerous Commands”"},"​")],-1)),t[42]||(t[42]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm -rf *": "deny",
      "sudo *": "ask",
      "chmod *": "ask"
    }
  }
}`)])],-1)),t[43]||(t[43]=e("h3",{id:"_3-enterprise-environment-configuration",tabindex:"-1"},[o("3. Enterprise Environment Configuration "),e("a",{class:"header-anchor",href:"#_3-enterprise-environment-configuration","aria-label":"Permalink to “3. Enterprise Environment Configuration”"},"​")],-1)),t[44]||(t[44]=e("p",null,[o("Configure strict permissions in global config file "),e("code",null,"~/.config/opencode/opencode.json"),o(":")],-1)),t[45]||(t[45]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "external_directory": "deny",
    "bash": "ask",
    "websearch": "deny",
    "webfetch": "deny"
  }
}`)])],-1)),t[46]||(t[46]=e("h3",{id:"_4-development-environment-configuration",tabindex:"-1"},[o("4. Development Environment Configuration "),e("a",{class:"header-anchor",href:"#_4-development-environment-configuration","aria-label":"Permalink to “4. Development Environment Configuration”"},"​")],-1)),t[47]||(t[47]=e("p",null,[o("Configure relaxed permissions in project "),e("code",null,".opencode/opencode.json"),o(":")],-1)),t[48]||(t[48]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow"
    },
    "edit": {
      "src/*": "allow",
      "test/*": "allow",
      "*.md": "allow"
    },
    "external_directory": "allow"
  }
}`)])],-1)),t[49]||(t[49]=n("",21))])}const k=r(p,[["render",u]]);export{x as __pageData,k as default};
