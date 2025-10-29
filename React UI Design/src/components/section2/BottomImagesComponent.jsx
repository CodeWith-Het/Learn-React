import React from 'react'

const BottomImagesComponent = () => {
  return (
    <div className='mt-10 flex'>
      <div className='px-10 relative'>
        <img
            src="https://i.pinimg.com/1200x/6a/b1/e1/6ab1e1fc2e91dba5cb92a855e028aca4.jpg"
            className='h-[60vh] w-[65vw] rounded-2xl object-cover z-0'/>
        <div className='flex flex-col absolute bg-[#9AE600] top-[55%] z-10 p-5 mx-5 rounded'>
        <span className='font-medium'>A CREATIVE DESIGN</span>
        <span className='font-medium'>AGENCY</span>
    </div>
    </div>
      <div className='px-10'>
        <img src="https://i.pinimg.com/736x/05/f9/62/05f962510faccbb68ef5c9d43549b9a8.jpg" className='h-[75vh] w-[25vw] rounded-2xl object-cover' />
      </div>
    </div>
  )
}

export default BottomImagesComponent
