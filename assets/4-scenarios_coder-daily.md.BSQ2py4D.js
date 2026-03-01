import{_ as r,I as d,c as i,o,a5 as e,j as l,J as s,a as n,aF as u}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"B1 开发日常","description":"用 Plan Agent 理解代码、用 Build Agent 写新功能、用 AI 定位和修复 Bug，提升开发效率。","frontmatter":{"title":"B1 开发日常","subtitle":"理解代码、写功能、修 Bug","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"B1","duration":"20 分钟","practice":"25 分钟","level":"进阶","description":"用 Plan Agent 理解代码、用 Build Agent 写新功能、用 AI 定位和修复 Bug，提升开发效率。","tags":["代码","开发","Bug修复"],"prerequisite":["3.1 Plan vs Build"]},"headers":[],"relativePath":"4-scenarios/coder-daily.md","filePath":"4-scenarios/coder-daily.md","lastUpdated":1772014034000}'),p={name:"4-scenarios/coder-daily.md"};function g(b,a,h,P,c,m){const t=d("AdInArticle");return o(),i("div",null,[a[0]||(a[0]=e('<h1 id="b1-开发日常" tabindex="-1">B1 开发日常 <a class="header-anchor" href="#b1-开发日常" aria-label="Permalink to “B1 开发日常”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：用 Plan Agent 理解代码，用 Build Agent 写功能和修 Bug。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+u+'" alt="B1 开发日常学霸笔记" data-zoom-src="/images/4-scenarios/coder-daily-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>快速理解陌生代码库</li><li>用 AI 辅助开发新功能</li><li>高效定位和修复 Bug</li><li>掌握 Plan → Build 开发工作流</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>接手陌生项目，花大量时间读代码</li><li>写新功能不知道从哪开始改</li><li>Bug 定位困难，不知道问题出在哪</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：用 AI 提升日常开发效率</li><li>而且不想：什么都自己手写、手查</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./../3-workflow/01-plan-build.html">3.1 Plan vs Build</a></li><li>[ ] 有一个代码项目</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="开发工作流" tabindex="-1">开发工作流 <a class="header-anchor" href="#开发工作流" aria-label="Permalink to “开发工作流”">​</a></h3>',21)),a[1]||(a[1]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},"理解代码(Plan) → 制定方案(Plan) → 实现功能(Build) → 验证测试(Build)")])],-1)),a[2]||(a[2]=e('<h3 id="三种常见场景" tabindex="-1">三种常见场景 <a class="header-anchor" href="#三种常见场景" aria-label="Permalink to “三种常见场景”">​</a></h3><table tabindex="0"><thead><tr><th>场景</th><th>推荐 Agent</th><th>典型操作</th></tr></thead><tbody><tr><td>理解代码</td><td>Plan</td><td>@文件 分析、@explore 探索</td></tr><tr><td>写新功能</td><td>Build</td><td>分步实现、迭代修改</td></tr><tr><td>修 Bug</td><td>Plan→Build</td><td>先分析原因，再修复</td></tr></tbody></table><h3 id="语法速查-本课只用这-3-个" tabindex="-1">语法速查（本课只用这 3 个） <a class="header-anchor" href="#语法速查-本课只用这-3-个" aria-label="Permalink to “语法速查（本课只用这 3 个）”">​</a></h3><ul><li><code>@path</code>：把文件内容带进对话</li><li><code>!command</code>：在 TUI 里执行命令，把输出带进对话</li><li><code>/undo</code>：撤销最近一次对话变更，并回滚相关文件改动（需要 Git 仓库）</li></ul><p>详细语法见：<a href="https://opencode.ai/docs/tui" target="_blank" rel="noreferrer">https://opencode.ai/docs/tui</a></p><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2><h3 id="第-1-步-快速理解代码" tabindex="-1">第 1 步：快速理解代码 <a class="header-anchor" href="#第-1-步-快速理解代码" aria-label="Permalink to “第 1 步：快速理解代码”">​</a></h3><p><strong>为什么</strong> 接手项目第一步是理解代码结构。</p><p>切换到 Plan Agent：</p>',10)),a[3]||(a[3]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`@explore 帮我梳理这个项目的整体结构，包括：
1. 主要目录和功能模块
2. 入口文件和核心流程
3. 使用的技术栈和框架`)])],-1)),a[4]||(a[4]=l("p",null,"深入某个文件：",-1)),a[5]||(a[5]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},"@src/services/auth.ts 这个认证模块的逻辑是什么？列出所有导出函数及其作用")])],-1)),a[6]||(a[6]=l("h3",{id:"第-2-步-制定功能方案",tabindex:"-1"},[n("第 2 步：制定功能方案 "),l("a",{class:"header-anchor",href:"#第-2-步-制定功能方案","aria-label":"Permalink to “第 2 步：制定功能方案”"},"​")],-1)),s(t),a[7]||(a[7]=l("p",null,[l("strong",null,"为什么"),n(" 写代码前先想清楚方案。")],-1)),a[8]||(a[8]=l("p",null,"继续在 Plan Agent：",-1)),a[9]||(a[9]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`我要给这个项目添加一个「邮件通知」功能，当用户注册成功后发送欢迎邮件。
请帮我分析：
1. 需要修改哪些文件
2. 推荐的实现方案（2-3 种）
3. 每种方案的优缺点
4. 推荐哪种方案，为什么`)])],-1)),a[10]||(a[10]=l("h3",{id:"第-3-步-分步实现功能",tabindex:"-1"},[n("第 3 步：分步实现功能 "),l("a",{class:"header-anchor",href:"#第-3-步-分步实现功能","aria-label":"Permalink to “第 3 步：分步实现功能”"},"​")],-1)),a[11]||(a[11]=l("p",null,[l("strong",null,"为什么"),n(" 复杂功能拆成小步，降低出错风险。")],-1)),a[12]||(a[12]=l("p",null,"切换到 Build Agent：",-1)),a[13]||(a[13]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`按照方案一实现邮件通知功能：

第一步：创建邮件服务模块 src/services/email.ts
- 使用 nodemailer
- 支持 SMTP 配置
- 导出 sendEmail 函数`)])],-1)),a[14]||(a[14]=l("p",null,"确认第一步完成后：",-1)),a[15]||(a[15]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`第二步：在用户注册成功后调用邮件服务
@src/controllers/auth.ts 在 register 函数成功后添加发送欢迎邮件的逻辑`)])],-1)),a[16]||(a[16]=l("h3",{id:"第-4-步-定位-bug",tabindex:"-1"},[n("第 4 步：定位 Bug "),l("a",{class:"header-anchor",href:"#第-4-步-定位-bug","aria-label":"Permalink to “第 4 步：定位 Bug”"},"​")],-1)),a[17]||(a[17]=l("p",null,[l("strong",null,"为什么"),n(" 修 Bug 前先理解问题。")],-1)),a[18]||(a[18]=l("p",null,"切换到 Plan Agent：",-1)),a[19]||(a[19]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`用户反馈「登录后页面一直 loading」，请帮我分析：
1. 可能的原因有哪些
2. 如何排查（给出具体步骤）
3. 最可能的问题在哪个文件`)])],-1)),a[20]||(a[20]=l("h3",{id:"第-5-步-修复-bug",tabindex:"-1"},[n("第 5 步：修复 Bug "),l("a",{class:"header-anchor",href:"#第-5-步-修复-bug","aria-label":"Permalink to “第 5 步：修复 Bug”"},"​")],-1)),a[21]||(a[21]=l("p",null,[l("strong",null,"为什么"),n(" 定位清楚后再动手修复。")],-1)),a[22]||(a[22]=l("p",null,"切换到 Build Agent：",-1)),a[23]||(a[23]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`@src/hooks/useAuth.ts 问题定位到这里：
- 登录成功后 isLoading 没有重置为 false
- 请修复这个问题`)])],-1)),a[24]||(a[24]=l("hr",null,null,-1)),a[25]||(a[25]=l("h2",{id:"📋-魔法-prompt",tabindex:"-1"},[n("📋 魔法 Prompt "),l("a",{class:"header-anchor",href:"#📋-魔法-prompt","aria-label":"Permalink to “📋 魔法 Prompt”"},"​")],-1)),a[26]||(a[26]=l("h3",{id:"🔍-代码解释",tabindex:"-1"},[n("🔍 代码解释 "),l("a",{class:"header-anchor",href:"#🔍-代码解释","aria-label":"Permalink to “🔍 代码解释”"},"​")],-1)),a[27]||(a[27]=l("blockquote",null,[l("p",null,"预期效果：清晰解释代码逻辑，帮助理解陌生代码")],-1)),a[28]||(a[28]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`## 角色
你是资深技术文档工程师，擅长将复杂代码解释得通俗易懂。

## 任务
解释用户提供的代码，帮助理解其功能、原理和潜在问题。

## 输入信息
### 必填项
- 编程语言：【编程语言】
- 代码：@【文件路径】 或 [粘贴代码]

### 选填项
- 读者水平：【初学者/中级/高级】（默认：中级）
- 重点关注：【特别想了解的方面?】

## 输出规范
1. **一句话总结**（≤50 字）
2. **逐块解释**：代码片段（带行号） + 作用 + 原理
3. **关键概念**：涉及的设计模式/算法/语言特性
4. **潜在问题**：🔴严重 / 🟡建议 / 🟢提示
5. **使用示例**：如何调用这段代码

## 约束条件
- ✅ 解释要循序渐进，由浅入深
- ✅ 为初学者加入类比说明
- ✅ 术语保留英文，解释用中文
- ❌ 避免只说"做了什么"不说"为什么"
- ❌ 避免假设读者已知高级概念`)])],-1)),a[29]||(a[29]=l("h3",{id:"⚡-功能实现",tabindex:"-1"},[n("⚡ 功能实现 "),l("a",{class:"header-anchor",href:"#⚡-功能实现","aria-label":"Permalink to “⚡ 功能实现”"},"​")],-1)),a[30]||(a[30]=l("blockquote",null,[l("p",null,"预期效果：分步实现新功能，每步可验证")],-1)),a[31]||(a[31]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`## 角色
你是全栈开发工程师，擅长将需求转化为可运行的代码。

## 任务
根据需求描述，分步实现完整功能。

## 输入信息
### 必填项
- 需求描述：【描述你想要的功能】
- 编程语言：【语言】

### 选填项
- 框架：【框架?】
- 相关依赖：【已安装的依赖?】
- 约束条件：【性能/兼容性要求?】

## 输出规范
每步输出：
1. **本步目标**：这一步要完成什么
2. **代码实现**：完整可运行的代码
3. **验证方法**：如何确认这步成功
4. **下一步预告**：接下来要做什么

## 约束条件
- ✅ 代码要可直接运行
- ✅ 包含必要的错误处理
- ✅ 命名清晰规范
- ✅ 每步完成后等待用户确认再继续
- ❌ 避免一次输出过多代码
- ❌ 避免过度设计`)])],-1)),a[32]||(a[32]=l("h3",{id:"🐛-bug-定位",tabindex:"-1"},[n("🐛 Bug 定位 "),l("a",{class:"header-anchor",href:"#🐛-bug-定位","aria-label":"Permalink to “🐛 Bug 定位”"},"​")],-1)),a[33]||(a[33]=l("blockquote",null,[l("p",null,"预期效果：系统分析并定位问题根因")],-1)),a[34]||(a[34]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`## 角色
你是高级排障工程师，擅长从症状逆推根因。排障思路清晰、假设验证严谨。

## 任务
分析用户描述的 Bug，定位可能的原因，并提供修复方案。

## 输入信息
### 必填项
- 问题描述：【描述问题现象】
- 期望行为：【应该是什么样】
- 实际行为：【实际是什么样】

### 选填项
- 复现步骤：【如何复现?】
- 相关代码：@【文件路径?】
- 错误信息：【错误日志?】
- 环境信息：【运行环境?】
- 已尝试的方案：【尝试过什么?】

## 输出规范
1. **问题摘要**：一句话概括核心症状
2. **根因分析**：按可能性从高到低排序
   | 排序 | 可能原因 | 可能性 | 依据 |
3. **验证方法**：每个原因对应的验证步骤
4. **修复方案**：
   - 临时方案：快速止血
   - 根治方案：彻底修复
   - 预防措施：避免再次发生

## 约束条件
- ✅ 按可能性排序，先验证最可能的
- ✅ 验证方法要具体可执行
- ✅ 修复方案要考虑副作用
- ❌ 避免一次改动太多
- ❌ 避免只给答案不说原因`)])],-1)),a[35]||(a[35]=e('<hr><h2 id="agent-切换与会话导航-场景课速记" tabindex="-1">Agent 切换与会话导航（场景课速记） <a class="header-anchor" href="#agent-切换与会话导航-场景课速记" aria-label="Permalink to “Agent 切换与会话导航（场景课速记）”">​</a></h2><ul><li>主 Agent（<code>build</code> / <code>plan</code>）：用 <code>Tab</code> 切换；用 <code>Shift+Tab</code> 反向切换。</li><li>Agent 列表：<code>&lt;leader&gt;a</code>（默认 leader 是 <code>ctrl+x</code>，即先按 <code>ctrl+x</code> 再按 <code>a</code>）。</li><li>子会话导航：<code>&lt;leader&gt;right</code> / <code>&lt;leader&gt;left</code> / <code>&lt;leader&gt;up</code>。</li></ul><p>需要更完整的快捷键列表：见 <a href="./../5-advanced/06b-keybinds.html">5.6b 快捷键</a>。</p><hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续</p></blockquote><ul><li>[ ] 用 @explore 理解了项目结构</li><li>[ ] 用 Plan Agent 做了功能方案</li><li>[ ] 用 Build Agent 分步实现了功能</li><li>[ ] 知道如何用 Plan+Build 修 Bug</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>AI 一上来就改代码</td><td>在 Build Agent</td><td>先切到 Plan Agent 分析</td></tr><tr><td>功能实现了但改坏别的</td><td>没分步实现</td><td>每步完成后确认再继续</td></tr><tr><td>Bug 定位不准</td><td>信息不够</td><td>给出完整的报错信息和复现步骤</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>用 Plan Agent 理解代码和制定方案</li><li>用 Build Agent 分步实现功能</li><li>用 Plan→Build 工作流修复 Bug</li><li>@explore 和 @文件 的组合使用</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习代码重构和测试生成，提升代码质量。</p></blockquote><hr><p>📚 <strong>更多完整模板</strong>：<a href="./../appendix/prompts.html">Prompt 模板库</a></p>',20))])}const k=r(p,[["render",g]]);export{f as __pageData,k as default};
