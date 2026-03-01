import{_ as o,I as s,c as r,o as l,a5 as n,J as d,j as e,a,bo as c}from"./chunks/framework.Dtwt352Q.js";const I=JSON.parse('{"title":"5.15 GitLab Integration","description":"Use OpenCode in GitLab Runner through GitLab CI/CD pipelines or GitLab Duo integration.","frontmatter":{"title":"5.15 GitLab Integration","subtitle":"Using OpenCode in GitLab CI/CD","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.15","duration":"15 minutes","practice":"20 minutes","level":"Advanced","description":"Use OpenCode in GitLab Runner through GitLab CI/CD pipelines or GitLab Duo integration.","tags":["GitLab","CI/CD","Automation"],"prerequisite":["5.14 GitHub Integration"]},"headers":[],"relativePath":"en/5-advanced/15-gitlab.md","filePath":"en/5-advanced/15-gitlab.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/15-gitlab.md"};function u(g,t,b,h,m,f){const i=s("AdInArticle");return l(),r("div",null,[t[0]||(t[0]=n('<h1 id="gitlab-integration" tabindex="-1">GitLab Integration <a class="header-anchor" href="#gitlab-integration" aria-label="Permalink to “GitLab Integration”">​</a></h1><p>OpenCode integrates into GitLab workflows through GitLab CI/CD pipelines or GitLab Duo integration. In both cases, OpenCode runs on your GitLab Runner.</p><h2 id="📝-lesson-notes" tabindex="-1">📝 Lesson Notes <a class="header-anchor" href="#📝-lesson-notes" aria-label="Permalink to “📝 Lesson Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+c+'" alt="GitLab Integration Notes" data-zoom-src="/images/5-advanced/gitlab-notes.jpeg"></p><h2 id="differences-from-github-integration" tabindex="-1">Differences from GitHub Integration <a class="header-anchor" href="#differences-from-github-integration" aria-label="Permalink to “Differences from GitHub Integration”">​</a></h2><p>Before diving into configuration, it&#39;s important to understand the differences between GitLab and GitHub integration:</p><table tabindex="0"><thead><tr><th>Feature</th><th>GitHub Integration</th><th>GitLab Integration</th></tr></thead><tbody><tr><td>Installation</td><td>Official command <code>opencode github install</code></td><td>Manual config or community components</td></tr><tr><td>Official Support</td><td>OpenCode official GitHub App</td><td>Community-maintained CI components</td></tr><tr><td>Trigger</td><td><code>/opencode</code> or <code>/oc</code></td><td><code>@opencode</code> (configurable)</td></tr><tr><td>Action/Component</td><td><code>anomalyco/opencode/github@latest</code></td><td><code>nagyv/gitlab-opencode@2</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Recommendation</p><p>If you use both GitHub and GitLab, GitHub integration is more &quot;out-of-the-box&quot;. GitLab integration requires more manual configuration but offers greater flexibility. See <a href="./14-github.html">5.14 GitHub Integration</a> for GitHub setup instructions.</p></div><hr><h2 id="gitlab-ci" tabindex="-1">GitLab CI <a class="header-anchor" href="#gitlab-ci" aria-label="Permalink to “GitLab CI”">​</a></h2>',11)),d(i),t[1]||(t[1]=n('<p>OpenCode works in regular GitLab pipelines. It can be incorporated into pipelines as a <a href="https://docs.gitlab.com/ee/ci/components/" target="_blank" rel="noreferrer">CI component</a>.</p><p>Here we use the community-created CI/CD component: <a href="https://gitlab.com/nagyv/gitlab-opencode" target="_blank" rel="noreferrer">nagyv/gitlab-opencode</a>.</p><h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to “Features”">​</a></h3><ul><li><strong>Custom Configuration</strong>: Each job can enable or disable features using custom configuration directories (e.g., <code>./config/#custom-directory</code>)</li><li><strong>Minimal Setup</strong>: The CI component sets up OpenCode in the background, you only need to create configuration and initial prompts</li><li><strong>Flexible</strong>: The CI component supports various input parameters to customize behavior</li></ul><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to “Setup”">​</a></h3><p><strong>1. Store Authentication</strong></p><p>Store the OpenCode authentication JSON as a <strong>File type</strong> CI environment variable:</p><ul><li>Go to <strong>Settings</strong> &gt; <strong>CI/CD</strong> &gt; <strong>Variables</strong></li><li>Add a variable, select <strong>File</strong> as the type</li><li>Make sure to check <strong>Masked and hidden</strong></li></ul><p>Authentication JSON examples (choose based on your model provider):</p>',9)),t[2]||(t[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// Anthropic
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
      message: "Your prompt here"`)])],-1)),t[6]||(t[6]=n('<div class="tip custom-block"><p class="custom-block-title">Component Version</p><p><code>@2</code> is the current major version. Check the <a href="https://gitlab.com/explore/catalog/nagyv/gitlab-opencode" target="_blank" rel="noreferrer">Component Catalog</a> for the latest version and complete list of input parameters.</p></div><hr><h2 id="gitlab-duo" tabindex="-1">GitLab Duo <a class="header-anchor" href="#gitlab-duo" aria-label="Permalink to “GitLab Duo”">​</a></h2><p>OpenCode integrates into GitLab workflows. Mention <code>@opencode</code> in comments, and OpenCode will execute tasks in GitLab CI pipelines.</p><h3 id="features-1" tabindex="-1">Features <a class="header-anchor" href="#features-1" aria-label="Permalink to “Features”">​</a></h3><ul><li><strong>Triage Issues</strong>: Let OpenCode review Issues and explain them</li><li><strong>Fix and Implement</strong>: Let OpenCode fix Issues or implement features, it will create new branches and submit Merge Requests</li><li><strong>Secure</strong>: OpenCode runs on your GitLab Runner</li></ul><h3 id="setup-1" tabindex="-1">Setup <a class="header-anchor" href="#setup-1" aria-label="Permalink to “Setup”">​</a></h3><p>OpenCode runs in GitLab CI/CD pipelines. Setup steps:</p><div class="tip custom-block"><p class="custom-block-title">Official Documentation</p><p>Check the <a href="https://docs.gitlab.com/user/duo_agent_platform/agent_assistant/" target="_blank" rel="noreferrer">GitLab Official Documentation</a> for the latest instructions.</p></div><ol><li>Configure GitLab environment</li><li>Setup CI/CD</li><li>Get AI model provider API keys</li><li>Create service account</li><li>Configure CI/CD variables</li><li>Create flow configuration file</li></ol><h3 id="glab-cli" tabindex="-1">glab CLI <a class="header-anchor" href="#glab-cli" aria-label="Permalink to “glab CLI”">​</a></h3><p>The flow configuration uses <a href="https://gitlab.com/gitlab-org/cli" target="_blank" rel="noreferrer">glab</a>—GitLab&#39;s official command-line tool. It provides the ability to interact with GitLab API, including:</p><ul><li>List/create/manage Issues</li><li>Operate Merge Requests</li><li>View CI/CD status</li></ul><p>OpenCode reads GitLab data and performs operations through glab.</p>',14)),t[7]||(t[7]=e("details",null,[e("summary",null,"Flow Configuration Example"),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`image: node:22-slim
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
  - GITLAB_HOST`)])])],-1)),t[8]||(t[8]=n('<div class="info custom-block"><p class="custom-block-title">Configuration Notes</p><ul><li><code>$AI_FLOW_CONTEXT</code>, <code>$AI_FLOW_INPUT</code>, <code>$AI_FLOW_EVENT</code> are environment variables injected by GitLab Duo</li><li><code>$CI_PROJECT_PATH</code> is a GitLab predefined variable representing <code>&lt;namespace&gt;/&lt;project&gt;</code></li><li>For more GitLab predefined variables, refer to <a href="https://docs.gitlab.com/ee/ci/variables/predefined_variables.html" target="_blank" rel="noreferrer">GitLab CI/CD Variables Documentation</a></li></ul></div><p>For detailed instructions, refer to <a href="https://docs.gitlab.com/user/duo_agent_platform/agent_assistant/" target="_blank" rel="noreferrer">GitLab CLI agents documentation</a>.</p><hr><h2 id="usage-examples" tabindex="-1">Usage Examples <a class="header-anchor" href="#usage-examples" aria-label="Permalink to “Usage Examples”">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Custom Trigger</p><p>You can configure a different trigger word instead of <code>@opencode</code>.</p></div><h3 id="explain-issue" tabindex="-1">Explain Issue <a class="header-anchor" href="#explain-issue" aria-label="Permalink to “Explain Issue”">​</a></h3><p>Add a comment in a GitLab Issue:</p>',7)),t[9]||(t[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode explain this issue")])],-1)),t[10]||(t[10]=e("p",null,"OpenCode will read the Issue and reply with an explanation.",-1)),t[11]||(t[11]=e("h3",{id:"fix-issue",tabindex:"-1"},[a("Fix Issue "),e("a",{class:"header-anchor",href:"#fix-issue","aria-label":"Permalink to “Fix Issue”"},"​")],-1)),t[12]||(t[12]=e("p",null,"In a GitLab Issue:",-1)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode fix this")])],-1)),t[14]||(t[14]=e("p",null,"OpenCode will create a new branch, implement changes, and open a Merge Request.",-1)),t[15]||(t[15]=e("h3",{id:"review-merge-request",tabindex:"-1"},[a("Review Merge Request "),e("a",{class:"header-anchor",href:"#review-merge-request","aria-label":"Permalink to “Review Merge Request”"},"​")],-1)),t[16]||(t[16]=e("p",null,"Leave a comment in a GitLab Merge Request:",-1)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@opencode review this merge request")])],-1)),t[18]||(t[18]=n('<p>OpenCode will review the Merge Request and provide feedback.</p><hr><h2 id="common-issues" tabindex="-1">Common Issues <a class="header-anchor" href="#common-issues" aria-label="Permalink to “Common Issues”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>CI component not found</td><td>Private GitLab instance may not access components on gitlab.com</td><td>Fork the component to your GitLab instance, or download and reference locally</td></tr><tr><td><code>OPENCODE_AUTH_JSON</code> invalid</td><td>Wrong variable type (should be File not Variable)</td><td>Delete and recreate in CI/CD Variables, ensure <strong>File</strong> type is selected</td></tr><tr><td>glab authentication failed</td><td><code>GITLAB_TOKEN</code> insufficient permissions</td><td>Ensure Token has <code>api</code>, <code>read_repository</code>, <code>write_repository</code> permissions</td></tr><tr><td>git push rejected</td><td>Branch protection rules</td><td>Configure in Settings &gt; Repository &gt; Protected Branches to allow bot pushes</td></tr><tr><td>OpenCode unresponsive</td><td>Runner network issues or invalid API key</td><td>Check Runner logs, verify API key is correct</td></tr></tbody></table><hr><h2 id="related-sections" tabindex="-1">Related Sections <a class="header-anchor" href="#related-sections" aria-label="Permalink to “Related Sections”">​</a></h2><ul><li><a href="./14-github.html">5.14 GitHub Integration</a> - GitHub Actions integration</li><li><a href="./01a-config-basics.html">5.1a Configuration Basics</a> - Understanding OpenCode configuration file format</li></ul>',7))])}const _=o(p,[["render",u]]);export{I as __pageData,_ as default};
