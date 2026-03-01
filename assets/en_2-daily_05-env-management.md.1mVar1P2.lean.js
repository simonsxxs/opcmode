import{_ as n,c as s,o as i,a5 as t,j as e,a as o,ay as l}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"Managing Your AI Environment","description":"Learn to view available models, check token consumption statistics, and manage credentials. Be the master of your environment.","frontmatter":{"title":"Managing Your AI Environment","subtitle":"Take control of models, bills, and credentials","course":"OpenCode Practical Course","stage":"Phase 2","lesson":"2.5","duration":"10 min","practice":"5 min","level":"Beginner","description":"Learn to view available models, check token consumption statistics, and manage credentials. Be the master of your environment.","tags":["CLI","Statistics","Model Management","Billing"],"prerequisite":["1.4 Connect Models"]},"headers":[],"relativePath":"en/2-daily/05-env-management.md","filePath":"en/2-daily/05-env-management.md","lastUpdated":1772014034000}'),r={name:"en/2-daily/05-env-management.md"};function d(c,a,p,u,h,g){return i(),s("div",null,[...a[0]||(a[0]=[t("",12),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode models")])],-1),e("p",null,"You'll see a list like this:",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`opencode/glm-4.7-free
anthropic/claude-3-5-sonnet-20241022
google/gemini-2.0-flash
ollama/deepseek-r1:7b
zhipuai-coding-plan/glm-4.7
...`)])],-1),e("p",null,[o("Each line is a "),e("strong",null,"model ID"),o(" (format: "),e("code",null,"provider/model-name"),o("). You can copy this ID and specify it at startup:")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# For example, start with Zhipu GLM-4.7
opencode --model zhipuai-coding-plan/glm-4.7`)])],-1),e("h3",{id:"advanced-tip-1-filter-by-provider",tabindex:"-1"},[o("Advanced Tip 1: Filter by Provider "),e("a",{class:"header-anchor",href:"#advanced-tip-1-filter-by-provider","aria-label":"Permalink to “Advanced Tip 1: Filter by Provider”"},"​")],-1),e("p",null,"List too long? You can specify the provider name directly:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Only show Anthropic models
opencode models anthropic

# Only show DeepSeek models (if configured)
opencode models deepseek`)])],-1),e("p",null,"Much cleaner - only shows the models you care about.",-1),e("h3",{id:"advanced-tip-2-view-pricing",tabindex:"-1"},[o("Advanced Tip 2: View Pricing "),e("a",{class:"header-anchor",href:"#advanced-tip-2-view-pricing","aria-label":"Permalink to “Advanced Tip 2: View Pricing”"},"​")],-1),e("p",null,[o("Want to know the specific pricing for a model? Add the "),e("code",null,"--verbose"),o(" flag:")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode models --verbose")])],-1),e("p",null,[o("The output will include detailed metadata, including "),e("code",null,"inputCost"),o(" and "),e("code",null,"outputCost"),o(":")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`zhipuai-coding-plan/glm-4.7
{
  "id": "zhipuai-coding-plan/glm-4.7",
  "name": "GLM 4.7",
  "provider": "zhipuai-coding-plan",
  "inputCost": 0,    // $0!
  "outputCost": 0    // $0!
}`)])],-1),e("h3",{id:"advanced-tip-3-refresh-cache",tabindex:"-1"},[o("Advanced Tip 3: Refresh Cache "),e("a",{class:"header-anchor",href:"#advanced-tip-3-refresh-cache","aria-label":"Permalink to “Advanced Tip 3: Refresh Cache”"},"​")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"💡 Why don't I see the model after configuring the key?"),e("p",null,[o("OpenCode caches the model list. If you just added a new configuration in "),e("code",null,"opencode.json"),o(", or just got access to a new model (e.g., downloaded a new Ollama model), the list may not update immediately.")])],-1),e("p",null,[o("In this case, you need to "),e("strong",null,"force refresh"),o(":")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode models --refresh")])],-1),t("",4),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "model": "zhipuai-coding-plan/glm-4.7"
}`)])],-1),t("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode stats")])],-1),e("p",null,"You'll see a detailed dashboard. Here's real data after one month of use:",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`┌────────────────────────────────────────────────────────┐
│                       OVERVIEW                         │
├────────────────────────────────────────────────────────┤
│Sessions                                           948 │
│Messages                                        30,575 │
│Days                                                29 │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│                    COST & TOKENS                       │
├────────────────────────────────────────────────────────┤
│Total Cost                                    $1232.56 │
│Avg Cost/Day                                    $42.50 │
│Input                                           530.6M │
│Output                                            9.9M │
│Cache Read                                      703.0M │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│                      TOOL USAGE                        │
├────────────────────────────────────────────────────────┤
│ read               ████████████████████ 7270 (34.3%)   │
│ bash               ███████████          4074 (19.2%)   │
│ edit               ████████             3007 (14.2%)   │
└────────────────────────────────────────────────────────┘`)])],-1),t("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Only see statistics for current project
opencode stats --project ""`)])],-1),t("",12),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Show top 5 most expensive models
opencode stats --models 5

# Show detailed list of all models
opencode stats --models`)])],-1),e("p",null,"This will list the Top 5 detailed bills:",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`┌────────────────────────────────────────────────────────┐
│                      MODEL USAGE                       │
├────────────────────────────────────────────────────────┤
│ anthropic/claude-opus-4-5-20251101                     │
│  Messages                                       12,548 │
│  Input Tokens                                   241.0M │
│  Cost                                       $1232.5613 │
├────────────────────────────────────────────────────────┤
│ zhipuai-coding-plan/glm-4.7                            │
│  Messages                                        3,023 │
│  Input Tokens                                    68.9M │
│  Cost                                          $0.0000 │
├────────────────────────────────────────────────────────┤`)])],-1),t("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Only show statistics for the past 24 hours
opencode stats --days 1

# View the last 7 days
opencode stats --days 7`)])],-1),e("p",null,[e("strong",null,"🔥 Power Combo"),o(":")],-1),e("p",null,'Combine "time limit" and "model statistics" to precisely identify recent "big spenders":',-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# See who's spending money today (list model consumption for past 24 hours)
opencode stats --days 1 --models`)])],-1),e("hr",null,null,-1),e("h2",{id:"_3-check-credentials-manage-identity",tabindex:"-1"},[o("3. Check Credentials: Manage Identity "),e("a",{class:"header-anchor",href:"#_3-check-credentials-manage-identity","aria-label":"Permalink to “3. Check Credentials: Manage Identity”"},"​")],-1),e("p",null,"Over time, you may have tried many models and configured many keys. What credentials are stored in your OpenCode now?",-1),e("h3",{id:"view-credential-list",tabindex:"-1"},[o("View Credential List "),e("a",{class:"header-anchor",href:"#view-credential-list","aria-label":"Permalink to “View Credential List”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth list")])],-1),e("p",null,"You'll see a tree diagram like this:",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`Credentials ~/.local/share/opencode/auth.json
┌
●  Zhipu AI Coding Plan  api
│
●  Google  oauth
│
●  OpenAI  oauth
│
└  3 credentials`)])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth logout")])],-1),t("",21)])])}const b=n(r,[["render",d]]);export{y as __pageData,b as default};
