import{_ as n,I as l,c as r,o as s,a5 as o,j as t,J as i,a as d,b4 as c}from"./chunks/framework.Dtwt352Q.js";const x=JSON.parse('{"title":"5.5 权限管控","description":"配置权限策略控制 AI 能做什么、不能做什么，确保操作安全。包括外部目录访问控制。","frontmatter":{"title":"5.5 权限管控","subtitle":"安全策略配置","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.5","duration":"15 分钟","level":"进阶","description":"配置权限策略控制 AI 能做什么、不能做什么，确保操作安全。包括外部目录访问控制。","tags":["权限","安全","external_directory"],"prerequisite":["5.1 配置全解"]},"headers":[],"relativePath":"5-advanced/05-permissions.md","filePath":"5-advanced/05-permissions.md","lastUpdated":1772014034000}'),p={name:"5-advanced/05-permissions.md"};function h(g,e,b,u,m,k){const a=l("AdInArticle");return s(),r("div",null,[e[0]||(e[0]=o("",20)),e[1]||(e[1]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "*": "ask",          // 默认所有操作需确认
    "bash": "allow",     // Bash 命令自动放行
    "edit": "deny"       // 禁止编辑文件
  }
}`)])],-1)),e[2]||(e[2]=t("p",null,"一次性设置所有权限：",-1)),e[3]||(e[3]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": "allow"  // 所有操作自动放行
}`)])],-1)),e[4]||(e[4]=t("hr",null,null,-1)),e[5]||(e[5]=t("h2",{id:"细粒度规则-对象语法",tabindex:"-1"},[d("细粒度规则（对象语法） "),t("a",{class:"header-anchor",href:"#细粒度规则-对象语法","aria-label":"Permalink to “细粒度规则（对象语法）”"},"​")],-1)),e[6]||(e[6]=t("p",null,"可以根据工具输入应用不同的操作：",-1)),e[7]||(e[7]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",                    // 默认需确认
      "git *": "allow",              // git 命令放行
      "npm *": "allow",              // npm 命令放行
      "rm *": "deny"                 // 禁止 rm 命令
    },
    "edit": {
      "*": "deny",                   // 默认禁止编辑
      "packages/web/src/content/docs/*.mdx": "allow"  // 只允许编辑文档
    }
  }
}`)])],-1)),e[8]||(e[8]=o("",7)),i(a),e[9]||(e[9]=o("",12)),e[10]||(e[10]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "deny",
      "*.env.*": "deny",
      "*.env.example": "allow"  // 示例文件允许读取
    }
  }
}`)])],-1)),e[11]||(e[11]=o("",16)),e[12]||(e[12]=t("div",{class:"language-typescript"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"typescript"),t("pre",null,[t("code",{"v-pre":""},`// 来源：opencode/packages/opencode/src/util/filesystem.ts:25-27
export function contains(parent: string, child: string) {
  return !relative(parent, child).startsWith("..")
}`)])],-1)),e[13]||(e[13]=t("p",null,[d("如果相对路径以 "),t("code",null,".."),d(" 开头，说明文件在项目目录之外。")],-1)),e[14]||(e[14]=t("h3",{id:"默认行为",tabindex:"-1"},[d("默认行为 "),t("a",{class:"header-anchor",href:"#默认行为","aria-label":"Permalink to “默认行为”"},"​")],-1)),e[15]||(e[15]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "external_directory": "ask"  // 默认值：对非 GLOB 路径每次询问用户确认
  }
}`)])],-1)),e[16]||(e[16]=t("h3",{id:"常用配置-允许访问外部文件夹",tabindex:"-1"},[d("常用配置：允许访问外部文件夹 "),t("a",{class:"header-anchor",href:"#常用配置-允许访问外部文件夹","aria-label":"Permalink to “常用配置：允许访问外部文件夹”"},"​")],-1)),e[17]||(e[17]=t("p",null,[d("如果你希望 OpenCode 访问外部文件夹时"),t("strong",null,"不需要每次授权"),d("，添加以下配置：")],-1)),e[18]||(e[18]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`// opencode.json
{
  "permission": {
    "external_directory": "allow"
  }
}`)])],-1)),e[19]||(e[19]=o("",4)),e[20]||(e[20]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "external_directory": {
      "*": "ask",                    // 默认需确认
      "/tmp/*": "allow",             // /tmp 目录允许
      "/home/user/shared/*": "allow", // 共享目录允许
      "/etc/*": "deny"               // 系统配置禁止
    }
  }
}`)])],-1)),e[21]||(e[21]=o("",3)),e[22]||(e[22]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "file-manager": {
      "description": "文件管理 Agent，可访问外部目录",
      "permission": {
        "external_directory": "allow"
      }
    },
    "safe-agent": {
      "description": "安全 Agent，禁止访问外部目录",
      "permission": {
        "external_directory": "deny"
      }
    }
  }
}`)])],-1)),e[23]||(e[23]=o("",9)),e[24]||(e[24]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow",
      "git diff": "allow",
      "git log*": "allow",
      "npm run*": "allow",
      "rm*": "deny"           // 禁止所有删除操作
    }
  }
}`)])],-1)),e[25]||(e[25]=o("",13)),e[26]||(e[26]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git status": "allow"
    }
  },
  "agent": {
    "deploy": {
      "permission": {
        "bash": {
          "*": "ask",
          "git status": "allow",
          "git push": "allow"     // 仅 deploy agent 可以 push
        }
      }
    }
  }
}`)])],-1)),e[27]||(e[27]=t("h3",{id:"markdown-agent-配置",tabindex:"-1"},[d("Markdown Agent 配置 "),t("a",{class:"header-anchor",href:"#markdown-agent-配置","aria-label":"Permalink to “Markdown Agent 配置”"},"​")],-1)),e[28]||(e[28]=t("p",null,"在 Markdown 代理中配置权限：",-1)),e[29]||(e[29]=t("div",{class:"language-markdown"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"markdown"),t("pre",null,[t("code",{"v-pre":""},`---
description: 只读代码审查
mode: subagent
permission:
  edit: deny
  bash: ask
  webfetch: deny
---

只分析代码并建议更改，不执行任何修改。`)])],-1)),e[30]||(e[30]=o("",4)),e[31]||(e[31]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`// ❌ 旧语法（已废弃，但仍向后兼容）
{
  "tools": {
    "bash": true,
    "edit": false
  }
}

// ✅ 新语法
{
  "permission": {
    "bash": "allow",
    "edit": "deny"
  }
}`)])],-1)),e[32]||(e[32]=t("blockquote",null,[t("p",null,"旧配置仍然可用，OpenCode 会自动转换为新格式。")],-1)),e[33]||(e[33]=t("hr",null,null,-1)),e[34]||(e[34]=t("h2",{id:"安全最佳实践",tabindex:"-1"},[d("安全最佳实践 "),t("a",{class:"header-anchor",href:"#安全最佳实践","aria-label":"Permalink to “安全最佳实践”"},"​")],-1)),e[35]||(e[35]=t("h3",{id:"_1-保护敏感文件",tabindex:"-1"},[d("1. 保护敏感文件 "),t("a",{class:"header-anchor",href:"#_1-保护敏感文件","aria-label":"Permalink to “1. 保护敏感文件”"},"​")],-1)),e[36]||(e[36]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow",
      "*.env": "deny",
      "*.env.*": "deny",
      "*.key": "deny",
      "*.pem": "deny",
      "credentials/*": "deny"
    }
  }
}`)])],-1)),e[37]||(e[37]=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},".env 文件保护"),t("p",null,[d("OpenCode 默认保护所有 "),t("code",null,".env"),d(" 和 "),t("code",null,".env.*"),d(" 文件，但允许直接访问 "),t("code",null,".env.example"),d("（示例文件不含敏感信息）。")])],-1)),e[38]||(e[38]=t("h3",{id:"_2-限制危险命令",tabindex:"-1"},[d("2. 限制危险命令 "),t("a",{class:"header-anchor",href:"#_2-限制危险命令","aria-label":"Permalink to “2. 限制危险命令”"},"​")],-1)),e[39]||(e[39]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm -rf *": "deny",
      "sudo *": "ask",
      "chmod *": "ask"
    }
  }
}`)])],-1)),e[40]||(e[40]=t("h3",{id:"_3-企业环境配置",tabindex:"-1"},[d("3. 企业环境配置 "),t("a",{class:"header-anchor",href:"#_3-企业环境配置","aria-label":"Permalink to “3. 企业环境配置”"},"​")],-1)),e[41]||(e[41]=t("p",null,[d("在全局配置文件 "),t("code",null,"~/.config/opencode/opencode.json"),d(" 中配置严格权限：")],-1)),e[42]||(e[42]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "external_directory": "deny",
    "bash": "ask",
    "websearch": "deny",
    "webfetch": "deny"
  }
}`)])],-1)),e[43]||(e[43]=t("h3",{id:"_4-开发环境配置",tabindex:"-1"},[d("4. 开发环境配置 "),t("a",{class:"header-anchor",href:"#_4-开发环境配置","aria-label":"Permalink to “4. 开发环境配置”"},"​")],-1)),e[44]||(e[44]=t("p",null,[d("在项目 "),t("code",null,".opencode/opencode.json"),d(" 中配置宽松权限：")],-1)),e[45]||(e[45]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "read": {
      "*": "allow"
    },
    "edit": {
      "src/*": "allow",
      "test/*": "allow",
      "*.md": "allow"
    },
    "external_directory": "allow"
  }
}`)])],-1)),e[46]||(e[46]=o("",21))])}const A=n(p,[["render",h]]);export{x as __pageData,A as default};
