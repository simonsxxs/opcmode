import{_ as r,I as s,c as d,o as i,a5 as a,j as n,J as o,a as l,aI as p}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"B2 重构与测试","description":"用 AI 识别代码坏味道、安全重构代码结构、自动生成测试用例，提升代码质量。","frontmatter":{"title":"B2 重构与测试","subtitle":"识别坏味道、安全重构、测试生成","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"B2","duration":"20 分钟","practice":"25 分钟","level":"进阶","description":"用 AI 识别代码坏味道、安全重构代码结构、自动生成测试用例，提升代码质量。","tags":["重构","测试","代码质量"],"prerequisite":["B1 开发日常"]},"headers":[],"relativePath":"4-scenarios/coder-refactor.md","filePath":"4-scenarios/coder-refactor.md","lastUpdated":1772014034000}'),u={name:"4-scenarios/coder-refactor.md"};function b(h,t,g,m,f,k){const e=s("AdInArticle");return i(),d("div",null,[t[0]||(t[0]=a('<h1 id="b2-重构与测试" tabindex="-1">B2 重构与测试 <a class="header-anchor" href="#b2-重构与测试" aria-label="Permalink to “B2 重构与测试”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：用 AI 识别代码坏味道，安全重构，并自动生成测试用例。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="B2 重构与测试学霸笔记" data-zoom-src="/images/4-scenarios/coder-refactor-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>让 AI 识别代码中的&quot;坏味道&quot;</li><li>安全地重构代码</li><li>自动生成单元测试</li><li>分析边界条件补充测试</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>代码越写越乱，但不敢改怕改坏</li><li>想重构但没有测试保护</li><li>测试用例太少，覆盖率上不去</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：提升代码质量和测试覆盖率</li><li>而且不想：手动写大量测试用例</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./coder-daily.html">B1 开发日常</a></li><li>[ ] 有一个需要重构或测试的代码文件</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="重构安全三步法" tabindex="-1">重构安全三步法 <a class="header-anchor" href="#重构安全三步法" aria-label="Permalink to “重构安全三步法”">​</a></h3>',21)),t[1]||(t[1]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"1. 先有测试 → 2. 小步重构 → 3. 测试通过")])],-1)),t[2]||(t[2]=a('<h3 id="代码坏味道速览" tabindex="-1">代码坏味道速览 <a class="header-anchor" href="#代码坏味道速览" aria-label="Permalink to “代码坏味道速览”">​</a></h3><table tabindex="0"><thead><tr><th>坏味道</th><th>症状（经验信号）</th><th>重构方向</th></tr></thead><tbody><tr><td>函数过长</td><td>一眼看不完、混了多件事</td><td>提取函数/拆分职责</td></tr><tr><td>参数过多</td><td>调用方难以记住每个参数含义</td><td>引入参数对象/拆分函数</td></tr><tr><td>重复代码</td><td>相似逻辑在多处出现</td><td>提取公共函数</td></tr><tr><td>嵌套过深</td><td>读代码需要反复回溯条件</td><td>提前返回/提取条件判断</td></tr><tr><td>命名不清</td><td>无法从名字看出用途</td><td>重命名</td></tr></tbody></table><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2>',4)),o(e),t[3]||(t[3]=n("h3",{id:"第-1-步-识别代码坏味道",tabindex:"-1"},[l("第 1 步：识别代码坏味道 "),n("a",{class:"header-anchor",href:"#第-1-步-识别代码坏味道","aria-label":"Permalink to “第 1 步：识别代码坏味道”"},"​")],-1)),t[4]||(t[4]=n("p",null,[n("strong",null,"为什么"),l(" 先诊断，再治疗。")],-1)),t[5]||(t[5]=n("p",null,"切换到 Plan Agent：",-1)),t[6]||(t[6]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@src/utils/data.ts 请分析这个文件的代码质量：
1. 列出发现的"坏味道"
2. 每个问题的严重程度（高/中/低）
3. 推荐的重构方式
4. 重构的优先级建议`)])],-1)),t[7]||(t[7]=n("h3",{id:"第-2-步-先生成测试",tabindex:"-1"},[l("第 2 步：先生成测试 "),n("a",{class:"header-anchor",href:"#第-2-步-先生成测试","aria-label":"Permalink to “第 2 步：先生成测试”"},"​")],-1)),t[8]||(t[8]=n("p",null,[n("strong",null,"为什么"),l(" 有测试才能安全重构。")],-1)),t[9]||(t[9]=n("p",null,"切换到 Build Agent：",-1)),t[10]||(t[10]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@src/utils/data.ts 为这个文件生成单元测试：
1. 使用 Vitest 框架
2. 覆盖所有导出函数
3. 包含正常情况和边界情况
4. 保存为 src/utils/data.test.ts`)])],-1)),t[11]||(t[11]=n("h3",{id:"第-3-步-安全重构",tabindex:"-1"},[l("第 3 步：安全重构 "),n("a",{class:"header-anchor",href:"#第-3-步-安全重构","aria-label":"Permalink to “第 3 步：安全重构”"},"​")],-1)),t[12]||(t[12]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 小步重构，每步验证。")],-1)),t[13]||(t[13]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@src/utils/data.ts 请重构 parseUserData 函数：
- 问题：函数过长（50 行），职责不单一
- 要求：拆分成 3 个小函数
- 保持对外接口不变
- 重构后运行测试确认`)])],-1)),t[14]||(t[14]=n("h3",{id:"第-4-步-补充边界测试",tabindex:"-1"},[l("第 4 步：补充边界测试 "),n("a",{class:"header-anchor",href:"#第-4-步-补充边界测试","aria-label":"Permalink to “第 4 步：补充边界测试”"},"​")],-1)),t[15]||(t[15]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 边界条件往往是 Bug 高发区。")],-1)),t[16]||(t[16]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@src/utils/data.ts @src/utils/data.test.ts

分析代码的边界条件，补充以下测试：
1. 空输入（null、undefined、空数组）
2. 极值（超大数字、超长字符串）
3. 类型错误（传入错误类型）
4. 并发情况（如果有异步操作）`)])],-1)),t[17]||(t[17]=n("h3",{id:"第-5-步-运行测试验证",tabindex:"-1"},[l("第 5 步：运行测试验证 "),n("a",{class:"header-anchor",href:"#第-5-步-运行测试验证","aria-label":"Permalink to “第 5 步：运行测试验证”"},"​")],-1)),t[18]||(t[18]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 确认重构没有破坏功能。")],-1)),t[19]||(t[19]=n("blockquote",null,[n("p",null,[l("在 OpenCode TUI 里，以 "),n("code",null,"!"),l(" 开头的消息会执行 shell 命令，并把输出带进对话："),n("a",{href:"https://opencode.ai/docs/tui",target:"_blank",rel:"noreferrer"},"https://opencode.ai/docs/tui")])],-1)),t[20]||(t[20]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"!npm test src/utils/data.test.ts")])],-1)),t[21]||(t[21]=n("p",null,[n("strong",null,"你应该看到"),l("：所有测试通过")],-1)),t[22]||(t[22]=n("hr",null,null,-1)),t[23]||(t[23]=n("h2",{id:"📋-魔法-prompt",tabindex:"-1"},[l("📋 魔法 Prompt "),n("a",{class:"header-anchor",href:"#📋-魔法-prompt","aria-label":"Permalink to “📋 魔法 Prompt”"},"​")],-1)),t[24]||(t[24]=n("h3",{id:"✅-代码审查",tabindex:"-1"},[l("✅ 代码审查 "),n("a",{class:"header-anchor",href:"#✅-代码审查","aria-label":"Permalink to “✅ 代码审查”"},"​")],-1)),t[25]||(t[25]=n("blockquote",null,[n("p",null,"预期效果：全面分析代码质量问题，给出改进建议")],-1)),t[26]||(t[26]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是技术负责人，负责把控代码质量。Review 风格是严格但建设性的。

## 任务
对提交的代码进行全面审查，发现问题并给出改进建议。

## 输入信息
### 必填项
- 编程语言：【编程语言】
- 代码：@【文件路径】 或 [粘贴代码]

### 选填项
- 审查重点：【重点关注的方面?】
- 项目背景：【代码的上下文?】

## 审查维度
1. **代码质量**：命名规范、代码结构、可读性、重复代码
2. **潜在问题**：Bug 风险、边界条件、错误处理、性能问题
3. **安全隐患**：输入验证、敏感信息、注入风险
4. **最佳实践**：设计模式、SOLID 原则、测试覆盖

## 输出规范
### 评审总结
- **代码评级**：A(优秀)/B(良好)/C(一般)/D(需重构)
- **一句话评价**
- **需修改才能合并**：是/否

### 问题列表
- 🔴 **严重问题**：\`[文件:行号]\` 问题 + 风险 + 建议
- 🟡 **建议改进**：推荐修复的问题
- 🟢 **优点**：值得保持的地方

## 约束条件
- ✅ 问题要具体到行号
- ✅ 每个问题都要有修复建议
- ✅ 肯定做得好的地方
- ❌ 避免主观偏好替代客观标准
- ❌ 避免只批评不给方案`)])],-1)),t[27]||(t[27]=n("h3",{id:"🧪-测试生成",tabindex:"-1"},[l("🧪 测试生成 "),n("a",{class:"header-anchor",href:"#🧪-测试生成","aria-label":"Permalink to “🧪 测试生成”"},"​")],-1)),t[28]||(t[28]=n("blockquote",null,[n("p",null,"预期效果：生成完整的单元测试，覆盖边界条件")],-1)),t[29]||(t[29]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是 QA 工程师，擅长设计全面的测试用例，覆盖正常流程和边界条件。

## 任务
为用户提供的函数或模块生成单元测试。

## 输入信息
### 必填项
- 编程语言：【语言】
- 代码：@【文件路径】 或 [粘贴代码]

### 选填项
- 测试框架：【Jest/Vitest/Pytest/JUnit?】（默认：自动检测）
- 测试风格：【BDD describe/it 风格?】

## 输出规范
使用 AAA 模式（Arrange-Act-Assert），覆盖：
1. **正常流程**（Happy Path）
2. **边界条件**（空值、极值、临界点）
3. **异常情况**（错误输入、异常抛出）
4. **异步操作**（如有 Promise/async）

每个测试用例包含：
- 清晰的命名（描述测试意图）
- 必要的注释（说明测试场景）

## 约束条件
- ✅ 测试用例命名要清晰表达测试意图
- ✅ 覆盖主要边界条件
- ✅ 测试代码要可直接运行
- ❌ 避免测试实现细节
- ❌ 避免测试用例之间有依赖`)])],-1)),t[30]||(t[30]=n("h3",{id:"🔧-重构建议",tabindex:"-1"},[l("🔧 重构建议 "),n("a",{class:"header-anchor",href:"#🔧-重构建议","aria-label":"Permalink to “🔧 重构建议”"},"​")],-1)),t[31]||(t[31]=n("blockquote",null,[n("p",null,"预期效果：给出安全的重构方案，降低改动风险")],-1)),t[32]||(t[32]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是重构专家，擅长识别代码坏味道并给出安全的重构方案。

## 任务
分析代码问题，给出安全的重构步骤和建议。

## 输入信息
### 必填项
- 代码：@【文件路径】 或 [粘贴代码]

### 选填项
- 已知问题：【你发现的问题?】
- 重构目标：【想达成什么效果?】

## 输出规范
1. **当前问题分析**
   - 发现的坏味道（函数过长/参数过多/嵌套过深/重复代码/命名不清）
   - 每个问题的严重程度（高/中/低）

2. **推荐的重构步骤**（按顺序）
   - 每步做什么
   - 每步的风险评估
   - 如何验证这步成功

3. **需要补充的测试**
   - 重构前应该有的测试
   - 重构后需要新增的测试

4. **重构后的预期效果**
   - 代码质量提升点
   - 可维护性改进

## 约束条件
- ✅ 小步重构，每步可验证
- ✅ 保持对外接口不变
- ✅ 先有测试再重构
- ❌ 避免一次改动太多
- ❌ 避免改变业务逻辑`)])],-1)),t[33]||(t[33]=a('<hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续</p></blockquote><ul><li>[ ] 用 AI 识别了代码坏味道</li><li>[ ] 生成了单元测试</li><li>[ ] 完成了安全重构</li><li>[ ] 测试全部通过</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>重构后功能坏了</td><td>没先写测试</td><td>先生成测试再重构</td></tr><tr><td>测试覆盖率低</td><td>只测正常情况</td><td>补充边界条件和异常测试</td></tr><tr><td>坏味道识别不准</td><td>代码片段太小</td><td>给 AI 完整的文件上下文</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>用 AI 识别代码坏味道</li><li>先写测试再重构的安全流程</li><li>自动生成单元测试</li><li>分析和补充边界测试</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习文档自动化和 Git 协作技巧。</p></blockquote><hr><p>📚 <strong>更多完整模板</strong>：<a href="./../appendix/prompts.html">Prompt 模板库</a></p>',16))])}const A=r(u,[["render",b]]);export{x as __pageData,A as default};
