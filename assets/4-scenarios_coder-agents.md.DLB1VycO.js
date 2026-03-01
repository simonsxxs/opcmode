import{_ as a,I as o,c as d,o as i,a5 as l,j as e,J as s,a as t,aD as u}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"B5 专属开发 Agent","description":"创建专属 Code Reviewer 和 Security Auditor Agent，自动化代码审查和安全检查。","frontmatter":{"title":"B5 专属开发 Agent","subtitle":"创建 Code Reviewer、Security Auditor","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"B5","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"创建专属 Code Reviewer 和 Security Auditor Agent，自动化代码审查和安全检查。","tags":["Agent","Code Review","安全审计"],"prerequisite":["B1 开发日常","3.2 认识 Agent"]},"headers":[],"relativePath":"4-scenarios/coder-agents.md","filePath":"4-scenarios/coder-agents.md","lastUpdated":1772014034000}'),p={name:"4-scenarios/coder-agents.md"};function g(c,n,b,A,h,m){const r=o("AdInArticle");return i(),d("div",null,[n[0]||(n[0]=l('<h1 id="b5-专属开发-agent" tabindex="-1">B5 专属开发 Agent <a class="header-anchor" href="#b5-专属开发-agent" aria-label="Permalink to “B5 专属开发 Agent”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：创建 Code Reviewer、Security Auditor、Test Writer 等专属开发 Agent。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+u+'" alt="B5 专属开发 Agent学霸笔记" data-zoom-src="/images/4-scenarios/coder-agents-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>创建 Code Reviewer Agent</li><li>创建 Security Auditor Agent</li><li>创建 Test Writer Agent</li><li>组合多个 Agent 形成开发工作流</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>代码审查、安全检查、测试生成都要自己做</li><li>每次都要告诉 AI 用什么标准审查</li><li>想让多个&quot;专家&quot;协作，但不知道怎么实现</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：用专业化 Agent 提升开发质量</li><li>而且不想：每次都重复输入审查标准</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./coder-daily.html">B1 开发日常</a></li><li>[ ] 完成了 <a href="./../3-workflow/02-agents.html">3.2 认识 Agent</a></li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="开发-agent-矩阵" tabindex="-1">开发 Agent 矩阵 <a class="header-anchor" href="#开发-agent-矩阵" aria-label="Permalink to “开发 Agent 矩阵”">​</a></h3><table tabindex="0"><thead><tr><th>Agent</th><th>职责</th><th>使用场景</th></tr></thead><tbody><tr><td>Code Reviewer</td><td>代码审查</td><td>PR 审核、自检</td></tr><tr><td>Security Auditor</td><td>安全审计</td><td>上线前检查</td></tr><tr><td>Test Writer</td><td>测试生成</td><td>补充测试覆盖</td></tr><tr><td>Doc Writer</td><td>文档生成</td><td>注释、README</td></tr></tbody></table><hr><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to “跟我做”">​</a></h2><h3 id="第-1-步-创建-code-reviewer-agent" tabindex="-1">第 1 步：创建 Code Reviewer Agent <a class="header-anchor" href="#第-1-步-创建-code-reviewer-agent" aria-label="Permalink to “第 1 步：创建 Code Reviewer Agent”">​</a></h3><p><strong>为什么</strong><br> 专业的代码审查 Agent 能发现更多问题。</p>',26)),n[1]||(n[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p ~/.config/opencode/agent")])],-1)),n[2]||(n[2]=l("<blockquote><p>Agent 配置文件放置位置：</p><ul><li>全局：<code>~/.config/opencode/agent/</code></li><li>项目级：<code>.opencode/agent/</code></li></ul><p>Agent 的调用名默认来自文件名：例如 <code>code-reviewer.md</code> 对应 <code>@code-reviewer</code>。</p></blockquote><p>创建配置：</p>",2)),n[3]||(n[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`帮我创建一个 Code Reviewer Agent，保存到 ~/.config/opencode/agent/code-reviewer.md：

---
description: 严格的代码审查专家
mode: subagent
model: anthropic/claude-opus-4-5-thinking
temperature: 0.3
permission:
  edit: deny
  bash: deny
---


# Code Reviewer Agent

你是一位经验丰富的高级工程师，专门负责代码审查。

## 审查清单

### 代码质量
- [ ] 函数职责单一
- [ ] 命名清晰准确
- [ ] 无重复代码
- [ ] 适当的注释

### 潜在问题
- [ ] 边界条件处理
- [ ] 错误处理完整
- [ ] 无内存泄漏风险
- [ ] 无竞态条件

### 可维护性
- [ ] 代码易于理解
- [ ] 可测试性好
- [ ] 符合项目规范

## 输出格式

对于每个问题，按以下格式输出：
- **位置**：文件名:行号
- **问题**：问题描述
- **严重程度**：高 / 中 / 低
- **建议**：修复建议`)])],-1)),n[4]||(n[4]=e("p",null,"来源（Agent Markdown 字段与 tools 写法示例）：",-1)),n[5]||(n[5]=e("ul",null,[e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/agents.mdx:163")]),e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/agents.mdx:167")]),e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/agents.mdx:169")])],-1)),n[6]||(n[6]=e("h3",{id:"第-2-步-创建-security-auditor-agent",tabindex:"-1"},[t("第 2 步：创建 Security Auditor Agent "),e("a",{class:"header-anchor",href:"#第-2-步-创建-security-auditor-agent","aria-label":"Permalink to “第 2 步：创建 Security Auditor Agent”"},"​")],-1)),s(r),n[7]||(n[7]=e("p",null,[e("strong",null,"为什么"),e("br"),t(" 安全审计需要专门的视角。")],-1)),n[8]||(n[8]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`帮我创建一个 Security Auditor Agent，保存到 ~/.config/opencode/agent/security-auditor.md：

---
description: 安全漏洞猎人
mode: subagent
model: anthropic/claude-opus-4-5-thinking
temperature: 0.2
permission:
  edit: deny
  bash: deny
---

# Security Auditor Agent

你是一位安全专家，专门发现代码中的安全隐患。

## 检查项目

### 输入验证
- SQL 注入
- XSS 攻击
- 命令注入
- 路径遍历

### 认证授权
- 身份验证绕过
- 权限提升
- 会话管理

### 敏感数据
- 硬编码密钥
- 敏感信息泄露
- 不安全的存储

### 依赖安全
- 已知漏洞依赖
- 过时的包版本

## 输出格式

对于每个安全问题：
- **漏洞类型**：OWASP 分类
- **位置**：文件名:行号
- **风险等级**：Critical/High/Medium/Low
- **描述**：漏洞描述
- **修复建议**：如何修复
- **参考**：相关 CWE/CVE`)])],-1)),n[9]||(n[9]=e("h3",{id:"第-3-步-创建-test-writer-agent",tabindex:"-1"},[t("第 3 步：创建 Test Writer Agent "),e("a",{class:"header-anchor",href:"#第-3-步-创建-test-writer-agent","aria-label":"Permalink to “第 3 步：创建 Test Writer Agent”"},"​")],-1)),n[10]||(n[10]=e("p",null,[e("strong",null,"为什么"),e("br"),t(" 专门的测试 Agent 能生成更全面的测试。")],-1)),n[11]||(n[11]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`帮我创建一个 Test Writer Agent，保存到 ~/.config/opencode/agent/test-writer.md：

---
description: 测试用例专家
mode: subagent
model: anthropic/claude-opus-4-5-thinking
temperature: 0.4
permission:
  edit: deny
  bash: deny
---

# Test Writer Agent

你是一位测试专家，擅长设计和编写测试用例。

## 测试策略

1. **单元测试**：隔离测试每个函数
2. **集成测试**：测试模块间交互
3. **边界测试**：测试边界条件
4. **异常测试**：测试错误处理

## 测试覆盖

每个函数必须覆盖：
- 正常输入
- 边界值（最大、最小、临界）
- 非法输入（null、undefined、错误类型）
- 异常情况（网络错误、超时）

## 输出格式

使用项目的测试框架，生成可直接运行的测试代码。`)])],-1)),n[12]||(n[12]=e("h3",{id:"第-4-步-使用专属-agent",tabindex:"-1"},[t("第 4 步：使用专属 Agent "),e("a",{class:"header-anchor",href:"#第-4-步-使用专属-agent","aria-label":"Permalink to “第 4 步：使用专属 Agent”"},"​")],-1)),n[13]||(n[13]=e("p",null,[e("strong",null,"为什么"),e("br"),t(" 调用专属 Agent 完成任务。")],-1)),n[14]||(n[14]=e("p",null,"重启 OpenCode：",-1)),n[15]||(n[15]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1)),n[16]||(n[16]=e("p",null,"调用 Code Reviewer：",-1)),n[17]||(n[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@code-reviewer @src/services/auth.ts 请审查这个认证模块")])],-1)),n[18]||(n[18]=e("p",null,"调用 Security Auditor：",-1)),n[19]||(n[19]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@security-auditor @src/controllers/ 对这个目录进行安全审计")])],-1)),n[20]||(n[20]=e("p",null,"调用 Test Writer：",-1)),n[21]||(n[21]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@test-writer @src/utils/validate.ts 为这个文件生成完整的测试用例")])],-1)),n[22]||(n[22]=e("h3",{id:"第-5-步-组合工作流",tabindex:"-1"},[t("第 5 步：组合工作流 "),e("a",{class:"header-anchor",href:"#第-5-步-组合工作流","aria-label":"Permalink to “第 5 步：组合工作流”"},"​")],-1)),n[23]||(n[23]=e("p",null,[e("strong",null,"为什么"),e("br"),t(" 多个 Agent 协作更高效。")],-1)),n[24]||(n[24]=e("p",null,[t("创建一个综合审查命令 "),e("code",null,".opencode/command/全面审查.md"),t("：")],-1)),n[25]||(n[25]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`---
description: 综合代码审查
---

请依次执行：
1. @code-reviewer 审查代码质量
2. @security-auditor 检查安全隐患
3. @test-writer 分析测试覆盖率

目标文件：$ARGUMENTS

最后汇总所有问题，按优先级排序。`)])],-1)),n[26]||(n[26]=e("p",null,"来源（自定义命令目录与参数占位符）：",-1)),n[27]||(n[27]=e("ul",null,[e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/commands.mdx:20")]),e("li",null,[e("code",null,"opencode/packages/web/src/content/docs/commands.mdx:113")]),e("li",null,[e("code",null,"opencode/packages/opencode/src/config/config.ts:191")]),e("li",null,[e("code",null,"opencode/packages/opencode/src/command/index.ts:49")])],-1)),n[28]||(n[28]=e("p",null,"使用：",-1)),n[29]||(n[29]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/全面审查 src/services/payment.ts")])],-1)),n[30]||(n[30]=l('<hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续</p></blockquote><ul><li>[ ] 创建了 Code Reviewer Agent</li><li>[ ] 创建了 Security Auditor Agent</li><li>[ ] 创建了 Test Writer Agent</li><li>[ ] 能用 @agent名 调用</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>@agent名 没反应</td><td>调用名和文件名不一致（或拼写错误）</td><td>确认文件名（不含 .md）就是调用名，例如 <code>code-reviewer.md</code> → <code>@code-reviewer</code></td></tr><tr><td>Agent 配置不生效</td><td>配置文件不在 agent 目录</td><td>放到 <code>~/.config/opencode/agent/</code>（全局）或 <code>.opencode/agent/</code>（项目级）</td></tr><tr><td>多 Agent 结果不一致</td><td>各自独立执行</td><td>用命令串联，统一汇总</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>创建 Code Reviewer Agent</li><li>创建 Security Auditor Agent</li><li>创建 Test Writer Agent</li><li>组合多个 Agent 形成工作流</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们学习 <strong><a href="./coder-intranet.html">B6 内网/离线部署</a></strong>。</p><p>你会学到：</p><ul><li>在企业内网环境运行 OpenCode</li><li>禁用所有外网请求</li><li>配置内部 AI 网关</li></ul></blockquote>',14))])}const C=a(p,[["render",g]]);export{y as __pageData,C as default};
