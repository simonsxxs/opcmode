import{_ as l,I as s,c as a,o as i,a5 as n,j as e,J as d,a as o,bD as p}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"Troubleshooting: Quickly Diagnose and Fix Common Issues | OpenCode Tutorial","description":"Quickly diagnose and fix common OpenCode issues. Covers API errors, context overflow, permission denials, output truncation, retry mechanisms, and more. Includes a complete error code reference and diagnostic checklist.","frontmatter":{"title":"Troubleshooting: Quickly Diagnose and Fix Common Issues | OpenCode Tutorial","description":"Quickly diagnose and fix common OpenCode issues. Covers API errors, context overflow, permission denials, output truncation, retry mechanisms, and more. Includes a complete error code reference and diagnostic checklist."},"headers":[],"relativePath":"en/appendix/troubleshoot.md","filePath":"en/appendix/troubleshoot.md","lastUpdated":1772014034000}'),u={name:"en/appendix/troubleshoot.md"};function c(g,t,m,h,b,y){const r=s("AdInArticle");return i(),a("div",null,[t[0]||(t[0]=n('<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to “Troubleshooting”">​</a></h1><blockquote><p>Systematically diagnose and resolve issues</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+p+'" alt="Troubleshooting Course Notes" data-zoom-src="/images/appendix/troubleshoot-notes.jpeg"></p><hr><h2 id="logs-and-storage-locations" tabindex="-1">Logs and Storage Locations <a class="header-anchor" href="#logs-and-storage-locations" aria-label="Permalink to “Logs and Storage Locations”">​</a></h2><h3 id="log-files" tabindex="-1">Log Files <a class="header-anchor" href="#log-files" aria-label="Permalink to “Log Files”">​</a></h3><table tabindex="0"><thead><tr><th>Platform</th><th>Path</th></tr></thead><tbody><tr><td>macOS/Linux</td><td><code>~/.local/share/opencode/log/</code></td></tr><tr><td>Windows</td><td><code>%USERPROFILE%\\.local\\share\\opencode\\log\\</code></td></tr></tbody></table><p>Log files are named with timestamps (e.g., <code>2025-01-09T123456.log</code>) and the 10 most recent are retained.</p>',10)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View latest logs
ls -lt ~/.local/share/opencode/log/ | head

# Enable debug logging
opencode --log-level DEBUG

# Print logs to terminal
opencode --print-logs`)])],-1)),t[2]||(t[2]=n('<h3 id="storage-locations" tabindex="-1">Storage Locations <a class="header-anchor" href="#storage-locations" aria-label="Permalink to “Storage Locations”">​</a></h3><table tabindex="0"><thead><tr><th>Data Type</th><th>Path</th></tr></thead><tbody><tr><td>Config file</td><td><code>~/.config/opencode/opencode.json</code></td></tr><tr><td>Authentication</td><td><code>~/.local/share/opencode/auth.json</code></td></tr><tr><td>Logs</td><td><code>~/.local/share/opencode/log/</code></td></tr><tr><td>Project data</td><td><code>~/.local/share/opencode/storage/</code></td></tr><tr><td>Cache</td><td><code>~/.cache/opencode/</code></td></tr></tbody></table><hr><h2 id="startup-issues" tabindex="-1">Startup Issues <a class="header-anchor" href="#startup-issues" aria-label="Permalink to “Startup Issues”">​</a></h2><h3 id="cannot-start-command-not-found" tabindex="-1">Cannot Start / Command Not Found <a class="header-anchor" href="#cannot-start-command-not-found" aria-label="Permalink to “Cannot Start / Command Not Found”">​</a></h3><p><strong>Symptoms</strong>:</p>',6)),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"zsh: command not found: opencode")])],-1)),t[4]||(t[4]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[5]||(t[5]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Check if installed
which opencode
npm list -g opencode-ai

# 2. Check PATH
echo $PATH | tr ':' '\\n' | grep -E "(npm|bin)"`)])],-1)),t[6]||(t[6]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[7]||(t[7]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Reinstall
npm install -g opencode-ai

# Manually add to PATH
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc`)])],-1)),t[8]||(t[8]=e("hr",null,null,-1)),t[9]||(t[9]=e("h3",{id:"startup-crash-blank-screen",tabindex:"-1"},[o("Startup Crash / Blank Screen "),e("a",{class:"header-anchor",href:"#startup-crash-blank-screen","aria-label":"Permalink to “Startup Crash / Blank Screen”"},"​")],-1)),t[10]||(t[10]=e("p",null,[e("strong",null,"Symptoms"),o(": Exits immediately after startup or displays a blank screen")],-1)),t[11]||(t[11]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[12]||(t[12]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. View error logs
opencode --print-logs 2>&1 | head -50

# 2. Clear cache and retry
rm -rf ~/.cache/opencode
opencode

# 3. Reset configuration
mv ~/.config/opencode/opencode.json ~/.config/opencode/opencode.json.bak
opencode`)])],-1)),t[13]||(t[13]=n('<p><strong>Common Causes</strong>:</p><ul><li>Configuration file syntax errors</li><li>Incompatible terminal</li><li>Corrupted cache</li></ul><hr><h3 id="provideriniterror" tabindex="-1">ProviderInitError <a class="header-anchor" href="#provideriniterror" aria-label="Permalink to “ProviderInitError”">​</a></h3><p><strong>Symptoms</strong>:</p>',5)),t[14]||(t[14]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"ProviderInitError: Failed to initialize provider")])],-1)),t[15]||(t[15]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[16]||(t[16]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Verify provider configuration
opencode auth list

# 2. Clear storage and retry
rm -rf ~/.local/share/opencode`)])],-1)),t[17]||(t[17]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[18]||(t[18]=e("ol",null,[e("li",null,[o("Confirm proper setup following the "),e("a",{href:"./providers.html"},"Provider Guide")]),e("li",null,[o("Reconfigure using "),e("code",null,"/connect")])],-1)),t[19]||(t[19]=e("hr",null,null,-1)),t[20]||(t[20]=e("h2",{id:"authentication-issues",tabindex:"-1"},[o("Authentication Issues "),e("a",{class:"header-anchor",href:"#authentication-issues","aria-label":"Permalink to “Authentication Issues”"},"​")],-1)),d(r),t[21]||(t[21]=e("h3",{id:"invalid-api-key",tabindex:"-1"},[o("Invalid API Key "),e("a",{class:"header-anchor",href:"#invalid-api-key","aria-label":"Permalink to “Invalid API Key”"},"​")],-1)),t[22]||(t[22]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[23]||(t[23]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"AuthenticationError: Invalid API key")])],-1)),t[24]||(t[24]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[25]||(t[25]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Check configured credentials
opencode auth list

# Check environment variables
env | grep API_KEY`)])],-1)),t[26]||(t[26]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[27]||(t[27]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Reconfigure
opencode auth login
# Or in TUI
/connect`)])],-1)),t[28]||(t[28]=e("hr",null,null,-1)),t[29]||(t[29]=e("h3",{id:"github-copilot-authentication-failed",tabindex:"-1"},[o("GitHub Copilot Authentication Failed "),e("a",{class:"header-anchor",href:"#github-copilot-authentication-failed","aria-label":"Permalink to “GitHub Copilot Authentication Failed”"},"​")],-1)),t[30]||(t[30]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[31]||(t[31]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Error: 403 Forbidden
Please reauthenticate with the copilot provider to ensure
your credentials work properly with OpenCode.`)])],-1)),t[32]||(t[32]=e("p",null,[e("strong",null,"Cause"),o(": GitHub Copilot OAuth Token has expired or become invalid.")],-1)),t[33]||(t[33]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[34]||(t[34]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Re-authenticate GitHub Copilot
opencode auth login
# Select github-copilot provider and follow the OAuth flow`)])],-1)),t[35]||(t[35]=e("p",null,"For GitHub Enterprise:",-1)),t[36]||(t[36]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Specify Enterprise URL in configuration
{
  "provider": {
    "github-copilot": {
      "options": {
        "enterpriseUrl": "https://github.your-company.com"
      }
    }
  }
}`)])],-1)),t[37]||(t[37]=e("hr",null,null,-1)),t[38]||(t[38]=e("h3",{id:"token-quota-exceeded",tabindex:"-1"},[o("Token Quota Exceeded "),e("a",{class:"header-anchor",href:"#token-quota-exceeded","aria-label":"Permalink to “Token Quota Exceeded”"},"​")],-1)),t[39]||(t[39]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[40]||(t[40]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"RateLimitError: quota exceeded")])],-1)),t[41]||(t[41]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[42]||(t[42]=e("ol",null,[e("li",null,"Wait for quota reset"),e("li",null,"Upgrade your account plan"),e("li",null,"Switch to another provider/model")],-1)),t[43]||(t[43]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Switch model
opencode -m zhipu/glm-4-flash`)])],-1)),t[44]||(t[44]=e("hr",null,null,-1)),t[45]||(t[45]=e("h2",{id:"model-issues",tabindex:"-1"},[o("Model Issues "),e("a",{class:"header-anchor",href:"#model-issues","aria-label":"Permalink to “Model Issues”"},"​")],-1)),t[46]||(t[46]=e("h3",{id:"ai-apicallerror",tabindex:"-1"},[o("AI_APICallError "),e("a",{class:"header-anchor",href:"#ai-apicallerror","aria-label":"Permalink to “AI_APICallError”"},"​")],-1)),t[47]||(t[47]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[48]||(t[48]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"AI_APICallError: API call failed")])],-1)),t[49]||(t[49]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[50]||(t[50]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Check network
curl -I https://api.anthropic.com

# 2. Clear provider package cache
rm -rf ~/.cache/opencode

# 3. Restart opencode`)])],-1)),t[51]||(t[51]=n('<p><strong>Common Causes</strong>:</p><ul><li>Network issues</li><li>Invalid API Key</li><li>Outdated provider package version</li></ul><hr><h3 id="providermodelnotfounderror" tabindex="-1">ProviderModelNotFoundError <a class="header-anchor" href="#providermodelnotfounderror" aria-label="Permalink to “ProviderModelNotFoundError”">​</a></h3><p><strong>Symptoms</strong>:</p>',5)),t[52]||(t[52]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"ProviderModelNotFoundError: Model not found")])],-1)),t[53]||(t[53]=n("<p><strong>Cause</strong>: Incorrect model reference format</p><p><strong>Correct Format</strong>: <code>&lt;providerId&gt;/&lt;modelId&gt;</code></p><p><strong>Examples</strong>:</p><ul><li><code>anthropic/claude-sonnet-4-20250514</code></li><li><code>openai/gpt-4o</code></li><li><code>deepseek/deepseek-chat</code></li></ul><p><strong>Solutions</strong>:</p>",5)),t[54]||(t[54]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View available models
opencode models`)])],-1)),t[55]||(t[55]=n('<hr><h3 id="empty-model-response" tabindex="-1">Empty Model Response <a class="header-anchor" href="#empty-model-response" aria-label="Permalink to “Empty Model Response”">​</a></h3><p><strong>Symptoms</strong>: AI doesn&#39;t respond or response is empty</p><p><strong>Possible Causes</strong>:</p><ol><li>Context too long and truncated</li><li>Content filter triggered</li><li>Model overloaded</li></ol><p><strong>Solutions</strong>:</p>',6)),t[56]||(t[56]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`# Compress context
/compact

# New session
/new

# Switch model
/models`)])],-1)),t[57]||(t[57]=n('<hr><h2 id="api-retry-mechanism" tabindex="-1">API Retry Mechanism <a class="header-anchor" href="#api-retry-mechanism" aria-label="Permalink to “API Retry Mechanism”">​</a></h2><p>When encountering temporary errors like <code>Too Many Requests</code> or <code>Provider is overloaded</code>, OpenCode automatically retries—you don&#39;t need to do anything manually.</p><h3 id="retry-strategy" tabindex="-1">Retry Strategy <a class="header-anchor" href="#retry-strategy" aria-label="Permalink to “Retry Strategy”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>Initial delay</td><td>2 seconds</td><td>Wait time for first retry</td></tr><tr><td>Backoff factor</td><td>2x</td><td>Delay doubles with each retry</td></tr><tr><td>Max delay (no response header)</td><td>30 seconds</td><td>Upper limit when provider doesn&#39;t return <code>Retry-After</code> header</td></tr><tr><td>Max delay (with response header)</td><td>Per header</td><td>Uses provider-specified wait time when <code>Retry-After</code> header is present</td></tr></tbody></table>',5)),t[58]||(t[58]=e("details",{class:"details custom-block"},[e("summary",null,"Retry delay calculation (when provider doesn't return response header)"),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`First retry:  2 seconds
Second retry: 4 seconds
Third retry:  8 seconds
Fourth retry: 16 seconds
Fifth retry:  30 seconds (reaches limit, stops growing)`)])]),e("p",null,[o("If the provider returns a "),e("code",null,"Retry-After"),o(" or "),e("code",null,"Retry-After-Ms"),o(" response header, OpenCode prioritizes the provider-specified wait time,不受 30 秒上限限制。")])],-1)),t[59]||(t[59]=n('<h3 id="which-errors-auto-retry" tabindex="-1">Which Errors Auto-Retry <a class="header-anchor" href="#which-errors-auto-retry" aria-label="Permalink to “Which Errors Auto-Retry”">​</a></h3><table tabindex="0"><thead><tr><th>Error</th><th>Auto-Retry</th><th>Description</th></tr></thead><tbody><tr><td><code>Too Many Requests</code> (429)</td><td>✅ Yes</td><td>Rate limiting</td></tr><tr><td><code>Provider is overloaded</code> (503)</td><td>✅ Yes</td><td>Service overloaded</td></tr><tr><td><code>Rate Limited</code></td><td>✅ Yes</td><td>Frequency limiting</td></tr><tr><td>Context overflow</td><td>❌ No</td><td>Need to compact or create new session</td></tr><tr><td>Authentication failed (401)</td><td>❌ No</td><td>Need to fix API Key</td></tr><tr><td>Free quota exhausted</td><td>❌ No</td><td>Shows recharge link</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>If you see OpenCode waiting to retry, don&#39;t rush to close it. Waiting usually resolves the issue. If frequently triggered, consider switching to another model.</p></div><hr><h2 id="output-truncation" tabindex="-1">Output Truncation <a class="header-anchor" href="#output-truncation" aria-label="Permalink to “Output Truncation”">​</a></h2><p>When tool output is too long, OpenCode automatically truncates it to avoid consuming excessive context space.</p><h3 id="truncation-rules" tabindex="-1">Truncation Rules <a class="header-anchor" href="#truncation-rules" aria-label="Permalink to “Truncation Rules”">​</a></h3><table tabindex="0"><thead><tr><th>Limit</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>Max lines</td><td>2,000 lines</td><td>Truncated if exceeded</td></tr><tr><td>Max bytes</td><td>50 KB</td><td>Truncated if exceeded</td></tr><tr><td>Full output retention</td><td>7 days</td><td>Truncated full files are automatically cleaned up</td></tr></tbody></table><h3 id="what-you-ll-see-after-truncation" tabindex="-1">What You&#39;ll See After Truncation <a class="header-anchor" href="#what-you-ll-see-after-truncation" aria-label="Permalink to “What You&#39;ll See After Truncation”">​</a></h3>',9)),t[60]||(t[60]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`...2000+ lines truncated...

The tool call succeeded but the output was truncated.
Full output saved to: /path/to/tool-output/tool_xxx
Use Grep to search the full content or Read with offset/limit
to view specific sections.`)])],-1)),t[61]||(t[61]=n('<p>Note: Truncation doesn&#39;t affect operation results, only display is trimmed. Full content is saved to local files.</p><h3 id="how-to-handle-truncated-output" tabindex="-1">How to Handle Truncated Output <a class="header-anchor" href="#how-to-handle-truncated-output" aria-label="Permalink to “How to Handle Truncated Output”">​</a></h3><ol><li><strong>Have AI search with Grep</strong>: Tell AI &quot;search for xxx in the truncated output&quot;</li><li><strong>Have AI read in segments</strong>: AI will use Read tool&#39;s <code>offset</code> and <code>limit</code> parameters to view sections</li><li><strong>Delegate to sub-Agent</strong>: If AI has Task tool permission, it may suggest delegating to explore agent, saving context</li></ol><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>Truncation is normal behavior, not an error. In most cases, AI automatically handles truncated output—you don&#39;t need to intervene.</p></div><hr><h2 id="permission-denied" tabindex="-1">Permission Denied <a class="header-anchor" href="#permission-denied" aria-label="Permalink to “Permission Denied”">​</a></h2><h3 id="symptoms" tabindex="-1">Symptoms <a class="header-anchor" href="#symptoms" aria-label="Permalink to “Symptoms”">​</a></h3><p>Operation rejected with:</p>',8)),t[62]||(t[62]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"The user rejected permission to use this specific tool call.")])],-1)),t[63]||(t[63]=n('<h3 id="default-permission-rules" tabindex="-1">Default Permission Rules <a class="header-anchor" href="#default-permission-rules" aria-label="Permalink to “Default Permission Rules”">​</a></h3><p>OpenCode has different default permissions for various operations:</p><table tabindex="0"><thead><tr><th>Operation</th><th>Default Permission</th><th>Description</th></tr></thead><tbody><tr><td>Read regular files</td><td>✅ Allow</td><td>Most files can be read directly</td></tr><tr><td>Read <code>.env</code> files</td><td>⚠️ Confirm</td><td>Protects sensitive config (API Keys, etc.)</td></tr><tr><td>Read <code>.env.*</code> files</td><td>⚠️ Confirm</td><td>E.g., <code>.env.local</code>, <code>.env.production</code></td></tr><tr><td>Read <code>.env.example</code></td><td>✅ Allow</td><td>Example files contain no sensitive info</td></tr><tr><td>Access directories outside project</td><td>⚠️ Confirm</td><td>Prevents unauthorized access</td></tr><tr><td>Edit files (Build mode)</td><td>✅ Allow</td><td>Build mode is writable by default</td></tr><tr><td>Edit files (Plan mode)</td><td>❌ Deny</td><td>Plan mode forbids editing regular files (except plan files)</td></tr><tr><td>Execute Bash commands</td><td>✅ Allow</td><td>Allowed by default</td></tr></tbody></table><h3 id="solutions" tabindex="-1">Solutions <a class="header-anchor" href="#solutions" aria-label="Permalink to “Solutions”">​</a></h3><p><strong>One-time allow</strong>: Press <code>y</code> to confirm at permission prompt</p><p><strong>Always allow</strong>: Press <code>a</code> key, won&#39;t ask again for similar operations in that session</p><p><strong>Modify configuration</strong>: Set permission policy in <code>opencode.json</code></p>',7)),t[64]||(t[64]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "read": "allow",
    "edit": "allow",
    "bash": "ask"
  }
}`)])],-1)),t[65]||(t[65]=e("p",null,"You can also set for specific file patterns:",-1)),t[66]||(t[66]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "allow"
    }
  }
}`)])],-1)),t[67]||(t[67]=e("hr",null,null,-1)),t[68]||(t[68]=e("h2",{id:"network-issues",tabindex:"-1"},[o("Network Issues "),e("a",{class:"header-anchor",href:"#network-issues","aria-label":"Permalink to “Network Issues”"},"​")],-1)),t[69]||(t[69]=e("h3",{id:"connection-timeout",tabindex:"-1"},[o("Connection Timeout "),e("a",{class:"header-anchor",href:"#connection-timeout","aria-label":"Permalink to “Connection Timeout”"},"​")],-1)),t[70]||(t[70]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[71]||(t[71]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"ETIMEDOUT / ECONNREFUSED / ECONNRESET")])],-1)),t[72]||(t[72]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[73]||(t[73]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Test basic network
ping api.anthropic.com

# 2. Test HTTPS
curl -v https://api.anthropic.com

# 3. Test proxy
curl -x http://127.0.0.1:7890 https://api.anthropic.com`)])],-1)),t[74]||(t[74]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[75]||(t[75]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set proxy
export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890

# Or use alternative models
/connect  # Select your preferred provider`)])],-1)),t[76]||(t[76]=e("hr",null,null,-1)),t[77]||(t[77]=e("h3",{id:"ssl-tls-errors",tabindex:"-1"},[o("SSL/TLS Errors "),e("a",{class:"header-anchor",href:"#ssl-tls-errors","aria-label":"Permalink to “SSL/TLS Errors”"},"​")],-1)),t[78]||(t[78]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[79]||(t[79]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`UNABLE_TO_VERIFY_LEAF_SIGNATURE
CERT_HAS_EXPIRED`)])],-1)),t[80]||(t[80]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[81]||(t[81]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Corporate certificates
export NODE_EXTRA_CA_CERTS=/path/to/cert.pem

# Temporarily disable verification (not recommended for production)
export NODE_TLS_REJECT_UNAUTHORIZED=0`)])],-1)),t[82]||(t[82]=e("hr",null,null,-1)),t[83]||(t[83]=e("h3",{id:"corporate-proxy-issues",tabindex:"-1"},[o("Corporate Proxy Issues "),e("a",{class:"header-anchor",href:"#corporate-proxy-issues","aria-label":"Permalink to “Corporate Proxy Issues”"},"​")],-1)),t[84]||(t[84]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[85]||(t[85]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`ECONNREFUSED when connecting to API endpoints
Proxy authentication required
Connection reset by peer`)])],-1)),t[86]||(t[86]=e("p",null,[e("strong",null,"Common Causes"),o(":")],-1)),t[87]||(t[87]=e("ul",null,[e("li",null,"Corporate proxy intercepts HTTPS traffic"),e("li",null,"Proxy requires authentication"),e("li",null,"Proxy certificate not trusted by Node.js"),e("li",null,"Certain domains blocked by corporate firewall")],-1)),t[88]||(t[88]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[89]||(t[89]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Check proxy settings
env | grep -i proxy

# 2. Test with proxy
curl -x http://corporate-proxy:8080 https://api.anthropic.com

# 3. Check if proxy requires auth
curl -v -x http://corporate-proxy:8080 https://api.anthropic.com 2>&1 | grep -i "407"`)])],-1)),t[90]||(t[90]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[91]||(t[91]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set proxy with authentication
export HTTP_PROXY=http://username:password@corporate-proxy:8080
export HTTPS_PROXY=http://username:password@corporate-proxy:8080

# For NTLM authentication, use a proxy tool like cntlm
# Install cntlm
sudo apt install cntlm  # Debian/Ubuntu
brew install cntlm      # macOS

# Configure cntlm
cntlm -u username -d DOMAIN -H
# Add hashed credentials to /etc/cntlm.conf

# Then set proxy to localhost
export HTTP_PROXY=http://127.0.0.1:3128
export HTTPS_PROXY=http://127.0.0.1:3128

# Trust corporate CA certificate
export NODE_EXTRA_CA_CERTS=/path/to/corporate-ca.pem
export SSL_CERT_FILE=/path/to/corporate-ca.pem`)])],-1)),t[92]||(t[92]=e("p",null,[e("strong",null,"No_Proxy Settings"),o(":")],-1)),t[93]||(t[93]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Exclude certain domains from proxy
export NO_PROXY=localhost,127.0.0.1,.internal.company.com`)])],-1)),t[94]||(t[94]=e("hr",null,null,-1)),t[95]||(t[95]=e("h3",{id:"firewall-issues",tabindex:"-1"},[o("Firewall Issues "),e("a",{class:"header-anchor",href:"#firewall-issues","aria-label":"Permalink to “Firewall Issues”"},"​")],-1)),t[96]||(t[96]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[97]||(t[97]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Connection timed out
Network is unreachable
Access denied`)])],-1)),t[98]||(t[98]=e("p",null,[e("strong",null,"Common Causes"),o(":")],-1)),t[99]||(t[99]=e("ul",null,[e("li",null,"Firewall blocks outbound connections to specific ports"),e("li",null,"Firewall blocks specific API domains"),e("li",null,"Country/region restrictions")],-1)),t[100]||(t[100]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[101]||(t[101]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Test DNS resolution
nslookup api.anthropic.com

# 2. Test specific port
telnet api.anthropic.com 443
# Or
nc -zv api.anthropic.com 443

# 3. Check which ports are allowed
# Contact your IT department`)])],-1)),t[102]||(t[102]=n("<p><strong>Solutions</strong>:</p><ol><li><p><strong>Request firewall exception</strong>: Ask IT to allowlist required domains:</p><ul><li><code>api.anthropic.com</code></li><li><code>api.openai.com</code></li><li><code>generativelanguage.googleapis.com</code></li><li>Or your provider&#39;s API endpoint</li></ul></li><li><p><strong>Use alternative models</strong>: If certain providers are blocked, switch to accessible ones</p></li><li><p><strong>On-premise/self-hosted options</strong>: Consider self-hosted models like:</p><ul><li>Ollama with local models</li><li>LM Studio</li><li>vLLM server</li></ul></li></ol>",2)),t[103]||(t[103]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Connect to local model
opencode
# Then use /connect to configure local provider`)])],-1)),t[104]||(t[104]=e("hr",null,null,-1)),t[105]||(t[105]=e("h3",{id:"vpn-issues",tabindex:"-1"},[o("VPN Issues "),e("a",{class:"header-anchor",href:"#vpn-issues","aria-label":"Permalink to “VPN Issues”"},"​")],-1)),t[106]||(t[106]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[107]||(t[107]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Connection unstable
High latency
Intermittent failures
DNS resolution issues`)])],-1)),t[108]||(t[108]=e("p",null,[e("strong",null,"Common Causes"),o(":")],-1)),t[109]||(t[109]=e("ul",null,[e("li",null,"VPN routes traffic through distant servers"),e("li",null,"VPN DNS conflicts"),e("li",null,"VPN kill switch blocks connections when disconnected"),e("li",null,"Split tunneling misconfiguration")],-1)),t[110]||(t[110]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[111]||(t[111]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Check current IP and routing
curl ifconfig.me
traceroute api.anthropic.com

# 2. Test DNS resolution
dig api.anthropic.com

# 3. Compare with/without VPN
# Disconnect VPN and retry`)])],-1)),t[112]||(t[112]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[113]||(t[113]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Use split tunneling
# Configure VPN to exclude API endpoints

# 2. Use public DNS
export DNS_SERVER=8.8.8.8
# Or configure in /etc/resolv.conf

# 3. VPN-specific DNS
# Some VPNs require their DNS servers

# 4. If VPN causes issues, try without it
# Some providers work better without VPN`)])],-1)),t[114]||(t[114]=n('<p><strong>VPN-Specific Tips</strong>:</p><table tabindex="0"><thead><tr><th>VPN Type</th><th>Potential Issue</th><th>Solution</th></tr></thead><tbody><tr><td>Corporate VPN</td><td>All traffic routed through company network</td><td>Use split tunneling</td></tr><tr><td>Consumer VPN</td><td>IP may be rate-limited</td><td>Switch VPN server or disable</td></tr><tr><td>Always-on VPN</td><td>May block connections when reconnecting</td><td>Add retry logic or manual reconnect</td></tr></tbody></table><hr><h2 id="file-operation-issues" tabindex="-1">File Operation Issues <a class="header-anchor" href="#file-operation-issues" aria-label="Permalink to “File Operation Issues”">​</a></h2><h3 id="file-write-failed" tabindex="-1">File Write Failed <a class="header-anchor" href="#file-write-failed" aria-label="Permalink to “File Write Failed”">​</a></h3><p><strong>Symptoms</strong>: AI says it modified the file but nothing changed</p><p><strong>Diagnostic Steps</strong>:</p>',7)),t[115]||(t[115]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Check file permissions
ls -la path/to/file

# 2. Check OpenCode permission settings
cat ~/.config/opencode/opencode.json | jq .permission`)])],-1)),t[116]||(t[116]=n('<p><strong>Solutions</strong>:</p><ul><li>Ensure file is writable</li><li>Check permission setting is <code>allow</code> or <code>ask</code></li><li>Press <code>y</code> to confirm at permission prompt</li></ul><hr><h3 id="git-undo-not-working" tabindex="-1">Git Undo Not Working <a class="header-anchor" href="#git-undo-not-working" aria-label="Permalink to “Git Undo Not Working”">​</a></h3><p><strong>Symptoms</strong>: <code>/undo</code> has no effect</p><p><strong>Diagnostic Steps</strong>:</p>',6)),t[117]||(t[117]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Confirm it's a Git repository
git status`)])],-1)),t[118]||(t[118]=n('<p><strong>Solutions</strong>:</p><ul><li>Ensure you&#39;re in a Git repository</li><li>Ensure there are changes to undo</li></ul><hr><h2 id="interface-issues" tabindex="-1">Interface Issues <a class="header-anchor" href="#interface-issues" aria-label="Permalink to “Interface Issues”">​</a></h2><h3 id="garbled-display" tabindex="-1">Garbled Display <a class="header-anchor" href="#garbled-display" aria-label="Permalink to “Garbled Display”">​</a></h3><p><strong>Symptoms</strong>: Interface shows boxes or garbled text</p><p><strong>Solutions</strong>:</p>',7)),t[119]||(t[119]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set correct encoding
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# Use recommended terminals
# WezTerm / Alacritty / iTerm2

# Use Nerd Fonts`)])],-1)),t[120]||(t[120]=e("hr",null,null,-1)),t[121]||(t[121]=e("h3",{id:"incorrect-colors",tabindex:"-1"},[o("Incorrect Colors "),e("a",{class:"header-anchor",href:"#incorrect-colors","aria-label":"Permalink to “Incorrect Colors”"},"​")],-1)),t[122]||(t[122]=e("p",null,[e("strong",null,"Symptoms"),o(": Colors display abnormally or not at all")],-1)),t[123]||(t[123]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[124]||(t[124]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set truecolor
export COLORTERM=truecolor

# Set terminal type
export TERM=xterm-256color

# Switch theme
/theme`)])],-1)),t[125]||(t[125]=e("hr",null,null,-1)),t[126]||(t[126]=e("h2",{id:"linux-specific-issues",tabindex:"-1"},[o("Linux-Specific Issues "),e("a",{class:"header-anchor",href:"#linux-specific-issues","aria-label":"Permalink to “Linux-Specific Issues”"},"​")],-1)),t[127]||(t[127]=e("h3",{id:"clipboard-not-working",tabindex:"-1"},[o("Clipboard Not Working "),e("a",{class:"header-anchor",href:"#clipboard-not-working","aria-label":"Permalink to “Clipboard Not Working”"},"​")],-1)),t[128]||(t[128]=e("p",null,[e("strong",null,"Symptoms"),o(": Copy/paste fails")],-1)),t[129]||(t[129]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[130]||(t[130]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# X11
sudo apt install xclip
# Or
sudo apt install xsel

# Wayland
sudo apt install wl-clipboard

# Headless environment
sudo apt install xvfb
Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
export DISPLAY=:99.0`)])],-1)),t[131]||(t[131]=e("hr",null,null,-1)),t[132]||(t[132]=e("h3",{id:"npm-permission-denied-eacces",tabindex:"-1"},[o("npm Permission Denied (EACCES) "),e("a",{class:"header-anchor",href:"#npm-permission-denied-eacces","aria-label":"Permalink to “npm Permission Denied (EACCES)”"},"​")],-1)),t[133]||(t[133]=e("p",null,[e("strong",null,"Symptoms"),o(":")],-1)),t[134]||(t[134]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"EACCES: permission denied")])],-1)),t[135]||(t[135]=e("p",null,[e("strong",null,"Solutions"),o(":")],-1)),t[136]||(t[136]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Reinstall
npm install -g opencode-ai`)])],-1)),t[137]||(t[137]=n('<hr><h2 id="quick-diagnostic-checklist" tabindex="-1">Quick Diagnostic Checklist <a class="header-anchor" href="#quick-diagnostic-checklist" aria-label="Permalink to “Quick Diagnostic Checklist”">​</a></h2><p>When encountering issues, check in this order:</p><ul><li>[ ] <strong>Check version</strong>: <code>opencode --version</code>, confirm it&#39;s the latest</li><li>[ ] <strong>Check configuration</strong>: Is <code>opencode.json</code> syntax correct? (Validate JSON with <code>jq .</code>)</li><li>[ ] <strong>Check authentication</strong>: <code>opencode auth list</code>, is API Key valid? Is OAuth expired?</li><li>[ ] <strong>Check quota</strong>: Is account balance sufficient? Rate limit triggered?</li><li>[ ] <strong>Check network</strong>: Can you access provider API? (Test with <code>curl</code>)</li><li>[ ] <strong>Check permissions</strong>: Do you have necessary file/directory access permissions?</li><li>[ ] <strong>Check logs</strong>: Enable debug mode to view detailed logs</li></ul>',4)),t[138]||(t[138]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Quick diagnostic trio
opencode --version
opencode auth list
opencode --log-level DEBUG --print-logs`)])],-1)),t[139]||(t[139]=n('<hr><h2 id="error-code-reference" tabindex="-1">Error Code Reference <a class="header-anchor" href="#error-code-reference" aria-label="Permalink to “Error Code Reference”">​</a></h2><h3 id="provider-http-errors" tabindex="-1">Provider HTTP Errors <a class="header-anchor" href="#provider-http-errors" aria-label="Permalink to “Provider HTTP Errors”">​</a></h3><table tabindex="0"><thead><tr><th>Error Code</th><th>Meaning</th><th>Possible Cause</th><th>Auto-Retry</th></tr></thead><tbody><tr><td>400</td><td>Bad Request</td><td>Invalid parameters, missing required fields</td><td>❌</td></tr><tr><td>401</td><td>Unauthorized</td><td>Invalid or expired API Key</td><td>❌</td></tr><tr><td>403</td><td>Forbidden</td><td>No permission to access this model</td><td>❌</td></tr><tr><td>404</td><td>Not Found</td><td>Model name incorrect or discontinued</td><td>⚠️ OpenAI sometimes misreports</td></tr><tr><td>413</td><td>Payload Too Large</td><td>Context overflow (Cerebras/Mistral)</td><td>❌</td></tr><tr><td>429</td><td>Too Many Requests</td><td>Rate limit or quota limit triggered</td><td>✅</td></tr><tr><td>2000+</td><td>Internal Server Error</td><td>Provider internal error</td><td>✅</td></tr><tr><td>503</td><td>Service Unavailable</td><td>Provider maintenance or overload</td><td>✅</td></tr></tbody></table><h3 id="opencode-internal-errors" tabindex="-1">OpenCode Internal Errors <a class="header-anchor" href="#opencode-internal-errors" aria-label="Permalink to “OpenCode Internal Errors”">​</a></h3><table tabindex="0"><thead><tr><th>Error Type</th><th>Meaning</th><th>Solution</th></tr></thead><tbody><tr><td><code>ContextOverflowError</code></td><td>Context overflow</td><td><code>/compact</code> to compress or <code>/new</code> for new session</td></tr><tr><td><code>AI_APICallError</code></td><td>API call failed</td><td>Check network and authentication</td></tr><tr><td><code>ProviderInitError</code></td><td>Provider initialization failed</td><td>Check configuration and authentication</td></tr><tr><td><code>ProviderModelNotFoundError</code></td><td>Model not found</td><td>Check model name format <code>provider/model</code></td></tr><tr><td><code>RejectedError</code></td><td>User rejected permission</td><td>Press <code>y</code> to allow at permission prompt</td></tr><tr><td><code>DeniedError</code></td><td>Operation denied by config rules</td><td>Check <code>permission</code> config in <code>opencode.json</code></td></tr></tbody></table><h3 id="context-overflow-provider-error-messages" tabindex="-1">Context Overflow Provider Error Messages <a class="header-anchor" href="#context-overflow-provider-error-messages" aria-label="Permalink to “Context Overflow Provider Error Messages”">​</a></h3><p>Different providers report context overflow with different error messages. OpenCode recognizes them uniformly:</p><table tabindex="0"><thead><tr><th>Provider</th><th>Error Message Pattern</th></tr></thead><tbody><tr><td>Anthropic</td><td><code>prompt is too long</code></td></tr><tr><td>OpenAI</td><td><code>exceeds the context window</code></td></tr><tr><td>Google Gemini</td><td><code>input token count exceeds the maximum</code></td></tr><tr><td>DeepSeek</td><td><code>maximum context length is X tokens</code></td></tr><tr><td>OpenRouter</td><td><code>maximum context length is X tokens</code></td></tr><tr><td>Groq</td><td><code>reduce the length of the messages</code></td></tr><tr><td>Amazon Bedrock</td><td><code>input is too long for requested model</code></td></tr><tr><td>xAI (Grok)</td><td><code>maximum prompt length is X</code></td></tr><tr><td>GitHub Copilot</td><td><code>exceeds the limit of X</code></td></tr><tr><td>llama.cpp</td><td><code>exceeds the available context size</code></td></tr><tr><td>LM Studio</td><td><code>greater than the context length</code></td></tr><tr><td>Cerebras/Mistral</td><td><code>400 (no body)</code> / <code>413 (no body)</code></td></tr><tr><td>MiniMax</td><td><code>context window exceeds limit</code></td></tr><tr><td>Moonshot/Kimi</td><td><code>exceeded model token limit</code></td></tr><tr><td>Generic fallback</td><td><code>context length exceeded</code></td></tr></tbody></table><p>When encountering these errors, use <code>/compact</code> to compress context or <code>/new</code> to create a new session.</p><hr><h2 id="diagnostic-commands-summary" tabindex="-1">Diagnostic Commands Summary <a class="header-anchor" href="#diagnostic-commands-summary" aria-label="Permalink to “Diagnostic Commands Summary”">​</a></h2>',12)),t[140]||(t[140]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Version info
opencode --version

# System info
uname -a

# Debug logs
opencode --log-level DEBUG --print-logs

# View authenticated providers
opencode auth list

# View available models
opencode models`)])],-1)),t[141]||(t[141]=e("hr",null,null,-1)),t[142]||(t[142]=e("h2",{id:"getting-help",tabindex:"-1"},[o("Getting Help "),e("a",{class:"header-anchor",href:"#getting-help","aria-label":"Permalink to “Getting Help”"},"​")],-1)),t[143]||(t[143]=e("p",null,"If none of the above methods resolve your issue:",-1)),t[144]||(t[144]=e("ol",null,[e("li",null,[e("p",null,[e("strong",null,"Collect information"),o(":")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`opencode --version > debug.txt
uname -a >> debug.txt
cat ~/.config/opencode/opencode.json >> debug.txt 2>/dev/null
ls -la ~/.local/share/opencode/log/ >> debug.txt`)])])]),e("li",null,[e("p",null,[e("strong",null,"Submit an Issue"),o(": "),e("a",{href:"https://github.com/anomalyco/opencode/issues",target:"_blank",rel:"noreferrer"},"github.com/anomalyco/opencode/issues")])])],-1)),t[145]||(t[145]=n('<hr><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to “Related Resources”">​</a></h2><ul><li><a href="./faq.html">FAQ</a> - Quick answers to common questions</li><li><a href="./../1-start/03-network.html">Network Configuration</a> - Detailed network setup</li><li><a href="./config-ref.html">Configuration Options</a> - Configuration reference</li><li><a href="./../5-advanced/20-compaction.html">Context Compaction</a> - Compaction mechanism details</li><li><a href="./providers.html">Model Providers</a> - Available model list</li></ul><div class="tip custom-block"><p class="custom-block-title">Still stuck?</p><p><a href="/en/community.html">Join the community</a> to connect with 2000+ fellow users for real-time Q&amp;A.</p></div>',4))])}const v=l(u,[["render",c]]);export{C as __pageData,v as default};
