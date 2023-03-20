import React from 'react'

const Portfolio = () => {
  return (
    <div name="about"  className=' bg-gray-700 w-full justify-center items-center text-center'>
        <div className=' max-w-screen-lg p-6 mx-auto grid grid-flow-row w-full h-full'>
            <div className='content flex py-2 '>
                <p className='capitalize border-b-2 inline text-2xl mx-auto mt-10 '>education</p>
            </div>
            <div className='text-justify   '>
               <div className=' capitalize item-body flex  flex-col pb-4 py-4 text-gray-300 item-body'>
                    <h4 className=' text-xl flex '>
                        bsc software engineering
                    </h4>
                    <p className='text-center py-2 flex text-sm'>koladiasi university . march 2022</p>
                    <p className='text-justify mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur incidunt cupiditate illum quas eveniet, esse tenetur reprehenderit aperiam! Possimus, sit atque dolor alias aliquam nostrum? Eligendi deleniti tenetur commodi.</p>
                    <h4 className='py-2 mt-6 flex  text-xl '>
                        diploma computer engineering
                    </h4>
                    <p className='flex text-center text-sm py-2'>nuhu bammalli poly . september 2021</p>
                    <p className='text-centre mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur incidunt cupiditate illum quas eveniet, esse tenetur reprehenderit aperiam! Possimus, sit atque dolor alias aliquam nostrum? Eligendi deleniti tenetur commodi.</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio