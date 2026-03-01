import{_ as d,I as l,c as r,o as i,a5 as t,j as e,J as s,a as n,ba as p}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.8b ACP 协议","description":"通过 ACP 协议在 Zed、JetBrains、Neovim 等编辑器中使用 OpenCode。","frontmatter":{"title":"5.8b ACP 协议","subtitle":"Zed、JetBrains、Neovim 等编辑器集成","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.8b","duration":"15 分钟","practice":"20 分钟","level":"进阶","description":"通过 ACP 协议在 Zed、JetBrains、Neovim 等编辑器中使用 OpenCode。","tags":["ACP","Zed","JetBrains","Neovim"],"prerequisite":["5.8a VS Code 扩展"]},"headers":[],"relativePath":"5-advanced/08b-acp.md","filePath":"5-advanced/08b-acp.md","lastUpdated":1772014034000}'),c={name:"5-advanced/08b-acp.md"};function h(b,a,m,u,C,v){const o=l("AdInArticle");return i(),r("div",null,[a[0]||(a[0]=t("",13)),a[1]||(a[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"编辑器 ←→ JSON-RPC (stdio) ←→ opencode acp")])],-1)),a[2]||(a[2]=e("p",null,[n("编辑器启动 "),e("code",null,"opencode acp"),n(" 作为子进程，通过 stdin/stdout 使用 nd-JSON（newline-delimited JSON）格式进行 JSON-RPC 通信。")],-1)),a[3]||(a[3]=e("hr",null,null,-1)),a[4]||(a[4]=e("h2",{id:"启动-acp-服务",tabindex:"-1"},[n("启动 ACP 服务 "),e("a",{class:"header-anchor",href:"#启动-acp-服务","aria-label":"Permalink to “启动 ACP 服务”"},"​")],-1)),a[5]||(a[5]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode acp")])],-1)),a[6]||(a[6]=t("",6)),a[7]||(a[7]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent_servers": {
    "OpenCode": {
      "command": "opencode",
      "args": ["acp"]
    }
  }
}`)])],-1)),a[8]||(a[8]=e("h3",{id:"使用方式",tabindex:"-1"},[n("使用方式 "),e("a",{class:"header-anchor",href:"#使用方式","aria-label":"Permalink to “使用方式”"},"​")],-1)),s(o),a[9]||(a[9]=e("ol",null,[e("li",null,"打开命令面板"),e("li",null,[n("执行 "),e("code",null,"agent: new thread")])],-1)),a[10]||(a[10]=e("h3",{id:"绑定快捷键-可选",tabindex:"-1"},[n("绑定快捷键（可选） "),e("a",{class:"header-anchor",href:"#绑定快捷键-可选","aria-label":"Permalink to “绑定快捷键（可选）”"},"​")],-1)),a[11]||(a[11]=e("p",null,[n("编辑 "),e("code",null,"keymap.json"),n("：")],-1)),a[12]||(a[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`[
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
]`)])],-1)),a[13]||(a[13]=e("hr",null,null,-1)),a[14]||(a[14]=e("h2",{id:"jetbrains-ide-配置",tabindex:"-1"},[n("JetBrains IDE 配置 "),e("a",{class:"header-anchor",href:"#jetbrains-ide-配置","aria-label":"Permalink to “JetBrains IDE 配置”"},"​")],-1)),a[15]||(a[15]=e("p",null,"支持所有 JetBrains IDE（IntelliJ IDEA、WebStorm、PyCharm 等）。",-1)),a[16]||(a[16]=e("p",null,[n("根据 "),e("a",{href:"https://www.jetbrains.com/help/ai-assistant/acp.html",target:"_blank",rel:"noreferrer"},"官方文档"),n(" 创建 "),e("code",null,"acp.json"),n("：")],-1)),a[17]||(a[17]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent_servers": {
    "OpenCode": {
      "command": "/absolute/path/bin/opencode",
      "args": ["acp"]
    }
  }
}`)])],-1)),a[18]||(a[18]=e("blockquote",null,[e("p",null,[e("strong",null,"注意"),n("：JetBrains 需要使用 opencode 的"),e("strong",null,"绝对路径"),n("。")])],-1)),a[19]||(a[19]=e("h3",{id:"查找-opencode-路径",tabindex:"-1"},[n("查找 opencode 路径 "),e("a",{class:"header-anchor",href:"#查找-opencode-路径","aria-label":"Permalink to “查找 opencode 路径”"},"​")],-1)),a[20]||(a[20]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# macOS / Linux
which opencode

# Windows
where opencode`)])],-1)),a[21]||(a[21]=t("",6)),a[22]||(a[22]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`{
  acp_providers = {
    ["opencode"] = {
      command = "opencode",
      args = { "acp" }
    }
  }
}`)])],-1)),a[23]||(a[23]=e("p",null,"如需传递环境变量：",-1)),a[24]||(a[24]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`{
  acp_providers = {
    ["opencode"] = {
      command = "opencode",
      args = { "acp" },
      env = {
        OPENCODE_API_KEY = os.getenv("OPENCODE_API_KEY")
      }
    }
  }
}`)])],-1)),a[25]||(a[25]=e("h3",{id:"codecompanion-nvim",tabindex:"-1"},[n("CodeCompanion.nvim "),e("a",{class:"header-anchor",href:"#codecompanion-nvim","aria-label":"Permalink to “CodeCompanion.nvim”"},"​")],-1)),a[26]||(a[26]=e("p",null,[n("添加到 "),e("a",{href:"https://github.com/olimorris/codecompanion.nvim",target:"_blank",rel:"noreferrer"},"CodeCompanion.nvim"),n(" 配置：")],-1)),a[27]||(a[27]=e("div",{class:"language-lua"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"lua"),e("pre",null,[e("code",{"v-pre":""},`require("codecompanion").setup({
  strategies = {
    chat = {
      adapter = {
        name = "opencode",
        model = "claude-sonnet-4",
      },
    },
  },
})`)])],-1)),a[28]||(a[28]=t("",22))])}const A=d(c,[["render",h]]);export{P as __pageData,A as default};
