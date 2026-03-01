import{_ as r,I as c,c as n,o as s,a5 as e,j as t,J as l,a as o,bc as i}from"./chunks/framework.Dtwt352Q.js";const S=JSON.parse('{"title":"5.9b HTTP API 参考","description":"OpenCode 服务器提供完整的 REST API，支持编程方式与 OpenCode 交互。","frontmatter":{"title":"5.9b HTTP API 参考","subtitle":"OpenCode 服务器完整 API 文档","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.9b","duration":"25 分钟","level":"进阶","description":"OpenCode 服务器提供完整的 REST API，支持编程方式与 OpenCode 交互。","tags":["API","HTTP","REST"],"prerequisite":["5.9a 远程模式基础"]},"headers":[],"relativePath":"5-advanced/09b-remote-api.md","filePath":"5-advanced/09b-remote-api.md","lastUpdated":1772014034000}'),h={name:"5-advanced/09b-remote-api.md"};function p(b,d,P,u,m,g){const a=c("AdInArticle");return s(),n("div",null,[d[0]||(d[0]=e("",11)),d[1]||(d[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"http://<hostname>:<port>/doc")])],-1)),d[2]||(d[2]=t("p",null,[o("例如："),t("code",null,"http://localhost:4096/doc")],-1)),d[3]||(d[3]=t("hr",null,null,-1)),d[4]||(d[4]=t("h2",{id:"认证",tabindex:"-1"},[o("认证 "),t("a",{class:"header-anchor",href:"#认证","aria-label":"Permalink to “认证”"},"​")],-1)),d[5]||(d[5]=t("p",null,[o("如果服务器设置了 "),t("code",null,"OPENCODE_SERVER_PASSWORD"),o(" 环境变量，所有 API 请求都需要 HTTP Basic Auth 认证。")],-1)),d[6]||(d[6]=t("h3",{id:"curl-示例",tabindex:"-1"},[o("curl 示例 "),t("a",{class:"header-anchor",href:"#curl-示例","aria-label":"Permalink to “curl 示例”"},"​")],-1)),d[7]||(d[7]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 带 Basic Auth 认证
curl -u opencode:your-password http://localhost:4096/global/health

# 或手动设置 Authorization header
curl -H "Authorization: Basic $(echo -n 'opencode:your-password' | base64)" \\
  http://localhost:4096/global/health`)])],-1)),d[8]||(d[8]=e("",4)),l(a),d[9]||(d[9]=e("",3)),d[10]||(d[10]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 检查服务器健康状态（无认证）
curl http://localhost:4096/global/health

# 如果服务器设置了密码
curl -u opencode:your-password http://localhost:4096/global/health`)])],-1)),d[11]||(d[11]=t("p",null,"响应：",-1)),d[12]||(d[12]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "healthy": true,
  "version": "1.0.48"
}`)])],-1)),d[13]||(d[13]=e("",33)),d[14]||(d[14]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`curl -X POST http://localhost:4096/session \\
  -H "Content-Type: application/json" \\
  -d '{"title": "代码审查会话"}'`)])],-1)),d[15]||(d[15]=e("",5)),d[16]||(d[16]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`{
  messageID?: string,     // 可选，消息 ID
  model?: string,         // 可选，指定模型
  agent?: string,         // 可选，指定 agent
  noReply?: boolean,      // 可选，不等待回复
  system?: string,        // 可选，系统提示
  tools?: string[],       // 可选，启用的工具
  parts: Part[]           // 消息内容
}`)])],-1)),d[17]||(d[17]=t("blockquote",null,[t("p",null,[o("来源："),t("code",null,"opencode/packages/web/src/content/docs/server.mdx:160-170")])],-1)),d[18]||(d[18]=t("p",null,[t("strong",null,"示例 - 发送消息"),o("：")],-1)),d[19]||(d[19]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`curl -X POST http://localhost:4096/session/abc123/message \\
  -H "Content-Type: application/json" \\
  -d '{
    "parts": [
      {"type": "text", "text": "解释这段代码的作用"}
    ]
  }'`)])],-1)),d[20]||(d[20]=e("",13)),d[21]||(d[21]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 搜索文件名包含 "config" 的文件
curl "http://localhost:4096/find/file?query=config&limit=10"

# 搜索文件内容
curl "http://localhost:4096/find?pattern=TODO"`)])],-1)),d[22]||(d[22]=e("",20)),d[23]||(d[23]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`{
  service: string,           // 服务名称
  level: "debug" | "info" | "warn" | "error",
  message: string,           // 日志消息
  extra?: Record<string, any> // 附加元数据
}`)])],-1)),d[24]||(d[24]=e("",8)),d[25]||(d[25]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 向提示框添加文本
curl -X POST http://localhost:4096/tui/append-prompt \\
  -H "Content-Type: application/json" \\
  -d '{"text": "请帮我审查这段代码"}'

# 提交提示
curl -X POST http://localhost:4096/tui/submit-prompt

# 显示通知
curl -X POST http://localhost:4096/tui/show-toast \\
  -H "Content-Type: application/json" \\
  -d '{"message": "操作完成", "variant": "success"}'`)])],-1)),d[26]||(d[26]=e("",13)),d[27]||(d[27]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"curl -N http://localhost:4096/event")])],-1)),d[28]||(d[28]=t("p",null,"输出示例：",-1)),d[29]||(d[29]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`event: server.connected
data: {}

event: session.created
data: {"id":"abc123","title":"新会话"}

event: message.created
data: {"sessionID":"abc123","content":"..."}`)])],-1)),d[30]||(d[30]=e("",8)),d[31]||(d[31]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"https://github.com/opencode-ai/opencode/blob/dev/packages/sdk/js/src/gen/types.gen.ts")])],-1)),d[32]||(d[32]=e("",15))])}const A=r(h,[["render",p]]);export{S as __pageData,A as default};
