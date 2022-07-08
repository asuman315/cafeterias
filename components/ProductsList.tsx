import React from 'react'

const ProductsList = ({ productsData }: any) => {
 const subcategoryName = productsData.attributes.name;
 const mealsData = productsData.attributes.meals.data;
 const subcategoryImage = productsData.attributes.image.data[0].attributes.url;

  return (
    <div>
     <div className='relative border-2'>
      <h1 className='absolute top-[45%] left-5'>{subcategoryName}</h1>
      <img src={subcategoryImage} alt={subcategoryName} className='w-full' />
     </div>
     <div>
      {mealsData.map((meal: any, index: any) => {
       const mealName = meal.attributes.name;
       const mealImage = meal.attributes.image.data.attributes.url;
       const mealPrice = meal.attributes.price;
       //const productId = meal.id; 
       return (
         <div key={index}>
           <h3 className='uppercase'>{mealName}</h3>
           <img src={mealImage} alt={mealName} />
           <p className=''>{mealPrice}</p>
           <button className='uppercase'>order now</button>
         </div>
       );
      })}
     </div>
    </div>
  )
}

export default ProductsList