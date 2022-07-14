import { useEffect, useState } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { useAppDispatch } from '../../hooks';
import { cartActions } from '../../store/cartSlice';
import { selectedAdditionalItems } from '../../store/cartSlice';
import { useSelector } from 'react-redux';

// AdditionalItems component
const AdditionalItems = ({ additionalItems }: any) => {
 const [isAdditionalItems, setIsAdditionalItems] = useState(false);

  useEffect(() => {
   if(additionalItems.length === 0) {
    setIsAdditionalItems(false)
   } else {
    setIsAdditionalItems(true)
   }
  }, [additionalItems.length]);
  
  return (
   <div>
     {isAdditionalItems && <AdditionalItemsContainer additionalItems={additionalItems} />}
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

  const additionalItems = useSelector(selectedAdditionalItems);
  console.log('additionalItems', additionalItems);
  
 
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
