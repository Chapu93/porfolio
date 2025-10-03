export function Hero() {
  return (
    <section id="hero" className="border-b border-zinc-200/60 bg-inherit dark:border-slate-800/40">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-20 md:grid-cols-2">
        <div className="reveal" data-reveal>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Construyo productos web confiables y modernos
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Soy desarrollador full‑stack con enfoque en frontend, backend y bases de datos. Resido
            en Viedma, Río Negro, Argentina. Titulado como Técnico Superior en Computación con
            orientación administrativa.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 text-white transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Contactar
            </a>
          </div>
        </div>
        <div className="reveal md:justify-self-end" data-reveal>
          <div className="grid h-48 w-full place-items-center rounded-2xl border border-zinc-200 bg-gradient-to-br from-orange-500/20 to-amber-600/20 text-zinc-500 dark:border-slate-800 dark:text-slate-400 md:h-64 md:w-80">
            Foto/Logo (pronto)
          </div>
        </div>
      </div>
    </section>
  )
}
