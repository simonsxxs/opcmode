import{_ as a,c as r,o as i,a5 as n,j as e,a as t}from"./chunks/framework.Dtwt352Q.js";const m=JSON.parse('{"title":"5.21 Thinking Depth Configuration","description":"Learn to set thinking budget for individual models via opencode.json, and use Ctrl+T shortcut to switch between different depths.","frontmatter":{"title":"5.21 Thinking Depth Configuration","subtitle":"Set thinking budget for individual models","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.21","duration":"18 min","practice":"12 min","level":"Advanced","description":"Learn to set thinking budget for individual models via opencode.json, and use Ctrl+T shortcut to switch between different depths.","tags":["Configuration","Model","Thinking","Shortcut"],"prerequisite":["5.1 Configuration Complete Guide"]},"headers":[],"relativePath":"en/5-advanced/21-thinking-depth.md","filePath":"en/5-advanced/21-thinking-depth.md","lastUpdated":1772014034000}'),d={name:"en/5-advanced/21-thinking-depth.md"};function s(l,o,c,h,p,u){return i(),r("div",null,[...o[0]||(o[0]=[n("",28),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),e("p",null,[e("strong",null,"Gemini 3 Example"),t(" (thinkingConfig.thinkingBudget)")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),n("",5),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"(none) → high → max → (none) → high → ...")])],-1),n("",5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "fast": { "thinking": { "type": "enabled", "budgetTokens": 8000 } },
            "deep": { "thinking": { "type": "enabled", "budgetTokens": 32000 } }
          }
        }
      }
    }
  }
}`)])],-1),e("p",null,[e("strong",null,"You Should See"),t(),e("kbd",null,"Ctrl"),t("+"),e("kbd",null,"T"),t(' switches between "fast/deep".')],-1),e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},'ℹ️ Custom Variants Are "Added", Not "Replaced"'),e("p",null,[t("OpenCode "),e("strong",null,"merges"),t(" the variants you write in "),e("code",null,"opencode.json"),t(" with default variants. If you only want custom variants, explicitly disable the default "),e("code",null,"high"),t("/"),e("code",null,"max"),t(":")]),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "models": {
        "claude-sonnet-4-5": {
          "variants": {
            "high": { "disabled": true },
            "max": { "disabled": true },
            "fast": { "thinking": { "type": "enabled", "budgetTokens": 8000 } },
            "deep": { "thinking": { "type": "enabled", "budgetTokens": 32000 } }
          }
        }
      }
    }
  }
}`)])])],-1),e("p",null,[e("strong",null,"How to Configure Third-Party Relays")],-1),e("p",null,[t("If your relay uses "),e("code",null,"openai-compatible"),t(", it defaults to "),e("code",null,"reasoningEffort"),t(". Example:")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),e("p",null,[t("If your relay actually forwards to Anthropic (still using "),e("code",null,"openai-compatible"),t(" SDK), you can directly override with Anthropic fields:")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),n("",17)])])}const b=a(d,[["render",s]]);export{m as __pageData,b as default};
