import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary-1 flex flex-col items-center justify-center gap-10 w-full px-5 py-10 md:px-10 lg:px-16 xl:px-20 duration-150 ease-in">
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row flex-wrap items-start justify-between gap-10">
        <div className="space-y-3">
          <h2 className="uppercase">Locations</h2>
          <h3>Kampala</h3>
          <ul className="flex flex-col items-start gap-2">
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Kira Road
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Kampala Boulevard
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Bombo Road
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Oasis Mall
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">Nakawa</li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Namirembe
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">Lugogo</li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Parliamentary Avenue
              </li>
            </Link>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="uppercase">Contact Us</h2>
          <div className="flex flex-col items-start gap-2">
            <a className="hover:text-secondary-5 cursor-pointer" href="/">
              info@cafeterias.com
            </a>
            <span>+256 313 72 00 00</span>
            <span>+256 200 78 00 00</span>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="uppercase">Our Menu</h2>
          <ul className="flex flex-col items-start gap-2">
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Breakfast
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">Drinks</li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">Mains</li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Desserts
              </li>
            </Link>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="uppercase">Entebbe</h2>
          <ul className="flex flex-col items-start gap-2">
            <Link href="/">
              <li className="hover:text-secondary-5 cursor-pointer">
                Victoria Mall
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <p className="font-bold text-center w-full lg:w-3/4 xl:w-2/4">
        We're commited to great food, great coffee, great service, an experience
        that will make your time with us fabulous. All visuals are serving
        suggestions only. Prices are quoted in Uganda Shillings and inclusive of
        VAT.{" "}
      </p>
      <ul className="w-full flex items-center justify-center gap-2 flex-wrap text-md font-bold">
        <Link href="/">
          <li className="hover:text-secondary-5 cursor-pointer">
            Privacy Policy
          </li>
        </Link>
        <Link href="/">
          <li className="hover:text-secondary-5 cursor-pointer">
            | Terms of Use
          </li>
        </Link>
        <Link href="/">
          <li className="hover:text-secondary-5 cursor-pointer">
            | Contact Us
          </li>
        </Link>
        <Link href="/">
          <li className="hover:text-secondary-5 cursor-pointer">| Partners</li>
        </Link>
        <Link href="/">
          <li className="hover:text-secondary-5 cursor-pointer">| Careers</li>
        </Link>
        <Link href="/">
          <li className="hover:text-secondary-5 cursor-pointer">| Blog</li>
        </Link>
        <Link href="/">
          <li className="hover:text-secondary-5 cursor-pointer">| Feedback</li>
        </Link>
      </ul>
      <p className="text-center">
        &copy; 2022 Cafeterias. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
