export function Skills() {
  const skills = [
    {
      title: 'Frontend',
      description: 'React, TypeScript, Tailwind CSS',
      delay: 0,
    },
    {
      title: 'Backend',
      description: 'Node.js, REST, autenticación',
      delay: 100,
    },
    {
      title: 'Bases de datos',
      description: 'PostgreSQL, MySQL, modelado y consultas',
      delay: 200,
    },
  ]

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 border-t border-zinc-200/60 bg-inherit px-4 py-16 dark:border-slate-800/40"
    >
      <h2 className="fade-in underline-anim text-2xl font-semibold" data-fade>
        Habilidades
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            style={{ transitionDelay: `${skill.delay}ms` }}
            className="reveal fade-in rounded-xl border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-800 dark:hover:shadow-zinc-900/50"
            data-reveal
            data-fade
          >
            <h3 className="font-medium">{skill.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
