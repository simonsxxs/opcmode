import{_ as e,I as d,c as i,o,a5 as l,j as n,J as s,a as t,aQ as p}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"A5 翻译润色","description":"用 AI 批量翻译、润色、降重，建立术语表保持翻译一致性，提升多语言内容产出效率。","frontmatter":{"title":"A5 翻译润色","subtitle":"批量翻译、术语表、降重","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"A5","duration":"15 分钟","practice":"20 分钟","level":"进阶","description":"用 AI 批量翻译、润色、降重，建立术语表保持翻译一致性，提升多语言内容产出效率。","tags":["翻译","润色","降重"],"prerequisite":["A1 创作工作流"]},"headers":[],"relativePath":"4-scenarios/writer-translate.md","filePath":"4-scenarios/writer-translate.md","lastUpdated":1772014034000}'),h={name:"4-scenarios/writer-translate.md"};function b(u,a,m,g,k,f){const r=d("AdInArticle");return o(),i("div",null,[a[0]||(a[0]=l('<h1 id="a5-翻译润色" tabindex="-1">A5 翻译润色 <a class="header-anchor" href="#a5-翻译润色" aria-label="Permalink to “A5 翻译润色”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：用 AI 做翻译、润色、降重，保持术语一致性。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="A5 翻译润色学霸笔记" data-zoom-src="/images/4-scenarios/writer-translate-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>用 AI 翻译全文或分段翻译</li><li>保持专业术语的一致性</li><li>润色文本提升可读性</li><li>降重改写避免重复</li></ul><hr><h2 id="为什么用-opencode-而不是网页版-ai" tabindex="-1">为什么用 OpenCode，而不是网页版 AI？ <a class="header-anchor" href="#为什么用-opencode-而不是网页版-ai" aria-label="Permalink to “为什么用 OpenCode，而不是网页版 AI？”">​</a></h2><table tabindex="0"><thead><tr><th>能力</th><th>网页版 AI</th><th>OpenCode</th></tr></thead><tbody><tr><td>批量翻译</td><td>❌ 一段段复制粘贴</td><td>✅ 多文件批量处理，保持格式</td></tr><tr><td>术语一致性</td><td>❌ AI 每次翻译可能不同</td><td>✅ @术语表 引用，全文统一</td></tr><tr><td>长文处理</td><td>❌ 容易超出上下文限制</td><td>✅ 分段翻译，自动拼接</td></tr><tr><td>格式保留</td><td>❌ 格式经常丢失</td><td>✅ 直接编辑文件，保留原格式</td></tr><tr><td>版本对比</td><td>❌</td><td>✅ Git 追踪翻译修改历史</td></tr></tbody></table><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>翻译出来的文章术语不统一</li><li>长文翻译质量不稳定</li><li>需要降重但手动改写太累</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：高质量翻译或降重改写</li><li>而且不想：花大量时间手动调整每个词</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./writer-workflow.html">A1 创作工作流</a></li><li>[ ] 有需要翻译或润色的文本</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="翻译工作流" tabindex="-1">翻译工作流 <a class="header-anchor" href="#翻译工作流" aria-label="Permalink to “翻译工作流”">​</a></h3>',24)),a[1]||(a[1]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"术语表准备 → 分段翻译 → 术语统一 → 通读润色")])],-1)),a[2]||(a[2]=l('<h3 id="翻译-vs-润色-vs-降重" tabindex="-1">翻译 vs 润色 vs 降重 <a class="header-anchor" href="#翻译-vs-润色-vs-降重" aria-label="Permalink to “翻译 vs 润色 vs 降重”">​</a></h3><table tabindex="0"><thead><tr><th>任务</th><th>目的</th><th>典型场景</th></tr></thead><tbody><tr><td>翻译</td><td>跨语言转换</td><td>英文论文翻译成中文</td></tr><tr><td>润色</td><td>提升表达质量</td><td>改善文章可读性</td></tr><tr><td>降重</td><td>换表达保内容</td><td>论文查重、二创</td></tr></tbody></table><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2>',4)),s(r),a[3]||(a[3]=n("h3",{id:"第-1-步-准备术语表",tabindex:"-1"},[t("第 1 步：准备术语表 "),n("a",{class:"header-anchor",href:"#第-1-步-准备术语表","aria-label":"Permalink to “第 1 步：准备术语表”"},"​")],-1)),a[4]||(a[4]=n("p",null,[n("strong",null,"为什么"),n("br"),t(" 统一术语是专业翻译的关键。")],-1)),a[5]||(a[5]=n("p",null,"切换到 Build 模式：",-1)),a[6]||(a[6]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`我要翻译一篇机器学习领域的英文论文。
帮我创建术语表，包含以下常见术语的中英对照：
- Neural Network
- Deep Learning
- Gradient Descent
- Overfitting
- Regularization

保存为 glossary.md`)])],-1)),a[7]||(a[7]=n("h3",{id:"第-2-步-分段翻译",tabindex:"-1"},[t("第 2 步：分段翻译 "),n("a",{class:"header-anchor",href:"#第-2-步-分段翻译","aria-label":"Permalink to “第 2 步：分段翻译”"},"​")],-1)),a[8]||(a[8]=n("p",null,[n("strong",null,"为什么"),n("br"),t(" 长文分段翻译更容易保持质量。")],-1)),a[9]||(a[9]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@glossary.md

请翻译以下英文段落，要求：
1. 使用术语表中的标准译法
2. 保持学术语言风格
3. 句子通顺自然

原文：
{粘贴英文段落}`)])],-1)),a[10]||(a[10]=n("h3",{id:"第-3-步-全文翻译",tabindex:"-1"},[t("第 3 步：全文翻译 "),n("a",{class:"header-anchor",href:"#第-3-步-全文翻译","aria-label":"Permalink to “第 3 步：全文翻译”"},"​")],-1)),a[11]||(a[11]=n("p",null,[n("strong",null,"为什么"),n("br"),t(" 小文件可以一次性翻译。")],-1)),a[12]||(a[12]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@glossary.md @paper.txt

将 paper.txt 翻译成中文，要求：
1. 使用术语表标准译法
2. 保持原文段落结构
3. 保存为 paper_cn.md`)])],-1)),a[13]||(a[13]=n("h3",{id:"第-4-步-润色提升可读性",tabindex:"-1"},[t("第 4 步：润色提升可读性 "),n("a",{class:"header-anchor",href:"#第-4-步-润色提升可读性","aria-label":"Permalink to “第 4 步：润色提升可读性”"},"​")],-1)),a[14]||(a[14]=n("p",null,[n("strong",null,"为什么"),n("br"),t(" 翻译后通常需要润色。")],-1)),a[15]||(a[15]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@paper_cn.md 

请润色这篇翻译稿，要求：
1. 修正不通顺的句子
2. 保持学术严谨但提高可读性
3. 检查术语是否一致
4. 直接修改原文件`)])],-1)),a[16]||(a[16]=n("h3",{id:"第-5-步-降重改写",tabindex:"-1"},[t("第 5 步：降重改写 "),n("a",{class:"header-anchor",href:"#第-5-步-降重改写","aria-label":"Permalink to “第 5 步：降重改写”"},"​")],-1)),a[17]||(a[17]=n("p",null,[n("strong",null,"为什么"),n("br"),t(" 有些场景需要降低重复率。")],-1)),a[18]||(a[18]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`请对以下段落进行降重改写，要求：
1. 保持原意不变
2. 用不同的表达方式重写
3. 输出 3 个版本供选择

原文：
{粘贴需要降重的段落}`)])],-1)),a[19]||(a[19]=n("hr",null,null,-1)),a[20]||(a[20]=n("h2",{id:"📋-魔法-prompt",tabindex:"-1"},[t("📋 魔法 Prompt "),n("a",{class:"header-anchor",href:"#📋-魔法-prompt","aria-label":"Permalink to “📋 魔法 Prompt”"},"​")],-1)),a[21]||(a[21]=n("h3",{id:"🌐-专业翻译",tabindex:"-1"},[t("🌐 专业翻译 "),n("a",{class:"header-anchor",href:"#🌐-专业翻译","aria-label":"Permalink to “🌐 专业翻译”"},"​")],-1)),a[22]||(a[22]=n("blockquote",null,[n("p",null,"预期效果：保持术语一致的高质量翻译")],-1)),a[23]||(a[23]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是专业译者，擅长在保持原意的同时让译文自然流畅。

## 任务
将用户提供的文本翻译成目标语言。

## 输入信息
### 必填项
- 目标语言：【简体中文/英语/日语/...】
- 原文：

[粘贴原文]

### 选填项
- 术语表：@【术语表文件?】
- 专业领域：【技术/法律/医学/文学?】
- 语气风格：【正式/轻松/专业?】

## 翻译要求
1. **术语一致**：使用术语表中的标准译法
2. **保留格式**：保持原文的段落、标题、列表结构
3. **自然流畅**：不要逐字翻译，要让译文通顺
4. **专有名词**：首次出现时在译文后加注原文（如：机器学习 Machine Learning）

## 输出规范
### 译文
[翻译结果]

### 翻译说明（如有）
- 多义词处理：【词】翻译为【译法】，因为【原因】
- 术语确认：【术语】使用【译法】，符合术语表

## 约束条件
- ✅ 术语全文统一（同一术语用同一译法）
- ✅ 可读性优先于逐字忠实
- ✅ 专业术语使用领域标准译法
- ❌ 避免翻译腔（如"被...所..."、"对于...来说"）
- ❌ 避免遗漏原文内容

## 错误处理
- 如果目标语言未提供，请先询问用户
- 如果遇到多义词，标注可能的译法供用户选择
- 如果术语表中没有某术语，使用通用译法并标注`)])],-1)),a[24]||(a[24]=n("h3",{id:"✏️-降重改写",tabindex:"-1"},[t("✏️ 降重改写 "),n("a",{class:"header-anchor",href:"#✏️-降重改写","aria-label":"Permalink to “✏️ 降重改写”"},"​")],-1)),a[25]||(a[25]=n("blockquote",null,[n("p",null,"预期效果：保持原意的多版本改写，降低重复率")],-1)),a[26]||(a[26]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是专业的文字编辑，擅长在保持原意的同时改变表达方式。

## 任务
改写用户提供的文本，降低与原文的相似度。

## 输入信息
### 必填项
- 改写程度：【轻度(30%)/中度(50%)/重度(70%)】
- 原文：

[粘贴原文]

### 选填项
- 保留关键词：【必须保留的术语?】
- 风格要求：【学术/通俗/正式?】

## 改写策略
### 轻度改写（~30%）
- 同义词替换
- 语序微调
- 保持核心表达

### 中度改写（~50%）
- 句式结构变换
- 主被动转换
- 合并/拆分句子

### 重度改写（~70%）
- 重新组织段落逻辑
- 用不同方式表达相同意思
- 增加/删减细节描述

## 输出规范
### 改写版本 1
[改写后的文本]

### 改写版本 2
[另一种改写方式]

### 改写版本 3
[第三种改写方式]

---

### 改写统计
| 版本 | 估计改写比例 | 主要改动手法 |
|------|-------------|-------------|
| 版本1 | X% | 【手法】 |
| 版本2 | X% | 【手法】 |
| 版本3 | X% | 【手法】 |

**推荐版本**：版本【N】
**推荐理由**：【理由】

## 约束条件
- ✅ 保持原意不变
- ✅ 保持专业术语准确
- ✅ 每个版本差异明显
- ❌ 避免改变核心观点
- ❌ 避免引入原文没有的信息`)])],-1)),a[27]||(a[27]=l('<hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续</p></blockquote><ul><li>[ ] 创建了术语表</li><li>[ ] 用 @ 引用术语表做翻译</li><li>[ ] 完成了润色修改</li><li>[ ] 能生成降重版本</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>术语翻译不一致</td><td>没有术语表</td><td>先创建术语表，翻译时 @ 引用</td></tr><tr><td>长文翻译质量下降</td><td>一次翻太多</td><td>分段翻译，每段控制在 2000+ 字</td></tr><tr><td>降重后意思变了</td><td>改动太激进</td><td>要求&quot;保持原意不变&quot;</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>翻译工作流（术语表→分段翻译→统一→润色）</li><li>用 @ 引用术语表保持一致性</li><li>润色和降重的技巧</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将进入进阶内容 —— 小说创作，学习多文件管理、角色卡设计、人设一致性保障。</p></blockquote><hr><p>📚 <strong>更多完整模板</strong>：<a href="./../appendix/prompts.html">Prompt 模板库</a></p>',16))])}const v=e(h,[["render",b]]);export{x as __pageData,v as default};
