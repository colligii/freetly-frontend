import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router.tsx'
import './main.css'
import { Theme } from '@radix-ui/themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <Router />
    </Theme>
  </StrictMode>,
)
