import './story.css'
import Navbar from '../components/Navbar'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

export default function StoryPage() {
  return (
    <div className="story-page relative">
      {/* —— 顶部 nav（与首页 / jobs 页面同款）—— */}
      <Navbar />

      {/* —— Hero：全屏视频 + 中央文字 —— */}
      <section className="story-hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/story-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* 中央内容 */}
        <div className="story-hero-content">
          <h1 className="story-h1 animate-fade-rise">
            在静默里，<em>梦想</em>缓缓升起。
          </h1>

          <p className="story-subtext animate-fade-rise-delay">
            opcmode 是一个记录 AI 时代工作方式与个人创作可能的独立站点。
            <br />
            在喧嚣的世界里，建造一片专注与灵感的安静之地。
          </p>

          <button className="liquid-glass hero-cta animate-fade-rise-delay-2">
            开启旅程
          </button>
        </div>
      </section>

      {/* —— 故事正文：用户延展区 —— */}
      <section className="story-content">
        <div className="story-content-inner">
          <p className="story-content-eyebrow animate-fade-rise">半仙赛蒙 · 关于我</p>
          <h2 className="story-content-title animate-fade-rise-delay">我的故事</h2>

          <div className="story-content-body animate-fade-rise-delay-2">
            <p>
              你好，我是半仙赛蒙，独立创作者 / 一人公司实践者 / AI 工具重度使用者。
            </p>
            <p>
              我在做的事情，是把 AI 时代关于工作、生活、创作的零散观察，
              沉淀成可被复用的方法、可被借鉴的工作流、可被讨论的判断框架。
            </p>
            <div className="story-divider" />
            <p className="story-quote">
              "不是 AI 会不会替代你，而是你愿不愿意成为那个使用 AI 的人。"
            </p>
            <div className="story-divider" />
            <p>
              opcmode 是这个站点的名字，也是我的主理人品牌。
              它代表一种节奏：在快速变化的时代里，保持自己的频率。
            </p>
          </div>

          {/* 用户延展占位 */}
          <div className="story-placeholder animate-fade-rise-delay-3">
            ✍️ 在 <code>src/pages/StoryPage.tsx</code> 的 <code>story-content</code> 段继续添加你的故事。
            <br />
            已为你预留样式：标题 <code>story-content-title</code>、正文 <code>story-content-body</code>、引用 <code>story-quote</code>。
          </div>
        </div>
      </section>
    </div>
  )
}
