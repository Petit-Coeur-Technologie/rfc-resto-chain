import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Enhanced click handler for section navigation
  const handleSectionNavigation = (e, sectionId) => {
    e.preventDefault();
    
    // If already on homepage, just scroll to section
    if (location.pathname === '/') {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to homepage with section flag
      sessionStorage.setItem(`scrollTo${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`, 'true');
      navigate('/');
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
          <Link to="/" className="text-gray-300 hover:text-white">
            Accueil
          </Link>
          <Link to="/menu" className="text-gray-300 hover:text-white">
            Menu
          </Link>
          <a 
            href="#locations" 
            onClick={(e) => handleSectionNavigation(e, 'locations')}
            className="text-gray-300 hover:text-white"
          >
            Restaurants
          </a>
          <a 
            href="#locations" 
            onClick={(e) => handleSectionNavigation(e, 'locations')}
            className="text-gray-300 hover:text-white"
          >
            Commander
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSectionNavigation(e, 'contact')}
            className="text-gray-300 hover:text-white"
          >
            Contact
          </a>
        </div>
        
        {/* Social media icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.instagram.com/ratomafriedchicken/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/romafriedchiken" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://wa.me/224620127142" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
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