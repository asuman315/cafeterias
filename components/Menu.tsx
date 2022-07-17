import { useRouter } from 'next/router';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';

//This component displays the menu screee

const Menu = ({ categoryData }: any) => {
  const router = useRouter();

  return (
    <main className='max-w-6xl mx-auto'>
      <h1 className='text-center py-3 mt-10'>
        Welcome To <span className='font-["Arima_Madurai"]'>Cafeteriase</span>
      </h1>
      <p className='px-3 font-medium leading-[36px] tracking-wide'>
        Welcome to Cafeteriase&apos;s delicious universe. Everything from our
        Big on Breakfast, Perfected Drinks, Decadent to your Generous Big Meals
        right here at your fingertips. ORDER NOW.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-4 px-4'>
        {categoryData.map((category: any) => {
          const productId = category.id;
          const name = category.attributes.Name;
          const imageUrl = category.attributes.image.data[0].attributes.url;

          return (
            <div
              key={productId}
              className='lg:cursor-pointer my-4'
              onClick={() => router.push(`/subcategory/${productId}`)}>
              <Roll left>
                <h2 className='pb-4 text-3xl'>{name}</h2>
              </Roll>
              <Zoom>
              {/* eslint-disable-next-line */}
              <img
                src={imageUrl}
                alt={`image of ${name}`}
                className='rounded-md shadow-xl'
              />
            </Zoom>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Menu;
