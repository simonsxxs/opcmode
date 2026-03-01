import{_ as r,I as i,c as s,o as l,a5 as o,j as e,J as d,a as n,aU as c}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"A9 Building a Creative Workstation","description":"Create custom creative Agents, Skills, and slash commands to build your personal AI creative workstation.","frontmatter":{"title":"A9 Building a Creative Workstation","subtitle":"Create custom Agents, Skills, and commands","course":"OpenCode Practical Course","stage":"Phase 4","lesson":"A9","duration":"25 min","practice":"30 min","level":"Advanced","description":"Create custom creative Agents, Skills, and slash commands to build your personal AI creative workstation.","tags":["Agent","Skill","Commands","Workstation"],"prerequisite":["A1 Creative Workflow","3.2 Understanding Agents"]},"headers":[],"relativePath":"en/4-scenarios/writer-workstation.md","filePath":"en/4-scenarios/writer-workstation.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/writer-workstation.md"};function u(m,t,g,h,b,f){const a=i("AdInArticle");return l(),s("div",null,[t[0]||(t[0]=o("",35)),t[1]||(t[1]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p ~/.config/opencode/agent")])],-1)),t[2]||(t[2]=e("p",null,"Create an Agent config file. Note:",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,[e("strong",null,"Filename is the Agent name"),n(", e.g. "),e("code",null,"novelist.md")]),e("li",null,[n("Use the "),e("code",null,"mode"),n(" field in frontmatter (not "),e("code",null,"agent"),n(")")])],-1)),t[4]||(t[4]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1)),t[5]||(t[5]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a writing Agent, save to ~/.config/opencode/agent/novelist.md with the following content:

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
}`)])],-1)),t[15]||(t[15]=o("",4)),t[16]||(t[16]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"mkdir -p .opencode/command")])],-1)),t[17]||(t[17]=e("p",null,"Create /character command:",-1)),t[18]||(t[18]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Help me create a shortcut command, save to .opencode/command/character.md:

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

$ARGUMENTS`)])],-1)),t[21]||(t[21]=o("",7)),t[22]||(t[22]=e("div",{class:"language-md"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"md"),e("pre",null,[e("code",{"v-pre":""},`---
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

Only analyze code, no modifications.`)])],-1)),t[47]||(t[47]=o("",4)),t[48]||(t[48]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/agent/
  ├── writing/
  │   ├── novelist.md
  │   └── copywriter.md
  └── coding/
      ├── frontend.md
      └── backend.md`)])],-1)),t[49]||(t[49]=o("",16))])}const y=r(p,[["render",u]]);export{C as __pageData,y as default};
