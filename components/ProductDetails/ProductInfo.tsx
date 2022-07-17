//ProductInfo component
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';

const ProductInfo = ({ mealData }: any) => {
  const price = mealData.attributes.price;
  const components = mealData.attributes.components;
  const name = mealData.attributes.name;

  return (
    <div className='mt-8'>
      <Roll bottom>
        <h1 className='text-4xl md:text-5xl text-primary-1 tracking-wider'>
          {name}
        </h1>
      </Roll>
      <Slide left>
      <p className='font-medium py-4 leading-8 tracking-wide text-lg'>
        {components}
      </p>
      </Slide>
      <p className='font-bold text-primary-1 leading-8 tracking-wider text-3xl py-3'>
        ${price}
      </p>
    </div>
  );
};

export default ProductInfo;
