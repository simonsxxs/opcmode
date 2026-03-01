import{_ as n,I as l,c as r,o as s,a5 as d,j as t,J as i,a as o,b7 as p}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.7a MCP 基础","description":"通过 MCP 连接外部服务，让 AI 调用数据库、搜索引擎、监控平台等任意工具。","frontmatter":{"title":"5.7a MCP 基础","subtitle":"连接外部服务入门","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.7a","duration":"15 分钟","practice":"15 分钟","level":"进阶","description":"通过 MCP 连接外部服务，让 AI 调用数据库、搜索引擎、监控平台等任意工具。","tags":["MCP","扩展","外部工具"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/07a-mcp-basics.md","filePath":"5-advanced/07a-mcp-basics.md","lastUpdated":1772014034000}'),c={name:"5-advanced/07a-mcp-basics.md"};function u(h,e,m,b,g,C){const a=l("AdInArticle");return s(),r("div",null,[e[0]||(e[0]=d("",17)),e[1]||(e[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"用户提问 → OpenCode → AI 决定调用 MCP 工具 → MCP 服务器执行 → 返回结果")])],-1)),e[2]||(e[2]=d("",10)),e[3]||(e[3]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode mcp add")])],-1)),e[4]||(e[4]=t("p",null,"按提示操作：",-1)),e[5]||(e[5]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`? Location: (Use arrow keys)
❯ Current project
    /path/to/project/.opencode/opencode.json
  Global
    ~/.config/opencode/opencode.json

? MCP server name: filesystem

? Select MCP server type:
❯ Local
  Remote

? Enter command to run:
opencode x @modelcontextprotocol/server-filesystem /path/to/allowed/dir`)])],-1)),e[6]||(e[6]=t("blockquote",null,[t("p",null,[o("⚠️ "),t("strong",null,"注意"),o("：位置选择仅在 Git 项目中显示。非 Git 项目会直接写入全局配置。")])],-1)),e[7]||(e[7]=t("p",null,[t("strong",null,"你应该看到"),o("：")],-1)),e[8]||(e[8]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},'✓ MCP server "filesystem" added successfully')])],-1)),e[9]||(e[9]=d("",5)),e[10]||(e[10]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "my-local-mcp": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-everything"],
      "enabled": true,
      "environment": {
        "MY_ENV_VAR": "value"
      }
    }
  }
}`)])],-1)),e[11]||(e[11]=t("h3",{id:"配置选项",tabindex:"-1"},[o("配置选项 "),t("a",{class:"header-anchor",href:"#配置选项","aria-label":"Permalink to “配置选项”"},"​")],-1)),i(a),e[12]||(e[12]=d("",4)),e[13]||(e[13]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"use the my-local-mcp tool to do something")])],-1)),e[14]||(e[14]=t("hr",null,null,-1)),e[15]||(e[15]=t("h2",{id:"远程-mcp-服务器",tabindex:"-1"},[o("远程 MCP 服务器 "),t("a",{class:"header-anchor",href:"#远程-mcp-服务器","aria-label":"Permalink to “远程 MCP 服务器”"},"​")],-1)),e[16]||(e[16]=t("p",null,"远程 MCP 服务器通过 HTTP/SSE 协议连接。",-1)),e[17]||(e[17]=t("h3",{id:"配置方式-1",tabindex:"-1"},[o("配置方式 "),t("a",{class:"header-anchor",href:"#配置方式-1","aria-label":"Permalink to “配置方式”"},"​")],-1)),e[18]||(e[18]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "my-remote-mcp": {
      "type": "remote",
      "url": "https://mcp.example.com/mcp",
      "enabled": true,
      "headers": {
        "Authorization": "Bearer {env:MY_API_KEY}"
      }
    }
  }
}`)])],-1)),e[19]||(e[19]=d("",7)),e[20]||(e[20]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode mcp list")])],-1)),e[21]||(e[21]=t("hr",null,null,-1)),e[22]||(e[22]=t("h2",{id:"快速开始示例",tabindex:"-1"},[o("快速开始示例 "),t("a",{class:"header-anchor",href:"#快速开始示例","aria-label":"Permalink to “快速开始示例”"},"​")],-1)),e[23]||(e[23]=t("h3",{id:"示例-1-本地测试服务器",tabindex:"-1"},[o("示例 1：本地测试服务器 "),t("a",{class:"header-anchor",href:"#示例-1-本地测试服务器","aria-label":"Permalink to “示例 1：本地测试服务器”"},"​")],-1)),e[24]||(e[24]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "everything": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-everything"]
    }
  }
}`)])],-1)),e[25]||(e[25]=t("p",null,"测试使用：",-1)),e[26]||(e[26]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"use the everything tool to add 3 and 4")])],-1)),e[27]||(e[27]=t("h3",{id:"示例-2-context7-文档搜索",tabindex:"-1"},[o("示例 2：Context7 文档搜索 "),t("a",{class:"header-anchor",href:"#示例-2-context7-文档搜索","aria-label":"Permalink to “示例 2：Context7 文档搜索”"},"​")],-1)),e[28]||(e[28]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}`)])],-1)),e[29]||(e[29]=t("p",null,"测试使用：",-1)),e[30]||(e[30]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"use context7 查询 React hooks 最佳实践")])],-1)),e[31]||(e[31]=t("h3",{id:"示例-3-grep-代码搜索",tabindex:"-1"},[o("示例 3：Grep 代码搜索 "),t("a",{class:"header-anchor",href:"#示例-3-grep-代码搜索","aria-label":"Permalink to “示例 3：Grep 代码搜索”"},"​")],-1)),e[32]||(e[32]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "gh_grep": {
      "type": "remote",
      "url": "https://mcp.grep.app"
    }
  }
}`)])],-1)),e[33]||(e[33]=t("p",null,"测试使用：",-1)),e[34]||(e[34]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"use the gh_grep tool 搜索如何在 Node.js 中实现 JWT 验证")])],-1)),e[35]||(e[35]=d("",11))])}const v=n(c,[["render",u]]);export{y as __pageData,v as default};
