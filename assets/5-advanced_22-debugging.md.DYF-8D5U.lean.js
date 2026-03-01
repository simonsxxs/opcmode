import{_ as o,c as l,o as d,a5 as t,j as e,a,bt as s}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"5.22 调试与诊断工具","description":"","frontmatter":{},"headers":[],"relativePath":"5-advanced/22-debugging.md","filePath":"5-advanced/22-debugging.md","lastUpdated":1772014034000}'),r={name:"5-advanced/22-debugging.md"};function c(p,n,i,g,u,h){return d(),l("div",null,[...n[0]||(n[0]=[t("",17),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug config")])],-1),e("p",null,[e("strong",null,"输出示例"),a("（截取）：")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "keybinds": { ... },
  // 这里列出了所有已加载的 Agent（包括默认和自定义）
  "agent": {
    "coder": { ... },
    "writer": { ... },
    "my-custom-agent": { ... } // 确认自定义 Agent 是否存在
  },
  // 这里可能包含插件动态注入的配置
  "plugin_injected_config": { ... }
}`)])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 测试搜索
opencode debug rg search "关键词"

# 查看文件树（OpenCode 眼中的目录结构）
opencode debug rg tree`)])],-1),e("p",null,[e("strong",null,"检查文件读取"),a("：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 读取文件内容（以 JSON 格式，包含元数据）
opencode debug file read package.json`)])],-1),e("h3",{id:"_3-调试-agent-和-skill",tabindex:"-1"},[a("3. 调试 Agent 和 Skill "),e("a",{class:"header-anchor",href:"#_3-调试-agent-和-skill","aria-label":"Permalink to “3. 调试 Agent 和 Skill”"},"​")],-1),e("p",null,[a("当你安装了大量插件或手动添加了很多 Skill 时，可能会遇到"),e("strong",null,'"我装了但不知道生效没"'),a("的情况。")],-1),e("p",null,[e("strong",null,"用了下面这个命令，就能快速知道 OpenCode 现在实际加载了哪些 Skill"),a("。它会列出 Skill 的名称和物理路径，是排查冲突的终极手段。")],-1),e("p",null,[e("strong",null,"列出实际加载的 Skill"),a("：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug skill")])],-1),e("p",null,[e("strong",null,"输出示例"),a("：")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`[
  {
    "name": "fanyi",
    "description": "...",
    // 确认加载的是哪个路径下的文件
    "location": "/Users/user/.claude/skills/fanyi/SKILL.md"
  },
  {
    "name": "sync-changelog",
    // 确认是否覆盖了同名 Skill
    "location": "/Users/user/.config/opencode/skill/sync-changelog/SKILL.md"
  }
]`)])],-1),e("p",null,[e("strong",null,"查看 Agent 配置详情"),a("：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 查看 audit-gemini 的完整配置（含权限、Prompt）
opencode debug agent audit-gemini`)])],-1),e("p",null,[e("strong",null,"[高阶] 手动执行 Agent 工具"),a("： 想测试 Agent 能否成功调用某个工具？可以直接测试：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 测试 audit-gemini 使用 bash 工具
opencode debug agent audit-gemini --tool bash --params '{"command":"ls -la"}'`)])],-1),e("p",null,[e("strong",null,"列出所有 Skill"),a("：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug skill")])],-1),e("h3",{id:"_4-调试-lsp-语言服务器",tabindex:"-1"},[a("4. 调试 LSP (语言服务器) "),e("a",{class:"header-anchor",href:"#_4-调试-lsp-语言服务器","aria-label":"Permalink to “4. 调试 LSP (语言服务器)”"},"​")],-1),e("p",null,"如果代码补全、跳转定义不工作，可能是 LSP 出了问题。",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 获取文件的诊断信息（报错/警告）
opencode debug lsp diagnostics src/index.ts

# 搜索工作区符号
opencode debug lsp symbols "AppController"

# 获取单个文件的符号结构
opencode debug lsp document-symbols src/index.ts`)])],-1),e("h3",{id:"_5-查看系统状态-paths-scrap",tabindex:"-1"},[a("5. 查看系统状态 (Paths & Scrap) "),e("a",{class:"header-anchor",href:"#_5-查看系统状态-paths-scrap","aria-label":"Permalink to “5. 查看系统状态 (Paths & Scrap)”"},"​")],-1),e("p",null,[e("strong",null,"查看关键路径"),a("： 不知道数据存在哪？")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug paths")])],-1),e("p",null,[e("strong",null,"输出示例"),a("：")],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`data       /Users/username/.local/share/opencode
config     /Users/username/.config/opencode
log        /Users/username/.local/share/opencode/log
cache      /Users/username/.cache/opencode`)])],-1),e("p",null,[e("strong",null,"查看项目历史 (Scrap)"),a("： OpenCode 会记录你打开过的所有项目（Worktree）。")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode debug scrap")])],-1),e("h3",{id:"_6-调试快照-snapshot",tabindex:"-1"},[a("6. 调试快照 (Snapshot) "),e("a",{class:"header-anchor",href:"#_6-调试快照-snapshot","aria-label":"Permalink to “6. 调试快照 (Snapshot)”"},"​")],-1),e("p",null,"OpenCode 的上下文压缩依赖快照机制。",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 追踪当前快照状态
opencode debug snapshot track

# 查看快照差异
opencode debug snapshot diff <hash>`)])],-1),t("",8)])])}const m=o(r,[["render",c]]);export{_ as __pageData,m as default};
