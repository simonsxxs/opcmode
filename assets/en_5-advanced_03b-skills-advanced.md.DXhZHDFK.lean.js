import{_ as i,I as s,c as l,o,a5 as n,j as e,J as d,a,b1 as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.3b Advanced Skills","description":"Learn advanced Skill features including progressive disclosure, executable scripts, and best practices to build powerful knowledge packages.","frontmatter":{"title":"5.3b Advanced Skills","subtitle":"Progressive Disclosure, Script Execution, and Best Practices","course":"OpenCode Chinese Practical Course","stage":"Stage 5","lesson":"5.3b","duration":"30 minutes","practice":"40 minutes","level":"Advanced","description":"Learn advanced Skill features including progressive disclosure, executable scripts, and best practices to build powerful knowledge packages.","tags":["Skill","Progressive Disclosure","Executable Scripts","Best Practices"],"prerequisite":["5.3a Skill Basics"]},"headers":[],"relativePath":"en/5-advanced/03b-skills-advanced.md","filePath":"en/5-advanced/03b-skills-advanced.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/03b-skills-advanced.md"};function p(m,t,h,g,f,y){const r=s("AdInArticle");return o(),l("div",null,[t[0]||(t[0]=n("",16)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Table of Contents (always visible) → Chapters (read on demand) → Quick Reference (consult when needed)")])],-1)),t[2]||(t[2]=e("h3",{id:"three-layer-structure-explained",tabindex:"-1"},[a("Three-Layer Structure Explained "),e("a",{class:"header-anchor",href:"#three-layer-structure-explained","aria-label":"Permalink to “Three-Layer Structure Explained”"},"​")],-1)),d(r),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`skill/
└── sql-analysis/
    ├── SKILL.md                    # Layer 2: Main workflow
    └── references/                 # Layer 3: Detailed documentation
        ├── finance.md              # Financial table structures
        ├── product.md              # Product table structures
        ├── sales.md                # Sales table structures
        └── examples/
            ├── revenue-queries.md  # Revenue query examples
            └── churn-queries.md    # Churn analysis examples`)])],-1)),t[4]||(t[4]=n("",8)),t[5]||(t[5]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: sql-analysis
description: For analyzing business data: revenue, ARR, customer segmentation, product usage.
---

# SQL Analysis Skill

## Workflow

1. Clarify analysis requirements
2. Choose the correct data source
3. Apply standard filters
4. Validate results

## Data Source Selection

| Analysis Type | Recommended Table | Detailed Docs |
|--------------|-------------------|---------------|
| Revenue Analysis | monthly_revenue | \`references/finance.md\` |
| Product Usage | daily_usage | \`references/product.md\` |
| Sales Pipeline | pipeline_snapshot | \`references/sales.md\` |

## Required Filters

All queries must:
- Exclude test accounts: \`account != 'Test'\`
- Use only complete periods

Read corresponding files in references/ when specific table structures or query examples are needed.`)])],-1)),t[6]||(t[6]=e("p",null,[e("strong",null,"references/finance.md (Layer 3)"),a(":")],-1)),t[7]||(t[7]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# Financial Tables Detailed Structure

## monthly_revenue Table

| Field | Type | Description |
|-------|------|-------------|
| account_id | STRING | Account ID |
| month | DATE | Month (first day of each month) |
| mrr | FLOAT | Monthly Recurring Revenue |
| arr | FLOAT | Annual Recurring Revenue |
| segment | STRING | Customer segment |

## Common Queries

### Monthly Revenue by Segment

\`\`\`sql
SELECT 
  segment,
  DATE_TRUNC(month, MONTH) as period,
  SUM(mrr) as total_mrr
FROM monthly_revenue
WHERE account_id != 'Test'
GROUP BY 1, 2
ORDER BY 2 DESC, 3 DESC`)])],-1)),t[8]||(t[8]=e("h3",{id:"calculate-month-over-month-growth",tabindex:"-1"},[a("Calculate Month-over-Month Growth "),e("a",{class:"header-anchor",href:"#calculate-month-over-month-growth","aria-label":"Permalink to “Calculate Month-over-Month Growth”"},"​")],-1)),t[9]||(t[9]=e("p",null,"... (more query examples)",-1)),t[10]||(t[10]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
**Key Principle**: Information should only exist in either SKILL.md OR references/, not both.

---

## Executable Script Support

### Why Scripts are Needed

Some operations are more efficient and reliable when executed with code rather than generated with tokens:

| Task | Token Generation | Code Execution |
|------|-----------------|----------------|
| Sort 1000 numbers | Many tokens, error-prone | Milliseconds, 100% accurate |
| Parse PDF form fields | Need to load PDF into context | Direct file processing |
| Format conversion | Prone to format issues | Deterministic output |

### Script Directory Structure
`)])],-1)),t[11]||(t[11]=e("p",null,"skill/ └── pdf-skill/ ├── SKILL.md ├── references/ │ └── forms.md └── scripts/ ├── extract_form_fields.py ├── merge_pdfs.py └── convert_to_images.py",-1)),t[12]||(t[12]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
### Referencing Scripts in SKILL.md

\`\`\`markdown
---
name: pdf
description: PDF processing toolkit: extract text and tables, create new PDFs, merge/split documents, process forms.
---

# PDF Processing Skill

## Extract Form Fields

No need to load PDF into context, run script directly:

\`\`\`bash
python scripts/extract_form_fields.py input.pdf`)])],-1)),t[13]||(t[13]=e("p",null,"Example output:",-1)),t[14]||(t[14]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "fields": [
    {"name": "full_name", "type": "text", "value": ""},
    {"name": "date", "type": "date", "value": ""}
  ]
}`)])],-1)),t[15]||(t[15]=e("h2",{id:"merge-multiple-pdfs",tabindex:"-1"},[a("Merge Multiple PDFs "),e("a",{class:"header-anchor",href:"#merge-multiple-pdfs","aria-label":"Permalink to “Merge Multiple PDFs”"},"​")],-1)),t[16]||(t[16]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"python scripts/merge_pdfs.py file1.pdf file2.pdf -o output.pdf")])],-1)),t[17]||(t[17]=e("h2",{id:"convert-to-images",tabindex:"-1"},[a("Convert to Images "),e("a",{class:"header-anchor",href:"#convert-to-images","aria-label":"Permalink to “Convert to Images”"},"​")],-1)),t[18]||(t[18]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"python scripts/convert_to_images.py document.pdf --output-dir ./images")])],-1)),t[19]||(t[19]=e("p",null,[a("See "),e("code",null,"references/scripts-guide.md"),a(" for detailed parameter descriptions.")],-1)),t[20]||(t[20]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
### Script Writing Principles

1. **Independently Executable**: Scripts should run independently without complex environment dependencies
2. **Clear Input/Output**: Explicit parameters and return formats
3. **Error Handling**: Gracefully handle exceptions
4. **Minimal Dependencies**: Only use necessary libraries

**Example Script** (\`scripts/extract_form_fields.py\`):

\`\`\`python
#!/usr/bin/env python3
"""Extract PDF form field information"""

import sys
import json

def extract_fields(pdf_path: str) -> dict:
    """Extract form fields from PDF"""
    try:
        # Use PyPDF2 or other library
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
    print(json.dumps(result, indent=2, ensure_ascii=False))`)])],-1)),t[21]||(t[21]=n("",10)),t[22]||(t[22]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},"name: sql-analysis")])],-1)),t[23]||(t[23]=n("",5)),t[24]||(t[24]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},"description: Help process data")])],-1)),t[25]||(t[25]=e("p",null,'Problem: Too vague, what counts as "process data"?',-1)),t[26]||(t[26]=e("p",null,[e("strong",null,"Good description"),a(":")],-1)),t[27]||(t[27]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},"description: Extract tables from PDFs and convert to CSV format for data analysis workflows. Use when filling PDF forms or batch processing PDF documents. Not for simple PDF viewing or basic format conversion.")])],-1)),t[28]||(t[28]=n("",4)),t[29]||(t[29]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# SQL Analysis Skill

## Workflow

1. **Clarify Requirements**
   - Time range? (default current year)
   - Customer segment?
   - For what decision?

2. **Select Data Source**
   - Prefer summary tables
   - Confirm required fields exist

3. **Execute Query**
   - Apply standard filters
   - Validate result reasonableness

## Standard Filters

All queries must include:
- \`WHERE account_id != 'Test'\`
- \`WHERE month <= DATE_TRUNC(CURRENT_DATE(), MONTH)\`

## Detailed Documentation

- Table structures → \`references/tables.md\`
- Query examples → \`references/examples.md\``)])],-1)),t[30]||(t[30]=n("",7)),t[31]||(t[31]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`# ✅ Should activate
"Use sql-analysis skill to analyze data" → Explicit request, must activate
"Help me check last quarter's ARR changes" → Natural request, semantic match activates
"Revenue trend analysis" → Keyword match, should activate

# ❌ Should NOT activate
"Help me write a SQL tutorial" → Teaching, not analysis
"Database performance tuning" → Out of scope (description states not applicable)
"Create new table" → DDL operation, not applicable`)])],-1)),t[32]||(t[32]=n("",4)),t[33]||(t[33]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
# Skill automated test script

echo "=== Trigger Tests ==="
# Test 1: Normal trigger
opencode --prompt "Help me query last quarter's revenue" --check-skill "sql-analysis"

# Test 2: Negative test
opencode --prompt "Help me write email" --expect-no-skill "sql-analysis"

echo "=== Functional Tests ==="
# Test output format
opencode --prompt "Analyze ARR" | grep -q "## ARR Calculation" && echo "✅ Output format correct"`)])],-1)),t[34]||(t[34]=n("",7)),t[35]||(t[35]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`User: Help me create a data warehouse skill. I'll describe our tables and business logic, you help me structure it.

Claude: Sure, tell me:
1. What are your main data tables?
2. What business terms need definition?
3. What rules must be followed when querying?

[Conversation continues, Claude asks questions and organizes information]

Claude: Based on our discussion, here's the SKILL.md structure:
...`)])],-1)),t[36]||(t[36]=e("h3",{id:"learning-from-failures",tabindex:"-1"},[a("Learning from Failures "),e("a",{class:"header-anchor",href:"#learning-from-failures","aria-label":"Permalink to “Learning from Failures”"},"​")],-1)),t[37]||(t[37]=e("p",null,"When Skill execution goes wrong:",-1)),t[38]||(t[38]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`User: This query result is wrong, it didn't exclude test accounts

Claude: Let me reflect on the issue:
1. Standard filters weren't applied
2. Possibly because instructions weren't clear enough

Suggest updating SKILL.md:
- Bold emphasize in "Required Filters" section
- Add "Absolutely must not omit" warning`)])],-1)),t[39]||(t[39]=e("p",null,"Solidify these reflections into the Skill.",-1)),t[40]||(t[40]=e("h3",{id:"continuous-optimization",tabindex:"-1"},[a("Continuous Optimization "),e("a",{class:"header-anchor",href:"#continuous-optimization","aria-label":"Permalink to “Continuous Optimization”"},"​")],-1)),t[41]||(t[41]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`1. Use Skill in your work
2. Record successful patterns and failed cases
3. Periodically review and update Skill
4. Share with team members`)])],-1)),t[42]||(t[42]=n("",4)),t[43]||(t[43]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: docx
description: "Document creation, editing, and analysis, supporting revisions, comments, format preservation, and text extraction. Use when Claude needs to process .docx files: (1) create new documents (2) modify content (3) handle revisions (4) add comments"
license: Proprietary. LICENSE.txt has complete terms
---

# DOCX Creation, Editing, and Analysis

## Overview

Users may request creating, editing, or analyzing .docx files. .docx is essentially a ZIP archive containing XML files.

## Workflow Decision Tree

### Read/Analyze Content
Use "Text Extraction" or "Raw XML Access" sections below

### Create New Document
Use "Create New Word Document" workflow

### Edit Existing Document
- **Your own document + simple changes**: Use "Basic OOXML Editing"
- **Someone else's document**: Use **Revision Workflow** (recommended default)
- **Legal, academic, business, government documents**: **Must** use revision workflow

## Text Extraction

Use pandoc to convert to markdown:

\`\`\`bash
pandoc --track-changes=all path-to-file.docx -o output.md`)])],-1)),t[44]||(t[44]=n("",4)),t[45]||(t[45]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
**Highlights of this Skill**:
- Clear decision tree helps choose correct workflow
- Distinguishes handling for different scenarios
- References detailed docs instead of inline everything

### Example 2: Frontend Design Skill

Source: [Anthropic Engineering Blog](https://claude.com/blog/improving-frontend-design-through-skills)

\`\`\`markdown
---
name: frontend-design
description: Create unique, production-grade frontend interfaces. For building web components, pages, or applications. Generate creative, refined code, avoiding generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

# Frontend Design Skill

## Design Thinking

Before coding, understand context and determine **bold aesthetic direction**:

- **Purpose**: What problem does this interface solve? Who's using it?
- **Style**: Choose an extreme: minimalism, maximalism, retro-futuristic, natural organic, luxury refined, playful toy-like, editorial magazine...
- **Differentiation**: What makes this design memorable?

## Frontend Aesthetics Guide

### Typography
Choose distinctive fonts. Avoid generic ones like Arial, Inter.
Recommended: JetBrains Mono, Playfair Display, IBM Plex, Bricolage Grotesque

### Color
Commit to a unified aesthetic. Use CSS variables for consistency.
Primary color with sharp accent beats evenly distributed muted palette.

### Motion
Use animations for impact and micro-interactions.
A carefully choreographed page load (staggered reveal) is more delightful than scattered micro-interactions.

### Background
Create atmosphere and depth, not default solid colors.
Gradient meshes, noise textures, geometric patterns, layered transparency.

## Absolutely Avoid

- Inter, Roboto, Arial, system fonts
- White background with purple gradient (typical AI aesthetic)
- Predictable layout and component patterns
- Template designs lacking contextual character`)])],-1)),t[46]||(t[46]=e("p",null,[e("strong",null,"Highlights of this Skill"),a(":")],-1)),t[47]||(t[47]=e("ul",null,[e("li",null,"Identifies clear problem (generic AI-generated aesthetics)"),e("li",null,"Provides specific alternatives"),e("li",null,'Has "absolutely avoid" checklist')],-1)),t[48]||(t[48]=e("h3",{id:"example-3-brand-guidelines-skill",tabindex:"-1"},[a("Example 3: Brand Guidelines Skill "),e("a",{class:"header-anchor",href:"#example-3-brand-guidelines-skill","aria-label":"Permalink to “Example 3: Brand Guidelines Skill”"},"​")],-1)),t[49]||(t[49]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: brand-guidelines
description: Apply company official brand colors and typography. For creating anything requiring company visual style: documents, presentations, interfaces.
---

# Brand Specifications

## Colors

**Primary Colors**:
- Dark: \`#141413\`
- Light: \`#faf9f5\`
- Medium Gray: \`#b0aea5\`

**Accent Colors**:
- Orange: \`#d97757\`
- Blue: \`#6a9bcc\`
- Green: \`#788c5d\`

## Typography

- **Headlines**: Poppins (24pt and above)
- **Body**: Lora
- **Fallback**: Arial / Georgia

## Application Rules

- Use Poppins for headlines, Lora for body
- Intelligently choose text color based on background
- Use accent color rotation for non-text shapes`)])],-1)),t[50]||(t[50]=n("",13)),t[51]||(t[51]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. View all files
find my-skill/ -type f -name "*.md" -o -name "*.py" -o -name "*.js"

# 2. Check for network requests
grep -r "http" my-skill/
grep -r "fetch\\|requests\\|urllib" my-skill/

# 3. Check for filesystem operations
grep -r "open\\|write\\|delete\\|remove" my-skill/

# 4. Check dependencies
cat my-skill/requirements.txt
cat my-skill/package.json`)])],-1)),t[52]||(t[52]=n("",13))])}const v=i(u,[["render",p]]);export{k as __pageData,v as default};
