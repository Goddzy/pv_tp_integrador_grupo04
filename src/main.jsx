import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FavoritosProvider } from './contexts/FavoritosContext.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { AuthProvider } from './contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <FavoritosProvider>
      <App />
     </FavoritosProvider>
    </AuthProvider>
  </StrictMode>,
) 
