import React, { createContext, useContext, useState } from 'react';

// Crear contexto para el carrito de compras
const CarritoContext = createContext();

// Hook personalizado para acceder al contexto del carrito de compras
// eslint-disable-next-line react-refresh/only-export-components
export function useCarrito() {
  return useContext(CarritoContext);
}

// Componente proveedor del contexto del carrito de compras
export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  function agregarProducto(producto) {
    setCarrito([...carrito, producto]);
  }

  // Función para eliminar un producto del carrito
  function eliminarProducto(id) {
    setCarrito(carrito.filter(producto => producto.id !== id));
  }

  // Función para actualizar la cantidad de un producto en el carrito
  function actualizarCantidadProducto(id, cantidad) {
    setCarrito(carrito.map(producto => {
      if (producto.id === id) {
        return { ...producto, cantidad: cantidad };
      }
      return producto;
    }));
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, actualizarCantidadProducto }}>
      {children}
    </CarritoContext.Provider>
  );
}