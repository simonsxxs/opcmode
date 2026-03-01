import{_ as t,c as d,o as l,a5 as n,j as e,a,bv as c}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"CLI 自动化：让 OpenCode 跑在脚本里 | OpenCode 教程","description":"学习用命令行自动化 OpenCode，包括非交互模式、远程服务器、CI/CD 集成，让你的工作流全自动运转。","frontmatter":{"title":"CLI 自动化：让 OpenCode 跑在脚本里 | OpenCode 教程","subtitle":"CLI 自动化","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.24","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"学习用命令行自动化 OpenCode，包括非交互模式、远程服务器、CI/CD 集成，让你的工作流全自动运转。","tags":["CLI","自动化","CI/CD","远程访问"],"prerequisite":["5.1a 配置基础","2.2 管理对话"]},"headers":[],"relativePath":"5-advanced/24-cli-automation.md","filePath":"5-advanced/24-cli-automation.md","lastUpdated":1772014034000}'),s={name:"5-advanced/24-cli-automation.md"};function r(i,o,p,h,b,u){return l(),d("div",null,[...o[0]||(o[0]=[n("",19),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────────┐
│                        OpenCode 使用方式                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   ┌─────────────────┐              ┌─────────────────┐                  │
│   │   交互模式 TUI   │              │  非交互模式 CLI  │                  │
│   │                 │              │                 │                  │
│   │  opencode       │              │  opencode run   │                  │
│   │                 │              │                 │                  │
│   │  • 适合日常开发  │              │  • 适合脚本     │                  │
│   │  • 实时对话     │              │  • 适合 CI/CD   │                  │
│   │  • 人工决策     │              │  • 自动化流程   │                  │
│   └─────────────────┘              └─────────────────┘                  │
│                                                                          │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │                      服务器模式                                   │   │
│   │                                                                   │   │
│   │  opencode serve    →  启动无头服务器（只有 API）                   │   │
│   │  opencode web      →  启动 Web 界面服务器                         │   │
│   │  opencode attach   →  连接远程服务器                              │   │
│   │                                                                   │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘`)])],-1),n("",6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 最简单的用法
opencode run "列出这个项目里所有的 TypeScript 文件"

# 你会看到：
# > opencode · anthropic/claude-sonnet-4-5
# 
# ✱ Glob "**/*.ts" in . · 12 matches
# 
# 这个项目中有 12 个 TypeScript 文件：
# - src/index.ts
# - src/utils.ts
# ...`)])],-1),n("",4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
# code-review.sh - 自动审查当前分支的变更

# 获取变更的文件列表
CHANGED_FILES=$(git diff --name-only main)

# 如果没有变更，退出
if [ -z "$CHANGED_FILES" ]; then
  echo "没有发现变更"
  exit 0
fi

# 对每个文件进行审查
for file in $CHANGED_FILES; do
  echo "审查: $file"
  opencode run -f "$file" "请审查这个文件的代码质量，重点关注：1) 潜在 Bug 2) 性能问题 3) 代码风格"
done`)])],-1),e("h4",{id:"示例-2-从-stdin-读取",tabindex:"-1"},[a("示例 2：从 stdin 读取 "),e("a",{class:"header-anchor",href:"#示例-2-从-stdin-读取","aria-label":"Permalink to “示例 2：从 stdin 读取”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 管道输入
cat error.log | opencode run "分析这个错误日志，找出根本原因"

# 结合 git diff
git diff main | opencode run "检查这些变更是否有问题"`)])],-1),e("h4",{id:"示例-3-json-格式输出-适合脚本解析",tabindex:"-1"},[a("示例 3：JSON 格式输出（适合脚本解析） "),e("a",{class:"header-anchor",href:"#示例-3-json-格式输出-适合脚本解析","aria-label":"Permalink to “示例 3：JSON 格式输出（适合脚本解析）”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 获取 JSON 格式的输出
opencode run --format json "列出所有 TODO 注释" > todos.json

# JSON 输出格式示例：
# {"type":"text","timestamp":1705316400000,"sessionID":"xxx","part":{"text":"找到 5 个 TODO..."}}`)])],-1),n("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 启动无头服务器（只有 API，没有界面）
opencode serve

# 你会看到：
# Warning: OPENCODE_SERVER_PASSWORD is not set; server is unsecured.
# opencode server listening on http://localhost:4096`)])],-1),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"⚠️ 安全警告"),e("p",null,[a("默认情况下，"),e("code",null,"opencode serve"),a(),e("strong",null,"没有认证保护"),a("。")]),e("p",null,[a("但默认只监听 "),e("code",null,"127.0.0.1"),a("（localhost），外部网络无法直接访问。只有当你：")]),e("ul",null,[e("li",null,[a("使用 "),e("code",null,"--hostname 0.0.0.0"),a(" 开放所有网络接口")]),e("li",null,"服务器有公网 IP 且防火墙开放端口")]),e("p",null,"...才会面临安全风险。"),e("p",null,[e("strong",null,"开放外网访问时必须设置密码"),a("：")]),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 设置服务器密码
export OPENCODE_SERVER_PASSWORD=your-secure-password

# 然后启动
opencode serve
# 现在访问需要认证了`)])])],-1),e("h4",{id:"opencode-web-web-界面模式",tabindex:"-1"},[a("opencode web（Web 界面模式） "),e("a",{class:"header-anchor",href:"#opencode-web-web-界面模式","aria-label":"Permalink to “opencode web（Web 界面模式）”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 启动带 Web 界面的服务器
opencode web

# 你会看到：
# Warning: OPENCODE_SERVER_PASSWORD is not set; server is unsecured.
# 
#   Local access:      http://localhost:4096
#   Network access:    http://192.168.1.100:4096`)])],-1),n("",2),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 监听所有网络接口（允许局域网访问）
opencode serve --hostname 0.0.0.0

# 指定端口
opencode serve --port 8080

# 启用 mDNS 发现（局域网内可通过 opencode.local 访问）
opencode serve --hostname 0.0.0.0 --mdns`)])],-1),n("",3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 设置密码和用户名
export OPENCODE_SERVER_USERNAME=admin
export OPENCODE_SERVER_PASSWORD=MySecurePassword123!

opencode serve --hostname 0.0.0.0`)])],-1),e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"💡 为什么只能用环境变量？"),e("p",null,[a("密码相关的配置"),e("strong",null,[a("不支持放在 "),e("code",null,"opencode.json"),a(" 配置文件中")]),a("，只能通过环境变量设置。")]),e("p",null,"这是出于安全考虑——避免密码被意外提交到 Git 仓库。"),e("p",null,[a("全局配置文件 "),e("code",null,"~/.config/opencode/opencode.json"),a(" 只支持以下服务器选项：")]),e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",null,[e("code",{"v-pre":""},`{
  "server": {
    "port": 4096,
    "hostname": "0.0.0.0",
    "mdns": true,
    "mdnsDomain": "opencode.local",
    "cors": ["http://example.com"]
  }
}`)])])],-1),e("h3",{id:"_2-4-连接远程服务器",tabindex:"-1"},[a("2.4 连接远程服务器 "),e("a",{class:"header-anchor",href:"#_2-4-连接远程服务器","aria-label":"Permalink to “2.4 连接远程服务器”"},"​")],-1),e("h4",{id:"用-attach-连接",tabindex:"-1"},[a("用 attach 连接 "),e("a",{class:"header-anchor",href:"#用-attach-连接","aria-label":"Permalink to “用 attach 连接”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 在本地连接远程服务器
opencode attach http://192.168.1.100:4096

# 指定工作目录
opencode attach http://192.168.1.100:4096 --dir /projects/myapp`)])],-1),e("h4",{id:"用-run-连接",tabindex:"-1"},[a("用 run 连接 "),e("a",{class:"header-anchor",href:"#用-run-连接","aria-label":"Permalink to “用 run 连接”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 先在服务器上启动
opencode serve --hostname 0.0.0.0

# 在另一台机器上连接并执行
opencode run --attach http://192.168.1.100:4096 "分析这个项目的架构"`)])],-1),e("hr",null,null,-1),e("h2",{id:"第三部分-ci-cd-集成",tabindex:"-1"},[a("第三部分：CI/CD 集成 "),e("a",{class:"header-anchor",href:"#第三部分-ci-cd-集成","aria-label":"Permalink to “第三部分：CI/CD 集成”"},"​")],-1),e("h3",{id:"_3-1-github-actions-示例",tabindex:"-1"},[a("3.1 GitHub Actions 示例 "),e("a",{class:"header-anchor",href:"#_3-1-github-actions-示例","aria-label":"Permalink to “3.1 GitHub Actions 示例”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`# .github/workflows/ai-review.yml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup OpenCode
        run: |
          curl -fsSL https://raw.githubusercontent.com/anomalyco/opencode/main/install | bash
          echo "$HOME/.opencode/bin" >> $GITHUB_PATH
      
      - name: AI Review
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          # 获取变更的文件
          FILES=$(git diff --name-only origin/main...HEAD | head -10)
          
          for file in $FILES; do
            echo "审查: $file"
            opencode run -f "$file" --title "AI Review: $file" \\
              "作为代码审查员，审查这个文件的变更。关注：
              1. 潜在的 Bug 或安全问题
              2. 代码可读性和维护性
              3. 是否符合最佳实践
              
              输出格式：
              - 🟢 通过
              - 🟡 建议改进
              - 🔴 必须修复"
          done`)])],-1),e("h3",{id:"_3-2-gitlab-ci-示例",tabindex:"-1"},[a("3.2 GitLab CI 示例 "),e("a",{class:"header-anchor",href:"#_3-2-gitlab-ci-示例","aria-label":"Permalink to “3.2 GitLab CI 示例”"},"​")],-1),e("div",{class:"language-yaml"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"yaml"),e("pre",null,[e("code",{"v-pre":""},`# .gitlab-ci.yml
ai-review:
  stage: test
  image: node:20
  script:
    - curl -fsSL https://raw.githubusercontent.com/anomalyco/opencode/main/install | bash
    - export PATH="$HOME/.opencode/bin:$PATH"
    - |
      git diff --name-only origin/main...$CI_COMMIT_SHA | while read file; do
        opencode run -f "$file" "审查代码：$file"
      done
  only:
    - merge_requests`)])],-1),e("h3",{id:"_3-3-自动化脚本模板",tabindex:"-1"},[a("3.3 自动化脚本模板 "),e("a",{class:"header-anchor",href:"#_3-3-自动化脚本模板","aria-label":"Permalink to “3.3 自动化脚本模板”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
# auto-fix.sh - 自动修复代码风格问题

set -e

# 检查是否有未提交的变更
if ! git diff --quiet; then
  echo "错误：有未提交的变更，请先提交或暂存"
  exit 1
fi

# 获取所有需要检查的文件
FILES=$(find src -name "*.ts" -o -name "*.tsx")

for file in $FILES; do
  echo "处理: $file"
  
  opencode run -f "$file" \\
    "请修复这个文件的代码风格问题，但不要改变功能逻辑。重点关注：
    1. 变量命名规范
    2. 代码缩进和格式
    3. 移除未使用的导入
    4. 添加必要的注释"
done

echo "所有文件处理完成"`)])],-1),n("",5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 拉取 PR 并启动 OpenCode
opencode pr 123

# 你会看到：
# Fetching and checking out PR #123...
# Successfully checked out PR #123 as branch 'pr/123'
# 
# Starting opencode...`)])],-1),n("",3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 确保已安装 gh CLI
gh --version

# 确保已认证
gh auth status`)])],-1),e("details",{class:"details custom-block"},[e("summary",null,"如何安装 gh CLI"),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# macOS
brew install gh

# Ubuntu/Debian
sudo apt install gh

# Windows
winget install GitHub.cli`)])])],-1),e("hr",null,null,-1),e("h2",{id:"第五部分-会话管理-cli",tabindex:"-1"},[a("第五部分：会话管理 CLI "),e("a",{class:"header-anchor",href:"#第五部分-会话管理-cli","aria-label":"Permalink to “第五部分：会话管理 CLI”"},"​")],-1),e("h3",{id:"_5-1-列出会话",tabindex:"-1"},[a("5.1 列出会话 "),e("a",{class:"header-anchor",href:"#_5-1-列出会话","aria-label":"Permalink to “5.1 列出会话”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 列出所有会话
opencode session list

# 你会看到：
# Session ID              Title                      Updated
# ─────────────────────────────────────────────────────────────
# session_abc123          Fix login bug              Today 14:30
# session_def456          Add user profile           Yesterday

# 限制数量
opencode session list -n 10

# JSON 格式（适合脚本）
opencode session list --format json`)])],-1),e("h3",{id:"_5-2-导出会话",tabindex:"-1"},[a("5.2 导出会话 "),e("a",{class:"header-anchor",href:"#_5-2-导出会话","aria-label":"Permalink to “5.2 导出会话”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 导出指定会话
opencode export session_abc123 > backup.json

# 不指定 ID 会交互式选择
opencode export > backup.json`)])],-1),e("h3",{id:"_5-3-导入会话",tabindex:"-1"},[a("5.3 导入会话 "),e("a",{class:"header-anchor",href:"#_5-3-导入会话","aria-label":"Permalink to “5.3 导入会话”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 从文件导入
opencode import backup.json

# 从分享链接导入
opencode import https://opncd.ai/share/abc123`)])],-1),e("hr",null,null,-1),e("h2",{id:"第六部分-其他实用命令",tabindex:"-1"},[a("第六部分：其他实用命令 "),e("a",{class:"header-anchor",href:"#第六部分-其他实用命令","aria-label":"Permalink to “第六部分：其他实用命令”"},"​")],-1),e("h3",{id:"_6-1-opencode-models",tabindex:"-1"},[a("6.1 opencode models "),e("a",{class:"header-anchor",href:"#_6-1-opencode-models","aria-label":"Permalink to “6.1 opencode models”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 列出所有可用模型
opencode models

# 列出特定提供商的模型
opencode models anthropic

# 显示详细信息（包括价格）
opencode models --verbose

# 刷新模型缓存
opencode models --refresh`)])],-1),e("h3",{id:"_6-2-opencode-stats",tabindex:"-1"},[a("6.2 opencode stats "),e("a",{class:"header-anchor",href:"#_6-2-opencode-stats","aria-label":"Permalink to “6.2 opencode stats”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 查看使用统计
opencode stats

# 查看最近 7 天
opencode stats --days 7

# 查看模型使用明细
opencode stats --models

# 只看当前项目
opencode stats --project ""`)])],-1),e("h3",{id:"_6-3-opencode-upgrade-uninstall",tabindex:"-1"},[a("6.3 opencode upgrade / uninstall "),e("a",{class:"header-anchor",href:"#_6-3-opencode-upgrade-uninstall","aria-label":"Permalink to “6.3 opencode upgrade / uninstall”"},"​")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 升级到最新版本
opencode upgrade

# 升级到指定版本
opencode upgrade 0.1.50

# 使用指定方式安装
opencode upgrade --method npm

# 卸载（保留配置）
opencode uninstall --keep-config

# 预览将删除的内容
opencode uninstall --dry-run`)])],-1),n("",16)])])}const m=t(s,[["render",r]]);export{g as __pageData,m as default};
