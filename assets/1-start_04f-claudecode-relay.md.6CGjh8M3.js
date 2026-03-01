import{_ as l,c as t,o as n,a5 as a,j as e,a as o,ar as c}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"第三方中转（Claude Code 兼容）","description":"使用第三方中转/网关连接 Anthropic 兼容接口，在 OpenCode 中使用 Claude 模型。","frontmatter":{"title":"第三方中转（Claude Code 兼容）","subtitle":"baseURL（.../v1）+ API Key（二选一）","course":"OpenCode 中文实战课","stage":"第一阶段","lesson":"1.4f","duration":"15 分钟","practice":"5 分钟","level":"新手","description":"使用第三方中转/网关连接 Anthropic 兼容接口，在 OpenCode 中使用 Claude 模型。","tags":["模型","Claude","Anthropic","中转","baseURL"],"prerequisite":["1.2 安装"]},"headers":[],"relativePath":"1-start/04f-claudecode-relay.md","filePath":"1-start/04f-claudecode-relay.md","lastUpdated":1772014034000}'),i={name:"1-start/04f-claudecode-relay.md"};function s(r,d,p,u,h,m){return n(),t("div",null,[...d[0]||(d[0]=[a('<h1 id="第三方中转-claude-code-兼容" tabindex="-1">第三方中转（Claude Code 兼容） <a class="header-anchor" href="#第三方中转-claude-code-兼容" aria-label="Permalink to “第三方中转（Claude Code 兼容）”">​</a></h1><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+c+'" alt="第三方中转（Claude Code 兼容）学霸笔记" data-zoom-src="/images/1-start/claudecode-relay-notes.jpeg"></p><p>这一页只做一件事：把“宣称兼容 Claude Code”的第三方中转，接到 OpenCode 里。</p><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><p>你将完成 3 件事：</p><ol><li>配一个独立 provider（例如 <code>claudecode-relay</code>），把 <code>baseURL</code> 指到中转的 <code>.../v1</code></li><li>配置 API Key（<strong>二选一</strong>：写在 <code>opencode.json</code> 或存到 <code>auth.json</code>）</li><li>在 <code>/models</code> 里选择模型并发一句话验证</li></ol><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><ul><li>[ ] 完成了 <a href="./02-install.html">1.2 安装</a>，能运行 <code>opencode</code></li><li>[ ] 你已经从中转服务拿到了 <code>baseURL</code> 和 <code>API Key</code></li></ul><p>从中转服务拿到两样东西：</p><ol><li><strong>baseURL</strong>：中转给你的接口地址</li><li><strong>API Key</strong>：通常形如 <code>k-...</code></li></ol><p>baseURL 的填写规则（常见两种给法）：</p><ol><li>对方给到 <code>/v1</code> 就原样填：例如 <code>https://url.com/v1</code></li><li>只给域名就补 <code>/v1</code>：例如 <code>https://url.com</code> → <code>https://url.com/v1</code></li></ol><blockquote><p>提示：很多 Claude/Anthropic 兼容中转的消息接口路径会包含 <code>.../v1/messages</code>，可用于你排查 baseURL 是否少了 <code>/v1</code>。</p></blockquote><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2><h3 id="第-1-步-在-opencode-json-配置一个独立-provider" tabindex="-1">第 1 步：在 opencode.json 配置一个独立 provider <a class="header-anchor" href="#第-1-步-在-opencode-json-配置一个独立-provider" aria-label="Permalink to “第 1 步：在 opencode.json 配置一个独立 provider”">​</a></h3><p>编辑 <code>~/.config/opencode/opencode.json</code>，添加一个自定义 provider（这里用 <code>claudecode-relay</code> 作为 provider ID）：</p>',20),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "claudecode-relay": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://url.com/v1"
      },
      "models": {
        "claude-opus-4-5-20251101": {
          "name": "中转站的 opus 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          },
          "modalities": {
            "input": ["text", "image"],
            "output": ["text"]
          },
          "options": {
            "thinking": {
              "type": "enabled",
              "budgetTokens": 16000
            }
          }
        }
      }
    }
  }
}`)])],-1),a('<p>说明：</p><ul><li><code>npm</code> 用来告诉 OpenCode：这个 provider 要按哪种&quot;协议/SDK 驱动&quot;发请求。Claude/Anthropic 兼容中转一般要用 <code>@ai-sdk/anthropic</code>；如果你删掉这行，OpenCode 可能会按默认的 OpenAI-compatible 方式去理解这个 provider，从而请求失败。</li><li>你也可以直接改 <code>provider.anthropic</code> 来走中转；那种写法本质上同样是在走 Anthropic 这套协议，但不建议（原因见文末&quot;补充说明&quot;）。</li><li>配置的 key（如 <code>claude-opus-4-5-20251101</code>）<strong>既是</strong>你在 OpenCode 里看到的&quot;模型 ID&quot;，<strong>也是</strong>发给中转商 API 使用的模型名</li><li><code>models.&lt;key&gt;.name</code> 是显示名称，可以随便写成中文（如&quot;中转站的 opus 4.5&quot;）</li><li><code>limit.context</code> 和 <code>limit.output</code> 定义模型的上下文窗口和最大输出长度。<strong>如果不配置，默认值为 0，会导致自动压缩功能失效</strong>。推荐值见下表。</li></ul><table tabindex="0"><thead><tr><th>模型</th><th>context</th><th>output</th></tr></thead><tbody><tr><td>claude-opus-4-5</td><td>200000</td><td>64000</td></tr><tr><td>claude-sonnet-4-5</td><td>200000</td><td>64000</td></tr></tbody></table><blockquote><p>💡 想深入了解上下文压缩机制和 <code>limit</code> 参数的作用？请参阅 <a href="/5-advanced/20-compaction.html">5.20 上下文压缩</a>。</p></blockquote><h3 id="可选-需要读图时-modalities-要放在模型层" tabindex="-1">可选：需要读图时，<code>modalities</code> 要放在模型层 <a class="header-anchor" href="#可选-需要读图时-modalities-要放在模型层" aria-label="Permalink to “可选：需要读图时，modalities 要放在模型层”">​</a></h3><p>如果你要让模型接收图片输入，<code>modalities</code> 必须写在 <code>models.&lt;modelID&gt;.modalities</code>，不能写在 provider 层，也不能塞进 <code>options</code>。</p><p>✅ 正确（会生效）：</p>',7),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "models": {
        "claude-opus-4-5-20251101": {
          "modalities": {
            "input": ["text", "image"],
            "output": ["text"]
          },
          "options": {
            "thinking": {
              "type": "enabled",
              "budgetTokens": 16000
            }
          }
        }
      }
    }
  }
}`)])],-1),a('<p>❌ 常见错误：</p><ul><li><code>provider.claudecode-relay.modalities</code>（层级太浅，配置直接报错）</li><li><code>provider.claudecode-relay.models.&lt;modelID&gt;.options.modalities</code>（层级太深，不报错但不生效）</li></ul><hr><h3 id="第-2-步-配置-api-key-二选一" tabindex="-1">第 2 步：配置 API Key（<strong>二选一</strong>） <a class="header-anchor" href="#第-2-步-配置-api-key-二选一" aria-label="Permalink to “第 2 步：配置 API Key（二选一）”">​</a></h3><p>你只需要选下面一种方式配置 Key：</p><h4 id="方案-1-把-key-写在-opencode-json-最简单" tabindex="-1">方案 1：把 Key 写在 <code>opencode.json</code>（最简单） <a class="header-anchor" href="#方案-1-把-key-写在-opencode-json-最简单" aria-label="Permalink to “方案 1：把 Key 写在 opencode.json（最简单）”">​</a></h4><h5 id="方式-a-直接写-key-最快" tabindex="-1">方式 A：直接写 Key（最快） <a class="header-anchor" href="#方式-a-直接写-key-最快" aria-label="Permalink to “方式 A：直接写 Key（最快）”">​</a></h5>',7),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "options": {
        "baseURL": "https://url.com/v1",
        "apiKey": "你的API Key"
      }
    }
  }
}`)])],-1),e("p",null,"直接把中转商给你的 Key 粘贴进去就行。",-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"安全提示"),e("p",null,"这样 Key 会明文保存在配置文件里。如果出于安全考虑，建议用方式 B。")],-1),e("h4",{id:"方式-b-用环境变量-更安全",tabindex:"-1"},[o("方式 B：用环境变量（更安全） "),e("a",{class:"header-anchor",href:"#方式-b-用环境变量-更安全","aria-label":"Permalink to “方式 B：用环境变量（更安全）”"},"​")],-1),e("p",null,"如果你不想把 Key 明文写在配置文件里，可以用环境变量：",-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "claudecode-relay": {
      "options": {
        "baseURL": "https://url.com/v1",
        "apiKey": "{env:CLAUDECODE_RELAY_API_KEY}"
      }
    }
  }
}`)])],-1),e("p",null,[o("然后在你的 shell 配置文件（"),e("code",null,"~/.bashrc"),o(" 或 "),e("code",null,"~/.zshrc"),o("）里添加：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'export CLAUDECODE_RELAY_API_KEY="你的API Key"')])],-1),e("p",null,[o("保存后运行 "),e("code",null,"source ~/.bashrc"),o("（或重启终端）使环境变量生效。")],-1),e("h4",{id:"方案-2-把-key-存到-opencode-认证-auth-json",tabindex:"-1"},[o("方案 2：把 Key 存到 OpenCode 认证（"),e("code",null,"auth.json"),o("） "),e("a",{class:"header-anchor",href:"#方案-2-把-key-存到-opencode-认证-auth-json","aria-label":"Permalink to “方案 2：把 Key 存到 OpenCode 认证（auth.json）”"},"​")],-1),e("p",null,"运行：",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth login")])],-1),e("p",null,"在交互界面里：",-1),e("ol",null,[e("li",null,[o("选择 "),e("code",null,"Other")]),e("li",null,[o("输入 provider ID："),e("code",null,"claudecode-relay")]),e("li",null,"粘贴你的 API Key")],-1),e("p",null,[o("它会把 Key 写入 OpenCode 的认证文件 "),e("code",null,"auth.json"),o("。你可以用下面命令查看“实际写到了哪个路径”（命令输出里会显示路径）：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode auth list")])],-1),a('<div class="warning custom-block"><p class="custom-block-title">重要：不要两边都写</p><p>为了避免你“以为换了 Key 但没生效”，建议只保留一种方式。</p><ul><li>如果你选择了方案 1（<code>opencode.json</code> 里有 <code>options.apiKey</code>），就不要再做 <code>auth login</code>。</li><li>如果你选择了方案 2（存到 <code>auth.json</code>），就不要在 <code>opencode.json</code> 里再写 <code>options.apiKey</code>。</li></ul><p>原因：当 <code>opencode.json</code> 里存在 <code>options.apiKey</code> 时，会优先使用它。</p></div><hr><h3 id="第-3-步-选择模型并验证" tabindex="-1">第 3 步：选择模型并验证 <a class="header-anchor" href="#第-3-步-选择模型并验证" aria-label="Permalink to “第 3 步：选择模型并验证”">​</a></h3><p>启动 OpenCode：</p>',4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1),e("p",null,"输入：",-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"/models")])],-1),e("p",null,[o("选择 "),e("code",null,"claudecode-relay/claude-opus-4-5-20251101"),o("，然后发送一句话验证：")],-1),e("div",{class:"language-text"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"text"),e("pre",null,[e("code",{"v-pre":""},"你好，请简单介绍一下你自己")])],-1),a('<hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><ul><li>[ ] <code>/models</code> 里能看到 <code>claudecode-relay/...</code> 并成功选择</li><li>[ ] 发送消息能收到 AI 回复</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>404 / Not Found</td><td>baseURL 写错了</td><td>优先检查 <code>baseURL</code> 是否应该是 <code>.../v1</code>，并确认它能拼出 <code>.../v1/messages</code></td></tr><tr><td>401 / Unauthorized</td><td>Key 无效/没权限</td><td>重新生成 Key，或检查套餐/权限</td></tr><tr><td>选了模型就报错</td><td>模型名不支持</td><td>检查配置的 key（如 <code>claude-opus-4-5-20251101</code>）是否和中转商给的模型名完全一致</td></tr><tr><td><code>Unrecognized key: &quot;modalities&quot; provider.xxx</code></td><td><code>modalities</code> 写到了 provider 层</td><td>挪到 <code>provider.xxx.models.&lt;modelID&gt;.modalities</code></td></tr><tr><td><code>this model does not support image input</code></td><td><code>modalities</code> 写进了 <code>options</code> 或根本没配</td><td>使用模型层级：<code>models.&lt;modelID&gt;.modalities.input</code> 包含 <code>image</code></td></tr></tbody></table><hr><h2 id="同时配置多个中转商" tabindex="-1">同时配置多个中转商 <a class="header-anchor" href="#同时配置多个中转商" aria-label="Permalink to “同时配置多个中转商”">​</a></h2><p>OpenCode 支持同时配置多个中转商，你可以在 <code>provider</code> 下添加多个独立的 provider：</p>',9),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "relay-a": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://relay-a.com/v1",
        "apiKey": "你的 A 中转商 Key"
      },
      "models": {
        "claude-opus-4-5-20251101": {
          "name": "A 中转的 opus 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          }
        }
      }
    },
    "relay-b": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://relay-b.com/v1",
        "apiKey": "你的 B 中转商 Key"
      },
      "models": {
        "claude-sonnet-4-5-20250514": {
          "name": "B 中转的 sonnet 4.5",
          "limit": {
            "context": 200000,
            "output": 64000
          }
        }
      }
    }
  }
}`)])],-1),a('<p>配置后在 <code>/models</code> 里可以看到：</p><ul><li><code>relay-a/claude-opus-4-5-20251101</code></li><li><code>relay-b/claude-sonnet-4-5-20250514</code></li></ul><p><strong>使用场景</strong>：</p><ul><li>不同中转商价格/速度不同，按需切换</li><li>一个中转商挂了，快速切到另一个</li><li>测试对比不同中转商的效果</li></ul><hr><h2 id="补充说明-为什么不建议直接改-provider-anthropic" tabindex="-1">补充说明：为什么不建议直接改 <code>provider.anthropic</code> <a class="header-anchor" href="#补充说明-为什么不建议直接改-provider-anthropic" aria-label="Permalink to “补充说明：为什么不建议直接改 provider.anthropic”">​</a></h2><p>你当然可以把中转写到 <code>provider.anthropic</code>，但不建议这么做：</p><ul><li>会把你原本的 <code>anthropic</code> 配置也一起“换成中转”（不利于后续切回官方或对比排查）</li><li>更容易在 <code>opencode auth login</code> 时把 Key 存到错误的 providerID（例如误存成 <code>anthropic</code>），排查会变复杂</li></ul><p>用一个独立 providerID（例如本章的 <code>claudecode-relay</code>）能把“中转配置”与“官方 anthropic 配置”隔离开。</p><hr><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to “下一步”">​</a></h2><ul><li>回到 <a href="./04-connect.html">1.4 总览</a> 选择下一条路线，或进入 <a href="./../2-daily/01-interface.html">2.1 界面与基础操作</a></li></ul><div class="tip custom-block"><p class="custom-block-title">遇到问题？</p><p>中转配置卡住了？<a href="/community.html">加入社群</a>，和 2000+ 同路人一起交流，实时答疑。</p></div>',13)])])}const _=l(i,[["render",s]]);export{y as __pageData,_ as default};
