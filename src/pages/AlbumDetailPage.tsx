import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Lightbox } from '../components/Lightbox'
import { PageHero } from '../components/PageHero'
import { PhotoCard } from '../components/PhotoCard'
import { albums } from '../data/albums'
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

      <PageHero
        label="Album"
        title={album.title}
        description={`${formatPhotoCount(album.photos.length)}만 보이도록 정리한 앨범입니다.`}
      />

      <section className="columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4">
        {album.photos.map((photo, index) => (
          <PhotoCard key={photo.id} photo={photo} onClick={() => openPhoto(index)} />
        ))}
      </section>

      <Lightbox photos={album.photos} currentIndex={activeIndex} onClose={closePhoto} onPrevious={showPrevious} onNext={showNext} />
    </div>
  )
}
