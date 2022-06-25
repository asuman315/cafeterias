import imageOne from '../../images/image-two.jpg';
import imageTwo from '../../images/image-six.jpg';
import imageThree from '../../images/image-seven.jpg';
//import imageFour from '../../images/image-four.jpg'

console.log(imageOne);

const Carousel = () => {
  const imageStyles = {

  };

  const images = [ imageOne, imageTwo, imageThree ];

  return (
    <section className='border-2 overflow-hidden'>
      <article className='whitespace-nowrap'>
        {images.map((image, index) => {
          return (
            <div key={index} className='inline-block w-full'>
              <img src={image.src} style={imageStyles} />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Carousel;
