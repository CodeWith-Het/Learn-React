import React from 'react'
import Navbar from './Navbar'
import Center from './Center'
import BottomLeftSide from './BottomLeftSide'
import BottomImage from './BottomImage'
import BottomRightSide from './BottomRightSide'

const Section1 = () => {
  return (
    <div className='w-full bg-white mb-0 min-h-screen border-b-4 rounded-b-4xl'>
      <Navbar />
      <Center />
      <BottomLeftSide />
      <BottomImage />
      <BottomRightSide />
    </div>
  )
}

export default Section1
