import{_ as n,I as d,c as r,o as s,a5 as l,j as o,J as i,a as e,ax as p}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"全局提示词","description":"用规则文件让 AI 永久记住你的偏好，不用每次对话都重复。","frontmatter":{"title":"全局提示词","subtitle":"让 AI 记住你的工作习惯","course":"OpenCode 中文实战课","stage":"第二阶段","lesson":"2.4","duration":"12 分钟","practice":"15 分钟","level":"新手","description":"用规则文件让 AI 永久记住你的偏好，不用每次对话都重复。","tags":["规则","提示词","个性化","日常使用"],"prerequisite":["2.1 界面与操作"]},"headers":[],"relativePath":"2-daily/04-global-rules.md","filePath":"2-daily/04-global-rules.md","lastUpdated":1772014034000}'),c={name:"2-daily/04-global-rules.md"};function u(m,t,b,h,g,k){const a=d("AdInArticle");return s(),r("div",null,[t[0]||(t[0]=l('<h1 id="全局提示词" tabindex="-1">全局提示词 <a class="header-anchor" href="#全局提示词" aria-label="Permalink to “全局提示词”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：创建一个规则文件，AI 每次发消息都会读取，不用重复说&quot;用中文回复&quot;。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="全局提示词学霸笔记" data-zoom-src="/images/2-daily/04-global-rules-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>让 AI 永久记住&quot;用中文回复&quot;</li><li>设置你的编码规范（缩进、命名风格等）</li><li>定义项目特定的规则</li><li>跨项目复用你的偏好设置</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>每次新对话都要说&quot;请用中文回复&quot;</li><li>AI 总是忘记你喜欢的代码风格</li><li>项目有特定规范，AI 总是不遵守</li><li>换个项目就得重新教 AI</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：让 AI 遵守一些固定的规则</li><li>而且不想：每次对话都重复</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./01-interface.html">2.1 界面与操作</a></li><li>[ ] 能正常和 AI 对话</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="什么是-规则文件" tabindex="-1">什么是&quot;规则文件&quot;？ <a class="header-anchor" href="#什么是-规则文件" aria-label="Permalink to “什么是&quot;规则文件&quot;？”">​</a></h3><p>规则文件就是一个 Markdown 文件，里面写着你希望 AI 遵守的规则。OpenCode 会自动读取这个文件，把内容加到系统提示词里。</p><p><strong>好处</strong>：</p><ul><li>不用每次对话都重复</li><li>规则可以很长、很详细</li><li>可以用 Markdown 格式，方便组织</li></ul><h3 id="规则是热加载的" tabindex="-1">规则是热加载的！ <a class="header-anchor" href="#规则是热加载的" aria-label="Permalink to “规则是热加载的！”">​</a></h3><div class="warning custom-block"><p class="custom-block-title">⚡ 重要知识点</p><p>规则文件修改后<strong>立即生效</strong>，不需要重启 OpenCode，也不需要新建会话！</p></div><p>OpenCode 在<strong>每次发送消息时</strong>都会重新读取规则文件。这意味着：</p><table tabindex="0"><thead><tr><th>操作</th><th>是否需要</th></tr></thead><tbody><tr><td>修改规则后重启 OpenCode</td><td>❌ 不需要</td></tr><tr><td>修改规则后新建会话</td><td>❌ 不需要</td></tr><tr><td>修改规则后发下一条消息</td><td>✅ 这就够了</td></tr></tbody></table><p><strong>实际效果</strong>：你让 AI 帮你更新了规则文件后，直接发下一条消息，新规则就会生效。</p><h3 id="三种作用域" tabindex="-1">三种作用域 <a class="header-anchor" href="#三种作用域" aria-label="Permalink to “三种作用域”">​</a></h3><p>OpenCode 支持三种作用域的规则，满足不同场景：</p><table tabindex="0"><thead><tr><th>作用域</th><th>位置</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>全局规则</strong></td><td><code>~/.config/opencode/AGENTS.md</code></td><td>所有项目通用的偏好</td></tr><tr><td><strong>项目规则</strong></td><td>项目根目录 <code>AGENTS.md</code></td><td>项目特定的规范</td></tr><tr><td><strong>配置文件</strong></td><td><code>opencode.json</code> 的 <code>instructions</code> 字段</td><td>引用多个规则文件</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">🤔 为什么叫 AGENTS.md？</p><p>OpenCode 同时支持 <code>AGENTS.md</code> 和 <code>CLAUDE.md</code>（兼容 Claude Code）。推荐用 <code>AGENTS.md</code>，这是 OpenCode 的标准名称。</p></div><h3 id="规则加载顺序" tabindex="-1">规则加载顺序 <a class="header-anchor" href="#规则加载顺序" aria-label="Permalink to “规则加载顺序”">​</a></h3><p>规则按以下顺序加载，后加载的会<strong>补充</strong>（不是覆盖）前面的：</p>',35)),t[1]||(t[1]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},`1. 全局 ~/.config/opencode/AGENTS.md
2. 全局 ~/.claude/CLAUDE.md（兼容模式）
3. 项目目录向上查找 AGENTS.md / CLAUDE.md
4. 配置文件 instructions 指定的文件`)])],-1)),t[2]||(t[2]=o("p",null,[o("strong",null,"结果"),e("：所有规则都会生效，合并在一起。")],-1)),t[3]||(t[3]=o("hr",null,null,-1)),t[4]||(t[4]=o("h2",{id:"跟我做",tabindex:"-1"},[e("跟我做 "),o("a",{class:"header-anchor",href:"#跟我做","aria-label":"Permalink to “跟我做”"},"​")],-1)),i(a),t[5]||(t[5]=o("div",{class:"tip custom-block"},[o("p",{class:"custom-block-title"},"💡 核心理念"),o("p",null,[o("strong",null,"不用离开 OpenCode"),e("！直接让 AI 帮你创建规则文件，这是最简单的方式。")])],-1)),t[6]||(t[6]=o("h3",{id:"第-1-步-让-ai-帮你创建全局规则",tabindex:"-1"},[e("第 1 步：让 AI 帮你创建全局规则 "),o("a",{class:"header-anchor",href:"#第-1-步-让-ai-帮你创建全局规则","aria-label":"Permalink to “第 1 步：让 AI 帮你创建全局规则”"},"​")],-1)),t[7]||(t[7]=o("p",null,[o("strong",null,"为什么"),o("br"),e(" 既然已经在用 OpenCode，直接让 AI 帮你写文件最方便。")],-1)),t[8]||(t[8]=o("p",null,"在 OpenCode 输入框里输入：",-1)),t[9]||(t[9]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},`帮我创建全局规则文件 ~/.config/opencode/AGENTS.md，内容是：

始终使用简体中文回复`)])],-1)),t[10]||(t[10]=l('<p><strong>你应该看到</strong>：AI 会帮你创建目录和文件，并写入规则。</p><details class="details custom-block"><summary>📦 AI 会做什么？</summary><p>AI 会执行类似这样的操作：</p><ol><li>检查 <code>~/.config/opencode/</code> 目录是否存在</li><li>如果不存在，创建目录</li><li>创建 <code>AGENTS.md</code> 文件并写入你的规则</li></ol><p>你不需要手动输入任何命令！</p></details><h3 id="第-2-步-验证规则生效" tabindex="-1">第 2 步：验证规则生效 <a class="header-anchor" href="#第-2-步-验证规则生效" aria-label="Permalink to “第 2 步：验证规则生效”">​</a></h3><p><strong>为什么</strong><br> 确认 OpenCode 读取了规则。</p><p>直接在当前会话输入 <code>hello</code></p><p><strong>你应该看到</strong>：AI 用中文回复你</p><div class="tip custom-block"><p class="custom-block-title">💡 规则立即生效</p><p>因为规则是热加载的，AI 帮你创建文件后，下一条消息就会遵守新规则。不需要新建会话！</p></div><details class="details custom-block"><summary>📦 验证技巧</summary><p>问 AI：&quot;你现在遵守哪些规则？&quot;它会列出系统提示词里的规则。</p></details><h3 id="第-3-步-完善你的规则" tabindex="-1">第 3 步：完善你的规则 <a class="header-anchor" href="#第-3-步-完善你的规则" aria-label="Permalink to “第 3 步：完善你的规则”">​</a></h3><p><strong>为什么</strong><br> 一条规则太少，加些实用的。</p><p>在 OpenCode 里继续说：</p>',11)),t[11]||(t[11]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},`帮我更新全局规则文件 ~/.config/opencode/AGENTS.md，改成：

## 语言和风格

- 始终使用简体中文回复
- 直接回答问题，不要客套话
- 代码注释也用中文

## 代码规范

- 使用 2 空格缩进
- 变量名用驼峰命名（camelCase）
- 函数名用动词开头（如 getUserById）

## 工作习惯

- 修改代码前先阅读相关文件
- 不确定时先问，不要猜测
- 每次只做最小必要的修改`)])],-1)),t[12]||(t[12]=o("p",null,[o("strong",null,"你应该看到"),e("：AI 更新了规则文件。")],-1)),t[13]||(t[13]=o("h3",{id:"第-4-步-可选-创建项目规则",tabindex:"-1"},[e("第 4 步：（可选）创建项目规则 "),o("a",{class:"header-anchor",href:"#第-4-步-可选-创建项目规则","aria-label":"Permalink to “第 4 步：（可选）创建项目规则”"},"​")],-1)),t[14]||(t[14]=o("p",null,[o("strong",null,"为什么"),o("br"),e(" 有些规则只对特定项目有效。")],-1)),t[15]||(t[15]=o("p",null,"在项目目录里启动 OpenCode，然后说：",-1)),t[16]||(t[16]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},`帮我在项目根目录创建 AGENTS.md，内容是：

# 项目规则

## 技术栈
- 前端：React + TypeScript
- 后端：NestJS
- 数据库：PostgreSQL

## 代码规范
- 使用项目的 ESLint 配置
- 组件文件用 PascalCase 命名
- API 路由用 kebab-case`)])],-1)),t[17]||(t[17]=o("p",null,[o("strong",null,"你应该看到"),e("：在这个项目里，AI 会同时遵守全局规则和项目规则。")],-1)),t[18]||(t[18]=o("h3",{id:"第-5-步-可选-用-init-自动生成项目规则",tabindex:"-1"},[e("第 5 步：（可选）用 /init 自动生成项目规则 "),o("a",{class:"header-anchor",href:"#第-5-步-可选-用-init-自动生成项目规则","aria-label":"Permalink to “第 5 步：（可选）用 /init 自动生成项目规则”"},"​")],-1)),t[19]||(t[19]=o("p",null,[o("strong",null,"为什么"),o("br"),e(" 如果你不知道该写什么规则，让 AI 分析项目自动生成。")],-1)),t[20]||(t[20]=o("p",null,"在 OpenCode 输入：",-1)),t[21]||(t[21]=o("div",{class:"language-"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"}),o("pre",null,[o("code",{"v-pre":""},"/init")])],-1)),t[22]||(t[22]=l('<p><strong>你应该看到</strong>：AI 会分析你的项目结构、技术栈、代码风格，自动生成一份 <code>AGENTS.md</code>。</p><div class="info custom-block"><p class="custom-block-title">🤔 /init 生成的内容</p><p>AI 会分析：</p><ul><li>项目的构建/测试命令</li><li>代码风格（缩进、命名规范等）</li><li>使用的框架和库</li><li>已有的 Cursor/Copilot 规则（如果有）</li></ul><p>生成的规则大约 150 行，涵盖项目最重要的规范。</p></div><hr><h2 id="实用规则示例" tabindex="-1">实用规则示例 <a class="header-anchor" href="#实用规则示例" aria-label="Permalink to “实用规则示例”">​</a></h2><p>以下是一些实战中验证有效的规则，可以直接复制使用：</p><h3 id="通用开发规则" tabindex="-1">通用开发规则 <a class="header-anchor" href="#通用开发规则" aria-label="Permalink to “通用开发规则”">​</a></h3>',6)),t[23]||(t[23]=o("div",{class:"language-markdown"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"markdown"),o("pre",null,[o("code",{"v-pre":""},`## 工作态度

- 每次工作都要用严谨的工作态度，保证完美的质量标准

## 沟通风格

- 直接输出代码或方案，禁止客套话（"抱歉"、"我明白了"等）
- 除非明确要求，否则不提供代码摘要

## 求真原则（禁止瞎猜）

- 不确定/信息不足时先查证或提问澄清
- 对环境/配置/源码/行为的结论必须有证据
- 回答里把"事实"和"推测/假设"分开写`)])],-1)),t[24]||(t[24]=o("h3",{id:"代码质量规则",tabindex:"-1"},[e("代码质量规则 "),o("a",{class:"header-anchor",href:"#代码质量规则","aria-label":"Permalink to “代码质量规则”"},"​")],-1)),t[25]||(t[25]=o("div",{class:"language-markdown"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"markdown"),o("pre",null,[o("code",{"v-pre":""},`## 代码质量原则

- 优先代码可读性，做最简单的修改
- 禁止使用 \`eslint-disable\` 或 \`@ts-ignore\` 绕过问题
- 禁止使用 \`any\` 类型，必须定义明确的类型
- 不要为了向后兼容而保留废弃代码
- 删除未使用的代码，不要注释掉

## 复用优先

- 编写新代码前，先确认项目中是否已有类似实现
- 优先复用现有组件和工具函数，而非新建`)])],-1)),t[26]||(t[26]=o("h3",{id:"工作流程规则",tabindex:"-1"},[e("工作流程规则 "),o("a",{class:"header-anchor",href:"#工作流程规则","aria-label":"Permalink to “工作流程规则”"},"​")],-1)),t[27]||(t[27]=o("div",{class:"language-markdown"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"markdown"),o("pre",null,[o("code",{"v-pre":""},`## 执行规范

- 任何非平凡任务，先制定计划再动手
- 修改代码前必须先阅读相关文件
- 修改完成后自行运行测试验证

## 子代理调度策略

- 尽可能调用子代理完成任务
- 能派给专家的就派，不要什么都自己干`)])],-1)),t[28]||(t[28]=o("hr",null,null,-1)),t[29]||(t[29]=o("h2",{id:"高级用法-配置文件引用",tabindex:"-1"},[e("高级用法：配置文件引用 "),o("a",{class:"header-anchor",href:"#高级用法-配置文件引用","aria-label":"Permalink to “高级用法：配置文件引用”"},"​")],-1)),t[30]||(t[30]=o("p",null,"如果你的规则分散在多个文件，可以用配置文件统一引用：",-1)),t[31]||(t[31]=o("div",{class:"language-json"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"json"),o("pre",null,[o("code",{"v-pre":""},`// opencode.json
{
  "instructions": [
    "CONTRIBUTING.md",
    "docs/coding-standards.md",
    ".cursor/rules/*.md",
    "~/my-rules/common.md"
  ]
}`)])],-1)),t[32]||(t[32]=l('<p><strong>支持的格式</strong>：</p><ul><li>相对路径：<code>docs/rules.md</code></li><li>绝对路径：<code>~/my-rules/common.md</code></li><li>Glob 模式：<code>.cursor/rules/*.md</code></li><li>URL：<code>https://example.com/rules.md</code></li></ul><div class="warning custom-block"><p class="custom-block-title">⚡ 生效时机不同</p><p>通过 <code>instructions</code> 引用规则文件的<strong>路径列表</strong>是在会话启动时加载的。如果你在 <code>opencode.json</code> 中新增或修改了 <code>instructions</code> 条目，需要<strong>开启新会话</strong>才能生效。</p><p>但已加载路径的<strong>文件内容</strong>是热加载的——修改规则文件本身，下一条消息就会生效。</p></div><div class="tip custom-block"><p class="custom-block-title">💡 兼容其他工具</p><p>如果你之前用过 Cursor，可以直接引用 <code>.cursor/rules/*.md</code>，规则直接复用。</p></div><hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续</p></blockquote><ul><li>[ ] 让 AI 创建了 <code>~/.config/opencode/AGENTS.md</code> 文件</li><li>[ ] 文件中至少有一条规则</li><li>[ ] 发送消息后，AI 遵守了规则（如用中文回复）</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>规则没生效</td><td>文件路径错误</td><td>确认是 <code>~/.config/opencode/AGENTS.md</code>，不是 <code>~/.opencode/</code></td></tr><tr><td>部分规则被忽略</td><td>规则太长，被截断</td><td>精简规则，只保留重要的</td></tr><tr><td>规则冲突</td><td>全局和项目规则矛盾</td><td>项目规则写得更具体，覆盖全局</td></tr><tr><td>中文乱码</td><td>文件编码不是 UTF-8</td><td>用 UTF-8 编码保存文件</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>直接让 AI 写规则</strong>：在 OpenCode 里说&quot;帮我创建规则文件&quot;，最简单</li><li><strong>规则是热加载的</strong>：修改后立即生效，不需要重启或新建会话</li><li><strong>三种作用域</strong>：全局（<code>~/.config/opencode/</code>）、项目（项目根目录）、配置文件</li><li><strong>规则叠加</strong>：多个规则文件会合并，不会覆盖</li><li><strong><code>/init</code> 命令</strong>：自动分析项目生成规则</li></ol><hr><h2 id="想要更多" tabindex="-1">想要更多？ <a class="header-anchor" href="#想要更多" aria-label="Permalink to “想要更多？”">​</a></h2><ul><li><a href="./../5-advanced/01b-config-advanced.html">5.1b 配置进阶</a> - 更多配置文件用法</li><li><a href="./../appendix/faq.html">附录/常见问题</a> - &quot;如何让 AI 记住我的偏好&quot;</li></ul><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们学习 <strong><a href="./05-env-management.html">2.5 环境管理</a></strong>。</p><p>你会学到：</p><ul><li>如何查看可用模型列表</li><li>统计你的 Token 消耗和账单</li><li>管理你的身份凭证（登录/登出）</li></ul></blockquote><hr><h2 id="附录-源码参考" tabindex="-1">附录：源码参考 <a class="header-anchor" href="#附录-源码参考" aria-label="Permalink to “附录：源码参考”">​</a></h2><details><summary><strong>点击展开查看源码位置</strong></summary><blockquote><p>更新时间：2026-01-13</p></blockquote><table tabindex="0"><thead><tr><th>功能</th><th>文件路径</th><th>行号</th></tr></thead><tbody><tr><td>规则文件查找逻辑</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/session/system.ts#L65-L137" target="_blank" rel="noreferrer"><code>src/session/system.ts</code></a></td><td>65-137</td></tr><tr><td>每次消息都读取规则</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/session/prompt.ts#L596" target="_blank" rel="noreferrer"><code>src/session/prompt.ts</code></a></td><td>596</td></tr><tr><td>配置 instructions 字段</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts" target="_blank" rel="noreferrer"><code>src/config/config.ts</code></a></td><td>instructions Schema</td></tr></tbody></table><p><strong>热加载原理</strong>：</p><ul><li><code>SessionPrompt.prompt()</code> 在每次用户发消息时调用</li><li>调用链：<code>prompt()</code> → <code>loop()</code> → <code>processor.process()</code> → <code>SystemPrompt.custom()</code></li><li><code>SystemPrompt.custom()</code> 每次都重新读取文件，没有缓存</li></ul><p><strong>支持的文件名</strong>（按优先级）：</p><ul><li><code>AGENTS.md</code> - OpenCode 标准</li><li><code>CLAUDE.md</code> - 兼容 Claude Code</li><li><code>CONTEXT.md</code> - 已废弃，仍支持</li></ul><p><strong>全局规则查找顺序</strong>：</p><ol><li><code>$OPENCODE_CONFIG_DIR/AGENTS.md</code>（如设置了环境变量）</li><li><code>~/.config/opencode/AGENTS.md</code></li><li><code>~/.claude/CLAUDE.md</code></li></ol><p><strong>项目规则查找</strong>：从当前目录向上逐级查找，直到找到文件或到达根目录。</p></details>',24))])}const C=n(c,[["render",u]]);export{f as __pageData,C as default};
