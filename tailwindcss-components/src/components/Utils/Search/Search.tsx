{/* 
este componente necesita revision esta abierta 
la participacion para trabajar sobre el 
*/}

import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  // const [searchResults, setSearchResults] = useState<any[]>([]);

  // const handleSearch = (query: string) => {
  //   // Perform search logic here
  //   // Update searchResults state with the search results
  // };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="modal-overlay fixed w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-96 p-4 rounded-lg shadow-lg transition-transform duration-300 transform">
        <div className="modal-close absolute top-0 right-0 m-4 cursor-pointer" onClick={onClose}>×</div>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // onKeyPress={(e) => {
          //   if (e.key === 'Enter') {
          //     handleSearch(searchQuery);
          //   }
          // }}
        />
        {/* Display search results here */}
      </div>
    </div>
  );
};

export default Modal;
