import { render, screen } from '@testing-library/react'
import App from './App'
import { I18nProvider } from './i18n'

test('render hero title', () => {
  render(
    <I18nProvider defaultLocale="es">
      <App />
    </I18nProvider>
  )
  expect(screen.getByText(/Construyo productos web/i)).toBeInTheDocument()
})
