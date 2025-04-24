import React from 'react';
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
  FaShoppingBag, FaBoxOpen, FaTruck 
} from 'react-icons/fa';
import { MdTakeoutDining } from 'react-icons/md';
import AnimatedElement from '../components/AnimatedElement';

const HomePage = () => {
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
      address: '123 Rue Kobayah, Conakry, Guinée',
      phone: '(224) 622-123-456',
      orderLink: '/location/kobayah',
    },
    {
      name: 'RFC KIPÉ',
      address: '456 Avenue Kipé, Conakry, Guinée',
      phone: '(224) 622-654-321',
      orderLink: '/location/kipe',
    },
    {
      name: 'RFC NONGO',
      address: '789 Route Nongo, Conakry, Guinée',
      phone: '(224) 622-987-654',
      orderLink: '/location/nongo',
    },
    {
      name: 'RFC TOMBOLIA',
      address: '321 Boulevard Tombolia, Conakry, Guinée',
      phone: '(224) 622-111-222',
      orderLink: '/location/tombolia',
    },
    {
      name: 'RFC KALOUM',
      address: '567 Avenue Kaloum, Conakry, Guinée',
      phone: '(224) 622-333-444',
      orderLink: '/location/kaloum',
    },
  ];

  return (
    <Layout>
      {/* Section Héros */}
      <HeroSection />

      {/* Section Localisations */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#D62828]">Nos Localisations</h2>
          <div className="w-20 h-2 bg-[#EEAF20] mx-auto mb-8 rounded"></div>
          
          <p className="text-center text-gray-700 mb-12 text-xl max-w-3xl mx-auto">
            Découvrez nos 5 restaurants stratégiquement situés à Conakry pour vous servir au mieux. Dînez sur place, commandez en ligne ou faites-vous livrer !
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#EEAF20]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-lg">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#EEAF20]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <p className="text-gray-700 text-lg">{location.phone}</p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-auto">
                    <Link 
                      to={location.orderLink}
                      className="inline-flex items-center justify-center w-full px-8 py-3 bg-[#EEAF20] text-white font-bold rounded-lg transform transition-all duration-300 hover:bg-[#D62828] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#EEAF20] focus:ring-offset-2"
                      style={{
                        backgroundImage: 'url(/images/button-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <span className="mr-2">Voir le MENU & Commander</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
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
          <div className="w-16 h-2 bg-[#EEAF20] mx-auto mb-10 rounded"></div>

          <div className="bg-white/60 backdrop-blur-md text-gray-800 rounded-lg shadow-xl p-8 max-w-xl mx-auto">
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

      {/* Section À Propos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#D62828]">À Propos de Nous</h2>
          <div className="w-20 h-2 bg-[#EEAF20] mx-auto mb-12 rounded"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left column with image */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="../assets/images/logo.jpeg" 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#EEAF20] rounded-lg p-6 shadow-lg hidden md:block">
                  <p className="text-white font-bold text-xl italic">
                    "Le plaisir est au cœur de chaque bouchée"
                  </p>
                </div>
              </div>
              
              {/* Right column with text */}
              <div className="bg-white rounded-lg shadow-xl p-8 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D62828]/5 rounded-full -mt-8 -mr-8 z-0"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#EEAF20]/5 rounded-full -mb-10 -ml-10 z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Bienvenue chez <span className="text-[#D62828]">Ratoma Fried Chicken – RFC</span>
                  </h3>

                  <p className="mb-6 text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#D62828]">Ratoma Fried Chicken - RFC</span>, c'est bien plus qu'un simple Fast food : c'est une destination gourmande où saveurs, générosité et qualité se rencontrent. 
                    Présent dans <span className="font-medium">5 quartiers stratégiques de Conakry</span> – Kipé, Kobaya, Nongo, Kaloum et Tombolia – RFC vous accueille chaque jour avec une carte riche et variée.
                  </p>

                  <p className="font-semibold text-lg mb-4 text-[#D62828]">Au menu :</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center bg-[#D62828]/5 p-3 rounded-lg">
                      <div className="w-10 h-10 mr-3 bg-[#EEAF20] rounded-full flex items-center justify-center text-white text-lg">
                        🍗
                      </div>
                      <span>Du poulet frit croustillant et juteux</span>
                    </div>
                    <div className="flex items-center bg-[#D62828]/5 p-3 rounded-lg">
                      <div className="w-10 h-10 mr-3 bg-[#EEAF20] rounded-full flex items-center justify-center text-white text-lg">
                        🍕
                      </div>
                      <span>Des pizzas généreuses</span>
                    </div>
                    <div className="flex items-center bg-[#D62828]/5 p-3 rounded-lg">
                      <div className="w-10 h-10 mr-3 bg-[#EEAF20] rounded-full flex items-center justify-center text-white text-lg">
                        🍔
                      </div>
                      <span>Des burgers gourmands</span>
                    </div>
                    <div className="flex items-center bg-[#D62828]/5 p-3 rounded-lg">
                      <div className="w-10 h-10 mr-3 bg-[#EEAF20] rounded-full flex items-center justify-center text-white text-lg">
                        🥤
                      </div>
                      <span>Des milkshakes onctueux</span>
                    </div>
                  </div>

                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Chaque plat est préparé avec soin à partir d'ingrédients de qualité, pour vous offrir une expérience rapide, savoureuse et inoubliable dans une ambiance conviviale et chaleureuse.
                  </p>

                  <div className="border-l-4 border-[#EEAF20] pl-4 italic mb-6">
                    <p className="text-gray-700">
                      Chez RFC, <span className="font-medium text-[#D62828]">le plaisir est au cœur de chaque bouchée.</span>
                    </p>
                  </div>

                  <p className="font-semibold text-center text-lg">
                    Merci pour votre confiance et votre fidélité.<br />
                    On vous attend avec le sourire dans l'un de nos restaurants RFC !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réseaux Sociaux */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#D62828]">Réseaux Sociaux</h2>
          <div className="w-20 h-2 bg-[#EEAF20] mx-auto mb-8 rounded"></div>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
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