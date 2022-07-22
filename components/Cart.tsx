import { formatPrice } from './Functions';
import { useEffect, useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { MdOutlineDelete } from 'react-icons/md';

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
        <WithCartItems cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <WithoutCartItems />
      )}
    </div>
  );
};

const WithCartItems = ({ cartItems, setCartItems }: any) => {

  return (
    <div>
      {cartItems.map((item: any, index: any) => {
        return (
          <div key={index}>
            <CartItem item={item} cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        );
      })}
    </div>
  );
};

const WithoutCartItems = () => {
  return <div></div>;
};

const CartItem = ({ item, cartItems, setCartItems }: any) => {

  type Item = {
    name: string;
    price: number;
    quantity: number;
    productImage: string;
    productId: string;
  };

  const { name, price, productImage, productId, quantity }: Item = item;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  let totalPrice = price * itemQuantity;
  totalPrice = formatPrice(totalPrice);
 
   const handleIncrement = () => {
     setItemQuantity(itemQuantity + 1);
     cartItems.map((item: any) => {
        if (item.productId === productId) {
          item.quantity = itemQuantity +1;
        }
      });
      // up date the local storage with the updated cart
      localStorage.setItem('userCart', JSON.stringify(cartItems));
   };

   const handleDecrement = () => {
     itemQuantity > 1 ? setItemQuantity(itemQuantity - 1) : setItemQuantity(1);
     cartItems.map((item: any) => {
       if (item.productId === productId) {
         item.quantity = itemQuantity - 1;
       }
     });
     // up date the local storage with the updated cart
     localStorage.setItem('userCart', JSON.stringify(cartItems));
   };

   const removeItemFromCart = () => {
     const newCartItems = cartItems.filter((item: any) => item.productId !== productId);
     setCartItems(newCartItems);
     // up date the local storage with the updated cart
      localStorage.setItem('userCart', JSON.stringify(newCartItems));
   }

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
          <h4 className='mt-3 underline'>See Details</h4>
          <div className='mt-3 flex items-center justify-between text-xl uppercase text-dark-red' onClick={removeItemFromCart}>
            <p className='cursor-pointer'>Remove</p>
            <MdOutlineDelete className='w-6 h-6 font-bold mr-2 cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <div className='flex items-center'>
          <div
            className='flex items-center justify-center cursor-pointer'
            onClick={handleIncrement}>
            <HiPlus className='w-6 h-6 mr-3' />
          </div>
          <p className='bg-primary-4 px-4 py-2 font-bold text'>
            {itemQuantity}
          </p>
          <div
            className=' w-7 h-7 flex items-center justify-center cursor-pointer'
            onClick={handleDecrement}>
            <HiMinus className='w-6 h-6 ml-3' />
          </div>
        </div>
        <h3 className='self-end font-bold text-2xl mb-[-10px] md:mb-[-4px]'>
          ${totalPrice}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
