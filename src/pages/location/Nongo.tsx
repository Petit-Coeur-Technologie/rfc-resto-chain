import React from 'react';
import Layout from '../../components/Layout';
// Replace Heroicons with React Icons
import { FaUtensils, FaTruck } from 'react-icons/fa';
import { MdTakeoutDining } from 'react-icons/md';
import { useGloriaFood } from '../../hooks/useGloriaFood';

const Nongo = () => {
  // Add the GloriaFood hook to ensure button functionality
  useGloriaFood();

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[490px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/nongo-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold text-white">RFC NONGO</h1>
        </div>
      </section>

      {/* Location Details Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {/* Row 1: Opening Hours */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#D62828]">Heures D'ouverture</h2>
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

            {/* Row 2: Map and Address */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8384626599173!2d-13.6644413!3d9.659817949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzknMzUuNCJOIDEzwrAzOSc1Mi4wIlc!5e0!3m2!1sfr!2sgn!4v1624287954211!5m2!1sfr!2sgn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="RFC NONGO Location"
                className="rounded-lg shadow-md"
              ></iframe>

              {/* Address */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#D62828]">RFC NONGO</h2>
                <p className="text-gray-700 mb-4">
                  789 Route Nongo <br />
                  Conakry, Guinée
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Téléphone:</strong> (224) 622-987-654
                </p>
                
                {/* Gloria Food Order Button */}
                <span 
                  className="glf-button inline-block px-8 py-3 bg-[#EEAF20] text-white font-bold rounded hover:bg-[#D62828] transition cursor-pointer"
                  data-glf-cuid="561941df-3039-448e-a17b-04a33468a324"
                  data-glf-ruid="0159cb6f-8a4a-4045-94ef-677c12d1687d"
                  style={{
                    backgroundImage: 'url(/images/button-bg.jpg)',
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

      {/* Photo Gallery Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#D62828]">Galerie Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder images - replace with actual images once available */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="w-full h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                <p className="text-gray-500">Image Galerie {num}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Nongo;