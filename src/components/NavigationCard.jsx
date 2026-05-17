export default function NavigationCard({ children, backgroundImage, href = '#' }) {
  return (
    <a
      href={href}
      className="relative flex-1 h-[340px] lg:h-[411px] bg-cover bg-center overflow-hidden text-center no-underline block"
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full mx-2">
        <span className="text-white uppercase text-sm font-medium tracking-widest">
          {children}
        </span>
      </div>
    </a>
  )
}
