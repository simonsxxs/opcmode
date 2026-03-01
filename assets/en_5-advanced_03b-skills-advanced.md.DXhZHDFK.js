import{_ as i,I as s,c as l,o,a5 as n,j as e,J as d,a,b1 as c}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"5.3b Advanced Skills","description":"Learn advanced Skill features including progressive disclosure, executable scripts, and best practices to build powerful knowledge packages.","frontmatter":{"title":"5.3b Advanced Skills","subtitle":"Progressive Disclosure, Script Execution, and Best Practices","course":"OpenCode Chinese Practical Course","stage":"Stage 5","lesson":"5.3b","duration":"30 minutes","practice":"40 minutes","level":"Advanced","description":"Learn advanced Skill features including progressive disclosure, executable scripts, and best practices to build powerful knowledge packages.","tags":["Skill","Progressive Disclosure","Executable Scripts","Best Practices"],"prerequisite":["5.3a Skill Basics"]},"headers":[],"relativePath":"en/5-advanced/03b-skills-advanced.md","filePath":"en/5-advanced/03b-skills-advanced.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/03b-skills-advanced.md"};function p(m,t,h,g,f,y){const r=s("AdInArticle");return o(),l("div",null,[t[0]||(t[0]=n('<h1 id="_5-3b-advanced-skills" tabindex="-1">5.3b Advanced Skills <a class="header-anchor" href="#_5-3b-advanced-skills" aria-label="Permalink to “5.3b Advanced Skills”">​</a></h1><blockquote><p>This lesson covers advanced Skill usage: three-layer progressive disclosure structure, executable scripts, 5-step creation process, testing and validation, and real-world examples.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key concepts from this lesson:</p><img src="'+c+'" alt="Advanced Skills Notes" data-zoom-src="/images/5-advanced/03b-skills-advanced-notes.jpeg"><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Design a three-layer progressive disclosure structure</li><li>Integrate executable scripts into Skills</li><li>Create high-quality Skills using the 5-step process</li><li>Systematically test and validate Skills</li><li>Learn from real-world examples to improve your own Skills</li></ul><hr><h2 id="three-layer-progressive-disclosure-structure" tabindex="-1">Three-Layer Progressive Disclosure Structure <a class="header-anchor" href="#three-layer-progressive-disclosure-structure" aria-label="Permalink to “Three-Layer Progressive Disclosure Structure”">​</a></h2><h3 id="why-layering-is-needed" tabindex="-1">Why Layering is Needed <a class="header-anchor" href="#why-layering-is-needed" aria-label="Permalink to “Why Layering is Needed”">​</a></h3><p>Imagine your Skill contains:</p><ul><li>Detailed structures of 10 tables</li><li>50 common query examples</li><li>Various edge case handling</li></ul><p>If you put all of this into SKILL.md, it would cause:</p><ul><li>Rapid context window exhaustion</li><li>Model attention scattered by irrelevant content</li><li>Skyrocketing token costs</li></ul><p><strong>Solution</strong>: Organize Skills like a manual:</p>',16)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Table of Contents (always visible) → Chapters (read on demand) → Quick Reference (consult when needed)")])],-1)),t[2]||(t[2]=e("h3",{id:"three-layer-structure-explained",tabindex:"-1"},[a("Three-Layer Structure Explained "),e("a",{class:"header-anchor",href:"#three-layer-structure-explained","aria-label":"Permalink to “Three-Layer Structure Explained”"},"​")],-1)),d(r),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`skill/
└── sql-analysis/
    ├── SKILL.md                    # Layer 2: Main workflow
    └── references/                 # Layer 3: Detailed documentation
        ├── finance.md              # Financial table structures
        ├── product.md              # Product table structures
        ├── sales.md                # Sales table structures
        └── examples/
            ├── revenue-queries.md  # Revenue query examples
            └── churn-queries.md    # Churn analysis examples`)])],-1)),t[4]||(t[4]=n('<p><strong>Layer 1</strong>: name + description (~100 words)</p><ul><li>Always loaded into <code>&lt;available_skills&gt;</code></li><li>Used to determine if this Skill should be loaded</li></ul><p><strong>Layer 2</strong>: SKILL.md content</p><ul><li>Loaded when task matches</li><li>Contains workflows, key logic, decision trees</li><li>Keep it concise (recommended 300-2000+ words)</li></ul><p><strong>Layer 3</strong>: references/ directory</p><ul><li>Loaded only when specific details are needed</li><li>Claude reads files on demand</li><li>Can contain extensive detailed information</li></ul><h3 id="implementation-example" tabindex="-1">Implementation Example <a class="header-anchor" href="#implementation-example" aria-label="Permalink to “Implementation Example”">​</a></h3><p><strong>SKILL.md (Layer 2)</strong>:</p>',8)),t[5]||(t[5]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
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
    print(json.dumps(result, indent=2, ensure_ascii=False))`)])],-1)),t[21]||(t[21]=n('<hr><h2 id="_5-step-creation-process" tabindex="-1">5-Step Creation Process <a class="header-anchor" href="#_5-step-creation-process" aria-label="Permalink to “5-Step Creation Process”">​</a></h2><h3 id="step-1-clarify-requirements" tabindex="-1">Step 1: Clarify Requirements <a class="header-anchor" href="#step-1-clarify-requirements" aria-label="Permalink to “Step 1: Clarify Requirements”">​</a></h3><p>Before writing anything, answer these questions:</p><table tabindex="0"><thead><tr><th>Question</th><th>Purpose</th></tr></thead><tbody><tr><td>What specific problem does this Skill solve?</td><td>Clarify value</td></tr><tr><td>When should it be triggered?</td><td>Design description</td></tr><tr><td>What does successful output look like?</td><td>Define acceptance criteria</td></tr><tr><td>What are the edge cases?</td><td>Avoid omissions</td></tr></tbody></table><p><strong>Good Candidate Scenarios</strong>:</p><ul><li>Knowledge reusable across projects</li><li>Processes needed by multiple people</li><li>Stable patterns that don&#39;t change often</li></ul><p><strong>Not Suitable for Skills</strong>:</p><ul><li>One-time tasks</li><li>Frequently changing content</li><li>Project-specific conventions (use CLAUDE.md)</li></ul><h3 id="step-2-write-name" tabindex="-1">Step 2: Write name <a class="header-anchor" href="#step-2-write-name" aria-label="Permalink to “Step 2: Write name”">​</a></h3>',10)),t[22]||(t[22]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},"name: sql-analysis")])],-1)),t[23]||(t[23]=n('<p>Naming principles:</p><ul><li>Short and clear</li><li>Lowercase letters and numbers</li><li>Single hyphen separator</li><li>Reflect core functionality</li></ul><h3 id="step-3-write-description-most-important" tabindex="-1">Step 3: Write description (Most Important) <a class="header-anchor" href="#step-3-write-description-most-important" aria-label="Permalink to “Step 3: Write description (Most Important)”">​</a></h3><p>description determines triggering and is the most critical part.</p><p><strong>Bad description</strong>:</p>',5)),t[24]||(t[24]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},"description: Help process data")])],-1)),t[25]||(t[25]=e("p",null,'Problem: Too vague, what counts as "process data"?',-1)),t[26]||(t[26]=e("p",null,[e("strong",null,"Good description"),a(":")],-1)),t[27]||(t[27]=e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},"description: Extract tables from PDFs and convert to CSV format for data analysis workflows. Use when filling PDF forms or batch processing PDF documents. Not for simple PDF viewing or basic format conversion.")])],-1)),t[28]||(t[28]=n('<p><strong>description Checklist</strong>:</p><table tabindex="0"><thead><tr><th>Element</th><th>Example</th></tr></thead><tbody><tr><td>Specific capability</td><td>&quot;Extract tables and convert to CSV&quot;</td></tr><tr><td>Trigger scenarios</td><td>&quot;When filling PDF forms&quot;</td></tr><tr><td>Target use case</td><td>&quot;For data analysis workflows&quot;</td></tr><tr><td>Boundary limits</td><td>&quot;Not for simple PDF viewing&quot;</td></tr></tbody></table><h3 id="step-4-write-main-instructions" tabindex="-1">Step 4: Write Main Instructions <a class="header-anchor" href="#step-4-write-main-instructions" aria-label="Permalink to “Step 4: Write Main Instructions”">​</a></h3><p>Structured, scannable, actionable:</p>',4)),t[29]||(t[29]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# SQL Analysis Skill

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
- Query examples → \`references/examples.md\``)])],-1)),t[30]||(t[30]=n('<p><strong>Writing Principles</strong>:</p><table tabindex="0"><thead><tr><th>Principle</th><th>Description</th></tr></thead><tbody><tr><td>Use Markdown structure</td><td>Headers, lists, tables improve readability</td></tr><tr><td>Provide concrete examples</td><td>Code blocks show correct usage</td></tr><tr><td>State what it can&#39;t do</td><td>Avoid misuse</td></tr><tr><td>Reference detailed docs</td><td>Keep main file concise</td></tr></tbody></table><h3 id="step-5-test-and-validate" tabindex="-1">Step 5: Test and Validate <a class="header-anchor" href="#step-5-test-and-validate" aria-label="Permalink to “Step 5: Test and Validate”">​</a></h3><p>Systematically test Skills to ensure they work across various scenarios.</p><h4 id="test-matrix" tabindex="-1">Test Matrix <a class="header-anchor" href="#test-matrix" aria-label="Permalink to “Test Matrix”">​</a></h4><table tabindex="0"><thead><tr><th>Test Type</th><th>Test Content</th><th>Expected Result</th><th>Priority</th></tr></thead><tbody><tr><td><strong>Trigger Test</strong></td><td>&quot;Help me query last quarter&#39;s revenue&quot;</td><td>Skill activates</td><td>P0</td></tr><tr><td><strong>Boundary Test</strong></td><td>&quot;Query revenue&quot; (no time range)</td><td>Ask then execute</td><td>P1</td></tr><tr><td><strong>Negative Test</strong></td><td>&quot;Help me write an email&quot;</td><td>Doesn&#39;t activate</td><td>P0</td></tr><tr><td><strong>Output Test</strong></td><td>Verify output format matches spec</td><td>Format correct</td><td>P1</td></tr><tr><td><strong>Error Test</strong></td><td>Intentionally input wrong parameters</td><td>Graceful error</td><td>P2</td></tr></tbody></table><h4 id="trigger-testing" tabindex="-1">Trigger Testing <a class="header-anchor" href="#trigger-testing" aria-label="Permalink to “Trigger Testing”">​</a></h4>',7)),t[31]||(t[31]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`# ✅ Should activate
"Use sql-analysis skill to analyze data" → Explicit request, must activate
"Help me check last quarter's ARR changes" → Natural request, semantic match activates
"Revenue trend analysis" → Keyword match, should activate

# ❌ Should NOT activate
"Help me write a SQL tutorial" → Teaching, not analysis
"Database performance tuning" → Out of scope (description states not applicable)
"Create new table" → DDL operation, not applicable`)])],-1)),t[32]||(t[32]=n('<h4 id="functional-testing" tabindex="-1">Functional Testing <a class="header-anchor" href="#functional-testing" aria-label="Permalink to “Functional Testing”">​</a></h4><table tabindex="0"><thead><tr><th>Check Item</th><th>Test Method</th><th>Pass Criteria</th></tr></thead><tbody><tr><td>Output consistency</td><td>Run same input 3 times</td><td>Core content consistent</td></tr><tr><td>Novice usability</td><td>Let someone unfamiliar try</td><td>Successfully completes task</td></tr><tr><td>Documentation accuracy</td><td>Follow examples</td><td>Results match examples</td></tr><tr><td>Reference integrity</td><td>Check references/ paths</td><td>All references exist</td></tr></tbody></table><h4 id="test-script-optional" tabindex="-1">Test Script (Optional) <a class="header-anchor" href="#test-script-optional" aria-label="Permalink to “Test Script (Optional)”">​</a></h4><p>Create <code>.opencode/skill/&lt;name&gt;/test.sh</code>:</p>',4)),t[33]||(t[33]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
# Skill automated test script

echo "=== Trigger Tests ==="
# Test 1: Normal trigger
opencode --prompt "Help me query last quarter's revenue" --check-skill "sql-analysis"

# Test 2: Negative test
opencode --prompt "Help me write email" --expect-no-skill "sql-analysis"

echo "=== Functional Tests ==="
# Test output format
opencode --prompt "Analyze ARR" | grep -q "## ARR Calculation" && echo "✅ Output format correct"`)])],-1)),t[34]||(t[34]=n('<h4 id="test-checklist" tabindex="-1">Test Checklist <a class="header-anchor" href="#test-checklist" aria-label="Permalink to “Test Checklist”">​</a></h4><p>Complete these checks before putting Skill into production:</p><ul><li>[ ] <strong>Trigger Test</strong>: All 3 positive cases activate</li><li>[ ] <strong>Negative Test</strong>: All 3 boundary cases don&#39;t activate</li><li>[ ] <strong>Output Test</strong>: Output format matches expectations</li><li>[ ] <strong>Novice Test</strong>: Non-experts can successfully use</li><li>[ ] <strong>Reference Test</strong>: All references/ files exist</li><li>[ ] <strong>Error Test</strong>: Clear messages when wrong input</li></ul><hr><h2 id="iterative-development-method" tabindex="-1">Iterative Development Method <a class="header-anchor" href="#iterative-development-method" aria-label="Permalink to “Iterative Development Method”">​</a></h2><h3 id="collaborating-with-claude-to-create-skills" tabindex="-1">Collaborating with Claude to Create Skills <a class="header-anchor" href="#collaborating-with-claude-to-create-skills" aria-label="Permalink to “Collaborating with Claude to Create Skills”">​</a></h3><p>Don&#39;t start from scratch, let Claude help extract knowledge:</p>',7)),t[35]||(t[35]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`User: Help me create a data warehouse skill. I'll describe our tables and business logic, you help me structure it.

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
4. Share with team members`)])],-1)),t[42]||(t[42]=n('<hr><h2 id="real-world-examples" tabindex="-1">Real-World Examples <a class="header-anchor" href="#real-world-examples" aria-label="Permalink to “Real-World Examples”">​</a></h2><h3 id="example-1-docx-creation-skill" tabindex="-1">Example 1: DOCX Creation Skill <a class="header-anchor" href="#example-1-docx-creation-skill" aria-label="Permalink to “Example 1: DOCX Creation Skill”">​</a></h3><p>Source: <a href="https://github.com/anthropics/skills" target="_blank" rel="noreferrer">Anthropic Skills Repository</a></p>',4)),t[43]||(t[43]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
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
pandoc --track-changes=all path-to-file.docx -o output.md`)])],-1)),t[44]||(t[44]=n('<h2 id="create-new-word-document" tabindex="-1">Create New Word Document <a class="header-anchor" href="#create-new-word-document" aria-label="Permalink to “Create New Word Document”">​</a></h2><p>Use <strong>docx-js</strong>, must read complete <code>docx-js.md</code> file first.</p><h2 id="detailed-documentation" tabindex="-1">Detailed Documentation <a class="header-anchor" href="#detailed-documentation" aria-label="Permalink to “Detailed Documentation”">​</a></h2><ul><li>OOXML editing → <code>ooxml.md</code></li><li>docx-js syntax → <code>docx-js.md</code></li></ul>',4)),t[45]||(t[45]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
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
- Use accent color rotation for non-text shapes`)])],-1)),t[50]||(t[50]=n('<p><strong>Highlights of this Skill</strong>:</p><ul><li>Precise values (hex colors, font sizes)</li><li>Information Claude doesn&#39;t know by default</li><li>Concise and direct</li></ul><hr><h2 id="security-audit" tabindex="-1">Security Audit <a class="header-anchor" href="#security-audit" aria-label="Permalink to “Security Audit”">​</a></h2><h3 id="why-auditing-is-needed" tabindex="-1">Why Auditing is Needed <a class="header-anchor" href="#why-auditing-is-needed" aria-label="Permalink to “Why Auditing is Needed”">​</a></h3><p>Skills can:</p><ul><li>Provide instructions to Claude</li><li>Contain executable code</li><li>Guide Claude to access network resources</li></ul><p>Malicious Skills could cause data leaks or system damage.</p><h3 id="security-audit-checklist" tabindex="-1">Security Audit Checklist <a class="header-anchor" href="#security-audit-checklist" aria-label="Permalink to “Security Audit Checklist”">​</a></h3><table tabindex="0"><thead><tr><th>Check Item</th><th>Check Content</th><th>Risk</th></tr></thead><tbody><tr><td><strong>File Content</strong></td><td>Read all .md files</td><td>Suspicious instructions</td></tr><tr><td><strong>Script Code</strong></td><td>Review .py/.js files</td><td>Malicious code</td></tr><tr><td><strong>Network Requests</strong></td><td>Check URLs and API calls</td><td>Connecting to untrusted services</td></tr><tr><td><strong>Dependencies</strong></td><td>Check import/require</td><td>Malicious packages</td></tr><tr><td><strong>Resource Files</strong></td><td>Check images, data files</td><td>Sensitive information</td></tr></tbody></table><h3 id="source-trustworthiness" tabindex="-1">Source Trustworthiness <a class="header-anchor" href="#source-trustworthiness" aria-label="Permalink to “Source Trustworthiness”">​</a></h3><table tabindex="0"><thead><tr><th>Source</th><th>Trust Level</th><th>Recommendation</th></tr></thead><tbody><tr><td>Official repositories</td><td>High</td><td>Use directly</td></tr><tr><td>Well-known developers</td><td>Medium</td><td>Quick review then use</td></tr><tr><td>Unknown sources</td><td>Low</td><td>Full audit before use</td></tr><tr><td>Web downloads</td><td>Unknown</td><td>Use cautiously</td></tr></tbody></table><h3 id="audit-example" tabindex="-1">Audit Example <a class="header-anchor" href="#audit-example" aria-label="Permalink to “Audit Example”">​</a></h3>',13)),t[51]||(t[51]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 1. View all files
find my-skill/ -type f -name "*.md" -o -name "*.py" -o -name "*.js"

# 2. Check for network requests
grep -r "http" my-skill/
grep -r "fetch\\|requests\\|urllib" my-skill/

# 3. Check for filesystem operations
grep -r "open\\|write\\|delete\\|remove" my-skill/

# 4. Check dependencies
cat my-skill/requirements.txt
cat my-skill/package.json`)])],-1)),t[52]||(t[52]=n('<hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Symptom</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Skill always triggers</td><td>description too broad</td><td>Add boundary limits: &quot;Not for X&quot;</td></tr><tr><td>Skill never triggers</td><td>description too narrow</td><td>Add more trigger scenarios</td></tr><tr><td>Multiple Skills conflict</td><td>description overlap</td><td>Clearly distinguish responsibilities</td></tr><tr><td>references don&#39;t load</td><td>Wrong path</td><td>Use relative paths like <code>references/xxx.md</code></td></tr><tr><td>Script execution fails</td><td>Missing dependencies</td><td>Ensure environment has necessary packages</td></tr><tr><td>Inconsistent output</td><td>Vague instructions</td><td>Add specific examples and validation steps</td></tr><tr><td>Context overflow</td><td>SKILL.md too long</td><td>Split into references/</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li><p><strong>Three-Layer Progressive Disclosure</strong></p><ul><li>Layer 1: name + description (always visible)</li><li>Layer 2: SKILL.md content (loaded on task match)</li><li>Layer 3: references/ (loaded on demand)</li></ul></li><li><p><strong>Executable Scripts</strong></p><ul><li>Suitable for deterministic operations</li><li>Place in <code>scripts/</code> directory</li><li>Explain how to call in SKILL.md</li></ul></li><li><p><strong>5-Step Creation Process</strong></p><ul><li>Clarify requirements → Write name → Write description → Write instructions → Test and validate</li></ul></li><li><p><strong>Iterative Development</strong></p><ul><li>Collaborate with Claude to extract knowledge</li><li>Learn from failures and solidify into Skill</li></ul></li><li><p><strong>Security Audit</strong></p><ul><li>Check files, scripts, network, dependencies</li><li>Prefer trusted sources</li></ul></li></ol><hr><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to “Further Reading”">​</a></h2><ul><li><a href="https://github.com/anthropics/skills" target="_blank" rel="noreferrer">Anthropic Skills Official Repository</a></li><li><a href="https://skillsmp.com/" target="_blank" rel="noreferrer">Skills Marketplace</a></li><li><a href="https://claude.com/blog/building-skills-for-claude-code" target="_blank" rel="noreferrer">Building Skills for Claude Code</a></li><li><a href="https://claude.com/blog/how-to-create-skills-key-steps-limitations-and-examples" target="_blank" rel="noreferrer">How to create Skills</a></li></ul><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next lesson we&#39;ll learn about <strong><a href="./03c-skills-patterns.html">Advanced Skill Patterns</a></strong>.</p><p>You&#39;ll learn:</p><ul><li>Skill and MCP collaboration patterns (Kitchen vs Recipe)</li><li>Five workflow patterns: sequential orchestration, multi-MCP coordination, iterative optimization, etc.</li><li>Distribution and sharing strategies (GitHub, API)</li><li>Enterprise-grade Skill design best practices</li></ul></blockquote>',13))])}const v=i(u,[["render",p]]);export{k as __pageData,v as default};
