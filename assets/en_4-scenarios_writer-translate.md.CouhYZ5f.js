import{_ as r,I as o,c as s,o as l,a5 as a,j as e,J as d,a as t,aQ as u}from"./chunks/framework.Dtwt352Q.js";const w=JSON.parse('{"title":"A5 Multilingual Translation & Refinement","description":"Use AI for batch translation, refinement, and rewriting across multiple languages. Build glossaries to maintain consistency and boost multilingual content production.","frontmatter":{"title":"A5 Multilingual Translation & Refinement","subtitle":"Batch translation, glossaries, and rewriting","course":"OpenCode Practical Course","stage":"Phase 4","lesson":"A5","duration":"15 minutes","practice":"20 minutes","level":"Advanced","description":"Use AI for batch translation, refinement, and rewriting across multiple languages. Build glossaries to maintain consistency and boost multilingual content production.","tags":["Translation","Refinement","Rewriting"],"prerequisite":["A1 Writing Workflow"]},"headers":[],"relativePath":"en/4-scenarios/writer-translate.md","filePath":"en/4-scenarios/writer-translate.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/writer-translate.md"};function m(c,n,g,h,f,y){const i=o("AdInArticle");return l(),s("div",null,[n[0]||(n[0]=a('<h1 id="a5-multilingual-translation-refinement" tabindex="-1">A5 Multilingual Translation &amp; Refinement <a class="header-anchor" href="#a5-multilingual-translation-refinement" aria-label="Permalink to “A5 Multilingual Translation &amp; Refinement”">​</a></h1><blockquote><p>💡 <strong>One-liner</strong>: Use AI for translation, refinement, and rewriting while maintaining terminology consistency.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+u+'" alt="A5 Translation Notes" data-zoom-src="/images/4-scenarios/writer-translate-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Translate full documents or sections with AI</li><li>Maintain consistency in technical terminology</li><li>Refine text to improve readability</li><li>Rewrite content to reduce similarity</li></ul><hr><h2 id="why-opencode-instead-of-web-based-ai" tabindex="-1">Why OpenCode Instead of Web-based AI? <a class="header-anchor" href="#why-opencode-instead-of-web-based-ai" aria-label="Permalink to “Why OpenCode Instead of Web-based AI?”">​</a></h2><table tabindex="0"><thead><tr><th>Capability</th><th>Web-based AI</th><th>OpenCode</th></tr></thead><tbody><tr><td>Batch Translation</td><td>❌ Copy-paste section by section</td><td>✅ Multi-file batch processing, format preserved</td></tr><tr><td>Terminology Consistency</td><td>❌ AI may translate differently each time</td><td>✅ @glossary reference, unified across document</td></tr><tr><td>Long Document Handling</td><td>❌ Easily exceeds context limits</td><td>✅ Section-by-section translation, auto-merge</td></tr><tr><td>Format Preservation</td><td>❌ Format often lost</td><td>✅ Direct file editing, original format retained</td></tr><tr><td>Version Comparison</td><td>❌</td><td>✅ Git tracks translation history</td></tr></tbody></table><hr><h2 id="your-current-pain-points" tabindex="-1">Your Current Pain Points <a class="header-anchor" href="#your-current-pain-points" aria-label="Permalink to “Your Current Pain Points”">​</a></h2><ul><li>Inconsistent terminology in translated articles</li><li>Unstable quality for long document translations</li><li>Need to reduce similarity but manual rewriting is exhausting</li></ul><hr><h2 id="when-to-use-this-technique" tabindex="-1">When to Use This Technique <a class="header-anchor" href="#when-to-use-this-technique" aria-label="Permalink to “When to Use This Technique”">​</a></h2><ul><li>When you need: High-quality translation or rewriting</li><li>And you don&#39;t want to: Spend hours manually adjusting every word</li></ul><hr><h2 id="🎒-before-you-start" tabindex="-1">🎒 Before You Start <a class="header-anchor" href="#🎒-before-you-start" aria-label="Permalink to “🎒 Before You Start”">​</a></h2><blockquote><p>Make sure you&#39;ve completed the following:</p></blockquote><ul><li>[ ] Completed <a href="./writer-workflow.html">A1 Writing Workflow</a></li><li>[ ] Have text that needs translation or refinement</li></ul><hr><h2 id="core-concept" tabindex="-1">Core Concept <a class="header-anchor" href="#core-concept" aria-label="Permalink to “Core Concept”">​</a></h2><h3 id="translation-workflow" tabindex="-1">Translation Workflow <a class="header-anchor" href="#translation-workflow" aria-label="Permalink to “Translation Workflow”">​</a></h3>',24)),n[1]||(n[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Glossary Preparation → Section Translation → Terminology Unification → Final Review")])],-1)),n[2]||(n[2]=a('<h3 id="translation-vs-refinement-vs-rewriting" tabindex="-1">Translation vs Refinement vs Rewriting <a class="header-anchor" href="#translation-vs-refinement-vs-rewriting" aria-label="Permalink to “Translation vs Refinement vs Rewriting”">​</a></h3><table tabindex="0"><thead><tr><th>Task</th><th>Purpose</th><th>Typical Scenario</th></tr></thead><tbody><tr><td>Translation</td><td>Cross-language conversion</td><td>Translate English paper to Chinese</td></tr><tr><td>Refinement</td><td>Improve expression quality</td><td>Enhance article readability</td></tr><tr><td>Rewriting</td><td>Change expression, keep content</td><td>Plagiarism check, derivative works</td></tr></tbody></table><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2>',4)),d(i),n[3]||(n[3]=e("h3",{id:"step-1-prepare-a-glossary",tabindex:"-1"},[t("Step 1: Prepare a Glossary "),e("a",{class:"header-anchor",href:"#step-1-prepare-a-glossary","aria-label":"Permalink to “Step 1: Prepare a Glossary”"},"​")],-1)),n[4]||(n[4]=e("p",null,[e("strong",null,"Why"),e("br"),t(" Consistent terminology is key to professional translation.")],-1)),n[5]||(n[5]=e("p",null,"Switch to Build mode:",-1)),n[6]||(n[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`I need to translate a machine learning paper from English.
Help me create a glossary with Chinese translations for these common terms:
- Neural Network
- Deep Learning
- Gradient Descent
- Overfitting
- Regularization

Save as glossary.md`)])],-1)),n[7]||(n[7]=e("h3",{id:"step-2-section-by-section-translation",tabindex:"-1"},[t("Step 2: Section-by-Section Translation "),e("a",{class:"header-anchor",href:"#step-2-section-by-section-translation","aria-label":"Permalink to “Step 2: Section-by-Section Translation”"},"​")],-1)),n[8]||(n[8]=e("p",null,[e("strong",null,"Why"),e("br"),t(" Breaking long documents into sections maintains quality.")],-1)),n[9]||(n[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@glossary.md

Please translate the following English paragraph with these requirements:
1. Use standard translations from the glossary
2. Maintain academic writing style
3. Ensure natural, flowing sentences

Original text:
{paste English paragraph}`)])],-1)),n[10]||(n[10]=e("h3",{id:"step-3-full-document-translation",tabindex:"-1"},[t("Step 3: Full Document Translation "),e("a",{class:"header-anchor",href:"#step-3-full-document-translation","aria-label":"Permalink to “Step 3: Full Document Translation”"},"​")],-1)),n[11]||(n[11]=e("p",null,[e("strong",null,"Why"),e("br"),t(" Smaller files can be translated in one go.")],-1)),n[12]||(n[12]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@glossary.md @paper.txt

Translate paper.txt into Chinese with these requirements:
1. Use standard glossary translations
2. Preserve original paragraph structure
3. Save as paper_cn.md`)])],-1)),n[13]||(n[13]=e("h3",{id:"step-4-refine-for-readability",tabindex:"-1"},[t("Step 4: Refine for Readability "),e("a",{class:"header-anchor",href:"#step-4-refine-for-readability","aria-label":"Permalink to “Step 4: Refine for Readability”"},"​")],-1)),n[14]||(n[14]=e("p",null,[e("strong",null,"Why"),e("br"),t(" Translations usually need refinement.")],-1)),n[15]||(n[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@paper_cn.md 

Please refine this translation with these requirements:
1. Fix awkward sentences
2. Maintain academic rigor while improving readability
3. Check terminology consistency
4. Edit the file directly`)])],-1)),n[16]||(n[16]=e("h3",{id:"step-5-rewrite-to-reduce-similarity",tabindex:"-1"},[t("Step 5: Rewrite to Reduce Similarity "),e("a",{class:"header-anchor",href:"#step-5-rewrite-to-reduce-similarity","aria-label":"Permalink to “Step 5: Rewrite to Reduce Similarity”"},"​")],-1)),n[17]||(n[17]=e("p",null,[e("strong",null,"Why"),e("br"),t(" Some scenarios require lower similarity scores.")],-1)),n[18]||(n[18]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Please rewrite the following paragraph to reduce similarity:
1. Keep the original meaning intact
2. Use different expressions
3. Output 3 versions to choose from

Original text:
{paste paragraph needing rewrite}`)])],-1)),n[19]||(n[19]=e("hr",null,null,-1)),n[20]||(n[20]=e("h2",{id:"📋-magic-prompts",tabindex:"-1"},[t("📋 Magic Prompts "),e("a",{class:"header-anchor",href:"#📋-magic-prompts","aria-label":"Permalink to “📋 Magic Prompts”"},"​")],-1)),n[21]||(n[21]=e("h3",{id:"🌐-professional-multilingual-translation",tabindex:"-1"},[t("🌐 Professional Multilingual Translation "),e("a",{class:"header-anchor",href:"#🌐-professional-multilingual-translation","aria-label":"Permalink to “🌐 Professional Multilingual Translation”"},"​")],-1)),n[22]||(n[22]=e("blockquote",null,[e("p",null,"Expected result: High-quality translation with consistent terminology")],-1)),n[23]||(n[23]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a professional translator skilled in making translations natural and fluent while preserving original meaning.

## Task
Translate the user-provided text into the target language.

## Input Information
### Required
- Target language: 【Simplified Chinese / English / Japanese / Spanish / French / German / ...】
- Original text:

[Paste original text]

### Optional
- Glossary: @【glossary file?】
- Domain: 【Technical / Legal / Medical / Literary?】
- Tone style: 【Formal / Casual / Professional?】

## Translation Requirements
1. **Terminology Consistency**: Use standard translations from the glossary
2. **Format Preservation**: Maintain original paragraphs, headings, and list structure
3. **Natural Flow**: Don't translate word-by-word; make the translation read naturally
4. **Proper Nouns**: Add original text in parentheses on first occurrence (e.g., Machine Learning 机器学习)

## Output Format
### Translation
[Translation result]

### Translation Notes (if any)
- Polysemy handling: 【word】translated as【translation】, because【reason】
- Terminology confirmation: 【term】uses【translation】, per glossary

## Constraints
- ✅ Terminology consistency throughout (same term = same translation)
- ✅ Readability over word-for-word faithfulness
- ✅ Use domain-standard translations for technical terms
- ❌ Avoid translationese (awkward phrasing from literal translation)
- ❌ Don't omit original content

## Error Handling
- If target language not provided, ask the user first
- If encountering polysemous words, note possible translations for user to choose
- If a term isn't in the glossary, use common translation and flag it`)])],-1)),n[24]||(n[24]=e("h3",{id:"✏️-rewriting-for-similarity-reduction",tabindex:"-1"},[t("✏️ Rewriting for Similarity Reduction "),e("a",{class:"header-anchor",href:"#✏️-rewriting-for-similarity-reduction","aria-label":"Permalink to “✏️ Rewriting for Similarity Reduction”"},"​")],-1)),n[25]||(n[25]=e("blockquote",null,[e("p",null,"Expected result: Multiple rewritten versions maintaining original meaning")],-1)),n[26]||(n[26]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a professional editor skilled at changing expressions while preserving meaning.

## Task
Rewrite the user-provided text to reduce similarity with the original.

## Input Information
### Required
- Rewrite level: 【Light (30%) / Medium (50%) / Heavy (70%)】
- Original text:

[Paste original text]

### Optional
- Keywords to preserve: 【terms that must stay?】
- Style requirement: 【Academic / Casual / Formal?】

## Rewrite Strategies
### Light Rewrite (~30%)
- Synonym replacement
- Minor word order adjustments
- Keep core expressions

### Medium Rewrite (~50%)
- Sentence structure changes
- Active/passive voice conversion
- Merge/split sentences

### Heavy Rewrite (~70%)
- Reorganize paragraph logic
- Express same meaning differently
- Add/remove descriptive details

## Output Format
### Version 1
[Rewritten text]

### Version 2
[Alternative rewrite]

### Version 3
[Third rewrite approach]

---

### Rewrite Statistics
| Version | Estimated Change | Main Techniques Used |
|---------|-----------------|---------------------|
| Version 1 | X% | 【technique】 |
| Version 2 | X% | 【technique】 |
| Version 3 | X% | 【technique】 |

**Recommended Version**: Version【N】
**Reason**: 【reason】

## Constraints
- ✅ Preserve original meaning
- ✅ Keep technical terms accurate
- ✅ Make each version distinctly different
- ❌ Don't change core viewpoints
- ❌ Don't introduce information not in the original`)])],-1)),n[27]||(n[27]=a('<hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><blockquote><p>Must complete all before moving on</p></blockquote><ul><li>[ ] Created a glossary</li><li>[ ] Used @ to reference glossary during translation</li><li>[ ] Completed refinement edits</li><li>[ ] Can generate rewritten versions</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Inconsistent terminology</td><td>No glossary</td><td>Create glossary first, @ reference during translation</td></tr><tr><td>Quality drops in long texts</td><td>Too much at once</td><td>Translate section by section, ~2000+ words each</td></tr><tr><td>Meaning changed after rewrite</td><td>Too aggressive</td><td>Specify &quot;preserve original meaning&quot;</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Translation workflow (glossary → section translation → unification → refinement)</li><li>Using @ to reference glossaries for consistency</li><li>Refinement and rewriting techniques</li></ol><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next, we&#39;ll dive into advanced content — Fiction Writing, learning multi-file management, character card design, and maintaining character consistency.</p></blockquote><hr><p>📚 <strong>More Complete Templates</strong>: <a href="./../appendix/prompts.html">Prompt Template Library</a></p>',16))])}const v=r(p,[["render",m]]);export{w as __pageData,v as default};
