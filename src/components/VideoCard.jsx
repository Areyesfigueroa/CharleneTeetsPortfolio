export default function VideoCard({ video, onClick, isSelected }) {
  const {
    title,
    description,
    youtubeId,
    thumbnailImg = 'https://picsum.photos/320/180',
    duration,
  } = video

  const href = youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : '#'

  const handleClick = onClick
    ? (e) => { e.preventDefault(); onClick() }
    : undefined

  // isSelected undefined → normal card (overlay + play button)
  // isSelected false    → strip unselected (no overlay, no icon)
  // isSelected true     → strip selected (overlay + "Now Playing")
  const isStripMode = isSelected !== undefined
  const showOverlay = !isStripMode || isSelected === true

  return (
    <a
      href={href}
      target={onClick ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="block w-[320px] no-underline"
      onClick={handleClick}
    >
      <div
        className="relative w-[320px] h-[180px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${thumbnailImg})` }}
      >
        {showOverlay && <div className="absolute inset-0 bg-black/50" />}

        {isStripMode && title && (
          <p className="absolute top-2 left-2 z-10 text-white text-xs font-medium leading-snug max-w-[90%] line-clamp-2">
            {title}
          </p>
        )}

        <div className="absolute inset-0 flex items-center justify-center z-10">
          {isSelected === true ? (
            <span className="text-white text-sm font-medium tracking-wide">Now Playing</span>
          ) : !isStripMode ? (
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 translate-x-0.5" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          ) : null}
        </div>

        {duration && (
          <span className="absolute bottom-2 right-2 z-10 text-white text-xs font-mono bg-black/70 px-1.5 py-0.5 rounded">
            {duration}
          </span>
        )}
      </div>

      {title && (
        <p
          className="text-left text-sm font-medium mt-2 mb-1"
          style={{ color: 'var(--text-h)' }}
        >
          {title}
        </p>
      )}

      {description && (
        <p
          className="text-left text-sm leading-snug line-clamp-2"
          style={{ color: 'var(--text)' }}
        >
          {description}
        </p>
      )}
    </a>
  )
}
