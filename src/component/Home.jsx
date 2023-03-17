import React from 'react'
import {FaFacebook, FaGithub,FaInstagram,FaTwitter,FaWhatsapp} from 'react-icons/fa'

const Home = () => {
  return (
    <div name='home' className="bg-hero bg-cover bg-center h-screen bg-fixed">
        <div  className=' item-center text-center justify-center flex flex-col  md:flex-row h-full px-4'>
            <div className='items-center max-w-screen-lg mx-auto text-center justify-center flex flex-col px-4 '>
                <div className='text-center text-gray-300 capitalize border rounded-xl  p-5'>
                    <h1 className='text-4xl font-signature sm:text-6xl'>welcome to my world</h1>
                    <h2 className='text-2xl py-2 sm:text-3xl'>i'm kabiru kolawole</h2>
                    <p className='py-4 max-w-ml '> 
                        full stack developer, base in abuja studing software engineering.
                    </p>
                    <div className='text-white flex  justify-center '>
                        <a href="" className='px-2 hover:text-amber-600'><FaGithub size={25}/></a>
                        <a href="" className='px-2 hover:text-amber-600'><FaInstagram size={25}/></a>
                        <a href="" className='px-2 hover:text-amber-600'><FaTwitter size={25}/></a>
                        <a href=""className='px-2 hover:text-amber-600'><FaWhatsapp size={25}/></a>
                    </div>
                    <div className='flex justify-center p-4'>
                        <h2 className='px-4 border rounded-sm'>Resume</h2> 
                        <h2>contact</h2>
                    </div>
                </div>
                
            </div>

        </div>
        
    </div>
  )
}

export default Home