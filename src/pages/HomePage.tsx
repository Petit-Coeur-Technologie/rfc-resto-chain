import React, { useEffect } from 'react'; // Add useEffect import
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import MenuCard from '../components/MenuCard';
import heroImage2 from '../assets/images/hero-image2.jpg';
import bgHeureDouverture from '../assets/images/bg-heure-douverture.jpg';
import { ShoppingBagIcon, TruckIcon, BeakerIcon, GlobeAltIcon, CameraIcon, FilmIcon } from '@heroicons/react/24/solid';
// Add Facebook icon from React Icons
import {
  FaFacebook, FaInstagram, FaTiktok, FaUtensils,
  FaShoppingBag, FaBoxOpen, FaTruck, FaWhatsapp
} from 'react-icons/fa';
import { MdTakeoutDining } from 'react-icons/md';
import AnimatedElement from '../components/AnimatedElement';
import { useGloriaFood } from '../hooks/useGloriaFood';

const HomePage = () => {
  // Use the hook to handle GloriaFood integration
  useGloriaFood();

  useEffect(() => {
    // Handle scrolling to different sections after navigation
    const sections = ['locations', 'contact'];
    
    sections.forEach(section => {
      const capitalizedSection = section.charAt(0).toUpperCase() + section.slice(1);
      const scrollFlag = sessionStorage.getItem(`scrollTo${capitalizedSection}`);
      
      if (scrollFlag === 'true') {
        // Clear the flag
        sessionStorage.removeItem(`scrollTo${capitalizedSection}`);
        
        // Wait for page to render properly
        setTimeout(() => {
          const targetElement = document.getElementById(section);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Short delay to ensure DOM is ready
      }
    });
  }, []); // Run once on mount

  const featuredMenu = [
    {
      name: 'Pizza Margherita',
      description: 'Pizza classique avec mozzarella fraîche et basilic.',
      price: '12,99 $',
      image: '/images/margherita-pizza.jpg',
    },
    {
      name: 'Salade César',
      description: 'Laitue romaine croquante avec une sauce César.',
      price: '8,99 $',
      image: '/images/caesar-salad.jpg',
    },
    {
      name: 'Spaghetti Carbonara',
      description: 'Pâtes crémeuses avec pancetta et parmesan.',
      price: '14,99 $',
      image: '/images/spaghetti-carbonara.jpg',
    },
  ];

  const locations = [
    {
      name: 'RFC KOBAYAH',
      address: 'Carrefour kobaya en face du marché, Conakry, Guinée',
      phone: '620 12 71 42',
      orderLink: '/location/kobayah',
      glf: {
        cuid: '561941df-3039-448e-a17b-04a33468a324',
        ruid: '207b0721-e963-41ff-a9b3-c4eda4fb5b2b'
      }
    },
    {
      name: 'RFC KIPÉ',
      address: 'T2 Kipe, Conakry, Guinée',
      phone: '628 61 41 91',
      orderLink: '/location/kipe',
      glf: {
        cuid: '561941df-3039-448e-a17b-04a33468a324',
        ruid: '1a432878-2146-4f62-ae65-2c8afd047015'
      }
    },
    {
      name: 'RFC NONGO',
      address: 'Star, Nongo Taady carefour Diawara en face de la station, Conakry, Guinée',
      phone: '610 04 13 03',
      orderLink: '/location/nongo',
      glf: {
        cuid: '561941df-3039-448e-a17b-04a33468a324',
        ruid: '0159cb6f-8a4a-4045-94ef-677c12d1687d'
      }
    },
    {
      name: 'RFC TOMBOLIA',
      address: 'Tombolia dans la cour du cinéma, Conakry, Guinée',
      phone: '627 50 73 47',
      orderLink: '/location/tombolia',
      glf: {
        cuid: '561941df-3039-448e-a17b-04a33468a324',
        ruid: 'f897fe48-81a3-4f6f-9a6f-18294448e3d0'
      }
    },
    {
      name: 'RFC KALOUM',
      address: 'Station Total à côté de Lipco, Kaloum, Conakry, Guinée',
      phone: '626 50 25 79',
      orderLink: '/location/kaloum',
      glf: {
        cuid: '561941df-3039-448e-a17b-04a33468a324',
        ruid: '9751a3b2-7e61-4fe3-8817-3adb4cd58b1e'
      }
    },
  ];

  useEffect(() => {
    // Initialize GloriaFood buttons when component mounts or updates
    if (window.glfBindButtons) {
      window.glfBindButtons();
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Layout>
      {/* Section Héros */}
      <HeroSection />

      {/* Section Localisations */}
      <section id="locations" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          {/* Enhanced heading with visual distinction */}
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-center mb-3 text-[#D62828] tracking-tight">
              Nos Restaurants
            </h2>
            <p className="text-xl text-center font-light mb-4 text-gray-600 italic max-w-xl mx-auto">
              Trouvez un RFC près de chez vous
            </p>
            <div className="w-20 h-2 bg-[#EEAF20] mx-auto mb-2 rounded"></div>
            <div className="w-12 h-1 bg-[#EEAF20]/60 mx-auto rounded"></div>
          </div>

          <p className="text-center text-gray-700 mb-12 text-lg font-light italic max-w-3xl mx-auto">
            Nous sommes fiers de vous accueillir dans plusieurs quartiers de Conakry.
            Trouvez l'emplacement le plus proche et profitez de notre service rapide sur place, à emporter ou en
            livraison.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {locations.map((location, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Color accent top bar */}
                <div className={`h-2 bg-[${index % 2 === 0 ? '#D62828' : '#EEAF20'}] w-full`}></div>

                {/* Location content */}
                <div className="p-8">
                  {/* Location icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D62828]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-[#D62828] text-center">{location.name}</h3>

                  <div className="mb-8 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#EEAF20]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-lg">{location.address}</p>
                    </div>

                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#EEAF20]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <p className="text-gray-700 text-lg">{location.phone}</p>
                    </div>
                  </div>

                  <div className="text-center mt-auto">
                    <span
                      className="glf-button inline-block px-6 py-2 bg-[#EEAF20] text-white font-medium text-sm rounded-full transform transition-all duration-300 hover:bg-[#D62828] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#EEAF20] focus:ring-offset-2 cursor-pointer"
                      data-glf-cuid={location.glf.cuid}
                      data-glf-ruid={location.glf.ruid}
                      style={{
                        backgroundImage: 'linear-gradient(45deg, #EEAF20, #F3BD42)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      }}
                    >
                      Voir le MENU & Commander
                    </span>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#EEAF20]/10 rounded-full -mt-6 -mr-6"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#D62828]/5 rounded-full -mb-8 -ml-8"></div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Petite Section Héros */}
      <section
        className="relative bg-cover bg-center h-[50rem] flex items-center justify-center"
        style={{ backgroundImage: `url(${bgHeureDouverture})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Heures D'ouverture</h1>
          <div className="w-20 h-2 bg-[#EEAF20] mx-auto mb-2 rounded"></div>
          <div className="w-12 h-1 bg-[#EEAF20]/60 mx-auto rounded"></div>

          <div className="bg-white/60 backdrop-blur-md text-gray-800 rounded-lg shadow-xl p-8 mt-2 max-w-xl mx-auto">
            {/* First section */}
            <div className="border-b-2 border-gray-200/50 pb-6 mb-8 text-left">
              <div className="flex justify-between items-center">
                <span className="text-xl">Lundi - Dimanche</span>
                <span className="text-xl font-semibold">10:00 - 00:00</span>
              </div>
            </div>

            {/* Plats à emporter section */}
            <div className="border-b-2 border-gray-200/50 pb-6 mb-8">
              <strong className="block text-2xl font-semibold text-left mb-4">
                <MdTakeoutDining className="inline-block h-7 w-7 mr-3" />Plats à emporter
              </strong>
              <div className="flex justify-between items-center pl-10">
                <span className="text-xl">Lundi - Dimanche</span>
                <span className="text-xl font-semibold">10:00 - 23:00</span>
              </div>
            </div>

            {/* Service de livraison section */}
            <div className="border-b-2 border-gray-200/50 pb-6 mb-8">
              <strong className="block text-2xl font-semibold text-left mb-4">
                <FaTruck className="inline-block h-7 w-7 mr-3" />Service de livraison
              </strong>
              <div className="flex justify-between items-center pl-10">
                <span className="text-xl">Lundi - Dimanche</span>
                <span className="text-xl font-semibold">11:00 - 23:00</span>
              </div>
            </div>

            {/* Sur Place section */}
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
      </section>

      {/* Section Jumbotron - Order CTA */}
      <section className="py-16 bg-[#D62828] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mt-10 -mr-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -mb-16 -ml-16"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Commandez votre plat préféré en quelques clics !
                </h2>
                
                <p className="text-xl text-center text-white/90 mb-8 max-w-3xl mx-auto">
                  Profitez de la livraison rapide RFC directement chez vous. Commandez via notre application mobile RFC,
                  notre site web ou par téléphone.
                </p>
                
                <div className="flex justify-center">
                  {/* Single "Commander maintenant" button that matches hero section */}
                  <a
                    href="#locations"
                    className="inline-block px-8 py-3 bg-[#EEAF20] text-white font-bold rounded-lg hover:bg-[#D62828] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                  >
                    <FaShoppingBag className="mr-2" />
                    Commander maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Keep section title with matching styling */}
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-center mb-3 text-[#D62828] tracking-tight">
              À propos de RFC
            </h2>
            <div className="w-20 h-2 bg-[#EEAF20] mx-auto mb-2 rounded"></div>
            <div className="w-12 h-1 bg-[#EEAF20]/60 mx-auto rounded"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Single column layout - removed the quote element */}
            <div className="flex flex-col items-center">
              {/* Text content - UPDATED */}
              <div className="bg-white rounded-lg shadow-xl p-8 relative w-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D62828]/5 rounded-full -mt-8 -mr-8 z-0"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#EEAF20]/5 rounded-full -mb-10 -ml-10 z-0"></div>

                <div className="relative z-10">
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Fondé à Conakry, <span className="font-semibold text-[#D62828]">Ratoma Fried Chicken (RFC)</span> est né d'une passion pour la bonne nourriture et
                    l'envie d'offrir un service rapide, chaleureux et de qualité.
                  </p>
                  
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Notre spécialité : un poulet frit croustillant à l'extérieur et tendre à l'intérieur, accompagné de burgers
                    généreux, de gaufres dorées et de boissons rafraîchissantes.
                  </p>
                  
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Chez RFC, chaque repas est préparé avec soin à partir d'ingrédients locaux de qualité, pour offrir une
                    expérience gourmande accessible à tous.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-[#D62828]">Notre engagement ?</h3>
                  
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <div className="min-w-6 min-h-6 mr-3 rounded-full bg-[#EEAF20] flex items-center justify-center text-white font-bold text-xs">•</div>
                      <span className="text-gray-700">Servir des plats savoureux et constants.</span>
                    </li>
                    <li className="flex items-center">
                      <div className="min-w-6 min-h-6 mr-3 rounded-full bg-[#EEAF20] flex items-center justify-center text-white font-bold text-xs">•</div>
                      <span className="text-gray-700">Être toujours proches de nos clients avec plusieurs points de vente dans Conakry.</span>
                    </li>
                    <li className="flex items-center">
                      <div className="min-w-6 min-h-6 mr-3 rounded-full bg-[#EEAF20] flex items-center justify-center text-white font-bold text-xs">•</div>
                      <span className="text-gray-700">Innover sans cesse pour surprendre et satisfaire nos visiteurs.</span>
                    </li>
                  </ul>

                  <div className="border-l-4 border-[#EEAF20] pl-4 italic mb-6">
                    <p className="text-gray-700">
                      Venez découvrir pourquoi RFC est rapidement devenu une adresse incontournable pour les amateurs
                      de bon goût !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réseaux Sociaux */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#D62828]">Réseaux Sociaux</h2>
          <div className="w-20 h-2 bg-[#EEAF20] mx-auto mb-2 rounded"></div>
          <div className="w-12 h-1 bg-[#EEAF20]/60 mx-auto rounded"></div>

          <div className="max-w-4xl mx-auto text-center mb-12 mt-2">
            <p className="text-xl text-gray-700 mb-8">
              Suivez-nous sur les réseaux sociaux pour découvrir nos actualités, promotions et partager vos moments préférés chez RFC!
            </p>

            {/* Modified grid to always use 3 columns with adjusted gaps */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-10 mt-12">
              {/* Facebook Card - Simplified for mobile */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-16 sm:h-20 md:h-24 bg-[#4267B2] flex items-center justify-center">
                  <FaFacebook className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Facebook</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 hidden sm:block">Actualités et promotions</p>
                  <a
                    href="https://www.facebook.com/romafriedchiken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-[#D62828] hover:text-[#EEAF20] transition-colors text-xs sm:text-sm md:text-base"
                  >
                    Suivre
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Instagram Card - Simplified for mobile */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center">
                  <FaInstagram className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">Instagram</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 hidden sm:block">Photos & plats</p>
                  <a
                    href="https://www.instagram.com/ratomafriedchicken/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-[#D62828] hover:text-[#EEAF20] transition-colors text-xs sm:text-sm md:text-base"
                  >
                    Suivre
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* TikTok Card - Simplified for mobile */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-16 sm:h-20 md:h-24 bg-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-5 sm:w-8 md:w-10 h-16 sm:h-18 md:h-20 bg-[#25F4EE] blur-md opacity-70 absolute -left-2"></div>
                    <div className="w-5 sm:w-8 md:w-10 h-16 sm:h-18 md:h-20 bg-[#FE2C55] blur-md opacity-70 absolute -right-2"></div>
                  </div>
                  <FaTiktok className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white relative z-10" />
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3">TikTok</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 hidden sm:block">Vidéos & tendances</p>
                  <a
                    href="https://www.tiktok.com/@ratomafriedchicken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-[#D62828] hover:text-[#EEAF20] transition-colors text-xs sm:text-sm md:text-base"
                  >
                    Suivre
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Hashtag Call-to-action - Responsive adjustments */}
            <div className="mt-10 sm:mt-16 bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-md inline-block">
              <p className="text-base sm:text-lg mb-1 sm:mb-2">Partagez votre expérience avec</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D62828]">#RFCGustave</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;