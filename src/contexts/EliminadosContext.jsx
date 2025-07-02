import { createContext, useState } from 'react';


export const EliminadosContext = createContext();


export const EliminadosProvider = ({ children }) => {
  const [eliminados, setEliminados] = useState([]);


  return (
    <EliminadosContext.Provider value={{ eliminados, setEliminados }}>
      {children}
    </EliminadosContext.Provider>
  );
};
