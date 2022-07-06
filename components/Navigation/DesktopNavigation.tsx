// this component is used to render the desktop navigation
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNavigation = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    // Check the header width.
    // I am not sure how you decided so I left it like this
    <header className='bg-secondary-1 hidden md:flex items-center justify-center w-full h-20 px-5 md:px-10 lg:px-16 xl:px-20 mx-auto duration-150 ease-in shadow-xl'>
      <nav className='w-full max-w-[1400px] flex items-center justify-between h-full'>
        <Link href='/'>
          <h1 className="text-4xl font-extrabold cursor-pointer font-['Arima_Madurai']">
            Cafeterias
          </h1>
        </Link>
        <ul className='flex items-center text-xl font-bold h-full'>
          <Link href='/'>
            <li className='bg-transparent h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer hover:text-primary-1 duration-300 ease-in'>
              Home
            </li>
          </Link>
          <Link href='/menu'>
            {/* Here I applied conditional rendering only menu li */}
            {/* Cuz I don't know the other pages paths so when they're defined, we can implement the rest */}
            <li
              className={
                pathname === '/menu'
                  ? 'bg bg-primary-3 text-primary-1 h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer'
                  : 'bg-transparent h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer hover:text-primary-1 duration-300 ease-in'
              }>
              Menu
            </li>
          </Link>
          <Link href='/'>
            <li
              className={
                pathname === '/'
                  ? 'bg-primary-3 text-primary-1 h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer'
                  : 'bg-transparent h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer hover:text-primary-1 duration-300 ease-in'
              }>
              Featured Products
            </li>
          </Link>
          <Link href='/deals'>
            <li
              className={
                pathname === '/deals'
                  ? 'bg-primary-3 text-primary-1 h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer'
                  : 'bg-transparent h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer hover:text-primary-1 duration-300 ease-in'
              }>
              Deals
            </li>
          </Link>
        </ul>
        <div className='flex items-center gap-10 text-3xl'>
          {/* On the original site, the cart icon takes user to another page. */}
          {/* So I used Link for this reason. You may want to change it. */}
          <Link href='/'>
            <div className='cursor-pointer hover:text-primary-1 relative duration-300 ease-in'>
              <AiOutlineShoppingCart />
              <div className='text-sm font-bold w-6 h-5 text-primary-1 bg-primary-3 rounded-full absolute -top-1 -right-3 flex items-center justify-center'>
                0
              </div>
            </div>
          </Link>
          {/* Conditionally render the user icon logged in / logged out state */}
          <div className='hover:text-primary-1 cursor-pointer '>
            <BiUserPlus />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
