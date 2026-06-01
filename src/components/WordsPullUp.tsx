import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  delay?: number
  showAsterisk?: boolean
}

/**
 * 单词逐个上推动画组件
 * 文本按空格拆为单词，每个单词独立 motion.span，触发后从 y:100% 推到 y:0
 * showAsterisk: 在最后一个单词末尾添加上标 *
 * 1.6s 兜底：防止 IntersectionObserver 失效时内容永远隐藏
 */
export default function WordsPullUp({
  text,
  className = '',
  delay = 0,
  showAsterisk = false,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [fallbackShown, setFallbackShown] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setFallbackShown(true), 1600)
    return () => window.clearTimeout(t)
  }, [])

  const visible = inView || fallbackShown
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wi) => {
        const isLast = wi === words.length - 1
        const letterArr = word.split('')
        return (
          <span
            key={wi}
            className="inline-flex overflow-hidden"
            style={{ paddingBottom: '0.1em', marginRight: '0.25em' }}
          >
            <motion.span
              initial={{ y: '100%' }}
              animate={visible ? { y: '0%' } : { y: '100%' }}
              transition={{
                duration: 0.9,
                delay: delay + wi * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-flex"
            >
              {letterArr.map((ch, ci) => {
                // 上标 * 永远挂在最后一个字母的右上角
                const isLastLetter = isLast && ci === letterArr.length - 1
                const showStarOnLetter = showAsterisk && isLastLetter
                return (
                  <span key={ci} className="relative inline-block">
                    {ch}
                    {showStarOnLetter && (
                      <span
                        className="absolute pointer-events-none select-none"
                        style={{
                          top: '0.15em',
                          right: '-0.45em',
                          fontSize: '0.31em',
                          lineHeight: 1,
                          fontWeight: 400,
                        }}
                      >
                        *
                      </span>
                    )}
                  </span>
                )
              })}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
