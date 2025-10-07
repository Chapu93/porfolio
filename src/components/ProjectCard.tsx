export function ProjectCard({
  title,
  description,
  stack,
  delayMs,
}: {
  title: string
  description: string
  stack: string
  delayMs?: number
}) {
  return (
    <article
      style={{ transitionDelay: `${delayMs ?? 0}ms` }}
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
