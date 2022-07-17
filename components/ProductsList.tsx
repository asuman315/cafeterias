import { useRouter } from 'next/router';
import Image from 'next/image';
import CurrentPage from './CurrentPage';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const ProductsList = ({ productsData }: any) => {
  const subcategoryName = productsData.attributes.name;
  const mealsData = productsData.attributes.meals.data;
  const subcategoryImage = productsData.attributes.image.data[0].attributes.url;
  const categoryName =
    productsData.attributes.mealcategories.data[0].attributes.Name;
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative flex w-full h-[35vh] md:h-[40vh] xl:h-[40vh] mb-6'>
        <div className='bg-white flex items-center px-4'>
          <h1 className='text-base sm:text-lg md:text-2xl'>
            {subcategoryName}
          </h1>
        </div>
        <div className='w-full'>
          {/* eslint-disable-next-line */}
          <img
            src={subcategoryImage}
            alt={subcategoryName}
            className='object-cover h-full w-full'
          />
        </div>
      </div>
      <div className='px-4'>
        <CurrentPage
          categoryName={categoryName}
          subcategoryName={subcategoryName}
          productName={''}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5 py-10'>
          {mealsData.map((meal: any, index: any) => {
            const mealName = meal.attributes.name;
            const mealImage = meal.attributes.image.data.attributes.url;
            const mealPrice = meal.attributes.price;
            const productId = meal.id;

            return (
              <div
                key={index}
                className='bg-white shadow-xl rounded-md overflow-hidden flex flex-col justify-between'>
                <Zoom>
                  <div className='relative w-full h-[40vh]'>
                    <Image
                      src={mealImage}
                      alt={mealName}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </Zoom>
                <div className='flex flex-col h-full justify-between p-5'>
                  <Slide left>
                    <div className=''>
                      <h3 className='text-xl uppercase'>{mealName}</h3>
                      <p className='font-semibold text-primary-1 text-2xl pt-3'>
                        ${mealPrice}
                      </p>
                    </div>
                  </Slide>
                  <div className='mt-[-70px]'>
                    <Slide right>
                      <button
                        className='uppercase w-full py-2 rounded-md'
                        onClick={() => router.push(`/product/${productId}`)}>
                        order now
                      </button>
                    </Slide>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
