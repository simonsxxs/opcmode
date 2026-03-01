import{_ as i,I as l,c as s,o as r,a5 as a,J as d,j as e,a as n,bo as p}from"./chunks/framework.Dtwt352Q.js";const I=JSON.parse('{"title":"5.15 GitLab 集成","description":"通过 GitLab CI/CD 流水线或 GitLab Duo 集成，在 GitLab Runner 中使用 OpenCode。","frontmatter":{"title":"5.15 GitLab 集成","subtitle":"在 GitLab CI/CD 中使用 OpenCode","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.15","duration":"15 分钟","practice":"20 分钟","level":"进阶","description":"通过 GitLab CI/CD 流水线或 GitLab Duo 集成，在 GitLab Runner 中使用 OpenCode。","tags":["GitLab","CI/CD","自动化"],"prerequisite":["5.14 GitHub 集成"]},"headers":[],"relativePath":"5-advanced/15-gitlab.md","filePath":"5-advanced/15-gitlab.md","lastUpdated":1772014034000}'),c={name:"5-advanced/15-gitlab.md"};function g(b,t,u,h,C,m){const o=l("AdInArticle");return r(),s("div",null,[t[0]||(t[0]=a('<h1 id="gitlab-集成" tabindex="-1">GitLab 集成 <a class="header-anchor" href="#gitlab-集成" aria-label="Permalink to “GitLab 集成”">​</a></h1><p>OpenCode 通过 GitLab CI/CD 流水线或 GitLab Duo 集成到 GitLab 工作流中。两种方式下，OpenCode 都在你的 GitLab Runner 上运行。</p><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="GitLab 集成学霸笔记" data-zoom-src="/images/5-advanced/gitlab-notes.jpeg"></p><h2 id="与-github-集成的区别" tabindex="-1">与 GitHub 集成的区别 <a class="header-anchor" href="#与-github-集成的区别" aria-label="Permalink to “与 GitHub 集成的区别”">​</a></h2><p>在深入配置之前，了解 GitLab 和 GitHub 集成的差异很重要：</p><table tabindex="0"><thead><tr><th>特性</th><th>GitHub 集成</th><th>GitLab 集成</th></tr></thead><tbody><tr><td>安装方式</td><td>官方命令 <code>opencode github install</code></td><td>手动配置或社区组件</td></tr><tr><td>官方支持</td><td>OpenCode 官方 GitHub App</td><td>社区维护的 CI 组件</td></tr><tr><td>触发词</td><td><code>/opencode</code> 或 <code>/oc</code></td><td><code>@opencode</code>（可配置）</td></tr><tr><td>Action/组件</td><td><code>anomalyco/opencode/github@latest</code></td><td><code>nagyv/gitlab-opencode@2</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">选择建议</p><p>如果你同时使用 GitHub 和 GitLab，GitHub 的集成体验更&quot;开箱即用&quot;。GitLab 集成需要更多手动配置，但灵活性更高。参考 <a href="./14-github.html">5.14 GitHub 集成</a> 了解 GitHub 的设置流程。</p></div><hr><h2 id="gitlab-ci" tabindex="-1">GitLab CI <a class="header-anchor" href="#gitlab-ci" aria-label="Permalink to “GitLab CI”">​</a></h2>',11)),d(o),t[1]||(t[1]=a('<p>OpenCode 在常规 GitLab 流水线中工作。可以作为 <a href="https://docs.gitlab.com/ee/ci/components/" target="_blank" rel="noreferrer">CI 组件</a> 构建到流水线中。</p><p>这里使用社区创建的 CI/CD 组件：<a href="https://gitlab.com/nagyv/gitlab-opencode" target="_blank" rel="noreferrer">nagyv/gitlab-opencode</a>。</p><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to “功能”">​</a></h3><ul><li><strong>自定义配置</strong>：每个 job 可使用自定义配置目录（如 <code>./config/#custom-directory</code>）启用或禁用功能</li><li><strong>最小化设置</strong>：CI 组件在后台设置 OpenCode，你只需创建配置和初始提示</li><li><strong>灵活</strong>：CI 组件支持多种输入参数自定义行为</li></ul><h3 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-label="Permalink to “设置”">​</a></h3><p><strong>1. 存储认证信息</strong></p><p>将 OpenCode 认证 JSON 作为 <strong>File 类型</strong> 的 CI 环境变量存储：</p><ul><li>进入 <strong>Settings</strong> &gt; <strong>CI/CD</strong> &gt; <strong>Variables</strong></li><li>添加变量，类型选择 <strong>File</strong></li><li>确保勾选 <strong>Masked and hidden</strong></li></ul><p>认证 JSON 示例（根据你使用的模型提供商选择）：</p>',9)),t[2]||(t[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// Anthropic
{
  "anthropic": {
    "type": "api",
    "key": "sk-ant-api03-xxx..."
  }
}

// OpenAI
{
  "openai": {
    "type": "api",
    "key": "sk-xxx..."
  }
}

// 多个提供商
{
  "anthropic": {
    "type": "api",
    "key": "sk-ant-api03-xxx..."
  },
  "openai": {
    "type": "api",
    "key": "sk-xxx..."
  }
}`)])],-1)),t[3]||(t[3]=e("p",null,[e("strong",null,"2. 配置 .gitlab-ci.yml")],-1)),t[4]||(t[4]=e("p",null,[n("在 "),e("code",null,".gitlab-ci.yml"),n(" 添加以下内容：")],-1)),t[5]||(t[5]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`include:
  - component: $CI_SERVER_FQDN/nagyv/gitlab-opencode/opencode@2
    inputs:
      config_dir: \${CI_PROJECT_DIR}/opencode-config
      auth_json: $OPENCODE_AUTH_JSON  # 上一步创建的变量名
      command: optional-custom-command
      message: "Your prompt here"`)])],-1)),t[6]||(t[6]=a('<div class="tip custom-block"><p class="custom-block-title">组件版本</p><p><code>@2</code> 是当前主要版本。查看 <a href="https://gitlab.com/explore/catalog/nagyv/gitlab-opencode" target="_blank" rel="noreferrer">组件 Catalog</a> 获取最新版本和完整输入参数列表。</p></div><hr><h2 id="gitlab-duo" tabindex="-1">GitLab Duo <a class="header-anchor" href="#gitlab-duo" aria-label="Permalink to “GitLab Duo”">​</a></h2><p>OpenCode 集成到 GitLab 工作流中。在评论中提及 <code>@opencode</code>，OpenCode 将在 GitLab CI 流水线中执行任务。</p><h3 id="功能-1" tabindex="-1">功能 <a class="header-anchor" href="#功能-1" aria-label="Permalink to “功能”">​</a></h3><ul><li><strong>分流问题</strong>：让 OpenCode 查看 Issue 并解释</li><li><strong>修复和实现</strong>：让 OpenCode 修复 Issue 或实现功能，它会创建新分支并提交 Merge Request</li><li><strong>安全</strong>：OpenCode 在你的 GitLab Runner 上运行</li></ul><h3 id="设置-1" tabindex="-1">设置 <a class="header-anchor" href="#设置-1" aria-label="Permalink to “设置”">​</a></h3><p>OpenCode 在 GitLab CI/CD 流水线中运行，设置步骤：</p><div class="tip custom-block"><p class="custom-block-title">官方文档</p><p>查看 <a href="https://docs.gitlab.com/user/duo_agent_platform/agent_assistant/" target="_blank" rel="noreferrer">GitLab 官方文档</a> 获取最新说明。</p></div><ol><li>配置 GitLab 环境</li><li>设置 CI/CD</li><li>获取 AI 模型提供商 API 密钥</li><li>创建服务账号</li><li>配置 CI/CD 变量</li><li>创建 flow 配置文件</li></ol><h3 id="glab-cli" tabindex="-1">glab CLI <a class="header-anchor" href="#glab-cli" aria-label="Permalink to “glab CLI”">​</a></h3><p>Flow 配置中使用了 <a href="https://gitlab.com/gitlab-org/cli" target="_blank" rel="noreferrer">glab</a>——GitLab 官方命令行工具。它提供了与 GitLab API 交互的能力，包括：</p><ul><li>列出/创建/管理 Issue</li><li>操作 Merge Request</li><li>查看 CI/CD 状态</li></ul><p>OpenCode 通过 glab 读取 GitLab 数据并执行操作。</p>',14)),t[7]||(t[7]=e("details",null,[e("summary",null,"Flow 配置示例"),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`image: node:22-slim
commands:
  - echo "Installing opencode"
  - npm install --global opencode-ai
  - echo "Installing glab"
  - export GITLAB_TOKEN=$GITLAB_TOKEN_OPENCODE
  - apt-get update --quiet && apt-get install --yes curl wget gpg git && rm --recursive --force /var/lib/apt/lists/*
  - curl --silent --show-error --location "https://raw.githubusercontent.com/upciti/wakemeops/main/assets/install_repository" | bash
  - apt-get install --yes glab
  - echo "Configuring glab"
  - echo $GITLAB_HOST
  - echo "Creating OpenCode auth configuration"
  - mkdir --parents ~/.local/share/opencode
  - |
    cat > ~/.local/share/opencode/auth.json << EOF
    {
      "anthropic": {
        "type": "api",
        "key": "$ANTHROPIC_API_KEY"
      }
    }
    EOF
  - echo "Configuring git"
  - git config --global user.email "opencode@gitlab.com"
  - git config --global user.name "OpenCode"
  - echo "Testing glab"
  - glab issue list
  - echo "Running OpenCode"
  - |
    opencode run "
    You are an AI assistant helping with GitLab operations.

    Context: $AI_FLOW_CONTEXT
    Task: $AI_FLOW_INPUT
    Event: $AI_FLOW_EVENT

    Please execute the requested task using the available GitLab tools.
    Be thorough in your analysis and provide clear explanations.

    <important>
    Please use the glab CLI to access data from GitLab. The glab CLI has already been authenticated. You can run the corresponding commands.

    If you are asked to summarize an MR or issue or asked to provide more information then please post back a note to the MR/Issue so that the user can see it.
    You don't need to commit or push up changes, those will be done automatically based on the file changes you make.
    </important>
    "
  - git checkout --branch $CI_WORKLOAD_REF origin/$CI_WORKLOAD_REF
  - echo "Checking for git changes and pushing if any exist"
  - |
    if ! git diff --quiet || ! git diff --cached --quiet || [ --not --zero "$(git ls-files --others --exclude-standard)" ]; then
      echo "Git changes detected, adding and pushing..."
      git add .
      if git diff --cached --quiet; then
        echo "No staged changes to commit"
      else
        echo "Committing changes to branch: $CI_WORKLOAD_REF"
        git commit --message "OpenCode changes"
        echo "Pushing changes up to $CI_WORKLOAD_REF"
        git push https://gitlab-ci-token:$GITLAB_TOKEN@$GITLAB_HOST/$CI_PROJECT_PATH.git $CI_WORKLOAD_REF
        # 注意：官方示例使用硬编码路径，这里改用 $CI_PROJECT_PATH 变量更通用
        echo "Changes successfully pushed"
      fi
    else
      echo "No git changes detected, skipping push"
    fi
variables:
  - ANTHROPIC_API_KEY
  - GITLAB_TOKEN_OPENCODE
  - GITLAB_HOST`)])])],-1)),t[8]||(t[8]=a('<div class="info custom-block"><p class="custom-block-title">配置说明</p><ul><li><code>$AI_FLOW_CONTEXT</code>、<code>$AI_FLOW_INPUT</code>、<code>$AI_FLOW_EVENT</code> 是 GitLab Duo 注入的环境变量</li><li><code>$CI_PROJECT_PATH</code> 是 GitLab 预定义变量，表示 <code>&lt;namespace&gt;/&lt;project&gt;</code></li><li>更多 GitLab 预定义变量参考 <a href="https://docs.gitlab.com/ee/ci/variables/predefined_variables.html" target="_blank" rel="noreferrer">GitLab CI/CD 变量文档</a></li></ul></div><p>详细说明请参考 <a href="https://docs.gitlab.com/user/duo_agent_platform/agent_assistant/" target="_blank" rel="noreferrer">GitLab CLI agents 文档</a>。</p><hr><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to “使用示例”">​</a></h2><div class="tip custom-block"><p class="custom-block-title">自定义触发词</p><p>可以配置使用不同于 <code>@opencode</code> 的触发词。</p></div><h3 id="解释-issue" tabindex="-1">解释 Issue <a class="header-anchor" href="#解释-issue" aria-label="Permalink to “解释 Issue”">​</a></h3><p>在 GitLab Issue 中添加评论：</p>',7)),t[9]||(t[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode explain this issue")])],-1)),t[10]||(t[10]=e("p",null,"OpenCode 会读取 Issue 并回复解释。",-1)),t[11]||(t[11]=e("h3",{id:"修复-issue",tabindex:"-1"},[n("修复 Issue "),e("a",{class:"header-anchor",href:"#修复-issue","aria-label":"Permalink to “修复 Issue”"},"​")],-1)),t[12]||(t[12]=e("p",null,"在 GitLab Issue 中：",-1)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode fix this")])],-1)),t[14]||(t[14]=e("p",null,"OpenCode 会创建新分支、实现修改并打开 Merge Request。",-1)),t[15]||(t[15]=e("h3",{id:"审查-merge-request",tabindex:"-1"},[n("审查 Merge Request "),e("a",{class:"header-anchor",href:"#审查-merge-request","aria-label":"Permalink to “审查 Merge Request”"},"​")],-1)),t[16]||(t[16]=e("p",null,"在 GitLab Merge Request 中留下评论：",-1)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode review this merge request")])],-1)),t[18]||(t[18]=a('<p>OpenCode 会审查 Merge Request 并提供反馈。</p><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>CI 组件找不到</td><td>私有 GitLab 实例可能无法访问 gitlab.com 上的组件</td><td>Fork 组件到你的 GitLab 实例，或下载后本地引用</td></tr><tr><td><code>OPENCODE_AUTH_JSON</code> 无效</td><td>变量类型错误（应为 File 而非 Variable）</td><td>在 CI/CD Variables 中删除重建，确保选择 <strong>File</strong> 类型</td></tr><tr><td>glab 认证失败</td><td><code>GITLAB_TOKEN</code> 权限不足</td><td>确保 Token 有 <code>api</code>、<code>read_repository</code>、<code>write_repository</code> 权限</td></tr><tr><td>git push 被拒绝</td><td>分支保护规则</td><td>在 Settings &gt; Repository &gt; Protected Branches 中配置允许 bot 推送</td></tr><tr><td>OpenCode 无响应</td><td>Runner 网络问题或 API 密钥无效</td><td>检查 Runner 日志，验证 API 密钥是否正确</td></tr></tbody></table><hr><h2 id="相关章节" tabindex="-1">相关章节 <a class="header-anchor" href="#相关章节" aria-label="Permalink to “相关章节”">​</a></h2><ul><li><a href="./14-github.html">5.14 GitHub 集成</a> - GitHub Actions 集成方式</li><li><a href="./01a-config-basics.html">5.1a 配置基础</a> - 了解 OpenCode 配置文件格式</li></ul>',7))])}const f=i(c,[["render",g]]);export{I as __pageData,f as default};
