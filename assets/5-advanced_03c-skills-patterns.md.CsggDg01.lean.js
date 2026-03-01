import{_ as a,c as s,o,a5 as e,j as l,a as n,b2 as i}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"5.3c Skill 高级模式","description":"学习 Skill 与 MCP 协作模式、五种工作流模式、分发共享策略，打造企业级专业知识包。","frontmatter":{"title":"5.3c Skill 高级模式","subtitle":"与 MCP 协作、工作流模式与分发共享","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.3c","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"学习 Skill 与 MCP 协作模式、五种工作流模式、分发共享策略，打造企业级专业知识包。","tags":["Skill","MCP","工作流模式","分发共享"],"prerequisite":["5.3b Skill 进阶","5.7a MCP 基础"]},"headers":[],"relativePath":"5-advanced/03c-skills-patterns.md","filePath":"5-advanced/03c-skills-patterns.md","lastUpdated":1772014034000}'),r={name:"5-advanced/03c-skills-patterns.md"};function d(c,t,p,h,u,k){return o(),s("div",null,[...t[0]||(t[0]=[e("",11),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`场景 1：公司有 5 个 MCP 服务（Notion、Linear、Slack、Drive、GitHub）

用户：帮我创建一个新项目

AI：[调用了 Notion MCP，但没有创建 Linear 任务，也没有通知 Slack]`)])],-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`场景 2：Skill 只能做单步操作

用户：帮我生成报告并自动优化直到质量达标

AI：我只能生成报告，"优化"是什么意思？`)])],-1),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`场景 3：团队想共享 Skill

开发者 A：我把 Skill 放到 GitHub 了
开发者 B：我怎么用？每次都要手动下载吗？`)])],-1),e("",11),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────────┘`)])],-1),e("",13),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
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
3. 通知管理员`)])],-1),e("",6),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
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
2. 包含资源链接和任务引用`)])],-1),e("",6),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
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
3. 保存最终版本`)])],-1),e("",6),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
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

解释为什么选择了那个存储位置`)])],-1),e("",6),l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
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
- 生成审计报告`)])],-1),e("",7),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────────┘`)])],-1),e("",5),l("div",{class:"language-jsonc"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"jsonc"),l("pre",null,[l("code",{"v-pre":""},`{
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
    └── SKILL.md`)])],-1),e("",7),l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`my-skills/
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
git pull`)])],-1),e("",18),l("details",null,[l("summary",null,[l("strong",null,"点击展开查看源码位置")]),l("blockquote",null,[l("p",null,"更新时间：2026-02-14")]),l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"功能"),l("th",null,"文件路径"),l("th",null,"行号")])]),l("tbody",null,[l("tr",null,[l("td",null,"Skill 加载与发现"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L52-L175",target:"_blank",rel:"noreferrer"},[l("code",null,"src/skill/skill.ts")])]),l("td",null,"52-175")]),l("tr",null,[l("td",null,"Skill Info Schema"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L18-L24",target:"_blank",rel:"noreferrer"},[l("code",null,"src/skill/skill.ts")])]),l("td",null,"18-24")]),l("tr",null,[l("td",null,"外部 Skill 目录扫描"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/skill.ts#L90-L122",target:"_blank",rel:"noreferrer"},[l("code",null,"src/skill/skill.ts")])]),l("td",null,"90-122")]),l("tr",null,[l("td",null,"远程 Skill 下载"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/skill/discovery.ts#L38-L96",target:"_blank",rel:"noreferrer"},[l("code",null,"src/skill/discovery.ts")])]),l("td",null,"38-96")]),l("tr",null,[l("td",null,"Skill URL 配置"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/config/config.ts#L664-L668",target:"_blank",rel:"noreferrer"},[l("code",null,"src/config/config.ts")])]),l("td",null,"664-668")]),l("tr",null,[l("td",null,"MCP 连接管理"),l("td",null,[l("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/mcp/index.ts",target:"_blank",rel:"noreferrer"},[l("code",null,"src/mcp/index.ts")])]),l("td",null,"全文件")])])]),l("p",null,[l("strong",null,"关键常量"),n("：")]),l("ul",null,[l("li",null,[l("code",null,'EXTERNAL_DIRS = [".claude", ".agents"]'),n("：外部 Skill 搜索目录")]),l("li",null,[l("code",null,'OPENCODE_SKILL_GLOB = "{skill,skills}/**/SKILL.md"'),n("：Skill 文件匹配模式")])]),l("p",null,[l("strong",null,"关键函数"),n("：")]),l("ul",null,[l("li",null,[l("code",null,"Skill.state()"),n("：扫描并加载所有 Skill（包含外部目录扫描逻辑）")]),l("li",null,[l("code",null,"Skill.get(name)"),n("：获取指定 Skill")]),l("li",null,[l("code",null,"Skill.all()"),n("：获取所有 Skill 列表")]),l("li",null,[l("code",null,"Skill.dirs()"),n("：获取所有 Skill 目录")]),l("li",null,[l("code",null,"Discovery.pull(url)"),n("：从远程 URL 下载 Skill")])]),l("p",null,[l("strong",null,"配置 Schema"),n("：")]),l("div",{class:"language-typescript"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"typescript"),l("pre",null,[l("code",{"v-pre":""},`skills: {
  paths: string[]    // 额外的 Skill 目录路径
  urls: string[]     // 远程 Skill 索引 URL
}`)])])],-1)])])}const b=a(r,[["render",d]]);export{_ as __pageData,b as default};
