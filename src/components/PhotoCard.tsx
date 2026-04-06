import type { AlbumPhoto } from '../types/albums'

type PhotoCardProps = {
  photo: AlbumPhoto
  onClick: () => void
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group mb-6 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/92 text-left shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="block h-auto w-full transition duration-500 group-hover:scale-[1.015]"
      />
    </button>
  )
}
