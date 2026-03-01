import{_ as l,I as d,c as s,o as r,a5 as a,j as n,J as i,a as e,a_ as p}from"./chunks/framework.Dtwt352Q.js";const T=JSON.parse('{"title":"5.2c Agent 权限与安全","description":"精确控制 Agent 可以做什么、不可以做什么，确保 AI 操作的安全性。","frontmatter":{"title":"5.2c Agent 权限与安全","subtitle":"精确控制 Agent 能做什么","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.2c","duration":"25 分钟","practice":"20 分钟","level":"进阶","description":"精确控制 Agent 可以做什么、不可以做什么，确保 AI 操作的安全性。","tags":["Agent","权限","安全","TaskTool"],"prerequisite":["5.2a Agent 快速入门"]},"headers":[],"relativePath":"5-advanced/02c-agent-permissions.md","filePath":"5-advanced/02c-agent-permissions.md","lastUpdated":1772014034000}'),g={name:"5-advanced/02c-agent-permissions.md"};function c(b,t,h,u,k,m){const o=d("AdInArticle");return r(),s("div",null,[t[0]||(t[0]=a('<h1 id="_5-2c-agent-权限与安全" tabindex="-1">5.2c Agent 权限与安全 <a class="header-anchor" href="#_5-2c-agent-权限与安全" aria-label="Permalink to “5.2c Agent 权限与安全”">​</a></h1><blockquote><p>精确控制 Agent 可以做什么、不可以做什么。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><img src="'+p+'" alt="Agent权限与安全学霸笔记" data-zoom-src="/images/5-advanced/02c-agent-permissions-notes.jpeg"><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解权限系统架构</li><li>配置 bash/edit/task/skill 权限</li><li>设计安全的 Agent 系统</li><li>实现最小权限原则</li></ul><hr><h2 id="权限系统架构" tabindex="-1">权限系统架构 <a class="header-anchor" href="#权限系统架构" aria-label="Permalink to “权限系统架构”">​</a></h2><h3 id="三种权限动作" tabindex="-1">三种权限动作 <a class="header-anchor" href="#三种权限动作" aria-label="Permalink to “三种权限动作”">​</a></h3><table tabindex="0"><thead><tr><th>动作</th><th>说明</th><th>效果</th></tr></thead><tbody><tr><td><code>allow</code></td><td>允许</td><td>直接执行，无需确认</td></tr><tr><td><code>ask</code></td><td>询问</td><td>弹出确认框，用户决定</td></tr><tr><td><code>deny</code></td><td>禁止</td><td>拒绝执行，Agent 收到错误</td></tr></tbody></table><h3 id="权限配置层级" tabindex="-1">权限配置层级 <a class="header-anchor" href="#权限配置层级" aria-label="Permalink to “权限配置层级”">​</a></h3>',13)),t[1]||(t[1]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`默认权限（源码定义）
    ↓ 覆盖
全局配置 permission
    ↓ 覆盖
Agent 级别 permission`)])],-1)),t[2]||(t[2]=a('<p><strong>后面的覆盖前面的</strong>。</p><blockquote><p>来源：<code>config.ts:418-447</code>，<code>agent.ts:194</code></p></blockquote><h3 id="规则优先级-最后匹配获胜" tabindex="-1">规则优先级：最后匹配获胜 <a class="header-anchor" href="#规则优先级-最后匹配获胜" aria-label="Permalink to “规则优先级：最后匹配获胜”">​</a></h3><p>这是最重要的规则！当多个规则都匹配时，<strong>最后一个匹配的规则生效</strong>。</p>',4)),t[3]||(t[3]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",           // 规则 1：所有命令需确认
      "git *": "allow",     // 规则 2：git 命令允许
      "git push*": "deny"   // 规则 3：git push 禁止
    }
  }
}`)])],-1)),t[4]||(t[4]=a('<p>执行 <code>git push origin main</code>：</p><ol><li>匹配规则 1（<code>*</code>）→ ask</li><li>匹配规则 2（<code>git *</code>）→ allow</li><li>匹配规则 3（<code>git push*</code>）→ deny</li><li><strong>最终结果：deny</strong>（规则 3 在最后）</li></ol><blockquote><p>来源：<code>agents.mdx:473</code>，<code>permissions.mdx:70</code></p></blockquote><hr><h2 id="可配置的权限类型" tabindex="-1">可配置的权限类型 <a class="header-anchor" href="#可配置的权限类型" aria-label="Permalink to “可配置的权限类型”">​</a></h2><table tabindex="0"><thead><tr><th>权限</th><th>匹配对象</th><th>说明</th></tr></thead><tbody><tr><td><code>read</code></td><td>文件路径</td><td>读取文件</td></tr><tr><td><code>edit</code></td><td>文件路径</td><td>所有文件修改（edit/write/patch/multiedit）</td></tr><tr><td><code>glob</code></td><td>glob 模式</td><td>文件搜索</td></tr><tr><td><code>grep</code></td><td>正则表达式</td><td>内容搜索</td></tr><tr><td><code>list</code></td><td>目录路径</td><td>列出目录内容</td></tr><tr><td><code>bash</code></td><td>命令字符串</td><td>执行 shell 命令</td></tr><tr><td><code>task</code></td><td>subagent 名称</td><td>调用子 Agent</td></tr><tr><td><code>skill</code></td><td>skill 名称</td><td>加载技能</td></tr><tr><td><code>lsp</code></td><td>-</td><td>LSP 查询（目前不支持细粒度）</td></tr><tr><td><code>todoread</code></td><td>-</td><td>读取 Todo 列表</td></tr><tr><td><code>todowrite</code></td><td>-</td><td>更新 Todo 列表</td></tr><tr><td><code>webfetch</code></td><td>URL</td><td>获取网页内容</td></tr><tr><td><code>websearch</code></td><td>查询字符串</td><td>网页搜索</td></tr><tr><td><code>codesearch</code></td><td>查询字符串</td><td>代码搜索</td></tr><tr><td><code>external_directory</code></td><td>-</td><td>访问项目目录之外的路径</td></tr><tr><td><code>doom_loop</code></td><td>-</td><td>检测重复调用（同一工具连续调用 3 次相同输入）</td></tr></tbody></table><blockquote><p>来源：<code>config.ts:418-447</code></p></blockquote><hr><h2 id="权限配置语法" tabindex="-1">权限配置语法 <a class="header-anchor" href="#权限配置语法" aria-label="Permalink to “权限配置语法”">​</a></h2><h3 id="简单语法-单一动作" tabindex="-1">简单语法：单一动作 <a class="header-anchor" href="#简单语法-单一动作" aria-label="Permalink to “简单语法：单一动作”">​</a></h3>',10)),t[5]||(t[5]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "edit": "allow",      // 所有文件编辑允许
    "bash": "ask",        // 所有命令需确认
    "webfetch": "deny"    // 禁止获取网页
  }
}`)])],-1)),t[6]||(t[6]=n("h3",{id:"全局设置",tabindex:"-1"},[e("全局设置 "),n("a",{class:"header-anchor",href:"#全局设置","aria-label":"Permalink to “全局设置”"},"​")],-1)),t[7]||(t[7]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": "allow"   // 所有权限都允许
}`)])],-1)),t[8]||(t[8]=n("h3",{id:"对象语法-细粒度控制",tabindex:"-1"},[e("对象语法：细粒度控制 "),n("a",{class:"header-anchor",href:"#对象语法-细粒度控制","aria-label":"Permalink to “对象语法：细粒度控制”"},"​")],-1)),t[9]||(t[9]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",              // 默认需确认
      "git status": "allow",   // git status 允许
      "git log*": "allow",     // git log 开头的允许
      "rm -rf*": "deny"        // rm -rf 禁止
    }
  }
}`)])],-1)),t[10]||(t[10]=a('<h3 id="通配符" tabindex="-1">通配符 <a class="header-anchor" href="#通配符" aria-label="Permalink to “通配符”">​</a></h3><table tabindex="0"><thead><tr><th>符号</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td><code>*</code></td><td>匹配任意字符（0个或多个）</td><td><code>git *</code> 匹配 <code>git status</code>、<code>git log</code></td></tr><tr><td><code>?</code></td><td>匹配单个字符</td><td><code>file?.txt</code> 匹配 <code>file1.txt</code></td></tr></tbody></table><hr><h2 id="bash-权限详解" tabindex="-1">bash 权限详解 <a class="header-anchor" href="#bash-权限详解" aria-label="Permalink to “bash 权限详解”">​</a></h2>',4)),i(o),t[11]||(t[11]=n("p",null,[e("bash 权限匹配的是"),n("strong",null,"解析后的命令字符串"),e("。")],-1)),t[12]||(t[12]=n("h3",{id:"常见配置",tabindex:"-1"},[e("常见配置 "),n("a",{class:"header-anchor",href:"#常见配置","aria-label":"Permalink to “常见配置”"},"​")],-1)),t[13]||(t[13]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",                    // 默认需确认

      // Git 命令
      "git status": "allow",
      "git log*": "allow",
      "git diff*": "allow",
      "git branch*": "allow",
      "git checkout*": "ask",        // 切换分支要确认
      "git push*": "ask",            // 推送要确认
      "git reset --hard*": "deny",   // 硬重置禁止

      // 包管理
      "npm install*": "allow",
      "npm run*": "allow",
      "npm publish*": "deny",        // 发布禁止

      // 危险命令
      "rm -rf*": "deny",
      "sudo*": "deny",
      "chmod 777*": "deny"
    }
  }
}`)])],-1)),t[14]||(t[14]=n("h3",{id:"plan-agent-的最佳实践",tabindex:"-1"},[e("Plan Agent 的最佳实践 "),n("a",{class:"header-anchor",href:"#plan-agent-的最佳实践","aria-label":"Permalink to “Plan Agent 的最佳实践”"},"​")],-1)),t[15]||(t[15]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "agent": {
    "plan": {
      "permission": {
        "bash": {
          "*": "deny",               // 默认禁止
          "git log*": "allow",       // 只读命令允许
          "git diff*": "allow",
          "git status": "allow",
          "ls*": "allow",
          "cat*": "allow",
          "head*": "allow",
          "tail*": "allow"
        }
      }
    }
  }
}`)])],-1)),t[16]||(t[16]=a('<hr><h2 id="edit-权限详解" tabindex="-1">edit 权限详解 <a class="header-anchor" href="#edit-权限详解" aria-label="Permalink to “edit 权限详解”">​</a></h2><p>edit 权限控制<strong>所有文件修改操作</strong>，包括：</p><ul><li><code>edit</code> 工具</li><li><code>write</code> 工具</li><li><code>patch</code> 工具</li><li><code>multiedit</code> 工具</li></ul><h3 id="常见配置-1" tabindex="-1">常见配置 <a class="header-anchor" href="#常见配置-1" aria-label="Permalink to “常见配置”">​</a></h3>',5)),t[17]||(t[17]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "edit": {
      "*": "allow",                    // 默认允许

      // 敏感文件
      "*.env": "deny",
      "*.env.*": "deny",
      "*.env.example": "allow",        // 示例文件允许
      ".env.local": "deny",

      // 系统文件
      "package-lock.json": "deny",     // 锁文件不要改
      "pnpm-lock.yaml": "deny",
      "yarn.lock": "deny",

      // 目录
      "node_modules/*": "deny",
      ".git/*": "deny",
      "dist/*": "deny"
    }
  }
}`)])],-1)),t[18]||(t[18]=n("h3",{id:"只读-agent-配置",tabindex:"-1"},[e("只读 Agent 配置 "),n("a",{class:"header-anchor",href:"#只读-agent-配置","aria-label":"Permalink to “只读 Agent 配置”"},"​")],-1)),t[19]||(t[19]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "agent": {
    "readonly-auditor": {
      "description": "只读代码审计，不修改任何文件",
      "mode": "subagent",
      "permission": {
        "edit": "deny"                 // 禁止所有编辑
      }
    }
  }
}`)])],-1)),t[20]||(t[20]=a('<hr><h2 id="task-权限-控制-subagent-调用" tabindex="-1">task 权限：控制 subagent 调用 <a class="header-anchor" href="#task-权限-控制-subagent-调用" aria-label="Permalink to “task 权限：控制 subagent 调用”">​</a></h2><p>task 权限控制 <strong>Agent 可以调用哪些 subagent</strong>。</p><h3 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to “工作原理”">​</a></h3><p>当设置 <code>task: deny</code> 时：</p><ol><li>该 subagent 从 Task tool 的描述中<strong>完全移除</strong></li><li>模型不会尝试调用它（因为看不到）</li></ol><blockquote><p>注意：用户仍可通过 <code>@agent-name</code> 手动调用任何 subagent。task 权限只影响 Agent 自动调用。</p><p>来源：<code>agents.mdx:557-565</code></p></blockquote><h3 id="配置示例" tabindex="-1">配置示例 <a class="header-anchor" href="#配置示例" aria-label="Permalink to “配置示例”">​</a></h3>',8)),t[21]||(t[21]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "agent": {
    "safe-orchestrator": {
      "description": "安全编排器，只能调用指定的 subagent",
      "mode": "primary",
      "permission": {
        "task": {
          "*": "deny",                   // 禁止所有
          "docs-writer": "allow",        // 允许文档
          "code-reviewer": "allow",      // 允许审查
          "dangerous-agent": "deny"      // 显式禁止
        }
      }
    }
  }
}`)])],-1)),t[22]||(t[22]=n("h3",{id:"通配符使用",tabindex:"-1"},[e("通配符使用 "),n("a",{class:"header-anchor",href:"#通配符使用","aria-label":"Permalink to “通配符使用”"},"​")],-1)),t[23]||(t[23]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "agent": {
    "orchestrator": {
      "permission": {
        "task": {
          "*": "deny",
          "safe-*": "allow",            // 所有 safe- 开头的允许
          "internal/*": "allow",        // 嵌套目录的允许
          "code-reviewer": "ask"        // 需要确认
        }
      }
    }
  }
}`)])],-1)),t[24]||(t[24]=a('<h3 id="tasktool-参数详解" tabindex="-1">TaskTool 参数详解 <a class="header-anchor" href="#tasktool-参数详解" aria-label="Permalink to “TaskTool 参数详解”">​</a></h3><p>Task 工具的完整参数定义如下：</p><p>| 参数 | 类型 | 必需 | 说明 | |------|------|------| | <code>description</code> | string | 是 | 任务描述（3-5 个词），用作子会话标题 | | <code>prompt</code> | string | 是 | 子代理要执行的任务提示 | | <code>subagent_type</code> | string | 是 | 要调用的子代理名称（必须是非 primary agent） | | <code>session_id</code> | string | 否 | 继续已存在的子会话 | | <code>command</code> | string | 否 | 触发此任务的命令（用于调试） |</p><h3 id="执行流程" tabindex="-1">执行流程 <a class="header-anchor" href="#执行流程" aria-label="Permalink to “执行流程”">​</a></h3><p>TaskTool 的工作流程如下：</p>',5)),t[25]||(t[25]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`主 Agent (Build)
    ↓
    1. 权限检查
       - 检查调用者是否有 task 权限
       - 过滤可访问的 subagent
       ↓
    2. 创建子会话
       - 在主会话下创建独立 session
       - 标题：描述 + (@subagent subagent)
       - 应用限制权限（todowrite/todoread/task）
       ↓
    3. 调用子代理
       - 子代理在独立 session 中执行
       - 上下文仅包含传入的 prompt
       - 监听 PartUpdated 事件获取进度
       ↓
    4. 返回结果
       - 收集所有工具调用摘要
       - 生成对话摘要
       - 返回给主 Agent`)])],-1)),t[26]||(t[26]=a('<blockquote><p><strong>关键点</strong>：子代理运行在<strong>独立的 Session</strong> 中，看不到主 Agent 的对话历史。调用时必须提供完整上下文。</p></blockquote><h3 id="子代理的默认限制" tabindex="-1">子代理的默认限制 <a class="header-anchor" href="#子代理的默认限制" aria-label="Permalink to “子代理的默认限制”">​</a></h3><p>为了防止无限递归，子代理（无论通过 task 调用还是 <code>@</code> 手动调用）受到以下<strong>硬编码限制</strong>：</p><table tabindex="0"><thead><tr><th>限制</th><th>说明</th><th>原因</th></tr></thead><tbody><tr><td><code>todowrite: deny</code></td><td>禁止写入待办列表</td><td>防止子代理干扰主 Agent 任务管理</td></tr><tr><td><code>todoread: deny</code></td><td>禁止读取待办列表</td><td>同上</td></tr><tr><td><code>task: deny</code></td><td>禁止再调用子代理</td><td>防止无限递归</td></tr></tbody></table><h3 id="实际使用示例" tabindex="-1">实际使用示例 <a class="header-anchor" href="#实际使用示例" aria-label="Permalink to “实际使用示例”">​</a></h3><h4 id="配置允许调用特定子代理" tabindex="-1">配置允许调用特定子代理 <a class="header-anchor" href="#配置允许调用特定子代理" aria-label="Permalink to “配置允许调用特定子代理”">​</a></h4>',6)),t[27]||(t[27]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "agent": {
    "orchestrator": {
      "description": "任务编排 Agent，可调用专门子代理",
      "mode": "primary",
      "permission": {
        "task": {
          "docs-writer": "allow",      // 允许文档写作
          "code-reviewer": "allow",    // 允许代码审查
          "general": "allow",           // 允许通用任务
          "*": "deny"                 // 其他禁止
        }
      }
    }
  }
}`)])],-1)),t[28]||(t[28]=n("h4",{id:"agent-内部调用-tasktool",tabindex:"-1"},[e("Agent 内部调用 TaskTool "),n("a",{class:"header-anchor",href:"#agent-内部调用-tasktool","aria-label":"Permalink to “Agent 内部调用 TaskTool”"},"​")],-1)),t[29]||(t[29]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`# 伪代码示例
主 Agent 收到：帮我写 API 文档

1. 分析任务类型 → 确定需要 docs-writer 子代理
2. 调用 TaskTool：
   - description: "编写 API 文档"
   - prompt: "为以下函数编写文档..."
   - subagent_type: "docs-writer"
3. 子代理执行 → 返回文档内容
4. 主 Agent 接收结果 → 继续对话`)])],-1)),t[30]||(t[30]=n("h4",{id:"继续子会话",tabindex:"-1"},[e("继续子会话 "),n("a",{class:"header-anchor",href:"#继续子会话","aria-label":"Permalink to “继续子会话”"},"​")],-1)),t[31]||(t[31]=n("p",null,[e("当子代理需要分步执行时，可以传递 "),n("code",null,"session_id"),e(" 继续之前的工作：")],-1)),t[32]||(t[32]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`TaskTool(
  description: "完善文档",
  prompt: "检查文档完整性并补充缺失内容",
  subagent_type: "docs-writer",
  session_id: "abc123"  // 继续之前的会话
)`)])],-1)),t[33]||(t[33]=n("blockquote",null,[n("p",null,[n("strong",null,"来源"),e("："),n("code",null,"packages/opencode/src/tool/task.ts:23-193")])],-1)),t[34]||(t[34]=n("hr",null,null,-1)),t[35]||(t[35]=n("h2",{id:"skill-权限-控制技能加载",tabindex:"-1"},[e("skill 权限：控制技能加载 "),n("a",{class:"header-anchor",href:"#skill-权限-控制技能加载","aria-label":"Permalink to “skill 权限：控制技能加载”"},"​")],-1)),t[36]||(t[36]=n("p",null,"skill 权限控制 Agent 可以加载哪些技能。",-1)),t[37]||(t[37]=n("h3",{id:"配置示例-1",tabindex:"-1"},[e("配置示例 "),n("a",{class:"header-anchor",href:"#配置示例-1","aria-label":"Permalink to “配置示例”"},"​")],-1)),t[38]||(t[38]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "agent": {
    "restricted-agent": {
      "description": "受限 Agent，只能使用指定技能",
      "mode": "subagent",
      "permission": {
        "skill": {
          "*": "deny",                   // 禁止所有技能
          "docs-writer": "allow",        // 只允许文档技能
          "translator": "allow"
        }
      }
    }
  }
}`)])],-1)),t[39]||(t[39]=n("blockquote",null,[n("p",null,[e("来源："),n("code",null,"skill.ts:15-21")])],-1)),t[40]||(t[40]=n("hr",null,null,-1)),t[41]||(t[41]=n("h2",{id:"内置安全规则",tabindex:"-1"},[e("内置安全规则 "),n("a",{class:"header-anchor",href:"#内置安全规则","aria-label":"Permalink to “内置安全规则”"},"​")],-1)),t[42]||(t[42]=n("p",null,"OpenCode 默认配置了一些安全规则：",-1)),t[43]||(t[43]=n("h3",{id:"env-文件保护",tabindex:"-1"},[e(".env 文件保护 "),n("a",{class:"header-anchor",href:"#env-文件保护","aria-label":"Permalink to “.env 文件保护”"},"​")],-1)),t[44]||(t[44]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`// 内置默认配置
{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "deny",          // .env 文件禁止读取
      "*.env.*": "deny",        // .env.xxx 也禁止
      "*.env.example": "allow"  // 示例文件允许
    }
  }
}`)])],-1)),t[45]||(t[45]=n("blockquote",null,[n("p",null,[e("来源："),n("code",null,"agent.ts:51-56")])],-1)),t[46]||(t[46]=n("h3",{id:"doom-loop-检测",tabindex:"-1"},[e("doom_loop 检测 "),n("a",{class:"header-anchor",href:"#doom-loop-检测","aria-label":"Permalink to “doom_loop 检测”"},"​")],-1)),t[47]||(t[47]=n("p",null,"当同一工具被连续调用 3 次，且输入完全相同时，触发 doom_loop 检测。",-1)),t[48]||(t[48]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "doom_loop": "ask"    // 默认值：提示用户确认
  }
}`)])],-1)),t[49]||(t[49]=n("h3",{id:"external-directory-保护",tabindex:"-1"},[e("external_directory 保护 "),n("a",{class:"header-anchor",href:"#external-directory-保护","aria-label":"Permalink to “external_directory 保护”"},"​")],-1)),t[50]||(t[50]=n("p",null,"当 Agent 尝试访问项目目录之外的路径时：",-1)),t[51]||(t[51]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "external_directory": "ask"    // 默认值：提示用户确认
  }
}`)])],-1)),t[52]||(t[52]=a('<h3 id="子代理的隐式限制" tabindex="-1">子代理的隐式限制 <a class="header-anchor" href="#子代理的隐式限制" aria-label="Permalink to “子代理的隐式限制”">​</a></h3><p>除了配置的权限外，子代理（无论 subagent 还是被调用的 all 模式）还受到以下<strong>硬编码限制</strong>：</p><ol><li><p><strong>Todo 工具禁用</strong></p><ul><li>子代理<strong>永远无法使用</strong> <code>todowrite</code> 和 <code>todoread</code>。</li><li>这是为了防止子代理干扰主 Agent 的任务列表管理。</li></ul></li><li><p><strong>主代理专属工具禁用</strong></p><ul><li>配置在 <code>primary_tools</code> 中的工具，子代理无法使用。</li></ul></li><li><p><strong>Task 嵌套限制</strong></p><ul><li>子代理默认<strong>不能</strong>再调用其他子代理（除非显式授予 <code>task</code> 权限）。</li><li>例如：<code>explore</code> 无法调用 <code>general</code>，因为它的默认权限是 <code>*: deny</code>。</li></ul><p><strong>为什么这样设计？</strong></p><ul><li><strong>防止无限递归</strong>：避免子 agent 之间形成循环调用链，导致任务永远无法结束</li><li><strong>控制复杂度</strong>：让任务执行路径更可预测、更易调试</li><li><strong>资源管控</strong>：每次调用子 agent 都会创建新 session，消耗 token 和计算资源</li><li><strong>职责分离</strong>：子 agent 应专注做一件事，编排工作交给主 agent</li></ul></li></ol><hr><h2 id="agent-级别权限覆盖" tabindex="-1">Agent 级别权限覆盖 <a class="header-anchor" href="#agent-级别权限覆盖" aria-label="Permalink to “Agent 级别权限覆盖”">​</a></h2><p>在 Agent 配置中设置的权限会<strong>覆盖</strong>全局权限。</p><h3 id="json-配置" tabindex="-1">JSON 配置 <a class="header-anchor" href="#json-配置" aria-label="Permalink to “JSON 配置”">​</a></h3>',7)),t[53]||(t[53]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow"
    }
  },
  "agent": {
    "build": {
      "permission": {
        "bash": {
          "git push": "allow"       // build agent 额外允许 push
        }
      }
    },
    "plan": {
      "permission": {
        "bash": {
          "*": "deny",              // plan agent 禁止所有命令
          "git log*": "allow"       // 除了查看日志
        }
      }
    }
  }
}`)])],-1)),t[54]||(t[54]=n("h3",{id:"markdown-配置",tabindex:"-1"},[e("Markdown 配置 "),n("a",{class:"header-anchor",href:"#markdown-配置","aria-label":"Permalink to “Markdown 配置”"},"​")],-1)),t[55]||(t[55]=n("div",{class:"language-markdown"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"markdown"),n("pre",null,[n("code",{"v-pre":""},`---
description: 只读审计 Agent
mode: subagent
permission:
  edit: deny
  bash:
    "*": deny
    "git log*": allow
    "git diff*": allow
  webfetch: deny
---

只分析代码，不做任何修改。`)])],-1)),t[56]||(t[56]=n("hr",null,null,-1)),t[57]||(t[57]=n("h2",{id:"安全最佳实践",tabindex:"-1"},[e("安全最佳实践 "),n("a",{class:"header-anchor",href:"#安全最佳实践","aria-label":"Permalink to “安全最佳实践”"},"​")],-1)),t[58]||(t[58]=n("h3",{id:"_1-最小权限原则",tabindex:"-1"},[e("1. 最小权限原则 "),n("a",{class:"header-anchor",href:"#_1-最小权限原则","aria-label":"Permalink to “1. 最小权限原则”"},"​")],-1)),t[59]||(t[59]=n("p",null,"只授予 Agent 完成任务所需的最小权限。",-1)),t[60]||(t[60]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`// ❌ 不好：过于宽松
{
  "agent": {
    "my-agent": {
      "permission": "allow"
    }
  }
}

// ✅ 好：明确列出需要的权限
{
  "agent": {
    "my-agent": {
      "permission": {
        "read": "allow",
        "edit": {
          "docs/*": "allow"
        },
        "bash": "deny"
      }
    }
  }
}`)])],-1)),t[61]||(t[61]=n("h3",{id:"_2-显式列出允许的命令",tabindex:"-1"},[e("2. 显式列出允许的命令 "),n("a",{class:"header-anchor",href:"#_2-显式列出允许的命令","aria-label":"Permalink to “2. 显式列出允许的命令”"},"​")],-1)),t[62]||(t[62]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`// ❌ 不好：允许所有，然后禁止危险的
{
  "permission": {
    "bash": {
      "*": "allow",
      "rm -rf*": "deny"
    }
  }
}

// ✅ 好：禁止所有，然后允许需要的
{
  "permission": {
    "bash": {
      "*": "deny",
      "git status": "allow",
      "npm test": "allow"
    }
  }
}`)])],-1)),t[63]||(t[63]=n("h3",{id:"_3-敏感操作设为-ask",tabindex:"-1"},[e("3. 敏感操作设为 ask "),n("a",{class:"header-anchor",href:"#_3-敏感操作设为-ask","aria-label":"Permalink to “3. 敏感操作设为 ask”"},"​")],-1)),t[64]||(t[64]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "allow",
      "git push*": "ask",        // 推送需确认
      "npm publish*": "ask",     // 发布需确认
      "docker *": "ask"          // Docker 操作需确认
    }
  }
}`)])],-1)),t[65]||(t[65]=a('<h3 id="_4-定期审查权限配置" tabindex="-1">4. 定期审查权限配置 <a class="header-anchor" href="#_4-定期审查权限配置" aria-label="Permalink to “4. 定期审查权限配置”">​</a></h3><p>检查清单：</p><ul><li>[ ] 是否有不再需要的权限？</li><li>[ ] 敏感操作是否都设为 ask？</li><li>[ ] 新增的 Agent 权限是否合理？</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>权限不生效</td><td>规则顺序错误</td><td><code>*</code> 放最前面，具体规则放后面</td></tr><tr><td>subagent 仍能被调用</td><td>用户 @ 调用不受限</td><td>task 权限只影响 Task tool</td></tr><tr><td>bash 命令匹配失败</td><td>匹配的是解析后的命令</td><td>检查实际命令格式（含参数）</td></tr><tr><td>.env 仍能读取</td><td>自定义规则覆盖了默认</td><td>记得保留 .env deny 规则</td></tr><tr><td>权限太严格</td><td>设了 <code>*: deny</code> 忘了允许必要的</td><td>逐条添加允许规则</td></tr></tbody></table><hr><h2 id="与-5-5-权限管控的关系" tabindex="-1">与 5.5 权限管控的关系 <a class="header-anchor" href="#与-5-5-权限管控的关系" aria-label="Permalink to “与 5.5 权限管控的关系”">​</a></h2><p>本章专注于 <strong>Agent 级别的权限配置</strong>。</p><p>全局权限配置和更多细节，请参考 <a href="./05-permissions.html">5.5 权限管控</a>。</p><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>权限系统架构</strong>：三种动作、配置层级、最后匹配获胜</li><li><strong>12+ 权限类型</strong>：bash、edit、task、skill 等</li><li><strong>细粒度控制</strong>：使用对象语法和通配符</li><li><strong>TaskTool 机制</strong>：子代理调用、参数定义、执行流程</li><li><strong>子代理限制</strong>：todowrite/todoread/task 禁用，防止无限递归</li><li><strong>内置安全规则</strong>：.env 保护、doom_loop、external_directory</li><li><strong>安全最佳实践</strong>：最小权限、显式允许、敏感操作 ask</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>配置好权限，还有更多高级技巧：工具接口设计、透传参数、调试方法。</p></blockquote><p><strong>下一课</strong>：<a href="./02d-agent-advanced.html">5.2d Agent 高级技巧</a></p>',18))])}const A=l(g,[["render",c]]);export{T as __pageData,A as default};
