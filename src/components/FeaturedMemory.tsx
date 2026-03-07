import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredMemory } from '../data/memories'

export function FeaturedMemory() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
        <img
          src={featuredMemory.image.src}
          alt={featuredMemory.image.alt}
          className="h-full min-h-[320px] w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center rounded-[2rem] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(255,245,241,0.95))] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Featured Memory</p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{featuredMemory.title}</h3>
        <p className="mt-2 text-lg text-slate-700">{featuredMemory.subtitle}</p>
        <p className="mt-5 text-base leading-8 text-slate-600">{featuredMemory.description}</p>
        <Link
          to="/albums/school-trip"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-rose-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-200/80 transition hover:bg-rose-600"
        >
          수학여행 앨범 보기
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
