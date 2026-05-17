import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

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

export default function ImageCarousel({ images, title }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(images.length > 1)

  const [mainRef, mainApi] = useEmblaCarousel({ watchDrag: false })
  const [thumbRef, thumbApi] = useEmblaCarousel({ containScroll: 'keepSnaps', dragFree: true })

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    const index = mainApi.selectedScrollSnap()
    setSelectedIndex(index)
    setCanScrollPrev(mainApi.canScrollPrev())
    setCanScrollNext(mainApi.canScrollNext())
    thumbApi.scrollTo(index)
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on('select', onSelect)
    mainApi.on('reInit', onSelect)
    return () => {
      mainApi.off('select', onSelect)
      mainApi.off('reInit', onSelect)
    }
  }, [mainApi, onSelect])

  const handleThumbClick = useCallback((index) => {
    if (!mainApi) return
    mainApi.scrollTo(index)
  }, [mainApi])

  return (
    <div className="flex flex-col gap-3">
      {title && (
        <p className="text-center text-sm font-medium" style={{ color: 'var(--text-h)' }}>
          {title}
        </p>
      )}

      {/* Main carousel — arrows overlay inside the image */}
      <div className="relative">
        <button
          onClick={() => mainApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full border transition-opacity disabled:opacity-0 disabled:pointer-events-none"
          style={{
            backgroundColor: 'var(--bg)',
            borderColor: 'var(--border)',
            color: 'var(--text-h)',
            boxShadow: 'var(--shadow)',
            cursor: 'pointer',
          }}
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>

        <div ref={mainRef} className="overflow-hidden">
          <div className="flex">
            {images.map(({ image }, i) => (
              <div key={i} className="flex-[0_0_100%] aspect-[445/279]">
                <img src={image} alt="" className="w-full h-full object-cover block" />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => mainApi?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full border transition-opacity disabled:opacity-0 disabled:pointer-events-none"
          style={{
            backgroundColor: 'var(--bg)',
            borderColor: 'var(--border)',
            color: 'var(--text-h)',
            boxShadow: 'var(--shadow)',
            cursor: 'pointer',
          }}
          aria-label="Next image"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div ref={thumbRef} className="overflow-hidden">
        <div className="flex gap-2">
          {images.map(({ thumbnailImg }, i) => (
            <button
              key={i}
              onClick={() => handleThumbClick(i)}
              className="flex-[0_0_auto] transition-opacity"
              style={{ opacity: i === selectedIndex ? 1 : 0.45, cursor: 'pointer' }}
              aria-label={`Go to image ${i + 1}`}
            >
              <img
                src={thumbnailImg}
                alt=""
                className="w-[86px] h-[48px] object-cover block"
                style={i === selectedIndex ? { outline: '2px solid var(--accent)', outlineOffset: '2px' } : {}}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
