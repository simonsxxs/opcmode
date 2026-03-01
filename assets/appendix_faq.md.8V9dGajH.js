import{_ as s,I as r,c as t,o as i,a5 as o,j as l,J as p,a,bA as d}from"./chunks/framework.Dtwt352Q.js";const q=JSON.parse('{"title":"常见问题（FAQ）","description":"OpenCode 使用中的常见问题解答","frontmatter":{"title":"常见问题（FAQ）","description":"OpenCode 使用中的常见问题解答"},"headers":[],"relativePath":"appendix/faq.md","filePath":"appendix/faq.md","lastUpdated":1772014034000}'),u={name:"appendix/faq.md"};function g(b,n,m,h,A,C){const e=r("AdInArticle");return i(),t("div",null,[n[0]||(n[0]=o('<h1 id="常见问题-faq" tabindex="-1">常见问题（FAQ） <a class="header-anchor" href="#常见问题-faq" aria-label="Permalink to “常见问题（FAQ）”">​</a></h1><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+d+'" alt="常见问题（FAQ）学霸笔记" data-zoom-src="/images/appendix/faq-notes.jpeg"></p><blockquote><p>遇到问题？先看这里</p></blockquote><hr><h2 id="安装问题" tabindex="-1">安装问题 <a class="header-anchor" href="#安装问题" aria-label="Permalink to “安装问题”">​</a></h2><h3 id="q-安装命令报错-command-not-found" tabindex="-1">Q: 安装命令报错 &quot;command not found&quot; <a class="header-anchor" href="#q-安装命令报错-command-not-found" aria-label="Permalink to “Q: 安装命令报错 &quot;command not found&quot;”">​</a></h3><p><strong>A</strong>: 可能是 PATH 环境变量没有正确设置。</p>',9)),n[1]||(n[1]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 检查安装位置
which opencode

# 如果没有输出，手动添加到 PATH
# macOS/Linux
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# 或者使用 npm 全局安装
npm install -g @anthropic-ai/opencode`)])],-1)),n[2]||(n[2]=l("hr",null,null,-1)),n[3]||(n[3]=l("h3",{id:"q-windows-上安装失败",tabindex:"-1"},[a("Q: Windows 上安装失败 "),l("a",{class:"header-anchor",href:"#q-windows-上安装失败","aria-label":"Permalink to “Q: Windows 上安装失败”"},"​")],-1)),n[4]||(n[4]=l("p",null,[l("strong",null,"A"),a(": 推荐使用包管理器安装：")],-1)),n[5]||(n[5]=l("div",{class:"language-powershell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"powershell"),l("pre",null,[l("code",{"v-pre":""},`# 使用 Scoop
scoop install opencode

# 或使用 Chocolatey
choco install opencode

# 或使用 npm
npm install -g @anthropic-ai/opencode`)])],-1)),n[6]||(n[6]=l("p",null,"确保以管理员权限运行终端。",-1)),n[7]||(n[7]=l("hr",null,null,-1)),n[8]||(n[8]=l("h3",{id:"q-macos-提示-无法验证开发者",tabindex:"-1"},[a('Q: macOS 提示"无法验证开发者" '),l("a",{class:"header-anchor",href:"#q-macos-提示-无法验证开发者","aria-label":'Permalink to “Q: macOS 提示"无法验证开发者"”'},"​")],-1)),n[9]||(n[9]=l("p",null,[l("strong",null,"A"),a(": 这是 macOS 的安全限制。")],-1)),n[10]||(n[10]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 方法1：右键点击应用，选择"打开"
# 方法2：在终端运行
xattr -d com.apple.quarantine /path/to/opencode`)])],-1)),n[11]||(n[11]=l("hr",null,null,-1)),n[12]||(n[12]=l("h3",{id:"q-版本更新后功能异常",tabindex:"-1"},[a("Q: 版本更新后功能异常 "),l("a",{class:"header-anchor",href:"#q-版本更新后功能异常","aria-label":"Permalink to “Q: 版本更新后功能异常”"},"​")],-1)),n[13]||(n[13]=l("p",null,[l("strong",null,"A"),a(": 尝试清除缓存并重新安装：")],-1)),n[14]||(n[14]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 清除缓存
rm -rf ~/.cache/opencode

# 重新安装
opencode upgrade --force`)])],-1)),n[15]||(n[15]=l("hr",null,null,-1)),n[16]||(n[16]=l("h2",{id:"网络问题",tabindex:"-1"},[a("网络问题 "),l("a",{class:"header-anchor",href:"#网络问题","aria-label":"Permalink to “网络问题”"},"​")],-1)),n[17]||(n[17]=l("h3",{id:"q-连接超时-提示-etimedout-或-econnrefused",tabindex:"-1"},[a('Q: 连接超时，提示 "ETIMEDOUT" 或 "ECONNREFUSED" '),l("a",{class:"header-anchor",href:"#q-连接超时-提示-etimedout-或-econnrefused","aria-label":'Permalink to “Q: 连接超时，提示 "ETIMEDOUT" 或 "ECONNREFUSED"”'},"​")],-1)),n[18]||(n[18]=l("p",null,[l("strong",null,"A"),a(": 这是网络连接问题，国内用户常见。")],-1)),n[19]||(n[19]=l("p",null,[l("strong",null,"方案1：设置代理")],-1)),n[20]||(n[20]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890
opencode`)])],-1)),n[21]||(n[21]=l("p",null,[l("strong",null,"方案2：使用国产模型")],-1)),n[22]||(n[22]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 直接使用智谱或 DeepSeek，国内可直连
opencode
/connect  # 选择 Z.AI 或 DeepSeek`)])],-1)),n[23]||(n[23]=o('<p>详见 <a href="./../1-start/03-network.html">网络配置</a>。</p><hr><h3 id="q-代理设置了但还是连不上" tabindex="-1">Q: 代理设置了但还是连不上 <a class="header-anchor" href="#q-代理设置了但还是连不上" aria-label="Permalink to “Q: 代理设置了但还是连不上”">​</a></h3><p><strong>A</strong>: 检查以下几点：</p><ol><li>确认代理软件正在运行</li><li>确认代理端口正确</li><li>检查是否需要设置 NO_PROXY</li><li>尝试使用 <code>curl</code> 测试：</li></ol>',5)),n[24]||(n[24]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"curl -x http://127.0.0.1:7890 https://api.anthropic.com")])],-1)),n[25]||(n[25]=l("hr",null,null,-1)),n[26]||(n[26]=l("h3",{id:"q-公司网络需要证书怎么办",tabindex:"-1"},[a("Q: 公司网络需要证书怎么办 "),l("a",{class:"header-anchor",href:"#q-公司网络需要证书怎么办","aria-label":"Permalink to “Q: 公司网络需要证书怎么办”"},"​")],-1)),n[27]||(n[27]=l("p",null,[l("strong",null,"A"),a(": 设置自定义证书：")],-1)),n[28]||(n[28]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`export NODE_EXTRA_CA_CERTS=/path/to/certificate.pem
opencode`)])],-1)),n[29]||(n[29]=l("p",null,"或在配置文件中设置：",-1)),n[30]||(n[30]=l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "network": {
    "ca_cert": "/path/to/certificate.pem"
  }
}`)])],-1)),n[31]||(n[31]=l("hr",null,null,-1)),n[32]||(n[32]=l("h2",{id:"模型配置问题",tabindex:"-1"},[a("模型配置问题 "),l("a",{class:"header-anchor",href:"#模型配置问题","aria-label":"Permalink to “模型配置问题”"},"​")],-1)),p(e),n[33]||(n[33]=l("h3",{id:"q-api-key-设置了但提示-认证失败",tabindex:"-1"},[a('Q: API Key 设置了但提示"认证失败" '),l("a",{class:"header-anchor",href:"#q-api-key-设置了但提示-认证失败","aria-label":'Permalink to “Q: API Key 设置了但提示"认证失败"”'},"​")],-1)),n[34]||(n[34]=l("p",null,[l("strong",null,"A"),a(": 检查以下几点：")],-1)),n[35]||(n[35]=l("ol",null,[l("li",null,[l("p",null,[l("strong",null,"API Key 格式正确"),a("：不同提供商格式不同")]),l("ul",null,[l("li",null,[a("Anthropic: "),l("code",null,"sk-ant-xxx")]),l("li",null,[a("OpenAI: "),l("code",null,"sk-xxx")]),l("li",null,[a("DeepSeek: "),l("code",null,"sk-xxx")])])]),l("li",null,[l("p",null,[l("strong",null,"API Key 有效"),a("：在提供商官网测试")])]),l("li",null,[l("p",null,[l("strong",null,"环境变量设置正确"),a("：")]),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"echo $ANTHROPIC_API_KEY  # 检查是否有值")])])]),l("li",null,[l("p",null,[l("strong",null,"配置文件语法正确"),a("：")]),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"cat ~/.config/opencode/opencode.json | jq .  # 检查 JSON 格式")])])])],-1)),n[36]||(n[36]=o('<hr><h3 id="q-提示-模型不可用-或-quota-exceeded" tabindex="-1">Q: 提示&quot;模型不可用&quot;或&quot;quota exceeded&quot; <a class="header-anchor" href="#q-提示-模型不可用-或-quota-exceeded" aria-label="Permalink to “Q: 提示&quot;模型不可用&quot;或&quot;quota exceeded&quot;”">​</a></h3><p><strong>A</strong>:</p><ol><li><strong>额度用完</strong>：检查提供商账户余额</li><li><strong>模型名称错误</strong>：检查模型标识符是否正确</li><li><strong>账户限制</strong>：某些模型需要付费账户</li></ol>',4)),n[37]||(n[37]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 列出可用模型
opencode models`)])],-1)),n[38]||(n[38]=l("hr",null,null,-1)),n[39]||(n[39]=l("h3",{id:"q-如何切换不同的模型",tabindex:"-1"},[a("Q: 如何切换不同的模型 "),l("a",{class:"header-anchor",href:"#q-如何切换不同的模型","aria-label":"Permalink to “Q: 如何切换不同的模型”"},"​")],-1)),n[40]||(n[40]=l("p",null,[l("strong",null,"A"),a(":")],-1)),n[41]||(n[41]=l("p",null,[l("strong",null,"方法1：TUI 中切换")],-1)),n[42]||(n[42]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},"/models")])],-1)),n[43]||(n[43]=l("p",null,[l("strong",null,"方法2：命令行指定")],-1)),n[44]||(n[44]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"opencode -m deepseek-chat")])],-1)),n[45]||(n[45]=l("p",null,[l("strong",null,"方法3：配置文件设置默认值")],-1)),n[46]||(n[46]=l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "model": "deepseek-chat"
}`)])],-1)),n[47]||(n[47]=l("hr",null,null,-1)),n[48]||(n[48]=l("h3",{id:"q-多个提供商如何配置",tabindex:"-1"},[a("Q: 多个提供商如何配置 "),l("a",{class:"header-anchor",href:"#q-多个提供商如何配置","aria-label":"Permalink to “Q: 多个提供商如何配置”"},"​")],-1)),n[49]||(n[49]=l("p",null,[l("strong",null,"A"),a(": 在配置文件中添加多个提供商：")],-1)),n[50]||(n[50]=l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}"
      }
    },
    "deepseek": {
      "options": {
        "apiKey": "{env:DEEPSEEK_API_KEY}"
      }
    },
    "openai": {
      "options": {
        "apiKey": "{env:OPENAI_API_KEY}"
      }
    }
  }
}`)])],-1)),n[51]||(n[51]=o('<p>然后用 <code>/models</code> 切换。</p><hr><h2 id="权限问题" tabindex="-1">权限问题 <a class="header-anchor" href="#权限问题" aria-label="Permalink to “权限问题”">​</a></h2><h3 id="q-每次操作都要确认太烦了" tabindex="-1">Q: 每次操作都要确认太烦了 <a class="header-anchor" href="#q-每次操作都要确认太烦了" aria-label="Permalink to “Q: 每次操作都要确认太烦了”">​</a></h3><p><strong>A</strong>: 可以设置权限模式：</p><p><strong>方法1：本次会话自动允许</strong></p><ul><li>按 <code>a</code> 键选择&quot;始终允许&quot;</li></ul><p><strong>方法2：配置文件设置</strong></p>',8)),n[52]||(n[52]=l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "permission": {
    "read": "allow",
    "edit": "allow",
    "bash": "allow"
  }
}`)])],-1)),n[53]||(n[53]=l("p",null,[l("strong",null,"方法3：细粒度控制")],-1)),n[54]||(n[54]=l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "permission": {
    "read": "allow",
    "edit": "ask",
    "bash": "ask"
  }
}`)])],-1)),n[55]||(n[55]=o('<hr><h3 id="q-ai-执行了不想执行的命令" tabindex="-1">Q: AI 执行了不想执行的命令 <a class="header-anchor" href="#q-ai-执行了不想执行的命令" aria-label="Permalink to “Q: AI 执行了不想执行的命令”">​</a></h3><p><strong>A</strong>:</p><ol><li>按 <code>Ctrl+C</code> 立即中断</li><li>使用 <code>/undo</code> 撤销文件修改</li><li>设置更严格的权限：</li></ol>',4)),n[56]||(n[56]=l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "permission": {
    "bash": "ask"
  }
}`)])],-1)),n[57]||(n[57]=l("hr",null,null,-1)),n[58]||(n[58]=l("h3",{id:"q-如何限制-ai-只读不写",tabindex:"-1"},[a("Q: 如何限制 AI 只读不写 "),l("a",{class:"header-anchor",href:"#q-如何限制-ai-只读不写","aria-label":"Permalink to “Q: 如何限制 AI 只读不写”"},"​")],-1)),n[59]||(n[59]=l("p",null,[l("strong",null,"A"),a(": 使用 Plan 模式：")],-1)),n[60]||(n[60]=l("ol",null,[l("li",null,[a("按 "),l("code",null,"Tab"),a(" 切换到 Plan 模式")]),l("li",null,[a("或启动时指定 Agent："),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"opencode -a plan")])])])],-1)),n[61]||(n[61]=o('<hr><h2 id="性能问题" tabindex="-1">性能问题 <a class="header-anchor" href="#性能问题" aria-label="Permalink to “性能问题”">​</a></h2><h3 id="q-响应很慢" tabindex="-1">Q: 响应很慢 <a class="header-anchor" href="#q-响应很慢" aria-label="Permalink to “Q: 响应很慢”">​</a></h3><p><strong>A</strong>: 可能的原因和解决方案：</p><ol><li><strong>网络延迟</strong>：使用代理或切换到国产模型</li><li><strong>模型太大</strong>：使用更小的模型（如 <code>small_model</code>）</li><li><strong>上下文太长</strong>：使用 <code>/compact</code> 压缩上下文</li></ol><hr><h3 id="q-上下文太长导致报错" tabindex="-1">Q: 上下文太长导致报错 <a class="header-anchor" href="#q-上下文太长导致报错" aria-label="Permalink to “Q: 上下文太长导致报错”">​</a></h3><p><strong>A</strong>:</p>',8)),n[62]||(n[62]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 手动压缩
/compact

# 配置中的压缩选项
{
  "compaction": {
    "auto": true,
    "prune": true
  }
}`)])],-1)),n[63]||(n[63]=l("blockquote",null,[l("p",null,[l("code",null,"auto"),a("：上下文满时自动压缩；"),l("code",null,"prune"),a("：移除旧工具输出以节省 token")])],-1)),n[64]||(n[64]=l("hr",null,null,-1)),n[65]||(n[65]=l("h3",{id:"q-内存占用过高",tabindex:"-1"},[a("Q: 内存占用过高 "),l("a",{class:"header-anchor",href:"#q-内存占用过高","aria-label":"Permalink to “Q: 内存占用过高”"},"​")],-1)),n[66]||(n[66]=l("p",null,[l("strong",null,"A"),a(":")],-1)),n[67]||(n[67]=l("ol",null,[l("li",null,"关闭不用的会话"),l("li",null,[a("配置文件监视忽略目录："),l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "watcher": {
    "ignore": ["node_modules/**", "dist/**", ".git/**"]
  }
}`)])])]),l("li",null,"使用更小的模型")],-1)),n[68]||(n[68]=l("hr",null,null,-1)),n[69]||(n[69]=l("h2",{id:"功能问题",tabindex:"-1"},[a("功能问题 "),l("a",{class:"header-anchor",href:"#功能问题","aria-label":"Permalink to “功能问题”"},"​")],-1)),n[70]||(n[70]=l("h3",{id:"q-如何让-ai-记住我的偏好",tabindex:"-1"},[a("Q: 如何让 AI 记住我的偏好 "),l("a",{class:"header-anchor",href:"#q-如何让-ai-记住我的偏好","aria-label":"Permalink to “Q: 如何让 AI 记住我的偏好”"},"​")],-1)),n[71]||(n[71]=l("p",null,[l("strong",null,"A"),a(": 使用 AGENTS.md 或 CLAUDE.md 文件：")],-1)),n[72]||(n[72]=l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`<!-- AGENTS.md -->
# 项目规则

- 使用 TypeScript
- 使用 pnpm 而不是 npm
- 代码注释使用中文
- 遵循 ESLint 规则`)])],-1)),n[73]||(n[73]=l("p",null,[a("或运行 "),l("code",null,"/init"),a(" 自动生成。")],-1)),n[74]||(n[74]=l("hr",null,null,-1)),n[75]||(n[75]=l("h3",{id:"q-历史会话找不到了",tabindex:"-1"},[a("Q: 历史会话找不到了 "),l("a",{class:"header-anchor",href:"#q-历史会话找不到了","aria-label":"Permalink to “Q: 历史会话找不到了”"},"​")],-1)),n[76]||(n[76]=l("p",null,[l("strong",null,"A"),a(":")],-1)),n[77]||(n[77]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 列出所有会话
opencode session list

# 在 TUI 中查看
/sessions`)])],-1)),n[78]||(n[78]=l("p",null,[a("会话存储在 "),l("code",null,"~/.local/share/opencode/sessions/"),a("。")],-1)),n[79]||(n[79]=l("hr",null,null,-1)),n[80]||(n[80]=l("h3",{id:"q-如何导出对话记录",tabindex:"-1"},[a("Q: 如何导出对话记录 "),l("a",{class:"header-anchor",href:"#q-如何导出对话记录","aria-label":"Permalink to “Q: 如何导出对话记录”"},"​")],-1)),n[81]||(n[81]=l("p",null,[l("strong",null,"A"),a(":")],-1)),n[82]||(n[82]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# TUI 中导出
/export

# 命令行导出
opencode session export <session-id> -o conversation.md`)])],-1)),n[83]||(n[83]=o('<hr><h3 id="q-文件修改没有生效" tabindex="-1">Q: 文件修改没有生效 <a class="header-anchor" href="#q-文件修改没有生效" aria-label="Permalink to “Q: 文件修改没有生效”">​</a></h3><p><strong>A</strong>: 检查以下几点：</p><ol><li>确认在 Build 模式（不是 Plan 模式）</li><li>检查文件权限</li><li>查看是否有权限提示被忽略</li><li>使用 <code>/details</code> 查看操作详情</li></ol><hr><h3 id="q-git-撤销-重做不工作" tabindex="-1">Q: Git 撤销/重做不工作 <a class="header-anchor" href="#q-git-撤销-重做不工作" aria-label="Permalink to “Q: Git 撤销/重做不工作”">​</a></h3><p><strong>A</strong>:</p>',7)),n[84]||(n[84]=l("ol",null,[l("li",null,"确认项目是 Git 仓库"),l("li",null,"确认有未提交的修改"),l("li",null,[a("检查 Git 状态："),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"git status")])])])],-1)),n[85]||(n[85]=l("hr",null,null,-1)),n[86]||(n[86]=l("h2",{id:"兼容性问题",tabindex:"-1"},[a("兼容性问题 "),l("a",{class:"header-anchor",href:"#兼容性问题","aria-label":"Permalink to “兼容性问题”"},"​")],-1)),n[87]||(n[87]=l("h3",{id:"q-终端显示乱码",tabindex:"-1"},[a("Q: 终端显示乱码 "),l("a",{class:"header-anchor",href:"#q-终端显示乱码","aria-label":"Permalink to “Q: 终端显示乱码”"},"​")],-1)),n[88]||(n[88]=l("p",null,[l("strong",null,"A"),a(":")],-1)),n[89]||(n[89]=l("ol",null,[l("li",null,"使用推荐终端：WezTerm / Alacritty / iTerm2"),l("li",null,[a("设置正确的编码："),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},"export LANG=en_US.UTF-8")])])]),l("li",null,"使用支持的字体（推荐 Nerd Fonts）")],-1)),n[90]||(n[90]=o('<hr><h3 id="q-快捷键不工作" tabindex="-1">Q: 快捷键不工作 <a class="header-anchor" href="#q-快捷键不工作" aria-label="Permalink to “Q: 快捷键不工作”">​</a></h3><p><strong>A</strong>:</p><ol><li>检查终端是否拦截了快捷键</li><li>某些终端需要特殊配置</li><li>尝试使用斜杠命令代替</li></ol><hr><h3 id="q-vs-code-扩展找不到" tabindex="-1">Q: VS Code 扩展找不到 <a class="header-anchor" href="#q-vs-code-扩展找不到" aria-label="Permalink to “Q: VS Code 扩展找不到”">​</a></h3><p><strong>A</strong>:</p>',7)),n[91]||(n[91]=l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 手动安装扩展
code --install-extension anthropic.opencode

# 或在 VS Code 中搜索 "OpenCode"`)])],-1)),n[92]||(n[92]=o('<hr><h2 id="其他问题" tabindex="-1">其他问题 <a class="header-anchor" href="#其他问题" aria-label="Permalink to “其他问题”">​</a></h2><h3 id="q-如何获取帮助" tabindex="-1">Q: 如何获取帮助 <a class="header-anchor" href="#q-如何获取帮助" aria-label="Permalink to “Q: 如何获取帮助”">​</a></h3><p><strong>A</strong>:</p><ol><li>查看帮助：<code>/help</code></li><li>查看文档：<a href="https://opencode.ai/docs" target="_blank" rel="noreferrer">opencode.ai/docs</a></li><li>提交 Issue：<a href="https://github.com/vbgate/learn-opencode" target="_blank" rel="noreferrer">github.com/vbgate/learn-opencode</a></li></ol><hr><h3 id="q-如何报告-bug" tabindex="-1">Q: 如何报告 Bug <a class="header-anchor" href="#q-如何报告-bug" aria-label="Permalink to “Q: 如何报告 Bug”">​</a></h3><p><strong>A</strong>:</p>',8)),n[93]||(n[93]=l("ol",null,[l("li",null,[l("p",null,"收集信息："),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`opencode --version
uname -a
echo $SHELL`)])])]),l("li",null,[l("p",null,"复现步骤")]),l("li",null,[l("p",null,"在 GitHub 提交 Issue")])],-1)),n[94]||(n[94]=o('<hr><h3 id="q-如何贡献代码" tabindex="-1">Q: 如何贡献代码 <a class="header-anchor" href="#q-如何贡献代码" aria-label="Permalink to “Q: 如何贡献代码”">​</a></h3><p><strong>A</strong>:</p><ol><li>Fork 仓库</li><li>创建分支</li><li>提交 PR</li><li>等待审核</li></ol><p>详见 <a href="https://github.com/anomalyco/opencode/blob/dev/CONTRIBUTING.md" target="_blank" rel="noreferrer">贡献指南</a></p><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./troubleshoot.html">故障排除</a> - 详细故障排查</li><li><a href="./../1-start/03-network.html">网络配置</a> - 网络问题解决</li><li><a href="./providers.html">模型提供商</a> - 可用模型列表</li></ul><div class="tip custom-block"><p class="custom-block-title">没找到答案？</p><p><a href="/community.html">加入社群</a>，和 2000+ 同路人一起交流，实时答疑。</p></div>',9))])}const P=s(u,[["render",g]]);export{q as __pageData,P as default};
