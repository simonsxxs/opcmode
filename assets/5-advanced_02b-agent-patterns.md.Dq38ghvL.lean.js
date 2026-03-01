import{_ as o,I as l,c as i,o as s,a5 as r,J as d,j as n,a as e,aZ as p}from"./chunks/framework.Dtwt352Q.js";const f=JSON.parse('{"title":"5.2b Agent 设计模式","description":"学习业界 Agent 设计模式，掌握创建高效 Agent 的最佳实践，参考 Anthropic 和 Lilian Weng 的经验。","frontmatter":{"title":"5.2b Agent 设计模式","subtitle":"业界最佳实践与实战案例","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.2b","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"学习业界 Agent 设计模式，掌握创建高效 Agent 的最佳实践，参考 Anthropic 和 Lilian Weng 的经验。","tags":["Agent","设计模式","最佳实践"],"prerequisite":["5.2a Agent 快速入门"]},"headers":[],"relativePath":"5-advanced/02b-agent-patterns.md","filePath":"5-advanced/02b-agent-patterns.md","lastUpdated":1772014034000}'),g={name:"5-advanced/02b-agent-patterns.md"};function u(h,t,m,b,c,A){const a=l("AdInArticle");return s(),i("div",null,[t[0]||(t[0]=r("",20)),d(a),t[1]||(t[1]=r("",7)),t[2]||(t[2]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`任务来了
    ↓
步骤是否固定？
    ├─ 是 → 用 Workflow（Skill/Command）
    └─ 否 → 需要多少自主性？
              ├─ 低 → 受限 Agent（steps + 权限控制）
              └─ 高 → 完全自主 Agent`)])],-1)),t[3]||(t[3]=r("",7)),t[4]||(t[4]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`---
description: 多步骤翻译处理
mode: subagent
steps: 10
---

# 任务流程

按以下步骤执行，每步完成后再进行下一步：

## 步骤 1：直译
将原文逐句翻译成中文，保持原意。

## 步骤 2：意译润色
在直译基础上，调整为通顺的中文表达。

## 步骤 3：专业术语检查
检查专业术语是否准确，必要时保留英文。

## 步骤 4：格式化
按照目标格式（Markdown）整理输出。

# 输出要求
每个步骤都输出中间结果，最后给出最终版本。`)])],-1)),t[5]||(t[5]=r("",6)),t[6]||(t[6]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`---
description: 代码问题分类路由器
mode: subagent
---

# 角色
你是代码问题分类专家，负责将问题路由到正确的处理流程。

# 分类规则

分析用户的代码问题，判断属于以下哪一类：

1. **Bug 修复** → 调用 @bug-fixer
   - 特征：代码报错、行为不符合预期

2. **性能优化** → 调用 @performance-optimizer
   - 特征：运行慢、内存占用高

3. **安全审计** → 调用 @security-auditor
   - 特征：涉及认证、数据处理、外部输入

4. **代码重构** → 调用 @refactor-expert
   - 特征：代码可以工作但需要改进结构

5. **新功能开发** → 不路由，直接处理
   - 特征：实现新需求

# 输出格式
先说明分类理由，然后调用相应的 subagent。`)])],-1)),t[7]||(t[7]=n("p",null,[n("strong",null,"配合 Task 权限控制"),e("：")],-1)),t[8]||(t[8]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "agent": {
    "router": {
      "description": "代码问题分类路由器",
      "mode": "primary",
      "permission": {
        "task": {
          "*": "deny",
          "bug-fixer": "allow",
          "performance-optimizer": "allow",
          "security-auditor": "allow",
          "refactor-expert": "allow"
        }
      }
    }
  }
}`)])],-1)),t[9]||(t[9]=r("",8)),t[10]||(t[10]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`---
description: 代码质量并行检查器
mode: subagent
---

# 任务
对给定代码同时进行多维度检查。

# 并行任务

**同时**调用以下 subagent（使用多个 Task tool 调用）：

1. @security-auditor - 安全漏洞检查
2. @performance-reviewer - 性能分析
3. @style-checker - 代码风格检查
4. @test-coverage-analyzer - 测试覆盖分析

# 汇总规则

收集所有结果后，生成综合报告：

## 综合评分
- 安全性：X/10
- 性能：X/10
- 代码风格：X/10
- 测试覆盖：X/10
- **总分**：X/40

## 问题汇总
按严重程度排序所有发现的问题。

## 优先修复建议
给出最应该优先处理的 3 个问题。`)])],-1)),t[11]||(t[11]=r("",6)),t[12]||(t[12]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`---
description: 项目分析编排器，动态分配分析任务
mode: primary
---

# 角色
你是项目分析编排器，负责理解用户需求并协调专家团队。

# 可用专家

你可以调用以下专家（根据需要选择）：

- @architecture-analyst - 架构分析，适合"这个项目结构怎么样"
- @dependency-auditor - 依赖审计，适合"有没有过时/危险的依赖"
- @security-auditor - 安全审计，适合"有没有安全隐患"
- @performance-profiler - 性能分析，适合"哪里可能是瓶颈"
- @docs-reviewer - 文档评审，适合"文档是否完整"
- @test-analyzer - 测试分析，适合"测试覆盖是否足够"

# 工作流程

1. **理解需求**：分析用户想知道什么
2. **制定计划**：决定需要调用哪些专家，以什么顺序
3. **执行分析**：调用选定的专家
4. **整合结果**：汇总所有专家的发现
5. **给出建议**：基于整体分析给出行动建议

# 原则
- 不要过度分析，根据用户需求选择必要的专家
- 如果用户问题简单，可能不需要任何专家
- 专家的分析结果可能会触发更多分析需求`)])],-1)),t[13]||(t[13]=r("",6)),t[14]||(t[14]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`---
description: 迭代代码优化器
mode: subagent
steps: 15
---

# 角色
你是代码优化专家，通过迭代改进代码质量。

# 优化循环

执行以下循环，直到满足目标或达到步数限制：

## 1. 分析阶段
- 阅读当前代码
- 识别可优化点
- 评估当前质量分数（见评分标准）

## 2. 优化阶段
- 选择影响最大的优化点
- 实施优化
- 确保不破坏功能

## 3. 验证阶段
- 运行测试确保功能正常
- 重新评估质量分数

## 4. 决策阶段
- 如果质量分数 >= 8，停止优化
- 如果质量分数提升 < 0.5，停止（边际效益不足）
- 否则，继续下一轮

# 质量评分标准

| 分数 | 可读性 | 性能 | 安全性 | 测试覆盖 |
|------|--------|------|--------|---------|
| 9-10 | 命名清晰、注释完整 | O(n)或更优 | 无漏洞 | >90% |
| 7-8 | 命名合理、关键注释 | O(n log n) | 低风险 | 70-90% |
| 5-6 | 基本可读 | O(n²) | 中风险 | 50-70% |
| <5 | 难以理解 | O(n³)+ | 高风险 | <50% |

综合得分 = 可读性×0.3 + 性能×0.3 + 安全性×0.25 + 测试覆盖×0.15

# 输出
每轮输出：
- 本轮优化内容
- 各维度得分明细
- 质量分数变化
- 是否继续的决策理由

最终输出：
- 优化总结
- 前后对比
- 进一步优化建议（如有）

# 失败处理
- 测试失败：立即回滚本轮修改，记录失败原因，尝试其他优化方向
- 步数耗尽：输出当前最佳版本和剩余优化建议
- 无法继续优化：说明原因，给出已达到的质量水平`)])],-1)),t[15]||(t[15]=r("",7)),t[16]||(t[16]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`# 工作方式

采用 ReAct 模式：

1. **思考**：分析当前状态，决定下一步
2. **行动**：执行具体操作（调用工具）
3. **观察**：分析操作结果
4. **重复**：直到任务完成`)])],-1)),t[17]||(t[17]=r("",11)),t[18]||(t[18]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`用户输入 API 文档
       ↓
   @doc-parser（解析文档结构）
       ↓
   @translator-zh（翻译成中文）
   @translator-ja（翻译成日文）  ← 并行
   @translator-ko（翻译成韩文）
       ↓
   @doc-formatter（格式化输出）
       ↓
   多语言文档`)])],-1)),t[19]||(t[19]=n("h3",{id:"配置文件",tabindex:"-1"},[e("配置文件 "),n("a",{class:"header-anchor",href:"#配置文件","aria-label":"Permalink to “配置文件”"},"​")],-1)),t[20]||(t[20]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`// opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "doc-generator": {
      "description": "多语言文档生成编排器",
      "mode": "primary",
      "prompt": "{file:./prompts/doc-generator.md}",
      "permission": {
        "task": {
          "*": "deny",
          "doc-parser": "allow",
          "translator-*": "allow",
          "doc-formatter": "allow"
        }
      }
    },
    "doc-parser": {
      "description": "解析 API 文档结构，提取可翻译内容",
      "mode": "subagent",
      "temperature": 0.1
    },
    "translator-zh": {
      "description": "英译中专家，保持技术术语准确",
      "mode": "subagent",
      "temperature": 0.3
    },
    "translator-ja": {
      "description": "英译日专家",
      "mode": "subagent",
      "temperature": 0.3
    },
    "translator-ko": {
      "description": "英译韩专家",
      "mode": "subagent",
      "temperature": 0.3
    },
    "doc-formatter": {
      "description": "文档格式化，确保多语言版本格式一致",
      "mode": "subagent",
      "temperature": 0.1
    }
  }
}`)])],-1)),t[21]||(t[21]=n("h3",{id:"编排器-prompt",tabindex:"-1"},[e("编排器 Prompt "),n("a",{class:"header-anchor",href:"#编排器-prompt","aria-label":"Permalink to “编排器 Prompt”"},"​")],-1)),t[22]||(t[22]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`<!-- prompts/doc-generator.md -->
---
description: 多语言文档生成编排器
mode: primary
---

# 角色
你是多语言文档生成系统的编排器。

# 工作流程

## 1. 解析阶段
调用 @doc-parser 分析输入文档：
- 提取标题、描述、参数、返回值等结构
- 标记哪些内容需要翻译
- 哪些内容保持原样（如代码示例）

## 2. 翻译阶段
**并行**调用翻译专家：
- @translator-zh：翻译成中文
- @translator-ja：翻译成日文
- @translator-ko：翻译成韩文

告诉每个翻译专家：
- 文档结构
- 需要翻译的内容
- 术语表（如有）

## 3. 格式化阶段
调用 @doc-formatter：
- 将各语言版本整合
- 确保格式一致
- 生成最终输出

# 输出格式
生成包含所有语言版本的目录结构建议。`)])],-1)),t[23]||(t[23]=n("hr",null,null,-1)),t[24]||(t[24]=n("h2",{id:"实战案例-2-代码审计流水线",tabindex:"-1"},[e("实战案例 2：代码审计流水线 "),n("a",{class:"header-anchor",href:"#实战案例-2-代码审计流水线","aria-label":"Permalink to “实战案例 2：代码审计流水线”"},"​")],-1)),t[25]||(t[25]=n("p",null,[n("strong",null,"需求"),e("：对 PR 进行全方位代码审计。")],-1)),t[26]||(t[26]=n("h3",{id:"系统设计-1",tabindex:"-1"},[e("系统设计 "),n("a",{class:"header-anchor",href:"#系统设计-1","aria-label":"Permalink to “系统设计”"},"​")],-1)),t[27]||(t[27]=n("p",null,[e("采用 "),n("strong",null,"Parallelization + Orchestrator-Workers"),e(" 混合模式。")],-1)),t[28]||(t[28]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`PR 代码变更
       ↓
   @audit-coordinator（协调器）
       ↓
   ┌──────────────────────────────────┐
   │  并行执行（Sectioning）          │
   │  @security-auditor              │
   │  @performance-auditor           │
   │  @quality-auditor               │
   │  @test-auditor                  │
   └──────────────────────────────────┘
       ↓
   汇总所有发现
       ↓
   @report-generator（生成报告）
       ↓
   审计报告`)])],-1)),t[29]||(t[29]=n("h3",{id:"配置文件-1",tabindex:"-1"},[e("配置文件 "),n("a",{class:"header-anchor",href:"#配置文件-1","aria-label":"Permalink to “配置文件”"},"​")],-1)),t[30]||(t[30]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "audit-coordinator": {
      "description": "代码审计协调器，编排多维度审计",
      "mode": "subagent",
      "model": "anthropic/claude-opus-4-5-thinking",
      "prompt": "{file:./prompts/audit-coordinator.md}",
      "steps": 50
    },
    "security-auditor": {
      "description": "安全漏洞审计：注入、认证、数据泄露",
      "mode": "subagent",
      "temperature": 0.1,
      "prompt": "{file:./prompts/security-auditor.md}",
      "permission": {
        "edit": "deny"
      }
    },
    "performance-auditor": {
      "description": "性能审计：复杂度、内存、并发",
      "mode": "subagent",
      "temperature": 0.1,
      "permission": {
        "edit": "deny"
      }
    },
    "quality-auditor": {
      "description": "代码质量审计：可读性、SOLID、重复代码",
      "mode": "subagent",
      "temperature": 0.2,
      "permission": {
        "edit": "deny"
      }
    },
    "test-auditor": {
      "description": "测试审计：覆盖率、边界情况、Mock 质量",
      "mode": "subagent",
      "temperature": 0.1,
      "permission": {
        "edit": "deny",
        "bash": {
          "*": "deny",
          "npm test*": "allow",
          "npm run test*": "allow"
        }
      }
    },
    "report-generator": {
      "description": "生成结构化审计报告",
      "mode": "subagent",
      "temperature": 0.2
    }
  }
}`)])],-1)),t[31]||(t[31]=n("h3",{id:"协调器-prompt",tabindex:"-1"},[e("协调器 Prompt "),n("a",{class:"header-anchor",href:"#协调器-prompt","aria-label":"Permalink to “协调器 Prompt”"},"​")],-1)),t[32]||(t[32]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`<!-- prompts/audit-coordinator.md -->
# 代码审计协调器

## 职责
协调多个专业审计 Agent，对代码变更进行全方位审计。

## 审计流程

### 1. 变更分析
首先分析本次变更：
- 涉及哪些文件
- 变更类型（新功能/Bug修复/重构）
- 变更规模

### 2. 审计任务分配
**并行**调用以下审计专家：

| 专家 | 关注点 |
|------|--------|
| @security-auditor | SQL注入、XSS、认证绕过、敏感数据 |
| @performance-auditor | O(n²)复杂度、内存泄漏、N+1查询 |
| @quality-auditor | 命名、函数长度、重复代码、SOLID |
| @test-auditor | 测试覆盖、边界情况、Mock质量 |

### 3. 结果汇总
收集所有审计结果：

**严重程度定义**：
| 等级 | 定义 | 示例 |
|------|------|------|
| Critical | 可被远程利用、数据泄露风险 | SQL注入、硬编码密钥 |
| High | 需登录才能利用、功能缺陷 | 认证绕过、资源泄漏 |
| Medium | 需特定条件触发 | 边界条件未处理 |
| Low | 代码风格、轻微性能 | 命名不规范 |

**冲突处理**：
- 同一行代码被多个审计发现 → 保留最高严重程度
- 相互矛盾的建议 → 标记为"需人工复核"
- 误报识别 → 如果 2+ 审计者认为无问题则降级

### 4. 报告生成
调用 @report-generator 生成最终报告：
- 执行摘要
- 详细发现
- 修复建议
- 风险评估

## 失败处理
- 某审计 Agent 超时：记录并继续，在报告中标注"部分审计未完成"
- 某审计 Agent 报错：重试一次，仍失败则跳过并记录
- 无变更可审计：直接返回"无需审计"

## 输出
最终输出结构化审计报告。`)])],-1)),t[33]||(t[33]=r("",18))])}const _=o(g,[["render",u]]);export{f as __pageData,_ as default};
