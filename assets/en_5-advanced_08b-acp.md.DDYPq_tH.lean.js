import{_ as r,I as i,c as d,o as l,a5 as n,j as e,J as s,a as o,ba as p}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.8b ACP Protocol","description":"Use OpenCode in Zed, JetBrains, Neovim, and other editors through the ACP protocol.","frontmatter":{"title":"5.8b ACP Protocol","subtitle":"Zed, JetBrains, Neovim, and other editor integrations","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.8b","duration":"15 minutes","practice":"20 minutes","level":"Advanced","description":"Use OpenCode in Zed, JetBrains, Neovim, and other editors through the ACP protocol.","tags":["ACP","Zed","JetBrains","Neovim"],"prerequisite":["5.8a VS Code Extension"]},"headers":[],"relativePath":"en/5-advanced/08b-acp.md","filePath":"en/5-advanced/08b-acp.md","lastUpdated":1772014034000}'),c={name:"en/5-advanced/08b-acp.md"};function u(h,t,m,g,b,C){const a=i("AdInArticle");return l(),d("div",null,[t[0]||(t[0]=n("",13)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Editor ←→ JSON-RPC (stdio) ←→ opencode acp")])],-1)),t[2]||(t[2]=e("p",null,[o("The editor starts "),e("code",null,"opencode acp"),o(" as a child process and communicates via stdin/stdout using nd-JSON (newline-delimited JSON) format for JSON-RPC communication.")],-1)),t[3]||(t[3]=e("hr",null,null,-1)),t[4]||(t[4]=e("h2",{id:"starting-the-acp-service",tabindex:"-1"},[o("Starting the ACP Service "),e("a",{class:"header-anchor",href:"#starting-the-acp-service","aria-label":"Permalink to “Starting the ACP Service”"},"​")],-1)),t[5]||(t[5]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode acp")])],-1)),t[6]||(t[6]=n("",6)),t[7]||(t[7]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent_servers": {
    "OpenCode": {
      "command": "opencode",
      "args": ["acp"]
    }
  }
}`)])],-1)),t[8]||(t[8]=e("h3",{id:"usage",tabindex:"-1"},[o("Usage "),e("a",{class:"header-anchor",href:"#usage","aria-label":"Permalink to “Usage”"},"​")],-1)),s(a),t[9]||(t[9]=e("ol",null,[e("li",null,"Open the command palette"),e("li",null,[o("Run "),e("code",null,"agent: new thread")])],-1)),t[10]||(t[10]=e("h3",{id:"bind-keyboard-shortcut-optional",tabindex:"-1"},[o("Bind Keyboard Shortcut (Optional) "),e("a",{class:"header-anchor",href:"#bind-keyboard-shortcut-optional","aria-label":"Permalink to “Bind Keyboard Shortcut (Optional)”"},"​")],-1)),t[11]||(t[11]=e("p",null,[o("Edit "),e("code",null,"keymap.json"),o(":")],-1)),t[12]||(t[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`[
  {
    "bindings": {
      "cmd-alt-o": [
        "agent::NewExternalAgentThread",
        {
          "agent": {
            "custom": {
              "name": "OpenCode",
              "command": {
                "command": "opencode",
                "args": ["acp"]
              }
            }
          }
        }
      ]
    }
  }
]`)])],-1)),t[13]||(t[13]=e("hr",null,null,-1)),t[14]||(t[14]=e("h2",{id:"jetbrains-ide-configuration",tabindex:"-1"},[o("JetBrains IDE Configuration "),e("a",{class:"header-anchor",href:"#jetbrains-ide-configuration","aria-label":"Permalink to “JetBrains IDE Configuration”"},"​")],-1)),t[15]||(t[15]=e("p",null,"Supports all JetBrains IDEs (IntelliJ IDEA, WebStorm, PyCharm, etc.).",-1)),t[16]||(t[16]=e("p",null,[o("Create "),e("code",null,"acp.json"),o(" according to "),e("a",{href:"https://www.jetbrains.com/help/ai-assistant/acp.html",target:"_blank",rel:"noreferrer"},"official documentation"),o(":")],-1)),t[17]||(t[17]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent_servers": {
    "OpenCode": {
      "command": "/absolute/path/bin/opencode",
      "args": ["acp"]
    }
  }
}`)])],-1)),t[18]||(t[18]=e("blockquote",null,[e("p",null,[e("strong",null,"Note"),o(": JetBrains requires the "),e("strong",null,"absolute path"),o(" to opencode.")])],-1)),t[19]||(t[19]=e("h3",{id:"finding-the-opencode-path",tabindex:"-1"},[o("Finding the opencode Path "),e("a",{class:"header-anchor",href:"#finding-the-opencode-path","aria-label":"Permalink to “Finding the opencode Path”"},"​")],-1)),t[20]||(t[20]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# macOS / Linux
which opencode

# Windows
where opencode`)])],-1)),t[21]||(t[21]=n("",6)),t[22]||(t[22]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`{
  acp_providers = {
    ["opencode"] = {
      command = "opencode",
      args = { "acp" }
    }
  }
}`)])],-1)),t[23]||(t[23]=e("p",null,"To pass environment variables:",-1)),t[24]||(t[24]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`{
  acp_providers = {
    ["opencode"] = {
      command = "opencode",
      args = { "acp" },
      env = {
        OPENCODE_API_KEY = os.getenv("OPENCODE_API_KEY")
      }
    }
  }
}`)])],-1)),t[25]||(t[25]=e("h3",{id:"codecompanion-nvim",tabindex:"-1"},[o("CodeCompanion.nvim "),e("a",{class:"header-anchor",href:"#codecompanion-nvim","aria-label":"Permalink to “CodeCompanion.nvim”"},"​")],-1)),t[26]||(t[26]=e("p",null,[o("Add to "),e("a",{href:"https://github.com/olimorris/codecompanion.nvim",target:"_blank",rel:"noreferrer"},"CodeCompanion.nvim"),o(" configuration:")],-1)),t[27]||(t[27]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`require("codecompanion").setup({
  strategies = {
    chat = {
      adapter = {
        name = "opencode",
        model = "claude-sonnet-4",
      },
    },
  },
})`)])],-1)),t[28]||(t[28]=n("",22))])}const P=r(c,[["render",u]]);export{v as __pageData,P as default};
