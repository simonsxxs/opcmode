import{_ as n,c as t,o,a5 as i,j as a,a as e}from"./chunks/framework.Dtwt352Q.js";const M=JSON.parse('{"title":"连接 MiniMax（M2.5/M2.1）","description":"获取 MiniMax API Key，并在 OpenCode 中连接使用 M2.5、M2.1 等模型。","frontmatter":{"title":"连接 MiniMax（M2.5/M2.1）","subtitle":"9.9 元 Starter 月卡可选","course":"OpenCode 中文实战课","stage":"第一阶段","lesson":"1.4d","duration":"15 分钟","practice":"5 分钟","level":"新手","description":"获取 MiniMax API Key，并在 OpenCode 中连接使用 M2.5、M2.1 等模型。","tags":["模型","MiniMax","API Key"],"prerequisite":["1.2 安装"]},"headers":[],"relativePath":"1-start/04d-minimax.md","filePath":"1-start/04d-minimax.md","lastUpdated":1772014034000}'),r={name:"1-start/04d-minimax.md"};function s(d,l,c,p,h,m){return o(),t("div",null,[...l[0]||(l[0]=[i("",20),a("ol",null,[a("li",null,[e("启动 OpenCode："),a("div",{class:"language-bash"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",null,[a("code",{"v-pre":""},"opencode")])])]),a("li",null,[e("输入："),a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},"/connect")])])]),a("li",null,[e("搜索并选择 "),a("code",null,"MiniMax"),e("，粘贴 API Key")])],-1),i("",7),a("div",{class:"language-json"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"json"),a("pre",null,[a("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "minimax": {
      "npm": "@ai-sdk/anthropic",
      "options": {
        "baseURL": "https://api.minimax.io/anthropic/v1"
      },
      "models": {
        "MiniMax-M2.5": {
          "name": "MiniMax-M2.5"
        },
        "MiniMax-M2.1": {
          "name": "MiniMax-M2.1"
        }
      }
    }
  }
}`)])],-1),a("blockquote",null,[a("p",null,[e("💡 国内用户可将 "),a("code",null,"baseURL"),e(" 改为 "),a("code",null,"https://api.minimaxi.com/anthropic/v1")])],-1),a("ol",{start:"2"},[a("li",null,"运行登录命令添加 Key：")],-1),a("div",{class:"language-bash"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",null,[a("code",{"v-pre":""},"opencode auth login")])],-1),a("p",null,[e("在交互界面里：选择 "),a("code",null,"Other"),e(" → 输入 provider ID："),a("code",null,"minimax"),e(" → 粘贴你的 API Key。")],-1),a("div",{class:"warning custom-block"},[a("p",{class:"custom-block-title"},"环境变量冲突"),a("p",null,[e("如果你之前设置过 "),a("code",null,"ANTHROPIC_AUTH_TOKEN"),e(" 或 "),a("code",null,"ANTHROPIC_BASE_URL"),e("，可能会影响 Anthropic 兼容提供商（包括 MiniMax）。")]),a("p",null,"可以先清理："),a("div",{class:"language-bash"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"bash"),a("pre",null,[a("code",{"v-pre":""},`unset ANTHROPIC_AUTH_TOKEN
unset ANTHROPIC_BASE_URL`)])])],-1),a("hr",null,null,-1),a("h3",{id:"第-3-步-选择模型并验证",tabindex:"-1"},[e("第 3 步：选择模型并验证 "),a("a",{class:"header-anchor",href:"#第-3-步-选择模型并验证","aria-label":"Permalink to “第 3 步：选择模型并验证”"},"​")],-1),a("p",null,"输入：",-1),a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},"/models")])],-1),a("p",null,[e("选择 "),a("code",null,"MiniMax-M2.5"),e(" 或 "),a("code",null,"MiniMax-M2.1"),e("（或你配置/列表中的其他模型），然后发送一句话验证：")],-1),a("div",{class:"language-"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",null,[a("code",{"v-pre":""},"你好，请介绍一下你自己")])],-1),i("",9)])])}const x=n(r,[["render",s]]);export{M as __pageData,x as default};
