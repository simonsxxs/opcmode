import{_ as d,I as n,c as r,o as s,a5 as l,j as t,J as p,a as o,bb as i}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"5.9a 远程模式基础","description":"OpenCode 支持无头服务器模式，可通过 Web 界面或远程终端访问。","frontmatter":{"title":"5.9a 远程模式基础","subtitle":"服务器启动、Web 界面与远程连接","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.9a","duration":"20 分钟","level":"进阶","description":"OpenCode 支持无头服务器模式，可通过 Web 界面或远程终端访问。","tags":["服务器","远程","Web"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/09a-remote-basics.md","filePath":"5-advanced/09a-remote-basics.md","lastUpdated":1772014034000}'),b={name:"5-advanced/09a-remote-basics.md"};function c(h,e,u,m,g,T){const a=n("AdInArticle");return s(),r("div",null,[e[0]||(e[0]=l("",17)),e[1]||(e[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`┌──────────────────────────────────────────────────────┐
│                  OpenCode 服务器                      │
│  ┌────────────────────────────────────────────────┐  │
│  │              HTTP API (OpenAPI 3.1)            │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
         ▲              ▲              ▲
         │              │              │
    ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
    │   TUI   │    │   Web   │    │   IDE   │
    └─────────┘    └─────────┘    └─────────┘`)])],-1)),e[2]||(e[2]=l("",5)),p(a),e[3]||(e[3]=t("h3",{id:"基本命令",tabindex:"-1"},[o("基本命令 "),t("a",{class:"header-anchor",href:"#基本命令","aria-label":"Permalink to “基本命令”"},"​")],-1)),e[4]||(e[4]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode serve [--port <number>] [--hostname <string>] [--cors <origin>]")])],-1)),e[5]||(e[5]=l("",4)),e[6]||(e[6]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 默认配置启动（端口 4096 或随机）
opencode serve

# 指定端口和地址，允许局域网访问
opencode serve --port 4096 --hostname 0.0.0.0

# 允许多个 CORS 来源
opencode serve --cors http://localhost:5173 --cors https://app.example.com

# 启用 mDNS 发现（自动将 hostname 设为 0.0.0.0）
opencode serve --mdns`)])],-1)),e[7]||(e[7]=t("p",null,"启动后会输出：",-1)),e[8]||(e[8]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"opencode server listening on http://0.0.0.0:4096")])],-1)),e[9]||(e[9]=t("hr",null,null,-1)),e[10]||(e[10]=t("h2",{id:"配置文件方式",tabindex:"-1"},[o("配置文件方式 "),t("a",{class:"header-anchor",href:"#配置文件方式","aria-label":"Permalink to “配置文件方式”"},"​")],-1)),e[11]||(e[11]=t("p",null,"除了命令行参数，也可以通过配置文件设置服务器参数：",-1)),e[12]||(e[12]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`// opencode.json
{
  "server": {
    "port": 4096,           // 监听端口
    "hostname": "0.0.0.0",  // 监听地址
    "mdns": true,           // 启用 mDNS
    "cors": [               // CORS 白名单
      "http://localhost:5173",
      "https://my-app.example.com"
    ]
  }
}`)])],-1)),e[13]||(e[13]=t("blockquote",null,[t("p",null,[o("来源："),t("code",null,"opencode/packages/opencode/src/config/config.ts:701-711")])],-1)),e[14]||(e[14]=t("p",null,[t("strong",null,"优先级规则"),o("：命令行参数 > 配置文件 > 默认值")],-1)),e[15]||(e[15]=t("hr",null,null,-1)),e[16]||(e[16]=t("h2",{id:"启动-web-界面",tabindex:"-1"},[o("启动 Web 界面 "),t("a",{class:"header-anchor",href:"#启动-web-界面","aria-label":"Permalink to “启动 Web 界面”"},"​")],-1)),e[17]||(e[17]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode web")])],-1)),e[18]||(e[18]=l("",6)),e[19]||(e[19]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode web --hostname 0.0.0.0 --port 4096")])],-1)),e[20]||(e[20]=t("p",null,"输出：",-1)),e[21]||(e[21]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`  Local access:      http://localhost:4096
  Network access:    http://192.168.1.100:4096`)])],-1)),e[22]||(e[22]=t("blockquote",null,[t("p",null,[o("来源："),t("code",null,"opencode/packages/opencode/src/cli/cmd/web.ts:41-68")])],-1)),e[23]||(e[23]=t("hr",null,null,-1)),e[24]||(e[24]=t("h2",{id:"远程连接",tabindex:"-1"},[o("远程连接 "),t("a",{class:"header-anchor",href:"#远程连接","aria-label":"Permalink to “远程连接”"},"​")],-1)),e[25]||(e[25]=t("h3",{id:"使用-attach-命令",tabindex:"-1"},[o("使用 attach 命令 "),t("a",{class:"header-anchor",href:"#使用-attach-命令","aria-label":"Permalink to “使用 attach 命令”"},"​")],-1)),e[26]||(e[26]=t("p",null,"可以将 TUI 连接到已运行的 OpenCode 服务器：",-1)),e[27]||(e[27]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 终端 1：启动后端服务器
opencode web --port 4096 --hostname 0.0.0.0

# 终端 2：从另一台机器连接
opencode attach http://192.168.1.100:4096`)])],-1)),e[28]||(e[28]=l("",5)),e[29]||(e[29]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 终端 1：启动无头服务器
opencode serve

# 终端 2：通过 attach 运行命令（避免 MCP 冷启动）
opencode run --attach http://localhost:4096 "解释 JavaScript 中的闭包"`)])],-1)),e[30]||(e[30]=t("p",null,"这种方式的好处是每次运行不需要重新启动 MCP 服务器，大幅减少响应时间。",-1)),e[31]||(e[31]=t("blockquote",null,[t("p",null,[o("来源："),t("code",null,"opencode/packages/web/src/content/docs/cli.mdx:325-333")])],-1)),e[32]||(e[32]=t("hr",null,null,-1)),e[33]||(e[33]=t("h2",{id:"mdns-服务发现",tabindex:"-1"},[o("mDNS 服务发现 "),t("a",{class:"header-anchor",href:"#mdns-服务发现","aria-label":"Permalink to “mDNS 服务发现”"},"​")],-1)),e[34]||(e[34]=t("p",null,[o("启用 mDNS 后，同一局域网的设备可以通过 "),t("code",null,".local"),o(" 域名访问服务器：")],-1)),e[35]||(e[35]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode web --mdns")])],-1)),e[36]||(e[36]=t("p",null,"输出：",-1)),e[37]||(e[37]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`  Local access:      http://localhost:4096
  Network access:    http://192.168.1.100:4096
  mDNS:              opencode.local`)])],-1)),e[38]||(e[38]=l("",6)),e[39]||(e[39]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# HTTPS 代理（推荐）
export HTTPS_PROXY=https://proxy.example.com:8080

# HTTP 代理
export HTTP_PROXY=http://proxy.example.com:8080

# 绕过代理的地址（必须包含本地地址）
export NO_PROXY=localhost,127.0.0.1`)])],-1)),e[40]||(e[40]=t("blockquote",null,[t("p",null,[o("⚠️ "),t("strong",null,"重要"),o("：TUI 与本地服务器通信时必须绕过代理，否则会导致连接失败。")])],-1)),e[41]||(e[41]=t("h3",{id:"代理认证",tabindex:"-1"},[o("代理认证 "),t("a",{class:"header-anchor",href:"#代理认证","aria-label":"Permalink to “代理认证”"},"​")],-1)),e[42]||(e[42]=t("p",null,"如果代理需要认证，在 URL 中包含凭据：",-1)),e[43]||(e[43]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"export HTTPS_PROXY=http://username:password@proxy.example.com:8080")])],-1)),e[44]||(e[44]=t("blockquote",null,[t("p",null,"⚠️ 避免在脚本中硬编码密码，使用环境变量或安全的凭据存储。")],-1)),e[45]||(e[45]=t("blockquote",null,[t("p",null,[o("来源："),t("code",null,"opencode/packages/web/src/content/docs/network.mdx:10-45")])],-1)),e[46]||(e[46]=t("hr",null,null,-1)),e[47]||(e[47]=t("h2",{id:"自定义证书",tabindex:"-1"},[o("自定义证书 "),t("a",{class:"header-anchor",href:"#自定义证书","aria-label":"Permalink to “自定义证书”"},"​")],-1)),e[48]||(e[48]=t("p",null,"企业环境中如果使用自签名 CA 证书，需要配置 Node.js 信任：",-1)),e[49]||(e[49]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"export NODE_EXTRA_CA_CERTS=/path/to/ca-cert.pem")])],-1)),e[50]||(e[50]=t("p",null,"这同时适用于代理连接和直接 API 访问。",-1)),e[51]||(e[51]=t("blockquote",null,[t("p",null,[o("来源："),t("code",null,"opencode/packages/web/src/content/docs/network.mdx:49-57")])],-1)),e[52]||(e[52]=t("hr",null,null,-1)),e[53]||(e[53]=t("h2",{id:"api-文档入口",tabindex:"-1"},[o("API 文档入口 "),t("a",{class:"header-anchor",href:"#api-文档入口","aria-label":"Permalink to “API 文档入口”"},"​")],-1)),e[54]||(e[54]=t("p",null,"服务器发布 OpenAPI 3.1 规范，可在浏览器中查看：",-1)),e[55]||(e[55]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"http://<hostname>:<port>/doc")])],-1)),e[56]||(e[56]=l("",17))])}const k=d(b,[["render",c]]);export{C as __pageData,k as default};
