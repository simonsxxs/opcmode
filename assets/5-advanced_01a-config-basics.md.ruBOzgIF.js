import{_ as n,I as l,c as r,o as i,a5 as o,j as e,J as s,a as d,aW as p}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.1a 配置基础","description":"学习 opencode.json 核心配置，控制 OpenCode 的基础行为，定制你的开发环境。","frontmatter":{"title":"5.1a 配置基础","subtitle":"opencode.json 核心配置","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.1a","duration":"15 分钟","level":"进阶","description":"学习 opencode.json 核心配置，控制 OpenCode 的基础行为，定制你的开发环境。","tags":["配置","JSON","基础"],"prerequisite":["2.1 界面与基础操作"]},"headers":[],"relativePath":"5-advanced/01a-config-basics.md","filePath":"5-advanced/01a-config-basics.md","lastUpdated":1772014034000}'),c={name:"5-advanced/01a-config-basics.md"};function h(b,t,u,m,g,P){const a=l("AdInArticle");return i(),r("div",null,[t[0]||(t[0]=o('<h1 id="_5-1a-配置基础" tabindex="-1">5.1a 配置基础 <a class="header-anchor" href="#_5-1a-配置基础" aria-label="Permalink to “5.1a 配置基础”">​</a></h1><blockquote><p>通过 opencode.json 配置文件，控制 OpenCode 的核心行为。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+p+'" alt="配置基础学霸笔记" data-zoom-src="/images/5-advanced/config-basics-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解配置文件的位置和优先级</li><li>掌握模型和 Provider 配置</li><li>使用变量替换动态配置</li><li>配置用户名和自动更新</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>每次都要手动设置，不知道怎么保存配置</li><li>API Key 不想明文写在配置里</li><li>不知道怎么配置多个 Provider</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：个性化定制 OpenCode 的行为</li><li>而且不想：每次启动都重新设置</li></ul><hr><h2 id="配置文件位置" tabindex="-1">配置文件位置 <a class="header-anchor" href="#配置文件位置" aria-label="Permalink to “配置文件位置”">​</a></h2><p>OpenCode 按以下顺序加载配置，优先级从低到高（后加载的覆盖先加载的）：</p><table tabindex="0"><thead><tr><th>优先级</th><th>位置</th><th>说明</th></tr></thead><tbody><tr><td>1（最低）</td><td>远程 <code>.well-known/opencode</code></td><td>远程组织默认配置（通过 Auth 机制获取）</td></tr><tr><td>2</td><td><code>~/.config/opencode/opencode.json</code></td><td>全局用户配置</td></tr><tr><td>3</td><td><code>OPENCODE_CONFIG</code> 环境变量</td><td>自定义配置文件路径</td></tr><tr><td>4</td><td><code>./opencode.json</code></td><td>项目根目录配置</td></tr><tr><td>5</td><td><code>./.opencode/opencode.json</code></td><td>项目 .opencode 目录配置</td></tr><tr><td>6</td><td><code>OPENCODE_CONFIG_CONTENT</code> 环境变量</td><td>内联配置内容（JSON 字符串）</td></tr><tr><td>7（最高）</td><td>受管配置目录</td><td>企业部署，管理员控制</td></tr></tbody></table><blockquote><p>配置文件是<strong>合并</strong>的，不是覆盖。后面的配置会覆盖前面冲突的键，但非冲突的设置都会保留。</p></blockquote><details class="details custom-block"><summary>受管配置目录（企业部署）</summary><p>企业环境下，管理员可以在系统级目录放置配置，优先级最高，会覆盖所有用户和项目配置：</p><table tabindex="0"><thead><tr><th>平台</th><th>路径</th></tr></thead><tbody><tr><td>macOS</td><td><code>/Library/Application Support/opencode</code></td></tr><tr><td>Windows</td><td><code>%ProgramData%\\opencode</code></td></tr><tr><td>Linux</td><td><code>/etc/opencode</code></td></tr></tbody></table><p>普通用户一般用不到这个，了解即可。</p></details><h3 id="配置目录结构" tabindex="-1">配置目录结构 <a class="header-anchor" href="#配置目录结构" aria-label="Permalink to “配置目录结构”">​</a></h3>',21)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`~/.config/opencode/
├── opencode.json       # 全局配置
├── AGENTS.md           # 全局规则
├── agent/              # 全局 Agent
├── command/            # 全局命令
└── plugin/             # 全局插件

项目目录/
├── opencode.json       # 项目配置（优先级 4）
├── AGENTS.md           # 项目规则
└── .opencode/
    ├── opencode.json   # 项目配置（优先级 5，推荐）
    ├── agent/          # 项目 Agent
    ├── command/        # 项目命令
    └── plugin/         # 项目插件`)])],-1)),t[2]||(t[2]=e("hr",null,null,-1)),t[3]||(t[3]=e("h2",{id:"配置格式",tabindex:"-1"},[d("配置格式 "),e("a",{class:"header-anchor",href:"#配置格式","aria-label":"Permalink to “配置格式”"},"​")],-1)),t[4]||(t[4]=e("p",null,"支持 JSON 和 JSONC（带注释的 JSON）：",-1)),t[5]||(t[5]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  // 这是注释，JSONC 格式支持
  "model": "anthropic/claude-opus-4-5-thinking"
}`)])],-1)),t[6]||(t[6]=e("blockquote",null,[e("p",null,[d("配置文件名可以是 "),e("code",null,"opencode.json"),d(" 或 "),e("code",null,"opencode.jsonc"),d("。")])],-1)),t[7]||(t[7]=e("hr",null,null,-1)),t[8]||(t[8]=e("h2",{id:"模型配置",tabindex:"-1"},[d("模型配置 "),e("a",{class:"header-anchor",href:"#模型配置","aria-label":"Permalink to “模型配置”"},"​")],-1)),s(a),t[9]||(t[9]=e("h3",{id:"主模型和小模型",tabindex:"-1"},[d("主模型和小模型 "),e("a",{class:"header-anchor",href:"#主模型和小模型","aria-label":"Permalink to “主模型和小模型”"},"​")],-1)),t[10]||(t[10]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-opus-4-5-thinking",
  "small_model": "anthropic/claude-haiku-4-5"
}`)])],-1)),t[11]||(t[11]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>model</code></td><td>主模型（格式：provider/model）</td></tr><tr><td><code>small_model</code></td><td>小模型，用于简单任务（如生成标题）</td></tr></tbody></table><blockquote><p><code>small_model</code> 配置一个更便宜的模型用于轻量任务。如果不设置，OpenCode 会尝试使用 Provider 提供的便宜模型，否则回退到主模型。</p></blockquote><h3 id="默认-agent" tabindex="-1">默认 Agent <a class="header-anchor" href="#默认-agent" aria-label="Permalink to “默认 Agent”">​</a></h3>',3)),t[12]||(t[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "default_agent": "build"
}`)])],-1)),t[13]||(t[13]=o('<p>设置默认使用的 primary agent（必须是 primary 模式）。可选值：</p><ul><li><code>&quot;build&quot;</code> - 默认，所有工具可用</li><li><code>&quot;plan&quot;</code> - 只读模式，编辑需确认</li><li>或你自定义的 primary agent 名称</li></ul><hr><h2 id="provider-配置" tabindex="-1">Provider 配置 <a class="header-anchor" href="#provider-配置" aria-label="Permalink to “Provider 配置”">​</a></h2><h3 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to “基础配置”">​</a></h3>',5)),t[14]||(t[14]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}",
        "baseURL": "https://api.anthropic.com",
        "timeout": 600000,
        "setCacheKey": true
      }
    }
  }
}`)])],-1)),t[15]||(t[15]=o('<blockquote><p>注意：配置键是 <code>provider</code>（单数），不是 <code>providers</code>。</p></blockquote><h3 id="options-字段说明" tabindex="-1">options 字段说明 <a class="header-anchor" href="#options-字段说明" aria-label="Permalink to “options 字段说明”">​</a></h3><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>apiKey</code></td><td>string</td><td>API 密钥</td></tr><tr><td><code>baseURL</code></td><td>string</td><td>自定义 API 地址（代理场景常用）</td></tr><tr><td><code>timeout</code></td><td>number | false</td><td>请求超时（毫秒），默认 300000，设为 false 禁用</td></tr><tr><td><code>setCacheKey</code></td><td>boolean</td><td>启用提示缓存键（默认 false）</td></tr></tbody></table><h3 id="amazon-bedrock-特殊配置" tabindex="-1">Amazon Bedrock 特殊配置 <a class="header-anchor" href="#amazon-bedrock-特殊配置" aria-label="Permalink to “Amazon Bedrock 特殊配置”">​</a></h3><p>Amazon Bedrock 支持 AWS 特定配置：</p>',5)),t[16]||(t[16]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "amazon-bedrock": {
      "options": {
        "region": "us-east-1",
        "profile": "my-aws-profile",
        "endpoint": "https://bedrock-runtime.us-east-1.vpce-xxxxx.amazonaws.com"
      }
    }
  }
}`)])],-1)),t[17]||(t[17]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>region</code></td><td>AWS 区域（默认从 <code>AWS_REGION</code> 环境变量或 <code>us-east-1</code>）</td></tr><tr><td><code>profile</code></td><td>AWS 配置文件名（来自 <code>~/.aws/credentials</code>）</td></tr><tr><td><code>endpoint</code></td><td>自定义端点 URL（用于 VPC 端点）</td></tr></tbody></table><h3 id="provider-黑白名单" tabindex="-1">Provider 黑白名单 <a class="header-anchor" href="#provider-黑白名单" aria-label="Permalink to “Provider 黑白名单”">​</a></h3><p>控制加载哪些 Provider：</p>',3)),t[18]||(t[18]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "disabled_providers": ["openai", "gemini"],
  "enabled_providers": ["anthropic"]
}`)])],-1)),t[19]||(t[19]=o('<table tabindex="0"><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>disabled_providers</code></td><td>禁用的 Provider 列表，即使有 API Key 也不加载</td></tr><tr><td><code>enabled_providers</code></td><td>只启用这些 Provider，其他全部忽略</td></tr></tbody></table><blockquote><p><code>disabled_providers</code> 优先级高于 <code>enabled_providers</code>。如果同时出现在两个列表中，会被禁用。</p></blockquote><hr><h2 id="用户配置" tabindex="-1">用户配置 <a class="header-anchor" href="#用户配置" aria-label="Permalink to “用户配置”">​</a></h2><h3 id="自定义用户名" tabindex="-1">自定义用户名 <a class="header-anchor" href="#自定义用户名" aria-label="Permalink to “自定义用户名”">​</a></h3>',5)),t[20]||(t[20]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "username": "张三"
}`)])],-1)),t[21]||(t[21]=e("p",null,"在对话中显示自定义用户名，而不是系统用户名。",-1)),t[22]||(t[22]=e("hr",null,null,-1)),t[23]||(t[23]=e("h2",{id:"主题配置",tabindex:"-1"},[d("主题配置 "),e("a",{class:"header-anchor",href:"#主题配置","aria-label":"Permalink to “主题配置”"},"​")],-1)),t[24]||(t[24]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "theme": "tokyonight"
}`)])],-1)),t[25]||(t[25]=e("blockquote",null,[e("p",null,[d("注意：配置键是 "),e("code",null,"theme"),d("，不是 "),e("code",null,"tui.theme"),d("。")])],-1)),t[26]||(t[26]=e("hr",null,null,-1)),t[27]||(t[27]=e("h2",{id:"自动更新",tabindex:"-1"},[d("自动更新 "),e("a",{class:"header-anchor",href:"#自动更新","aria-label":"Permalink to “自动更新”"},"​")],-1)),t[28]||(t[28]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "autoupdate": true
}`)])],-1)),t[29]||(t[29]=o('<table tabindex="0"><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td><code>true</code></td><td>启动时自动下载更新（默认）</td></tr><tr><td><code>false</code></td><td>禁用自动更新</td></tr><tr><td><code>&quot;notify&quot;</code></td><td>只通知新版本，不自动更新</td></tr></tbody></table><hr><h2 id="变量替换" tabindex="-1">变量替换 <a class="header-anchor" href="#变量替换" aria-label="Permalink to “变量替换”">​</a></h2><p>配置中可以使用变量，动态获取值：</p><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to “环境变量”">​</a></h3><p>使用 <code>{env:变量名}</code> 引用环境变量：</p>',6)),t[30]||(t[30]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "model": "{env:OPENCODE_MODEL}",
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}"
      }
    }
  }
}`)])],-1)),t[31]||(t[31]=e("blockquote",null,[e("p",null,"如果环境变量不存在，会被替换为空字符串。")],-1)),t[32]||(t[32]=e("h3",{id:"文件内容",tabindex:"-1"},[d("文件内容 "),e("a",{class:"header-anchor",href:"#文件内容","aria-label":"Permalink to “文件内容”"},"​")],-1)),t[33]||(t[33]=e("p",null,[d("使用 "),e("code",null,"{file:路径}"),d(" 引用文件内容：")],-1)),t[34]||(t[34]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "options": {
        "apiKey": "{file:~/.secrets/openai-key}"
      }
    }
  }
}`)])],-1)),t[35]||(t[35]=o('<p>文件路径支持：</p><ul><li>相对于配置文件的路径</li><li>以 <code>/</code> 开头的绝对路径</li><li>以 <code>~</code> 开头的 home 目录路径</li></ul><p>变量替换适用于：</p><ul><li>保护敏感数据（API Key 放单独文件）</li><li>跨环境配置（开发/生产用不同变量）</li><li>共享配置片段</li></ul><hr><h2 id="基础配置完整示例" tabindex="-1">基础配置完整示例 <a class="header-anchor" href="#基础配置完整示例" aria-label="Permalink to “基础配置完整示例”">​</a></h2>',6)),t[36]||(t[36]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  
  // 模型
  "model": "anthropic/claude-opus-4-5-thinking",
  "small_model": "anthropic/claude-haiku-4-5",
  "default_agent": "build",
  
  // Provider
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}",
        "timeout": 600000
      }
    }
  },
  
  // Provider 控制
  "disabled_providers": ["gemini"],
  
  // 用户
  "username": "开发者",
  
  // 主题
  "theme": "catppuccin",
  
  // 自动更新
  "autoupdate": true
}`)])],-1)),t[37]||(t[37]=o('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>配置不生效</td><td>优先级问题</td><td>项目级配置优先于全局配置</td></tr><tr><td>变量替换失败</td><td>环境变量不存在</td><td>确认环境变量已设置</td></tr><tr><td>JSON 解析错误</td><td>格式错误</td><td>使用 JSONC 格式或检查语法</td></tr><tr><td>用了 <code>providers</code></td><td>键名错误</td><td>应为 <code>provider</code>（单数）</td></tr><tr><td>Provider 不加载</td><td>在 disabled 列表中</td><td>检查 <code>disabled_providers</code></td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>配置文件的位置和优先级</li><li>模型配置（model、small_model、default_agent）</li><li>Provider 配置（options、黑白名单）</li><li>变量替换（环境变量、文件内容）</li><li>用户名、主题、自动更新配置</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习配置进阶，包括界面配置、行为配置、以及各类功能配置的详解。</p></blockquote>',10))])}const C=n(c,[["render",h]]);export{v as __pageData,C as default};
