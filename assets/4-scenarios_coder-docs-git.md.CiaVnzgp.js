import{_ as o,I as a,c as i,o as r,a5 as s,j as n,J as d,a as l,aG as p}from"./chunks/framework.Dtwt352Q.js";const R=JSON.parse('{"title":"B3 文档与 Git","description":"用 AI 自动生成 README 文档、Git commit 信息、Pull Request 描述，提升协作效率。","frontmatter":{"title":"B3 文档与 Git","subtitle":"自动生成 README、commit、PR","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"B3","duration":"15 分钟","practice":"20 分钟","level":"进阶","description":"用 AI 自动生成 README 文档、Git commit 信息、Pull Request 描述，提升协作效率。","tags":["文档","Git","README","commit"],"prerequisite":["B1 开发日常"]},"headers":[],"relativePath":"4-scenarios/coder-docs-git.md","filePath":"4-scenarios/coder-docs-git.md","lastUpdated":1772014034000}'),u={name:"4-scenarios/coder-docs-git.md"};function m(b,t,g,c,f,P){const e=a("AdInArticle");return r(),i("div",null,[t[0]||(t[0]=s('<h1 id="b3-文档与-git" tabindex="-1">B3 文档与 Git <a class="header-anchor" href="#b3-文档与-git" aria-label="Permalink to “B3 文档与 Git”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：用 AI 自动生成 README、commit 消息、PR 描述。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="B3 文档与 Git学霸笔记" data-zoom-src="/images/4-scenarios/coder-docs-git-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>自动生成项目 README</li><li>让 AI 写 commit 消息</li><li>生成 PR 描述</li><li>用 /undo /redo 与 Git 联动</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>README 写得很痛苦，或者干脆不写</li><li>commit 消息随便写，后来看不懂</li><li>PR 描述不知道怎么写才规范</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：高效完成文档和 Git 协作任务</li><li>而且不想：在这些&quot;杂事&quot;上花太多时间</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./coder-daily.html">B1 开发日常</a></li><li>[ ] 项目已初始化 Git（<code>git init</code>）</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="文档自动化场景" tabindex="-1">文档自动化场景 <a class="header-anchor" href="#文档自动化场景" aria-label="Permalink to “文档自动化场景”">​</a></h3><table tabindex="0"><thead><tr><th>文档类型</th><th>生成时机</th><th>AI 辅助方式</th></tr></thead><tbody><tr><td>README</td><td>项目初期/重大更新</td><td>分析项目结构生成</td></tr><tr><td>API 文档</td><td>接口开发完成</td><td>从代码提取生成</td></tr><tr><td>Commit 消息</td><td>每次提交</td><td>分析变更生成</td></tr><tr><td>PR 描述</td><td>提交 PR</td><td>汇总 commit 生成</td></tr></tbody></table><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2><h3 id="第-1-步-生成-readme" tabindex="-1">第 1 步：生成 README <a class="header-anchor" href="#第-1-步-生成-readme" aria-label="Permalink to “第 1 步：生成 README”">​</a></h3><p><strong>为什么</strong> 好的 README 是项目的门面。</p><p>切换到 Build Agent：</p>',27)),t[1]||(t[1]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@explore 分析项目结构，生成一个专业的 README.md：

包含以下部分：
1. 项目名称和简介
2. 功能特性（Feature list）
3. 快速开始（安装和运行）
4. 使用示例
5. 配置说明
6. 贡献指南
7. 许可证

保存为 README.md`)])],-1)),t[2]||(t[2]=n("h3",{id:"第-2-步-生成-commit-消息",tabindex:"-1"},[l("第 2 步：生成 commit 消息 "),n("a",{class:"header-anchor",href:"#第-2-步-生成-commit-消息","aria-label":"Permalink to “第 2 步：生成 commit 消息”"},"​")],-1)),t[3]||(t[3]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 规范的 commit 消息便于追溯。")],-1)),t[4]||(t[4]=n("p",null,"先查看变更：",-1)),t[5]||(t[5]=n("blockquote",null,[n("p",null,[l("在 OpenCode TUI 里，以 "),n("code",null,"!"),l(" 开头的消息会执行 shell 命令，并把输出带进对话："),n("a",{href:"https://opencode.ai/docs/tui",target:"_blank",rel:"noreferrer"},"https://opencode.ai/docs/tui")])],-1)),t[6]||(t[6]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"!git diff")])],-1)),t[7]||(t[7]=n("p",null,"然后让 AI 生成：",-1)),t[8]||(t[8]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`根据以上变更，生成符合 Conventional Commits 规范的 commit 消息：
- 格式：type(scope): description
- type：feat/fix/docs/style/refactor/test/chore
- 简洁明了，不超过 50 字符`)])],-1)),t[9]||(t[9]=n("p",null,"执行提交：",-1)),t[10]||(t[10]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},'!git add . && git commit -m "feat(auth): add email verification on registration"')])],-1)),t[11]||(t[11]=n("h3",{id:"第-3-步-生成-pr-描述",tabindex:"-1"},[l("第 3 步：生成 PR 描述 "),n("a",{class:"header-anchor",href:"#第-3-步-生成-pr-描述","aria-label":"Permalink to “第 3 步：生成 PR 描述”"},"​")],-1)),d(e),t[12]||(t[12]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 清晰的 PR 描述帮助 reviewer 理解。")],-1)),t[13]||(t[13]=n("blockquote",null,[n("p",null,"获取最近提交列表（示例）：")],-1)),t[14]||(t[14]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"!git log --oneline -10")])],-1)),t[15]||(t[15]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`根据以上 commit 历史，生成 PR 描述：

## 变更概述
（一句话总结）

## 变更详情
（分点列出主要修改）

## 测试情况
（测试了什么）

## 相关 Issue
（关联的 issue 编号）`)])],-1)),t[16]||(t[16]=n("h3",{id:"第-4-步-使用-undo-撤销",tabindex:"-1"},[l("第 4 步：使用 /undo 撤销 "),n("a",{class:"header-anchor",href:"#第-4-步-使用-undo-撤销","aria-label":"Permalink to “第 4 步：使用 /undo 撤销”"},"​")],-1)),t[17]||(t[17]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" AI 修改错了可以撤销。")],-1)),t[18]||(t[18]=n("p",null,"如果 AI 的修改不满意：",-1)),t[19]||(t[19]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"/undo")])],-1)),t[20]||(t[20]=n("p",null,[n("strong",null,"你应该看到"),l("：最近一次对话变更被撤销，相关文件改动也会被回滚（需要 Git 仓库）。更多细节见 "),n("a",{href:"https://opencode.ai/docs/tui#undo",target:"_blank",rel:"noreferrer"},"https://opencode.ai/docs/tui#undo"),l(" 或 "),n("a",{href:"./../appendix/commands.html"},"附录/命令速查"),l("。")],-1)),t[21]||(t[21]=n("h3",{id:"第-5-步-补充代码注释",tabindex:"-1"},[l("第 5 步：补充代码注释 "),n("a",{class:"header-anchor",href:"#第-5-步-补充代码注释","aria-label":"Permalink to “第 5 步：补充代码注释”"},"​")],-1)),t[22]||(t[22]=n("p",null,[n("strong",null,"为什么"),n("br"),l(" 好的注释是活文档。")],-1)),t[23]||(t[23]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`@src/services/payment.ts 为这个文件添加 JSDoc 注释：
- 每个导出函数都加
- 包含参数说明和返回值
- 包含使用示例`)])],-1)),t[24]||(t[24]=n("hr",null,null,-1)),t[25]||(t[25]=n("h2",{id:"📋-魔法-prompt",tabindex:"-1"},[l("📋 魔法 Prompt "),n("a",{class:"header-anchor",href:"#📋-魔法-prompt","aria-label":"Permalink to “📋 魔法 Prompt”"},"​")],-1)),t[26]||(t[26]=n("h3",{id:"📄-readme-生成",tabindex:"-1"},[l("📄 README 生成 "),n("a",{class:"header-anchor",href:"#📄-readme-生成","aria-label":"Permalink to “📄 README 生成”"},"​")],-1)),t[27]||(t[27]=n("blockquote",null,[n("p",null,"预期效果：生成专业的项目 README，让新人快速上手")],-1)),t[28]||(t[28]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是技术文档工程师，擅长写让人一看就懂的项目文档。

## 任务
为项目生成专业的 README.md。

## 输入信息
### 必填项
- 项目名称：【名称】
- 一句话描述：【描述】
- 技术栈：【技术栈】

### 选填项
- 目标用户：【谁会用这个项目?】
- 项目结构：@explore 或 [粘贴项目结构]

## 输出规范
包含以下部分：
1. **项目标题和 Badge**
2. **项目简介**（3-5 句话）
3. **功能特性**（用列表）
4. **快速开始**
   - 环境要求
   - 安装步骤（可直接复制运行）
   - 运行命令
5. **配置说明**（环境变量、配置文件）
6. **API 文档**（如适用）
7. **常见问题**
8. **贡献指南**
9. **许可证**

## 约束条件
- ✅ 快速开始的命令要能直接复制运行
- ✅ 配置说明要完整，包含所有必填项
- ✅ 使用合适的 Badge（build status、version 等）
- ❌ 避免过于冗长，保持简洁
- ❌ 避免遗漏关键配置`)])],-1)),t[29]||(t[29]=n("h3",{id:"🔧-commit-消息生成",tabindex:"-1"},[l("🔧 Commit 消息生成 "),n("a",{class:"header-anchor",href:"#🔧-commit-消息生成","aria-label":"Permalink to “🔧 Commit 消息生成”"},"​")],-1)),t[30]||(t[30]=n("blockquote",null,[n("p",null,"预期效果：生成规范的 Conventional Commits 格式消息")],-1)),t[31]||(t[31]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是代码规范专家，擅长写规范的 Commit 消息。

## 任务
根据代码变更生成符合 Conventional Commits 规范的提交消息。

## 输入信息
### 必填项
- 变更内容：!git diff 或 [粘贴变更描述]

### 选填项
- 关联 Issue：【Issue 编号?】

## 输出规范
格式：\`<type>(<scope>): <description>\`

### type 选择
- feat: 新功能
- fix: Bug 修复
- docs: 文档更新
- style: 代码格式（不影响逻辑）
- refactor: 重构（不是新功能也不是修复）
- test: 测试相关
- chore: 构建/工具/依赖

### 规范
- description 不超过 50 字符
- 使用祈使语气（add, fix, update，不是 added, fixed）
- 如果变更复杂，添加 body 说明详情
- 如有关联 Issue，在 footer 添加 \`Closes #123\`

## 约束条件
- ✅ type 要准确反映变更类型
- ✅ description 要具体，说明改了什么
- ❌ 避免含糊的描述如 "fix bug"、"update code"
- ❌ 避免在 description 中重复 type`)])],-1)),t[32]||(t[32]=n("h3",{id:"📝-pr-描述生成",tabindex:"-1"},[l("📝 PR 描述生成 "),n("a",{class:"header-anchor",href:"#📝-pr-描述生成","aria-label":"Permalink to “📝 PR 描述生成”"},"​")],-1)),t[33]||(t[33]=n("blockquote",null,[n("p",null,"预期效果：生成清晰的 PR 描述，帮助 Reviewer 理解变更")],-1)),t[34]||(t[34]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是技术写作专家，擅长写清晰的技术文档。

## 任务
根据 commit 历史生成 PR 描述。

## 输入信息
### 必填项
- Commit 历史：!git log --oneline -10 或 [粘贴 commit 列表]

### 选填项
- PR 目的：【这个 PR 要解决什么问题?】
- 关联 Issue：【Issue 编号?】

## 输出规范
\`\`\`markdown
## 变更概述
（一句话总结本 PR 的目的）

## 变更详情
- 详细修改点 1
- 详细修改点 2
- ...

## 测试情况
- [ ] 单元测试通过
- [ ] 集成测试通过
- [ ] 手动测试通过

## 截图/录屏
（如有 UI 变更，附上截图）

## 相关 Issue
Closes #【Issue 编号】

## Reviewer 注意事项
（需要特别关注的地方）`)])],-1)),t[35]||(t[35]=n("h2",{id:"约束条件",tabindex:"-1"},[l("约束条件 "),n("a",{class:"header-anchor",href:"#约束条件","aria-label":"Permalink to “约束条件”"},"​")],-1)),t[36]||(t[36]=n("ul",null,[n("li",null,"✅ 概述要一句话说清楚"),n("li",null,"✅ 变更详情要具体，不只是复制 commit message"),n("li",null,"✅ 如有 UI 变更，提醒附上截图"),n("li",null,"❌ 避免遗漏关联的 Issue"),n("li",null,"❌ 避免变更详情过于笼统")],-1)),t[37]||(t[37]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`

---

## 检查点 ✅

> 全部通过才能继续

- [ ] 生成了 README.md
- [ ] 用 AI 生成了 commit 消息
- [ ] 知道如何生成 PR 描述
- [ ] 知道 /undo 与 Git 的联动

---

## 踩坑提醒

| 现象 | 原因 | 解决 |
|-----|-----|-----|
| README 不准确 | AI 分析不全 | 先用 @explore 让 AI 理解项目 |
| commit 格式不对 | 没指定规范 | 明确要求 Conventional Commits |
| /undo 不生效 | 项目不是 Git 仓库 | 先 \`git init\` |

---

## 本课小结

你学会了：

1. 自动生成项目 README
2. 生成规范的 commit 消息
3. 生成 PR 描述
4. /undo /redo 与 Git 联动

---

## 下一课预告

> 下一课我们将学习 CI/CD 集成，让 AI 在流水线中工作。

---

📚 **更多完整模板**：[Prompt 模板库](../appendix/prompts)`)])],-1))])}const h=o(u,[["render",m]]);export{R as __pageData,h as default};
