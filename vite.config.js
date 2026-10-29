import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// Podstrony: każda ma własny katalog z index.html (np. kontakt/index.html → /kontakt/)
const subpages = [
  'warsztaty-ai',
  'warsztaty-ai-dla-firm',
  'automatyzacje',
  'audyt-procesu',
  'szablony',
  'kontakt',
  'polityka-prywatnosci',
  'regulamin',
]

const resolvePage = (path) => fileURLToPath(new URL(path, import.meta.url))

// Lokalnie (npm run dev / preview) przekierowuje /kontakt → /kontakt/ z zachowaniem ?usluga=,
// tak jak robi to hosting Cloudflare. Bez tego Vite pokazałby stronę główną.
const trailingSlashRedirect = () => {
  const middleware = (req, res, next) => {
    const [path, query] = req.url.split('?')
    if (subpages.includes(path.replace(/^\//, ''))) {
      res.statusCode = 301
      res.setHeader('Location', `${path}/${query ? `?${query}` : ''}`)
      res.end()
      return
    }
    next()
  }
  return {
    name: 'trailing-slash-redirect',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export default defineConfig({
  plugins: [react(), trailingSlashRedirect()],
  build: {
    rollupOptions: {
      input: {
        main: resolvePage('./index.html'),
        ...Object.fromEntries(subpages.map((p) => [p, resolvePage(`./${p}/index.html`)])),
      },
    },
  },
})
