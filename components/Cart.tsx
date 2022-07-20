import { useEffect, useState } from "react";

const Cart = () => {

   const getCartItems = () => {
     const myCartItems = JSON.parse(localStorage.getItem('userCart')!);
     return myCartItems
   };

   const [cartItems, setCartItems] = useState(getCartItems());
   useEffect(() => {

   }, []);

   console.log(cartItems);

  return (
    <div>

    </div>
  )
}

export default Cart