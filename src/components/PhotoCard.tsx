import type { Photo } from '../types/content'

type PhotoCardProps = {
  photo: Photo
  onClick: () => void
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group mb-5 w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/90 text-left shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
    >
      <div className="overflow-hidden">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-medium text-slate-900">{photo.caption}</p>
          {photo.tag ? (
            <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
              {photo.tag}
            </span>
          ) : null}
        </div>
        <p className="text-sm text-slate-500">{photo.alt}</p>
      </div>
    </button>
  )
}
