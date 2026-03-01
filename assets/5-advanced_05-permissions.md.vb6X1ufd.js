import{_ as n,I as l,c as r,o as s,a5 as o,j as t,J as i,a as d,b4 as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"5.5 权限管控","description":"配置权限策略控制 AI 能做什么、不能做什么，确保操作安全。包括外部目录访问控制。","frontmatter":{"title":"5.5 权限管控","subtitle":"安全策略配置","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.5","duration":"15 分钟","level":"进阶","description":"配置权限策略控制 AI 能做什么、不能做什么，确保操作安全。包括外部目录访问控制。","tags":["权限","安全","external_directory"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/05-permissions.md","filePath":"5-advanced/05-permissions.md","lastUpdated":1772014034000}'),p={name:"5-advanced/05-permissions.md"};function h(g,e,b,u,m,k){const a=l("AdInArticle");return s(),r("div",null,[e[0]||(e[0]=o('<h1 id="_5-5-权限管控" tabindex="-1">5.5 权限管控 <a class="header-anchor" href="#_5-5-权限管控" aria-label="Permalink to “5.5 权限管控”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：通过权限配置控制 AI 能做什么、不能做什么。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+c+'" alt="权限管控学霸笔记" data-zoom-src="/images/5-advanced/05-permissions-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解三种权限模式</li><li>配置全局权限</li><li>配置细粒度规则</li><li>配置 Agent 级权限</li><li>理解 Bash 命令如何被匹配</li><li>配置外部目录访问权限（<code>external_directory</code>）</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>担心 AI 执行危险命令</li><li>每次写文件都要确认，太麻烦</li><li>想限制某些 Agent 的能力</li><li>AI 访问项目外的文件时总是弹出确认框</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：精细控制 AI 能做什么</li><li>而且不想：让 AI 有太大的自由度</li></ul><hr><h2 id="权限模式" tabindex="-1">权限模式 <a class="header-anchor" href="#权限模式" aria-label="Permalink to “权限模式”">​</a></h2><table tabindex="0"><thead><tr><th>模式</th><th>说明</th></tr></thead><tbody><tr><td><code>allow</code></td><td>允许执行，不询问</td></tr><tr><td><code>ask</code></td><td>每次询问用户确认</td></tr><tr><td><code>deny</code></td><td>禁止执行</td></tr></tbody></table><hr><h2 id="全局权限配置" tabindex="-1">全局权限配置 <a class="header-anchor" href="#全局权限配置" aria-label="Permalink to “全局权限配置”">​</a></h2><p>在 <code>opencode.json</code> 中使用 <code>permission</code>（注意是<strong>单数</strong>）：</p>',20)),e[1]||(e[1]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "*": "ask",          // 默认所有操作需确认
    "bash": "allow",     // Bash 命令自动放行
    "edit": "deny"       // 禁止编辑文件
  }
}`)])],-1)),e[2]||(e[2]=t("p",null,"一次性设置所有权限：",-1)),e[3]||(e[3]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": "allow"  // 所有操作自动放行
}`)])],-1)),e[4]||(e[4]=t("hr",null,null,-1)),e[5]||(e[5]=t("h2",{id:"细粒度规则-对象语法",tabindex:"-1"},[d("细粒度规则（对象语法） "),t("a",{class:"header-anchor",href:"#细粒度规则-对象语法","aria-label":"Permalink to “细粒度规则（对象语法）”"},"​")],-1)),e[6]||(e[6]=t("p",null,"可以根据工具输入应用不同的操作：",-1)),e[7]||(e[7]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",                    // 默认需确认
      "git *": "allow",              // git 命令放行
      "npm *": "allow",              // npm 命令放行
      "rm *": "deny"                 // 禁止 rm 命令
    },
    "edit": {
      "*": "deny",                   // 默认禁止编辑
      "packages/web/src/content/docs/*.mdx": "allow"  // 只允许编辑文档
    }
  }
}`)])],-1)),e[8]||(e[8]=o('<p><strong>规则优先级</strong>：按模式匹配求值，<strong>最后匹配的规则生效</strong>。</p><p>常见模式是把通配符 <code>&quot;*&quot;</code> 规则放在前面，更具体的规则放在后面。</p><hr><h2 id="通配符" tabindex="-1">通配符 <a class="header-anchor" href="#通配符" aria-label="Permalink to “通配符”">​</a></h2><ul><li><code>*</code> 匹配零个或多个任意字符</li><li><code>?</code> 匹配正好一个字符</li><li>其他字符按字面匹配</li></ul><hr><h2 id="可用权限列表" tabindex="-1">可用权限列表 <a class="header-anchor" href="#可用权限列表" aria-label="Permalink to “可用权限列表”">​</a></h2>',7)),i(a),e[9]||(e[9]=o('<h3 id="支持细粒度规则的权限" tabindex="-1">支持细粒度规则的权限 <a class="header-anchor" href="#支持细粒度规则的权限" aria-label="Permalink to “支持细粒度规则的权限”">​</a></h3><p>这些权限可以使用对象语法配置不同模式的规则：</p><table tabindex="0"><thead><tr><th>权限</th><th>描述</th><th>匹配内容</th></tr></thead><tbody><tr><td><code>read</code></td><td>读取文件</td><td>文件路径</td></tr><tr><td><code>edit</code></td><td>文件修改权限（涵盖 edit, write, patch, multiedit）</td><td>文件路径</td></tr><tr><td><code>glob</code></td><td>文件通配符搜索</td><td>glob 模式</td></tr><tr><td><code>grep</code></td><td>内容搜索</td><td>正则表达式模式</td></tr><tr><td><code>list</code></td><td>列出目录文件</td><td>目录路径</td></tr><tr><td><code>bash</code></td><td>运行 shell 命令</td><td>解析后的命令前缀</td></tr><tr><td><code>task</code></td><td>启动子代理</td><td>子代理名称</td></tr><tr><td><code>skill</code></td><td>加载技能</td><td>技能名称</td></tr><tr><td><code>lsp</code></td><td>运行 LSP 查询</td><td>支持细粒度匹配</td></tr><tr><td><code>external_directory</code></td><td>访问项目外路径</td><td>目录路径</td></tr></tbody></table><blockquote><p>📝 注：<code>edit</code> 权限涵盖 write（创建新文件）、edit（修改文件）、patch（修补文件）、multiedit（批量编辑）四种工具操作。</p></blockquote><h3 id="仅支持简单语法的权限" tabindex="-1">仅支持简单语法的权限 <a class="header-anchor" href="#仅支持简单语法的权限" aria-label="Permalink to “仅支持简单语法的权限”">​</a></h3><p>这些权限只能设置为 <code>allow</code>/<code>ask</code>/<code>deny</code>，不支持对象语法：</p><table tabindex="0"><thead><tr><th>权限</th><th>描述</th></tr></thead><tbody><tr><td><code>todoread</code></td><td>读取待办列表</td></tr><tr><td><code>todowrite</code></td><td>更新待办列表</td></tr><tr><td><code>webfetch</code></td><td>获取 URL 内容（运行时会传递 URL 用于 always 批准）</td></tr><tr><td><code>websearch</code></td><td>网页搜索（运行时会传递查询用于 always 批准）</td></tr><tr><td><code>codesearch</code></td><td>代码搜索（运行时会传递查询用于 always 批准）</td></tr><tr><td><code>doom_loop</code></td><td>相同工具调用重复 3 次时触发</td></tr></tbody></table><blockquote><p>⚠️ 注意：<code>plan_enter</code>、<code>plan_exit</code> 仅作为内置 Agent 的默认权限配置使用，用户在 opencode.json 中配置无效。<code>question</code> 字段用户可以配置，但一般不需要修改。</p></blockquote><blockquote><p><strong>来源</strong>：<code>opencode/packages/opencode/src/config/config.ts:621-652</code></p></blockquote><hr><h2 id="默认值" tabindex="-1">默认值 <a class="header-anchor" href="#默认值" aria-label="Permalink to “默认值”">​</a></h2><ul><li>大多数权限默认为 <code>&quot;allow&quot;</code></li><li><code>doom_loop</code> 和 <code>external_directory</code> 默认为 <code>&quot;ask&quot;</code></li><li><code>.env</code> 文件默认需询问（<code>ask</code>），非直接拒绝：</li></ul>',12)),e[10]||(e[10]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "deny",
      "*.env.*": "deny",
      "*.env.example": "allow"  // 示例文件允许读取
    }
  }
}`)])],-1)),e[11]||(e[11]=o('<blockquote><p><strong>来源</strong>：<code>opencode/packages/opencode/src/agent/agent.ts:46-57</code></p></blockquote><hr><h2 id="agent-权限矩阵" tabindex="-1">Agent 权限矩阵 <a class="header-anchor" href="#agent-权限矩阵" aria-label="Permalink to “Agent 权限矩阵”">​</a></h2><p>OpenCode 内置四种主要 Agent，每种有不同的默认权限：</p><table tabindex="0"><thead><tr><th>工具/权限</th><th>build</th><th>plan</th><th>general</th><th>explore</th></tr></thead><tbody><tr><td>文件读取</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>文件编辑</td><td>✅</td><td>❌（仅 <code>.opencode/plans/*.md</code> 允许）</td><td>✅</td><td>❌</td></tr><tr><td>Shell 命令</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>网页搜索/获取</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>代码搜索</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>TODO 管理</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>提问工具</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td></tr><tr><td>计划进入/退出</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>外部目录访问</td><td>⚠️（默认 ask）</td><td>⚠️（ask，仅 .opencode/plans/* 允许）</td><td>⚠️（默认 ask）</td><td>⚠️（ask，仅 GLOB 允许）</td></tr></tbody></table><details class="details custom-block"><summary>📝 注：外部目录权限说明</summary><p>所有 Agent 访问外部目录默认都需要用户确认（ask），但部分 Agent 有例外：</p><ul><li><strong>build</strong>：默认 ask</li><li><strong>plan</strong>：默认 ask，但允许访问 <code>.opencode/plans/*</code> 目录</li><li><strong>general</strong>：默认 ask</li><li><strong>explore</strong>：默认 ask，但允许 GLOB 路径访问</li></ul></details><details class="details custom-block"><summary>📝 注：各 Agent 详细说明</summary><h3 id="build-agent-默认" tabindex="-1">Build Agent（默认） <a class="header-anchor" href="#build-agent-默认" aria-label="Permalink to “Build Agent（默认）”">​</a></h3><ul><li><strong>模式</strong>：<code>primary</code></li><li><strong>权限</strong>：全部允许</li><li><strong>用途</strong>：默认开发 Agent，所有工具可用</li></ul><h3 id="plan-agent" tabindex="-1">Plan Agent <a class="header-anchor" href="#plan-agent" aria-label="Permalink to “Plan Agent”">​</a></h3><ul><li><strong>模式</strong>：<code>primary</code></li><li><strong>权限</strong>：edit 默认禁止，仅允许编辑 <code>.opencode/plans/*.md</code> 计划文件</li><li><strong>用途</strong>：只读规划，不修改代码，确保分析阶段专注思考</li></ul><h3 id="general-agent" tabindex="-1">General Agent <a class="header-anchor" href="#general-agent" aria-label="Permalink to “General Agent”">​</a></h3><ul><li><strong>模式</strong>：<code>subagent</code></li><li><strong>权限</strong>：禁止 TODO 工具（todoread/todowrite: deny）</li><li><strong>用途</strong>：通用研究，多步任务</li></ul><h3 id="explore-agent" tabindex="-1">Explore Agent <a class="header-anchor" href="#explore-agent" aria-label="Permalink to “Explore Agent”">​</a></h3><ul><li><strong>模式</strong>：<code>subagent</code></li><li><strong>权限</strong>：默认禁止所有工具（<code>&quot;*&quot;: &quot;deny&quot;</code>），仅允许 grep/glob/list/bash/read/webfetch/websearch/codesearch</li><li><strong>用途</strong>：快速代码探索</li></ul></details><blockquote><p><strong>来源</strong>：<code>opencode/packages/opencode/src/agent/agent.ts:92-155</code></p></blockquote><hr><h2 id="plan-模式特殊规则" tabindex="-1">Plan 模式特殊规则 <a class="header-anchor" href="#plan-模式特殊规则" aria-label="Permalink to “Plan 模式特殊规则”">​</a></h2><p>当 AI 尝试访问<strong>项目工作目录之外</strong>的文件时，会触发 <code>external_directory</code> 权限检查。</p><h3 id="触发场景" tabindex="-1">触发场景 <a class="header-anchor" href="#触发场景" aria-label="Permalink to “触发场景”">​</a></h3><p>以下工具在访问项目外路径时会触发此权限：</p><table tabindex="0"><thead><tr><th>工具</th><th>触发条件</th></tr></thead><tbody><tr><td><code>read</code></td><td>读取项目外的文件</td></tr><tr><td><code>edit</code></td><td>编辑项目外的文件</td></tr><tr><td><code>write</code></td><td>写入项目外的文件</td></tr><tr><td><code>patch</code></td><td>修补项目外的文件</td></tr><tr><td><code>bash</code></td><td>命令涉及项目外路径（如 <code>cd ..</code>、<code>rm /tmp/file</code>）</td></tr></tbody></table><h3 id="检测逻辑" tabindex="-1">检测逻辑 <a class="header-anchor" href="#检测逻辑" aria-label="Permalink to “检测逻辑”">​</a></h3><p>OpenCode 使用相对路径判断文件是否在项目内：</p>',16)),e[12]||(e[12]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 来源：opencode/packages/opencode/src/util/filesystem.ts:25-27
export function contains(parent: string, child: string) {
  return !relative(parent, child).startsWith("..")
}`)])],-1)),e[13]||(e[13]=t("p",null,[d("如果相对路径以 "),t("code",null,".."),d(" 开头，说明文件在项目目录之外。")],-1)),e[14]||(e[14]=t("h3",{id:"默认行为",tabindex:"-1"},[d("默认行为 "),t("a",{class:"header-anchor",href:"#默认行为","aria-label":"Permalink to “默认行为”"},"​")],-1)),e[15]||(e[15]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "external_directory": "ask"  // 默认值：对非 GLOB 路径每次询问用户确认
  }
}`)])],-1)),e[16]||(e[16]=t("h3",{id:"常用配置-允许访问外部文件夹",tabindex:"-1"},[d("常用配置：允许访问外部文件夹 "),t("a",{class:"header-anchor",href:"#常用配置-允许访问外部文件夹","aria-label":"Permalink to “常用配置：允许访问外部文件夹”"},"​")],-1)),e[17]||(e[17]=t("p",null,[d("如果你希望 OpenCode 访问外部文件夹时"),t("strong",null,"不需要每次授权"),d("，添加以下配置：")],-1)),e[18]||(e[18]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`// opencode.json
{
  "permission": {
    "external_directory": "allow"
  }
}`)])],-1)),e[19]||(e[19]=o('<p>这是最常用的配置之一，特别适合以下场景：</p><ul><li>需要频繁访问 <code>~/.config/</code> 等配置目录</li><li>项目依赖其他目录的文件</li><li>使用 monorepo 但只在子目录启动 OpenCode</li></ul><h3 id="细粒度控制-按路径" tabindex="-1">细粒度控制（按路径） <a class="header-anchor" href="#细粒度控制-按路径" aria-label="Permalink to “细粒度控制（按路径）”">​</a></h3><p><code>external_directory</code> 支持对象语法，可以按路径配置：</p>',4)),e[20]||(e[20]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "external_directory": {
      "*": "ask",                    // 默认需确认
      "/tmp/*": "allow",             // /tmp 目录允许
      "/home/user/shared/*": "allow", // 共享目录允许
      "/etc/*": "deny"               // 系统配置禁止
    }
  }
}`)])],-1)),e[21]||(e[21]=o('<h3 id="配置方式汇总" tabindex="-1">配置方式汇总 <a class="header-anchor" href="#配置方式汇总" aria-label="Permalink to “配置方式汇总”">​</a></h3><table tabindex="0"><thead><tr><th>方式</th><th>配置位置</th><th>示例</th></tr></thead><tbody><tr><td>全局配置</td><td><code>~/.config/opencode/opencode.json</code></td><td><code>&quot;external_directory&quot;: &quot;allow&quot;</code></td></tr><tr><td>项目配置</td><td><code>项目根目录/opencode.json</code></td><td><code>&quot;external_directory&quot;: &quot;allow&quot;</code></td></tr><tr><td>环境变量</td><td><code>OPENCODE_PERMISSION</code></td><td><code>export OPENCODE_PERMISSION=&#39;{&quot;external_directory&quot;: &quot;allow&quot;}&#39;</code></td></tr><tr><td>Agent 级别</td><td><code>agent.xxx.permission</code></td><td>见下方示例</td></tr></tbody></table><h3 id="agent-级别配置" tabindex="-1">Agent 级别配置 <a class="header-anchor" href="#agent-级别配置" aria-label="Permalink to “Agent 级别配置”">​</a></h3>',3)),e[22]||(e[22]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "file-manager": {
      "description": "文件管理 Agent，可访问外部目录",
      "permission": {
        "external_directory": "allow"
      }
    },
    "safe-agent": {
      "description": "安全 Agent，禁止访问外部目录",
      "permission": {
        "external_directory": "deny"
      }
    }
  }
}`)])],-1)),e[23]||(e[23]=o('<hr><h2 id="bash-命令如何被匹配" tabindex="-1">Bash 命令如何被匹配 <a class="header-anchor" href="#bash-命令如何被匹配" aria-label="Permalink to “Bash 命令如何被匹配”">​</a></h2><p>OpenCode 会将 Bash 命令解析为<strong>可读的命令前缀</strong>再进行匹配。解析规则基于命令的&quot;arity&quot;（参数数量）。</p><h3 id="解析示例" tabindex="-1">解析示例 <a class="header-anchor" href="#解析示例" aria-label="Permalink to “解析示例”">​</a></h3><table tabindex="0"><thead><tr><th>输入命令</th><th>解析后的匹配模式</th></tr></thead><tbody><tr><td><code>git checkout main</code></td><td><code>git checkout</code></td></tr><tr><td><code>npm install</code></td><td><code>npm install</code></td></tr><tr><td><code>npm run dev</code></td><td><code>npm run dev</code></td></tr><tr><td><code>docker compose up</code></td><td><code>docker compose up</code></td></tr><tr><td><code>rm -rf node_modules</code></td><td><code>rm</code></td></tr></tbody></table><h3 id="常见命令-arity" tabindex="-1">常见命令 Arity <a class="header-anchor" href="#常见命令-arity" aria-label="Permalink to “常见命令 Arity”">​</a></h3><table tabindex="0"><thead><tr><th>命令前缀</th><th>Arity</th><th>说明</th></tr></thead><tbody><tr><td><code>git</code></td><td>2</td><td>匹配 <code>git &lt;子命令&gt;</code></td></tr><tr><td><code>npm</code></td><td>2</td><td>匹配 <code>npm &lt;子命令&gt;</code></td></tr><tr><td><code>npm run</code></td><td>3</td><td>匹配 <code>npm run &lt;脚本名&gt;</code></td></tr><tr><td><code>docker</code></td><td>2</td><td>匹配 <code>docker &lt;子命令&gt;</code></td></tr><tr><td><code>docker compose</code></td><td>3</td><td>匹配 <code>docker compose &lt;子命令&gt;</code></td></tr><tr><td><code>rm</code></td><td>1</td><td>只匹配 <code>rm</code></td></tr></tbody></table><blockquote><p><strong>来源</strong>：<code>opencode/packages/opencode/src/permission/arity.ts</code></p></blockquote><h3 id="实用配置示例" tabindex="-1">实用配置示例 <a class="header-anchor" href="#实用配置示例" aria-label="Permalink to “实用配置示例”">​</a></h3>',9)),e[24]||(e[24]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow",
      "git diff": "allow",
      "git log*": "allow",
      "npm run*": "allow",
      "rm*": "deny"           // 禁止所有删除操作
    }
  }
}`)])],-1)),e[25]||(e[25]=o('<hr><h2 id="ask-的行为" tabindex="-1">Ask 的行为 <a class="header-anchor" href="#ask-的行为" aria-label="Permalink to “Ask 的行为”">​</a></h2><p>当 OpenCode 提示批准时，提供三种选项：</p><table tabindex="0"><thead><tr><th>选项</th><th>行为</th></tr></thead><tbody><tr><td><code>once</code></td><td>仅批准此次请求</td></tr><tr><td><code>always</code></td><td>批准匹配<strong>建议模式</strong>的未来请求（当前会话）</td></tr><tr><td><code>reject</code></td><td>拒绝请求</td></tr></tbody></table><h3 id="always-如何工作" tabindex="-1"><code>always</code> 如何工作 <a class="header-anchor" href="#always-如何工作" aria-label="Permalink to “always 如何工作”">​</a></h3><p>选择 <code>always</code> 时，OpenCode 会使用<strong>工具建议的安全模式</strong>来批准后续请求。</p><p>例如，批准 <code>git status --porcelain</code> 时，建议的模式可能是 <code>git status*</code>，这样后续所有 <code>git status</code> 相关命令都会自动放行。</p><h3 id="拒绝时的反馈" tabindex="-1">拒绝时的反馈 <a class="header-anchor" href="#拒绝时的反馈" aria-label="Permalink to “拒绝时的反馈”">​</a></h3><p>用户拒绝时，可以选择：</p><ul><li><strong>直接拒绝</strong>：AI 收到&quot;用户拒绝了此工具调用&quot;，会尝试其他方法</li><li><strong>附带反馈</strong>：可以告诉 AI 为什么拒绝，引导它调整方向</li></ul><hr><h2 id="agent-级权限" tabindex="-1">Agent 级权限 <a class="header-anchor" href="#agent-级权限" aria-label="Permalink to “Agent 级权限”">​</a></h2><p>可以按代理覆盖权限，代理规则<strong>优先于</strong>全局配置：</p>',13)),e[26]||(e[26]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow"
    }
  },
  "agent": {
    "deploy": {
      "permission": {
        "bash": {
          "*": "ask",
          "git status": "allow",
          "git push": "allow"     // 仅 deploy agent 可以 push
        }
      }
    }
  }
}`)])],-1)),e[27]||(e[27]=t("h3",{id:"markdown-agent-配置",tabindex:"-1"},[d("Markdown Agent 配置 "),t("a",{class:"header-anchor",href:"#markdown-agent-配置","aria-label":"Permalink to “Markdown Agent 配置”"},"​")],-1)),e[28]||(e[28]=t("p",null,"在 Markdown 代理中配置权限：",-1)),e[29]||(e[29]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
description: 只读代码审查
mode: subagent
permission:
  edit: deny
  bash: ask
  webfetch: deny
---

只分析代码并建议更改，不执行任何修改。`)])],-1)),e[30]||(e[30]=o('<blockquote><p><strong>注意</strong>：Agent 权限会与全局权限<strong>合并</strong>，Agent 中的规则优先。</p></blockquote><hr><h2 id="废弃配置迁移" tabindex="-1">废弃配置迁移 <a class="header-anchor" href="#废弃配置迁移" aria-label="Permalink to “废弃配置迁移”">​</a></h2><p>自 v1.1.1 起，旧的 <code>tools</code> 配置已被废弃，迁移到 <code>permission</code>：</p>',4)),e[31]||(e[31]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`// ❌ 旧语法（已废弃，但仍向后兼容）
{
  "tools": {
    "bash": true,
    "edit": false
  }
}

// ✅ 新语法
{
  "permission": {
    "bash": "allow",
    "edit": "deny"
  }
}`)])],-1)),e[32]||(e[32]=t("blockquote",null,[t("p",null,"旧配置仍然可用，OpenCode 会自动转换为新格式。")],-1)),e[33]||(e[33]=t("hr",null,null,-1)),e[34]||(e[34]=t("h2",{id:"安全最佳实践",tabindex:"-1"},[d("安全最佳实践 "),t("a",{class:"header-anchor",href:"#安全最佳实践","aria-label":"Permalink to “安全最佳实践”"},"​")],-1)),e[35]||(e[35]=t("h3",{id:"_1-保护敏感文件",tabindex:"-1"},[d("1. 保护敏感文件 "),t("a",{class:"header-anchor",href:"#_1-保护敏感文件","aria-label":"Permalink to “1. 保护敏感文件”"},"​")],-1)),e[36]||(e[36]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "deny",
      "*.env.*": "deny",
      "*.key": "deny",
      "*.pem": "deny",
      "credentials/*": "deny"
    }
  }
}`)])],-1)),e[37]||(e[37]=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},".env 文件保护"),t("p",null,[d("OpenCode 默认保护所有 "),t("code",null,".env"),d(" 和 "),t("code",null,".env.*"),d(" 文件，但允许直接访问 "),t("code",null,".env.example"),d("（示例文件不含敏感信息）。")])],-1)),e[38]||(e[38]=t("h3",{id:"_2-限制危险命令",tabindex:"-1"},[d("2. 限制危险命令 "),t("a",{class:"header-anchor",href:"#_2-限制危险命令","aria-label":"Permalink to “2. 限制危险命令”"},"​")],-1)),e[39]||(e[39]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm -rf *": "deny",
      "sudo *": "ask",
      "chmod *": "ask"
    }
  }
}`)])],-1)),e[40]||(e[40]=t("h3",{id:"_3-企业环境配置",tabindex:"-1"},[d("3. 企业环境配置 "),t("a",{class:"header-anchor",href:"#_3-企业环境配置","aria-label":"Permalink to “3. 企业环境配置”"},"​")],-1)),e[41]||(e[41]=t("p",null,[d("在全局配置文件 "),t("code",null,"~/.config/opencode/opencode.json"),d(" 中配置严格权限：")],-1)),e[42]||(e[42]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "external_directory": "deny",
    "bash": "ask",
    "websearch": "deny",
    "webfetch": "deny"
  }
}`)])],-1)),e[43]||(e[43]=t("h3",{id:"_4-开发环境配置",tabindex:"-1"},[d("4. 开发环境配置 "),t("a",{class:"header-anchor",href:"#_4-开发环境配置","aria-label":"Permalink to “4. 开发环境配置”"},"​")],-1)),e[44]||(e[44]=t("p",null,[d("在项目 "),t("code",null,".opencode/opencode.json"),d(" 中配置宽松权限：")],-1)),e[45]||(e[45]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow"
    },
    "edit": {
      "src/*": "allow",
      "test/*": "allow",
      "*.md": "allow"
    },
    "external_directory": "allow"
  }
}`)])],-1)),e[46]||(e[46]=o('<hr><h2 id="权限问题排查" tabindex="-1">权限问题排查 <a class="header-anchor" href="#权限问题排查" aria-label="Permalink to “权限问题排查”">​</a></h2><h3 id="问题-操作被意外拒绝" tabindex="-1">问题：操作被意外拒绝 <a class="header-anchor" href="#问题-操作被意外拒绝" aria-label="Permalink to “问题：操作被意外拒绝”">​</a></h3><ol><li>检查是否在 Plan 模式（Plan 模式禁止编辑源代码）</li><li>检查 <code>opencode.json</code> 中的权限配置</li><li>检查是否触发了文件模式匹配（检查 .env 等敏感文件规则）</li></ol><h3 id="问题-频繁弹出确认框" tabindex="-1">问题：频繁弹出确认框 <a class="header-anchor" href="#问题-频繁弹出确认框" aria-label="Permalink to “问题：频繁弹出确认框”">​</a></h3><ol><li>使用「始终允许」减少重复确认</li><li>在配置中添加 <code>allow</code> 规则覆盖默认</li><li>使用通配符匹配一类操作</li></ol><h3 id="问题-权限配置不生效" tabindex="-1">问题：权限配置不生效 <a class="header-anchor" href="#问题-权限配置不生效" aria-label="Permalink to “问题：权限配置不生效”">​</a></h3><ol><li>检查 JSON 语法是否正确</li><li>确认配置文件路径（项目 vs 全局）</li><li>确保使用 <code>permission</code>（单数）而非 <code>permissions</code>（复数）</li><li>重启 OpenCode 使配置生效</li></ol><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>权限配置不生效</td><td>用了 <code>permissions</code>（复数）</td><td>用 <code>permission</code>（单数）</td></tr><tr><td>命令被意外拦截</td><td>规则顺序问题</td><td><strong>最后匹配的规则生效</strong>，把 <code>*</code> 放最前面</td></tr><tr><td>无法读取 .env</td><td>默认被拒绝</td><td>显式添加 allow 规则</td></tr><tr><td><code>todowrite: {...}</code> 报错</td><td>只支持简单语法</td><td>改为 <code>todowrite: &quot;allow&quot;</code></td></tr><tr><td><code>git push</code> 被匹配为 <code>git</code></td><td>没有配置完整命令</td><td>配置 <code>&quot;git push&quot;: &quot;allow&quot;</code></td></tr><tr><td>Agent 权限不生效</td><td>嵌套层级错误</td><td>确保在 <code>agent.名称.permission</code> 下</td></tr><tr><td>访问外部文件总是弹确认</td><td><code>external_directory</code> 默认 <code>ask</code></td><td>设置 <code>&quot;external_directory&quot;: &quot;allow&quot;</code></td></tr><tr><td>想禁止访问某些外部路径</td><td>需要细粒度控制</td><td>使用对象语法按路径配置</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>三种权限模式（allow/ask/deny）</li><li>使用 <code>permission</code> 配置（单数）</li><li>区分支持对象语法和简单语法的权限</li><li><strong>完整的权限字段列表</strong>（read, edit, glob, grep, list, bash, task, skill, lsp, external_directory, todowrite, todoread, webfetch, websearch, codesearch, doom_loop, question） <ul><li>注：<code>write</code>、<code>patch</code>、<code>multiedit</code> 工具使用 <code>edit</code> 权限</li></ul></li><li><strong>四种内置 Agent 的权限矩阵</strong>（build/plan/general/explore）</li><li>Bash 命令的 Arity 解析机制</li><li><code>always</code> 的模式匹配行为</li><li>Agent 级权限覆盖</li><li><strong>外部目录访问权限</strong>（<code>external_directory</code>）的配置方法</li><li><strong>安全最佳实践</strong>（保护敏感文件、限制危险命令、企业/开发环境配置）</li><li><strong>权限问题排查</strong>（操作被拒绝、频繁弹确认框、配置不生效）</li></ol><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./02a-agent-quickstart.html">5.2 自定义 Agent</a> - Agent 配置</li><li><a href="./01a-config-basics.html">5.1a 配置基础</a> - 配置文件入门</li></ul><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习主题与快捷键定制。</p></blockquote>',21))])}const A=n(p,[["render",h]]);export{x as __pageData,A as default};
