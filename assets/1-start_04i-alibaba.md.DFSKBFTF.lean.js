import{_ as o,c as d,o as n,a5 as l,j as e,a}from"./chunks/framework.Dtwt352Q.js";const _=JSON.parse('{"title":"连接通义千问（阿里云）","description":"获取阿里云百炼 API Key，并在 OpenCode 中使用通义千问模型。","frontmatter":{"title":"连接通义千问（阿里云）","subtitle":"阿里系、全能通用","course":"OpenCode 中文实战课","stage":"第一阶段","lesson":"1.4i","duration":"10 分钟","practice":"5 分钟","level":"新手","description":"获取阿里云百炼 API Key，并在 OpenCode 中使用通义千问模型。","tags":["模型","通义千问","阿里云","DashScope","API Key"],"prerequisite":["1.2 安装"]},"headers":[],"relativePath":"1-start/04i-alibaba.md","filePath":"1-start/04i-alibaba.md","lastUpdated":1772014034000}'),c={name:"1-start/04i-alibaba.md"};function i(r,t,s,p,h,b){return n(),d("div",null,[...t[0]||(t[0]=[l("",25),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},"opencode")])],-1),e("p",null,"输入：",-1),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/connect")])],-1),l("",4),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"✓ Provider added successfully!")])],-1),l("",4),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"/models")])],-1),l("",3),e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"你好，请介绍一下你自己")])],-1),e("p",null,"能收到回复就说明连接成功。",-1),e("hr",null,null,-1),e("h2",{id:"使用环境变量-可选",tabindex:"-1"},[a("使用环境变量（可选） "),e("a",{class:"header-anchor",href:"#使用环境变量-可选","aria-label":"Permalink to “使用环境变量（可选）”"},"​")],-1),e("p",null,[a("除了通过 "),e("code",null,"/connect"),a(" 命令配置，你也可以使用环境变量：")],-1),e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`# 方式一：启动时设置
DASHSCOPE_API_KEY=sk-xxx opencode

# 方式二：写入 shell 配置文件
echo 'export DASHSCOPE_API_KEY=sk-xxx' >> ~/.zshrc
source ~/.zshrc`)])],-1),e("hr",null,null,-1),e("h2",{id:"通过配置文件自定义-进阶",tabindex:"-1"},[a("通过配置文件自定义（进阶） "),e("a",{class:"header-anchor",href:"#通过配置文件自定义-进阶","aria-label":"Permalink to “通过配置文件自定义（进阶）”"},"​")],-1),e("p",null,[a("如果你需要自定义 baseURL 或添加额外模型，可以在 "),e("code",null,"opencode.json"),a(" 中配置：")],-1),e("div",{class:"language-jsonc"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"jsonc"),e("pre",null,[e("code",{"v-pre":""},`{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "alibaba-cn": {
      "options": {
        "baseURL": "https://dashscope.aliyuncs.com/compatible-mode/v1"
      }
    }
  }
}`)])],-1),l("",9)])])}const y=o(c,[["render",i]]);export{_ as __pageData,y as default};
