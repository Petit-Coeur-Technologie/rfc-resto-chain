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
  const isInitialMount = useRef(true);

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

  // Handle both page changes AND page refreshes
  useEffect(() => {
    // On first mount (including page refreshes), scroll to top
    if (isInitialMount.current) {
      isInitialMount.current = false;
      
      // Use setTimeout to ensure this happens after the browser's attempt to restore scroll position
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto' // Immediate scrolling, not smooth
        });
      }, 0);
    } else if (pathname) {
      // For navigation changes, scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }
    
    // Reset any scrollable elements
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    
    document.querySelectorAll('.scrollable').forEach((el) => {
      if (el instanceof HTMLElement) {
        el.scrollTop = 0;
      }
    });
  }, [pathname]);

  // Add specific handler for page refresh
  useEffect(() => {
    // This runs when the page is about to be unloaded (refresh or closing)
    const handleBeforeUnload = () => {
      // Store a flag in session storage that we're refreshing
      sessionStorage.setItem('pageIsRefreshing', 'true');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Check if we're coming from a refresh
    const isRefreshing = sessionStorage.getItem('pageIsRefreshing') === 'true';
    if (isRefreshing) {
      // Clear the flag
      sessionStorage.removeItem('pageIsRefreshing');
      // Force scroll to top
      window.scrollTo(0, 0);
    }
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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