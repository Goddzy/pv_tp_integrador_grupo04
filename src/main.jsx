import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FavoritosProvider } from './contexts/FavoritosContext.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritosProvider>
      <App />
    </FavoritosProvider>
  </StrictMode>,
) 
