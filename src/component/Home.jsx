import React from 'react'
import {FiArrowDown} from 'react-icons/fi'
import {IoChevronDownCircleSharp} from 'react-icons/io5'
import { Link } from 'react-scroll'
import SocialLinks from './SocialLinks'


const Home = () => {
  
  return (
    <div name='home' className="bg-hero bg-cover bg-center h-screen bg-fixed w-full overflow-hidden ">
        <div  className=' item-center text-center justify-center  flex flex-col  md:flex-row h-full px-4'>
            <div className='items-center max-w-screen-lg mb-54 md:mt-80 text-center justify-center flex flex-col px-4 '>
                <div className='text-center box-border text-gray-300 capitalize rounded-xl border-transparent  bg-zinc-800 bg-opacity-50 w-fit md:p-5'>
                    <h1 className='text-3xl font-signature sm:text-4xl'>welcome to my dom</h1>
                    <h2 className='text-xl py-2 sm:text-3xl'>i'm kabiru kolawole</h2>
                    <p className='py-4 text-sm sm:text-sm'> 
                        full stack developer, based in abuja <br/>studying software engineering.
                    </p>

                    <div>
                        {/* social icons */}
                        <SocialLinks/>
                    </div>

                    <div className='flex justify-center p-4'>
                        <a href="/src/assets/resume.pdf" 
                        
                        download="resume.pdf"
                        className=
                         'cursor-pointer rounded-full w-fit bg-slate-600 text-lg py-2 px-6 flex sm:mx-2 mx-1 text-center hover:bg-gradient-to-r hover:from-amber-800 hover:to-amber-600 ease-in-out duration-200'
                         
                        > resume
                            <span className='px-1 py-1'>
                            <FiArrowDown/>
                            </span>
                        </a> 
                        <Link  to='contact' className= ' cursor-pointer rounded-full w-fit bg-slate-600 text-lg py-2 px-6 sm:mx-2 text-center hover:bg-gradient-to-r hover:from-amber-800 hover:to-amber-600 ease-in-out duration-200'
                        > contact
                        </Link> 
                        
                    </div>
                    
                </div>
                <div className='flex justify-center h-10 mt-32 lg:mb-60 transform translate-y-12'>
                    <Link
                    to='about' smooth={true} duration={700}>
                        <IoChevronDownCircleSharp size={40} 
                        className=' text-white cursor-pointer'
                        /> 
                    </Link> 
                </div>
                
            </div>
           
        </div>
        
    </div>
  )
}

export default Home