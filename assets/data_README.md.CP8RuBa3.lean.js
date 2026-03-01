import{_ as t,c as o,o as n,a5 as l,j as a,a as e}from"./chunks/framework.Dtwt352Q.js";const b=JSON.parse('{"title":"统计数据自动生成","description":"","frontmatter":{},"headers":[],"relativePath":"data/README.md","filePath":"data/README.md","lastUpdated":1772014034000}'),d={name:"data/README.md"};function r(c,s,i,p,h,u){return n(),o("div",null,[...s[0]||(s[0]=[l("",6),a("div",{class:"language-json"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"json"),a("pre",null,[a("code",{"v-pre":""},`{
  "wordCount": 138188,
  "notesCount": 66
}`)])],-1),a("h2",{id:"使用方式",tabindex:"-1"},[e("使用方式 "),a("a",{class:"header-anchor",href:"#使用方式","aria-label":"Permalink to “使用方式”"},"​")],-1),a("p",null,[e("在首页 "),a("code",null,"docs/index.md"),e(" 中通过 Vue 脚本导入并使用：")],-1),a("div",{class:"language-vue"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"vue"),a("pre",null,[a("code",{"v-pre":""},`<script setup>
import stats from './data/stats.json'
<\/script>

<span class="stat-number">{{ Math.round(stats.wordCount / 10000).toFixed(1) }}万</span>
<span class="stat-number">{{ stats.notesCount }}</span>`)])],-1),a("h2",{id:"自动触发",tabindex:"-1"},[e("自动触发 "),a("a",{class:"header-anchor",href:"#自动触发","aria-label":"Permalink to “自动触发”"},"​")],-1),a("div",{class:"language-json"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"json"),a("pre",null,[a("code",{"v-pre":""},`"scripts": {
  "dev": "bash scripts/stats.sh && vitepress dev docs",
  "build": "bash scripts/stats.sh && vitepress build docs"
}`)])],-1)])])}const _=t(d,[["render",r]]);export{b as __pageData,_ as default};
