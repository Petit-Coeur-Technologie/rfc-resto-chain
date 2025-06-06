import React from 'react';
import mobileBanner from '../assets/images/mobile_banner.jpg';
import webBanner from '../assets/images/web_banner.jpg';

const HeroSection = () => {
  const isMobile = window.innerWidth <= 768;
  const heroImage = isMobile ? mobileBanner : webBanner;

  return (
    <section
      className="relative bg-cover bg-center bg-fixed h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 animate-fade-in"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-white opacity-0 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          RFC – Toujours plus proche, toujours plus savoureux !
        </h1>
        <p className="text-lg mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          Découvrez le vrai goût du poulet frit, des burgers juteux, des gaufres moelleuses et bien plus encore.
          Commandez en ligne ou visitez l'un de nos restaurants près de chez vous !
        </p>
        
        {/* Button Container */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 opacity-0 animate-slide-up" style={{ animationDelay: '750ms', animationFillMode: 'forwards' }}>
          {/* New "Commander Maintenant" Button - now with matching yellow color */}
          <a
            href="#locations"
            className="px-6 py-3 bg-[#EEAF20] text-white font-bold rounded hover:bg-[#D62828] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Commander Maintenant
          </a>
          
          {/* Existing "Explorer notre menu" Button */}
          <a
            href="menu"
            className="px-6 py-3 bg-[#EEAF20] text-white font-bold rounded hover:bg-[#D62828] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Explorer notre menu
          </a>
        </div>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute -bottom-6 right-1/4 w-24 h-24 bg-[#EEAF20]/10 rounded-full animate-float"></div>
      <div className="absolute -top-10 left-1/3 w-16 h-16 bg-[#D62828]/10 rounded-full animate-pulse-slow"></div>
    </section>
  );
};

export default HeroSection;