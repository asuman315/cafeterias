import { SiCodechef } from "react-icons/si";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { ImBubbles } from "react-icons/im";
import { IoIosRestaurant } from "react-icons/io";
import Link from "next/link";

const Text = () => {
  const navigationTextAndIcons = [
    { text: "Menu", icon: <SiCodechef />, path: "/menu" },
    {
      text: "Locations",
      icon: <MdOutlineAddLocationAlt />,
      path: "/locations",
    },
    { text: "Careers", icon: <ImBubbles />, path: "/careers" },
    { text: "Feedback", icon: <IoIosRestaurant />, path: "/feedback" },
    { text: "About Us", icon: <SiCodechef />, path: "/about" },
  ];
  return (
    <section className="w-full h-full absolute top-0 left-0 z-20">
      <div className="w-full h-full flex flex-col md:flex-row-reverse items-center justify-around ">
        <ul className="text-primary-1 text-xl lg:text-2xl xl:text-3xl w-[250px] xl:w-[300px] uppercase font-bold tracking-wider duration-300 ease-in">
          <h1 className='py-5 lg:py-10 xl:py-14 border-b text-4xl md:text-3xl lg:text-5xl xl:text-6xl capitalize font-["Arima_Madurai"]'>
            Cafeteriase
          </h1>
          {navigationTextAndIcons.map((listItem, index) => {
            const { text, icon, path } = listItem;
            return (
              <Link href={path} key={index}>
                <li className="flex items-center gap-4 py-4 xl:py-10 cursor-pointer border-b">
                  {icon}
                  {text}
                </li>
              </Link>
            );
          })}
        </ul>
        <Link href="/menu">
          <button className="font-bold text-4xl xl:text-6xl hover:text-primary-3 hover:bg-primary-4 px-10 py-3 rounded-md duration-150 ease-in tracking-wider bg-primary-3 text-primary-4">
            Start Order
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Text;
