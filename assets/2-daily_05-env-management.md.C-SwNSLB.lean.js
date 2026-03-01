import{_ as l,c as n,o as s,a5 as t,j as e,a as o,ay as d}from"./chunks/framework.Dtwt352Q.js";const m=JSON.parse('{"title":"管理你的 AI 环境","description":"学会查看可用模型列表、检查 Token 消耗统计、管理身份凭证，做自己环境的主人。","frontmatter":{"title":"管理你的 AI 环境","subtitle":"掌控模型、账单与身份","course":"OpenCode 中文实战课","stage":"第二阶段","lesson":"2.5","duration":"10 分钟","practice":"5 分钟","level":"新手","description":"学会查看可用模型列表、检查 Token 消耗统计、管理身份凭证，做自己环境的主人。","tags":["命令行","统计","模型管理","账单"],"prerequisite":["1.4 连接模型"]},"headers":[],"relativePath":"2-daily/05-env-management.md","filePath":"2-daily/05-env-management.md","lastUpdated":1772014034000}'),c={name:"2-daily/05-env-management.md"};function r(i,a,p,u,g,h){return s(),n("div",null,[...a[0]||(a[0]=[t("",12),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode models")])],-1),e("p",null,"你会看到类似这样的列表：",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`opencode/glm-4.7-free
anthropic/claude-3-5-sonnet-20241022
google/gemini-2.0-flash
ollama/deepseek-r1:7b
zhipuai-coding-plan/glm-4.7
...`)])],-1),e("p",null,[o("每一行都是一个"),e("strong",null,"模型 ID"),o("（格式为 "),e("code",null,"提供商/模型名"),o("）。你可以直接复制这个 ID，在启动时指定：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 比如直接用智谱 GLM-4.7 启动
opencode --model zhipuai-coding-plan/glm-4.7`)])],-1),e("h3",{id:"进阶技巧-1-只看特定厂商",tabindex:"-1"},[o("进阶技巧 1：只看特定厂商 "),e("a",{class:"header-anchor",href:"#进阶技巧-1-只看特定厂商","aria-label":"Permalink to “进阶技巧 1：只看特定厂商”"},"​")],-1),e("p",null,"列表太长眼花缭乱？你可以直接指定厂商名字：",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 只看 Anthropic 的模型
opencode models anthropic

# 只看 DeepSeek 的模型（前提是你已配置）
opencode models deepseek`)])],-1),e("p",null,"这样就清爽多了，只显示你关心的模型。",-1),e("h3",{id:"进阶技巧-2-查看价格-查单价",tabindex:"-1"},[o("进阶技巧 2：查看价格（查单价） "),e("a",{class:"header-anchor",href:"#进阶技巧-2-查看价格-查单价","aria-label":"Permalink to “进阶技巧 2：查看价格（查单价）”"},"​")],-1),e("p",null,[o("想知道某个模型具体的定价？加上 "),e("code",null,"--verbose"),o(" 参数：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode models --verbose")])],-1),e("p",null,[o("输出会包含详细的元数据，包括 "),e("code",null,"inputCost"),o("（输入价格）和 "),e("code",null,"outputCost"),o("（输出价格）：")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`zhipuai-coding-plan/glm-4.7
{
  "id": "zhipuai-coding-plan/glm-4.7",
  "name": "GLM 4.7",
  "provider": "zhipuai-coding-plan",
  "inputCost": 0,    // 0元！
  "outputCost": 0    // 0元！
}`)])],-1),e("h3",{id:"进阶技巧-3-刷新缓存",tabindex:"-1"},[o("进阶技巧 3：刷新缓存 "),e("a",{class:"header-anchor",href:"#进阶技巧-3-刷新缓存","aria-label":"Permalink to “进阶技巧 3：刷新缓存”"},"​")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"💡 为什么我配了 Key 却没看到模型？"),e("p",null,[o("OpenCode 会缓存模型列表。如果你刚在 "),e("code",null,"opencode.json"),o(" 里加了新配置，或者刚申请了新模型的权限（例如刚下载了新的 Ollama 模型），列表可能没及时更新。")])],-1),e("p",null,[o("这时候，你需要"),e("strong",null,"强制刷新"),o("：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode models --refresh")])],-1),t("",4),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "model": "zhipuai-coding-plan/glm-4.7"
}`)])],-1),t("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode stats")])],-1),e("p",null,"你会看到一个详细的仪表盘。这是我使用了一个月后的真实数据：",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`┌────────────────────────────────────────────────────────┐
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
└────────────────────────────────────────────────────────┘`)])],-1),t("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 只看当前项目的统计
opencode stats --project ""`)])],-1),t("",12),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 显示消耗最高的 5 个模型
opencode stats --models 5

# 显示所有模型的详细列表
opencode stats --models`)])],-1),e("p",null,"这会列出 Top 5 的详细账单：",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`┌────────────────────────────────────────────────────────┐
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
├────────────────────────────────────────────────────────┤`)])],-1),t("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 只看过去 24 小时的统计
opencode stats --days 1

# 查看最近 7 天
opencode stats --days 7`)])],-1),e("p",null,[e("strong",null,"🔥 强力组合技"),o("：")],-1),e("p",null,'把“时间限制”和“模型统计”结合起来，就能精准定位近期的"花钱大户"：',-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 看看今天到底是谁在花钱（列出过去24小时的模型消耗）
opencode stats --days 1 --models`)])],-1),e("hr",null,null,-1),e("h2",{id:"_3-查户口-管理身份凭证",tabindex:"-1"},[o("3. 查户口：管理身份凭证 "),e("a",{class:"header-anchor",href:"#_3-查户口-管理身份凭证","aria-label":"Permalink to “3. 查户口：管理身份凭证”"},"​")],-1),e("p",null,"随着时间推移，你可能试过很多模型，配置了很多 Key。现在你的 OpenCode 里到底存了哪些凭证？",-1),e("h3",{id:"查看凭证列表",tabindex:"-1"},[o("查看凭证列表 "),e("a",{class:"header-anchor",href:"#查看凭证列表","aria-label":"Permalink to “查看凭证列表”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth list")])],-1),e("p",null,"你会看到类似这样的树状图：",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},`Credentials ~/.local/share/opencode/auth.json
┌
●  Zhipu AI Coding Plan  api
│
●  Google  oauth
│
●  OpenAI  oauth
│
└  3 credentials`)])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth logout")])],-1),t("",20)])])}const _=l(c,[["render",r]]);export{m as __pageData,_ as default};
