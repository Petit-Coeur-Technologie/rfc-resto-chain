// filepath: /home/lamine-diallo/Bureau/TMLD/Work PCT/rfc-resto-chain/src/pages/AboutPage.tsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>
            Welcome to <strong>Resto Chain</strong>, where we bring you the finest dishes crafted with love and fresh ingredients. Our mission is to provide an unforgettable dining experience for every guest, whether you're dining in or enjoying our food at home.
          </p>
          <p>
            Established in 2025, Resto Chain has been a cornerstone of the community, offering a wide variety of dishes inspired by global cuisines. From our classic Margherita Pizza to our signature Spaghetti Carbonara, every dish is prepared with care and attention to detail.
          </p>
          <p>
            We believe in using only the freshest ingredients, sourced locally whenever possible. Our team of talented chefs is dedicated to creating meals that not only taste amazing but also bring people together.
          </p>
          <p className="text-center font-bold text-blue-500">
            Thank you for choosing Resto Chain. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;