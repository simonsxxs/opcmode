import{_ as t,c as l,o as r,a5 as o,j as e,a,bC as s}from"./chunks/framework.Dtwt352Q.js";const m=JSON.parse('{"title":"Model Provider List","description":"Complete list of 75+ model providers supported by OpenCode","frontmatter":{"title":"Model Provider List","description":"Complete list of 75+ model providers supported by OpenCode"},"headers":[],"relativePath":"en/appendix/providers.md","filePath":"en/appendix/providers.md","lastUpdated":1772014034000}'),i={name:"en/appendix/providers.md"};function c(d,n,p,h,u,g){return r(),l("div",null,[...n[0]||(n[0]=[o('<h1 id="model-provider-list" tabindex="-1">Model Provider List <a class="header-anchor" href="#model-provider-list" aria-label="Permalink to “Model Provider List”">​</a></h1><blockquote><p>OpenCode supports 75+ model providers via AI SDK and Models.dev</p></blockquote><hr><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+s+'" alt="Model Provider Notes" data-zoom-src="/images/appendix/providers-notes.jpeg"></p><hr><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to “Configuration”">​</a></h2><p>Adding a provider requires two steps:</p><ol><li>Use <code>/connect</code> command to add API Key (stored in <code>~/.local/share/opencode/auth.json</code>)</li><li>Configure provider in <code>opencode.json</code> (optional, for custom options)</li></ol><hr><h2 id="opencode-zen-recommended-for-beginners" tabindex="-1">OpenCode Zen (Recommended for Beginners) <a class="header-anchor" href="#opencode-zen-recommended-for-beginners" aria-label="Permalink to “OpenCode Zen (Recommended for Beginners)”">​</a></h2><p>Official OpenCode verified model list, ready to use.</p>',13),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Run in TUI
/connect

# 2. Select opencode, visit opencode.ai/auth to get API Key

# 3. View available models
/models`)])],-1),o('<p><strong>Get API Key</strong>: <a href="https://opencode.ai/auth" target="_blank" rel="noreferrer">opencode.ai/auth</a></p><hr><h2 id="international-models" tabindex="-1">International Models <a class="header-anchor" href="#international-models" aria-label="Permalink to “International Models”">​</a></h2><h3 id="anthropic-claude" tabindex="-1">Anthropic Claude <a class="header-anchor" href="#anthropic-claude" aria-label="Permalink to “Anthropic Claude”">​</a></h3><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>claude-sonnet-4-20250514</code></td><td>Latest balanced (recommended)</td></tr><tr><td><code>claude-opus-4-20250514</code></td><td>Most powerful</td></tr><tr><td><code>claude-3-5-haiku-20241022</code></td><td>Fast model</td></tr></tbody></table><p><strong>Configuration</strong>:</p>',6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`/connect  # Select Anthropic

# Options:
# - Claude Pro/Max (browser auth)
# - Create an API Key (create new key)
# - Manually enter API Key`)])],-1),o('<p><strong>Get API Key</strong>: <a href="https://console.anthropic.com" target="_blank" rel="noreferrer">console.anthropic.com</a></p><hr><h3 id="openai" tabindex="-1">OpenAI <a class="header-anchor" href="#openai" aria-label="Permalink to “OpenAI”">​</a></h3><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>gpt-4o</code></td><td>Flagship multimodal</td></tr><tr><td><code>gpt-4o-mini</code></td><td>Budget option</td></tr><tr><td><code>o1</code></td><td>Reasoning model</td></tr><tr><td><code>o3-mini</code></td><td>Latest reasoning</td></tr></tbody></table><p><strong>Configuration</strong>:</p>',5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search OpenAI")])],-1),o('<p><strong>Get API Key</strong>: <a href="https://platform.openai.com" target="_blank" rel="noreferrer">platform.openai.com</a></p><hr><h3 id="google-gemini" tabindex="-1">Google Gemini <a class="header-anchor" href="#google-gemini" aria-label="Permalink to “Google Gemini”">​</a></h3><p>Via Vertex AI.</p><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>gemini-2.0-flash</code></td><td>Latest fast version</td></tr><tr><td><code>gemini-2.0-pro</code></td><td>Professional</td></tr><tr><td><code>gemini-1.5-pro</code></td><td>Long context</td></tr></tbody></table><p><strong>Configuration</strong>:</p>',6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set Google Cloud project ID (required)
export GOOGLE_CLOUD_PROJECT=your-project-id
# Or use GCP_PROJECT / GCLOUD_PROJECT

# Set region (optional, default us-east5)
export VERTEX_LOCATION=us-east5
# Or use GOOGLE_CLOUD_LOCATION`)])],-1),o('<blockquote><p>Google Vertex AI requires authentication via <code>gcloud auth application-default login</code> or service account. OpenCode automatically uses Application Default Credentials.</p></blockquote><hr><h3 id="xai-grok" tabindex="-1">xAI Grok <a class="header-anchor" href="#xai-grok" aria-label="Permalink to “xAI Grok”">​</a></h3><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>grok-2</code></td><td>Latest version</td></tr><tr><td><code>grok-2-mini</code></td><td>Budget option</td></tr></tbody></table><p><strong>Configuration</strong>:</p>',5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search xAI")])],-1),o('<p><strong>Get API Key</strong>: <a href="https://console.x.ai" target="_blank" rel="noreferrer">console.x.ai</a></p><hr><h3 id="mistral" tabindex="-1">Mistral <a class="header-anchor" href="#mistral" aria-label="Permalink to “Mistral”">​</a></h3><p>Open-source model leader, supports Mistral Large, Codestral, etc.</p><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>mistral-large-latest</code></td><td>Most capable</td></tr><tr><td><code>mistral-small-latest</code></td><td>Fast response</td></tr><tr><td><code>codestral-latest</code></td><td>Code optimized</td></tr></tbody></table>',5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Mistral")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://console.mistral.ai",target:"_blank",rel:"noreferrer"},"console.mistral.ai")],-1),e("hr",null,null,-1),e("h3",{id:"cohere",tabindex:"-1"},[a("Cohere "),e("a",{class:"header-anchor",href:"#cohere","aria-label":"Permalink to “Cohere”"},"​")],-1),e("p",null,"Enterprise NLP capabilities, supports Rerank, Embed.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Cohere")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://dashboard.cohere.com",target:"_blank",rel:"noreferrer"},"dashboard.cohere.com")],-1),e("hr",null,null,-1),e("h3",{id:"perplexity",tabindex:"-1"},[a("Perplexity "),e("a",{class:"header-anchor",href:"#perplexity","aria-label":"Permalink to “Perplexity”"},"​")],-1),e("p",null,"Integrated search capabilities, real-time information.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Perplexity")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://www.perplexity.ai/settings/api",target:"_blank",rel:"noreferrer"},"perplexity.ai/settings/api")],-1),e("blockquote",null,[e("p",null,[a("API Key format: "),e("code",null,"pplx-...")])],-1),e("hr",null,null,-1),e("h3",{id:"github-copilot",tabindex:"-1"},[a("GitHub Copilot "),e("a",{class:"header-anchor",href:"#github-copilot","aria-label":"Permalink to “GitHub Copilot”"},"​")],-1),e("p",null,"Use Copilot subscription.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`/connect  # Search GitHub Copilot
# Visit github.com/login/device to enter authorization code`)])],-1),o('<blockquote><p>Some models require Pro+ subscription, certain models need to be manually enabled in GitHub Copilot settings.</p></blockquote><hr><h2 id="deepseek" tabindex="-1">DeepSeek <a class="header-anchor" href="#deepseek" aria-label="Permalink to “DeepSeek”">​</a></h2><p>Excellent value, works globally. Also popular in China for direct local access.</p><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>deepseek-chat</code></td><td>General chat</td></tr><tr><td><code>deepseek-reasoner</code></td><td>Reasoning model (R1)</td></tr></tbody></table><p><strong>Configuration</strong>:</p>',6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Run /connect, search DeepSeek
/connect

# 2. Enter API Key

# 3. Select model
/models`)])],-1),o('<p><strong>Get API Key</strong>: <a href="https://platform.deepseek.com" target="_blank" rel="noreferrer">platform.deepseek.com</a></p><hr><h2 id="chinese-models" tabindex="-1">Chinese Models <a class="header-anchor" href="#chinese-models" aria-label="Permalink to “Chinese Models”">​</a></h2><h3 id="moonshot-ai" tabindex="-1">Moonshot AI <a class="header-anchor" href="#moonshot-ai" aria-label="Permalink to “Moonshot AI”">​</a></h3><p>Kimi K2 model.</p><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>kimi-k2</code></td><td>Latest model</td></tr></tbody></table><p><strong>Configuration</strong>:</p>',7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Moonshot AI")])],-1),o('<p><strong>Get API Key</strong>: <a href="https://platform.moonshot.ai" target="_blank" rel="noreferrer">platform.moonshot.ai</a></p><hr><h3 id="minimax" tabindex="-1">MiniMax <a class="header-anchor" href="#minimax" aria-label="Permalink to “MiniMax”">​</a></h3><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>M2.1</code></td><td>Latest model</td></tr></tbody></table><p><strong>Configuration</strong>:</p>',5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search MiniMax")])],-1),o('<p><strong>Get API Key</strong>: <a href="https://platform.minimax.io" target="_blank" rel="noreferrer">platform.minimax.io</a></p><hr><h3 id="z-ai-zhipu" tabindex="-1">Z.AI (Zhipu) <a class="header-anchor" href="#z-ai-zhipu" aria-label="Permalink to “Z.AI (Zhipu)”">​</a></h3><p>GLM series models.</p><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><code>GLM-4.7</code></td><td>Latest model</td></tr></tbody></table><p><strong>Configuration</strong>:</p>',6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`/connect  # Search Z.AI
# If subscribed to GLM Coding Plan, select Z.AI Coding Plan`)])],-1),o('<p><strong>Get API Key</strong>: <a href="https://z.ai/manage-apikey/apikey-list" target="_blank" rel="noreferrer">z.ai</a></p><hr><h2 id="cloud-platforms" tabindex="-1">Cloud Platforms <a class="header-anchor" href="#cloud-platforms" aria-label="Permalink to “Cloud Platforms”">​</a></h2><h3 id="amazon-bedrock" tabindex="-1">Amazon Bedrock <a class="header-anchor" href="#amazon-bedrock" aria-label="Permalink to “Amazon Bedrock”">​</a></h3>',4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Environment variable
AWS_PROFILE=my-profile opencode

# Or config file`)])],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "amazon-bedrock": {
      "options": {
        "region": "us-east-1",
        "profile": "my-aws-profile"
      }
    }
  }
}`)])],-1),e("hr",null,null,-1),e("h3",{id:"azure-openai",tabindex:"-1"},[a("Azure OpenAI "),e("a",{class:"header-anchor",href:"#azure-openai","aria-label":"Permalink to “Azure OpenAI”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Azure OpenAI")])],-1),e("blockquote",null,[e("ul",null,[e("li",null,`If you encounter "I'm sorry, but I cannot assist" error, change content filter from DefaultV2 to Default.`),e("li",null,[a("Azure OpenAI is configured via "),e("code",null,"/connect"),a(", credentials are automatically stored.")])])],-1),e("hr",null,null,-1),e("h3",{id:"azure-cognitive-services",tabindex:"-1"},[a("Azure Cognitive Services "),e("a",{class:"header-anchor",href:"#azure-cognitive-services","aria-label":"Permalink to “Azure Cognitive Services”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`/connect  # Search Azure Cognitive Services

# Set resource name
export AZURE_COGNITIVE_SERVICES_RESOURCE_NAME=your-resource-name`)])],-1),e("hr",null,null,-1),e("h3",{id:"cloudflare-workers-ai",tabindex:"-1"},[a("Cloudflare Workers AI "),e("a",{class:"header-anchor",href:"#cloudflare-workers-ai","aria-label":"Permalink to “Cloudflare Workers AI”"},"​")],-1),e("p",null,"Cloudflare edge network, global low latency.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`/connect  # Search Cloudflare Workers AI

# Or set environment variables
export CLOUDFLARE_API_KEY=your-api-token
export CLOUDFLARE_ACCOUNT_ID=your-account-id`)])],-1),e("p",null,[e("strong",null,"Get API Token"),a(": "),e("a",{href:"https://dash.cloudflare.com",target:"_blank",rel:"noreferrer"},"dash.cloudflare.com"),a(" → My Profile → API Tokens")],-1),e("hr",null,null,-1),e("h3",{id:"gitlab",tabindex:"-1"},[a("GitLab "),e("a",{class:"header-anchor",href:"#gitlab","aria-label":"Permalink to “GitLab”"},"​")],-1),e("p",null,"GitLab Duo Chat, deeply integrated with GitLab.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`/connect  # Search GitLab

# For enterprise instances
export GITLAB_INSTANCE_URL=https://gitlab.company.com`)])],-1),o('<p><strong>Get Token</strong>: <a href="https://gitlab.com" target="_blank" rel="noreferrer">gitlab.com</a> → Settings → Access Tokens</p><blockquote><p>Token format: <code>glpat-...</code></p></blockquote><hr><h2 id="aggregation-platforms" tabindex="-1">Aggregation Platforms <a class="header-anchor" href="#aggregation-platforms" aria-label="Permalink to “Aggregation Platforms”">​</a></h2><h3 id="openrouter" tabindex="-1">OpenRouter <a class="header-anchor" href="#openrouter" aria-label="Permalink to “OpenRouter”">​</a></h3><p>Access 100+ models with one API Key.</p>',6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search OpenRouter")])],-1),e("p",null,[e("strong",null,"Custom Models"),a(":")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openrouter": {
      "models": {
        "moonshotai/kimi-k2": {
          "options": {
            "provider": {
              "order": ["baseten"],
              "allow_fallbacks": false
            }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://openrouter.ai",target:"_blank",rel:"noreferrer"},"openrouter.ai")],-1),e("hr",null,null,-1),e("h3",{id:"groq",tabindex:"-1"},[a("Groq "),e("a",{class:"header-anchor",href:"#groq","aria-label":"Permalink to “Groq”"},"​")],-1),e("p",null,"Ultra-fast inference.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Groq")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://console.groq.com",target:"_blank",rel:"noreferrer"},"console.groq.com")],-1),e("hr",null,null,-1),e("h3",{id:"cerebras",tabindex:"-1"},[a("Cerebras "),e("a",{class:"header-anchor",href:"#cerebras","aria-label":"Permalink to “Cerebras”"},"​")],-1),e("p",null,"Ultra-fast inference, supports Qwen3 Coder 480B.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Cerebras")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://inference.cerebras.ai",target:"_blank",rel:"noreferrer"},"inference.cerebras.ai")],-1),e("hr",null,null,-1),e("h3",{id:"fireworks-ai",tabindex:"-1"},[a("Fireworks AI "),e("a",{class:"header-anchor",href:"#fireworks-ai","aria-label":"Permalink to “Fireworks AI”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Fireworks AI")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://app.fireworks.ai",target:"_blank",rel:"noreferrer"},"app.fireworks.ai")],-1),e("hr",null,null,-1),e("h3",{id:"deep-infra",tabindex:"-1"},[a("Deep Infra "),e("a",{class:"header-anchor",href:"#deep-infra","aria-label":"Permalink to “Deep Infra”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Deep Infra")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://deepinfra.com/dash",target:"_blank",rel:"noreferrer"},"deepinfra.com/dash")],-1),e("hr",null,null,-1),e("h3",{id:"together-ai",tabindex:"-1"},[a("Together AI "),e("a",{class:"header-anchor",href:"#together-ai","aria-label":"Permalink to “Together AI”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Together AI")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://api.together.ai",target:"_blank",rel:"noreferrer"},"api.together.ai")],-1),e("hr",null,null,-1),e("h3",{id:"hugging-face",tabindex:"-1"},[a("Hugging Face "),e("a",{class:"header-anchor",href:"#hugging-face","aria-label":"Permalink to “Hugging Face”"},"​")],-1),e("p",null,"Access open-source models from 17+ providers.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Hugging Face")])],-1),e("p",null,[e("strong",null,"Get Token"),a(": "),e("a",{href:"https://huggingface.co/settings/tokens/new?ownUserPermissions=inference.serverless.write&tokenType=fineGrained",target:"_blank",rel:"noreferrer"},"huggingface.co/settings/tokens")],-1),e("hr",null,null,-1),e("h3",{id:"baseten",tabindex:"-1"},[a("Baseten "),e("a",{class:"header-anchor",href:"#baseten","aria-label":"Permalink to “Baseten”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Baseten")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://app.baseten.co",target:"_blank",rel:"noreferrer"},"app.baseten.co")],-1),e("hr",null,null,-1),e("h3",{id:"cortecs",tabindex:"-1"},[a("Cortecs "),e("a",{class:"header-anchor",href:"#cortecs","aria-label":"Permalink to “Cortecs”"},"​")],-1),e("p",null,"Supports Kimi K2 Instruct.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Cortecs")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://cortecs.ai",target:"_blank",rel:"noreferrer"},"cortecs.ai")],-1),e("hr",null,null,-1),e("h3",{id:"nebius-token-factory",tabindex:"-1"},[a("Nebius Token Factory "),e("a",{class:"header-anchor",href:"#nebius-token-factory","aria-label":"Permalink to “Nebius Token Factory”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Nebius Token Factory")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://tokenfactory.nebius.com",target:"_blank",rel:"noreferrer"},"tokenfactory.nebius.com")],-1),e("hr",null,null,-1),e("h3",{id:"io-net",tabindex:"-1"},[a("IO.NET "),e("a",{class:"header-anchor",href:"#io-net","aria-label":"Permalink to “IO.NET”"},"​")],-1),e("p",null,"Provides 17+ models.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search IO.NET")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://ai.io.net",target:"_blank",rel:"noreferrer"},"ai.io.net")],-1),e("hr",null,null,-1),e("h3",{id:"venice-ai",tabindex:"-1"},[a("Venice AI "),e("a",{class:"header-anchor",href:"#venice-ai","aria-label":"Permalink to “Venice AI”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Venice AI")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://venice.ai",target:"_blank",rel:"noreferrer"},"venice.ai")],-1),e("hr",null,null,-1),e("h3",{id:"ovhcloud-ai-endpoints",tabindex:"-1"},[a("OVHcloud AI Endpoints "),e("a",{class:"header-anchor",href:"#ovhcloud-ai-endpoints","aria-label":"Permalink to “OVHcloud AI Endpoints”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search OVHcloud AI Endpoints")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://ovh.com/manager",target:"_blank",rel:"noreferrer"},"ovh.com/manager"),a(" → Public Cloud → AI & Machine Learning → AI Endpoints")],-1),e("hr",null,null,-1),e("h3",{id:"sap-ai-core",tabindex:"-1"},[a("SAP AI Core "),e("a",{class:"header-anchor",href:"#sap-ai-core","aria-label":"Permalink to “SAP AI Core”"},"​")],-1),e("p",null,"Access 40+ models (OpenAI, Anthropic, Google, Amazon, Meta, etc.).",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search SAP AI Core")])],-1),o('<p>Requires Service Key JSON (containing <code>clientid</code>, <code>clientsecret</code>, <code>url</code>, <code>serviceurls.AI_API_URL</code>).</p><hr><h3 id="cloudflare-ai-gateway" tabindex="-1">Cloudflare AI Gateway <a class="header-anchor" href="#cloudflare-ai-gateway" aria-label="Permalink to “Cloudflare AI Gateway”">​</a></h3><p>Unified access to multiple providers via Cloudflare, with unified billing.</p>',4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Set environment variables
export CLOUDFLARE_ACCOUNT_ID=your-account-id
export CLOUDFLARE_GATEWAY_ID=your-gateway-id

/connect  # Search Cloudflare AI Gateway`)])],-1),e("hr",null,null,-1),e("h3",{id:"vercel-ai-gateway",tabindex:"-1"},[a("Vercel AI Gateway "),e("a",{class:"header-anchor",href:"#vercel-ai-gateway","aria-label":"Permalink to “Vercel AI Gateway”"},"​")],-1),e("p",null,"Unified access to multiple providers via Vercel, at-cost pricing with no markup.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Vercel AI Gateway")])],-1),e("p",null,[e("strong",null,"Configure Routing Order"),a(":")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "vercel": {
      "models": {
        "anthropic/claude-sonnet-4": {
          "options": {
            "order": ["anthropic", "vertex"]
          }
        }
      }
    }
  }
}`)])],-1),e("hr",null,null,-1),e("h3",{id:"helicone",tabindex:"-1"},[a("Helicone "),e("a",{class:"header-anchor",href:"#helicone","aria-label":"Permalink to “Helicone”"},"​")],-1),e("p",null,"LLM observability platform, provides logging, monitoring and analytics.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Helicone")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://helicone.ai",target:"_blank",rel:"noreferrer"},"helicone.ai")],-1),e("p",null,[e("strong",null,"Custom Headers"),a(":")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "helicone": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Helicone",
      "options": {
        "baseURL": "https://ai-gateway.helicone.ai",
        "headers": {
          "Helicone-Cache-Enabled": "true",
          "Helicone-User-Id": "opencode"
        }
      }
    }
  }
}`)])],-1),e("hr",null,null,-1),e("h3",{id:"zenmux",tabindex:"-1"},[a("ZenMux "),e("a",{class:"header-anchor",href:"#zenmux","aria-label":"Permalink to “ZenMux”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search ZenMux")])],-1),e("p",null,[e("strong",null,"Get API Key"),a(": "),e("a",{href:"https://zenmux.ai/settings/keys",target:"_blank",rel:"noreferrer"},"zenmux.ai/settings/keys")],-1),e("hr",null,null,-1),e("h3",{id:"ollama-cloud",tabindex:"-1"},[a("Ollama Cloud "),e("a",{class:"header-anchor",href:"#ollama-cloud","aria-label":"Permalink to “Ollama Cloud”"},"​")],-1),e("p",null,"Cloud-based Ollama service.",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"/connect  # Search Ollama Cloud")])],-1),o('<blockquote><p>Pull model info locally first: <code>ollama pull gpt-oss:20b-cloud</code></p></blockquote><p><strong>Get API Key</strong>: <a href="https://ollama.com" target="_blank" rel="noreferrer">ollama.com</a> → Settings → Keys</p><hr><h2 id="local-models" tabindex="-1">Local Models <a class="header-anchor" href="#local-models" aria-label="Permalink to “Local Models”">​</a></h2><h3 id="ollama" tabindex="-1">Ollama <a class="header-anchor" href="#ollama" aria-label="Permalink to “Ollama”">​</a></h3>',5),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "ollama": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama (local)",
      "options": {
        "baseURL": "http://localhost:11434/v1"
      },
      "models": {
        "llama3.1": {
          "name": "Llama 3.1"
        }
      }
    }
  }
}`)])],-1),e("blockquote",null,[e("p",null,[a("If tool calling doesn't work, try increasing Ollama's "),e("code",null,"num_ctx"),a(", recommended 16k-32k.")])],-1),e("p",null,[e("strong",null,"Install"),a(": "),e("a",{href:"https://ollama.ai",target:"_blank",rel:"noreferrer"},"ollama.ai")],-1),e("hr",null,null,-1),e("h3",{id:"lm-studio",tabindex:"-1"},[a("LM Studio "),e("a",{class:"header-anchor",href:"#lm-studio","aria-label":"Permalink to “LM Studio”"},"​")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "lmstudio": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "LM Studio (local)",
      "options": {
        "baseURL": "http://127.0.0.1:1234/v1"
      },
      "models": {
        "google/gemma-3n-e4b": {
          "name": "Gemma 3n-e4b (local)"
        }
      }
    }
  }
}`)])],-1),e("p",null,[e("strong",null,"Install"),a(": "),e("a",{href:"https://lmstudio.ai",target:"_blank",rel:"noreferrer"},"lmstudio.ai")],-1),e("hr",null,null,-1),e("h3",{id:"llama-cpp",tabindex:"-1"},[a("llama.cpp "),e("a",{class:"header-anchor",href:"#llama-cpp","aria-label":"Permalink to “llama.cpp”"},"​")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "llama.cpp": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "llama-server (local)",
      "options": {
        "baseURL": "http://127.0.0.1:8080/v1"
      },
      "models": {
        "qwen3-coder:a3b": {
          "name": "Qwen3-Coder: a3b-30b (local)",
          "limit": {
            "context": 128000,
            "output": 65536
          }
        }
      }
    }
  }
}`)])],-1),e("hr",null,null,-1),e("h2",{id:"custom-providers",tabindex:"-1"},[a("Custom Providers "),e("a",{class:"header-anchor",href:"#custom-providers","aria-label":"Permalink to “Custom Providers”"},"​")],-1),e("p",null,"Add any OpenAI-compatible provider:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. Run /connect, select Other
/connect

# 2. Enter provider ID (e.g., myprovider)

# 3. Enter API Key`)])],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "myprovider": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "My Provider",
      "options": {
        "baseURL": "https://api.myprovider.com/v1"
      },
      "models": {
        "my-model": {
          "name": "My Model",
          "limit": {
            "context": 200000,
            "output": 65536
          }
        }
      }
    }
  }
}`)])],-1),o('<p><strong>Configuration Options</strong>:</p><ul><li><code>npm</code> - AI SDK package name, use <code>@ai-sdk/openai-compatible</code> for OpenAI-compatible</li><li><code>name</code> - UI display name</li><li><code>options.baseURL</code> - API endpoint</li><li><code>options.apiKey</code> - API Key (optional, set when not using auth)</li><li><code>options.headers</code> - Custom request headers</li><li><code>models</code> - Available models list</li><li><code>limit.context</code> - Max input tokens</li><li><code>limit.output</code> - Max output tokens</li></ul><hr><h2 id="custom-base-url" tabindex="-1">Custom Base URL <a class="header-anchor" href="#custom-base-url" aria-label="Permalink to “Custom Base URL”">​</a></h2><p>Set custom endpoints for any provider (e.g., proxy services):</p>',5),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "options": {
        "baseURL": "https://my-proxy.com/v1"
      }
    }
  }
}`)])],-1),o('<hr><h2 id="model-selection-guide" tabindex="-1">Model Selection Guide <a class="header-anchor" href="#model-selection-guide" aria-label="Permalink to “Model Selection Guide”">​</a></h2><table tabindex="0"><thead><tr><th>Requirement</th><th>Recommendation</th><th>Reason</th></tr></thead><tbody><tr><td>Easiest to start</td><td>Claude Sonnet 4</td><td>Best coding, reliable</td></tr><tr><td>Best reasoning</td><td>Claude Opus 4</td><td>Industry leading</td></tr><tr><td>Best value</td><td>DeepSeek</td><td>Affordable, capable</td></tr><tr><td>Best coding</td><td>Claude Sonnet 4</td><td>Professional programming</td></tr><tr><td>Long documents</td><td>Gemini 1.5 Pro</td><td>Ultra-long context</td></tr><tr><td>Fully offline</td><td>Ollama + Llama3.1</td><td>Local runtime</td></tr><tr><td>Multi-model access</td><td>OpenRouter</td><td>One key for all</td></tr></tbody></table><hr><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to “Troubleshooting”">​</a></h2><ol><li><p><strong>Check Authentication</strong>: Run <code>opencode auth list</code> to view configured credentials</p></li><li><p><strong>Custom Provider Issues</strong>:</p><ul><li>Ensure provider ID in <code>/connect</code> matches config file</li><li>Use correct npm package (e.g., <code>@ai-sdk/openai-compatible</code>)</li><li>Check <code>options.baseURL</code> is correct</li></ul></li></ol><hr><h2 id="related-resources" tabindex="-1">Related Resources <a class="header-anchor" href="#related-resources" aria-label="Permalink to “Related Resources”">​</a></h2><ul><li><a href="/en/1-start/04-connect.html">Connect Models</a> - Configuration tutorial</li><li><a href="/en/appendix/config-ref.html">Config Reference</a> - Config file details</li></ul>',9)])])}const f=t(i,[["render",c]]);export{m as __pageData,f as default};
