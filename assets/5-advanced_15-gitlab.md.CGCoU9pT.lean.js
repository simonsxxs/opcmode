import{_ as i,I as l,c as s,o as r,a5 as a,J as d,j as e,a as n,bo as p}from"./chunks/framework.Dtwt352Q.js";const I=JSON.parse('{"title":"5.15 GitLab 集成","description":"通过 GitLab CI/CD 流水线或 GitLab Duo 集成，在 GitLab Runner 中使用 OpenCode。","frontmatter":{"title":"5.15 GitLab 集成","subtitle":"在 GitLab CI/CD 中使用 OpenCode","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.15","duration":"15 分钟","practice":"20 分钟","level":"进阶","description":"通过 GitLab CI/CD 流水线或 GitLab Duo 集成，在 GitLab Runner 中使用 OpenCode。","tags":["GitLab","CI/CD","自动化"],"prerequisite":["5.14 GitHub 集成"]},"headers":[],"relativePath":"5-advanced/15-gitlab.md","filePath":"5-advanced/15-gitlab.md","lastUpdated":1772014034000}'),c={name:"5-advanced/15-gitlab.md"};function g(b,t,u,h,C,m){const o=l("AdInArticle");return r(),s("div",null,[t[0]||(t[0]=a("",11)),d(o),t[1]||(t[1]=a("",9)),t[2]||(t[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// Anthropic
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
      message: "Your prompt here"`)])],-1)),t[6]||(t[6]=a("",14)),t[7]||(t[7]=e("details",null,[e("summary",null,"Flow 配置示例"),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`image: node:22-slim
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
  - GITLAB_HOST`)])])],-1)),t[8]||(t[8]=a("",7)),t[9]||(t[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode explain this issue")])],-1)),t[10]||(t[10]=e("p",null,"OpenCode 会读取 Issue 并回复解释。",-1)),t[11]||(t[11]=e("h3",{id:"修复-issue",tabindex:"-1"},[n("修复 Issue "),e("a",{class:"header-anchor",href:"#修复-issue","aria-label":"Permalink to “修复 Issue”"},"​")],-1)),t[12]||(t[12]=e("p",null,"在 GitLab Issue 中：",-1)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode fix this")])],-1)),t[14]||(t[14]=e("p",null,"OpenCode 会创建新分支、实现修改并打开 Merge Request。",-1)),t[15]||(t[15]=e("h3",{id:"审查-merge-request",tabindex:"-1"},[n("审查 Merge Request "),e("a",{class:"header-anchor",href:"#审查-merge-request","aria-label":"Permalink to “审查 Merge Request”"},"​")],-1)),t[16]||(t[16]=e("p",null,"在 GitLab Merge Request 中留下评论：",-1)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode review this merge request")])],-1)),t[18]||(t[18]=a("",7))])}const f=i(c,[["render",g]]);export{I as __pageData,f as default};
