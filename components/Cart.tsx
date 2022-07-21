import { useEffect, useState } from "react";
import { HiPlus, HiMinus } from 'react-icons/hi';

const Cart = () => {
   
   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
    const myCartItems = localStorage.getItem('userCart') ?  JSON.parse(localStorage.getItem('userCart')!) : [];
    setCartItems(myCartItems);
    //eslint-disable-next-line
   }, []);

   console.log('typeof cartItems', typeof cartItems);

  return (
    <div className="px-4 py-2">
      { cartItems.length > 0 ? (<WithCartItems cartItems={cartItems} />) : (<WithoutCartItems />) }
    </div>
  )
}

const WithCartItems = ({cartItems}: any) => {
    console.log(cartItems);

    const handleIncreament = (id: number) => {

    }

    const handleDecreament = (id: number) => {

    }

  return (
   <div>
      { cartItems.map((item: any, index: any) => {
        return (
          <div key={index} className='flex py-4 border-b-[1px]'>
            <CartItem item={item} /> 
          </div>
        );
      }) }
   </div>
  )
}


const WithoutCartItems = () => {
  return (
   <div>

   </div>
  )
}


const CartItem = ({ item }: any) => {
    const [quantity, setQuantity] = useState(1);
    const { name, price, productImage } = item;
  return (
    <div>
      {/*eslint-disable-next-line*/}
      <img
        src={productImage}
        alt={`Image of ${productImage}`}
        className='w-36 sm:w-44 sm:h-auto h-32 rounded'
      />
      <div className='pl-4 w-full'>
        <h3>{name}</h3>
        <h4 className='py-2'>Details</h4>
        <div className='flex justify-between py-4'>
          <div className='flex items-center'>
            <div
              className='bg-primary-4 w-7 h-7 flex items-center justify-center cursor-pointer'
              onClick={() => setQuantity(quantity + 1)}>
              <HiPlus />
            </div>
            <p className='px-2 font-bold text mx-1'>{quantity}</p>
            <div
              className='bg-primary-4 w-7 h-7 flex items-center justify-center cursor-pointer'
              onClick={() => setQuantity(quantity - 1)}>
              <HiMinus />
            </div>
          </div>
          <h3 className=''>${price}</h3>
        </div>
      </div>
    </div>
  );
}


export default Cart