import { motion } from 'framer-motion'
import { ArrowRight, ImageIcon, MessageCircleHeart, Sparkles, Timer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FeaturedMemory } from '../components/FeaturedMemory'
import { SectionHeading } from '../components/SectionHeading'
import { albums, quickStats } from '../data/memories'

const quickLinks = [
  { to: '/albums', title: '앨범 보기', description: '체육대회, 축제, 수학여행 같은 이벤트별 사진 모음', icon: ImageIcon },
  { to: '/timeline', title: '타임라인', description: '월별로 정리한 3-1반의 한 해', icon: Timer },
  { to: '/messages', title: '친구들의 한마디', description: '서로에게 남기는 짧지만 오래갈 문장들', icon: MessageCircleHeart },
]

export function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-600">
            <Sparkles className="h-4 w-4" />
            우리 반의 순간을 모아둔 디지털 아카이브
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
            3-1반 추억 홈페이지
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            매일 지나가던 교실, 소란스럽던 체육대회, 밤까지 반짝이던 축제, 여행지의 공기까지. 3-1반의 한 해를 사진과 짧은 문장으로 다시 꺼내볼 수 있는 공간입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/albums" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-200/80 transition hover:bg-sky-600">
              앨범 바로 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/best-moments" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white">
              베스트 순간 보기
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.08 }} className="grid grid-cols-2 gap-4">
          <img src={albums[0].photos[0].src} alt={albums[0].photos[0].alt} className="h-60 w-full rounded-[1.75rem] object-cover shadow-lg shadow-sky-100/70 md:h-72" />
          <img src={albums[1].photos[0].src} alt={albums[1].photos[0].alt} className="mt-8 h-60 w-full rounded-[1.75rem] object-cover shadow-lg shadow-orange-100/70 md:h-80" />
          <img src={albums[2].photos[0].src} alt={albums[2].photos[0].alt} className="h-44 w-full rounded-[1.75rem] object-cover shadow-lg shadow-sky-100/70 md:h-56" />
          <img src={albums[4].photos[0].src} alt={albums[4].photos[0].alt} className="mt-[-2rem] h-48 w-full rounded-[1.75rem] object-cover shadow-lg shadow-emerald-100/70 md:h-64" />
        </motion.div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {quickStats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] border border-white/70 bg-white/90 px-6 py-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Highlight" title="한눈에 다시 보는 대표 추억" description="가장 분위기가 선명하게 남아 있는 하루를 먼저 꺼내봤습니다." />
        <FeaturedMemory />
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Quick Links" title="바로 가기" description="보고 싶은 방식에 따라 사진, 시간순 기록, 메시지 카드로 이동할 수 있습니다." />
        <div className="grid gap-4 lg:grid-cols-3">
          {quickLinks.map(({ to, title, description, icon: Icon }) => (
            <Link key={to} to={to} className="group rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 to-blue-300 text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                자세히 보기
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
