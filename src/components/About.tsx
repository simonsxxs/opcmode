import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const ABOUT_BODY =
  '过去三年，我持续追踪 AI 对 147 个职业的重塑，沉淀一人公司的工作流，与数千位读者在 newsletter 与微信社群中共同探索：如何在这个时代，建造属于自己的小而美的事业。'

export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto bg-about rounded-2xl md:rounded-[2rem] px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-28 text-center">
        {/* 顶部小标签 */}
        <div className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 sm:mb-12">
          关于 · ABOUT
        </div>

        {/* 主标题：3 段（普通 + 斜体 + 普通） */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 sm:mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            segments={[
              { text: '我是半仙赛蒙，', className: 'font-normal' },
              { text: '一个独立创作者。', className: 'font-serif italic' },
              {
                text: '我专注于 AI 工具、职业观察与一人公司方法论。',
                className: 'font-normal',
              },
            ]}
            className="text-ink"
          />
        </h2>

        {/* 字符级滚动渐显段落 */}
        <p
          className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: '#DEDBC8', lineHeight: 1.7 }}
        >
          <AnimatedLetter text={ABOUT_BODY} />
        </p>

        {/* 落款 */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-primary/60 text-[10px] sm:text-xs tracking-[0.2em]">
          opcmode · 主理人 半仙赛蒙
        </div>
      </div>
    </section>
  )
}
