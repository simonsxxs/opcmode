import{_ as l,I as i,c as d,o as r,a5 as n,J as s,j as e,a as o,aA as c}from"./chunks/framework.Dtwt352Q.js";const w=JSON.parse('{"title":"Plan vs Build: Planning and Execution","description":"Understand Plan Agent (read-only analysis) and Build Agent (read-write execution), master the permission system, switch flexibly with Tab key, and master efficient AI programming workflow.","frontmatter":{"title":"Plan vs Build: Planning and Execution","subtitle":"Two modes, two purposes","course":"OpenCode Practical Course","stage":"Stage 3","lesson":"3.1","duration":"10 min","practice":"15 min","level":"Beginner","description":"Understand Plan Agent (read-only analysis) and Build Agent (read-write execution), master the permission system, switch flexibly with Tab key, and master efficient AI programming workflow.","tags":["Plan","Build","Mode"],"prerequisite":["2.1 Interface and Basic Operations"]},"headers":[],"relativePath":"en/3-workflow/01-plan-build.md","filePath":"en/3-workflow/01-plan-build.md","lastUpdated":1772014034000}'),u={name:"en/3-workflow/01-plan-build.md"};function p(h,t,g,b,m,f){const a=i("AdInArticle");return r(),d("div",null,[t[0]||(t[0]=n("",38)),s(a),t[1]||(t[1]=n("",8)),t[2]||(t[2]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    // Build Agent configuration
    "build": {
      "mode": "primary",
      "model": "anthropic/claude-opus-4-5-thinking",
      "temperature": 0.3,
      "permission": {
        "edit": "allow",
        "bash": "allow"
      }
    },
    // Plan Agent configuration
    "plan": {
      "mode": "primary",
      "model": "anthropic/claude-opus-4-5-thinking",
      "temperature": 0.1,
      "permission": {
        "edit": {
          "*": "deny",                    // Deny editing all source code
          ".opencode/plans/*.md": "allow" // Only allow editing plan files
        },
        "bash": "allow"
      }
    }
  }
}`)])],-1)),t[3]||(t[3]=n("",14)),t[4]||(t[4]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@src/main.ts Analyze this file's structure, list all functions and their purposes")])],-1)),t[5]||(t[5]=n("",7)),t[6]||(t[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Add detailed JSDoc comments to @src/main.ts")])],-1)),t[7]||(t[7]=e("p",null,[e("strong",null,"You should see"),o(": AI uses the "),e("code",null,"edit"),o(" tool to modify the file and add comments. You can review the changes and decide whether to accept.")],-1)),t[8]||(t[8]=e("h3",{id:"step-6-undo-changes-optional",tabindex:"-1"},[o("Step 6: Undo Changes (Optional) "),e("a",{class:"header-anchor",href:"#step-6-undo-changes-optional","aria-label":"Permalink to “Step 6: Undo Changes (Optional)”"},"​")],-1)),t[9]||(t[9]=e("p",null,[e("strong",null,"Why"),e("br"),o(" If not satisfied, you can undo.")],-1)),t[10]||(t[10]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/undo")])],-1)),t[11]||(t[11]=n("",5)),t[12]||(t[12]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`You: Help me refactor the user authentication module, track progress with TODO

AI: Sure, I'll create a task list first:
    ✅ 1. Analyze existing code structure
    🔄 2. Design new authentication flow
    ⏳ 3. Rewrite authentication logic
    ⏳ 4. Update test cases
    ⏳ 5. Verify functionality

    Starting the first item...

You: Current progress?

AI: Let me check...
    ✅ 1. Analyze existing code structure (completed)
    ✅ 2. Design new authentication flow (completed)
    🔄 3. Rewrite authentication logic (in progress, ~5 min remaining)
    ⏳ 4. Update test cases
    ⏳ 5. Verify functionality`)])],-1)),t[13]||(t[13]=n("",16)),t[14]||(t[14]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "plan": {
      "steps": 5  // Maximum 5 tool calls
    }
  }
}`)])],-1)),t[15]||(t[15]=e("h3",{id:"custom-keybinds",tabindex:"-1"},[o("Custom Keybinds "),e("a",{class:"header-anchor",href:"#custom-keybinds","aria-label":"Permalink to “Custom Keybinds”"},"​")],-1)),t[16]||(t[16]=e("p",null,[o("By default, "),e("kbd",null,"Tab"),o(" switches Agents, but you can modify "),e("code",null,"agent_cycle"),o(" keybinding in configuration:")],-1)),t[17]||(t[17]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "keybinds": {
    "agent_cycle": "tab",           // Switch to next Agent (default)
    "agent_cycle_reverse": "shift+tab"  // Switch to previous Agent (default)
  }
}`)])],-1)),t[18]||(t[18]=n("",5)),t[19]||(t[19]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`You: This module needs refactoring, help me analyze first, don't modify directly

AI: [Calls plan_enter tool]
    → Confirmation popup: Switch to Plan mode?
    → You choose Yes
    → AI analyzes code in Plan mode
    → Generates plan file .opencode/plans/xxx.md

You: The plan looks good, start implementing

AI: [Calls plan_exit tool]
    → Confirmation popup: Switch to Build mode?
    → You choose Yes
    → AI executes modifications in Build mode`)])],-1)),t[20]||(t[20]=n("",7)),t[21]||(t[21]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# View project-level plans
cat .opencode/plans/*.md

# View global-level plans
cat ~/.local/share/opencode/plans/*.md`)])],-1)),t[22]||(t[22]=n("",8)),t[23]||(t[23]=e("details",null,[e("summary",null,[e("strong",null,"Click to expand source code locations")]),e("blockquote",null,[e("p",null,"Last updated: 2026-02-14")]),e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"Feature"),e("th",null,"File Path"),e("th",null,"Line Numbers")])]),e("tbody",null,[e("tr",null,[e("td",null,"Build Agent definition"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/agent/agent.ts#L77-L91",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/agent/agent.ts")])]),e("td",null,"77-91")]),e("tr",null,[e("td",null,"Plan Agent definition"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/agent/agent.ts#L92-L114",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/agent/agent.ts")])]),e("td",null,"92-114")]),e("tr",null,[e("td",null,"Default permission rules"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/agent/agent.ts#L55-L73",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/agent/agent.ts")])]),e("td",null,"55-73")]),e("tr",null,[e("td",null,"plan_enter tool"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/tool/plan.ts#L75-L130",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/tool/plan.ts")])]),e("td",null,"75-130")]),e("tr",null,[e("td",null,"plan_exit tool"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/tool/plan.ts#L20-L73",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/tool/plan.ts")])]),e("td",null,"20-73")]),e("tr",null,[e("td",null,"Plan mode prompt"),e("td",null,[e("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/session/prompt.ts#L1451-L1455",target:"_blank",rel:"noreferrer"},[e("code",null,"packages/opencode/src/session/prompt.ts")])]),e("td",null,"1451-1455")])])]),e("p",null,[e("strong",null,"Key Constants"),o(":")]),e("ul",null,[e("li",null,[e("code",null,"plan_enter"),o(": Tool to switch from Build to Plan")]),e("li",null,[e("code",null,"plan_exit"),o(": Tool to switch from Plan to Build")])]),e("p",null,[e("strong",null,"Permission Actions"),o(":")]),e("ul",null,[e("li",null,[e("code",null,"allow"),o(": Allow execution")]),e("li",null,[e("code",null,"deny"),o(": Deny execution")]),e("li",null,[e("code",null,"ask"),o(": Ask user for confirmation")])]),e("p",null,[e("strong",null,"Plan Agent Permission Configuration"),o(" (source code definition):")]),e("div",{class:"language-typescript"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"typescript"),e("pre",null,[e("code",{"v-pre":""},`{
  question: "allow",                        // Can ask you questions
  plan_exit: "allow",                       // Can exit Plan mode
  external_directory: {
    [Global.Path.data + "/plans/*"]: "allow",  // Allow access to global plans directory
  },
  edit: {
    "*": "deny",                           // Deny editing all files
    ".opencode/plans/*.md": "allow",       // Allow editing project plan files
    [Global.Path.data + "/plans/*.md"]: "allow", // Allow editing global plan files
  },
}`)])])],-1)),t[24]||(t[24]=e("hr",null,null,-1)),t[25]||(t[25]=e("h2",{id:"next-lesson-preview",tabindex:"-1"},[o("Next Lesson Preview "),e("a",{class:"header-anchor",href:"#next-lesson-preview","aria-label":"Permalink to “Next Lesson Preview”"},"​")],-1)),t[26]||(t[26]=e("blockquote",null,[e("p",null,"In the next lesson, we'll explore the Agent system and learn how to invoke different experts to complete tasks.")],-1))])}const A=l(u,[["render",p]]);export{w as __pageData,A as default};
