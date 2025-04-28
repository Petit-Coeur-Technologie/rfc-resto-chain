import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { useGloriaFood } from '../hooks/useGloriaFood';

const MenuPage = () => {
  // Use GloriaFood for online ordering
  useGloriaFood();
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState('PERI PERI & BURGERS');
  
  // Refs for category sections
  const categoryRefs = useRef({});
  
  // Category emojis mapping
  const categoryEmojis = {
    'PERI PERI & BURGERS': '🍔',
    'MENU CLASSIQUE POULET': '🍗',
    'MENU COMBO': '🍱',
    'MENU MILKSHAKES': '🥤',
    'MENU PIZZA': '🍕',
    'BOISSON': '🥂',
    'MENU GAUFRES': '🧇'
  };
  
  // Handle scroll to category
  const scrollToCategory = (category) => {
    setActiveCategory(category);
    categoryRefs.current[category]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  const menuItems = [
    {
      category: 'PERI PERI & BURGERS',
      description: 'Savourez nos grillades Peri Peri épicées ou nos burgers généreux, préparés avec du poulet croustillant ou du bœuf juteux. Un vrai régal !',
      items: [
        {
          name: '1/2 Poulet Peri Peri + Frites',
          price: '75,000',
          description: 'Demi-poulet Peri Peri juteux avec frites',
        },
        {
          name: 'Poulet Entier Peri Peri + Frites',
          price: '130,000',
          description: 'Poulet entier Peri Peri grillé avec frites',
        },
        {
          name: '6 Ailes Peri Peri + Frites',
          price: '65,000',
          description: 'Six ailes Peri Peri épicées avec frites',
        },
        {
          name: 'Burger Classique Poulet + Frites',
          price: '65,000',
          description: 'Burger de poulet croustillant avec frites',
        },
        {
          name: 'Burger Cheese Poulet + Frites',
          price: '75,000',
          description: 'Burger gourmand avec ingrédients premium et fromage Cheddar, servi avec frites',
        },
        {
          name: 'Empire Burger + Frites',
          price: '90,000',
          description: 'Burger gourmand avec ingrédients premium, servi avec frites',
        },
        {
          name: 'Burger Classique Viande + Frites',
          price: '65,000',
          description: 'Burger steak avec garnitures, servi avec frites',
        },
        {
          name: 'Burger Viande Cheese + Frites',
          price: '75,000',
          description: 'Burger gourmand avec ingrédients premium et fromage Cheddar, servi avec frites',
        },
        {
          name: 'Double Whopper Burger + Frites',
          price: '90,000',
          description: 'Burger double steak avec garnitures, servi avec frites',
        },
      ],
    },
    {
      category: 'MENU CLASSIQUE POULET',
      description: 'Dégustez nos tenders, nuggets, ailes épicées ou wraps, servis avec des frites dorées. Pour plus de fraîcheur, essayez notre salade bowl !',
      items: [
        {
          name: 'Nuggets de Poulet',
          price: '40,000',
          description: '6 nuggets de poulet croustillants avec frites',
        },
        {
          name: 'Tenders de Poulet (4 pcs)',
          price: '65,000',
          description: '4 tenders de poulet croustillants avec frites',
        },
        {
          name: 'Tenders de Poulet (8 pcs)',
          price: '110,000',
          description: '10 tenders de poulet croustillants avec frites',
        },
        {
          name: 'Petite Faim',
          price: '50,000',
          description: '2 morceaux de poulet croustillant avec frites',
        },
        {
          name: 'Grande Faim',
          price: '65,000',
          description: '3 morceaux de poulet croustillant avec frites',
        },
        {
          name: 'Wrap Classique Poulet',
          price: '50,000',
          description: 'Délicieux wrap au poulet avec frites',
        },
        {
          name: 'Ailes Épicées (6 pcs)',
          price: '65,000',
          description: '6 ailes épicées avec frites',
        },
        {
          name: 'Ailes Épicées (3 pcs)',
          price: '30,000',
          description: '3 ailes épicées',
        },
        {
          name: 'Salade Bowl',
          price: '50,000',
          description: 'Salade fraîche avec 6 nuggets de poulet, laitue, tomates, oignons, concombres',
        },
      ],
    },
    {
      category: 'MENU COMBO',
      description: 'Des menus gourmands avec poulet, burgers, wraps ou pizza, servis avec des frites et une boisson. Parfait pour un repas savoureux, seul ou en famille !',
      items: [
        {
          name: 'Burger Filet de Poulet RFC',
          price: '75,000',
          description: 'Burger au filet de poulet croustillant, frites dorées et une boisson fraîche',
        },
        {
          name: 'Wrap Poulet RFC',
          price: '60,000',
          description: 'Wrap garni de poulet tendre, accompagné de frites et d’une boisson',
        },
        {
          name: 'Seau de Poulet Familial RFC',
          price: '250,000',
          description: '8 morceaux de poulet croustillants, 10 ailes épicées, 4 portions de frites et 2 boissons',
        },
        {
          name: 'Déjeuner RFC',
          price: '60,000',
          description: '2 morceaux de poulet frit, une portion de frites et une boisson',
        },
        {
          name: 'Variety RFC',
          price: '80,000',
          description: '2 morceaux de poulet, 3 ailes épicées, une portion de frites et une boisson',
        },
        {
          name: 'Mega Mix RFC',
          price: '210,000',
          description: '4 morceaux de poulet, 2 burgers filet, 2 portions de frites et 2 boissons',
        },
        {
          name: 'Burger Filet de Poulet + Ailes RFC',
          price: '90,000',
          description: 'Burger filet de poulet, 2 ailes épicées, une portion de frites et une boisson',
        },
        {
          name: 'Nuggets de Poulet RFC',
          price: '45,000',
          description: '6 nuggets de poulet croustillants, une portion de frites et une boisson',
        },
        {
          name: 'Pizza + Poulet RFC',
          price: '150,000',
          description: '1 pizza Margherita, 8 ailes épicées, 2 portions de frites et 2 boissons',
        },
        {
          name: 'Seau Familial RFC',
          price: '200,000',
          description: '10 morceaux de poulet croustillants, 4 portions de frites et 2 boissons',
        },
      ],
    },
    {
      category: 'MENU MILKSHAKES',
      description: 'Dégustez nos milkshakes onctueux aux saveurs classiques et gourmandes comme Snickers, Kinder Bueno ou Nutella. Fraîcheur et plaisir garantis !',
      items: [
        {
          name: 'Milkshake Chocolat',
          price: '40,000',
          description: 'Milkshake au chocolat onctueux',
        },
        {
          name: 'Milkshake Vanille',
          price: '40,000',
          description: 'Milkshake à la vanille douce',
        },
        {
          name: 'Milkshake Fraise',
          price: '40,000',
          description: 'Milkshake à la fraise fruitée',
        },
        {
          name: 'Milkshake Banane',
          price: '40,000',
          description: 'Milkshake à la banane sucrée et crémeuse',
        },
        {
          name: 'Milkshake Fruit de la Passion',
          price: '40,000',
          description: 'Milkshake exotique et rafraîchissant aux fruits de la passion',
        },
        {
          name: 'Frappuccino',
          price: '40,000',
          description: 'Frappuccino glacé au café',
        },
        {
          name: 'Milkshake au Snickers',
          price: '60,000',
          description: 'Chocolat, caramel et cacahuètes croquantes.',
        },
        {
          name: 'Milkshake au Kinder Bueno',
          price: '60,000',
          description: 'Milkshake au Kinder Bueno fondant et gourmand.',
        },
        {
          name: 'Milkshake aux Biscuits Lotus Biscoff',
          price: '60,000',
          description: 'Le goût unique du biscuit caramélisé.',
        },
        {
          name: 'Milkshake au Twix',
          price: '60,000',
          description: 'Biscuit croustillant et caramel fondant.',
        },
        {
          name: 'Milkshake aux M&M’s',
          price: '60,000',
          description: 'Une explosion de chocolat et de croustillant.',
        },
      ],
    },
    {
      category: 'MENU PIZZA',
      description: 'Nos pizzas artisanales sont préparées avec une pâte fraîche et garnies d’ingrédients de qualité pour une explosion de saveurs à chaque bouchée !',
      items: [
        {
          name: 'Pizza Romana',
          price: '110,000',
          description: 'Sauce tomate, mozzarella, saucisse de bœuf, champignons',
        },
        {
          name: 'Pizza Végétarienne',
          price: '85,000',
          description: 'Sauce tomate, mozzarella, oignons, champignons, poivrons, tomates fraîches',
        },
        {
          name: 'Pizza Thon',
          price: '110,000',
          description: 'Sauce tomate, olives, mozzarella, tomates fraîches, thon',
        },
        {
          name: 'Pizza Margarita',
          price: '75,000',
          description: 'Sauce tomate classique, mozzarella',
        },
        {
          name: 'Pizza Viande',
          price: '95,000',
          description: 'Sauce tomate, mozzarella, bœuf épicé, oignons, piment',
        },
        {
          name: 'Pizza Poulet',
          price: '95,000',
          description: 'Sauce tomate, mozzarella, poulet épicé, champignons',
        },
      ],
    },
    {
      category: 'BOISSON',
      description: 'Rafraîchissez-vous avec nos sodas pétillants, hydratez-vous avec notre eau minérale ou savourez un café intense et réconfortant.',
      items: [
        {
          name: 'Coca-Cola & Fanta',
          price: '15,000',
          description: 'Coca ou Fanta pétillant au goût original, rafraîchissant et désaltérant',
        },
        {
          name: 'Eau Minérale (petite bouteille)',
          price: '5,000',
          description: 'Eau pure et rafraîchissante, idéale pour s’hydrater',
        },
        {
          name: 'Thé Chaud',
          price: '10,000',
          description: 'Infusion chaude et apaisante, parfaite pour une pause détente',
        },
        {
          name: 'Espresso',
          price: '15,000',
          description: 'Café court et intense, avec une saveur riche et un arôme puissant',
        },
        {
          name: 'Cappuccino',
          price: '25,000',
          description: 'Café onctueux au lait mousseux, parfait pour un moment de douceur',
        },
        {
          name: 'Chocolat Chaud',
          price: '25,000',
          description: 'Boisson chaude et gourmande au chocolat fondant et crémeux',
        },
        {
          name: 'Fanta',
          price: '15,000',
          description: 'Fanta pétillant au goût original, rafraîchissant et désaltérant',
        },
      ],
    },
    {
      category: 'MENU GAUFRES',
      description: 'Croustillantes et moelleuses, nos gaufres sont servies avec du chocolat, du caramel, des biscuits Biscoff ou du poulet pour une touche sucrée-salée !',
      items: [
        {
          name: 'Gaufre Choco Banane Caramel',
          price: '60,000',
          description: 'Gaufre avec bananes, sauce caramel, Nutella, miettes d\'Oreo, sauce toffee',
        },
        {
          name: 'Gaufre Lotus Biscoff',
          price: '60,000',
          description: 'Gaufre avec pâte de Lotus Biscoff, miettes de biscuits, sauce Biscoff',
        },
        {
          name: 'Gaufre Double Chocolat',
          price: '60,000',
          description: 'Gaufre avec sauce chocolat blanc et noir, morceaux de chocolat fondu',
        },
        {
          name: 'Gaufre Ferrero Rocher Gaufre',
          price: '70,000',
          description: 'Gaufre avec Nutella, morceaux de Ferrero Rocher, chocolat blanc, noisettes',
        },
        {
          name: 'Gaufre Cookies & Cream',
          price: '60,000',
          description: 'Gaufre avec Nutella, Oreos écrasés, topping cookies & cream',
        },
        {
          name: 'Gaufre Bueno Kinder',
          price: '70,000',
          description: 'Gaufre avec Kinder Bueno fondu, sauce chocolat blanc, noisettes',
        },
        {
          name: 'Gaufre Classique',
          price: '45,000',
          description: 'Gaufre avec sucre glace et sirop d\'érable',
        },
        {
          name: 'RFC Poulet & Gaufre',
          price: '80,000',
          description: 'Gaufre avec deux morceaux de poulet croustillants, sirop d\'érable, frites',
        },
      ],
    },
  ];
  
  // Detect active category on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.getAttribute('data-category'));
        }
      });
    }, { threshold: 0.2, rootMargin: '-80px 0px -300px 0px' });
    
    // Observe all category sections
    Object.values(categoryRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      Object.values(categoryRefs.current).forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Layout>
      {/* Simple header with white background and red text */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl mt-10 font-bold text-center text-[#D62828]">Notre Menu</h1>
        </div>
      </section>
      
      {/* Improved category navigation for mobile */}
      <div className="sticky top-16 z-20 bg-white shadow-sm py-4">
        <div className="container mx-auto px-1"> {/* Reduced horizontal padding */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2">
            {menuItems.map((category) => (
              <div
                key={category.category}
                onClick={() => scrollToCategory(category.category)}
                className={`cursor-pointer px-3 py-2 rounded-lg text-sm font-medium flex items-center flex-shrink-0 ${
                  activeCategory === category.category
                    ? 'bg-[#D62828] text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{categoryEmojis[category.category]}</span>
                {category.category}
              </div>
            ))}
          </div>
          
          {/* Scroll indicator for mobile */}
          <div className="flex justify-center mt-2 md:hidden">
            <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Simplified menu content */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {menuItems.map((category) => (
            <div 
              key={category.category}
              ref={el => categoryRefs.current[category.category] = el}
              data-category={category.category}
              className="mb-12 scroll-mt-32"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#D62828] flex items-center justify-center">
                  <span className="mr-2">{categoryEmojis[category.category]}</span>
                  {category.category}
                </h2>
                
                {category.description && (
                  <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">{category.description}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-lg shadow-sm p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <span className="font-semibold text-[#D62828] whitespace-nowrap ml-2">
                        {item.price} GNF
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MenuPage;