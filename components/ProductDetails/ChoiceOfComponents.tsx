import { useState } from "react";
import { MdKeyboardArrowUp } from 'react-icons/md';

// ChoicesOfComponents component
const ChoicesOfComponents = ({ choiceOfComponents }: any) => {
 return (
  <section>
      {choiceOfComponents.map((item: any, index: any) => {
       const { component, options } = item;
        //turn options into a list
        const optionsList = options.split(',');
        return (
          <SingleChoiceOfComponent
            component={component}
            optionsList={optionsList}
            key={index}
          />
        );
      })}
    </section>
  );
};

// SingleChoiceOfComponent component
const SingleChoiceOfComponent = ({
  component,
  optionsList,
}: any) => {

   const [isChoiceOpened, setIsChoiceOpened] = useState(false);
   const [choice, setChoice] = useState(null);
   const [isChoiceSelected, setIsChoiceSelected] = useState(false);

    const handleSelectedChoice = (option: any) => {
      setChoice(option);
      setIsChoiceSelected(true);
      setIsChoiceOpened(!isChoiceOpened);
    };

     const handleClick = () => {
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

export default ChoicesOfComponents;