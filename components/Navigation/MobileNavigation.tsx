// this component is used to render the mobile navigation
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const MobileNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  const handleNav = () => {
    setIsNavOpen((prevNavValue) => !prevNavValue);
  };
  return (
    <header className="bg-secondary-1 flex md:hidden items-center justify-center w-full h-20 px-5 md:px-10 lg:px-16 xl:px-20 mx-auto duration-150 ease-in shadow-xl">
      <nav className="w-full max-w-[1400px] flex items-center justify-between h-full">
        <Link href="/">
          <h1 className='text-2xl cursor-pointer font-["Arima_Madurai"]'>Cafeterias</h1>
        </Link>
        <div
          className={
            isNavOpen
              ? "fixed bg-primary-10/60 z-10 top-0 right-0 w-full h-full flex flex-col items-end duration-300 ease-in"
              : "fixed bg-primary-10/60 z-10 top-0 -right-[110%] w-full h-full flex flex-col items-end duration-300 ease-in"
          }
        >
          <div className="bg-secondary-1 w-[60%] h-full flex flex-col items-end justify-between py-10">
            <div
              onClick={handleNav}
              className="w-10 h-10 bg-primary-8 text-xl text-primary-1 rounded-full flex items-center justify-center group cursor-pointer mr-10"
            >
              <MdOutlineClose className="group-hover:rotate-90 duration-300 ease-in group-hover:text-secondary-7" />
            </div>
            <ul className="w-full text-xl font-bold flex flex-col justify-center">
              <Link href="/">
                <li
                  onClick={handleNav}
                  className="bg-transparent h-full flex items-center justify-end cursor-pointer hover:text-secondary-5 pr-10 py-8"
                >
                  Home
                </li>
              </Link>
              <Link href="/menu">
                {/* Here I applied conditional rendering only menu li */}
                {/* Cuz I don't know the other pages paths so when they're defined, we can implement the rest */}
                <li
                  onClick={handleNav}
                  className={
                    pathname === "/menu"
                      ? "bg bg-secondary-5 text-primary-1 h-full flex items-center justify-end cursor-pointer pr-10 py-8"
                      : "bg-transparent h-full flex items-center justify-end cursor-pointer hover:text-secondary-5 pr-10 py-8"
                  }
                >
                  Menu
                </li>
              </Link>
              <Link href="/featuredproducts">
                <li
                  onClick={handleNav}
                  className={
                    pathname === "/featuredproducts"
                      ? "bg bg-secondary-5 text-primary-1 h-full flex items-center justify-end cursor-pointer pr-10 py-8"
                      : "bg-transparent h-full flex items-center justify-end cursor-pointer hover:text-secondary-5 pr-10 py-8"
                  }
                >
                  Featured Products
                </li>
              </Link>
              <Link href="/deals">
                <li
                  onClick={handleNav}
                  className={
                    pathname === "/deals"
                      ? "bg bg-secondary-5 text-primary-1 h-full flex items-center justify-end cursor-pointer pr-10 py-8"
                      : "bg-transparent h-full flex items-center justify-end cursor-pointer hover:text-secondary-5 pr-10 py-8"
                  }
                >
                  Deals
                </li>
              </Link>
            </ul>
            <div className="w-full px-10 flex flex-col items-center gap-4">
              <button className="w-full bg-secondary-5 text-lg hover:bg-primary-10">
                Sign In
              </button>
              <button className="w-full border-2 border-secondary-5 text-secondary-5 text-lg hover:border-primary-10 hover:text-primary-10">
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-3xl">
          <Link href="/">
            <div className="cursor-pointer hover:text-secondary-5 relative">
              <AiOutlineShoppingCart />
              <div className="text-sm font-bold w-6 h-5 text-primary-1 bg-secondary-5 rounded-full absolute -top-1 -right-3 flex items-center justify-center">
                0
              </div>
            </div>
          </Link>
          {/* Conditionally render the user icon logged in / logged out state */}
          <div className="hover:text-secondary-5 cursor-pointer">
            <BiUserPlus />
          </div>
          <div
            onClick={handleNav}
            className="hover:text-secondary-5 cursor-pointer"
          >
            <MdOutlineMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MobileNavigation;
