import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Smooth scroll behavior for the entire site
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add GloriaFood script if it doesn't already exist
    if (!document.getElementById('gloria-food-script')) {
      const script = document.createElement('script');
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.id = "gloria-food-script";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main 
        className={`flex-grow transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;