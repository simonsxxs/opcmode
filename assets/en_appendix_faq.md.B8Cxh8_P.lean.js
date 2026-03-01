import{_ as t,I as a,c as r,o as i,a5 as l,j as e,J as d,a as o,bA as u}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"Frequently Asked Questions (FAQ)","description":"Common questions and answers about using OpenCode","frontmatter":{"title":"Frequently Asked Questions (FAQ)","description":"Common questions and answers about using OpenCode"},"headers":[],"relativePath":"en/appendix/faq.md","filePath":"en/appendix/faq.md","lastUpdated":1772014034000}'),p={name:"en/appendix/faq.md"};function g(m,n,c,h,b,f){const s=a("AdInArticle");return i(),r("div",null,[n[0]||(n[0]=l("",9)),n[1]||(n[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Check installation location
which opencode

# If no output, manually add to PATH
# macOS/Linux
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Or use npm global install
npm install -g @anthropic-ai/opencode`)])],-1)),n[2]||(n[2]=e("hr",null,null,-1)),n[3]||(n[3]=e("h3",{id:"q-installation-fails-on-windows",tabindex:"-1"},[o("Q: Installation fails on Windows "),e("a",{class:"header-anchor",href:"#q-installation-fails-on-windows","aria-label":"Permalink to “Q: Installation fails on Windows”"},"​")],-1)),n[4]||(n[4]=e("p",null,[e("strong",null,"A"),o(": We recommend using a package manager:")],-1)),n[5]||(n[5]=e("div",{class:"language-powershell"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",null,[e("code",{"v-pre":""},`# Using Scoop
scoop install opencode

# Or using Chocolatey
choco install opencode

# Or using npm
npm install -g @anthropic-ai/opencode`)])],-1)),n[6]||(n[6]=e("p",null,"Make sure to run the terminal as Administrator.",-1)),n[7]||(n[7]=e("hr",null,null,-1)),n[8]||(n[8]=e("h3",{id:"q-macos-shows-cannot-verify-developer",tabindex:"-1"},[o('Q: macOS shows "cannot verify developer" '),e("a",{class:"header-anchor",href:"#q-macos-shows-cannot-verify-developer","aria-label":'Permalink to “Q: macOS shows "cannot verify developer"”'},"​")],-1)),n[9]||(n[9]=e("p",null,[e("strong",null,"A"),o(": This is a macOS security restriction.")],-1)),n[10]||(n[10]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Method 1: Right-click the app and select "Open"
# Method 2: Run in terminal
xattr -d com.apple.quarantine /path/to/opencode`)])],-1)),n[11]||(n[11]=e("hr",null,null,-1)),n[12]||(n[12]=e("h3",{id:"q-features-break-after-version-update",tabindex:"-1"},[o("Q: Features break after version update "),e("a",{class:"header-anchor",href:"#q-features-break-after-version-update","aria-label":"Permalink to “Q: Features break after version update”"},"​")],-1)),n[13]||(n[13]=e("p",null,[e("strong",null,"A"),o(": Try clearing the cache and reinstalling:")],-1)),n[14]||(n[14]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Clear cache
rm -rf ~/.cache/opencode

# Reinstall
opencode upgrade --force`)])],-1)),n[15]||(n[15]=e("hr",null,null,-1)),n[16]||(n[16]=e("h2",{id:"network-issues",tabindex:"-1"},[o("Network Issues "),e("a",{class:"header-anchor",href:"#network-issues","aria-label":"Permalink to “Network Issues”"},"​")],-1)),n[17]||(n[17]=e("h3",{id:"q-connection-timeout-with-etimedout-or-econnrefused",tabindex:"-1"},[o('Q: Connection timeout with "ETIMEDOUT" or "ECONNREFUSED" '),e("a",{class:"header-anchor",href:"#q-connection-timeout-with-etimedout-or-econnrefused","aria-label":'Permalink to “Q: Connection timeout with "ETIMEDOUT" or "ECONNREFUSED"”'},"​")],-1)),n[18]||(n[18]=e("p",null,[e("strong",null,"A"),o(": This is a network connectivity issue.")],-1)),n[19]||(n[19]=e("p",null,[e("strong",null,"Solution 1: Set up proxy")],-1)),n[20]||(n[20]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890
opencode`)])],-1)),n[21]||(n[21]=e("p",null,[e("strong",null,"Solution 2: Use alternative providers")],-1)),n[22]||(n[22]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Switch to providers with better regional access
opencode
/connect  # Select your preferred provider`)])],-1)),n[23]||(n[23]=l("",5)),n[24]||(n[24]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"curl -x http://127.0.0.1:7890 https://api.anthropic.com")])],-1)),n[25]||(n[25]=e("hr",null,null,-1)),n[26]||(n[26]=e("h3",{id:"q-how-to-handle-corporate-network-certificates",tabindex:"-1"},[o("Q: How to handle corporate network certificates "),e("a",{class:"header-anchor",href:"#q-how-to-handle-corporate-network-certificates","aria-label":"Permalink to “Q: How to handle corporate network certificates”"},"​")],-1)),n[27]||(n[27]=e("p",null,[e("strong",null,"A"),o(": Set custom certificates:")],-1)),n[28]||(n[28]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export NODE_EXTRA_CA_CERTS=/path/to/certificate.pem
opencode`)])],-1)),n[29]||(n[29]=e("p",null,"Or configure in the config file:",-1)),n[30]||(n[30]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "network": {
    "ca_cert": "/path/to/certificate.pem"
  }
}`)])],-1)),n[31]||(n[31]=e("hr",null,null,-1)),n[32]||(n[32]=e("h3",{id:"q-api-blocked-by-corporate-firewall",tabindex:"-1"},[o("Q: API blocked by corporate firewall "),e("a",{class:"header-anchor",href:"#q-api-blocked-by-corporate-firewall","aria-label":"Permalink to “Q: API blocked by corporate firewall”"},"​")],-1)),n[33]||(n[33]=e("p",null,[e("strong",null,"A"),o(": Corporate firewalls often block API endpoints. Try these solutions:")],-1)),n[34]||(n[34]=e("ol",null,[e("li",null,[e("strong",null,"Use a corporate-approved VPN"),o(" if available")]),e("li",null,[e("strong",null,"Self-hosted models"),o(": Deploy local models like Ollama"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Run a model
ollama run codellama

# Configure OpenCode to use local model
opencode
/connect  # Select Ollama`)])])]),e("li",null,[e("strong",null,"Request firewall exception"),o(" from IT for specific API domains")]),e("li",null,[e("strong",null,"Use proxy with authentication"),o(":"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export HTTPS_PROXY=http://corporate-proxy:8080
export NO_PROXY=localhost,127.0.0.1,internal.company.com`)])])])],-1)),n[35]||(n[35]=e("hr",null,null,-1)),n[36]||(n[36]=e("h2",{id:"international-user-issues",tabindex:"-1"},[o("International User Issues "),e("a",{class:"header-anchor",href:"#international-user-issues","aria-label":"Permalink to “International User Issues”"},"​")],-1)),n[37]||(n[37]=e("h3",{id:"q-api-access-from-restricted-regions",tabindex:"-1"},[o("Q: API access from restricted regions "),e("a",{class:"header-anchor",href:"#q-api-access-from-restricted-regions","aria-label":"Permalink to “Q: API access from restricted regions”"},"​")],-1)),n[38]||(n[38]=e("p",null,[e("strong",null,"A"),o(": Some regions have limited access to certain AI providers:")],-1)),n[39]||(n[39]=e("ol",null,[e("li",null,[e("p",null,[e("strong",null,"Use alternative providers"),o(" available in your region:")]),e("ul",null,[e("li",null,"Europe: Mistral, DeepSeek"),e("li",null,"Asia: Z.AI (Zhipu), DeepSeek, Moonshot"),e("li",null,"Global: OpenAI, Anthropic (may require VPN)")])]),e("li",null,[e("p",null,[e("strong",null,"Configure regional endpoints"),o(" if available:")]),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "options": {
        "baseURL": "https://your-regional-endpoint.com"
      }
    }
  }
}`)])])]),e("li",null,[e("p",null,[e("strong",null,"Use local models"),o(" for complete offline access")])])],-1)),n[40]||(n[40]=l("",9)),n[41]||(n[41]=e("ol",null,[e("li",null,[e("p",null,[e("strong",null,"Choose nearby regions"),o(":")]),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "options": {
        "baseURL": "https://api.openai.com/v1"  // or regional endpoint
      }
    }
  }
}`)])])]),e("li",null,[e("p",null,[e("strong",null,"Use smaller models"),o(" for faster response")])]),e("li",null,[e("p",null,[e("strong",null,"Enable streaming"),o(" for perceived performance:")]),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "stream": true
}`)])])]),e("li",null,[e("p",null,[e("strong",null,"Consider local models"),o(" for zero latency")])])],-1)),n[42]||(n[42]=l("",6)),d(s),n[43]||(n[43]=e("h3",{id:"q-api-key-is-set-but-getting-authentication-failed",tabindex:"-1"},[o('Q: API Key is set but getting "authentication failed" '),e("a",{class:"header-anchor",href:"#q-api-key-is-set-but-getting-authentication-failed","aria-label":'Permalink to “Q: API Key is set but getting "authentication failed"”'},"​")],-1)),n[44]||(n[44]=e("p",null,[e("strong",null,"A"),o(": Check the following:")],-1)),n[45]||(n[45]=e("ol",null,[e("li",null,[e("p",null,[e("strong",null,"API Key format is correct"),o(": Different providers have different formats")]),e("ul",null,[e("li",null,[o("Anthropic: "),e("code",null,"sk-ant-xxx")]),e("li",null,[o("OpenAI: "),e("code",null,"sk-xxx")]),e("li",null,[o("DeepSeek: "),e("code",null,"sk-xxx")])])]),e("li",null,[e("p",null,[e("strong",null,"API Key is valid"),o(": Test on the provider's website")])]),e("li",null,[e("p",null,[e("strong",null,"Environment variable is set correctly"),o(":")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"echo $ANTHROPIC_API_KEY  # Check if it has a value")])])]),e("li",null,[e("p",null,[e("strong",null,"Config file syntax is correct"),o(":")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"cat ~/.config/opencode/opencode.json | jq .  # Check JSON format")])])])],-1)),n[46]||(n[46]=l("",4)),n[47]||(n[47]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# List available models
opencode models`)])],-1)),n[48]||(n[48]=e("hr",null,null,-1)),n[49]||(n[49]=e("h3",{id:"q-how-to-switch-between-different-models",tabindex:"-1"},[o("Q: How to switch between different models "),e("a",{class:"header-anchor",href:"#q-how-to-switch-between-different-models","aria-label":"Permalink to “Q: How to switch between different models”"},"​")],-1)),n[50]||(n[50]=e("p",null,[e("strong",null,"A"),o(":")],-1)),n[51]||(n[51]=e("p",null,[e("strong",null,"Method 1: Switch in TUI")],-1)),n[52]||(n[52]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/models")])],-1)),n[53]||(n[53]=e("p",null,[e("strong",null,"Method 2: Specify via command line")],-1)),n[54]||(n[54]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode -m deepseek-chat")])],-1)),n[55]||(n[55]=e("p",null,[e("strong",null,"Method 3: Set default in config file")],-1)),n[56]||(n[56]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "model": "deepseek-chat"
}`)])],-1)),n[57]||(n[57]=e("hr",null,null,-1)),n[58]||(n[58]=e("h3",{id:"q-how-to-configure-multiple-providers",tabindex:"-1"},[o("Q: How to configure multiple providers "),e("a",{class:"header-anchor",href:"#q-how-to-configure-multiple-providers","aria-label":"Permalink to “Q: How to configure multiple providers”"},"​")],-1)),n[59]||(n[59]=e("p",null,[e("strong",null,"A"),o(": Add multiple providers in the config file:")],-1)),n[60]||(n[60]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}"
      }
    },
    "deepseek": {
      "options": {
        "apiKey": "{env:DEEPSEEK_API_KEY}"
      }
    },
    "openai": {
      "options": {
        "apiKey": "{env:OPENAI_API_KEY}"
      }
    }
  }
}`)])],-1)),n[61]||(n[61]=l("",8)),n[62]||(n[62]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "read": "allow",
    "edit": "allow",
    "bash": "allow"
  }
}`)])],-1)),n[63]||(n[63]=e("p",null,[e("strong",null,"Method 3: Fine-grained control")],-1)),n[64]||(n[64]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "read": "allow",
    "edit": "ask",
    "bash": "ask"
  }
}`)])],-1)),n[65]||(n[65]=l("",4)),n[66]||(n[66]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "bash": "ask"
  }
}`)])],-1)),n[67]||(n[67]=e("hr",null,null,-1)),n[68]||(n[68]=e("h3",{id:"q-how-to-restrict-ai-to-read-only-mode",tabindex:"-1"},[o("Q: How to restrict AI to read-only mode "),e("a",{class:"header-anchor",href:"#q-how-to-restrict-ai-to-read-only-mode","aria-label":"Permalink to “Q: How to restrict AI to read-only mode”"},"​")],-1)),n[69]||(n[69]=e("p",null,[e("strong",null,"A"),o(": Use Plan mode:")],-1)),n[70]||(n[70]=e("ol",null,[e("li",null,[o("Press "),e("code",null,"Tab"),o(" to switch to Plan mode")]),e("li",null,[o("Or specify Agent at startup:"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode -a plan")])])])],-1)),n[71]||(n[71]=l("",8)),n[72]||(n[72]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Manual compression
/compact

# Compression options in config
{
  "compaction": {
    "auto": true,
    "prune": true
  }
}`)])],-1)),n[73]||(n[73]=e("blockquote",null,[e("p",null,[e("code",null,"auto"),o(": Automatically compress when context is full; "),e("code",null,"prune"),o(": Remove old tool outputs to save tokens")])],-1)),n[74]||(n[74]=e("hr",null,null,-1)),n[75]||(n[75]=e("h3",{id:"q-high-memory-usage",tabindex:"-1"},[o("Q: High memory usage "),e("a",{class:"header-anchor",href:"#q-high-memory-usage","aria-label":"Permalink to “Q: High memory usage”"},"​")],-1)),n[76]||(n[76]=e("p",null,[e("strong",null,"A"),o(":")],-1)),n[77]||(n[77]=e("ol",null,[e("li",null,"Close unused sessions"),e("li",null,[o("Configure file watcher to ignore directories:"),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "watcher": {
    "ignore": ["node_modules/**", "dist/**", ".git/**"]
  }
}`)])])]),e("li",null,"Use smaller models")],-1)),n[78]||(n[78]=e("hr",null,null,-1)),n[79]||(n[79]=e("h2",{id:"feature-issues",tabindex:"-1"},[o("Feature Issues "),e("a",{class:"header-anchor",href:"#feature-issues","aria-label":"Permalink to “Feature Issues”"},"​")],-1)),n[80]||(n[80]=e("h3",{id:"q-how-to-make-ai-remember-my-preferences",tabindex:"-1"},[o("Q: How to make AI remember my preferences "),e("a",{class:"header-anchor",href:"#q-how-to-make-ai-remember-my-preferences","aria-label":"Permalink to “Q: How to make AI remember my preferences”"},"​")],-1)),n[81]||(n[81]=e("p",null,[e("strong",null,"A"),o(": Use AGENTS.md or CLAUDE.md files:")],-1)),n[82]||(n[82]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- AGENTS.md -->
# Project Rules

- Use TypeScript
- Use pnpm instead of npm
- Code comments in English
- Follow ESLint rules`)])],-1)),n[83]||(n[83]=e("p",null,[o("Or run "),e("code",null,"/init"),o(" to auto-generate.")],-1)),n[84]||(n[84]=e("hr",null,null,-1)),n[85]||(n[85]=e("h3",{id:"q-can-t-find-previous-sessions",tabindex:"-1"},[o("Q: Can't find previous sessions "),e("a",{class:"header-anchor",href:"#q-can-t-find-previous-sessions","aria-label":"Permalink to “Q: Can't find previous sessions”"},"​")],-1)),n[86]||(n[86]=e("p",null,[e("strong",null,"A"),o(":")],-1)),n[87]||(n[87]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# List all sessions
opencode session list

# View in TUI
/sessions`)])],-1)),n[88]||(n[88]=e("p",null,[o("Sessions are stored in "),e("code",null,"~/.local/share/opencode/sessions/"),o(".")],-1)),n[89]||(n[89]=e("hr",null,null,-1)),n[90]||(n[90]=e("h3",{id:"q-how-to-export-conversation-history",tabindex:"-1"},[o("Q: How to export conversation history "),e("a",{class:"header-anchor",href:"#q-how-to-export-conversation-history","aria-label":"Permalink to “Q: How to export conversation history”"},"​")],-1)),n[91]||(n[91]=e("p",null,[e("strong",null,"A"),o(":")],-1)),n[92]||(n[92]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Export in TUI
/export

# Export via command line
opencode session export <session-id> -o conversation.md`)])],-1)),n[93]||(n[93]=l("",7)),n[94]||(n[94]=e("ol",null,[e("li",null,"Confirm project is a Git repository"),e("li",null,"Confirm there are uncommitted changes"),e("li",null,[o("Check Git status:"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"git status")])])])],-1)),n[95]||(n[95]=e("hr",null,null,-1)),n[96]||(n[96]=e("h2",{id:"compatibility-issues",tabindex:"-1"},[o("Compatibility Issues "),e("a",{class:"header-anchor",href:"#compatibility-issues","aria-label":"Permalink to “Compatibility Issues”"},"​")],-1)),n[97]||(n[97]=e("h3",{id:"q-terminal-shows-garbled-characters",tabindex:"-1"},[o("Q: Terminal shows garbled characters "),e("a",{class:"header-anchor",href:"#q-terminal-shows-garbled-characters","aria-label":"Permalink to “Q: Terminal shows garbled characters”"},"​")],-1)),n[98]||(n[98]=e("p",null,[e("strong",null,"A"),o(":")],-1)),n[99]||(n[99]=e("ol",null,[e("li",null,"Use recommended terminals: WezTerm / Alacritty / iTerm2"),e("li",null,[o("Set correct encoding:"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export LANG=en_US.UTF-8")])])]),e("li",null,"Use supported fonts (Nerd Fonts recommended)")],-1)),n[100]||(n[100]=l("",7)),n[101]||(n[101]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Manually install extension
code --install-extension anthropic.opencode

# Or search "OpenCode" in VS Code`)])],-1)),n[102]||(n[102]=l("",8)),n[103]||(n[103]=e("ol",null,[e("li",null,[e("p",null,"Collect information:"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`opencode --version
uname -a
echo $SHELL`)])])]),e("li",null,[e("p",null,"Steps to reproduce")]),e("li",null,[e("p",null,"Submit Issue on GitHub")])],-1)),n[104]||(n[104]=l("",9))])}const v=t(p,[["render",g]]);export{C as __pageData,v as default};
