import{_ as o,c as i,o as s,a5 as l,j as t,a as e,az as n}from"./chunks/framework.Dtwt352Q.js";const m=JSON.parse('{"title":"Git 入门：第一次提交并同步到 GitHub","description":"学会 Git 最小闭环：init/clone、status/add/commit、branch、push/pull，并把本地仓库同步到 GitHub。顺便弄清 OpenCode 为什么建议你用 Git（/undo、项目识别）。","frontmatter":{"title":"Git 入门：第一次提交并同步到 GitHub","subtitle":"给第一次用 Git 的你，一套能跑通的最小闭环","course":"OpenCode 中文实战课","stage":"第二阶段","lesson":"2.6","duration":"15 分钟","practice":"20 分钟","level":"新手","description":"学会 Git 最小闭环：init/clone、status/add/commit、branch、push/pull，并把本地仓库同步到 GitHub。顺便弄清 OpenCode 为什么建议你用 Git（/undo、项目识别）。","tags":["Git","GitHub","版本管理","新手"],"prerequisite":["2.1 界面与基础操作"]},"headers":[],"relativePath":"2-daily/06-git-basics.md","filePath":"2-daily/06-git-basics.md","lastUpdated":1772014034000}'),c={name:"2-daily/06-git-basics.md"};function d(r,a,p,u,g,b){return s(),i("div",null,[...a[0]||(a[0]=[l("",17),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"git --version")])],-1),t("p",null,"如果提示“command not found”或找不到命令，按系统安装：",-1),t("div",{class:"vp-code-group"},[t("div",{class:"tabs"},[t("input",{type:"radio",name:"group-108",id:"tab-109",checked:""}),t("label",{"data-title":"macOS (Homebrew)",for:"tab-109"},"macOS (Homebrew)"),t("input",{type:"radio",name:"group-108",id:"tab-110"}),t("label",{"data-title":"Ubuntu/Debian",for:"tab-110"},"Ubuntu/Debian"),t("input",{type:"radio",name:"group-108",id:"tab-111"}),t("label",{"data-title":"Windows (winget)",for:"tab-111"},"Windows (winget)")]),t("div",{class:"blocks"},[t("div",{class:"language-bash active"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"brew install git")])]),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"sudo apt update && sudo apt install -y git")])]),t("div",{class:"language-powershell"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"powershell"),t("pre",null,[t("code",{"v-pre":""},"winget install --id Git.Git -e")])])])],-1),l("",5),t("div",{class:"language-text"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"text"),t("pre",null,[t("code",{"v-pre":""},`工作区 (Working Tree)
  |  git add
  v
暂存区 (Index)
  |  git commit
  v
历史记录 (Commits)`)])],-1),l("",11),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`git config --global user.name "你的名字"
git config --global user.email "你的邮箱"

# 检查一下
git config --global --get user.name
git config --global --get user.email`)])],-1),l("",4),t("div",{class:"vp-code-group"},[t("div",{class:"tabs"},[t("input",{type:"radio",name:"group-266",id:"tab-267",checked:""}),t("label",{"data-title":"我有一个本地文件夹（推荐新手）",for:"tab-267"},"我有一个本地文件夹（推荐新手）"),t("input",{type:"radio",name:"group-266",id:"tab-268"}),t("label",{"data-title":"我从 GitHub 克隆已有仓库",for:"tab-268"},"我从 GitHub 克隆已有仓库")]),t("div",{class:"blocks"},[t("div",{class:"language-bash active"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 进入你的项目目录
cd /path/to/your/project

# 初始化仓库
git init`)])]),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`git clone https://github.com/<owner>/<repo>.git
cd <repo>`)])])])],-1),t("p",null,[t("strong",null,"你应该看到"),e("："),t("code",null,"git init"),e(" 会提示已初始化仓库；"),t("code",null,"git clone"),e(" 会把代码下载到本地。")],-1),t("p",null,[e("顺手加一个 "),t("code",null,".gitignore"),e("（避免把生成物、缓存、密钥提交进去）：")],-1),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 依赖与构建产物
node_modules/
dist/
build/

# 日志
*.log

# 本地环境变量（不要提交到仓库）
.env
.env.local

# 系统/编辑器杂项
.DS_Store
.idea/`)])],-1),t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"不想自己写？让 OpenCode 帮你挑“该忽略的文件”"),t("p",null,[e("你可以只说一句话，让 OpenCode 根据当前项目内容和 "),t("code",null,"git status"),e(" 来生成/更新 "),t("code",null,".gitignore"),e("：")]),t("div",{class:"language-text"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"text"),t("pre",null,[t("code",{"v-pre":""},`帮我检查哪些文件不必要提交，添加到 .gitignore。

要求：
1) 先运行并参考 git status / git diff（只看，不要直接提交/推送）
2) 只修改/创建 .gitignore，改完后把 .gitignore 的内容贴出来并解释每一条为什么要忽略
3) 如果发现 .env、密钥、token 之类的敏感文件，先停下提醒我`)])])],-1),t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},[t("code",null,".gitignore"),e(" 有个“新手陷阱”")]),t("p",null,[t("code",null,".gitignore"),e(" 只对“还没被 Git 跟踪的文件”生效。")]),t("p",null,[e("如果你已经把某个文件提交过，再把它写进 "),t("code",null,".gitignore"),e(" 也不会消失。正确做法是先把它从仓库跟踪里移除（但保留本地文件），然后再提交：")]),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`git rm --cached <file>
git commit -m "chore: stop tracking <file>"`)])]),t("p",null,[e("如果那个文件是密钥/口令，别只做 "),t("code",null,"rm --cached"),e("，还需要去对应平台把密钥立刻作废并重新生成。")])],-1),t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},"如果你已经有项目专用的 .gitignore"),t("p",null,"保留你已有的内容即可，不要强行改成这一份。")],-1),t("h3",{id:"第-3-步-做第一次提交-first-commit",tabindex:"-1"},[e("第 3 步：做第一次提交（first commit） "),t("a",{class:"header-anchor",href:"#第-3-步-做第一次提交-first-commit","aria-label":"Permalink to “第 3 步：做第一次提交（first commit）”"},"​")],-1),t("p",null,[t("strong",null,"为什么"),e(" 第一次提交相当于“存档点 0”。从这一刻开始，你随时能回到这个状态。")],-1),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 看看当前状态
git status

# 把要提交的改动加入暂存区（第一次一般直接全加）
git add .

# 提交
git commit -m "init"`)])],-1),t("p",null,[t("strong",null,"你应该看到"),e("："),t("code",null,"git status"),e(" 从一堆红色“未跟踪/已修改”，变成“working tree clean”（干净）。")],-1),t("p",null,"再看一下提交历史：",-1),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"git log --oneline -5")])],-1),l("",4),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"git branch --show-current")])],-1),t("p",null,[e("如果你看到的是 "),t("code",null,"master"),e("，建议把它改成 "),t("code",null,"main"),e("（在当前分支执行就行）：")],-1),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"git branch -M main")])],-1),t("ol",{start:"3"},[t("li",null,[e("绑定远端并推送 "),t("code",null,"main"),e("：")])],-1),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`git remote -v

# 如果你是 git init 初始化的仓库：添加 origin
# 如果你是 git clone 下来的仓库：origin 通常已经存在，跳过这一行
git remote add origin https://github.com/<owner>/<repo>.git

# 确保在 main 上推送
git checkout main
git push -u origin main`)])],-1),l("",5),t("div",{class:"language-text"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"text"),t("pre",null,[t("code",{"v-pre":""},"总结下这次修改，提交并推送。")])],-1),t("details",{class:"details custom-block"},[t("summary",null,"想更稳妥（推荐）"),t("p",null,"如果你不想“盲推”，用这句（也不长，但更安全）："),t("div",{class:"language-text"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"text"),t("pre",null,[t("code",{"v-pre":""},`先检查 git status + git diff，总结改动并给出 commit message；
我确认后再执行提交和推送。

注意：如果发现 .env、密钥、token 之类的文件，先停下提醒我。`)])])],-1),t("p",null,[e("如果你更想“看得见摸得着”，也可以用 "),t("code",null,"!"),e(" 把关键命令跑一遍：")],-1),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`git status
git diff`)])],-1),t("p",null,[t("strong",null,"你应该看到"),e("：")],-1),t("ul",null,[t("li",null,"OpenCode 先总结改动，再给出一条 commit message"),t("li",null,"推送成功后，GitHub 仓库能看到最新提交")],-1),t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},"一句话就让它 push，有没有风险？"),t("p",null,[e("有，所以这里的套路是：先 "),t("code",null,"status/diff"),e("，再 commit/push。你永远保留最后一次人工确认的机会。")])],-1),t("details",{class:"details custom-block"},[t("summary",null,"协作路线（可选）：分支 + PR"),t("p",null,"你需要下面这条路线的常见场景："),t("ul",null,[t("li",null,[e("你的仓库开了 "),t("code",null,"main"),e(" 分支保护（不允许直接 push）")]),t("li",null,"你希望每次合并前都跑 CI / 代码审查")]),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`# 创建分支并提交
git checkout -b feature/first-change
git add -A
git commit -m "feat: first change"
git push -u origin feature/first-change`)])]),t("p",null,[e("然后到 GitHub 上创建 PR：base 选 "),t("code",null,"main"),e("，compare 选 "),t("code",null,"feature/first-change"),e("。")]),t("p",null,"合并后本地同步："),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`git checkout main
git pull`)])])],-1),t("h3",{id:"第-6-步-保持本地与-github-同步",tabindex:"-1"},[e("第 6 步：保持本地与 GitHub 同步 "),t("a",{class:"header-anchor",href:"#第-6-步-保持本地与-github-同步","aria-label":"Permalink to “第 6 步：保持本地与 GitHub 同步”"},"​")],-1),t("p",null,[t("strong",null,"为什么"),e(" 只要你的代码在 GitHub 上发生过变化（你在另一台电脑 push 了、你合并了 PR、或者别人推送了），本地就需要拉取更新。")],-1),t("p",null,"推荐习惯：",-1),t("ul",null,[t("li",null,[e("开工先 "),t("code",null,"pull")]),t("li",null,[e("收工 "),t("code",null,"commit + push")])],-1),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},`git checkout main
git pull`)])],-1),t("p",null,"（可选）删除本地分支：",-1),t("div",{class:"language-bash"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"bash"),t("pre",null,[t("code",{"v-pre":""},"git branch -d feature/first-change")])],-1),l("",18)])])}const _=o(c,[["render",d]]);export{m as __pageData,_ as default};
