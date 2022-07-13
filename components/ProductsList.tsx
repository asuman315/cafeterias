import { useRouter } from 'next/router';
import Image from 'next/image';

const ProductsList = ({ productsData }: any) => {
  const subcategoryName = productsData.attributes.name;
  const mealsData = productsData.attributes.meals.data;
  const subcategoryImage = productsData.attributes.image.data[0].attributes.url;
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative flex w-full h-[35vh] md:h-[40vh] xl:h-[40vh] duration-150 ease-in'>
        <div className='bg-white flex items-center px-4'>
          <h1 className='text-base sm:text-lg md:text-2xl'>{subcategoryName}</h1>
        </div>
        <div className='w-full'>
          <img
            src={subcategoryImage}
            alt={subcategoryName}
            className='object-cover h-full w-full'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-8 max-w-6xl mx-auto gap-5'>
        {mealsData.map((meal: any, index: any) => {
          const mealName = meal.attributes.name;
          const mealImage = meal.attributes.image.data.attributes.url;
          const mealPrice = meal.attributes.price;
          const productId = meal.id;

          return (
            <div
              key={index}
              className='bg-white shadow-xl rounded-md overflow-hidden flex flex-col justify-between'>
              <div className='relative w-full h-[40vh]'>
                <Image
                  src={mealImage}
                  alt={mealName}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='flex flex-col h-full justify-between p-5'>
                <div className=''>
                  <h3 className='text-xl uppercase'>{mealName}</h3>
                  <p className='font-semibold text-primary-1 text-2xl pt-3'>${mealPrice}</p>
                </div>
                <div className='mt-[-70px]'>
                  <button
                    className='uppercase w-full py-2 rounded-md'
                    onClick={() => router.push(`/product/${productId}`)}>
                    order now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
