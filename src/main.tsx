import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { MiContextoProvider } from './context/ContextGlobal.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <ThemeProvider>
                <MiContextoProvider>
                    <App />
                </MiContextoProvider>
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>,
)
