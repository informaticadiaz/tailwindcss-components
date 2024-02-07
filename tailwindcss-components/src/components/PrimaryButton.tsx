import React, { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default PrimaryButton;