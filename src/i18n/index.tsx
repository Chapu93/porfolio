import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { messages, type Locale } from './messages'

type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children, defaultLocale }: { children: React.ReactNode; defaultLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (defaultLocale) return defaultLocale
    const stored = localStorage.getItem('lang') as Locale | null
    if (stored === 'es' || stored === 'en') return stored
    const nav = navigator.language.toLowerCase()
    return nav.startsWith('en') ? 'en' : 'es'
  })

  useEffect(() => {
    localStorage.setItem('lang', locale)
  }, [locale])

  const t = useMemo(() => {
    const dict = messages[locale]
    return (key: string) => dict[key] ?? key
  }, [locale])

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de I18nProvider')
  return ctx
}
