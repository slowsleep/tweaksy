import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'tweaksy-ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      disableFontStyles={false}
      initialTheme="dark"
      initialColor="violet"
      initialRadius="sm"
    >
      <App />
    </ThemeProvider>
  </StrictMode>,
)
