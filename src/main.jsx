import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './main.css'
import './styles/media.css'
import './styles/fonts.css'
import './styles/header.css'
import './styles/sections.css'
import './styles/projects.css'
import './styles/skills.css'
import './styles/modal.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)