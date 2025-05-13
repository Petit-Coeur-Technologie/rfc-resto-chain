import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { FaUtensils, FaTruck, FaExpandAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { MdTakeoutDining } from 'react-icons/md';
import { useGloriaFood } from '../../hooks/useGloriaFood';

const Nongo = () => {
  useGloriaFood();
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const galleryImages = [
    { src: '/src/public/image/Nongo/nongo 1.jpeg', alt: 'Restaurant RFC Nongo', caption: 'Vue du restaurant' },
    { src: '/src/public/image/Nongo/nongo 2.jpeg', alt: 'Plat signature de RFC Nongo', caption: 'Notre délicieux poulet frit' },
    { src: '/src/public/image/Nongo/nongo 3.jpeg', alt: 'Intérieur du restaurant', caption: 'Espace de restauration' },
    { src: '/src/public/image/Nongo/nongo 4.jpeg', alt: 'Menu spécial de RFC', caption: 'Nos spécialités' },
    { src: '/src/public/image/Nongo/nongo 5.jpeg', alt: 'Service client à RFC Nongo', caption: 'Service rapide et attentionné' },
    { src: '/src/public/image/Nongo/nongo 6.jpeg', alt: 'Plats populaires de RFC', caption: 'Nos plats favoris' },
    { src: '/src/public/image/Nongo/nongo 7.jpeg', alt: 'Assortiment de poulet frit', caption: 'Nos différentes recettes de poulet' },
    { src: '/src/public/image/Nongo/nongo 8.jpeg', alt: 'Ambiance du restaurant', caption: 'L\'atmosphère conviviale de RFC Nongo' },
    { src: '/src/public/image/Nongo/nongo 9.jpeg', alt: 'Équipe de service', caption: 'Notre équipe à votre service' },
    { src: '/src/public/image/Nongo/nongo 10.jpeg', alt: 'Plat spécial weekend', caption: 'Notre offre spéciale du weekend' },
    { src: '/src/public/image/Nongo/nongo 11.jpeg', alt: 'Espace terrasse', caption: 'Notre terrasse extérieure' }
  ];

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const handlePrevious = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Updated handlePageChange with navbar offset
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Use setTimeout to ensure DOM update happens before scrolling
    setTimeout(() => {
      const firstImageElement = document.getElementById(`gallery-image-${(pageNumber - 1) * imagesPerPage}`);
      if (firstImageElement) {
        // Get navbar height (estimate or get dynamically)
        const navbarHeight = 80; // Adjust this value based on your actual navbar height
        
        // Calculate the element's position
        const elementPosition = firstImageElement.getBoundingClientRect().top + window.pageYOffset;
        
        // Scroll with offset to account for navbar
        window.scrollTo({
          top: elementPosition - navbarHeight - 20, // Extra 20px for padding
          behavior: 'smooth'
        });
      } else {
        // Fallback to gallery section if element not found
        const gallerySection = document.getElementById('gallery-section');
        if (gallerySection) {
          const navbarHeight = 80; // Adjust based on your navbar height
          const sectionPosition = gallerySection.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: sectionPosition - navbarHeight - 20,
            behavior: 'smooth'
          });
        }
      }
    }, 10);
  };

  const handleKeyDown = (e) => {
    if (activeImageIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrevious(e);
    if (e.key === 'ArrowRight') handleNext(e);
    if (e.key === 'Escape') setActiveImageIndex(null);
  };

  useEffect(() => {
    if (activeImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeImageIndex]);

  return (
    <Layout>
      <section
        className="relative bg-cover bg-center h-[490px] flex items-center justify-center"
        style={{ backgroundImage: "url('/src/public/image/Nongo/nongo 3.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold text-white">RFC NONGO</h1>
        </div>
      </section>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#D62828]">Heures D'ouverture</h2>
              <div className="bg-white/60 backdrop-blur-md text-gray-800 rounded-lg shadow-xl p-8 max-w-xl mx-auto">
                <div className="border-b-2 border-gray-200/50 pb-6 mb-8 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xl">Lundi - Dimanche</span>
                    <span className="text-xl font-semibold">10:00 - 00:00</span>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200/50 pb-6 mb-8">
                  <strong className="block text-2xl font-semibold text-left mb-4">
                    <MdTakeoutDining className="inline-block h-7 w-7 mr-3" />Plats à emporter
                  </strong>
                  <div className="flex justify-between items-center pl-10">
                    <span className="text-xl">Lundi - Dimanche</span>
                    <span className="text-xl font-semibold">10:00 - 23:00</span>
                  </div>
                </div>
                <div className="border-b-2 border-gray-200/50 pb-6 mb-8">
                  <strong className="block text-2xl font-semibold text-left mb-4">
                    <FaTruck className="inline-block h-7 w-7 mr-3" />Service de livraison
                  </strong>
                  <div className="flex justify-between items-center pl-10">
                    <span className="text-xl">Lundi - Dimanche</span>
                    <span className="text-xl font-semibold">11:00 - 23:00</span>
                  </div>
                </div>
                <div>
                  <strong className="block text-2xl font-semibold text-left mb-4">
                    <FaUtensils className="inline-block h-7 w-7 mr-3" />Sur Place
                  </strong>
                  <div className="flex justify-between items-center pl-10">
                    <span className="text-xl">Lundi - Dimanche</span>
                    <span className="text-xl font-semibold">10:00 - 00:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.019708746624!2d-13.632684456596003!3d9.628198902430666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzcnNDEuNSJOIDEzwrAzNyc1Ny43Ilc!5e0!3m2!1sfr!2sgn!4v1624287954211!5m2!1sfr!2sgn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="RFC NONGO Location"
                className="rounded-lg shadow-md"
              ></iframe>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#D62828]">RFC NONGO</h2>
                <p className="text-gray-700 mb-4">
                  789 Avenue Nongo <br />
                  Conakry, Guinée
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Téléphone:</strong> (224) 622-789-012
                </p>
                <span 
                  className="glf-button inline-block px-8 py-3 bg-[#EEAF20] text-white font-bold rounded hover:bg-[#D62828] transition cursor-pointer"
                  data-glf-cuid="561941df-3039-448e-a17b-04a33468a324"
                  data-glf-ruid="ef6ab8f2-c6b0-41cf-94c1-6ab79a267bdc"
                  style={{
                    backgroundImage: 'url(/src/public/image/button-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  Voir le MENU & Commander
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section - Mobile Optimized */}
      <div id="gallery-section" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#D62828]">Galerie Photos</h2>
          
          {/* Gallery grid - Improved for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {currentImages.map((image, index) => (
              <div 
                key={indexOfFirstImage + index}
                id={`gallery-image-${indexOfFirstImage + index}`} // Add this ID
                className="w-full h-56 sm:h-64 rounded-lg shadow-md overflow-hidden relative cursor-pointer active:opacity-90 touch-manipulation"
                onClick={() => setActiveImageIndex(indexOfFirstImage + index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay without expand button - just the darkening effect */}
                <div className="absolute inset-0 bg-black bg-opacity-20 sm:bg-opacity-0 sm:group-hover:bg-opacity-50 flex items-center justify-center transition-opacity">
                  {/* No button here anymore */}
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile-optimized Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex flex-wrap justify-center gap-2">
                {/* Previous page button - Larger tap target */}
                <button 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`min-w-[44px] h-11 px-3 py-2 rounded-md text-lg ${
                    currentPage === 1 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-[#EEAF20] hover:text-white active:bg-[#D62828]'
                  }`}
                  aria-label="Page précédente"
                >
                  &laquo;
                </button>
                
                {/* Page number buttons - Responsive layout */}
                {totalPages <= 5 ? (
                  // Show all pages if 5 or fewer
                  Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button 
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`min-w-[44px] h-11 px-3 py-2 rounded-md text-lg ${
                        currentPage === pageNumber 
                          ? 'bg-[#D62828] text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-[#EEAF20] hover:text-white active:bg-[#D62828]'
                      }`}
                      aria-label={`Page ${pageNumber}`}
                      aria-current={currentPage === pageNumber ? "page" : undefined}
                    >
                      {pageNumber}
                    </button>
                  ))
                ) : (
                  // Show limited pages with ellipsis for better mobile experience
                  <>
                    {/* Always show page 1 */}
                    <button 
                      onClick={() => handlePageChange(1)}
                      className={`min-w-[44px] h-11 px-3 py-2 rounded-md text-lg ${
                        currentPage === 1 ? 'bg-[#D62828] text-white' : 'bg-gray-200 text-gray-700 hover:bg-[#EEAF20] hover:text-white'
                      }`}
                      aria-label="Page 1"
                      aria-current={currentPage === 1 ? "page" : undefined}
                    >
                      1
                    </button>
                    
                    {/* Show ellipsis if needed */}
                    {currentPage > 3 && <span className="flex items-center px-2">...</span>}
                    
                    {/* Show current page and neighbors */}
                    {Array.from(
                      { length: 3 },
                      (_, i) => Math.min(Math.max(currentPage - 1 + i, 2), totalPages - 1)
                    )
                    .filter((pageNumber, index, array) => array.indexOf(pageNumber) === index)
                    .filter(pageNumber => pageNumber > 1 && pageNumber < totalPages)
                    .map(pageNumber => (
                      <button 
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`min-w-[44px] h-11 px-3 py-2 rounded-md text-lg ${
                          currentPage === pageNumber 
                            ? 'bg-[#D62828] text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-[#EEAF20] hover:text-white'
                        }`}
                        aria-label={`Page ${pageNumber}`}
                        aria-current={currentPage === pageNumber ? "page" : undefined}
                      >
                        {pageNumber}
                      </button>
                    ))}
                    
                    {/* Show ellipsis if needed */}
                    {currentPage < totalPages - 2 && <span className="flex items-center px-2">...</span>}
                    
                    {/* Always show last page */}
                    <button 
                      onClick={() => handlePageChange(totalPages)}
                      className={`min-w-[44px] h-11 px-3 py-2 rounded-md text-lg ${
                        currentPage === totalPages ? 'bg-[#D62828] text-white' : 'bg-gray-200 text-gray-700 hover:bg-[#EEAF20] hover:text-white'
                      }`}
                      aria-label={`Page ${totalPages}`}
                      aria-current={currentPage === totalPages ? "page" : undefined}
                    >
                      {totalPages}
                    </button>
                  </>
                )}
                
                {/* Next page button - Larger tap target */}
                <button 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`min-w-[44px] h-11 px-3 py-2 rounded-md text-lg ${
                    currentPage === totalPages 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-[#EEAF20] hover:text-white active:bg-[#D62828]'
                  }`}
                  aria-label="Page suivante"
                >
                  &raquo;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal - Improved for mobile */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <div className="relative max-w-4xl max-h-[95vh] w-full">
            <img 
              src={galleryImages[activeImageIndex].src} 
              alt={galleryImages[activeImageIndex].alt} 
              className="max-w-full max-h-[80vh] mx-auto object-contain rounded-lg"
            />
            
            {/* Mobile-friendly navigation buttons - Larger touch targets */}
            <button 
              className="absolute top-[50%] left-2 sm:left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center"
              onClick={handlePrevious}
              aria-label="Image précédente"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            
            <button 
              className="absolute top-[50%] right-2 sm:right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center"
              onClick={handleNext}
              aria-label="Image suivante"
            >
              <FaChevronRight className="text-xl" />
            </button>
            
            {/* Mobile-friendly close button - Larger and positioned better */}
            <button 
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(null);
              }}
              aria-label="Fermer"
            >
              <FaTimes className="text-lg" />
            </button>
            
            {/* Image counter - Repositioned for mobile */}
            <div className="absolute bottom-4 sm:top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-base">
              {activeImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Nongo;