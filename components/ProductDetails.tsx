import Image from "next/image";

const ProductDetails = ({ mealData }: any) => {
 console.log('mealData', mealData);
 
 const name = mealData.attributes.name;
 const productImage = mealData.attributes.image.data.attributes.url;

  return (
    <div>
      
    </div>
  );
}

export default ProductDetails