import{_ as a,c as s,o,a5 as e,j as l,a as n,b2 as i}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"5.3c Skill 高级模式","description":"学习 Skill 与 MCP 协作模式、五种工作流模式、分发共享策略，打造企业级专业知识包。","frontmatter":{"title":"5.3c Skill 高级模式","subtitle":"与 MCP 协作、工作流模式与分发共享","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.3c","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"学习 Skill 与 MCP 协作模式、五种工作流模式、分发共享策略，打造企业级专业知识包。","tags":["Skill","MCP","工作流模式","分发共享"],"prerequisite":["5.3b Skill 进阶","5.7a MCP 基础"]},"headers":[],"relativePath":"5-advanced/03c-skills-patterns.md","filePath":"5-advanced/03c-skills-patterns.md","lastUpdated":1772014034000}'),r={name:"5-advanced/03c-skills-patterns.md"};function d(c,t,p,h,u,k){return o(),s("div",null,[...t[0]||(t[0]=[e('<h1 id="_5-3c-skill-高级模式" tabindex="-1">5.3c Skill 高级模式 <a class="header-anchor" href="#_5-3c-skill-高级模式" aria-label="Permalink to “5.3c Skill 高级模式”">​</a></h1><blockquote><p>本课深入 Skill 的高级应用：与 MCP 协作、五种工作流模式、分发共享策略，帮你打造企业级专业知识包。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+i+'" alt="Skill 高级模式学霸笔记" data-zoom-src="/images/5-advanced/skills-patterns-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解 Skill 与 MCP 的协作关系（厨房 vs 菜谱）</li><li>设计五种工作流模式：顺序编排、多 MCP 协调、迭代优化、上下文选择、领域智能</li><li>根据用例分类选择合适的 Skill 设计策略</li><li>通过 GitHub 和 API 分发共享 Skill</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><p>你已经学会了创建 Skill，但在实际使用中遇到这些问题：</p>',11),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`场景 1：公司有 5 个 MCP 服务（Notion、Linear、Slack、Drive、GitHub）

用户：帮我创建一个新项目

AI：[调用了 Notion MCP，但没有创建 Linear 任务，也没有通知 Slack]`)])],-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`场景 2：Skill 只能做单步操作

用户：帮我生成报告并自动优化直到质量达标

AI：我只能生成报告，"优化"是什么意思？`)])],-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`场景 3：团队想共享 Skill

开发者 A：我把 Skill 放到 GitHub 了
开发者 B：我怎么用？每次都要手动下载吗？`)])],-1),e('<p><strong>问题根源</strong>：Skill 不仅是「知识包」，更是「工作流编排器」。你需要理解它如何与 MCP 协作，以及如何设计复杂的工作流模式。</p><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>你有多个 MCP 服务，需要协调它们完成复杂任务</li><li>你需要设计多步骤、可迭代的工作流</li><li>你想把 Skill 分享给团队或社区</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><ul><li>[ ] 完成了 <a href="./03b-skills-advanced.html">5.3b Skill 进阶</a></li><li>[ ] 了解了 <a href="./07a-mcp-basics.html">5.7a MCP 基础</a></li><li>[ ] 有一个可用的 MCP 服务（用于实践）</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="skill-mcp-厨房与菜谱" tabindex="-1">Skill + MCP：厨房与菜谱 <a class="header-anchor" href="#skill-mcp-厨房与菜谱" aria-label="Permalink to “Skill + MCP：厨房与菜谱”">​</a></h3><p>把 MCP 和 Skill 的关系想象成一个专业厨房：</p>',11),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────┐
│                         专业厨房 (MCP)                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ 炉灶     │  │ 冰箱     │  │ 刀具     │  │ 调料架   │            │
│  │ (工具)   │  │ (数据)   │  │ (操作)   │  │ (资源)   │            │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                         菜谱 (Skill)                                │
│                                                                     │
│  「宫保鸡丁」                                                       │
│  1. 从冰箱取出鸡肉 200g                                             │
│  2. 用刀具切丁                                                      │
│  3. 炉灶开大火，倒油...                                             │
│  4. 加入调料：花椒、干辣椒...                                       │
└─────────────────────────────────────────────────────────────────────┘`)])],-1),e('<p><strong>MCP 提供</strong>：</p><ul><li>连接到各种服务（Notion、Linear、GitHub...）</li><li>实时数据访问</li><li>工具调用能力</li></ul><p><strong>Skill 提供</strong>：</p><ul><li>如何使用这些工具的最佳实践</li><li>多步骤工作流编排</li><li>领域专业知识</li></ul><p><strong>没有 Skill 的 MCP</strong> 就像「有厨房没菜谱」——用户知道有什么工具，但不知道怎么组合使用。</p><h3 id="三种用例分类" tabindex="-1">三种用例分类 <a class="header-anchor" href="#三种用例分类" aria-label="Permalink to “三种用例分类”">​</a></h3><p>根据实践经验，Skill 主要有三种用例：</p><table tabindex="0"><thead><tr><th>分类</th><th>特点</th><th>Skill 重点</th></tr></thead><tbody><tr><td><strong>1. 文档/资产创建</strong></td><td>输出质量优先</td><td>嵌入风格指南、模板、质量检查清单</td></tr><tr><td><strong>2. 工作流自动化</strong></td><td>多步骤一致性</td><td>步骤定义、验证关卡、错误处理</td></tr><tr><td><strong>3. MCP 增强</strong></td><td>工具使用优化</td><td>协调 MCP 调用、嵌入领域知识</td></tr></tbody></table><hr><h2 id="五种工作流模式" tabindex="-1">五种工作流模式 <a class="header-anchor" href="#五种工作流模式" aria-label="Permalink to “五种工作流模式”">​</a></h2><h3 id="模式-1-顺序工作流编排" tabindex="-1">模式 1：顺序工作流编排 <a class="header-anchor" href="#模式-1-顺序工作流编排" aria-label="Permalink to “模式 1：顺序工作流编排”">​</a></h3><p><strong>适用场景</strong>：需要按固定顺序执行的多步骤流程</p><p><strong>结构示例</strong>：</p>',13),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
name: customer-onboarding
description: 端到端客户入职工作流。处理账户创建、支付设置、订阅管理。
  当用户说"入职新客户"、"设置订阅"、"创建账户"时使用。
---

# 客户入职工作流

## 步骤 1：创建账户
调用 MCP 工具：\`create_customer\`
参数：name, email, company

## 步骤 2：设置支付
调用 MCP 工具：\`setup_payment_method\`
等待：支付方式验证

## 步骤 3：创建订阅
调用 MCP 工具：\`create_subscription\`
参数：plan_id, customer_id（来自步骤 1）

## 步骤 4：发送欢迎邮件
调用 MCP 工具：\`send_email\`
模板：welcome_email_template

## 失败回滚
如果任何步骤失败：
1. 记录失败原因
2. 回滚已创建的资源
3. 通知管理员`)])],-1),e('<p><strong>关键技巧</strong>：</p><ul><li>明确步骤顺序</li><li>定义步骤间的依赖（步骤 3 需要步骤 1 的输出）</li><li>提供失败回滚指令</li></ul><hr><h3 id="模式-2-多-mcp-协调" tabindex="-1">模式 2：多 MCP 协调 <a class="header-anchor" href="#模式-2-多-mcp-协调" aria-label="Permalink to “模式 2：多 MCP 协调”">​</a></h3><p><strong>适用场景</strong>：工作流跨多个服务</p><p><strong>结构示例</strong>：设计到开发交接</p>',6),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
name: design-to-dev
description: 从设计文件生成开发任务。当用户提到"设计交接"、"Figma 转任务"时使用。
---

# 设计到开发交接

## 阶段 1：设计导出 (Figma MCP)

1. 从 Figma 导出设计资源
2. 生成设计规格文档
3. 创建资源清单

## 阶段 2：资源存储 (Drive MCP)

1. 在 Drive 创建项目文件夹
2. 上传所有资源
3. 生成分享链接

## 阶段 3：任务创建 (Linear MCP)

1. 创建开发任务
2. 附加资源链接到任务
3. 分配给工程团队

## 阶段 4：通知 (Slack MCP)

1. 在 #engineering 发布交接摘要
2. 包含资源链接和任务引用`)])],-1),e('<p><strong>关键技巧</strong>：</p><ul><li>清晰的阶段划分</li><li>定义阶段间的数据传递</li><li>进入下一阶段前验证</li></ul><hr><h3 id="模式-3-迭代优化" tabindex="-1">模式 3：迭代优化 <a class="header-anchor" href="#模式-3-迭代优化" aria-label="Permalink to “模式 3：迭代优化”">​</a></h3><p><strong>适用场景</strong>：输出质量需要多次改进</p><p><strong>结构示例</strong>：报告生成</p>',6),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
name: report-generator
description: 生成高质量报告，自动迭代优化直到达标。
---

# 迭代报告生成

## 初始草稿

1. 通过 MCP 获取数据
2. 生成初版报告
3. 保存到临时文件

## 质量检查

运行验证脚本：\`scripts/check_report.py\`
检查项：
- 缺失章节
- 格式不一致
- 数据验证错误

## 优化循环
`)])],-1),l("p",null,"WHILE 质量未达标: 1. 修复已识别的问题 2. 重新生成受影响的章节 3. 再次验证",-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`
## 最终定稿

1. 应用最终格式
2. 生成摘要
3. 保存最终版本`)])],-1),e('<p><strong>关键技巧</strong>：</p><ul><li>明确的质量标准</li><li>迭代改进循环</li><li>知道何时停止迭代</li></ul><hr><h3 id="模式-4-上下文感知工具选择" tabindex="-1">模式 4：上下文感知工具选择 <a class="header-anchor" href="#模式-4-上下文感知工具选择" aria-label="Permalink to “模式 4：上下文感知工具选择”">​</a></h3><p><strong>适用场景</strong>：同一目标，根据上下文选择不同工具</p><p><strong>结构示例</strong>：智能文件存储</p>',6),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
name: smart-storage
description: 根据文件类型和用途自动选择最佳存储位置。
---

# 智能文件存储

## 决策树

1. 检查文件类型和大小
2. 确定最佳存储位置：
   - 大文件 (>10MB) → 云存储 MCP
   - 协作文档 → Notion/Docs MCP
   - 代码文件 → GitHub MCP
   - 临时文件 → 本地存储

## 执行存储

根据决策：
- 调用对应的 MCP 工具
- 应用服务特定的元数据
- 生成访问链接

## 用户反馈

解释为什么选择了那个存储位置`)])],-1),e('<p><strong>关键技巧</strong>：</p><ul><li>清晰的决策标准</li><li>提供备选方案</li><li>对用户透明（解释选择原因）</li></ul><hr><h3 id="模式-5-领域智能" tabindex="-1">模式 5：领域智能 <a class="header-anchor" href="#模式-5-领域智能" aria-label="Permalink to “模式 5：领域智能”">​</a></h3><p><strong>适用场景</strong>：Skill 提供超越工具访问的专业知识</p><p><strong>结构示例</strong>：金融合规</p>',6),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
name: payment-compliance
description: 带合规检查的支付处理。当处理跨境支付、大额交易时使用。
---

# 合规支付处理

## 处理前（合规检查）

1. 通过 MCP 获取交易详情
2. 应用合规规则：
   - 检查制裁名单
   - 验证管辖区允许
   - 评估风险等级
3. 记录合规决策

## 处理

IF 合规通过:
    - 调用支付处理 MCP 工具
    - 应用适当的欺诈检查
    - 处理交易
ELSE:
    - 标记为人工审核
    - 创建合规案例

## 审计追踪

- 记录所有合规检查
- 记录处理决策
- 生成审计报告`)])],-1),e('<p><strong>关键技巧</strong>：</p><ul><li>在行动前嵌入领域知识</li><li>合规优先于操作</li><li>完整的文档记录</li></ul><hr><h2 id="分发与共享" tabindex="-1">分发与共享 <a class="header-anchor" href="#分发与共享" aria-label="Permalink to “分发与共享”">​</a></h2><p>OpenCode 提供多种 Skill 分发方式，从本地到远程都有支持。</p><h3 id="opencode-skill-搜索路径" tabindex="-1">OpenCode Skill 搜索路径 <a class="header-anchor" href="#opencode-skill-搜索路径" aria-label="Permalink to “OpenCode Skill 搜索路径”">​</a></h3><p>OpenCode 会按以下顺序搜索 Skill：</p>',7),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────┐
│ 搜索优先级（后加载的覆盖先加载的）                                    │
├─────────────────────────────────────────────────────────────────────┤
│ 1. 全局外部目录                                                      │
│    ~/.claude/skills/**/SKILL.md                                     │
│    ~/.agents/skills/**/SKILL.md                                     │
├─────────────────────────────────────────────────────────────────────┤
│ 2. 项目外部目录（从当前目录向上遍历到 git 根目录）                     │
│    .claude/skills/**/SKILL.md                                       │
│    .agents/skills/**/SKILL.md                                       │
├─────────────────────────────────────────────────────────────────────┤
│ 3. OpenCode 配置目录                                                 │
│    ~/.config/opencode/skill/**/SKILL.md                             │
│    .opencode/skill/**/SKILL.md                                      │
├─────────────────────────────────────────────────────────────────────┤
│ 4. 配置文件指定的额外路径 (skills.paths)                              │
├─────────────────────────────────────────────────────────────────────┤
│ 5. 远程 URL 下载 (skills.urls)                                       │
│    缓存到 ~/.cache/opencode/skills/                                 │
└─────────────────────────────────────────────────────────────────────┘`)])],-1),e('<h3 id="方式-1-本地目录放置" tabindex="-1">方式 1：本地目录放置 <a class="header-anchor" href="#方式-1-本地目录放置" aria-label="Permalink to “方式 1：本地目录放置”">​</a></h3><p>最简单的方式是直接放入标准目录：</p><table tabindex="0"><thead><tr><th>目录</th><th>作用范围</th><th>说明</th></tr></thead><tbody><tr><td><code>.opencode/skill/&lt;name&gt;/SKILL.md</code></td><td>当前项目</td><td>项目专属</td></tr><tr><td><code>~/.config/opencode/skill/&lt;name&gt;/SKILL.md</code></td><td>全局</td><td>所有项目可用</td></tr></tbody></table><h3 id="方式-2-配置额外路径" tabindex="-1">方式 2：配置额外路径 <a class="header-anchor" href="#方式-2-配置额外路径" aria-label="Permalink to “方式 2：配置额外路径”">​</a></h3><p>在 <code>opencode.json</code> 中指定额外的 Skill 目录：</p>',5),l("div",{class:"language-jsonc"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"jsonc"),l("pre",null,[l("code",{"v-pre":""},`{
  "skills": {
    "paths": [
      "~/my-skills",                    // 绝对路径（~ 展开为用户目录）
      "../shared-skills",               // 相对于项目目录
      "/opt/company-skills"             // 绝对路径
    ]
  }
}`)])],-1),l("p",null,[l("strong",null,"适用场景"),n("：")],-1),l("ul",null,[l("li",null,"团队共享 Skill 库（放在 NAS 或共享目录）"),l("li",null,"多项目复用同一套 Skill")],-1),l("h3",{id:"方式-3-远程-url-发现-推荐用于团队-社区",tabindex:"-1"},[n("方式 3：远程 URL 发现（推荐用于团队/社区） "),l("a",{class:"header-anchor",href:"#方式-3-远程-url-发现-推荐用于团队-社区","aria-label":"Permalink to “方式 3：远程 URL 发现（推荐用于团队/社区）”"},"​")],-1),l("p",null,"OpenCode 支持从远程服务器自动下载 Skill：",-1),l("p",null,[l("strong",null,"配置方式"),n("：")],-1),l("div",{class:"language-jsonc"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"jsonc"),l("pre",null,[l("code",{"v-pre":""},`{
  "skills": {
    "urls": [
      "https://your-company.com/.well-known/skills/",
      "https://skills.example.com/index.json"
    ]
  }
}`)])],-1),l("p",null,[l("strong",null,"服务器端需要提供的 index.json 格式"),n("：")],-1),l("div",{class:"language-json"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"json"),l("pre",null,[l("code",{"v-pre":""},`{
  "skills": [
    {
      "name": "project-setup",
      "description": "项目初始化工作流",
      "files": [
        "SKILL.md",
        "references/templates.md",
        "references/checklist.md"
      ]
    },
    {
      "name": "code-review",
      "description": "代码审查助手",
      "files": [
        "SKILL.md"
      ]
    }
  ]
}`)])],-1),l("p",null,[l("strong",null,"服务器目录结构"),n("：")],-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`https://your-company.com/.well-known/skills/
├── index.json              # Skill 索引
├── project-setup/
│   ├── SKILL.md
│   └── references/
│       ├── templates.md
│       └── checklist.md
└── code-review/
    └── SKILL.md`)])],-1),e('<p>OpenCode 会：</p><ol><li>获取 <code>index.json</code></li><li>下载每个 Skill 的文件</li><li>缓存到 <code>~/.cache/opencode/skills/</code></li></ol><p><strong>适用场景</strong>：</p><ul><li>企业内部 Skill 库</li><li>开源社区 Skill 分发</li><li>定期更新的 Skill 集合</li></ul><h3 id="方式-4-git-仓库共享" tabindex="-1">方式 4：Git 仓库共享 <a class="header-anchor" href="#方式-4-git-仓库共享" aria-label="Permalink to “方式 4：Git 仓库共享”">​</a></h3><p>结合 Git 仓库和额外路径配置：</p><p><strong>步骤 1</strong>：创建 Skill 仓库</p>',7),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`my-skills/
├── README.md               # 给人类看的说明
├── skills/
│   ├── project-setup/
│   │   └── SKILL.md
│   └── code-review/
│       └── SKILL.md
└── examples/
    └── screenshots/`)])],-1),l("p",null,[l("strong",null,"步骤 2"),n("：团队成员克隆并配置")],-1),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`# 克隆到固定位置
git clone https://github.com/yourcompany/opencode-skills.git ~/opencode-skills

# 在项目 opencode.json 中引用`)])],-1),l("div",{class:"language-jsonc"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"jsonc"),l("pre",null,[l("code",{"v-pre":""},`{
  "skills": {
    "paths": ["~/opencode-skills/skills"]
  }
}`)])],-1),l("p",null,[l("strong",null,"步骤 3"),n("：更新 Skill")],-1),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},`cd ~/opencode-skills
git pull`)])],-1),e('<h3 id="分发方式对比" tabindex="-1">分发方式对比 <a class="header-anchor" href="#分发方式对比" aria-label="Permalink to “分发方式对比”">​</a></h3><table tabindex="0"><thead><tr><th>方式</th><th>适用场景</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td><strong>本地目录</strong></td><td>个人使用</td><td>简单直接</td><td>不便于共享</td></tr><tr><td><strong>额外路径</strong></td><td>团队共享（NAS）</td><td>一次配置多处使用</td><td>需要文件系统共享</td></tr><tr><td><strong>远程 URL</strong></td><td>企业/社区</td><td>自动更新、版本管理</td><td>需要搭建服务器</td></tr><tr><td><strong>Git 仓库</strong></td><td>开源/团队</td><td>版本控制、协作方便</td><td>需要手动 pull 更新</td></tr></tbody></table><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>远程 Skill 下载失败</td><td>index.json 格式错误</td><td>检查 JSON 格式和 files 数组</td></tr><tr><td>Skill 不显示</td><td>路径配置错误</td><td>检查 <code>skills.paths</code> 是否正确展开</td></tr><tr><td>同名 Skill 冲突</td><td>多处定义同名</td><td>后加载的覆盖，检查日志警告</td></tr><tr><td>MCP 调用失败但 Skill 加载了</td><td>MCP 服务未连接</td><td>检查 <code>opencode.json</code> 中的 MCP 配置</td></tr><tr><td>多个 MCP 调用顺序混乱</td><td>没有明确步骤编号</td><td>用「步骤 1/2/3」明确定义顺序</td></tr><tr><td>迭代优化无限循环</td><td>缺少终止条件</td><td>添加「最多迭代 N 次」或质量阈值</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>Skill + MCP 协作</strong>：MCP 是厨房（提供工具），Skill 是菜谱（指导使用）</li><li><strong>三种用例分类</strong>：文档创建、工作流自动化、MCP 增强</li><li><strong>五种工作流模式</strong>： <ul><li>顺序编排：固定步骤，依赖传递</li><li>多 MCP 协调：跨服务编排，阶段划分</li><li>迭代优化：质量循环，终止条件</li><li>上下文选择：决策树，透明选择</li><li>领域智能：合规优先，审计追踪</li></ul></li><li><strong>OpenCode 分发方式</strong>：本地目录、额外路径、远程 URL、Git 仓库</li></ol><hr><h2 id="延伸阅读" tabindex="-1">延伸阅读 <a class="header-anchor" href="#延伸阅读" aria-label="Permalink to “延伸阅读”">​</a></h2><ul><li><a href="https://github.com/anomalyco/opencode/tree/dev/packages/opencode/src/skill" target="_blank" rel="noreferrer">OpenCode Skill 源码</a></li><li><a href="https://github.com/anomalyco/opencode/blob/dev/packages/docs/mcp.mdx" target="_blank" rel="noreferrer">OpenCode MCP 文档</a></li></ul><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习快捷命令，一键触发常用任务。</p></blockquote><p><a href="./04-commands.html">继续学习：5.4 快捷命令</a></p><hr><h2 id="附录-源码参考" tabindex="-1">附录：源码参考 <a class="header-anchor" href="#附录-源码参考" aria-label="Permalink to “附录：源码参考”">​</a></h2>',18),l("details",null,[l("summary",null,[l("strong",null,"点击展开查看源码位置")]),l("blockquote",null,[l("p",null,"更新时间：2026-02-14")]),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"功能"),l("th",null,"文件路径"),l("th",null,"行号")])]),l("tbody",null,[l("tr",null,[l("td",null,"Skill 加载与发现"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L52-L175",target:"_blank",rel:"noreferrer"},[l("code",null,"src/skill/skill.ts")])]),l("td",null,"52-175")]),l("tr",null,[l("td",null,"Skill Info Schema"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L18-L24",target:"_blank",rel:"noreferrer"},[l("code",null,"src/skill/skill.ts")])]),l("td",null,"18-24")]),l("tr",null,[l("td",null,"外部 Skill 目录扫描"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L90-L122",target:"_blank",rel:"noreferrer"},[l("code",null,"src/skill/skill.ts")])]),l("td",null,"90-122")]),l("tr",null,[l("td",null,"远程 Skill 下载"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/discovery.ts#L38-L96",target:"_blank",rel:"noreferrer"},[l("code",null,"src/skill/discovery.ts")])]),l("td",null,"38-96")]),l("tr",null,[l("td",null,"Skill URL 配置"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L664-L668",target:"_blank",rel:"noreferrer"},[l("code",null,"src/config/config.ts")])]),l("td",null,"664-668")]),l("tr",null,[l("td",null,"MCP 连接管理"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/mcp/index.ts",target:"_blank",rel:"noreferrer"},[l("code",null,"src/mcp/index.ts")])]),l("td",null,"全文件")])])]),l("p",null,[l("strong",null,"关键常量"),n("：")]),l("ul",null,[l("li",null,[l("code",null,'EXTERNAL_DIRS = [".claude", ".agents"]'),n("：外部 Skill 搜索目录")]),l("li",null,[l("code",null,'OPENCODE_SKILL_GLOB = "{skill,skills}/**/SKILL.md"'),n("：Skill 文件匹配模式")])]),l("p",null,[l("strong",null,"关键函数"),n("：")]),l("ul",null,[l("li",null,[l("code",null,"Skill.state()"),n("：扫描并加载所有 Skill（包含外部目录扫描逻辑）")]),l("li",null,[l("code",null,"Skill.get(name)"),n("：获取指定 Skill")]),l("li",null,[l("code",null,"Skill.all()"),n("：获取所有 Skill 列表")]),l("li",null,[l("code",null,"Skill.dirs()"),n("：获取所有 Skill 目录")]),l("li",null,[l("code",null,"Discovery.pull(url)"),n("：从远程 URL 下载 Skill")])]),l("p",null,[l("strong",null,"配置 Schema"),n("：")]),l("div",{class:"language-typescript"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"typescript"),l("pre",null,[l("code",{"v-pre":""},`skills: {
  paths: string[]    // 额外的 Skill 目录路径
  urls: string[]     // 远程 Skill 索引 URL
}`)])])],-1)])])}const b=a(r,[["render",d]]);export{_ as __pageData,b as default};
