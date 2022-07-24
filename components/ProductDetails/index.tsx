import { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';
import ChoicesOfComponents from './ChoiceOfComponents';
import Accompaniment from './Accompaniment';
import AdditionalItems from './AdditionalItems';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
//import { useRouter } from 'next/router';

import { selectedAdditionalItems } from '../../store/cartSlice';
import { useSelector } from 'react-redux';
import { selectedAccompaniment } from '../../store/cartSlice';
import { selectedChoiceOfComponents } from '../../store/cartSlice';

import Alert from '../Alert';
import CurrentPage from '../CurrentPage';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

const ProductDetails = ({ mealData }: any) => {
 
  const productId: string = mealData.id;
  const productName: string = mealData.attributes.name;
  const categoryName =
  mealData.attributes.mealsubcategories.data[0].attributes.mealcategories
      .data[0].attributes.Name;
  const subcategoryName =
    mealData.attributes.mealsubcategories.data[0].attributes.name;
  const productImage: string = mealData.attributes.image.data.attributes.url;
  const choiceOfComponents = mealData.attributes.choiceOfComponents;
  const accompaniment = mealData.attributes.accompaniment;
  // return an empty array if accompaniment wasn't provided
  const accompanimentData = accompaniment ? accompaniment : [];
  const additionalItems = mealData.attributes.additionalItems;
  const price: number = mealData.attributes.price ? mealData.attributes.price : 0;

  //const router = useRouter();
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    status: '',
  });

  // fetch the selected items from the redux store
  const getSelectedAdditionalItems = useSelector(selectedAdditionalItems);
  const getSelectedAccompaniment = useSelector(selectedAccompaniment);
  const getSelectedChoiceOfComponents = useSelector(selectedChoiceOfComponents);

  const cart = {
    productId,
    name: productName,
    productImage,
    choiceOfComponents: getSelectedChoiceOfComponents,
    accompaniment: getSelectedAccompaniment || '',
    additionalItems: getSelectedAdditionalItems,
    price,
    quantity: 1,
    totalPrice: price,
  };

    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
      // set choiceOfComponents in redux store to an empty array whenever the user leaves the product details page
      dispatch(cartActions.emptyChoiceOfComponents());
    }, [router.pathname]);

  const addToCart = () => {
    // set the userCart to the 'userCart' in redux store if it exists else set userCart to an empty array
    const userCart = localStorage.getItem('userCart')
      ? JSON.parse(localStorage.getItem('userCart') || '')
      : [];
    // check if the userCart already contains the selected items
    const existingCart = userCart.find((cart: any) => {
      return cart.name === productName;
    })!;
  
     const numberOfChoices: number = choiceOfComponents.length;
     const selectedNumberOfChoices: number =
       getSelectedChoiceOfComponents.length;  
       
      //  console.log('number of choices',numberOfChoices, 'selected number of choices',selectedNumberOfChoices);

      //  console.log('selected choice of components',getSelectedChoiceOfComponents);
       
       
    if (numberOfChoices !== selectedNumberOfChoices) {
      setAlert({
        show: true,
        msg: 'Please select all options',
        status: 'error',
      });
      return;
    }

    // if the userCart already contains the selected items, update the cart
    if (existingCart) {
      existingCart.choiceOfComponents = cart.choiceOfComponents;
      existingCart.accompaniment = cart.accompaniment;
      existingCart.additionalItems = cart.additionalItems;
      setAlert({
        status: 'success',
        show: true,
        msg: 'Your cart has been updated successfully!',
      });
    } else {
      // if it does not, add the selected items to the userCart
      userCart.push(cart);

      setAlert({
        status: 'success',
        show: true,
        msg: 'Item added to cart successfully!',
      });
    }

    // add the userCart to localStorage
    localStorage.setItem('userCart', JSON.stringify(userCart));

    router.push('/user/cart');
  };

  return (
    <div className='max-w-6xl px-4 py-5 mx-auto md:grid grid-cols-2'>
      <div className='w-full left-0 fixed top-0 z-40'>
        {alert.show && <Alert alert={alert} setAlert={setAlert} />}
      </div>
      <Zoom>
        {/* eslint-disable-next-line */}
        <img
          src={productImage}
          alt={productName}
          className='object-cover h-[50vh] rounded-md w-full'
        />
      </Zoom>
      <div className='mt-20 md:mt-0 md:pt-0 md:px-5'>
        <Slide>
          <CurrentPage
            categoryName={categoryName}
            subcategoryName={subcategoryName}
            productName={productName}
          />
        </Slide>
        <ProductInfo mealData={mealData} />
        <ChoicesOfComponents choiceOfComponents={choiceOfComponents} />
        <Accompaniment accompaniment={accompanimentData} />
        <AdditionalItems additionalItems={additionalItems} />
        <Roll bottom>
          <button className='uppercase w-full py-3 mt-8' onClick={addToCart}>
            add to order
          </button>
        </Roll>
      </div>
    </div>
  );
};
export default ProductDetails;
