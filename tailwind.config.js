/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
    },
  },
  plugins: [forms, typography],
}
