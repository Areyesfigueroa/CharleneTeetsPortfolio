export default function ProjectSection({ id, title, description, children }) {
  return (
    <section id={id} className="py-16">
      <h2 className="text-2xl font-bold text-center my-6">{title}</h2>
      <p className="text-center mb-8">
        {description ?? 'Project description coming soon.'}
      </p>
      {children}
    </section>
  )
}
