import{_ as a,c as r,o as d,a5 as o,j as e,a as t}from"./chunks/framework.Dtwt352Q.js";const u=JSON.parse('{"title":"5.21 思考深度配置","description":"学会用 opencode.json 为单个模型设定思考预算，并用 Ctrl+T 快捷键在不同深度间切换。","frontmatter":{"title":"5.21 思考深度配置","subtitle":"给大模型单独设定思考预算","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.21","duration":"18 分钟","practice":"12 分钟","level":"进阶","description":"学会用 opencode.json 为单个模型设定思考预算，并用 Ctrl+T 快捷键在不同深度间切换。","tags":["配置","模型","思考","快捷键"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/21-thinking-depth.md","filePath":"5-advanced/21-thinking-depth.md","lastUpdated":1772014034000}'),l={name:"5-advanced/21-thinking-depth.md"};function i(c,n,s,p,h,g){return d(),r("div",null,[...n[0]||(n[0]=[o("",28),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "high": {
              "thinking": { "type": "enabled", "budgetTokens": 20000 }
            },
            "max": {
              "thinking": { "type": "enabled", "budgetTokens": 32000 }
            }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[e("strong",null,"Gemini 3 示例"),t("（thinkingConfig.thinkingBudget）")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "google": {
      "models": {
        "gemini-3-flash": {
          "variants": {
            "high": {
              "thinkingConfig": { "includeThoughts": true, "thinkingBudget": 16000 }
            },
            "max": {
              "thinkingConfig": { "includeThoughts": true, "thinkingBudget": 24576 }
            }
          }
        }
      }
    }
  }
}`)])],-1),o("",5),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"(无) → high → max → (无) → high → ...")])],-1),o("",5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "极速": { "thinking": { "type": "enabled", "budgetTokens": 8000 } },
            "深度": { "thinking": { "type": "enabled", "budgetTokens": 32000 } }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[e("strong",null,"你应该看到"),t(),e("kbd",null,"Ctrl"),t("+"),e("kbd",null,"T"),t(" 在“极速/深度”之间切换。")],-1),e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"ℹ️ 自定义变体是“增加”，不是“替换”"),e("p",null,[t("OpenCode 会把你在 "),e("code",null,"opencode.json"),t(" 里写的变体"),e("strong",null,"合并"),t("到默认变体中。 如果你只想保留自定义的变体，把默认的 "),e("code",null,"high"),t("/"),e("code",null,"max"),t(" 显式禁用即可：")]),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "high": { "disabled": true },
            "max": { "disabled": true },
            "极速": { "thinking": { "type": "enabled", "budgetTokens": 8000 } },
            "深度": { "thinking": { "type": "enabled", "budgetTokens": 32000 } }
          }
        }
      }
    }
  }
}`)])])],-1),e("p",null,[e("strong",null,"第三方中转站怎么配")],-1),e("p",null,[t("如果你的中转站是 "),e("code",null,"openai-compatible"),t("，默认使用 "),e("code",null,"reasoningEffort"),t("。示例：")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "relay": {
      "options": {
        "baseURL": "https://your-relay.example.com/v1",
        "apiKey": "{env:RELAY_API_KEY}"
      },
      "models": {
        "gpt-5": {
          "variants": {
            "low": { "reasoningEffort": "low" },
            "high": { "reasoningEffort": "high" }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[t("如果中转站其实转发的是 Anthropic 接口（仍走 "),e("code",null,"openai-compatible"),t(" SDK），可以直接写 Anthropic 字段覆盖：")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "relay": {
      "options": {
        "baseURL": "https://your-relay.example.com/v1",
        "apiKey": "{env:RELAY_API_KEY}"
      },
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "high": {
              "thinking": { "type": "enabled", "budgetTokens": 20000 }
            },
            "max": {
              "thinking": { "type": "enabled", "budgetTokens": 32000 }
            }
          }
        }
      }
    }
  }
}`)])],-1),o("",17)])])}const m=a(l,[["render",i]]);export{u as __pageData,m as default};
