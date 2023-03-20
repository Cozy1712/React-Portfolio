import React from 'react'
import cozy from '../img/cozy.jpg'
import {FiMap} from 'react-icons/fi'
import {VscCalendar} from 'react-icons/vsc'
import {GiGraduateCap} from 'react-icons/gi'
import {AiTwotoneFlag} from 'react-icons/ai'
import { HiBuildingOffice } from "react-icons/hi2";
import {BsStars} from 'react-icons/bs'

const About = () => {
  return (
    <div name="about" className='bg-slate-500 w-full text-gray-300'>
      <div className='max-w-screen-lg p-6 mx-auto grid grid-flow-row w-full h-full'>
        <div  className='content md:flex py-2'>
          <img src={cozy} alt="cozy" className=' mx-auto rounded-3xl w-40 h-40 md:mt-36'/>
          <div className='md:flex md:flex-col text-gray-300 pb-4 px-2 py-4 md:item-body'>
            <div>
              <p className='text-3xl font-semibold border-b-2 inline capitalize'>about me</p>
            </div>

            <div>
              <p className='text-xl mt-20'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
                 quia voluptatem. Ea adipisci, aliquid iste alias maxime quaerat 
                 dolore ullam minus possimus cum qui eaque fuga consequatur esse, vitae numquam.
              </p>
            </div>
            <div className='text-white list-none flex fill-gray py-8'>
              <ul className='grid grid-cols-2 gap-10 md:grid-cols-3  capitalize'>
                <li className='flex '><FiMap size={30} />location: abuja</li>
                <li className='flex '><VscCalendar size={30} />age: 23</li>
                <li className='flex'><AiTwotoneFlag size={30} />nationality: nigeria</li>
                <li className='flex'><BsStars size={40} />interests: video-game, developing-software</li>
                <li className='flex'><GiGraduateCap size={30} />school: koladiasi university</li>
                <li className='flex'><HiBuildingOffice size={30} />employment: none</li>
              </ul>
            </div>
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default About