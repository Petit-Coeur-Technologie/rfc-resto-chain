import React from 'react';
import Layout from '../../components/Layout';

const Kipe = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[490px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/kipe-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">RFC Kipé</h1>
        </div>
      </section>

      {/* Location Details Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {/* Row 1: Opening Hours */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#D62828]">Opening Hours</h2>
              <p className="text-gray-700 mb-4">
                <strong>Monday — Friday:</strong> 10am — 8pm
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Saturday:</strong> 11am — 7pm
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Sunday:</strong> 12pm — 6pm
              </p>
            </div>

            {/* Row 2: Map and Address */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846813!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e8b1b1%3A0x4e9b8b8b8b8b8b8b!2sRFC%20Kipe!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="RFC Kipé Location"
                className="rounded-lg shadow-md"
              ></iframe>

              {/* Address */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#D62828]">RFC Kipé</h2>
                <p className="text-gray-700 mb-4">
                  456 Kipé Avenue <br />
                  Conakry, Guinea
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> (224) 622-654-321
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#D62828]">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/images/kipe-gallery1.jpg"
              alt="Gallery Image 1"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/kipe-gallery2.jpg"
              alt="Gallery Image 2"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/kipe-gallery3.jpg"
              alt="Gallery Image 3"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/kipe-gallery4.jpg"
              alt="Gallery Image 4"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/kipe-gallery5.jpg"
              alt="Gallery Image 5"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/kipe-gallery6.jpg"
              alt="Gallery Image 6"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kipe;