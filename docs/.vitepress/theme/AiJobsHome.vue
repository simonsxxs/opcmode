<template>
  <main id="page-top" class="jobs-page">
    <section class="jobs-hero">
      <div class="jobs-container">
        <p class="jobs-eyebrow">AI+一人公司 · 就业市场观察</p>
        <h1>AI 对中国就业市场的冲击</h1>
        <p class="jobs-hero-copy">
          这是一张交互式职业图谱：把中国 147 个职业的就业人数、薪资水平和 AI 暴露分数放到同一个页面里，帮助你更快看懂哪些岗位更容易被 AI 重构，哪些行业仍然更依赖线下执行和复杂协作。
        </p>

        <div class="stats-grid jobs-stats-grid">
          <div class="stat-item">
            <span class="stat-number">147</span>
            <span class="stat-label">职业样本</span>
            <span class="stat-desc">覆盖中国主要就业岗位类型。</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">14</span>
            <span class="stat-label">职业大类</span>
            <span class="stat-desc">从信息技术到零售餐饮都有对比。</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">3种</span>
            <span class="stat-label">面积模式</span>
            <span class="stat-desc">可切换看就业、薪资总额和产值贡献。</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">交互式</span>
            <span class="stat-label">图谱体验</span>
            <span class="stat-desc">支持模式切换、悬浮查看和移动端点击详情。</span>
          </div>
        </div>
      </div>
    </section>

    <section class="jobs-container jobs-main">
      <div class="jobs-intro-card">
        <p class="jobs-lead">
          如果你在做个人业务、内容变现、职业转型，最有价值的不是“AI 会不会来”，而是“AI 先冲击哪里、冲击多大、我该往哪里靠”。
          这张图给你的不是结论，而是一个更快建立判断框架的入口。
        </p>
        <div class="jobs-actions">
          <a href="#jobs-chart" class="jobs-link-button">开始查看图谱</a>
          <a href="/1-start/" class="jobs-link-button">开始学习</a>
        </div>
      </div>

      <div id="jobs-chart" class="jobs-layout">
        <aside class="jobs-sidebar">
          <h2 class="jobs-panel-title">查看方式</h2>
          <p class="subtitle" id="jobsSubtitle">
            147 个职业 · 面积 = 就业人数 · 颜色 = AI 暴露程度
            <br>
            数据来源：
            <a href="https://www.stats.gov.cn/" target="_blank" rel="noreferrer">国家统计局</a>
            等公开资料，暴露分数由大模型辅助评分
          </p>

          <div class="stat-section">
            <h3>面积表示</h3>
            <div class="mode-toggle" id="modeToggle">
              <button data-mode="employment" class="active">就业人数</button>
              <button data-mode="wages">薪资总额（人数 × 年薪）</button>
              <button data-mode="gdp">行业产值（GDP 贡献）</button>
            </div>
          </div>

          <div class="stat-section">
            <h3 id="statTotalLabel">总就业人数</h3>
            <div class="stat-big" id="statTotalJobs">-</div>
          </div>

          <div class="stat-section">
            <h3>加权平均暴露分数</h3>
            <div class="stat-big" id="statAvgExposure">-</div>
            <div class="stat-label-copy">按当前面积模式加权，0-10 分</div>
          </div>

          <div class="stat-section">
            <h3 id="histLabel">就业人数按暴露分数分布</h3>
            <div class="histogram" id="histogram"></div>
            <div class="hist-labels"><span>0</span><span>5</span><span>10</span></div>
          </div>

          <div class="stat-section">
            <h3>分级概览</h3>
            <div class="tier-bar" id="tierBar"></div>
          </div>

          <div class="stat-section">
            <h3>按薪资水平</h3>
            <div class="hbar-chart" id="payChart"></div>
          </div>

          <div class="stat-section">
            <h3>按学历水平</h3>
            <div class="hbar-chart" id="eduChart"></div>
          </div>

          <div class="stat-section">
            <h3 id="highExposureLabel">高暴露总量</h3>
            <div class="stat-big" id="statHighExposure">-</div>
            <div class="stat-label-copy">暴露分数大于等于 7 的职业</div>
          </div>
        </aside>

        <section class="jobs-canvas-panel">
          <div class="jobs-canvas-head">
            <div>
              <h2 class="jobs-panel-title">职业图谱</h2>
              <p class="jobs-panel-copy">
                矩形越大，代表对应模式下的占比越高；颜色越偏红，代表该职业更容易被 AI 直接替代或被强力增效。
              </p>
            </div>
            <div class="gradient-legend">
              <span>低</span>
              <canvas id="gradientLegend" width="80" height="8"></canvas>
              <span>高</span>
            </div>
          </div>

          <div class="jobs-canvas-shell" id="canvasShell">
            <canvas id="canvas"></canvas>
            <div id="tooltip">
              <div class="tt-title"></div>
              <div class="tt-exposure"></div>
              <div class="tt-stats"></div>
              <div class="tt-rationale"></div>
            </div>
            <div class="jobs-overlay" id="loadingOverlay">正在加载图谱数据...</div>
            <div class="jobs-overlay jobs-overlay-error" id="errorOverlay" hidden>
              <div>职业图谱数据加载失败，请稍后重试。</div>
              <button type="button" class="jobs-retry-button" id="retryLoadBtn">重新加载数据</button>
            </div>
          </div>

          <p class="jobs-mobile-hint">桌面端可把鼠标移到矩形上查看详情；手机端请点击矩形查看职业说明。</p>

          <div class="jobs-detail-card" id="mobileDetail" hidden>
            <h3 id="detailTitle">职业详情</h3>
            <p class="jobs-detail-score" id="detailScore">请点击图中的职业矩形。</p>
            <div class="jobs-detail-grid" id="detailGrid"></div>
            <p class="jobs-detail-rationale" id="detailRationale"></p>
          </div>
        </section>
      </div>

      <div class="jobs-reading-card">
        <h2>怎么读这张图</h2>
        <ul>
          <li>看面积：先切换到“就业人数”，你能快速看到哪些职业虽然不体面、但人数巨大，因此更值得关注结构性变化。</li>
          <li>看颜色：颜色越红，说明职业的核心产出越容易数字化、标准化，更容易被大模型直接替代或大幅压缩人力。</li>
          <li>看模式切换：切到“薪资总额”和“行业产值”后，可以避免只盯着岗位数量，而忽略高价值岗位和行业利润分布。</li>
          <li>看详情理由：每个职业都带一段简短解释，帮助你理解“为什么这个岗位会被判成高暴露或低暴露”。</li>
        </ul>
      </div>

      <div class="jobs-source-card">
        <h2>说明与来源</h2>
        <p>
          这个专题页基于开源项目
          <a href="https://github.com/MistySun19/ai-jobs-cn" target="_blank" rel="noreferrer">ai-jobs-cn</a>
          整合而来，本站把数据和脚本都放到了本地静态文件里，并补上了移动端适配与错误提示。
        </p>
        <ul>
          <li>就业人数、薪资、学历要求等数据参考国家统计局及公开行业资料。</li>
          <li>AI 暴露分数是基于职业工作内容，由大模型辅助生成的估计值，不代表确定结论。</li>
          <li>这个页面适合做“方向判断”和“讨论起点”，不适合当成严格的职业建议或投资建议。</li>
        </ul>
      </div>

      <div class="final-cta jobs-footer-card">
        <p class="cta-highlight">
          如果你是做一人公司、内容创业或自由职业，这张图最值得你关心的不是“哪个岗位最危险”，而是“哪些能力更不容易被压价，哪些环节更值得你用 AI 放大”。
        </p>
        <p class="jobs-disclaimer">
          免责声明：本页仅供学习和讨论使用，AI 暴露分数存在模型偏差与口径误差，请结合真实行业经验判断。
        </p>
        <div class="jobs-actions">
          <a href="/1-start/" class="cta-button">开始学习</a>
          <a href="/4-scenarios/" class="jobs-link-button">去看场景实战</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted } from 'vue'

const INDUSTRY_GDP = {
  '农林牧渔业': 94463,
  '采矿业': 28000,
  '制造业': 330028,
  '电力热力燃气及水生产和供应业': 41075,
  '建筑业': 85691,
  '批发和零售业': 123072,
  '交通运输仓储和邮政业': 57820,
  '住宿和餐饮业': 21024,
  '信息传输软件和信息技术服务业': 55194,
  '金融业': 100677,
  '房地产业': 73723,
  '租赁和商务服务业': 44347,
  '科学研究和技术服务业': 37000,
  '水利环境和公共设施管理业': 9000,
  '居民服务修理和其他服务业': 22000,
  '教育': 42000,
  '卫生和社会工作': 30000,
  '文化体育和娱乐业': 14000,
  '公共管理社会保障和社会组织': 51469
}

let cleanup = () => {}

function mountChart() {
  const canvas = document.getElementById('canvas')
  const canvasShell = document.getElementById('canvasShell')
  const loadingOverlay = document.getElementById('loadingOverlay')
  const errorOverlay = document.getElementById('errorOverlay')
  const tooltip = document.getElementById('tooltip')
  const detailCard = document.getElementById('mobileDetail')
  const retryLoadBtn = document.getElementById('retryLoadBtn')
  const modeToggle = document.getElementById('modeToggle')
  const subtitle = document.getElementById('jobsSubtitle')
  const gradientLegend = document.getElementById('gradientLegend')

  if (!canvas || !canvasShell || !loadingOverlay || !errorOverlay || !tooltip || !detailCard || !retryLoadBtn || !modeToggle || !subtitle || !gradientLegend) {
    return () => {}
  }

  const ctx = canvas.getContext('2d')
  const gctx = gradientLegend.getContext('2d')

  if (!ctx || !gctx) {
    return () => {}
  }

  let currentMode = 'employment'
  let data = []
  let rects = []
  let hovered = null
  let selected = null
  let industryEmpCache = {}
  let debugPhase = 'init'
  let dpr = window.devicePixelRatio || 1

  const cleanupFns = []
  const MARGIN = 12
  const GAP = 1.5

  function addListener(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options)
    cleanupFns.push(() => target.removeEventListener(eventName, handler, options))
  }

  function isMobileMode() {
    return window.innerWidth <= 960 || window.matchMedia('(pointer: coarse)').matches
  }

  function exposureColor(score) {
    if (score == null) return [128, 128, 128]
    const t = Math.max(0, Math.min(10, score)) / 10

    if (t < 0.5) {
      const s1 = t / 0.5
      return [
        Math.round(50 + s1 * 180),
        Math.round(160 - s1 * 10),
        Math.round(50 - s1 * 20)
      ]
    }

    const s2 = (t - 0.5) / 0.5
    return [
      Math.round(230 + s2 * 25),
      Math.round(150 - s2 * 110),
      Math.round(30 - s2 * 10)
    ]
  }

  function exposureColorCSS(score, alpha) {
    const [r, g, b] = exposureColor(score)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  function worstAspect(row, rowSum, side, totalArea, availableExtent) {
    const rowExtent = availableExtent * (rowSum / totalArea)
    if (rowExtent === 0) return Infinity

    let worst = 0
    row.forEach((item) => {
      const itemLen = side * (item.value / rowSum)
      if (itemLen === 0) return
      const aspect = Math.max(rowExtent / itemLen, itemLen / rowExtent)
      if (aspect > worst) worst = aspect
    })
    return worst
  }

  function squarify(items, x, y, w, h) {
    if (!items.length) return []
    if (items.length === 1) return [{ ...items[0], rx: x, ry: y, rw: w, rh: h }]

    const total = items.reduce((sum, item) => sum + item.value, 0)
    if (!total) return []

    const results = []
    let remaining = items.slice()
    let cx = x
    let cy = y
    let cw = w
    let ch = h

    while (remaining.length) {
      const remTotal = remaining.reduce((sum, item) => sum + item.value, 0)
      const vertical = cw >= ch
      const side = vertical ? ch : cw
      let row = [remaining[0]]
      let rowSum = remaining[0].value

      for (let index = 1; index < remaining.length; index += 1) {
        const candidate = row.concat([remaining[index]])
        const candidateSum = rowSum + remaining[index].value

        if (
          worstAspect(candidate, candidateSum, side, remTotal, vertical ? cw : ch) <
          worstAspect(row, rowSum, side, remTotal, vertical ? cw : ch)
        ) {
          row = candidate
          rowSum = candidateSum
        } else {
          break
        }
      }

      const rowThickness = (vertical ? cw : ch) * (rowSum / remTotal)
      let offset = 0

      row.forEach((item) => {
        const itemLength = side * (item.value / rowSum)
        if (vertical) {
          results.push({ ...item, rx: cx, ry: cy + offset, rw: rowThickness, rh: itemLength })
        } else {
          results.push({ ...item, rx: cx + offset, ry: cy, rw: itemLength, rh: rowThickness })
        }
        offset += itemLength
      })

      if (vertical) {
        cx += rowThickness
        cw -= rowThickness
      } else {
        cy += rowThickness
        ch -= rowThickness
      }

      remaining = remaining.slice(row.length)
    }

    return results
  }

  function buildIndustryCache() {
    industryEmpCache = {}
    data.forEach((item) => {
      industryEmpCache[item.industry] = (industryEmpCache[item.industry] || 0) + item.employment
    })
  }

  function getValue(item) {
    if (currentMode === 'employment') return item.employment || 1
    if (currentMode === 'wages') return (item.employment || 0) * (item.salary || 0)
    if (currentMode === 'gdp') {
      const industryGDP = INDUSTRY_GDP[item.industry] || 0
      const industryEmployment = industryEmpCache[item.industry] || 1
      return industryGDP * ((item.employment || 0) / industryEmployment)
    }
    return item.employment || 1
  }

  function formatWan(value) {
    if (value == null) return '-'
    if (value >= 10000) return `${(value / 10000).toFixed(1)}亿`
    return `${Math.round(value).toLocaleString('zh-CN')}万`
  }

  function formatYi(value) {
    if (value == null) return '-'
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万亿`
    if (value >= 1) return `${Math.round(value).toLocaleString('zh-CN')}亿`
    return `${Math.round(value * 10000).toLocaleString('zh-CN')}万`
  }

  function formatWanYi(value) {
    return `${(value / 10000).toFixed(1)}万亿元`
  }

  function setCanvasSize() {
    const rect = canvasShell.getBoundingClientRect()
    const width = Math.max(320, rect.width)
    const height = Math.max(420, rect.height)
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    return { width, height }
  }

  function layout() {
    const size = setCanvasSize()
    const tx = MARGIN
    const ty = MARGIN
    const tw = size.width - MARGIN * 2
    const th = size.height - MARGIN * 2
    const byCategory = {}

    data.forEach((item) => {
      if (!byCategory[item.category]) byCategory[item.category] = []
      byCategory[item.category].push(item)
    })

    const categories = Object.keys(byCategory)
      .map((category) => {
        const items = byCategory[category].slice().sort((a, b) => getValue(b) - getValue(a))
        return {
          cat: category,
          items,
          value: items.reduce((sum, item) => sum + getValue(item), 0)
        }
      })
      .sort((a, b) => b.value - a.value)

    const catRects = squarify(categories, tx, ty, tw, th)
    rects = []

    catRects.forEach((catRect) => {
      const items = catRect.items.map((item) => ({ ...item, value: getValue(item) }))
      const innerRects = squarify(
        items,
        catRect.rx + GAP,
        catRect.ry + GAP,
        catRect.rw - GAP * 2,
        catRect.rh - GAP * 2
      )
      innerRects.forEach((rect) => {
        rects.push(rect)
      })
    })
  }

  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#0a0a0f'
    ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)

    rects.forEach((rect) => {
      const isHovered = rect === hovered
      const isSelected = rect === selected
      const gap = GAP / 2
      const rx = rect.rx + gap
      const ry = rect.ry + gap
      const rw = rect.rw - gap * 2
      const rh = rect.rh - gap * 2

      if (rw <= 0 || rh <= 0) return

      ctx.fillStyle = exposureColorCSS(rect.ai_score, isHovered || isSelected ? 0.84 : 0.54)
      ctx.fillRect(rx, ry, rw, rh)

      if (isHovered || isSelected) {
        ctx.strokeStyle = isSelected ? '#10b981' : '#ffffff'
        ctx.lineWidth = 2
        ctx.strokeRect(rx, ry, rw, rh)
      }

      if (rw > 54 && rh > 20) {
        ctx.save()
        ctx.beginPath()
        ctx.rect(rx + 4, ry + 2, rw - 8, rh - 4)
        ctx.clip()

        const fontSize = Math.min(13, Math.max(9, Math.min(rw / 10, rh / 3)))
        ctx.font = `500 ${fontSize}px -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif`
        ctx.fillStyle = isHovered || isSelected ? '#ffffff' : 'rgba(255,255,255,0.9)'
        ctx.textBaseline = 'top'
        ctx.fillText(rect.name, rx + 5, ry + 4)

        if (rh > 36 && rw > 64) {
          let info = `${rect.ai_score}/10`
          const currentValue = getValue(rect)
          info += currentMode === 'employment' ? ` · ${formatWan(rect.employment)}` : ` · ${formatYi(currentValue)}`
          ctx.font = `400 ${Math.max(8, fontSize - 2)}px -apple-system, "PingFang SC", sans-serif`
          ctx.fillStyle = 'rgba(255,255,255,0.58)'
          ctx.fillText(info, rx + 5, ry + 4 + fontSize + 2)
        }

        ctx.restore()
      }
    })
  }

  function hitTest(clientX, clientY) {
    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    for (let index = rects.length - 1; index >= 0; index -= 1) {
      const item = rects[index]
      if (x >= item.rx && x < item.rx + item.rw && y >= item.ry && y < item.ry + item.rh) {
        return item
      }
    }

    return null
  }

  function buildStatsGrid(item) {
    const wageTotal = (item.employment || 0) * (item.salary || 0)
    const gdpShare = currentMode === 'gdp' ? `${formatYi(getValue(item))}元` : '仅在产值模式展示'

    return [
      { label: '就业人数', value: formatWan(item.employment) },
      { label: '年薪', value: `${item.salary}万元` },
      { label: '薪资总额', value: `${formatYi(wageTotal)}元` },
      { label: '行业产值贡献', value: gdpShare },
      { label: '就业前景', value: item.growth },
      { label: '学历要求', value: item.education }
    ]
  }

  function showTooltip(item, clientX, clientY) {
    if (isMobileMode()) return

    tooltip.querySelector('.tt-title').textContent = item.name
    const score = item.ai_score
    const color = exposureColorCSS(score, 1)
    tooltip.querySelector('.tt-exposure').innerHTML =
      `<span style="color:${color};font-weight:600;">AI 暴露评分：${score}/10</span>` +
      '<div style="margin-top:4px;height:4px;background:rgba(255,255,255,0.08);border-radius:999px;">' +
      `<div style="height:100%;width:${score * 10}%;background:${color};border-radius:999px;"></div>` +
      '</div>'

    tooltip.querySelector('.tt-stats').innerHTML = buildStatsGrid(item)
      .map((row) => `<span class="label">${row.label}</span><span class="value">${row.value}</span>`)
      .join('')

    tooltip.querySelector('.tt-rationale').textContent = item.rationale || ''

    const pad = 16
    let tx = clientX + pad
    let ty = clientY - pad

    if (tx + 340 > window.innerWidth) tx = clientX - 340 - pad
    if (ty < 10) ty = clientY + pad
    if (ty + 240 > window.innerHeight) ty = window.innerHeight - 250

    tooltip.style.left = `${tx}px`
    tooltip.style.top = `${ty}px`
    tooltip.classList.add('visible')
  }

  function hideTooltip() {
    tooltip.classList.remove('visible')
  }

  function showDetailCard(item) {
    if (!item) {
      detailCard.hidden = true
      return
    }

    detailCard.hidden = false
    document.getElementById('detailTitle').textContent = item.name
    document.getElementById('detailScore').innerHTML =
      `<span style="color:${exposureColorCSS(item.ai_score, 1)};font-weight:600;">AI 暴露评分：${item.ai_score}/10</span>`
    document.getElementById('detailGrid').innerHTML = buildStatsGrid(item)
      .map((row) => `<div><span>${row.label}</span><strong>${row.value}</strong></div>`)
      .join('')
    document.getElementById('detailRationale').textContent = item.rationale || ''
  }

  function drawGradientLegend() {
    for (let x = 0; x < 80; x += 1) {
      gctx.fillStyle = exposureColorCSS((x / 79) * 10, 1)
      gctx.fillRect(x, 0, 1, 8)
    }
  }

  function computeStats() {
    const modeLabels = {
      employment: {
        total: '总就业人数',
        hist: '就业人数按暴露分数分布',
        high: '高暴露就业人数'
      },
      wages: {
        total: '薪资总额',
        hist: '薪资总额按暴露分数分布',
        high: '高暴露薪资总额'
      },
      gdp: {
        total: 'GDP 总贡献',
        hist: 'GDP 贡献按暴露分数分布',
        high: '高暴露 GDP 贡献'
      }
    }

    document.getElementById('statTotalLabel').textContent = modeLabels[currentMode].total
    document.getElementById('histLabel').textContent = modeLabels[currentMode].hist
    document.getElementById('highExposureLabel').textContent = modeLabels[currentMode].high

    const areaLabel =
      currentMode === 'employment' ? '就业人数' : currentMode === 'wages' ? '薪资总额' : '行业产值'
    subtitle.innerHTML =
      `147 个职业 · 面积 = ${areaLabel} · 颜色 = AI 暴露程度<br>` +
      '数据来源：<a href="https://www.stats.gov.cn/" target="_blank" rel="noreferrer">国家统计局</a> 等公开资料，暴露分数由大模型辅助评分'

    const totalValue = data.reduce((sum, item) => sum + getValue(item), 0)
    document.getElementById('statTotalJobs').textContent =
      currentMode === 'employment' ? formatWan(totalValue) : formatWanYi(totalValue)

    const weighted = data.reduce(
      (sum, item) => {
        const value = getValue(item)
        if (item.ai_score == null) return sum
        sum.score += item.ai_score * value
        sum.count += value
        return sum
      },
      { score: 0, count: 0 }
    )

    const weightedAverage = weighted.count > 0 ? weighted.score / weighted.count : 0
    document.getElementById('statAvgExposure').innerHTML =
      `<span style="color:${exposureColorCSS(weightedAverage, 1)}">${weightedAverage.toFixed(1)}</span>`

    const histogram = new Array(11).fill(0)
    data.forEach((item) => {
      if (item.ai_score != null) histogram[item.ai_score] += getValue(item)
    })

    const maxHist = Math.max(...histogram)
    document.getElementById('histogram').innerHTML = histogram
      .map((count, index) => {
        const height = maxHist > 0 ? (count / maxHist) * 100 : 0
        const label = currentMode === 'employment' ? formatWan(count) : formatYi(count)
        return `<div class="bar" style="height:${Math.max(2, height)}%;background:${exposureColorCSS(index, 0.74)}" title="${index}: ${label}"></div>`
      })
      .join('')

    const tiers = [
      { name: '极低 (0-1)', range: [0, 1], color: exposureColorCSS(0.5, 1) },
      { name: '低 (2-3)', range: [2, 3], color: exposureColorCSS(2.5, 1) },
      { name: '中等 (4-5)', range: [4, 5], color: exposureColorCSS(4.5, 1) },
      { name: '高 (6-7)', range: [6, 7], color: exposureColorCSS(6.5, 1) },
      { name: '极高 (8-10)', range: [8, 10], color: exposureColorCSS(9, 1) }
    ]

    document.getElementById('tierBar').innerHTML = tiers
      .map((tier) => {
        let total = 0
        data.forEach((item) => {
          if (item.ai_score >= tier.range[0] && item.ai_score <= tier.range[1]) total += getValue(item)
        })
        const pct = totalValue > 0 ? (total / totalValue) * 100 : 0
        const label = currentMode === 'employment' ? formatWan(total) : formatYi(total)
        return (
          '<div class="tier-row">' +
          `<div class="tier-color" style="background:${tier.color}"></div>` +
          `<span class="tier-name">${tier.name}</span>` +
          `<span class="tier-jobs">${label}</span>` +
          `<span class="tier-pct">${pct.toFixed(0)}%</span>` +
          '</div>'
        )
      })
      .join('')

    const payBands = [
      { label: '<5万', min: 0, max: 5 },
      { label: '5-10万', min: 5, max: 10 },
      { label: '10-15万', min: 10, max: 15 },
      { label: '15-25万', min: 15, max: 25 },
      { label: '>25万', min: 25, max: Infinity }
    ]

    document.getElementById('payChart').innerHTML = payBands
      .map((band) => {
        let weightedSum = 0
        let weightedCount = 0
        data.forEach((item) => {
          if (item.salary >= band.min && item.salary < band.max) {
            const value = getValue(item)
            weightedSum += item.ai_score * value
            weightedCount += value
          }
        })
        const avg = weightedCount > 0 ? weightedSum / weightedCount : 0
        return (
          '<div class="hbar-row">' +
          `<span class="hbar-label">${band.label}</span>` +
          `<div class="hbar-track"><div class="hbar-fill" style="width:${(avg / 10) * 100}%;background:${exposureColorCSS(avg, 0.82)}"></div></div>` +
          `<span class="hbar-val">${avg.toFixed(1)}</span>` +
          '</div>'
        )
      })
      .join('')

    const eduGroups = [
      { label: '初中及以下', match: ['初中及以下'] },
      { label: '高中/中专', match: ['高中中专'] },
      { label: '大专', match: ['大专'] },
      { label: '本科', match: ['本科'] },
      { label: '硕士', match: ['硕士'] },
      { label: '博士', match: ['博士'] }
    ]

    document.getElementById('eduChart').innerHTML = eduGroups
      .map((group) => {
        let weightedSum = 0
        let weightedCount = 0
        data.forEach((item) => {
          if (group.match.includes(item.education)) {
            const value = getValue(item)
            weightedSum += item.ai_score * value
            weightedCount += value
          }
        })

        if (!weightedCount) return ''

        const avg = weightedSum / weightedCount
        return (
          '<div class="hbar-row">' +
          `<span class="hbar-label">${group.label}</span>` +
          `<div class="hbar-track"><div class="hbar-fill" style="width:${(avg / 10) * 100}%;background:${exposureColorCSS(avg, 0.82)}"></div></div>` +
          `<span class="hbar-val">${avg.toFixed(1)}</span>` +
          '</div>'
        )
      })
      .join('')

    let highExposureTotal = 0
    data.forEach((item) => {
      if (item.ai_score >= 7) highExposureTotal += getValue(item)
    })

    document.getElementById('statHighExposure').textContent =
      currentMode === 'employment' ? formatWan(highExposureTotal) : formatWanYi(highExposureTotal)
  }

  function resize() {
    dpr = window.devicePixelRatio || 1
    if (!data.length) return
    layout()
    draw()
    if (selected && isMobileMode()) showDetailCard(selected)
    if (!isMobileMode()) detailCard.hidden = true
  }

  function setLoadingState(isLoading) {
    loadingOverlay.hidden = !isLoading
    if (isLoading) {
      errorOverlay.hidden = true
      loadingOverlay.textContent = '正在加载图谱数据...'
    }
  }

  function showError(message) {
    let text = '职业图谱数据加载失败，请稍后重试。'
    if (message) text += `（${message}）`
    errorOverlay.firstElementChild.textContent = text
    loadingOverlay.hidden = true
    errorOverlay.hidden = false
  }

  function renderChart() {
    debugPhase = 'layout'
    layout()
    debugPhase = 'draw'
    draw()
    debugPhase = 'done'
    loadingOverlay.hidden = true
    errorOverlay.hidden = true
  }

  function loadData(attempt) {
    debugPhase = 'fetch'
    setLoadingState(true)
    fetch('/ai-jobs/data.json', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      })
      .then((payload) => {
        if (!Array.isArray(payload) || !payload.length) {
          throw new Error('empty data')
        }
        data = payload
        debugPhase = 'buildIndustryCache'
        buildIndustryCache()
        debugPhase = 'computeStats'
        computeStats()
        renderChart()
      })
      .catch((error) => {
        window.__aiJobsLastError = {
          phase: debugPhase,
          name: error?.name,
          message: error?.message,
          stack: error?.stack
        }

        if (attempt < 2) {
          loadingOverlay.textContent = '首次加载失败，正在自动重试...'
          window.setTimeout(() => {
            loadData(attempt + 1)
          }, 600)
          return
        }

        let details = debugPhase
        if (error?.message || error?.name) {
          details += `: ${error.message || error.name}`
        }
        showError(details)
      })
  }

  addListener(canvas, 'mousemove', (event) => {
    if (isMobileMode()) return
    const hit = hitTest(event.clientX, event.clientY)
    if (hit !== hovered) {
      hovered = hit
      draw()
    }
    if (hovered) {
      showTooltip(hovered, event.clientX, event.clientY)
      canvas.style.cursor = 'pointer'
    } else {
      hideTooltip()
      canvas.style.cursor = 'default'
    }
  })

  addListener(canvas, 'mouseleave', () => {
    hovered = null
    hideTooltip()
    draw()
  })

  addListener(canvas, 'click', (event) => {
    const hit = hitTest(event.clientX, event.clientY)
    selected = hit
    draw()
    if (isMobileMode()) {
      showDetailCard(hit)
    } else if (hit) {
      showTooltip(hit, event.clientX, event.clientY)
    } else {
      hideTooltip()
    }
  })

  addListener(modeToggle, 'click', (event) => {
    const button = event.target.closest('button')
    if (!button) return

    currentMode = button.dataset.mode
    modeToggle.querySelectorAll('button').forEach((node) => {
      node.classList.remove('active')
    })
    button.classList.add('active')

    selected = null
    hovered = null
    hideTooltip()
    showDetailCard(null)
    computeStats()
    layout()
    draw()
  })

  addListener(retryLoadBtn, 'click', () => {
    loadData(0)
  })

  addListener(window, 'resize', resize)

  drawGradientLegend()
  loadData(0)

  return () => {
    cleanupFns.forEach((fn) => fn())
  }
}

onMounted(async () => {
  await nextTick()
  cleanup = mountChart()
})

onBeforeUnmount(() => {
  cleanup()
})
</script>

<style>
.jobs-page {
  min-height: 100vh;
  padding: 48px 0 72px;
  background:
    radial-gradient(circle at top, rgba(16, 185, 129, 0.16), transparent 32%),
    linear-gradient(180deg, #07110e 0%, #08110f 18%, #f3f5f7 18%, #f3f5f7 100%);
  color: #e5e7eb;
}

.jobs-container {
  width: min(1180px, calc(100vw - 32px));
  margin: 0 auto;
}

.jobs-hero {
  margin-bottom: 28px;
}

.jobs-eyebrow {
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.68);
}

.jobs-page h1,
.jobs-page h2,
.jobs-page h3 {
  margin-top: 0;
  letter-spacing: -0.03em;
}

.jobs-page h1 {
  margin-bottom: 18px;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 0.95;
  color: #ffffff;
}

.jobs-hero-copy {
  max-width: 960px;
  margin: 0;
  font-size: 1.06rem;
  line-height: 1.85;
  color: rgba(229, 231, 235, 0.82);
}

.jobs-stats-grid,
.jobs-page .stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.jobs-page .stat-item,
.jobs-intro-card,
.jobs-sidebar,
.jobs-canvas-panel,
.jobs-detail-card,
.jobs-reading-card,
.jobs-source-card,
.jobs-footer-card {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(10, 10, 15, 0.98), rgba(18, 18, 26, 0.98));
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.18);
}

.jobs-page .stat-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 220px;
  padding: 28px 24px;
}

.jobs-page .stat-number {
  font-size: clamp(2.2rem, 4vw, 4rem);
  font-weight: 800;
  line-height: 0.92;
  color: #10b981;
}

.jobs-page .stat-label {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
}

.jobs-page .stat-desc {
  color: rgba(224, 224, 232, 0.74);
  font-size: 1rem;
  line-height: 1.7;
}

.jobs-main {
  color: #0f172a;
}

.jobs-intro-card,
.jobs-sidebar,
.jobs-canvas-panel,
.jobs-detail-card,
.jobs-reading-card,
.jobs-source-card,
.jobs-footer-card {
  color: #e0e0e8;
}

.jobs-intro-card {
  padding: 24px 26px;
  margin-bottom: 24px;
}

.jobs-lead {
  margin: 0;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(224, 224, 232, 0.9);
}

.jobs-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

.jobs-link-button,
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.jobs-link-button {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
}

.jobs-link-button:hover {
  transform: translateY(-1px);
  border-color: rgba(16, 185, 129, 0.5);
  background: rgba(16, 185, 129, 0.1);
}

.cta-button {
  border: 1px solid rgba(16, 185, 129, 0.4);
  background: #10b981;
  color: #04110c;
}

.cta-button:hover {
  transform: translateY(-1px);
  background: #34d399;
  border-color: rgba(52, 211, 153, 0.7);
}

.jobs-layout {
  display: grid;
  grid-template-columns: minmax(280px, 320px) minmax(0, 1fr);
  gap: 22px;
  align-items: start;
  scroll-margin-top: 24px;
}

.jobs-sidebar,
.jobs-canvas-panel,
.jobs-reading-card,
.jobs-source-card,
.jobs-footer-card {
  padding: 18px;
}

.jobs-panel-title {
  margin: 0 0 10px;
  font-size: 16px;
  color: #ffffff;
}

.jobs-panel-copy,
.subtitle,
.jobs-mobile-hint,
.jobs-disclaimer,
.jobs-source-card p,
.stat-label-copy {
  margin: 0;
  color: rgba(224, 224, 232, 0.68);
  font-size: 12px;
  line-height: 1.6;
}

.subtitle a,
.jobs-source-card a {
  color: rgba(224, 224, 232, 0.84);
}

.mode-toggle {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mode-toggle button {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(224, 224, 232, 0.72);
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease;
}

.mode-toggle button:hover,
.mode-toggle button.active {
  color: #ffffff;
  border-color: rgba(16, 185, 129, 0.45);
  background: rgba(16, 185, 129, 0.14);
}

.stat-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 18px;
}

.stat-section h3 {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(224, 224, 232, 0.56);
}

.stat-big {
  font-size: 28px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #ffffff;
}

.histogram {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 54px;
}

.histogram .bar {
  flex: 1;
  min-height: 2px;
  border-radius: 4px 4px 0 0;
}

.hist-labels {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: rgba(224, 224, 232, 0.56);
}

.tier-bar,
.hbar-chart {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tier-row,
.hbar-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
}

.tier-color {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
}

.tier-name {
  flex: 1;
  color: rgba(224, 224, 232, 0.7);
}

.tier-jobs,
.tier-pct,
.hbar-val {
  white-space: nowrap;
  color: #ffffff;
}

.tier-pct {
  width: 34px;
  color: rgba(224, 224, 232, 0.62);
  text-align: right;
}

.hbar-label {
  width: 70px;
  flex-shrink: 0;
  text-align: right;
  color: rgba(224, 224, 232, 0.7);
  font-size: 10px;
}

.hbar-track {
  flex: 1;
  height: 10px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
}

.hbar-fill {
  height: 100%;
  border-radius: 999px;
}

.jobs-canvas-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 14px;
}

.gradient-legend {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: rgba(224, 224, 232, 0.62);
  white-space: nowrap;
}

.gradient-legend canvas {
  display: block;
  border-radius: 999px;
}

.jobs-canvas-shell {
  position: relative;
  min-height: min(74vh, 760px);
  border-radius: 18px;
  overflow: hidden;
  background: #0a0a0f;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.jobs-canvas-shell canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.jobs-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  color: rgba(224, 224, 232, 0.78);
  background: rgba(10, 10, 15, 0.72);
  backdrop-filter: blur(6px);
}

.jobs-overlay[hidden],
.jobs-detail-card[hidden] {
  display: none !important;
}

.jobs-overlay-error {
  color: #ffffff;
  background: rgba(127, 29, 29, 0.72);
}

.jobs-retry-button {
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border-radius: 999px;
  padding: 8px 16px;
  font: inherit;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.jobs-retry-button:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.28);
}

#tooltip {
  position: fixed;
  pointer-events: none;
  background: #12121a;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 12px 14px;
  font-size: 13px;
  line-height: 1.5;
  max-width: 340px;
  opacity: 0;
  transition: opacity 0.12s ease;
  z-index: 40;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.46);
}

#tooltip.visible {
  opacity: 1;
}

#tooltip .tt-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
  color: #ffffff;
}

#tooltip .tt-exposure {
  font-size: 12px;
  margin-bottom: 8px;
}

#tooltip .tt-stats {
  display: grid;
  grid-template-columns: auto auto;
  gap: 4px 12px;
  font-size: 12px;
}

#tooltip .tt-stats .label {
  color: rgba(224, 224, 232, 0.62);
}

#tooltip .tt-stats .value {
  color: #ffffff;
  text-align: right;
}

#tooltip .tt-rationale {
  font-size: 11px;
  color: rgba(224, 224, 232, 0.68);
  margin-top: 8px;
  line-height: 1.55;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 8px;
}

.jobs-mobile-hint {
  margin-top: 12px;
}

.jobs-detail-card {
  margin-top: 14px;
  padding: 16px;
}

.jobs-detail-card h3 {
  margin: 0 0 8px;
  color: #ffffff;
}

.jobs-detail-score {
  margin: 0 0 10px;
  font-size: 13px;
}

.jobs-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 14px;
  font-size: 12px;
}

.jobs-detail-grid span {
  display: block;
  color: rgba(224, 224, 232, 0.62);
}

.jobs-detail-grid strong {
  display: block;
  margin-top: 2px;
  color: #ffffff;
  font-size: 13px;
}

.jobs-detail-rationale {
  margin: 12px 0 0;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(224, 224, 232, 0.76);
  font-size: 13px;
  line-height: 1.7;
}

.jobs-reading-card,
.jobs-source-card,
.jobs-footer-card {
  margin-top: 18px;
  padding: 20px 22px;
}

.jobs-reading-card h2,
.jobs-source-card h2 {
  margin-bottom: 12px;
  color: #ffffff;
  font-size: 20px;
}

.jobs-reading-card ul,
.jobs-source-card ul {
  margin: 12px 0 0;
  padding-left: 18px;
}

.jobs-reading-card li,
.jobs-source-card li {
  margin: 8px 0;
  line-height: 1.7;
  color: rgba(224, 224, 232, 0.84);
}

.cta-highlight {
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.8;
}

.jobs-disclaimer {
  margin-top: 10px;
}

@media (max-width: 960px) {
  .jobs-page {
    padding-top: 36px;
  }

  .jobs-stats-grid,
  .jobs-page .stats-grid,
  .jobs-layout {
    grid-template-columns: 1fr;
  }

  .jobs-canvas-head {
    flex-direction: column;
  }

  .jobs-canvas-shell {
    min-height: 500px;
  }

  #tooltip {
    display: none !important;
  }
}

@media (max-width: 640px) {
  .jobs-container {
    width: min(100vw - 20px, 100%);
  }

  .jobs-page .stat-item,
  .jobs-intro-card,
  .jobs-sidebar,
  .jobs-canvas-panel,
  .jobs-detail-card,
  .jobs-reading-card,
  .jobs-source-card,
  .jobs-footer-card {
    border-radius: 18px;
  }

  .jobs-page .stat-item,
  .jobs-intro-card,
  .jobs-sidebar,
  .jobs-canvas-panel,
  .jobs-reading-card,
  .jobs-source-card,
  .jobs-footer-card {
    padding: 16px;
  }

  .jobs-page .stat-item {
    min-height: 180px;
  }

  .jobs-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .jobs-link-button,
  .cta-button {
    width: 100%;
    justify-content: center;
  }

  .jobs-canvas-shell {
    min-height: 420px;
  }

  .jobs-detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
