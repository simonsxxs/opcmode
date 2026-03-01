import{_ as o,c as i,o as l,a5 as n,j as e,a}from"./chunks/framework.Dtwt352Q.js";const M=JSON.parse('{"title":"Connect MiniMax (M2.5/M2.1)","description":"Get MiniMax API Key and connect M2.5, M2.1 models in OpenCode.","frontmatter":{"title":"Connect MiniMax (M2.5/M2.1)","subtitle":"9.9 CNY Starter Monthly Plan Available","course":"OpenCode Chinese Practical Course","stage":"Phase 1","lesson":"1.4d","duration":"15 minutes","practice":"5 minutes","level":"Beginner","description":"Get MiniMax API Key and connect M2.5, M2.1 models in OpenCode.","tags":["Model","MiniMax","API Key"],"prerequisite":["1.2 Installation"]},"headers":[],"relativePath":"en/1-start/04d-minimax.md","filePath":"en/1-start/04d-minimax.md","lastUpdated":1772014034000}'),r={name:"en/1-start/04d-minimax.md"};function s(c,t,d,p,h,u){return l(),i("div",null,[...t[0]||(t[0]=[n("",20),e("ol",null,[e("li",null,[a("Start OpenCode:"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])])]),e("li",null,[a("Enter:"),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/connect")])])]),e("li",null,[a("Search and select "),e("code",null,"MiniMax"),a(", then paste your API Key")])],-1),n("",7),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "minimax": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://api.minimax.io/anthropic/v1"
      },
      "models": {
        "MiniMax-M2.5": {
          "name": "MiniMax-M2.5"
        },
        "MiniMax-M2.1": {
          "name": "MiniMax-M2.1"
        }
      }
    }
  }
}`)])],-1),e("blockquote",null,[e("p",null,[a("💡 China users can change "),e("code",null,"baseURL"),a(" to "),e("code",null,"https://api.minimaxi.com/anthropic/v1")])],-1),e("ol",{start:"2"},[e("li",null,"Run the login command to add your Key:")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login")])],-1),e("p",null,[a("In the interactive interface: select "),e("code",null,"Other"),a(" → enter provider ID: "),e("code",null,"minimax"),a(" → paste your API Key.")],-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"Environment Variable Conflict"),e("p",null,[a("If you have previously set "),e("code",null,"ANTHROPIC_AUTH_TOKEN"),a(" or "),e("code",null,"ANTHROPIC_BASE_URL"),a(", it may affect Anthropic-compatible providers (including MiniMax).")]),e("p",null,"You can clear them first:"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`unset ANTHROPIC_AUTH_TOKEN
unset ANTHROPIC_BASE_URL`)])])],-1),e("hr",null,null,-1),e("h3",{id:"step-3-select-model-and-verify",tabindex:"-1"},[a("Step 3: Select Model and Verify "),e("a",{class:"header-anchor",href:"#step-3-select-model-and-verify","aria-label":"Permalink to “Step 3: Select Model and Verify”"},"​")],-1),e("p",null,"Enter:",-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/models")])],-1),e("p",null,[a("Select "),e("code",null,"MiniMax-M2.5"),a(" or "),e("code",null,"MiniMax-M2.1"),a(" (or other models in your configuration/list), then send a test message:")],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Hello, please introduce yourself")])],-1),n("",9)])])}const b=o(r,[["render",s]]);export{M as __pageData,b as default};
