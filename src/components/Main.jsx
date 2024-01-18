import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {  FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import leetcodeIcon from '../assets/leetcode.png'


const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Abhinav SB</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 '>I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer',
                                2000, 
                                'coder',
                                2000,
                                'Tech enthusiast',
                                2000, 
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' ,paddingLeft: '5px'}}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full '>
                        
                        <a href="https://github.com/Code-CrafterX">
                        <FaGithub className='cursor-pointer' size={20}/>
                        </a>
                        <a href="https://www.instagram.com/_abhinav_s_b/">
                        <FaInstagram className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/abhinav-sb-04094a241/">
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://leetcode.com/Code_CrafterX/">
                            <img src={leetcodeIcon} alt="" className='w-[20px]'/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main
