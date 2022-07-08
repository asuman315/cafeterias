

const Subcategory = ({ subcategoryData }: any) => {
 const mealsubcategories = subcategoryData.attributes.mealsubcategories.data;
 const subcategoryName = subcategoryData.attributes.Name
 
  return (
    <div className="max-w-6xl mx-auto px-3">
      <h1>{subcategoryName}</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-6'>
        {mealsubcategories.map((subcategory: any, index: any) => {
          const productId = subcategory.id;
          const productName = subcategory.attributes.name;
          const productImage =
            subcategory.attributes.image.data[0].attributes.url;
          return (
            <div key={index} className='relative'>
              <img src={productImage} alt={`Image of ${productName}`} />
              <h3 className='text-center uppercase absolute top-24 left-4 '>{productName}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subcategory