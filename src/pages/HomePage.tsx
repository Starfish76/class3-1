import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroBackground = '/photos/firstClassPhoto/ClassPhoto.jpg'

export function HomePage() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-88px)] items-center overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-[6px]"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(110deg,rgba(241,247,255,0.94)_0%,rgba(241,247,255,0.8)_38%,rgba(226,238,255,0.46)_62%,rgba(212,228,247,0.3)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.2),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_28%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="max-w-3xl rounded-[2rem] border border-white/55 bg-white/28 p-7 shadow-[0_28px_90px_rgba(15,23,42,0.18)] backdrop-blur-md sm:p-10 lg:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/72 px-4 py-2 text-sm font-medium text-sky-700">
            <Sparkles className="h-4 w-4" />
            우리 반의 순간을 모아둔 디지털 아카이브
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            3-1반 추억 홈페이지
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            매일 지나가던 교실, 소란스럽던 체육대회, 밤까지 반짝이던 축제, 여행지의 공기까지. 3-1반의 한 해를
            사진과 짧은 문장으로 다시 꺼내볼 수 있는 공간입니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/albums"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-300/60 transition hover:bg-sky-600"
            >
              앨범 바로 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/best-moments"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-white"
            >
              베스트 순간 보기
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
