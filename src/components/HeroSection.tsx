import React from 'react';
import heroImage from '../assets/images/hero-image.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }} // Background image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Bienvenue chez RFC</h1>
        <p className="text-lg mb-8">
          Découvrez les meilleurs plats préparés avec amour et des ingrédients frais.
        </p>
        <a
          href="menu"
          className="px-6 py-3 bg-[#D62828] text-white font-bold rounded hover:bg-[#EEAF20] transition"
        >
          Explorer notre menu
        </a>
      </div>
    </section>
  );
};

export default HeroSection;