import{_ as e,I as i,c as d,o,a5 as t,j as n,J as s,a,aP as p}from"./chunks/framework.Dtwt352Q.js";const A=JSON.parse('{"title":"A7 剧本写作（进阶）","description":"用 AI 辅助写标准格式剧本，从故事梗概到分场大纲到场景详写，建立场景库快速调用。","frontmatter":{"title":"A7 剧本写作（进阶）","subtitle":"场景库管理、格式自动化","course":"OpenCode 中文实战课","stage":"第四阶段","lesson":"A7","duration":"20 分钟","practice":"25 分钟","level":"进阶","description":"用 AI 辅助写标准格式剧本，从故事梗概到分场大纲到场景详写，建立场景库快速调用。","tags":["剧本","对白","场景"],"prerequisite":["A1 创作工作流"]},"headers":[],"relativePath":"4-scenarios/writer-script.md","filePath":"4-scenarios/writer-script.md","lastUpdated":1772014034000}'),u={name:"4-scenarios/writer-script.md"};function b(h,l,m,g,k,f){const r=i("AdInArticle");return o(),d("div",null,[l[0]||(l[0]=t('<h1 id="a7-剧本写作-进阶" tabindex="-1">A7 剧本写作（进阶） <a class="header-anchor" href="#a7-剧本写作-进阶" aria-label="Permalink to “A7 剧本写作（进阶）”">​</a></h1><blockquote><p>💡 <strong>一句话总结</strong>：用 AI 辅助写标准格式剧本，从故事梗概到分场大纲到场景详写。</p></blockquote><h2 id="📝-课程笔记" tabindex="-1">📝 课程笔记 <a class="header-anchor" href="#📝-课程笔记" aria-label="Permalink to “📝 课程笔记”">​</a></h2><p>本课核心知识点整理：</p><p><img src="'+p+'" alt="A7 剧本写作(进阶)学霸笔记" data-zoom-src="/images/4-scenarios/writer-script-notes.jpeg"></p><hr><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to “学完你能做什么”">​</a></h2><ul><li>理解标准剧本格式</li><li>用 AI 生成分场大纲</li><li>写出符合格式的场景描述和对白</li><li>完成一个 10 分钟短剧剧本</li></ul><hr><h2 id="为什么用-opencode-而不是网页版-ai" tabindex="-1">为什么用 OpenCode，而不是网页版 AI？ <a class="header-anchor" href="#为什么用-opencode-而不是网页版-ai" aria-label="Permalink to “为什么用 OpenCode，而不是网页版 AI？”">​</a></h2><table tabindex="0"><thead><tr><th>能力</th><th>网页版 AI</th><th>OpenCode</th></tr></thead><tbody><tr><td>场景库管理</td><td>❌ 每次重新描述场景</td><td>✅ 场景模板文件，@引用复用</td></tr><tr><td>格式自动化</td><td>❌ 格式经常乱</td><td>✅ 固化剧本格式到 AGENTS.md</td></tr><tr><td>分场管理</td><td>❌ 只能在一个文件里</td><td>✅ 每场一个文件，独立编辑</td></tr><tr><td>角色声音</td><td>❌ 对白容易混</td><td>✅ @角色声音.md 保持区分度</td></tr><tr><td>版本对比</td><td>❌</td><td>✅ Git 追踪每版修改</td></tr></tbody></table><hr><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to “你现在的困境”">​</a></h2><ul><li>不知道标准剧本格式是什么样</li><li>对白写得像小说，不像人物真正会说的话</li><li>场景转换生硬，节奏把握不好</li></ul><hr><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to “什么时候用这一招”">​</a></h2><ul><li>当你需要：写一部符合专业格式的剧本</li><li>而且不想：写出来的东西看着不像剧本</li></ul><hr><h2 id="🎒-开始前的准备" tabindex="-1">🎒 开始前的准备 <a class="header-anchor" href="#🎒-开始前的准备" aria-label="Permalink to “🎒 开始前的准备”">​</a></h2><blockquote><p>确保你已经完成以下事项：</p></blockquote><ul><li>[ ] 完成了 <a href="./writer-workflow.html">A1 创作工作流</a></li><li>[ ] 有一个短剧的故事想法</li></ul><hr><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to “核心思路”">​</a></h2><h3 id="剧本写作流程" tabindex="-1">剧本写作流程 <a class="header-anchor" href="#剧本写作流程" aria-label="Permalink to “剧本写作流程”">​</a></h3>',24)),l[1]||(l[1]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"故事梗概 → 分场大纲 → 场景详写 → 对白润色")])],-1)),l[2]||(l[2]=n("h3",{id:"标准剧本格式",tabindex:"-1"},[a("标准剧本格式 "),n("a",{class:"header-anchor",href:"#标准剧本格式","aria-label":"Permalink to “标准剧本格式”"},"​")],-1)),l[3]||(l[3]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`场景 1：内景 - 咖啡馆 - 白天

    一个安静的下午，阳光透过玻璃窗洒落。
    张三（30岁，穿着休闲西装）坐在角落，
    盯着手机屏幕发呆。

                    张三
            （自言自语）
        她怎么还不来...

    门铃响起。李四（28岁，干练短发）推门而入。

                    李四
        等很久了？

                    张三
            （站起身）
        没有，我也刚到。`)])],-1)),l[4]||(l[4]=n("hr",null,null,-1)),l[5]||(l[5]=n("h2",{id:"跟我做",tabindex:"-1"},[a("跟我做 "),n("a",{class:"header-anchor",href:"#跟我做","aria-label":"Permalink to “跟我做”"},"​")],-1)),s(r),l[6]||(l[6]=n("h3",{id:"第-1-步-写故事梗概",tabindex:"-1"},[a("第 1 步：写故事梗概 "),n("a",{class:"header-anchor",href:"#第-1-步-写故事梗概","aria-label":"Permalink to “第 1 步：写故事梗概”"},"​")],-1)),l[7]||(l[7]=n("p",null,[n("strong",null,"为什么"),n("br"),a(" 剧本从梗概开始，一句话说清楚故事。")],-1)),l[8]||(l[8]=n("p",null,"切换到 Plan 模式：",-1)),l[9]||(l[9]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`帮我构思一个 10 分钟短剧的故事梗概：
- 类型：都市情感
- 人物：两个久别重逢的老同学
- 核心冲突：当年的误会
- 结局：释然和解

用一段话概括整个故事`)])],-1)),l[10]||(l[10]=n("h3",{id:"第-2-步-生成分场大纲",tabindex:"-1"},[a("第 2 步：生成分场大纲 "),n("a",{class:"header-anchor",href:"#第-2-步-生成分场大纲","aria-label":"Permalink to “第 2 步：生成分场大纲”"},"​")],-1)),l[11]||(l[11]=n("p",null,[n("strong",null,"为什么"),n("br"),a(" 把故事拆分成场景，确定每场的功能。")],-1)),l[12]||(l[12]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`把刚才的故事拆分成 5-7 个场景，每个场景包含：
1. 场景编号和地点
2. 出场人物
3. 本场目的（推进什么情节/揭示什么）
4. 情绪基调`)])],-1)),l[13]||(l[13]=n("h3",{id:"第-3-步-写第一场",tabindex:"-1"},[a("第 3 步：写第一场 "),n("a",{class:"header-anchor",href:"#第-3-步-写第一场","aria-label":"Permalink to “第 3 步：写第一场”"},"​")],-1)),l[14]||(l[14]=n("p",null,[n("strong",null,"为什么"),n("br"),a(" 开场场景决定观众是否继续看下去。")],-1)),l[15]||(l[15]=n("p",null,"切换到 Build 模式：",-1)),l[16]||(l[16]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`根据分场大纲，用标准剧本格式写第一场，要求：
1. 场景描述简洁有画面感
2. 对白口语化、有潜台词
3. 加入必要的动作指示
4. 保存为 scripts/场景01.md`)])],-1)),l[17]||(l[17]=n("h3",{id:"第-4-步-设计角色声音",tabindex:"-1"},[a("第 4 步：设计角色声音 "),n("a",{class:"header-anchor",href:"#第-4-步-设计角色声音","aria-label":"Permalink to “第 4 步：设计角色声音”"},"​")],-1)),l[18]||(l[18]=n("p",null,[n("strong",null,"为什么"),n("br"),a(" 每个角色说话方式要有区分。")],-1)),l[19]||(l[19]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`为两个主角设计"声音"：
- 角色 A：说话方式、口头禅、节奏特点
- 角色 B：说话方式、口头禅、节奏特点

保存为 scripts/角色声音.md`)])],-1)),l[20]||(l[20]=n("h3",{id:"第-5-步-完成整个剧本",tabindex:"-1"},[a("第 5 步：完成整个剧本 "),n("a",{class:"header-anchor",href:"#第-5-步-完成整个剧本","aria-label":"Permalink to “第 5 步：完成整个剧本”"},"​")],-1)),l[21]||(l[21]=n("p",null,[n("strong",null,"为什么"),n("br"),a(" 按场景逐一完成。")],-1)),l[22]||(l[22]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},"@scripts/角色声音.md 根据分场大纲和角色声音设定，继续写第 2-5 场，保存为对应文件")])],-1)),l[23]||(l[23]=n("hr",null,null,-1)),l[24]||(l[24]=n("h2",{id:"📋-魔法-prompt",tabindex:"-1"},[a("📋 魔法 Prompt "),n("a",{class:"header-anchor",href:"#📋-魔法-prompt","aria-label":"Permalink to “📋 魔法 Prompt”"},"​")],-1)),l[25]||(l[25]=n("h3",{id:"📝-剧本格式转换",tabindex:"-1"},[a("📝 剧本格式转换 "),n("a",{class:"header-anchor",href:"#📝-剧本格式转换","aria-label":"Permalink to “📝 剧本格式转换”"},"​")],-1)),l[26]||(l[26]=n("blockquote",null,[n("p",null,"预期效果：将对话转换为标准剧本格式")],-1)),l[27]||(l[27]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是专业编剧，精通标准剧本格式规范。

## 任务
将用户提供的对话或故事片段转换为标准剧本格式。

## 输入信息
### 必填项
- 内容：[粘贴对话或故事片段]

### 选填项
- 场景信息：【时间/地点?】
- 人物信息：【人物年龄/外貌?】

## 输出规范
按标准剧本格式输出：

\`\`\`
场景 N：【内景/外景】 - 【地点】 - 【时间】

    【场景描述：环境、氛围、视觉元素】
    【人物首次出场加年龄、外貌简述】

                    【人物名（居中大写）】
            （动作/表情指示）
        【对白内容，缩进】

                    【另一人物】
        【对白内容】
\`\`\`

### 格式规范
1. **场景行**：说明内/外景、地点、时间
2. **场景描述**：用黑体/粗体，描述环境
3. **人物名**：居中大写
4. **动作指示**：用括号，在人物名下方
5. **对白**：在动作指示下方，缩进

## 约束条件
- ✅ 严格遵循标准剧本格式
- ✅ 人物首次出场加外貌描述
- ✅ 场景描述简洁有画面感
- ❌ 避免使用小说叙述语气
- ❌ 避免对白过长（每轮不超过3-5句）`)])],-1)),l[28]||(l[28]=n("h3",{id:"💬-对白生成",tabindex:"-1"},[a("💬 对白生成 "),n("a",{class:"header-anchor",href:"#💬-对白生成","aria-label":"Permalink to “💬 对白生成”"},"​")],-1)),l[29]||(l[29]=n("blockquote",null,[n("p",null,"预期效果：生成符合人物性格的对白")],-1)),l[30]||(l[30]=n("div",{class:"language-"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",null,[n("code",{"v-pre":""},`## 角色
你是资深编剧，擅长写有张力、有潜台词的对白。

## 任务
根据场景和人物设定，生成符合人物性格的对白。

## 输入信息
### 必填项
- 场景背景：【场景描述】
- 人物 A：【姓名】- 【性格特点】
- 人物 B：【姓名】- 【性格特点】
- 对话目的：【要达成什么/揭示什么】

### 选填项
- 情绪基调：【紧张/温馨/压抑?】
- 角色声音：@【角色声音文件?】

## 输出规范
按标准剧本对白格式输出：

\`\`\`
                    【人物A】
            （动作/表情）
        【对白】

                    【人物B】
            （动作/表情）
        【对白】
\`\`\`

### 对白要求
1. **角色区分**：每个角色说话方式不同
2. **潜台词**：表面说一套，内心另一套
3. **节奏变化**：有急有缓，有长有短
4. **动作配合**：说话时的小动作、神态
5. **冲突张力**：通过对白推进冲突

## 约束条件
- ✅ 符合各自性格和说话方式
- ✅ 每轮对白控制在 3-5 句
- ✅ 包含必要的动作/表情指示
- ❌ 避免对白太书面化
- ❌ 避免角色说话方式雷同`)])],-1)),l[31]||(l[31]=t('<hr><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to “检查点 ✅”">​</a></h2><blockquote><p>全部通过才能继续</p></blockquote><ul><li>[ ] 完成了故事梗概</li><li>[ ] 生成了分场大纲</li><li>[ ] 用标准格式写出了至少一场</li><li>[ ] 对白有角色区分度</li></ul><hr><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to “踩坑提醒”">​</a></h2><table tabindex="0"><thead><tr><th>现象</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>格式不对</td><td>AI 用了小说格式</td><td>明确要求&quot;标准剧本格式&quot;</td></tr><tr><td>对白太长</td><td>没限制每轮对话长度</td><td>要求&quot;每人每轮 3-5 句&quot;</td></tr><tr><td>角色说话方式雷同</td><td>没设计角色声音</td><td>先定义每个角色的说话特点</td></tr></tbody></table><hr><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to “本课小结”">​</a></h2><p>你学会了：</p><ol><li>剧本写作流程（梗概→大纲→详写→润色）</li><li>标准剧本格式规范</li><li>如何设计角色&quot;声音&quot;</li><li>用 AI 批量生成场景</li></ol><hr><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to “下一课预告”">​</a></h2><blockquote><p>下一课我们将学习网文创作，掌握日更工作流和批量存稿技巧。</p></blockquote><hr><p>📚 <strong>更多完整模板</strong>：<a href="./../appendix/prompts.html">Prompt 模板库</a></p>',16))])}const x=e(u,[["render",b]]);export{A as __pageData,x as default};
