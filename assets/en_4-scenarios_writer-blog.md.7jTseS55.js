import{_ as o,I as i,c as s,o as l,a5 as a,j as e,J as d,a as n,aS as c}from"./chunks/framework.Dtwt352Q.js";const w=JSON.parse('{"title":"A2 Blog & Newsletter Writing","description":"Use OpenCode to batch-generate blog topics, manage article series, and maintain consistent writing style for your blog or newsletter.","frontmatter":{"title":"A2 Blog & Newsletter Writing","subtitle":"Batch Topics, Series Management, Style Consistency","course":"OpenCode Practical Guide","stage":"Stage 4","lesson":"A2","duration":"15 min","practice":"25 min","level":"Beginner","description":"Use OpenCode to batch-generate blog topics, manage article series, and maintain consistent writing style for your blog or newsletter.","tags":["blog","newsletter","content-creation"],"prerequisite":["A1 Writing Workflow"]},"headers":[],"relativePath":"en/4-scenarios/writer-blog.md","filePath":"en/4-scenarios/writer-blog.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/writer-blog.md"};function u(g,t,m,h,b,y){const r=i("AdInArticle");return l(),s("div",null,[t[0]||(t[0]=a('<h1 id="a2-blog-newsletter-writing" tabindex="-1">A2 Blog &amp; Newsletter Writing <a class="header-anchor" href="#a2-blog-newsletter-writing" aria-label="Permalink to “A2 Blog &amp; Newsletter Writing”">​</a></h1><blockquote><p>💡 <strong>One-line summary</strong>: Build a content production line with OpenCode — batch topics, series management, style consistency.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+c+'" alt="A2 Blog &amp; Newsletter Writing Notes" data-zoom-src="/images/4-scenarios/writer-wechat-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Generate a 30-day content calendar in one go</li><li>Build a directory structure for article series</li><li>Lock your writing style into AGENTS.md</li><li>Reference local asset library to generate articles</li></ul><hr><h2 id="why-opencode-instead-of-web-based-ai" tabindex="-1">Why OpenCode Instead of Web-based AI? <a class="header-anchor" href="#why-opencode-instead-of-web-based-ai" aria-label="Permalink to “Why OpenCode Instead of Web-based AI?”">​</a></h2><table tabindex="0"><thead><tr><th>Capability</th><th>Web-based AI</th><th>OpenCode</th></tr></thead><tbody><tr><td>Batch topic generation</td><td>❌ Copy-paste only</td><td>✅ Generate once, save to files</td></tr><tr><td>Style consistency</td><td>❌ Re-describe every time</td><td>✅ AGENTS.md locks it in forever</td></tr><tr><td>Series management</td><td>❌ Can&#39;t manage multiple files</td><td>✅ Directory structure, outlines/chapters separate</td></tr><tr><td>Asset library</td><td>❌ Can&#39;t read local files</td><td>✅ @asset reference to historical content</td></tr><tr><td>Version tracking</td><td>❌</td><td>✅ Git tracks creation history</td></tr></tbody></table><hr><h2 id="your-current-struggle" tabindex="-1">Your Current Struggle <a class="header-anchor" href="#your-current-struggle" aria-label="Permalink to “Your Current Struggle”">​</a></h2><ul><li>Re-describing your style requirements every time you write</li><li>No topic planning, writing whatever comes to mind</li><li>Series articles in chaos, can&#39;t find previous content</li></ul><hr><h2 id="when-to-use-this-technique" tabindex="-1">When to Use This Technique <a class="header-anchor" href="#when-to-use-this-technique" aria-label="Permalink to “When to Use This Technique”">​</a></h2><ul><li>When you need: Efficient content operations, batch content production</li><li>And you don&#39;t want: Starting from scratch every time, inconsistent style</li></ul><hr><h2 id="🎒-before-you-start" tabindex="-1">🎒 Before You Start <a class="header-anchor" href="#🎒-before-you-start" aria-label="Permalink to “🎒 Before You Start”">​</a></h2><blockquote><p>Make sure you&#39;ve completed the following:</p></blockquote><ul><li>[ ] Completed <a href="/en/4-scenarios/writer-workflow.html">A1 Writing Workflow</a></li><li>[ ] Have a blog or newsletter (or a planned niche/positioning)</li></ul><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2><h3 id="step-1-set-up-your-blog-newsletter-project-structure" tabindex="-1">Step 1: Set Up Your Blog/Newsletter Project Structure <a class="header-anchor" href="#step-1-set-up-your-blog-newsletter-project-structure" aria-label="Permalink to “Step 1: Set Up Your Blog/Newsletter Project Structure”">​</a></h3><p><strong>Why</strong><br> Centralize all content instead of scattered files everywhere.</p>',25)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`mkdir ~/my-blog
cd ~/my-blog
opencode`)])],-1)),t[2]||(t[2]=e("p",null,"Ask AI to create the directory structure:",-1)),t[3]||(t[3]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me set up a blog content management structure:
- topics/ (store topic planning)
- assets/ (store reusable materials)
- posts/ (organize by series)
- style-guide.md (writing style guidelines)

Create these directories and empty files`)])],-1)),t[4]||(t[4]=a('<h3 id="step-2-lock-your-writing-style-into-an-agent" tabindex="-1">Step 2: Lock Your Writing Style into an Agent <a class="header-anchor" href="#step-2-lock-your-writing-style-into-an-agent" aria-label="Permalink to “Step 2: Lock Your Writing Style into an Agent”">​</a></h3><p><strong>Why</strong><br> Write once, works forever — no need to repeat descriptions.</p><p>Agent configuration can be placed in two locations:</p><ul><li><strong>Global</strong>: <code>~/.config/opencode/agent/</code> - Shared across all projects</li><li><strong>Project-level</strong>: <code>.opencode/agent/</code> - Specific to current project</li></ul><p>The filename is the agent name, e.g., <code>blogger.md</code> (not <code>blogger/blogger.md</code>)</p>',5)),t[5]||(t[5]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a writing agent, save to .opencode/agent/blogger.md:

---
name: blogger
description: Professional content creator assistant, skilled at topic ideation, outlining, and copy editing
mode: subagent
temperature: 0.8
---

Blog niche: Career growth and productivity
Target audience: 25-35 year old professionals
Tone: Professional but approachable, like chatting with a friend
Article structure: Hook with a question → Deliver value → End with a memorable insight
Banned words: synergy, leverage, disrupt, game-changer, paradigm shift
Word count: 12000+-22000+ words`)])],-1)),t[6]||(t[6]=e("p",null,[e("strong",null,"You should see"),n(": AI created the agent configuration file")],-1)),t[7]||(t[7]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"💡 This is OpenCode's Unique Value"),e("p",null,"Every time you write, AI will automatically follow this style — no need to repeat.")],-1)),t[8]||(t[8]=e("h3",{id:"step-3-batch-generate-topic-calendar",tabindex:"-1"},[n("Step 3: Batch Generate Topic Calendar "),e("a",{class:"header-anchor",href:"#step-3-batch-generate-topic-calendar","aria-label":"Permalink to “Step 3: Batch Generate Topic Calendar”"},"​")],-1)),d(r),t[9]||(t[9]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Plan a month at once, avoid daily topic anxiety.")],-1)),t[10]||(t[10]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Based on my blog niche (career growth), generate a 30-day content calendar:

Requirements:
1. 3 posts per week, 12 posts total
2. Include: title, core insight, target keywords
3. Consider seasonal themes (year-end reflection, new year planning)
4. Mark difficulty (Easy/Medium/Deep)

Save as topics/2025-january-calendar.md`)])],-1)),t[11]||(t[11]=e("h3",{id:"step-4-build-article-series-structure",tabindex:"-1"},[n("Step 4: Build Article Series Structure "),e("a",{class:"header-anchor",href:"#step-4-build-article-series-structure","aria-label":"Permalink to “Step 4: Build Article Series Structure”"},"​")],-1)),t[12]||(t[12]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Series articles boost subscriber loyalty, but need unified management.")],-1)),t[13]||(t[13]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`I want to write a "Workplace Communication" series, 5 articles total.

Help me:
1. Create posts/workplace-communication-series/ directory
2. Create outline.md (series plan, each article's position, publish order)
3. Create empty files for each article (01-xxx.md format)

Series plan:
- Article 1: Why Your Communication Always Fails
- Article 2: 3 Techniques for Upward Communication
- Article 3: Core Principles of Cross-team Communication
- Article 4: How to Navigate Difficult Conversations
- Article 5: Build Your Personal Brand Through Communication`)])],-1)),t[14]||(t[14]=e("h3",{id:"step-5-generate-articles-using-asset-library",tabindex:"-1"},[n("Step 5: Generate Articles Using Asset Library "),e("a",{class:"header-anchor",href:"#step-5-generate-articles-using-asset-library","aria-label":"Permalink to “Step 5: Generate Articles Using Asset Library”"},"​")],-1)),t[15]||(t[15]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Reuse existing materials to improve efficiency.")],-1)),t[16]||(t[16]=e("p",null,"First, add some assets:",-1)),t[17]||(t[17]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Create these files under assets/:

quotes.md - Collected insights and quotes
cases.md - Real workplace case studies
data.md - Research data and statistics`)])],-1)),t[18]||(t[18]=e("p",null,"Then write articles based on assets:",-1)),t[19]||(t[19]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Write a blog post based on the topic "3 Techniques for Upward Communication".

Requirements:
1. Follow the style in AGENTS.md
2. Reference quotes from @assets/quotes.md
3. Use cases from @assets/cases.md
4. Around 2000 words

Save as posts/workplace-communication-series/02-upward-communication-techniques.md`)])],-1)),t[20]||(t[20]=e("hr",null,null,-1)),t[21]||(t[21]=e("h2",{id:"📋-magic-prompts",tabindex:"-1"},[n("📋 Magic Prompts "),e("a",{class:"header-anchor",href:"#📋-magic-prompts","aria-label":"Permalink to “📋 Magic Prompts”"},"​")],-1)),t[22]||(t[22]=e("h3",{id:"📅-30-day-topic-planning",tabindex:"-1"},[n("📅 30-Day Topic Planning "),e("a",{class:"header-anchor",href:"#📅-30-day-topic-planning","aria-label":"Permalink to “📅 30-Day Topic Planning”"},"​")],-1)),t[23]||(t[23]=e("blockquote",null,[e("p",null,"Expected result: Generate complete content calendar, plan a month at once")],-1)),t[24]||(t[24]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a senior content strategist, expert at topic planning and editorial calendars.

## Task
Generate a 30-day content calendar based on blog positioning.

## Input
### Required
- Blog niche: [YOUR NICHE]
- Target audience: [AUDIENCE PROFILE]
- Publishing frequency: [N] posts per week

### Optional
- Current events: [Seasonal topics to include?]
- Previous topics: [Already covered topics?]

## Output Format
Generate topic table:
| Date | Title | Core Insight | Target Keywords | Difficulty | Type |
|------|-------|--------------|-----------------|------------|------|

### Difficulty Labels
- Easy (30 min)
- Medium (1 hour)
- Deep (2 hours)

### Type Labels
- How-to: Practical tips, methods
- Story: Case studies, experiences
- Opinion: Commentary, reflections
- Roundup: Summaries, lists

## Constraints
- ✅ Each topic includes core insight, not just title
- ✅ Consider timeliness (holidays, seasons, events)
- ✅ Vary difficulty and type
- ❌ Avoid homogeneous topics
- ❌ Avoid repeating covered content`)])],-1)),t[25]||(t[25]=e("h3",{id:"🎨-style-lock-template",tabindex:"-1"},[n("🎨 Style Lock Template "),e("a",{class:"header-anchor",href:"#🎨-style-lock-template","aria-label":"Permalink to “🎨 Style Lock Template”"},"​")],-1)),t[26]||(t[26]=e("blockquote",null,[e("p",null,"Expected result: Generate Agent configuration, lock in blog style")],-1)),t[27]||(t[27]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a brand strategist, expert at defining and locking in brand voice.

## Task
Create a writing style configuration (AGENTS.md) for the blog.

## Input
### Required
- Blog name: [BLOG NAME]
- Niche: [FIELD]
- Target audience: [Age, profession, pain points]

### Optional
- Tone style: [e.g., "Professional but friendly"?]
- Reference blogs: [Style references?]

## Output Format
Generate AGENTS.md configuration:

\`\`\`yaml
---
name: [BLOG NAME]
description: [One-line description]
---

## Blog Positioning
[Positioning description]

## Target Audience Profile
- Age:
- Profession:
- Pain points:
- Needs:

## Tone & Voice
[Detailed description, including positive and negative examples]

## Article Structure Template
1. Opening: [How to hook]
2. Body: [Core content structure]
3. Closing: [How to wrap up]

## Banned Words
[Words to avoid, comma separated]

## Signature Phrases
[Personal style phrase examples]

## Word Count Range
[Word count]
\`\`\`

## Constraints
- ✅ Style description should be specific with examples
- ✅ Banned words should be practical
- ✅ Article structure should be reusable
- ❌ Avoid vague descriptions`)])],-1)),t[28]||(t[28]=e("h3",{id:"📚-series-article-planning",tabindex:"-1"},[n("📚 Series Article Planning "),e("a",{class:"header-anchor",href:"#📚-series-article-planning","aria-label":"Permalink to “📚 Series Article Planning”"},"​")],-1)),t[29]||(t[29]=e("blockquote",null,[e("p",null,"Expected result: Generate series structure, maintain content coherence")],-1)),t[30]||(t[30]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a content architect, expert at planning serialized content.

## Task
Design overall structure and positioning for each article in a series.

## Input
### Required
- Series theme: [THEME]
- Article count: [N] articles
- Series goal: [What readers will gain]

### Optional
- Target audience: [Audience profile?]
- Publishing cadence: [Posts per week?]

## Output Format
1. **Series Overview**
   - Series positioning
   - Target audience
   - Core value

2. **Article Plan**
   | # | Title | Core Content | Relation to Previous | Relation to Next |
   |---|-------|--------------|---------------------|------------------|

3. **Progression Logic**
   - From [starting point] to [end point]
   - Each article's advancement relationship

4. **Directory Structure**
   \`\`\`
   series-name/
   ├── outline.md
   ├── 01-xxx.md
   ├── 02-xxx.md
   └── ...
   \`\`\`

## Constraints
- ✅ Each article has standalone value, but connects to series
- ✅ Clear progression logic
- ✅ Consider reader's learning curve
- ❌ Avoid content overlap
- ❌ Avoid large jumps in difficulty`)])],-1)),t[31]||(t[31]=a('<hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><blockquote><p>All items must pass before continuing</p></blockquote><ul><li>[ ] Created blog/newsletter project directory structure</li><li>[ ] Created AGENTS.md to lock in writing style</li><li>[ ] Generated 30-day topic calendar</li><li>[ ] Built at least one article series structure</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>AI writes in different styles each time</td><td>Style not locked in AGENTS.md</td><td>Write style requirements into AGENTS.md</td></tr><tr><td>Can&#39;t find previous materials</td><td>Assets not centrally managed</td><td>Create assets/ directory</td></tr><tr><td>Series articles have confused logic</td><td>No outline written first</td><td>Create series outline.md first</td></tr></tbody></table><hr><h2 id="advanced-tips" tabindex="-1">Advanced Tips <a class="header-anchor" href="#advanced-tips" aria-label="Permalink to “Advanced Tips”">​</a></h2><h3 id="create-quick-commands" tabindex="-1">Create Quick Commands <a class="header-anchor" href="#create-quick-commands" aria-label="Permalink to “Create Quick Commands”">​</a></h3><p>Turn common operations into slash commands:</p>',11)),t[32]||(t[32]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p .opencode/command")])],-1)),t[33]||(t[33]=e("p",null,[n("Create "),e("code",null,".opencode/command/blog.md"),n(":")],-1)),t[34]||(t[34]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: Quickly generate a blog post
---

Write a blog post based on the following topic:

Topic: $ARGUMENTS

Requirements:
1. Follow the style in AGENTS.md
2. Reference relevant materials from @assets/
3. Around 2000 words
4. Save to posts/ directory`)])],-1)),t[35]||(t[35]=a('<p>Then just type <code>/blog upward communication techniques</code> to quickly generate.</p><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Lock writing style in AGENTS.md (works forever)</li><li>Batch generate topic calendar (30-day planning)</li><li>Build directory structure for article series</li><li>Reference local asset library to generate articles</li></ol><p><strong>This is what web-based AI cannot do</strong> — this is OpenCode&#39;s value.</p><hr><h2 id="next-lesson-preview" tabindex="-1">Next Lesson Preview <a class="header-anchor" href="#next-lesson-preview" aria-label="Permalink to “Next Lesson Preview”">​</a></h2><blockquote><p>Next lesson: <strong><a href="./writer-social.html">Short-form Social Content</a></strong> — batch post generation, hashtag library management, image-text pairing.</p></blockquote><hr><p>📚 <strong>More Templates</strong>: <a href="/en/appendix/prompts.html">Prompt Library</a></p>',11))])}const C=o(p,[["render",u]]);export{w as __pageData,C as default};
