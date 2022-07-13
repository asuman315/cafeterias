import { useRouter } from 'next/router';

const Subcategory = ({ subcategoryData }: any) => {
  const mealsubcategories = subcategoryData.attributes.mealsubcategories.data;
  const subcategoryName = subcategoryData.attributes.Name;
  const router = useRouter();

  return (
    <div className='max-w-6xl mx-auto px-2 mt-6'>
      <h1 className='text-center py-3'>{subcategoryName}</h1>
      <p className='px-3 font-medium leading-8 tracking-wide'>
        Welcome to Cafeteriase&apos;s delicious universe. Everything from our
        Big on Breakfast, Perfected Drinks, Decadent to your Generous Big Meals
        right here at your fingertips. ORDER NOW.
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-6'>
        {mealsubcategories.map((subcategory: any, index: any) => {
          const productId = subcategory.id;
          const productName = subcategory.attributes.name;
          const productImage =
            subcategory.attributes.image.data[0].attributes.url;
          return (
            <div
              key={index}
              className='relative bg-[#374151] lg:cursor-pointer shadow'
              onClick={() => router.push(`/products/${productId}`)}>
              <img
                src={productImage}
                alt={`Image of ${productName}`}
                className='mix-blend-overlay'
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
