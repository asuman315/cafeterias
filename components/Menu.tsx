import { useRouter } from 'next/router';

//This component displays the menu screee

const Menu = ({ categoryData }: any) => {
   const router = useRouter();
  return (
    <main className='max-w-6xl mx-auto'>
      <div className="grid grid-cols-2 gap-4 my-8 px-4">
        {categoryData.map((category: any) => {
          const productId = category.id;
          const name = category.attributes.Name;
          const imageUrl = category.attributes.image.data[0].attributes.url;
          
          return (
            <div
              key={productId}
              className='shadow-xl lg:cursor-pointer' onClick={() => router.push(`/subcategory/${productId}`)}>
              <h2 className="pb-2">{name}</h2>
              <img src={imageUrl} alt={`image of ${name}`} className='rounded-md' />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Menu