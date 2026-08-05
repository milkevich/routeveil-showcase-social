import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouteveilProvider, RouteveilView } from 'routeveil/react-router'
import App from './App.tsx'
import RouteveilBadge from './components/RouteveilBadge.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouteveilProvider>
        <RouteveilView>
          <App />
        </RouteveilView>
        <RouteveilBadge/>
      </RouteveilProvider>
    </BrowserRouter>
  </StrictMode>
)
