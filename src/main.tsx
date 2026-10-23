import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const el = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
if (el.firstElementChild) hydrateRoot(el, app)
else createRoot(el).render(app)
