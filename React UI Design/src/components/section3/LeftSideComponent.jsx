import React from 'react';

const LeftSideComponent = () => {
  return (
    <div className='flex min-h-screen'>
      {/* Left green box */}
      <div className='flex items-center'>
        <div className='bg-[#9AE600] w-[56px] h-[220px] rounded-md shadow-lg flex items-center justify-center px-2'>
          <span className='uppercase text-black text-base font-bold -rotate-90 tracking-widest select-none'>
            WHAT WE DO
          </span>
        </div>
      </div>
      {/* Baaki content ke liye yaha flex-1 use karo */}
      <div className="flex-1">
        {/* Main page content yaha aayega */}
      </div>
    </div>
  );
};

export default LeftSideComponent;
