import Link from 'next/link';

const Footer = () => {
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
    <footer className='bg-primary-3 text-primary-2 flex flex-col items-center justify-center gap-10 w-full px-5 py-10 md:px-10 lg:px-16 xl:px-20 duration-150 ease-in'>
      <div className='w-full max-w-[1400px] flex flex-col md:flex-row flex-wrap items-start justify-between gap-10'>
        <div className='space-y-3'>
          <h2 className='uppercase'>Locations</h2>
          <h3 className='uppercase'>Kampala</h3>
          <ul className='flex flex-col items-start gap-2 font-medium'>
            {branches.map((branch) => {
              const { name } = branch;
              return (
                <Link href='/'>
                  <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className='space-y-2'>
            <h3 className='uppercase'>Entebbe</h3>
            <ul className='flex flex-col items-start gap-1'>
              <Link href='/'>
                <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
                  Victoria Mall
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='space-y-3'>
          <h2 className='uppercase'>Contact Us</h2>
          <div className='flex flex-col items-start gap-2 font-medium'>
            <a className='hover:text-primary-1 cursor-pointer duration-300 ease-in' href='/'>
              info@cafeterias.com
            </a>
            <span>+256 313 72 00 00</span>
            <span>+256 200 78 00 00</span>
          </div>
        </div>
        <div className='space-y-3'>
          <h2 className='uppercase'>Our Menu</h2>
          <ul className='flex flex-col items-start gap-2 font-medium'>
            {menu.map((item) => {
              const { name } = item;
              return (
                <Link href='/'>
                  <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <p className='font-bold text-center w-full lg:w-3/4 xl:w-2/4'>
        We're commited to great food, great coffee, great service, an experience
        that will make your time with us fabulous. All visuals are serving
        suggestions only. Prices are quoted in US dollars and inclusive of VAT.{' '}
      </p>
      <ul className='w-full flex items-center justify-center gap-2 flex-wrap text-md font-bold'>
        <Link href='/'>
          <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
            Privacy Policy
          </li>
        </Link>
        {footerInfo.map((item) => {
          const { name } = item;
          return (
            <Link href='/'>
              <li className='hover:text-primary-1 cursor-pointer duration-300 ease-in'>
                | {name}
              </li>
            </Link>
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
