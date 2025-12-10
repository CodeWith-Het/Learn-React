import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

function increment(){
  setNum(num+1);
}

function decrement(){
  setNum(num-1);
}

function jumpBy5(){
  setNum(num+5);
}

  return (
    <div className='useState'>
        <h1>{num}</h1>
        <button className='increment' onClick={increment}>increment</button>
        <button className='decrement' onClick={decrement}>decrement</button>
        <button className='decrement' onClick={jumpBy5}>increment by 5</button>
    </div>
  )
}

export default App
