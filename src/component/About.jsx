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
    <div className='bg-slate-600 w-full'>
    
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full '>
            <div className='content flex py-2'>
                <img src={cozy} alt="cozy" className=' mx-auto rounded-3xl w-2/6'/>

                <div className='flex flex-col text-white pb-8  px-10 py-5 item-body'>
                    <p className='text-4xl font-bold capitalize'>about</p>
                    <div>
                        <p className='tezt-xl mt-20' >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime esse at vero non mollitia numquam saepe fuga voluptate consectetur beatae eligendi sequi, aut dolorem aliquid vel? Beatae ea quam amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui ratione, saepe ipsa eos distinctio nemo veritatis mollitia quibusdam tempora possimus fugit sint eveniet enim beatae obcaecati non odio debitis?.
                        </p>
                    </div>
                      <div className='text-white list-none flex fill-gray py-8 px-8'>
                        <ul className='grid grid-cols-2 gap-10  capitalize'>
                        <li className='flex '><FiMap size={20} st />location: abuja</li>
                        <li className='flex '><VscCalendar size={20} />age: 23</li>
                        <li className='flex'><AiTwotoneFlag size={20} />nationality: nigeria</li>
                        <li className='flex'><BsStars size={20} />interests: video-game</li>
                        <li className='flex'><GiGraduateCap size={20} />school: koladiasi university</li>
                        <li className='flex'><HiBuildingOffice size={20} />employment: none</li>
                      
                        </ul>


                      </div>
                </div>
            </div>
        
        </div>
            
    </div>
  )
}

export default About