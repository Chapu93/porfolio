import type { SectionId } from '../types/sections'

export function Header({
  active,
  isDark,
  toggleTheme,
}: {
  active: SectionId
  isDark: boolean
  toggleTheme: () => void
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 backdrop-blur transition-colors duration-300 supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/40 dark:bg-slate-900/80 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 font-semibold text-white">JV</div>
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Joaquín Villaverde</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500">Desarrollador Web — Front, Back y Bases de Datos</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {(['about', 'skills', 'projects', 'contact'] as SectionId[]).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium hover:text-zinc-900 dark:hover:text-white ${
                active === id ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-300'
              }`}
            >
              {id === 'about'
                ? 'Sobre mí'
                : id === 'skills'
                ? 'Habilidades'
                : id === 'projects'
                ? 'Proyectos'
                : 'Contacto'}
              <span className={`block h-0.5 rounded bg-orange-600 transition-all ${active === id ? 'w-full' : 'w-0'}`}></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Cambiar tema"
            onClick={toggleTheme}
            className="inline-flex h-9 items-center rounded-lg border border-zinc-300 px-3 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {isDark ? '☀️ Claro' : '🌙 Oscuro'}
          </button>
        </div>
      </div>
    </header>
  )
}

