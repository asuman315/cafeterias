import { useEffect, useState } from "react";

const Cart = () => {
   
   const [cartItems, setCartItems] = useState();
   useEffect(() => {
    const myCartItems = localStorage.getItem('userCart') ?  JSON.parse(localStorage.getItem('userCart')!) : [];
    setCartItems(myCartItems);
   }, []);

   console.log(cartItems);

  return (
    <div>
     
    </div>
  )
}

export default Cart