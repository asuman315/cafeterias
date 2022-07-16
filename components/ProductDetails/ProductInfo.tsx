//ProductInfo component
const ProductInfo = ({ mealData }: any) => {
  const price = mealData.attributes.price;
  const components = mealData.attributes.components;
  const name = mealData.attributes.name;

  return (
    <div className="mt-8">
      <h1 className='text-4xl md:text-5xl text-primary-1 tracking-wider'>{name}</h1>
      <p className='font-medium py-4 leading-8 tracking-wide text-lg'>{components}</p>
      <p className='font-bold text-primary-1 leading-8 tracking-wider text-3xl py-3'>
        ${price}
      </p>
    </div>
  );
};

export default ProductInfo;