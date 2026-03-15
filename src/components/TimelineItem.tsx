import type { TimelineEntry } from '../types/content'

type TimelineItemProps = {
  item: TimelineEntry
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className="grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:grid-cols-[140px_minmax(0,1fr)] md:p-5">
      <div className="flex items-start">
        <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
          {item.month}
        </span>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-3 leading-8 text-slate-600">{item.description}</p>
        </div>
        <img src={item.photo} alt={item.title} loading="lazy" className="h-52 w-full rounded-[1.25rem] object-cover" />
      </div>
    </article>
  )
}
