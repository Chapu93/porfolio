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
    <a href={`#${to}`} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
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

    observerRef.current?.disconnect()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (target.hasAttribute('data-reveal')) {
            if (entry.isIntersecting) target.classList.add('show')
          }
          if (target.tagName === 'SECTION' && target.id) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
              setActive(target.id as SectionId)
            }
          }
        })
      },
      { threshold: [0.1, 0.25, 0.5] }
    )

    sections.forEach((s) => observer.observe(s))
    revealEls.forEach((el) => observer.observe(el))
    observerRef.current = observer

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-full transition-colors duration-300">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center font-semibold">
              JV
            </div>
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Joaquín Villaverde</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">Desarrollador Web — Front, Back y Bases de Datos</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${active === 'about' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'}`}>Sobre mí
              <span className={`block h-0.5 rounded bg-indigo-600 transition-all ${active === 'about' ? 'w-full' : 'w-0'}`}></span>
            </a>
            <a href="#skills" className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${active === 'skills' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'}`}>Habilidades
              <span className={`block h-0.5 rounded bg-indigo-600 transition-all ${active === 'skills' ? 'w-full' : 'w-0'}`}></span>
            </a>
            <a href="#projects" className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${active === 'projects' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'}`}>Proyectos
              <span className={`block h-0.5 rounded bg-indigo-600 transition-all ${active === 'projects' ? 'w-full' : 'w-0'}`}></span>
            </a>
            <a href="#contact" className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${active === 'contact' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'}`}>Contacto
              <span className={`block h-0.5 rounded bg-indigo-600 transition-all ${active === 'contact' ? 'w-full' : 'w-0'}`}></span>
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Cambiar tema"
              onClick={() => setIsDark((v) => !v)}
              className="inline-flex h-9 items-center rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {isDark ? '☀️ Claro' : '🌙 Oscuro'}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div className="mx-auto max-w-6xl px-4 py-20 grid gap-8 md:grid-cols-2 items-center">
            <div className="reveal" data-reveal>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Construyo productos web confiables y modernos
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
                Soy desarrollador full‑stack con enfoque en frontend, backend y bases de datos. Resido en Viedma, Río Negro, Argentina. Titulado como Técnico Superior en Computación con orientación administrativa.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#projects" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">Ver proyectos</a>
                <a href="#contact" className="inline-flex items-center rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">Contactar</a>
              </div>
            </div>
            <div className="md:justify-self-end reveal" data-reveal>
              <div className="h-48 md:h-64 w-full md:w-80 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-600/20 border border-zinc-200 dark:border-zinc-800 grid place-items-center text-zinc-500 dark:text-zinc-400">
                Foto/Logo (pronto)
              </div>
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Sobre mí</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 reveal" data-reveal>
            Me especializo en crear interfaces limpias y APIs escalables. Disfruto optimizar rendimiento, accesibilidad y DX. Busco aportar valor medible a equipos ambiciosos.
          </p>
        </section>

        {/* Habilidades */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Habilidades</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 reveal" data-reveal>
              <h3 className="font-medium">Frontend</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 reveal" data-reveal>
              <h3 className="font-medium">Backend</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Node.js, REST, autenticación</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 reveal" data-reveal>
              <h3 className="font-medium">Bases de datos</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">PostgreSQL, MySQL, modelado y consultas</p>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Proyectos</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ProjectCard title="Landing Page" description="Página de presentación rápida y moderna con performance optimizada." stack="React, Tailwind" />
            <ProjectCard title="E‑commerce" description="Catálogo, carrito y checkout; enfoque en UX y mantenibilidad." stack="React, Node, DB" />
            <ProjectCard title="Inventario" description="Gestión de inventarios sin ventas; roles y reportes básicos." stack="React, API REST, SQL" />
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <form
            className="mt-6 grid gap-4 max-w-xl"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Gracias por tu mensaje. Esta es una versión inicial sin envío.')
            }}
          >
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm text-zinc-600 dark:text-zinc-300">Nombre</label>
              <input id="name" name="name" required className="h-11 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm text-zinc-600 dark:text-zinc-300">Email</label>
              <input id="email" name="email" type="email" required className="h-11 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm text-zinc-600 dark:text-zinc-300">Mensaje</label>
              <textarea id="message" name="message" rows={4} required className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2" />
            </div>
            <button type="submit" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 w-fit">Enviar</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Joaquín Villaverde. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, stack }: { title: string; description: string; stack: string }) {
  return (
    <article className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors reveal" data-reveal>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
      <p className="mt-3 text-xs text-zinc-500">Stack: {stack}</p>
      <div className="mt-4 h-32 rounded-lg bg-zinc-100 dark:bg-zinc-900 grid place-items-center text-zinc-400 dark:text-zinc-600">Captura próximamente</div>
    </article>
  )
}

