import{_ as r,c as n,o,a5 as t,j as e,a}from"./chunks/framework.Dtwt352Q.js";const P=JSON.parse('{"title":"实验性功能汇总","description":"OpenCode 实验性功能的完整列表、启用方式和使用场景","frontmatter":{"title":"实验性功能汇总","description":"OpenCode 实验性功能的完整列表、启用方式和使用场景"},"headers":[],"relativePath":"appendix/experimental-features.md","filePath":"appendix/experimental-features.md","lastUpdated":1772014034000}'),d={name:"appendix/experimental-features.md"};function s(_,l,h,E,c,i){return o(),n("div",null,[...l[0]||(l[0]=[t("",12),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# macOS / Linux：添加到 ~/.zshrc 或 ~/.bashrc
export OPENCODE_EXPERIMENTAL=true

# 然后重新加载
source ~/.zshrc`)])],-1),e("h3",{id:"方式二-按需启用单个功能",tabindex:"-1"},[a("方式二：按需启用单个功能 "),e("a",{class:"header-anchor",href:"#方式二-按需启用单个功能","aria-label":"Permalink to “方式二：按需启用单个功能”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 只启用你需要的功能
export OPENCODE_EXPERIMENTAL_LSP_TOOL=true
export OPENCODE_EXPERIMENTAL_PLAN_MODE=true`)])],-1),t("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export OPENCODE_ENABLE_EXA=true")])],-1),t("",7),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export OPENCODE_EXPERIMENTAL_LSP_TOOL=true
export OPENCODE_EXPERIMENTAL_LSP_TY=true`)])],-1),t("",6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export OPENCODE_EXPERIMENTAL_PLAN_MODE=true")])],-1),t("",8),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`export OPENCODE_EXPERIMENTAL_ICON_DISCOVERY=true
export OPENCODE_EXPERIMENTAL_MARKDOWN=true`)])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"export OPENCODE_EXPERIMENTAL_OXFMT=true")])],-1),t("",6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 设置 bash 超时为 2 分钟
export OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS=120000

# 限制 LLM 输出最多 8192 token
export OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX=8192`)])],-1),e("hr",null,null,-1),e("h2",{id:"opencode-json-中的-experimental-配置",tabindex:"-1"},[a("opencode.json 中的 experimental 配置 "),e("a",{class:"header-anchor",href:"#opencode-json-中的-experimental-配置","aria-label":"Permalink to “opencode.json 中的 experimental 配置”"},"​")],-1),e("p",null,[a("除了环境变量，"),e("code",null,"opencode.json"),a(" 中也有 "),e("code",null,"experimental"),a(" 字段，用于配置另一类实验性功能：")],-1),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true,           // 启用批量操作工具
    "openTelemetry": true,        // 启用 OpenTelemetry 链路追踪
    "disable_paste_summary": true, // 禁用粘贴大段文本自动摘要
    "continue_loop_on_deny": true, // 工具被拒绝时继续思考
    "primary_tools": ["tool1"],   // 仅限 Primary Agent 使用的工具
    "mcp_timeout": 30000          // MCP 请求超时（毫秒）
  }
}`)])],-1),t("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# ═══════════════════════════════════════════════════════════════
# OpenCode 实验性功能配置
# 添加到 ~/.zshrc 或 ~/.bashrc，然后 source 一下
# ═══════════════════════════════════════════════════════════════

# 一键启用所有实验性功能（下面这些单独开关会自动被包含）
# export OPENCODE_EXPERIMENTAL=true

# ───────────────────────────────────────────────────────────────
# 网络搜索（需要 Exa API，或使用 Zen 托管模型自动启用）
# ───────────────────────────────────────────────────────────────
export OPENCODE_ENABLE_EXA=true           # 启用 websearch 工具

# ───────────────────────────────────────────────────────────────
# LSP（语言服务器协议）增强
# ───────────────────────────────────────────────────────────────
export OPENCODE_EXPERIMENTAL_LSP_TOOL=true  # 启用 LSP 工具
export OPENCODE_EXPERIMENTAL_LSP_TY=true    # 启用实验性 ty Python 服务器

# ───────────────────────────────────────────────────────────────
# 界面与交互
# ───────────────────────────────────────────────────────────────
export OPENCODE_EXPERIMENTAL_MARKDOWN=true         # 实验性 Markdown 渲染
export OPENCODE_EXPERIMENTAL_ICON_DISCOVERY=true   # 自动发现项目图标

# ───────────────────────────────────────────────────────────────
# 工作流增强
# ───────────────────────────────────────────────────────────────
export OPENCODE_EXPERIMENTAL_PLAN_MODE=true  # 启用计划模式

# ───────────────────────────────────────────────────────────────
# 性能与格式化
# ───────────────────────────────────────────────────────────────
export OPENCODE_EXPERIMENTAL_OXFMT=true      # 启用 oxfmt 格式化器

# ───────────────────────────────────────────────────────────────
# 超时与限制（可选）
# ───────────────────────────────────────────────────────────────
# export OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS=120000
# export OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX=8192`)])],-1),e("hr",null,null,-1),e("h2",{id:"常见问题",tabindex:"-1"},[a("常见问题 "),e("a",{class:"header-anchor",href:"#常见问题","aria-label":"Permalink to “常见问题”"},"​")],-1),e("h3",{id:"启用后没有效果",tabindex:"-1"},[a("启用后没有效果？ "),e("a",{class:"header-anchor",href:"#启用后没有效果","aria-label":"Permalink to “启用后没有效果？”"},"​")],-1),e("ol",null,[e("li",null,[e("p",null,[e("strong",null,"确认已重新加载配置"),a("：")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"source ~/.zshrc  # 或 source ~/.bashrc")])])]),e("li",null,[e("p",null,[e("strong",null,"确认已重启 OpenCode"),a("：环境变量在进程启动时读取")])]),e("li",null,[e("p",null,[e("strong",null,"确认变量已设置"),a("：")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"env | grep OPENCODE")])])])],-1),t("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"# export OPENCODE_EXPERIMENTAL_PLAN_MODE=true  # 注释掉就关闭了")])],-1),t("",3)])])}const b=r(d,[["render",s]]);export{P as __pageData,b as default};
