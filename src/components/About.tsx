import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const ABOUT_BODY =
  '我关注的不是炫技，而是普通人在 AI 时代如何做出更清醒的职业选择、更稳定的副业路径、更可信的个人品牌。opcmode 会把职业观察、真实案例、AI 工作流和创作工具沉淀成可复用的方法。'

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
              { text: 'AI 时代普通人生存顾问。', className: 'font-serif italic' },
              {
                text: '我帮普通人把 AI 变成职业竞争力、副业能力和个人品牌资产。',
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
