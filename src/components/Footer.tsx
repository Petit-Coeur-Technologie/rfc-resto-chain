import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2025 RFC Kobayah. Tous droits réservés.</p>
        <p>123 Rue Kobayah, Conakry, Guinée | Téléphone : (224) 622-123-456</p>
        <p>
          <a
            href="mailto:contact@rfckobayah.com"
            className="text-blue-400 hover:underline"
          >
            contact@rfckobayah.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;