import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export default function ExpandedGalleryModal({ onClose, images, initialIndex = 0 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: initialIndex })
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [canScrollPrev, setCanScrollPrev] = useState(initialIndex > 0)
  const [canScrollNext, setCanScrollNext] = useState(initialIndex < images.length - 1)

  const updateState = useCallback(() => {
    if (!emblaApi) return
    const index = emblaApi.selectedScrollSnap()
    setCurrentIndex(index)
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    updateState()
    emblaApi.on('select', updateState)
    emblaApi.on('reInit', updateState)
    return () => {
      emblaApi.off('select', updateState)
      emblaApi.off('reInit', updateState)
    }
  }, [emblaApi, updateState])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') emblaApi?.scrollPrev()
      if (e.key === 'ArrowRight') emblaApi?.scrollNext()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, emblaApi])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-1"
        aria-label="Close"
      >
        <XIcon />
      </button>

      {/* Mobile: full-width viewport with arrows overlaid. Desktop: arrows flank viewport in a row. */}
      <div
        className="relative w-full sm:w-auto sm:flex sm:items-center sm:gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 sm:relative sm:left-auto sm:top-auto sm:translate-y-0 flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>

        <div
          ref={emblaRef}
          className="overflow-hidden w-full sm:w-[85vw] lg:w-[85vw] xl:w-[90vw] max-w-[1200px]"
        >
          <div className="flex">
            {images.map(({ full, title }, i) => (
              <div key={i} className="flex-[0_0_100%] aspect-video">
                <img
                  src={full}
                  alt={title ?? ''}
                  className="w-full h-full object-cover block"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 sm:relative sm:right-auto sm:top-auto sm:translate-y-0 flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Next image"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile: pinned to bottom of screen. Desktop: sits below the carousel. */}
      {currentImage?.title && (
        <p
          className="absolute bottom-6 left-0 right-0 text-white text-sm text-center px-6 sm:static sm:mt-4 sm:px-0"
          onClick={(e) => e.stopPropagation()}
        >
          {currentImage.title}
        </p>
      )}
    </div>
  )
}
