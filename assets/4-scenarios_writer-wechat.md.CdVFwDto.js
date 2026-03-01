import{_ as r,I as d,c as o,o as i,a5 as t,j as n,J as s,a,aS as p}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"A2 公众号创作","description":"用 OpenCode 批量生成公众号选题、管理系列文章、固化写作风格，建立高效内容生产线。","frontmatter":{"title":"A2 公众号创作","subtitle":"批量选题、系列管理、风格固化","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"A2","duration":"15 分钟","practice":"25 分钟","level":"新手","description":"用 OpenCode 批量生成公众号选题、管理系列文章、固化写作风格，建立高效内容生产线。","tags":["公众号","自媒体","批量生成"],"prerequisite":["A1 创作工作流"]},"headers":[],"relativePath":"4-scenarios/writer-wechat.md","filePath":"4-scenarios/writer-wechat.md","lastUpdated":1772014034000}'),u={name:"4-scenarios/writer-wechat.md"};function b(m,l,h,g,A,c){const e=d("AdInArticle");return i(),o("div",null,[l[0]||(l[0]=t('<h1 id="a2-公众号创作" tabindex="-1">A2 公众号创作 <a class="header-anchor" href="#a2-公众号创作" aria-label="Permalink to “A2 公众号创作”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：用 OpenCode 建立公众号内容生产线 —— 批量选题、系列管理、风格固化。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="A2 公众号创作学霸笔记" data-zoom-src="/images/4-scenarios/writer-wechat-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>一次生成 30 天选题日历</li><li>建立系列文章的目录结构</li><li>把写作风格固化到 AGENTS.md</li><li>调用本地素材库生成文章</li></ul><hr><h2 id="为什么用-opencode-而不是网页版-ai" tabindex="-1">为什么用 OpenCode，而不是网页版 AI？ <a class="header-anchor" href="#为什么用-opencode-而不是网页版-ai" aria-label="Permalink to “为什么用 OpenCode，而不是网页版 AI？”">​</a></h2><table tabindex="0"><thead><tr><th>能力</th><th>网页版 AI</th><th>OpenCode</th></tr></thead><tbody><tr><td>批量生成选题</td><td>❌ 只能复制粘贴</td><td>✅ 一次生成，直接存文件</td></tr><tr><td>风格一致性</td><td>❌ 每次重新描述</td><td>✅ AGENTS.md 固化，永久生效</td></tr><tr><td>系列文章管理</td><td>❌ 无法管理多文件</td><td>✅ 目录结构，大纲/章节分开</td></tr><tr><td>素材库调用</td><td>❌ 无法读取本地文件</td><td>✅ @素材 引用历史内容</td></tr><tr><td>版本追踪</td><td>❌</td><td>✅ Git 追踪创作历史</td></tr></tbody></table><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>每次写公众号都要重新描述风格要求</li><li>选题没有规划，想到什么写什么</li><li>系列文章管理混乱，找不到之前的内容</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：高效运营公众号，批量产出内容</li><li>而且不想：每次都从零开始，风格忽高忽低</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./writer-workflow.html">A1 创作工作流</a></li><li>[ ] 有一个公众号（或计划做的账号定位）</li></ul><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2><h3 id="第-1-步-建立公众号项目结构" tabindex="-1">第 1 步：建立公众号项目结构 <a class="header-anchor" href="#第-1-步-建立公众号项目结构" aria-label="Permalink to “第 1 步：建立公众号项目结构”">​</a></h3><p><strong>为什么</strong><br> 把所有内容集中管理，而不是散落各处。</p>',25)),l[1]||(l[1]=n("div",{class:"language-bash"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"bash"),n("pre",null,[n("code",{"v-pre":""},`mkdir ~/my-wechat
cd ~/my-wechat
opencode`)])],-1)),l[2]||(l[2]=n("p",null,"让 AI 帮你建立目录结构：",-1)),l[3]||(l[3]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`帮我建立公众号内容管理的目录结构：
- 选题库/（存放选题规划）
- 素材库/（存放可复用的素材）
- 文章/（按系列分子目录）
- 风格指南.md（写作风格说明）

创建这些目录和空文件`)])],-1)),l[4]||(l[4]=t('<h3 id="第-2-步-固化写作风格到-agent" tabindex="-1">第 2 步：固化写作风格到 Agent <a class="header-anchor" href="#第-2-步-固化写作风格到-agent" aria-label="Permalink to “第 2 步：固化写作风格到 Agent”">​</a></h3><p><strong>为什么</strong><br> 写一次，永久生效，不用每次重复描述。</p><p>Agent 配置可以放在两个位置：</p><ul><li><strong>全局</strong>：<code>~/.config/opencode/agent/</code> - 所有项目共用</li><li><strong>项目级</strong>：<code>.opencode/agent/</code> - 当前项目专用</li></ul><p>文件名就是 Agent 名称，例如 <code>novelist.md</code>（不是 <code>novelist/novelist.md</code>）</p>',5)),l[5]||(l[5]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`帮我创建一个写作 Agent，保存到 .opencode/agent/novelist.md，内容如下：

---
name: novelist
description: 专业小说创作助手，擅长构思情节、设计角色、润色文字
mode: subagent
temperature: 0.8
---

账号定位：职场成长类
目标读者：25-35 岁职场人
语气风格：专业但不端着，像朋友聊天
文章结构：开头抛问题 → 中间讲干货 → 结尾留金句
禁用词：赋能、抓手、打法、闭环、颗粒度
字数范围：12000+-22000+ 字`)])],-1)),l[6]||(l[6]=n("p",null,[n("strong",null,"你应该看到"),a("：AI 创建了 Agent 配置文件")],-1)),l[7]||(l[7]=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"💡 这就是 OpenCode 的独有价值"),n("p",null,"以后每次写作，AI 都会自动遵循这个风格，无需重复描述。")],-1)),l[8]||(l[8]=n("h3",{id:"第-3-步-批量生成选题日历",tabindex:"-1"},[a("第 3 步：批量生成选题日历 "),n("a",{class:"header-anchor",href:"#第-3-步-批量生成选题日历","aria-label":"Permalink to “第 3 步：批量生成选题日历”"},"​")],-1)),s(e),l[9]||(l[9]=n("p",null,[n("strong",null,"为什么"),n("br"),a(" 一次规划一个月，避免每天想选题的焦虑。")],-1)),l[10]||(l[10]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`基于我的账号定位（职场成长），生成未来 30 天的选题日历：

要求：
1. 每周 3 篇，共 12 篇
2. 包含：标题、核心观点、目标关键词
3. 考虑热点结合（年底总结、新年规划）
4. 标注难度（简单/中等/深度）

保存为 选题库/2025年1月选题.md`)])],-1)),l[11]||(l[11]=n("h3",{id:"第-4-步-建立系列文章结构",tabindex:"-1"},[a("第 4 步：建立系列文章结构 "),n("a",{class:"header-anchor",href:"#第-4-步-建立系列文章结构","aria-label":"Permalink to “第 4 步：建立系列文章结构”"},"​")],-1)),l[12]||(l[12]=n("p",null,[n("strong",null,"为什么"),n("br"),a(" 系列文章能提升粉丝粘性，但需要统一管理。")],-1)),l[13]||(l[13]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`我要写一个「职场沟通」系列，共 5 篇文章。

帮我：
1. 创建 文章/职场沟通系列/ 目录
2. 创建 大纲.md（系列规划、每篇定位、发布顺序）
3. 为每篇创建空文件（01-xxx.md 格式）

系列规划：
- 第 1 篇：为什么你的沟通总是无效
- 第 2 篇：向上沟通的 3 个技巧
- 第 3 篇：跨部门沟通的核心原则
- 第 4 篇：高难度对话怎么开口
- 第 5 篇：用沟通建立个人品牌`)])],-1)),l[14]||(l[14]=n("h3",{id:"第-5-步-调用素材生成文章",tabindex:"-1"},[a("第 5 步：调用素材生成文章 "),n("a",{class:"header-anchor",href:"#第-5-步-调用素材生成文章","aria-label":"Permalink to “第 5 步：调用素材生成文章”"},"​")],-1)),l[15]||(l[15]=n("p",null,[n("strong",null,"为什么"),n("br"),a(" 复用已有素材，提高效率。")],-1)),l[16]||(l[16]=n("p",null,"先添加一些素材：",-1)),l[17]||(l[17]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`在 素材库/ 下创建以下文件：

金句库.md - 收集的职场金句
案例库.md - 真实职场案例
数据库.md - 调研数据和统计`)])],-1)),l[18]||(l[18]=n("p",null,"然后基于素材写文章：",-1)),l[19]||(l[19]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`根据选题"向上沟通的 3 个技巧"，写一篇公众号文章。

要求：
1. 遵循 AGENTS.md 中的风格
2. 引用 @素材库/金句库.md 中的金句
3. 使用 @素材库/案例库.md 中的案例
4. 字数 2000 字左右

保存为 文章/职场沟通系列/02-向上沟通的3个技巧.md`)])],-1)),l[20]||(l[20]=n("hr",null,null,-1)),l[21]||(l[21]=n("h2",{id:"📋-魔法-prompt",tabindex:"-1"},[a("📋 魔法 Prompt "),n("a",{class:"header-anchor",href:"#📋-魔法-prompt","aria-label":"Permalink to “📋 魔法 Prompt”"},"​")],-1)),l[22]||(l[22]=n("h3",{id:"📅-30-天选题规划",tabindex:"-1"},[a("📅 30 天选题规划 "),n("a",{class:"header-anchor",href:"#📅-30-天选题规划","aria-label":"Permalink to “📅 30 天选题规划”"},"​")],-1)),l[23]||(l[23]=n("blockquote",null,[n("p",null,"预期效果：生成完整的选题日历，一次规划一个月")],-1)),l[24]||(l[24]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是资深内容运营专家，擅长选题规划和内容日历制定。

## 任务
根据账号定位，生成未来 30 天的选题日历。

## 输入信息
### 必填项
- 账号定位：【定位领域】
- 目标读者：【读者画像】
- 更新频率：每周【N】篇

### 选填项
- 近期热点：【可结合的热点?】
- 已有选题：【已发过的选题?】

## 输出规范
生成选题表格：
| 日期 | 选题标题 | 核心观点 | 目标关键词 | 难度 | 类型 |
|------|---------|---------|-----------|------|------|

### 难度标注
- 简单（30分钟）
- 中等（1小时）
- 深度（2小时）

### 类型标注
- 干货：实操技巧、方法论
- 故事：案例、经历分享
- 观点：评论、思考
- 盘点：汇总、排行

## 约束条件
- ✅ 每个选题包含核心观点，不只是标题
- ✅ 考虑时效性（节日、季节、热点）
- ✅ 难度和类型要有多样性
- ❌ 避免选题过于同质化
- ❌ 避免与已发内容重复`)])],-1)),l[25]||(l[25]=n("h3",{id:"🎨-风格固化模板",tabindex:"-1"},[a("🎨 风格固化模板 "),n("a",{class:"header-anchor",href:"#🎨-风格固化模板","aria-label":"Permalink to “🎨 风格固化模板”"},"​")],-1)),l[26]||(l[26]=n("blockquote",null,[n("p",null,"预期效果：生成 Agent 配置，固化账号风格")],-1)),l[27]||(l[27]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是品牌策划师，擅长定义和固化账号人设。

## 任务
为公众号创建写作风格配置（AGENTS.md）。

## 输入信息
### 必填项
- 账号名称：【账号名】
- 定位领域：【领域】
- 目标读者：【年龄、职业、痛点】

### 选填项
- 语气风格：【如"专业但亲切"?】
- 参考账号：【风格参考?】

## 输出规范
生成 AGENTS.md 配置：

\`\`\`yaml
---
name: 【账号名】
description: 【一句话描述】
---

## 账号定位
【定位描述】

## 目标读者画像
- 年龄：
- 职业：
- 痛点：
- 需求：

## 语气风格
【详细描述，包括正面和反面例子】

## 文章结构模板
1. 开头：【如何引入】
2. 中间：【核心内容结构】
3. 结尾：【如何收尾】

## 禁用词
【不想出现的词，逗号分隔】

## 常用句式
【个人风格的句式示例】

## 字数范围
【字数】
\`\`\`

## 约束条件
- ✅ 风格描述要具体，有正反例
- ✅ 禁用词要实际有效
- ✅ 文章结构要可复用
- ❌ 避免过于笼统的描述`)])],-1)),l[28]||(l[28]=n("h3",{id:"📚-系列文章规划",tabindex:"-1"},[a("📚 系列文章规划 "),n("a",{class:"header-anchor",href:"#📚-系列文章规划","aria-label":"Permalink to “📚 系列文章规划”"},"​")],-1)),l[29]||(l[29]=n("blockquote",null,[n("p",null,"预期效果：生成系列结构，保持内容连贯")],-1)),l[30]||(l[30]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是内容架构师，擅长规划系列化内容。

## 任务
为系列文章设计整体结构和每篇定位。

## 输入信息
### 必填项
- 系列主题：【主题】
- 文章数量：【N】篇
- 系列目标：【读者读完能获得什么】

### 选填项
- 目标读者：【读者画像?】
- 发布周期：【每周几篇?】

## 输出规范
1. **系列概述**
   - 系列定位
   - 目标读者
   - 核心价值

2. **文章规划**
   | 序号 | 标题 | 核心内容 | 与上篇关系 | 与下篇关系 |
   |------|------|---------|-----------|-----------|

3. **递进逻辑**
   - 从【起点】到【终点】
   - 每篇的进阶关系

4. **目录结构**
   \`\`\`
   系列名/
   ├── 大纲.md
   ├── 01-xxx.md
   ├── 02-xxx.md
   └── ...
   \`\`\`

## 约束条件
- ✅ 每篇要有独立价值，也能串联
- ✅ 递进逻辑要清晰
- ✅ 考虑读者的学习曲线
- ❌ 避免内容重叠
- ❌ 避免跳跃太大`)])],-1)),l[31]||(l[31]=t('<hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续</p></blockquote><ul><li>[ ] 建立了公众号项目目录结构</li><li>[ ] 创建了 AGENTS.md 固化写作风格</li><li>[ ] 生成了 30 天选题日历</li><li>[ ] 建立了至少一个系列文章结构</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>AI 写的风格每次不一样</td><td>没有固化到 AGENTS.md</td><td>把风格要求写入 AGENTS.md</td></tr><tr><td>找不到之前的素材</td><td>素材没有统一管理</td><td>建立 素材库/ 目录</td></tr><tr><td>系列文章逻辑混乱</td><td>没有先写大纲</td><td>先创建系列大纲.md</td></tr></tbody></table><hr><h2 id="进阶技巧" tabindex="-1">进阶技巧 <a class="header-anchor" href="#进阶技巧" aria-label="Permalink to “进阶技巧”">​</a></h2><h3 id="创建快捷命令" tabindex="-1">创建快捷命令 <a class="header-anchor" href="#创建快捷命令" aria-label="Permalink to “创建快捷命令”">​</a></h3><p>把常用操作做成斜杠命令：</p>',11)),l[32]||(l[32]=n("div",{class:"language-bash"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"bash"),n("pre",null,[n("code",{"v-pre":""},"mkdir -p .opencode/command")])],-1)),l[33]||(l[33]=n("p",null,[a("创建 "),n("code",null,".opencode/command/公众号.md"),a("：")],-1)),l[34]||(l[34]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`---
description: 快速生成公众号文章
---

根据以下选题写一篇公众号文章：

选题：$ARGUMENTS

要求：
1. 遵循 AGENTS.md 中的风格
2. 引用 @素材库/ 中的相关素材
3. 字数 2000 字左右
4. 保存到 文章/ 目录`)])],-1)),l[35]||(l[35]=t('<p>之后只需输入 <code>/公众号 向上沟通的技巧</code> 即可快速生成。</p><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>用 AGENTS.md 固化写作风格（永久生效）</li><li>批量生成选题日历（30 天规划）</li><li>建立系列文章的目录结构</li><li>调用本地素材库生成文章</li></ol><p><strong>这些是网页版 AI 做不到的</strong> —— 这就是 OpenCode 的价值。</p><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习小红书运营，掌握批量笔记生成、话题库管理、图文配套输出。</p></blockquote><hr><p>📚 <strong>更多完整模板</strong>：<a href="./../appendix/prompts.html">Prompt 模板库</a></p>',11))])}const x=r(u,[["render",b]]);export{C as __pageData,x as default};
