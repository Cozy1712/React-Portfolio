import React from 'react'
import {MdMailOutline} from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import {SlSocialTwitter,SlPhone} from 'react-icons/sl'
import {CiLocationOn} from 'react-icons/ci'
import {RxInstagramLogo} from 'react-icons/rx'

const Contact = () => {
    const icons = [
        {
            id: 1,
            child: (
                <>
                <SlPhone size={25}/>
                <p className='px-2'>+234 913-132-3845</p>
                </>
            ),
            href: 'mailto:foo@gamail.com',
        },
        {
            id: 2,
            child: (
                <>
                <MdMailOutline size={25}/>
                <p className='px-2'>kolawolekabiru@gmail.com</p>
                </>
            ),
            href: 'mailto:foo@gamail.com',
        },
        {
            id: 3,
            child: (
                <>
                <CiLocationOn size={25}/>
                <p className='px-2'>Abuja, Nigeria</p>
                </>
            ),
            href: 'mailto:foo@gamail.com',
        },
        {
            id: 4,
            child: (
                <>
                <RxInstagramLogo size={25}/>
                <p className='px-2'>kolaakangbe</p>
                </>
            ),
            href: 'mailto:foo@gamail.com',
        },
        {
            id: 5,
            child: (
                <>
                <FaGithub size={25}/>
                <p className='px-2'>@Cozy1712</p>
                </>
            ),
            href: 'mailto:foo@gamail.com',
        },
    ]
  return (
    <div name='contact' className='bg-zinc-800 w-full h-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='flex py-6 px-4 sm:justify-center  sm:mr-80 '>
                <p className='px-4 mt-2 text-gray-300'> <MdMailOutline size={30}/></p>
                <p className='text-3xl font-semibold border-b-2 inline border-gray-50 text-gray-100'>Get in touch</p>
            </div>

            <div>
                <div className='sm:grid sm:grid-flow-col justify-center items-center sm:ml-14'>
                    <form action="" className='flex flex-col py-4 px-8 w-auto sm:w-96 content'>
                        <input type="text" placeholder='Name' className='px-2 rounded-md'/>
                        <input type="text" placeholder='Email' className='my-4 px-2 rounded-md' />
                        <textarea name="msg" id="message" cols="10" rows="5" placeholder='Message'
                        className='px-2 rounded-md '
                        ></textarea>
                        <div className='text-gray-300 border-2 rounded-full bg-gray-600 w-fit h-10 px-2 mt-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-700 border-sky-600'
                        >
                            <button className='text-center py-1 felx'>Send Message</button>
                        </div>
                    </form>
                    <div className='px-8 mb-10  text-gray-200'>
                        <p>Here you can get in touch with me</p>
                        <div>
                            {icons.map(({id,child,herf,style}) =>(
                                <li key={id} className={'list-none my-2 py-0.5 cursor-pointer'}>
                                <a href={herf} className='flex'>
                                    {child}
                                </a>
                            </li>
                            ))}                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact