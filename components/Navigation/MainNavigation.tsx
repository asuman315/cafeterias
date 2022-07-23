import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"
import { cartActions } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const MainNavigation = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const cartItems = localStorage.getItem('userCart')
      ? JSON.parse(localStorage.getItem('userCart') || '')
      : [];
    dispatch(cartActions.updateCart(cartItems));
  }, []);

  const cartItems = useSelector((state: any) => state.cart.cartItems);

  let totalQuantity = 0;

  cartItems.map((cartItem: any) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <nav>
     <DesktopNavigation totalQuantity={totalQuantity} />
     <MobileNavigation totalQuantity={totalQuantity} />
    </nav>
  )
}

export default MainNavigation