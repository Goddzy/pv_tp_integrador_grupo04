import { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Funciona como un initialState
  useEffect(()=>{

    const usuarioGuardado = localStorage.getItem("sessionUser");
    if (usuarioGuardado) {
        setUser(JSON.parse(usuarioGuardado));
    }
  }, []);

  const login = (usuario) => {
    setUser(usuario);
  };

  const logout = () =>{
    setUser(null);
    localStorage.removeItem("sessionUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
