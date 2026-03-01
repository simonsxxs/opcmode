import{_ as a,I as r,c as l,o as s,a5 as o,J as i,j as t,a as d,aX as c}from"./chunks/framework.Dtwt352Q.js";const y=JSON.parse('{"title":"5.1b 配置进阶","description":"掌握 OpenCode 的全部配置项，打造完全定制化的开发环境和 AI 工具。","frontmatter":{"title":"5.1b 配置进阶","subtitle":"opencode.json 完整参考","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.1b","duration":"20 分钟","level":"进阶","description":"掌握 OpenCode 的全部配置项，打造完全定制化的开发环境和 AI 工具。","tags":["配置","JSON","进阶"],"prerequisite":["5.1a 配置基础"]},"headers":[],"relativePath":"5-advanced/01b-config-advanced.md","filePath":"5-advanced/01b-config-advanced.md","lastUpdated":1772014034000}'),p={name:"5-advanced/01b-config-advanced.md"};function u(m,e,h,b,g,_){const n=r("AdInArticle");return s(),l("div",null,[e[0]||(e[0]=o("",16)),i(n),e[1]||(e[1]=t("h3",{id:"tui-配置",tabindex:"-1"},[d("TUI 配置 "),t("a",{class:"header-anchor",href:"#tui-配置","aria-label":"Permalink to “TUI 配置”"},"​")],-1)),e[2]||(e[2]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tui": {
    "scroll_speed": 3,
    "scroll_acceleration": {
      "enabled": true
    },
    "diff_style": "auto"
  }
}`)])],-1)),e[3]||(e[3]=o("",6)),e[4]||(e[4]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n",
    "session_compact": "<leader>c",
    "model_list": "<leader>m",
    "agent_list": "<leader>a",
    "session_interrupt": "escape"
  }
}`)])],-1)),e[5]||(e[5]=t("blockquote",null,[t("p",null,[d("注意：配置键是 "),t("code",null,"keybinds"),d("（"),t("strong",null,"复数"),d("！），这与 permission/agent 用单数不同。")])],-1)),e[6]||(e[6]=t("h4",{id:"leader-键",tabindex:"-1"},[d("Leader 键 "),t("a",{class:"header-anchor",href:"#leader-键","aria-label":"Permalink to “Leader 键”"},"​")],-1)),e[7]||(e[7]=t("p",null,[d("大多数快捷键使用 "),t("code",null,"leader"),d(" 键前缀，避免与终端冲突：")],-1)),e[8]||(e[8]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "ctrl+x"
  }
}`)])],-1)),e[9]||(e[9]=o("",3)),e[10]||(e[10]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "keybinds": {
    "session_compact": "none"
  }
}`)])],-1)),e[11]||(e[11]=o("",5)),e[12]||(e[12]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "server": {
    "port": 4096,
    "hostname": "0.0.0.0",
    "mdns": true,
    "mdnsDomain": "opencode.local",
    "cors": ["http://localhost:5173"]
  }
}`)])],-1)),e[13]||(e[13]=o("",5)),e[14]||(e[14]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "share": "manual"
}`)])],-1)),e[15]||(e[15]=o("",3)),e[16]||(e[16]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "compaction": {
    "auto": true,
    "prune": true,
    "reserved": 10000
  }
}`)])],-1)),e[17]||(e[17]=o("",3)),e[18]||(e[18]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "watcher": {
    "ignore": ["node_modules/**", "dist/**", ".git/**", "*.log"]
  }
}`)])],-1)),e[19]||(e[19]=t("p",null,"使用 glob 语法排除噪声目录，减少文件监视开销。",-1)),e[20]||(e[20]=t("h3",{id:"instructions-配置",tabindex:"-1"},[d("Instructions 配置 "),t("a",{class:"header-anchor",href:"#instructions-配置","aria-label":"Permalink to “Instructions 配置”"},"​")],-1)),e[21]||(e[21]=t("p",null,"指定额外的指令文件（与 AGENTS.md 合并）：",-1)),e[22]||(e[22]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "instructions": [
    "CONTRIBUTING.md",
    "docs/guidelines.md",
    ".cursor/rules/*.md",
    "packages/*/AGENTS.md"
  ]
}`)])],-1)),e[23]||(e[23]=o("",6)),e[24]||(e[24]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}",
        "baseURL": "https://custom-anthropic.example.com/v1",
        "timeout": 600000,
        "setCacheKey": true
      },
      "models": {
        "claude-sonnet-4-5": {
          "provider": {
            "api": "https://custom-api.example.com/v1"
          }
        }
      }
    }
  }
}`)])],-1)),e[25]||(e[25]=o("",5)),e[26]||(e[26]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "models": {
        "gpt-4o": {
          "provider": {
            "api": "https://api.custom-openai.com/v1"
          }
        }
      }
    }
  }
}`)])],-1)),e[27]||(e[27]=t("p",null,"适用场景：",-1)),e[28]||(e[28]=t("ul",null,[t("li",null,"使用同一 provider 的不同部署（如不同区域的 Azure OpenAI）"),t("li",null,"测试私有部署的模型"),t("li",null,"配置模型专用的代理服务器")],-1)),e[29]||(e[29]=t("h4",{id:"黑白名单",tabindex:"-1"},[d("黑白名单 "),t("a",{class:"header-anchor",href:"#黑白名单","aria-label":"Permalink to “黑白名单”"},"​")],-1)),e[30]||(e[30]=t("p",null,"控制可用模型：",-1)),e[31]||(e[31]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "whitelist": ["gpt-4o", "gpt-4o-mini"],
      "blacklist": ["gpt-3.5-turbo"]
    }
  }
}`)])],-1)),e[32]||(e[32]=o("",4)),e[33]||(e[33]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "write": false,
    "bash": false,
    "webfetch": true
  }
}`)])],-1)),e[34]||(e[34]=t("p",null,[d("默认所有工具启用。设为 "),t("code",null,"false"),d(" 禁用。")],-1)),e[35]||(e[35]=t("h4",{id:"通配符",tabindex:"-1"},[d("通配符 "),t("a",{class:"header-anchor",href:"#通配符","aria-label":"Permalink to “通配符”"},"​")],-1)),e[36]||(e[36]=t("p",null,[t("code",null,"tools"),d(" 的 key 最终会转换为 "),t("code",null,"permission"),d(" 规则，因此通配符能通过权限系统间接生效：")],-1)),e[37]||(e[37]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "tools": {
    "mymcp_*": false
  }
}`)])],-1)),e[38]||(e[38]=o("",8)),e[39]||(e[39]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "permission": {
    "edit": "ask",
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm *": "deny"
    }
  }
}`)])],-1)),e[40]||(e[40]=o("",4)),e[41]||(e[41]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "agent": {
    "code-reviewer": {
      "description": "代码审查专家",
      "mode": "subagent",
      "model": "anthropic/claude-opus-4-5-thinking",
      "prompt": "你是代码审查专家...",
      
      // 高级配置
      "temperature": 0.3,
      "top_p": 0.9,
      "steps": 50,
      "color": "#FF5733",
      "hidden": true,
      
      // 权限
      "permission": {
        "edit": "deny"
      }
    }
  }
}`)])],-1)),e[42]||(e[42]=o("",7)),e[43]||(e[43]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "command": {
    "test": {
      "template": "运行测试并显示失败结果",
      "description": "运行测试",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking"
    },
    "component": {
      "template": "创建名为 $ARGUMENTS 的 React 组件",
      "description": "创建新组件"
    }
  }
}`)])],-1)),e[44]||(e[44]=o("",5)),e[45]||(e[45]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "formatter": {
    "prettier": {
      "disabled": true
    },
    "custom-prettier": {
      "command": ["npx", "prettier", "--write", "$FILE"],
      "environment": {
        "NODE_ENV": "development"
      },
      "extensions": [".js", ".ts", ".jsx", ".tsx"]
    }
  }
}`)])],-1)),e[46]||(e[46]=t("blockquote",null,[t("p",null,[d("注意：配置键是 "),t("code",null,"formatter"),d("（单数），不是 "),t("code",null,"formatters"),d("。")])],-1)),e[47]||(e[47]=t("p",null,[d("设为 "),t("code",null,"false"),d(" 完全禁用格式化：")],-1)),e[48]||(e[48]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "formatter": false
}`)])],-1)),e[49]||(e[49]=t("p",null,[d("详细配置见 "),t("a",{href:"./18-formatters.html"},"5.18 格式化器"),d("。")],-1)),e[50]||(e[50]=t("h3",{id:"mcp-配置",tabindex:"-1"},[d("MCP 配置 "),t("a",{class:"header-anchor",href:"#mcp-配置","aria-label":"Permalink to “MCP 配置”"},"​")],-1)),e[51]||(e[51]=t("p",null,"配置 MCP 服务器：",-1)),e[52]||(e[52]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "mcp": {
    "context7": {
      "type": "local",
      "command": ["npx", "-y", "@upstash/context7-mcp"]
    },
    "sentry": {
      "type": "remote",
      "url": "https://mcp.sentry.dev/mcp",
      "headers": {
        "Authorization": "Bearer your-token"
      },
      "oauth": {
        "clientId": "xxx",
        "clientSecret": "xxx",
        "scope": "read write"
      }
    }
  }
}`)])],-1)),e[53]||(e[53]=o("",4)),e[54]||(e[54]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "plugin": ["opencode-helicone-session", "@my-org/custom-plugin"]
}`)])],-1)),e[55]||(e[55]=o("",4)),e[56]||(e[56]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "lsp": {
    "typescript": {
      "disabled": true
    },
    "custom-lsp": {
      "command": ["my-lsp-server", "--stdio"],
      "extensions": [".custom", ".myext"],
      "env": {
        "DEBUG": "true"
      },
      "initialization": {
        "settings": {}
      }
    }
  }
}`)])],-1)),e[57]||(e[57]=o("",2)),e[58]||(e[58]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "lsp": false
}`)])],-1)),e[59]||(e[59]=t("p",null,[d("详细配置见 "),t("a",{href:"./19-lsp.html"},"5.19 LSP 服务器"),d("。")],-1)),e[60]||(e[60]=t("hr",null,null,-1)),e[61]||(e[61]=t("h2",{id:"实验性功能",tabindex:"-1"},[d("实验性功能 "),t("a",{class:"header-anchor",href:"#实验性功能","aria-label":"Permalink to “实验性功能”"},"​")],-1)),e[62]||(e[62]=t("div",{class:"language-json"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"json"),t("pre",null,[t("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true,
    "openTelemetry": true,
    "continue_loop_on_deny": false
  }
}`)])],-1)),e[63]||(e[63]=o("",5)),e[64]||(e[64]=t("div",{class:"language-jsonc"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"jsonc"),t("pre",null,[t("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  
  // === 模型 ===
  "model": "anthropic/claude-opus-4-5-thinking",
  "small_model": "anthropic/claude-haiku-4-5",
  "default_agent": "build",
  
  // === Provider ===
  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "{env:ANTHROPIC_API_KEY}",
        "timeout": 600000,
        "setCacheKey": true
      }
    },
    "openai": {
      "models": {
        "gpt-4o": {
          "provider": {
            "api": "https://custom-api.example.com/v1"
          }
        }
      }
    }
  },
  "disabled_providers": ["gemini"],
  
  // === 用户 ===
  "username": "开发者",
  
  // === 界面 ===
  "theme": "catppuccin",
  "tui": {
    "scroll_speed": 3,
    "diff_style": "auto"
  },
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n"
  },
  
  // === 服务器 ===
  "server": {
    "port": 4096,
    "hostname": "localhost"
  },
  
  // === 行为 ===
  "share": "manual",
  "compaction": {
    "auto": true,
    "prune": true
  },
  "autoupdate": true,
  "watcher": {
    "ignore": ["node_modules/**", "dist/**"]
  },
  "instructions": ["CONTRIBUTING.md"],
  
  // === 权限 ===
  "permission": {
    "edit": "ask",
    "bash": {
      "*": "ask",
      "git *": "allow"
    }
  },
  
  // === Agent ===
  "agent": {
    "code-reviewer": {
      "description": "代码审查专家",
      "mode": "subagent",
      "temperature": 0.2,
      "permission": {
        "edit": "deny"
      }
    }
  },
  
  // === 命令 ===
  "command": {
    "test": {
      "template": "运行测试",
      "description": "运行测试套件"
    }
  },
  
  // === 格式化器 ===
  "formatter": {
    "prettier": {
      "disabled": false
    }
  },
  
  // === MCP ===
  "mcp": {
    "context7": {
      "type": "local",
      "command": ["npx", "-y", "@upstash/context7-mcp"]
    }
  }
}`)])],-1)),e[65]||(e[65]=o("",16))])}const P=a(p,[["render",u]]);export{y as __pageData,P as default};
