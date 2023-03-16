import React from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useState } from 'react'

const NavBar = () => {
    const [nav, setNav] = useState(false);


  return (
    <nav className='flex items-center justify-center   bg-sky-800 w-full h-20 px-4  '>
        {/* <div>
            <h1 className='capitalize text-white font-signature text-5xl ml-2' text>cozy</h1>
        </div> */}
        <ul className='hidden md:flex'>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                <a href="#home">home</a>
            </li>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                <a href="#about">about</a>
            </li>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                <a href="#portfolio">portfolio</a>
            </li>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                <a href="#experience">experience</a>
            </li>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                <a href="#contact">contact</a>
            </li>
        </ul>
        <div onClick={() => setNav(!nav)}
           className='text-gray-300 cursor-pointer float-right ml-auto z-10 md:hidden'
        >
            {nav ? <FaTimes size={35}/> : <FaBars size={35}/>} 
        </div>
        {nav &&(
             <ul className='flex flex-col justify-center items-center  absolute top-0 left-0 w-80 h-screen
             bg-gradient-to-b from-gray-700 to-gray-800 text-gray-400 '>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="home">home</a></li>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="about">about</a></li>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="#portfolio">portfolio</a></li>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="#experience">experience</a></li>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="#contact">contact</a></li>
                
            </ul>

        )}

       
        
     
    </nav>
  )
}

export default NavBar
