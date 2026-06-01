import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
  delay?: number
}

/**
 * 多样式段落的单词上推动画
 * 接受多段 {text, className}，每段独立样式，单词逐个上推
 * 1.6s 兜底：IntersectionObserver 失效时强制显示
 */
export default function WordsPullUpMultiStyle({
  segments,
  className = '',
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [fallbackShown, setFallbackShown] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setFallbackShown(true), 1600)
    return () => window.clearTimeout(t)
  }, [])

  const visible = inView || fallbackShown

  type WordItem = { word: string; className?: string; segIndex: number }
  const items: WordItem[] = []
  segments.forEach((seg, si) => {
    const words = seg.text.split(' ').filter(Boolean)
    words.forEach((w) => items.push({ word: w, className: seg.className, segIndex: si }))
  })

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex overflow-hidden"
          style={{ paddingBottom: '0.05em', marginRight: '0.3em' }}
        >
          <motion.span
            initial={{ y: '100%' }}
            animate={visible ? { y: '0%' } : { y: '100%' }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${item.className ?? ''}`}
            style={{ fontStyle: item.className?.includes('italic') ? 'italic' : 'normal' }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
