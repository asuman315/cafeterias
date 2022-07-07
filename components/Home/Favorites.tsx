import { useEffect, useState } from 'react';

const Favorites = ({ customerFavoritesData }: any) => {
 // console.log(customerFavoritesData);

  const [lastItem, setLastItem] = useState(4);
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    // if all the items in the array are displayed
    if (lastItem >= customerFavoritesData.length) {
      setShowLess(true);
    }
    //if more items in the array can be displayed
    if (lastItem < customerFavoritesData.length) {
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
  
  // Get a given number of the first items from the customerFavoritesData array
  const dispalyedCustomerFavoriteItems = customerFavoritesData.slice(0, lastItem);

  return (
    <section className='flex flex-col items-center px-4 py-8 max-w-6xl mx-auto'>
      <h2>Customer favorites</h2>
      <div className='pt-4 grid grid-cols-autofill-sm md:grid-cols-autofill-md lg:grid-cols-autofill-lg gap-4 w-full'>
        {dispalyedCustomerFavoriteItems.map((favoriteItem: any) => {
          const id = favoriteItem.id;
          //const itemId = favoriteItem.attributes.identity;
          const name = favoriteItem.attributes.name;
          const price = favoriteItem.attributes.price;
          const image = favoriteItem.attributes.image.data[0].attributes.url;
          //console.log(id, name, price, image, itemId);
          return (
            <div
              key={id}
              className='flex flex-col items-center bg-white border- relative rounded-md lg:cursor-pointer'>
              <img
                src={image}
                alt={`image of ${name}`}
                className='rounded-t-md'
              />
              <div className='p-3 right-6 flex flex-col w-full h-full'>
                <p className='font-semibold text-center capitalize'>{name}</p>
                <p className='font-bold text-center'>$ {price}</p>
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
