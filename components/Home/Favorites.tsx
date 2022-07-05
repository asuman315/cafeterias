//import imageFour from '../../public/images/image-four-no-bg.png';
//import Link from 'next/link';

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

const Favorites = () => {

  const favoriteItemsInfo = [
   { id: 1, name: 'chicken wing meal', price: '$9.99', image: chickenWingMeal },
   { id: 2, name: 'chipotle chicken', price: '$9.99', image: chipotleChicken },
   { id: 3, name: 'chipotle fish bowl', price: '$9.99', image: chipotleFishBowl },
   { id: 4, name: 'country steak eggs', price: '$9.99', image: countrySteakEggs },
   { id: 5, name: 'fried plantain', price: '$9.99', image: friedPlantain },
   { id: 6, name: 'iced coffee', price: '$9.99', image: icedCoffee },
   { id: 7, name: 'grilled chicken breast', price: '$9.99', image: grilledChickenBreast },
   { id: 8, name: 'omelette combo', price: '$9.99', image: omeletteCombo },
   { id: 9, name: 'pepper beef steak', price: '$9.99', image: pepperBeafSteak },
   { id: 10, name: 'vanilla muffin', price: '$9.99', image: vanillaMuffin },
   { id: 11, name: 'chicken burger', price: '$9.99', image: chickenBurger },
   { id: 12, name: 'chicken pesto', price: '$9.99', image: chickenPesto },
  ]

  return (
    <section className='px-3 py-4'>
      <h2>Customer favorites</h2>
        <div>
          {favoriteItemsInfo.map((favoriteItemInfo, index) => {
            const { name, price, image } = favoriteItemInfo;
            return (
              <div key={index} className='flex flex-col items-center bg-white w-[450px] border- relative mt-4 rounded-md p-3'>
                <img src={image.src} alt={`image of ${name}`} className='border- w-1/2' />
                <div className='absolut right-6 flex flex-col'>
                  <p className='font-medium'>{name}</p>
                  <p className='font-medium'>{price}</p>
                  <button className='mt-4'>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default Favorites;
