import { useState } from 'react';

export default function ArrayStates() {
  // Definimos un array de objetos
  const data = [
    { id: 1, name: 'Objeto 1', content: 'Contenido del objeto 1' },
    { id: 2, name: 'Objeto 2', content: 'Contenido del objeto 2' },
    { id: 3, name: 'Objeto 3', content: 'Contenido del objeto 3' },
  ];

  // Definimos un estado para manejar la visibilidad de cada objeto
  const [visibility, setVisibility] = useState(Array(data.length).fill(false));

  // Función para alternar la visibilidad de un objeto dado su índice
  const toggleVisibility = (index) => {
    setVisibility(prevVisibility => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  return (
<div className='bg-slate-900 text-slate-400 flex justify-center'>
  <div className="max-w-md space-y-4">
    <h2>Ejemplo de Lista con Visibilidad</h2>
    <ul className='space-y-4'>
      {data.map((item, index) => (
        <li key={item.id}>
          <button onClick={() => toggleVisibility(index)}>
            {visibility[index] ? 'Ocultar' : 'Mostrar'} {item.name}
          </button>
          {visibility[index] && <p>{item.content}</p>}
        </li>
      ))}
    </ul>
  </div>
</div>

  );
}
