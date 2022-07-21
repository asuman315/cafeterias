import { useEffect, useState } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { useAppDispatch } from '../../hooks';
import { cartActions } from '../../store/cartSlice';
import Zoom from 'react-reveal/Zoom';
import { useRouter } from 'next/router';

// AdditionalItems component
const AdditionalItems = ({ additionalItems }: any) => {
 const [isAdditionalItems, setIsAdditionalItems] = useState(false);

  useEffect(() => {
    // check if there are any additional items so that the additional items section can be displayed
   if(additionalItems.length === 0) {
    setIsAdditionalItems(false)
   } else {
    setIsAdditionalItems(true)
   }
  }, [additionalItems.length]);
  
  return (
   <div>
     {isAdditionalItems && 
     <Zoom bottom>
       <AdditionalItemsContainer additionalItems={additionalItems} />
     </Zoom>}
   </div>
  );
};

const AdditionalItemsContainer = ({ additionalItems }: any) => {

 return (
   <section className='mt-8'>
      <h3 className='uppercase md:text-xl mb-1 tracking-wider'>
        additional items
      </h3>
      {additionalItems.map((item: any, index: any) => {
        const { name, price } = item;
        return <AdditionalItemsInfo name={name} price={price} key={index} />;
      })}
    </section>
 )
}

const AdditionalItemsInfo = ({ name, price }: {name: string, price: number}) => {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
     // set additional items in redux store to an empty array whenever the user leaves the product details page
     dispatch(cartActions.emptyAdditionalItems());
  }, [router.pathname]);

  type SelectedAdditionalItem = {
    name: string,
    price: number,
  };

  const SelectedAdditionalItem: SelectedAdditionalItem = {
    name,
    price,
  };

  const handleClick = () => {
    setIsCheckBoxChecked(!isCheckBoxChecked)
    // send them to the store
    dispatch(cartActions.setAdditionalItems(SelectedAdditionalItem));
 }
 
  return (
    <div className='flex justify-between my-4'>
      <div className='text-primary-3'>
        {isCheckBoxChecked ? (
          <ImCheckboxChecked
            className='w-5 h-5 cursor-pointer'
            onClick={handleClick}
          />
        ) : (
          <ImCheckboxUnchecked
            className='w-5 h-5 cursor-pointer'
            onClick={handleClick}
          />
        )}
      </div>
      <div className='flex w-[80%] justify-between font-medium'>
        <p
          className='uppercase font-medium cursor-pointer'
          onClick={handleClick}>
          {name}
        </p>
        <p
          className='font-medium cursor-pointer'
          onClick={handleClick}>
          +{price}
        </p>
      </div>
    </div>
  );
};

export default AdditionalItems;
