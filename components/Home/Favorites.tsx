import { useEffect, useState } from 'react';

import chickenBurger from '../../public/images/chicken-burger.jpg';
import chickenPesto from '../../public/images/chicken-pesto.jpg';
import chickenWingMeal from '../../public/images/chicken-wing-meal.jpg';
import chipotleChicken from '../../public/images/chipotle-chicken.jpg';
import chipotleFishBowl from '../../public/images/chipotle-fish-bowl.jpg';
import countrySteakEggs from '../../public/images/country-steak-eggs.jpg';
import friedPlantain from '../../public/images/fried-plantain.jpg';
import icedCoffee from '../../public/images/iced-coffee.jpg';
import grilledChickenBreast from '../../public/images/grilled-chicken-breast.jpg';
import omeletteCombo from '../../public/images/omelette-combo.jpg';
import pepperBeafSteak from '../../public/images/pepper-beaf-steak.jpg';
import vanillaMuffin from '../../public/images/vanilla-muffin.jpg';
import espresso from '../../public/images/espresso.png'
import chickenPizza from '../../public/images/chicken-pizza.png';
import vegeterianPizza from '../../public/images/vegeterian-pizza.png';
import cappuccino from '../../public/images/cappuccino.png';
import africanTeaPot from '../../public/images/african-tea-pot.png';

const Favorites = ({ customerFavoritesData }: any) => {
  const favoriteItemsInfo = [
    {
      id: 1,
      name: 'chicken wing meal',
      price: '$9.99',
      image: chickenWingMeal,
    },
    { id: 2, name: 'chipotle chicken', price: '$9.99', image: chipotleChicken },
    {
      id: 3,
      name: 'chipotle fish bowl',
      price: '$9.99',
      image: chipotleFishBowl,
    },
    {
      id: 4,
      name: 'steak eggs',
      price: '$9.99',
      image: countrySteakEggs,
    },
    { id: 5, name: 'fried plantain', price: '$9.99', image: friedPlantain },
    { id: 6, name: 'iced coffee', price: '$9.99', image: icedCoffee },
    {
      id: 7,
      name: 'grilled chicken',
      price: '$9.99',
      image: grilledChickenBreast,
    },
    { id: 8, name: 'omelette combo', price: '$9.99', image: omeletteCombo },
    {
      id: 9,
      name: 'pepper beef steak',
      price: '$9.99',
      image: pepperBeafSteak,
    },
    { id: 10, name: 'vanilla muffin', price: '$9.99', image: vanillaMuffin },
    { id: 11, name: 'chicken burger', price: '$9.99', image: chickenBurger },
    { id: 12, name: 'chicken pesto', price: '$9.99', image: chickenPesto },
    { id: 13, name: 'espresso', price: '$9.99', image: espresso },
    { id: 14, name: 'chicken pizza', price: '$9.99', image: chickenPizza },
    { id: 15, name: 'vegeterian pizza', price: '$9.99', image: vegeterianPizza },
    { id: 16, name: 'cappuccino', price: '$9.99', image: cappuccino },
    { id: 17, name: 'african tea pot', price: '$9.99', image: africanTeaPot },
  ];

  console.log(customerFavoritesData);
  
  
  const [lastItem, setLastItem] = useState(4);
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    // if all the items in the array are displayed
    if (lastItem >= favoriteItemsInfo.length) {
      setShowLess(true);
    }
    //if more items in the array can be displayed
    if (lastItem < favoriteItemsInfo.length) {
      setShowLess(false);
    }
  })

  const handleLoadMore = () => {
    // Display the next 4 items each time the load more button is clicked
    setLastItem(lastItem + 4);
    // if the button all the items in the array are displayed
    if (showLess) {
      setLastItem(4);
    }
  }
  
  // Get a given number of the first items from the favoriteItemsInfo array
  const favoriteItems = favoriteItemsInfo.slice(0, lastItem);

  return (
    <section className='flex flex-col items-center px-4 py-8 max-w-6xl mx-auto'>
      <h2>Customer favorites</h2>
      <div className='pt-4 grid grid-cols-autofill-sm md:grid-cols-autofill-md lg:grid-cols-autofill-lg gap-4'>
        {favoriteItems.map((favoriteItemInfo, index) => {
          const { name, price, image, id } = favoriteItemInfo;
          return (
            <div
              key={index}
              data-id={id}
              className='flex flex-col items-center bg-white border- relative rounded-md lg:cursor-pointer'>
              <img
                src={image.src}
                alt={`image of ${name}`}
                className='rounded-t-md'
              />
              <div className='p-3 right-6 flex flex-col w-full h-full'>
                <p className='font-medium text-center'>{name}</p>
                <p className='font-medium text-center'>{price}</p>
                <button className='mt-4 py-3 text-base lg:text-lg'>
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className='rounded-sm bg-primary-1 py-2 px-8 mt-6 disabled:opacity-50'
        onClick={handleLoadMore}
        >
        { showLess ? 'Show less' : 'Load more' }
      </button>
    </section>
  );
};

export default Favorites;
