import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import VideoCard from './VideoCard'

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

export default function VideoModal({ onClose, videos, initialIndex = 0, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: initialIndex })
  const [canScrollPrev, setCanScrollPrev] = useState(initialIndex > 0)
  const [canScrollNext, setCanScrollNext] = useState(initialIndex < videos.length - 1)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const updateButtons = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    updateButtons()
    emblaApi.on('select', updateButtons)
    emblaApi.on('reInit', updateButtons)
    return () => {
      emblaApi.off('select', updateButtons)
      emblaApi.off('reInit', updateButtons)
    }
  }, [emblaApi, updateButtons])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 flex-shrink-0">
        {title ? (
          <span className="text-sm font-medium uppercase tracking-wider text-white/50">
            {title}
          </span>
        ) : (
          <span />
        )}
        <button
          onClick={onClose}
          className="text-white/50 hover:text-white transition-colors p-1"
          aria-label="Close"
        >
          <XIcon />
        </button>
      </div>

      {/* Centering wrapper */}
      <div className="flex-1 flex items-center justify-center">

      {/* Carousel */}
      <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh] max-h-[518px]">

        {videos.length > 1 && (
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous video"
          >
            <ChevronLeft />
          </button>
        )}

        <div ref={emblaRef} className="overflow-hidden h-full w-full">
          <div className="flex h-full">
            {videos.map((video) => (
              <div
                key={video.youtubeId}
                className="flex-[0_0_100%] h-full flex flex-col md:flex-row gap-6 px-16 py-8"
              >
                {/* iframe — 2/3 */}
                <div className="w-full md:w-2/3 max-w-[922px]">
                  <div className="relative h-0 pb-[56.25%] md:pb-0 md:h-full">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  </div>
                </div>

                {/* Info panel — 1/3 */}
                <div className="w-full md:w-1/3 flex flex-col gap-2 overflow-y-auto">
                  <h2 className="text-lg font-medium leading-snug text-white">
                    {video.title}
                  </h2>
                  {video.duration && (
                    <span className="text-sm text-white/50">{video.duration}</span>
                  )}
                  <p className="text-sm leading-relaxed text-white/70">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {videos.length > 1 && (
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next video"
          >
            <ChevronRight />
          </button>
        )}
      </div>
      </div>

      {/* Thumbnail strip */}
      {videos.length > 1 && (
        <div className="flex-shrink-0 py-4 px-16 overflow-x-auto">
          <div className="flex gap-3">
            {videos.map((video, index) => (
              <VideoCard
                key={video.youtubeId}
                video={video}
                isSelected={index === currentIndex}
                onClick={() => {
                  setCurrentIndex(index)
                  emblaApi?.scrollTo(index)
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
