import React from 'react';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image?: string; // Optional image for the menu item
}

const MenuCard: React.FC<MenuCardProps> = ({ name, description, price, image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-blue-500 font-bold">{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;