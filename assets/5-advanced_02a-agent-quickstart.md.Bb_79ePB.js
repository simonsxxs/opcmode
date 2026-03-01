import{_ as o,I as r,c as l,o as s,a5 as d,j as t,J as i,a as n,aY as g}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"5.2a Agent 快速入门","description":"理解 Agent 的本质，创建你的第一个自定义 Agent，扩展 OpenCode 的能力。","frontmatter":{"title":"5.2a Agent 快速入门","subtitle":"理解并创建你的第一个 Agent","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.2a","duration":"15 分钟","practice":"15 分钟","level":"进阶","description":"理解 Agent 的本质，创建你的第一个自定义 Agent，扩展 OpenCode 的能力。","tags":["Agent","自定义"],"prerequisite":["3.2 认识 Agent"]},"headers":[],"relativePath":"5-advanced/02a-agent-quickstart.md","filePath":"5-advanced/02a-agent-quickstart.md","lastUpdated":1772014034000}'),c={name:"5-advanced/02a-agent-quickstart.md"};function p(h,e,b,u,m,A){const a=r("AdInArticle");return s(),l("div",null,[e[0]||(e[0]=d('<h1 id="_5-2a-agent-快速入门" tabindex="-1">5.2a Agent 快速入门 <a class="header-anchor" href="#_5-2a-agent-快速入门" aria-label="Permalink to “5.2a Agent 快速入门”">​</a></h1><blockquote><p>理解 Agent 的本质，创建你的第一个自定义 Agent。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+g+'" alt="Agent快速入门学霸笔记" data-zoom-src="/images/5-advanced/02a-agent-quickstart-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解 Agent 是什么、为什么需要它</li><li>区分 Primary Agent 和 Subagent</li><li>用 Markdown 创建自定义 Agent</li><li>用 JSON 创建自定义 Agent</li><li>切换和使用 Agent</li></ul><hr><h2 id="agent-是什么" tabindex="-1">Agent 是什么 <a class="header-anchor" href="#agent-是什么" aria-label="Permalink to “Agent 是什么”">​</a></h2><h3 id="anthropic-的定义" tabindex="-1">Anthropic 的定义 <a class="header-anchor" href="#anthropic-的定义" aria-label="Permalink to “Anthropic 的定义”">​</a></h3><p>根据 Anthropic 在《Building Effective Agents》中的定义：</p><table tabindex="0"><thead><tr><th>类型</th><th>说明</th><th>特点</th></tr></thead><tbody><tr><td><strong>Workflow</strong></td><td>LLM 和工具通过预定义代码路径编排</td><td>步骤固定、可预测</td></tr><tr><td><strong>Agent</strong></td><td>LLM 动态指导自己的流程和工具使用</td><td>自主决策、灵活应对</td></tr></tbody></table><h3 id="opencode-中的-agent" tabindex="-1">OpenCode 中的 Agent <a class="header-anchor" href="#opencode-中的-agent" aria-label="Permalink to “OpenCode 中的 Agent”">​</a></h3><p>OpenCode 的 Agent 是<strong>可配置的 AI 人格</strong>，你可以定义：</p><ul><li><strong>身份</strong>：它是谁、擅长什么</li><li><strong>能力</strong>：可以使用哪些工具</li><li><strong>行为</strong>：如何处理任务、有什么限制</li></ul><h3 id="为什么需要自定义-agent" tabindex="-1">为什么需要自定义 Agent <a class="header-anchor" href="#为什么需要自定义-agent" aria-label="Permalink to “为什么需要自定义 Agent”">​</a></h3><table tabindex="0"><thead><tr><th>场景</th><th>不用 Agent</th><th>用 Agent</th></tr></thead><tbody><tr><td>代码审查</td><td>每次说&quot;你是代码审查专家...&quot;</td><td>直接 <code>@reviewer</code></td></tr><tr><td>文档写作</td><td>每次说&quot;用技术文档风格...&quot;</td><td>直接 <code>@docs-writer</code></td></tr><tr><td>安全审计</td><td>每次说&quot;检查安全漏洞...&quot;</td><td>直接 <code>@security-auditor</code></td></tr></tbody></table><hr><h2 id="agent-类型" tabindex="-1">Agent 类型 <a class="header-anchor" href="#agent-类型" aria-label="Permalink to “Agent 类型”">​</a></h2><p>OpenCode 有两类 Agent：</p><table tabindex="0"><thead><tr><th>类型</th><th>说明</th><th>调用方式</th></tr></thead><tbody><tr><td><strong>Primary</strong></td><td>主 Agent，你直接交互的对象</td><td>Tab 键切换</td></tr><tr><td><strong>Subagent</strong></td><td>子 Agent，被主 Agent 调用执行专项任务</td><td><code>@agent名</code> 或自动调用</td></tr><tr><td><strong>All</strong></td><td>混合模式，既可以作为主 Agent，也可以被调用</td><td>Tab 切换或 @ 调用</td></tr></tbody></table><h3 id="它们如何协作" tabindex="-1">它们如何协作 <a class="header-anchor" href="#它们如何协作" aria-label="Permalink to “它们如何协作”">​</a></h3>',23)),e[1]||(e[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`用户 ←→ Primary Agent (build/plan)
              ↓
         Task Tool (创建独立 Session)
              ↓
         Subagent (explore/general/你的自定义 Agent)
              ↓
         返回结果给 Primary`)])],-1)),e[2]||(e[2]=d('<h3 id="子代理的运行机制-重要" tabindex="-1">子代理的运行机制（重要） <a class="header-anchor" href="#子代理的运行机制-重要" aria-label="Permalink to “子代理的运行机制（重要）”">​</a></h3><p>理解子代理的运行机制对于设计高效 Agent 至关重要：</p><ol><li><p><strong>Session 隔离（无历史记忆）</strong> 子代理运行在一个<strong>全新的、独立的 Session</strong> 中。这意味着：</p><ul><li><strong>看不到主 Agent 的对话历史</strong>：它不知道你之前和主 Agent 聊了什么。</li><li><strong>上下文仅包含 Prompt</strong>：它的世界里只有你传给它的任务描述（Prompt）。</li><li><strong>必须提供完整上下文</strong>：调用时必须把任务所需的所有信息都写在 prompt 里。</li></ul></li><li><p><strong>All 模式的双重身份</strong> 当 <code>mode: &quot;all&quot;</code> 的 Agent：</p><ul><li><strong>被 Tab 切换时</strong>：它是主 Agent，拥有完整历史记忆。</li><li><strong>被 @ 调用时</strong>：它是子 Agent，受到 Session 隔离限制，看不到调用者的历史。</li></ul></li></ol><hr><h2 id="内置-agent-详解" tabindex="-1">内置 Agent 详解 <a class="header-anchor" href="#内置-agent-详解" aria-label="Permalink to “内置 Agent 详解”">​</a></h2>',5)),i(a),e[3]||(e[3]=d('<h3 id="用户可见的-agent" tabindex="-1">用户可见的 Agent <a class="header-anchor" href="#用户可见的-agent" aria-label="Permalink to “用户可见的 Agent”">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>模式</th><th>默认权限</th><th>说明</th></tr></thead><tbody><tr><td><code>build</code></td><td>primary</td><td>全部允许</td><td>默认开发 Agent，所有工具可用</td></tr><tr><td><code>plan</code></td><td>primary</td><td>edit: deny（仅 <code>.opencode/plans/*.md</code> 允许）</td><td>只读规划，不修改代码</td></tr><tr><td><code>general</code></td><td>subagent</td><td>todoread/todowrite: deny</td><td>通用研究，多步任务</td></tr><tr><td><code>explore</code></td><td>subagent</td><td>仅允许 grep/glob/list/bash/read/webfetch/websearch/codesearch</td><td>快速代码探索</td></tr></tbody></table><blockquote><p><strong>关于 Explore Agent 的探索深度</strong>：调用 Explore 时可以指定探索深度级别。AI 会根据任务描述自动判断，你也可以在提示词中明确指定：</p><ul><li><strong>quick</strong>：基本搜索，快速定位目标文件</li><li><strong>medium</strong>：中等探索，平衡速度和覆盖面</li><li><strong>very thorough</strong>：全面分析，跨多个位置和命名约定进行搜索</li></ul><p>来源：<code>agent.ts:150</code></p></blockquote><blockquote><p><strong>关于 Plan Agent</strong>：它不是&quot;需要确认才能编辑&quot;，而是<strong>默认禁止编辑</strong>，只有 <code>.opencode/plans/*.md</code> 目录下的文件允许写入。这是为了让你在规划阶段专注思考，不被代码修改分心。</p><p>来源：<code>agent.ts:69-83</code></p></blockquote><h3 id="隐藏的内置-agent" tabindex="-1">隐藏的内置 Agent <a class="header-anchor" href="#隐藏的内置-agent" aria-label="Permalink to “隐藏的内置 Agent”">​</a></h3><p>这些 Agent 你不会直接使用，但了解它们有助于理解系统：</p><table tabindex="0"><thead><tr><th>名称</th><th>用途</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td>生成会话标题</td><td>使用 small_model</td></tr><tr><td><code>summary</code></td><td>生成会话摘要</td><td>用于压缩</td></tr><tr><td><code>compaction</code></td><td>压缩上下文</td><td>当上下文过长时自动触发</td></tr></tbody></table><blockquote><p>来源：<code>agent.ts:122-166</code></p></blockquote><hr><h2 id="配置位置" tabindex="-1">配置位置 <a class="header-anchor" href="#配置位置" aria-label="Permalink to “配置位置”">​</a></h2><table tabindex="0"><thead><tr><th>位置</th><th>作用范围</th><th>优先级</th></tr></thead><tbody><tr><td><code>.opencode/agent/*.md</code></td><td>当前项目</td><td>高</td></tr><tr><td><code>~/.config/opencode/agent/*.md</code></td><td>全局所有项目</td><td>中</td></tr><tr><td><code>opencode.json</code> 的 <code>agent</code> 字段</td><td>取决于文件位置</td><td>与 Markdown 合并</td></tr></tbody></table><blockquote><p><strong>文件名即 Agent 名称</strong>：<code>docs-writer.md</code> 创建名为 <code>docs-writer</code> 的 Agent。</p></blockquote><hr><h2 id="创建第一个-agent-markdown-方式" tabindex="-1">创建第一个 Agent（Markdown 方式） <a class="header-anchor" href="#创建第一个-agent-markdown-方式" aria-label="Permalink to “创建第一个 Agent（Markdown 方式）”">​</a></h2><h3 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to “基本结构”">​</a></h3>',15)),e[4]||(e[4]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
description: 简短描述这个 Agent 做什么
mode: subagent
---

这里是系统提示词（System Prompt）。

告诉 Agent 它是谁、擅长什么、如何工作。`)])],-1)),e[5]||(e[5]=t("h3",{id:"完整示例-文档写作-agent",tabindex:"-1"},[n("完整示例：文档写作 Agent "),t("a",{class:"header-anchor",href:"#完整示例-文档写作-agent","aria-label":"Permalink to “完整示例：文档写作 Agent”"},"​")],-1)),e[6]||(e[6]=t("p",null,[n("创建文件 "),t("code",null,".opencode/agent/docs-writer.md"),n("：")],-1)),e[7]||(e[7]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
description: |
  技术文档写作专家，擅长 API 文档、README、用户手册。
  适用场景：写新项目文档、更新现有文档、解释代码功能。
  不适用：代码审查、Bug 修复、功能实现。
mode: subagent
temperature: 0.3
---

# 角色

你是技术文档专家，擅长将复杂概念解释得通俗易懂。你的文档被评价为"看完就会用"。

# 文档规范

- 使用 Markdown 格式
- 代码示例必须可运行
- 包含输入/输出说明
- 中文优先，专业术语保留英文

# 文档结构

1. 概述（一句话说明是什么）
2. 快速开始（30 秒能跑起来）
3. 详细 API（完整参数说明）
4. 示例代码（覆盖常见场景）
5. 常见问题（预判用户疑惑）

# 工作原则

- 先理解代码，再写文档
- 不确定的地方要验证
- 保持风格一致

# 约束条件

- ✅ 快速开始的代码必须可直接复制运行
- ✅ 参数说明要包含类型和默认值
- ❌ 避免假设用户已有背景知识

# 错误处理

- 如果代码功能不明确，先询问或查阅相关源码
- 如果缺少上下文，列出需要补充的信息
- 如果遇到不熟悉的框架，声明并建议其他 Agent`)])],-1)),e[8]||(e[8]=t("h3",{id:"markdown-中的权限配置",tabindex:"-1"},[n("Markdown 中的权限配置 "),t("a",{class:"header-anchor",href:"#markdown-中的权限配置","aria-label":"Permalink to “Markdown 中的权限配置”"},"​")],-1)),e[9]||(e[9]=t("p",null,"你可以在 Frontmatter 中直接配置权限（使用 YAML 语法）：",-1)),e[10]||(e[10]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
description: 只读代码审计 Agent
mode: subagent
permission:
  edit: deny            # 禁止编辑
  bash:
    "*": deny           # 禁止所有命令
    "git log*": allow   # 只允许查看日志
  task:
    "*": deny           # 禁止调用其他 Agent
---`)])],-1)),e[11]||(e[11]=d('<h3 id="完整配置字段速查表" tabindex="-1">完整配置字段速查表 <a class="header-anchor" href="#完整配置字段速查表" aria-label="Permalink to “完整配置字段速查表”">​</a></h3><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>description</code></td><td>string</td><td><strong>建议填</strong>。Agent 简介，影响主 Agent 的自动选择决策</td></tr><tr><td><code>mode</code></td><td>enum</td><td><code>subagent</code> | <code>primary</code> | <code>all</code>。默认 <code>all</code></td></tr><tr><td><code>model</code></td><td>string</td><td>格式 <code>provider/model</code>。不填则继承主 Agent 当前模型</td></tr><tr><td><code>prompt</code></td><td>string</td><td>系统提示词（JSON 配置专用，Markdown 中使用正文）</td></tr><tr><td><code>temperature</code></td><td>number</td><td>0-1，控制回答的随机性</td></tr><tr><td><code>top_p</code></td><td>number</td><td>0-1，核采样参数</td></tr><tr><td><code>steps</code></td><td>number</td><td>最大迭代步数，防止死循环</td></tr><tr><td><code>hidden</code></td><td>boolean</td><td><code>true</code> 则从 @ 自动补全菜单中隐藏</td></tr><tr><td><code>color</code></td><td>string</td><td>十六进制颜色 <code>#RRGGBB</code>，用于界面区分</td></tr><tr><td><code>permission</code></td><td>object</td><td>权限配置对象</td></tr><tr><td><code>disable</code></td><td>boolean</td><td>是否禁用此 Agent</td></tr><tr><td><code>options</code></td><td>object</td><td>透传参数容器，用于存放不常用的 Provider 参数</td></tr><tr><td><em>其他字段</em></td><td>any</td><td>未知字段会自动作为参数<strong>透传</strong>给 Provider（如 <code>reasoningEffort</code>）</td></tr></tbody></table><blockquote><p><code>maxSteps</code> 已废弃，请使用 <code>steps</code>。</p></blockquote><hr><h2 id="创建第一个-agent-json-方式" tabindex="-1">创建第一个 Agent（JSON 方式） <a class="header-anchor" href="#创建第一个-agent-json-方式" aria-label="Permalink to “创建第一个 Agent（JSON 方式）”">​</a></h2><p>在 <code>opencode.json</code> 中配置。这与 Markdown 方式等效，适合配置简单的 Agent 或进行覆盖配置。</p><h3 id="配置合并规则" tabindex="-1">配置合并规则 <a class="header-anchor" href="#配置合并规则" aria-label="Permalink to “配置合并规则”">​</a></h3><p>你可以混合使用 Markdown 和 JSON。如果同名 Agent 存在于两处，规则如下：</p><ol><li><strong>JSON 配置优先级更高</strong>：<code>opencode.json</code> 中的字段会覆盖 <code>.md</code> 中的同名字段。</li><li><strong>场景</strong>：通常用 <code>.md</code> 定义 Prompt（因为长文本好写），用 <code>opencode.json</code> 微调参数（如临时禁用、修改模型）。</li></ol><h3 id="json-配置示例" tabindex="-1">JSON 配置示例 <a class="header-anchor" href="#json-配置示例" aria-label="Permalink to “JSON 配置示例”">​</a></h3>',10)),e[12]||(e[12]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "code-reviewer": {
      "description": "代码审查专家，专注安全、性能、可维护性。适用于 PR 审查、代码健康检查。",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-20250514",
      "temperature": 0.2,
      "steps": 30,
      "color": "#4CAF50",
      "prompt": "你是代码审查专家。\\n\\n## 检查要点\\n- 安全漏洞（SQL注入、XSS、硬编码密钥）\\n- 性能问题（时间复杂度、资源泄漏）\\n- 代码风格（命名、结构、可读性）\\n- 可维护性（耦合度、测试覆盖）\\n\\n## 输出格式\\n- 🔴 严重问题（必须修复，说明风险和修复方案）\\n- 🟡 建议改进（推荐修复，说明原因）\\n- 🟢 优点（值得保持）\\n\\n## 约束条件\\n- ✅ 问题要具体到行号\\n- ✅ 每个问题都要有修复建议\\n- ❌ 避免只批评不给方案"
    }
  }
}`)])],-1)),e[13]||(e[13]=t("h3",{id:"使用外部-prompt-文件",tabindex:"-1"},[n("使用外部 Prompt 文件 "),t("a",{class:"header-anchor",href:"#使用外部-prompt-文件","aria-label":"Permalink to “使用外部 Prompt 文件”"},"​")],-1)),e[14]||(e[14]=t("p",null,"当 prompt 很长时，可以引用外部文件：",-1)),e[15]||(e[15]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "code-reviewer": {
      "description": "代码审查专家",
      "mode": "subagent",
      "prompt": "{file:./prompts/code-reviewer.txt}"
    }
  }
}`)])],-1)),e[16]||(e[16]=d('<blockquote><p>路径相对于配置文件所在目录。</p></blockquote><hr><h2 id="使用-agent" tabindex="-1">使用 Agent <a class="header-anchor" href="#使用-agent" aria-label="Permalink to “使用 Agent”">​</a></h2><h3 id="切换-primary-agent" tabindex="-1">切换 Primary Agent <a class="header-anchor" href="#切换-primary-agent" aria-label="Permalink to “切换 Primary Agent”">​</a></h3><p>按 <strong>Tab</strong> 键在 primary agent 之间切换（如 build ↔ plan）。</p><p>也可以使用快捷键 <code>&lt;Leader&gt;+a</code> 打开 Agent 列表选择。</p><h3 id="调用-subagent" tabindex="-1">调用 Subagent <a class="header-anchor" href="#调用-subagent" aria-label="Permalink to “调用 Subagent”">​</a></h3><p><strong>方式 1：手动 @ 提及</strong></p>',8)),e[17]||(e[17]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"@docs-writer 帮我写一个 README")])],-1)),e[18]||(e[18]=d('<p><strong>方式 2：自动调用</strong></p><p>主 Agent 会根据任务描述和 subagent 的 <code>description</code> 自动选择合适的 subagent。</p><blockquote><p>这就是为什么 <code>description</code> 很重要——它决定了 Agent 何时被自动选中。</p></blockquote><h3 id="会话导航" tabindex="-1">会话导航 <a class="header-anchor" href="#会话导航" aria-label="Permalink to “会话导航”">​</a></h3><p>当 subagent 创建子会话时：</p><table tabindex="0"><thead><tr><th>快捷键</th><th>作用</th></tr></thead><tbody><tr><td><code>&lt;Leader&gt;+→</code></td><td>向前切换（父 → 子1 → 子2 → 父）</td></tr><tr><td><code>&lt;Leader&gt;+←</code></td><td>向后切换</td></tr><tr><td><code>&lt;Leader&gt;+↑</code></td><td>返回父会话</td></tr></tbody></table><hr><h2 id="禁用-agent" tabindex="-1">禁用 Agent <a class="header-anchor" href="#禁用-agent" aria-label="Permalink to “禁用 Agent”">​</a></h2><p>在 <code>opencode.json</code> 中禁用不需要的内置 Agent：</p>',9)),e[19]||(e[19]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "explore": {
      "disable": true
    },
    "general": {
      "disable": true
    }
  }
}`)])],-1)),e[20]||(e[20]=t("hr",null,null,-1)),e[21]||(e[21]=t("h2",{id:"设置默认-agent",tabindex:"-1"},[n("设置默认 Agent "),t("a",{class:"header-anchor",href:"#设置默认-agent","aria-label":"Permalink to “设置默认 Agent”"},"​")],-1)),e[22]||(e[22]=t("p",null,"启动 OpenCode 时默认使用哪个 primary agent：",-1)),e[23]||(e[23]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "default_agent": "plan"  // 默认使用 plan agent
}`)])],-1)),e[24]||(e[24]=d('<blockquote><p>如果不设置，默认是 <code>build</code>。</p><p>来源：<code>config.ts:817-821</code></p></blockquote><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>Agent 没出现</td><td>文件位置不对</td><td>确认在 <code>agent/</code> 目录下，不是 <code>agents/</code></td></tr><tr><td>Agent 不遵守指令</td><td>prompt 太长或太模糊</td><td>精简核心规则，结构化</td></tr><tr><td>mode 不对</td><td>用了 <code>plan</code> 或 <code>build</code></td><td>应为 <code>primary</code> / <code>subagent</code> / <code>all</code></td></tr><tr><td>description 报必填错误</td><td>版本问题</td><td>实际是可选的，建议还是填写</td></tr><tr><td>maxSteps 不生效</td><td>已废弃</td><td>使用 <code>steps</code> 替代</td></tr><tr><td>color 格式错误</td><td>不是十六进制</td><td>使用 <code>#RRGGBB</code> 格式</td></tr><tr><td>嵌套目录 Agent 名称</td><td>不知道怎么调用</td><td>名称包含路径：<code>folder/agent-name</code></td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>Agent 本质</strong>：可配置的 AI 人格</li><li><strong>两种类型</strong>：Primary（主）和 Subagent（子）</li><li><strong>七个内置 Agent</strong>：build、plan、general、explore + 3 个隐藏</li><li><strong>两种配置方式</strong>：Markdown 和 JSON</li><li><strong>使用方式</strong>：Tab 切换、@ 提及、自动调用</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>学会了创建 Agent，但如何设计一个<strong>好用</strong>的 Agent？下一课我们将学习 Agent 设计模式，包括业界最佳实践和实战案例。</p></blockquote><p><strong>下一课</strong>：<a href="./02b-agent-patterns.html">5.2b Agent 设计模式</a></p><div class="tip custom-block"><p class="custom-block-title">遇到问题？</p><p>Agent 配置卡住了？<a href="/community.html">加入社群</a>，和 2000+ 同路人一起交流，实时答疑。</p></div>',13))])}const y=o(c,[["render",p]]);export{P as __pageData,y as default};
