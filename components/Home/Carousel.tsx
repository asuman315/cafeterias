import imageOne from '../../images/image-two.jpg';
import imageTwo from '../../images/image-six.jpg';
import imageThree from '../../images/image-seven.jpg';
import { useState, useEffect } from 'react';

//import imageFour from '../../images/image-four.jpg'

console.log(imageOne);

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [ imageOne, imageTwo, imageThree ];

  return (
    <section className='border-2 overflow-hidden'>
      <article className={`whitespace-nowrap translate-x-[${-currentSlide * 100}%]`}>
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
