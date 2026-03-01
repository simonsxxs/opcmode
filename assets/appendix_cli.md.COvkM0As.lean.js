import{_ as r,I as l,c as a,o as s,a5 as o,j as t,J as p,a as e,bw as c}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"CLI 命令参考","description":"OpenCode 命令行工具完整参考","frontmatter":{"title":"CLI 命令参考","description":"OpenCode 命令行工具完整参考"},"headers":[],"relativePath":"appendix/cli.md","filePath":"appendix/cli.md","lastUpdated":1772014034000}'),i={name:"appendix/cli.md"};function b(u,d,h,g,C,E){const n=l("AdInArticle");return s(),a("div",null,[d[0]||(d[0]=o("",12)),d[1]||(d[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode [project]")])],-1)),d[2]||(d[2]=o("",3)),d[3]||(d[3]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 启动 TUI
opencode

# 带初始提示语启动
opencode --prompt "帮我分析这个项目的代码结构"

# 使用特定模型
opencode -m anthropic/claude-sonnet-4-20250514

# 继续上次会话
opencode -c`)])],-1)),d[4]||(d[4]=t("hr",null,null,-1)),d[5]||(d[5]=t("h3",{id:"opencode-run",tabindex:"-1"},[e("opencode run "),t("a",{class:"header-anchor",href:"#opencode-run","aria-label":"Permalink to “opencode run”"},"​")],-1)),d[6]||(d[6]=t("p",null,"非交互模式执行任务，适合脚本和 CI/CD。",-1)),d[7]||(d[7]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode run [message..]")])],-1)),d[8]||(d[8]=o("",3)),d[9]||(d[9]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 基本使用
opencode run "修复 src/main.ts 中的类型错误"

# 指定模型
opencode run -m anthropic/claude-sonnet-4-5 "Review this code"

# 附加文件（支持多文件）
opencode run -f src/main.ts -f package.json "Analyze this project"

# 继续上一个会话
opencode run -c "What else needs to be done?"

# 使用 JSON 格式输出（适合脚本）
opencode run --format json "List all TypeScript files"

# 连接到远程服务器（避免 MCP 冷启动）
opencode serve  # 在另一个终端启动
opencode run --attach http://localhost:4096 "Explain async/await"

# 使用自定义命令
opencode run --command explain --file code.ts "How does this work?"

# 指定模型变体（推理力度）
opencode run -m anthropic/claude-opus-4-5 --variant max "Analyze entire codebase"

# 自动分享会话
opencode run --share "Generate project documentation"

# 指定会话标题
opencode run --title "Bug Fix" "Fix the login issue"

# 从 stdin 读取输入
echo "Count lines of code" | opencode run "Analyze"`)])],-1)),d[10]||(d[10]=t("hr",null,null,-1)),d[11]||(d[11]=t("h3",{id:"opencode-serve",tabindex:"-1"},[e("opencode serve "),t("a",{class:"header-anchor",href:"#opencode-serve","aria-label":"Permalink to “opencode serve”"},"​")],-1)),d[12]||(d[12]=t("p",null,"启动无头服务器模式，提供 API 访问。",-1)),d[13]||(d[13]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode serve")])],-1)),d[14]||(d[14]=o("",3)),d[15]||(d[15]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 默认配置启动
opencode serve

# 指定端口和允许远程访问
opencode serve --port 4096 --hostname 0.0.0.0`)])],-1)),d[16]||(d[16]=t("hr",null,null,-1)),d[17]||(d[17]=t("h3",{id:"opencode-web",tabindex:"-1"},[e("opencode web "),t("a",{class:"header-anchor",href:"#opencode-web","aria-label":"Permalink to “opencode web”"},"​")],-1)),d[18]||(d[18]=t("p",null,"启动 Web 界面。",-1)),d[19]||(d[19]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode web")])],-1)),d[20]||(d[20]=o("",3)),d[21]||(d[21]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 启动 Web 界面
opencode web

# 指定端口
opencode web --port 4096`)])],-1)),d[22]||(d[22]=t("hr",null,null,-1)),d[23]||(d[23]=t("h3",{id:"opencode-attach",tabindex:"-1"},[e("opencode attach "),t("a",{class:"header-anchor",href:"#opencode-attach","aria-label":"Permalink to “opencode attach”"},"​")],-1)),d[24]||(d[24]=t("p",null,"连接到远程 OpenCode 服务器。",-1)),d[25]||(d[25]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode attach [url]")])],-1)),d[26]||(d[26]=o("",3)),d[27]||(d[27]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 在一个终端启动服务器
opencode web --port 4096 --hostname 0.0.0.0

# 在另一个终端连接
opencode attach http://10.20.30.40:4096`)])],-1)),d[28]||(d[28]=t("hr",null,null,-1)),d[29]||(d[29]=t("h2",{id:"管理命令",tabindex:"-1"},[e("管理命令 "),t("a",{class:"header-anchor",href:"#管理命令","aria-label":"Permalink to “管理命令”"},"​")],-1)),p(n),d[30]||(d[30]=t("h3",{id:"opencode-auth",tabindex:"-1"},[e("opencode auth "),t("a",{class:"header-anchor",href:"#opencode-auth","aria-label":"Permalink to “opencode auth”"},"​")],-1)),d[31]||(d[31]=t("p",null,[e("管理认证和 API Key。凭证存储在 "),t("code",null,"~/.local/share/opencode/auth.json"),e("。")],-1)),d[32]||(d[32]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode auth <subcommand>")])],-1)),d[33]||(d[33]=o("",2)),d[34]||(d[34]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 交互式登录
opencode auth login

# 列出已认证的提供商
opencode auth list

# 登出
opencode auth logout`)])],-1)),d[35]||(d[35]=t("hr",null,null,-1)),d[36]||(d[36]=t("h3",{id:"opencode-models",tabindex:"-1"},[e("opencode models "),t("a",{class:"header-anchor",href:"#opencode-models","aria-label":"Permalink to “opencode models”"},"​")],-1)),d[37]||(d[37]=t("p",null,"列出可用模型。",-1)),d[38]||(d[38]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode models [provider]")])],-1)),d[39]||(d[39]=o("",3)),d[40]||(d[40]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 列出所有可用模型
opencode models

# 只列出 Anthropic 的模型
opencode models anthropic

# 刷新模型列表
opencode models --refresh`)])],-1)),d[41]||(d[41]=t("hr",null,null,-1)),d[42]||(d[42]=t("h3",{id:"opencode-agent",tabindex:"-1"},[e("opencode agent "),t("a",{class:"header-anchor",href:"#opencode-agent","aria-label":"Permalink to “opencode agent”"},"​")],-1)),d[43]||(d[43]=t("p",null,"管理 Agent 配置。",-1)),d[44]||(d[44]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode agent <subcommand>")])],-1)),d[45]||(d[45]=o("",2)),d[46]||(d[46]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 列出 Agent
opencode agent list

# 创建新 Agent
opencode agent create`)])],-1)),d[47]||(d[47]=t("hr",null,null,-1)),d[48]||(d[48]=t("h3",{id:"opencode-mcp",tabindex:"-1"},[e("opencode mcp "),t("a",{class:"header-anchor",href:"#opencode-mcp","aria-label":"Permalink to “opencode mcp”"},"​")],-1)),d[49]||(d[49]=t("p",null,"管理 MCP 服务器。",-1)),d[50]||(d[50]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode mcp <subcommand>")])],-1)),d[51]||(d[51]=o("",2)),d[52]||(d[52]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 列出 MCP 服务器
opencode mcp list

# 添加新服务器
opencode mcp add

# OAuth 认证
opencode mcp auth context7

# 列出 OAuth 状态
opencode mcp auth ls

# 调试连接
opencode mcp debug context7`)])],-1)),d[53]||(d[53]=t("hr",null,null,-1)),d[54]||(d[54]=t("h3",{id:"opencode-session",tabindex:"-1"},[e("opencode session "),t("a",{class:"header-anchor",href:"#opencode-session","aria-label":"Permalink to “opencode session”"},"​")],-1)),d[55]||(d[55]=t("p",null,"管理会话。",-1)),d[56]||(d[56]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode session <subcommand>")])],-1)),d[57]||(d[57]=o("",4)),d[58]||(d[58]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 列出会话
opencode session list

# 列出最近 10 个会话
opencode session list -n 10

# 输出为 JSON
opencode session list --format json`)])],-1)),d[59]||(d[59]=t("hr",null,null,-1)),d[60]||(d[60]=t("h3",{id:"opencode-stats",tabindex:"-1"},[e("opencode stats "),t("a",{class:"header-anchor",href:"#opencode-stats","aria-label":"Permalink to “opencode stats”"},"​")],-1)),d[61]||(d[61]=t("p",null,"查看使用统计。",-1)),d[62]||(d[62]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode stats")])],-1)),d[63]||(d[63]=o("",3)),d[64]||(d[64]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 查看统计
opencode stats

# 查看最近 7 天
opencode stats --days 7

# 显示模型使用 Top 5
opencode stats --models 5`)])],-1)),d[65]||(d[65]=t("hr",null,null,-1)),d[66]||(d[66]=t("h3",{id:"opencode-export",tabindex:"-1"},[e("opencode export "),t("a",{class:"header-anchor",href:"#opencode-export","aria-label":"Permalink to “opencode export”"},"​")],-1)),d[67]||(d[67]=t("p",null,"导出会话数据为 JSON。",-1)),d[68]||(d[68]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode export [sessionID]")])],-1)),d[69]||(d[69]=t("p",null,"如果不指定会话 ID，会提示选择。",-1)),d[70]||(d[70]=t("p",null,[t("strong",null,"示例"),e("：")],-1)),d[71]||(d[71]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode export abc123")])],-1)),d[72]||(d[72]=t("hr",null,null,-1)),d[73]||(d[73]=t("h3",{id:"opencode-import",tabindex:"-1"},[e("opencode import "),t("a",{class:"header-anchor",href:"#opencode-import","aria-label":"Permalink to “opencode import”"},"​")],-1)),d[74]||(d[74]=t("p",null,"导入会话数据。",-1)),d[75]||(d[75]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode import <file>")])],-1)),d[76]||(d[76]=t("p",null,"支持从本地文件或 OpenCode 分享 URL 导入。",-1)),d[77]||(d[77]=t("p",null,[t("strong",null,"示例"),e("：")],-1)),d[78]||(d[78]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 从文件导入
opencode import session.json

# 从分享 URL 导入
opencode import https://opncd.ai/share/abc123`)])],-1)),d[79]||(d[79]=t("hr",null,null,-1)),d[80]||(d[80]=t("h3",{id:"opencode-github",tabindex:"-1"},[e("opencode github "),t("a",{class:"header-anchor",href:"#opencode-github","aria-label":"Permalink to “opencode github”"},"​")],-1)),d[81]||(d[81]=t("p",null,"GitHub 集成管理。",-1)),d[82]||(d[82]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode github <subcommand>")])],-1)),d[83]||(d[83]=o("",4)),d[84]||(d[84]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 安装 Actions
opencode github install`)])],-1)),d[85]||(d[85]=t("hr",null,null,-1)),d[86]||(d[86]=t("h3",{id:"opencode-pr",tabindex:"-1"},[e("opencode pr "),t("a",{class:"header-anchor",href:"#opencode-pr","aria-label":"Permalink to “opencode pr”"},"​")],-1)),d[87]||(d[87]=t("p",null,"拉取并切换到 GitHub PR 分支，然后启动 OpenCode。",-1)),d[88]||(d[88]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode pr <number>")])],-1)),d[89]||(d[89]=o("",5)),d[90]||(d[90]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 拉取 PR #123 并启动 OpenCode
opencode pr 123

# 你会看到：
# Fetching and checking out PR #123...
# Successfully checked out PR #123 as branch 'pr/123'
# Starting opencode...`)])],-1)),d[91]||(d[91]=t("hr",null,null,-1)),d[92]||(d[92]=t("h3",{id:"opencode-acp",tabindex:"-1"},[e("opencode acp "),t("a",{class:"header-anchor",href:"#opencode-acp","aria-label":"Permalink to “opencode acp”"},"​")],-1)),d[93]||(d[93]=t("p",null,"启动 ACP（Agent Client Protocol）服务器。",-1)),d[94]||(d[94]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode acp")])],-1)),d[95]||(d[95]=o("",6)),d[96]||(d[96]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode upgrade [target]")])],-1)),d[97]||(d[97]=o("",3)),d[98]||(d[98]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 升级到最新
opencode upgrade

# 升级到指定版本
opencode upgrade v1.0.5

# 降级到 0.x
opencode upgrade 0.15.31`)])],-1)),d[99]||(d[99]=t("hr",null,null,-1)),d[100]||(d[100]=t("h3",{id:"opencode-uninstall",tabindex:"-1"},[e("opencode uninstall "),t("a",{class:"header-anchor",href:"#opencode-uninstall","aria-label":"Permalink to “opencode uninstall”"},"​")],-1)),d[101]||(d[101]=t("p",null,"卸载 OpenCode 并删除相关文件。",-1)),d[102]||(d[102]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode uninstall")])],-1)),d[103]||(d[103]=o("",3)),d[104]||(d[104]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 完全卸载
opencode uninstall

# 保留配置
opencode uninstall --keep-config

# 预览删除内容
opencode uninstall --dry-run`)])],-1)),d[105]||(d[105]=o("",12)),d[106]||(d[106]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 设置服务器认证
export OPENCODE_SERVER_PASSWORD=your-secure-password
export OPENCODE_SERVER_USERNAME=admin

opencode serve --hostname 0.0.0.0`)])],-1)),d[107]||(d[107]=o("",9))])}const A=r(i,[["render",b]]);export{P as __pageData,A as default};
