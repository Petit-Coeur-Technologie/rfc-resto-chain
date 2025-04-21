import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg'; // Import the logo image

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const locations = [
    { name: 'RFC Kobayah', path: '/location/kobayah' },
    { name: 'RFC Kipé', path: '/location/kipe' },
    { name: 'RFC Nongo', path: '/location/nongo' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Section: RFC Restaurant */}
        <div className="flex items-center space-x-2">
          <Link to="/"> {/* Wrap the logo with a Link */}
            <img src={logo} alt="Logo de Resto Chain" className="h-10 w-auto" /> {/* Logo */}
          </Link>
          <span className="text-xl font-bold text-gray-800">RFC Restaurant</span>
        </div>

        {/* Right Section: Links and Dropdown */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Accueil
          </Link>
          <Link to="/menu" className="text-gray-600 hover:text-blue-500">
            Menu
          </Link>
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="text-gray-600 hover:text-blue-500 focus:outline-none flex items-center"
            >
              Localisations
              <span className={`ml-1 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                {locations.map((location, index) => (
                  <Link
                    key={index}
                    to={location.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                    onClick={() => setDropdownOpen(false)} // Close dropdown on click
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;