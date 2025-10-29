import React from 'react'
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';

const MainComponent = () => {
  return (
    <div className='h-auto w-full'>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
    </div>
  )
}

export default MainComponent
