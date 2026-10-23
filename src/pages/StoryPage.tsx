import './story.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

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
            普通人也需要一套<em>AI时代</em>的生存方法。
          </h1>

          <p className="story-subtext animate-fade-rise-delay">
            我是半仙赛蒙，AI 时代普通人生存顾问。
            <br />
            我关心的不是工具有多炫，而是普通人怎样把 AI 变成职业竞争力、副业能力和个人品牌资产。
          </p>

          <Link to="/cases" className="liquid-glass hero-cta animate-fade-rise-delay-2">
            查看案例
          </Link>
        </div>
      </section>

      {/* —— 故事正文：用户延展区 —— */}
      <section className="story-content">
        <div className="story-content-inner">
          <p className="story-content-eyebrow animate-fade-rise">半仙赛蒙 · 关于我</p>
          <h2 className="story-content-title animate-fade-rise-delay">我为什么做 opcmode</h2>

          <div className="story-content-body animate-fade-rise-delay-2">
            <p>
              你好，我是半仙赛蒙。过去几年，我一直在观察 AI 如何改变职业、内容创作和个人商业。
              我越看越确定：真正缺的不是工具教程，而是普通人能听懂、能执行、能复盘的判断框架。
            </p>
            <p>
              opcmode 不是一个炫技网站。它会把职业地图、真实案例、AI 工作流和创作工具放在一起，
              帮你判断自己应该学什么、做什么、放弃什么，以及怎样把经验变成可被看见的作品。
            </p>
            <div className="story-divider" />
            <p className="story-quote">
              "不是 AI 会不会替代你，而是你能不能成为那个更会使用 AI 的人。"
            </p>
            <div className="story-divider" />
            <p>
              如果你正在经历职业焦虑、转型犹豫、副业起步或内容定位卡住，
              这里会先帮你把问题拆开，再用 AI 找到更可执行的路径。
            </p>
          </div>

          <div className="story-contact animate-fade-rise-delay-3">
            <span>WECHAT</span>
            <strong>添加微信：待补充</strong>
            <p>先聊清楚你的真实处境，再决定下一步要不要咨询。</p>
          </div>
        </div>
      </section>
    </div>
  )
}
