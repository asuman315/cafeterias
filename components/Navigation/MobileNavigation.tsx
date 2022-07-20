// this component is used to render the mobile navigation
import { BiUserPlus } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const MobileNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    //set 'cartItems' to an empty array if there is no cartItems in localStorage i.e if the user has not added any items to the cart when they first visit the site
    const cartItems = localStorage.getItem('userCart')
      ? JSON.parse(localStorage.getItem('userCart')!)
      : [];
    const getNumberOfCartItems: number = cartItems.length;
    setNumberOfCartItems(getNumberOfCartItems);
  }, [pathname]);

  const handleNav = () => {
    setIsNavOpen((prevNavValue) => !prevNavValue);
  };

  return (
    <header className='bg-primary-3  text-primary-2 flex md:hidden items-center justify-center w-full h-20 px-5 md:px-10 lg:px-16 xl:px-20 mx-auto duration-150 ease-in shadow-xl'>
      <nav className='w-full max-w-[1400px] flex items-center justify-between h-full'>
        <Link href='/'>
          <h1 className='text-2xl cursor-pointer font-["Arima_Madurai"]'>
            Cafeteriase
          </h1>
        </Link>
        <div
          className={
            isNavOpen
              ? 'fixed bg-primary-10/60 z-10 top-0 right-0 w-full h-full flex flex-col items-end duration-300 ease-in'
              : 'fixed bg-primary-10/60 z-10 top-0 -right-[110%] w-full h-full flex flex-col items-end duration-300 ease-in'
          }>
          <div className='bg-primary-3 w-[60%] h-full flex flex-col items-end justify-between py-10'>
            <div
              onClick={handleNav}
              className='w-10 h-10 bg-primary-3 text-xl text-primary-1 rounded-full flex items-center justify-center group cursor-pointer mr-10'>
              <MdOutlineClose className='group-hover:rotate-90 duration-300 ease-in group-hover:text-primary-1 w-8 h-8' />
            </div>
            <ul className='w-full text-xl font-bold flex flex-col justify-center'>
              <Link href='/'>
                <li
                  onClick={handleNav}
                  className='bg-transparent h-full flex items-center justify-end  pr-10 py-8'>
                  Home
                </li>
              </Link>
              <Link href='/menu'>
                <li
                  onClick={handleNav}
                  className={
                    pathname === '/menu'
                      ? 'bg bg-primary-3 text-primary-1 h-full flex items-center justify-end  pr-10 py-8'
                      : 'bg-transparent h-full flex items-center justify-end  hover:text-primary-2 pr-10 py-8'
                  }>
                  Menu
                </li>
              </Link>
              <Link href='/featuredproducts'>
                <li
                  onClick={handleNav}
                  className={
                    pathname === '/featuredproducts'
                      ? 'bg bg-primary-3 text-primary-1 h-full flex items-center justify-end  pr-10 py-8'
                      : 'bg-transparent h-full flex items-center justify-end  pr-10 py-8'
                  }>
                  Featured Products
                </li>
              </Link>
              <Link href='/deals'>
                <li
                  onClick={handleNav}
                  className={
                    pathname === '/deals'
                      ? 'bg bg-primary-3 text-primary-1 h-full flex items-center justify-end  pr-10 py-8'
                      : 'bg-transparent h-full flex items-center justify-end  pr-10 py-8'
                  }>
                  Deals
                </li>
              </Link>
            </ul>
            <div className='w-full px-10 flex flex-col items-center gap-4'>
              <button className='w-full border-[1px] border-primary-2 py-2 text-lg hover:bg-primary-2 hover:border-primary hover:border'>
                Sign In
              </button>
              <button className='w-full border-primary-3 text-primary-3 bg-primary-2 py-2 text-lg hover:text-primary-4 hover:bg-primary-3 hover:border-[1px] hover:border-primary-2'>
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-5 text-3xl'>
          <Link href='/user/cart'>
            <div className=' hover:text-primary-1 relative'>
              <AiOutlineShoppingCart />
              {numberOfCartItems <= 0 ? null : (
                <div className='text-sm font-bold w-5 h-5 text-primary-3 bg-primary-2 rounded-full absolute -top-1 -right-3 flex items-center justify-center'>
                  {numberOfCartItems}
                </div>
              )}
            </div>
          </Link>
          <div className='hover:text-primary-1'>
            <BiUserPlus />
          </div>
          <div
            onClick={handleNav}
            className='hover:text-primary-1 cursor-pointer'>
            <MdOutlineMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MobileNavigation;
