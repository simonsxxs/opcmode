import{_ as a,I as s,c as i,o as r,a5 as l,j as e,J as d,a as n,aG as u}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"B3 Documentation & Git","description":"Use AI to auto-generate README documentation, Git commit messages, and Pull Request descriptions to improve collaboration efficiency.","frontmatter":{"title":"B3 Documentation & Git","subtitle":"Auto-generate README, commit, PR","course":"OpenCode Practical Course","stage":"Stage 4","lesson":"B3","duration":"15 min","practice":"20 min","level":"Advanced","description":"Use AI to auto-generate README documentation, Git commit messages, and Pull Request descriptions to improve collaboration efficiency.","tags":["Documentation","Git","README","commit"],"prerequisite":["B1 Developer Daily"]},"headers":[],"relativePath":"en/4-scenarios/coder-docs-git.md","filePath":"en/4-scenarios/coder-docs-git.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/coder-docs-git.md"};function c(m,t,g,h,b,f){const o=s("AdInArticle");return r(),i("div",null,[t[0]||(t[0]=l("",27)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@explore Analyze the project structure and generate a professional README.md:

Include the following sections:
1. Project name and description
2. Features (Feature list)
3. Quick Start (installation and running)
4. Usage examples
5. Configuration
6. Contributing guide
7. License

Save as README.md`)])],-1)),t[2]||(t[2]=e("h3",{id:"step-2-generate-commit-message",tabindex:"-1"},[n("Step 2: Generate Commit Message "),e("a",{class:"header-anchor",href:"#step-2-generate-commit-message","aria-label":"Permalink to “Step 2: Generate Commit Message”"},"​")],-1)),t[3]||(t[3]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Standardized commit messages make tracking easier.")],-1)),t[4]||(t[4]=e("p",null,"First, check the changes:",-1)),t[5]||(t[5]=e("blockquote",null,[e("p",null,[n("In OpenCode TUI, messages starting with "),e("code",null,"!"),n(" execute shell commands and bring the output into the conversation: "),e("a",{href:"https://opencode.ai/docs/tui",target:"_blank",rel:"noreferrer"},"https://opencode.ai/docs/tui")])],-1)),t[6]||(t[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"!git diff")])],-1)),t[7]||(t[7]=e("p",null,"Then let AI generate:",-1)),t[8]||(t[8]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Based on the above changes, generate a commit message following Conventional Commits:
- Format: type(scope): description
- type: feat/fix/docs/style/refactor/test/chore
- Concise, no more than 50 characters`)])],-1)),t[9]||(t[9]=e("p",null,"Execute the commit:",-1)),t[10]||(t[10]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},'!git add . && git commit -m "feat(auth): add email verification on registration"')])],-1)),t[11]||(t[11]=e("h3",{id:"step-3-generate-pr-description",tabindex:"-1"},[n("Step 3: Generate PR Description "),e("a",{class:"header-anchor",href:"#step-3-generate-pr-description","aria-label":"Permalink to “Step 3: Generate PR Description”"},"​")],-1)),d(o),t[12]||(t[12]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Clear PR descriptions help reviewers understand.")],-1)),t[13]||(t[13]=e("blockquote",null,[e("p",null,"Get recent commit list (example):")],-1)),t[14]||(t[14]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"!git log --oneline -10")])],-1)),t[15]||(t[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Based on the above commit history, generate a PR description:

## Summary
(one sentence)

## Changes
(list main modifications)

## Testing
(what was tested)

## Related Issues
(related issue numbers)`)])],-1)),t[16]||(t[16]=e("h3",{id:"step-4-use-undo-to-revert",tabindex:"-1"},[n("Step 4: Use /undo to Revert "),e("a",{class:"header-anchor",href:"#step-4-use-undo-to-revert","aria-label":"Permalink to “Step 4: Use /undo to Revert”"},"​")],-1)),t[17]||(t[17]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Revert AI mistakes.")],-1)),t[18]||(t[18]=e("p",null,"If you're not satisfied with AI's changes:",-1)),t[19]||(t[19]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/undo")])],-1)),t[20]||(t[20]=e("p",null,[e("strong",null,"You should see"),n(": The most recent conversation changes are reverted, and related file changes are rolled back (requires Git repo). For more details see "),e("a",{href:"https://opencode.ai/docs/tui#undo",target:"_blank",rel:"noreferrer"},"https://opencode.ai/docs/tui#undo"),n(" or "),e("a",{href:"./../appendix/commands.html"},"Appendix/Commands Reference"),n(".")],-1)),t[21]||(t[21]=e("h3",{id:"step-5-add-code-comments",tabindex:"-1"},[n("Step 5: Add Code Comments "),e("a",{class:"header-anchor",href:"#step-5-add-code-comments","aria-label":"Permalink to “Step 5: Add Code Comments”"},"​")],-1)),t[22]||(t[22]=e("p",null,[e("strong",null,"Why"),e("br"),n(" Good comments are living documentation.")],-1)),t[23]||(t[23]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@src/services/payment.ts Add JSDoc comments to this file:
- For every exported function
- Include parameter descriptions and return values
- Include usage examples`)])],-1)),t[24]||(t[24]=e("hr",null,null,-1)),t[25]||(t[25]=e("h2",{id:"📋-magic-prompts",tabindex:"-1"},[n("📋 Magic Prompts "),e("a",{class:"header-anchor",href:"#📋-magic-prompts","aria-label":"Permalink to “📋 Magic Prompts”"},"​")],-1)),t[26]||(t[26]=e("h3",{id:"📄-readme-generation",tabindex:"-1"},[n("📄 README Generation "),e("a",{class:"header-anchor",href:"#📄-readme-generation","aria-label":"Permalink to “📄 README Generation”"},"​")],-1)),t[27]||(t[27]=e("blockquote",null,[e("p",null,"Expected outcome: Generate a professional project README for quick onboarding")],-1)),t[28]||(t[28]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a technical documentation engineer who excels at writing easy-to-understand project docs.

## Task
Generate a professional README.md for the project.

## Input
### Required
- Project name: 【name】
- One-liner description: 【description】
- Tech stack: 【tech stack】

### Optional
- Target users: 【who will use this?】
- Project structure: @explore or [paste structure]

## Output Specification
Include the following sections:
1. **Project Title and Badges**
2. **Description** (3-5 sentences)
3. **Features** (as a list)
4. **Quick Start**
   - Prerequisites
   - Installation steps (copy-paste ready)
   - Run commands
5. **Configuration** (env vars, config files)
6. **API Documentation** (if applicable)
7. **FAQ**
8. **Contributing**
9. **License**

## Constraints
- ✅ Quick start commands must be copy-paste ready
- ✅ Configuration must be complete with all required fields
- ✅ Use appropriate badges (build status, version, etc.)
- ❌ Avoid being too verbose, keep it concise
- ❌ Don't miss key configurations`)])],-1)),t[29]||(t[29]=e("h3",{id:"🔧-commit-message-generation",tabindex:"-1"},[n("🔧 Commit Message Generation "),e("a",{class:"header-anchor",href:"#🔧-commit-message-generation","aria-label":"Permalink to “🔧 Commit Message Generation”"},"​")],-1)),t[30]||(t[30]=e("blockquote",null,[e("p",null,"Expected outcome: Generate standardized Conventional Commits format messages")],-1)),t[31]||(t[31]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a code standards expert who excels at writing standardized commit messages.

## Task
Generate a commit message following Conventional Commits based on code changes.

## Input
### Required
- Changes: !git diff or [paste change description]

### Optional
- Related Issue: 【Issue number?】

## Output Specification
Format: \`<type>(<scope>): <description>\`

### type Selection
- feat: new feature
- fix: bug fix
- docs: documentation update
- style: code formatting (no logic change)
- refactor: refactoring (not feature or fix)
- test: test related
- chore: build/tool/dependencies

### Standards
- description under 50 characters
- Use imperative mood (add, fix, update, not added, fixed)
- If changes are complex, add body for details
- If related to an Issue, add \`Closes #123\` in footer

## Constraints
- ✅ type should accurately reflect change type
- ✅ description should be specific about what changed
- ❌ Avoid vague descriptions like "fix bug", "update code"
- ❌ Don't repeat type in description`)])],-1)),t[32]||(t[32]=e("h3",{id:"📝-pr-description-generation",tabindex:"-1"},[n("📝 PR Description Generation "),e("a",{class:"header-anchor",href:"#📝-pr-description-generation","aria-label":"Permalink to “📝 PR Description Generation”"},"​")],-1)),t[33]||(t[33]=e("blockquote",null,[e("p",null,"Expected outcome: Generate clear PR descriptions to help reviewers understand changes")],-1)),t[34]||(t[34]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`## Role
You are a technical writing expert who excels at writing clear technical docs.

## Task
Generate a PR description based on commit history.

## Input
### Required
- Commit history: !git log --oneline -10 or [paste commit list]

### Optional
- PR purpose: 【What problem does this PR solve?】
- Related Issue: 【Issue number?】

## Output Specification
\`\`\`markdown
## Summary
(one sentence describing the PR's purpose)

## Changes
- Detailed change 1
- Detailed change 2
- ...

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing complete

## Screenshots/Recordings
(if UI changes, attach screenshots)

## Related Issues
Closes #【Issue number】

## Reviewer Notes
(areas needing special attention)`)])],-1)),t[35]||(t[35]=e("h2",{id:"constraints",tabindex:"-1"},[n("Constraints "),e("a",{class:"header-anchor",href:"#constraints","aria-label":"Permalink to “Constraints”"},"​")],-1)),t[36]||(t[36]=e("ul",null,[e("li",null,"✅ Summary should be clear in one sentence"),e("li",null,"✅ Changes should be specific, not just copying commit messages"),e("li",null,"✅ If UI changes, remind to attach screenshots"),e("li",null,"❌ Don't miss related Issues"),e("li",null,"❌ Don't make changes section too vague")],-1)),t[37]||(t[37]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`

---

## Checklist ✅

> All must pass before continuing

- [ ] Generated README.md
- [ ] Used AI to generate commit messages
- [ ] Know how to generate PR descriptions
- [ ] Know /undo and Git integration

---

## Common Pitfalls

| Issue | Cause | Solution |
|-----|-----|-----|
| README inaccurate | AI analysis incomplete | Use @explore first to let AI understand the project |
| Wrong commit format | No standard specified | Explicitly require Conventional Commits |
| /undo doesn't work | Not a Git repo | Run \`git init\` first |

---

## Lesson Summary

You learned:

1. Auto-generate project README
2. Generate standardized commit messages
3. Generate PR descriptions
4. /undo /redo with Git integration

---

## Next Lesson Preview

> Next lesson we'll learn about CI/CD integration, putting AI to work in pipelines.

---

📚 **More Templates**: [Prompt Template Library](../appendix/prompts)`)])],-1))])}const v=a(p,[["render",c]]);export{C as __pageData,v as default};
