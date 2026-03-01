import{_ as r,I as s,c as l,o as d,a5 as n,j as e,J as i,a as o,b7 as c}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.7a MCP Basics","description":"Connect external services through MCP to let AI call databases, search engines, monitoring platforms, and any other tools.","frontmatter":{"title":"5.7a MCP Basics","subtitle":"Connecting External Services","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.7a","duration":"15 minutes","practice":"15 minutes","level":"Advanced","description":"Connect external services through MCP to let AI call databases, search engines, monitoring platforms, and any other tools.","tags":["MCP","Extension","External Tools"],"prerequisite":["5.1 Configuration Basics"]},"headers":[],"relativePath":"en/5-advanced/07a-mcp-basics.md","filePath":"en/5-advanced/07a-mcp-basics.md","lastUpdated":1772014034000}'),p={name:"en/5-advanced/07a-mcp-basics.md"};function u(m,t,h,g,b,C){const a=s("AdInArticle");return d(),l("div",null,[t[0]||(t[0]=n("",17)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"User Question → OpenCode → AI Decides to Call MCP Tool → MCP Server Executes → Returns Result")])],-1)),t[2]||(t[2]=n("",10)),t[3]||(t[3]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode mcp add")])],-1)),t[4]||(t[4]=e("p",null,"Follow the prompts:",-1)),t[5]||(t[5]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`? Location: (Use arrow keys)
❯ Current project
    /path/to/project/.opencode/opencode.json
  Global
    ~/.config/opencode/opencode.json

? MCP server name: filesystem

? Select MCP server type:
❯ Local
  Remote

? Enter command to run:
opencode x @modelcontextprotocol/server-filesystem /path/to/allowed/dir`)])],-1)),t[6]||(t[6]=e("blockquote",null,[e("p",null,[o("⚠️ "),e("strong",null,"Note"),o(": Location selection only appears in Git projects. Non-Git projects will write directly to global config.")])],-1)),t[7]||(t[7]=e("p",null,[e("strong",null,"You should see"),o(":")],-1)),t[8]||(t[8]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},'✓ MCP server "filesystem" added successfully')])],-1)),t[9]||(t[9]=n("",5)),t[10]||(t[10]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[11]||(t[11]=e("h3",{id:"configuration-options",tabindex:"-1"},[o("Configuration Options "),e("a",{class:"header-anchor",href:"#configuration-options","aria-label":"Permalink to “Configuration Options”"},"​")],-1)),i(a),t[12]||(t[12]=n("",4)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use the my-local-mcp tool to do something")])],-1)),t[14]||(t[14]=e("hr",null,null,-1)),t[15]||(t[15]=e("h2",{id:"remote-mcp-servers",tabindex:"-1"},[o("Remote MCP Servers "),e("a",{class:"header-anchor",href:"#remote-mcp-servers","aria-label":"Permalink to “Remote MCP Servers”"},"​")],-1)),t[16]||(t[16]=e("p",null,"Remote MCP servers connect via HTTP/SSE protocol.",-1)),t[17]||(t[17]=e("h3",{id:"configuration-1",tabindex:"-1"},[o("Configuration "),e("a",{class:"header-anchor",href:"#configuration-1","aria-label":"Permalink to “Configuration”"},"​")],-1)),t[18]||(t[18]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[19]||(t[19]=n("",7)),t[20]||(t[20]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode mcp list")])],-1)),t[21]||(t[21]=e("hr",null,null,-1)),t[22]||(t[22]=e("h2",{id:"quick-start-examples",tabindex:"-1"},[o("Quick Start Examples "),e("a",{class:"header-anchor",href:"#quick-start-examples","aria-label":"Permalink to “Quick Start Examples”"},"​")],-1)),t[23]||(t[23]=e("h3",{id:"example-1-local-test-server",tabindex:"-1"},[o("Example 1: Local Test Server "),e("a",{class:"header-anchor",href:"#example-1-local-test-server","aria-label":"Permalink to “Example 1: Local Test Server”"},"​")],-1)),t[24]||(t[24]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "everything": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-everything"]
    }
  }
}`)])],-1)),t[25]||(t[25]=e("p",null,"Test usage:",-1)),t[26]||(t[26]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use the everything tool to add 3 and 4")])],-1)),t[27]||(t[27]=e("h3",{id:"example-2-context7-document-search",tabindex:"-1"},[o("Example 2: Context7 Document Search "),e("a",{class:"header-anchor",href:"#example-2-context7-document-search","aria-label":"Permalink to “Example 2: Context7 Document Search”"},"​")],-1)),t[28]||(t[28]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp"
    }
  }
}`)])],-1)),t[29]||(t[29]=e("p",null,"Test usage:",-1)),t[30]||(t[30]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use context7 to search React hooks best practices")])],-1)),t[31]||(t[31]=e("h3",{id:"example-3-grep-code-search",tabindex:"-1"},[o("Example 3: Grep Code Search "),e("a",{class:"header-anchor",href:"#example-3-grep-code-search","aria-label":"Permalink to “Example 3: Grep Code Search”"},"​")],-1)),t[32]||(t[32]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "gh_grep": {
      "type": "remote",
      "url": "https://mcp.grep.app"
    }
  }
}`)])],-1)),t[33]||(t[33]=e("p",null,"Test usage:",-1)),t[34]||(t[34]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"use the gh_grep tool to search how to implement JWT verification in Node.js")])],-1)),t[35]||(t[35]=n("",11))])}const y=r(p,[["render",u]]);export{v as __pageData,y as default};
