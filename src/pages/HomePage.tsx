import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroBackground = '/photos/firstClassPhoto/ClassPhoto.jpg'
const samplePhotos = [
  {
    src: '/photos/firstClassPhoto/ClassPhoto.jpg',
    alt: '첫 단체 사진 예시',
    className: 'left-6 top-4 w-[15rem] -rotate-[12deg] sm:w-[18rem] lg:left-10 lg:top-0 lg:w-[18rem]',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    alt: '풍경 사진 예시',
    className: 'left-10 top-36 w-[16rem] rotate-[13deg] sm:w-[19rem] lg:left-16 lg:top-44 lg:w-[19rem]',
  },
  {
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    alt: '축제 사진 예시',
    className: 'right-1 top-22 w-[10rem] rotate-0 sm:w-[12rem] lg:right-4 lg:top-28 lg:w-[12rem]',
  },
]

export function HomePage() {
  return (
    <section className="relative isolate flex min-h-full items-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
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
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
          <div className="max-w-3xl rounded-[2.25rem] border border-white/60 bg-white/55 p-7 shadow-[0_28px_90px_rgba(15,23,42,0.18)] backdrop-blur-md sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/78 px-4 py-2 text-sm font-medium text-sky-700">
              <Sparkles className="h-4 w-4" />
              우리 반의 순간을 모아둔 디지털 아카이브
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              <span className="inline bg-pink-100/65 px-2 py-1">3-1반 추억 홈페이지</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              <span className="inline bg-pink-100/55 px-1 py-1">
                매일 지나가던 교실, 소란스럽던 체육대회, 밤까지 반짝이던 축제, 여행지의 공기까지. 3-1반의 한 해를
                사진과 짧은 문장으로 다시 꺼내볼 수 있는 공간입니다.
              </span>
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
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/78 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-white"
              >
                베스트 순간 보기
              </Link>
            </div>
          </div>

          <div className="relative hidden h-[28rem] lg:block">
            {samplePhotos.map((photo) => (
              <div
                key={photo.alt}
                className={`absolute overflow-hidden rounded-[0.35rem] border-[5px] border-slate-950 bg-white shadow-[0_22px_50px_rgba(15,23,42,0.22)] ${photo.className}`}
              >
                <img src={photo.src} alt={photo.alt} className="aspect-[4/3] h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
