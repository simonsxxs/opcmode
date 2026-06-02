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
    title: '职业图谱。',
    items: [
      { text: '147 个职业已完整收录' },
      { text: 'AI 暴露度与角色重塑度双轴评估' },
      { text: '每周迭代行业新动向' },
      { text: '支持多职业横向对比' },
    ],
    icon:
      ICON_BASE +
      'hf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    link: '/jobs',
  },
  {
    index: '02',
    title: '一人公司。',
    items: [
      { text: '工具链沉淀：一个人也能是产品公司' },
      { text: '工作流文档化：流程可复用、可外包' },
      { text: '月度复盘机制：让数据说话' },
    ],
    icon:
      ICON_BASE +
      'hf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    link: '/workflow',
  },
  {
    index: '03',
    title: '图文生成器。',
    items: [
      { text: '小红书标题、正文、标签一键成稿' },
      { text: '接入 GPT Image 生成封面与配图' },
      { text: '支持爆款拆解、复刻和起号路线' },
    ],
    icon:
      ICON_BASE +
      'hf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    link: '/redbook',
  },
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
          opcmode 主页。
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
              segments={[{ text: '为独立创作者打造的工作流。', className: 'text-ink' }]}
            />
          </span>
          <span className="block">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: '由真实创作驱动，AI 加持。',
                  className: 'text-gray-500',
                },
              ]}
            />
          </span>
        </h2>

        {/* 4 列卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          <VideoCard delay={0} />
          {CARDS.map((card, i) => (
            <FeatureCard key={card.index} data={card} delay={(i + 1) * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
