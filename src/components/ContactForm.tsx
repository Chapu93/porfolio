import { useState } from 'react'
import { sendContact } from '../lib/contact'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  return (
    <form
      className="mt-6 grid max-w-xl gap-4"
      onSubmit={async (e) => {
        e.preventDefault()
        setResult(null)
        setLoading(true)
        const res = await sendContact({ name, email, message })
        setLoading(false)
        if (res.ok) {
          setResult({ type: 'success', text: '¡Gracias! Responderé a la brevedad.' })
          setName('')
          setEmail('')
          setMessage('')
        } else {
          setResult({ type: 'error', text: res.error ?? 'Ocurrió un error. Intenta nuevamente.' })
        }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 transition-colors dark:border-slate-700 dark:bg-slate-900"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-fit items-center rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Enviando…' : 'Enviar'}
        </button>
        {result && (
          <p className={`text-sm ${result.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {result.text}
          </p>
        )}
      </div>
    </form>
  )
}

