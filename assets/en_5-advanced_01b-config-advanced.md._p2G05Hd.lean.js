import{_ as a,I as i,c as r,o as s,a5 as n,J as l,j as e,a as o,aX as c}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"5.1b Advanced Configuration","description":"Master all OpenCode configuration options to build a fully customized development environment and AI tool.","frontmatter":{"title":"5.1b Advanced Configuration","subtitle":"Complete opencode.json Reference","course":"OpenCode Practical Course","stage":"Stage 5","lesson":"5.1b","duration":"20 min","level":"Advanced","description":"Master all OpenCode configuration options to build a fully customized development environment and AI tool.","tags":["Configuration","JSON","Advanced"],"prerequisite":["5.1a Configuration Basics"]},"headers":[],"relativePath":"en/5-advanced/01b-config-advanced.md","filePath":"en/5-advanced/01b-config-advanced.md","lastUpdated":1772014034000}'),u={name:"en/5-advanced/01b-config-advanced.md"};function p(m,t,h,g,f,b){const d=i("AdInArticle");return s(),r("div",null,[t[0]||(t[0]=n("",16)),l(d),t[1]||(t[1]=e("h3",{id:"tui-configuration",tabindex:"-1"},[o("TUI Configuration "),e("a",{class:"header-anchor",href:"#tui-configuration","aria-label":"Permalink to “TUI Configuration”"},"​")],-1)),t[2]||(t[2]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tui": {
    "scroll_speed": 3,
    "scroll_acceleration": {
      "enabled": true
    },
    "diff_style": "auto"
  }
}`)])],-1)),t[3]||(t[3]=n("",6)),t[4]||(t[4]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n",
    "session_compact": "<leader>c",
    "model_list": "<leader>m",
    "agent_list": "<leader>a",
    "session_interrupt": "escape"
  }
}`)])],-1)),t[5]||(t[5]=e("blockquote",null,[e("p",null,[o("Note: The config key is "),e("code",null,"keybinds"),o(" ("),e("strong",null,"plural"),o("!), unlike permission/agent which use singular.")])],-1)),t[6]||(t[6]=e("h4",{id:"leader-key",tabindex:"-1"},[o("Leader Key "),e("a",{class:"header-anchor",href:"#leader-key","aria-label":"Permalink to “Leader Key”"},"​")],-1)),t[7]||(t[7]=e("p",null,[o("Most shortcuts use a "),e("code",null,"leader"),o(" key prefix to avoid terminal conflicts:")],-1)),t[8]||(t[8]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "keybinds": {
    "leader": "ctrl+x"
  }
}`)])],-1)),t[9]||(t[9]=n("",3)),t[10]||(t[10]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "keybinds": {
    "session_compact": "none"
  }
}`)])],-1)),t[11]||(t[11]=n("",5)),t[12]||(t[12]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "server": {
    "port": 4096,
    "hostname": "0.0.0.0",
    "mdns": true,
    "mdnsDomain": "opencode.local",
    "cors": ["http://localhost:5173"]
  }
}`)])],-1)),t[13]||(t[13]=n("",5)),t[14]||(t[14]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "share": "manual"
}`)])],-1)),t[15]||(t[15]=n("",3)),t[16]||(t[16]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "compaction": {
    "auto": true,
    "prune": true,
    "reserved": 10000
  }
}`)])],-1)),t[17]||(t[17]=n("",3)),t[18]||(t[18]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "watcher": {
    "ignore": ["node_modules/**", "dist/**", ".git/**", "*.log"]
  }
}`)])],-1)),t[19]||(t[19]=e("p",null,"Use glob syntax to exclude noisy directories and reduce file watcher overhead.",-1)),t[20]||(t[20]=e("h3",{id:"instructions-configuration",tabindex:"-1"},[o("Instructions Configuration "),e("a",{class:"header-anchor",href:"#instructions-configuration","aria-label":"Permalink to “Instructions Configuration”"},"​")],-1)),t[21]||(t[21]=e("p",null,"Specify additional instruction files (merged with AGENTS.md):",-1)),t[22]||(t[22]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "instructions": [
    "CONTRIBUTING.md",
    "docs/guidelines.md",
    ".cursor/rules/*.md",
    "packages/*/AGENTS.md"
  ]
}`)])],-1)),t[23]||(t[23]=n("",6)),t[24]||(t[24]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[25]||(t[25]=n("",5)),t[26]||(t[26]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[27]||(t[27]=e("p",null,"Use cases:",-1)),t[28]||(t[28]=e("ul",null,[e("li",null,"Use different deployments of the same provider (e.g., Azure OpenAI in different regions)"),e("li",null,"Test privately deployed models"),e("li",null,"Configure model-specific proxy servers")],-1)),t[29]||(t[29]=e("h4",{id:"whitelist-blacklist",tabindex:"-1"},[o("Whitelist/Blacklist "),e("a",{class:"header-anchor",href:"#whitelist-blacklist","aria-label":"Permalink to “Whitelist/Blacklist”"},"​")],-1)),t[30]||(t[30]=e("p",null,"Control available models:",-1)),t[31]||(t[31]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "provider": {
    "openai": {
      "whitelist": ["gpt-4o", "gpt-4o-mini"],
      "blacklist": ["gpt-3.5-turbo"]
    }
  }
}`)])],-1)),t[32]||(t[32]=n("",4)),t[33]||(t[33]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "write": false,
    "bash": false,
    "webfetch": true
  }
}`)])],-1)),t[34]||(t[34]=e("p",null,[o("All tools are enabled by default. Set to "),e("code",null,"false"),o(" to disable.")],-1)),t[35]||(t[35]=e("h4",{id:"wildcards",tabindex:"-1"},[o("Wildcards "),e("a",{class:"header-anchor",href:"#wildcards","aria-label":"Permalink to “Wildcards”"},"​")],-1)),t[36]||(t[36]=e("p",null,[o("The "),e("code",null,"tools"),o(" key is ultimately converted to "),e("code",null,"permission"),o(" rules, so wildcards work indirectly through the permission system:")],-1)),t[37]||(t[37]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "tools": {
    "mymcp_*": false
  }
}`)])],-1)),t[38]||(t[38]=n("",8)),t[39]||(t[39]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "permission": {
    "edit": "ask",
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm *": "deny"
    }
  }
}`)])],-1)),t[40]||(t[40]=n("",4)),t[41]||(t[41]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "agent": {
    "code-reviewer": {
      "description": "Code review expert",
      "mode": "subagent",
      "model": "anthropic/claude-opus-4-5-thinking",
      "prompt": "You are a code review expert...",
      
      // Advanced configuration
      "temperature": 0.3,
      "top_p": 0.9,
      "steps": 50,
      "color": "#FF5733",
      "hidden": true,
      
      // Permissions
      "permission": {
        "edit": "deny"
      }
    }
  }
}`)])],-1)),t[42]||(t[42]=n("",7)),t[43]||(t[43]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "command": {
    "test": {
      "template": "Run tests and show failed results",
      "description": "Run tests",
      "agent": "build",
      "model": "anthropic/claude-opus-4-5-thinking"
    },
    "component": {
      "template": "Create a React component named $ARGUMENTS",
      "description": "Create new component"
    }
  }
}`)])],-1)),t[44]||(t[44]=n("",5)),t[45]||(t[45]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[46]||(t[46]=e("blockquote",null,[e("p",null,[o("Note: The config key is "),e("code",null,"formatter"),o(" (singular), not "),e("code",null,"formatters"),o(".")])],-1)),t[47]||(t[47]=e("p",null,[o("Set to "),e("code",null,"false"),o(" to completely disable formatting:")],-1)),t[48]||(t[48]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "formatter": false
}`)])],-1)),t[49]||(t[49]=e("p",null,[o("For detailed configuration, see "),e("a",{href:"./18-formatters.html"},"5.18 Formatters"),o(".")],-1)),t[50]||(t[50]=e("h3",{id:"mcp-configuration",tabindex:"-1"},[o("MCP Configuration "),e("a",{class:"header-anchor",href:"#mcp-configuration","aria-label":"Permalink to “MCP Configuration”"},"​")],-1)),t[51]||(t[51]=e("p",null,"Configure MCP servers:",-1)),t[52]||(t[52]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[53]||(t[53]=n("",4)),t[54]||(t[54]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "plugin": ["opencode-helicone-session", "@my-org/custom-plugin"]
}`)])],-1)),t[55]||(t[55]=n("",4)),t[56]||(t[56]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
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
}`)])],-1)),t[57]||(t[57]=n("",2)),t[58]||(t[58]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "lsp": false
}`)])],-1)),t[59]||(t[59]=e("p",null,[o("For detailed configuration, see "),e("a",{href:"./19-lsp.html"},"5.19 LSP Servers"),o(".")],-1)),t[60]||(t[60]=e("hr",null,null,-1)),t[61]||(t[61]=e("h2",{id:"experimental-features",tabindex:"-1"},[o("Experimental Features "),e("a",{class:"header-anchor",href:"#experimental-features","aria-label":"Permalink to “Experimental Features”"},"​")],-1)),t[62]||(t[62]=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "experimental": {
    "batch_tool": true,
    "openTelemetry": true,
    "continue_loop_on_deny": false
  }
}`)])],-1)),t[63]||(t[63]=n("",5)),t[64]||(t[64]=e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  
  // === Models ===
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
  
  // === User ===
  "username": "Developer",
  
  // === Interface ===
  "theme": "catppuccin",
  "tui": {
    "scroll_speed": 3,
    "diff_style": "auto"
  },
  "keybinds": {
    "leader": "ctrl+x",
    "session_new": "<leader>n"
  },
  
  // === Server ===
  "server": {
    "port": 4096,
    "hostname": "localhost"
  },
  
  // === Behavior ===
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
  
  // === Permissions ===
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
      "description": "Code review expert",
      "mode": "subagent",
      "temperature": 0.2,
      "permission": {
        "edit": "deny"
      }
    }
  },
  
  // === Commands ===
  "command": {
    "test": {
      "template": "Run tests",
      "description": "Run test suite"
    }
  },
  
  // === Formatter ===
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
}`)])],-1)),t[65]||(t[65]=n("",16))])}const v=a(u,[["render",p]]);export{C as __pageData,v as default};
