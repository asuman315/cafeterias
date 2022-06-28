import imageOne from "../../public/images/image-one.jpg";
import imageTwo from "../../public/images/image-two.jpg";
import imageThree from "../../public/images/image-six.jpg";

import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

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

  const xTranslate = `-${currentSlide * 100}%`;
 // console.log(xTranslate);
  

  return (
    <section className='overflow-hidden relative'>
      {/* <article
        className={`
         whitespace-nowrap translate-x-[${
          -currentSlide * 100
        }%]`}>
        {images.map((image, index) => {
          return (
            <div key={index} className='inline-block bg-primary-6 w-full'>
              <img src={image.src} className='w-screen h-screen object-cover mix-blend-overlay' />
            </div>
          );
        })}
      </article> */}
      <article className='whitespace-nowrap duration-1000 ease-out' style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {images.map((image, index) => {
          return (
            <div key={index} className='inline-block bg-primary-8'>
              <img src={image.src} className='w-screen h-screen object-cover mix-blend-overlay' />
            </div>
          );
        }
        )}
      </article>
    </section>
  );
};

export default Carousel;
