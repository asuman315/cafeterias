import imageOne from "../../public/images/image-one.jpg";
import imageTwo from "../../public/images/image-two.jpg";
//import imageFour from "../../public/images/image-four-no-bg.png";
import imageSix from "../../public/images/image-six.jpg";
import imageSeven from "../../public/images/image-seven.jpg";

import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const images = [imageOne, imageTwo, imageSix, imageSeven];

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
    <section className='overflow-hidden relative'>
      <article className='whitespace-nowrap duration-1000 ease-out' style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {images.map((image, index) => {
          return (
            <div key={index} className='inline-block'>
              <img src={image.src} className='w-screen h-screen object-cover mix-blend-overla' />
            </div>
          );
        }
        )}
      </article>
    </section>
  );
};

export default Carousel;
