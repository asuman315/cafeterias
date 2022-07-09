import Image from "next/image";

const ProductDetails = ({ mealData }: any) => {
 console.log('mealData', mealData);
 
 const name = mealData.attributes.name;
 const productImage = mealData.attributes.image.data.attributes.url;
 const price = mealData.attributes.price;
 const components = mealData.attributes.components;
 const choiceOfComponents = mealData.attributes.choiceOfComponents;

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto md:grid grid-cols-2">
      <img src={productImage} alt={name} className='object-cover h-[50vh] rounded-md'/>
      <div className="pt-10 md:pt-0 md:px-5">
        <h1 className='text-2xl'>{name}</h1>
        <p className="font-medium leading-8 tracking-wide">{components}</p>
        <p className="font-bold leading-8 tracking-wider text-3xl py-3">${price}</p>
        <div>
         {choiceOfComponents.map((item: any, index: any) => {
          const { component, options } = item;
            return (
              <div className="mt-4">
                <h3 className='uppercase md:text-xl mb-1'>choice of {component}</h3>
                <div className='border-2 p-2 rounded-md lg:cursor-pointer'>
                 <div>
                  <p className='font-medium tracking-wide'>Select the option</p>
                 </div>
                </div>
              </div>
            );
         })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails