// this component is used to render the desktop navigation
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNavigation = ({ totalQuantity }: any) => {
 const router = useRouter();
 const { pathname } = router;
  
  return (
    <header className='bg-primary-3 text-primary-2 tracking-wider hidden md:flex items-center justify-center w-full h-20 px-5 md:px-10 lg:px-16 xl:px-20 mx-auto duration-150 ease-in shadow-xl'>
      <nav className='w-full max-w-[1400px] flex items-center justify-between h-full'>
        <Link href='/'>
          <h1 className="text-4xl font-extrabold cursor-pointer font-['Arima_Madurai']">
            Cafeteriase
          </h1>
        </Link>
        <ul className='flex items-center text-xl font-bold h-full'>
          <Link href='/'>
            <li className='bg-transparent h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer hover:text-primary-1 duration-300 ease-in'>
              Home
            </li>
          </Link>
          <Link href='/menu'>      
            <li
              className={
                pathname === '/menu'
                  ? ' text-primary-1 h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer'
                  : 'bg-transparent h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer hover:text-primary-1 duration-300 ease-in'
              }>
              Menu
            </li>
          </Link>
          <Link href='/auth/login'>
            <li
              className={
                pathname === '/auth/login'
                  ? 'bg-primary-3 text-primary-1 h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer'
                  : 'bg-transparent h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer hover:text-primary-1 duration-300 ease-in'
              }>
              Login
            </li>
          </Link>
          <Link href='/auth/signup'>
            <li
              className={
                pathname === '/auth/signup'
                  ? 'bg-primary-3 text-primary-1 h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer'
                  : 'bg-transparent h-full flex items-center justify-center xl:px-10 md:px-6 cursor-pointer hover:text-primary-1 duration-300 ease-in'
              }>
              Sign up
            </li>
          </Link>
        </ul>
        <div className='flex items-center gap-10 text-3xl'>        
            <div className='cursor-pointer hover:text-primary-1 relative duration-300 ease-in' onClick={() => router.push('/user/cart')}>
              <AiOutlineShoppingCart />
             { totalQuantity <= 0 ? null : <div className='text-sm font-bold w-5 h-5 text-primary-3 bg-primary-2 rounded-full absolute -top-1 -right-3 flex items-center justify-center'>
                { totalQuantity }
              </div> }
            </div>
          <div className='hover:text-primary-1 cursor-pointer '>
            <BiUserPlus />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
