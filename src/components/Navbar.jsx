import React from 'react'
import {Link , NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <nav className=' flex justify-center items-center p-2.5 bg-indigo-300 gap-[100px] '>
        <li className='text-2xl font-bold list-none'><NavLink to="/" className={({isActive}) => isActive ? "bg-red-300" : " "}>Home</NavLink></li>
        <li className='text-2xl font-bold list-none'><NavLink to="/register" className={({isActive}) => isActive ? "bg-red-300" : " "}>Register</NavLink></li>
        <li className='text-2xl font-bold list-none'><NavLink to="/login" className={({isActive}) => isActive ? "bg-red-300" : " "}>Login</NavLink></li>
    </nav>
  )
}

export default Navbar
