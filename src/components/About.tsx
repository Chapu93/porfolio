export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-24 border-t border-zinc-200/60 bg-inherit px-4 py-16 dark:border-slate-800/40"
    >
      <h2 className="fade-in underline-anim text-2xl font-semibold" data-fade>
        Sobre mí
      </h2>
      <p className="reveal mt-3 text-zinc-600 dark:text-zinc-300" data-reveal>
        Me especializo en crear interfaces limpias y APIs escalables. Disfruto optimizar
        rendimiento, accesibilidad y DX. Busco aportar valor medible a equipos ambiciosos.
      </p>
    </section>
  )
}
