import { useEffect, useState } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

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

const AdditionalItemsInfo = ({ name, price }: any) => {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
  return (
    <div className='flex justify-between my-4'>
      <div className='text-primary-3'>
        {isCheckBoxChecked ? (
          <ImCheckboxChecked
            className='w-5 h-5 cursor-pointer'
            onClick={() => setIsCheckBoxChecked(!isCheckBoxChecked)}
          />
        ) : (
          <ImCheckboxUnchecked
            className='w-5 h-5 cursor-pointer'
            onClick={() => setIsCheckBoxChecked(!isCheckBoxChecked)}
          />
        )}
      </div>
      <div className='flex w-[80%] justify-between font-medium'>
        <p
          className='uppercase font-medium cursor-pointer'
          onClick={() => setIsCheckBoxChecked(!isCheckBoxChecked)}>
          {name}
        </p>
        <p
          className='font-medium cursor-pointer'
          onClick={() => setIsCheckBoxChecked(!isCheckBoxChecked)}>
          +{price}
        </p>
      </div>
    </div>
  );
};

export default AdditionalItems;
