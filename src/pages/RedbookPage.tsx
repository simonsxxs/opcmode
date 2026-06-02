import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  ClipboardList,
  Coins,
  Image as ImageIcon,
  KeyRound,
  Loader2,
  LogOut,
  Mail,
  Route,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import './redbook.css'

type RedbookAction = 'generate' | 'deconstruct' | 'imitate' | 'profile_advice' | 'growth_plan'

interface AuthSession {
  access_token: string
  refresh_token?: string
  expires_at?: number
  user?: {
    id?: string
    email?: string
  }
}

interface Profile {
  id: string
  email: string
  credits: number
}

interface RunHistoryItem {
  id: string
  action: RedbookAction
  status: string
  cost: number
  input: Record<string, unknown>
  output: RedbookOutput | null
  image_urls?: string[]
  created_at: string
  completed_at?: string
}

interface RedbookOutput {
  summary?: string
  titles?: string[]
  body?: string
  tags?: string[]
  cover_text?: string
  image_prompts?: string[]
  image_urls?: string[]
  deconstruction?: {
    hook?: string
    structure?: string[]
    emotion_triggers?: string[]
    conversion_triggers?: string[]
    reusable_formula?: string[]
  }
  profile_advice?: string[]
  growth_plan?: string[]
  notes?: string[]
}

interface ScrapeResult {
  status: 'parsed' | 'needs_paste'
  message: string
  source?: {
    id?: string
    url?: string
    title?: string
    body?: string
    tags?: string[]
  }
}

interface FormState {
  topic: string
  accountPersona: string
  audience: string
  sellingPoint: string
  tone: string
  visualStyle: string
  imageCount: number
  sourceUrl: string
  sourceTitle: string
  sourceText: string
  sourceTags: string
  profileUrl: string
  profileNotes: string
  growthGoal: string
}

const AUTH_STORAGE_KEY = 'opcmode-redbook-session'

const ACTIONS: Array<{
  id: RedbookAction
  label: string
  short: string
  cost: number
  icon: typeof WandSparkles
}> = [
  { id: 'generate', label: '图文生成', short: '选题到成稿', cost: 12, icon: WandSparkles },
  { id: 'deconstruct', label: '爆款拆解', short: '拆结构和钩子', cost: 3, icon: ClipboardList },
  { id: 'imitate', label: '复刻生成', short: '保留骨架换内容', cost: 6, icon: BookOpenText },
  { id: 'profile_advice', label: '主页诊断', short: '定位和转化建议', cost: 5, icon: BadgeCheck },
  { id: 'growth_plan', label: '起号路线', short: '30 天内容路径', cost: 5, icon: Route },
]

const DEFAULT_FORM: FormState = {
  topic: '普通人如何用 AI 把一周工作压缩成一天',
  accountPersona: '半仙赛蒙式：清醒、锋利、实操，有一点电影感',
  audience: '想做副业、内容号和一人公司的普通上班族',
  sellingPoint: '给读者一个可以当天复用的 AI 工作流',
  tone: '中文小红书，克制高级，信息密度高，不油腻',
  visualStyle: '暗色电影感，封面大字，红色批注，强对比，像一张可收藏的方法卡',
  imageCount: 3,
  sourceUrl: '',
  sourceTitle: '',
  sourceText: '',
  sourceTags: '',
  profileUrl: '',
  profileNotes: '账号目前内容偏 AI 工具分享，希望提升收藏率和咨询转化。',
  growthGoal: '30 天内完成账号定位、10 篇种子内容、3 个可转化产品入口。',
}

function getSupabaseConfig() {
  return {
    url: import.meta.env.VITE_SUPABASE_URL as string | undefined,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,
  }
}

function restoreSession(): AuthSession | null {
  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as AuthSession
    return parsed?.access_token ? parsed : null
  } catch {
    return null
  }
}

function persistSession(session: AuthSession | null) {
  if (!session) {
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
    return
  }
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
}

async function readApiJson<T>(response: Response): Promise<T> {
  const text = await response.text()
  const data = text ? JSON.parse(text) : {}
  if (!response.ok) {
    const message = data?.message || data?.error || `HTTP ${response.status}`
    throw new Error(message)
  }
  return data as T
}

async function apiRequest<T>(
  path: string,
  session: AuthSession | null,
  init: RequestInit = {},
): Promise<T> {
  const headers = new Headers(init.headers)
  headers.set('Content-Type', 'application/json')
  if (session?.access_token) headers.set('Authorization', `Bearer ${session.access_token}`)

  const response = await fetch(path, {
    ...init,
    headers,
  })
  return readApiJson<T>(response)
}

async function sendEmailOtp(email: string) {
  const { url, anonKey } = getSupabaseConfig()
  if (!url || !anonKey) throw new Error('缺少 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY')

  const response = await fetch(`${url.replace(/\/$/, '')}/auth/v1/otp`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      create_user: true,
      should_create_user: true,
    }),
  })

  if (!response.ok) throw new Error('验证码发送失败，请检查 Supabase Auth 邮件配置')
}

async function verifyEmailOtp(email: string, token: string): Promise<AuthSession> {
  const { url, anonKey } = getSupabaseConfig()
  if (!url || !anonKey) throw new Error('缺少 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY')

  const response = await fetch(`${url.replace(/\/$/, '')}/auth/v1/verify`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      token,
      type: 'email',
    }),
  })

  return readApiJson<AuthSession>(response)
}

function actionLabel(action: RedbookAction) {
  return ACTIONS.find((item) => item.id === action)?.label ?? action
}

function splitTags(value: string) {
  return value
    .split(/[\s,#，、]+/)
    .map((item) => item.trim())
    .filter(Boolean)
}

export default function RedbookPage() {
  const [activeAction, setActiveAction] = useState<RedbookAction>('generate')
  const [form, setForm] = useState<FormState>(DEFAULT_FORM)
  const [session, setSession] = useState<AuthSession | null>(null)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [profile, setProfile] = useState<Profile | null>(null)
  const [history, setHistory] = useState<RunHistoryItem[]>([])
  const [redeemCode, setRedeemCode] = useState('')
  const [result, setResult] = useState<RedbookOutput | null>(null)
  const [scrapeResult, setScrapeResult] = useState<ScrapeResult | null>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const supabaseReady = Boolean(getSupabaseConfig().url && getSupabaseConfig().anonKey)
  const selectedAction = useMemo(
    () => ACTIONS.find((item) => item.id === activeAction) ?? ACTIONS[0],
    [activeAction],
  )

  useEffect(() => {
    const restored = restoreSession()
    if (restored) {
      setSession(restored)
      setEmail(restored.user?.email ?? '')
    }
  }, [])

  useEffect(() => {
    if (session) {
      void loadDashboard(session)
    }
  }, [session])

  const updateForm = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const clearMessages = () => {
    setError(null)
    setNotice(null)
  }

  const loadDashboard = async (authSession = session) => {
    if (!authSession) return
    try {
      const data = await apiRequest<{ profile: Profile; runs: RunHistoryItem[] }>(
        '/api/redbook/runs',
        authSession,
      )
      setProfile(data.profile)
      setHistory(data.runs)
    } catch (err) {
      setError(err instanceof Error ? err.message : '读取账户失败')
    }
  }

  const handleSendOtp = async () => {
    clearMessages()
    if (!email) {
      setError('先输入邮箱')
      return
    }
    setLoading('otp')
    try {
      await sendEmailOtp(email)
      setNotice('验证码已发送，请查看邮箱。')
    } catch (err) {
      setError(err instanceof Error ? err.message : '验证码发送失败')
    } finally {
      setLoading(null)
    }
  }

  const handleVerifyOtp = async () => {
    clearMessages()
    if (!email || !otp) {
      setError('请输入邮箱和验证码')
      return
    }
    setLoading('verify')
    try {
      const nextSession = await verifyEmailOtp(email, otp)
      setSession(nextSession)
      persistSession(nextSession)
      setNotice('登录成功，正在同步积分。')
    } catch (err) {
      setError(err instanceof Error ? err.message : '登录失败')
    } finally {
      setLoading(null)
    }
  }

  const handleSignOut = () => {
    setSession(null)
    setProfile(null)
    setHistory([])
    setResult(null)
    persistSession(null)
  }

  const handleRedeem = async () => {
    clearMessages()
    if (!session) {
      setError('请先登录')
      return
    }
    if (!redeemCode.trim()) {
      setError('请输入卡密')
      return
    }
    setLoading('redeem')
    try {
      const data = await apiRequest<{ credits: number; added: number; message: string }>(
        '/api/redbook/redeem',
        session,
        {
          method: 'POST',
          body: JSON.stringify({ code: redeemCode }),
        },
      )
      setProfile((current) => (current ? { ...current, credits: data.credits } : current))
      setRedeemCode('')
      setNotice(data.message || `已兑换 ${data.added} 积分`)
    } catch (err) {
      setError(err instanceof Error ? err.message : '卡密兑换失败')
    } finally {
      setLoading(null)
    }
  }

  const handleScrape = async () => {
    clearMessages()
    if (!session) {
      setError('请先登录')
      return
    }
    if (!form.sourceUrl.trim() && !form.profileUrl.trim()) {
      setError('请输入小红书链接')
      return
    }
    setLoading('scrape')
    try {
      const url = activeAction === 'profile_advice' ? form.profileUrl : form.sourceUrl
      const data = await apiRequest<ScrapeResult>('/api/redbook/scrape', session, {
        method: 'POST',
        body: JSON.stringify({ url, action: activeAction }),
      })
      setScrapeResult(data)
      if (data.source?.title) updateForm('sourceTitle', data.source.title)
      if (data.source?.body) updateForm('sourceText', data.source.body)
      if (data.source?.tags?.length) updateForm('sourceTags', data.source.tags.join(' '))
      setNotice(data.message)
    } catch (err) {
      setError(err instanceof Error ? err.message : '链接解析失败')
    } finally {
      setLoading(null)
    }
  }

  const buildPayload = () => ({
    ...form,
    sourceTags: splitTags(form.sourceTags),
    activeAction,
    scrapeResult,
  })

  const handleRun = async () => {
    clearMessages()
    if (!session) {
      setError('请先登录并兑换积分')
      return
    }
    setLoading('run')
    try {
      const data = await apiRequest<{
        profile: Profile
        run: RunHistoryItem
        output: RedbookOutput
      }>('/api/redbook/runs', session, {
        method: 'POST',
        body: JSON.stringify({
          action: activeAction,
          payload: buildPayload(),
        }),
      })
      setProfile(data.profile)
      setResult(data.output)
      setHistory((current) => [data.run, ...current.filter((item) => item.id !== data.run.id)])
      setNotice(`${actionLabel(activeAction)}完成，已扣除 ${selectedAction.cost} 积分。`)
    } catch (err) {
      setError(err instanceof Error ? err.message : '生成失败')
      void loadDashboard()
    } finally {
      setLoading(null)
    }
  }

  const renderSourceFields = () => (
    <div className="redbook-field-stack">
      <label className="redbook-field">
        <span>小红书公开链接</span>
        <div className="redbook-inline-field">
          <input
            value={form.sourceUrl}
            onChange={(e) => updateForm('sourceUrl', e.target.value)}
            placeholder="https://www.xiaohongshu.com/explore/..."
          />
          <button type="button" className="redbook-ghost-button" onClick={handleScrape} disabled={loading === 'scrape'}>
            {loading === 'scrape' ? <Loader2 className="redbook-spin" size={16} /> : <Sparkles size={16} />}
            解析
          </button>
        </div>
      </label>
      <label className="redbook-field">
        <span>标题 / 钩子</span>
        <input
          value={form.sourceTitle}
          onChange={(e) => updateForm('sourceTitle', e.target.value)}
          placeholder="解析失败时，在这里粘贴原文标题"
        />
      </label>
      <label className="redbook-field">
        <span>正文 / 截图 OCR 文案</span>
        <textarea
          value={form.sourceText}
          onChange={(e) => updateForm('sourceText', e.target.value)}
          placeholder="公开抓取失败时，把你看到的笔记正文粘贴到这里。"
          rows={6}
        />
      </label>
      <label className="redbook-field">
        <span>标签</span>
        <input
          value={form.sourceTags}
          onChange={(e) => updateForm('sourceTags', e.target.value)}
          placeholder="#AI工具 #副业 #小红书运营"
        />
      </label>
    </div>
  )

  const renderActionForm = () => {
    if (activeAction === 'deconstruct') return renderSourceFields()

    if (activeAction === 'imitate') {
      return (
        <div className="redbook-field-stack">
          {renderSourceFields()}
          <label className="redbook-field">
            <span>换成什么新选题</span>
            <input value={form.topic} onChange={(e) => updateForm('topic', e.target.value)} />
          </label>
        </div>
      )
    }

    if (activeAction === 'profile_advice') {
      return (
        <div className="redbook-field-stack">
          <label className="redbook-field">
            <span>主页链接</span>
            <div className="redbook-inline-field">
              <input
                value={form.profileUrl}
                onChange={(e) => updateForm('profileUrl', e.target.value)}
                placeholder="小红书主页公开链接"
              />
              <button type="button" className="redbook-ghost-button" onClick={handleScrape} disabled={loading === 'scrape'}>
                {loading === 'scrape' ? <Loader2 className="redbook-spin" size={16} /> : <Sparkles size={16} />}
                解析
              </button>
            </div>
          </label>
          <label className="redbook-field">
            <span>主页现状 / 你看到的数据</span>
            <textarea value={form.profileNotes} onChange={(e) => updateForm('profileNotes', e.target.value)} rows={7} />
          </label>
          <label className="redbook-field">
            <span>账号想卖什么 / 想吸引谁</span>
            <input value={form.sellingPoint} onChange={(e) => updateForm('sellingPoint', e.target.value)} />
          </label>
        </div>
      )
    }

    if (activeAction === 'growth_plan') {
      return (
        <div className="redbook-field-stack">
          <label className="redbook-field">
            <span>起号目标</span>
            <textarea value={form.growthGoal} onChange={(e) => updateForm('growthGoal', e.target.value)} rows={4} />
          </label>
          <label className="redbook-field">
            <span>账号定位</span>
            <input value={form.accountPersona} onChange={(e) => updateForm('accountPersona', e.target.value)} />
          </label>
          <label className="redbook-field">
            <span>目标人群</span>
            <input value={form.audience} onChange={(e) => updateForm('audience', e.target.value)} />
          </label>
        </div>
      )
    }

    return (
      <div className="redbook-field-stack">
        <label className="redbook-field">
          <span>选题</span>
          <input value={form.topic} onChange={(e) => updateForm('topic', e.target.value)} />
        </label>
        <div className="redbook-two-fields">
          <label className="redbook-field">
            <span>账号人格</span>
            <input value={form.accountPersona} onChange={(e) => updateForm('accountPersona', e.target.value)} />
          </label>
          <label className="redbook-field">
            <span>目标人群</span>
            <input value={form.audience} onChange={(e) => updateForm('audience', e.target.value)} />
          </label>
        </div>
        <label className="redbook-field">
          <span>想传递的价值 / 产品入口</span>
          <input value={form.sellingPoint} onChange={(e) => updateForm('sellingPoint', e.target.value)} />
        </label>
        <div className="redbook-two-fields">
          <label className="redbook-field">
            <span>语气</span>
            <input value={form.tone} onChange={(e) => updateForm('tone', e.target.value)} />
          </label>
          <label className="redbook-field">
            <span>图片数量</span>
            <select
              value={form.imageCount}
              onChange={(e) => updateForm('imageCount', Number(e.target.value))}
            >
              <option value={1}>1 张封面</option>
              <option value={2}>封面 + 1 张配图</option>
              <option value={3}>封面 + 2 张配图</option>
            </select>
          </label>
        </div>
        <label className="redbook-field">
          <span>视觉风格</span>
          <textarea value={form.visualStyle} onChange={(e) => updateForm('visualStyle', e.target.value)} rows={3} />
        </label>
      </div>
    )
  }

  return (
    <main className="redbook-page">
      <Navbar />

      <section className="redbook-hero">
        <div className="redbook-hero-copy">
          <p className="redbook-eyebrow">OPCMODE PRODUCT NODE · XIAOHONGSHU</p>
          <h1>
            小红书爆款图文
            <span>生成工作台</span>
          </h1>
          <p>
            从选题、标题、正文、标签到封面图和配图，一次生成可发布草稿。
            还能拆解爆款、复刻结构、诊断主页、设计起号路线。
          </p>
        </div>

        <aside className="redbook-account-card">
          <div className="redbook-account-top">
            <div>
              <span>账户积分</span>
              <strong>{profile?.credits ?? 0}</strong>
            </div>
            <Coins size={34} />
          </div>

          {!supabaseReady && (
            <div className="redbook-warning">
              缺少 Supabase 前端环境变量。配置 `VITE_SUPABASE_URL` 和 `VITE_SUPABASE_ANON_KEY` 后即可登录。
            </div>
          )}

          {!session ? (
            <div className="redbook-login-box">
              <label className="redbook-field compact">
                <span>邮箱</span>
                <div className="redbook-inline-field">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                  <button type="button" onClick={handleSendOtp} disabled={!supabaseReady || loading === 'otp'}>
                    {loading === 'otp' ? <Loader2 className="redbook-spin" size={16} /> : <Mail size={16} />}
                  </button>
                </div>
              </label>
              <label className="redbook-field compact">
                <span>验证码</span>
                <div className="redbook-inline-field">
                  <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="邮箱验证码" />
                  <button type="button" onClick={handleVerifyOtp} disabled={!supabaseReady || loading === 'verify'}>
                    登录
                  </button>
                </div>
              </label>
            </div>
          ) : (
            <div className="redbook-session-box">
              <span>{session.user?.email || email || '已登录'}</span>
              <button type="button" onClick={handleSignOut}>
                <LogOut size={16} />
                退出
              </button>
            </div>
          )}

          <div className="redbook-redeem-box">
            <label className="redbook-field compact">
              <span>卡密兑换</span>
              <div className="redbook-inline-field">
                <input
                  value={redeemCode}
                  onChange={(e) => setRedeemCode(e.target.value)}
                  placeholder="OPC-XXXX-XXXX"
                />
                <button type="button" onClick={handleRedeem} disabled={!session || loading === 'redeem'}>
                  {loading === 'redeem' ? <Loader2 className="redbook-spin" size={16} /> : <KeyRound size={16} />}
                </button>
              </div>
            </label>
          </div>
        </aside>
      </section>

      <section className="redbook-workbench">
        <div className="redbook-tabs">
          {ACTIONS.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                type="button"
                className={activeAction === item.id ? 'active' : ''}
                onClick={() => {
                  setActiveAction(item.id)
                  clearMessages()
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                <small>{item.cost} 积分 · {item.short}</small>
              </button>
            )
          })}
        </div>

        <div className="redbook-main-grid">
          <section className="redbook-console">
            <div className="redbook-panel-head">
              <div>
                <p>{selectedAction.short}</p>
                <h2>{selectedAction.label}</h2>
              </div>
              <span>{selectedAction.cost} credits</span>
            </div>

            {renderActionForm()}

            <button type="button" className="redbook-run-button" onClick={handleRun} disabled={!session || loading === 'run'}>
              {loading === 'run' ? <Loader2 className="redbook-spin" size={18} /> : <WandSparkles size={18} />}
              开始生成
              <ArrowRight size={18} />
            </button>

            {(notice || error) && (
              <div className={error ? 'redbook-message error' : 'redbook-message'}>
                {error || notice}
              </div>
            )}
          </section>

          <section className="redbook-output">
            <div className="redbook-panel-head">
              <div>
                <p>Output Draft</p>
                <h2>生成结果</h2>
              </div>
              <ImageIcon size={22} />
            </div>

            {!result ? (
              <div className="redbook-empty-output">
                <Sparkles size={34} />
                <p>结果会出现在这里：标题、正文、标签、封面文案、图片和拆解报告。</p>
              </div>
            ) : (
              <div className="redbook-result-stack">
                {result.summary && <p className="redbook-summary">{result.summary}</p>}

                {!!result.titles?.length && (
                  <div className="redbook-result-block">
                    <h3>标题候选</h3>
                    <div className="redbook-title-list">
                      {result.titles.map((title, index) => (
                        <span key={`${title}-${index}`}>{title}</span>
                      ))}
                    </div>
                  </div>
                )}

                {result.cover_text && (
                  <div className="redbook-cover-line">
                    <span>封面大字</span>
                    <strong>{result.cover_text}</strong>
                  </div>
                )}

                {result.body && (
                  <div className="redbook-result-block">
                    <h3>正文草稿</h3>
                    <pre>{result.body}</pre>
                  </div>
                )}

                {!!result.tags?.length && (
                  <div className="redbook-tags">
                    {result.tags.map((tag) => (
                      <span key={tag}>#{tag.replace(/^#/, '')}</span>
                    ))}
                  </div>
                )}

                {!!result.image_urls?.length && (
                  <div className="redbook-image-grid">
                    {result.image_urls.map((url, index) => (
                      <img key={url} src={url} alt={`小红书配图 ${index + 1}`} />
                    ))}
                  </div>
                )}

                {result.deconstruction && (
                  <div className="redbook-result-block">
                    <h3>爆款结构</h3>
                    <p>{result.deconstruction.hook}</p>
                    <ul>
                      {(result.deconstruction.structure ?? []).map((item) => <li key={item}>{item}</li>)}
                      {(result.deconstruction.reusable_formula ?? []).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                )}

                {!!result.profile_advice?.length && (
                  <div className="redbook-result-block">
                    <h3>主页建议</h3>
                    <ul>{result.profile_advice.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                )}

                {!!result.growth_plan?.length && (
                  <div className="redbook-result-block">
                    <h3>起号路线</h3>
                    <ul>{result.growth_plan.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                )}

                {!!result.notes?.length && (
                  <div className="redbook-notes">
                    {result.notes.map((note) => <span key={note}>{note}</span>)}
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </section>

      <section className="redbook-history">
        <div className="redbook-panel-head">
          <div>
            <p>History</p>
            <h2>最近生成</h2>
          </div>
          <span>{history.length} runs</span>
        </div>
        <div className="redbook-history-grid">
          {history.length === 0 ? (
            <p className="redbook-history-empty">登录后会同步你的生成记录。</p>
          ) : (
            history.slice(0, 6).map((item) => (
              <article key={item.id} className="redbook-history-card">
                <span>{actionLabel(item.action)} · {item.status}</span>
                <strong>{item.output?.summary || item.input?.topic as string || '未命名任务'}</strong>
                <small>{new Date(item.created_at).toLocaleString('zh-CN')}</small>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  )
}
