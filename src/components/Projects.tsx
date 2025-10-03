import type { ProjectCardProps } from '../types'

export function Projects() {
  const projects = [
    {
      title: 'Landing Page',
      description: 'Página de presentación rápida y moderna con performance optimizada.',
      stack: 'React, Tailwind',
      delayMs: 0,
    },
    {
      title: 'E‑commerce',
      description: 'Catálogo, carrito y checkout; enfoque en UX y mantenibilidad.',
      stack: 'React, Node, DB',
      delayMs: 100,
    },
    {
      title: 'Inventario',
      description: 'Gestión de inventarios sin ventas; roles y reportes básicos.',
      stack: 'React, API REST, SQL',
      delayMs: 200,
    },
  ]

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 border-t border-zinc-200/60 bg-inherit px-4 py-16 dark:border-slate-800/40"
    >
      <h2 className="fade-in underline-anim text-2xl font-semibold" data-fade>
        Proyectos
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ title, description, stack, delayMs = 0 }: ProjectCardProps) {
  return (
    <article
      style={{ transitionDelay: `${delayMs}ms` }}
      className="reveal fade-in rounded-2xl border border-zinc-200 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md dark:border-slate-800/40 dark:hover:border-orange-600 dark:hover:shadow-black/30"
      data-reveal
      data-fade
    >
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
      <p className="mt-3 text-xs text-zinc-500">Stack: {stack}</p>
      <div className="mt-4 grid h-32 place-items-center rounded-lg bg-zinc-100 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600">
        Captura próximamente
      </div>
    </article>
  )
}
