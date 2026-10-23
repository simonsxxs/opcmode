import { ArrowRight, BriefcaseBusiness, MessageCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './cases.css'

const CASES = [
  {
    id: '001',
    tag: '职业升级',
    title: '32岁HR找不到工作，如何用 AI 重新包装能力',
    problem: '招聘需求收缩，简历投递反馈少，过往经验看起来被平台和自动化工具稀释。',
    analysis: '问题不只是岗位减少，而是简历仍停留在事务型 HR 叙事，缺少“AI 招聘流程设计、人才地图、数据化筛选”的新能力表达。',
    advice: '先把招聘流程拆成可被 AI 放大的 5 个环节，再重写简历项目，输出一套“AI 辅助招聘 SOP”作为作品。',
    status: '匿名案例结构 · 等待真实复盘补充',
  },
  {
    id: '002',
    tag: '转型AI',
    title: '猎头想转型 AI，如何避免只会转发工具清单',
    problem: '对 AI 感兴趣，也懂候选人和行业，但不知道如何把经验变成可收费服务。',
    analysis: '猎头的优势不是技术，而是行业判断、岗位画像和人岗匹配。AI 应该成为研究和交付杠杆，而不是新的身份标签。',
    advice: '围绕一个垂直行业做 30 天岗位雷达：岗位变化、薪酬变化、AI 替代风险和转型建议，形成咨询入口。',
    status: '服务样例 · 可用于后续真实案例沉淀',
  },
  {
    id: '003',
    tag: '个人品牌',
    title: '普通上班族想做 AI 自媒体，第一步不是追热点',
    problem: '每天收藏工具、转发爆款，但账号没有稳定主题，也不知道如何引导咨询。',
    analysis: '内容定位缺少“我是谁、帮谁、解决什么问题”。只追热点会带来流量波动，但不会自然形成信任。',
    advice: '先选一个真实人群和一个高频痛点，搭建 3 个内容栏目：问题诊断、工具工作流、真实改造记录。',
    status: '匿名案例结构 · 适合做陪跑记录',
  },
]

const SERVICES = [
  { name: 'AI职业升级咨询', price: '199', note: '1 次诊断，给出职业风险和行动路线。' },
  { name: 'AI自媒体陪跑', price: '399', note: '账号定位、栏目规划、选题和转化入口。' },
  { name: 'AI工作流搭建', price: '999', note: '把你的重复工作改造成可复用流程。' },
  { name: 'AI个人品牌咨询', price: '999+', note: '从经历中提炼可持续表达和产品结构。' },
]

export default function CasesPage() {
  return (
    <main className="cases-page">
      <Navbar />

      <section className="cases-hero">
        <div className="cases-hero-copy">
          <p className="cases-eyebrow">REAL CASE LIBRARY</p>
          <h1>真实案例库</h1>
          <p>
            未来半年，这里会持续沉淀普通人使用 AI 做职业升级、副业起步和个人品牌的真实复盘。
            第一版先用服务样例和匿名结构，把咨询路径搭起来。
          </p>
          <div className="cases-hero-actions">
            <a href="#case-consult">
              免费交流
              <MessageCircle size={17} />
            </a>
            <Link to="/toolbox">
              打开工具箱
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="cases-principle">
          <Sparkles size={24} />
          <span>这里最值钱的不是功能，而是问题、判断、建议和结果。</span>
        </div>
      </section>

      <section className="cases-grid" aria-label="案例列表">
        {CASES.map((item) => (
          <article key={item.id} className="case-card">
            <div className="case-card-top">
              <span>{item.tag}</span>
              <strong>案例 {item.id}</strong>
            </div>
            <h2>{item.title}</h2>
            <dl>
              <div>
                <dt>问题</dt>
                <dd>{item.problem}</dd>
              </div>
              <div>
                <dt>分析</dt>
                <dd>{item.analysis}</dd>
              </div>
              <div>
                <dt>建议</dt>
                <dd>{item.advice}</dd>
              </div>
            </dl>
            <p className="case-status">{item.status}</p>
          </article>
        ))}
      </section>

      <section id="case-consult" className="cases-consult">
        <div>
          <p className="cases-eyebrow">CONSULTING MENU</p>
          <h2>如果你也在这个阶段，先把问题说清楚。</h2>
          <p>
            这里不是课程售卖页，而是一个咨询入口。你可以带着职业、内容、副业或工作流问题来，
            我会先帮你判断该不该做、从哪一步做、怎样用 AI 放大已有优势。
          </p>
          <div className="cases-wechat">
            <span>WECHAT</span>
            <strong>添加微信：待补充</strong>
          </div>
        </div>

        <div className="cases-service-grid">
          {SERVICES.map((service) => (
            <article key={service.name} className="cases-service-card">
              <BriefcaseBusiness size={18} />
              <h3>{service.name}</h3>
              <strong>¥{service.price}</strong>
              <p>{service.note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
