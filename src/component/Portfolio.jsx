import React from 'react'

const Portfolio = () => {
  return (
    <div name="about"  className=' bg-gray-700 w-full justify-center items-center text-center'>
        <div className=' max-w-screen-lg p-6 mx-auto grid grid-flow-row w-full h-full'>
            <div className='content flex py-2 '>
                <p className='capitalize border-b-2 inline text-2xl mx-auto mt-10 '>education</p>
            </div>
            <div className='text-justify '>
               <div className=' capitalize item-body flex  flex-col pb-4 py-4 text-gray-300 item-body'>
                    <h4 className=' text-xl flex '>
                        bsc software engineering
                    </h4>
                    <p className='text-center py-2 flex text-sm'>koladiasi university . march 2022</p>
                    <p className='text-justify mt-6 text-sm'>I have completed my Bachelor of Science in Software Engineering at KolaDaisi University in Ibadan. This program provided me with a comprehensive understanding of software development, system architecture, and project management. Through rigorous coursework and practical projects, I honed my skills in programming, design patterns, and agile methodologies, which have been instrumental in my professional achievements and continuous growth as a software engineer.</p>
                    <h4 className='py-2 mt-6 flex  text-xl '>
                        diploma computer engineering
                    </h4>
                    <p className='flex text-center text-sm py-2'>nuhu bammalli poly . september 2021</p>
                    <p className='text-centre mt-6 text-sm'>I completed a National Diploma in Education at Nuhu Bamailli Polytechnics in Zaria. This program equipped me with valuable skills in instructional design and educational technology, which have contributed to my ability to communicate complex concepts effectively. The interdisciplinary knowledge gained during this time has enriched my problem-solving abilities and provided a unique perspective on software development and user-centric design.</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio