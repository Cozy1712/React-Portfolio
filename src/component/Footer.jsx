import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {SlSocialTwitter} from 'react-icons/sl'
import {RxInstagramLogo} from 'react-icons/rx'
import {BiMailSend} from 'react-icons/bi'
// import {IoChevronUpCircleSharp} from 'react-icons/io5'
// import { Link } from 'react-scroll'

const Footer = () => {
    const links =[
        {
            id: 1,
            child: (
            <>
            <FaGithub size={20}/>
            </>
            ),
            href: 'https://github.com/Cozy1712',
            style: 'px-3',
        },
        {
            id: 2,
            child: (
            <>
            <SlSocialTwitter size={20}/>
            </>
            ),
            href: 'https://twitter.com/@Cozy1712',
            style: 'px-3',
        },
        {
            id: 3,
            child: (
            <>
            <RxInstagramLogo size={20}/>
            </>
            ),
            href: 'https://instagram.com/Cozy1712',
            style: 'px-3',
        },
        {
            id: 4,
            child: (
            <>
            <BiMailSend size={20}/>
            </>
            ),
            href: 'mailto:foo@gamail.com',
            style: 'px-3',
        },
    ]
  return (<div className='bg-zinc-800 w-full '>

    <div className='justify-centre text-center text-gray-400 text-xs '>
        <div>
            {/* <svg className=' text-white cursor-pointer justify-center text-center'>
                    <Link className='justify-center items-center text-center'
                    to='home' smooth duration={500}>
                        <IoChevronUpCircleSharp size={40}/>
                    </Link> 
             </svg> */}

            <div className=' text-white flex justify-center'>
                <ul className='flex'>
                    {links.map(({id,child,href,style}) =>(
                        <li key={id} className={'hover:text-amber-600 '+ style}>
                            <a href={href} className="px-2">
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <p>© copyright 2023 cozy</p>
        </div>
    </div>
  </div>
  )
}

export default Footer