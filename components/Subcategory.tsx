import { useRouter } from 'next/router';

const Subcategory = ({ subcategoryData }: any) => {
  const mealsubcategories = subcategoryData.attributes.mealsubcategories.data;
  const subcategoryName = subcategoryData.attributes.Name;
  const router = useRouter();

  return (
    <div className='max-w-6xl mx-auto px-2 mt-6'>
      <h1 className='text-center py-3 text-3xl'>{subcategoryName}</h1>
      <p className='px-3 font-medium leading-[36px] tracking-wide'>
        Welcome to Cafeteriase&apos;s delicious universe. Everything from our
        Big on Breakfast, Perfected Drinks, Decadent to your Generous Big Meals
        right here at your fingertips. ORDER NOW.
      </p>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 px-2 py-6 '>
        {mealsubcategories.map((subcategory: any, index: any) => {
          const productId = subcategory.id;
          const productName = subcategory.attributes.name;
          const productImage =
            subcategory.attributes.image.data[0].attributes.url;
          return (
            <div
              key={index}
              className='relative bg-[#374151] lg:cursor-pointer rounded-md shadow-xl'
              onClick={() => router.push(`/products/${productId}`)}>
              {/* eslint-disable-next-line */}
              <img
                src={productImage}
                alt={`Image of ${productName}`}
                className='mix-blend-overlay cursor-pointer'
              />
              <h3 className='text-center uppercase absolute top-24 left-4 md:text-lg text-primary-1 tracking-wider'>
                {productName}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subcategory;
