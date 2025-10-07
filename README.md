# Portafolio — Joaquín Villaverde

Proyecto de portafolio personal construido con React, TypeScript, Vite y Tailwind CSS. Enfocado en rendimiento, accesibilidad, DX y un acabado visual profesional.

## Tecnologías

- React 19 + React DOM
- TypeScript 5
- Vite 7 (plugin `@vitejs/plugin-react-swc`)
- Tailwind CSS 3 + PostCSS + Autoprefixer
- ESLint (flat config)

## Scripts

- `npm run dev`: entorno de desarrollo con HMR
- `npm run build`: build de producción
- `npm run preview`: sirve el build localmente
- `npm run lint`: ejecuta ESLint

## Estructura

```
├─ public/           Recursos estáticos (iconos, manifest)
├─ src/
│  ├─ assets/        Imágenes y SVGs
│  ├─ App.tsx        Página principal (secciones)
│  ├─ main.tsx       Bootstrap de React
│  └─ index.css      Tailwind layers y utilidades personalizadas
├─ index.html        Shell del documento, dark mode inicial y fuentes
├─ eslint.config.js  Configuración ESLint (flat)
├─ tailwind.config.js Configuración Tailwind (darkMode, fuentes)
├─ vite.config.js    Configuración Vite
└─ tsconfig.json     Opciones de TypeScript
```

## Decisiones técnicas

- Modo oscuro por clase (`dark`) con preferencia persistida en `localStorage` y fallback a `prefers-color-scheme`.
- Animaciones progresivas con `IntersectionObserver` y utilidades `reveal`/`fade-in` en Tailwind.
- Cabecera sticky con resaltado de sección activa.
- Tipografía Inter desde Google Fonts y paleta basada en Zinc/Slate + acento naranja.

## Accesibilidad y SEO

- `lang="es"`, `meta viewport` y `color-scheme` en `index.html`.
- Botón de tema con `aria-label`.
- Enlaces de navegación con estados de foco/hover claros.
- Descripciones y títulos semánticos por sección.

## Desarrollo

1. Requisitos: Node 18+ recomendado
2. Instalar dependencias: `npm install`
3. Ejecutar entorno dev: `npm run dev`
4. Build de producción: `npm run build` y `npm run preview`

## Despliegue

El directorio `dist/` contiene artefactos listos para servir en cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Próximos pasos

- Añadir Prettier (con plugin Tailwind) y `.editorconfig`
- Mejoras SEO: metadatos OG/Twitter, `theme-color`, canonical
- Manifest y `robots.txt`
- Refactor en componentes (`Header`, `SectionTitle`, `ProjectCard`) y hook `useTheme`

## Licencia

Proyecto privado de portafolio personal.
