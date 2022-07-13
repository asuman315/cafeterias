import ProductInfo from './ProductInfo';
import ChoicesOfComponents from './ChoiceOfComponents';
import Accompaniment from './Accompaniment';
import AdditionalItems from './AdditionalItems';
import { useRouter } from 'next/router';

const ProductDetails = ({ mealData }: any) => {
  const name = mealData.attributes.name;
  const productImage = mealData.attributes.image.data.attributes.url;
  const choiceOfComponents = mealData.attributes.choiceOfComponents;
  const accompaniment = mealData.attributes.accompaniment;
  const additionalItems = mealData.attributes.additionalItems;
  const router = useRouter();

  console.log('mealData', mealData);
  

  return (
    <div className='max-w-6xl px-4 py-8 mx-auto md:grid grid-cols-2'>
      <img
        src={productImage}
        alt={name}
        className='object-cover h-[50vh] rounded-md w-full'
      />
      <div className='pt-10 md:pt-0 md:px-5'>
        <ProductInfo mealData={mealData} />
        <ChoicesOfComponents choiceOfComponents={choiceOfComponents} />
        <Accompaniment accompaniment={accompaniment} />
        <AdditionalItems additionalItems={additionalItems} />
        <button className='uppercase w-full py-3 mt-8' onClick={() => router.push('/')}>add to order</button>
      </div>
    </div>
  );
};
export default ProductDetails;
