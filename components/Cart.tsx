import { useEffect, useState } from "react";

const Cart = () => {
   
   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
    const myCartItems = localStorage.getItem('userCart') ?  JSON.parse(localStorage.getItem('userCart')!) : [];
    setCartItems(myCartItems);
   }, []);

   console.log('typeof cartItems', typeof cartItems);

  return (
    <div>
      { cartItems.length > 0 ? (<WithCartItems cartItems={cartItems} />) : (<WithoutCartItems />) }
    </div>
  )
}


const WithCartItems = ({ cartItems }: any) => {
    console.log(cartItems);
  return (
   <div>
      { cartItems.map((item: any, index: any) => {
       const { name, price, productImage } = item;
        return (
         <div>
          <img src={productImage} alt={`Image of ${productImage}`} className=''/>
         </div>
        )
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


const cartItem = () => {
  return (
    <div>

    </div>
  )
}


export default Cart