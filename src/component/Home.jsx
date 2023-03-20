import React from 'react'
// import {FaArrowAltCircleDown, FaGithub,FaInstagram,FaTwitter,FaWhatsapp} from 'react-icons/fa'
import {FiArrowDown} from 'react-icons/fi'
import {IoChevronDownCircleSharp} from 'react-icons/io5'
import SocialLinks from './SocialLinks'


const Home = () => {
  
  return (
    <div name='home' className="bg-hero bg-cover bg-center h-screen bg-fixed">
        <div  className=' item-center text-center justify-center  flex flex-col  md:flex-row h-full px-4'>
            <div className='items-center max-w-screen-lg sm:w-auto mb-54 md:mt-80 text-center justify-center flex flex-col px-4 '>
                <div className='text-center text-gray-300 capitalize border rounded-xl border-transparent  bg-zinc-800 bg-opacity-50  md:p-5 w-fit '>
                    <h1 className='text-4xl font-signature sm:text-5xl'>welcome to my dom</h1>
                    <h2 className='text-2xl py-2 sm:text-3xl'>i'm kabiru kolawole</h2>
                    <p className='py-4 max-w-ml '> 
                        full stack developer, base in abuja studing software engineering.
                    </p>
                    <div>
                        <SocialLinks/>
                        {/* <a href="" className='px-2 hover:text-amber-600'><FaGithub size={25}/></a>
                        <a href="" className='px-2 hover:text-amber-600'><FaInstagram size={25}/></a>
                        <a href="" className='px-2 hover:text-amber-600'><FaTwitter size={25}/></a>
                        <a href=""className='px-2 hover:text-amber-600'><FaWhatsapp size={25}/></a> */}
                    </div>
                    <div className='flex justify-center p-4'>
                        <buttton className=
                         'cursor-pointer rounded-full w-fit bg-slate-600 text-lg py-2 px-6 flex mx-2 text-center hover:bg-gradient-to-r hover:from-amber-800 hover:to-amber-600 ease-in-out duration-200'
                        > resume
                            <span className='px-1 py-1'>
                            <FiArrowDown/>
                            </span>
                        </buttton> 
                        <buttton className= ' cursor-pointer rounded-full w-fit bg-slate-600 text-lg py-2 px-6 mx-2 text-center hover:bg-gradient-to-r hover:from-amber-800 hover:to-amber-600 ease-in-out duration-200'
                        > conctact
                        </buttton> 
                        
                    </div>
                    
                </div>
                <div className='item-centre justify-center ml-64 h-10 mt-24 lg:mb-60'>
                    <svg className=' text-white cursor-pointer'>
                       <a href="#about"><IoChevronDownCircleSharp size={40}/></a> 
                    </svg>
                </div>
                
            </div>
           
        </div>
        
    </div>
  )
}

export default Home