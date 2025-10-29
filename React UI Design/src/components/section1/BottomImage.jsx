import React from 'react'

const BottomImage = () => {
  return (
    <>
      <div className='flex justify-center'>
        <img src="https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg" className='h-[55vh]' alt='main-image'/>
      </div>
      <div className="px-3 rounded-full py-3 absolute left-1/2 -translate-x-1/2 bottom-5 flex space-x-3 backdrop-blur-sm bg-lime-50/50">
        <button className=" bg-lime-400 text-[#242424] font-semibold px-6 py-2 rounded-full shadow-lg outline-none transition-all duration-200 hover:bg-lime-400 hover:scale-105 hover:shadow-2xl">
          Start Your Project
        </button>
        <button className=" bg-[#242424] text-gray-300 font-semibold px-6 py-2 rounded-full border-4 border-[#242424] outline-none cursor-pointer hover:bg-black-400 hover:scale-105 hover:shadow-2xl hover:text-white">
          Let's Collaborate
        </button>
      </div>
    </>
  )
}

export default BottomImage
