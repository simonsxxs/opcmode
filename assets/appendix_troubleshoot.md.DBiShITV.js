import{_ as d,I as r,c as a,o as s,a5 as e,j as t,J as i,a as o,bD as p}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"故障排除：快速定位和解决常见问题 | OpenCode 教程","description":"快速定位和解决 OpenCode 使用中的常见问题。涵盖 API 错误、上下文溢出、权限拒绝、输出截断、重试机制等，附完整错误代码速查表和诊断清单。","frontmatter":{"title":"故障排除：快速定位和解决常见问题 | OpenCode 教程","description":"快速定位和解决 OpenCode 使用中的常见问题。涵盖 API 错误、上下文溢出、权限拒绝、输出截断、重试机制等，附完整错误代码速查表和诊断清单。"},"headers":[],"relativePath":"appendix/troubleshoot.md","filePath":"appendix/troubleshoot.md","lastUpdated":1772014034000}'),u={name:"appendix/troubleshoot.md"};function b(g,l,h,c,m,C){const n=r("AdInArticle");return s(),a("div",null,[l[0]||(l[0]=e('<h1 id="故障排除" tabindex="-1">故障排除 <a class="header-anchor" href="#故障排除" aria-label="Permalink to “故障排除”">​</a></h1><blockquote><p>系统性地诊断和解决问题</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="故障排除学霸笔记" data-zoom-src="/images/appendix/troubleshoot-notes.jpeg"></p><hr><h2 id="日志和存储位置" tabindex="-1">日志和存储位置 <a class="header-anchor" href="#日志和存储位置" aria-label="Permalink to “日志和存储位置”">​</a></h2><h3 id="日志文件" tabindex="-1">日志文件 <a class="header-anchor" href="#日志文件" aria-label="Permalink to “日志文件”">​</a></h3><table tabindex="0"><thead><tr><th>平台</th><th>路径</th></tr></thead><tbody><tr><td>macOS/Linux</td><td><code>~/.local/share/opencode/log/</code></td></tr><tr><td>Windows</td><td><code>%USERPROFILE%\\.local\\share\\opencode\\log\\</code></td></tr></tbody></table><p>日志文件以时间戳命名（如 <code>2025-01-09T123456.log</code>），保留最近 10 个。</p>',10)),l[1]||(l[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 查看最新日志
ls -lt ~/.local/share/opencode/log/ | head

# 开启调试日志
opencode --log-level DEBUG

# 打印日志到终端
opencode --print-logs`)])],-1)),l[2]||(l[2]=e('<h3 id="存储位置" tabindex="-1">存储位置 <a class="header-anchor" href="#存储位置" aria-label="Permalink to “存储位置”">​</a></h3><table tabindex="0"><thead><tr><th>数据类型</th><th>路径</th></tr></thead><tbody><tr><td>配置文件</td><td><code>~/.config/opencode/opencode.json</code></td></tr><tr><td>认证信息</td><td><code>~/.local/share/opencode/auth.json</code></td></tr><tr><td>日志</td><td><code>~/.local/share/opencode/log/</code></td></tr><tr><td>项目数据</td><td><code>~/.local/share/opencode/storage/</code></td></tr><tr><td>缓存</td><td><code>~/.cache/opencode/</code></td></tr></tbody></table><hr><h2 id="启动问题" tabindex="-1">启动问题 <a class="header-anchor" href="#启动问题" aria-label="Permalink to “启动问题”">​</a></h2><h3 id="无法启动-命令找不到" tabindex="-1">无法启动 / 命令找不到 <a class="header-anchor" href="#无法启动-命令找不到" aria-label="Permalink to “无法启动 / 命令找不到”">​</a></h3><p><strong>症状</strong>：</p>',6)),l[3]||(l[3]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"zsh: command not found: opencode")])],-1)),l[4]||(l[4]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[5]||(l[5]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 检查是否安装
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
opencode`)])],-1)),l[13]||(l[13]=e('<p><strong>常见原因</strong>：</p><ul><li>配置文件语法错误</li><li>终端不兼容</li><li>缓存损坏</li></ul><hr><h3 id="provideriniterror" tabindex="-1">ProviderInitError <a class="header-anchor" href="#provideriniterror" aria-label="Permalink to “ProviderInitError”">​</a></h3><p><strong>症状</strong>：</p>',5)),l[14]||(l[14]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"ProviderInitError: Failed to initialize provider")])],-1)),l[15]||(l[15]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[16]||(l[16]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 验证提供商配置
opencode auth list

# 2. 清除存储重试
rm -rf ~/.local/share/opencode`)])],-1)),l[17]||(l[17]=e('<p><strong>解决方案</strong>：</p><ol><li>确认按照 <a href="./providers.html">提供商指南</a> 正确设置</li><li>重新使用 <code>/connect</code> 配置</li></ol><hr><h2 id="认证问题" tabindex="-1">认证问题 <a class="header-anchor" href="#认证问题" aria-label="Permalink to “认证问题”">​</a></h2>',4)),i(n),l[18]||(l[18]=t("h3",{id:"api-key-无效",tabindex:"-1"},[o("API Key 无效 "),t("a",{class:"header-anchor",href:"#api-key-无效","aria-label":"Permalink to “API Key 无效”"},"​")],-1)),l[19]||(l[19]=t("p",null,[t("strong",null,"症状"),o("：")],-1)),l[20]||(l[20]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"AuthenticationError: Invalid API key")])],-1)),l[21]||(l[21]=t("p",null,[t("strong",null,"诊断步骤"),o("：")],-1)),l[22]||(l[22]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 检查已配置的凭证
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

# 3. 重启 opencode`)])],-1)),l[48]||(l[48]=e('<p><strong>常见原因</strong>：</p><ul><li>网络问题</li><li>API Key 无效</li><li>提供商包版本过旧</li></ul><hr><h3 id="providermodelnotfounderror" tabindex="-1">ProviderModelNotFoundError <a class="header-anchor" href="#providermodelnotfounderror" aria-label="Permalink to “ProviderModelNotFoundError”">​</a></h3><p><strong>症状</strong>：</p>',5)),l[49]||(l[49]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"ProviderModelNotFoundError: Model not found")])],-1)),l[50]||(l[50]=e("<p><strong>原因</strong>：模型引用格式错误</p><p><strong>正确格式</strong>：<code>&lt;providerId&gt;/&lt;modelId&gt;</code></p><p><strong>示例</strong>：</p><ul><li><code>anthropic/claude-sonnet-4-20250514</code></li><li><code>openai/gpt-4o</code></li><li><code>deepseek/deepseek-chat</code></li></ul><p><strong>解决方案</strong>：</p>",5)),l[51]||(l[51]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 查看可用模型
opencode models`)])],-1)),l[52]||(l[52]=e('<hr><h3 id="模型响应空白" tabindex="-1">模型响应空白 <a class="header-anchor" href="#模型响应空白" aria-label="Permalink to “模型响应空白”">​</a></h3><p><strong>症状</strong>：AI 没有回复或回复为空</p><p><strong>可能原因</strong>：</p><ol><li>上下文超长被截断</li><li>内容过滤触发</li><li>模型负载过高</li></ol><p><strong>解决方案</strong>：</p>',6)),l[53]||(l[53]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`# 压缩上下文
/compact

# 新建会话
/new

# 切换模型
/models`)])],-1)),l[54]||(l[54]=e('<hr><h2 id="api-重试机制" tabindex="-1">API 重试机制 <a class="header-anchor" href="#api-重试机制" aria-label="Permalink to “API 重试机制”">​</a></h2><p>遇到 <code>Too Many Requests</code>、<code>Provider is overloaded</code> 这类临时错误时，OpenCode 会自动重试，你不需要手动操作。</p><h3 id="重试策略" tabindex="-1">重试策略 <a class="header-anchor" href="#重试策略" aria-label="Permalink to “重试策略”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>初始延迟</td><td>2 秒</td><td>首次重试的等待时间</td></tr><tr><td>退避因子</td><td>2x</td><td>每次重试延迟翻倍</td></tr><tr><td>最大延迟（无响应头）</td><td>30 秒</td><td>提供商没返回 <code>Retry-After</code> 头时的上限</td></tr><tr><td>最大延迟（有响应头）</td><td>按响应头</td><td>提供商返回了 <code>Retry-After</code> 头时，按其指定的等待时间</td></tr></tbody></table>',5)),l[55]||(l[55]=t("details",{class:"details custom-block"},[t("summary",null,"重试延迟计算（提供商未返回响应头时）"),t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`首次重试: 2 秒
第二次:   4 秒
第三次:   8 秒
第四次:  16 秒
第五次:  30 秒（触及上限，不再增长）`)])]),t("p",null,[o("如果提供商返回了 "),t("code",null,"Retry-After"),o(" 或 "),t("code",null,"Retry-After-Ms"),o(" 响应头，OpenCode 会优先使用提供商指定的等待时间，不受 30 秒上限限制。")])],-1)),l[56]||(l[56]=e('<h3 id="哪些错误会自动重试" tabindex="-1">哪些错误会自动重试 <a class="header-anchor" href="#哪些错误会自动重试" aria-label="Permalink to “哪些错误会自动重试”">​</a></h3><table tabindex="0"><thead><tr><th>错误</th><th>是否重试</th><th>说明</th></tr></thead><tbody><tr><td><code>Too Many Requests</code> (429)</td><td>✅ 自动重试</td><td>速率限制</td></tr><tr><td><code>Provider is overloaded</code> (503)</td><td>✅ 自动重试</td><td>服务过载</td></tr><tr><td><code>Rate Limited</code></td><td>✅ 自动重试</td><td>频率限制</td></tr><tr><td>上下文溢出</td><td>❌ 不重试</td><td>需要压缩或新建会话</td></tr><tr><td>认证失败 (401)</td><td>❌ 不重试</td><td>需要修复 API Key</td></tr><tr><td>免费额度用完</td><td>❌ 不重试</td><td>提示充值链接</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>如果你看到 OpenCode 在等待重试，不用着急关掉。等一会儿通常就好了。如果频繁触发，考虑切换到其他模型。</p></div><hr><h2 id="输出截断" tabindex="-1">输出截断 <a class="header-anchor" href="#输出截断" aria-label="Permalink to “输出截断”">​</a></h2><p>当工具输出太长时，OpenCode 会自动截断，避免占用过多上下文空间。</p><h3 id="截断规则" tabindex="-1">截断规则 <a class="header-anchor" href="#截断规则" aria-label="Permalink to “截断规则”">​</a></h3><table tabindex="0"><thead><tr><th>限制</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>最大行数</td><td>2,000 行</td><td>超过会被截断</td></tr><tr><td>最大字节数</td><td>50 KB</td><td>超过会被截断</td></tr><tr><td>完整输出保留</td><td>7 天</td><td>截断后的完整文件会自动清理</td></tr></tbody></table><h3 id="截断后你会看到什么" tabindex="-1">截断后你会看到什么 <a class="header-anchor" href="#截断后你会看到什么" aria-label="Permalink to “截断后你会看到什么”">​</a></h3>',9)),l[57]||(l[57]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`...2000+ lines truncated...

The tool call succeeded but the output was truncated.
Full output saved to: /path/to/tool-output/tool_xxx
Use Grep to search the full content or Read with offset/limit
to view specific sections.`)])],-1)),l[58]||(l[58]=e('<p>注意：截断不影响操作结果，只是显示被裁剪了。完整内容保存在本地文件中。</p><h3 id="怎么处理截断的输出" tabindex="-1">怎么处理截断的输出 <a class="header-anchor" href="#怎么处理截断的输出" aria-label="Permalink to “怎么处理截断的输出”">​</a></h3><ol><li><strong>让 AI 用 Grep 搜索</strong>：告诉 AI &quot;在截断的输出中搜索 xxx&quot;</li><li><strong>让 AI 分段读取</strong>：AI 会用 Read 工具的 <code>offset</code> 和 <code>limit</code> 参数分段查看</li><li><strong>委托给子 Agent</strong>：如果 AI 有 Task 工具权限，会建议委托给 explore agent 处理，这样更省上下文</li></ol><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>截断是正常行为，不是错误。大多数情况下 AI 会自动处理截断的输出，你不需要干预。</p></div><hr><h2 id="权限拒绝" tabindex="-1">权限拒绝 <a class="header-anchor" href="#权限拒绝" aria-label="Permalink to “权限拒绝”">​</a></h2><h3 id="症状" tabindex="-1">症状 <a class="header-anchor" href="#症状" aria-label="Permalink to “症状”">​</a></h3><p>操作被拒绝，显示：</p>',8)),l[59]||(l[59]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"The user rejected permission to use this specific tool call.")])],-1)),l[60]||(l[60]=e('<h3 id="默认权限规则" tabindex="-1">默认权限规则 <a class="header-anchor" href="#默认权限规则" aria-label="Permalink to “默认权限规则”">​</a></h3><p>OpenCode 对不同操作有不同的默认权限：</p><table tabindex="0"><thead><tr><th>操作</th><th>默认权限</th><th>说明</th></tr></thead><tbody><tr><td>读取普通文件</td><td>✅ 允许</td><td>大多数文件直接读取</td></tr><tr><td>读取 <code>.env</code> 文件</td><td>⚠️ 需确认</td><td>保护敏感配置（API Key 等）</td></tr><tr><td>读取 <code>.env.*</code> 文件</td><td>⚠️ 需确认</td><td>如 <code>.env.local</code>、<code>.env.production</code></td></tr><tr><td>读取 <code>.env.example</code></td><td>✅ 允许</td><td>示例文件没有敏感信息</td></tr><tr><td>访问项目外目录</td><td>⚠️ 需确认</td><td>防止越权访问</td></tr><tr><td>编辑文件（Build 模式）</td><td>✅ 允许</td><td>Build 模式默认可写</td></tr><tr><td>编辑文件（Plan 模式）</td><td>❌ 拒绝</td><td>Plan 模式禁止编辑普通文件（计划文件除外）</td></tr><tr><td>执行 Bash 命令</td><td>✅ 允许</td><td>默认允许</td></tr></tbody></table><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to “解决方案”">​</a></h3><p><strong>单次允许</strong>：在权限提示时按 <code>y</code> 确认</p><p><strong>始终允许</strong>：按 <code>a</code> 键，该会话内不再询问同类操作</p><p><strong>修改配置</strong>：在 <code>opencode.json</code> 中设置权限策略</p>',7)),l[61]||(l[61]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
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
cat ~/.config/opencode/opencode.json | jq .permission`)])],-1)),l[85]||(l[85]=e('<p><strong>解决方案</strong>：</p><ul><li>确保文件可写</li><li>检查权限设置为 <code>allow</code> 或 <code>ask</code></li><li>在权限提示时按 <code>y</code> 确认</li></ul><hr><h3 id="git-撤销不工作" tabindex="-1">Git 撤销不工作 <a class="header-anchor" href="#git-撤销不工作" aria-label="Permalink to “Git 撤销不工作”">​</a></h3><p><strong>症状</strong>：<code>/undo</code> 没有效果</p><p><strong>诊断步骤</strong>：</p>',6)),l[86]||(l[86]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 确认是 Git 仓库
git status`)])],-1)),l[87]||(l[87]=e('<p><strong>解决方案</strong>：</p><ul><li>确保在 Git 仓库中</li><li>确保有可撤销的修改</li></ul><hr><h2 id="界面问题" tabindex="-1">界面问题 <a class="header-anchor" href="#界面问题" aria-label="Permalink to “界面问题”">​</a></h2><h3 id="乱码显示" tabindex="-1">乱码显示 <a class="header-anchor" href="#乱码显示" aria-label="Permalink to “乱码显示”">​</a></h3><p><strong>症状</strong>：界面显示方框或乱码</p><p><strong>解决方案</strong>：</p>',7)),l[88]||(l[88]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 设置正确编码
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
npm install -g opencode-ai`)])],-1)),l[106]||(l[106]=e('<hr><h2 id="快速诊断清单" tabindex="-1">快速诊断清单 <a class="header-anchor" href="#快速诊断清单" aria-label="Permalink to “快速诊断清单”">​</a></h2><p>遇到问题时，按这个顺序逐一排查：</p><ul><li>[ ] <strong>检查版本</strong>：<code>opencode --version</code>，确认是最新版</li><li>[ ] <strong>检查配置</strong>：<code>opencode.json</code> 语法是否正确？（用 <code>jq .</code> 验证 JSON 格式）</li><li>[ ] <strong>检查认证</strong>：<code>opencode auth list</code>，API Key 是否有效？OAuth 是否过期？</li><li>[ ] <strong>检查配额</strong>：账户余额是否充足？是否触发速率限制？</li><li>[ ] <strong>检查网络</strong>：能否访问提供商 API？（用 <code>curl</code> 测试）</li><li>[ ] <strong>检查权限</strong>：是否有必要的文件/目录访问权限？</li><li>[ ] <strong>查看日志</strong>：开启 debug 模式查看详细日志</li></ul>',4)),l[107]||(l[107]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 快速诊断三连
opencode --version
opencode auth list
opencode --log-level DEBUG --print-logs`)])],-1)),l[108]||(l[108]=e('<hr><h2 id="错误代码速查表" tabindex="-1">错误代码速查表 <a class="header-anchor" href="#错误代码速查表" aria-label="Permalink to “错误代码速查表”">​</a></h2><h3 id="提供商-http-错误" tabindex="-1">提供商 HTTP 错误 <a class="header-anchor" href="#提供商-http-错误" aria-label="Permalink to “提供商 HTTP 错误”">​</a></h3><table tabindex="0"><thead><tr><th>错误码</th><th>含义</th><th>可能原因</th><th>是否自动重试</th></tr></thead><tbody><tr><td>400</td><td>请求格式错误</td><td>无效参数、缺少必填字段</td><td>❌</td></tr><tr><td>401</td><td>认证失败</td><td>API Key 无效或过期</td><td>❌</td></tr><tr><td>403</td><td>权限不足</td><td>没有访问该模型的权限</td><td>❌</td></tr><tr><td>404</td><td>资源不存在</td><td>模型名称错误或已下线</td><td>⚠️ OpenAI 有时误报</td></tr><tr><td>413</td><td>请求体过大</td><td>上下文溢出（Cerebras/Mistral）</td><td>❌</td></tr><tr><td>429</td><td>请求过多</td><td>触发速率限制或配额限制</td><td>✅</td></tr><tr><td>2000+</td><td>服务器错误</td><td>提供商内部错误</td><td>✅</td></tr><tr><td>503</td><td>服务不可用</td><td>提供商维护或过载</td><td>✅</td></tr></tbody></table><h3 id="opencode-内部错误" tabindex="-1">OpenCode 内部错误 <a class="header-anchor" href="#opencode-内部错误" aria-label="Permalink to “OpenCode 内部错误”">​</a></h3><table tabindex="0"><thead><tr><th>错误类型</th><th>含义</th><th>解决方案</th></tr></thead><tbody><tr><td><code>ContextOverflowError</code></td><td>上下文溢出</td><td><code>/compact</code> 压缩或 <code>/new</code> 新建会话</td></tr><tr><td><code>AI_APICallError</code></td><td>API 调用失败</td><td>检查网络和认证</td></tr><tr><td><code>ProviderInitError</code></td><td>提供商初始化失败</td><td>检查配置和认证</td></tr><tr><td><code>ProviderModelNotFoundError</code></td><td>模型不存在</td><td>检查模型名称格式 <code>provider/model</code></td></tr><tr><td><code>RejectedError</code></td><td>用户拒绝了权限</td><td>在权限提示时按 <code>y</code> 允许</td></tr><tr><td><code>DeniedError</code></td><td>配置规则拒绝了操作</td><td>检查 <code>opencode.json</code> 的 <code>permission</code> 配置</td></tr></tbody></table><h3 id="上下文溢出的提供商错误信息" tabindex="-1">上下文溢出的提供商错误信息 <a class="header-anchor" href="#上下文溢出的提供商错误信息" aria-label="Permalink to “上下文溢出的提供商错误信息”">​</a></h3><p>不同提供商报上下文溢出的错误信息不同，OpenCode 会统一识别：</p><table tabindex="0"><thead><tr><th>提供商</th><th>错误信息模式</th></tr></thead><tbody><tr><td>Anthropic</td><td><code>prompt is too long</code></td></tr><tr><td>OpenAI</td><td><code>exceeds the context window</code></td></tr><tr><td>Google Gemini</td><td><code>input token count exceeds the maximum</code></td></tr><tr><td>DeepSeek</td><td><code>maximum context length is X tokens</code></td></tr><tr><td>OpenRouter</td><td><code>maximum context length is X tokens</code></td></tr><tr><td>Groq</td><td><code>reduce the length of the messages</code></td></tr><tr><td>Amazon Bedrock</td><td><code>input is too long for requested model</code></td></tr><tr><td>xAI (Grok)</td><td><code>maximum prompt length is X</code></td></tr><tr><td>GitHub Copilot</td><td><code>exceeds the limit of X</code></td></tr><tr><td>llama.cpp</td><td><code>exceeds the available context size</code></td></tr><tr><td>LM Studio</td><td><code>greater than the context length</code></td></tr><tr><td>Cerebras/Mistral</td><td><code>400 (no body)</code> / <code>413 (no body)</code></td></tr><tr><td>MiniMax</td><td><code>context window exceeds limit</code></td></tr><tr><td>Moonshot/Kimi</td><td><code>exceeded model token limit</code></td></tr><tr><td>通用 fallback</td><td><code>context length exceeded</code></td></tr></tbody></table><p>遇到这些错误，用 <code>/compact</code> 压缩上下文或 <code>/new</code> 新建会话。</p><hr><h2 id="诊断命令汇总" tabindex="-1">诊断命令汇总 <a class="header-anchor" href="#诊断命令汇总" aria-label="Permalink to “诊断命令汇总”">​</a></h2>',12)),l[109]||(l[109]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 版本信息
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
ls -la ~/.local/share/opencode/log/ >> debug.txt`)])])]),t("li",null,[t("p",null,[t("strong",null,"提交 Issue"),o("："),t("a",{href:"https://github.com/anomalyco/opencode/issues",target:"_blank",rel:"noreferrer"},"github.com/anomalyco/opencode/issues")])])],-1)),l[114]||(l[114]=e('<hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./faq.html">常见问题 FAQ</a> - 常见问题快速解答</li><li><a href="./../1-start/03-network.html">网络配置</a> - 网络设置详解</li><li><a href="./config-ref.html">配置选项</a> - 配置参考</li><li><a href="./../5-advanced/20-compaction.html">上下文压缩</a> - 压缩机制详解</li><li><a href="./providers.html">模型提供商</a> - 可用模型列表</li></ul><div class="tip custom-block"><p class="custom-block-title">还是搞不定？</p><p><a href="/community.html">加入社群</a>，和 2000+ 同路人一起交流，实时答疑。</p></div>',4))])}const P=d(u,[["render",b]]);export{v as __pageData,P as default};
