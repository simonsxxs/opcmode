import{_ as n,c as s,o as l,a5 as a,j as e,a as t,bt as i}from"./chunks/framework.Dtwt352Q.js";const m=JSON.parse('{"title":"5.22 Debugging and Diagnostic Tools","description":"","frontmatter":{},"headers":[],"relativePath":"en/5-advanced/22-debugging.md","filePath":"en/5-advanced/22-debugging.md","lastUpdated":1772014034000}'),d={name:"en/5-advanced/22-debugging.md"};function r(c,o,g,u,p,h){return l(),s("div",null,[...o[0]||(o[0]=[a("",17),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug config")])],-1),e("p",null,[e("strong",null,"Example output"),t(" (excerpt):")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "keybinds": { ... },
  // Lists all loaded Agents (including default and custom)
  "agent": {
    "coder": { ... },
    "writer": { ... },
    "my-custom-agent": { ... } // Confirm if custom Agent exists
  },
  // May contain plugin-injected configuration
  "plugin_injected_config": { ... }
}`)])],-1),a("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Test search
opencode debug rg search "keyword"

# View file tree (directory structure as OpenCode sees it)
opencode debug rg tree`)])],-1),e("p",null,[e("strong",null,"Check file reading"),t(":")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Read file contents (in JSON format, with metadata)
opencode debug file read package.json`)])],-1),e("h3",{id:"_3-debug-agents-and-skills",tabindex:"-1"},[t("3. Debug Agents and Skills "),e("a",{class:"header-anchor",href:"#_3-debug-agents-and-skills","aria-label":"Permalink to “3. Debug Agents and Skills”"},"​")],-1),e("p",null,[t("When you've installed many plugins or manually added many Skills, you may encounter the "),e("strong",null,`"I installed it but don't know if it's working"`),t(" situation.")],-1),e("p",null,[e("strong",null,"Use this command to quickly know which Skills OpenCode has actually loaded"),t(". It lists Skill names and physical paths—the ultimate way to troubleshoot conflicts.")],-1),e("p",null,[e("strong",null,"List actually loaded Skills"),t(":")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug skill")])],-1),e("p",null,[e("strong",null,"Example output"),t(":")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`[
  {
    "name": "fanyi",
    "description": "...",
    // Confirm which file path is loaded
    "location": "/Users/user/.claude/skills/fanyi/SKILL.md"
  },
  {
    "name": "sync-changelog",
    // Confirm if it overrode a same-named Skill
    "location": "/Users/user/.config/opencode/skill/sync-changelog/SKILL.md"
  }
]`)])],-1),e("p",null,[e("strong",null,"View Agent configuration details"),t(":")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View audit-gemini's full config (including permissions, prompts)
opencode debug agent audit-gemini`)])],-1),e("p",null,[e("strong",null,"[Advanced] Manually execute Agent tools"),t(": Want to test if an Agent can successfully call a certain tool? Test it directly:")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Test audit-gemini using bash tool
opencode debug agent audit-gemini --tool bash --params '{"command":"ls -la"}'`)])],-1),e("p",null,[e("strong",null,"List all Skills"),t(":")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug skill")])],-1),e("h3",{id:"_4-debug-lsp-language-server",tabindex:"-1"},[t("4. Debug LSP (Language Server) "),e("a",{class:"header-anchor",href:"#_4-debug-lsp-language-server","aria-label":"Permalink to “4. Debug LSP (Language Server)”"},"​")],-1),e("p",null,"If code completion or go-to-definition isn't working, there may be an LSP issue.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Get diagnostics for a file (errors/warnings)
opencode debug lsp diagnostics src/index.ts

# Search workspace symbols
opencode debug lsp symbols "AppController"

# Get symbol structure for a single file
opencode debug lsp document-symbols src/index.ts`)])],-1),e("h3",{id:"_5-view-system-status-paths-scrap",tabindex:"-1"},[t("5. View System Status (Paths & Scrap) "),e("a",{class:"header-anchor",href:"#_5-view-system-status-paths-scrap","aria-label":"Permalink to “5. View System Status (Paths & Scrap)”"},"​")],-1),e("p",null,[e("strong",null,"View key paths"),t(": Don't know where data is stored?")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug paths")])],-1),e("p",null,[e("strong",null,"Example output"),t(":")],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`data       /Users/username/.local/share/opencode
config     /Users/username/.config/opencode
log        /Users/username/.local/share/opencode/log
cache      /Users/username/.cache/opencode`)])],-1),e("p",null,[e("strong",null,"View project history (Scrap)"),t(": OpenCode records all projects (Worktrees) you've opened.")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug scrap")])],-1),e("h3",{id:"_6-debug-snapshots",tabindex:"-1"},[t("6. Debug Snapshots "),e("a",{class:"header-anchor",href:"#_6-debug-snapshots","aria-label":"Permalink to “6. Debug Snapshots”"},"​")],-1),e("p",null,"OpenCode's context compression relies on a snapshot mechanism.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Track current snapshot state
opencode debug snapshot track

# View snapshot diff
opencode debug snapshot diff <hash>`)])],-1),a("",8)])])}const f=n(d,[["render",r]]);export{m as __pageData,f as default};
