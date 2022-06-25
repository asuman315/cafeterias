import imageOne from '../../images/image-two.jpg';
import imageTwo from '../../images/image-six.jpg';
import imageThree from '../../images/image-seven.jpg';
//import imageFour from '../../images/image-four.jpg'

console.log(imageOne);

const Carousel = () => {
  const imageStyles = ``;

  return (
    <section className='overflow-hidde border-2'>
      <article className='flex'>
        <img
          className={`${imageStyles}`}
          src={imageOne.src}
          alt='image one'
        />
        <img className={`${imageStyles}`} src={imageTwo.src} alt='image two' />
        <img
          className={`${imageStyles}`}
          src={imageThree.src}
          alt='image three'
        />
      </article>
    </section>
  );
};

export default Carousel;
