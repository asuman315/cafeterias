import React, { useEffect } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const Alert = ({ alert, setAlert }: any) => {
  const { status, msg } = alert;

  useEffect(() => {
    const alertTimeOut = setTimeout(() => {
      setAlert({ show: false });
    }, 3500);
    return () => clearTimeout(alertTimeOut);
  }, [msg]);

  return (
    <div
      className={`flex items-center relative border-2 w-[95%] mx-auto ${
        status === 'error'
          ? 'text-dark-red bg-light-red border-dark-red border-[1px]'
          : 'text-dark-green bg-white border-[1px] border-dark-green'
      }`}>
      <p className='text-sm font-extrabold tracking-widest pl-3 py-3 w-[85%] rounded-sm'>
        {msg}
      </p>
      <div
        className={`absolute right-3 pl-4 text-2xl lg:cursor-pointer ${
          status === 'error' ? 'text-dark-red' : 'text-dark-green'
        }`}
        onClick={() => setAlert({ show: false })}>
        <MdOutlineCancel />
      </div>
    </div>
  );
};

export default Alert;
