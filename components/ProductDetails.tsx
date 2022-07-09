

const ProductDetails = ({ mealData }: any) => {
 const name = mealData.attributes.name;
  return (
    <h1 className='text-center my-8'>ProductDetails of {name}</h1>
  )
}

export default ProductDetails