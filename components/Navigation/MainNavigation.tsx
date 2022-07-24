import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { cartActions } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const MainNavigation = () => {
  const dispatch = useDispatch();

  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);

  return (
    <nav>
      <DesktopNavigation totalQuantity={totalQuantity} />
      <MobileNavigation totalQuantity={totalQuantity} />
    </nav>
  );
};

export default MainNavigation;
