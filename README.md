# 💼 Portfolio - Joaquín Villaverde

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Portfolio personal de **Joaquín Villaverde**, Desarrollador Web Full-Stack especializado en Frontend, Backend y Bases de Datos.

[🌐 Demo en Vivo](#) · [📝 Reportar Bug](../../issues) · [💡 Solicitar Feature](../../issues)

</div>

---

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS
- 🌓 **Modo Oscuro/Claro**: Tema adaptable con persistencia local
- ♿ **Accesibilidad**: Optimizado para WCAG 2.1, navegación por teclado, ARIA labels
- 📱 **Totalmente Responsivo**: Adaptado a todos los dispositivos
- ⚡ **Alto Rendimiento**: Optimizado con Vite y code splitting
- 🎭 **Animaciones Suaves**: Transiciones fluidas con Intersection Observer
- 🔍 **SEO Optimizado**: Meta tags, Open Graph, y semántica HTML5
- 🎯 **TypeScript**: Tipado estricto para mayor seguridad
- 🧩 **Componentizado**: Arquitectura modular y mantenible

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/joaquinvillaverde/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run lint:fix` | Corrige problemas de ESLint automáticamente |
| `npm run format` | Formatea el código con Prettier |
| `npm run format:check` | Verifica el formato del código |
| `npm run type-check` | Verifica tipos con TypeScript |

## 🛠️ Stack Tecnológico

### Core
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Tipado estático
- **[Vite 7](https://vitejs.dev/)** - Build tool y dev server

### Estilos
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Procesador CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Vendor prefixes automáticos

### Calidad de Código
- **[ESLint 9](https://eslint.org/)** - Linter de JavaScript/TypeScript
- **[Prettier 3](https://prettier.io/)** - Formateador de código
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Reglas de ESLint para TypeScript

### Dev Tools
- **[SWC](https://swc.rs/)** - Compilador ultra-rápido
- **[React Hooks ESLint](https://www.npmjs.com/package/eslint-plugin-react-hooks)** - Reglas para Hooks

## 📁 Estructura del Proyecto

```
portfolio/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React reutilizables
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/          # Custom React hooks
│   │   ├── useTheme.ts
│   │   └── useScrollSpy.ts
│   ├── types/          # Definiciones de tipos TypeScript
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── .vscode/            # Configuración de VSCode
├── eslint.config.js    # Configuración de ESLint
├── tailwind.config.js  # Configuración de Tailwind
├── tsconfig.json       # Configuración de TypeScript
├── vite.config.js      # Configuración de Vite
└── package.json        # Dependencias y scripts
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: Orange 600 (`#ea580c`)
- **Fondo Claro**: White / Zinc 50
- **Fondo Oscuro**: Slate 900 / Zinc 900
- **Texto**: Zinc 900 (claro) / Zinc 100 (oscuro)

### Tipografía
- **Font**: Inter (Google Fonts)
- **Weights**: 100-900 (variable)

### Animaciones
- Reveal on scroll con Intersection Observer
- Transiciones suaves de color para modo oscuro
- Hover effects en cards y botones
- Indicadores de navegación activa

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Conectar con Vercel y deploy
```

### Netlify
```bash
npm run build
# Build command: npm run build
# Publish directory: dist
```

### GitHub Pages
```bash
npm run build
# Configurar gh-pages branch con contenido de /dist
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee [CONTRIBUTING.md](./CONTRIBUTING.md) para más detalles sobre nuestro código de conducta y el proceso para enviar pull requests.

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add some AmazingFeature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](./LICENSE) para más detalles.

## 👤 Autor

**Joaquín Villaverde**
- Técnico Superior en Computación con orientación administrativa
- Desarrollador Full-Stack (Frontend, Backend, Bases de Datos)
- 📍 Viedma, Río Negro, Argentina

---

<div align="center">

### 🌟 Si te gustó este proyecto, considera darle una estrella

Made with ❤️ by Joaquín Villaverde

</div>
