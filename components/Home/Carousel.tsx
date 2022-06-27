import imageOne from "../../public/images/image-one.jpg";
import imageTwo from "../../public/images/image-six.jpg";
import imageThree from "../../public/images/image-seven.jpg";
// import imageOne from '../../images/image-one.jpg';
// import imageTwo from '../../images/image-six.jpg';
// import imageThree from '../../images/image-seven.jpg';
import { useState, useEffect } from "react";
import Text from "./Text";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [imageOne, imageTwo, imageThree];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < images.length - 1 ? currentSlide + 1 : 0
      );
      //console.log('currentSlide', currentSlide);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="overflow-hidden relative">
      <article
        className={`duration-1000 ease-in-out whitespace-nowrap translate-x-[${
          -currentSlide * 100
        }%]`}
      >
        {images.map((image, index) => {
          return (
            <div key={index} className="inline-block w-full">
              <img src={image.src} className="w-screen h-screen object-cover" />
            </div>
          );
        })}
      </article>
      {/* overlay under text so it looks cleaner */}
      <div className="absolute w-screen h-screen top-0 left-0 bg-gradient-to-l from-primary-9 opacity-80 z-10"></div>
      <Text />
    </section>
  );
};

export default Carousel;
