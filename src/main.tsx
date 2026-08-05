import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouteveilProvider, RouteveilView } from 'routeveil/react-router'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouteveilProvider>
        <RouteveilView>
          <App />
        </RouteveilView>
      </RouteveilProvider>
    </BrowserRouter>
  </StrictMode>
)
