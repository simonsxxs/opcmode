import{_ as s,I as a,c as r,o as l,a5 as n,j as e,J as i,a as o,bn as p}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.14 GitHub 集成","description":"在 GitHub Actions 中使用 OpenCode，实现 Issue 分流、自动修复、PR 审查等功能。","frontmatter":{"title":"5.14 GitHub 集成","subtitle":"在 GitHub Actions 中使用 OpenCode","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.14","duration":"15 分钟","practice":"20 分钟","level":"进阶","description":"在 GitHub Actions 中使用 OpenCode，实现 Issue 分流、自动修复、PR 审查等功能。","tags":["GitHub","CI/CD","自动化"],"prerequisite":["5.9 远程开发"]},"headers":[],"relativePath":"5-advanced/14-github.md","filePath":"5-advanced/14-github.md","lastUpdated":1772014034000}'),u={name:"5-advanced/14-github.md"};function c(b,t,h,m,g,P){const d=a("AdInArticle");return l(),r("div",null,[t[0]||(t[0]=n("",9)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github install")])],-1)),t[2]||(t[2]=e("p",null,"这会引导你完成：安装 GitHub App、选择提供商和模型、创建 workflow 文件、设置 secrets。",-1)),t[3]||(t[3]=e("h3",{id:"手动设置",tabindex:"-1"},[o("手动设置 "),e("a",{class:"header-anchor",href:"#手动设置","aria-label":"Permalink to “手动设置”"},"​")],-1)),i(d),t[4]||(t[4]=e("p",null,"也可以手动设置：",-1)),t[5]||(t[5]=e("p",null,[e("strong",null,"1. 安装 GitHub App")],-1)),t[6]||(t[6]=e("p",null,[o("前往 "),e("a",{href:"https://github.com/apps/opencode-agent",target:"_blank",rel:"noreferrer"},"github.com/apps/opencode-agent"),o("，确保在目标仓库上安装。")],-1)),t[7]||(t[7]=e("p",null,[e("strong",null,"2. 添加 workflow")],-1)),t[8]||(t[8]=e("p",null,[o("在仓库的 "),e("code",null,".github/workflows/opencode.yml"),o(" 添加以下内容：")],-1)),t[9]||(t[9]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: opencode

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
    use_github_token: true`)])],-1)),t[12]||(t[12]=e("p",null,"需要在 workflow 中授予权限：",-1)),t[13]||(t[13]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write
  contents: write
  pull-requests: write
  issues: write`)])],-1)),t[14]||(t[14]=n("",8)),t[15]||(t[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`1. 事件触发
   ↓
2. 检查触发短语 (/opencode 或 /oc)
   ↓
3. 获取访问令牌 (OIDC 交换 或 GITHUB_TOKEN)
   ↓
4. 权限验证 (仅用户事件，需要 admin 或 write 权限)
   ↓
5. 添加 👀 reaction (仅用户事件，表示正在处理)
   ↓
6. 根据事件类型处理：
   - Issue: 创建新分支 → 执行任务 → 提交 → 创建 PR
   - 本地 PR: 检出分支 → 执行任务 → 提交到同一 PR
   - Fork PR: 添加 fork remote → 执行任务 → 推送到 fork
   - 仓库事件: 创建新分支 → 执行任务 → 创建 PR
   ↓
7. 创建评论并移除 reaction`)])],-1)),t[16]||(t[16]=n("",6)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Fix authentication issue

Co-authored-by: username <username@users.noreply.github.com>`)])],-1)),t[18]||(t[18]=n("",5)),t[19]||(t[19]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write      # OIDC 令牌交换必需
  contents: read       # 读取代码
  pull-requests: read  # 读取 PR 信息
  issues: read         # 读取 Issue 信息`)])],-1)),t[20]||(t[20]=e("h3",{id:"写入场景-修复、实现",tabindex:"-1"},[o("写入场景（修复、实现） "),e("a",{class:"header-anchor",href:"#写入场景-修复、实现","aria-label":"Permalink to “写入场景（修复、实现）”"},"​")],-1)),t[21]||(t[21]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write       # OIDC 令牌交换必需
  contents: write       # 创建分支、提交代码
  pull-requests: write  # 创建/更新 PR
  issues: write         # 创建评论`)])],-1)),t[22]||(t[22]=n("",4)),t[23]||(t[23]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: Scheduled OpenCode Task

on:
  schedule:
    - cron: "0 9 * * 1" # 每周一 UTC 9:00

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
            If you find issues worth addressing, open an issue to track them.`)])],-1)),t[24]||(t[24]=e("blockquote",null,[e("p",null,[e("strong",null,"注意"),o("：定时事件需要 "),e("code",null,"prompt"),o(" 输入，因为没有评论可提取指令。输出记录到 Actions 日志，如有代码更改会创建 PR。")])],-1)),t[25]||(t[25]=e("h3",{id:"pr-自动审查示例",tabindex:"-1"},[o("PR 自动审查示例 "),e("a",{class:"header-anchor",href:"#pr-自动审查示例","aria-label":"Permalink to “PR 自动审查示例”"},"​")],-1)),t[26]||(t[26]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: opencode-review

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
            - Suggest improvements`)])],-1)),t[27]||(t[27]=e("p",null,[o("对于 "),e("code",null,"pull_request"),o(" 事件，如果未提供 "),e("code",null,"prompt"),o("，OpenCode 默认审查 PR。")],-1)),t[28]||(t[28]=e("h3",{id:"issue-分流示例",tabindex:"-1"},[o("Issue 分流示例 "),e("a",{class:"header-anchor",href:"#issue-分流示例","aria-label":"Permalink to “Issue 分流示例”"},"​")],-1)),t[29]||(t[29]=e("p",null,"自动分流新 Issue，此示例过滤账号年龄超过 30 天的用户以减少垃圾信息：",-1)),t[30]||(t[30]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: Issue Triage

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
            Otherwise, do not comment.`)])],-1)),t[31]||(t[31]=e("h2",{id:"自定义触发短语",tabindex:"-1"},[o("自定义触发短语 "),e("a",{class:"header-anchor",href:"#自定义触发短语","aria-label":"Permalink to “自定义触发短语”"},"​")],-1)),t[32]||(t[32]=e("p",null,[o("使用 "),e("code",null,"mentions"),o(" 参数自定义触发短语：")],-1)),t[33]||(t[33]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`- uses: anomalyco/opencode/github@latest
  with:
    model: anthropic/claude-sonnet-4-20250514
    mentions: "/ai,/bot,/help"`)])],-1)),t[34]||(t[34]=n("",13)),t[35]||(t[35]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode pr <PR号>")])],-1)),t[36]||(t[36]=e("p",null,"执行流程：",-1)),t[37]||(t[37]=e("ol",null,[e("li",null,"自动 fetch PR 分支"),e("li",null,[o("创建本地分支 "),e("code",null,"pr/<PR号>")]),e("li",null,"检出到该分支"),e("li",null,"自动启动 OpenCode")],-1)),t[38]||(t[38]=e("p",null,[e("strong",null,"示例"),o("：")],-1)),t[39]||(t[39]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 检出 PR #123
opencode pr 123`)])],-1)),t[40]||(t[40]=n("",7)),t[41]||(t[41]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github install")])],-1)),t[42]||(t[42]=n("",4)),t[43]||(t[43]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github run")])],-1)),t[44]||(t[44]=e("h4",{id:"本地测试",tabindex:"-1"},[o("本地测试 "),e("a",{class:"header-anchor",href:"#本地测试","aria-label":"Permalink to “本地测试”"},"​")],-1)),t[45]||(t[45]=e("p",null,"用于开发调试时本地模拟 GitHub Actions 环境：",-1)),t[46]||(t[46]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`MODEL=anthropic/claude-sonnet-4-20250514 \\
  ANTHROPIC_API_KEY=sk-ant-api03-xxxxx \\
  GITHUB_RUN_ID=dummy \\
  opencode github run \\
    --token github_pat_xxxxx \\
    --event '{"eventName":"issue_comment","repo":{"owner":"你的用户名","repo":"仓库名"},"actor":"触发者用户名","payload":{"issue":{"number":1},"comment":{"id":1,"body":"/opencode 解释这个问题"}}}'`)])],-1)),t[47]||(t[47]=n("",4)),t[48]||(t[48]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "eventName": "issue_comment",
  "repo": {"owner": "owner", "repo": "repo-name"},
  "actor": "username",
  "payload": {
    "issue": {"number": 42},
    "comment": {"id": 1, "body": "/opencode 解释这个问题"}
  }
}`)])],-1)),t[49]||(t[49]=e("p",null,[e("strong",null,"PR 评论事件：")],-1)),t[50]||(t[50]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "eventName": "issue_comment",
  "repo": {"owner": "owner", "repo": "repo-name"},
  "actor": "username",
  "payload": {
    "issue": {"number": 15, "pull_request": {}},
    "comment": {"id": 1, "body": "/opencode 优化这段代码"}
  }
}`)])],-1)),t[51]||(t[51]=e("p",null,[e("strong",null,"PR 代码行评论事件：")],-1)),t[52]||(t[52]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "eventName": "pull_request_review_comment",
  "repo": {"owner": "owner", "repo": "repo-name"},
  "actor": "username",
  "payload": {
    "pull_request": {"number": 15},
    "comment": {
      "id": 1,
      "body": "/opencode 添加错误处理",
      "path": "src/utils/api.ts",
      "diff_hunk": "@@ -10,6 +10,8 @@\\n async function fetchData() {\\n-  return fetch(url)\\n+  const response = await fetch(url)\\n+  return response.json()\\n }",
      "line": 12,
      "original_line": 10,
      "position": 5,
      "commit_id": "abc123",
      "original_commit_id": "def456"
    }
  }
}`)])],-1)),t[53]||(t[53]=e("h2",{id:"使用示例",tabindex:"-1"},[o("使用示例 "),e("a",{class:"header-anchor",href:"#使用示例","aria-label":"Permalink to “使用示例”"},"​")],-1)),t[54]||(t[54]=e("h3",{id:"解释-issue",tabindex:"-1"},[o("解释 Issue "),e("a",{class:"header-anchor",href:"#解释-issue","aria-label":"Permalink to “解释 Issue”"},"​")],-1)),t[55]||(t[55]=e("p",null,"在 GitHub Issue 中添加评论：",-1)),t[56]||(t[56]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/opencode explain this issue")])],-1)),t[57]||(t[57]=e("p",null,"OpenCode 会读取整个线程（包括所有评论）并回复解释。",-1)),t[58]||(t[58]=e("h3",{id:"修复-issue",tabindex:"-1"},[o("修复 Issue "),e("a",{class:"header-anchor",href:"#修复-issue","aria-label":"Permalink to “修复 Issue”"},"​")],-1)),t[59]||(t[59]=e("p",null,"在 GitHub Issue 中：",-1)),t[60]||(t[60]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/opencode fix this")])],-1)),t[61]||(t[61]=e("p",null,"OpenCode 会创建新分支、实现修改并打开 PR。",-1)),t[62]||(t[62]=e("h3",{id:"审查-pr-并修改",tabindex:"-1"},[o("审查 PR 并修改 "),e("a",{class:"header-anchor",href:"#审查-pr-并修改","aria-label":"Permalink to “审查 PR 并修改”"},"​")],-1)),t[63]||(t[63]=e("p",null,"在 GitHub PR 中留下评论：",-1)),t[64]||(t[64]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Delete the attachment from S3 when the note is removed /oc")])],-1)),t[65]||(t[65]=e("p",null,"OpenCode 会实现请求的更改并提交到同一 PR。",-1)),t[66]||(t[66]=e("h3",{id:"审查特定代码行",tabindex:"-1"},[o("审查特定代码行 "),e("a",{class:"header-anchor",href:"#审查特定代码行","aria-label":"Permalink to “审查特定代码行”"},"​")],-1)),t[67]||(t[67]=e("p",null,'在 PR 的 "Files" 标签页中直接在代码行上留下评论。OpenCode 会自动检测文件、行号和 diff 上下文：',-1)),t[68]||(t[68]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`[在 Files 标签页的特定行上评论]
/oc add error handling here`)])],-1)),t[69]||(t[69]=n("",7))])}const y=s(u,[["render",c]]);export{k as __pageData,y as default};
