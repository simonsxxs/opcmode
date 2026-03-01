import{_ as a,I as o,c as r,o as i,a5 as n,j as t,J as s,a as e,aU as p}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"A9 打造创作工作站","description":"创建专属创作 Agent、自定义 Skill 和斜杠命令，打造你的个人 AI 创作工作站。","frontmatter":{"title":"A9 打造创作工作站","subtitle":"创建专属 Agent、Skill 和命令","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"A9","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"创建专属创作 Agent、自定义 Skill 和斜杠命令，打造你的个人 AI 创作工作站。","tags":["Agent","Skill","命令","工作站"],"prerequisite":["A1 创作工作流","3.2 认识 Agent"]},"headers":[],"relativePath":"4-scenarios/writer-workstation.md","filePath":"4-scenarios/writer-workstation.md","lastUpdated":1772014034000}'),g={name:"4-scenarios/writer-workstation.md"};function u(c,d,b,h,m,k){const l=o("AdInArticle");return i(),r("div",null,[d[0]||(d[0]=n('<h1 id="a9-打造创作工作站" tabindex="-1">A9 打造创作工作站 <a class="header-anchor" href="#a9-打造创作工作站" aria-label="Permalink to “A9 打造创作工作站”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：创建专属创作 Agent、Skill 和快捷命令，固化你的内容生产工作流。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="A9 打造创作工作站学霸笔记" data-zoom-src="/images/4-scenarios/writer-workstation-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>创建专属创作 Agent（公众号/小红书/小说/编剧）</li><li>创建创作 Skill（选题规划/批量生成/风格检查）</li><li>创建快捷命令（/公众号、/小红书、/润色）</li><li>搭建个人创作工作站</li></ul><hr><h2 id="为什么用-opencode-而不是网页版-ai" tabindex="-1">为什么用 OpenCode，而不是网页版 AI？ <a class="header-anchor" href="#为什么用-opencode-而不是网页版-ai" aria-label="Permalink to “为什么用 OpenCode，而不是网页版 AI？”">​</a></h2><table tabindex="0"><thead><tr><th>能力</th><th>网页版 AI</th><th>OpenCode</th></tr></thead><tbody><tr><td>自定义 Agent</td><td>❌ 只能用通用 AI</td><td>✅ 创建专属人格，永久生效</td></tr><tr><td>快捷命令</td><td>❌ 每次重新输入</td><td>✅ <code>/公众号</code> 一键触发完整流程</td></tr><tr><td>Skill 复用</td><td>❌</td><td>✅ 复杂指令封装成 Skill，随时调用</td></tr><tr><td>工作流固化</td><td>❌</td><td>✅ 流程、风格、模板全部持久化</td></tr><tr><td>团队共享</td><td>❌</td><td>✅ 配置文件版本化，团队复用</td></tr></tbody></table><p><strong>这是 OpenCode 的终极价值</strong> —— 不只是用 AI，而是打造你自己的 AI 工作站。</p><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>每次写作都要重复输入相同的提示词</li><li>常用的写作流程没法固化下来</li><li>希望有个&quot;专属写作助手&quot;懂我的风格</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：固化写作流程，提高效率</li><li>而且不想：每次都从零开始教 AI 你的偏好</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./writer-workflow.html">A1 创作工作流</a></li><li>[ ] 完成了 <a href="./../3-workflow/02-agents.html">3.2 认识 Agent</a></li><li>[ ] 有一个写作项目文件夹</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="写作工作站三要素" tabindex="-1">写作工作站三要素 <a class="header-anchor" href="#写作工作站三要素" aria-label="Permalink to “写作工作站三要素”">​</a></h3><table tabindex="0"><thead><tr><th>要素</th><th>作用</th><th>示例</th></tr></thead><tbody><tr><td>Agent</td><td>专属 AI 人格</td><td>小说家 Agent、编剧 Agent</td></tr><tr><td>Skill</td><td>复杂指令封装</td><td>角色设计技能、情节生成技能</td></tr><tr><td>命令</td><td>快捷触发</td><td>/角色、/场景、/润色</td></tr></tbody></table><hr><h2 id="agent-常用字段" tabindex="-1">Agent 常用字段 <a class="header-anchor" href="#agent-常用字段" aria-label="Permalink to “Agent 常用字段”">​</a></h2><p>Frontmatter 中可以配置的字段：</p><table tabindex="0"><thead><tr><th>字段</th><th>类型</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>name</code></td><td>字符串（必需）</td><td>Agent 名称，文件名即名称</td><td></td></tr><tr><td><code>description</code></td><td>字符串</td><td>Agent 功能描述（显示在菜单中）</td><td></td></tr><tr><td><code>mode</code></td><td><code>&quot;primary&quot;</code> 或 <code>&quot;subagent&quot;</code></td><td>主 agent 可通过 Tab 切换，子 agent 通过 @ 调用</td><td></td></tr><tr><td><code>temperature</code></td><td>数字（0.0-1.0）</td><td>控制随机性：0.0-0.2 专注，0.3-0.5 平衡，0.6-1.0 创意</td><td></td></tr><tr><td><code>model</code></td><td>字符串</td><td>覆盖默认模型，格式：<code>provider/model-id</code></td><td></td></tr><tr><td><code>permission</code></td><td>对象</td><td>精细权限控制，如 <code>{ &quot;edit&quot;: &quot;ask&quot; }</code></td><td></td></tr><tr><td><code>hidden</code></td><td>布尔值</td><td>隐藏子 agent（不显示在 @ 自动补全）</td><td></td></tr><tr><td><code>color</code></td><td>十六进制颜色</td><td>自定义 Agent 显示颜色，如 <code>#FF5733</code></td><td></td></tr><tr><td><code>steps</code></td><td>正整数</td><td>最大迭代次数，防止无限循环</td><td></td></tr><tr><td><code>disable</code></td><td>布尔值</td><td>设置为 <code>true</code> 禁用该 agent</td><td></td></tr><tr><td><code>options</code></td><td>对象</td><td>传递给 provider 的额外模型选项，如 OpenAI 的 <code>reasoningEffort</code></td><td></td></tr><tr><td><code>disable</code></td><td>布尔值</td><td>禁用该 Agent</td><td></td></tr></tbody></table><blockquote><p>💡 所有未列出的字段会直接传递给 provider 作为模型选项（如 OpenAI 的 <code>reasoningEffort</code>）</p></blockquote><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2><h3 id="第-1-步-创建写作-agent" tabindex="-1">第 1 步：创建写作 Agent <a class="header-anchor" href="#第-1-步-创建写作-agent" aria-label="Permalink to “第 1 步：创建写作 Agent”">​</a></h3><p><strong>为什么</strong><br> 专属 Agent 理解你的写作风格和偏好。</p>',35)),d[1]||(d[1]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"mkdir -p ~/.config/opencode/agent")])],-1)),d[2]||(d[2]=t("p",null,"创建 Agent 配置文件。注意：",-1)),d[3]||(d[3]=t("ul",null,[t("li",null,[t("strong",null,"文件名就是 Agent 名称"),e("，例如 "),t("code",null,"novelist.md")]),t("li",null,[e("frontmatter 中使用 "),t("code",null,"mode"),e(" 字段（不是 "),t("code",null,"agent"),e("）")])],-1)),d[4]||(d[4]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode")])],-1)),d[5]||(d[5]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`帮我创建一个写作 Agent，保存到 ~/.config/opencode/agent/novelist.md，内容如下：

---
name: novelist
description: 专业小说创作助手，擅长构思情节、设计角色、润色文字
mode: subagent
temperature: 0.8
---

# 小说家 Agent

你是一位经验丰富的小说创作导师，擅长：
- 故事结构设计（三幕结构、英雄之旅）
- 角色塑造（性格、动机、弧光）
- 情节发展（冲突、转折、高潮）
- 文字润色（节奏、意境、对话）

## 工作原则
1. 先理解作者意图，再提供建议
2. 建议具体可操作，附带示例
3. 尊重作者风格，不强加己见
4. 鼓励创新，避免套路化`)])],-1)),d[6]||(d[6]=t("h3",{id:"第-2-步-创建写作-skill",tabindex:"-1"},[e("第 2 步：创建写作 Skill "),t("a",{class:"header-anchor",href:"#第-2-步-创建写作-skill","aria-label":"Permalink to “第 2 步：创建写作 Skill”"},"​")],-1)),s(l),d[7]||(d[7]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" Skill 封装复杂的写作指令，一键调用。")],-1)),d[8]||(d[8]=t("p",null,[t("strong",null,"重要"),e("：Skill 目录结构必须是 "),t("code",null,"skill/<名称>/SKILL.md")],-1)),d[9]||(d[9]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"mkdir -p .opencode/skill/character-design")])],-1)),d[10]||(d[10]=t("p",null,"创建角色设计 Skill：",-1)),d[11]||(d[11]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`帮我创建一个角色设计 Skill，保存到 .opencode/skill/character-design/SKILL.md：

> ⚠️ **命名规则（推荐）**
> - 使用小写字母、数字、连字符
> - 1-64 个字符
> - 不以连字符开头或结尾
> - 不包含连续连字符（\`--\`）
> - 必须与目录名一致
> 
> 推荐格式：\`^[a-z0-9]+(-[a-z0-9]+)*$\`

---
name: character-design
description: 生成详细的小说角色卡
---

# 角色设计技能

根据用户提供的角色类型，生成完整的角色卡。

## 输出格式

### 基本信息
- 姓名、年龄、职业、外貌

### 性格光谱
- 3 个正面特质
- 2 个负面特质

### 背景故事
- 影响性格形成的关键事件

### 核心动机
- 外在目标
- 内在需求

### 人物弧光
- 起点状态 → 终点状态

### 标志性特征
- 口头禅或小动作`)])],-1)),d[12]||(d[12]=t("h3",{id:"skill-权限控制",tabindex:"-1"},[e("Skill 权限控制 "),t("a",{class:"header-anchor",href:"#skill-权限控制","aria-label":"Permalink to “Skill 权限控制”"},"​")],-1)),d[13]||(d[13]=t("p",null,[e("你可以通过配置控制哪些 Skill 可以被 agent 使用。在 "),t("code",null,"opencode.json"),e(" 中配置：")],-1)),d[14]||(d[14]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "skill": {
      "character-design": "allow",
      "internal-*": "deny",
      "*": "allow"
    }
  }
}`)])],-1)),d[15]||(d[15]=n('<table tabindex="0"><thead><tr><th>权限</th><th>行为</th></tr></thead><tbody><tr><td><code>allow</code></td><td>Skill 立即加载</td></tr><tr><td><code>deny</code></td><td>Skill 对 agent 隐藏，拒绝访问</td></tr><tr><td><code>ask</code></td><td>加载前请求用户批准</td></tr></tbody></table><p>支持通配符模式：<code>internal-*</code> 匹配所有以 <code>internal-</code> 开头的 skill。</p><h3 id="第-3-步-创建快捷命令" tabindex="-1">第 3 步：创建快捷命令 <a class="header-anchor" href="#第-3-步-创建快捷命令" aria-label="Permalink to “第 3 步：创建快捷命令”">​</a></h3><p><strong>为什么</strong><br> 快捷命令让常用操作一键触发。</p>',4)),d[16]||(d[16]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"mkdir -p .opencode/command")])],-1)),d[17]||(d[17]=t("p",null,"创建 /角色 命令：",-1)),d[18]||(d[18]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`帮我创建一个快捷命令，保存到 .opencode/command/角色.md：

---
description: 快速生成角色卡
agent: novelist
---

请使用 character-design 技能，为我设计一个角色：

角色类型：$ARGUMENTS`)])],-1)),d[19]||(d[19]=t("p",null,"创建 /润色 命令：",-1)),d[20]||(d[20]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`帮我创建一个快捷命令，保存到 .opencode/command/润色.md：

---
description: 润色选中的文本
---

请润色以下内容，提升文字表现力，保持原意：

$ARGUMENTS`)])],-1)),d[21]||(d[21]=n('<hr><h2 id="command-高级特性" tabindex="-1">Command 高级特性 <a class="header-anchor" href="#command-高级特性" aria-label="Permalink to “Command 高级特性”">​</a></h2><p>除了 <code>$ARGUMENTS</code>，还支持以下高级用法：</p><h3 id="位置参数" tabindex="-1">位置参数 <a class="header-anchor" href="#位置参数" aria-label="Permalink to “位置参数”">​</a></h3><p>访问单独的参数：</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>$1</code></td><td>第一个参数</td></tr><tr><td><code>$2</code></td><td>第二个参数</td></tr><tr><td><code>$3</code></td><td>第三个参数</td></tr><tr><td>...</td><td>依此类推</td></tr></tbody></table><p>示例：</p>',7)),d[22]||(d[22]=t("div",{class:"language-md"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"md"),t("pre",null,[t("code",{"v-pre":""},`---
description: 创建文件并写入内容
---

创建文件名为 $1 的文件，目录为 $2，内容为：
$3`)])],-1)),d[23]||(d[23]=t("p",null,[e("运行："),t("code",null,'/创建-file config.json src "{ \\"key\\": \\"value\\" }"')],-1)),d[24]||(d[24]=t("h3",{id:"子任务模式",tabindex:"-1"},[e("子任务模式 "),t("a",{class:"header-anchor",href:"#子任务模式","aria-label":"Permalink to “子任务模式”"},"​")],-1)),d[25]||(d[25]=t("p",null,[e("使用 "),t("code",null,"subtask: true"),e(" 强制命令作为子任务执行，不污染主上下文。")],-1)),d[26]||(d[26]=t("div",{class:"language-md"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"md"),t("pre",null,[t("code",{"v-pre":""},`---
description: 深度分析代码
subtask: true
---

执行深度代码分析：
$ARGUMENTS`)])],-1)),d[27]||(d[27]=t("h3",{id:"shell-输出注入",tabindex:"-1"},[e("Shell 输出注入 "),t("a",{class:"header-anchor",href:"#shell-输出注入","aria-label":"Permalink to “Shell 输出注入”"},"​")],-1)),d[28]||(d[28]=t("p",null,[e("使用 "),t("code",null,"!command"),e(" 将 bash 命令输出注入到命令模板。")],-1)),d[29]||(d[29]=t("p",null,"示例：分析测试结果",-1)),d[30]||(d[30]=t("div",{class:"language-md"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"md"),t("pre",null,[t("code",{"v-pre":""},`---
description: 分析测试覆盖率
---

当前测试结果：
!\`npm test\`

基于结果建议优化方案。`)])],-1)),d[31]||(d[31]=t("p",null,"示例：审查最近更改",-1)),d[32]||(d[32]=t("div",{class:"language-md"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"md"),t("pre",null,[t("code",{"v-pre":""},`---
description: 审查最近的更改
---

最近的 Git 提交：
!\`git log --oneline -10\`

审查并建议改进。`)])],-1)),d[33]||(d[33]=t("h3",{id:"第-4-步-测试写作工作站",tabindex:"-1"},[e("第 4 步：测试写作工作站 "),t("a",{class:"header-anchor",href:"#第-4-步-测试写作工作站","aria-label":"Permalink to “第 4 步：测试写作工作站”"},"​")],-1)),d[34]||(d[34]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" 确认配置生效。")],-1)),d[35]||(d[35]=t("p",null,"重启 OpenCode：",-1)),d[36]||(d[36]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"opencode")])],-1)),d[37]||(d[37]=t("p",null,"测试 Agent：",-1)),d[38]||(d[38]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},'按 Tab 切换，看看是否有 "小说家" Agent')])],-1)),d[39]||(d[39]=t("p",null,"测试命令：",-1)),d[40]||(d[40]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/角色 霸道总裁")])],-1)),d[41]||(d[41]=t("p",null,[t("strong",null,"你应该看到"),e("：AI 用小说家 Agent 和角色设计 Skill 生成角色卡")],-1)),d[42]||(d[42]=t("hr",null,null,-1)),d[43]||(d[43]=t("h2",{id:"高级配置技巧",tabindex:"-1"},[e("高级配置技巧 "),t("a",{class:"header-anchor",href:"#高级配置技巧","aria-label":"Permalink to “高级配置技巧”"},"​")],-1)),d[44]||(d[44]=t("h3",{id:"权限控制",tabindex:"-1"},[e("权限控制 "),t("a",{class:"header-anchor",href:"#权限控制","aria-label":"Permalink to “权限控制”"},"​")],-1)),d[45]||(d[45]=t("p",null,"Agent 可以精细控制工具和技能的访问权限。在 agent 的 frontmatter 中配置：",-1)),d[46]||(d[46]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
name: readonly-reviewer
description: 只读代码审查
permission:
  edit: deny
  bash:
    "*": ask
    "git diff": allow
    "git log*": allow
  webfetch: deny
---

只分析代码，不修改。`)])],-1)),d[47]||(d[47]=n('<p>权限选项：</p><ul><li><code>&quot;ask&quot;</code> — 执行前请求批准</li><li><code>&quot;allow&quot;</code> — 允许所有操作无需批准</li><li><code>&quot;deny&quot;</code> — 禁用工具</li></ul><h3 id="嵌套-agent" tabindex="-1">嵌套 Agent <a class="header-anchor" href="#嵌套-agent" aria-label="Permalink to “嵌套 Agent”">​</a></h3><p>你可以将 agent 放在子文件夹中组织，例如：</p>',4)),d[48]||(d[48]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`.opencode/agent/
  ├── writing/
  │   ├── novelist.md
  │   └── copywriter.md
  └── coding/
      ├── frontend.md
      └── backend.md`)])],-1)),d[49]||(d[49]=n('<p>这样可以通过 <code>@writing/novelist</code> 或 <code>@coding/frontend</code> 来调用。</p><hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续</p></blockquote><ul><li>[ ] 创建了写作 Agent</li><li>[ ] 创建了至少一个 Skill</li><li>[ ] 创建了至少一个快捷命令</li><li>[ ] 命令能正常调用</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>Agent 没生效</td><td>配置文件位置不对</td><td>确认放在 <code>~/.config/opencode/agent/</code> 或 <code>.opencode/agent/</code>，文件名就是 agent 名称</td></tr><tr><td>Agent frontmatter 报错</td><td>使用了错误字段</td><td>frontmatter 中使用 <code>mode</code> 而非 <code>agent</code>，必需字段是 <code>name</code> 和 <code>description</code></td></tr><tr><td>Skill 找不到</td><td>目录结构不对</td><td>确认目录是 <code>skill/&lt;名称&gt;/SKILL.md</code>（小写），不是 <code>skill/&lt;名称&gt;/SKILL.md</code></td></tr><tr><td>Skill 命名不合规</td><td>命名规则错误</td><td>小写字母数字、1-64 字符、不以连字符开头结尾、不含连续连字符</td></tr><tr><td>命令报错</td><td>参数语法错误</td><td>检查 <code>$ARGUMENTS</code>、<code>$1</code> 等占位符的使用</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>创建专属写作 Agent</li><li>创建封装复杂指令的 Skill</li><li>创建快捷命令一键触发</li><li>三者组合搭建写作工作站</li></ol><p>🎉 <strong>恭喜你完成了写作线全部课程！</strong></p><hr><h2 id="下一步建议" tabindex="-1">下一步建议 <a class="header-anchor" href="#下一步建议" aria-label="Permalink to “下一步建议”">​</a></h2><ul><li>想学更多定制技巧？→ <a href="/5-advanced/">第五阶段：深度定制</a></li><li>想试试其他场景？→ <a href="/4-scenarios/coder-daily.html">程序员线</a> 或 <a href="/4-scenarios/office-files.html">效率提升线</a></li></ul>',16))])}const y=a(g,[["render",u]]);export{f as __pageData,y as default};
