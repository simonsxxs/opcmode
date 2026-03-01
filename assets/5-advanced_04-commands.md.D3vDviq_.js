import{_ as o,c as n,o as l,a5 as a,j as e,a as t,b3 as r}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"5.4 快捷命令","description":"自定义斜杠命令，用 /命令名 一键触发复杂任务，提升操作效率。","frontmatter":{"title":"5.4 快捷命令","subtitle":"一键触发常用任务","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.4","duration":"15 分钟","practice":"15 分钟","level":"进阶","description":"自定义斜杠命令，用 /命令名 一键触发复杂任务，提升操作效率。","tags":["命令","快捷"],"prerequisite":["5.2 自定义 Agent"]},"headers":[],"relativePath":"5-advanced/04-commands.md","filePath":"5-advanced/04-commands.md","lastUpdated":1772014034000}'),c={name:"5-advanced/04-commands.md"};function s(i,d,p,h,m,u){return l(),n("div",null,[...d[0]||(d[0]=[a('<h1 id="_5-4-快捷命令" tabindex="-1">5.4 快捷命令 <a class="header-anchor" href="#_5-4-快捷命令" aria-label="Permalink to “5.4 快捷命令”">​</a></h1><blockquote><p><strong>一句话总结</strong>：自定义斜杠命令，用 <code>/命令名</code> 一键触发复杂任务。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+r+'" alt="快捷命令学霸笔记" data-zoom-src="/images/5-advanced/04-commands-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>创建自定义斜杠命令（JSON 或 Markdown 两种方式）</li><li>使用参数、变量和 Shell 输出</li><li>指定命令使用的 Agent 和模型</li><li>覆盖内置命令</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>常用操作没有快捷方式</li><li>每次都要输入完整的提示词</li><li>内置命令不够用，想自己加</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：一键触发常用任务</li><li>而且不想：每次都手打一长串命令</li></ul><hr><h2 id="命令文件位置" tabindex="-1">命令文件位置 <a class="header-anchor" href="#命令文件位置" aria-label="Permalink to “命令文件位置”">​</a></h2><table tabindex="0"><thead><tr><th>位置</th><th>作用范围</th><th>说明</th></tr></thead><tbody><tr><td><code>.opencode/command/**/*.md</code></td><td>当前项目</td><td>支持嵌套目录</td></tr><tr><td><code>.opencode/commands/**/*.md</code></td><td>当前项目</td><td><code>commands</code> 复数形式也支持</td></tr><tr><td><code>~/.config/opencode/command/**/*.md</code></td><td>全局</td><td>所有项目共享</td></tr></tbody></table><blockquote><p><strong>来源</strong>：<a href="https://github.com/anomalyco/opencode/blob/main/packages/opencode/src/config/config.ts#L191" target="_blank" rel="noreferrer">config.ts#L191</a></p></blockquote><p>嵌套目录示例：</p>',19),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/
└── command/
    ├── review.md           → /review
    ├── git/
    │   ├── commit.md       → /git/commit
    │   └── changelog.md    → /git/changelog
    └── test/
        └── coverage.md     → /test/coverage`)])],-1),e("hr",null,null,-1),e("h2",{id:"两种配置方式",tabindex:"-1"},[t("两种配置方式 "),e("a",{class:"header-anchor",href:"#两种配置方式","aria-label":"Permalink to “两种配置方式”"},"​")],-1),e("h3",{id:"方式一-markdown-文件-推荐",tabindex:"-1"},[t("方式一：Markdown 文件（推荐） "),e("a",{class:"header-anchor",href:"#方式一-markdown-文件-推荐","aria-label":"Permalink to “方式一：Markdown 文件（推荐）”"},"​")],-1),e("p",null,[t("创建 "),e("code",null,".opencode/command/test.md"),t("：")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 运行测试并显示覆盖率
agent: build
model: anthropic/claude-opus-4-5-thinking
---

运行完整的测试套件，生成覆盖率报告。
重点关注失败的测试并提供修复建议。`)])],-1),e("p",null,[t("使用："),e("code",null,"/test")],-1),e("h3",{id:"方式二-json-配置",tabindex:"-1"},[t("方式二：JSON 配置 "),e("a",{class:"header-anchor",href:"#方式二-json-配置","aria-label":"Permalink to “方式二：JSON 配置”"},"​")],-1),e("p",null,[t("在 "),e("code",null,"opencode.jsonc"),t(" 中配置：")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "command": {
    // 键名就是命令名
    "test": {
      // template 是必需字段
      "template": "运行完整的测试套件，生成覆盖率报告。\\n重点关注失败的测试并提供修复建议。",
      "description": "运行测试并显示覆盖率",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking"
    }
  }
}`)])],-1),a('<p>使用：<code>/test</code></p><blockquote><p><strong>两种方式对比</strong>：Markdown 更适合复杂提示词（多行、格式化）；JSON 适合简单命令或批量管理。</p></blockquote><hr><h2 id="配置选项详解" tabindex="-1">配置选项详解 <a class="header-anchor" href="#配置选项详解" aria-label="Permalink to “配置选项详解”">​</a></h2><h3 id="template-必需" tabindex="-1">template（必需） <a class="header-anchor" href="#template-必需" aria-label="Permalink to “template（必需）”">​</a></h3><p>命令执行时发送给 LLM 的提示词模板。</p><ul><li><strong>JSON 配置</strong>：必需字段</li><li><strong>Markdown 配置</strong>：文件正文就是 template，无需显式声明</li></ul><blockquote><p><strong>来源</strong>：<a href="https://github.com/anomalyco/opencode/blob/main/packages/opencode/src/config/config.ts#L450" target="_blank" rel="noreferrer">config.ts#L450</a></p></blockquote><h3 id="description-可选" tabindex="-1">description（可选） <a class="header-anchor" href="#description-可选" aria-label="Permalink to “description（可选）”">​</a></h3><p>命令描述，显示在 TUI 的命令列表中。</p>',10),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 快速代码审查
---`)])],-1),e("h3",{id:"agent-可选",tabindex:"-1"},[t("agent（可选） "),e("a",{class:"header-anchor",href:"#agent-可选","aria-label":"Permalink to “agent（可选）”"},"​")],-1),e("p",null,"指定执行此命令的 Agent。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
agent: plan
---`)])],-1),a('<p><strong>行为规则</strong>：</p><ul><li>如果指定的是 subagent（mode=subagent），命令默认触发子代理调用</li><li>未指定时使用当前活跃的 Agent</li></ul><blockquote><p><strong>来源</strong>：<a href="https://opencode.ai/docs/commands#agent" target="_blank" rel="noreferrer">官方文档 - Agent</a></p></blockquote><h3 id="model-可选" tabindex="-1">model（可选） <a class="header-anchor" href="#model-可选" aria-label="Permalink to “model（可选）”">​</a></h3><p>覆盖此命令使用的模型。</p>',5),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
model: anthropic/claude-opus-4-5-thinking
---`)])],-1),e("h3",{id:"subtask-可选",tabindex:"-1"},[t("subtask（可选） "),e("a",{class:"header-anchor",href:"#subtask-可选","aria-label":"Permalink to “subtask（可选）”"},"​")],-1),e("p",null,"强制命令作为子任务运行。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
subtask: true
---`)])],-1),a('<p><strong>使用场景</strong>：</p><ul><li>不希望命令执行过程污染主对话上下文</li><li>即使 agent 的 mode 设置为 <code>primary</code>，也强制作为 subagent 执行</li></ul><blockquote><p><strong>来源</strong>：<a href="https://opencode.ai/docs/commands#subtask" target="_blank" rel="noreferrer">官方文档 - Subtask</a></p></blockquote><hr><h2 id="提示词模板语法" tabindex="-1">提示词模板语法 <a class="header-anchor" href="#提示词模板语法" aria-label="Permalink to “提示词模板语法”">​</a></h2><h3 id="arguments-全部参数" tabindex="-1">$ARGUMENTS - 全部参数 <a class="header-anchor" href="#arguments-全部参数" aria-label="Permalink to “$ARGUMENTS - 全部参数”">​</a></h3><p>将命令后的所有内容作为参数传入。</p>',7),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 创建 React 组件
---

创建一个名为 $ARGUMENTS 的 React 组件，包含 TypeScript 类型支持。`)])],-1),e("p",null,[t("使用："),e("code",null,"/component Button"),t(" → 将 "),e("code",null,"$ARGUMENTS"),t(" 替换为 "),e("code",null,"Button")],-1),e("h3",{id:"_1-2-3-位置参数",tabindex:"-1"},[t("$1, $2, $3... - 位置参数 "),e("a",{class:"header-anchor",href:"#_1-2-3-位置参数","aria-label":"Permalink to “$1, $2, $3... - 位置参数”"},"​")],-1),e("p",null,"按位置引用各个参数。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 创建指定文件
---

在目录 $2 中创建名为 $1 的文件，内容为：$3`)])],-1),e("p",null,"使用：",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},'/create-file config.json src "{ \\"key\\": \\"value\\" }"')])],-1),a('<p>替换结果：</p><ul><li><code>$1</code> → <code>config.json</code></li><li><code>$2</code> → <code>src</code></li><li><code>$3</code> → <code>{ &quot;key&quot;: &quot;value&quot; }</code></li></ul><h3 id="command-shell-命令输出" tabindex="-1">!<code>command</code> - Shell 命令输出 <a class="header-anchor" href="#command-shell-命令输出" aria-label="Permalink to “!command - Shell 命令输出”">​</a></h3><p>执行 Shell 命令并将输出嵌入提示词。</p>',4),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 分析测试覆盖率
---

当前测试结果：
!\`npm test\`

根据这些结果，建议提升覆盖率的方法。`)])],-1),e("p",null,"另一个示例：",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 审查最近变更
---

最近的 Git 提交：
!\`git log --oneline -10\`

请审查这些变更并提出改进建议。`)])],-1),e("blockquote",null,[e("p",null,"命令在项目根目录执行，输出成为提示词的一部分。")],-1),e("h3",{id:"file-文件引用",tabindex:"-1"},[t("@file - 文件引用 "),e("a",{class:"header-anchor",href:"#file-文件引用","aria-label":"Permalink to “@file - 文件引用”"},"​")],-1),e("p",null,"引用文件内容。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 审查组件
---

审查 @src/components/Button.tsx 组件。
检查性能问题并提出改进建议。`)])],-1),a('<p><strong>支持的写法</strong>：</p><ul><li><code>@src/file.ts</code> - 相对路径</li><li><code>@./relative/path.ts</code> - 显式相对路径</li></ul><blockquote><p><strong>来源</strong>：<a href="https://github.com/anomalyco/opencode/blob/main/packages/opencode/src/config/markdown.ts#L6" target="_blank" rel="noreferrer">markdown.ts#L6</a></p></blockquote><hr><h2 id="完整示例" tabindex="-1">完整示例 <a class="header-anchor" href="#完整示例" aria-label="Permalink to “完整示例”">​</a></h2><h3 id="代码审查命令" tabindex="-1">代码审查命令 <a class="header-anchor" href="#代码审查命令" aria-label="Permalink to “代码审查命令”">​</a></h3><p><code>.opencode/command/review.md</code>：</p>',7),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 审查指定文件的代码质量
agent: plan
---

@$1

请审查这个文件的代码质量，重点关注：
1. 代码规范和命名
2. 潜在 Bug
3. 性能问题
4. 可维护性`)])],-1),e("p",null,[t("使用："),e("code",null,"/review src/main.ts")],-1),e("h3",{id:"智能-commit-命令",tabindex:"-1"},[t("智能 Commit 命令 "),e("a",{class:"header-anchor",href:"#智能-commit-命令","aria-label":"Permalink to “智能 Commit 命令”"},"​")],-1),e("p",null,[e("code",null,".opencode/command/commit.md"),t("：")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 根据变更生成 Commit 消息
---

根据以下变更生成 commit 消息：

!\`git diff --staged\`

要求：
- 遵循 Conventional Commits 规范
- 简洁明了，说明"为什么"而非"做了什么"`)])],-1),e("p",null,[t("使用："),e("code",null,"/commit")],-1),e("h3",{id:"翻译命令",tabindex:"-1"},[t("翻译命令 "),e("a",{class:"header-anchor",href:"#翻译命令","aria-label":"Permalink to “翻译命令”"},"​")],-1),e("p",null,[e("code",null,".opencode/command/translate.md"),t("：")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 翻译为中文
subtask: true
---

请将以下内容翻译为中文：

$ARGUMENTS`)])],-1),a('<p>使用：<code>/translate Hello World</code></p><blockquote><p>使用 <code>subtask: true</code> 避免翻译内容污染主对话上下文。</p></blockquote><hr><h2 id="覆盖内置命令" tabindex="-1">覆盖内置命令 <a class="header-anchor" href="#覆盖内置命令" aria-label="Permalink to “覆盖内置命令”">​</a></h2><p>创建同名文件即可覆盖内置命令。</p><h3 id="可覆盖的内置命令" tabindex="-1">可覆盖的内置命令 <a class="header-anchor" href="#可覆盖的内置命令" aria-label="Permalink to “可覆盖的内置命令”">​</a></h3><table tabindex="0"><thead><tr><th>命令</th><th>功能</th><th>别名</th></tr></thead><tbody><tr><td><code>/connect</code></td><td>添加 Provider</td><td>-</td></tr><tr><td><code>/compact</code></td><td>压缩当前会话</td><td><code>/summarize</code></td></tr><tr><td><code>/details</code></td><td>切换工具执行详情</td><td>-</td></tr><tr><td><code>/editor</code></td><td>打开外部编辑器</td><td>-</td></tr><tr><td><code>/exit</code></td><td>退出 OpenCode</td><td><code>/quit</code>, <code>/q</code></td></tr><tr><td><code>/export</code></td><td>导出对话为 Markdown</td><td>-</td></tr><tr><td><code>/help</code></td><td>显示帮助</td><td>-</td></tr><tr><td><code>/init</code></td><td>创建/更新 AGENTS.md</td><td>-</td></tr><tr><td><code>/models</code></td><td>列出可用模型</td><td>-</td></tr><tr><td><code>/new</code></td><td>新建会话</td><td><code>/clear</code></td></tr><tr><td><code>/redo</code></td><td>重做</td><td>-</td></tr><tr><td><code>/sessions</code></td><td>列出/切换会话</td><td><code>/resume</code>, <code>/continue</code></td></tr><tr><td><code>/share</code></td><td>分享会话</td><td>-</td></tr><tr><td><code>/themes</code></td><td>列出主题</td><td>-</td></tr><tr><td><code>/undo</code></td><td>撤销</td><td>-</td></tr><tr><td><code>/unshare</code></td><td>取消分享</td><td>-</td></tr></tbody></table><blockquote><p><strong>来源</strong>：<a href="https://opencode.ai/docs/tui#commands" target="_blank" rel="noreferrer">官方文档 - TUI Commands</a></p></blockquote><h3 id="覆盖示例" tabindex="-1">覆盖示例 <a class="header-anchor" href="#覆盖示例" aria-label="Permalink to “覆盖示例”">​</a></h3><p><code>.opencode/command/help.md</code>：</p>',10),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 项目专属帮助
---

这是项目专属的帮助信息。

## 常用命令

- /review <file> - 代码审查
- /commit - 智能 Commit
- /translate <text> - 翻译`)])],-1),a('<hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>命令不显示</td><td>文件不在正确目录</td><td>确保在 <code>command/</code> 或 <code>commands/</code> 目录下</td></tr><tr><td>命令名错误</td><td>文件名包含特殊字符</td><td>命令名来自文件路径，用 <code>-</code> 代替空格</td></tr><tr><td>参数不生效</td><td>语法错误</td><td>使用 <code>$ARGUMENTS</code> 或 <code>$1</code>、<code>$2</code></td></tr><tr><td>JSON 配置报错</td><td>缺少 template</td><td><code>template</code> 是 JSON 配置的必需字段</td></tr><tr><td>嵌套目录命令名</td><td>不了解规则</td><td>路径 <code>git/commit.md</code> → 命令 <code>/git/commit</code></td></tr><tr><td>覆盖命令失败</td><td>优先级问题</td><td>项目级命令优先于全局命令</td></tr><tr><td>Shell 命令失败</td><td>路径问题</td><td>命令在项目根目录执行</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>两种配置方式：Markdown 文件和 JSON 配置</li><li>使用参数（<code>$ARGUMENTS</code>、<code>$1</code>）和 Shell 输出（<code>!`cmd`</code>）</li><li>配置选项：<code>description</code>、<code>agent</code>、<code>model</code>、<code>subtask</code></li><li>覆盖内置命令</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习权限管控。</p></blockquote>',10)])])}const _=o(c,[["render",s]]);export{g as __pageData,_ as default};
