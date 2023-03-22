import React from 'react'
import javascript from '../assets/javascript.png'

const Work = () => {

    const portfolio = [
        {
            id: 1,
            src: javascript,
            herf:'https://github.com/Cozy1712',
        },
        {
            id: 2,
            src: javascript,
            herf:'https://github.com/Cozy1712',
        },
        {
            id: 3,
            src: javascript,
            herf:'https://github.com/Cozy1712',
        },
        {
            id: 4,
            src: javascript,
            herf:'https://github.com/Cozy1712',
        },
       
    ]
  return (

    <div name='portfolio'
     className='bg-gradient-to-b from-gray-900 to-gray-500 w-full text-gray-300 md:h-full '
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
        >
            <div className='pb-8'>
                <p className='text-3xl inline  border-b-2 capitalize font-semibold'>portfolio</p>
                <p className='py-6 text-xl font-signature'>Check out my works</p>
            </div>
            
            <div className=' items-center justify-center grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-2 px-12 sm:px-4 w-fit h-fit'>
                {portfolio.map(({id, src, herf}) => (
                <div key={id} className='rounded-lg shadow-md shadow-gray-400  '>
                    <img src={src} alt="movies" className='rounded-md duration-200 hover:scale-105 w-60'/>
                    <div className='justify-center grid'>
                        <a href={herf} className=' w-1/2 px-6 py-3 duration-200 hover:scale-105'><button className='text-center rounded-xl px-2 py-2 bg-gray-400 hover:bg-amber-500 text-gray-700 font-semibold'>code</button></a>
                    </div>
                </div>

                ))}            
            </div>
        </div>        
    </div>
  )
}

export default Work