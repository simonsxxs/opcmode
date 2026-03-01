---
layout: home

hero:
  name: AI+一人公司
  text: 新手入门课
  tagline: 从零起步 · 用 AI 搭建你的一人公司业务
  image:
    src: /hero/b1.png
    alt: Hero Image
  actions:
    - theme: brand
      text: 开始学习
      link: /1-start/
    - theme: alt
      text: 场景实战
      link: /4-scenarios/
    - theme: alt
      text: 加入社群
      link: /community

features:
  - icon: 🚀
    title: 7天跑通一人公司起步
    details: 完成定位、产品雏形与第一轮验证，拿到可成交的最小服务。
    link: /1-start/

  - icon: ✍️
    title: AI 工具创作能力
    details: 掌握选题、写作、发布、复盘，让内容稳定输出。
    link: /4-scenarios/writer-workflow

  - icon: 💡
    title: 可复制的方法论
    details: 从引流到成交再到复购，形成可持续增长闭环。
    link: /5-advanced/

  - icon: 📚
    title: 小白友好
    details: 不需要技术背景，按步骤执行就能落地。

  - icon: 📋
    title: 模板即拿即用
    details: 提示词、报价、成交话术、交付模板可直接套用。
    link: /3-workflow/

  - icon: ⚙️
    title: 自动化与复购
    details: 搭建标准交付流程，让收入不依赖单次爆发。
    link: /5-advanced/
---

## 选择你的学习路线

<div class="learning-paths">
  <a href="/1-start/" class="path-card">
    <span class="path-icon">🚀</span>
    <h3>完全新手</h3>
    <p class="path-duration">约 3 小时</p>
    <p class="path-desc">明确定位，做出最小可售卖服务，完成第一轮验证。</p>
    <span class="path-cta">开始学习 →</span>
  </a>
  <a href="/4-scenarios/writer-workflow" class="path-card">
    <span class="path-icon">✍️</span>
    <h3>AI 工具创作</h3>
    <p class="path-duration">约 6-7 小时</p>
    <p class="path-desc">用 AI 批量做选题、内容、素材和发布节奏。</p>
    <span class="path-cta">开始学习 →</span>
  </a>
  <a href="/4-scenarios/coder-daily" class="path-card">
    <span class="path-icon">💻</span>
    <h3>自动化与复购</h3>
    <p class="path-duration">约 5-6 小时</p>
    <p class="path-desc">搭建交付 SOP 与复购机制，让收入可持续。</p>
    <span class="path-cta">开始学习 →</span>
  </a>
  <a href="/appendix/" class="path-card">
    <span class="path-icon">📊</span>
    <h3>模板速查</h3>
    <p class="path-duration">约 4-5 小时</p>
    <p class="path-desc">提示词、报价、成交话术、交付模板直接复用。</p>
    <span class="path-cta">开始学习 →</span>
  </a>
</div>

## 结果导向

<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-number">42.9万</span>
    <span class="stat-label">起步框架</span>
    <span class="stat-desc">每天知道该做什么，不再迷茫。</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">82</span>
    <span class="stat-label">AI 模板</span>
    <span class="stat-desc">覆盖选题、写作、成交、交付场景。</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">18</span>
    <span class="stat-label">实操案例</span>
    <span class="stat-desc">照着做就能复现，不讲空话。</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">20+</span>
    <span class="stat-label">成交闭环</span>
    <span class="stat-desc">从引流到复购，全流程打通。</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">800+</span>
    <span class="stat-label">可迭代方法</span>
    <span class="stat-desc">能自己持续优化，不依赖运气。</span>
  </div>
</div>

## 免费领取入门课

<div class="final-cta">
  <p class="cta-highlight">刚开始做一人公司时我也一头雾水，所以整理了这份入门课和起步清单，扫码加我微信，希望能帮你少走点弯路。</p>
  <p class="cta-subtitle">添加时备注：AI+一人公司</p>
  <button class="cta-button" onclick="copyWechat()">复制微信号 simonsxx1</button>
</div>

<script>
function copyWechat() {
  navigator.clipboard.writeText('simonsxx1').then(() => {
    const btn = document.querySelector('.cta-button');
    btn.textContent = '已复制：simonsxx1';
    setTimeout(() => {
      btn.textContent = '复制微信号 simonsxx1';
    }, 2000);
  });
}
</script>
