import{_ as n,c as l,o as i,a5 as t,j as e,a as o,ar as d}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"Third-Party Relay (Claude Code Compatible)","description":"Connect to Anthropic-compatible interfaces using third-party relays/gateways to use Claude models in OpenCode.","frontmatter":{"title":"Third-Party Relay (Claude Code Compatible)","subtitle":"baseURL (.../v1) + API Key (Choose One)","course":"OpenCode Practical Course","stage":"Stage 1","lesson":"1.4f","duration":"15 minutes","practice":"5 minutes","level":"Beginner","description":"Connect to Anthropic-compatible interfaces using third-party relays/gateways to use Claude models in OpenCode.","tags":["Model","Claude","Anthropic","Relay","baseURL"],"prerequisite":["1.2 Installation"]},"headers":[],"relativePath":"en/1-start/04f-claudecode-relay.md","filePath":"en/1-start/04f-claudecode-relay.md","lastUpdated":1772014034000}'),s={name:"en/1-start/04f-claudecode-relay.md"};function r(c,a,p,u,h,m){return i(),l("div",null,[...a[0]||(a[0]=[t("",20),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "claudecode-relay": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://url.com/v1"
      },
      "models": {
        "claude-opus-4-5-20251101": {
          "name": "Relay's opus 4.5",
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
}`)])],-1),t("",7),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),t("",7),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "options": {
        "baseURL": "https://url.com/v1",
        "apiKey": "your-api-key"
      }
    }
  }
}`)])],-1),e("p",null,"Just paste the key from the relay provider.",-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"Security Note"),e("p",null,"The key will be stored in plain text in the config file. If security is a concern, use Method B.")],-1),e("h5",{id:"method-b-use-environment-variable-more-secure",tabindex:"-1"},[o("Method B: Use Environment Variable (More Secure) "),e("a",{class:"header-anchor",href:"#method-b-use-environment-variable-more-secure","aria-label":"Permalink to “Method B: Use Environment Variable (More Secure)”"},"​")],-1),e("p",null,"If you don't want to store the key in plain text, use an environment variable:",-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "options": {
        "baseURL": "https://url.com/v1",
        "apiKey": "{env:CLAUDECODE_RELAY_API_KEY}"
      }
    }
  }
}`)])],-1),e("p",null,[o("Then add to your shell config file ("),e("code",null,"~/.bashrc"),o(" or "),e("code",null,"~/.zshrc"),o("):")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'export CLAUDECODE_RELAY_API_KEY="your-api-key"')])],-1),e("p",null,[o("After saving, run "),e("code",null,"source ~/.bashrc"),o(" (or restart terminal) for the environment variable to take effect.")],-1),e("h4",{id:"option-2-store-key-in-opencode-authentication-auth-json",tabindex:"-1"},[o("Option 2: Store Key in OpenCode Authentication ("),e("code",null,"auth.json"),o(") "),e("a",{class:"header-anchor",href:"#option-2-store-key-in-opencode-authentication-auth-json","aria-label":"Permalink to “Option 2: Store Key in OpenCode Authentication (auth.json)”"},"​")],-1),e("p",null,"Run:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login")])],-1),e("p",null,"In the interactive interface:",-1),e("ol",null,[e("li",null,[o("Select "),e("code",null,"Other")]),e("li",null,[o("Enter provider ID: "),e("code",null,"claudecode-relay")]),e("li",null,"Paste your API Key")],-1),e("p",null,[o("It will write the key to OpenCode's authentication file "),e("code",null,"auth.json"),o('. You can use the following command to see "where it was actually written" (the path will be shown in the output):')],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth list")])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1),e("p",null,"Enter:",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"/models")])],-1),e("p",null,[o("Select "),e("code",null,"claudecode-relay/claude-opus-4-5-20251101"),o(", then send a test message:")],-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"Hello, please briefly introduce yourself")])],-1),t("",9),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "relay-a": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://relay-a.com/v1",
        "apiKey": "your-relay-a-key"
      },
      "models": {
        "claude-opus-4-5-20251101": {
          "name": "Relay A's opus 4.5",
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
        "apiKey": "your-relay-b-key"
      },
      "models": {
        "claude-sonnet-4-5-20250514": {
          "name": "Relay B's sonnet 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          }
        }
      }
    }
  }
}`)])],-1),t("",13)])])}const b=n(s,[["render",r]]);export{g as __pageData,b as default};
