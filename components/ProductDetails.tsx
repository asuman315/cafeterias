import { MdKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';

const ProductDetails = ({ mealData }: any) => {

  const name = mealData.attributes.name;
  const productImage = mealData.attributes.image.data.attributes.url;
  const choiceOfComponents = mealData.attributes.choiceOfComponents;
  const accompaniment = mealData.attributes.accompaniment;

  return (
    <div className='max-w-6xl px-4 py-8 mx-auto md:grid grid-cols-2'>
      <img
        src={productImage}
        alt={name}
        className='object-cover h-[50vh] rounded-md'
      />
      <div className='pt-10 md:pt-0 md:px-5'>
        <ProductInfo mealData={mealData} />
        <ChoicesOfComponents choiceOfComponents={choiceOfComponents} />
        <Accompaniment accompaniment={accompaniment} />
      </div>
    </div>
  );
};

//ProductInfo component
const ProductInfo = ({ mealData }: any) => {
   const price = mealData.attributes.price;
   const components = mealData.attributes.components;
   const name = mealData.attributes.name;

   return (
    <>
      <h1 className='text-2xl'>{name}</h1>
        <p className='font-medium leading-8 tracking-wide'>{components}</p>
        <p className='font-bold leading-8 tracking-wider text-3xl py-3'>
          ${price}
        </p>
    </>
   )
}

// ChoicesOfComponents component
const ChoicesOfComponents = ({ choiceOfComponents }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (optionId: any) => {
    choiceOfComponents.map((option: any, index: any) => {
      console.log('option', option);
      
      if (optionId === index) {
        setSelectedOption(optionId);
      }
      if (selectedOption === index) {
        setSelectedOption(null);
      }
    });
  };

  return (
    <div>
      {choiceOfComponents.map((item: any, index: any) => {
        const { component, options } = item;
        //turn options into a list
        const optionsList = options.split(',');
        const optionId = index;

        return (
          <div className='mt-4' key={index}>
            <h3 className='uppercase md:text-xl mb-1'>choice of {component}</h3>
            <div className='border-2 px-2 rounded-md lg:cursor-pointer'>
              <div
                className='flex justify-between items-center'
                onClick={() => handleClick(optionId)}>
                <p className='font-medium w-full capitalize tracking-wide text-lg'>
                  Select the option
                </p>
                <MdKeyboardArrowUp
                  className={`w-10 h-10 ease-in duration-300 ${
                    selectedOption === index ? null : 'rotate-[180deg]'
                  }`}
                />
              </div>
              <ul
                className={`${selectedOption === index ? 'h-auto' : 'h-0'} overflow-hidden`}>
                {optionsList.map((option: any, index: any) => {
                  return (
                    <li
                      key={index}
                      className='capitalize font-medium text-md lg:cursor-pointer'>
                      {option}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Accompaniment component
const Accompaniment = ({ accompaniment }: any) => {
  const [showOptions, setShowOptions] = useState(false);
  const accompanimentList = accompaniment.split(',');
  
  const handleClick = (e: any) => {
    console.log(e.target);
    setShowOptions(!showOptions);
  };

 return (
   <div className='mt-8'>
     <h3 className='uppercase'>choose an accompaniment</h3>
     <div className='border-2 px-2 rounded-md lg:cursor-pointer'>
       <div className='flex justify-between items-center' onClick={handleClick}>
         <p className='font-medium capitalize tracking-wide text-lg'>
           Select the option
         </p>
         <MdKeyboardArrowUp
           className={`w-10 h-10 ease-in duration-300 ${
             showOptions ? null : 'rotate-[180deg]'
           }`}
         />
       </div>
       <ul className={`${showOptions ? 'h-auto' : 'h-0'} overflow-hidden`}>
         {accompanimentList.map((option: any, index: any) => {
           return (
             <li
               key={index}
               className='capitalize font-medium text-md lg:cursor-pointer'>
               {option}
             </li>
           );
         })}
       </ul>
     </div>
   </div>
 );

  }

export default ProductDetails;
