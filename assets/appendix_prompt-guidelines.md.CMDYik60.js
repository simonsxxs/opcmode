import{_ as r,I as d,c as i,o,a5 as n,j as a,J as s,a as l}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"Prompt 工程规范","description":"编写高质量提示词的原则和最佳实践","frontmatter":{"title":"Prompt 工程规范","description":"编写高质量提示词的原则和最佳实践"},"headers":[],"relativePath":"appendix/prompt-guidelines.md","filePath":"appendix/prompt-guidelines.md","lastUpdated":1772014034000}'),p={name:"appendix/prompt-guidelines.md"};function h(u,t,g,b,m,f){const e=d("AdInArticle");return o(),i("div",null,[t[0]||(t[0]=n('<h1 id="prompt-工程规范" tabindex="-1">Prompt 工程规范 <a class="header-anchor" href="#prompt-工程规范" aria-label="Permalink to “Prompt 工程规范”">​</a></h1><blockquote><p>本文档定义了 OpenCode 教程中提示词的编写规范，确保所有模板保持一致的高质量。</p></blockquote><hr><h2 id="🎯-核心原则" tabindex="-1">🎯 核心原则 <a class="header-anchor" href="#🎯-核心原则" aria-label="Permalink to “🎯 核心原则”">​</a></h2><h3 id="_1-结构化优先-structure-first" tabindex="-1">1. 结构化优先（Structure First） <a class="header-anchor" href="#_1-结构化优先-structure-first" aria-label="Permalink to “1. 结构化优先（Structure First）”">​</a></h3><p>每个模板必须包含明确的结构层次：</p>',6)),t[1]||(t[1]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},"角色定义 → 任务说明 → 输入规范 → 输出规范 → 示例 → 约束条件")])],-1)),t[2]||(t[2]=n('<h3 id="_2-few-shot-必备-example-driven" tabindex="-1">2. Few-shot 必备（Example-Driven） <a class="header-anchor" href="#_2-few-shot-必备-example-driven" aria-label="Permalink to “2. Few-shot 必备（Example-Driven）”">​</a></h3><p>复杂任务必须提供 1-2 个具体示例，让模型理解预期输入/输出格式。</p><h3 id="_3-显式思维链-chain-of-thought" tabindex="-1">3. 显式思维链（Chain of Thought） <a class="header-anchor" href="#_3-显式思维链-chain-of-thought" aria-label="Permalink to “3. 显式思维链（Chain of Thought）”">​</a></h3><p>对于推理类任务，明确引导&quot;先分析，再输出&quot;的步骤式思考。</p><h3 id="_4-量化评估标准-quantified-criteria" tabindex="-1">4. 量化评估标准（Quantified Criteria） <a class="header-anchor" href="#_4-量化评估标准-quantified-criteria" aria-label="Permalink to “4. 量化评估标准（Quantified Criteria）”">​</a></h3><p>任何评分/评估必须有明确的评分维度和每个分数段的定义。</p><h3 id="_5-错误处理机制-graceful-degradation" tabindex="-1">5. 错误处理机制（Graceful Degradation） <a class="header-anchor" href="#_5-错误处理机制-graceful-degradation" aria-label="Permalink to “5. 错误处理机制（Graceful Degradation）”">​</a></h3><p>模板应包含：输入不完整时如何处理、遇到歧义时如何澄清、超出能力范围时如何反馈。</p><h3 id="_6-自检机制-self-verification" tabindex="-1">6. 自检机制（Self-Verification） <a class="header-anchor" href="#_6-自检机制-self-verification" aria-label="Permalink to “6. 自检机制（Self-Verification）”">​</a></h3><p>复杂任务输出前进行自我检查，确保符合要求。</p><h3 id="_7-占位符一致性-consistent-placeholders" tabindex="-1">7. 占位符一致性（Consistent Placeholders） <a class="header-anchor" href="#_7-占位符一致性-consistent-placeholders" aria-label="Permalink to “7. 占位符一致性（Consistent Placeholders）”">​</a></h3><p>全文档使用统一的占位符语法，清晰区分必填和选填。</p><hr><h2 id="📋-标准模板结构" tabindex="-1">📋 标准模板结构 <a class="header-anchor" href="#📋-标准模板结构" aria-label="Permalink to “📋 标准模板结构”">​</a></h2>',14)),t[3]||(t[3]=a("div",{class:"language-markdown"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"markdown"),a("pre",null,[a("code",{"v-pre":""},`## 角色
你是[专业身份]，擅长[核心能力]。[额外的身份锚定描述]

## 任务
[清晰描述要完成的任务]

## 输入信息
### 必填项
- 变量名：【变量说明】

### 选填项
- 变量名：【变量说明?】（默认：xxx）

## 输出规范
按以下结构输出：
1. [输出项1]
2. [输出项2]
...

## 示例

### 输入
[具体输入示例]

### 输出
[对应的理想输出]

## 约束条件
- ✅ 应该：[正面行为]
- ❌ 避免：[负面行为]

## 自检清单
完成前确认：
- [ ] [检查项1]
- [ ] [检查项2]

## 错误处理
- 如果缺少关键信息，请先询问用户
- 如果任务超出范围，说明原因并建议替代方案`)])],-1)),t[4]||(t[4]=a("hr",null,null,-1)),t[5]||(t[5]=a("h2",{id:"🏷️-占位符规范",tabindex:"-1"},[l("🏷️ 占位符规范 "),a("a",{class:"header-anchor",href:"#🏷️-占位符规范","aria-label":"Permalink to “🏷️ 占位符规范”"},"​")],-1)),s(e),t[6]||(t[6]=n('<h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to “语法”">​</a></h3><table tabindex="0"><thead><tr><th>类型</th><th>语法</th><th>示例</th></tr></thead><tbody><tr><td><strong>必填变量</strong></td><td><code>【变量名】</code></td><td><code>【编程语言】</code></td></tr><tr><td><strong>选填变量</strong></td><td><code>【变量名?】</code></td><td><code>【框架?】</code></td></tr><tr><td><strong>带默认值</strong></td><td><code>【变量名=默认值】</code></td><td><code>【风格=轻松】</code></td></tr><tr><td><strong>多选一</strong></td><td><code>【选项1/选项2/选项3】</code></td><td><code>【玄幻/都市/言情】</code></td></tr><tr><td><strong>文本块</strong></td><td><code>[粘贴区域描述]</code></td><td><code>[粘贴代码]</code></td></tr></tbody></table><h3 id="示例对比" tabindex="-1">示例对比 <a class="header-anchor" href="#示例对比" aria-label="Permalink to “示例对比”">​</a></h3><p><strong>❌ 差的写法</strong>：</p>',4)),t[7]||(t[7]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},`类型：玄幻/都市/言情
语言：语言
粘贴代码`)])],-1)),t[8]||(t[8]=a("p",null,[a("strong",null,"✅ 好的写法"),l("：")],-1)),t[9]||(t[9]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},`类型：【玄幻/都市/言情/悬疑/科幻】
语言：【编程语言】

[粘贴代码]`)])],-1)),t[10]||(t[10]=n('<hr><h2 id="📊-评分标准规范" tabindex="-1">📊 评分标准规范 <a class="header-anchor" href="#📊-评分标准规范" aria-label="Permalink to “📊 评分标准规范”">​</a></h2><p>任何使用评分的模板，必须定义评分标准：</p><h3 id="示例-代码质量评分" tabindex="-1">示例：代码质量评分 <a class="header-anchor" href="#示例-代码质量评分" aria-label="Permalink to “示例：代码质量评分”">​</a></h3><table tabindex="0"><thead><tr><th>分数</th><th>可读性</th><th>性能</th><th>安全性</th><th>测试覆盖</th></tr></thead><tbody><tr><td>9-10</td><td>命名清晰、注释完整</td><td>O(n)或更优</td><td>无漏洞</td><td>&gt;90%</td></tr><tr><td>7-8</td><td>命名合理、关键注释</td><td>O(n log n)</td><td>低风险</td><td>70-90%</td></tr><tr><td>5-6</td><td>基本可读</td><td>O(n²)</td><td>中风险</td><td>50-70%</td></tr><tr><td>&lt;5</td><td>难以理解</td><td>O(n³)+</td><td>高风险</td><td>&lt;50%</td></tr></tbody></table><p><strong>综合得分计算</strong>：可读性×0.3 + 性能×0.3 + 安全性×0.25 + 测试覆盖×0.15</p><hr><h2 id="👤-角色定义规范" tabindex="-1">👤 角色定义规范 <a class="header-anchor" href="#👤-角色定义规范" aria-label="Permalink to “👤 角色定义规范”">​</a></h2><h3 id="要素" tabindex="-1">要素 <a class="header-anchor" href="#要素" aria-label="Permalink to “要素”">​</a></h3><ol><li><strong>专业身份</strong>：你是谁</li><li><strong>核心能力</strong>：擅长什么</li><li><strong>服务对象</strong>：为谁服务（可选）</li><li><strong>风格特点</strong>：工作风格（可选）</li></ol><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to “示例”">​</a></h3><p><strong>❌ 差的写法</strong>：</p>',12)),t[11]||(t[11]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},"你是一个助手。")])],-1)),t[12]||(t[12]=a("p",null,[a("strong",null,"✅ 好的写法"),l("：")],-1)),t[13]||(t[13]=a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},`你是资深技术文档工程师，擅长将复杂代码解释得通俗易懂。
你的解释被初学者评价为"终于看懂了"。`)])],-1)),t[14]||(t[14]=a("hr",null,null,-1)),t[15]||(t[15]=a("h2",{id:"⚖️-约束条件规范",tabindex:"-1"},[l("⚖️ 约束条件规范 "),a("a",{class:"header-anchor",href:"#⚖️-约束条件规范","aria-label":"Permalink to “⚖️ 约束条件规范”"},"​")],-1)),t[16]||(t[16]=a("p",null,"使用 ✅ 和 ❌ 明确区分正面和负面行为：",-1)),t[17]||(t[17]=a("div",{class:"language-markdown"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"markdown"),a("pre",null,[a("code",{"v-pre":""},`## 约束条件
- ✅ 问题要具体到行号
- ✅ 每个问题都要有修复建议
- ✅ 肯定做得好的地方
- ❌ 避免主观偏好替代客观标准
- ❌ 避免只批评不给方案`)])],-1)),t[18]||(t[18]=a("hr",null,null,-1)),t[19]||(t[19]=a("h2",{id:"🔧-错误处理规范",tabindex:"-1"},[l("🔧 错误处理规范 "),a("a",{class:"header-anchor",href:"#🔧-错误处理规范","aria-label":"Permalink to “🔧 错误处理规范”"},"​")],-1)),t[20]||(t[20]=a("p",null,"每个模板都应该包含错误处理部分：",-1)),t[21]||(t[21]=a("div",{class:"language-markdown"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"markdown"),a("pre",null,[a("code",{"v-pre":""},`## 错误处理
- 如果信息不足，列出需要补充的信息并说明为什么需要
- 如果问题超出能力范围，说明并建议求助渠道
- 如果有多个独立问题，建议逐个处理`)])],-1)),t[22]||(t[22]=a("hr",null,null,-1)),t[23]||(t[23]=a("h2",{id:"✅-自检清单规范",tabindex:"-1"},[l("✅ 自检清单规范 "),a("a",{class:"header-anchor",href:"#✅-自检清单规范","aria-label":"Permalink to “✅ 自检清单规范”"},"​")],-1)),t[24]||(t[24]=a("p",null,"复杂任务应包含自检清单：",-1)),t[25]||(t[25]=a("div",{class:"language-markdown"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"markdown"),a("pre",null,[a("code",{"v-pre":""},`## 自检清单
完成前确认：
- [ ] 每个主角都有清晰的弧线
- [ ] 起承转合节奏合理
- [ ] 核心冲突能贯穿全文
- [ ] 亮点足以吸引目标读者`)])],-1)),t[26]||(t[26]=a("hr",null,null,-1)),t[27]||(t[27]=a("h2",{id:"🤖-agent-skill-description-规范",tabindex:"-1"},[l("🤖 Agent/Skill description 规范 "),a("a",{class:"header-anchor",href:"#🤖-agent-skill-description-规范","aria-label":"Permalink to “🤖 Agent/Skill description 规范”"},"​")],-1)),t[28]||(t[28]=a("h3",{id:"结构模板",tabindex:"-1"},[l("结构模板 "),a("a",{class:"header-anchor",href:"#结构模板","aria-label":"Permalink to “结构模板”"},"​")],-1)),t[29]||(t[29]=a("div",{class:"language-yaml"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"yaml"),a("pre",null,[a("code",{"v-pre":""},`description: |
  [一句话说明核心能力]
  提供：[该 Skill 包含的资源]
  适用：[触发场景1]、[触发场景2]
  不适用：[边界场景1]、[边界场景2]`)])],-1)),t[30]||(t[30]=a("h3",{id:"示例-1",tabindex:"-1"},[l("示例 "),a("a",{class:"header-anchor",href:"#示例-1","aria-label":"Permalink to “示例”"},"​")],-1)),t[31]||(t[31]=a("p",null,[a("strong",null,"❌ 差的写法"),l("：")],-1)),t[32]||(t[32]=a("div",{class:"language-yaml"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"yaml"),a("pre",null,[a("code",{"v-pre":""},"description: 代码审查专家")])],-1)),t[33]||(t[33]=a("p",null,[a("strong",null,"✅ 好的写法"),l("：")],-1)),t[34]||(t[34]=a("div",{class:"language-yaml"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"yaml"),a("pre",null,[a("code",{"v-pre":""},`description: |
  代码审查专家，专注安全漏洞、性能问题、代码质量。
  适用场景：PR 审查、代码健康检查、安全审计。
  不适用：代码生成、功能实现、测试编写。`)])],-1)),t[35]||(t[35]=n('<hr><h2 id="📝-检查清单" tabindex="-1">📝 检查清单 <a class="header-anchor" href="#📝-检查清单" aria-label="Permalink to “📝 检查清单”">​</a></h2><p>发布模板前，确认以下事项：</p><ul><li>[ ] 有明确的角色定义</li><li>[ ] 输入信息区分必填/选填</li><li>[ ] 有完整的输出规范</li><li>[ ] 复杂任务有 Few-shot 示例</li><li>[ ] 评分类有量化标准</li><li>[ ] 有约束条件（✅/❌）</li><li>[ ] 有错误处理机制</li><li>[ ] 占位符语法统一</li><li>[ ] 无格式错误</li></ul><hr><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to “相关资源”">​</a></h2><ul><li><a href="./prompts.html">Prompt 模板库</a> - 开箱即用的模板</li><li><a href="./../5-advanced/02a-agent-quickstart.html">Agent 快速入门</a> - 创建 Agent</li><li><a href="./../5-advanced/03a-skills-basics.html">Skill 基础</a> - 创建 Skill</li></ul>',7))])}const P=r(p,[["render",h]]);export{k as __pageData,P as default};
