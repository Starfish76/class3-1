import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

export function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div
      className={`flex min-h-dvh flex-col bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.28),_transparent_35%),linear-gradient(180deg,_#f2f8ff_0%,_#f8fbff_36%,_#eef6ff_100%)] ${
        isHomePage ? 'overflow-hidden' : ''
      }`}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-12 top-24 h-44 w-44 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute right-0 top-72 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
      </div>

      <NavBar />
      <main
        key={location.pathname}
        className={`relative ${
          isHomePage ? 'flex-1 mx-auto flex w-full max-w-none px-0 py-0' : 'mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'
        }`}
      >
        <Outlet />
      </main>
      {!isHomePage ? <Footer /> : null}
    </div>
  )
}
