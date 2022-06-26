import imageOne from '../../images/image-one.jpg';
import imageTwo from '../../images/image-six.jpg';
import imageThree from '../../images/image-seven.jpg';
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [ imageOne, imageTwo, imageThree ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < images.length - 1 ? currentSlide + 1 : 0);
      //console.log('currentSlide', currentSlide);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className='overflow-hidden'>
      <article className={`duration-1000 ease-in-out whitespace-nowrap translate-x-[${-currentSlide * 100}%]`}>
        {images.map((image, index) => {
          return (
            <div key={index} className='inline-block w-full'>
              <img src={image.src} className='w-screen h-screen' />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Carousel;
