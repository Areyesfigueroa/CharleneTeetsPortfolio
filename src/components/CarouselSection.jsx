import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import VideoModal from './VideoModal'

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export default function CarouselSection({ videos, title }) {
  const [openIndex, setOpenIndex] = useState(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', watchDrag: false })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateButtons = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
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

  return (
    <>
      {title && (
        <p
          className="ml-[44px] mb-3 text-left text-sm font-medium"
          style={{ color: 'var(--text-h)' }}
        >
          {title}
        </p>
      )}
    <div className="relative mx-10">
      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        className="absolute left-0 z-10 top-[90px] -translate-y-1/2 -translate-x-[44px] w-9 h-9 flex items-center justify-center rounded-full border transition-opacity disabled:opacity-30 disabled:pointer-events-none"
        style={{
          backgroundColor: 'var(--bg)',
          borderColor: 'var(--border)',
          color: 'var(--text-h)',
          boxShadow: 'var(--shadow)',
          cursor: 'pointer'
        }}
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-3">
          {videos.map((video, index) => (
            <div key={video.youtubeId} className="flex-[0_0_auto]">
              <VideoCard video={video} onClick={() => setOpenIndex(index)} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        className="absolute right-0 z-10 top-[90px] -translate-y-1/2 translate-x-[44px] w-9 h-9 flex items-center justify-center rounded-full border transition-opacity disabled:opacity-30 disabled:pointer-events-none"
        style={{
          backgroundColor: 'var(--bg)',
          borderColor: 'var(--border)',
          color: 'var(--text-h)',
          boxShadow: 'var(--shadow)',
          cursor: 'pointer'
        }}
        aria-label="Next"
      >
        <ChevronRight />
      </button>
    </div>

    {openIndex !== null && (
      <VideoModal
        videos={videos}
        initialIndex={openIndex}
        title={title}
        onClose={() => setOpenIndex(null)}
      />
    )}
  </>
  )
}
