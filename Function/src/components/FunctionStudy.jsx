import React from 'react'

const FunctionStudy = () => {

const chaning = (elem)=>{
    console.log(elem.target.value)
}

const doubleclick = () =>{
    console.log("ho raha hai double click")
}

const mouseEnter = () =>{
    console.log("Enter hua hai tu....")
}

const mouseMove = () =>{
    console.log("Move ho raha hai")
}

const mouseLeave = () =>{
    console.log("Leave ho gaya");
}

  return (
    <>
    <div>
      <input type="text" placeholder='enter your username' onChange={chaning}/>
    </div>

    <div>
        <button onDoubleClick={doubleclick}>click me</button>
    </div>

    <div className='box' onMouseEnter={mouseEnter} onMouseMove={mouseMove} onMouseLeave={mouseLeave}>    
    </div>
    </>
  )
}

export default FunctionStudy
