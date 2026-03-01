import{_ as a,I as r,c as s,o as l,a5 as o,j as t,J as i,a as d,bw as p}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"CLI Command Reference","description":"Complete reference for OpenCode command line tool","frontmatter":{"title":"CLI Command Reference","description":"Complete reference for OpenCode command line tool"},"headers":[],"relativePath":"en/appendix/cli.md","filePath":"en/appendix/cli.md","lastUpdated":1772014034000}'),c={name:"en/appendix/cli.md"};function b(u,e,m,h,g,C){const n=r("AdInArticle");return l(),s("div",null,[e[0]||(e[0]=o("",12)),e[1]||(e[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode [project]")])],-1)),e[2]||(e[2]=o("",3)),e[3]||(e[3]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Start TUI
opencode

# Start with initial prompt
opencode --prompt "Help me analyze the code structure of this project"

# Use specific model
opencode -m anthropic/claude-sonnet-4-20250514

# Continue last session
opencode -c`)])],-1)),e[4]||(e[4]=t("hr",null,null,-1)),e[5]||(e[5]=t("h3",{id:"opencode-run",tabindex:"-1"},[d("opencode run "),t("a",{class:"header-anchor",href:"#opencode-run","aria-label":"Permalink to “opencode run”"},"​")],-1)),e[6]||(e[6]=t("p",null,"Execute tasks in non-interactive mode, suitable for scripts and CI/CD.",-1)),e[7]||(e[7]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode run [message..]")])],-1)),e[8]||(e[8]=o("",3)),e[9]||(e[9]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Basic usage
opencode run "Fix type errors in src/main.ts"

# Specify model
opencode run -m anthropic/claude-sonnet-4-5 "Review this code"

# Attach files (supports multiple files)
opencode run -f src/main.ts -f package.json "Analyze this project"

# Continue previous session
opencode run -c "What else needs to be done?"

# Use JSON output format (suitable for scripts)
opencode run --format json "List all TypeScript files"

# Connect to remote server (avoid MCP cold start)
opencode serve  # Start in another terminal
opencode run --attach http://localhost:4096 "Explain async/await"

# Use custom command
opencode run --command explain --file code.ts "How does this work?"

# Specify model variant (reasoning effort)
opencode run -m anthropic/claude-opus-4-5 --variant max "Analyze entire codebase"

# Auto-share session
opencode run --share "Generate project documentation"

# Specify session title
opencode run --title "Bug Fix" "Fix the login issue"

# Read input from stdin
echo "Count lines of code" | opencode run "Analyze"`)])],-1)),e[10]||(e[10]=t("hr",null,null,-1)),e[11]||(e[11]=t("h3",{id:"opencode-serve",tabindex:"-1"},[d("opencode serve "),t("a",{class:"header-anchor",href:"#opencode-serve","aria-label":"Permalink to “opencode serve”"},"​")],-1)),e[12]||(e[12]=t("p",null,"Start headless server mode, providing API access.",-1)),e[13]||(e[13]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode serve")])],-1)),e[14]||(e[14]=o("",3)),e[15]||(e[15]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Start with default configuration
opencode serve

# Specify port and allow remote access
opencode serve --port 4096 --hostname 0.0.0.0`)])],-1)),e[16]||(e[16]=t("hr",null,null,-1)),e[17]||(e[17]=t("h3",{id:"opencode-web",tabindex:"-1"},[d("opencode web "),t("a",{class:"header-anchor",href:"#opencode-web","aria-label":"Permalink to “opencode web”"},"​")],-1)),e[18]||(e[18]=t("p",null,"Start the Web interface.",-1)),e[19]||(e[19]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode web")])],-1)),e[20]||(e[20]=o("",3)),e[21]||(e[21]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Start Web interface
opencode web

# Specify port
opencode web --port 4096`)])],-1)),e[22]||(e[22]=t("hr",null,null,-1)),e[23]||(e[23]=t("h3",{id:"opencode-attach",tabindex:"-1"},[d("opencode attach "),t("a",{class:"header-anchor",href:"#opencode-attach","aria-label":"Permalink to “opencode attach”"},"​")],-1)),e[24]||(e[24]=t("p",null,"Connect to a remote OpenCode server.",-1)),e[25]||(e[25]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode attach [url]")])],-1)),e[26]||(e[26]=o("",3)),e[27]||(e[27]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Start server in one terminal
opencode web --port 4096 --hostname 0.0.0.0

# Connect from another terminal
opencode attach http://10.20.30.40:4096`)])],-1)),e[28]||(e[28]=t("hr",null,null,-1)),e[29]||(e[29]=t("h2",{id:"management-commands",tabindex:"-1"},[d("Management Commands "),t("a",{class:"header-anchor",href:"#management-commands","aria-label":"Permalink to “Management Commands”"},"​")],-1)),i(n),e[30]||(e[30]=t("h3",{id:"opencode-auth",tabindex:"-1"},[d("opencode auth "),t("a",{class:"header-anchor",href:"#opencode-auth","aria-label":"Permalink to “opencode auth”"},"​")],-1)),e[31]||(e[31]=t("p",null,[d("Manage authentication and API keys. Credentials are stored in "),t("code",null,"~/.local/share/opencode/auth.json"),d(".")],-1)),e[32]||(e[32]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode auth <subcommand>")])],-1)),e[33]||(e[33]=o("",2)),e[34]||(e[34]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Interactive login
opencode auth login

# List authenticated providers
opencode auth list

# Logout
opencode auth logout`)])],-1)),e[35]||(e[35]=t("hr",null,null,-1)),e[36]||(e[36]=t("h3",{id:"opencode-models",tabindex:"-1"},[d("opencode models "),t("a",{class:"header-anchor",href:"#opencode-models","aria-label":"Permalink to “opencode models”"},"​")],-1)),e[37]||(e[37]=t("p",null,"List available models.",-1)),e[38]||(e[38]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode models [provider]")])],-1)),e[39]||(e[39]=o("",3)),e[40]||(e[40]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# List all available models
opencode models

# List only Anthropic models
opencode models anthropic

# Refresh model list
opencode models --refresh`)])],-1)),e[41]||(e[41]=t("hr",null,null,-1)),e[42]||(e[42]=t("h3",{id:"opencode-agent",tabindex:"-1"},[d("opencode agent "),t("a",{class:"header-anchor",href:"#opencode-agent","aria-label":"Permalink to “opencode agent”"},"​")],-1)),e[43]||(e[43]=t("p",null,"Manage Agent configurations.",-1)),e[44]||(e[44]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode agent <subcommand>")])],-1)),e[45]||(e[45]=o("",2)),e[46]||(e[46]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# List Agents
opencode agent list

# Create new Agent
opencode agent create`)])],-1)),e[47]||(e[47]=t("hr",null,null,-1)),e[48]||(e[48]=t("h3",{id:"opencode-mcp",tabindex:"-1"},[d("opencode mcp "),t("a",{class:"header-anchor",href:"#opencode-mcp","aria-label":"Permalink to “opencode mcp”"},"​")],-1)),e[49]||(e[49]=t("p",null,"Manage MCP servers.",-1)),e[50]||(e[50]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode mcp <subcommand>")])],-1)),e[51]||(e[51]=o("",2)),e[52]||(e[52]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# List MCP servers
opencode mcp list

# Add new server
opencode mcp add

# OAuth authentication
opencode mcp auth context7

# List OAuth status
opencode mcp auth ls

# Debug connection
opencode mcp debug context7`)])],-1)),e[53]||(e[53]=t("hr",null,null,-1)),e[54]||(e[54]=t("h3",{id:"opencode-session",tabindex:"-1"},[d("opencode session "),t("a",{class:"header-anchor",href:"#opencode-session","aria-label":"Permalink to “opencode session”"},"​")],-1)),e[55]||(e[55]=t("p",null,"Manage sessions.",-1)),e[56]||(e[56]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode session <subcommand>")])],-1)),e[57]||(e[57]=o("",4)),e[58]||(e[58]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# List sessions
opencode session list

# List last 10 sessions
opencode session list -n 10

# Output as JSON
opencode session list --format json`)])],-1)),e[59]||(e[59]=t("hr",null,null,-1)),e[60]||(e[60]=t("h3",{id:"opencode-stats",tabindex:"-1"},[d("opencode stats "),t("a",{class:"header-anchor",href:"#opencode-stats","aria-label":"Permalink to “opencode stats”"},"​")],-1)),e[61]||(e[61]=t("p",null,"View usage statistics.",-1)),e[62]||(e[62]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode stats")])],-1)),e[63]||(e[63]=o("",3)),e[64]||(e[64]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# View statistics
opencode stats

# View last 7 days
opencode stats --days 7

# Show top 5 models
opencode stats --models 5`)])],-1)),e[65]||(e[65]=t("hr",null,null,-1)),e[66]||(e[66]=t("h3",{id:"opencode-export",tabindex:"-1"},[d("opencode export "),t("a",{class:"header-anchor",href:"#opencode-export","aria-label":"Permalink to “opencode export”"},"​")],-1)),e[67]||(e[67]=t("p",null,"Export session data as JSON.",-1)),e[68]||(e[68]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode export [sessionID]")])],-1)),e[69]||(e[69]=t("p",null,"If no session ID is specified, you will be prompted to select one.",-1)),e[70]||(e[70]=t("p",null,[t("strong",null,"Examples:")],-1)),e[71]||(e[71]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode export abc123")])],-1)),e[72]||(e[72]=t("hr",null,null,-1)),e[73]||(e[73]=t("h3",{id:"opencode-import",tabindex:"-1"},[d("opencode import "),t("a",{class:"header-anchor",href:"#opencode-import","aria-label":"Permalink to “opencode import”"},"​")],-1)),e[74]||(e[74]=t("p",null,"Import session data.",-1)),e[75]||(e[75]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode import <file>")])],-1)),e[76]||(e[76]=t("p",null,"Supports importing from local files or OpenCode share URLs.",-1)),e[77]||(e[77]=t("p",null,[t("strong",null,"Examples:")],-1)),e[78]||(e[78]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Import from file
opencode import session.json

# Import from share URL
opencode import https://opncd.ai/share/abc123`)])],-1)),e[79]||(e[79]=t("hr",null,null,-1)),e[80]||(e[80]=t("h3",{id:"opencode-github",tabindex:"-1"},[d("opencode github "),t("a",{class:"header-anchor",href:"#opencode-github","aria-label":"Permalink to “opencode github”"},"​")],-1)),e[81]||(e[81]=t("p",null,"GitHub integration management.",-1)),e[82]||(e[82]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode github <subcommand>")])],-1)),e[83]||(e[83]=o("",4)),e[84]||(e[84]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Install Actions
opencode github install`)])],-1)),e[85]||(e[85]=t("hr",null,null,-1)),e[86]||(e[86]=t("h3",{id:"opencode-pr",tabindex:"-1"},[d("opencode pr "),t("a",{class:"header-anchor",href:"#opencode-pr","aria-label":"Permalink to “opencode pr”"},"​")],-1)),e[87]||(e[87]=t("p",null,"Pull and checkout a GitHub PR branch, then start OpenCode.",-1)),e[88]||(e[88]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode pr <number>")])],-1)),e[89]||(e[89]=o("",5)),e[90]||(e[90]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Pull PR #123 and start OpenCode
opencode pr 123

# You will see:
# Fetching and checking out PR #123...
# Successfully checked out PR #123 as branch 'pr/123'
# Starting opencode...`)])],-1)),e[91]||(e[91]=t("hr",null,null,-1)),e[92]||(e[92]=t("h3",{id:"opencode-acp",tabindex:"-1"},[d("opencode acp "),t("a",{class:"header-anchor",href:"#opencode-acp","aria-label":"Permalink to “opencode acp”"},"​")],-1)),e[93]||(e[93]=t("p",null,"Start ACP (Agent Client Protocol) server.",-1)),e[94]||(e[94]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode acp")])],-1)),e[95]||(e[95]=o("",6)),e[96]||(e[96]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode upgrade [target]")])],-1)),e[97]||(e[97]=o("",3)),e[98]||(e[98]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Upgrade to latest
opencode upgrade

# Upgrade to specific version
opencode upgrade v1.0.5

# Downgrade to 0.x
opencode upgrade 0.15.31`)])],-1)),e[99]||(e[99]=t("hr",null,null,-1)),e[100]||(e[100]=t("h3",{id:"opencode-uninstall",tabindex:"-1"},[d("opencode uninstall "),t("a",{class:"header-anchor",href:"#opencode-uninstall","aria-label":"Permalink to “opencode uninstall”"},"​")],-1)),e[101]||(e[101]=t("p",null,"Uninstall OpenCode and delete related files.",-1)),e[102]||(e[102]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode uninstall")])],-1)),e[103]||(e[103]=o("",3)),e[104]||(e[104]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Complete uninstall
opencode uninstall

# Keep configuration
opencode uninstall --keep-config

# Preview deletion content
opencode uninstall --dry-run`)])],-1)),e[105]||(e[105]=o("",12)),e[106]||(e[106]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# Set server authentication
export OPENCODE_SERVER_PASSWORD=your-secure-password
export OPENCODE_SERVER_USERNAME=admin

opencode serve --hostname 0.0.0.0`)])],-1)),e[107]||(e[107]=o("",9))])}const v=a(c,[["render",b]]);export{y as __pageData,v as default};
