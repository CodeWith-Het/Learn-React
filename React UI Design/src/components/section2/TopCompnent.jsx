import React from 'react'

const TopCompnent = () => {
  return (
    <div className='flex justify-around mt-15 mx-8 border-0 border-black rounded-3xl px-3o py-3 backdrop-blur-3xl bg-[#9AE600]'>
    <div className='flex flex-col'>
      <span className='text-center font-extrabold text-3xl'>2000+</span>
      <span className='text-center font-medium'>Company</span>
    </div>
    <div className='flex flex-col'>
      <span className='text-center font-extrabold text-3xl'>10+</span>
      <span className='text-center font-medium'>Year Exp.</span>
    </div>
    <div className='flex flex-col'>
      <span className='text-center font-extrabold text-3xl'>800+</span>
      <span className='text-center font-medium'>Hours of Digital</span>
    </div>
    <div className='flex flex-col'>
      <span className='text-center font-extrabold text-3xl'>1.5M+</span>
      <span className='text-center font-medium'>in Tracked Revenue</span>
    </div>
    </div>
  )
}

export default TopCompnent
