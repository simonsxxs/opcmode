import{_ as o,I as s,c as r,o as l,a5 as n,J as d,j as e,a,bo as c}from"./chunks/framework.Dtwt352Q.js";const I=JSON.parse('{"title":"5.15 GitLab Integration","description":"Use OpenCode in GitLab Runner through GitLab CI/CD pipelines or GitLab Duo integration.","frontmatter":{"title":"5.15 GitLab Integration","subtitle":"Using OpenCode in GitLab CI/CD","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.15","duration":"15 minutes","practice":"20 minutes","level":"Advanced","description":"Use OpenCode in GitLab Runner through GitLab CI/CD pipelines or GitLab Duo integration.","tags":["GitLab","CI/CD","Automation"],"prerequisite":["5.14 GitHub Integration"]},"headers":[],"relativePath":"en/5-advanced/15-gitlab.md","filePath":"en/5-advanced/15-gitlab.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/15-gitlab.md"};function u(g,t,b,h,m,f){const i=s("AdInArticle");return l(),r("div",null,[t[0]||(t[0]=n("",11)),d(i),t[1]||(t[1]=n("",9)),t[2]||(t[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// Anthropic
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

// Multiple providers
{
  "anthropic": {
    "type": "api",
    "key": "sk-ant-api03-xxx..."
  },
  "openai": {
    "type": "api",
    "key": "sk-xxx..."
  }
}`)])],-1)),t[3]||(t[3]=e("p",null,[e("strong",null,"2. Configure .gitlab-ci.yml")],-1)),t[4]||(t[4]=e("p",null,[a("Add the following to "),e("code",null,".gitlab-ci.yml"),a(":")],-1)),t[5]||(t[5]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`include:
  - component: $CI_SERVER_FQDN/nagyv/gitlab-opencode/opencode@2
    inputs:
      config_dir: \${CI_PROJECT_DIR}/opencode-config
      auth_json: $OPENCODE_AUTH_JSON  # Variable name created in previous step
      command: optional-custom-command
      message: "Your prompt here"`)])],-1)),t[6]||(t[6]=n("",14)),t[7]||(t[7]=e("details",null,[e("summary",null,"Flow Configuration Example"),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`image: node:22-slim
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
        echo "Changes successfully pushed"
      fi
    else
      echo "No git changes detected, skipping push"
    fi
variables:
  - ANTHROPIC_API_KEY
  - GITLAB_TOKEN_OPENCODE
  - GITLAB_HOST`)])])],-1)),t[8]||(t[8]=n("",7)),t[9]||(t[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode explain this issue")])],-1)),t[10]||(t[10]=e("p",null,"OpenCode will read the Issue and reply with an explanation.",-1)),t[11]||(t[11]=e("h3",{id:"fix-issue",tabindex:"-1"},[a("Fix Issue "),e("a",{class:"header-anchor",href:"#fix-issue","aria-label":"Permalink to “Fix Issue”"},"​")],-1)),t[12]||(t[12]=e("p",null,"In a GitLab Issue:",-1)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode fix this")])],-1)),t[14]||(t[14]=e("p",null,"OpenCode will create a new branch, implement changes, and open a Merge Request.",-1)),t[15]||(t[15]=e("h3",{id:"review-merge-request",tabindex:"-1"},[a("Review Merge Request "),e("a",{class:"header-anchor",href:"#review-merge-request","aria-label":"Permalink to “Review Merge Request”"},"​")],-1)),t[16]||(t[16]=e("p",null,"Leave a comment in a GitLab Merge Request:",-1)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode review this merge request")])],-1)),t[18]||(t[18]=n("",7))])}const _=o(p,[["render",u]]);export{I as __pageData,_ as default};
