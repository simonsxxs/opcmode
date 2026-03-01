import{_ as c,I as l,c as s,o as n,a5 as d,j as e,J as r,a as t,aK as i}from"./chunks/framework.Dtwt352Q.js";const C=JSON.parse('{"title":"C2 数据处理","description":"用 AI 分析 CSV、JSON 数据，自动生成报表和可视化图表，提升数据处理效率。","frontmatter":{"title":"C2 数据处理","subtitle":"CSV/JSON 分析与报表生成","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"C2","duration":"20 分钟","practice":"25 分钟","level":"新手","description":"用 AI 分析 CSV、JSON 数据，自动生成报表和可视化图表，提升数据处理效率。","tags":["数据","CSV","JSON","报表"],"prerequisite":["C1 文件整理"]},"headers":[],"relativePath":"4-scenarios/office-data.md","filePath":"4-scenarios/office-data.md","lastUpdated":1772014034000}'),p={name:"4-scenarios/office-data.md"};function h(b,o,f,u,k,g){const a=l("AdInArticle");return n(),s("div",null,[o[0]||(o[0]=d("",21)),o[1]||(o[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"理解数据结构 → 确定分析目标 → 执行分析 → 输出结果")])],-1)),o[2]||(o[2]=d("",7)),r(a),o[3]||(o[3]=e("h3",{id:"第-1-步-理解数据结构",tabindex:"-1"},[t("第 1 步：理解数据结构 "),e("a",{class:"header-anchor",href:"#第-1-步-理解数据结构","aria-label":"Permalink to “第 1 步：理解数据结构”"},"​")],-1)),o[4]||(o[4]=e("p",null,[e("strong",null,"为什么"),e("br"),t(" 先了解数据长什么样。")],-1)),o[5]||(o[5]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`cd ~/data  # 换成你的数据目录
opencode`)])],-1)),o[6]||(o[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv 分析这个 CSV 文件：
1. 有多少行数据（如果你无法精确统计，请说明原因并给出可行替代）
2. 有哪些列（字段）
3. 每列的数据类型（你推断的依据是什么）
4. 是否有空值或异常值`)])],-1)),o[7]||(o[7]=e("h3",{id:"第-2-步-基础统计分析",tabindex:"-1"},[t("第 2 步：基础统计分析 "),e("a",{class:"header-anchor",href:"#第-2-步-基础统计分析","aria-label":"Permalink to “第 2 步：基础统计分析”"},"​")],-1)),o[8]||(o[8]=e("p",null,[e("strong",null,"为什么"),e("br"),t(" 快速了解数据概况。")],-1)),o[9]||(o[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv 对销售数据进行统计分析：
1. 总销售额
2. 平均客单价
3. 销量最高的产品 TOP 5
4. 按月份的销售趋势`)])],-1)),o[10]||(o[10]=e("h3",{id:"第-3-步-数据筛选",tabindex:"-1"},[t("第 3 步：数据筛选 "),e("a",{class:"header-anchor",href:"#第-3-步-数据筛选","aria-label":"Permalink to “第 3 步：数据筛选”"},"​")],-1)),o[11]||(o[11]=e("p",null,[e("strong",null,"为什么"),e("br"),t(" 找出符合条件的记录。")],-1)),o[12]||(o[12]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv 筛选出以下数据：
1. 销售额超过 1000 元的订单
2. 今年 1 月份的所有订单
3. 来自北京的客户订单

将结果保存为 filtered_sales.csv`)])],-1)),o[13]||(o[13]=e("h3",{id:"第-4-步-生成报表",tabindex:"-1"},[t("第 4 步：生成报表 "),e("a",{class:"header-anchor",href:"#第-4-步-生成报表","aria-label":"Permalink to “第 4 步：生成报表”"},"​")],-1)),o[14]||(o[14]=e("p",null,[e("strong",null,"为什么"),e("br"),t(" 把分析结果整理成可读的报告。")],-1)),o[15]||(o[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv 生成一份月度销售报表，包含：

## 销售概览
- 本月总销售额
- 环比增长率
- 订单数量

## 产品分析
- 销量 TOP 10 产品表格
- 各品类占比

## 区域分析
- 各地区销售额排名

保存为 月度报表.md`)])],-1)),o[16]||(o[16]=e("h3",{id:"第-5-步-格式转换",tabindex:"-1"},[t("第 5 步：格式转换 "),e("a",{class:"header-anchor",href:"#第-5-步-格式转换","aria-label":"Permalink to “第 5 步：格式转换”"},"​")],-1)),o[17]||(o[17]=e("p",null,[e("strong",null,"为什么"),t(" 不同场景需要不同格式。")],-1)),o[18]||(o[18]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv 完成以下转换：
1. 转换为 JSON 格式，保存为 sales.json
2. 提取客户信息，生成 customers.csv
3. 生成可以导入 Excel 的格式`)])],-1)),o[19]||(o[19]=e("hr",null,null,-1)),o[20]||(o[20]=e("h2",{id:"进阶-获取在线数据",tabindex:"-1"},[t("进阶：获取在线数据 "),e("a",{class:"header-anchor",href:"#进阶-获取在线数据","aria-label":"Permalink to “进阶：获取在线数据”"},"​")],-1)),o[21]||(o[21]=e("h3",{id:"使用-webfetch-工具",tabindex:"-1"},[t("使用 webfetch 工具 "),e("a",{class:"header-anchor",href:"#使用-webfetch-工具","aria-label":"Permalink to “使用 webfetch 工具”"},"​")],-1)),o[22]||(o[22]=e("p",null,"除了本地文件，还可以从网页获取数据进行分析：",-1)),o[23]||(o[23]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`用 webfetch 抓取一个网页（请输出你拿到的原始内容摘要），并说明：
1. 你拿到的是 text / markdown / html 哪一种
2. 你会如何把它转成可分析的数据（CSV/JSON/表格）`)])],-1)),o[24]||(o[24]=d("",21))])}const x=c(p,[["render",h]]);export{C as __pageData,x as default};
