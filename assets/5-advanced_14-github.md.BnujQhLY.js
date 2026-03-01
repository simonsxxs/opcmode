import{_ as s,I as a,c as r,o as l,a5 as n,j as e,J as i,a as o,bn as p}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.14 GitHub 集成","description":"在 GitHub Actions 中使用 OpenCode，实现 Issue 分流、自动修复、PR 审查等功能。","frontmatter":{"title":"5.14 GitHub 集成","subtitle":"在 GitHub Actions 中使用 OpenCode","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.14","duration":"15 分钟","practice":"20 分钟","level":"进阶","description":"在 GitHub Actions 中使用 OpenCode，实现 Issue 分流、自动修复、PR 审查等功能。","tags":["GitHub","CI/CD","自动化"],"prerequisite":["5.9 远程开发"]},"headers":[],"relativePath":"5-advanced/14-github.md","filePath":"5-advanced/14-github.md","lastUpdated":1772014034000}'),u={name:"5-advanced/14-github.md"};function c(b,t,h,m,g,P){const d=a("AdInArticle");return l(),r("div",null,[t[0]||(t[0]=n('<h1 id="github-集成" tabindex="-1">GitHub 集成 <a class="header-anchor" href="#github-集成" aria-label="Permalink to “GitHub 集成”">​</a></h1><p>OpenCode 与 GitHub 工作流深度集成。在 Issue 或 PR 的评论中提及 <code>/opencode</code> 或 <code>/oc</code>，OpenCode 将在你的 GitHub Actions runner 中执行任务。</p><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="5.14 GitHub 集成学霸笔记" data-zoom-src="/images/5-advanced/github-notes.jpeg"></p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to “功能”">​</a></h2><ul><li><strong>分流问题</strong>：让 OpenCode 查看 Issue 并解释问题</li><li><strong>修复和实现</strong>：让 OpenCode 修复 Issue 或实现功能，它会在新分支中工作并提交 PR</li><li><strong>审查 PR</strong>：自动审查 Pull Request 代码质量</li><li><strong>安全</strong>：OpenCode 在你自己的 GitHub runner 中运行，代码不会离开你的环境</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><p>在 GitHub 仓库的项目目录中运行：</p>',9)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github install")])],-1)),t[2]||(t[2]=e("p",null,"这会引导你完成：安装 GitHub App、选择提供商和模型、创建 workflow 文件、设置 secrets。",-1)),t[3]||(t[3]=e("h3",{id:"手动设置",tabindex:"-1"},[o("手动设置 "),e("a",{class:"header-anchor",href:"#手动设置","aria-label":"Permalink to “手动设置”"},"​")],-1)),i(d),t[4]||(t[4]=e("p",null,"也可以手动设置：",-1)),t[5]||(t[5]=e("p",null,[e("strong",null,"1. 安装 GitHub App")],-1)),t[6]||(t[6]=e("p",null,[o("前往 "),e("a",{href:"https://github.com/apps/opencode-agent",target:"_blank",rel:"noreferrer"},"github.com/apps/opencode-agent"),o("，确保在目标仓库上安装。")],-1)),t[7]||(t[7]=e("p",null,[e("strong",null,"2. 添加 workflow")],-1)),t[8]||(t[8]=e("p",null,[o("在仓库的 "),e("code",null,".github/workflows/opencode.yml"),o(" 添加以下内容：")],-1)),t[9]||(t[9]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: opencode

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
          model: anthropic/claude-sonnet-4-20250514`)])],-1)),t[10]||(t[10]=n('<blockquote><p><strong>注意</strong>：if 条件使用 <code>startsWith</code> 和 <code>contains(&#39; /oc&#39;)</code> 的组合，确保触发短语在行首或前面有空格，避免误匹配 URL 或代码中的内容。</p></blockquote><p><strong>3. 存储 API 密钥</strong></p><p>在组织或项目的 <strong>Settings</strong> &gt; <strong>Secrets and variables</strong> &gt; <strong>Actions</strong> 中添加所需的 API 密钥。</p><h2 id="配置选项" tabindex="-1">配置选项 <a class="header-anchor" href="#配置选项" aria-label="Permalink to “配置选项”">​</a></h2><table tabindex="0"><thead><tr><th>选项</th><th>必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>model</code></td><td><strong>是</strong></td><td>-</td><td>使用的模型，格式为 <code>provider/model</code></td></tr><tr><td><code>agent</code></td><td>否</td><td>config 中的 <code>default_agent</code> 或 <code>&quot;build&quot;</code></td><td>使用的代理，必须是 primary 代理</td></tr><tr><td><code>share</code></td><td>否</td><td>公开仓库 <code>true</code></td><td>是否分享会话链接</td></tr><tr><td><code>prompt</code></td><td>否</td><td>-</td><td>自定义提示，覆盖默认行为（<code>schedule</code>/<code>workflow_dispatch</code>/<code>issues</code> 事件必填）</td></tr><tr><td><code>use_github_token</code></td><td>否</td><td><code>false</code></td><td>使用 GITHUB_TOKEN 替代 OpenCode App 令牌交换，跳过 OIDC</td></tr><tr><td><code>mentions</code></td><td>否</td><td><code>/opencode,/oc</code></td><td>自定义触发短语（逗号分隔，不区分大小写）</td></tr><tr><td><code>oidc_base_url</code></td><td>否</td><td><code>https://api.opencode.ai</code></td><td>自定义 OIDC 令牌交换 API 地址，仅运行私有 GitHub App 时需要</td></tr></tbody></table><p>来源：<code>opencode/github/action.yml:7-35</code></p><h3 id="关于-token-来源" tabindex="-1">关于 Token 来源 <a class="header-anchor" href="#关于-token-来源" aria-label="Permalink to “关于 Token 来源”">​</a></h3><p>默认情况下，OpenCode 使用 OIDC 令牌交换从 OpenCode GitHub App 获取安装访问令牌，提交、评论和 PR 显示为来自该应用。</p><p><strong>替代方案 1：使用 GITHUB_TOKEN</strong></p><p>设置 <code>use_github_token: true</code> 可跳过 OIDC 令牌交换，直接使用 GitHub Action runner 的内置 GITHUB_TOKEN：</p>',10)),t[11]||(t[11]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`- name: Run OpenCode
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
  issues: write`)])],-1)),t[14]||(t[14]=n('<p><strong>替代方案 2：使用个人访问令牌 (PAT)</strong></p><p>也可以使用 <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens" target="_blank" rel="noreferrer">个人访问令牌</a>。</p><h2 id="工作机制" tabindex="-1">工作机制 <a class="header-anchor" href="#工作机制" aria-label="Permalink to “工作机制”">​</a></h2><h3 id="事件分类" tabindex="-1">事件分类 <a class="header-anchor" href="#事件分类" aria-label="Permalink to “事件分类”">​</a></h3><p>OpenCode 将 GitHub 事件分为两类，处理逻辑不同：</p><table tabindex="0"><thead><tr><th>类别</th><th>事件类型</th><th>特点</th></tr></thead><tbody><tr><td><strong>用户事件</strong></td><td><code>issue_comment</code>、<code>pull_request_review_comment</code>、<code>issues</code>、<code>pull_request</code></td><td>有触发者信息，可以在 Issue/PR 上添加评论和 reaction</td></tr><tr><td><strong>仓库事件</strong></td><td><code>schedule</code>、<code>workflow_dispatch</code></td><td>无 Issue/PR 上下文，输出仅记录到日志或创建 PR</td></tr></tbody></table><p>来源：<code>opencode/packages/opencode/src/cli/cmd/github.ts:141-143</code></p><h3 id="处理流程" tabindex="-1">处理流程 <a class="header-anchor" href="#处理流程" aria-label="Permalink to “处理流程”">​</a></h3>',8)),t[15]||(t[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`1. 事件触发
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
7. 创建评论并移除 reaction`)])],-1)),t[16]||(t[16]=n('<h3 id="分支命名规则" tabindex="-1">分支命名规则 <a class="header-anchor" href="#分支命名规则" aria-label="Permalink to “分支命名规则”">​</a></h3><p>OpenCode 自动创建的分支遵循以下命名规则：</p><table tabindex="0"><thead><tr><th>场景</th><th>分支名格式</th><th>示例</th></tr></thead><tbody><tr><td>Issue 修复</td><td><code>opencode/issue{ID}-{timestamp}</code></td><td><code>opencode/issue42-20250108120000</code></td></tr><tr><td>PR 操作</td><td><code>opencode/pr{ID}-{timestamp}</code></td><td><code>opencode/pr15-20250108120000</code></td></tr><tr><td>定时任务</td><td><code>opencode/schedule-{hex}-{timestamp}</code></td><td><code>opencode/schedule-a1b2c3-20250108120000</code></td></tr><tr><td>手动触发</td><td><code>opencode/dispatch-{hex}-{timestamp}</code></td><td><code>opencode/dispatch-d4e5f6-20250108120000</code></td></tr></tbody></table><p>来源：<code>github.ts:1047-1059</code></p><h3 id="co-author-归属" tabindex="-1">Co-author 归属 <a class="header-anchor" href="#co-author-归属" aria-label="Permalink to “Co-author 归属”">​</a></h3><p>OpenCode 提交的代码会自动添加 Co-authored-by 信息，将触发者标记为共同作者：</p>',6)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Fix authentication issue

Co-authored-by: username <username@users.noreply.github.com>`)])],-1)),t[18]||(t[18]=n('<blockquote><p><strong>注意</strong>：<code>schedule</code> 事件没有触发者，因此不会添加 Co-author 信息。</p></blockquote><p>来源：<code>github.ts:1061-1100</code></p><h2 id="权限配置详解" tabindex="-1">权限配置详解 <a class="header-anchor" href="#权限配置详解" aria-label="Permalink to “权限配置详解”">​</a></h2><p>根据使用场景，需要配置不同的权限级别：</p><h3 id="只读场景-审查、分析" tabindex="-1">只读场景（审查、分析） <a class="header-anchor" href="#只读场景-审查、分析" aria-label="Permalink to “只读场景（审查、分析）”">​</a></h3>',5)),t[19]||(t[19]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write      # OIDC 令牌交换必需
  contents: read       # 读取代码
  pull-requests: read  # 读取 PR 信息
  issues: read         # 读取 Issue 信息`)])],-1)),t[20]||(t[20]=e("h3",{id:"写入场景-修复、实现",tabindex:"-1"},[o("写入场景（修复、实现） "),e("a",{class:"header-anchor",href:"#写入场景-修复、实现","aria-label":"Permalink to “写入场景（修复、实现）”"},"​")],-1)),t[21]||(t[21]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`permissions:
  id-token: write       # OIDC 令牌交换必需
  contents: write       # 创建分支、提交代码
  pull-requests: write  # 创建/更新 PR
  issues: write         # 创建评论`)])],-1)),t[22]||(t[22]=n('<blockquote><p><strong>提示</strong>：使用 OpenCode GitHub App 时，权限由 App 控制。使用 <code>use_github_token: true</code> 时，需要在 workflow 中明确授予权限。</p></blockquote><h2 id="支持的事件" tabindex="-1">支持的事件 <a class="header-anchor" href="#支持的事件" aria-label="Permalink to “支持的事件”">​</a></h2><table tabindex="0"><thead><tr><th>事件类型</th><th>触发方式</th><th>说明</th></tr></thead><tbody><tr><td><code>issue_comment</code></td><td>Issue 或 PR 上的评论</td><td>在评论中提及 <code>/opencode</code> 或 <code>/oc</code></td></tr><tr><td><code>pull_request_review_comment</code></td><td>PR 中特定代码行的评论</td><td>代码审查时提及触发短语</td></tr><tr><td><code>issues</code></td><td>Issue 创建或编辑</td><td>需要 <code>prompt</code> 输入</td></tr><tr><td><code>pull_request</code></td><td>PR 创建或更新</td><td>用于自动审查</td></tr><tr><td><code>schedule</code></td><td>基于 cron 的定时任务</td><td>需要 <code>prompt</code> 输入，无评论输出</td></tr><tr><td><code>workflow_dispatch</code></td><td>从 GitHub UI 手动触发</td><td>需要 <code>prompt</code> 输入</td></tr></tbody></table><h3 id="定时任务示例" tabindex="-1">定时任务示例 <a class="header-anchor" href="#定时任务示例" aria-label="Permalink to “定时任务示例”">​</a></h3>',4)),t[23]||(t[23]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`name: Scheduled OpenCode Task

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
    mentions: "/ai,/bot,/help"`)])],-1)),t[34]||(t[34]=n('<p>现在可以使用 <code>/ai</code>、<code>/bot</code> 或 <code>/help</code> 触发 OpenCode。</p><blockquote><p><strong>注意</strong>：触发短语匹配不区分大小写，多个短语用逗号分隔。</p></blockquote><h2 id="fork-pr-处理" tabindex="-1">Fork PR 处理 <a class="header-anchor" href="#fork-pr-处理" aria-label="Permalink to “Fork PR 处理”">​</a></h2><p>OpenCode 支持处理来自 Fork 仓库的 PR。处理逻辑与本地 PR 略有不同：</p><h3 id="本地-pr-vs-fork-pr" tabindex="-1">本地 PR vs Fork PR <a class="header-anchor" href="#本地-pr-vs-fork-pr" aria-label="Permalink to “本地 PR vs Fork PR”">​</a></h3><table tabindex="0"><thead><tr><th>对比项</th><th>本地 PR</th><th>Fork PR</th></tr></thead><tbody><tr><td>分支来源</td><td>同一仓库</td><td>Fork 仓库</td></tr><tr><td>检出方式</td><td><code>git fetch origin &amp;&amp; git checkout</code></td><td><code>git remote add fork &amp;&amp; git fetch fork</code></td></tr><tr><td>推送目标</td><td>原分支</td><td>Fork 仓库的分支</td></tr><tr><td>分支名</td><td>保持原分支名</td><td>创建新的本地分支 <code>opencode/pr{ID}-{timestamp}</code></td></tr></tbody></table><h3 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to “工作流程”">​</a></h3><ol><li>检测 PR 的 <code>headRepository</code> 是否与 <code>baseRepository</code> 不同</li><li>添加 Fork 仓库作为 remote</li><li>拉取 Fork 分支代码</li><li>创建本地分支执行任务</li><li>推送更改回 Fork 仓库的原分支</li></ol><p>来源：<code>github.ts:1035-1045</code></p><blockquote><p><strong>注意</strong>：Fork PR 需要 Fork 仓库的维护者允许上游仓库推送更改（在 PR 页面勾选 &quot;Allow edits from maintainers&quot;）。</p></blockquote><h2 id="cli-命令" tabindex="-1">CLI 命令 <a class="header-anchor" href="#cli-命令" aria-label="Permalink to “CLI 命令”">​</a></h2><h3 id="opencode-pr" tabindex="-1">opencode pr <a class="header-anchor" href="#opencode-pr" aria-label="Permalink to “opencode pr”">​</a></h3><p>快速检出 PR 并启动 OpenCode：</p>',13)),t[35]||(t[35]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode pr <PR号>")])],-1)),t[36]||(t[36]=e("p",null,"执行流程：",-1)),t[37]||(t[37]=e("ol",null,[e("li",null,"自动 fetch PR 分支"),e("li",null,[o("创建本地分支 "),e("code",null,"pr/<PR号>")]),e("li",null,"检出到该分支"),e("li",null,"自动启动 OpenCode")],-1)),t[38]||(t[38]=e("p",null,[e("strong",null,"示例"),o("：")],-1)),t[39]||(t[39]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 检出 PR #123
opencode pr 123`)])],-1)),t[40]||(t[40]=n('<p><strong>Fork PR 处理</strong>：</p><p>对于来自 Fork 的 PR，命令会自动：</p><ol><li>添加 Fork 作为 remote</li><li>设置 upstream 跟踪</li><li>确保 push 到正确的仓库</li></ol><p><strong>导入关联的 Session</strong>：</p><p>如果 PR 描述中包含 OpenCode Session 链接（如 <code>https://opncd.ai/s/abc123</code>），命令会自动导入会话历史，让你继续之前的对话上下文。</p><h3 id="opencode-github-install" tabindex="-1">opencode github install <a class="header-anchor" href="#opencode-github-install" aria-label="Permalink to “opencode github install”">​</a></h3><p>交互式安装 GitHub Agent：</p>',7)),t[41]||(t[41]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github install")])],-1)),t[42]||(t[42]=n('<p>执行流程：</p><ol><li>检测当前目录的 Git 仓库信息</li><li>引导安装 OpenCode GitHub App</li><li>选择 AI 提供商和模型</li><li>生成 <code>.github/workflows/opencode.yml</code> 文件</li><li>提示配置 secrets</li></ol><h3 id="opencode-github-run" tabindex="-1">opencode github run <a class="header-anchor" href="#opencode-github-run" aria-label="Permalink to “opencode github run”">​</a></h3><p>在 GitHub Actions 中运行 Agent（通常不需要手动调用）：</p>',4)),t[43]||(t[43]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode github run")])],-1)),t[44]||(t[44]=e("h4",{id:"本地测试",tabindex:"-1"},[o("本地测试 "),e("a",{class:"header-anchor",href:"#本地测试","aria-label":"Permalink to “本地测试”"},"​")],-1)),t[45]||(t[45]=e("p",null,"用于开发调试时本地模拟 GitHub Actions 环境：",-1)),t[46]||(t[46]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`MODEL=anthropic/claude-sonnet-4-20250514 \\
  ANTHROPIC_API_KEY=sk-ant-api03-xxxxx \\
  GITHUB_RUN_ID=dummy \\
  opencode github run \\
    --token github_pat_xxxxx \\
    --event '{"eventName":"issue_comment","repo":{"owner":"你的用户名","repo":"仓库名"},"actor":"触发者用户名","payload":{"issue":{"number":1},"comment":{"id":1,"body":"/opencode 解释这个问题"}}}'`)])],-1)),t[47]||(t[47]=n('<p>参数说明：</p><table tabindex="0"><thead><tr><th>环境变量/参数</th><th>说明</th></tr></thead><tbody><tr><td><code>MODEL</code></td><td>使用的模型，格式 <code>provider/model</code></td></tr><tr><td><code>ANTHROPIC_API_KEY</code></td><td>模型提供商 API 密钥</td></tr><tr><td><code>GITHUB_RUN_ID</code></td><td>模拟 GitHub Actions 环境，本地测试可设为 <code>dummy</code></td></tr><tr><td><code>--token</code></td><td>GitHub 个人访问令牌，用于验证权限和操作仓库</td></tr><tr><td><code>--event</code></td><td>模拟的 GitHub 事件 JSON</td></tr></tbody></table><h4 id="事件-json-模板" tabindex="-1">事件 JSON 模板 <a class="header-anchor" href="#事件-json-模板" aria-label="Permalink to “事件 JSON 模板”">​</a></h4><p><strong>Issue 评论事件：</strong></p>',4)),t[48]||(t[48]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
/oc add error handling here`)])],-1)),t[69]||(t[69]=n('<p>在特定行评论时，OpenCode 接收：</p><ul><li>正在审查的确切文件</li><li>特定的代码行</li><li>周围的 diff 上下文</li><li>行号信息</li></ul><p>这允许更精准的请求，无需手动指定文件路径或行号。</p><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>报错 <code>Could not fetch an OIDC token</code></td><td>workflow 缺少 <code>id-token: write</code> 权限</td><td>添加 <code>permissions: id-token: write</code></td></tr><tr><td><code>/opencode</code> 没有触发</td><td>评论中的触发短语格式不对（如在 URL 中间）</td><td>确保触发短语在行首或前面有空格</td></tr><tr><td>Fork PR 无法推送更改</td><td>Fork 维护者未允许上游推送</td><td>联系 Fork 维护者开启 &quot;Allow edits from maintainers&quot;</td></tr><tr><td>Schedule 事件没有输出评论</td><td>定时任务无 Issue/PR 上下文</td><td>这是预期行为，输出记录到 Actions 日志</td></tr><tr><td>报错 <code>User xxx does not have write permissions</code></td><td>触发者没有仓库写入权限</td><td>只有 admin 或 write 权限的协作者才能触发</td></tr><tr><td>自定义 mentions 不生效</td><td>多个短语未正确用逗号分隔</td><td>使用 <code>mentions: &quot;/ai,/bot&quot;</code> 格式</td></tr><tr><td>使用 <code>use_github_token</code> 时权限不足</td><td>未授予必要的 workflow 权限</td><td>添加 <code>contents: write</code>、<code>pull-requests: write</code> 等权限</td></tr></tbody></table><h2 id="相关章节" tabindex="-1">相关章节 <a class="header-anchor" href="#相关章节" aria-label="Permalink to “相关章节”">​</a></h2><ul><li><a href="./15-gitlab.html">5.15 GitLab 集成</a> - 如果你使用 GitLab，参考该章节了解配置方式</li><li><a href="./16-share.html">5.16 分享功能</a> - 了解 OpenCode 会话分享</li><li><a href="./../appendix/cli.html">速查/CLI 参考</a> - 完整 CLI 命令列表</li></ul>',7))])}const y=s(u,[["render",c]]);export{k as __pageData,y as default};
