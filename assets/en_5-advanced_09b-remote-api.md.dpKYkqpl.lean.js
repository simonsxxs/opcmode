import{_ as r,I as s,c as n,o as c,a5 as d,j as e,J as i,a as o,bc as l}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.9b HTTP API Reference","description":"OpenCode server provides a complete REST API for programmatic interaction with OpenCode.","frontmatter":{"title":"5.9b HTTP API Reference","subtitle":"OpenCode Server Complete API Documentation","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.9b","duration":"25 minutes","level":"Advanced","description":"OpenCode server provides a complete REST API for programmatic interaction with OpenCode.","tags":["API","HTTP","REST"],"prerequisite":["5.9a Remote Mode Basics"]},"headers":[],"relativePath":"en/5-advanced/09b-remote-api.md","filePath":"en/5-advanced/09b-remote-api.md","lastUpdated":1772014034000}'),h={name:"en/5-advanced/09b-remote-api.md"};function p(b,t,m,u,g,P){const a=s("AdInArticle");return c(),n("div",null,[t[0]||(t[0]=d("",11)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"http://<hostname>:<port>/doc")])],-1)),t[2]||(t[2]=e("p",null,[o("Example: "),e("code",null,"http://localhost:4096/doc")],-1)),t[3]||(t[3]=e("hr",null,null,-1)),t[4]||(t[4]=e("h2",{id:"authentication",tabindex:"-1"},[o("Authentication "),e("a",{class:"header-anchor",href:"#authentication","aria-label":"Permalink to “Authentication”"},"​")],-1)),t[5]||(t[5]=e("p",null,[o("If the server has "),e("code",null,"OPENCODE_SERVER_PASSWORD"),o(" environment variable set, all API requests require HTTP Basic Auth authentication.")],-1)),t[6]||(t[6]=e("h3",{id:"curl-example",tabindex:"-1"},[o("curl Example "),e("a",{class:"header-anchor",href:"#curl-example","aria-label":"Permalink to “curl Example”"},"​")],-1)),t[7]||(t[7]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# With Basic Auth
curl -u opencode:your-password http://localhost:4096/global/health

# Or manually set Authorization header
curl -H "Authorization: Basic $(echo -n 'opencode:your-password' | base64)" \\
  http://localhost:4096/global/health`)])],-1)),t[8]||(t[8]=d("",4)),i(a),t[9]||(t[9]=d("",3)),t[10]||(t[10]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Check server health (no auth)
curl http://localhost:4096/global/health

# If server has password set
curl -u opencode:your-password http://localhost:4096/global/health`)])],-1)),t[11]||(t[11]=e("p",null,"Response:",-1)),t[12]||(t[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "healthy": true,
  "version": "1.0.48"
}`)])],-1)),t[13]||(t[13]=d("",33)),t[14]||(t[14]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`curl -X POST http://localhost:4096/session \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Code Review Session"}'`)])],-1)),t[15]||(t[15]=d("",5)),t[16]||(t[16]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`{
  messageID?: string,     // Optional, message ID
  model?: string,         // Optional, specify model
  agent?: string,         // Optional, specify agent
  noReply?: boolean,      // Optional, don't wait for reply
  system?: string,        // Optional, system prompt
  tools?: string[],       // Optional, enabled tools
  parts: Part[]           // Message content
}`)])],-1)),t[17]||(t[17]=e("blockquote",null,[e("p",null,[o("Source: "),e("code",null,"opencode/packages/web/src/content/docs/server.mdx:160-170")])],-1)),t[18]||(t[18]=e("p",null,[e("strong",null,"Example - Send message"),o(":")],-1)),t[19]||(t[19]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`curl -X POST http://localhost:4096/session/abc123/message \\
  -H "Content-Type: application/json" \\
  -d '{
    "parts": [
      {"type": "text", "text": "Explain what this code does"}
    ]
  }'`)])],-1)),t[20]||(t[20]=d("",13)),t[21]||(t[21]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Search for files with "config" in the name
curl "http://localhost:4096/find/file?query=config&limit=10"

# Search file contents
curl "http://localhost:4096/find?pattern=TODO"`)])],-1)),t[22]||(t[22]=d("",20)),t[23]||(t[23]=e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`{
  service: string,           // Service name
  level: "debug" | "info" | "warn" | "error",
  message: string,           // Log message
  extra?: Record<string, any> // Additional metadata
}`)])],-1)),t[24]||(t[24]=d("",8)),t[25]||(t[25]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# Add text to prompt box
curl -X POST http://localhost:4096/tui/append-prompt \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Please help me review this code"}'

# Submit prompt
curl -X POST http://localhost:4096/tui/submit-prompt

# Show notification
curl -X POST http://localhost:4096/tui/show-toast \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Operation complete", "variant": "success"}'`)])],-1)),t[26]||(t[26]=d("",13)),t[27]||(t[27]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"curl -N http://localhost:4096/event")])],-1)),t[28]||(t[28]=e("p",null,"Output example:",-1)),t[29]||(t[29]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`event: server.connected
data: {}

event: session.created
data: {"id":"abc123","title":"New Session"}

event: message.created
data: {"sessionID":"abc123","content":"..."}`)])],-1)),t[30]||(t[30]=d("",8)),t[31]||(t[31]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"https://github.com/opencode-ai/opencode/blob/dev/packages/sdk/js/src/gen/types.gen.ts")])],-1)),t[32]||(t[32]=d("",15))])}const T=r(h,[["render",p]]);export{v as __pageData,T as default};
