import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

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

  // Enhanced scroll to top on page change
  useEffect(() => {
    // Force immediate scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Use 'auto' instead of 'smooth' for immediate effect
    });
    
    // If main content element is available, also reset its scroll position
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    
    // Reset any scrollable elements that might retain scroll position
    document.querySelectorAll('.scrollable').forEach((el) => {
      if (el instanceof HTMLElement) {
        el.scrollTop = 0;
      }
    });
  }, [pathname]); // This runs whenever the URL path changes

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main 
        ref={mainRef}
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