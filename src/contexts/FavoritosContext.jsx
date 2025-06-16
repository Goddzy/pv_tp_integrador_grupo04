import { createContext, useState } from 'react';


export const FavoritosContext = createContext();


export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (idProducto) => {
    if (favoritos.includes(idProducto)) {
      setFavoritos(favoritos.filter(id => id !== idProducto));
    } else {
      setFavoritos([...favoritos, idProducto]);
    }
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};
