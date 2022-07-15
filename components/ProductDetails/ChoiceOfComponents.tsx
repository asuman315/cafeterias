import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { cartActions } from "../../store/cartSlice";

// ChoicesOfComponents component
const ChoicesOfComponents = ({ choiceOfComponents }: any) => {

 const [isChoiceOfComponents, setIsChoiceOfComponents] = useState(false);

 useEffect(() => {
  if(choiceOfComponents.length === 0) {
   setIsChoiceOfComponents(false)
  } else {
   setIsChoiceOfComponents(true)
  }
 });

 return (
   <div>
     {isChoiceOfComponents && <ChoiceofComponentsContainer choiceOfComponents={choiceOfComponents} />}
   </div>
  );
};

const ChoiceofComponentsContainer = ({ choiceOfComponents }: any) => {
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
 )
};

// SingleChoiceOfComponent component
const SingleChoiceOfComponent = ({
  component,
  optionsList,
}: any) => {

   const [isChoiceOpened, setIsChoiceOpened] = useState(false);
   const [choice, setChoice] = useState('');
   const [isChoiceSelected, setIsChoiceSelected] = useState(false);
   const dispatch = useDispatch();

    const handleSelectedChoice = (option: string, component: string) => {
      setChoice(option);
      setIsChoiceSelected(true);
      setIsChoiceOpened(!isChoiceOpened);

      type SelectedChoice = {
        component: string,
        option: string,
      };

      //get the name of the compoment e.g eggs and the selected choice of the component e.g boiled
      const selectedChoice: SelectedChoice = {
        component,
        option,
      }; 

      // send them to the store
      dispatch(cartActions.setChoiceOfComponents(selectedChoice));
    };

    //const choiceOfComponents = useSelector(selectedChoiceOfComponents);
    
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
                onClick={() => handleSelectedChoice(option, component)}>
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