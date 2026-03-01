import{_ as l,c as n,o as s,a5 as a,j as e,a as t}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"Built-in Tools","description":"","frontmatter":{},"headers":[],"relativePath":"en/5-advanced/17-tools.md","filePath":"en/5-advanced/17-tools.md","lastUpdated":1772014034000}'),r={name:"en/5-advanced/17-tools.md"};function i(d,o,c,u,p,h){return s(),n("div",null,[...o[0]||(o[0]=[a("",8),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"How to Enable"),e("p",null,[t("Configure in "),e("code",null,"opencode.json"),t(":")]),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true
  }
}`)])]),e("p",null,"Or set environment variables:"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export OPENCODE_ENABLE_EXA=true
export OPENCODE_EXPERIMENTAL_LSP_TOOL=1`)])])],-1),e("hr",null,null,-1),e("h2",{id:"configuration",tabindex:"-1"},[t("Configuration "),e("a",{class:"header-anchor",href:"#configuration","aria-label":"Permalink to “Configuration”"},"​")],-1),e("p",null,"You can configure tools globally or per-agent. Agent configuration overrides global settings.",-1),e("p",null,"By default, all tools are set to true. To disable a tool, set it to false.",-1),e("h3",{id:"global-configuration",tabindex:"-1"},[t("Global Configuration "),e("a",{class:"header-anchor",href:"#global-configuration","aria-label":"Permalink to “Global Configuration”"},"​")],-1),e("p",null,"Use the tools option to globally disable or enable tools:",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tools": {
    "write": false,
    "bash": false,
    "webfetch": true
  }
}`)])],-1),e("h3",{id:"per-agent-configuration",tabindex:"-1"},[t("Per-Agent Configuration "),e("a",{class:"header-anchor",href:"#per-agent-configuration","aria-label":"Permalink to “Per-Agent Configuration”"},"​")],-1),e("p",null,"Use tools in agent definitions to override global settings:",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "tools": {
    "write": true,
    "bash": true
  },
  "agent": {
    "plan": {
      "tools": {
        "write": false,
        "bash": false
      }
    }
  }
}`)])],-1),e("h2",{id:"built-in-tools-list",tabindex:"-1"},[t("Built-in Tools List "),e("a",{class:"header-anchor",href:"#built-in-tools-list","aria-label":"Permalink to “Built-in Tools List”"},"​")],-1),e("h3",{id:"bash",tabindex:"-1"},[t("bash "),e("a",{class:"header-anchor",href:"#bash","aria-label":"Permalink to “bash”"},"​")],-1),e("p",null,"Execute shell commands in the project environment.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "bash": true
  }
}`)])],-1),a("",4),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "edit": true
  }
}`)])],-1),a("",3),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "write": true
  }
}`)])],-1),a("",3),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "read": true
  }
}`)])],-1),e("details",{class:"details custom-block"},[e("summary",null,"AI Call Parameters"),e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"Parameter"),e("th",null,"Type"),e("th",null,"Required"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"filePath")]),e("td",null,"string"),e("td",null,"✅"),e("td",null,"Absolute path to file or directory")]),e("tr",null,[e("td",null,[e("code",null,"offset")]),e("td",null,"number"),e("td",null,"❌"),e("td",null,[t("Line/entry to start reading from ("),e("strong",null,"1-indexed"),t(", counting from 1)")])]),e("tr",null,[e("td",null,[e("code",null,"limit")]),e("td",null,"number"),e("td",null,"❌"),e("td",null,"Maximum lines/entries to read (default 2000)")])])]),e("p",null,[e("strong",null,"File Read Limits"),t(":")]),e("ul",null,[e("li",null,[t("Default reads 2000 lines ("),e("code",null,"DEFAULT_READ_LIMIT"),t(")")]),e("li",null,[t("Single lines exceeding 2000 characters are truncated ("),e("code",null,"MAX_LINE_LENGTH"),t(")")]),e("li",null,[t("Total output limit 50KB ("),e("code",null,"MAX_BYTES"),t(")")])]),e("p",null,[e("strong",null,"Directory Reading"),t(" (v1.1.60+):")]),e("ul",null,[e("li",null,[t("Returns list of entries when reading directories, subdirectories end with "),e("code",null,"/")]),e("li",null,"Entries sorted alphabetically"),e("li",null,[t("Supports "),e("code",null,"offset"),t(" and "),e("code",null,"limit"),t(" pagination (same as file reading, 1-indexed)")])]),e("p",null,[e("strong",null,"Directory Reading Output Example"),t(":")]),e("div",{class:"language-xml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"xml"),e("pre",null,[e("code",{"v-pre":""},`<path>/Users/xxx/project/src</path>
<type>directory</type>
<entries>
components/
utils/
index.ts
(3 entries)
</entries>`)])]),e("p",null,[e("strong",null,"Special Files"),t(": Supports reading images (PNG, JPG, GIF, excluding SVG) and PDFs, converted to base64 attachments. Binary files (.zip, .exe, etc.) will error.")]),e("p",null,[e("strong",null,"Smart Correction"),t(": When file doesn't exist, searches for similar filenames in the same directory and suggests.")])],-1),e("h3",{id:"grep",tabindex:"-1"},[t("grep "),e("a",{class:"header-anchor",href:"#grep","aria-label":"Permalink to “grep”"},"​")],-1),e("p",null,"Search file contents using regular expressions.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "grep": true
  }
}`)])],-1),a("",3),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "glob": true
  }
}`)])],-1),a("",3),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "list": true
  }
}`)])],-1),e("h3",{id:"lsp-experimental",tabindex:"-1"},[t("lsp (Experimental) "),e("a",{class:"header-anchor",href:"#lsp-experimental","aria-label":"Permalink to “lsp (Experimental)”"},"​")],-1),e("p",null,"Interact with configured LSP servers to get code intelligence features like definitions, references, hover information, and call hierarchy.",-1),e("h3",{id:"patch",tabindex:"-1"},[t("patch "),e("a",{class:"header-anchor",href:"#patch","aria-label":"Permalink to “patch”"},"​")],-1),e("p",null,"Apply patches to files.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "patch": true
  }
}`)])],-1),e("h3",{id:"multiedit",tabindex:"-1"},[t("multiedit "),e("a",{class:"header-anchor",href:"#multiedit","aria-label":"Permalink to “multiedit”"},"​")],-1),e("p",null,"Batch modify multiple locations in the same file.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "multiedit": true
  }
}`)])],-1),e("h3",{id:"skill",tabindex:"-1"},[t("skill "),e("a",{class:"header-anchor",href:"#skill","aria-label":"Permalink to “skill”"},"​")],-1),e("p",null,"Load SKILL.md files and return their content in the conversation.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "skill": true
  }
}`)])],-1),e("h3",{id:"todowrite",tabindex:"-1"},[t("todowrite "),e("a",{class:"header-anchor",href:"#todowrite","aria-label":"Permalink to “todowrite”"},"​")],-1),e("p",null,"Manage todo lists during coding sessions.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "todowrite": true
  }
}`)])],-1),e("h3",{id:"todoread",tabindex:"-1"},[t("todoread "),e("a",{class:"header-anchor",href:"#todoread","aria-label":"Permalink to “todoread”"},"​")],-1),e("p",null,"Read existing todo lists.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "todoread": true
  }
}`)])],-1),e("h3",{id:"question",tabindex:"-1"},[t("question "),e("a",{class:"header-anchor",href:"#question","aria-label":"Permalink to “question”"},"​")],-1),e("p",null,"Allows AI to ask you questions while performing tasks.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "question": true
  }
}`)])],-1),e("p",null,"This tool enables AI to:",-1),e("ul",null,[e("li",null,"Collect your preferences or requirements"),e("li",null,"Clarify ambiguous instructions"),e("li",null,"Get decisions on implementation choices"),e("li",null,"Provide multiple directions for you to choose")],-1),e("p",null,"Each question includes a title, question text, and list of options. You can select from options or enter a custom answer. When there are multiple questions, you can navigate between them before submitting.",-1),e("p",null,[e("strong",null,"Usage Example"),t(":")],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`You: Help me refactor this module

AI: I noticed several refactoring approaches, which do you prefer?
    ○ Extract into independent functions
    ○ Split into multiple classes
    ○ Keep structure, only optimize naming
    [Enter custom answer]`)])],-1),e("p",null,[e("strong",null,"Note"),t(": "),e("code",null,"todowrite"),t(" and "),e("code",null,"todoread"),t(" tools are disabled by default in subagents, but "),e("code",null,"question"),t(" tool is enabled by default.")],-1),e("h3",{id:"webfetch",tabindex:"-1"},[t("webfetch "),e("a",{class:"header-anchor",href:"#webfetch","aria-label":"Permalink to “webfetch”"},"​")],-1),e("p",null,"Fetch web page content, supporting HTML, Markdown, plain text, and images.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "webfetch": true
  }
}`)])],-1),a("",3),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "websearch": true
  }
}`)])],-1),e("blockquote",null,[e("p",null,"Requires setting environment variable OPENCODE_ENABLE_EXA=true or using OpenCode Zen hosted models.")],-1),e("h3",{id:"codesearch-experimental",tabindex:"-1"},[t("codesearch (Experimental) "),e("a",{class:"header-anchor",href:"#codesearch-experimental","aria-label":"Permalink to “codesearch (Experimental)”"},"​")],-1),e("p",null,"Search codebases and online resources to find relevant APIs, libraries, and documentation.",-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "codesearch": true
  }
}`)])],-1),a("",5),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true
  }
}`)])],-1),e("details",{class:"details custom-block"},[e("summary",null,"AI Call Parameters"),e("p",null,[e("strong",null,"Parameter Structure"),t(":")]),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`{
  tool_calls: [
    { tool: "tool_name", parameters: { /* params */ } },
    { tool: "tool_name", parameters: { /* params */ } },
    // ... up to 25
  ]
}`)])]),e("p",null,[e("strong",null,"Actual Call Example"),t(":")]),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`[
  {"tool": "read", "parameters": {"filePath": "src/index.ts", "limit": 350}},
  {"tool": "grep", "parameters": {"pattern": "Session\\\\.updatePart", "include": "src/**/*.ts"}},
  {"tool": "bash", "parameters": {"command": "git status", "description": "Shows working tree status"}}
]`)])]),e("p",null,[e("strong",null,"Return Format"),t(":")]),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "title": "Batch execution (3/3 successful)",
  "output": "All 3 tools executed successfully.\\n\\nKeep using the batch tool for optimal performance in your next response!",
  "metadata": {
    "totalCalls": 3,
    "successful": 3,
    "failed": 0,
    "tools": ["read", "grep", "bash"],
    "details": [
      {"tool": "read", "success": true},
      {"tool": "grep", "success": true},
      {"tool": "bash", "success": true}
    ]
  }
}`)])])],-1),a("",10),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`!node_modules/
!dist/
!build/`)])],-1),a("",6),e("ol",null,[e("li",null,[e("p",null,[e("strong",null,"First glob to find files, then grep to search content")]),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`You: Help me find where interface User is defined in all TypeScript files
AI: First use glob to find *.ts files, then use grep to search "interface User"`)])])]),e("li",null,[e("p",null,[e("strong",null,"codesearch for examples, grep for local implementation")]),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`You: I want to know how to properly clean up React useEffect, then check if our project uses it correctly
AI: First use codesearch to check docs, then use grep to search useEffect locally`)])])])],-1),a("",6)])])}const b=l(r,[["render",i]]);export{g as __pageData,b as default};
