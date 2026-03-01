import{_ as l,c as t,o as n,a5 as a,j as e,a as o,ar as c}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"第三方中转（Claude Code 兼容）","description":"使用第三方中转/网关连接 Anthropic 兼容接口，在 OpenCode 中使用 Claude 模型。","frontmatter":{"title":"第三方中转（Claude Code 兼容）","subtitle":"baseURL（.../v1）+ API Key（二选一）","course":"OpenCode 中文实战课","stage":"第一阶段","lesson":"1.4f","duration":"15 分钟","practice":"5 分钟","level":"新手","description":"使用第三方中转/网关连接 Anthropic 兼容接口，在 OpenCode 中使用 Claude 模型。","tags":["模型","Claude","Anthropic","中转","baseURL"],"prerequisite":["1.2 安装"]},"headers":[],"relativePath":"1-start/04f-claudecode-relay.md","filePath":"1-start/04f-claudecode-relay.md","lastUpdated":1772014034000}'),i={name:"1-start/04f-claudecode-relay.md"};function s(r,d,p,u,h,m){return n(),t("div",null,[...d[0]||(d[0]=[a("",20),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "claudecode-relay": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://url.com/v1"
      },
      "models": {
        "claude-opus-4-5-20251101": {
          "name": "中转站的 opus 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          },
          "modalities": {
            "input": ["text", "image"],
            "output": ["text"]
          },
          "options": {
            "thinking": {
              "type": "enabled",
              "budgetTokens": 16000
            }
          }
        }
      }
    }
  }
}`)])],-1),a("",7),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "models": {
        "claude-opus-4-5-20251101": {
          "modalities": {
            "input": ["text", "image"],
            "output": ["text"]
          },
          "options": {
            "thinking": {
              "type": "enabled",
              "budgetTokens": 16000
            }
          }
        }
      }
    }
  }
}`)])],-1),a("",7),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "options": {
        "baseURL": "https://url.com/v1",
        "apiKey": "你的API Key"
      }
    }
  }
}`)])],-1),e("p",null,"直接把中转商给你的 Key 粘贴进去就行。",-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"安全提示"),e("p",null,"这样 Key 会明文保存在配置文件里。如果出于安全考虑，建议用方式 B。")],-1),e("h4",{id:"方式-b-用环境变量-更安全",tabindex:"-1"},[o("方式 B：用环境变量（更安全） "),e("a",{class:"header-anchor",href:"#方式-b-用环境变量-更安全","aria-label":"Permalink to “方式 B：用环境变量（更安全）”"},"​")],-1),e("p",null,"如果你不想把 Key 明文写在配置文件里，可以用环境变量：",-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "options": {
        "baseURL": "https://url.com/v1",
        "apiKey": "{env:CLAUDECODE_RELAY_API_KEY}"
      }
    }
  }
}`)])],-1),e("p",null,[o("然后在你的 shell 配置文件（"),e("code",null,"~/.bashrc"),o(" 或 "),e("code",null,"~/.zshrc"),o("）里添加：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'export CLAUDECODE_RELAY_API_KEY="你的API Key"')])],-1),e("p",null,[o("保存后运行 "),e("code",null,"source ~/.bashrc"),o("（或重启终端）使环境变量生效。")],-1),e("h4",{id:"方案-2-把-key-存到-opencode-认证-auth-json",tabindex:"-1"},[o("方案 2：把 Key 存到 OpenCode 认证（"),e("code",null,"auth.json"),o("） "),e("a",{class:"header-anchor",href:"#方案-2-把-key-存到-opencode-认证-auth-json","aria-label":"Permalink to “方案 2：把 Key 存到 OpenCode 认证（auth.json）”"},"​")],-1),e("p",null,"运行：",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login")])],-1),e("p",null,"在交互界面里：",-1),e("ol",null,[e("li",null,[o("选择 "),e("code",null,"Other")]),e("li",null,[o("输入 provider ID："),e("code",null,"claudecode-relay")]),e("li",null,"粘贴你的 API Key")],-1),e("p",null,[o("它会把 Key 写入 OpenCode 的认证文件 "),e("code",null,"auth.json"),o("。你可以用下面命令查看“实际写到了哪个路径”（命令输出里会显示路径）：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth list")])],-1),a("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1),e("p",null,"输入：",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"/models")])],-1),e("p",null,[o("选择 "),e("code",null,"claudecode-relay/claude-opus-4-5-20251101"),o("，然后发送一句话验证：")],-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"你好，请简单介绍一下你自己")])],-1),a("",9),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "relay-a": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://relay-a.com/v1",
        "apiKey": "你的 A 中转商 Key"
      },
      "models": {
        "claude-opus-4-5-20251101": {
          "name": "A 中转的 opus 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          }
        }
      }
    },
    "relay-b": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://relay-b.com/v1",
        "apiKey": "你的 B 中转商 Key"
      },
      "models": {
        "claude-sonnet-4-5-20250514": {
          "name": "B 中转的 sonnet 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          }
        }
      }
    }
  }
}`)])],-1),a("",13)])])}const _=l(i,[["render",s]]);export{y as __pageData,_ as default};
