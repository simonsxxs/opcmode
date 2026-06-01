import { useEffect, useRef, useState, useCallback } from 'react'
import './jobs.css'
import { INDUSTRY_GDP, type Job, type Mode } from '../data/jobs'
import Navbar from '../components/Navbar'

// ==================== 工具函数 ====================

function exposureColor(score: number | null): [number, number, number] {
  if (score == null) return [128, 128, 128]
  const t = Math.max(0, Math.min(10, score)) / 10
  if (t < 0.5) {
    const s1 = t / 0.5
    return [
      Math.round(50 + s1 * 180),
      Math.round(160 - s1 * 10),
      Math.round(50 - s1 * 20),
    ]
  }
  const s2 = (t - 0.5) / 0.5
  return [
    Math.round(230 + s2 * 25),
    Math.round(150 - s2 * 110),
    Math.round(30 - s2 * 10),
  ]
}

function exposureColorCSS(score: number | null, alpha: number): string {
  const [r, g, b] = exposureColor(score)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function formatWan(value: number | null | undefined): string {
  if (value == null) return '-'
  if (value >= 10000) return `${(value / 10000).toFixed(1)}亿`
  return `${Math.round(value).toLocaleString('zh-CN')}万`
}

function formatYi(value: number | null | undefined): string {
  if (value == null) return '-'
  if (value >= 10000) return `${(value / 10000).toFixed(1)}万亿`
  if (value >= 1) return `${Math.round(value).toLocaleString('zh-CN')}亿`
  return `${Math.round(value * 10000).toLocaleString('zh-CN')}万`
}

function formatWanYi(value: number): string {
  return `${(value / 10000).toFixed(1)}万亿元`
}

// ==================== Squarified Treemap ====================

interface RectItem {
  name: string
  category: string
  industry: string
  employment: number
  salary: number
  education: string
  growth: string
  ai_score: number
  rationale: string
  value: number
  rx: number
  ry: number
  rw: number
  rh: number
}

function worstAspect(
  row: { value: number }[],
  rowSum: number,
  side: number,
  totalArea: number,
  availableExtent: number,
): number {
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

function squarify(
  items: { value: number; name: string }[],
  x: number,
  y: number,
  w: number,
  h: number,
): Omit<RectItem, 'category' | 'industry' | 'employment' | 'salary' | 'education' | 'growth' | 'ai_score' | 'rationale'>[] {
  if (!items.length) return []
  if (items.length === 1)
    return [{ name: items[0].name, value: items[0].value, rx: x, ry: y, rw: w, rh: h }]

  const total = items.reduce((s, i) => s + i.value, 0)
  if (!total) return []

  const results: Omit<RectItem, 'category' | 'industry' | 'employment' | 'salary' | 'education' | 'growth' | 'ai_score' | 'rationale'>[] = []
  let remaining = items.slice()
  let cx = x
  let cy = y
  let cw = w
  let ch = h

  while (remaining.length) {
    const remTotal = remaining.reduce((s, i) => s + i.value, 0)
    const vertical = cw >= ch
    const side = vertical ? ch : cw
    let row = [remaining[0]]
    let rowSum = remaining[0].value

    for (let i = 1; i < remaining.length; i++) {
      const candidate = row.concat([remaining[i]])
      const candidateSum = rowSum + remaining[i].value
      if (
        worstAspect(candidate, candidateSum, side, remTotal, vertical ? cw : ch) <
        worstAspect(row, rowSum, side, remTotal, vertical ? cw : ch)
      ) {
        row = candidate
        rowSum = candidateSum
      } else break
    }

    const rowThickness = (vertical ? cw : ch) * (rowSum / remTotal)
    let offset = 0
    row.forEach((item) => {
      const itemLength = side * (item.value / rowSum)
      if (vertical) {
        results.push({ name: item.name, value: item.value, rx: cx, ry: cy + offset, rw: rowThickness, rh: itemLength })
      } else {
        results.push({ name: item.name, value: item.value, rx: cx + offset, ry: cy, rw: itemLength, rh: rowThickness })
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

// ==================== 组件 ====================

const MARGIN = 12
const GAP = 1.5

const MODE_LABELS: Record<Mode, { total: string; hist: string; high: string; area: string }> = {
  employment: { total: '总就业人数', hist: '就业人数按暴露分数分布', high: '高暴露就业人数', area: '就业人数' },
  wages: { total: '薪资总额', hist: '薪资总额按暴露分数分布', high: '高暴露薪资总额', area: '薪资总额' },
  gdp: { total: 'GDP 总贡献', hist: 'GDP 贡献按暴露分数分布', high: '高暴露 GDP 贡献', area: '行业产值' },
}

interface TooltipState {
  item: RectItem
  x: number
  y: number
}

export default function JobsPage() {
  // —— 状态 ——
  const [data, setData] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [mode, setMode] = useState<Mode>('employment')
  const [hovered, setHovered] = useState<RectItem | null>(null)
  const [selected, setSelected] = useState<RectItem | null>(null)
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  // —— Refs ——
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLCanvasElement>(null)
  const rectsRef = useRef<RectItem[]>([])
  const dataRef = useRef<Job[]>([])
  const modeRef = useRef<Mode>('employment')
  const hoveredRef = useRef<RectItem | null>(null)
  const selectedRef = useRef<RectItem | null>(null)
  const dprRef = useRef<number>(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1)
  const industryCacheRef = useRef<Record<string, number>>({})

  // 同步 ref 与 state（用于在 effect 内取最新值）
  useEffect(() => { dataRef.current = data }, [data])
  useEffect(() => { modeRef.current = mode }, [mode])
  useEffect(() => { hoveredRef.current = hovered }, [hovered])
  useEffect(() => { selectedRef.current = selected }, [selected])

  // —— 计算辅助 ——
  const getValue = useCallback((item: Job | RectItem): number => {
    if (modeRef.current === 'employment') return item.employment || 1
    if (modeRef.current === 'wages') return (item.employment || 0) * (item.salary || 0)
    if (modeRef.current === 'gdp') {
      const ind = INDUSTRY_GDP[(item as Job).industry] || 0
      const indEmp = industryCacheRef.current[(item as Job).industry] || 1
      return ind * ((item.employment || 0) / indEmp)
    }
    return item.employment || 1
  }, [])

  const buildIndustryCache = useCallback((d: Job[]) => {
    const cache: Record<string, number> = {}
    d.forEach((it) => { cache[it.industry] = (cache[it.industry] || 0) + it.employment })
    industryCacheRef.current = cache
  }, [])

  // —— Canvas 绘制 ——
  const drawRects = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const dpr = dprRef.current
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#0a0a0f'
    ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr)

    rectsRef.current.forEach((rect) => {
      const isHovered = rect === hoveredRef.current
      const isSelected = rect === selectedRef.current
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
          const cur = getValue(rect)
          info += modeRef.current === 'employment' ? ` · ${formatWan(rect.employment)}` : ` · ${formatYi(cur)}`
          ctx.font = `400 ${Math.max(8, fontSize - 2)}px -apple-system, "PingFang SC", sans-serif`
          ctx.fillStyle = 'rgba(255,255,255,0.58)'
          ctx.fillText(info, rx + 5, ry + 4 + fontSize + 2)
        }
        ctx.restore()
      }
    })
  }, [getValue])

  const drawGradientLegend = useCallback(() => {
    const c = gradientRef.current
    if (!c) return
    const gctx = c.getContext('2d')
    if (!gctx) return
    for (let x = 0; x < 80; x++) {
      gctx.fillStyle = exposureColorCSS((x / 79) * 10, 1)
      gctx.fillRect(x, 0, 1, 8)
    }
  }, [])

  // —— Treemap 布局 ——
  const layout = useCallback(() => {
    const shell = shellRef.current
    const canvas = canvasRef.current
    if (!shell || !canvas) return
    const rect = shell.getBoundingClientRect()
    const width = Math.max(320, rect.width)
    const height = Math.max(420, rect.height)
    const dpr = dprRef.current
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const tx = MARGIN
    const ty = MARGIN
    const tw = width - MARGIN * 2
    const th = height - MARGIN * 2
    const d = dataRef.current

    const byCategory: Record<string, Job[]> = {}
    d.forEach((it) => {
      if (!byCategory[it.category]) byCategory[it.category] = []
      byCategory[it.category].push(it)
    })

    const categories = Object.keys(byCategory)
      .map((cat) => {
        const items = byCategory[cat].slice().sort((a, b) => getValue(b) - getValue(a))
        return {
          cat,
          items,
          value: items.reduce((s, it) => s + getValue(it), 0),
        }
      })
      .sort((a, b) => b.value - a.value)

    const catRects = squarify(
      categories.map((c) => ({ value: c.value, name: c.cat })),
      tx, ty, tw, th,
    )

    const rects: RectItem[] = []
    catRects.forEach((cr, ci) => {
      const items = categories[ci].items.map((it) => ({ ...it, value: getValue(it) }))
      const innerRects = squarify(
        items.map((i) => ({ value: i.value, name: i.name })),
        cr.rx + GAP, cr.ry + GAP, cr.rw - GAP * 2, cr.rh - GAP * 2,
      )
      innerRects.forEach((ir, ii) => {
        const item = items[ii]
        rects.push({
          name: ir.name,
          category: item.category,
          industry: item.industry,
          employment: item.employment,
          salary: item.salary,
          education: item.education,
          growth: item.growth,
          ai_score: item.ai_score,
          rationale: item.rationale,
          value: ir.value,
          rx: ir.rx,
          ry: ir.ry,
          rw: ir.rw,
          rh: ir.rh,
        })
      })
    })
    rectsRef.current = rects
  }, [getValue])

  // —— 命中检测 ——
  const hitTest = useCallback((clientX: number, clientY: number): RectItem | null => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    for (let i = rectsRef.current.length - 1; i >= 0; i--) {
      const item = rectsRef.current[i]
      if (x >= item.rx && x < item.rx + item.rw && y >= item.ry && y < item.ry + item.rh) {
        return item
      }
    }
    return null
  }, [])

  // —— 模式切换 / resize / 重绘 ——
  useEffect(() => {
    layout()
    drawRects()
  }, [mode, data, layout, drawRects])

  useEffect(() => { drawGradientLegend() }, [drawGradientLegend])

  useEffect(() => {
    const onResize = () => {
      dprRef.current = window.devicePixelRatio || 1
      if (!dataRef.current.length) return
      layout()
      drawRects()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [layout, drawRects])

  // —— 加载数据 ——
  const loadData = useCallback((attempt: number) => {
    setLoading(true)
    setErrorMsg(null)
    fetch('/ai-jobs/data.json', { cache: 'no-store' })
      .then((res) => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json() })
      .then((payload: Job[]) => {
        if (!Array.isArray(payload) || !payload.length) throw new Error('empty data')
        buildIndustryCache(payload)
        setData(payload)
        setLoading(false)
      })
      .catch((err) => {
        if (attempt < 2) {
          setTimeout(() => loadData(attempt + 1), 600)
        } else {
          setErrorMsg(err?.message || 'unknown')
          setLoading(false)
        }
      })
  }, [buildIndustryCache])

  useEffect(() => { loadData(0) }, [loadData])

  // —— Canvas 事件 ——
  const isMobile = useCallback(() =>
    typeof window !== 'undefined' && (window.innerWidth <= 960 || window.matchMedia('(pointer: coarse)').matches)
  , [])

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isMobile()) return
    const hit = hitTest(e.clientX, e.clientY)
    if (hit !== hoveredRef.current) {
      hoveredRef.current = hit
      setHovered(hit)
      drawRects()
    }
    if (hit) {
      const pad = 16
      let tx = e.clientX + pad
      let ty = e.clientY - pad
      if (tx + 340 > window.innerWidth) tx = e.clientX - 340 - pad
      if (ty < 10) ty = e.clientY + pad
      if (ty + 240 > window.innerHeight) ty = window.innerHeight - 250
      setTooltip({ item: hit, x: tx, y: ty })
      ;(e.currentTarget as HTMLCanvasElement).style.cursor = 'pointer'
    } else {
      setTooltip(null)
      ;(e.currentTarget as HTMLCanvasElement).style.cursor = 'default'
    }
  }
  const onMouseLeave = () => {
    hoveredRef.current = null
    setHovered(null)
    setTooltip(null)
    drawRects()
  }
  const onClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const hit = hitTest(e.clientX, e.clientY)
    selectedRef.current = hit
    setSelected(hit)
    drawRects()
    if (isMobile()) setSelected(hit)
    else if (hit) {
      const pad = 16
      let tx = e.clientX + pad
      let ty = e.clientY - pad
      if (tx + 340 > window.innerWidth) tx = e.clientX - 340 - pad
      if (ty < 10) ty = e.clientY + pad
      if (ty + 240 > window.innerHeight) ty = window.innerHeight - 250
      setTooltip({ item: hit, x: tx, y: ty })
    } else {
      setTooltip(null)
    }
  }

  const onModeChange = (m: Mode) => {
    setMode(m)
    selectedRef.current = null
    setSelected(null)
    hoveredRef.current = null
    setHovered(null)
    setTooltip(null)
  }

  // —— 计算统计 ——
  const totalValue = data.reduce((s, it) => s + getValue(it), 0)
  const totalDisplay = mode === 'employment' ? formatWan(totalValue) : formatWanYi(totalValue)

  const weighted = data.reduce(
    (s, it) => {
      const v = getValue(it)
      if (it.ai_score == null) return s
      s.score += it.ai_score * v
      s.count += v
      return s
    },
    { score: 0, count: 0 },
  )
  const weightedAvg = weighted.count > 0 ? weighted.score / weighted.count : 0
  const weightedAvgColor = exposureColorCSS(weightedAvg, 1)

  // 直方图
  const histogram = new Array(11).fill(0)
  data.forEach((it) => { if (it.ai_score != null) histogram[it.ai_score] += getValue(it) })
  const maxHist = Math.max(...histogram)

  // 分级
  const tiers = [
    { name: '极低 (0-1)', range: [0, 1] as [number, number], color: exposureColorCSS(0.5, 1) },
    { name: '低 (2-3)', range: [2, 3] as [number, number], color: exposureColorCSS(2.5, 1) },
    { name: '中等 (4-5)', range: [4, 5] as [number, number], color: exposureColorCSS(4.5, 1) },
    { name: '高 (6-7)', range: [6, 7] as [number, number], color: exposureColorCSS(6.5, 1) },
    { name: '极高 (8-10)', range: [8, 10] as [number, number], color: exposureColorCSS(9, 1) },
  ]
  const tierRows = tiers.map((t) => {
    let total = 0
    data.forEach((it) => { if (it.ai_score >= t.range[0] && it.ai_score <= t.range[1]) total += getValue(it) })
    const pct = totalValue > 0 ? (total / totalValue) * 100 : 0
    return { ...t, total, pct, label: mode === 'employment' ? formatWan(total) : formatYi(total) }
  })

  // 薪资
  const payBands = [
    { label: '<5万', min: 0, max: 5 },
    { label: '5-10万', min: 5, max: 10 },
    { label: '10-15万', min: 10, max: 15 },
    { label: '15-25万', min: 15, max: 25 },
    { label: '>25万', min: 25, max: Infinity },
  ]
  const payRows = payBands.map((b) => {
    let wSum = 0, wCount = 0
    data.forEach((it) => {
      if (it.salary >= b.min && it.salary < b.max) {
        const v = getValue(it)
        wSum += it.ai_score * v
        wCount += v
      }
    })
    const avg = wCount > 0 ? wSum / wCount : 0
    return { ...b, avg }
  })

  // 学历
  const eduGroups = [
    { label: '初中及以下', match: ['初中及以下'] },
    { label: '高中/中专', match: ['高中中专'] },
    { label: '大专', match: ['大专'] },
    { label: '本科', match: ['本科'] },
    { label: '硕士', match: ['硕士'] },
    { label: '博士', match: ['博士'] },
  ]
  const eduRows = eduGroups.map((g) => {
    let wSum = 0, wCount = 0
    data.forEach((it) => {
      if (g.match.includes(it.education)) {
        const v = getValue(it)
        wSum += it.ai_score * v
        wCount += v
      }
    })
    if (!wCount) return null
    return { label: g.label, avg: wSum / wCount }
  }).filter(Boolean) as { label: string; avg: number }[]

  // 高暴露
  let highExp = 0
  data.forEach((it) => { if (it.ai_score >= 7) highExp += getValue(it) })
  const highExpDisplay = mode === 'employment' ? formatWan(highExp) : formatWanYi(highExp)

  // 移动端 detail
  const buildStatsRows = (item: RectItem) => {
    const wageTotal = (item.employment || 0) * (item.salary || 0)
    const gdpShare = mode === 'gdp' ? `${formatYi(getValue(item))}元` : '仅在产值模式展示'
    return [
      { label: '就业人数', value: formatWan(item.employment) },
      { label: '年薪', value: `${item.salary}万元` },
      { label: '薪资总额', value: `${formatYi(wageTotal)}元` },
      { label: '行业产值贡献', value: gdpShare },
      { label: '就业前景', value: item.growth },
      { label: '学历要求', value: item.education },
    ]
  }

  const labels = MODE_LABELS[mode]
  const showDetail = isMobile() && selected

  return (
    <main className="jobs-page relative">
      <Navbar />
      <section className="jobs-hero">
        <div className="jobs-container">
          <p className="jobs-eyebrow">AI+一人公司 · 就业市场观察</p>
          <h1>AI 对中国就业市场的冲击</h1>
          <p className="jobs-hero-copy">
            这是一张交互式职业图谱：把中国 147 个职业的就业人数、薪资水平和 AI 暴露分数放到同一个页面里，帮助你更快看懂哪些岗位更容易被 AI 重构，哪些行业仍然更依赖线下执行和复杂协作。
          </p>

          <div className="stats-grid jobs-stats-grid">
            <div className="stat-item">
              <span className="stat-number">147</span>
              <span className="stat-label">职业样本</span>
              <span className="stat-desc">覆盖中国主要就业岗位类型。</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">14</span>
              <span className="stat-label">职业大类</span>
              <span className="stat-desc">从信息技术到零售餐饮都有对比。</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3种</span>
              <span className="stat-label">面积模式</span>
              <span className="stat-desc">可切换看就业、薪资总额和产值贡献。</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">交互式</span>
              <span className="stat-label">图谱体验</span>
              <span className="stat-desc">支持模式切换、悬浮查看和移动端点击详情。</span>
            </div>
          </div>
        </div>
      </section>

      <section className="jobs-container jobs-main">
        <div className="jobs-intro-card">
          <p className="jobs-lead">
            如果你在做个人业务、内容变现、职业转型，最有价值的不是"AI 会不会来"，而是"AI 先冲击哪里、冲击多大、我该往哪里靠"。
            这张图给你的不是结论，而是一个更快建立判断框架的入口。
          </p>
          <div className="jobs-actions">
            <a href="#jobs-chart" className="jobs-link-button">开始查看图谱</a>
            <a href="#page-top" className="jobs-link-button">返回顶部</a>
          </div>
        </div>

        <div id="jobs-chart" className="jobs-layout">
          <aside className="jobs-sidebar">
            <h2 className="jobs-panel-title">查看方式</h2>
            <p className="subtitle" id="jobsSubtitle">
              147 个职业 · 面积 = {labels.area} · 颜色 = AI 暴露程度
              <br />
              数据来源：
              <a href="https://www.stats.gov.cn/" target="_blank" rel="noreferrer">国家统计局</a>
              等公开资料，暴露分数由大模型辅助评分
            </p>

            <div className="stat-section">
              <h3>面积表示</h3>
              <div className="mode-toggle" id="modeToggle">
                {(['employment', 'wages', 'gdp'] as Mode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => onModeChange(m)}
                    className={mode === m ? 'active' : ''}
                  >
                    {m === 'employment' ? '就业人数' : m === 'wages' ? '薪资总额（人数 × 年薪）' : '行业产值（GDP 贡献）'}
                  </button>
                ))}
              </div>
            </div>

            <div className="stat-section">
              <h3 id="statTotalLabel">{labels.total}</h3>
              <div className="stat-big" id="statTotalJobs">{totalDisplay}</div>
            </div>

            <div className="stat-section">
              <h3>加权平均暴露分数</h3>
              <div className="stat-big" id="statAvgExposure" style={{ color: weightedAvgColor }}>
                {weightedAvg.toFixed(1)}
              </div>
              <div className="stat-label-copy">按当前面积模式加权，0-10 分</div>
            </div>

            <div className="stat-section">
              <h3 id="histLabel">{labels.hist}</h3>
              <div className="histogram" id="histogram">
                {histogram.map((count, i) => {
                  const height = maxHist > 0 ? (count / maxHist) * 100 : 0
                  const label = mode === 'employment' ? formatWan(count) : formatYi(count)
                  return (
                    <div
                      key={i}
                      className="bar"
                      style={{ height: `${Math.max(2, height)}%`, background: exposureColorCSS(i, 0.74) }}
                      title={`${i}: ${label}`}
                    />
                  )
                })}
              </div>
              <div className="hist-labels"><span>0</span><span>5</span><span>10</span></div>
            </div>

            <div className="stat-section">
              <h3>分级概览</h3>
              <div className="tier-bar" id="tierBar">
                {tierRows.map((t, i) => (
                  <div key={i} className="tier-row">
                    <div className="tier-color" style={{ background: t.color }} />
                    <span className="tier-name">{t.name}</span>
                    <span className="tier-jobs">{t.label}</span>
                    <span className="tier-pct">{t.pct.toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stat-section">
              <h3>按薪资水平</h3>
              <div className="hbar-chart" id="payChart">
                {payRows.map((r, i) => (
                  <div key={i} className="hbar-row">
                    <span className="hbar-label">{r.label}</span>
                    <div className="hbar-track">
                      <div className="hbar-fill" style={{ width: `${(r.avg / 10) * 100}%`, background: exposureColorCSS(r.avg, 0.82) }} />
                    </div>
                    <span className="hbar-val">{r.avg.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stat-section">
              <h3>按学历水平</h3>
              <div className="hbar-chart" id="eduChart">
                {eduRows.map((r, i) => (
                  <div key={i} className="hbar-row">
                    <span className="hbar-label">{r.label}</span>
                    <div className="hbar-track">
                      <div className="hbar-fill" style={{ width: `${(r.avg / 10) * 100}%`, background: exposureColorCSS(r.avg, 0.82) }} />
                    </div>
                    <span className="hbar-val">{r.avg.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stat-section">
              <h3 id="highExposureLabel">{labels.high}</h3>
              <div className="stat-big" id="statHighExposure">{highExpDisplay}</div>
              <div className="stat-label-copy">暴露分数大于等于 7 的职业</div>
            </div>
          </aside>

          <section className="jobs-canvas-panel">
            <div className="jobs-canvas-head">
              <div>
                <h2 className="jobs-panel-title">职业图谱</h2>
                <p className="jobs-panel-copy">
                  矩形越大，代表对应模式下的占比越高；颜色越偏红，代表该职业更容易被 AI 直接替代或被强力增效。
                </p>
              </div>
              <div className="gradient-legend">
                <span>低</span>
                <canvas ref={gradientRef} width={80} height={8} />
                <span>高</span>
              </div>
            </div>

            <div className="jobs-canvas-shell" ref={shellRef}>
              <canvas
                ref={canvasRef}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
              />
              {loading && <div className="jobs-overlay" id="loadingOverlay">正在加载图谱数据...</div>}
              {errorMsg && !loading && (
                <div className="jobs-overlay jobs-overlay-error">
                  <div>职业图谱数据加载失败，请稍后重试。（{errorMsg}）</div>
                  <button type="button" className="jobs-retry-button" onClick={() => loadData(0)}>重新加载数据</button>
                </div>
              )}
            </div>

            <p className="jobs-mobile-hint">桌面端可把鼠标移到矩形上查看详情；手机端请点击矩形查看职业说明。</p>

            {showDetail && selected && (
              <div className="jobs-detail-card">
                <h3>{selected.name}</h3>
                <p className="jobs-detail-score" style={{ color: exposureColorCSS(selected.ai_score, 1), fontWeight: 600 }}>
                  AI 暴露评分：{selected.ai_score}/10
                </p>
                <div className="jobs-detail-grid">
                  {buildStatsRows(selected).map((r, i) => (
                    <div key={i}><span>{r.label}</span><strong>{r.value}</strong></div>
                  ))}
                </div>
                <p className="jobs-detail-rationale">{selected.rationale}</p>
              </div>
            )}
          </section>
        </div>

        {tooltip && !isMobile() && (
          <div className="jobs-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
            <div className="tt-title">{tooltip.item.name}</div>
            <div className="tt-exposure">
              <span style={{ color: exposureColorCSS(tooltip.item.ai_score, 1), fontWeight: 600 }}>
                AI 暴露评分：{tooltip.item.ai_score}/10
              </span>
              <div className="tt-bar-track">
                <div className="tt-bar-fill" style={{ width: `${tooltip.item.ai_score * 10}%`, background: exposureColorCSS(tooltip.item.ai_score, 1) }} />
              </div>
            </div>
            <div className="tt-stats">
              {buildStatsRows(tooltip.item).map((r, i) => (
                <span key={i} className="tt-row">
                  <span className="label">{r.label}</span>
                  <span className="value">{r.value}</span>
                </span>
              ))}
            </div>
            <div className="tt-rationale">{tooltip.item.rationale}</div>
          </div>
        )}

        <div className="jobs-reading-card">
          <h2>怎么读这张图</h2>
          <ul>
            <li>看面积：先切换到"就业人数"，你能快速看到哪些职业虽然不体面、但人数巨大，因此更值得关注结构性变化。</li>
            <li>看颜色：颜色越红，说明职业的核心产出越容易数字化、标准化，更容易被大模型直接替代或大幅压缩人力。</li>
            <li>看模式切换：切到"薪资总额"和"行业产值"后，可以避免只盯着岗位数量，而忽略高价值岗位和行业利润分布。</li>
            <li>看详情理由：每个职业都带一段简短解释，帮助你理解"为什么这个岗位会被判成高暴露或低暴露"。</li>
          </ul>
        </div>

        <div className="jobs-source-card">
          <h2>说明与来源</h2>
          <p>
            这个专题页基于开源项目
            <a href="https://github.com/MistySun19/ai-jobs-cn" target="_blank" rel="noreferrer">ai-jobs-cn</a>
            整合而来，本站把数据和脚本都放到了本地静态文件里，并补上了移动端适配与错误提示。
          </p>
          <ul>
            <li>就业人数、薪资、学历要求等数据参考国家统计局及公开行业资料。</li>
            <li>AI 暴露分数是基于职业工作内容，由大模型辅助生成的估计值，不代表确定结论。</li>
            <li>这个页面适合做"方向判断"和"讨论起点"，不适合当成严格的职业建议或投资建议。</li>
          </ul>
        </div>

        <div className="final-cta jobs-footer-card">
          <p className="cta-highlight">
            如果你是做一人公司、内容创业或自由职业，这张图最值得你关心的不是"哪个岗位最危险"，而是"哪些能力更不容易被压价，哪些环节更值得你用 AI 放大"。
          </p>
          <p className="jobs-disclaimer">
            免责声明：本页仅供学习和讨论使用，AI 暴露分数存在模型偏差与口径误差，请结合真实行业经验判断。
          </p>
        </div>
      </section>
    </main>
  )
}
