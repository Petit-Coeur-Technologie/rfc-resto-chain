import { useEffect } from 'react';

export const useGloriaFood = () => {
  useEffect(() => {
    // Add GloriaFood script if it doesn't already exist
    let script = document.getElementById('gloria-food-script');
    
    if (!script) {
      script = document.createElement('script');
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.id = "gloria-food-script";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.addEventListener('load', () => {
        // Initialize buttons when script loads
        if (window.glfBindButtons) {
          window.glfBindButtons();
        }
      });
    } else {
      // Script already exists, just bind the buttons
      if (window.glfBindButtons) {
        setTimeout(() => {
          window.glfBindButtons();
        }, 100); // Small timeout to ensure DOM is ready
      }
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);
};