import{_ as s,I as d,c as o,o as i,a5 as e,j as l,J as r,a as t,b0 as p}from"./chunks/framework.Dtwt352Q.js";const v=JSON.parse('{"title":"5.3a Skill 基础","description":"学习 Skill 基础，封装可复用的专业知识，让 Agent 按需加载，提升 AI 能力。","frontmatter":{"title":"5.3a Skill 基础","subtitle":"封装可复用的专业知识","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.3a","duration":"20 分钟","practice":"25 分钟","level":"进阶","description":"学习 Skill 基础，封装可复用的专业知识，让 Agent 按需加载，提升 AI 能力。","tags":["Skill","渐进式披露"],"prerequisite":["5.2 自定义 Agent"]},"headers":[],"relativePath":"5-advanced/03a-skills-basics.md","filePath":"5-advanced/03a-skills-basics.md","lastUpdated":1772014034000}'),u={name:"5-advanced/03a-skills-basics.md"};function g(k,n,m,b,C,S){const a=d("AdInArticle");return i(),o("div",null,[n[0]||(n[0]=e('<h1 id="_5-3a-skill-基础" tabindex="-1">5.3a Skill 基础 <a class="header-anchor" href="#_5-3a-skill-基础" aria-label="Permalink to “5.3a Skill 基础”">​</a></h1><blockquote><p>Skill 是一套<strong>按需加载</strong>的专业知识包，通过 SKILL.md 定义，Agent 根据任务语义自动发现并加载。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+p+'" alt="Skill 基础学霸笔记" data-zoom-src="/images/5-advanced/03a-skills-basics-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解 Skill 的核心设计理念</li><li>创建符合规范的 SKILL.md 文件</li><li>配置 Skill 权限控制</li><li>区分 Skill 和 CLAUDE.md 的使用场景</li></ul><hr><h2 id="为什么需要-skill" tabindex="-1">为什么需要 Skill <a class="header-anchor" href="#为什么需要-skill" aria-label="Permalink to “为什么需要 Skill”">​</a></h2><h3 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h3>',11)),n[1]||(n[1]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`用户：帮我查询数据仓库的收入数据

Claude：我建议用这个 SQL 查询...
SELECT * FROM revenue WHERE date > '2024-01-01'`)])],-1)),n[2]||(n[2]=l("p",null,"Claude 给出的是通用 SQL 模式，但它不知道：",-1)),n[3]||(n[3]=l("ul",null,[l("li",null,"你们的表结构是什么"),l("li",null,'"收入"在公司里是怎么定义的'),l("li",null,"必须排除测试账户"),l("li",null,"应该用哪个汇总表")],-1)),n[4]||(n[4]=l("p",null,[l("strong",null,"问题根源"),t("：Claude 每次对话都是全新开始，没有你团队的专业知识。")],-1)),n[5]||(n[5]=l("h3",{id:"skill-如何解决",tabindex:"-1"},[t("Skill 如何解决 "),l("a",{class:"header-anchor",href:"#skill-如何解决","aria-label":"Permalink to “Skill 如何解决”"},"​")],-1)),n[6]||(n[6]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`用户：帮我查询数据仓库的收入数据

Claude：[自动加载 sql-analysis Skill]
我来帮你查询收入数据。根据你们的数据规范：
- 使用 monthly_revenue 汇总表
- 排除测试账户 (account != 'Test')
- 收入按 ARR 计算 (monthly * 12)

SELECT ...`)])],-1)),n[7]||(n[7]=l("p",null,"Skill 把你的专业知识封装成 Claude 可以按需调用的资源。",-1)),n[8]||(n[8]=l("hr",null,null,-1)),n[9]||(n[9]=l("h2",{id:"skill-的核心设计理念",tabindex:"-1"},[t("Skill 的核心设计理念 "),l("a",{class:"header-anchor",href:"#skill-的核心设计理念","aria-label":"Permalink to “Skill 的核心设计理念”"},"​")],-1)),n[10]||(n[10]=l("h3",{id:"渐进式披露-progressive-disclosure",tabindex:"-1"},[t("渐进式披露（Progressive Disclosure） "),l("a",{class:"header-anchor",href:"#渐进式披露-progressive-disclosure","aria-label":"Permalink to “渐进式披露（Progressive Disclosure）”"},"​")],-1)),n[11]||(n[11]=l("p",null,[t("Skill 不是把所有内容塞进上下文，而是"),l("strong",null,"分层加载"),t("：")],-1)),n[12]||(n[12]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────┐
│ 第一层：name + description（~100 词）                    │
│ → 始终可见，用于判断是否需要加载                         │
├─────────────────────────────────────────────────────────┤
│ 第二层：SKILL.md 正文                                    │
│ → 任务匹配时加载，包含主要指令                           │
├─────────────────────────────────────────────────────────┤
│ 第三层：references/ 目录中的详细文档                     │
│ → 仅在需要具体细节时加载                                 │
└─────────────────────────────────────────────────────────┘`)])],-1)),n[13]||(n[13]=e('<p><strong>为什么这样设计？</strong></p><p>上下文窗口是宝贵资源。如果把所有专业知识都塞进去，会导致：</p><ul><li>Token 消耗过大</li><li>模型注意力分散</li><li>不相关内容干扰输出</li></ul><p>渐进式披露让 Claude 只加载当前任务需要的内容。</p><h3 id="skill-vs-claude-md" tabindex="-1">Skill vs CLAUDE.md <a class="header-anchor" href="#skill-vs-claude-md" aria-label="Permalink to “Skill vs CLAUDE.md”">​</a></h3><table tabindex="0"><thead><tr><th>特性</th><th>CLAUDE.md</th><th>Skill</th></tr></thead><tbody><tr><td><strong>加载时机</strong></td><td>始终加载到上下文</td><td>仅在任务匹配时加载</td></tr><tr><td><strong>适用范围</strong></td><td>当前项目</td><td>可跨项目复用</td></tr><tr><td><strong>内容类型</strong></td><td>纯 Markdown</td><td>Markdown + 代码 + 资源文件</td></tr><tr><td><strong>平台支持</strong></td><td>仅 Claude Code / OpenCode</td><td>Claude.ai / Code / API</td></tr><tr><td><strong>典型用途</strong></td><td>项目编码规范、本地命令</td><td>专业领域知识、工作流程</td></tr></tbody></table><p><strong>选择原则</strong>：</p><ul><li>项目特定的规范（代码风格、分支命名） → CLAUDE.md</li><li>可复用的专业知识（数据分析流程、审计规范） → Skill</li></ul><hr><h2 id="skill-目录结构" tabindex="-1">Skill 目录结构 <a class="header-anchor" href="#skill-目录结构" aria-label="Permalink to “Skill 目录结构”">​</a></h2><h3 id="基础结构" tabindex="-1">基础结构 <a class="header-anchor" href="#基础结构" aria-label="Permalink to “基础结构”">​</a></h3>',11)),n[14]||(n[14]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`.opencode/
└── skill/
    └── code-review/
        └── SKILL.md      # 技能定义文件（必须大写）`)])],-1)),n[15]||(n[15]=l("h3",{id:"推荐的完整结构",tabindex:"-1"},[t("推荐的完整结构 "),l("a",{class:"header-anchor",href:"#推荐的完整结构","aria-label":"Permalink to “推荐的完整结构”"},"​")],-1)),n[16]||(n[16]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`.opencode/
└── skill/
    └── sql-analysis/
        ├── SKILL.md              # 主文件：工作流程和关键逻辑
        └── references/           # 详细文档（按需加载）
            ├── finance.md        # 财务表结构
            ├── product.md        # 产品表结构
            └── examples.md       # 查询示例`)])],-1)),n[17]||(n[17]=e('<p><strong>原则</strong>：SKILL.md 保持精简，详细内容放到 references/，Claude 需要时再读取。</p><h3 id="opencode-搜索位置" tabindex="-1">OpenCode 搜索位置 <a class="header-anchor" href="#opencode-搜索位置" aria-label="Permalink to “OpenCode 搜索位置”">​</a></h3><table tabindex="0"><thead><tr><th>位置</th><th>作用范围</th><th>说明</th></tr></thead><tbody><tr><td><code>.opencode/skill/&lt;name&gt;/SKILL.md</code></td><td>当前项目</td><td>项目专属技能</td></tr><tr><td><code>~/.config/opencode/skill/&lt;name&gt;/SKILL.md</code></td><td>全局</td><td>所有项目可用</td></tr><tr><td><code>.claude/skills/&lt;name&gt;/SKILL.md</code></td><td>当前项目</td><td>Claude 兼容格式</td></tr><tr><td><code>~/.claude/skills/&lt;name&gt;/SKILL.md</code></td><td>全局</td><td>Claude 兼容格式</td></tr></tbody></table><blockquote><p>项目路径会从当前目录向上遍历到 git 根目录。</p></blockquote>',4)),n[18]||(n[18]=l("div",{class:"info custom-block"},[l("p",{class:"custom-block-title"},"自定义配置目录"),l("p",null,[t("通过 "),l("code",null,"OPENCODE_CONFIG_DIR"),t(" 环境变量可以指定额外的 Skill 搜索路径：")]),l("div",{class:"language-bash"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"bash"),l("pre",null,[l("code",{"v-pre":""},'export OPENCODE_CONFIG_DIR="/path/to/custom/config"')])]),l("p",null,"OpenCode 会同时扫描以下位置："),l("ul",null,[l("li",null,[t("默认配置目录："),l("code",null,"~/.config/opencode/skill/")]),l("li",null,[t("自定义配置目录："),l("code",null,"$OPENCODE_CONFIG_DIR/skill/")])]),l("p",null,"这对于团队共享 Skill 或在不同环境中使用不同的 Skill 集合非常有用。"),l("p",null,[t("源码证据："),l("code",null,"skill/skill.ts:82-85")]),l("div",{class:"language-typescript"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"typescript"),l("pre",null,[l("code",{"v-pre":""},`const configDirs = process.env.OPENCODE_CONFIG_DIR
  ? [process.env.OPENCODE_CONFIG_DIR, ...defaultConfigDirs]
  : defaultConfigDirs`)])])],-1)),n[19]||(n[19]=l("h3",{id:"嵌套目录支持",tabindex:"-1"},[t("嵌套目录支持 "),l("a",{class:"header-anchor",href:"#嵌套目录支持","aria-label":"Permalink to “嵌套目录支持”"},"​")],-1)),n[20]||(n[20]=l("p",null,"OpenCode 支持嵌套的 Skill 目录：",-1)),n[21]||(n[21]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`.opencode/
└── skill/
    └── audit/
        └── security/
            └── SKILL.md    # 技能名由 frontmatter 中的 name 决定`)])],-1)),n[22]||(n[22]=l("p",null,[t("源码证据："),l("code",null,"skill/skill.ts:38")],-1)),n[23]||(n[23]=l("div",{class:"language-typescript"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"typescript"),l("pre",null,[l("code",{"v-pre":""},'const OPENCODE_SKILL_GLOB = new Bun.Glob("{skill,skills}/**/SKILL.md")')])],-1)),n[24]||(n[24]=l("p",null,[l("code",null,"**"),t(" 表示匹配任意深度的子目录。")],-1)),n[25]||(n[25]=l("hr",null,null,-1)),n[26]||(n[26]=l("h2",{id:"skill-md-格式",tabindex:"-1"},[t("SKILL.md 格式 "),l("a",{class:"header-anchor",href:"#skill-md-格式","aria-label":"Permalink to “SKILL.md 格式”"},"​")],-1)),r(a),n[27]||(n[27]=l("h3",{id:"必需的-frontmatter",tabindex:"-1"},[t("必需的 Frontmatter "),l("a",{class:"header-anchor",href:"#必需的-frontmatter","aria-label":"Permalink to “必需的 Frontmatter”"},"​")],-1)),n[28]||(n[28]=l("div",{class:"language-yaml"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"yaml"),l("pre",null,[l("code",{"v-pre":""},`---
name: sql-analysis
description: 用于分析业务数据：收入、ARR、客户分群、产品使用、销售管道。提供表结构、指标定义、必需过滤器和查询模式。
---`)])],-1)),n[29]||(n[29]=e('<table tabindex="0"><thead><tr><th>字段</th><th>必需</th><th>说明</th></tr></thead><tbody><tr><td><code>name</code></td><td>是</td><td>技能标识符，用于调用</td></tr><tr><td><code>description</code></td><td>是</td><td>触发条件描述（<strong>最重要！</strong>）</td></tr><tr><td><code>license</code></td><td>否</td><td>许可证信息</td></tr><tr><td><code>compatibility</code></td><td>否</td><td>兼容性标记</td></tr><tr><td><code>metadata</code></td><td>否</td><td>自定义键值对</td></tr></tbody></table><h3 id="name-命名规范" tabindex="-1">name 命名规范 <a class="header-anchor" href="#name-命名规范" aria-label="Permalink to “name 命名规范”">​</a></h3><p>官方建议遵循以下规范（源码不强制验证，但建议遵循以保持兼容性）：</p>',3)),n[30]||(n[30]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`✓ code-review
✓ sql-analysis
✓ git-release
✗ Code_Review    ← 不要用大写
✗ sql--analysis  ← 不要用连续横杠
✗ -review        ← 不要以横杠开头`)])],-1)),n[31]||(n[31]=l("p",null,[t("正则参考："),l("code",null,"^[a-z0-9]+(-[a-z0-9]+)*$")],-1)),n[32]||(n[32]=l("h3",{id:"description-写法-决定触发的关键",tabindex:"-1"},[t("description 写法（决定触发的关键） "),l("a",{class:"header-anchor",href:"#description-写法-决定触发的关键","aria-label":"Permalink to “description 写法（决定触发的关键）”"},"​")],-1)),n[33]||(n[33]=l("p",null,[t("description 是"),l("strong",null,"唯一决定 Skill 是否被触发"),t("的因素。Claude 使用语义理解（不是关键词匹配）来判断任务是否需要某个 Skill。")],-1)),n[34]||(n[34]=l("p",null,[l("strong",null,"差的写法"),t("：")],-1)),n[35]||(n[35]=l("div",{class:"language-yaml"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"yaml"),l("pre",null,[l("code",{"v-pre":""},"description: 帮助处理文档")])],-1)),n[36]||(n[36]=l("p",null,"问题：太模糊，AI 无法判断何时触发。",-1)),n[37]||(n[37]=l("p",null,[l("strong",null,"好的写法"),t("：")],-1)),n[38]||(n[38]=l("div",{class:"language-yaml"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"yaml"),l("pre",null,[l("code",{"v-pre":""},`description: |
  从 PDF 中提取表格并转换为 CSV 格式，用于数据分析工作流。
  适用：填写 PDF 表单、批量处理 PDF 文档、提取 PDF 内嵌数据。
  不适用：简单 PDF 查看、基本格式转换、PDF 编辑。`)])],-1)),n[39]||(n[39]=l("p",null,[l("strong",null,"description 写作模板"),t("：")],-1)),n[40]||(n[40]=l("div",{class:"language-yaml"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"yaml"),l("pre",null,[l("code",{"v-pre":""},`description: |
  [一句话说明核心能力]
  提供：[该 Skill 包含的资源，如表结构、公式、模板]
  适用：[触发场景1]、[触发场景2]、[触发场景3]
  不适用：[边界场景1]、[边界场景2]`)])],-1)),n[41]||(n[41]=e('<p><strong>description 要素</strong>：</p><ol><li><strong>具体能力</strong>：能做什么（提取表格、转换格式）</li><li><strong>提供资源</strong>：包含什么（表结构、公式、模板）</li><li><strong>触发场景</strong>：什么时候用（批量处理、表单填写）</li><li><strong>边界限制</strong>：什么时候不用（简单查看）</li></ol><h3 id="完整示例" tabindex="-1">完整示例 <a class="header-anchor" href="#完整示例" aria-label="Permalink to “完整示例”">​</a></h3>',3)),n[42]||(n[42]=l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
name: sql-analysis
description: |
  用于分析业务数据：收入趋势、ARR 计算、客户分群、产品使用、销售管道。
  提供：公司表结构、指标定义公式、标准过滤器、常用查询模板。
  适用：需要写 SQL 分析业务数据、理解公司指标定义、查询数据仓库。
  不适用：数据库管理、DDL 操作、性能调优、通用 SQL 教学。
---

# SQL 分析技能

## 快速工作流程

当用户请求数据分析时：

1. **明确需求**
   - 什么时间范围？（默认当年）
   - 哪个客户分群？
   - 这个分析用于什么决策？

2. **检查现有看板**
   - 查看 \`references/dashboards.md\` 是否有现成报表
   - 如果有，优先引导用户使用

3. **确定数据源**
   - 优先使用汇总表而非原始事件数据
   - 查询前确认表有必需字段

4. **执行分析**
   - 应用必需过滤器（排除测试账户等）
   - 用已知基准验证结果

## 标准查询过滤器

所有收入查询必须：
- 排除测试账户：\`WHERE account != 'Test'\`
- 只用完整周期：\`WHERE month <= DATE_TRUNC(CURRENT_DATE(), MONTH)\`

## ARR 计算方式

- 月收入转 ARR：\`monthly_revenue * 12\`
- 7 日运行率：\`rolling_7d * 52\`

## 详细文档

需要表结构和查询模式时，参考：
- **收入与财务** → \`references/finance.md\`
- **产品使用** → \`references/product.md\`
- **销售管道** → \`references/sales.md\``)])],-1)),n[43]||(n[43]=l("p",null,"注意：SKILL.md 只包含工作流程和关键逻辑，详细的表结构放在 references/ 目录中。",-1)),n[44]||(n[44]=l("hr",null,null,-1)),n[45]||(n[45]=l("h2",{id:"skill-如何被发现和加载",tabindex:"-1"},[t("Skill 如何被发现和加载 "),l("a",{class:"header-anchor",href:"#skill-如何被发现和加载","aria-label":"Permalink to “Skill 如何被发现和加载”"},"​")],-1)),n[46]||(n[46]=l("h3",{id:"发现机制",tabindex:"-1"},[t("发现机制 "),l("a",{class:"header-anchor",href:"#发现机制","aria-label":"Permalink to “发现机制”"},"​")],-1)),n[47]||(n[47]=l("p",null,[t("OpenCode 启动时扫描所有 Skill，将 name 和 description 汇总到 "),l("code",null,"skill"),t(" 工具的描述中：")],-1)),n[48]||(n[48]=l("div",{class:"language-xml"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"xml"),l("pre",null,[l("code",{"v-pre":""},`<available_skills>
  <skill>
    <name>sql-analysis</name>
    <description>用于分析业务数据：收入、ARR、客户分群...</description>
  </skill>
  <skill>
    <name>code-review</name>
    <description>执行代码审查，检查规范、Bug、性能和安全</description>
  </skill>
</available_skills>`)])],-1)),n[49]||(n[49]=l("h3",{id:"加载机制",tabindex:"-1"},[t("加载机制 "),l("a",{class:"header-anchor",href:"#加载机制","aria-label":"Permalink to “加载机制”"},"​")],-1)),n[50]||(n[50]=l("p",null,"当用户发送消息时，Claude 根据语义判断是否需要加载某个 Skill：",-1)),n[51]||(n[51]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`用户消息：帮我分析上季度的收入数据

Claude 判断：这是数据分析任务，与 sql-analysis Skill 匹配

Claude 调用：skill({ name: "sql-analysis" })

结果：SKILL.md 内容加载到上下文`)])],-1)),n[52]||(n[52]=l("h3",{id:"加载后的输出",tabindex:"-1"},[t("加载后的输出 "),l("a",{class:"header-anchor",href:"#加载后的输出","aria-label":"Permalink to “加载后的输出”"},"​")],-1)),n[53]||(n[53]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`## Skill: sql-analysis

**Base directory**: /path/to/.opencode/skill/sql-analysis

[SKILL.md 的内容]`)])],-1)),n[54]||(n[54]=l("p",null,[l("code",null,"Base directory"),t(" 信息让 Claude 知道如何访问 references/ 中的相对路径文件。")],-1)),n[55]||(n[55]=l("hr",null,null,-1)),n[56]||(n[56]=l("h2",{id:"权限配置",tabindex:"-1"},[t("权限配置 "),l("a",{class:"header-anchor",href:"#权限配置","aria-label":"Permalink to “权限配置”"},"​")],-1)),n[57]||(n[57]=l("h3",{id:"全局权限",tabindex:"-1"},[t("全局权限 "),l("a",{class:"header-anchor",href:"#全局权限","aria-label":"Permalink to “全局权限”"},"​")],-1)),n[58]||(n[58]=l("p",null,[t("在 "),l("code",null,"opencode.json"),t(" 中配置：")],-1)),n[59]||(n[59]=l("div",{class:"language-jsonc"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"jsonc"),l("pre",null,[l("code",{"v-pre":""},`{
  "permission": {
    "skill": {
      "pr-review": "allow",        // 立即加载
      "internal-*": "deny",        // 隐藏，拒绝访问
      "experimental-*": "ask",     // 加载前询问用户
      "*": "allow"                 // 其他默认允许
    }
  }
}`)])],-1)),n[60]||(n[60]=e('<table tabindex="0"><thead><tr><th>权限值</th><th>行为</th></tr></thead><tbody><tr><td><code>allow</code></td><td>Skill 立即加载</td></tr><tr><td><code>deny</code></td><td>Skill 对 Agent 隐藏，访问被拒绝</td></tr><tr><td><code>ask</code></td><td>加载前提示用户确认</td></tr></tbody></table><blockquote><p>支持通配符：<code>internal-*</code> 匹配 <code>internal-docs</code>、<code>internal-tools</code> 等。</p></blockquote><h3 id="按-agent-覆盖权限" tabindex="-1">按 Agent 覆盖权限 <a class="header-anchor" href="#按-agent-覆盖权限" aria-label="Permalink to “按 Agent 覆盖权限”">​</a></h3><p><strong>在 Markdown Agent 中</strong>：</p>',4)),n[61]||(n[61]=l("div",{class:"language-yaml"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"yaml"),l("pre",null,[l("code",{"v-pre":""},`---
permission:
  skill:
    "documents-*": "allow"
---`)])],-1)),n[62]||(n[62]=l("p",null,[l("strong",null,"在 opencode.json 中"),t("：")],-1)),n[63]||(n[63]=l("div",{class:"language-jsonc"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"jsonc"),l("pre",null,[l("code",{"v-pre":""},`{
  "agent": {
    "plan": {
      "permission": {
        "skill": {
          "internal-*": "allow"
        }
      }
    }
  }
}`)])],-1)),n[64]||(n[64]=l("h3",{id:"禁用-skill-工具",tabindex:"-1"},[t("禁用 Skill 工具 "),l("a",{class:"header-anchor",href:"#禁用-skill-工具","aria-label":"Permalink to “禁用 Skill 工具”"},"​")],-1)),n[65]||(n[65]=l("p",null,"对于不需要 Skill 的 Agent，可以完全禁用：",-1)),n[66]||(n[66]=l("p",null,[l("strong",null,"Markdown 方式"),t("：")],-1)),n[67]||(n[67]=l("div",{class:"language-yaml"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"yaml"),l("pre",null,[l("code",{"v-pre":""},`---
tools:
  skill: false
---`)])],-1)),n[68]||(n[68]=l("p",null,[l("strong",null,"JSON 方式"),t("：")],-1)),n[69]||(n[69]=l("div",{class:"language-jsonc"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"jsonc"),l("pre",null,[l("code",{"v-pre":""},`{
  "agent": {
    "plan": {
      "tools": {
        "skill": false
      }
    }
  }
}`)])],-1)),n[70]||(n[70]=l("p",null,[t("禁用后，"),l("code",null,"<available_skills>"),t(" 部分将完全不出现在该 Agent 的工具描述中。")],-1)),n[71]||(n[71]=l("hr",null,null,-1)),n[72]||(n[72]=l("h2",{id:"简单示例",tabindex:"-1"},[t("简单示例 "),l("a",{class:"header-anchor",href:"#简单示例","aria-label":"Permalink to “简单示例”"},"​")],-1)),n[73]||(n[73]=l("h3",{id:"翻译技能",tabindex:"-1"},[t("翻译技能 "),l("a",{class:"header-anchor",href:"#翻译技能","aria-label":"Permalink to “翻译技能”"},"​")],-1)),n[74]||(n[74]=l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
name: translate
description: 专业翻译，保留格式和术语。用于翻译技术文档、API 文档、代码注释。
---

# 翻译技能

## 翻译规范

1. 保持原文格式和段落结构
2. 专有名词保留原文并标注
3. 技术术语查阅术语表
4. 翻译后进行通读润色

## 输出格式

翻译结果用代码块包裹：
`)])],-1)),n[75]||(n[75]=l("p",{译文:""},null,-1)),n[76]||(n[76]=l("div",{class:"language-"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",null,[l("code",{"v-pre":""},`
对于不确定的翻译，用括号标注原文。`)])],-1)),n[77]||(n[77]=l("h3",{id:"品牌指南技能",tabindex:"-1"},[t("品牌指南技能 "),l("a",{class:"header-anchor",href:"#品牌指南技能","aria-label":"Permalink to “品牌指南技能”"},"​")],-1)),n[78]||(n[78]=l("div",{class:"language-markdown"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"markdown"),l("pre",null,[l("code",{"v-pre":""},`---
name: brand-guidelines
description: 应用公司官方品牌色和排版规范。用于创建需要公司视觉风格的文档、演示文稿、界面设计。
---

# 品牌规范技能

## 颜色

**主色**：
- 深色：\`#141413\` - 主要文字和深色背景
- 浅色：\`#faf9f5\` - 浅色背景和深色上的文字
- 中灰：\`#b0aea5\` - 次要元素

**强调色**：
- 橙色：\`#d97757\` - 主强调色
- 蓝色：\`#6a9bcc\` - 次强调色
- 绿色：\`#788c5d\` - 第三强调色

## 字体

- **标题**：Poppins（备选 Arial）
- **正文**：Lora（备选 Georgia）

## 应用规则

- 标题（24pt 及以上）使用 Poppins
- 正文使用 Lora
- 根据背景智能选择文字颜色`)])],-1)),n[79]||(n[79]=e('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>Skill 加载不了</td><td>SKILL.md 大小写不对</td><td>必须全大写 <code>SKILL.md</code></td></tr><tr><td>Skill 不显示</td><td>frontmatter 缺字段</td><td>必须包含 <code>name</code> 和 <code>description</code></td></tr><tr><td>任务匹配但不触发</td><td>description 太模糊</td><td>增加具体能力、场景、边界描述</td></tr><tr><td>同名 Skill 冲突</td><td>多处定义同名</td><td>后加载的覆盖先加载的，检查日志警告</td></tr><tr><td>被拒绝访问</td><td>权限设为 deny</td><td>检查 permission 配置</td></tr><tr><td>Skill 目录不识别</td><td>目录名拼写问题</td><td><code>skill/</code> 和 <code>skills/</code> 都支持</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>Skill 的核心理念</strong>：渐进式披露，按需加载</li><li><strong>目录结构</strong>：<code>skill/&lt;name&gt;/SKILL.md</code> + <code>references/</code></li><li><strong>SKILL.md 格式</strong>：name 和 description 必填</li><li><strong>description 写法</strong>：具体能力 + 触发场景 + 边界限制</li><li><strong>权限控制</strong>：allow/ask/deny + 通配符</li><li><strong>Skill vs CLAUDE.md</strong>：按需加载 vs 始终加载</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将深入 Skill 进阶用法：渐进式披露的三层结构、可执行脚本、创建流程、测试验证和真实案例。</p></blockquote><p><a href="./03b-skills-advanced.html">继续学习：5.3b Skill 进阶</a></p>',11))])}const c=s(u,[["render",g]]);export{v as __pageData,c as default};
