import{_ as t,c as d,o as l,a5 as n,j as e,a,bv as c}from"./chunks/framework.Dtwt352Q.js";const g=JSON.parse('{"title":"CLI 自动化：让 OpenCode 跑在脚本里 | OpenCode 教程","description":"学习用命令行自动化 OpenCode，包括非交互模式、远程服务器、CI/CD 集成，让你的工作流全自动运转。","frontmatter":{"title":"CLI 自动化：让 OpenCode 跑在脚本里 | OpenCode 教程","subtitle":"CLI 自动化","course":"OpenCode 中文实战课","stage":"第五阶段","lesson":"5.24","duration":"25 分钟","practice":"30 分钟","level":"进阶","description":"学习用命令行自动化 OpenCode，包括非交互模式、远程服务器、CI/CD 集成，让你的工作流全自动运转。","tags":["CLI","自动化","CI/CD","远程访问"],"prerequisite":["5.1a 配置基础","2.2 管理对话"]},"headers":[],"relativePath":"5-advanced/24-cli-automation.md","filePath":"5-advanced/24-cli-automation.md","lastUpdated":1772014034000}'),s={name:"5-advanced/24-cli-automation.md"};function r(i,o,p,h,b,u){return l(),d("div",null,[...o[0]||(o[0]=[n('<h1 id="cli-自动化-让-opencode-跑在脚本里" tabindex="-1">CLI 自动化：让 OpenCode 跑在脚本里 <a class="header-anchor" href="#cli-自动化-让-opencode-跑在脚本里" aria-label="Permalink to “CLI 自动化：让 OpenCode 跑在脚本里”">​</a></h1><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+c+'" alt="CLI 自动化学霸笔记" data-zoom-src="/images/5-advanced/24-cli-automation-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>在脚本里调用 OpenCode，无需人工干预</li><li>启动远程服务器，让团队成员共享同一个 AI 会话</li><li>把 OpenCode 嵌入 CI/CD 流水线，自动审查代码</li><li>一键拉取 PR 并启动对应的 OpenCode 会话</li></ul><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>每次都要打开 TUI 手动输入命令，重复劳动太多</li><li>想在服务器上跑 OpenCode，但没有图形界面</li><li>CI/CD 里想自动让 AI 检查代码，不知道怎么集成</li><li>团队协作时，想让大家连到同一个 OpenCode 实例</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li><strong>脚本自动化</strong>：批量处理多个项目、定时任务</li><li><strong>CI/CD 集成</strong>：代码审查、自动修复、生成文档</li><li><strong>远程开发</strong>：在服务器上运行，本地终端连接</li><li><strong>团队协作</strong>：共享 OpenCode 实例，协同编辑</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><ul><li>[ ] 完成了 <a href="./01a-config-basics.html">5.1a 配置基础</a></li><li>[ ] 能在终端里运行 <code>opencode</code> 启动 TUI</li><li>[ ] 了解基本的 Shell 命令（<code>cd</code>、<code>echo</code>、管道）</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><p>OpenCode 提供了两套使用方式：</p>',19),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`┌─────────────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────────────┘`)])],-1),n('<p><strong>关键区别</strong>：</p><table tabindex="0"><thead><tr><th>模式</th><th>命令</th><th>特点</th></tr></thead><tbody><tr><td>TUI</td><td><code>opencode</code></td><td>交互式，适合人工操作</td></tr><tr><td>Run</td><td><code>opencode run</code></td><td>非交互式，执行完退出</td></tr><tr><td>Serve</td><td><code>opencode serve</code></td><td>无头服务器，只暴露 API</td></tr><tr><td>Web</td><td><code>opencode web</code></td><td>带 Web 界面的服务器</td></tr></tbody></table><hr><h2 id="第一部分-非交互模式-opencode-run" tabindex="-1">第一部分：非交互模式 opencode run <a class="header-anchor" href="#第一部分-非交互模式-opencode-run" aria-label="Permalink to “第一部分：非交互模式 opencode run”">​</a></h2><h3 id="_1-1-基本用法" tabindex="-1">1.1 基本用法 <a class="header-anchor" href="#_1-1-基本用法" aria-label="Permalink to “1.1 基本用法”">​</a></h3><p><code>opencode run</code> 是最常用的 CLI 命令，它会执行完任务后自动退出。</p>',6),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 最简单的用法
opencode run "列出这个项目里所有的 TypeScript 文件"

# 你会看到：
# > opencode · anthropic/claude-sonnet-4-5
# 
# ✱ Glob "**/*.ts" in . · 12 matches
# 
# 这个项目中有 12 个 TypeScript 文件：
# - src/index.ts
# - src/utils.ts
# ...`)])],-1),n('<h3 id="_1-2-常用选项" tabindex="-1">1.2 常用选项 <a class="header-anchor" href="#_1-2-常用选项" aria-label="Permalink to “1.2 常用选项”">​</a></h3><table tabindex="0"><thead><tr><th>选项</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>-m, --model</code></td><td>指定模型</td><td><code>-m anthropic/claude-opus-4-5</code></td></tr><tr><td><code>--agent</code></td><td>指定 Agent</td><td><code>--agent code-reviewer</code></td></tr><tr><td><code>-f, --file</code></td><td>附加文件</td><td><code>-f src/main.ts -f package.json</code></td></tr><tr><td><code>-c, --continue</code></td><td>继续上次会话</td><td><code>-c</code></td></tr><tr><td><code>-s, --session</code></td><td>指定会话 ID</td><td><code>-s session_abc123</code></td></tr><tr><td><code>--format json</code></td><td>JSON 格式输出</td><td><code>--format json</code></td></tr><tr><td><code>--share</code></td><td>自动分享会话</td><td><code>--share</code></td></tr><tr><td><code>--title</code></td><td>设置会话标题</td><td><code>--title &quot;修复登录 Bug&quot;</code></td></tr></tbody></table><h3 id="_1-3-实战示例" tabindex="-1">1.3 实战示例 <a class="header-anchor" href="#_1-3-实战示例" aria-label="Permalink to “1.3 实战示例”">​</a></h3><h4 id="示例-1-代码审查脚本" tabindex="-1">示例 1：代码审查脚本 <a class="header-anchor" href="#示例-1-代码审查脚本" aria-label="Permalink to “示例 1：代码审查脚本”">​</a></h4>',4),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`#!/bin/bash
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
# {"type":"text","timestamp":1705316400000,"sessionID":"xxx","part":{"text":"找到 5 个 TODO..."}}`)])],-1),n('<hr><h2 id="第二部分-服务器模式" tabindex="-1">第二部分：服务器模式 <a class="header-anchor" href="#第二部分-服务器模式" aria-label="Permalink to “第二部分：服务器模式”">​</a></h2><h3 id="_2-1-启动远程服务器" tabindex="-1">2.1 启动远程服务器 <a class="header-anchor" href="#_2-1-启动远程服务器" aria-label="Permalink to “2.1 启动远程服务器”">​</a></h3><div class="info custom-block"><p class="custom-block-title">🤔 什么时候需要远程服务器？</p><ul><li><strong>共享会话</strong>：团队成员连接同一个 OpenCode 实例</li><li><strong>服务器开发</strong>：在远程服务器上运行，本地终端连接</li><li><strong>避免冷启动</strong>：保持 MCP 服务器常驻，<code>opencode run --attach</code> 直接连入</li></ul></div><h4 id="opencode-serve-无头模式" tabindex="-1">opencode serve（无头模式） <a class="header-anchor" href="#opencode-serve-无头模式" aria-label="Permalink to “opencode serve（无头模式）”">​</a></h4>',5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 启动无头服务器（只有 API，没有界面）
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
#   Network access:    http://192.168.1.100:4096`)])],-1),n('<h3 id="_2-2-服务器选项" tabindex="-1">2.2 服务器选项 <a class="header-anchor" href="#_2-2-服务器选项" aria-label="Permalink to “2.2 服务器选项”">​</a></h3><table tabindex="0"><thead><tr><th>选项</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--port</code></td><td>监听端口</td><td>自动（优先 4096）</td></tr><tr><td><code>--hostname</code></td><td>监听地址</td><td>127.0.0.1</td></tr><tr><td><code>--mdns</code></td><td>启用 mDNS 服务发现</td><td>false</td></tr><tr><td><code>--mdns-domain</code></td><td>mDNS 域名</td><td>opencode.local</td></tr><tr><td><code>--cors</code></td><td>CORS 白名单域名</td><td>-</td></tr></tbody></table>',2),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 监听所有网络接口（允许局域网访问）
opencode serve --hostname 0.0.0.0

# 指定端口
opencode serve --port 8080

# 启用 mDNS 发现（局域网内可通过 opencode.local 访问）
opencode serve --hostname 0.0.0.0 --mdns`)])],-1),n('<h3 id="_2-3-安全配置" tabindex="-1">2.3 安全配置 <a class="header-anchor" href="#_2-3-安全配置" aria-label="Permalink to “2.3 安全配置”">​</a></h3><p><strong>环境变量</strong>：</p><table tabindex="0"><thead><tr><th>变量</th><th>说明</th></tr></thead><tbody><tr><td><code>OPENCODE_SERVER_PASSWORD</code></td><td>服务器密码</td></tr><tr><td><code>OPENCODE_SERVER_USERNAME</code></td><td>用户名（默认 opencode）</td></tr></tbody></table>',3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 设置密码和用户名
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

echo "所有文件处理完成"`)])],-1),n('<hr><h2 id="第四部分-opencode-pr-命令" tabindex="-1">第四部分：opencode pr 命令 <a class="header-anchor" href="#第四部分-opencode-pr-命令" aria-label="Permalink to “第四部分：opencode pr 命令”">​</a></h2><h3 id="_4-1-功能介绍" tabindex="-1">4.1 功能介绍 <a class="header-anchor" href="#_4-1-功能介绍" aria-label="Permalink to “4.1 功能介绍”">​</a></h3><p><code>opencode pr</code> 是一个专门处理 GitHub PR 的命令，它会：</p><ol><li>拉取指定的 PR 到本地</li><li>自动创建分支 <code>pr/&lt;PR号&gt;</code></li><li>如果 PR 描述里有 OpenCode 会话链接，自动导入</li></ol>',5),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 拉取 PR 并启动 OpenCode
opencode pr 123

# 你会看到：
# Fetching and checking out PR #123...
# Successfully checked out PR #123 as branch 'pr/123'
# 
# Starting opencode...`)])],-1),n('<h3 id="_4-2-使用场景" tabindex="-1">4.2 使用场景 <a class="header-anchor" href="#_4-2-使用场景" aria-label="Permalink to “4.2 使用场景”">​</a></h3><table tabindex="0"><thead><tr><th>场景</th><th>说明</th></tr></thead><tbody><tr><td>审查别人的 PR</td><td>一键拉取，直接在 OpenCode 里审查</td></tr><tr><td>继续之前的会话</td><td>PR 作者分享了会话链接，你可以恢复上下文</td></tr><tr><td>处理 Fork PR</td><td>自动添加 Fork 远程仓库，正确设置上游</td></tr></tbody></table><h3 id="_4-3-前置条件" tabindex="-1">4.3 前置条件 <a class="header-anchor" href="#_4-3-前置条件" aria-label="Permalink to “4.3 前置条件”">​</a></h3>',3),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 确保已安装 gh CLI
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
opencode uninstall --dry-run`)])],-1),n('<hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><ul><li>[ ] 能用 <code>opencode run</code> 执行一次性任务</li><li>[ ] 能用 <code>opencode serve</code> 启动远程服务器并设置密码</li><li>[ ] 能用 <code>opencode attach</code> 连接远程服务器</li><li>[ ] 能用 <code>opencode pr</code> 拉取并处理 GitHub PR</li><li>[ ] 能用 <code>opencode session list</code> 查看会话历史</li><li>[ ] 能用 <code>opencode export/import</code> 备份恢复会话</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td><code>opencode serve</code> 报错 &quot;address already in use&quot;</td><td>端口被占用</td><td>换个端口：<code>--port 8080</code></td></tr><tr><td>远程连接被拒绝</td><td>防火墙或 hostname 设置</td><td>确认 <code>--hostname 0.0.0.0</code>，检查防火墙</td></tr><tr><td><code>opencode pr</code> 报错 &quot;gh CLI not found&quot;</td><td>未安装 GitHub CLI</td><td>先安装 gh 并认证</td></tr><tr><td><code>opencode run</code> 一直等待</td><td>AI 在执行长时间任务</td><td>脚本里加超时：<code>timeout 60 opencode run ...</code></td></tr><tr><td>JSON 输出解析失败</td><td>输出包含多行 JSON</td><td>按换行分割，每行是一个 JSON 对象</td></tr><tr><td>服务器无认证警告</td><td>没有设置密码</td><td><code>export OPENCODE_SERVER_PASSWORD=xxx</code></td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li><strong>非交互模式</strong>：用 <code>opencode run</code> 在脚本里调用 OpenCode</li><li><strong>服务器模式</strong>：用 <code>opencode serve/web</code> 启动远程服务</li><li><strong>安全配置</strong>：设置 <code>OPENCODE_SERVER_PASSWORD</code> 保护服务器</li><li><strong>CI/CD 集成</strong>：把 OpenCode 嵌入自动化流程</li><li><strong>PR 处理</strong>：用 <code>opencode pr</code> 一键拉取并处理 PR</li><li><strong>会话管理</strong>：用 CLI 命令列出、导出、导入会话</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>本课是进阶手册的最后一课。接下来你可以：</p><ul><li>回顾 <a href="/appendix/">速查手册</a> 中的 CLI 命令参考</li><li>尝试 <a href="/4-scenarios/">场景实战</a> 中的 CI/CD 集成案例</li><li>深入学习 <a href="/5-advanced/10a-sdk-basics.html">SDK 开发</a> 编写自己的集成工具</li></ul></blockquote><hr><h2 id="附录-源码参考" tabindex="-1">附录：源码参考 <a class="header-anchor" href="#附录-源码参考" aria-label="Permalink to “附录：源码参考”">​</a></h2><details><summary><strong>点击展开查看源码位置</strong></summary><blockquote><p>更新时间：2026-02-14</p></blockquote><table tabindex="0"><thead><tr><th>功能</th><th>文件路径</th><th>行号</th></tr></thead><tbody><tr><td><code>opencode run</code> 命令实现</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/run.ts#L215-L614" target="_blank" rel="noreferrer"><code>src/cli/cmd/run.ts</code></a></td><td>215-614</td></tr><tr><td><code>opencode serve</code> 命令实现</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/serve.ts#L6-L20" target="_blank" rel="noreferrer"><code>src/cli/cmd/serve.ts</code></a></td><td>6-20</td></tr><tr><td><code>opencode web</code> 命令实现</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/web.ts" target="_blank" rel="noreferrer"><code>src/cli/cmd/web.ts</code></a></td><td>全文件</td></tr><tr><td><code>opencode pr</code> 命令实现</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/cli/cmd/pr.ts#L6-L112" target="_blank" rel="noreferrer"><code>src/cli/cmd/pr.ts</code></a></td><td>6-112</td></tr><tr><td>服务器安全检查</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/flag/flag.ts#L31-L32" target="_blank" rel="noreferrer"><code>src/flag/flag.ts</code></a></td><td>31-32</td></tr><tr><td>服务器认证逻辑</td><td><a href="https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/server/server.ts#L84-L87" target="_blank" rel="noreferrer"><code>src/server/server.ts</code></a></td><td>84-87</td></tr></tbody></table><p><strong>关键环境变量</strong>：</p><ul><li><code>OPENCODE_SERVER_PASSWORD</code>：服务器密码</li><li><code>OPENCODE_SERVER_USERNAME</code>：服务器用户名（默认 opencode）</li></ul></details>',16)])])}const m=t(s,[["render",r]]);export{g as __pageData,m as default};
