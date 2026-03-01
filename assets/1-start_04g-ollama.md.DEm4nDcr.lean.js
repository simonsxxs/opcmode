import{_ as t,c as d,o as c,a5 as e,j as l,a as o}from"./chunks/framework.Dtwt352Q.js";const u=JSON.parse('{"title":"连接 Ollama（本地模型）","description":"安装 Ollama、选择合适的本地模型，并在 OpenCode 中离线完成第一次对话。","frontmatter":{"title":"连接 Ollama（本地模型）","subtitle":"完全离线、完全免费","course":"OpenCode 中文实战课","stage":"第一阶段","lesson":"1.4g","duration":"30 分钟","practice":"10 分钟","level":"新手","description":"安装 Ollama、选择合适的本地模型，并在 OpenCode 中离线完成第一次对话。","tags":["模型","Ollama","本地","离线"],"prerequisite":["1.2 安装"]},"headers":[],"relativePath":"1-start/04g-ollama.md","filePath":"1-start/04g-ollama.md","lastUpdated":1772014034000}'),n={name:"1-start/04g-ollama.md"};function s(i,a,r,p,h,b){return c(),d("div",null,[...a[0]||(a[0]=[e("",28),l("div",{class:"vp-code-group"},[l("div",{class:"tabs"},[l("input",{type:"radio",name:"group-293",id:"tab-294",checked:""}),l("label",{"data-title":"macOS",for:"tab-294"},"macOS"),l("input",{type:"radio",name:"group-293",id:"tab-295"}),l("label",{"data-title":"Linux",for:"tab-295"},"Linux"),l("input",{type:"radio",name:"group-293",id:"tab-296"}),l("label",{"data-title":"Windows",for:"tab-296"},"Windows")]),l("div",{class:"blocks"},[l("div",{class:"language-bash active"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"brew install ollama")])]),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"curl -fsSL https://ollama.com/install.sh | sh")])]),l("div",{class:"language-powershell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"powershell"),l("pre",null,[l("code",{"v-pre":""},`# 从官网下载安装包
# https://ollama.com/download`)])])])],-1),l("p",null,"验证安装：",-1),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"ollama --version")])],-1),e("",12),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 编程优先（推荐）
ollama pull qwen2.5-coder:7b

# 通用对话
ollama pull llama3.1:8b

# 更轻量
ollama pull llama3.2:3b`)])],-1),l("p",null,[l("strong",null,"你应该看到"),o("：类似 "),l("code",null,"pulling manifest ... success"),o(" 的下载过程与成功提示。")],-1),l("h3",{id:"第-3-步-启动-ollama-服务",tabindex:"-1"},[o("第 3 步：启动 Ollama 服务 "),l("a",{class:"header-anchor",href:"#第-3-步-启动-ollama-服务","aria-label":"Permalink to “第 3 步：启动 Ollama 服务”"},"​")],-1),l("p",null,[l("strong",null,"为什么"),l("br"),o(" OpenCode 需要通过本地 HTTP 服务和 Ollama 通信。")],-1),l("p",null,"在终端运行：",-1),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"ollama serve")])],-1),e("",7),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"opencode debug paths")])],-1),l("p",null,[l("strong",null,"可直接复制的配置（本地 Ollama）"),o("：")],-1),l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "ollama": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama (local)",
      "options": {
        "baseURL": "http://localhost:11434/v1"
      },
      "models": {
        "qwen2.5-coder:7b": { "name": "Qwen2.5 Coder 7B (local)" },
        "llama3.1:8b": { "name": "Llama 3.1 8B (local)" },
        "llama3.2:3b": { "name": "Llama 3.2 3B (local)" }
      }
    }
  }
}`)])],-1),e("",5),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"opencode")])],-1),l("p",null,"输入：",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},"/models")])],-1),l("p",null,"选择你刚刚下载并写进配置的模型，然后发送：",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},"你好，请介绍一下你自己")])],-1),e("",37)])])}const g=t(n,[["render",s]]);export{u as __pageData,g as default};
