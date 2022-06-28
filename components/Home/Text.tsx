import { SiCodechef } from 'react-icons/si';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { ImBubbles } from 'react-icons/im';
import { IoIosRestaurant } from 'react-icons/io';
import Link from 'next/link';

const Text = () => {
  const navigationTextAndIcons = [
    { text: 'Menu', icon: <SiCodechef /> },
    { text: 'Locations', icon: <MdOutlineAddLocationAlt /> },
    { text: 'Careers', icon: <ImBubbles /> },
    { text: 'Feedback', icon: <IoIosRestaurant /> },
    { text: 'About Us', icon: <SiCodechef /> },
  ];
  return (
    <section className='w-full h-full absolute top-0 left-0 z-20'>
      <div className='w-full h-full flex flex-col md:flex-row-reverse items-center justify-around '>
        <ul className='text-primary-1 text-xl lg:text-2xl xl:text-3xl w-[250px] xl:w-[300px] uppercase font-bold tracking-wider'>
          <h1 className='py-5 xl:py-14 border-b text-4xl lg:text-3xl lg:5xl xl:text-6xl capitalize font-["Arima_Madurai"]'>
            Cafeteriase
          </h1>
          {navigationTextAndIcons.map((listItem, index) => {
            const { text, icon } = listItem;
            return (
              <Link href='/' key={index}>
                <li className='flex items-center gap-4 py-4 xl:py-10 cursor-pointer border-b'>
                  {icon}
                  {text}
                </li>
              </Link>
            );
          })}
        </ul>
        <Link href='/'>
          <a className='font-bold text-4xl xl:text-6xl text-primary-1 bg-secondary-8 px-10 py-3 rounded-md duration-150 ease-in tracking-wider'>
            Start Order
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Text;
