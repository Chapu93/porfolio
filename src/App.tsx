import { useEffect, useRef, useState } from 'react'

type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact'

function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return { isDark, setIsDark }
}

function NavLink({ to, children }: { to: SectionId; children: React.ReactNode }) {
  return (
    <a
      href={`#${to}`}
      className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
    >
      {children}
    </a>
  )
}

export default function App() {
  const { isDark, setIsDark } = useTheme()
  const [active, setActive] = useState<SectionId>('hero')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const fadeEls = Array.from(document.querySelectorAll<HTMLElement>('[data-fade]'))

    observerRef.current?.disconnect()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (target.hasAttribute('data-reveal') || target.hasAttribute('data-fade')) {
            if (entry.isIntersecting) {
              requestAnimationFrame(() => target.classList.add('show'))
            }
          }
          if (target.tagName === 'SECTION' && target.id) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              setActive(target.id as SectionId)
            }
          }
        })
      },
      { threshold: [0.1], rootMargin: '0px 0px -10% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    revealEls.forEach((el) => observer.observe(el))
    fadeEls.forEach((el) => observer.observe(el))
    observerRef.current = observer

    // Revelar de inicio los elementos ya visibles en viewport
    const vh = window.innerHeight || document.documentElement.clientHeight
    requestAnimationFrame(() => {
      ;[...revealEls, ...fadeEls].forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < vh && rect.bottom > 0) el.classList.add('show')
      })
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-full transition-colors duration-300">
      <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 backdrop-blur transition-colors duration-300 supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/40 dark:bg-slate-900/80 dark:supports-[backdrop-filter]:bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 font-semibold text-white">
              JV
            </div>
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Joaquín Villaverde</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Desarrollador Web — Front, Back y Bases de Datos
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#about"
              className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${active === 'about' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'}`}
            >
              Sobre mí
              <span
                className={`block h-0.5 rounded bg-orange-600 transition-all ${active === 'about' ? 'w-full' : 'w-0'}`}
              ></span>
            </a>
            <a
              href="#skills"
              className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${active === 'skills' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'}`}
            >
              Habilidades
              <span
                className={`block h-0.5 rounded bg-orange-600 transition-all ${active === 'skills' ? 'w-full' : 'w-0'}`}
              ></span>
            </a>
            <a
              href="#projects"
              className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${active === 'projects' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'}`}
            >
              Proyectos
              <span
                className={`block h-0.5 rounded bg-orange-600 transition-all ${active === 'projects' ? 'w-full' : 'w-0'}`}
              ></span>
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${active === 'contact' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'}`}
            >
              Contacto
              <span
                className={`block h-0.5 rounded bg-orange-600 transition-all ${active === 'contact' ? 'w-full' : 'w-0'}`}
              ></span>
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Cambiar tema"
              onClick={() => setIsDark((v) => !v)}
              className="inline-flex h-9 items-center rounded-lg border border-zinc-300 px-3 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {isDark ? '☀️ Claro' : '🌙 Oscuro'}
            </button>
          </div>
        </div>
      </header>

      <main className="bg-white dark:bg-slate-900">
        {/* Hero */}
        <section
          id="hero"
          className="border-b border-zinc-200/60 bg-inherit dark:border-slate-800/40"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-20 md:grid-cols-2">
            <div className="reveal" data-reveal>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Construyo productos web confiables y modernos
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
                Soy desarrollador full‑stack con enfoque en frontend, backend y bases de datos.
                Resido en Viedma, Río Negro, Argentina. Titulado como Técnico Superior en
                Computación con orientación administrativa.
              </p>
              <div className="mt-8 flex gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-500"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
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

        {/* Sobre mí */}
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

        {/* Habilidades */}
        <section
          id="skills"
          className="mx-auto max-w-6xl scroll-mt-24 border-t border-zinc-200/60 bg-inherit px-4 py-16 dark:border-slate-800/40"
        >
          <h2 className="fade-in underline-anim text-2xl font-semibold" data-fade>
            Habilidades
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div
              style={{ transitionDelay: '0ms' }}
              className="reveal fade-in rounded-xl border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-800 dark:hover:shadow-zinc-900/50"
              data-reveal
              data-fade
            >
              <h3 className="font-medium">Frontend</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                React, TypeScript, Tailwind CSS
              </p>
            </div>
            <div
              style={{ transitionDelay: '100ms' }}
              className="reveal fade-in rounded-xl border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-800 dark:hover:shadow-zinc-900/50"
              data-reveal
              data-fade
            >
              <h3 className="font-medium">Backend</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Node.js, REST, autenticación
              </p>
            </div>
            <div
              style={{ transitionDelay: '200ms' }}
              className="reveal fade-in rounded-xl border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-800 dark:hover:shadow-zinc-900/50"
              data-reveal
              data-fade
            >
              <h3 className="font-medium">Bases de datos</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                PostgreSQL, MySQL, modelado y consultas
              </p>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section
          id="projects"
          className="mx-auto max-w-6xl scroll-mt-24 border-t border-zinc-200/60 bg-inherit px-4 py-16 dark:border-slate-800/40"
        >
          <h2 className="fade-in underline-anim text-2xl font-semibold" data-fade>
            Proyectos
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ProjectCard
              delayMs={0}
              title="Landing Page"
              description="Página de presentación rápida y moderna con performance optimizada."
              stack="React, Tailwind"
            />
            <ProjectCard
              delayMs={100}
              title="E‑commerce"
              description="Catálogo, carrito y checkout; enfoque en UX y mantenibilidad."
              stack="React, Node, DB"
            />
            <ProjectCard
              delayMs={200}
              title="Inventario"
              description="Gestión de inventarios sin ventas; roles y reportes básicos."
              stack="React, API REST, SQL"
            />
          </div>
        </section>

        {/* Contacto */}
        <section
          id="contact"
          className="mx-auto max-w-6xl scroll-mt-24 border-t border-zinc-200/60 bg-inherit px-4 py-16 dark:border-slate-800/40"
        >
          <h2 className="fade-in underline-anim text-2xl font-semibold" data-fade>
            Contacto
          </h2>
          <form
            className="mt-6 grid max-w-xl gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Gracias por tu mensaje. Esta es una versión inicial sin envío.')
            }}
          >
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm text-zinc-600 dark:text-zinc-300">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                className="h-11 rounded-lg border border-zinc-300 bg-white px-3 transition-colors dark:border-slate-700 dark:bg-slate-900"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm text-zinc-600 dark:text-zinc-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-11 rounded-lg border border-zinc-300 bg-white px-3 transition-colors dark:border-slate-700 dark:bg-slate-900"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm text-zinc-600 dark:text-zinc-300">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="rounded-lg border border-zinc-300 bg-white px-3 py-2 transition-colors dark:border-slate-700 dark:bg-slate-900"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-fit items-center rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-500"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-zinc-200/60 bg-white transition-colors duration-300 dark:border-slate-800/40 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500 dark:text-slate-400">
          © {new Date().getFullYear()} Joaquín Villaverde. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
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
