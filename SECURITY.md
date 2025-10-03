# Política de Seguridad

## 🔒 Versiones Soportadas

| Versión | Soportada          |
| ------- | ------------------ |
| 0.x.x   | :white_check_mark: |

## 🐛 Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad, por favor NO abras un issue público.

En su lugar:

1. **Envía un email a**: [tu-email@ejemplo.com]
2. **Incluye**:
   - Descripción detallada de la vulnerabilidad
   - Pasos para reproducirla
   - Impacto potencial
   - Posibles soluciones (si las tienes)

## ⏱️ Tiempo de Respuesta

- **Respuesta inicial**: Dentro de 48 horas
- **Actualización de estado**: Cada 7 días
- **Resolución esperada**: 30 días (dependiendo de la severidad)

## 🛡️ Mejores Prácticas de Seguridad

Este proyecto sigue estas prácticas de seguridad:

### Dependencias
- ✅ Revisión regular de dependencias con `npm audit`
- ✅ Actualización periódica de paquetes
- ✅ Uso de versiones específicas en package.json

### Código
- ✅ TypeScript con tipado estricto
- ✅ ESLint con reglas de seguridad
- ✅ Validación de formularios
- ✅ Sanitización de inputs (cuando aplique)

### Build y Deploy
- ✅ Variables de entorno para configuración sensible
- ✅ Build con source maps deshabilitados en producción
- ✅ Headers de seguridad configurados (CSP, HSTS, etc.)

## 📚 Recursos

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [npm Security Best Practices](https://docs.npmjs.com/about-security-best-practices)
- [React Security Best Practices](https://snyk.io/blog/10-react-security-best-practices/)

---

Gracias por ayudar a mantener este proyecto seguro 🙏
