import{_ as r,c as o,o as l,a5 as t,j as e,a}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"Experimental Features Overview","description":"Complete list of OpenCode experimental features, how to enable them, and use cases","frontmatter":{"title":"Experimental Features Overview","description":"Complete list of OpenCode experimental features, how to enable them, and use cases"},"headers":[],"relativePath":"en/appendix/experimental-features.md","filePath":"en/appendix/experimental-features.md","lastUpdated":1772014034000}'),i={name:"en/appendix/experimental-features.md"};function s(d,n,c,p,h,u){return l(),o("div",null,[...n[0]||(n[0]=[t("",12),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# macOS / Linux: Add to ~/.zshrc or ~/.bashrc
export OPENCODE_EXPERIMENTAL=true

# Then reload
source ~/.zshrc`)])],-1),e("h3",{id:"option-2-enable-individual-features",tabindex:"-1"},[a("Option 2: Enable Individual Features "),e("a",{class:"header-anchor",href:"#option-2-enable-individual-features","aria-label":"Permalink to “Option 2: Enable Individual Features”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Enable only the features you need
export OPENCODE_EXPERIMENTAL_LSP_TOOL=true
export OPENCODE_EXPERIMENTAL_PLAN_MODE=true`)])],-1),t("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export OPENCODE_ENABLE_EXA=true")])],-1),t("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export OPENCODE_EXPERIMENTAL_LSP_TOOL=true
export OPENCODE_EXPERIMENTAL_LSP_TY=true`)])],-1),t("",6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export OPENCODE_EXPERIMENTAL_PLAN_MODE=true")])],-1),t("",8),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export OPENCODE_EXPERIMENTAL_ICON_DISCOVERY=true
export OPENCODE_EXPERIMENTAL_MARKDOWN=true`)])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export OPENCODE_EXPERIMENTAL_OXFMT=true")])],-1),t("",6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set bash timeout to 2 minutes
export OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS=120000

# Limit LLM output to max 8192 tokens
export OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX=8192`)])],-1),e("hr",null,null,-1),e("h2",{id:"experimental-configuration-in-opencode-json",tabindex:"-1"},[a("experimental Configuration in opencode.json "),e("a",{class:"header-anchor",href:"#experimental-configuration-in-opencode-json","aria-label":"Permalink to “experimental Configuration in opencode.json”"},"​")],-1),e("p",null,[a("Besides environment variables, "),e("code",null,"opencode.json"),a(" also has an "),e("code",null,"experimental"),a(" field for configuring another category of experimental features:")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true,           // Enable batch operation tools
    "openTelemetry": true,        // Enable OpenTelemetry tracing
    "disable_paste_summary": true, // Disable auto-summary for pasted text
    "continue_loop_on_deny": true, // Continue thinking when tool is denied
    "primary_tools": ["tool1"],   // Tools restricted to Primary Agent
    "mcp_timeout": 30000          // MCP request timeout (milliseconds)
  }
}`)])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# ═══════════════════════════════════════════════════════════════
# OpenCode Experimental Features Configuration
# Add to ~/.zshrc or ~/.bashrc, then source it
# ═══════════════════════════════════════════════════════════════

# Enable all experimental features at once (the individual switches below are automatically included)
# export OPENCODE_EXPERIMENTAL=true

# ───────────────────────────────────────────────────────────────
# Web Search (requires Exa API, or use Zen hosted models for auto-enable)
# ───────────────────────────────────────────────────────────────
export OPENCODE_ENABLE_EXA=true           # Enable websearch tool

# ───────────────────────────────────────────────────────────────
# LSP (Language Server Protocol) Enhancements
# ───────────────────────────────────────────────────────────────
export OPENCODE_EXPERIMENTAL_LSP_TOOL=true  # Enable LSP tools
export OPENCODE_EXPERIMENTAL_LSP_TY=true    # Enable experimental ty Python server

# ───────────────────────────────────────────────────────────────
# UI & Interaction
# ───────────────────────────────────────────────────────────────
export OPENCODE_EXPERIMENTAL_MARKDOWN=true         # Experimental Markdown rendering
export OPENCODE_EXPERIMENTAL_ICON_DISCOVERY=true   # Auto-discover project icons

# ───────────────────────────────────────────────────────────────
# Workflow Enhancements
# ───────────────────────────────────────────────────────────────
export OPENCODE_EXPERIMENTAL_PLAN_MODE=true  # Enable plan mode

# ───────────────────────────────────────────────────────────────
# Performance & Formatting
# ───────────────────────────────────────────────────────────────
export OPENCODE_EXPERIMENTAL_OXFMT=true      # Enable oxfmt formatter

# ───────────────────────────────────────────────────────────────
# Timeouts & Limits (optional)
# ───────────────────────────────────────────────────────────────
# export OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS=120000
# export OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX=8192`)])],-1),e("hr",null,null,-1),e("h2",{id:"faq",tabindex:"-1"},[a("FAQ "),e("a",{class:"header-anchor",href:"#faq","aria-label":"Permalink to “FAQ”"},"​")],-1),e("h3",{id:"no-effect-after-enabling",tabindex:"-1"},[a("No effect after enabling? "),e("a",{class:"header-anchor",href:"#no-effect-after-enabling","aria-label":"Permalink to “No effect after enabling?”"},"​")],-1),e("ol",null,[e("li",null,[e("p",null,[e("strong",null,"Confirm configuration has been reloaded"),a(":")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"source ~/.zshrc  # or source ~/.bashrc")])])]),e("li",null,[e("p",null,[e("strong",null,"Confirm OpenCode has been restarted"),a(": Environment variables are read at process startup")])]),e("li",null,[e("p",null,[e("strong",null,"Confirm variable is set"),a(":")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"env | grep OPENCODE")])])])],-1),t("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"# export OPENCODE_EXPERIMENTAL_PLAN_MODE=true  # Commented out = disabled")])],-1),t("",3)])])}const b=r(i,[["render",s]]);export{_ as __pageData,b as default};
