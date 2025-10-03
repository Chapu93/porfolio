# Guía de Contribución

Gracias por tu interés en contribuir a este proyecto. Aquí encontrarás las pautas para hacerlo de manera efectiva.

## 🚀 Configuración del Entorno

1. **Fork y Clone**
   ```bash
   git clone https://github.com/tu-usuario/portfolio.git
   cd portfolio
   ```

2. **Instalar Dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en Desarrollo**
   ```bash
   npm run dev
   ```

## 📝 Flujo de Trabajo

1. Crea una rama para tu feature o fix:
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```

2. Realiza tus cambios siguiendo las convenciones del proyecto

3. Asegúrate de que el código pase las verificaciones:
   ```bash
   npm run type-check
   npm run lint
   npm run format:check
   ```

4. Haz commit de tus cambios con mensajes descriptivos:
   ```bash
   git commit -m "feat: agregar nueva funcionalidad"
   ```

5. Push a tu fork y crea un Pull Request

## 🎨 Estándares de Código

- **TypeScript**: Usa tipado estricto, evita `any`
- **React**: Usa componentes funcionales y hooks
- **Estilos**: Usa Tailwind CSS, evita CSS inline cuando sea posible
- **Formato**: El código debe pasar `npm run format` (Prettier)
- **Lint**: El código debe pasar `npm run lint` (ESLint)

## 🔍 Tipos de Commits

Usa el formato de [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan el código)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Cambios en el proceso de build o herramientas

## 🐛 Reportar Bugs

Cuando reportes un bug, incluye:

1. Descripción clara del problema
2. Pasos para reproducirlo
3. Comportamiento esperado vs actual
4. Screenshots si es aplicable
5. Información del navegador/sistema

## 💡 Sugerir Mejoras

Las sugerencias son bienvenidas. Por favor:

1. Verifica que no exista una issue similar
2. Describe claramente la mejora
3. Explica por qué sería útil
4. Proporciona ejemplos si es posible

## ✅ Checklist Pre-PR

Antes de enviar un Pull Request:

- [ ] El código compila sin errores (`npm run build`)
- [ ] Pasa todas las verificaciones de tipos (`npm run type-check`)
- [ ] Pasa el linter (`npm run lint`)
- [ ] Está formateado correctamente (`npm run format`)
- [ ] Los cambios están documentados si es necesario
- [ ] Has probado los cambios manualmente

## 📚 Recursos

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

¡Gracias por contribuir! 🎉
