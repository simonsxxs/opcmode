import{_ as a,I as r,c as i,o as d,a5 as n,j as e,J as l,a as o,bn as p}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"5.14 GitHub Integration","description":"Use OpenCode in GitHub Actions to implement issue triage, auto-fix, PR review and more.","frontmatter":{"title":"5.14 GitHub Integration","subtitle":"Using OpenCode in GitHub Actions","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.14","duration":"15 minutes","practice":"20 minutes","level":"Advanced","description":"Use OpenCode in GitHub Actions to implement issue triage, auto-fix, PR review and more.","tags":["GitHub","CI/CD","Automation"],"prerequisite":["5.9 Remote Development"]},"headers":[],"relativePath":"en/5-advanced/14-github.md","filePath":"en/5-advanced/14-github.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/14-github.md"};function c(m,t,h,g,b,f){const s=r("AdInArticle");return d(),i("div",null,[t[0]||(t[0]=n('<h1 id="github-integration" tabindex="-1">GitHub Integration <a class="header-anchor" href="#github-integration" aria-label="Permalink to “GitHub Integration”">​</a></h1><p>OpenCode integrates deeply with GitHub workflows. Mention <code>/opencode</code> or <code>/oc</code> in an Issue or PR comment, and OpenCode will execute tasks in your GitHub Actions runner.</p><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+p+'" alt="5.14 GitHub Integration Notes" data-zoom-src="/images/5-advanced/github-notes.jpeg"></p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to “Features”">​</a></h2><ul><li><strong>Triage Issues</strong>: Have OpenCode review an Issue and explain the problem</li><li><strong>Fix and Implement</strong>: Have OpenCode fix an Issue or implement a feature - it works in a new branch and submits a PR</li><li><strong>Review PRs</strong>: Automatically review Pull Request code quality</li><li><strong>Security</strong>: OpenCode runs in your own GitHub runner, code never leaves your environment</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to “Installation”">​</a></h2><p>Run in your GitHub repository&#39;s project directory:</p>',9)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github install")])],-1)),t[2]||(t[2]=e("p",null,"This guides you through: installing the GitHub App, selecting providers and models, creating workflow files, and setting up secrets.",-1)),t[3]||(t[3]=e("h3",{id:"manual-setup",tabindex:"-1"},[o("Manual Setup "),e("a",{class:"header-anchor",href:"#manual-setup","aria-label":"Permalink to “Manual Setup”"},"​")],-1)),l(s),t[4]||(t[4]=e("p",null,"You can also set up manually:",-1)),t[5]||(t[5]=e("p",null,[e("strong",null,"1. Install GitHub App")],-1)),t[6]||(t[6]=e("p",null,[o("Go to "),e("a",{href:"https://github.com/apps/opencode-agent",target:"_blank",rel:"noreferrer"},"github.com/apps/opencode-agent"),o(" and ensure it's installed on your target repository.")],-1)),t[7]||(t[7]=e("p",null,[e("strong",null,"2. Add workflow")],-1)),t[8]||(t[8]=e("p",null,[o("Add the following to your repository's "),e("code",null,".github/workflows/opencode.yml"),o(":")],-1)),t[9]||(t[9]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: opencode

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

jobs:
  opencode:
    if: |
      contains(github.event.comment.body, ' /oc') ||
      startsWith(github.event.comment.body, '/oc') ||
      contains(github.event.comment.body, ' /opencode') ||
      startsWith(github.event.comment.body, '/opencode')
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
      pull-requests: read
      issues: read
    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Run OpenCode
        uses: anomalyco/opencode/github@latest
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        with:
          model: anthropic/claude-sonnet-4-20250514`)])],-1)),t[10]||(t[10]=n('<blockquote><p><strong>Note</strong>: The if condition uses a combination of <code>startsWith</code> and <code>contains(&#39; /oc&#39;)</code> to ensure the trigger phrase is at the beginning of a line or preceded by a space, avoiding false matches in URLs or code.</p></blockquote><p><strong>3. Store API Keys</strong></p><p>Add required API keys in <strong>Settings</strong> &gt; <strong>Secrets and variables</strong> &gt; <strong>Actions</strong> for your organization or project.</p><h2 id="configuration-options" tabindex="-1">Configuration Options <a class="header-anchor" href="#configuration-options" aria-label="Permalink to “Configuration Options”">​</a></h2><table tabindex="0"><thead><tr><th>Option</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>model</code></td><td><strong>Yes</strong></td><td>-</td><td>Model to use, format is <code>provider/model</code></td></tr><tr><td><code>agent</code></td><td>No</td><td><code>default_agent</code> from config or <code>&quot;build&quot;</code></td><td>Agent to use, must be a primary agent</td></tr><tr><td><code>share</code></td><td>No</td><td><code>true</code> for public repos</td><td>Whether to share session links</td></tr><tr><td><code>prompt</code></td><td>No</td><td>-</td><td>Custom prompt, overrides default behavior (required for <code>schedule</code>/<code>workflow_dispatch</code>/<code>issues</code> events)</td></tr><tr><td><code>use_github_token</code></td><td>No</td><td><code>false</code></td><td>Use GITHUB_TOKEN instead of OpenCode App token exchange, skipping OIDC</td></tr><tr><td><code>mentions</code></td><td>No</td><td><code>/opencode,/oc</code></td><td>Custom trigger phrases (comma-separated, case-insensitive)</td></tr><tr><td><code>oidc_base_url</code></td><td>No</td><td><code>https://api.opencode.ai</code></td><td>Custom OIDC token exchange API URL, only needed when running a private GitHub App</td></tr></tbody></table><p>Source: <code>opencode/github/action.yml:7-35</code></p><h3 id="about-token-sources" tabindex="-1">About Token Sources <a class="header-anchor" href="#about-token-sources" aria-label="Permalink to “About Token Sources”">​</a></h3><p>By default, OpenCode uses OIDC token exchange to obtain an installation access token from the OpenCode GitHub App. Commits, comments, and PRs appear as coming from the app.</p><p><strong>Alternative 1: Use GITHUB_TOKEN</strong></p><p>Set <code>use_github_token: true</code> to skip OIDC token exchange and use the GitHub Action runner&#39;s built-in GITHUB_TOKEN:</p>',10)),t[11]||(t[11]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`- name: Run OpenCode
  uses: anomalyco/opencode/github@latest
  env:
    ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
    GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
  with:
    model: anthropic/claude-sonnet-4-20250514
    use_github_token: true`)])],-1)),t[12]||(t[12]=e("p",null,"Grant permissions in the workflow:",-1)),t[13]||(t[13]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write
  contents: write
  pull-requests: write
  issues: write`)])],-1)),t[14]||(t[14]=n('<p><strong>Alternative 2: Use Personal Access Token (PAT)</strong></p><p>You can also use a <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens" target="_blank" rel="noreferrer">Personal Access Token</a>.</p><h2 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to “How It Works”">​</a></h2><h3 id="event-classification" tabindex="-1">Event Classification <a class="header-anchor" href="#event-classification" aria-label="Permalink to “Event Classification”">​</a></h3><p>OpenCode classifies GitHub events into two categories with different handling logic:</p><table tabindex="0"><thead><tr><th>Category</th><th>Event Types</th><th>Characteristics</th></tr></thead><tbody><tr><td><strong>User Events</strong></td><td><code>issue_comment</code>, <code>pull_request_review_comment</code>, <code>issues</code>, <code>pull_request</code></td><td>Has trigger info, can add comments and reactions to Issues/PRs</td></tr><tr><td><strong>Repository Events</strong></td><td><code>schedule</code>, <code>workflow_dispatch</code></td><td>No Issue/PR context, output only logged or creates PR</td></tr></tbody></table><p>Source: <code>opencode/packages/opencode/src/cli/cmd/github.ts:141-143</code></p><h3 id="processing-flow" tabindex="-1">Processing Flow <a class="header-anchor" href="#processing-flow" aria-label="Permalink to “Processing Flow”">​</a></h3>',8)),t[15]||(t[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`1. Event triggers
   ↓
2. Check trigger phrase (/opencode or /oc)
   ↓
3. Obtain access token (OIDC exchange or GITHUB_TOKEN)
   ↓
4. Permission verification (user events only, requires admin or write permission)
   ↓
5. Add 👀 reaction (user events only, indicates processing)
   ↓
6. Process based on event type:
   - Issue: Create new branch → Execute task → Commit → Create PR
   - Local PR: Checkout branch → Execute task → Commit to same PR
   - Fork PR: Add fork remote → Execute task → Push to fork
   - Repo event: Create new branch → Execute task → Create PR
   ↓
7. Create comment and remove reaction`)])],-1)),t[16]||(t[16]=n('<h3 id="branch-naming-rules" tabindex="-1">Branch Naming Rules <a class="header-anchor" href="#branch-naming-rules" aria-label="Permalink to “Branch Naming Rules”">​</a></h3><p>Branches automatically created by OpenCode follow these naming rules:</p><table tabindex="0"><thead><tr><th>Scenario</th><th>Branch Name Format</th><th>Example</th></tr></thead><tbody><tr><td>Issue fix</td><td><code>opencode/issue{ID}-{timestamp}</code></td><td><code>opencode/issue42-20250108120000</code></td></tr><tr><td>PR operation</td><td><code>opencode/pr{ID}-{timestamp}</code></td><td><code>opencode/pr15-20250108120000</code></td></tr><tr><td>Scheduled task</td><td><code>opencode/schedule-{hex}-{timestamp}</code></td><td><code>opencode/schedule-a1b2c3-20250108120000</code></td></tr><tr><td>Manual trigger</td><td><code>opencode/dispatch-{hex}-{timestamp}</code></td><td><code>opencode/dispatch-d4e5f6-20250108120000</code></td></tr></tbody></table><p>Source: <code>github.ts:1047-1059</code></p><h3 id="co-author-attribution" tabindex="-1">Co-author Attribution <a class="header-anchor" href="#co-author-attribution" aria-label="Permalink to “Co-author Attribution”">​</a></h3><p>Commits by OpenCode automatically include Co-authored-by information, marking the trigger as a co-author:</p>',6)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Fix authentication issue

Co-authored-by: username <username@users.noreply.github.com>`)])],-1)),t[18]||(t[18]=n('<blockquote><p><strong>Note</strong>: <code>schedule</code> events have no trigger, so no Co-author info is added.</p></blockquote><p>Source: <code>github.ts:1061-1100</code></p><h2 id="permission-configuration-details" tabindex="-1">Permission Configuration Details <a class="header-anchor" href="#permission-configuration-details" aria-label="Permalink to “Permission Configuration Details”">​</a></h2><p>Configure different permission levels based on your use case:</p><h3 id="read-only-scenarios-review-analysis" tabindex="-1">Read-only Scenarios (Review, Analysis) <a class="header-anchor" href="#read-only-scenarios-review-analysis" aria-label="Permalink to “Read-only Scenarios (Review, Analysis)”">​</a></h3>',5)),t[19]||(t[19]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write      # Required for OIDC token exchange
  contents: read       # Read code
  pull-requests: read  # Read PR info
  issues: read         # Read Issue info`)])],-1)),t[20]||(t[20]=e("h3",{id:"write-scenarios-fix-implement",tabindex:"-1"},[o("Write Scenarios (Fix, Implement) "),e("a",{class:"header-anchor",href:"#write-scenarios-fix-implement","aria-label":"Permalink to “Write Scenarios (Fix, Implement)”"},"​")],-1)),t[21]||(t[21]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write       # Required for OIDC token exchange
  contents: write       # Create branches, commit code
  pull-requests: write  # Create/update PRs
  issues: write         # Create comments`)])],-1)),t[22]||(t[22]=n('<blockquote><p><strong>Tip</strong>: When using the OpenCode GitHub App, permissions are controlled by the App. When using <code>use_github_token: true</code>, permissions must be explicitly granted in the workflow.</p></blockquote><h2 id="supported-events" tabindex="-1">Supported Events <a class="header-anchor" href="#supported-events" aria-label="Permalink to “Supported Events”">​</a></h2><table tabindex="0"><thead><tr><th>Event Type</th><th>Trigger Method</th><th>Description</th></tr></thead><tbody><tr><td><code>issue_comment</code></td><td>Comment on Issue or PR</td><td>Mention <code>/opencode</code> or <code>/oc</code> in comment</td></tr><tr><td><code>pull_request_review_comment</code></td><td>Comment on specific code line in PR</td><td>Mention trigger phrase during code review</td></tr><tr><td><code>issues</code></td><td>Issue created or edited</td><td>Requires <code>prompt</code> input</td></tr><tr><td><code>pull_request</code></td><td>PR created or updated</td><td>For automatic review</td></tr><tr><td><code>schedule</code></td><td>Cron-based scheduled task</td><td>Requires <code>prompt</code> input, no comment output</td></tr><tr><td><code>workflow_dispatch</code></td><td>Manual trigger from GitHub UI</td><td>Requires <code>prompt</code> input</td></tr></tbody></table><h3 id="scheduled-task-example" tabindex="-1">Scheduled Task Example <a class="header-anchor" href="#scheduled-task-example" aria-label="Permalink to “Scheduled Task Example”">​</a></h3>',4)),t[23]||(t[23]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: Scheduled OpenCode Task

on:
  schedule:
    - cron: "0 9 * * 1" # Every Monday at 9:00 UTC

jobs:
  opencode:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: write
      pull-requests: write
      issues: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Run OpenCode
        uses: anomalyco/opencode/github@latest
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        with:
          model: anthropic/claude-sonnet-4-20250514
          prompt: |
            Review the codebase for any TODO comments and create a summary.
            If you find issues worth addressing, open an issue to track them.`)])],-1)),t[24]||(t[24]=e("blockquote",null,[e("p",null,[e("strong",null,"Note"),o(": Scheduled events require "),e("code",null,"prompt"),o(" input because there's no comment to extract instructions from. Output is logged to Actions, and if there are code changes, a PR is created.")])],-1)),t[25]||(t[25]=e("h3",{id:"pr-auto-review-example",tabindex:"-1"},[o("PR Auto-Review Example "),e("a",{class:"header-anchor",href:"#pr-auto-review-example","aria-label":"Permalink to “PR Auto-Review Example”"},"​")],-1)),t[26]||(t[26]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: opencode-review

on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
      pull-requests: read
      issues: read
    steps:
      - uses: actions/checkout@v6
      - uses: anomalyco/opencode/github@latest
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        with:
          model: anthropic/claude-sonnet-4-20250514
          prompt: |
            Review this pull request:
            - Check for code quality issues
            - Look for potential bugs
            - Suggest improvements`)])],-1)),t[27]||(t[27]=e("p",null,[o("For "),e("code",null,"pull_request"),o(" events, if no "),e("code",null,"prompt"),o(" is provided, OpenCode defaults to reviewing the PR.")],-1)),t[28]||(t[28]=e("h3",{id:"issue-triage-example",tabindex:"-1"},[o("Issue Triage Example "),e("a",{class:"header-anchor",href:"#issue-triage-example","aria-label":"Permalink to “Issue Triage Example”"},"​")],-1)),t[29]||(t[29]=e("p",null,"Automatically triage new Issues. This example filters for accounts older than 30 days to reduce spam:",-1)),t[30]||(t[30]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: Issue Triage

on:
  issues:
    types: [opened]

jobs:
  triage:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: write
      pull-requests: write
      issues: write
    steps:
      - name: Check account age
        id: check
        uses: actions/github-script@v7
        with:
          script: |
            const user = await github.rest.users.getByUsername({
              username: context.payload.issue.user.login
            });
            const created = new Date(user.data.created_at);
            const days = (Date.now() - created) / (1000 * 60 * 60 * 24);
            return days >= 30;
          result-encoding: string

      - uses: actions/checkout@v6
        if: steps.check.outputs.result == 'true'

      - uses: anomalyco/opencode/github@latest
        if: steps.check.outputs.result == 'true'
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        with:
          model: anthropic/claude-sonnet-4-20250514
          prompt: |
            Review this issue. If there's a clear fix or relevant docs:
            - Provide documentation links
            - Add error handling guidance for code examples
            Otherwise, do not comment.`)])],-1)),t[31]||(t[31]=e("h2",{id:"custom-trigger-phrases",tabindex:"-1"},[o("Custom Trigger Phrases "),e("a",{class:"header-anchor",href:"#custom-trigger-phrases","aria-label":"Permalink to “Custom Trigger Phrases”"},"​")],-1)),t[32]||(t[32]=e("p",null,[o("Use the "),e("code",null,"mentions"),o(" parameter to customize trigger phrases:")],-1)),t[33]||(t[33]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`- uses: anomalyco/opencode/github@latest
  with:
    model: anthropic/claude-sonnet-4-20250514
    mentions: "/ai,/bot,/help"`)])],-1)),t[34]||(t[34]=n('<p>Now you can use <code>/ai</code>, <code>/bot</code>, or <code>/help</code> to trigger OpenCode.</p><blockquote><p><strong>Note</strong>: Trigger phrase matching is case-insensitive. Multiple phrases are comma-separated.</p></blockquote><h2 id="fork-pr-handling" tabindex="-1">Fork PR Handling <a class="header-anchor" href="#fork-pr-handling" aria-label="Permalink to “Fork PR Handling”">​</a></h2><p>OpenCode supports handling PRs from forked repositories. The processing logic differs slightly from local PRs:</p><h3 id="local-pr-vs-fork-pr" tabindex="-1">Local PR vs Fork PR <a class="header-anchor" href="#local-pr-vs-fork-pr" aria-label="Permalink to “Local PR vs Fork PR”">​</a></h3><table tabindex="0"><thead><tr><th>Aspect</th><th>Local PR</th><th>Fork PR</th></tr></thead><tbody><tr><td>Branch source</td><td>Same repository</td><td>Fork repository</td></tr><tr><td>Checkout method</td><td><code>git fetch origin &amp;&amp; git checkout</code></td><td><code>git remote add fork &amp;&amp; git fetch fork</code></td></tr><tr><td>Push target</td><td>Original branch</td><td>Fork repository&#39;s branch</td></tr><tr><td>Branch name</td><td>Keeps original branch name</td><td>Creates new local branch <code>opencode/pr{ID}-{timestamp}</code></td></tr></tbody></table><h3 id="workflow" tabindex="-1">Workflow <a class="header-anchor" href="#workflow" aria-label="Permalink to “Workflow”">​</a></h3><ol><li>Detect if PR&#39;s <code>headRepository</code> differs from <code>baseRepository</code></li><li>Add fork repository as a remote</li><li>Fetch fork branch code</li><li>Create local branch to execute task</li><li>Push changes back to fork repository&#39;s original branch</li></ol><p>Source: <code>github.ts:1035-1045</code></p><blockquote><p><strong>Note</strong>: Fork PRs require the fork maintainer to allow upstream pushes (check &quot;Allow edits from maintainers&quot; on the PR page).</p></blockquote><h2 id="cli-commands" tabindex="-1">CLI Commands <a class="header-anchor" href="#cli-commands" aria-label="Permalink to “CLI Commands”">​</a></h2><h3 id="opencode-pr" tabindex="-1">opencode pr <a class="header-anchor" href="#opencode-pr" aria-label="Permalink to “opencode pr”">​</a></h3><p>Quickly checkout a PR and start OpenCode:</p>',13)),t[35]||(t[35]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode pr <PR-number>")])],-1)),t[36]||(t[36]=e("p",null,"Execution flow:",-1)),t[37]||(t[37]=e("ol",null,[e("li",null,"Automatically fetch PR branch"),e("li",null,[o("Create local branch "),e("code",null,"pr/<PR-number>")]),e("li",null,"Checkout to that branch"),e("li",null,"Automatically start OpenCode")],-1)),t[38]||(t[38]=e("p",null,[e("strong",null,"Example"),o(":")],-1)),t[39]||(t[39]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Checkout PR #123
opencode pr 123`)])],-1)),t[40]||(t[40]=n('<p><strong>Fork PR Handling</strong>:</p><p>For PRs from forks, the command automatically:</p><ol><li>Adds fork as a remote</li><li>Sets upstream tracking</li><li>Ensures push to correct repository</li></ol><p><strong>Import Associated Session</strong>:</p><p>If the PR description contains an OpenCode Session link (e.g., <code>https://opncd.ai/s/abc123</code>), the command automatically imports the session history, letting you continue the previous conversation context.</p><h3 id="opencode-github-install" tabindex="-1">opencode github install <a class="header-anchor" href="#opencode-github-install" aria-label="Permalink to “opencode github install”">​</a></h3><p>Interactive installation of GitHub Agent:</p>',7)),t[41]||(t[41]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github install")])],-1)),t[42]||(t[42]=n('<p>Execution flow:</p><ol><li>Detect current directory&#39;s Git repository info</li><li>Guide installation of OpenCode GitHub App</li><li>Select AI provider and model</li><li>Generate <code>.github/workflows/opencode.yml</code> file</li><li>Prompt to configure secrets</li></ol><h3 id="opencode-github-run" tabindex="-1">opencode github run <a class="header-anchor" href="#opencode-github-run" aria-label="Permalink to “opencode github run”">​</a></h3><p>Run Agent in GitHub Actions (usually not needed manually):</p>',4)),t[43]||(t[43]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github run")])],-1)),t[44]||(t[44]=e("h4",{id:"local-testing",tabindex:"-1"},[o("Local Testing "),e("a",{class:"header-anchor",href:"#local-testing","aria-label":"Permalink to “Local Testing”"},"​")],-1)),t[45]||(t[45]=e("p",null,"For development debugging, simulate GitHub Actions environment locally:",-1)),t[46]||(t[46]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`MODEL=anthropic/claude-sonnet-4-20250514 \\
  ANTHROPIC_API_KEY=sk-ant-api03-xxxxx \\
  GITHUB_RUN_ID=dummy \\
  opencode github run \\
    --token github_pat_xxxxx \\
    --event '{"eventName":"issue_comment","repo":{"owner":"your-username","repo":"repo-name"},"actor":"trigger-username","payload":{"issue":{"number":1},"comment":{"id":1,"body":"/opencode explain this issue"}}}'`)])],-1)),t[47]||(t[47]=n('<p>Parameter description:</p><table tabindex="0"><thead><tr><th>Environment Variable/Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>MODEL</code></td><td>Model to use, format <code>provider/model</code></td></tr><tr><td><code>ANTHROPIC_API_KEY</code></td><td>Model provider API key</td></tr><tr><td><code>GITHUB_RUN_ID</code></td><td>Simulate GitHub Actions environment, can be <code>dummy</code> for local testing</td></tr><tr><td><code>--token</code></td><td>GitHub personal access token for permission verification and repository operations</td></tr><tr><td><code>--event</code></td><td>Simulated GitHub event JSON</td></tr></tbody></table><h4 id="event-json-templates" tabindex="-1">Event JSON Templates <a class="header-anchor" href="#event-json-templates" aria-label="Permalink to “Event JSON Templates”">​</a></h4><p><strong>Issue Comment Event:</strong></p>',4)),t[48]||(t[48]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "eventName": "issue_comment",
  "repo": {"owner": "owner", "repo": "repo-name"},
  "actor": "username",
  "payload": {
    "issue": {"number": 42},
    "comment": {"id": 1, "body": "/opencode explain this issue"}
  }
}`)])],-1)),t[49]||(t[49]=e("p",null,[e("strong",null,"PR Comment Event:")],-1)),t[50]||(t[50]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "eventName": "issue_comment",
  "repo": {"owner": "owner", "repo": "repo-name"},
  "actor": "username",
  "payload": {
    "issue": {"number": 15, "pull_request": {}},
    "comment": {"id": 1, "body": "/opencode optimize this code"}
  }
}`)])],-1)),t[51]||(t[51]=e("p",null,[e("strong",null,"PR Code Line Comment Event:")],-1)),t[52]||(t[52]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "eventName": "pull_request_review_comment",
  "repo": {"owner": "owner", "repo": "repo-name"},
  "actor": "username",
  "payload": {
    "pull_request": {"number": 15},
    "comment": {
      "id": 1,
      "body": "/opencode add error handling",
      "path": "src/utils/api.ts",
      "diff_hunk": "@@ -10,6 +10,8 @@\\n async function fetchData() {\\n-  return fetch(url)\\n+  const response = await fetch(url)\\n+  return response.json()\\n }",
      "line": 12,
      "original_line": 10,
      "position": 5,
      "commit_id": "abc123",
      "original_commit_id": "def456"
    }
  }
}`)])],-1)),t[53]||(t[53]=e("h2",{id:"usage-examples",tabindex:"-1"},[o("Usage Examples "),e("a",{class:"header-anchor",href:"#usage-examples","aria-label":"Permalink to “Usage Examples”"},"​")],-1)),t[54]||(t[54]=e("h3",{id:"explain-an-issue",tabindex:"-1"},[o("Explain an Issue "),e("a",{class:"header-anchor",href:"#explain-an-issue","aria-label":"Permalink to “Explain an Issue”"},"​")],-1)),t[55]||(t[55]=e("p",null,"Add a comment in a GitHub Issue:",-1)),t[56]||(t[56]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/opencode explain this issue")])],-1)),t[57]||(t[57]=e("p",null,"OpenCode will read the entire thread (including all comments) and reply with an explanation.",-1)),t[58]||(t[58]=e("h3",{id:"fix-an-issue",tabindex:"-1"},[o("Fix an Issue "),e("a",{class:"header-anchor",href:"#fix-an-issue","aria-label":"Permalink to “Fix an Issue”"},"​")],-1)),t[59]||(t[59]=e("p",null,"In a GitHub Issue:",-1)),t[60]||(t[60]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/opencode fix this")])],-1)),t[61]||(t[61]=e("p",null,"OpenCode will create a new branch, implement the fix, and open a PR.",-1)),t[62]||(t[62]=e("h3",{id:"review-pr-and-make-changes",tabindex:"-1"},[o("Review PR and Make Changes "),e("a",{class:"header-anchor",href:"#review-pr-and-make-changes","aria-label":"Permalink to “Review PR and Make Changes”"},"​")],-1)),t[63]||(t[63]=e("p",null,"Leave a comment in a GitHub PR:",-1)),t[64]||(t[64]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Delete the attachment from S3 when the note is removed /oc")])],-1)),t[65]||(t[65]=e("p",null,"OpenCode will implement the requested changes and commit to the same PR.",-1)),t[66]||(t[66]=e("h3",{id:"review-specific-code-lines",tabindex:"-1"},[o("Review Specific Code Lines "),e("a",{class:"header-anchor",href:"#review-specific-code-lines","aria-label":"Permalink to “Review Specific Code Lines”"},"​")],-1)),t[67]||(t[67]=e("p",null,`Leave a comment directly on a code line in the PR's "Files" tab. OpenCode automatically detects the file, line number, and diff context:`,-1)),t[68]||(t[68]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`[Comment on specific line in Files tab]
/oc add error handling here`)])],-1)),t[69]||(t[69]=n('<p>When commenting on a specific line, OpenCode receives:</p><ul><li>The exact file being reviewed</li><li>The specific code line</li><li>Surrounding diff context</li><li>Line number information</li></ul><p>This allows for more precise requests without manually specifying file paths or line numbers.</p><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Error <code>Could not fetch an OIDC token</code></td><td>Workflow missing <code>id-token: write</code> permission</td><td>Add <code>permissions: id-token: write</code></td></tr><tr><td><code>/opencode</code> doesn&#39;t trigger</td><td>Trigger phrase format wrong in comment (e.g., in middle of URL)</td><td>Ensure trigger phrase at line start or preceded by space</td></tr><tr><td>Fork PR can&#39;t push changes</td><td>Fork maintainer hasn&#39;t allowed upstream pushes</td><td>Contact fork maintainer to enable &quot;Allow edits from maintainers&quot;</td></tr><tr><td>Schedule event has no comment output</td><td>Scheduled tasks have no Issue/PR context</td><td>This is expected behavior, output logged to Actions</td></tr><tr><td>Error <code>User xxx does not have write permissions</code></td><td>Trigger doesn&#39;t have repository write permission</td><td>Only collaborators with admin or write permission can trigger</td></tr><tr><td>Custom mentions don&#39;t work</td><td>Multiple phrases not correctly comma-separated</td><td>Use <code>mentions: &quot;/ai,/bot&quot;</code> format</td></tr><tr><td>Insufficient permissions with <code>use_github_token</code></td><td>Required workflow permissions not granted</td><td>Add <code>contents: write</code>, <code>pull-requests: write</code> etc. permissions</td></tr></tbody></table><h2 id="related-sections" tabindex="-1">Related Sections <a class="header-anchor" href="#related-sections" aria-label="Permalink to “Related Sections”">​</a></h2><ul><li><a href="./15-gitlab.html">5.15 GitLab Integration</a> - If you use GitLab, refer to this section for configuration</li><li><a href="./16-share.html">5.16 Share Feature</a> - Learn about OpenCode session sharing</li><li><a href="./../appendix/cli.html">Quick Reference/CLI Reference</a> - Complete CLI command list</li></ul>',7))])}const v=a(u,[["render",c]]);export{C as __pageData,v as default};
