

const Subcategory = ({ subcategoryData }: any) => {
 const mealsubcategories = subcategoryData.attributes.mealsubcategories.data;
 const subcategoryName = subcategoryData.attributes.Name
 
  return (
   <div>
    <h1>{subcategoryName}</h1>
    <div>
      { mealsubcategories.map((subcategory: any) => {
         const productId = subcategory.id;
         const productName = subcategory.attributes.name;
         const productImage = subcategory.attributes.image.data[0].attributes.url
         console.log(subcategoryName, productId, productName, productImage);
         
         return (
          <div>
           <img src={productImage} alt={`Image of ${productName}`} />
           <h3 className="text-center uppercase">{productName}</h3>
          </div>
         )
      }) }
    </div>
   </div>
  )
}

export default Subcategory