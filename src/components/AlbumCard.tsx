import { ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Album } from '../types/albums'

type AlbumCardProps = {
  album: Album
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Link
      to={`/albums/${album.id}`}
      className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
    >
      <div className={`h-64 overflow-hidden bg-gradient-to-br ${album.accent}`}>
        <img
          src={album.coverImage}
          alt={album.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Photo Album</p>
          <h3 className="text-2xl font-semibold text-slate-900">{album.title}</h3>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
          <ImageIcon className="h-4 w-4" />
          {album.photos.length}장
        </div>
      </div>
    </Link>
  )
}
