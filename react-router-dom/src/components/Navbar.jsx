import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h2 className='logo'>logo</h2>
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Courses</Link>
        </div>
    </nav>
  )
}

export default Navbar
