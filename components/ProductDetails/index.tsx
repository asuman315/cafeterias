import ProductInfo from './ProductInfo';
import ChoicesOfComponents from './ChoiceOfComponents';
import Accompaniment from './Accompaniment';
import AdditionalItems from './AdditionalItems';
import { useRouter } from 'next/router';
import { selectedAdditionalItems } from '../../store/cartSlice';
import { useSelector } from 'react-redux';
import { selectedAccompaniment } from '../../store/cartSlice';
import { selectedChoiceOfComponents } from '../../store/cartSlice';
import { type } from 'os';

const ProductDetails = ({ mealData }: any) => {
  const name = mealData.attributes.name;
  const productImage = mealData.attributes.image.data.attributes.url;
  const choiceOfComponents = mealData.attributes.choiceOfComponents;
  const accompaniment = mealData.attributes.accompaniment;
  const accompanimentData = accompaniment ? accompaniment : [];
  const additionalItems = mealData.attributes.additionalItems;
  const price = mealData.attributes.price;
  const router = useRouter();

  // fetch the selected items from the redux store
  const getSelectedAdditionalItems = useSelector(selectedAdditionalItems);
  const getSelectedAccompaniment = useSelector(selectedAccompaniment);
  const getSelectedChoiceOfComponents = useSelector(selectedChoiceOfComponents);

  console.log('Additional Items', getSelectedAdditionalItems);
  
  type ChoiceOfComponents = {
    component: string;
    option: string;
  }

  type AdditionalItems = {
    name: string;
    price: number;
  }

  type Cart = {
    choiceOfComponents: ChoiceOfComponents[];
    accompaniment?: string;
    additionalItems: AdditionalItems[];
    productImage: string;
    name: string;
    price: number;
  }

  const cart: Cart = {
    name,
    productImage,
    choiceOfComponents: getSelectedChoiceOfComponents,
    accompaniment: getSelectedAccompaniment || '',
    additionalItems: getSelectedAdditionalItems,
    price,
  };

  // add the selected items to the cart
  const addToCart = () => {
    // set the userCart to the cart in redux store if it exists else set usercart to an empty array
    const userCart: Cart[] = localStorage.getItem('userCart')
      ? JSON.parse(localStorage.getItem('userCart') || '')
      : [];
      // check if the userCart already contains the selected items
      const existingCart: Cart = userCart.find((cart) => {
        return cart.name === name;
      }
      )!;

      // if it does, update the cart
      if (existingCart) {
        existingCart.choiceOfComponents = cart.choiceOfComponents;
        existingCart.accompaniment = cart.accompaniment;
        existingCart.additionalItems = cart.additionalItems;
      } else {
        // if it does not, add the selected items to the userCart
        userCart.push(cart);
      }
      // add the userCart to localStorage
      localStorage.setItem('userCart', JSON.stringify(userCart));
  };

  return (
    <div className='max-w-6xl px-4 py-8 mx-auto md:grid grid-cols-2'>
      {/* eslint-disable-next-line */}
      <img
        src={productImage}
        alt={name}
        className='object-cover h-[50vh] rounded-md w-full'
      />
      <div className='pt-10 md:pt-0 md:px-5'>
        <ProductInfo mealData={mealData} />
        <ChoicesOfComponents choiceOfComponents={choiceOfComponents} />
        <Accompaniment accompaniment={accompanimentData} />
        <AdditionalItems additionalItems={additionalItems} />
        <button
          className='uppercase w-full py-3 mt-8'
          onClick={addToCart}>
          add to order
        </button>
      </div>
    </div>
  );
};
export default ProductDetails;
