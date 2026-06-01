import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'
import Navbar from './Navbar'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

export default function Hero() {
  const easeOut = [0.16, 1, 0.3, 1] as const
  const videoRef = useRef<HTMLVideoElement>(null)

  // 兜底：万一 loop 属性失效，手动重启
  const onVideoEnded = () => {
    const v = videoRef.current
    if (v) {
      v.currentTime = 0
      v.play().catch(() => {})
    }
  }

  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* 视频背景（poster 是首帧，视频加载前/失败时显示） */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onEnded={onVideoEnded}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/hero-poster.jpg"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* 噪点 overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay" />

        {/* 渐变 overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* 顶部 navbar pill */}
        <Navbar />

        {/* 底部内容：12 列网格 */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 md:px-10 md:pb-10">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
            {/* 左 8 列：opcmode 大字 */}
            <div className="col-span-12 md:col-span-8">
              <h1
                className="text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[8vw] font-medium leading-[0.85] tracking-[-0.07em]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="opcmode" showAsterisk />
              </h1>
            </div>

            {/* 右 4 列：描述 + CTA */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-5 md:gap-7 md:pb-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
                className="text-primary/70 text-sm sm:text-base md:text-lg"
                style={{ lineHeight: 1.4 }}
              >
                opcmode 是一个记录 AI 时代工作方式与个人创作可能的独立站点。
                <br />
                由半仙赛蒙主理。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
              >
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2 bg-primary text-black rounded-full pl-4 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-2 font-medium text-sm sm:text-base transition-all hover:gap-3"
                >
                  <span>进入 opcmode</span>
                  <span className="flex items-center justify-center bg-black text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
