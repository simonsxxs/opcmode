import{_ as d,I as o,c as r,o as i,a5 as a,J as s,j as t,a as e,aA as p}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"Plan vs Build：规划与执行","description":"理解 Plan Agent（只读分析）和 Build Agent（读写执行），掌握权限询问机制，用 Tab 键灵活切换，掌握高效 AI 编程工作流。","frontmatter":{"title":"Plan vs Build：规划与执行","subtitle":"两种模式，两种用法","course":"OpenCode 中文实战课","stage":"第三阶段","lesson":"3.1","duration":"10 分钟","practice":"15 分钟","level":"新手","description":"理解 Plan Agent（只读分析）和 Build Agent（读写执行），掌握权限询问机制，用 Tab 键灵活切换，掌握高效 AI 编程工作流。","tags":["Plan","Build","模式"],"prerequisite":["2.1 界面与基础操作"]},"headers":[],"relativePath":"3-workflow/01-plan-build.md","filePath":"3-workflow/01-plan-build.md","lastUpdated":1772014034000}'),c={name:"3-workflow/01-plan-build.md"};function u(h,l,b,g,A,P){const n=o("AdInArticle");return i(),r("div",null,[l[0]||(l[0]=a("",38)),s(n),l[1]||(l[1]=a("",8)),l[2]||(l[2]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    // Build Agent 配置
    "build": {
      "mode": "primary",
      "model": "anthropic/claude-opus-4-5-thinking",
      "temperature": 0.3,
      "permission": {
        "edit": "allow",
        "bash": "allow"
      }
    },
    // Plan Agent 配置
    "plan": {
      "mode": "primary",
      "model": "anthropic/claude-opus-4-5-thinking",
      "temperature": 0.1,
      "permission": {
        "edit": {
          "*": "deny",                    // 禁止编辑所有源代码
          ".opencode/plans/*.md": "allow" // 只允许编辑计划文件
        },
        "bash": "allow"
      }
    }
  }
}`)])],-1)),l[3]||(l[3]=a("",14)),l[4]||(l[4]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"@src/main.ts 分析这个文件的结构，列出所有函数和它们的作用")])],-1)),l[5]||(l[5]=a("",7)),l[6]||(l[6]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"给 @src/main.ts 添加详细的 JSDoc 注释")])],-1)),l[7]||(l[7]=t("p",null,[t("strong",null,"你应该看到"),e("：AI 使用 "),t("code",null,"edit"),e(" 工具修改文件，添加注释。你可以审核更改后决定是否接受。")],-1)),l[8]||(l[8]=t("h3",{id:"第-6-步-撤销更改-可选",tabindex:"-1"},[e("第 6 步：撤销更改（可选） "),t("a",{class:"header-anchor",href:"#第-6-步-撤销更改-可选","aria-label":"Permalink to “第 6 步：撤销更改（可选）”"},"​")],-1)),l[9]||(l[9]=t("p",null,[t("strong",null,"为什么"),t("br"),e(" 如果不满意，可以撤销。")],-1)),l[10]||(l[10]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},"/undo")])],-1)),l[11]||(l[11]=a("",5)),l[12]||(l[12]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`你: 帮我重构用户认证模块，用 TODO 跟踪进度

AI: 好的，我先创建任务列表：
    ✅ 1. 分析现有代码结构
    🔄 2. 设计新的认证流程
    ⏳ 3. 重写认证逻辑
    ⏳ 4. 更新测试用例
    ⏳ 5. 验证功能

    开始执行第一项...

你: 当前进度？

AI: 让我查看一下...
    ✅ 1. 分析现有代码结构（已完成）
    ✅ 2. 设计新的认证流程（已完成）
    🔄 3. 重写认证逻辑（进行中，预计 5 分钟）
    ⏳ 4. 更新测试用例
    ⏳ 5. 验证功能`)])],-1)),l[13]||(l[13]=a("",16)),l[14]||(l[14]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "plan": {
      "steps": 5  // 最多 5 次工具调用
    }
  }
}`)])],-1)),l[15]||(l[15]=t("h3",{id:"自定义快捷键",tabindex:"-1"},[e("自定义快捷键 "),t("a",{class:"header-anchor",href:"#自定义快捷键","aria-label":"Permalink to “自定义快捷键”"},"​")],-1)),l[16]||(l[16]=t("p",null,[e("默认使用 "),t("kbd",null,"Tab"),e(" 切换 Agent，也可以在配置中修改 "),t("code",null,"agent_cycle"),e(" 键绑定：")],-1)),l[17]||(l[17]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "agent_cycle": "tab",           // 切换到下一个 Agent（默认值）
    "agent_cycle_reverse": "shift+tab"  // 切换到上一个 Agent（默认值）
  }
}`)])],-1)),l[18]||(l[18]=a("",5)),l[19]||(l[19]=t("div",{class:"language-"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"}),t("pre",null,[t("code",{"v-pre":""},`你: 这个模块需要重构，先帮我分析一下，不要直接改

AI: [调用 plan_enter 工具]
    → 弹出确认框：是否切换到 Plan 模式？
    → 你选择 Yes
    → AI 在 Plan 模式下分析代码
    → 生成计划文件 .opencode/plans/xxx.md

你: 计划看起来不错，开始实施吧

AI: [调用 plan_exit 工具]
    → 弹出确认框：是否切换到 Build 模式？
    → 你选择 Yes
    → AI 在 Build 模式下执行修改`)])],-1)),l[20]||(l[20]=a("",7)),l[21]||(l[21]=t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 查看项目级计划
cat .opencode/plans/*.md

# 查看全局级计划
cat ~/.local/share/opencode/plans/*.md`)])],-1)),l[22]||(l[22]=a("",8)),l[23]||(l[23]=t("details",null,[t("summary",null,[t("strong",null,"点击展开查看源码位置")]),t("blockquote",null,[t("p",null,"更新时间：2026-02-14")]),t("table",{tabindex:"0"},[t("thead",null,[t("tr",null,[t("th",null,"功能"),t("th",null,"文件路径"),t("th",null,"行号")])]),t("tbody",null,[t("tr",null,[t("td",null,"Build Agent 定义"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/agent/agent.ts#L77-L91",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/agent/agent.ts")])]),t("td",null,"77-91")]),t("tr",null,[t("td",null,"Plan Agent 定义"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/agent/agent.ts#L92-L114",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/agent/agent.ts")])]),t("td",null,"92-114")]),t("tr",null,[t("td",null,"默认权限规则"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/agent/agent.ts#L55-L73",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/agent/agent.ts")])]),t("td",null,"55-73")]),t("tr",null,[t("td",null,"plan_enter 工具"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/tool/plan.ts#L75-L130",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/tool/plan.ts")])]),t("td",null,"75-130")]),t("tr",null,[t("td",null,"plan_exit 工具"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/tool/plan.ts#L20-L73",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/tool/plan.ts")])]),t("td",null,"20-73")]),t("tr",null,[t("td",null,"Plan 模式提示词"),t("td",null,[t("a",{href:"https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/session/prompt.ts#L1451-L1455",target:"_blank",rel:"noreferrer"},[t("code",null,"packages/opencode/src/session/prompt.ts")])]),t("td",null,"1451-1455")])])]),t("p",null,[t("strong",null,"关键常量"),e("：")]),t("ul",null,[t("li",null,[t("code",null,"plan_enter"),e("：从 Build 切换到 Plan 的工具")]),t("li",null,[t("code",null,"plan_exit"),e("：从 Plan 切换到 Build 的工具")])]),t("p",null,[t("strong",null,"权限动作"),e("：")]),t("ul",null,[t("li",null,[t("code",null,"allow"),e("：允许执行")]),t("li",null,[t("code",null,"deny"),e("：拒绝执行")]),t("li",null,[t("code",null,"ask"),e("：询问用户确认")])]),t("p",null,[t("strong",null,"Plan Agent 权限配置"),e("（源码定义）：")]),t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`{
  question: "allow",                        // 可以向你提问
  plan_exit: "allow",                       // 可以退出 Plan 模式
  external_directory: {
    [Global.Path.data + "/plans/*"]: "allow",  // 允许访问全局计划目录
  },
  edit: {
    "*": "deny",                           // 禁止编辑所有文件
    ".opencode/plans/*.md": "allow",       // 允许编辑项目计划文件
    [Global.Path.data + "/plans/*.md"]: "allow", // 允许编辑全局计划文件
  },
}`)])])],-1)),l[24]||(l[24]=t("hr",null,null,-1)),l[25]||(l[25]=t("h2",{id:"下一课预告",tabindex:"-1"},[e("下一课预告 "),t("a",{class:"header-anchor",href:"#下一课预告","aria-label":"Permalink to “下一课预告”"},"​")],-1)),l[26]||(l[26]=t("blockquote",null,[t("p",null,"下一课我们将认识 Agent 系统，学会调用不同专家完成任务。")],-1))])}const _=d(c,[["render",u]]);export{k as __pageData,_ as default};
