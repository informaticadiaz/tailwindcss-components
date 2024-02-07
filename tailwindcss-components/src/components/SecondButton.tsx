// PrimaryButton.tsx
import React from 'react';
import '../styles/PrimaryButton.css'; // Importa el archivo de estilos generados por Tailwind

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <>
    <button className="btn-primary">
      {children}
    </button>
    </>
  );
};

export default PrimaryButton;
