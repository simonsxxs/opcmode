import{_ as a,c as s,o as r,a5 as o,j as e,a as t,bv as i}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"CLI Automation: Running OpenCode in Scripts | OpenCode Tutorial","description":"Learn to automate OpenCode via command line, including non-interactive mode, remote servers, and CI/CD integration for fully automated workflows.","frontmatter":{"title":"CLI Automation: Running OpenCode in Scripts | OpenCode Tutorial","subtitle":"CLI Automation","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.24","duration":"25 minutes","practice":"30 minutes","level":"Advanced","description":"Learn to automate OpenCode via command line, including non-interactive mode, remote servers, and CI/CD integration for fully automated workflows.","tags":["CLI","Automation","CI/CD","Remote Access"],"prerequisite":["5.1a Configuration Basics","2.2 Managing Conversations"]},"headers":[],"relativePath":"en/5-advanced/24-cli-automation.md","filePath":"en/5-advanced/24-cli-automation.md","lastUpdated":1772014034000}'),d={name:"en/5-advanced/24-cli-automation.md"};function l(c,n,p,h,u,m){return r(),s("div",null,[...n[0]||(n[0]=[o('<h1 id="cli-automation-running-opencode-in-scripts" tabindex="-1">CLI Automation: Running OpenCode in Scripts <a class="header-anchor" href="#cli-automation-running-opencode-in-scripts" aria-label="Permalink to “CLI Automation: Running OpenCode in Scripts”">​</a></h1><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+i+'" alt="CLI Automation Notes" data-zoom-src="/images/5-advanced/24-cli-automation-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Call OpenCode from scripts without manual intervention</li><li>Start remote servers for team members to share the same AI session</li><li>Embed OpenCode in CI/CD pipelines for automated code review</li><li>One-click pull PRs and launch corresponding OpenCode sessions</li></ul><hr><h2 id="your-current-pain-points" tabindex="-1">Your Current Pain Points <a class="header-anchor" href="#your-current-pain-points" aria-label="Permalink to “Your Current Pain Points”">​</a></h2><ul><li>Manually opening TUI and typing commands every time - too much repetitive work</li><li>Want to run OpenCode on a server but there&#39;s no GUI</li><li>Want AI to automatically check code in CI/CD but don&#39;t know how to integrate</li><li>Want team members to connect to the same OpenCode instance for collaboration</li></ul><hr><h2 id="when-to-use-this-technique" tabindex="-1">When to Use This Technique <a class="header-anchor" href="#when-to-use-this-technique" aria-label="Permalink to “When to Use This Technique”">​</a></h2><ul><li><strong>Script Automation</strong>: Batch processing multiple projects, scheduled tasks</li><li><strong>CI/CD Integration</strong>: Code review, auto-fix, documentation generation</li><li><strong>Remote Development</strong>: Run on server, connect from local terminal</li><li><strong>Team Collaboration</strong>: Share OpenCode instance, collaborative editing</li></ul><hr><h2 id="🎒-prerequisites" tabindex="-1">🎒 Prerequisites <a class="header-anchor" href="#🎒-prerequisites" aria-label="Permalink to “🎒 Prerequisites”">​</a></h2><ul><li>[ ] Completed <a href="./01a-config-basics.html">5.1a Configuration Basics</a></li><li>[ ] Can run <code>opencode</code> in terminal to start TUI</li><li>[ ] Understand basic Shell commands (<code>cd</code>, <code>echo</code>, pipes)</li></ul><hr><h2 id="core-concept" tabindex="-1">Core Concept <a class="header-anchor" href="#core-concept" aria-label="Permalink to “Core Concept”">​</a></h2><p>OpenCode provides two usage modes:</p>',19),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────────────┘`)])],-1),o('<p><strong>Key Differences</strong>:</p><table tabindex="0"><thead><tr><th>Mode</th><th>Command</th><th>Characteristics</th></tr></thead><tbody><tr><td>TUI</td><td><code>opencode</code></td><td>Interactive, for manual operations</td></tr><tr><td>Run</td><td><code>opencode run</code></td><td>Non-interactive, exits after completion</td></tr><tr><td>Serve</td><td><code>opencode serve</code></td><td>Headless server, API only</td></tr><tr><td>Web</td><td><code>opencode web</code></td><td>Server with Web interface</td></tr></tbody></table><hr><h2 id="part-1-non-interactive-mode-with-opencode-run" tabindex="-1">Part 1: Non-Interactive Mode with opencode run <a class="header-anchor" href="#part-1-non-interactive-mode-with-opencode-run" aria-label="Permalink to “Part 1: Non-Interactive Mode with opencode run”">​</a></h2><h3 id="_1-1-basic-usage" tabindex="-1">1.1 Basic Usage <a class="header-anchor" href="#_1-1-basic-usage" aria-label="Permalink to “1.1 Basic Usage”">​</a></h3><p><code>opencode run</code> is the most commonly used CLI command. It executes a task and automatically exits.</p>',6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Simplest usage
opencode run "List all TypeScript files in this project"

# You'll see:
# > opencode · anthropic/claude-sonnet-4-5
# 
# ✱ Glob "**/*.ts" in . · 12 matches
# 
# There are 12 TypeScript files in this project:
# - src/index.ts
# - src/utils.ts
# ...`)])],-1),o('<h3 id="_1-2-common-options" tabindex="-1">1.2 Common Options <a class="header-anchor" href="#_1-2-common-options" aria-label="Permalink to “1.2 Common Options”">​</a></h3><table tabindex="0"><thead><tr><th>Option</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>-m, --model</code></td><td>Specify model</td><td><code>-m anthropic/claude-opus-4-5</code></td></tr><tr><td><code>--agent</code></td><td>Specify Agent</td><td><code>--agent code-reviewer</code></td></tr><tr><td><code>-f, --file</code></td><td>Attach files</td><td><code>-f src/main.ts -f package.json</code></td></tr><tr><td><code>-c, --continue</code></td><td>Continue last session</td><td><code>-c</code></td></tr><tr><td><code>-s, --session</code></td><td>Specify session ID</td><td><code>-s session_abc123</code></td></tr><tr><td><code>--format json</code></td><td>JSON output format</td><td><code>--format json</code></td></tr><tr><td><code>--share</code></td><td>Auto-share session</td><td><code>--share</code></td></tr><tr><td><code>--title</code></td><td>Set session title</td><td><code>--title &quot;Fix Login Bug&quot;</code></td></tr></tbody></table><h3 id="_1-3-practical-examples" tabindex="-1">1.3 Practical Examples <a class="header-anchor" href="#_1-3-practical-examples" aria-label="Permalink to “1.3 Practical Examples”">​</a></h3><h4 id="example-1-code-review-script" tabindex="-1">Example 1: Code Review Script <a class="header-anchor" href="#example-1-code-review-script" aria-label="Permalink to “Example 1: Code Review Script”">​</a></h4>',4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
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
# {"type":"text","timestamp":1705316400000,"sessionID":"xxx","part":{"text":"Found 5 TODOs..."}}`)])],-1),o('<hr><h2 id="part-2-server-mode" tabindex="-1">Part 2: Server Mode <a class="header-anchor" href="#part-2-server-mode" aria-label="Permalink to “Part 2: Server Mode”">​</a></h2><h3 id="_2-1-starting-a-remote-server" tabindex="-1">2.1 Starting a Remote Server <a class="header-anchor" href="#_2-1-starting-a-remote-server" aria-label="Permalink to “2.1 Starting a Remote Server”">​</a></h3><div class="info custom-block"><p class="custom-block-title">🤔 When do you need a remote server?</p><ul><li><strong>Shared Sessions</strong>: Team members connect to the same OpenCode instance</li><li><strong>Server Development</strong>: Run on remote server, connect from local terminal</li><li><strong>Avoid Cold Start</strong>: Keep MCP servers running, <code>opencode run --attach</code> connects directly</li></ul></div><h4 id="opencode-serve-headless-mode" tabindex="-1">opencode serve (Headless Mode) <a class="header-anchor" href="#opencode-serve-headless-mode" aria-label="Permalink to “opencode serve (Headless Mode)”">​</a></h4>',5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Start headless server (API only, no UI)
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
#   Network access:    http://192.168.1.100:4096`)])],-1),o('<h3 id="_2-2-server-options" tabindex="-1">2.2 Server Options <a class="header-anchor" href="#_2-2-server-options" aria-label="Permalink to “2.2 Server Options”">​</a></h3><table tabindex="0"><thead><tr><th>Option</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--port</code></td><td>Listen port</td><td>Auto (prefers 4096)</td></tr><tr><td><code>--hostname</code></td><td>Listen address</td><td>127.0.0.1</td></tr><tr><td><code>--mdns</code></td><td>Enable mDNS discovery</td><td>false</td></tr><tr><td><code>--mdns-domain</code></td><td>mDNS domain</td><td>opencode.local</td></tr><tr><td><code>--cors</code></td><td>CORS whitelist domains</td><td>-</td></tr></tbody></table>',2),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Listen on all network interfaces (allow LAN access)
opencode serve --hostname 0.0.0.0

# Specify port
opencode serve --port 8080

# Enable mDNS discovery (accessible via opencode.local in LAN)
opencode serve --hostname 0.0.0.0 --mdns`)])],-1),o('<h3 id="_2-3-security-configuration" tabindex="-1">2.3 Security Configuration <a class="header-anchor" href="#_2-3-security-configuration" aria-label="Permalink to “2.3 Security Configuration”">​</a></h3><p><strong>Environment Variables</strong>:</p><table tabindex="0"><thead><tr><th>Variable</th><th>Description</th></tr></thead><tbody><tr><td><code>OPENCODE_SERVER_PASSWORD</code></td><td>Server password</td></tr><tr><td><code>OPENCODE_SERVER_USERNAME</code></td><td>Username (default: opencode)</td></tr></tbody></table>',3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set username and password
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

echo "All files processed"`)])],-1),o('<hr><h2 id="part-4-opencode-pr-command" tabindex="-1">Part 4: opencode pr Command <a class="header-anchor" href="#part-4-opencode-pr-command" aria-label="Permalink to “Part 4: opencode pr Command”">​</a></h2><h3 id="_4-1-feature-overview" tabindex="-1">4.1 Feature Overview <a class="header-anchor" href="#_4-1-feature-overview" aria-label="Permalink to “4.1 Feature Overview”">​</a></h3><p><code>opencode pr</code> is a dedicated command for handling GitHub PRs. It:</p><ol><li>Fetches the specified PR to local</li><li>Automatically creates branch <code>pr/&lt;PR-number&gt;</code></li><li>If PR description contains OpenCode session link, imports it automatically</li></ol>',5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Fetch PR and start OpenCode
opencode pr 123

# You'll see:
# Fetching and checking out PR #123...
# Successfully checked out PR #123 as branch 'pr/123'
# 
# Starting opencode...`)])],-1),o('<h3 id="_4-2-use-cases" tabindex="-1">4.2 Use Cases <a class="header-anchor" href="#_4-2-use-cases" aria-label="Permalink to “4.2 Use Cases”">​</a></h3><table tabindex="0"><thead><tr><th>Scenario</th><th>Description</th></tr></thead><tbody><tr><td>Review others&#39; PRs</td><td>One-click fetch, review directly in OpenCode</td></tr><tr><td>Continue previous session</td><td>PR author shared session link, you can restore context</td></tr><tr><td>Handle Fork PRs</td><td>Auto-adds Fork remote, correctly sets upstream</td></tr></tbody></table><h3 id="_4-3-prerequisites" tabindex="-1">4.3 Prerequisites <a class="header-anchor" href="#_4-3-prerequisites" aria-label="Permalink to “4.3 Prerequisites”">​</a></h3>',3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Ensure gh CLI is installed
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
opencode uninstall --dry-run`)])],-1),o('<hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><ul><li>[ ] Can use <code>opencode run</code> for one-off tasks</li><li>[ ] Can use <code>opencode serve</code> to start remote server with password</li><li>[ ] Can use <code>opencode attach</code> to connect to remote server</li><li>[ ] Can use <code>opencode pr</code> to fetch and handle GitHub PRs</li><li>[ ] Can use <code>opencode session list</code> to view session history</li><li>[ ] Can use <code>opencode export/import</code> to backup and restore sessions</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td><code>opencode serve</code> error &quot;address already in use&quot;</td><td>Port occupied</td><td>Use different port: <code>--port 8080</code></td></tr><tr><td>Remote connection refused</td><td>Firewall or hostname setting</td><td>Confirm <code>--hostname 0.0.0.0</code>, check firewall</td></tr><tr><td><code>opencode pr</code> error &quot;gh CLI not found&quot;</td><td>GitHub CLI not installed</td><td>Install gh first and authenticate</td></tr><tr><td><code>opencode run</code> keeps waiting</td><td>AI executing long task</td><td>Add timeout in script: <code>timeout 60 opencode run ...</code></td></tr><tr><td>JSON output parsing failed</td><td>Output contains multiple JSON lines</td><td>Split by newline, each line is a JSON object</td></tr><tr><td>Server no auth warning</td><td>Password not set</td><td><code>export OPENCODE_SERVER_PASSWORD=xxx</code></td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><strong>Non-Interactive Mode</strong>: Use <code>opencode run</code> to call OpenCode in scripts</li><li><strong>Server Mode</strong>: Use <code>opencode serve/web</code> to start remote services</li><li><strong>Security Configuration</strong>: Set <code>OPENCODE_SERVER_PASSWORD</code> to protect server</li><li><strong>CI/CD Integration</strong>: Embed OpenCode in automated workflows</li><li><strong>PR Handling</strong>: Use <code>opencode pr</code> for one-click PR fetch and processing</li><li><strong>Session Management</strong>: Use CLI commands to list, export, and import sessions</li></ol><hr><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to “Next Steps”">​</a></h2><blockquote><p>This is the final lesson in the advanced section. Next you can:</p><ul><li>Review CLI command reference in the <a href="/en/appendix/">Cheat Sheet</a></li><li>Try CI/CD integration examples in <a href="/en/4-scenarios/">Practical Scenarios</a></li><li>Learn <a href="/en/5-advanced/10a-sdk-basics.html">SDK Development</a> to build your own integrations</li></ul></blockquote><hr><h2 id="appendix-source-code-reference" tabindex="-1">Appendix: Source Code Reference <a class="header-anchor" href="#appendix-source-code-reference" aria-label="Permalink to “Appendix: Source Code Reference”">​</a></h2><details><summary><strong>Click to expand source code locations</strong></summary><blockquote><p>Last updated: 2026-02-14</p></blockquote><table tabindex="0"><thead><tr><th>Feature</th><th>File Path</th><th>Lines</th></tr></thead><tbody><tr><td><code>opencode run</code> command implementation</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/run.ts#L215-L614" target="_blank" rel="noreferrer"><code>src/cli/cmd/run.ts</code></a></td><td>215-614</td></tr><tr><td><code>opencode serve</code> command implementation</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/serve.ts#L6-L20" target="_blank" rel="noreferrer"><code>src/cli/cmd/serve.ts</code></a></td><td>6-20</td></tr><tr><td><code>opencode web</code> command implementation</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/web.ts" target="_blank" rel="noreferrer"><code>src/cli/cmd/web.ts</code></a></td><td>Full file</td></tr><tr><td><code>opencode pr</code> command implementation</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/pr.ts#L6-L112" target="_blank" rel="noreferrer"><code>src/cli/cmd/pr.ts</code></a></td><td>6-112</td></tr><tr><td>Server security check</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/flag/flag.ts#L31-L32" target="_blank" rel="noreferrer"><code>src/flag/flag.ts</code></a></td><td>31-32</td></tr><tr><td>Server authentication logic</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/server/server.ts#L84-L87" target="_blank" rel="noreferrer"><code>src/server/server.ts</code></a></td><td>84-87</td></tr></tbody></table><p><strong>Key Environment Variables</strong>:</p><ul><li><code>OPENCODE_SERVER_PASSWORD</code>: Server password</li><li><code>OPENCODE_SERVER_USERNAME</code>: Server username (default: opencode)</li></ul></details>',16)])])}const f=a(d,[["render",l]]);export{g as __pageData,f as default};
