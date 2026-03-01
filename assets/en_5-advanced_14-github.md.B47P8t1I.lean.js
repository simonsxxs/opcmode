import{_ as a,I as r,c as i,o as d,a5 as n,j as e,J as l,a as o,bn as p}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"5.14 GitHub Integration","description":"Use OpenCode in GitHub Actions to implement issue triage, auto-fix, PR review and more.","frontmatter":{"title":"5.14 GitHub Integration","subtitle":"Using OpenCode in GitHub Actions","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.14","duration":"15 minutes","practice":"20 minutes","level":"Advanced","description":"Use OpenCode in GitHub Actions to implement issue triage, auto-fix, PR review and more.","tags":["GitHub","CI/CD","Automation"],"prerequisite":["5.9 Remote Development"]},"headers":[],"relativePath":"en/5-advanced/14-github.md","filePath":"en/5-advanced/14-github.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/14-github.md"};function c(m,t,h,g,b,f){const s=r("AdInArticle");return d(),i("div",null,[t[0]||(t[0]=n("",9)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github install")])],-1)),t[2]||(t[2]=e("p",null,"This guides you through: installing the GitHub App, selecting providers and models, creating workflow files, and setting up secrets.",-1)),t[3]||(t[3]=e("h3",{id:"manual-setup",tabindex:"-1"},[o("Manual Setup "),e("a",{class:"header-anchor",href:"#manual-setup","aria-label":"Permalink to “Manual Setup”"},"​")],-1)),l(s),t[4]||(t[4]=e("p",null,"You can also set up manually:",-1)),t[5]||(t[5]=e("p",null,[e("strong",null,"1. Install GitHub App")],-1)),t[6]||(t[6]=e("p",null,[o("Go to "),e("a",{href:"https://github.com/apps/opencode-agent",target:"_blank",rel:"noreferrer"},"github.com/apps/opencode-agent"),o(" and ensure it's installed on your target repository.")],-1)),t[7]||(t[7]=e("p",null,[e("strong",null,"2. Add workflow")],-1)),t[8]||(t[8]=e("p",null,[o("Add the following to your repository's "),e("code",null,".github/workflows/opencode.yml"),o(":")],-1)),t[9]||(t[9]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: opencode

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
          model: anthropic/claude-sonnet-4-20250514`)])],-1)),t[10]||(t[10]=n("",10)),t[11]||(t[11]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`- name: Run OpenCode
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
  issues: write`)])],-1)),t[14]||(t[14]=n("",8)),t[15]||(t[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`1. Event triggers
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
7. Create comment and remove reaction`)])],-1)),t[16]||(t[16]=n("",6)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Fix authentication issue

Co-authored-by: username <username@users.noreply.github.com>`)])],-1)),t[18]||(t[18]=n("",5)),t[19]||(t[19]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write      # Required for OIDC token exchange
  contents: read       # Read code
  pull-requests: read  # Read PR info
  issues: read         # Read Issue info`)])],-1)),t[20]||(t[20]=e("h3",{id:"write-scenarios-fix-implement",tabindex:"-1"},[o("Write Scenarios (Fix, Implement) "),e("a",{class:"header-anchor",href:"#write-scenarios-fix-implement","aria-label":"Permalink to “Write Scenarios (Fix, Implement)”"},"​")],-1)),t[21]||(t[21]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write       # Required for OIDC token exchange
  contents: write       # Create branches, commit code
  pull-requests: write  # Create/update PRs
  issues: write         # Create comments`)])],-1)),t[22]||(t[22]=n("",4)),t[23]||(t[23]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: Scheduled OpenCode Task

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
    mentions: "/ai,/bot,/help"`)])],-1)),t[34]||(t[34]=n("",13)),t[35]||(t[35]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode pr <PR-number>")])],-1)),t[36]||(t[36]=e("p",null,"Execution flow:",-1)),t[37]||(t[37]=e("ol",null,[e("li",null,"Automatically fetch PR branch"),e("li",null,[o("Create local branch "),e("code",null,"pr/<PR-number>")]),e("li",null,"Checkout to that branch"),e("li",null,"Automatically start OpenCode")],-1)),t[38]||(t[38]=e("p",null,[e("strong",null,"Example"),o(":")],-1)),t[39]||(t[39]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Checkout PR #123
opencode pr 123`)])],-1)),t[40]||(t[40]=n("",7)),t[41]||(t[41]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github install")])],-1)),t[42]||(t[42]=n("",4)),t[43]||(t[43]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github run")])],-1)),t[44]||(t[44]=e("h4",{id:"local-testing",tabindex:"-1"},[o("Local Testing "),e("a",{class:"header-anchor",href:"#local-testing","aria-label":"Permalink to “Local Testing”"},"​")],-1)),t[45]||(t[45]=e("p",null,"For development debugging, simulate GitHub Actions environment locally:",-1)),t[46]||(t[46]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`MODEL=anthropic/claude-sonnet-4-20250514 \\
  ANTHROPIC_API_KEY=sk-ant-api03-xxxxx \\
  GITHUB_RUN_ID=dummy \\
  opencode github run \\
    --token github_pat_xxxxx \\
    --event '{"eventName":"issue_comment","repo":{"owner":"your-username","repo":"repo-name"},"actor":"trigger-username","payload":{"issue":{"number":1},"comment":{"id":1,"body":"/opencode explain this issue"}}}'`)])],-1)),t[47]||(t[47]=n("",4)),t[48]||(t[48]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
/oc add error handling here`)])],-1)),t[69]||(t[69]=n("",7))])}const v=a(u,[["render",c]]);export{C as __pageData,v as default};
