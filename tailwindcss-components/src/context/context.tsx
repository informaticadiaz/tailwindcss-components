import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const Contexto = createContext();

// Hook personalizado para acceder al contexto del carrito de compras
// eslint-disable-next-line react-refresh/only-export-components
export function UsarContexto() {
  return useContext(Contexto);
}

// Creamos un provider que va a envolver a los componentes hijos
const ContextoProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Contexto.Provider
      value={{
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};

export { Contexto, ContextoProvider };
