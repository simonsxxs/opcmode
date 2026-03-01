import{_ as r,I as i,c as s,o as l,a5 as o,j as e,J as d,a as n,aU as c}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"A9 Building a Creative Workstation","description":"Create custom creative Agents, Skills, and slash commands to build your personal AI creative workstation.","frontmatter":{"title":"A9 Building a Creative Workstation","subtitle":"Create custom Agents, Skills, and commands","course":"OpenCode Practical Course","stage":"Phase 4","lesson":"A9","duration":"25 min","practice":"30 min","level":"Advanced","description":"Create custom creative Agents, Skills, and slash commands to build your personal AI creative workstation.","tags":["Agent","Skill","Commands","Workstation"],"prerequisite":["A1 Creative Workflow","3.2 Understanding Agents"]},"headers":[],"relativePath":"en/4-scenarios/writer-workstation.md","filePath":"en/4-scenarios/writer-workstation.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/writer-workstation.md"};function u(m,t,g,h,b,f){const a=i("AdInArticle");return l(),s("div",null,[t[0]||(t[0]=o('<h1 id="a9-building-a-creative-workstation" tabindex="-1">A9 Building a Creative Workstation <a class="header-anchor" href="#a9-building-a-creative-workstation" aria-label="Permalink to “A9 Building a Creative Workstation”">​</a></h1><blockquote><p>💡 <strong>TL;DR</strong>: Create custom creative Agents, Skills, and shortcut commands to solidify your content production workflow.</p></blockquote><h2 id="📝-course-notes" tabindex="-1">📝 Course Notes <a class="header-anchor" href="#📝-course-notes" aria-label="Permalink to “📝 Course Notes”">​</a></h2><p>Key takeaways from this lesson:</p><p><img src="'+c+'" alt="A9 Building a Creative Workstation Notes" data-zoom-src="/images/4-scenarios/writer-workstation-notes.jpeg"></p><hr><h2 id="what-you-ll-be-able-to-do" tabindex="-1">What You&#39;ll Be Able to Do <a class="header-anchor" href="#what-you-ll-be-able-to-do" aria-label="Permalink to “What You&#39;ll Be Able to Do”">​</a></h2><ul><li>Create custom creative Agents (WeChat Official Account / Xiaohongshu / Novel / Screenwriter)</li><li>Create creative Skills (topic planning / batch generation / style checking)</li><li>Create shortcut commands (/wechat, /xiaohongshu, /polish)</li><li>Build a personal creative workstation</li></ul><hr><h2 id="why-use-opencode-instead-of-web-based-ai" tabindex="-1">Why Use OpenCode Instead of Web-based AI? <a class="header-anchor" href="#why-use-opencode-instead-of-web-based-ai" aria-label="Permalink to “Why Use OpenCode Instead of Web-based AI?”">​</a></h2><table tabindex="0"><thead><tr><th>Capability</th><th>Web-based AI</th><th>OpenCode</th></tr></thead><tbody><tr><td>Custom Agents</td><td>❌ Only generic AI</td><td>✅ Create custom personas, permanently effective</td></tr><tr><td>Shortcut Commands</td><td>❌ Re-enter every time</td><td>✅ <code>/wechat</code> triggers complete workflow instantly</td></tr><tr><td>Skill Reuse</td><td>❌</td><td>✅ Complex instructions packaged as Skills, call anytime</td></tr><tr><td>Workflow Persistence</td><td>❌</td><td>✅ Processes, styles, templates all persist</td></tr><tr><td>Team Sharing</td><td>❌</td><td>✅ Config files version-controlled, team reusable</td></tr></tbody></table><p><strong>This is the ultimate value of OpenCode</strong> — not just using AI, but building your own AI workstation.</p><hr><h2 id="your-current-struggle" tabindex="-1">Your Current Struggle <a class="header-anchor" href="#your-current-struggle" aria-label="Permalink to “Your Current Struggle”">​</a></h2><ul><li>Entering the same prompts repeatedly for every writing task</li><li>Can&#39;t solidify common writing workflows</li><li>Want a &quot;dedicated writing assistant&quot; that understands your style</li></ul><hr><h2 id="when-to-use-this-technique" tabindex="-1">When to Use This Technique <a class="header-anchor" href="#when-to-use-this-technique" aria-label="Permalink to “When to Use This Technique”">​</a></h2><ul><li>When you need to: Solidify writing workflows and improve efficiency</li><li>And don&#39;t want to: Teach AI your preferences from scratch every time</li></ul><hr><h2 id="🎒-before-you-start" tabindex="-1">🎒 Before You Start <a class="header-anchor" href="#🎒-before-you-start" aria-label="Permalink to “🎒 Before You Start”">​</a></h2><blockquote><p>Make sure you&#39;ve completed the following:</p></blockquote><ul><li>[ ] Completed <a href="./writer-workflow.html">A1 Creative Workflow</a></li><li>[ ] Completed <a href="./../3-workflow/02-agents.html">3.2 Understanding Agents</a></li><li>[ ] Have a writing project folder</li></ul><hr><h2 id="core-concepts" tabindex="-1">Core Concepts <a class="header-anchor" href="#core-concepts" aria-label="Permalink to “Core Concepts”">​</a></h2><h3 id="three-elements-of-a-writing-workstation" tabindex="-1">Three Elements of a Writing Workstation <a class="header-anchor" href="#three-elements-of-a-writing-workstation" aria-label="Permalink to “Three Elements of a Writing Workstation”">​</a></h3><table tabindex="0"><thead><tr><th>Element</th><th>Purpose</th><th>Example</th></tr></thead><tbody><tr><td>Agent</td><td>Custom AI persona</td><td>Novelist Agent, Screenwriter Agent</td></tr><tr><td>Skill</td><td>Complex instruction packaging</td><td>Character design skill, Plot generation skill</td></tr><tr><td>Command</td><td>Quick trigger</td><td>/character, /scene, /polish</td></tr></tbody></table><hr><h2 id="common-agent-fields" tabindex="-1">Common Agent Fields <a class="header-anchor" href="#common-agent-fields" aria-label="Permalink to “Common Agent Fields”">​</a></h2><p>Fields configurable in Frontmatter:</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>name</code></td><td>string (required)</td><td>Agent name, filename is the name</td><td></td></tr><tr><td><code>description</code></td><td>string</td><td>Agent function description (shown in menu)</td><td></td></tr><tr><td><code>mode</code></td><td><code>&quot;primary&quot;</code> or <code>&quot;subagent&quot;</code></td><td>Primary agent switchable via Tab, subagent called via @</td><td></td></tr><tr><td><code>temperature</code></td><td>number (0.0-1.0)</td><td>Controls randomness: 0.0-0.2 focused, 0.3-0.5 balanced, 0.6-1.0 creative</td><td></td></tr><tr><td><code>model</code></td><td>string</td><td>Override default model, format: <code>provider/model-id</code></td><td></td></tr><tr><td><code>permission</code></td><td>object</td><td>Fine-grained permission control, e.g. <code>{ &quot;edit&quot;: &quot;ask&quot; }</code></td><td></td></tr><tr><td><code>hidden</code></td><td>boolean</td><td>Hide subagent (not shown in @ autocomplete)</td><td></td></tr><tr><td><code>color</code></td><td>hex color</td><td>Custom Agent display color, e.g. <code>#FF5733</code></td><td></td></tr><tr><td><code>steps</code></td><td>positive integer</td><td>Maximum iterations, prevents infinite loops</td><td></td></tr><tr><td><code>disable</code></td><td>boolean</td><td>Set to <code>true</code> to disable this agent</td><td></td></tr><tr><td><code>options</code></td><td>object</td><td>Extra model options passed to provider, e.g. OpenAI&#39;s <code>reasoningEffort</code></td><td></td></tr><tr><td><code>disable</code></td><td>boolean</td><td>Disable this Agent</td><td></td></tr></tbody></table><blockquote><p>💡 All unlisted fields are passed directly to the provider as model options (e.g., OpenAI&#39;s <code>reasoningEffort</code>)</p></blockquote><hr><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to “Follow Along”">​</a></h2><h3 id="step-1-create-a-writing-agent" tabindex="-1">Step 1: Create a Writing Agent <a class="header-anchor" href="#step-1-create-a-writing-agent" aria-label="Permalink to “Step 1: Create a Writing Agent”">​</a></h3><p><strong>Why</strong><br> A dedicated Agent understands your writing style and preferences.</p>',35)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p ~/.config/opencode/agent")])],-1)),t[2]||(t[2]=e("p",null,"Create an Agent config file. Note:",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,[e("strong",null,"Filename is the Agent name"),n(", e.g. "),e("code",null,"novelist.md")]),e("li",null,[n("Use the "),e("code",null,"mode"),n(" field in frontmatter (not "),e("code",null,"agent"),n(")")])],-1)),t[4]||(t[4]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1)),t[5]||(t[5]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a writing Agent, save to ~/.config/opencode/agent/novelist.md with the following content:

---
name: novelist
description: Professional novel writing assistant, skilled in plot conception, character design, and text polishing
mode: subagent
temperature: 0.8
---

# Novelist Agent

You are an experienced novel writing mentor, skilled in:
- Story structure design (three-act structure, hero's journey)
- Character development (personality, motivation, arc)
- Plot progression (conflict, twists, climax)
- Text polishing (pacing, atmosphere, dialogue)

## Working Principles
1. Understand the author's intent before providing suggestions
2. Give specific, actionable suggestions with examples
3. Respect the author's style, don't impose your own views
4. Encourage innovation, avoid clichés`)])],-1)),t[6]||(t[6]=e("h3",{id:"step-2-create-a-writing-skill",tabindex:"-1"},[n("Step 2: Create a Writing Skill "),e("a",{class:"header-anchor",href:"#step-2-create-a-writing-skill","aria-label":"Permalink to “Step 2: Create a Writing Skill”"},"​")],-1)),d(a),t[7]||(t[7]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Skills package complex writing instructions for one-click invocation.")],-1)),t[8]||(t[8]=e("p",null,[e("strong",null,"Important"),n(": Skill directory structure must be "),e("code",null,"skill/<name>/SKILL.md")],-1)),t[9]||(t[9]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p .opencode/skill/character-design")])],-1)),t[10]||(t[10]=e("p",null,"Create a character design Skill:",-1)),t[11]||(t[11]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a character design Skill, save to .opencode/skill/character-design/SKILL.md:

> ⚠️ **Naming Rules (Recommended)**
> - Use lowercase letters, numbers, hyphens
> - 1-64 characters
> - Don't start or end with a hyphen
> - Don't contain consecutive hyphens (\`--\`)
> - Must match the directory name
> 
> Recommended format: \`^[a-z0-9]+(-[a-z0-9]+)*$\`

---
name: character-design
description: Generate detailed novel character cards
---

# Character Design Skill

Generate complete character cards based on user-provided character types.

## Output Format

### Basic Information
- Name, age, occupation, appearance

### Personality Spectrum
- 3 positive traits
- 2 negative traits

### Background Story
- Key events that shaped the personality

### Core Motivation
- External goal
- Internal need

### Character Arc
- Starting state → Ending state

### Signature Traits
- Catchphrases or mannerisms`)])],-1)),t[12]||(t[12]=e("h3",{id:"skill-permission-control",tabindex:"-1"},[n("Skill Permission Control "),e("a",{class:"header-anchor",href:"#skill-permission-control","aria-label":"Permalink to “Skill Permission Control”"},"​")],-1)),t[13]||(t[13]=e("p",null,[n("You can control which Skills can be used by agents through configuration. In "),e("code",null,"opencode.json"),n(":")],-1)),t[14]||(t[14]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "skill": {
      "character-design": "allow",
      "internal-*": "deny",
      "*": "allow"
    }
  }
}`)])],-1)),t[15]||(t[15]=o('<table tabindex="0"><thead><tr><th>Permission</th><th>Behavior</th></tr></thead><tbody><tr><td><code>allow</code></td><td>Skill loads immediately</td></tr><tr><td><code>deny</code></td><td>Skill hidden from agent, access denied</td></tr><tr><td><code>ask</code></td><td>Request user approval before loading</td></tr></tbody></table><p>Wildcard patterns supported: <code>internal-*</code> matches all skills starting with <code>internal-</code>.</p><h3 id="step-3-create-shortcut-commands" tabindex="-1">Step 3: Create Shortcut Commands <a class="header-anchor" href="#step-3-create-shortcut-commands" aria-label="Permalink to “Step 3: Create Shortcut Commands”">​</a></h3><p><strong>Why</strong><br> Shortcut commands trigger common operations with a single keystroke.</p>',4)),t[16]||(t[16]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p .opencode/command")])],-1)),t[17]||(t[17]=e("p",null,"Create /character command:",-1)),t[18]||(t[18]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a shortcut command, save to .opencode/command/character.md:

---
description: Quickly generate character cards
agent: novelist
---

Please use the character-design skill to design a character for me:

Character type: $ARGUMENTS`)])],-1)),t[19]||(t[19]=e("p",null,"Create /polish command:",-1)),t[20]||(t[20]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a shortcut command, save to .opencode/command/polish.md:

---
description: Polish selected text
---

Please polish the following content to improve expressiveness while preserving the original meaning:

$ARGUMENTS`)])],-1)),t[21]||(t[21]=o('<hr><h2 id="advanced-command-features" tabindex="-1">Advanced Command Features <a class="header-anchor" href="#advanced-command-features" aria-label="Permalink to “Advanced Command Features”">​</a></h2><p>Besides <code>$ARGUMENTS</code>, the following advanced features are supported:</p><h3 id="positional-parameters" tabindex="-1">Positional Parameters <a class="header-anchor" href="#positional-parameters" aria-label="Permalink to “Positional Parameters”">​</a></h3><p>Access individual parameters:</p><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>$1</code></td><td>First parameter</td></tr><tr><td><code>$2</code></td><td>Second parameter</td></tr><tr><td><code>$3</code></td><td>Third parameter</td></tr><tr><td>...</td><td>And so on</td></tr></tbody></table><p>Example:</p>',7)),t[22]||(t[22]=e("div",{class:"language-md"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"md"),e("pre",null,[e("code",{"v-pre":""},`---
description: Create file and write content
---

Create a file named $1 in directory $2 with content:
$3`)])],-1)),t[23]||(t[23]=e("p",null,[n("Run: "),e("code",null,'/create-file config.json src "{ \\"key\\": \\"value\\" }"')],-1)),t[24]||(t[24]=e("h3",{id:"subtask-mode",tabindex:"-1"},[n("Subtask Mode "),e("a",{class:"header-anchor",href:"#subtask-mode","aria-label":"Permalink to “Subtask Mode”"},"​")],-1)),t[25]||(t[25]=e("p",null,[n("Use "),e("code",null,"subtask: true"),n(" to force command execution as a subtask, without polluting the main context.")],-1)),t[26]||(t[26]=e("div",{class:"language-md"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"md"),e("pre",null,[e("code",{"v-pre":""},`---
description: Deep code analysis
subtask: true
---

Execute deep code analysis:
$ARGUMENTS`)])],-1)),t[27]||(t[27]=e("h3",{id:"shell-output-injection",tabindex:"-1"},[n("Shell Output Injection "),e("a",{class:"header-anchor",href:"#shell-output-injection","aria-label":"Permalink to “Shell Output Injection”"},"​")],-1)),t[28]||(t[28]=e("p",null,[n("Use "),e("code",null,"!command"),n(" to inject bash command output into command templates.")],-1)),t[29]||(t[29]=e("p",null,"Example: Analyze test results",-1)),t[30]||(t[30]=e("div",{class:"language-md"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"md"),e("pre",null,[e("code",{"v-pre":""},`---
description: Analyze test coverage
---

Current test results:
!\`npm test\`

Suggest optimization based on the results.`)])],-1)),t[31]||(t[31]=e("p",null,"Example: Review recent changes",-1)),t[32]||(t[32]=e("div",{class:"language-md"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"md"),e("pre",null,[e("code",{"v-pre":""},`---
description: Review recent changes
---

Recent Git commits:
!\`git log --oneline -10\`

Review and suggest improvements.`)])],-1)),t[33]||(t[33]=e("h3",{id:"step-4-test-the-writing-workstation",tabindex:"-1"},[n("Step 4: Test the Writing Workstation "),e("a",{class:"header-anchor",href:"#step-4-test-the-writing-workstation","aria-label":"Permalink to “Step 4: Test the Writing Workstation”"},"​")],-1)),t[34]||(t[34]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Confirm configuration is working.")],-1)),t[35]||(t[35]=e("p",null,"Restart OpenCode:",-1)),t[36]||(t[36]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1)),t[37]||(t[37]=e("p",null,"Test Agent:",-1)),t[38]||(t[38]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},'Press Tab to switch, check if "novelist" Agent appears')])],-1)),t[39]||(t[39]=e("p",null,"Test command:",-1)),t[40]||(t[40]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/character domineering CEO")])],-1)),t[41]||(t[41]=e("p",null,[e("strong",null,"You should see"),n(": AI generates a character card using the Novelist Agent and Character Design Skill")],-1)),t[42]||(t[42]=e("hr",null,null,-1)),t[43]||(t[43]=e("h2",{id:"advanced-configuration-tips",tabindex:"-1"},[n("Advanced Configuration Tips "),e("a",{class:"header-anchor",href:"#advanced-configuration-tips","aria-label":"Permalink to “Advanced Configuration Tips”"},"​")],-1)),t[44]||(t[44]=e("h3",{id:"permission-control",tabindex:"-1"},[n("Permission Control "),e("a",{class:"header-anchor",href:"#permission-control","aria-label":"Permalink to “Permission Control”"},"​")],-1)),t[45]||(t[45]=e("p",null,"Agents can finely control tool and skill access permissions. Configure in the agent's frontmatter:",-1)),t[46]||(t[46]=e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
name: readonly-reviewer
description: Read-only code review
permission:
  edit: deny
  bash:
    "*": ask
    "git diff": allow
    "git log*": allow
  webfetch: deny
---

Only analyze code, no modifications.`)])],-1)),t[47]||(t[47]=o('<p>Permission options:</p><ul><li><code>&quot;ask&quot;</code> — Request approval before execution</li><li><code>&quot;allow&quot;</code> — Allow all operations without approval</li><li><code>&quot;deny&quot;</code> — Disable tool</li></ul><h3 id="nested-agents" tabindex="-1">Nested Agents <a class="header-anchor" href="#nested-agents" aria-label="Permalink to “Nested Agents”">​</a></h3><p>You can organize agents in subfolders, for example:</p>',4)),t[48]||(t[48]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/agent/
  ├── writing/
  │   ├── novelist.md
  │   └── copywriter.md
  └── coding/
      ├── frontend.md
      └── backend.md`)])],-1)),t[49]||(t[49]=o('<p>Then call them via <code>@writing/novelist</code> or <code>@coding/frontend</code>.</p><hr><h2 id="checklist-✅" tabindex="-1">Checklist ✅ <a class="header-anchor" href="#checklist-✅" aria-label="Permalink to “Checklist ✅”">​</a></h2><blockquote><p>All items must pass before continuing</p></blockquote><ul><li>[ ] Created a writing Agent</li><li>[ ] Created at least one Skill</li><li>[ ] Created at least one shortcut command</li><li>[ ] Commands work correctly</li></ul><hr><h2 id="common-pitfalls" tabindex="-1">Common Pitfalls <a class="header-anchor" href="#common-pitfalls" aria-label="Permalink to “Common Pitfalls”">​</a></h2><table tabindex="0"><thead><tr><th>Issue</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>Agent not working</td><td>Config file in wrong location</td><td>Confirm it&#39;s in <code>~/.config/opencode/agent/</code> or <code>.opencode/agent/</code>, filename is the agent name</td></tr><tr><td>Agent frontmatter error</td><td>Used wrong field</td><td>Use <code>mode</code> in frontmatter not <code>agent</code>, required fields are <code>name</code> and <code>description</code></td></tr><tr><td>Skill not found</td><td>Wrong directory structure</td><td>Confirm directory is <code>skill/&lt;name&gt;/SKILL.md</code> (lowercase), not <code>skill/&lt;name&gt;/SKILL.md</code></td></tr><tr><td>Skill naming invalid</td><td>Naming rule violation</td><td>Lowercase alphanumeric, 1-64 characters, no leading/trailing hyphens, no consecutive hyphens</td></tr><tr><td>Command error</td><td>Parameter syntax error</td><td>Check usage of <code>$ARGUMENTS</code>, <code>$1</code>, and other placeholders</td></tr></tbody></table><hr><h2 id="lesson-summary" tabindex="-1">Lesson Summary <a class="header-anchor" href="#lesson-summary" aria-label="Permalink to “Lesson Summary”">​</a></h2><p>You learned:</p><ol><li>Create custom writing Agents</li><li>Create Skills that package complex instructions</li><li>Create shortcut commands for one-click triggers</li><li>Combine all three to build a writing workstation</li></ol><p>🎉 <strong>Congratulations on completing all writing track courses!</strong></p><hr><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to “Next Steps”">​</a></h2><ul><li>Want more customization techniques? → <a href="/en/5-advanced/">Phase 5: Deep Customization</a></li><li>Want to try other scenarios? → <a href="/en/4-scenarios/coder-daily.html">Developer Track</a> or <a href="/en/4-scenarios/office-files.html">Productivity Track</a></li></ul>',16))])}const y=r(p,[["render",u]]);export{C as __pageData,y as default};
