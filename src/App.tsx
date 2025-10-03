import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'
import { Header, Hero, About, Skills, Projects, Contact, Footer } from './components'

export default function App() {
  const { isDark, setIsDark } = useTheme()
  const activeSection = useScrollSpy()

  return (
    <div className="min-h-full transition-colors duration-300">
      <Header
        isDark={isDark}
        onToggleTheme={() => setIsDark((v) => !v)}
        activeSection={activeSection}
      />

      <main className="bg-white dark:bg-slate-900">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
