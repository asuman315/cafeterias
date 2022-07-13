//ProductInfo component
const ProductInfo = ({ mealData }: any) => {
  const price = mealData.attributes.price;
  const components = mealData.attributes.components;
  const name = mealData.attributes.name;

  return (
    <>
      <h1 className='text-2xl text-primary-1 tracking-wider'>{name}</h1>
      <p className='font-medium leading-8 tracking-wide'>{components}</p>
      <p className='font-bold text-primary-1 leading-8 tracking-wider text-3xl py-3'>
        ${price}
      </p>
    </>
  );
};

export default ProductInfo;