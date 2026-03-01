import{_ as d,I as r,c as a,o as s,a5 as e,j as t,J as i,a as o,bD as p}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"故障排除：快速定位和解决常见问题 | OpenCode 教程","description":"快速定位和解决 OpenCode 使用中的常见问题。涵盖 API 错误、上下文溢出、权限拒绝、输出截断、重试机制等，附完整错误代码速查表和诊断清单。","frontmatter":{"title":"故障排除：快速定位和解决常见问题 | OpenCode 教程","description":"快速定位和解决 OpenCode 使用中的常见问题。涵盖 API 错误、上下文溢出、权限拒绝、输出截断、重试机制等，附完整错误代码速查表和诊断清单。"},"headers":[],"relativePath":"appendix/troubleshoot.md","filePath":"appendix/troubleshoot.md","lastUpdated":1772014034000}'),u={name:"appendix/troubleshoot.md"};function b(g,l,h,c,m,C){const n=r("AdInArticle");return s(),a("div",null,[l[0]||(l[0]=e("",10)),l[1]||(l[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 查看最新日志
ls -lt ~/.local/share/opencode/log/ | head

# 开启调试日志
opencode --log-level DEBUG

# 打印日志到终端
opencode --print-logs`)])],-1)),l[2]||(l[2]=e("",6)),l[3]||(l[3]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"zsh: command not found: opencode")])],-1)),l[4]||(l[4]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[5]||(l[5]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 检查是否安装
which opencode
npm list -g opencode-ai

# 2. 检查 PATH
echo $PATH | tr ':' '\\n' | grep -E "(npm|bin)"`)])],-1)),l[6]||(l[6]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[7]||(l[7]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 重新安装
npm install -g opencode-ai

# 手动添加到 PATH
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc`)])],-1)),l[8]||(l[8]=t("hr",null,null,-1)),l[9]||(l[9]=t("h3",{id:"启动崩溃-白屏",tabindex:"-1"},[o("启动崩溃 / 白屏 "),t("a",{class:"header-anchor",href:"#启动崩溃-白屏","aria-label":"Permalink to “启动崩溃 / 白屏”"},"​")],-1)),l[10]||(l[10]=t("p",null,[t("strong",null,"症状"),o("：启动后立即退出或显示空白屏幕")],-1)),l[11]||(l[11]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[12]||(l[12]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 查看错误日志
opencode --print-logs 2>&1 | head -50

# 2. 清除缓存重试
rm -rf ~/.cache/opencode
opencode

# 3. 重置配置
mv ~/.config/opencode/opencode.json ~/.config/opencode/opencode.json.bak
opencode`)])],-1)),l[13]||(l[13]=e("",5)),l[14]||(l[14]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"ProviderInitError: Failed to initialize provider")])],-1)),l[15]||(l[15]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[16]||(l[16]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 验证提供商配置
opencode auth list

# 2. 清除存储重试
rm -rf ~/.local/share/opencode`)])],-1)),l[17]||(l[17]=e("",4)),i(n),l[18]||(l[18]=t("h3",{id:"api-key-无效",tabindex:"-1"},[o("API Key 无效 "),t("a",{class:"header-anchor",href:"#api-key-无效","aria-label":"Permalink to “API Key 无效”"},"​")],-1)),l[19]||(l[19]=t("p",null,[t("strong",null,"症状"),o("：")],-1)),l[20]||(l[20]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"AuthenticationError: Invalid API key")])],-1)),l[21]||(l[21]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[22]||(l[22]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 检查已配置的凭证
opencode auth list

# 检查环境变量
env | grep API_KEY`)])],-1)),l[23]||(l[23]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[24]||(l[24]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 重新配置
opencode auth login
# 或在 TUI 中
/connect`)])],-1)),l[25]||(l[25]=t("hr",null,null,-1)),l[26]||(l[26]=t("h3",{id:"github-copilot-认证失败",tabindex:"-1"},[o("GitHub Copilot 认证失败 "),t("a",{class:"header-anchor",href:"#github-copilot-认证失败","aria-label":"Permalink to “GitHub Copilot 认证失败”"},"​")],-1)),l[27]||(l[27]=t("p",null,[t("strong",null,"症状"),o("：")],-1)),l[28]||(l[28]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`Error: 403 Forbidden
Please reauthenticate with the copilot provider to ensure
your credentials work properly with OpenCode.`)])],-1)),l[29]||(l[29]=t("p",null,[t("strong",null,"原因"),o("：GitHub Copilot 的 OAuth Token 过期或失效。")],-1)),l[30]||(l[30]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[31]||(l[31]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 重新认证 GitHub Copilot
opencode auth login
# 选择 github-copilot 提供商，按提示完成 OAuth 流程`)])],-1)),l[32]||(l[32]=t("p",null,"如果使用 GitHub Enterprise：",-1)),l[33]||(l[33]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 在配置中指定 Enterprise URL
{
  "provider": {
    "github-copilot": {
      "options": {
        "enterpriseUrl": "https://github.your-company.com"
      }
    }
  }
}`)])],-1)),l[34]||(l[34]=t("hr",null,null,-1)),l[35]||(l[35]=t("h3",{id:"token-配额超限",tabindex:"-1"},[o("Token 配额超限 "),t("a",{class:"header-anchor",href:"#token-配额超限","aria-label":"Permalink to “Token 配额超限”"},"​")],-1)),l[36]||(l[36]=t("p",null,[t("strong",null,"症状"),o("：")],-1)),l[37]||(l[37]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"RateLimitError: quota exceeded")])],-1)),l[38]||(l[38]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[39]||(l[39]=t("ol",null,[t("li",null,"等待配额重置"),t("li",null,"升级账户计划"),t("li",null,"切换到其他提供商/模型")],-1)),l[40]||(l[40]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 切换模型
opencode -m zhipu/glm-4-flash`)])],-1)),l[41]||(l[41]=t("hr",null,null,-1)),l[42]||(l[42]=t("h2",{id:"模型问题",tabindex:"-1"},[o("模型问题 "),t("a",{class:"header-anchor",href:"#模型问题","aria-label":"Permalink to “模型问题”"},"​")],-1)),l[43]||(l[43]=t("h3",{id:"ai-apicallerror",tabindex:"-1"},[o("AI_APICallError "),t("a",{class:"header-anchor",href:"#ai-apicallerror","aria-label":"Permalink to “AI_APICallError”"},"​")],-1)),l[44]||(l[44]=t("p",null,[t("strong",null,"症状"),o("：")],-1)),l[45]||(l[45]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"AI_APICallError: API call failed")])],-1)),l[46]||(l[46]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[47]||(l[47]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 检查网络
curl -I https://api.anthropic.com

# 2. 清除提供商包缓存
rm -rf ~/.cache/opencode

# 3. 重启 opencode`)])],-1)),l[48]||(l[48]=e("",5)),l[49]||(l[49]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"ProviderModelNotFoundError: Model not found")])],-1)),l[50]||(l[50]=e("",5)),l[51]||(l[51]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 查看可用模型
opencode models`)])],-1)),l[52]||(l[52]=e("",6)),l[53]||(l[53]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`# 压缩上下文
/compact

# 新建会话
/new

# 切换模型
/models`)])],-1)),l[54]||(l[54]=e("",5)),l[55]||(l[55]=t("details",{class:"details custom-block"},[t("summary",null,"重试延迟计算（提供商未返回响应头时）"),t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`首次重试: 2 秒
第二次:   4 秒
第三次:   8 秒
第四次:  16 秒
第五次:  30 秒（触及上限，不再增长）`)])]),t("p",null,[o("如果提供商返回了 "),t("code",null,"Retry-After"),o(" 或 "),t("code",null,"Retry-After-Ms"),o(" 响应头，OpenCode 会优先使用提供商指定的等待时间，不受 30 秒上限限制。")])],-1)),l[56]||(l[56]=e("",9)),l[57]||(l[57]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`...2000+ lines truncated...

The tool call succeeded but the output was truncated.
Full output saved to: /path/to/tool-output/tool_xxx
Use Grep to search the full content or Read with offset/limit
to view specific sections.`)])],-1)),l[58]||(l[58]=e("",8)),l[59]||(l[59]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"The user rejected permission to use this specific tool call.")])],-1)),l[60]||(l[60]=e("",7)),l[61]||(l[61]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "read": "allow",
    "edit": "allow",
    "bash": "ask"
  }
}`)])],-1)),l[62]||(l[62]=t("p",null,"也可以针对特定文件模式设置：",-1)),l[63]||(l[63]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "allow"
    }
  }
}`)])],-1)),l[64]||(l[64]=t("hr",null,null,-1)),l[65]||(l[65]=t("h2",{id:"网络问题",tabindex:"-1"},[o("网络问题 "),t("a",{class:"header-anchor",href:"#网络问题","aria-label":"Permalink to “网络问题”"},"​")],-1)),l[66]||(l[66]=t("h3",{id:"连接超时",tabindex:"-1"},[o("连接超时 "),t("a",{class:"header-anchor",href:"#连接超时","aria-label":"Permalink to “连接超时”"},"​")],-1)),l[67]||(l[67]=t("p",null,[t("strong",null,"症状"),o("：")],-1)),l[68]||(l[68]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"ETIMEDOUT / ECONNREFUSED / ECONNRESET")])],-1)),l[69]||(l[69]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[70]||(l[70]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 测试基本网络
ping api.anthropic.com

# 2. 测试 HTTPS
curl -v https://api.anthropic.com

# 3. 测试代理
curl -x http://127.0.0.1:7890 https://api.anthropic.com`)])],-1)),l[71]||(l[71]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[72]||(l[72]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 设置代理
export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890

# 或使用国产模型（无需代理）
/connect  # 选择 Z.AI`)])],-1)),l[73]||(l[73]=t("hr",null,null,-1)),l[74]||(l[74]=t("h3",{id:"ssl-tls-错误",tabindex:"-1"},[o("SSL/TLS 错误 "),t("a",{class:"header-anchor",href:"#ssl-tls-错误","aria-label":"Permalink to “SSL/TLS 错误”"},"​")],-1)),l[75]||(l[75]=t("p",null,[t("strong",null,"症状"),o("：")],-1)),l[76]||(l[76]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`UNABLE_TO_VERIFY_LEAF_SIGNATURE
CERT_HAS_EXPIRED`)])],-1)),l[77]||(l[77]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[78]||(l[78]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 企业证书
export NODE_EXTRA_CA_CERTS=/path/to/cert.pem

# 临时禁用验证（不推荐生产使用）
export NODE_TLS_REJECT_UNAUTHORIZED=0`)])],-1)),l[79]||(l[79]=t("hr",null,null,-1)),l[80]||(l[80]=t("h2",{id:"文件操作问题",tabindex:"-1"},[o("文件操作问题 "),t("a",{class:"header-anchor",href:"#文件操作问题","aria-label":"Permalink to “文件操作问题”"},"​")],-1)),l[81]||(l[81]=t("h3",{id:"文件写入失败",tabindex:"-1"},[o("文件写入失败 "),t("a",{class:"header-anchor",href:"#文件写入失败","aria-label":"Permalink to “文件写入失败”"},"​")],-1)),l[82]||(l[82]=t("p",null,[t("strong",null,"症状"),o("：AI 说修改了文件但实际没变")],-1)),l[83]||(l[83]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[84]||(l[84]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 检查文件权限
ls -la path/to/file

# 2. 检查 OpenCode 权限设置
cat ~/.config/opencode/opencode.json | jq .permission`)])],-1)),l[85]||(l[85]=e("",6)),l[86]||(l[86]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 确认是 Git 仓库
git status`)])],-1)),l[87]||(l[87]=e("",7)),l[88]||(l[88]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 设置正确编码
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# 使用推荐终端
# WezTerm / Alacritty / iTerm2

# 使用 Nerd Fonts 字体`)])],-1)),l[89]||(l[89]=t("hr",null,null,-1)),l[90]||(l[90]=t("h3",{id:"颜色不正确",tabindex:"-1"},[o("颜色不正确 "),t("a",{class:"header-anchor",href:"#颜色不正确","aria-label":"Permalink to “颜色不正确”"},"​")],-1)),l[91]||(l[91]=t("p",null,[t("strong",null,"症状"),o("：颜色显示异常或没有颜色")],-1)),l[92]||(l[92]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[93]||(l[93]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 设置 truecolor
export COLORTERM=truecolor

# 设置终端类型
export TERM=xterm-256color

# 切换主题
/theme`)])],-1)),l[94]||(l[94]=t("hr",null,null,-1)),l[95]||(l[95]=t("h2",{id:"linux-特有问题",tabindex:"-1"},[o("Linux 特有问题 "),t("a",{class:"header-anchor",href:"#linux-特有问题","aria-label":"Permalink to “Linux 特有问题”"},"​")],-1)),l[96]||(l[96]=t("h3",{id:"剪贴板不工作",tabindex:"-1"},[o("剪贴板不工作 "),t("a",{class:"header-anchor",href:"#剪贴板不工作","aria-label":"Permalink to “剪贴板不工作”"},"​")],-1)),l[97]||(l[97]=t("p",null,[t("strong",null,"症状"),o("：复制粘贴失败")],-1)),l[98]||(l[98]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[99]||(l[99]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# X11
sudo apt install xclip
# 或
sudo apt install xsel

# Wayland
sudo apt install wl-clipboard

# 无头环境
sudo apt install xvfb
Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
export DISPLAY=:99.0`)])],-1)),l[100]||(l[100]=t("hr",null,null,-1)),l[101]||(l[101]=t("h3",{id:"npm-安装权限不足-eacces",tabindex:"-1"},[o("npm 安装权限不足 (EACCES) "),t("a",{class:"header-anchor",href:"#npm-安装权限不足-eacces","aria-label":"Permalink to “npm 安装权限不足 (EACCES)”"},"​")],-1)),l[102]||(l[102]=t("p",null,[t("strong",null,"症状"),o("：")],-1)),l[103]||(l[103]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"EACCES: permission denied")])],-1)),l[104]||(l[104]=t("p",null,[t("strong",null,"解决方案"),o("：")],-1)),l[105]||(l[105]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 修复 npm 权限
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# 重新安装
npm install -g opencode-ai`)])],-1)),l[106]||(l[106]=e("",4)),l[107]||(l[107]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 快速诊断三连
opencode --version
opencode auth list
opencode --log-level DEBUG --print-logs`)])],-1)),l[108]||(l[108]=e("",12)),l[109]||(l[109]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 版本信息
opencode --version

# 系统信息
uname -a

# 调试日志
opencode --log-level DEBUG --print-logs

# 查看已认证的提供商
opencode auth list

# 查看可用模型
opencode models`)])],-1)),l[110]||(l[110]=t("hr",null,null,-1)),l[111]||(l[111]=t("h2",{id:"获取帮助",tabindex:"-1"},[o("获取帮助 "),t("a",{class:"header-anchor",href:"#获取帮助","aria-label":"Permalink to “获取帮助”"},"​")],-1)),l[112]||(l[112]=t("p",null,"如果以上方法都无法解决问题：",-1)),l[113]||(l[113]=t("ol",null,[t("li",null,[t("p",null,[t("strong",null,"收集信息"),o("：")]),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`opencode --version > debug.txt
uname -a >> debug.txt
cat ~/.config/opencode/opencode.json >> debug.txt 2>/dev/null
ls -la ~/.local/share/opencode/log/ >> debug.txt`)])])]),t("li",null,[t("p",null,[t("strong",null,"提交 Issue"),o("："),t("a",{href:"https://github.com/anomalyco/opencode/issues",target:"_blank",rel:"noreferrer"},"github.com/anomalyco/opencode/issues")])])],-1)),l[114]||(l[114]=e("",4))])}const P=d(u,[["render",b]]);export{v as __pageData,P as default};
