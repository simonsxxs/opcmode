import{_ as a,c as s,o as n,a5 as o,j as e,a as l}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"Connect Ollama (Local Models)","description":"Install Ollama, choose a suitable local model, and complete your first offline conversation in OpenCode.","frontmatter":{"title":"Connect Ollama (Local Models)","subtitle":"Fully offline, completely free","course":"OpenCode Practical Course","stage":"Stage 1","lesson":"1.4g","duration":"30 minutes","practice":"10 minutes","level":"Beginner","description":"Install Ollama, choose a suitable local model, and complete your first offline conversation in OpenCode.","tags":["Models","Ollama","Local","Offline"],"prerequisite":["1.2 Installation"]},"headers":[],"relativePath":"en/1-start/04g-ollama.md","filePath":"en/1-start/04g-ollama.md","lastUpdated":1772014034000}'),r={name:"en/1-start/04g-ollama.md"};function d(i,t,c,p,u,m){return n(),s("div",null,[...t[0]||(t[0]=[o("",28),e("div",{class:"vp-code-group"},[e("div",{class:"tabs"},[e("input",{type:"radio",name:"group-293",id:"tab-294",checked:""}),e("label",{"data-title":"macOS",for:"tab-294"},"macOS"),e("input",{type:"radio",name:"group-293",id:"tab-295"}),e("label",{"data-title":"Linux",for:"tab-295"},"Linux"),e("input",{type:"radio",name:"group-293",id:"tab-296"}),e("label",{"data-title":"Windows",for:"tab-296"},"Windows")]),e("div",{class:"blocks"},[e("div",{class:"language-bash active"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"brew install ollama")])]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"curl -fsSL https://ollama.com/install.sh | sh")])]),e("div",{class:"language-powershell"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"powershell"),e("pre",null,[e("code",{"v-pre":""},`# Download installer from official website
# https://ollama.com/download`)])])])],-1),e("p",null,"Verify installation:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"ollama --version")])],-1),o("",12),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Coding priority (recommended)
ollama pull qwen2.5-coder:7b

# General chat
ollama pull llama3.1:8b

# Lighter weight
ollama pull llama3.2:3b`)])],-1),e("p",null,[e("strong",null,"You should see"),l(": Download progress and success message like "),e("code",null,"pulling manifest ... success"),l(".")],-1),e("h3",{id:"step-3-start-ollama-service",tabindex:"-1"},[l("Step 3: Start Ollama Service "),e("a",{class:"header-anchor",href:"#step-3-start-ollama-service","aria-label":"Permalink to “Step 3: Start Ollama Service”"},"​")],-1),e("p",null,[e("strong",null,"Why"),e("br"),l(" OpenCode needs to communicate with Ollama through a local HTTP service.")],-1),e("p",null,"Run in terminal:",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"ollama serve")])],-1),o("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug paths")])],-1),e("p",null,[e("strong",null,"Copy-Paste Ready Config (Local Ollama)"),l(":")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1),o("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1),e("p",null,"Enter:",-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/models")])],-1),e("p",null,"Select the model you just downloaded and configured, then send:",-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Hello, please introduce yourself")])],-1),o("",37)])])}const y=a(r,[["render",d]]);export{g as __pageData,y as default};
