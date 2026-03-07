import { PageHero } from '../components/PageHero'
import { allPhotos, bestMomentSections } from '../data/memories'

export function BestMomentsPage() {
  return (
    <div className="space-y-10">
      <PageHero label="Best Moments" title="올해 가장 오래 남을 장면들" description="단체사진, 웃긴 사진, 감동 사진, 레전드 컷으로 나눠서 3-1반의 분위기를 다시 모았습니다." />
      <section className="space-y-8">
        {bestMomentSections.map((section) => {
          const photos = section.photoIds.map((id) => allPhotos.find((photo) => photo.id === id)).filter((photo) => photo !== undefined)

          return (
            <article key={section.id} className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold text-slate-900">{section.title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{section.description}</p>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {photos.map((photo) => (
                  <figure key={photo.id} className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="h-72 w-full object-cover" />
                    <figcaption className="space-y-1 bg-white p-4">
                      <p className="font-medium text-slate-900">{photo.caption}</p>
                      <p className="text-sm text-slate-500">{photo.albumTitle}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}
