import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from 'react-icons/md';

// Accompaniment component
const Accompaniment = ({ accompaniment }: any) => {
  const [isAccompanimentPresent, setIsAccompanimentPresent] = useState(false);

  useEffect(() => {
   //show/hide accompaniment container
   if (accompaniment) {
     setIsAccompanimentPresent(true);
   } else {
     setIsAccompanimentPresent(false);
   }
  //  
  }, []);

 //turn accompaniment into a list otherwise set it to an empty array
  const accompanimentList = isAccompanimentPresent ? accompaniment.split(',') : [];

  return (
   <div>
     { isAccompanimentPresent && <AccompanimentContainer  accompanimentList={accompanimentList} /> }
   </div>
  );
};

const AccompanimentContainer = ({ accompanimentList }: any) => {
 const [openedChoice, setOpenedOptions] = useState(false);
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
   )
}

export default Accompaniment;