import{_ as r,I as d,c as i,o,a5 as e,j as l,J as s,a as n,aF as u}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"B1 开发日常","description":"用 Plan Agent 理解代码、用 Build Agent 写新功能、用 AI 定位和修复 Bug，提升开发效率。","frontmatter":{"title":"B1 开发日常","subtitle":"理解代码、写功能、修 Bug","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"B1","duration":"20 分钟","practice":"25 分钟","level":"进阶","description":"用 Plan Agent 理解代码、用 Build Agent 写新功能、用 AI 定位和修复 Bug，提升开发效率。","tags":["代码","开发","Bug修复"],"prerequisite":["3.1 Plan vs Build"]},"headers":[],"relativePath":"4-scenarios/coder-daily.md","filePath":"4-scenarios/coder-daily.md","lastUpdated":1772014034000}'),p={name:"4-scenarios/coder-daily.md"};function g(b,a,h,P,c,m){const t=d("AdInArticle");return o(),i("div",null,[a[0]||(a[0]=e("",21)),a[1]||(a[1]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},"理解代码(Plan) → 制定方案(Plan) → 实现功能(Build) → 验证测试(Build)")])],-1)),a[2]||(a[2]=e("",10)),a[3]||(a[3]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`@explore 帮我梳理这个项目的整体结构，包括：
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
- ❌ 避免只给答案不说原因`)])],-1)),a[35]||(a[35]=e("",20))])}const k=r(p,[["render",g]]);export{f as __pageData,k as default};
