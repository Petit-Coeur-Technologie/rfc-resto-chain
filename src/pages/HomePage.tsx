// filepath: /home/lamine-diallo/Bureau/TMLD/Work PCT/rfc-resto-chain/src/pages/HomePage.tsx
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import MenuCard from '../components/MenuCard';

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
      name: 'RFC Kobayah',
      address: '123 Rue Kobayah, Conakry, Guinée',
      phone: '(224) 622-123-456',
      orderLink: '/location/kobayah', // Updated link
    },
    {
      name: 'RFC Kipé',
      address: '456 Avenue Kipé, Conakry, Guinée',
      phone: '(224) 622-654-321',
      orderLink: '/location/kipe', // Updated link
    },
    {
      name: 'RFC Nongo',
      address: '789 Route Nongo, Conakry, Guinée',
      phone: '(224) 622-987-654',
      orderLink: '/location/nongo', // Updated link
    },
  ];

  return (
    <Layout>
      {/* Section Héros */}
      <HeroSection />

      {/* Section Localisations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#D62828]">Nos Localisations</h2>
          <p className="text-center text-gray-600 mb-8">
            Dînez sur place ou commandez en ligne pour emporter ou vous faire livrer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 shadow-md text-center bg-[#FFFFFF]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#D62828]">{location.name}</h3>
                <p className="text-gray-700 mb-2">{location.address}</p>
                <p className="text-gray-700 mb-4">
                  <strong>Téléphone :</strong> {location.phone}
                </p>
                <a
                  href={location.orderLink} // Redirects to the corresponding location
                  className="inline-block px-6 py-2 bg-[#D62828] text-white font-bold rounded hover:bg-[#EEAF20] transition"
                  style={{
                    backgroundImage: 'url(/images/button-bg.jpg)', // Optional background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  aria-label={`Voir le menu et commander pour ${location.name}`}
                >
                  Voir le MENU & Commander
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Petite Section Héros */}
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/restaurant-interior.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl font-bold">Découvrez Notre Histoire</h2>
          <p className="text-lg mt-2">Apprenez-en plus sur notre parcours et notre passion pour la cuisine.</p>
        </div>
      </section>

      {/* Section À Propos */}
      <section className="py-12 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#D62828]">À Propos de Nous</h2>
          <p className="text-gray-700 leading-relaxed">
            Bienvenue chez <strong>Resto Chain</strong>, où nous vous proposons les meilleurs plats préparés avec amour et des ingrédients frais. Notre mission est d'offrir une expérience culinaire inoubliable à chaque client.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Fondée en 2025, Resto Chain est devenue un pilier de la communauté, offrant une grande variété de plats inspirés des cuisines du monde entier.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;