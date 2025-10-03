export function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 bg-white transition-colors duration-300 dark:border-slate-800/40 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500 dark:text-slate-400">
        © {new Date().getFullYear()} Joaquín Villaverde. Todos los derechos reservados.
      </div>
    </footer>
  )
}
