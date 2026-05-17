export default function PageLayout({ children }) {
  return (
    <section
      className="w-full h-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}
    >
      <div className="w-[900px] bg-white max-w-full mx-auto px-10 py-16">
        {children}
      </div>
    </section>
  )
}
