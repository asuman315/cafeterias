import { useEffect, useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const myCartItems = localStorage.getItem('userCart')
      ? JSON.parse(localStorage.getItem('userCart')!)
      : [];
    setCartItems(myCartItems);
    //eslint-disable-next-line
  }, []);

  console.log('typeof cartItems', typeof cartItems);

  return (
    <div className='px-4 py-2 mb-8'>
      {cartItems.length > 0 ? (
        <WithCartItems cartItems={cartItems} />
      ) : (
        <WithoutCartItems />
      )}
    </div>
  );
};

const WithCartItems = ({ cartItems }: any) => {
  console.log(cartItems);

  const handleIncreament = (id: number) => {};

  const handleDecreament = (id: number) => {};

  return (
    <div>
      {cartItems.map((item: any, index: any) => {
        return (
          <div key={index}>
            <CartItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

const WithoutCartItems = () => {
  return <div></div>;
};

const CartItem = ({ item }: any) => {
  const [quantity, setQuantity] = useState(1);
  const { name, price, productImage } = item;
  return (
    <div className='flex flex-col py-6 border-b-[1px]'>
      <div className='flex'>
        {/*eslint-disable-next-line*/}
        <img
          src={productImage}
          alt={`Image of ${productImage}`}
          className='w-36 sm:w-44 sm:h-auto h-32 rounded'
        />
        <div className='ml-6'>
          <h3>{name}</h3>
          <h4 className='mt-5 underline'>See Details</h4>
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <div className='flex items-center'>
          <div
            className='flex items-center justify-center cursor-pointer'
            onClick={() => setQuantity(quantity + 1)}>
            <HiPlus className='w-6 h-6 mr-3' />
          </div>
          <p className='bg-primary-4 px-4 py-2 font-bold text'>{quantity}</p>
          <div
            className=' w-7 h-7 flex items-center justify-center cursor-pointer'
            onClick={() => setQuantity(quantity - 1)}>
            <HiMinus className='w-6 h-6 ml-3' />
          </div>
        </div>
        <h3 className='self-end font-bold text-2xl mb-[-10px] md:mb-[-4px]'>${price}</h3>
      </div>
    </div>
  );
};

export default Cart;
