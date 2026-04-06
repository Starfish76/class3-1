import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { AlbumPhoto } from '../types/albums'

type LightboxProps = {
  photos: AlbumPhoto[]
  currentIndex: number | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export function Lightbox({ photos, currentIndex, onClose, onPrevious, onNext }: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, onClose, onNext, onPrevious])

  const currentPhoto = currentIndex !== null ? photos[currentIndex] : null
  const currentPhotoIndex = currentIndex ?? 0

  return (
    <AnimatePresence>
      {currentPhoto ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-7xl items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/92 shadow-2xl"
            initial={{ y: 20, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="닫기"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute left-4 top-4 z-10 rounded-full bg-black/35 px-3 py-1 text-sm text-white/85">
              {currentPhotoIndex + 1} / {photos.length}
            </div>

            <button
              type="button"
              onClick={onPrevious}
              className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/75 transition hover:bg-white/20 hover:text-white md:block"
              aria-label="이전 사진"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <div className="flex max-h-[86vh] w-full items-center justify-center overflow-hidden bg-black">
              <img src={currentPhoto.src} alt={currentPhoto.alt} className="max-h-[86vh] w-full object-contain" />
            </div>

            <button
              type="button"
              onClick={onNext}
              className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white/75 transition hover:bg-white/20 hover:text-white md:block"
              aria-label="다음 사진"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:hidden">
              <button
                type="button"
                onClick={onPrevious}
                className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="이전 사진"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="다음 사진"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
