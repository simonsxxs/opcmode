import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { label: '我们的故事', to: '/story' },
  { label: '创作集', to: '#' },
  { label: '工作坊', to: '#' },
  { label: '项目', to: '/jobs' },
  { label: '联系', to: '#' },
]

/**
 * 顶部导航 pill：黑色圆角胶囊，挂在容器顶部
 * 同时支持 / 主页和 /jobs 页面
 */
export default function Navbar() {
  return (
    <div className="absolute left-0 right-0 top-0 flex justify-center z-30">
      <nav className="bg-black border border-white/10 rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
        {NAV_ITEMS.map((item) => {
          const isExternal = item.to.startsWith('#')
          if (isExternal) {
            return (
              <a
                key={item.label}
                href={item.to}
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            )
          }
          return (
            <Link
              key={item.label}
              to={item.to}
              style={{ color: 'rgba(225, 224, 204, 0.8)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors"
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
