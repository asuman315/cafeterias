import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { cartActions } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const MainNavigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // set the redux store with the total number of items in the cart from local storage whenever a page is loaded
    const myCartItems = localStorage.getItem('userCart')
      ? JSON.parse(localStorage.getItem('userCart')!) : [];

    let totalQuantity = 0;
    myCartItems.map((cartItem: any) => {
      totalQuantity += cartItem.quantity;
    }
    );
    dispatch(cartActions.setTotalQuantity(totalQuantity));
  }
  , []);

  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);

  return (
    <nav className='fixed z-40 w-full'>
      <DesktopNavigation totalQuantity={totalQuantity} />
      <MobileNavigation totalQuantity={totalQuantity} />
    </nav>
  );
};

export default MainNavigation;
