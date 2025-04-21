import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Resto Chain</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/menu" className="text-gray-600 hover:text-blue-500">Menu</Link>
          <Link to="/location" className="text-gray-600 hover:text-blue-500">Locations</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;