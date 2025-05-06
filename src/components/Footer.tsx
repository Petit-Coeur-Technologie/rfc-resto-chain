import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  // Add smooth scroll handler function
  const smoothScrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo and slogan */}
        <div className="text-center mb-6">
          <h3 className="font-bold text-xl mb-2">Ratoma Fried Chicken</h3>
          <p className="text-gray-300 text-sm">RFC – Toujours plus proche, toujours plus savoureux !</p>
        </div>
        
        {/* Quick links */}
        <div className="flex justify-center flex-wrap gap-x-6 mb-6">
          <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
          <Link to="/menu" className="text-gray-300 hover:text-white">Menu</Link>
          <Link to="/#locations" className="text-gray-300 hover:text-white">Restaurants</Link>
          <a 
            href="#locations" 
            onClick={smoothScrollToSection} 
            className="text-gray-300 hover:text-white"
          >
            Commander
          </a>
          <Link to="/#contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        
        {/* Social media icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.instagram.com/ratomafriedchicken/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/romafriedchiken" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://wa.me/224622123456" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaWhatsapp size={24} />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>Copyright © 2025 Ratoma Fried Chicken. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;