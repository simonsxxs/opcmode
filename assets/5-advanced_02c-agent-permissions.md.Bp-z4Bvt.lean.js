import{_ as l,I as d,c as s,o as r,a5 as a,j as n,J as i,a as e,a_ as p}from"./chunks/framework.Dtwt352Q.js";const T=JSON.parse('{"title":"5.2c Agent 权限与安全","description":"精确控制 Agent 可以做什么、不可以做什么，确保 AI 操作的安全性。","frontmatter":{"title":"5.2c Agent 权限与安全","subtitle":"精确控制 Agent 能做什么","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.2c","duration":"25 分钟","practice":"20 分钟","level":"进阶","description":"精确控制 Agent 可以做什么、不可以做什么，确保 AI 操作的安全性。","tags":["Agent","权限","安全","TaskTool"],"prerequisite":["5.2a Agent 快速入门"]},"headers":[],"relativePath":"5-advanced/02c-agent-permissions.md","filePath":"5-advanced/02c-agent-permissions.md","lastUpdated":1772014034000}'),g={name:"5-advanced/02c-agent-permissions.md"};function c(b,t,h,u,k,m){const o=d("AdInArticle");return r(),s("div",null,[t[0]||(t[0]=a("",13)),t[1]||(t[1]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`默认权限（源码定义）
    ↓ 覆盖
全局配置 permission
    ↓ 覆盖
Agent 级别 permission`)])],-1)),t[2]||(t[2]=a("",4)),t[3]||(t[3]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",           // 规则 1：所有命令需确认
      "git *": "allow",     // 规则 2：git 命令允许
      "git push*": "deny"   // 规则 3：git push 禁止
    }
  }
}`)])],-1)),t[4]||(t[4]=a("",10)),t[5]||(t[5]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
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
}`)])],-1)),t[10]||(t[10]=a("",4)),i(o),t[11]||(t[11]=n("p",null,[e("bash 权限匹配的是"),n("strong",null,"解析后的命令字符串"),e("。")],-1)),t[12]||(t[12]=n("h3",{id:"常见配置",tabindex:"-1"},[e("常见配置 "),n("a",{class:"header-anchor",href:"#常见配置","aria-label":"Permalink to “常见配置”"},"​")],-1)),t[13]||(t[13]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
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
}`)])],-1)),t[16]||(t[16]=a("",5)),t[17]||(t[17]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
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
}`)])],-1)),t[20]||(t[20]=a("",8)),t[21]||(t[21]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
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
}`)])],-1)),t[24]||(t[24]=a("",5)),t[25]||(t[25]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`主 Agent (Build)
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
       - 返回给主 Agent`)])],-1)),t[26]||(t[26]=a("",6)),t[27]||(t[27]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
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
}`)])],-1)),t[52]||(t[52]=a("",7)),t[53]||(t[53]=n("div",{class:"language-jsonc"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"jsonc"),n("pre",null,[n("code",{"v-pre":""},`{
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
}`)])],-1)),t[65]||(t[65]=a("",18))])}const A=l(g,[["render",c]]);export{T as __pageData,A as default};
