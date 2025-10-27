import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='cards-container'>
      <Card user="Het Patel" age={21} image="https://images.unsplash.com/photo-1761153121828-0994a82db8f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=767"/>
      <Card user="Jenish Patel" age={22} image="https://images.unsplash.com/photo-1750779941284-09ee2d6a619c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"/>
      <Card user="Darshan Patel" age={20} image="https://plus.unsplash.com/premium_photo-1700533934296-b00d9089bb13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"/>
    </div>
  )
}

export default App
