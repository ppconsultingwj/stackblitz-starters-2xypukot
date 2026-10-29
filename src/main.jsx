import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Każda podstrona ma własny plik HTML (np. kontakt/index.html) z <div id="root" data-page="...">.
// Dzięki temu działa wejście bezpośrednio z linku, a title i meta description są w HTML.
const pages = {
  home: () => import('./pages/Home.jsx'),
  'warsztaty-ai': () => import('./pages/Warsztaty.jsx'),
  'warsztaty-ai-dla-firm': () => import('./pages/WarsztatyFirmy.jsx'),
  automatyzacje: () => import('./pages/Automatyzacje.jsx'),
  'audyt-procesu': () => import('./pages/AudytProcesu.jsx'),
  szablony: () => import('./pages/Szablony.jsx'),
  kontakt: () => import('./pages/Kontakt.jsx'),
  'polityka-prywatnosci': () => import('./pages/PolitykaPrywatnosci.jsx'),
  regulamin: () => import('./pages/Regulamin.jsx'),
}

const root = document.getElementById('root')
const load = pages[root.dataset.page] || pages.home

load().then(({ default: Page }) => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>,
  )
})
