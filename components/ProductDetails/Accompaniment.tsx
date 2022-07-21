import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useAppDispatch } from '../../hooks';
import { cartActions } from '../../store/cartSlice';
import Zoom from 'react-reveal/Zoom';

// Accompaniment component
const Accompaniment = ({ accompaniment }: any) => {
  const [isAccompanimentPresent, setIsAccompanimentPresent] = useState(false);

  useEffect(() => {
    //show/hide accompaniment container
    if (accompaniment.length > 0) {
      setIsAccompanimentPresent(true);
    } else {
      setIsAccompanimentPresent(false);
    }
    //eslint-disable-next-line
  }, []);

  //turn accompaniment into a list otherwise set it to an empty array
  const accompanimentList = isAccompanimentPresent
    ? accompaniment.split(',')
    : [];

  return (
    <div>
      {isAccompanimentPresent && (
        <Zoom>
          <AccompanimentContainer accompanimentList={accompanimentList} />
        </Zoom>
      )}
    </div>
  );
};

const AccompanimentContainer = ({ accompanimentList }: any) => {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);
  const [selectedAccompaniment, setSelectedAccompaniment] = useState(null);
  const [isAccompanimentSelected, setIsAccompanimentSelected] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setIsOptionsOpened(!isOptionsOpened);
  };

  const handleSelectedAccompaniment = (option: any) => {
    setSelectedAccompaniment(option);
    setIsAccompanimentSelected(true);
    setIsOptionsOpened(!isOptionsOpened);

    //add accompaniment to local storage
    dispatch(cartActions.setAccompaniment(option));
  };

  const clearAccompaniment = () => {
    setIsAccompanimentSelected(false);
    //clear accompaniment from store
    dispatch(cartActions.setAccompaniment(''));
  }

  return (
    <div className='mt-12'>
      <div className='flex items-center justify-between mb-1'>
        <h3 className='uppercase text-base md:text-lg tracking-wider'>
          choose an accompaniment
        </h3>
        <p className='font-bold cursor-pointer' onClick={clearAccompaniment}>Clear</p>
      </div>
      <div className='border-2 rounded-md cursor-pointer'>
        <div
          className='flex justify-between items-center'
          onClick={handleClick}>
          <p
            className={`font-medium capitalize tracking-wide text-sm md:text-lg px-2 ${
              isAccompanimentSelected ? 'text-primary-1' : 'text-primary-3'
            }`}>
            {isAccompanimentSelected
              ? selectedAccompaniment
              : 'select an accompaniment'}
          </p>
          <MdKeyboardArrowUp
            className={`w-10 h-10 ease-in duration-300 ${
              isOptionsOpened ? null : 'rotate-[180deg]'
            }`}
          />
        </div>
        <ul className={`${isOptionsOpened ? 'h-auto' : 'h-0'} overflow-hidden`}>
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

export default Accompaniment;
