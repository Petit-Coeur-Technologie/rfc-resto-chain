import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg'; // Import the logo image

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const locations = [
    { name: 'RFC KOBAYAH', path: '/location/kobayah' },
    { name: 'RFC KIPÉ', path: '/location/kipe' },
    { name: 'RFC NONGO', path: '/location/nongo' },
    { name: 'RFC TOMBOLIA', path: '/location/tombolia' },
    { name: 'RFC KALOUM', path: '/location/kaloum' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Logo de Resto Chain" className="h-10 w-auto" />
          </Link>
          <span className="text-xl font-bold text-[#D62828]">RFC Restaurant</span>
        </div>

        {/* Right Section: Links and Hamburger */}
        <div className="flex items-center space-x-6">
          {/* Hamburger Menu for Mobile */}
          <button
            className="text-gray-600 hover:text-blue-500 md:hidden text-3xl p-2" // Increased font size and added padding
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
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
                <span
                  className={`ml-1 transform transition-transform ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                >
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out transform"
        >
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Accueil
          </Link>
          <Link
            to="/menu"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Menu
          </Link>
          <div className="border-t border-gray-200">
            {/* Locations Dropdown for Mobile */}
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
            >
              Localisations
              <span
                className={`ml-1 transform transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>
            {dropdownOpen && (
              <div
                className="bg-white border-t border-gray-200 transition-all duration-300 ease-in-out transform"
              >
                {locations.map((location, index) => (
                  <Link
                    key={index}
                    to={location.path}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200"
                    onClick={() => {
                      setMenuOpen(false); // Close menu
                      setDropdownOpen(false); // Close dropdown
                    }}
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;