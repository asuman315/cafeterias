import { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';

//This component is used to display the 'customer favorites' section on the home page

const Favorites = ({ customerFavoritesData }: any) => {
  // console.log(customerFavoritesData);

  const [lastItem, setLastItem] = useState(8);
  const [showLess, setShowLess] = useState(false);
  const [zoomedImage, setZoomedImage] = useState('');
  const [showZoomedImage, setShowZoomedImage] = useState(false);

  useEffect(() => {
    // if all the items in the array are displayed
    if (lastItem >= customerFavoritesData.length) {
      setShowLess(true);
    }
    //if more items in the array can be displayed
    if (lastItem < customerFavoritesData.length) {
      setShowLess(false);
    }
  }, [customerFavoritesData.length, lastItem]);

  const handleLoadMore = () => {
    // Display the next 4 items each time the load more button is clicked
    setLastItem(lastItem + 4);
    // if the button all the items in the array are displayed
    if (showLess) {
      setLastItem(8);
    }
  };

  // Get a given number of the first items from the customerFavoritesData array
  const dispalyedCustomerFavoriteItems = customerFavoritesData.slice(
    0,
    lastItem
  );

  const zoomImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
    setShowZoomedImage(true);
  }

  return (
    <section className='flex flex-col items-center px-4 py-8 max-w-6xl mx-auto'>
      <h2>Customer favorites</h2>
      <div className='pt-4 grid grid-cols-autofill-sm md:grid-cols-autofill-md lg:grid-cols-autofill-lg gap-4 w-full'>
        {dispalyedCustomerFavoriteItems.map((favoriteItem: any) => {
          const id = favoriteItem.id;
          //const itemId = favoriteItem.attributes.identity;
          const name = favoriteItem.attributes.name;
          const price = favoriteItem.attributes.price;
          const imageUrl = favoriteItem.attributes.image.data[0].attributes.url;
          //console.log(id, name, price, image, itemId);
          return (
            <div
              key={id}
              className='flex flex-col items-center bg-white shadow-xl relative rounded-md lg:cursor-pointer'>
              //eslint-disable-next-line
              <img
                src={imageUrl}
                alt={`image of ${name}`}
                className='rounded-t-md cursor-zoom-in'
                onClick={() => zoomImage(imageUrl)}
              />
              <div className='p-3 right-6 flex flex-col w-full h-full'>
                <h3 className='font-semibold text-center capitalize text-sm md:text-base lg:text-lg'>
                  {name}
                </h3>
                <p className='font-bold text-center'>$ {price}</p>
                <button className='mt-4 py-3 text-base lg:text-lg capitalize'>
                  order now
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className='rounded-sm bg-primary-1 py-2 px-8 mt-6 disabled:opacity-50'
        onClick={handleLoadMore}>
        {showLess ? 'Show less' : 'Load more'}
      </button>
      <div
        className={`fixed top-0 z-20 h-screen w-screen bg-primary-3 opacity-90 lg:cursor-pointer  ${
          showZoomedImage ? 'block' : 'hidden'
        }`}
        onClick={() => setShowZoomedImage(false)}></div>
      <div
        className={`z-40 fixed top-[30vh] h-[40vh] ${
          showZoomedImage ? 'block' : 'hidden'
        }`}>
        <ImCross
          className='absolute right-4 top-4 font-bold text-dark-red lg:cursor-pointer'
          onClick={() => setShowZoomedImage(false)}
        />
        <img
          src={zoomedImage}
          alt='zoomed image'
          className='w-full h-full'
        />
      </div>
    </section>
  );
};

export default Favorites;
