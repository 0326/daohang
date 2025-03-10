import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { CloudProvider } from './CloudContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <CloudProvider> */}
        <App />
      {/* </CloudProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
