import{_ as r,I as d,c as o,o as i,a5 as t,j as n,J as s,a as l,aV as p}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"A3 小红书运营","description":"用 OpenCode 批量生成小红书笔记、建立话题库、配套图文素材，提升小红书运营效率。","frontmatter":{"title":"A3 小红书运营","subtitle":"批量笔记、话题库、图文配套","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"A3","duration":"15 分钟","practice":"25 分钟","level":"新手","description":"用 OpenCode 批量生成小红书笔记、建立话题库、配套图文素材，提升小红书运营效率。","tags":["小红书","自媒体","批量生成"],"prerequisite":["A1 创作工作流"]},"headers":[],"relativePath":"4-scenarios/writer-xiaohongshu.md","filePath":"4-scenarios/writer-xiaohongshu.md","lastUpdated":1772014034000}'),h={name:"4-scenarios/writer-xiaohongshu.md"};function u(b,a,m,g,k,x){const e=d("AdInArticle");return i(),o("div",null,[a[0]||(a[0]=t("",25)),a[1]||(a[1]=n("div",{class:"language-bash"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"bash"),n("pre",null,[n("code",{"v-pre":""},`mkdir ~/my-xiaohongshu
cd ~/my-xiaohongshu
opencode`)])],-1)),a[2]||(a[2]=n("p",null,"让 AI 帮你建立目录结构：",-1)),a[3]||(a[3]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`帮我建立小红书内容管理的目录结构：
- 话题库/（按类型分：护肤、穿搭、美食等）
- 素材库/（图片描述、产品信息、用户反馈）
- 笔记/（按月份分目录）
- 封面标题库.md（收集爆款标题模板）
- 人设.md（账号人设定义）

创建这些目录和空文件`)])],-1)),a[4]||(a[4]=n("h3",{id:"第-2-步-固化账号人设",tabindex:"-1"},[l("第 2 步：固化账号人设 "),n("a",{class:"header-anchor",href:"#第-2-步-固化账号人设","aria-label":"Permalink to “第 2 步：固化账号人设”"},"​")],-1)),a[5]||(a[5]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 保持风格统一，粉丝认得你。")],-1)),a[6]||(a[6]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`创建 AGENTS.md，定义我的小红书账号人设：

账号定位：护肤成分党
人设：25 岁上班族，油痘肌，研究成分 3 年
语气：闺蜜分享式，真诚不装
常用表情：✨ 💕 🌟 😭 ❗
禁用词：绝绝子、yyds、无敌、巨好用（太假）
标题风格：疑问式/数字式/反差式
正文结构：痛点引入 → 产品推荐 → 使用感受 → 总结建议
字数范围：300-2000+ 字`)])],-1)),a[7]||(a[7]=n("h3",{id:"第-3-步-建立话题库",tabindex:"-1"},[l("第 3 步：建立话题库 "),n("a",{class:"header-anchor",href:"#第-3-步-建立话题库","aria-label":"Permalink to “第 3 步：建立话题库”"},"​")],-1)),s(e),a[8]||(a[8]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 话题标签决定曝光，提前整理好省得每次找。")],-1)),a[9]||(a[9]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`帮我创建话题库，按类型分文件：

话题库/护肤.md：
#护肤 #护肤品推荐 #成分党 #油痘肌护肤 #平价护肤 
#抗老 #美白 #补水 #敏感肌 #学生党护肤
（每个话题标注热度：高/中/低）

话题库/穿搭.md：
#穿搭 #日常穿搭 #通勤穿搭 #显瘦穿搭 #平价穿搭
（以此类推）`)])],-1)),a[10]||(a[10]=n("h3",{id:"第-4-步-批量生成一周笔记",tabindex:"-1"},[l("第 4 步：批量生成一周笔记 "),n("a",{class:"header-anchor",href:"#第-4-步-批量生成一周笔记","aria-label":"Permalink to “第 4 步：批量生成一周笔记”"},"​")],-1)),a[11]||(a[11]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 一次生成 7 篇，一周内容不用愁。")],-1)),a[12]||(a[12]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`为我生成下周 7 篇小红书笔记，主题是「油痘肌护肤」。

每篇笔记包含：
1. 封面标题（10 字以内，吸睛）
2. 正文（300-400 字）
3. 话题标签（5-8 个，从 @话题库/护肤.md 选取）
4. 配图建议（描述应该拍什么图）

7 篇主题分配：
- 周一：洁面推荐
- 周二：水乳搭配
- 周三：精华测评
- 周四：防晒对比
- 周五：祛痘心得
- 周六：护肤误区
- 周日：空瓶记录

保存到 笔记/2025年1月第2周/ 目录，每篇一个文件`)])],-1)),a[13]||(a[13]=n("h3",{id:"第-5-步-爆款标题收集",tabindex:"-1"},[l("第 5 步：爆款标题收集 "),n("a",{class:"header-anchor",href:"#第-5-步-爆款标题收集","aria-label":"Permalink to “第 5 步：爆款标题收集”"},"​")],-1)),a[14]||(a[14]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 好标题 = 高点击率，值得专门收集。")],-1)),a[15]||(a[15]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`帮我整理「封面标题库.md」，收集小红书爆款标题模板：

【疑问式】
- 油痘肌真的有救吗？我找到答案了
- 为什么你的护肤品总是没效果？

【数字式】
- 3 款让我回购 10 次的精华
- 坚持 30 天，皮肤真的变了

【反差式】
- 全网都推的 XX，我用了一个月告诉你真相
- 本来想吐槽，结果真香了

【痛点式】
- 熬夜脸有救了！这个方法太绝
- 黑头草莓鼻？我是这样解决的

每类 10 个模板，保存到 封面标题库.md`)])],-1)),a[16]||(a[16]=n("hr",null,null,-1)),a[17]||(a[17]=n("h2",{id:"📋-魔法-prompt",tabindex:"-1"},[l("📋 魔法 Prompt "),n("a",{class:"header-anchor",href:"#📋-魔法-prompt","aria-label":"Permalink to “📋 魔法 Prompt”"},"​")],-1)),a[18]||(a[18]=n("h3",{id:"📝-批量笔记生成",tabindex:"-1"},[l("📝 批量笔记生成 "),n("a",{class:"header-anchor",href:"#📝-批量笔记生成","aria-label":"Permalink to “📝 批量笔记生成”"},"​")],-1)),a[19]||(a[19]=n("blockquote",null,[n("p",null,"预期效果：一次生成多篇小红书笔记，包含正文、标题、标签")],-1)),a[20]||(a[20]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是小红书资深博主，擅长写爆款笔记。深谙平台调性和用户心理。

## 任务
批量生成小红书笔记，每篇包含封面标题、正文、话题标签、配图建议。

## 输入信息
### 必填项
- 账号定位：【定位】
- 本批主题：【主题方向】
- 生成数量：【N】篇

### 选填项
- 参考人设：@AGENTS.md
- 话题库：@话题库/【类型】.md

## 输出规范
每篇笔记包含：

### 笔记 1：【主题】
**封面标题**（10 字以内，吸睛）
> 【标题】

**正文**（300-400 字）
> 【正文内容，符合小红书风格】

**话题标签**（5-8 个）
> #标签1 #标签2 ...

**配图建议**
> 【描述应该拍什么图】

---

## 约束条件
- ✅ 标题要有冲击力，10 字以内
- ✅ 正文口语化，像闺蜜分享
- ✅ 标签从热门话题中选取
- ✅ 使用适当的 emoji
- ❌ 避免过度使用"绝绝子""yyds"等烂大街用语
- ❌ 避免夸大宣传，保持真诚感`)])],-1)),a[21]||(a[21]=n("h3",{id:"🏷️-话题库更新",tabindex:"-1"},[l("🏷️ 话题库更新 "),n("a",{class:"header-anchor",href:"#🏷️-话题库更新","aria-label":"Permalink to “🏷️ 话题库更新”"},"​")],-1)),a[22]||(a[22]=n("blockquote",null,[n("p",null,"预期效果：维护话题标签库，提升笔记曝光")],-1)),a[23]||(a[23]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是小红书运营专家，擅长话题研究和标签优化。

## 任务
更新话题标签库，分析热度，优化标签策略。

## 输入信息
### 必填项
- 话题类型：【类型，如护肤/穿搭/美食】
- 当前话题库：@话题库/【类型】.md

### 选填项
- 新增话题：【想添加的话题?】

## 输出规范
更新后的话题库格式：

\`\`\`markdown
# 【类型】话题库

## 高热度（优先使用）
- #话题1 - 说明
- #话题2 - 说明

## 中热度（搭配使用）
- #话题3 - 说明

## 低热度（精准引流）
- #话题4 - 说明

## 已过时（停止使用）
- #旧话题 - 过时原因

---
最后更新：【日期】
\`\`\`

## 约束条件
- ✅ 按热度分层，便于选择
- ✅ 每个话题标注使用说明
- ✅ 标记过时话题，避免误用
- ❌ 避免添加与定位无关的话题`)])],-1)),a[24]||(a[24]=n("h3",{id:"✨-封面标题优化",tabindex:"-1"},[l("✨ 封面标题优化 "),n("a",{class:"header-anchor",href:"#✨-封面标题优化","aria-label":"Permalink to “✨ 封面标题优化”"},"​")],-1)),a[25]||(a[25]=n("blockquote",null,[n("p",null,"预期效果：生成多个备选标题，提升点击率")],-1)),a[26]||(a[26]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是小红书爆款标题专家，深谙用户点击心理。

## 任务
为笔记内容生成多个备选封面标题。

## 输入信息
### 必填项
- 笔记摘要：【内容简述】

### 选填项
- 目标情绪：【想引发什么情绪?】
- 避免风格：【不想要的风格?】

## 输出规范
生成 10 个标题，覆盖不同风格：

### 疑问式（2-3 个）
> 引发好奇，促使点击
- 【标题】 ⭐⭐⭐⭐⭐
- 【标题】 ⭐⭐⭐⭐

### 数字式（2-3 个）
> 具体明确，信息感强
- 【标题】 ⭐⭐⭐⭐
- 【标题】 ⭐⭐⭐

### 反差式（2-3 个）
> 制造冲突，引发讨论
- 【标题】 ⭐⭐⭐⭐⭐
- 【标题】 ⭐⭐⭐⭐

### 痛点式（2-3 个）
> 直击问题，引发共鸣
- 【标题】 ⭐⭐⭐⭐
- 【标题】 ⭐⭐⭐

**推荐首选**：【标题】
**理由**：【为什么推荐】

## 约束条件
- ✅ 每个标题 10 字以内
- ✅ 标注推荐指数（1-5 星）
- ✅ 覆盖多种风格
- ❌ 避免标题党、夸大宣传
- ❌ 避免与账号调性不符`)])],-1)),a[27]||(a[27]=t("",11)),a[28]||(a[28]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`---
description: 快速生成小红书笔记
---

根据以下主题生成一篇小红书笔记：

主题：$ARGUMENTS

要求：
1. 遵循 @AGENTS.md 中的人设
2. 话题标签从 @话题库/ 选取
3. 包含封面标题、正文、标签、配图建议
4. 保存到 笔记/ 目录`)])],-1)),a[29]||(a[29]=n("p",null,[l("之后只需输入 "),n("code",null,"/小红书 油痘肌精华推荐"),l(" 即可快速生成。")],-1)),a[30]||(a[30]=n("h3",{id:"素材库复用",tabindex:"-1"},[l("素材库复用 "),n("a",{class:"header-anchor",href:"#素材库复用","aria-label":"Permalink to “素材库复用”"},"​")],-1)),a[31]||(a[31]=n("p",null,"把用过的好素材存到素材库：",-1)),a[32]||(a[32]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"把这次笔记中的产品描述添加到 @素材库/产品信息.md，方便以后复用")])],-1)),a[33]||(a[33]=t("",10))])}const f=r(h,[["render",u]]);export{C as __pageData,f as default};
