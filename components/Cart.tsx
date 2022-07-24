import { formatPrice } from './Functions';
import { useEffect, useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { MdOutlineDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const myCartItems = localStorage.getItem('userCart')
      ? JSON.parse(localStorage.getItem('userCart')!)
      : [];
    setCartItems(myCartItems);
    //eslint-disable-next-line
  }, []);

  if (cartItems.length === 0) {
    // set totalQuantity to 0 in redux store when cart remains empty after removing the last item
    dispatch(cartActions.setTotalQuantity(0));
  }

  return (
    <div className='px-5 py-12 mb-8 md:grid grid-cols-3 gap-4 max-w-6xl mx-auto '>
      {cartItems.length > 0 ? (
        <WithCartItems cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <WithoutCartItems />
      )}
      <Totals cartItems={cartItems} />
    </div>
  );
};

const WithCartItems = ({ cartItems, setCartItems }: any) => {
  return (
    <div className='col-span-2 md:mt-[-24px]'>
      {cartItems.map((item: any, index: any) => {
        return (
          <div key={index}>
            <CartItem
              item={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
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
  const dispatch = useDispatch();
  const { name, productImage, productId, quantity, totalPrice }: Item = item;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  useEffect(() => {
    let totalQuantity = 0;
    cartItems.map((cartItem: any) => {
      totalQuantity += cartItem.quantity;
    });
    // update the redux store with the total number of items in the cart whenever a cart item's state changes
    dispatch(cartActions.setTotalQuantity(totalQuantity));
    // update itemQuantity whenever a cart item is removed from the cart
    setItemQuantity(quantity);
    //eslint-disable-next-line
  });

  type Item = {
    name: string;
    quantity: number;
    productImage: string;
    productId: string;
    totalPrice: number;
  };

  const handleIncrement = () => {
    // increment the quantity of the cart item on the UI
    setItemQuantity(itemQuantity + 1);

    cartItems.map((item: any) => {
      if (item.productId === productId) {
        //increment the quantity of the cart item in the cartItems array
        item.quantity = item.quantity + 1;
        item.totalPrice = formatPrice(item.quantity * item.price);
      }
    });
    // update the local storage so as to reflect the changes in the cart
    localStorage.setItem('userCart', JSON.stringify(cartItems));
  };

  const handleDecrement = () => {
    // decrement the quantity of the cart item on the UI
    itemQuantity <= 1 ? setItemQuantity(1) : setItemQuantity(itemQuantity - 1);

    cartItems.map((item: any) => {
      if (item.productId === productId) {
        item.quantity = item.quantity === 1 ? 1 : item.quantity - 1;
        item.totalPrice = formatPrice(item.quantity * item.price);
      }
    });
    // update the local storage so as to reflect the updated cart
    localStorage.setItem('userCart', JSON.stringify(cartItems));
  };

  const removeItemFromCart = () => {
    const newCartItems = cartItems.filter(
      (item: any) => item.productId !== productId
    );
    setCartItems(newCartItems);
    setItemQuantity(quantity);
    // update the local storage so as to reflect the updates done on the cart
    localStorage.setItem('userCart', JSON.stringify(newCartItems));
  };

  return (
    <div className='flex flex-col px-4'>
      <div className='border-b-[1px] py-6'>
        <div className='flex'>
          {/*eslint-disable-next-line*/}
          <img
            src={productImage}
            alt={`Image of ${productImage}`}
            className='w-36 sm:w-44 sm:h-auto h-32 rounded'
          />
          <div className='ml-6 w-full'>
            <h3>{name}</h3>
            <h4 className='mt-3 underline'>See Details</h4>
            <div
              className='mt-3 flex items-center justify-between text-xl w-full uppercase text-dark-red'
              onClick={removeItemFromCart}>
              <p className='cursor-pointer'>Remove</p>
              <MdOutlineDelete className='w-6 h-6 font-bold lg:cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <div className='flex items-center'>
            <div
              className='flex items-center justify-center lg:cursor-pointer'
              onClick={handleDecrement}>
              <HiMinus className='w-6 h-6 mr-3' />
            </div>
            <p className='bg-primary-4 rounded-md px-4 py-2 font-bold text'>
              {itemQuantity}
            </p>
            <div
              className=' w-7 h-7 flex items-center justify-center lg:cursor-pointer'
              onClick={handleIncrement}>
              <HiPlus className='w-6 h-6 ml-3' />
            </div>
          </div>
          <h3 className='self-end font-bold text-2xl mb-[-10px] md:mb-[-4px]'>
            ${totalPrice}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Totals = ({ cartItems }: any) => {
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);

  let subTotal = 0;
  cartItems.map(
    (item: any) => {
      const { totalPrice }: { totalPrice: number } = item;
      subTotal += totalPrice;
    },
    [totalQuantity]
  );

  const tax = formatPrice(subTotal * 0.15);
  const total = formatPrice(subTotal + tax);

  return (
    <section className='mt-8 rounded-md bg-primary-4 md:mt-0 shadow-2xl px-4 py-8 md:h-[360px]'>
      <h3 className='pb-10'>summary</h3>
      <div className='flex justify-between items-end border-b-[1px] pb-6'>
        <h3 className='text-xl uppercase font-bold'>Subtotal</h3>
        <h3 className='text-2xl font-bold text-primary-1'>${subTotal}</h3>
      </div>
      <div className='flex justify-between items-end border-b-[1px] py-6'>
        <h3 className='text-xl uppercase font-bold'>Tax (15%)</h3>
        <h3 className='text-2xl font-bold text-primary-1'>${tax}</h3>
      </div>
      <div className='flex justify-between items-end border-b-[1px] py-6'>
        <h3 className='text-xl uppercase font-bold'>order Total</h3>
        <h3 className='text-2xl font-bold text-primary-1'>${total}</h3>
      </div>
    </section>
  );
};

export default Cart;
