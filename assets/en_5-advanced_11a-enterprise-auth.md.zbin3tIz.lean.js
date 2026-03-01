import{_ as a,c as i,o as r,a5 as n,j as e,a as o,bg as l,bh as d,bi as c}from"./chunks/framework.Dtwt352Q.js";const b=JSON.parse('{"title":"5.11a Enterprise Authentication Integration","description":"Connect company unified authentication, inject tokens saved during login into OpenCode process environment variables, and distribute organization default configurations (short-term token renewal via plugins).","frontmatter":{"title":"5.11a Enterprise Authentication Integration","subtitle":"Connecting your unified authentication and organization default settings","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.11a","duration":"30 minutes","practice":"35 minutes","level":"Advanced","description":"Connect company unified authentication, inject tokens saved during login into OpenCode process environment variables, and distribute organization default configurations (short-term token renewal via plugins).","tags":["Enterprise","Authentication","Configuration","Plugin"],"prerequisite":["5.1 Configuration Deep Dive","5.11 Enterprise Features"]},"headers":[],"relativePath":"en/5-advanced/11a-enterprise-auth.md","filePath":"en/5-advanced/11a-enterprise-auth.md","lastUpdated":1772014034000}'),s={name:"en/5-advanced/11a-enterprise-auth.md"};function u(p,t,h,g,m,f){return r(),i("div",null,[...t[0]||(t[0]=[n("",39),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "corp-gateway": {
      "name": "Company AI Gateway",
      "env": ["COMPANY_AI_TOKEN"],
      "api": "https://ai-gateway.company.internal/v1",
      "npm": "@ai-sdk/openai-compatible",
      "models": {
        "qwen2.5-72b": {
          "name": "Qwen 2.5 72B",
          "tool_call": true,
          "reasoning": true,
          "temperature": true,
          "limit": { "context": 128000, "output": 8192 }
        }
      }
    }
  },
  "model": "corp-gateway/qwen2.5-72b"
}`)])],-1),e("ol",{start:"2"},[e("li",null,"Inject environment variable before running and verify:")],-1),e("div",{class:"vp-code-group"},[e("div",{class:"tabs"},[e("input",{type:"radio",name:"group-346",id:"tab-347",checked:""}),e("label",{"data-title":"macOS/Linux",for:"tab-347"},"macOS/Linux"),e("input",{type:"radio",name:"group-346",id:"tab-348"}),e("label",{"data-title":"Windows PowerShell",for:"tab-348"},"Windows PowerShell")]),e("div",{class:"blocks"},[e("div",{class:"language-bash active"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export COMPANY_AI_TOKEN="<your-token>"
opencode run -m corp-gateway/qwen2.5-72b "ping"`)])]),e("div",{class:"language-powershell"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",null,[e("code",{"v-pre":""},`$env:COMPANY_AI_TOKEN = "<your-token>"
opencode run -m corp-gateway/qwen2.5-72b "ping"`)])])])],-1),n("",9),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "auth": {
    "command": ["corpctl", "ai", "token", "--format=plain"],
    "env": "COMPANY_AI_TOKEN"
  },
  "config": {
    "$schema": "https://opencode.ai/config.json",

    // Optional: Force disable external Providers (example)
    "disabled_providers": ["openai", "anthropic", "openrouter"],

    // Configure company internal AI Gateway (OpenAI Compatible)
    "provider": {
      "corp-gateway": {
        "name": "Company AI Gateway",
        "env": ["COMPANY_AI_TOKEN"],
        "api": "https://ai-gateway.company.internal/v1",
        "npm": "@ai-sdk/openai-compatible",
        "models": {
          "qwen2.5-72b": {
            "name": "Qwen 2.5 72B",
            "tool_call": true,
            "reasoning": true,
            "temperature": true,
            "limit": { "context": 128000, "output": 8192 }
          }
        }
      }
    },

    // Make team use internal model by default
    "model": "corp-gateway/qwen2.5-72b"
  }
}`)])],-1),n("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login https://ai.company.internal")])],-1),n("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth list")])],-1),n("",3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'opencode run -m corp-gateway/qwen2.5-72b "Explain the key points of this text in 3 sentences: ..."')])],-1),n("",5),e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`import type { Plugin } from "@opencode-ai/plugin"

const plugin: Plugin = async () => {
  return {
    auth: {
      // Must match your configured provider id
      provider: "corp-gateway",
      methods: [
        {
          type: "api",
          label: "Login with Company SSO",
          async authorize() {
            // Replace with your token retrieval logic: CLI/HTTP/local cache, etc.
            const token = "<replace-me>"
            return { type: "success", key: token }
          },
        },
      ],
      async loader(getAuth) {
        const auth = await getAuth()
        if (!auth || auth.type !== "api") return {}
        return {
          apiKey: auth.key,
          // headers: { "X-Tenant": "..." },
        }
      },
    },

    // To really modify headers/params/signing, these hooks are more direct
    // "chat.headers": async (_input, output) => { output.headers["X-Sign"] = "..." },
    // "chat.params": async (_input, output) => { output.options["seed"] = 1 },
  }
}

export default plugin`)])],-1),e("h4",{id:"_4-2-let-opencode-load-your-plugin",tabindex:"-1"},[o("4.2 Let OpenCode Load Your Plugin "),e("a",{class:"header-anchor",href:"#_4-2-let-opencode-load-your-plugin","aria-label":"Permalink to “4.2 Let OpenCode Load Your Plugin”"},"​")],-1),e("p",null,[e("strong",null,"Recommended"),o(": After placing the plugin file in "),e("code",null,".opencode/plugin/"),o(" directory, OpenCode will automatically scan and load it (no need to write "),e("code",null,"opencode.json"),o(").")],-1),e("details",{class:"details custom-block"},[e("summary",null,"📦 I Really Want to Put It in opencode.json"),e("p",null,[o("You can write a relative path, and OpenCode will resolve it to an importable "),e("code",null,"file://..."),o(" URL when loading config:")]),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "plugin": ["./.opencode/plugin/corp-auth.ts"]
}`)])])],-1),e("h4",{id:"_4-3-use-opencode-auth-login-for-plugin-login",tabindex:"-1"},[o("4.3 Use "),e("code",null,"opencode auth login"),o(" for Plugin Login "),e("a",{class:"header-anchor",href:"#_4-3-use-opencode-auth-login-for-plugin-login","aria-label":"Permalink to “4.3 Use opencode auth login for Plugin Login”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login")])],-1),n("",18)])])}const w=a(s,[["render",u]]);export{b as __pageData,w as default};
