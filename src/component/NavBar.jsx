import React from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll';
const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links =[
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },
    ]


  return (
    <div >
    <nav className=' flex items-center justify-center absolute md:bg-zinc-800 md:opacity-60  w-full h-10 px-4  '>
        {/* <div>
            <h1 className='capitalize text-white font-signature text-5xl ml-2' text>cozy</h1>
        </div> */}
        
        {/* Menu */}

        <ul className='hidden md:flex md:bg-none cursor-pointer '>
            {links.map(({id,link}) => (
                <li 
                 key={id}
                 className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                 <Link to={link} smooth duration={700}>{link}</Link>
               </li>
            ))}
            {/* <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
              <a href="#home">home</a>
            </li>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                <Link to='about' smooth duration={500}>about</Link>
            </li>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                <Link to='portfolio' smooth duration={500}>portfolio</Link>
            </li>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
               <a href="#experience">experience</a>
            </li>
            <li className='px-10 font-medium text-gray-300 hover:text-amber-600  hover:scale-105 duration-200 capitalize'>
                <a href="#contact">contact</a>
            </li> */}
        </ul>
        <div onClick={() => setNav(!nav)}
           className='text-gray-300 cursor-pointer float-right ml-auto z-10 md:hidden'
        >
            {nav ? <FaTimes size={35}/> : <FaBars size={35}/>} 
        </div>
        {nav &&(

          ////////////// // mobile menu  ///////////////////

             <ul className='flex flex-col justify-center items-center  absolute top-0 left-0 w-80 h-screen
             bg-gradient-to-b from-gray-700 to-gray-800 text-gray-400 '>
                
                {links.map(({id, link}) => (
                   <li 
                   key={id}
                   className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-300 cursor-pointer'
                   >
                      <Link
                      onClick={() =>setNav(!nav)}
                       to={link} 
                       smooth
                        duration={700}
                        >
                            {link}
                       </Link>
                    </li> 
                ))}
                {/* <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="home">home</a></li>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="about">about</a></li>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="#portfolio">portfolio</a></li>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="#experience">experience</a></li>
                <li className='capitalize px-4 text-2xl py-5 hover:text-amber-600 ease-in-out duration-200'><a href="#contact">contact</a></li>
                 */}
            </ul>

        )}

       
        
     
    </nav>
    </div>
  )
}

export default NavBar
