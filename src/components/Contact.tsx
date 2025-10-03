import { FormEvent } from 'react'

export function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Gracias por tu mensaje. Esta es una versión inicial sin envío.')
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 border-t border-zinc-200/60 bg-inherit px-4 py-16 dark:border-slate-800/40"
    >
      <h2 className="fade-in underline-anim text-2xl font-semibold" data-fade>
        Contacto
      </h2>
      <form className="mt-6 grid max-w-xl gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm text-zinc-600 dark:text-zinc-300">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            required
            className="h-11 rounded-lg border border-zinc-300 bg-white px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-slate-700 dark:bg-slate-900"
            aria-required="true"
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
            className="h-11 rounded-lg border border-zinc-300 bg-white px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-slate-700 dark:bg-slate-900"
            aria-required="true"
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
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-slate-700 dark:bg-slate-900"
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-fit items-center rounded-lg bg-orange-600 px-4 py-2 text-white transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
