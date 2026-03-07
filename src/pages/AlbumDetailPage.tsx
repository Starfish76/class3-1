import { CalendarDays, ChevronLeft, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Lightbox } from '../components/Lightbox'
import { PageHero } from '../components/PageHero'
import { PhotoCard } from '../components/PhotoCard'
import { albums } from '../data/memories'
import { formatPhotoCount } from '../utils/format'

export function AlbumDetailPage() {
  const { albumId } = useParams()
  const album = albums.find((item) => item.id === albumId)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  if (!albumId) return <Navigate to="/albums" replace />
  if (!album) return <Navigate to="/not-found" replace />

  const openPhoto = (index: number) => setActiveIndex(index)
  const closePhoto = () => setActiveIndex(null)
  const showPrevious = () => setActiveIndex((prev) => (prev === null ? null : (prev - 1 + album.photos.length) % album.photos.length))
  const showNext = () => setActiveIndex((prev) => (prev === null ? null : (prev + 1) % album.photos.length))

  return (
    <div className="space-y-10">
      <Link to="/albums" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white">
        <ChevronLeft className="h-4 w-4" />
        앨범 목록으로
      </Link>

      <PageHero label={album.location} title={album.title} description={album.description} />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <p className="text-sm text-slate-500">촬영일</p>
          <p className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <CalendarDays className="h-5 w-5 text-rose-500" />
            {album.date}
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <p className="text-sm text-slate-500">장소</p>
          <p className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <MapPin className="h-5 w-5 text-rose-500" />
            {album.location}
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <p className="text-sm text-slate-500">사진 수</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{formatPhotoCount(album.photos.length)}</p>
        </div>
      </section>

      <section className="columns-1 gap-5 sm:columns-2 xl:columns-3">
        {album.photos.map((photo, index) => (
          <PhotoCard key={photo.id} photo={photo} onClick={() => openPhoto(index)} />
        ))}
      </section>

      <Lightbox photos={album.photos} currentIndex={activeIndex} onClose={closePhoto} onPrevious={showPrevious} onNext={showNext} />
    </div>
  )
}
