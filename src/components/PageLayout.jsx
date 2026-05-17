export default function PageLayout({ children }) {
  return (
    <section className="w-full h-full bg-fixed bg-green-200/20">
      <div className="w-[900px] bg-white max-w-full mx-auto px-10 py-16">
        {children}
      </div>
    </section>
  )
}
