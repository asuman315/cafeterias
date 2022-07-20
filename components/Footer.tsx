import Link from 'next/link';
import Reveal from 'react-reveal/Reveal';
import {  useRouter } from 'next/router';

const Footer = () => {
 const router = useRouter();

  const branches = [
    { name: 'Kira Road' },
    { name: 'Kampala Boulevard' },
    { name: 'Bombo Road' },
    { name: 'Oasis Mall' },
    { name: 'Namirembe' },
    { name: 'Lugogo' },
    { name: 'Parliamentary Avenue' },
  ];

  const menu = [
    { name: 'Breakfast' },
    { name: 'Big Meals' },
    { name: 'Drinks' },
  ];

  const footerInfo = [
    { name: 'About Us' },
    { name: 'Contact Us' },
    { name: 'Terms & Conditions' },
    { name: 'partners' },
    { name: 'Careers' },
    { name: 'Feedback' },
    { name: 'Blog' },
  ];
  return (
    <footer className='bg-primary-3 text-primary-2 flex flex-col items-center justify-center gap-10 w-full px-5 py-10 md:px-10 lg:px-16 xl:px-20 duration-150 ease-in bottom-0'>
      <div className='w-full max-w-6xl flex flex-col md:flex-row flex-wrap items-start justify-between gap-10'>
        <div className='space-y-3'>
          <h2 className='uppercase'>Locations</h2>
          <h3 className='uppercase md:text-2xl'>Kampala</h3>
          <ul className='flex flex-col items-start gap-2 font-medium'>
            {branches.map((branch, index) => {
              const { name } = branch;
              return (
                <Reveal key={index} onClick={() => router.push('/')}>
                  <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
                    {name}
                  </li>
                </Reveal>
              );
            })}
          </ul>
          <div className='space-y-2'>
            <h3 className='uppercase md:text-2xl'>Entebbe</h3>
            <ul className='flex flex-col items-start gap-1'>    
                <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
                  Victoria Mall
                </li>
            </ul>
          </div>
        </div>
        <Reveal>
          <div className='space-y-3'>
            <h2 className='uppercase'>Contact Us</h2>
            <div className='flex flex-col items-start gap-2 font-medium'>
              <div
                className='hover:text-primary-1 cursor-pointer duration-300 ease-in'
                onClick={() => router.push('/')}>
                info@cafeterias.com
              </div>
              <span>+256 313 88 00 00</span>
              <span>+256 200 99 00 00</span>
            </div>
          </div>
        </Reveal>
        <div className='space-y-3'>
          <h2 className='uppercase'>Our Menu</h2>
          <ul className='flex flex-col items-start gap-2 font-medium'>
            {menu.map((item, index) => {
              const { name } = item;
              return (
                <Reveal key={index} onClick={() => router.push('/')}>
                  <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
                    {name}
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
      <Reveal>
        <p className='font-bold text-center w-full lg:w-3/4 xl:w-2/4 leading-8 tracking-wide'>
          We&apos;re commited to great food, great coffee, great service, an
          experience that will make your time with us fabulous. All visuals are
          serving suggestions only. Prices are quoted in US dollars and
          inclusive of VAT.{' '}
        </p>
      </Reveal>
      <ul className='w-full flex items-center justify-center gap-2 flex-wrap text-md font-bold'>    
          <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
            Privacy Policy
          </li>
        {footerInfo.map((item, index) => {
          const { name } = item;
          return (
            <Reveal key={index} onClick={() => router.push('/')}>
              <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
                | {name}
              </li>
            </Reveal>
          );
        })}
      </ul>
      <p className='text-center'>
        &copy; 2022 Cafeterias. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
