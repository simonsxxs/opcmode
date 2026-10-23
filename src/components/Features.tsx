import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const FEATURES_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const ICON_BASE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F'

interface CardItem {
  text: string
}

interface CardData {
  index: string
  title: string
  items: CardItem[]
  icon: string
  link: string
}

const CARDS: CardData[] = [
  {
    index: '01',
    title: 'AI时代职业地图。',
    items: [
      { text: '看清哪些职业会被 AI 冲击' },
      { text: '判断哪些能力会被 AI 放大' },
      { text: '为普通人的转型选择建立坐标系' },
      { text: '保留 147 个职业的交互图谱' },
    ],
    icon:
      ICON_BASE +
      'hf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    link: '/lab',
  },
  {
    index: '02',
    title: '真实案例库。',
    items: [
      { text: 'HR、猎头、上班族的 AI 转型样本' },
      { text: '按问题、分析、建议和结果沉淀' },
      { text: '把咨询经验变成可复用判断框架' },
    ],
    icon:
      ICON_BASE +
      'hf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    link: '/cases',
  },
  {
    index: '03',
    title: 'AI创作工具箱。',
    items: [
      { text: '小红书图文模块已接入' },
      { text: '接入 GPT Image 生成封面与配图' },
      { text: '后续扩展公众号、选题库、标题优化' },
    ],
    icon:
      ICON_BASE +
      'hf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    link: '/toolbox',
  },
  {
    index: '04',
    title: '免费交流。',
    items: [
      { text: '职业升级、副业起步、内容定位先聊清楚' },
      { text: '适合不知道该从哪一步开始的人' },
      { text: '微信入口先预留，后续替换真实联系方式' },
    ],
    icon:
      ICON_BASE +
      'hf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    link: '#contact',
  },
]

const SERVICES = [
  { name: 'AI职业升级咨询', price: '199', desc: '梳理岗位风险、可迁移能力和 30 天行动路线。' },
  { name: 'AI自媒体陪跑', price: '399', desc: '确定账号定位、内容栏目、选题节奏和转化入口。' },
  { name: 'AI工作流搭建', price: '999', desc: '把重复工作拆成可执行的 AI 流程、模板和工具链。' },
  { name: 'AI个人品牌咨询', price: '999+', desc: '把经历、专业和内容产品组合成可信的个人品牌。' },
]

function FeatureCard({
  data,
  delay,
}: {
  data: CardData
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const easeOut = [0.22, 1, 0.36, 1] as const

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
      className="bg-feature rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4 min-h-[360px] md:min-h-[480px]"
    >
      {/* 顶部：icon */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-square w-10 h-10 sm:w-12 sm:h-12">
        <img
          src={data.icon}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* 标题 + 编号 */}
      <div className="flex items-baseline gap-2">
        <span className="text-gray-500 text-xs sm:text-sm font-mono">
          ({data.index})
        </span>
        <h3 className="text-ink text-lg sm:text-xl md:text-2xl font-normal">
          {data.title}
        </h3>
      </div>

      {/* checklist */}
      <ul className="flex flex-col gap-2 sm:gap-3 flex-1">
        {data.items.map((it, i) => (
          <li
            key={i}
            className="flex items-start gap-2 sm:gap-2.5 text-sm sm:text-base"
          >
            <Check
              className="text-primary mt-0.5 flex-shrink-0"
              size={14}
              strokeWidth={2.5}
            />
            <span className="text-gray-400 leading-relaxed">{it.text}</span>
          </li>
        ))}
      </ul>

      {/* learn more */}
      {data.link.startsWith('#') ? (
        <a
          href={data.link}
          className="group inline-flex items-center gap-1.5 text-primary text-sm sm:text-base mt-auto"
        >
          <span>了解更多</span>
          <ArrowRight
            className="transition-transform group-hover:translate-x-0.5"
            size={14}
            style={{ transform: 'rotate(-45deg)' }}
            strokeWidth={2}
          />
        </a>
      ) : (
        <Link
          to={data.link}
          className="group inline-flex items-center gap-1.5 text-primary text-sm sm:text-base mt-auto"
        >
          <span>了解更多</span>
          <ArrowRight
            className="transition-transform group-hover:translate-x-0.5"
            size={14}
            style={{ transform: 'rotate(-45deg)' }}
            strokeWidth={2}
          />
        </Link>
      )}
    </motion.div>
  )
}

function VideoCard({ delay }: { delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const easeOut = [0.22, 1, 0.36, 1] as const

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
      className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[360px] md:min-h-[480px]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={FEATURES_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10">
        <p
          className="text-lg sm:text-xl md:text-2xl font-normal leading-tight"
          style={{ color: '#E1E0CC' }}
        >
          半仙赛蒙的 AI 生存手册。
        </p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative min-h-screen bg-black py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* 背景噪点 */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 标题 */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-4xl mb-12 sm:mb-16 md:mb-20">
          <span className="block mb-2 sm:mb-3">
            <WordsPullUpMultiStyle
              segments={[{ text: '从职业判断，到案例信任，再到 AI 工具落地。', className: 'text-ink' }]}
            />
          </span>
          <span className="block">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: '网站现在只服务一件事：帮助普通人穿过 AI 时代的不确定。',
                  className: 'text-gray-500',
                },
              ]}
            />
          </span>
        </h2>

        {/* 产品地图 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-2 md:gap-1">
          <VideoCard delay={0} />
          {CARDS.map((card, i) => (
            <FeatureCard key={card.index} data={card} delay={(i + 1) * 0.15} />
          ))}
        </div>

        <div id="contact" className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-3 sm:gap-2 md:gap-1 scroll-mt-24">
          <div className="bg-about rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 min-h-[360px] flex flex-col justify-between border border-white/5">
            <div>
              <p className="text-primary/50 text-[10px] sm:text-xs tracking-[0.22em] uppercase mb-6">
                CONSULTING PATH
              </p>
              <h3 className="text-ink text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
                先聊清楚问题，再决定要不要继续。
              </h3>
            </div>
            <div className="mt-10">
              <p className="text-primary/70 text-sm sm:text-base leading-7">
                适合正在经历求职焦虑、职业转型、副业起步、内容定位卡住的人。
                第一步不是买课，而是把你的真实处境拆开。
              </p>
              <div className="mt-8 inline-flex flex-col gap-1 rounded-lg border border-primary/15 bg-primary/5 px-5 py-4">
                <span className="text-primary/45 text-xs tracking-[0.18em] uppercase">WECHAT</span>
                <strong className="text-primary text-xl font-normal">添加微信：待补充</strong>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2 md:gap-1">
            {SERVICES.map((service) => (
              <article key={service.name} className="bg-feature rounded-2xl md:rounded-3xl p-5 sm:p-6 min-h-[220px] flex flex-col justify-between border border-white/5">
                <div>
                  <p className="text-primary/45 text-xs tracking-[0.18em] uppercase mb-4">SERVICE</p>
                  <h4 className="text-ink text-xl sm:text-2xl font-normal leading-tight">{service.name}</h4>
                </div>
                <div>
                  <div className="text-primary text-3xl sm:text-4xl font-serif mb-3">¥{service.price}</div>
                  <p className="text-gray-400 text-sm leading-6">{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
