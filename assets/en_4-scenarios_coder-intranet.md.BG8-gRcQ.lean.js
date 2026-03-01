import{_ as a,c as l,o as r,a5 as t,j as e,a as o,aH as i}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"B6 Air-gapped / On-premise Deployment","description":"Configure OpenCode for air-gapped or on-premise enterprise environments, disable all external network requests, and use local model lists with internal AI gateways.","frontmatter":{"title":"B6 Air-gapped / On-premise Deployment","subtitle":"Running OpenCode in isolated enterprise environments","course":"OpenCode Practical Course","stage":"Stage 4","lesson":"4.B6","duration":"25 minutes","practice":"15 minutes","level":"Advanced","description":"Configure OpenCode for air-gapped or on-premise enterprise environments, disable all external network requests, and use local model lists with internal AI gateways.","tags":["air-gapped","on-premise","enterprise","deployment","compliance"],"prerequisite":["1.4 Connect Models","5.1 Configuration Reference"]},"headers":[],"relativePath":"en/4-scenarios/coder-intranet.md","filePath":"en/4-scenarios/coder-intranet.md","lastUpdated":1772014034000}'),s={name:"en/4-scenarios/coder-intranet.md"};function d(c,n,p,u,h,g){return r(),l("div",null,[...n[0]||(n[0]=[t("",29),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"curl -o models.json https://models.dev/api.json")])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Recommended location: ~/.cache/opencode/
mkdir -p ~/.cache/opencode
cp models.json ~/.cache/opencode/models.json`)])],-1),e("h3",{id:"step-3-configure-environment-variables",tabindex:"-1"},[o("Step 3: Configure Environment Variables "),e("a",{class:"header-anchor",href:"#step-3-configure-environment-variables","aria-label":"Permalink to “Step 3: Configure Environment Variables”"},"​")],-1),e("p",null,[e("strong",null,"Why"),e("br"),o(" This is the core step. After setting these environment variables, OpenCode won't attempt any external network requests.")],-1),e("div",{class:"vp-code-group"},[e("div",{class:"tabs"},[e("input",{type:"radio",name:"group-257",id:"tab-258",checked:""}),e("label",{"data-title":"macOS/Linux - Temporary",for:"tab-258"},"macOS/Linux - Temporary"),e("input",{type:"radio",name:"group-257",id:"tab-259"}),e("label",{"data-title":"macOS/Linux - Permanent",for:"tab-259"},"macOS/Linux - Permanent"),e("input",{type:"radio",name:"group-257",id:"tab-260"}),e("label",{"data-title":"Windows PowerShell - Temporary",for:"tab-260"},"Windows PowerShell - Temporary")]),e("div",{class:"blocks"},[e("div",{class:"language-bash active"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export OPENCODE_DISABLE_MODELS_FETCH=true
export OPENCODE_MODELS_PATH=~/.cache/opencode/models.json
export OPENCODE_DISABLE_DEFAULT_PLUGINS=true
export OPENCODE_DISABLE_AUTOUPDATE=true
export OPENCODE_DISABLE_LSP_DOWNLOAD=true`)])]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Add to ~/.bashrc or ~/.zshrc
cat >> ~/.zshrc << 'EOF'
# OpenCode air-gapped configuration
export OPENCODE_DISABLE_MODELS_FETCH=true
export OPENCODE_MODELS_PATH=~/.cache/opencode/models.json
export OPENCODE_DISABLE_DEFAULT_PLUGINS=true
export OPENCODE_DISABLE_AUTOUPDATE=true
export OPENCODE_DISABLE_LSP_DOWNLOAD=true
EOF

source ~/.zshrc`)])]),e("div",{class:"language-powershell"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",null,[e("code",{"v-pre":""},`$env:OPENCODE_DISABLE_MODELS_FETCH = "true"
$env:OPENCODE_MODELS_PATH = "$env:USERPROFILE\\.cache\\opencode\\models.json"
$env:OPENCODE_DISABLE_DEFAULT_PLUGINS = "true"
$env:OPENCODE_DISABLE_AUTOUPDATE = "true"
$env:OPENCODE_DISABLE_LSP_DOWNLOAD = "true"`)])])])],-1),e("h3",{id:"step-4-resolve-dependency-installation-hang-critical-for-air-gapped-⚠️",tabindex:"-1"},[o("Step 4: Resolve Dependency Installation Hang (Critical for Air-gapped ⚠️) "),e("a",{class:"header-anchor",href:"#step-4-resolve-dependency-installation-hang-critical-for-air-gapped-⚠️","aria-label":"Permalink to “Step 4: Resolve Dependency Installation Hang (Critical for Air-gapped ⚠️)”"},"​")],-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"⚠️ Important"),e("p",null,[o("This is the "),e("strong",null,"most common"),o(" cause of startup hangs in air-gapped environments! Even with "),e("code",null,"OPENCODE_DISABLE_DEFAULT_PLUGINS=true"),o(", OpenCode still attempts to install the "),e("code",null,"@opencode-ai/plugin"),o(" SDK, which is "),e("strong",null,"not controlled by any environment variable"),o(".")]),e("p",null,[e("strong",null,"Root cause"),o(": The installation logic in "),e("code",null,"src/config/config.ts:237-257"),o(" executes "),e("code",null,"bun add"),o(" and "),e("code",null,"bun install"),o(", which hangs in air-gapped environments.")]),e("p",null,[e("strong",null,"Solution (Recommended - Option 1)"),o(":")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Create an empty node_modules directory to skip installation checks
mkdir -p ~/.config/opencode/node_modules

# Verify the directory was created
ls -la ~/.config/opencode/
# You should see the node_modules directory`)])]),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"💡 Alternative Solutions"),e("p",null,"If Option 1 doesn't work for you:"),e("ul",null,[e("li",null,[e("strong",null,"Option 2"),o(": Configure an internal npm mirror ("),e("code",null,"~/.bunfig.toml"),o(" or "),e("code",null,".npmrc"),o(")")]),e("li",null,[e("strong",null,"Option 3"),o(": Pre-install dependencies on an internet-connected machine, then copy "),e("code",null,"~/.config/opencode/"),o(" (and project "),e("code",null,".opencode/"),o(") to the air-gapped machine")]),e("li",null,[e("strong",null,"Option 4"),o(": Temporarily disable project config scanning: "),e("code",null,"OPENCODE_DISABLE_PROJECT_CONFIG=true")])]),e("p",null,'See "Pitfalls → Dependency Installation Hang (@opencode-ai/plugin)" below for details.')])],-1),e("h3",{id:"step-5-configure-internal-ai-gateway",tabindex:"-1"},[o("Step 5: Configure Internal AI Gateway "),e("a",{class:"header-anchor",href:"#step-5-configure-internal-ai-gateway","aria-label":"Permalink to “Step 5: Configure Internal AI Gateway”"},"​")],-1),e("p",null,[e("strong",null,"Why"),e("br"),o(" After disabling external network access, you need to tell OpenCode which internal models to use.")],-1),e("p",null,[o("Create or edit "),e("code",null,"~/.config/opencode/opencode.json"),o(":")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  
  // Disable auto-update (belt and suspenders, env var already set)
  "autoupdate": false,
  
  // Only enable your internal provider
  "enabled_providers": ["corp-gateway"],
  
  // Configure internal AI gateway
  "provider": {
    "corp-gateway": {
      "name": "Corporate AI Gateway",
      "env": ["CORP_AI_TOKEN"],
      "api": "https://ai-gateway.company.internal/v1",
      "npm": "@ai-sdk/openai-compatible",
      "models": {
        "qwen2.5-72b": {
          "name": "Qwen 2.5 72B",
          "tool_call": true,
          "reasoning": true,
          "temperature": true,
          "limit": { "context": 128000, "output": 8192 }
        },
        "glm-4": {
          "name": "GLM-4",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 128000, "output": 4096 }
        }
      }
    }
  },
  
  // Default to internal model
  "model": "corp-gateway/qwen2.5-72b"
}`)])],-1),t("",3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'export CORP_AI_TOKEN="your-internal-token"')])],-1),e("h3",{id:"step-7-verify-configuration",tabindex:"-1"},[o("Step 7: Verify Configuration "),e("a",{class:"header-anchor",href:"#step-7-verify-configuration","aria-label":"Permalink to “Step 7: Verify Configuration”"},"​")],-1),e("p",null,[e("strong",null,"Why"),e("br"),o(" Ensure all configurations are effective and OpenCode can start normally.")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'opencode run -m corp-gateway/qwen2.5-72b "1+1=?" --print-logs')])],-1),e("p",null,[e("strong",null,"Expected result"),o(":")],-1),e("ul",null,[e("li",null,"No network timeout errors"),e("li",null,[o("Model returns result correctly (e.g., "),e("code",null,"2"),o(")")])],-1),e("p",null,[o("If it still hangs, add "),e("code",null,"--log-level DEBUG"),o(" for detailed logs:")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'opencode run -m corp-gateway/qwen2.5-72b "1+1=?" --print-logs --log-level DEBUG')])],-1),t("",10),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`bun add @opencode-ai/plugin@<version> --exact
bun install`)])],-1),e("p",null,[o("If "),e("code",null,"node_modules/"),o(` doesn't exist in a directory, OpenCode waits for installation to complete before continuing; in air-gapped environments without npm registry access, this appears as "hanging".`)],-1),e("p",null,[e("strong",null,"First, Confirm This Is the Issue")],-1),e("p",null,"Run with DEBUG logging:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'opencode run "test" --print-logs --log-level DEBUG')])],-1),e("p",null,[o("If you see "),e("code",null,'cmd=[..., "add", "@opencode-ai/plugin@..."]'),o(" in logs with "),e("code",null,"service=bun"),o(", it's likely the dependency installation hanging.")],-1),e("p",null,[e("strong",null,"Quick Fix (Stop Waiting for Installation)")],-1),e("p",null,[o("Add "),e("code",null,"node_modules/"),o(" to all directories OpenCode might scan:")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Global config directory
mkdir -p ~/.config/opencode/node_modules

# If running in a project with .opencode/, add one there too
mkdir -p ./.opencode/node_modules`)])],-1),t("",5),e("div",{class:"language-toml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"toml"),e("pre",null,[e("code",{"v-pre":""},`[install]
registry = "http://your-internal-npm-registry/"`)])],-1),e("ol",{start:"2"},[e("li",null,"Pre-install and copy dependencies")],-1),e("p",null,[o("On an internet-connected machine, let "),e("code",null,"~/.config/opencode/"),o(" and project "),e("code",null,".opencode/"),o(" complete dependency installation, then copy both directories to the air-gapped machine.")],-1),e("ol",{start:"3"},[e("li",null,"Temporarily disable project config scanning")],-1),e("p",null,[o("If you don't need project-level "),e("code",null,".opencode/"),o(" (using only global config):")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export OPENCODE_DISABLE_PROJECT_CONFIG=true")])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# macOS
brew install ripgrep

# Linux
apt install ripgrep  # Ubuntu/Debian
yum install ripgrep  # CentOS/RHEL

# Windows
scoop install ripgrep
# or
choco install ripgrep

rg --version`)])],-1),e("h3",{id:"how-to-verify-environment-variables-are-set",tabindex:"-1"},[o("How to Verify Environment Variables Are Set? "),e("a",{class:"header-anchor",href:"#how-to-verify-environment-variables-are-set","aria-label":"Permalink to “How to Verify Environment Variables Are Set?”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"env | grep OPENCODE")])],-1),e("h3",{id:"how-to-identify-external-network-requests",tabindex:"-1"},[o("How to Identify External Network Requests? "),e("a",{class:"header-anchor",href:"#how-to-identify-external-network-requests","aria-label":"Permalink to “How to Identify External Network Requests?”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'opencode run "test" --print-logs --log-level DEBUG')])],-1),t("",9),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
# save as: setup-airgapped.sh

# Create directories
mkdir -p ~/.cache/opencode

# Check model list file
if [ ! -f ~/.cache/opencode/models.json ]; then
    echo "❌ Please download models.json to ~/.cache/opencode/models.json first"
    exit 1
fi

# Resolve SDK installation hang (critical step!)
mkdir -p ~/.config/opencode/node_modules
echo "✅ Created ~/.config/opencode/node_modules directory"

# If current directory has .opencode/, add one there too
if [ -d ./.opencode ]; then
  mkdir -p ./.opencode/node_modules
  echo "✅ Created ./.opencode/node_modules directory"
fi

# Add environment variables to shell config
SHELL_RC="$HOME/.$(basename $SHELL)rc"
cat >> "$SHELL_RC" << 'EOF'

# OpenCode air-gapped configuration
export OPENCODE_DISABLE_MODELS_FETCH=true
export OPENCODE_MODELS_PATH=~/.cache/opencode/models.json
export OPENCODE_DISABLE_DEFAULT_PLUGINS=true
export OPENCODE_DISABLE_AUTOUPDATE=true
export OPENCODE_DISABLE_LSP_DOWNLOAD=true
EOF

echo "✅ Environment variables added to $SHELL_RC"
echo "Please run: source $SHELL_RC"`)])],-1),e("p",null,[e("strong",null,"Advanced Script (Internal Mirror: Auto-fetch model list)"),o(":")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
# save as: setup-airgapped-advanced.sh

# Company internal models.dev server
MODELS_MIRROR="https://models-mirror.company.internal"

# Add environment variables to shell config
SHELL_RC="$HOME/.$(basename $SHELL)rc"
cat >> "$SHELL_RC" << EOF

# OpenCode air-gapped configuration (using internal mirror)
unset OPENCODE_DISABLE_MODELS_FETCH
export OPENCODE_MODELS_URL="$MODELS_MIRROR"
export OPENCODE_DISABLE_DEFAULT_PLUGINS=true
export OPENCODE_DISABLE_AUTOUPDATE=true
export OPENCODE_DISABLE_LSP_DOWNLOAD=true
EOF

# Resolve SDK installation hang
mkdir -p ~/.config/opencode/node_modules
echo "✅ Created ~/.config/opencode/node_modules directory"

echo "✅ Environment variables added to $SHELL_RC"
echo "Configured internal models.dev mirror: $MODELS_MIRROR"
echo "Please run: source $SHELL_RC"`)])],-1),t("",5),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"💡 Additional Tip"),e("p",null,[o("If your company has an internal models.dev server, you can use "),e("code",null,"OPENCODE_MODELS_URL"),o(" instead of "),e("code",null,"OPENCODE_MODELS_PATH"),o(":")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export OPENCODE_MODELS_URL=https://models-mirror.company.internal")])]),e("p",null,[o("This way OpenCode fetches the model list from your internal server without manual "),e("code",null,"models.json"),o(" download.")])],-1),t("",6)])])}const E=a(s,[["render",d]]);export{_ as __pageData,E as default};
