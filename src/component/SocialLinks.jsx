import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {RxInstagramLogo} from 'react-icons/rx'
import {BiMailSend} from 'react-icons/bi'


const SocialLinks = () => {

    const links =[
        {
            id: 1,
            child: (
            <>
            <FaGithub size={30}/>
            </>
            ),
            href: 'https://github.com/Cozy1712',
            style: 'px-3',
        },
        {
            id: 2,
            child: (
            <>
            <AiFillTwitterCircle size={30}/>
            </>
            ),
            href: 'https://twitter.com/@Cozy1712',
            style: 'px-3',
        },
        {
            id: 3,
            child: (
            <>
            <RxInstagramLogo size={30}/>
            </>
            ),
            href: 'https://instagram.com/Cozy1712',
            style: 'px-3',
        },
        {
            id: 4,
            child: (
            <>
            <BiMailSend size={30}/>
            </>
            ),
            href: 'mailto:foo@gamail.com',
            style: 'px-3',
        },
    ]
  return (
    <div>
       <div className=' text-white flex justify-center '>
            <ul className='flex '>
                {links.map(({id,child,href,style}) =>(
                    <li key={id} className={'hover:text-amber-600 '+ style}>
                        <a href={href} className="px-2">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SocialLinks