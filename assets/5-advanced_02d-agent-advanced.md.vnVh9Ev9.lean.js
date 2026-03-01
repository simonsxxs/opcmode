import{_ as l,c as d,o as r,a5 as t,j as e,a as n,a$ as o}from"./chunks/framework.Dtwt352Q.js";const m=JSON.parse('{"title":"5.2d Agent 高级技巧","description":"学习工具接口设计、ACI 透传参数、Agent 调试等高级技巧，打造更强大的自定义 Agent。","frontmatter":{"title":"5.2d Agent 高级技巧","subtitle":"工具接口设计、透传参数与调试","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.2d","duration":"20 分钟","practice":"20 分钟","level":"进阶","description":"学习工具接口设计、ACI 透传参数、Agent 调试等高级技巧，打造更强大的自定义 Agent。","tags":["Agent","ACI","调试"],"prerequisite":["5.2a Agent 快速入门","5.2c Agent 权限与安全"]},"headers":[],"relativePath":"5-advanced/02d-agent-advanced.md","filePath":"5-advanced/02d-agent-advanced.md","lastUpdated":1772014034000}'),s={name:"5-advanced/02d-agent-advanced.md"};function i(c,a,p,h,g,u){return r(),d("div",null,[...a[0]||(a[0]=[t("",15),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- ❌ 不好：需要先知道行数才能写 -->
请输出：
- 第 1-5 行：导入语句
- 第 6-20 行：函数定义
- ...

<!-- ✅ 好：自然语言描述 -->
按以下结构组织代码：
1. 导入语句
2. 常量定义
3. 函数定义
4. 主逻辑`)])],-1),e("h4",{id:"_2-格式接近自然语言",tabindex:"-1"},[n("2. 格式接近自然语言 "),e("a",{class:"header-anchor",href:"#_2-格式接近自然语言","aria-label":"Permalink to “2. 格式接近自然语言”"},"​")],-1),e("p",null,"模型在互联网上见过的格式更容易生成。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- ❌ 不好：需要精确的 JSON 转义 -->
输出格式：{"code": "function foo() {\\n  return \\"bar\\";\\n}"}

<!-- ✅ 好：Markdown 代码块（模型见过无数次） -->
输出格式：
\`\`\`javascript
function foo() {
  return "bar";
}`)])],-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`
#### 3. 描述要像优秀的 docstring

工具描述应该包含：
- **功能说明**：这个工具做什么
- **使用示例**：典型用法
- **边界情况**：什么时候不该用
- **输入格式**：参数要求

### Anthropic 的实际经验

> "在构建 SWE-bench Agent 时，我们花在优化工具上的时间比优化整体 prompt 还多。"

他们发现模型会在使用相对路径时出错（当 Agent 移出根目录后）。解决方案：改为要求**绝对路径**——模型完美执行。

**启示**：如果 Agent 频繁在某个工具上出错，问题可能在工具设计，而非 prompt。

---

## Prompt 工程

<AdInArticle />

### 系统提示词结构

一个好的 Agent prompt 应该包含：

\`\`\`markdown
---
description: 简短描述（影响自动选择）
mode: subagent
temperature: 0.2
---

# 角色定义
你是谁、擅长什么。

# 工作流程
1. 第一步做什么
2. 第二步做什么
3. ...

# 约束条件
- 不要做什么
- 什么情况下停止

# 输出格式
- 如何组织输出
- 包含哪些部分

# 自我检查（可选）
完成前问自己几个问题。`)])],-1),e("h3",{id:"完整示例",tabindex:"-1"},[n("完整示例 "),e("a",{class:"header-anchor",href:"#完整示例","aria-label":"Permalink to “完整示例”"},"​")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`---
description: 安全审计专家，专注 OWASP Top 10 漏洞检测
mode: subagent
temperature: 0.1
steps: 30
permission:
  edit: deny
---

# 角色

你是安全审计专家，专注于发现 Web 应用中的安全漏洞。

主要检测：
- SQL 注入
- XSS（跨站脚本）
- CSRF（跨站请求伪造）
- 认证/授权问题
- 敏感数据泄露
- 依赖漏洞

# 工作流程

## 1. 信息收集
- 了解项目技术栈
- 识别入口点（API、表单、URL 参数）
- 查看认证机制

## 2. 漏洞扫描
按 OWASP Top 10 逐项检查：
1. 注入漏洞
2. 认证失效
3. 敏感数据暴露
4. XML 外部实体
5. 访问控制失效
6. 安全配置错误
7. XSS
8. 不安全的反序列化
9. 使用含有已知漏洞的组件
10. 日志记录和监控不足

## 3. 验证发现
- 确认漏洞可利用
- 评估影响程度
- 排除误报

# 输出格式

对每个发现的问题：

## 🔴 [严重程度] 问题标题

**位置**：文件路径:行号

**描述**：问题是什么

**影响**：可能造成什么后果

**修复建议**：
\`\`\`代码示例\`\`\`

**参考**：相关 CWE/CVE 编号

# 约束

- 不要修改任何代码
- 不要执行可能造成破坏的命令
- 发现严重漏洞立即报告，不要等到扫描完成

# 自我检查

完成前确认：
1. 是否检查了所有入口点？
2. 是否验证了每个发现？
3. 修复建议是否可行？`)])],-1),e("h3",{id:"反思机制",tabindex:"-1"},[n("反思机制 "),e("a",{class:"header-anchor",href:"#反思机制","aria-label":"Permalink to “反思机制”"},"​")],-1),e("p",null,"在 prompt 中加入自我检查步骤，可以提高 Agent 的准确性。",-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`# 完成前的自我检查

在提交结果前，问自己：
1. 我是否完全理解了用户需求？
2. 我的方案是否完整？
3. 有没有遗漏的边界情况？
4. 如果我是用户，看到这个结果会满意吗？`)])],-1),t("",5),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "deep-thinker": {
      "description": "深度思考，处理复杂问题",
      "model": "openai/o1",
      "reasoningEffort": "high",     // OpenAI 特定参数
      "textVerbosity": "low"          // OpenAI 特定参数
    },
    "quick-helper": {
      "description": "快速响应，处理简单问题",
      "model": "anthropic/claude-haiku-4-5",
      "temperature": 0.3
    }
  }
}`)])],-1),t("",7),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`.opencode/agent/
├── review/
│   ├── security.md       → 名称: review/security
│   └── performance.md    → 名称: review/performance
├── docs/
│   └── api.md            → 名称: docs/api
└── translator.md         → 名称: translator`)])],-1),e("p",null,"调用方式：",-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"@review/security 帮我审计这段代码")])],-1),e("blockquote",null,[e("p",null,[n("来源："),e("code",null,"config.ts:243-255")])],-1),e("h3",{id:"mcp-工具通配符控制",tabindex:"-1"},[n("MCP 工具通配符控制 "),e("a",{class:"header-anchor",href:"#mcp-工具通配符控制","aria-label":"Permalink to “MCP 工具通配符控制”"},"​")],-1),e("p",null,"禁用某个 MCP server 的所有工具：",-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "safe-agent": {
      "permission": {
        "mymcp_*": "deny",           // 禁用 mymcp 的所有工具
        "postgres_query": "ask"       // 数据库查询需确认
      }
    }
  }
}`)])],-1),e("blockquote",null,[e("p",null,[n("来源："),e("code",null,"agents.mdx:366-379")])],-1),e("h3",{id:"steps-参数调优",tabindex:"-1"},[n("steps 参数调优 "),e("a",{class:"header-anchor",href:"#steps-参数调优","aria-label":"Permalink to “steps 参数调优”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
steps: 50  # 最大迭代步数
---`)])],-1),t("",4),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
color: "#FF5733"  # 十六进制颜色
---`)])],-1),e("p",null,"在界面中区分不同 Agent，便于识别当前使用的是哪个。",-1),e("h3",{id:"hidden-隐藏-agent",tabindex:"-1"},[n("hidden 隐藏 Agent "),e("a",{class:"header-anchor",href:"#hidden-隐藏-agent","aria-label":"Permalink to “hidden 隐藏 Agent”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
hidden: true  # 从 @ 菜单隐藏
---`)])],-1),e("p",null,"适用场景：",-1),e("ul",null,[e("li",null,"内部工具 Agent，不需要用户直接调用"),e("li",null,"只通过 Task tool 被其他 Agent 调用"),e("li",null,"系统级 Agent")],-1),e("blockquote",null,[e("p",null,[n("来源："),e("code",null,"config.ts:468-471")])],-1),e("h3",{id:"name-覆盖文件名",tabindex:"-1"},[n("name 覆盖文件名 "),e("a",{class:"header-anchor",href:"#name-覆盖文件名","aria-label":"Permalink to “name 覆盖文件名”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
name: my-custom-name  # 覆盖文件名
description: ...
---`)])],-1),t("",6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 查看最近的会话
ls -la .opencode/data/sessions/

# 查看具体会话的消息
cat .opencode/data/sessions/<session-id>/messages.json`)])],-1),e("h3",{id:"_2-简化测试",tabindex:"-1"},[n("2. 简化测试 "),e("a",{class:"header-anchor",href:"#_2-简化测试","aria-label":"Permalink to “2. 简化测试”"},"​")],-1),e("p",null,"当 Agent 行为异常时：",-1),e("ol",null,[e("li",null,[n("创建一个"),e("strong",null,"最简版本"),n("的 prompt")]),e("li",null,"逐步添加复杂性"),e("li",null,"找到导致问题的部分")],-1),e("div",{class:"language-markdown"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"markdown"),e("pre",null,[e("code",{"v-pre":""},`<!-- 最简版本 -->
---
description: 测试 Agent
mode: subagent
---

你是测试助手。回答用户问题。`)])],-1),e("h3",{id:"_3-检查权限配置",tabindex:"-1"},[n("3. 检查权限配置 "),e("a",{class:"header-anchor",href:"#_3-检查权限配置","aria-label":"Permalink to “3. 检查权限配置”"},"​")],-1),e("p",null,"权限问题是最常见的问题来源。",-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 查看当前配置（包括合并后的权限）
opencode config`)])],-1),t("",8),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`---
steps: 5  # 只执行 5 步就停止
---`)])],-1),t("",6),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "pr-reviewer": {
      "description": "PR 审查机器人，自动审查代码变更",
      "mode": "primary",
      "model": "anthropic/claude-opus-4-5-thinking",
      "steps": 100,
      "temperature": 0.1,
      "prompt": "{file:./prompts/pr-reviewer.md}",
      "permission": {
        "edit": "deny",
        "bash": {
          "*": "deny",
          "git log*": "allow",
          "git diff*": "allow",
          "git show*": "allow",
          "npm test": "allow"
        },
        "task": {
          "*": "deny",
          "security-auditor": "allow",
          "performance-checker": "allow",
          "style-checker": "allow"
        }
      }
    }
  }
}`)])],-1),e("h3",{id:"多模型协作",tabindex:"-1"},[n("多模型协作 "),e("a",{class:"header-anchor",href:"#多模型协作","aria-label":"Permalink to “多模型协作”"},"​")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "planner": {
      "description": "规划者：分析需求，制定计划",
      "mode": "primary",
      "model": "anthropic/claude-opus-4-5-thinking",
      "temperature": 0.2,
      "steps": 20
    },
    "executor": {
      "description": "执行者：实现具体代码",
      "mode": "primary", 
      "model": "anthropic/claude-sonnet-4-20250514",
      "temperature": 0.3,
      "steps": 100
    },
    "reviewer": {
      "description": "审查者：检查代码质量",
      "mode": "subagent",
      "model": "anthropic/claude-haiku-4-5",
      "temperature": 0.1,
      "permission": {
        "edit": "deny"
      }
    }
  }
}`)])],-1),t("",17)])])}const _=l(s,[["render",i]]);export{m as __pageData,_ as default};
