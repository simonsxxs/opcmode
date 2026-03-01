import{_ as t,c as a,o as c,a5 as n,j as e,a as o,bg as l,bh as r,bi as p}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"5.11a 企业认证集成","description":"对接公司统一认证，把登录时保存的 token 注入到 OpenCode 进程环境变量，并下发组织默认配置（短期 token 用插件实现续期）。","frontmatter":{"title":"5.11a 企业认证集成","subtitle":"对接自有统一认证与组织默认配置","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.11a","duration":"30 分钟","practice":"35 分钟","level":"进阶","description":"对接公司统一认证，把登录时保存的 token 注入到 OpenCode 进程环境变量，并下发组织默认配置（短期 token 用插件实现续期）。","tags":["企业","认证","配置","插件"],"prerequisite":["5.1 配置全解","5.11 企业版功能"]},"headers":[],"relativePath":"5-advanced/11a-enterprise-auth.md","filePath":"5-advanced/11a-enterprise-auth.md","lastUpdated":1772014034000}'),i={name:"5-advanced/11a-enterprise-auth.md"};function s(h,d,u,g,k,m){return c(),a("div",null,[...d[0]||(d[0]=[n("",41),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
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
}`)])],-1),e("p",null,"2）运行前注入环境变量并验证：",-1),e("div",{class:"vp-code-group"},[e("div",{class:"tabs"},[e("input",{type:"radio",name:"group-314",id:"tab-315",checked:""}),e("label",{"data-title":"macOS/Linux",for:"tab-315"},"macOS/Linux"),e("input",{type:"radio",name:"group-314",id:"tab-316"}),e("label",{"data-title":"Windows PowerShell",for:"tab-316"},"Windows PowerShell")]),e("div",{class:"blocks"},[e("div",{class:"language-bash active"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export COMPANY_AI_TOKEN="<your-token>"
opencode run -m corp-gateway/qwen2.5-72b "ping"`)])]),e("div",{class:"language-powershell"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",null,[e("code",{"v-pre":""},`$env:COMPANY_AI_TOKEN = "<your-token>"
opencode run -m corp-gateway/qwen2.5-72b "ping"`)])])])],-1),n("",9),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "auth": {
    "command": ["corpctl", "ai", "token", "--format=plain"],
    "env": "COMPANY_AI_TOKEN"
  },
  "config": {
    "$schema": "https://opencode.ai/config.json",

    // 可选：强制禁用外网 Provider（示例）
    "disabled_providers": ["openai", "anthropic", "openrouter"],

    // 配置公司内部 AI 网关（OpenAI Compatible）
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

    // 让团队默认就用内网模型
    "model": "corp-gateway/qwen2.5-72b"
  }
}`)])],-1),n("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login https://ai.company.internal")])],-1),n("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth list")])],-1),n("",3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'opencode run -m corp-gateway/qwen2.5-72b "用 3 句话解释这段话的要点：……"')])],-1),n("",5),e("div",{class:"language-ts"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"ts"),e("pre",null,[e("code",{"v-pre":""},`import type { Plugin } from "@opencode-ai/plugin"

const plugin: Plugin = async () => {
  return {
    auth: {
      // 这里要和你配置的 provider id 一致
      provider: "corp-gateway",
      methods: [
        {
          type: "api",
          label: "Login with Company SSO",
          async authorize() {
            // 换成你们的取 token 逻辑：命令行/HTTP/本地缓存等
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

    // 真要改 headers/params/签名，走这些 hook 更直接
    // "chat.headers": async (_input, output) => { output.headers["X-Sign"] = "..." },
    // "chat.params": async (_input, output) => { output.options["seed"] = 1 },
  }
}

export default plugin`)])],-1),e("h4",{id:"_4-2-让-opencode-加载你的插件",tabindex:"-1"},[o("4.2 让 OpenCode 加载你的插件 "),e("a",{class:"header-anchor",href:"#_4-2-让-opencode-加载你的插件","aria-label":"Permalink to “4.2 让 OpenCode 加载你的插件”"},"​")],-1),e("p",null,[e("strong",null,"推荐做法"),o("：你把插件文件放到 "),e("code",null,".opencode/plugin/"),o(" 目录后，OpenCode 会自动扫描并加载（不需要额外写 "),e("code",null,"opencode.json"),o("）。")],-1),e("details",{class:"details custom-block"},[e("summary",null,"📦 我就是想写进 opencode.json"),e("p",null,[o("可以写相对路径，让 OpenCode 在加载配置时解析成可导入的 "),e("code",null,"file://..."),o(" URL：")]),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`// opencode.json
{
  "plugin": ["./.opencode/plugin/corp-auth.ts"]
}`)])])],-1),e("h4",{id:"_4-3-用-opencode-auth-login-走插件登录",tabindex:"-1"},[o("4.3 用 "),e("code",null,"opencode auth login"),o(" 走插件登录 "),e("a",{class:"header-anchor",href:"#_4-3-用-opencode-auth-login-走插件登录","aria-label":"Permalink to “4.3 用 opencode auth login 走插件登录”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login")])],-1),n("",18)])])}const w=t(i,[["render",s]]);export{_ as __pageData,w as default};
