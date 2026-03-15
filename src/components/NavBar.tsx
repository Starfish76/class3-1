import { CalendarDays, Camera, Images, LayoutGrid, MessageCircleHeart, Star, Timer, Trophy } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: '홈', icon: Camera },
  { to: '/albums', label: '앨범', icon: Images },
  { to: '/timeline', label: '타임라인', icon: Timer },
  { to: '/messages', label: '메시지', icon: MessageCircleHeart },
  { to: '/best-moments', label: '베스트', icon: Star },
  { to: '/guinness-book', label: '표네스북', icon: Trophy },
  { to: '/school-calendar', label: '학사일정', icon: CalendarDays },
]

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/35 bg-[linear-gradient(180deg,rgba(223,238,255,0.96)_0%,rgba(237,246,255,0.92)_58%,rgba(247,251,255,0.84)_100%)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-200/70">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Yearbook Archive</p>
            <p className="text-lg font-semibold">3-1 추억 아카이브</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-200/80'
                    : 'text-slate-600 hover:bg-white hover:text-slate-900'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-4 md:hidden sm:px-6 lg:px-8">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                isActive ? 'bg-sky-600 text-white shadow-md shadow-sky-200/70' : 'bg-white/80 text-slate-600'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
