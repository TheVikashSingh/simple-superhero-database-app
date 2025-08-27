import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SuperHeroes_MalesRQ from './components/SuperHeroes_MalesRQ.jsx'

const client = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
  </StrictMode>,
)


