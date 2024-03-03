import React, { createContext, useState } from "react";

// Creamos el contexto
const Contexto = createContext();

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
