# 🚀 Guía de Despliegue

Esta guía describe cómo desplegar el portfolio en diferentes plataformas.

## 📋 Pre-requisitos

Antes de desplegar, asegúrate de que:

- [ ] El proyecto compila sin errores: `npm run build`
- [ ] Los tests pasan (si los hay)
- [ ] El código está formateado: `npm run format`
- [ ] No hay errores de lint: `npm run lint`
- [ ] La verificación de tipos es exitosa: `npm run type-check`

## 🌐 Vercel (Recomendado)

Vercel es ideal para proyectos React/Vite.

### Despliegue Automático

1. **Conectar con GitHub**
   ```bash
   # Push tu código a GitHub
   git push origin main
   ```

2. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración de Vite

3. **Configuración**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Despliegue Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Variables de Entorno

En el dashboard de Vercel:
- Settings → Environment Variables
- Agregar las variables necesarias con prefijo `VITE_`

## 🦊 Netlify

### Despliegue con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

### Configuración en netlify.toml

Crea un archivo `netlify.toml` en la raíz:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Despliegue desde GitHub

1. Ve a [app.netlify.com](https://app.netlify.com)
2. "New site from Git"
3. Conecta tu repositorio
4. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📄 GitHub Pages

### Usando gh-pages

```bash
# Instalar gh-pages
npm install -D gh-pages

# Agregar scripts en package.json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

### Configuración de Vite

Actualiza `vite.config.js`:

```js
export default defineConfig({
  base: '/nombre-repositorio/', // Reemplaza con el nombre de tu repo
  // ... resto de la configuración
})
```

### GitHub Actions

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## ☁️ Cloudflare Pages

### Despliegue desde Git

1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
2. Pages → Create a project
3. Conecta tu repositorio
4. Configuración:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

### Wrangler CLI

```bash
# Instalar Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages publish dist
```

## 🐳 Docker

Crea un `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Y un `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Build y ejecutar:

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## 🔧 Configuración de Dominio Personalizado

### En Vercel
1. Settings → Domains
2. Add Domain
3. Sigue las instrucciones de DNS

### En Netlify
1. Domain settings
2. Add custom domain
3. Configura los DNS records

### Configuración DNS Típica

```
Type    Name    Value
A       @       [IP del servicio]
CNAME   www     [dominio del servicio]
```

## 🔒 SSL/HTTPS

Todas las plataformas mencionadas proveen SSL/HTTPS gratuito:
- **Vercel**: Automático
- **Netlify**: Automático (Let's Encrypt)
- **Cloudflare**: Automático
- **GitHub Pages**: Automático

## 📊 Monitoreo Post-Deploy

Después del despliegue:

1. **Verificar funcionalidad**
   - [ ] Todas las páginas cargan correctamente
   - [ ] Las animaciones funcionan
   - [ ] El modo oscuro/claro funciona
   - [ ] El formulario de contacto funciona
   - [ ] Las imágenes se cargan

2. **Performance**
   - Usa [Lighthouse](https://developers.google.com/web/tools/lighthouse)
   - Verifica [PageSpeed Insights](https://pagespeed.web.dev/)
   - Revisa [GTmetrix](https://gtmetrix.com/)

3. **SEO**
   - Verifica meta tags con herramientas como [metatags.io](https://metatags.io/)
   - Revisa Open Graph con [opengraph.xyz](https://www.opengraph.xyz/)

## 🐛 Troubleshooting

### Error: "Page not found" en rutas

**Solución**: Configurar rewrites/redirects para SPA

### Error de compilación

```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Variables de entorno no funcionan

- Verifica que tengan el prefijo `VITE_`
- Reinicia el build después de agregarlas
- En producción, agrégalas en el dashboard de la plataforma

---

¿Problemas? Abre un [issue](../../issues) en GitHub.
