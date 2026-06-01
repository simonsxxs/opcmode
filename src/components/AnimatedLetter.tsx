import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedLetterProps {
  text: string
  className?: string
  offset?: [string, string]
}

/**
 * 字符级滚动渐显
 * 每个字符独立包裹，根据 useScroll 进度映射到 opacity
 * 字符按位置 index 错位触发（早的字符先亮，晚的后亮）
 */
export default function AnimatedLetter({
  text,
  className = '',
  offset = ['start 0.8', 'end 0.2'],
}: AnimatedLetterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ['start 0.8', 'end 0.2'],
  })

  const chars = Array.from(text)
  const total = chars.length

  return (
    <span ref={ref} className={`inline ${className}`}>
      {chars.map((ch, i) => {
        const charProgress = i / Math.max(1, total)
        const opacity = useTransform(
          scrollYProgress,
          [Math.max(0, charProgress - 0.1), charProgress + 0.05],
          [0.2, 1],
        )
        return (
          <motion.span
            key={i}
            style={{ opacity, display: 'inline-block', whiteSpace: 'pre' }}
          >
            {ch}
          </motion.span>
        )
      })}
    </span>
  )
}
