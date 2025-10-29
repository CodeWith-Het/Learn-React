import React from 'react'

const Navbar = () => {
  return (
    <div className='px-10 mt-4 ml-10 mr-10 py-5 bg-black text-white rounded-full'>
      <nav className='flex items-center justify-between font-light'>
        <span>About us</span>
        <span>Service</span>
        <img src="https://creatix.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb2a8b27.png&w=256&q=75" alt="" className='h-10 w-15 bg-black px-2 py-2 font-bold'/>
        <span>Projects</span>
        <span>Review</span>
      </nav>
    </div>
  )
}

export default Navbar
