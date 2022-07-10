import { MdKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';

const ProductDetails = ({ mealData }: any) => {
  const name = mealData.attributes.name;
  const productImage = mealData.attributes.image.data.attributes.url;
  const choiceOfComponents = mealData.attributes.choiceOfComponents;
  const accompaniment = mealData.attributes.accompaniment;
  const additionalItems = mealData.attributes.additionalItems;

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
        <AdditionalItems additionalItems={additionalItems} />
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
      <h1 className='text-2xl text-primary-1 tracking-wider'>{name}</h1>
      <p className='font-medium leading-8 tracking-wide'>{components}</p>
      <p className='font-bold text-primary-1 leading-8 tracking-wider text-3xl py-3'>
        ${price}
      </p>
    </>
  );
};

// ChoicesOfComponents component
const ChoicesOfComponents = ({ choiceOfComponents }: any) => {
  return (
    <div>
      {choiceOfComponents.map((item: any, index: any) => {
        const { component, options } = item;
        const [isChoiceOpened, setIsChoiceOpened] = useState(false);
        const [choice, setChoice] = useState(null);
        const [isChoiceSelected, setIsChoiceSelected] = useState(false);
        //turn options into a list
        const optionsList = options.split(',');

        const handleClick = () => {
          setIsChoiceOpened(!isChoiceOpened);
        };

        return (
          <SingleChoiceOfComponent
            component={component}
            optionsList={optionsList}
            handleClick={handleClick}
            isChoiceOpened={isChoiceOpened}
            choice={choice}
            isChoiceSelected={isChoiceSelected}
            setChoice={setChoice}
            setIsChoiceSelected={setIsChoiceSelected}
            setIsChoiceOpened={setIsChoiceOpened}
            key={index}
          />
        );
      })}
    </div>
  );
};

// SingleChoiceOfComponent component
const SingleChoiceOfComponent = ({
  component,
  optionsList,
  handleClick,
  isChoiceOpened,
  isChoiceSelected,
  choice,
  setChoice,
  setIsChoiceSelected,
  setIsChoiceOpened,
}: any) => {

  const handleSelectedChoice = (option: any) => {
    setChoice(option);
    setIsChoiceSelected(true);
    setIsChoiceOpened(!isChoiceOpened);
  };
  
  return (
    <div className='mt-4'>
      <h3 className='uppercase md:text-xl mb-1 tracking-wider'>
        choice of {component}
      </h3>
      <div className='border-2 rounded-md'>
        <div
          className='flex justify-between items-center cursor-pointer px-2'
          onClick={handleClick}>
          <p className='font-medium w-full capitalize tracking-wide text-lg'>
            {isChoiceSelected ? choice : 'select an option'}
          </p>
          <MdKeyboardArrowUp
            className={`w-10 h-10 ease-in duration-300 ${
              isChoiceOpened ? null : 'rotate-[180deg]'
            }`}
          />
        </div>
        <ul className={`${isChoiceOpened ? 'h-auto' : 'h-0'} overflow-hidden`}>
          {optionsList.map((option: any, index: any) => {
            return (
              <li
                key={index}
                className='capitalize px-2 font-medium text-md cursor-pointer hover:bg-primary-1'
                onClick={() => handleSelectedChoice(option)}>
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// Accompaniment component
const Accompaniment = ({ accompaniment }: any) => {
  const [openedChoice, setOpenedOptions] = useState(false);
  const accompanimentList = accompaniment.split(',');
  const [accompanimentState, setAccompanimentState] = useState(null);
  const [isAccompanimentSelected, setIsAccompanimentSelected] = useState(false);

  const handleClick = () => {
    setOpenedOptions(!openedChoice);
  };

  const handleSelectedAccompaniment = (option: any) => {
    setAccompanimentState(option);
    setIsAccompanimentSelected(true);
    setOpenedOptions(!openedChoice);
  };

  return (
    <div className='mt-8'>
      <h3 className='uppercase md:text-xl mb-1 tracking-wider'>
        choose an accompaniment
      </h3>
      <div className='border-2 rounded-md cursor-pointer'>
        <div
          className='flex justify-between items-center'
          onClick={handleClick}>
          <p className='font-medium capitalize tracking-wide text-lg px-2'>
            {isAccompanimentSelected
              ? accompanimentState
              : 'select an accompaniment'}
          </p>
          <MdKeyboardArrowUp
            className={`w-10 h-10 ease-in duration-300 ${
              openedChoice ? null : 'rotate-[180deg]'
            }`}
          />
        </div>
        <ul className={`${openedChoice ? 'h-auto' : 'h-0'} overflow-hidden`}>
          {accompanimentList.map((option: any, index: any) => {
            return (
              <li
                key={index}
                className='capitalize px-2 font-medium text-md cursor-pointer hover:bg-primary-1'
                onClick={() => handleSelectedAccompaniment(option)}>
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// AdditionalItems component
const AdditionalItems = ({ additionalItems }: any) => {
 console.log('additionalItems: ', additionalItems);
    return (
      <div className='mt-8'>
        <h3 className='uppercase md:text-xl mb-1 tracking-wider'>additional items</h3>
        { additionalItems.map((item: any, index: any) => {
          const { name, price } = item;
           return (
             <div>
               <input type='checkbox' id='checkbox' />
               <label htmlFor='checkbox'>
                 <div>
                   <p className='uppercase font-medium'>{name}</p>
                   <p className='font-medium'>{price}</p>
                 </div>
               </label>
             </div>
           );
         })}
      </div>
    );
}

export default ProductDetails;
