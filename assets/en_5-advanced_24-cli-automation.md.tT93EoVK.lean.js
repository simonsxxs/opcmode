import{_ as a,c as s,o as r,a5 as o,j as e,a as t,bv as i}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"CLI Automation: Running OpenCode in Scripts | OpenCode Tutorial","description":"Learn to automate OpenCode via command line, including non-interactive mode, remote servers, and CI/CD integration for fully automated workflows.","frontmatter":{"title":"CLI Automation: Running OpenCode in Scripts | OpenCode Tutorial","subtitle":"CLI Automation","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.24","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Learn to automate OpenCode via command line, including non-interactive mode, remote servers, and CI/CD integration for fully automated workflows.","tags":["CLI","Automation","CI/CD","Remote Access"],"prerequisite":["5.1a Configuration Basics","2.2 Managing Conversations"]},"headers":[],"relativePath":"en/5-advanced/24-cli-automation.md","filePath":"en/5-advanced/24-cli-automation.md","lastUpdated":1772014034000}'),d={name:"en/5-advanced/24-cli-automation.md"};function l(c,n,p,h,u,m){return r(),s("div",null,[...n[0]||(n[0]=[o("",19),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────────┐
│                        OpenCode Usage Modes                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   ┌─────────────────┐              ┌─────────────────┐                  │
│   │ Interactive TUI │              │ Non-interactive │                  │
│   │                 │              │      CLI        │                  │
│   │  opencode       │              │  opencode run   │                  │
│   │                 │              │                 │                  │
│   │  • Daily dev    │              │  • Scripts      │                  │
│   │  • Real-time    │              │  • CI/CD        │                  │
│   │  • Human choice │              │  • Automation   │                  │
│   └─────────────────┘              └─────────────────┘                  │
│                                                                          │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │                      Server Mode                                  │   │
│   │                                                                   │   │
│   │  opencode serve    →  Start headless server (API only)           │   │
│   │  opencode web      →  Start Web UI server                        │   │
│   │  opencode attach   →  Connect to remote server                   │   │
│   │                                                                   │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘`)])],-1),o("",6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Simplest usage
opencode run "List all TypeScript files in this project"

# You'll see:
# > opencode · anthropic/claude-sonnet-4-5
# 
# ✱ Glob "**/*.ts" in . · 12 matches
# 
# There are 12 TypeScript files in this project:
# - src/index.ts
# - src/utils.ts
# ...`)])],-1),o("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
# code-review.sh - Auto-review changes in current branch

# Get list of changed files
CHANGED_FILES=$(git diff --name-only main)

# Exit if no changes
if [ -z "$CHANGED_FILES" ]; then
  echo "No changes found"
  exit 0
fi

# Review each file
for file in $CHANGED_FILES; do
  echo "Reviewing: $file"
  opencode run -f "$file" "Please review the code quality of this file, focusing on: 1) Potential bugs 2) Performance issues 3) Code style"
done`)])],-1),e("h4",{id:"example-2-read-from-stdin",tabindex:"-1"},[t("Example 2: Read from stdin "),e("a",{class:"header-anchor",href:"#example-2-read-from-stdin","aria-label":"Permalink to “Example 2: Read from stdin”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Pipe input
cat error.log | opencode run "Analyze this error log and find the root cause"

# Combine with git diff
git diff main | opencode run "Check if these changes have any issues"`)])],-1),e("h4",{id:"example-3-json-format-output-for-script-parsing",tabindex:"-1"},[t("Example 3: JSON Format Output (for script parsing) "),e("a",{class:"header-anchor",href:"#example-3-json-format-output-for-script-parsing","aria-label":"Permalink to “Example 3: JSON Format Output (for script parsing)”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Get JSON format output
opencode run --format json "List all TODO comments" > todos.json

# JSON output format example:
# {"type":"text","timestamp":1705316400000,"sessionID":"xxx","part":{"text":"Found 5 TODOs..."}}`)])],-1),o("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Start headless server (API only, no UI)
opencode serve

# You'll see:
# Warning: OPENCODE_SERVER_PASSWORD is not set; server is unsecured.
# opencode server listening on http://localhost:4096`)])],-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"⚠️ Security Warning"),e("p",null,[t("By default, "),e("code",null,"opencode serve"),t(),e("strong",null,"has no authentication"),t(".")]),e("p",null,[t("But it only listens on "),e("code",null,"127.0.0.1"),t(" (localhost) by default, so external networks cannot directly access it. Security risks only exist when you:")]),e("ul",null,[e("li",null,[t("Use "),e("code",null,"--hostname 0.0.0.0"),t(" to open all network interfaces")]),e("li",null,"Server has a public IP and firewall allows the port")]),e("p",null,"...then you'll face security risks."),e("p",null,[e("strong",null,"You must set a password when exposing to public network"),t(":")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set server password
export OPENCODE_SERVER_PASSWORD=your-secure-password

# Then start
opencode serve
# Now access requires authentication`)])])],-1),e("h4",{id:"opencode-web-web-ui-mode",tabindex:"-1"},[t("opencode web (Web UI Mode) "),e("a",{class:"header-anchor",href:"#opencode-web-web-ui-mode","aria-label":"Permalink to “opencode web (Web UI Mode)”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Start server with Web UI
opencode web

# You'll see:
# Warning: OPENCODE_SERVER_PASSWORD is not set; server is unsecured.
# 
#   Local access:      http://localhost:4096
#   Network access:    http://192.168.1.100:4096`)])],-1),o("",2),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Listen on all network interfaces (allow LAN access)
opencode serve --hostname 0.0.0.0

# Specify port
opencode serve --port 8080

# Enable mDNS discovery (accessible via opencode.local in LAN)
opencode serve --hostname 0.0.0.0 --mdns`)])],-1),o("",3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set username and password
export OPENCODE_SERVER_USERNAME=admin
export OPENCODE_SERVER_PASSWORD=MySecurePassword123!

opencode serve --hostname 0.0.0.0`)])],-1),e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"💡 Why only environment variables?"),e("p",null,[t("Password-related configurations "),e("strong",null,[t("cannot be placed in "),e("code",null,"opencode.json"),t(" config file")]),t(", they can only be set via environment variables.")]),e("p",null,"This is for security - to prevent passwords from being accidentally committed to Git repositories."),e("p",null,[t("Global config file "),e("code",null,"~/.config/opencode/opencode.json"),t(" only supports these server options:")]),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "server": {
    "port": 4096,
    "hostname": "0.0.0.0",
    "mdns": true,
    "mdnsDomain": "opencode.local",
    "cors": ["http://example.com"]
  }
}`)])])],-1),e("h3",{id:"_2-4-connecting-to-remote-server",tabindex:"-1"},[t("2.4 Connecting to Remote Server "),e("a",{class:"header-anchor",href:"#_2-4-connecting-to-remote-server","aria-label":"Permalink to “2.4 Connecting to Remote Server”"},"​")],-1),e("h4",{id:"using-attach",tabindex:"-1"},[t("Using attach "),e("a",{class:"header-anchor",href:"#using-attach","aria-label":"Permalink to “Using attach”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Connect to remote server from local
opencode attach http://192.168.1.100:4096

# Specify working directory
opencode attach http://192.168.1.100:4096 --dir /projects/myapp`)])],-1),e("h4",{id:"using-run",tabindex:"-1"},[t("Using run "),e("a",{class:"header-anchor",href:"#using-run","aria-label":"Permalink to “Using run”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# First start on server
opencode serve --hostname 0.0.0.0

# Connect and execute from another machine
opencode run --attach http://192.168.1.100:4096 "Analyze this project's architecture"`)])],-1),e("hr",null,null,-1),e("h2",{id:"part-3-ci-cd-integration",tabindex:"-1"},[t("Part 3: CI/CD Integration "),e("a",{class:"header-anchor",href:"#part-3-ci-cd-integration","aria-label":"Permalink to “Part 3: CI/CD Integration”"},"​")],-1),e("h3",{id:"_3-1-github-actions-example",tabindex:"-1"},[t("3.1 GitHub Actions Example "),e("a",{class:"header-anchor",href:"#_3-1-github-actions-example","aria-label":"Permalink to “3.1 GitHub Actions Example”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`# .github/workflows/ai-review.yml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup OpenCode
        run: |
          curl -fsSL https://raw.githubusercontent.com/anomalyco/opencode/main/install | bash
          echo "$HOME/.opencode/bin" >> $GITHUB_PATH
      
      - name: AI Review
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          # Get changed files
          FILES=$(git diff --name-only origin/main...HEAD | head -10)
          
          for file in $FILES; do
            echo "Reviewing: $file"
            opencode run -f "$file" --title "AI Review: $file" \\
              "As a code reviewer, review the changes in this file. Focus on:
              1. Potential bugs or security issues
              2. Code readability and maintainability
              3. Best practices compliance
              
              Output format:
              - 🟢 Pass
              - 🟡 Suggestions for improvement
              - 🔴 Must fix"
          done`)])],-1),e("h3",{id:"_3-2-gitlab-ci-example",tabindex:"-1"},[t("3.2 GitLab CI Example "),e("a",{class:"header-anchor",href:"#_3-2-gitlab-ci-example","aria-label":"Permalink to “3.2 GitLab CI Example”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`# .gitlab-ci.yml
ai-review:
  stage: test
  image: node:20
  script:
    - curl -fsSL https://raw.githubusercontent.com/anomalyco/opencode/main/install | bash
    - export PATH="$HOME/.opencode/bin:$PATH"
    - |
      git diff --name-only origin/main...$CI_COMMIT_SHA | while read file; do
        opencode run -f "$file" "Review code: $file"
      done
  only:
    - merge_requests`)])],-1),e("h3",{id:"_3-3-automation-script-template",tabindex:"-1"},[t("3.3 Automation Script Template "),e("a",{class:"header-anchor",href:"#_3-3-automation-script-template","aria-label":"Permalink to “3.3 Automation Script Template”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
# auto-fix.sh - Auto-fix code style issues

set -e

# Check for uncommitted changes
if ! git diff --quiet; then
  echo "Error: You have uncommitted changes, please commit or stash first"
  exit 1
fi

# Get all files to check
FILES=$(find src -name "*.ts" -o -name "*.tsx")

for file in $FILES; do
  echo "Processing: $file"
  
  opencode run -f "$file" \\
    "Please fix code style issues in this file without changing the functionality. Focus on:
    1. Variable naming conventions
    2. Code indentation and formatting
    3. Remove unused imports
    4. Add necessary comments"
done

echo "All files processed"`)])],-1),o("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Fetch PR and start OpenCode
opencode pr 123

# You'll see:
# Fetching and checking out PR #123...
# Successfully checked out PR #123 as branch 'pr/123'
# 
# Starting opencode...`)])],-1),o("",3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Ensure gh CLI is installed
gh --version

# Ensure authenticated
gh auth status`)])],-1),e("details",{class:"details custom-block"},[e("summary",null,"How to install gh CLI"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# macOS
brew install gh

# Ubuntu/Debian
sudo apt install gh

# Windows
winget install GitHub.cli`)])])],-1),e("hr",null,null,-1),e("h2",{id:"part-5-session-management-cli",tabindex:"-1"},[t("Part 5: Session Management CLI "),e("a",{class:"header-anchor",href:"#part-5-session-management-cli","aria-label":"Permalink to “Part 5: Session Management CLI”"},"​")],-1),e("h3",{id:"_5-1-list-sessions",tabindex:"-1"},[t("5.1 List Sessions "),e("a",{class:"header-anchor",href:"#_5-1-list-sessions","aria-label":"Permalink to “5.1 List Sessions”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# List all sessions
opencode session list

# You'll see:
# Session ID              Title                      Updated
# ─────────────────────────────────────────────────────────────
# session_abc123          Fix login bug              Today 14:30
# session_def456          Add user profile           Yesterday

# Limit count
opencode session list -n 10

# JSON format (for scripts)
opencode session list --format json`)])],-1),e("h3",{id:"_5-2-export-sessions",tabindex:"-1"},[t("5.2 Export Sessions "),e("a",{class:"header-anchor",href:"#_5-2-export-sessions","aria-label":"Permalink to “5.2 Export Sessions”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Export specific session
opencode export session_abc123 > backup.json

# Interactive selection if no ID specified
opencode export > backup.json`)])],-1),e("h3",{id:"_5-3-import-sessions",tabindex:"-1"},[t("5.3 Import Sessions "),e("a",{class:"header-anchor",href:"#_5-3-import-sessions","aria-label":"Permalink to “5.3 Import Sessions”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Import from file
opencode import backup.json

# Import from share link
opencode import https://opncd.ai/share/abc123`)])],-1),e("hr",null,null,-1),e("h2",{id:"part-6-other-useful-commands",tabindex:"-1"},[t("Part 6: Other Useful Commands "),e("a",{class:"header-anchor",href:"#part-6-other-useful-commands","aria-label":"Permalink to “Part 6: Other Useful Commands”"},"​")],-1),e("h3",{id:"_6-1-opencode-models",tabindex:"-1"},[t("6.1 opencode models "),e("a",{class:"header-anchor",href:"#_6-1-opencode-models","aria-label":"Permalink to “6.1 opencode models”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# List all available models
opencode models

# List models from specific provider
opencode models anthropic

# Show detailed info (including pricing)
opencode models --verbose

# Refresh model cache
opencode models --refresh`)])],-1),e("h3",{id:"_6-2-opencode-stats",tabindex:"-1"},[t("6.2 opencode stats "),e("a",{class:"header-anchor",href:"#_6-2-opencode-stats","aria-label":"Permalink to “6.2 opencode stats”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View usage statistics
opencode stats

# View last 7 days
opencode stats --days 7

# View model usage breakdown
opencode stats --models

# Only current project
opencode stats --project ""`)])],-1),e("h3",{id:"_6-3-opencode-upgrade-uninstall",tabindex:"-1"},[t("6.3 opencode upgrade / uninstall "),e("a",{class:"header-anchor",href:"#_6-3-opencode-upgrade-uninstall","aria-label":"Permalink to “6.3 opencode upgrade / uninstall”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Upgrade to latest version
opencode upgrade

# Upgrade to specific version
opencode upgrade 0.1.50

# Use specific installation method
opencode upgrade --method npm

# Uninstall (keep config)
opencode uninstall --keep-config

# Preview what will be deleted
opencode uninstall --dry-run`)])],-1),o("",16)])])}const f=a(d,[["render",l]]);export{g as __pageData,f as default};
