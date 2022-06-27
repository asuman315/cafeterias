import { SiCodechef } from "react-icons/si";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { ImBubbles } from "react-icons/im";
import { IoIosRestaurant } from "react-icons/io";
import Link from "next/link";

const Text = () => {
  return (
    <section className="w-screen h-screen absolute top-0 left-0 z-20">
      <div className="w-full h-full flex flex-col md:flex-row-reverse items-center justify-around">
        <ul className="text-primary-1 text-xl lg:text-2xl xl:text-3xl w-[250px] xl:w-[300px] uppercase font-bold tracking-wider">
          <li className="py-10 xl:py-14 border-b text-2xl lg:text-3xl xl:text-4xl capitalize">
            Cafeterias
          </li>
          <Link href="/">
            <li className="flex items-center gap-4 py-6 xl:py-10 cursor-pointer border-b">
              <SiCodechef className="opacity-70" />
              Menu
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-4 py-6 xl:py-10 cursor-pointer border-b">
              <MdOutlineAddLocationAlt className="opacity-70" />
              Locations
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-4 py-6 xl:py-10 cursor-pointer border-b">
              <ImBubbles className="opacity-70" />
              Careers
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-4 py-6 xl:py-10 cursor-pointer border-b">
              <IoIosRestaurant className="opacity-70" />
              Feedback
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center gap-4 py-6 xl:py-10 cursor-pointer">
              <SiCodechef className="opacity-70" />
              About Us
            </li>
          </Link>
        </ul>
        <Link href="/">
          <a className="font-bold text-4xl xl:text-6xl text-primary-1 bg-secondary-8 px-10 py-3 rounded-md duration-150 ease-in">
            Start Order
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Text;
