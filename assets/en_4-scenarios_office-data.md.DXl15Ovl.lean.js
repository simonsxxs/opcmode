import{_ as n,I as r,c as l,o as d,a5 as a,j as e,J as c,a as o,aK as i}from"./chunks/framework.Dtwt352Q.js";const k=JSON.parse('{"title":"C2 Data Processing","description":"Use AI to analyze CSV and JSON data, automatically generate reports and visualizations to improve data processing efficiency.","frontmatter":{"title":"C2 Data Processing","subtitle":"CSV/JSON Analysis and Report Generation","course":"OpenCode Chinese Practical Course","stage":"Stage 4","lesson":"C2","duration":"20 minutes","practice":"25 minutes","level":"Beginner","description":"Use AI to analyze CSV and JSON data, automatically generate reports and visualizations to improve data processing efficiency.","tags":["Data","CSV","JSON","Report"],"prerequisite":["C1 File Organization"]},"headers":[],"relativePath":"en/4-scenarios/office-data.md","filePath":"en/4-scenarios/office-data.md","lastUpdated":1772014034000}'),p={name:"en/4-scenarios/office-data.md"};function u(h,t,b,f,m,g){const s=r("AdInArticle");return d(),l("div",null,[t[0]||(t[0]=a("",21)),t[1]||(t[1]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},"Understand Data Structure → Define Analysis Goals → Execute Analysis → Output Results")])],-1)),t[2]||(t[2]=a("",7)),c(s),t[3]||(t[3]=e("h3",{id:"step-1-understand-data-structure",tabindex:"-1"},[o("Step 1: Understand Data Structure "),e("a",{class:"header-anchor",href:"#step-1-understand-data-structure","aria-label":"Permalink to “Step 1: Understand Data Structure”"},"​")],-1)),t[4]||(t[4]=e("p",null,[e("strong",null,"Why"),e("br"),o(" First understand what the data looks like.")],-1)),t[5]||(t[5]=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",null,[e("code",{"v-pre":""},`cd ~/data  # Replace with your data directory
opencode`)])],-1)),t[6]||(t[6]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv Analyze this CSV file:
1. How many rows of data (if you can't count precisely, explain why and provide alternatives)
2. What columns (fields) are there
3. Data type of each column (what's your basis for inference)
4. Are there any null or abnormal values`)])],-1)),t[7]||(t[7]=e("h3",{id:"step-2-basic-statistical-analysis",tabindex:"-1"},[o("Step 2: Basic Statistical Analysis "),e("a",{class:"header-anchor",href:"#step-2-basic-statistical-analysis","aria-label":"Permalink to “Step 2: Basic Statistical Analysis”"},"​")],-1)),t[8]||(t[8]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Quickly understand data overview.")],-1)),t[9]||(t[9]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv Perform statistical analysis on sales data:
1. Total sales
2. Average order value
3. Top 5 products by sales volume
4. Monthly sales trend`)])],-1)),t[10]||(t[10]=e("h3",{id:"step-3-data-filtering",tabindex:"-1"},[o("Step 3: Data Filtering "),e("a",{class:"header-anchor",href:"#step-3-data-filtering","aria-label":"Permalink to “Step 3: Data Filtering”"},"​")],-1)),t[11]||(t[11]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Find records matching specific criteria.")],-1)),t[12]||(t[12]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv Filter the following data:
1. Orders with sales over 1000 yuan
2. All orders from January this year
3. Customer orders from Beijing

Save the results as filtered_sales.csv`)])],-1)),t[13]||(t[13]=e("h3",{id:"step-4-generate-report",tabindex:"-1"},[o("Step 4: Generate Report "),e("a",{class:"header-anchor",href:"#step-4-generate-report","aria-label":"Permalink to “Step 4: Generate Report”"},"​")],-1)),t[14]||(t[14]=e("p",null,[e("strong",null,"Why"),e("br"),o(" Organize analysis results into a readable report.")],-1)),t[15]||(t[15]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv Generate a monthly sales report including:

## Sales Overview
- Total sales this month
- Month-over-month growth rate
- Number of orders

## Product Analysis
- Top 10 products table by sales volume
- Category distribution

## Regional Analysis
- Sales ranking by region

Save as monthly-report.md`)])],-1)),t[16]||(t[16]=e("h3",{id:"step-5-format-conversion",tabindex:"-1"},[o("Step 5: Format Conversion "),e("a",{class:"header-anchor",href:"#step-5-format-conversion","aria-label":"Permalink to “Step 5: Format Conversion”"},"​")],-1)),t[17]||(t[17]=e("p",null,[e("strong",null,"Why"),o(" Different scenarios require different formats.")],-1)),t[18]||(t[18]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`@sales.csv Complete the following conversions:
1. Convert to JSON format, save as sales.json
2. Extract customer information, generate customers.csv
3. Generate a format that can be imported into Excel`)])],-1)),t[19]||(t[19]=e("hr",null,null,-1)),t[20]||(t[20]=e("h2",{id:"advanced-fetching-online-data",tabindex:"-1"},[o("Advanced: Fetching Online Data "),e("a",{class:"header-anchor",href:"#advanced-fetching-online-data","aria-label":"Permalink to “Advanced: Fetching Online Data”"},"​")],-1)),t[21]||(t[21]=e("h3",{id:"using-the-webfetch-tool",tabindex:"-1"},[o("Using the webfetch Tool "),e("a",{class:"header-anchor",href:"#using-the-webfetch-tool","aria-label":"Permalink to “Using the webfetch Tool”"},"​")],-1)),t[22]||(t[22]=e("p",null,"Besides local files, you can also fetch data from webpages for analysis:",-1)),t[23]||(t[23]=e("div",{class:"language-"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"}),e("pre",null,[e("code",{"v-pre":""},`Use webfetch to fetch a webpage (please output a summary of the raw content you obtained), and explain:
1. Whether you got text / markdown / html
2. How you would convert it to analyzable data (CSV/JSON/table)`)])],-1)),t[24]||(t[24]=a("",21))])}const v=n(p,[["render",u]]);export{k as __pageData,v as default};
