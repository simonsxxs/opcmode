import{_ as r,I as d,c as i,o as s,a5 as l,j as t,J as o,a as e,b1 as p}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.3b Skill 进阶","description":"学习渐进式披露、可执行脚本、最佳实践等高级 Skill 功能，打造强大的专业知识包。","frontmatter":{"title":"5.3b Skill 进阶","subtitle":"渐进式披露、脚本执行与最佳实践","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.3b","duration":"30 分钟","practice":"40 分钟","level":"进阶","description":"学习渐进式披露、可执行脚本、最佳实践等高级 Skill 功能，打造强大的专业知识包。","tags":["Skill","渐进式披露","可执行脚本","最佳实践"],"prerequisite":["5.3a Skill 基础"]},"headers":[],"relativePath":"5-advanced/03b-skills-advanced.md","filePath":"5-advanced/03b-skills-advanced.md","lastUpdated":1772014034000}'),u={name:"5-advanced/03b-skills-advanced.md"};function h(b,n,g,m,c,k){const a=d("AdInArticle");return s(),i("div",null,[n[0]||(n[0]=l("",16)),n[1]||(n[1]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"目录（始终可见） → 章节（按需阅读） → 速查手册（需要时查阅）")])],-1)),n[2]||(n[2]=t("h3",{id:"三层结构详解",tabindex:"-1"},[e("三层结构详解 "),t("a",{class:"header-anchor",href:"#三层结构详解","aria-label":"Permalink to “三层结构详解”"},"​")],-1)),o(a),n[3]||(n[3]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`skill/
└── sql-analysis/
    ├── SKILL.md                    # 第二层：主要工作流程
    └── references/                 # 第三层：详细文档
        ├── finance.md              # 财务表结构
        ├── product.md              # 产品表结构
        ├── sales.md                # 销售表结构
        └── examples/
            ├── revenue-queries.md  # 收入查询示例
            └── churn-queries.md    # 流失分析示例`)])],-1)),n[4]||(n[4]=l("",8)),n[5]||(n[5]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
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
    print(json.dumps(result, indent=2, ensure_ascii=False))`)])],-1)),n[21]||(n[21]=l("",10)),n[22]||(n[22]=t("div",{class:"language-yaml"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"yaml"),t("pre",null,[t("code",{"v-pre":""},"name: sql-analysis")])],-1)),n[23]||(n[23]=l("",5)),n[24]||(n[24]=t("div",{class:"language-yaml"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"yaml"),t("pre",null,[t("code",{"v-pre":""},"description: 帮助处理数据")])],-1)),n[25]||(n[25]=t("p",null,'问题：太模糊，什么算"处理数据"？',-1)),n[26]||(n[26]=t("p",null,[t("strong",null,"好的 description"),e("：")],-1)),n[27]||(n[27]=t("div",{class:"language-yaml"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"yaml"),t("pre",null,[t("code",{"v-pre":""},"description: 从 PDF 中提取表格并转换为 CSV 格式，用于数据分析工作流。当需要填写 PDF 表单或批量处理 PDF 文档时使用。不用于简单 PDF 查看或基本格式转换。")])],-1)),n[28]||(n[28]=l("",4)),n[29]||(n[29]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`# SQL 分析技能

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
- 查询示例 → \`references/examples.md\``)])],-1)),n[30]||(n[30]=l("",7)),n[31]||(n[31]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`# ✅ 应该激活的请求
"使用 sql-analysis 技能分析数据" → 显式请求，必须激活
"帮我看看上季度的 ARR 变化" → 自然请求，语义匹配激活
"收入趋势分析" → 关键词匹配，应该激活

# ❌ 不应该激活的请求
"帮我写 SQL 教程" → 是教学，不是分析
"数据库性能调优" → 超出边界（description 已说明不适用）
"创建新表" → DDL 操作，不适用`)])],-1)),n[32]||(n[32]=l("",4)),n[33]||(n[33]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`#!/bin/bash
# Skill 自动测试脚本

echo "=== 触发测试 ==="
# 测试 1: 正常触发
opencode --prompt "帮我查询上季度收入" --check-skill "sql-analysis"

# 测试 2: 负向测试
opencode --prompt "帮我写邮件" --expect-no-skill "sql-analysis"

echo "=== 功能测试 ==="
# 测试输出格式
opencode --prompt "分析 ARR" | grep -q "## ARR 计算" && echo "✅ 输出格式正确"`)])],-1)),n[34]||(n[34]=l("",7)),n[35]||(n[35]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`用户：帮我创建一个数据仓库技能。我会描述我们的表和业务逻辑，你帮我结构化。

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
4. 分享给团队成员`)])],-1)),n[42]||(n[42]=l("",4)),n[43]||(n[43]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
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
pandoc --track-changes=all path-to-file.docx -o output.md`)])],-1)),n[44]||(n[44]=l("",4)),n[45]||(n[45]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`
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
- 非文字形状使用强调色循环`)])],-1)),n[50]||(n[50]=l("",13)),n[51]||(n[51]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 1. 查看所有文件
find my-skill/ -type f -name "*.md" -o -name "*.py" -o -name "*.js"

# 2. 检查是否有网络请求
grep -r "http" my-skill/
grep -r "fetch\\|requests\\|urllib" my-skill/

# 3. 检查是否有文件系统操作
grep -r "open\\|write\\|delete\\|remove" my-skill/

# 4. 检查依赖
cat my-skill/requirements.txt
cat my-skill/package.json`)])],-1)),n[52]||(n[52]=l("",13))])}const S=r(u,[["render",h]]);export{y as __pageData,S as default};
