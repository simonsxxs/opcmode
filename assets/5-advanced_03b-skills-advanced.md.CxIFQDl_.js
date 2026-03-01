import{_ as r,I as d,c as i,o as s,a5 as l,j as t,J as o,a as e,b1 as p}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.3b Skill 进阶","description":"学习渐进式披露、可执行脚本、最佳实践等高级 Skill 功能，打造强大的专业知识包。","frontmatter":{"title":"5.3b Skill 进阶","subtitle":"渐进式披露、脚本执行与最佳实践","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.3b","duration":"30 分钟","practice":"40 分钟","level":"进阶","description":"学习渐进式披露、可执行脚本、最佳实践等高级 Skill 功能，打造强大的专业知识包。","tags":["Skill","渐进式披露","可执行脚本","最佳实践"],"prerequisite":["5.3a Skill 基础"]},"headers":[],"relativePath":"5-advanced/03b-skills-advanced.md","filePath":"5-advanced/03b-skills-advanced.md","lastUpdated":1772014034000}'),u={name:"5-advanced/03b-skills-advanced.md"};function h(b,n,g,m,c,k){const a=d("AdInArticle");return s(),i("div",null,[n[0]||(n[0]=l('<h1 id="_5-3b-skill-进阶" tabindex="-1">5.3b Skill 进阶 <a class="header-anchor" href="#_5-3b-skill-进阶" aria-label="Permalink to “5.3b Skill 进阶”">​</a></h1><blockquote><p>本课深入 Skill 的高级用法：渐进式披露的三层结构、可执行脚本、5 步创建流程、测试验证和真实案例。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+p+'" alt="Skill 进阶学霸笔记" data-zoom-src="/images/5-advanced/03b-skills-advanced-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>设计三层渐进式披露结构</li><li>在 Skill 中集成可执行脚本</li><li>按 5 步流程创建高质量 Skill</li><li>系统化测试和验证 Skill</li><li>借鉴真实案例优化自己的 Skill</li></ul><hr><h2 id="渐进式披露的三层结构" tabindex="-1">渐进式披露的三层结构 <a class="header-anchor" href="#渐进式披露的三层结构" aria-label="Permalink to “渐进式披露的三层结构”">​</a></h2><h3 id="为什么需要分层" tabindex="-1">为什么需要分层 <a class="header-anchor" href="#为什么需要分层" aria-label="Permalink to “为什么需要分层”">​</a></h3><p>想象你的 Skill 包含：</p><ul><li>10 个表的详细结构</li><li>50 个常用查询示例</li><li>各种边缘情况处理</li></ul><p>如果把这些全部塞进 SKILL.md，会导致：</p><ul><li>上下文窗口快速耗尽</li><li>模型注意力被无关内容分散</li><li>Token 费用飙升</li></ul><p><strong>解决方案</strong>：像组织一本手册那样组织 Skill：</p>',16)),n[1]||(n[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"目录（始终可见） → 章节（按需阅读） → 速查手册（需要时查阅）")])],-1)),n[2]||(n[2]=t("h3",{id:"三层结构详解",tabindex:"-1"},[e("三层结构详解 "),t("a",{class:"header-anchor",href:"#三层结构详解","aria-label":"Permalink to “三层结构详解”"},"​")],-1)),o(a),n[3]||(n[3]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`skill/
└── sql-analysis/
    ├── SKILL.md                    # 第二层：主要工作流程
    └── references/                 # 第三层：详细文档
        ├── finance.md              # 财务表结构
        ├── product.md              # 产品表结构
        ├── sales.md                # 销售表结构
        └── examples/
            ├── revenue-queries.md  # 收入查询示例
            └── churn-queries.md    # 流失分析示例`)])],-1)),n[4]||(n[4]=l('<p><strong>第一层</strong>：name + description（~100 词）</p><ul><li>始终加载到 <code>&lt;available_skills&gt;</code> 中</li><li>用于判断是否需要加载此 Skill</li></ul><p><strong>第二层</strong>：SKILL.md 正文</p><ul><li>任务匹配时加载</li><li>包含工作流程、关键逻辑、决策树</li><li>保持精简（建议 300-2000+ 词）</li></ul><p><strong>第三层</strong>：references/ 目录</p><ul><li>仅在需要具体细节时加载</li><li>Claude 通过读取文件按需获取</li><li>可以包含大量详细信息</li></ul><h3 id="实现示例" tabindex="-1">实现示例 <a class="header-anchor" href="#实现示例" aria-label="Permalink to “实现示例”">​</a></h3><p><strong>SKILL.md（第二层）</strong>：</p>',8)),n[5]||(n[5]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
name: sql-analysis
description: 用于分析业务数据：收入、ARR、客户分群、产品使用。
---

# SQL 分析技能

## 工作流程

1. 明确分析需求
2. 选择正确的数据源
3. 应用标准过滤器
4. 验证结果

## 数据源选择

| 分析类型 | 推荐表 | 详细文档 |
|---------|-------|---------|
| 收入分析 | monthly_revenue | \`references/finance.md\` |
| 产品使用 | daily_usage | \`references/product.md\` |
| 销售管道 | pipeline_snapshot | \`references/sales.md\` |

## 必需过滤器

所有查询必须：
- 排除测试账户：\`account != 'Test'\`
- 只用完整周期

需要具体表结构或查询示例时，读取 references/ 中的对应文件。`)])],-1)),n[6]||(n[6]=t("p",null,[t("strong",null,"references/finance.md（第三层）"),e("：")],-1)),n[7]||(n[7]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`# 财务表详细结构

## monthly_revenue 表

| 字段 | 类型 | 说明 |
|-----|------|------|
| account_id | STRING | 账户 ID |
| month | DATE | 月份（每月第一天） |
| mrr | FLOAT | 月度经常性收入 |
| arr | FLOAT | 年度经常性收入 |
| segment | STRING | 客户分群 |

## 常用查询

### 按分群统计月收入

\`\`\`sql
SELECT 
  segment,
  DATE_TRUNC(month, MONTH) as period,
  SUM(mrr) as total_mrr
FROM monthly_revenue
WHERE account_id != 'Test'
GROUP BY 1, 2
ORDER BY 2 DESC, 3 DESC`)])],-1)),n[8]||(n[8]=t("h3",{id:"计算环比增长",tabindex:"-1"},[e("计算环比增长 "),t("a",{class:"header-anchor",href:"#计算环比增长","aria-label":"Permalink to “计算环比增长”"},"​")],-1)),n[9]||(n[9]=t("p",null,"...（更多查询示例）",-1)),n[10]||(n[10]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`
**关键原则**：信息只放在 SKILL.md 或 references/ 其中之一，不要重复。

---

## 可执行脚本支持

### 为什么需要脚本

某些操作用代码执行比用 Token 生成更高效、更可靠：

| 任务 | Token 生成 | 代码执行 |
|------|-----------|---------|
| 排序 1000 个数字 | 大量 Token、可能出错 | 毫秒级、100% 准确 |
| 解析 PDF 表单字段 | 需要把 PDF 加载到上下文 | 直接处理文件 |
| 格式转换 | 容易格式错乱 | 确定性输出 |

### 脚本目录结构
`)])],-1)),n[11]||(n[11]=t("p",null,"skill/ └── pdf-skill/ ├── SKILL.md ├── references/ │ └── forms.md └── scripts/ ├── extract_form_fields.py ├── merge_pdfs.py └── convert_to_images.py",-1)),n[12]||(n[12]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`
### SKILL.md 中引用脚本

\`\`\`markdown
---
name: pdf
description: PDF 处理工具包：提取文本和表格、创建新 PDF、合并拆分文档、处理表单。
---

# PDF 处理技能

## 提取表单字段

无需将 PDF 加载到上下文，直接运行脚本：

\`\`\`bash
python scripts/extract_form_fields.py input.pdf`)])],-1)),n[13]||(n[13]=t("p",null,"输出示例：",-1)),n[14]||(n[14]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "fields": [
    {"name": "full_name", "type": "text", "value": ""},
    {"name": "date", "type": "date", "value": ""}
  ]
}`)])],-1)),n[15]||(n[15]=t("h2",{id:"合并多个-pdf",tabindex:"-1"},[e("合并多个 PDF "),t("a",{class:"header-anchor",href:"#合并多个-pdf","aria-label":"Permalink to “合并多个 PDF”"},"​")],-1)),n[16]||(n[16]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"python scripts/merge_pdfs.py file1.pdf file2.pdf -o output.pdf")])],-1)),n[17]||(n[17]=t("h2",{id:"转换为图片",tabindex:"-1"},[e("转换为图片 "),t("a",{class:"header-anchor",href:"#转换为图片","aria-label":"Permalink to “转换为图片”"},"​")],-1)),n[18]||(n[18]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"python scripts/convert_to_images.py document.pdf --output-dir ./images")])],-1)),n[19]||(n[19]=t("p",null,[e("详细参数说明见 "),t("code",null,"references/scripts-guide.md"),e("。")],-1)),n[20]||(n[20]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`
### 脚本编写原则

1. **独立可运行**：脚本应该能独立执行，不依赖复杂环境
2. **清晰的输入输出**：明确的参数和返回格式
3. **错误处理**：优雅处理异常情况
4. **最小依赖**：只使用必要的库

**示例脚本**（\`scripts/extract_form_fields.py\`）：

\`\`\`python
#!/usr/bin/env python3
"""提取 PDF 表单字段信息"""

import sys
import json

def extract_fields(pdf_path: str) -> dict:
    """提取 PDF 中的表单字段"""
    try:
        # 使用 PyPDF2 或其他库
        from pypdf import PdfReader
        reader = PdfReader(pdf_path)
        fields = reader.get_fields() or {}
        
        result = []
        for name, field in fields.items():
            result.append({
                "name": name,
                "type": str(field.get("/FT", "unknown")),
                "value": str(field.get("/V", ""))
            })
        
        return {"fields": result, "count": len(result)}
    
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Usage: extract_form_fields.py <pdf_path>"}))
        sys.exit(1)
    
    result = extract_fields(sys.argv[1])
    print(json.dumps(result, indent=2, ensure_ascii=False))`)])],-1)),n[21]||(n[21]=l('<hr><h2 id="_5-步创建流程" tabindex="-1">5 步创建流程 <a class="header-anchor" href="#_5-步创建流程" aria-label="Permalink to “5 步创建流程”">​</a></h2><h3 id="步骤-1-明确需求" tabindex="-1">步骤 1：明确需求 <a class="header-anchor" href="#步骤-1-明确需求" aria-label="Permalink to “步骤 1：明确需求”">​</a></h3><p>在写任何内容之前，回答这些问题：</p><table tabindex="0"><thead><tr><th>问题</th><th>目的</th></tr></thead><tbody><tr><td>这个 Skill 解决什么具体问题？</td><td>明确价值</td></tr><tr><td>什么情况下应该触发？</td><td>设计 description</td></tr><tr><td>成功的输出是什么样？</td><td>定义验收标准</td></tr><tr><td>有哪些边缘情况？</td><td>避免遗漏</td></tr></tbody></table><p><strong>好的候选场景</strong>：</p><ul><li>跨项目复用的知识</li><li>多人都需要的流程</li><li>不常变化的稳定模式</li></ul><p><strong>不适合做 Skill 的</strong>：</p><ul><li>只用一次的任务</li><li>频繁变化的内容</li><li>项目特定的规范（用 CLAUDE.md）</li></ul><h3 id="步骤-2-写-name" tabindex="-1">步骤 2：写 name <a class="header-anchor" href="#步骤-2-写-name" aria-label="Permalink to “步骤 2：写 name”">​</a></h3>',10)),n[22]||(n[22]=t("div",{class:"language-yaml"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"yaml"),t("pre",null,[t("code",{"v-pre":""},"name: sql-analysis")])],-1)),n[23]||(n[23]=l('<p>命名原则：</p><ul><li>简短清晰</li><li>小写字母和数字</li><li>用单个连字符分隔</li><li>反映核心功能</li></ul><h3 id="步骤-3-写-description-最重要" tabindex="-1">步骤 3：写 description（最重要） <a class="header-anchor" href="#步骤-3-写-description-最重要" aria-label="Permalink to “步骤 3：写 description（最重要）”">​</a></h3><p>description 决定触发，是最关键的部分。</p><p><strong>差的 description</strong>：</p>',5)),n[24]||(n[24]=t("div",{class:"language-yaml"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"yaml"),t("pre",null,[t("code",{"v-pre":""},"description: 帮助处理数据")])],-1)),n[25]||(n[25]=t("p",null,'问题：太模糊，什么算"处理数据"？',-1)),n[26]||(n[26]=t("p",null,[t("strong",null,"好的 description"),e("：")],-1)),n[27]||(n[27]=t("div",{class:"language-yaml"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"yaml"),t("pre",null,[t("code",{"v-pre":""},"description: 从 PDF 中提取表格并转换为 CSV 格式，用于数据分析工作流。当需要填写 PDF 表单或批量处理 PDF 文档时使用。不用于简单 PDF 查看或基本格式转换。")])],-1)),n[28]||(n[28]=l('<p><strong>description 要素清单</strong>：</p><table tabindex="0"><thead><tr><th>要素</th><th>示例</th></tr></thead><tbody><tr><td>具体能力</td><td>&quot;提取表格并转换为 CSV&quot;</td></tr><tr><td>触发场景</td><td>&quot;当需要填写 PDF 表单时&quot;</td></tr><tr><td>使用对象</td><td>&quot;用于数据分析工作流&quot;</td></tr><tr><td>边界限制</td><td>&quot;不用于简单 PDF 查看&quot;</td></tr></tbody></table><h3 id="步骤-4-写主要指令" tabindex="-1">步骤 4：写主要指令 <a class="header-anchor" href="#步骤-4-写主要指令" aria-label="Permalink to “步骤 4：写主要指令”">​</a></h3><p>结构化、可扫描、可操作：</p>',4)),n[29]||(n[29]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`# SQL 分析技能

## 工作流程

1. **明确需求**
   - 时间范围？（默认当年）
   - 客户分群？
   - 用于什么决策？

2. **选择数据源**
   - 优先汇总表
   - 确认必需字段存在

3. **执行查询**
   - 应用标准过滤器
   - 验证结果合理性

## 标准过滤器

所有查询必须包含：
- \`WHERE account_id != 'Test'\`
- \`WHERE month <= DATE_TRUNC(CURRENT_DATE(), MONTH)\`

## 详细文档

- 表结构 → \`references/tables.md\`
- 查询示例 → \`references/examples.md\``)])],-1)),n[30]||(n[30]=l('<p><strong>写作原则</strong>：</p><table tabindex="0"><thead><tr><th>原则</th><th>说明</th></tr></thead><tbody><tr><td>用 Markdown 结构</td><td>标题、列表、表格增加可读性</td></tr><tr><td>提供具体示例</td><td>代码块展示正确用法</td></tr><tr><td>说明不能做什么</td><td>避免误用</td></tr><tr><td>引用详细文档</td><td>保持主文件精简</td></tr></tbody></table><h3 id="步骤-5-测试验证" tabindex="-1">步骤 5：测试验证 <a class="header-anchor" href="#步骤-5-测试验证" aria-label="Permalink to “步骤 5：测试验证”">​</a></h3><p>系统化测试 Skill，确保它在各种场景下都能正常工作。</p><h4 id="测试矩阵" tabindex="-1">测试矩阵 <a class="header-anchor" href="#测试矩阵" aria-label="Permalink to “测试矩阵”">​</a></h4><table tabindex="0"><thead><tr><th>测试类型</th><th>测试内容</th><th>预期结果</th><th>优先级</th></tr></thead><tbody><tr><td><strong>触发测试</strong></td><td>&quot;帮我查询上季度收入&quot;</td><td>Skill 激活</td><td>P0</td></tr><tr><td><strong>边界测试</strong></td><td>&quot;查询收入&quot;（无时间范围）</td><td>询问后执行</td><td>P1</td></tr><tr><td><strong>负向测试</strong></td><td>&quot;帮我写一封邮件&quot;</td><td>不激活</td><td>P0</td></tr><tr><td><strong>输出测试</strong></td><td>验证输出格式是否符合规范</td><td>格式正确</td><td>P1</td></tr><tr><td><strong>错误测试</strong></td><td>故意输入错误参数</td><td>优雅报错</td><td>P2</td></tr></tbody></table><h4 id="触发测试" tabindex="-1">触发测试 <a class="header-anchor" href="#触发测试" aria-label="Permalink to “触发测试”">​</a></h4>',7)),n[31]||(n[31]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`# ✅ 应该激活的请求
"使用 sql-analysis 技能分析数据" → 显式请求，必须激活
"帮我看看上季度的 ARR 变化" → 自然请求，语义匹配激活
"收入趋势分析" → 关键词匹配，应该激活

# ❌ 不应该激活的请求
"帮我写 SQL 教程" → 是教学，不是分析
"数据库性能调优" → 超出边界（description 已说明不适用）
"创建新表" → DDL 操作，不适用`)])],-1)),n[32]||(n[32]=l('<h4 id="功能测试" tabindex="-1">功能测试 <a class="header-anchor" href="#功能测试" aria-label="Permalink to “功能测试”">​</a></h4><table tabindex="0"><thead><tr><th>检查项</th><th>测试方法</th><th>通过标准</th></tr></thead><tbody><tr><td>输出一致性</td><td>相同输入运行 3 次</td><td>核心内容一致</td></tr><tr><td>新手可用性</td><td>让不熟悉领域的人尝试</td><td>能成功完成任务</td></tr><tr><td>文档准确性</td><td>按示例操作</td><td>结果与示例一致</td></tr><tr><td>引用完整性</td><td>检查 references/ 路径</td><td>所有引用都存在</td></tr></tbody></table><h4 id="测试脚本-可选" tabindex="-1">测试脚本（可选） <a class="header-anchor" href="#测试脚本-可选" aria-label="Permalink to “测试脚本（可选）”">​</a></h4><p>创建 <code>.opencode/skill/&lt;name&gt;/test.sh</code>：</p>',4)),n[33]||(n[33]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`#!/bin/bash
# Skill 自动测试脚本

echo "=== 触发测试 ==="
# 测试 1: 正常触发
opencode --prompt "帮我查询上季度收入" --check-skill "sql-analysis"

# 测试 2: 负向测试
opencode --prompt "帮我写邮件" --expect-no-skill "sql-analysis"

echo "=== 功能测试 ==="
# 测试输出格式
opencode --prompt "分析 ARR" | grep -q "## ARR 计算" && echo "✅ 输出格式正确"`)])],-1)),n[34]||(n[34]=l('<h4 id="测试清单" tabindex="-1">测试清单 <a class="header-anchor" href="#测试清单" aria-label="Permalink to “测试清单”">​</a></h4><p>完成以下检查后，Skill 可以投入使用：</p><ul><li>[ ] <strong>触发测试</strong>：3 个正向用例都能激活</li><li>[ ] <strong>负向测试</strong>：3 个边界用例都不激活</li><li>[ ] <strong>输出测试</strong>：输出格式符合预期</li><li>[ ] <strong>新手测试</strong>：非专业人员能成功使用</li><li>[ ] <strong>引用测试</strong>：所有 references/ 文件都存在</li><li>[ ] <strong>错误测试</strong>：输入错误时有明确提示</li></ul><hr><h2 id="迭代开发方法" tabindex="-1">迭代开发方法 <a class="header-anchor" href="#迭代开发方法" aria-label="Permalink to “迭代开发方法”">​</a></h2><h3 id="与-claude-协作创建-skill" tabindex="-1">与 Claude 协作创建 Skill <a class="header-anchor" href="#与-claude-协作创建-skill" aria-label="Permalink to “与 Claude 协作创建 Skill”">​</a></h3><p>不要从零开始写，让 Claude 帮你提取知识：</p>',7)),n[35]||(n[35]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`用户：帮我创建一个数据仓库技能。我会描述我们的表和业务逻辑，你帮我结构化。

Claude：好的，请告诉我：
1. 你们主要的数据表有哪些？
2. 有哪些常用的业务术语需要定义？
3. 查询时必须遵守的规则是什么？

[对话继续，Claude 提问并整理信息]

Claude：根据我们的讨论，这是 SKILL.md 的结构：
...`)])],-1)),n[36]||(n[36]=t("h3",{id:"从失败中学习",tabindex:"-1"},[e("从失败中学习 "),t("a",{class:"header-anchor",href:"#从失败中学习","aria-label":"Permalink to “从失败中学习”"},"​")],-1)),n[37]||(n[37]=t("p",null,"当 Skill 执行出错时：",-1)),n[38]||(n[38]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`用户：这个查询结果不对，它没有排除测试账户

Claude：让我反思一下问题：
1. 标准过滤器没有被应用
2. 可能是因为指令不够明确

建议更新 SKILL.md：
- 在"必需过滤器"部分加粗强调
- 添加"绝对不能遗漏"的警告`)])],-1)),n[39]||(n[39]=t("p",null,"把这些反思固化到 Skill 中。",-1)),n[40]||(n[40]=t("h3",{id:"持续优化",tabindex:"-1"},[e("持续优化 "),t("a",{class:"header-anchor",href:"#持续优化","aria-label":"Permalink to “持续优化”"},"​")],-1)),n[41]||(n[41]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`1. 在工作中使用 Skill
2. 记录成功的模式和失败的情况
3. 定期回顾并更新 Skill
4. 分享给团队成员`)])],-1)),n[42]||(n[42]=l('<hr><h2 id="真实案例" tabindex="-1">真实案例 <a class="header-anchor" href="#真实案例" aria-label="Permalink to “真实案例”">​</a></h2><h3 id="案例-1-docx-创建技能" tabindex="-1">案例 1：DOCX 创建技能 <a class="header-anchor" href="#案例-1-docx-创建技能" aria-label="Permalink to “案例 1：DOCX 创建技能”">​</a></h3><p>来源：<a href="https://github.com/anthropics/skills" target="_blank" rel="noreferrer">Anthropic Skills 仓库</a></p>',4)),n[43]||(n[43]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
name: docx
description: "文档创建、编辑和分析，支持修订、批注、格式保留和文本提取。当 Claude 需要处理 .docx 文件时使用：(1) 创建新文档 (2) 修改内容 (3) 处理修订 (4) 添加批注"
license: Proprietary. LICENSE.txt has complete terms
---

# DOCX 创建、编辑和分析

## 概述

用户可能要求创建、编辑或分析 .docx 文件。.docx 本质上是包含 XML 文件的 ZIP 压缩包。

## 工作流程决策树

### 读取/分析内容
使用下面的"文本提取"或"原始 XML 访问"部分

### 创建新文档
使用"创建新 Word 文档"工作流程

### 编辑现有文档
- **你自己的文档 + 简单修改**：使用"基础 OOXML 编辑"
- **别人的文档**：使用**修订工作流程**（推荐默认）
- **法律、学术、商业、政府文档**：**必须**使用修订工作流程

## 文本提取

使用 pandoc 转换为 markdown：

\`\`\`bash
pandoc --track-changes=all path-to-file.docx -o output.md`)])],-1)),n[44]||(n[44]=l('<h2 id="创建新-word-文档" tabindex="-1">创建新 Word 文档 <a class="header-anchor" href="#创建新-word-文档" aria-label="Permalink to “创建新 Word 文档”">​</a></h2><p>使用 <strong>docx-js</strong>，必须先读取 <code>docx-js.md</code> 完整文件。</p><h2 id="详细文档" tabindex="-1">详细文档 <a class="header-anchor" href="#详细文档" aria-label="Permalink to “详细文档”">​</a></h2><ul><li>OOXML 编辑 → <code>ooxml.md</code></li><li>docx-js 语法 → <code>docx-js.md</code></li></ul>',4)),n[45]||(n[45]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`
**这个 Skill 的亮点**：
- 清晰的决策树帮助选择正确工作流程
- 区分不同场景的处理方式
- 引用详细文档而不是全部内联

### 案例 2：前端设计技能

来源：[Anthropic Engineering Blog](https://claude.com/blog/improving-frontend-design-through-skills)

\`\`\`markdown
---
name: frontend-design
description: 创建独特的、生产级的前端界面。用于构建 Web 组件、页面或应用。生成有创意、精致的代码，避免通用的 AI 美学。
license: Complete terms in LICENSE.txt
---

# 前端设计技能

## 设计思考

编码前，理解上下文并确定**大胆的美学方向**：

- **目的**：这个界面解决什么问题？谁在使用？
- **风格**：选择一个极端：极简主义、极繁主义、复古未来、自然有机、奢华精致、俏皮玩具风、编辑杂志风...
- **差异化**：什么让这个设计令人难忘？

## 前端美学指南

### 排版
选择独特的字体。避免 Arial、Inter 等通用字体。
推荐：JetBrains Mono、Playfair Display、IBM Plex、Bricolage Grotesque

### 配色
承诺一个统一的美学。使用 CSS 变量保持一致性。
主色配锐利的强调色，优于均匀分布的温和色板。

### 动效
使用动画增加效果和微交互。
一个精心编排的页面加载（错开显示）比分散的微交互更令人愉悦。

### 背景
创造氛围和深度，而不是默认纯色。
渐变网格、噪点纹理、几何图案、分层透明度。

## 绝对避免

- Inter、Roboto、Arial、系统字体
- 白底紫色渐变（AI 典型美学）
- 可预测的布局和组件模式
- 缺乏上下文特色的模板设计`)])],-1)),n[46]||(n[46]=t("p",null,[t("strong",null,"这个 Skill 的亮点"),e("：")],-1)),n[47]||(n[47]=t("ul",null,[t("li",null,"明确问题（AI 生成的通用美学）"),t("li",null,"提供具体的替代方案"),t("li",null,'有"绝对避免"清单')],-1)),n[48]||(n[48]=t("h3",{id:"案例-3-品牌指南技能",tabindex:"-1"},[e("案例 3：品牌指南技能 "),t("a",{class:"header-anchor",href:"#案例-3-品牌指南技能","aria-label":"Permalink to “案例 3：品牌指南技能”"},"​")],-1)),n[49]||(n[49]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
name: brand-guidelines
description: 应用公司官方品牌色和排版。用于创建需要公司视觉风格的任何内容：文档、演示、界面。
---

# 品牌规范

## 颜色

**主色**：
- 深色：\`#141413\`
- 浅色：\`#faf9f5\`
- 中灰：\`#b0aea5\`

**强调色**：
- 橙色：\`#d97757\`
- 蓝色：\`#6a9bcc\`
- 绿色：\`#788c5d\`

## 字体

- **标题**：Poppins（24pt 及以上）
- **正文**：Lora
- **备选**：Arial / Georgia

## 应用规则

- 标题用 Poppins，正文用 Lora
- 根据背景智能选择文字颜色
- 非文字形状使用强调色循环`)])],-1)),n[50]||(n[50]=l('<p><strong>这个 Skill 的亮点</strong>：</p><ul><li>精确的数值（十六进制色值、字号）</li><li>Claude 本身不知道的信息</li><li>简洁直接</li></ul><hr><h2 id="安全审计" tabindex="-1">安全审计 <a class="header-anchor" href="#安全审计" aria-label="Permalink to “安全审计”">​</a></h2><h3 id="为什么需要审计" tabindex="-1">为什么需要审计 <a class="header-anchor" href="#为什么需要审计" aria-label="Permalink to “为什么需要审计”">​</a></h3><p>Skill 可以：</p><ul><li>给 Claude 提供指令</li><li>包含可执行代码</li><li>引导 Claude 访问网络资源</li></ul><p>恶意 Skill 可能导致数据泄露或系统损坏。</p><h3 id="安全审计清单" tabindex="-1">安全审计清单 <a class="header-anchor" href="#安全审计清单" aria-label="Permalink to “安全审计清单”">​</a></h3><table tabindex="0"><thead><tr><th>检查项</th><th>检查内容</th><th>风险</th></tr></thead><tbody><tr><td><strong>文件内容</strong></td><td>阅读所有 .md 文件</td><td>是否有可疑指令</td></tr><tr><td><strong>脚本代码</strong></td><td>审查 .py/.js 等文件</td><td>是否有恶意代码</td></tr><tr><td><strong>网络请求</strong></td><td>检查 URL 和 API 调用</td><td>是否连接不可信服务</td></tr><tr><td><strong>依赖项</strong></td><td>查看 import/require</td><td>是否引入恶意包</td></tr><tr><td><strong>资源文件</strong></td><td>检查图片、数据文件</td><td>是否包含敏感信息</td></tr></tbody></table><h3 id="来源可信度" tabindex="-1">来源可信度 <a class="header-anchor" href="#来源可信度" aria-label="Permalink to “来源可信度”">​</a></h3><table tabindex="0"><thead><tr><th>来源</th><th>可信度</th><th>建议</th></tr></thead><tbody><tr><td>官方仓库</td><td>高</td><td>可直接使用</td></tr><tr><td>知名开发者</td><td>中</td><td>快速审查后使用</td></tr><tr><td>未知来源</td><td>低</td><td>完整审计后使用</td></tr><tr><td>网络下载</td><td>未知</td><td>谨慎使用</td></tr></tbody></table><h3 id="审计示例" tabindex="-1">审计示例 <a class="header-anchor" href="#审计示例" aria-label="Permalink to “审计示例”">​</a></h3>',13)),n[51]||(n[51]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 查看所有文件
find my-skill/ -type f -name "*.md" -o -name "*.py" -o -name "*.js"

# 2. 检查是否有网络请求
grep -r "http" my-skill/
grep -r "fetch\\|requests\\|urllib" my-skill/

# 3. 检查是否有文件系统操作
grep -r "open\\|write\\|delete\\|remove" my-skill/

# 4. 检查依赖
cat my-skill/requirements.txt
cat my-skill/package.json`)])],-1)),n[52]||(n[52]=l('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>Skill 总是触发</td><td>description 太宽泛</td><td>添加边界限制：&quot;不用于 X&quot;</td></tr><tr><td>Skill 从不触发</td><td>description 太具体</td><td>增加更多触发场景</td></tr><tr><td>多个 Skill 冲突</td><td>description 重叠</td><td>明确区分各自职责</td></tr><tr><td>references 不加载</td><td>路径写错</td><td>使用相对路径如 <code>references/xxx.md</code></td></tr><tr><td>脚本执行失败</td><td>依赖缺失</td><td>确保环境有必要的包</td></tr><tr><td>输出不一致</td><td>指令模糊</td><td>添加具体示例和验证步骤</td></tr><tr><td>上下文溢出</td><td>SKILL.md 太长</td><td>拆分到 references/</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><p><strong>三层渐进式披露</strong></p><ul><li>第一层：name + description（始终可见）</li><li>第二层：SKILL.md 正文（任务匹配时加载）</li><li>第三层：references/（按需加载）</li></ul></li><li><p><strong>可执行脚本</strong></p><ul><li>适合确定性操作</li><li>放在 <code>scripts/</code> 目录</li><li>在 SKILL.md 中说明如何调用</li></ul></li><li><p><strong>5 步创建流程</strong></p><ul><li>明确需求 → 写 name → 写 description → 写指令 → 测试验证</li></ul></li><li><p><strong>迭代开发</strong></p><ul><li>与 Claude 协作提取知识</li><li>从失败中学习并固化到 Skill</li></ul></li><li><p><strong>安全审计</strong></p><ul><li>检查文件、脚本、网络、依赖</li><li>优先使用可信来源</li></ul></li></ol><hr><h2 id="延伸阅读" tabindex="-1">延伸阅读 <a class="header-anchor" href="#延伸阅读" aria-label="Permalink to “延伸阅读”">​</a></h2><ul><li><a href="https://github.com/anthropics/skills" target="_blank" rel="noreferrer">Anthropic Skills 官方仓库</a></li><li><a href="https://skillsmp.com/" target="_blank" rel="noreferrer">Skills Marketplace</a></li><li><a href="https://claude.com/blog/building-skills-for-claude-code" target="_blank" rel="noreferrer">Building Skills for Claude Code</a></li><li><a href="https://claude.com/blog/how-to-create-skills-key-steps-limitations-and-examples" target="_blank" rel="noreferrer">How to create Skills</a></li></ul><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习 <strong><a href="./03c-skills-patterns.html">Skill 高级模式</a></strong>。</p><p>你会学到：</p><ul><li>Skill 与 MCP 协作模式（厨房 vs 菜谱）</li><li>五种工作流模式：顺序编排、多 MCP 协调、迭代优化等</li><li>分发共享策略（GitHub、API）</li><li>企业级 Skill 设计最佳实践</li></ul></blockquote>',13))])}const S=r(u,[["render",h]]);export{y as __pageData,S as default};
