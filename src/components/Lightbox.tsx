import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Photo } from '../types/content'

type LightboxProps = {
  photos: Photo[]
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

  return (
    <AnimatePresence>
      {currentPhoto ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/88 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/90 shadow-2xl"
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

            <div className="grid items-center md:grid-cols-[88px_minmax(0,1fr)_88px]">
              <button
                type="button"
                onClick={onPrevious}
                className="hidden h-full items-center justify-center text-white/75 transition hover:text-white md:flex"
                aria-label="이전 사진"
              >
                <ChevronLeft className="h-9 w-9" />
              </button>

              <div className="flex max-h-[78vh] items-center justify-center overflow-hidden bg-black">
                <img src={currentPhoto.src} alt={currentPhoto.alt} className="max-h-[78vh] w-full object-contain" />
              </div>

              <button
                type="button"
                onClick={onNext}
                className="hidden h-full items-center justify-center text-white/75 transition hover:text-white md:flex"
                aria-label="다음 사진"
              >
                <ChevronRight className="h-9 w-9" />
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-white">
              <div>
                <p className="font-medium">{currentPhoto.caption}</p>
                <p className="mt-1 text-sm text-white/65">{currentPhoto.alt}</p>
              </div>
              <div className="flex gap-2 md:hidden">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                  aria-label="이전 사진"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                  aria-label="다음 사진"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
