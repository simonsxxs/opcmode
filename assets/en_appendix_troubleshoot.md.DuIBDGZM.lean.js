import{_ as l,I as s,c as a,o as i,a5 as n,j as e,J as d,a as o,bD as p}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"Troubleshooting: Quickly Diagnose and Fix Common Issues | OpenCode Tutorial","description":"Quickly diagnose and fix common OpenCode issues. Covers API errors, context overflow, permission denials, output truncation, retry mechanisms, and more. Includes a complete error code reference and diagnostic checklist.","frontmatter":{"title":"Troubleshooting: Quickly Diagnose and Fix Common Issues | OpenCode Tutorial","description":"Quickly diagnose and fix common OpenCode issues. Covers API errors, context overflow, permission denials, output truncation, retry mechanisms, and more. Includes a complete error code reference and diagnostic checklist."},"headers":[],"relativePath":"en/appendix/troubleshoot.md","filePath":"en/appendix/troubleshoot.md","lastUpdated":1772014034000}'),u={name:"en/appendix/troubleshoot.md"};function c(g,t,m,h,b,y){const r=s("AdInArticle");return i(),a("div",null,[t[0]||(t[0]=n("",10)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View latest logs
ls -lt ~/.local/share/opencode/log/ | head

# Enable debug logging
opencode --log-level DEBUG

# Print logs to terminal
opencode --print-logs`)])],-1)),t[2]||(t[2]=n("",6)),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"zsh: command not found: opencode")])],-1)),t[4]||(t[4]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[5]||(t[5]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Check if installed
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
opencode`)])],-1)),t[13]||(t[13]=n("",5)),t[14]||(t[14]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"ProviderInitError: Failed to initialize provider")])],-1)),t[15]||(t[15]=e("p",null,[e("strong",null,"Diagnostic Steps"),o(":")],-1)),t[16]||(t[16]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Verify provider configuration
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

# 3. Restart opencode`)])],-1)),t[51]||(t[51]=n("",5)),t[52]||(t[52]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"ProviderModelNotFoundError: Model not found")])],-1)),t[53]||(t[53]=n("",5)),t[54]||(t[54]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View available models
opencode models`)])],-1)),t[55]||(t[55]=n("",6)),t[56]||(t[56]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`# Compress context
/compact

# New session
/new

# Switch model
/models`)])],-1)),t[57]||(t[57]=n("",5)),t[58]||(t[58]=e("details",{class:"details custom-block"},[e("summary",null,"Retry delay calculation (when provider doesn't return response header)"),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`First retry:  2 seconds
Second retry: 4 seconds
Third retry:  8 seconds
Fourth retry: 16 seconds
Fifth retry:  30 seconds (reaches limit, stops growing)`)])]),e("p",null,[o("If the provider returns a "),e("code",null,"Retry-After"),o(" or "),e("code",null,"Retry-After-Ms"),o(" response header, OpenCode prioritizes the provider-specified wait time,不受 30 秒上限限制。")])],-1)),t[59]||(t[59]=n("",9)),t[60]||(t[60]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`...2000+ lines truncated...

The tool call succeeded but the output was truncated.
Full output saved to: /path/to/tool-output/tool_xxx
Use Grep to search the full content or Read with offset/limit
to view specific sections.`)])],-1)),t[61]||(t[61]=n("",8)),t[62]||(t[62]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"The user rejected permission to use this specific tool call.")])],-1)),t[63]||(t[63]=n("",7)),t[64]||(t[64]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
# Contact your IT department`)])],-1)),t[102]||(t[102]=n("",2)),t[103]||(t[103]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Connect to local model
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
# Some providers work better without VPN`)])],-1)),t[114]||(t[114]=n("",7)),t[115]||(t[115]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Check file permissions
ls -la path/to/file

# 2. Check OpenCode permission settings
cat ~/.config/opencode/opencode.json | jq .permission`)])],-1)),t[116]||(t[116]=n("",6)),t[117]||(t[117]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Confirm it's a Git repository
git status`)])],-1)),t[118]||(t[118]=n("",7)),t[119]||(t[119]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set correct encoding
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
npm install -g opencode-ai`)])],-1)),t[137]||(t[137]=n("",4)),t[138]||(t[138]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Quick diagnostic trio
opencode --version
opencode auth list
opencode --log-level DEBUG --print-logs`)])],-1)),t[139]||(t[139]=n("",12)),t[140]||(t[140]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Version info
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
ls -la ~/.local/share/opencode/log/ >> debug.txt`)])])]),e("li",null,[e("p",null,[e("strong",null,"Submit an Issue"),o(": "),e("a",{href:"https://github.com/anomalyco/opencode/issues",target:"_blank",rel:"noreferrer"},"github.com/anomalyco/opencode/issues")])])],-1)),t[145]||(t[145]=n("",4))])}const v=l(u,[["render",c]]);export{C as __pageData,v as default};
