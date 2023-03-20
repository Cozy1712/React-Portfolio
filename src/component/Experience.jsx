import React from 'react'
import html from '../img/html.jpg'
import javascript from '../img/javascript.png'
import css from '../img/css.png'
import nodejs from '../img/nodejs.png'
import github from '../img/github.png'
import php from '../img/php.png'
import tailwind from '../img/tailwind.png'
import sql from '../img/sql.png'
import react from '../img/react.png'

const Experience = () => {
    const exp =[
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: tailwind,
            title: 'Tailwind Css',
            style: 'shadow-cyan-500'
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-sky-500'
        },
        {
            id: 5,
            src: nodejs,
            title: 'Node',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            src: php,
            title: 'Php',
            style: 'shadow-blue-300'
        },
        {
            id: 7,
            src: sql,
            title: 'My-Sql',
            style: 'shadow-cyan-500'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
    ]
  return (<div name='experience'className=' bg-expbg  bg-center bg-no-repeat  w-full h-full'
   >

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'
        >
            <div>
                <p className='capitalize text-3xl font-semibold border-b-2 p-1 inline'
                >experience
                </p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-7 text-center py-8 px-12 sm:px-0'>

                {exp.map(({id, src, title, style}) =>(
                    <div key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="html" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
    
                    </div>

                ))}
              
            </div>
   
        </div>

    </div>
  )
}

export default Experience