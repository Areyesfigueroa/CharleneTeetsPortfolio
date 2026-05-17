export default function ProjectSection({ id, title, description, children, muted = false }) {
  return (
    <section id={id} className={`py-10 -mx-10 px-10 ${muted ? 'bg-gray-200' : ''}`}>
      <h2 className="text-2xl font-bold text-center my-6">{title}</h2>
      <p className="text-center mb-8">
        {description ?? 'Project description coming soon.'}
      </p>
      {children}
    </section>
  )
}
