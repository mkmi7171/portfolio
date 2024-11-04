import React, { useState } from 'react'
import Linkedin from '../assets/linkedinIcon.png'
import Github from '../assets/git.png'
import Email from '../assets/emailIcon.png'
import { projects } from './ProjectsArray'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <div className='relative'>
            <header className=' w-full h-16 absolute flex justify-center items-center z-10 top-10'>
                <nav className='flex w-2/3 h-full items-center px-4 justify-between'>
                    <div className='rotating-text'>
                        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                            <path id="circlePath" fill="none" stroke-width="4" d="
                            M 10, 50
                            a 40,40 0 1,1 80,0
                            a 40,40 0 1,1 -80,0
                            " />
                            <text id="text" font-family="monospace" font-size="14" fill="white">
                                <textPath id="textPath" href="#circlePath">Mahsa Karami Mahsa karami</textPath>
                            </text>
                        </svg>
                    </div>
                    {/* <button className=" relative" onClick={() => setIsOpen(!isOpen)}>
                        <div className="w-24 h-12 relative flex justify-center items-center bg-[#F3D17B] border text-whiteText"> Menu</div>
                    </button> */}

                </nav>
            </header>
            {/* <div
                className={`fixed top-0 left-0 w-full h-full bg-black shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-500 ease-in-out z-30`}
                style={{ paddingTop: '4rem' }}
            >
                <div className="p-4">
                    <div className=' w-full'>
                        <p className='text-whiteText'>
                            lets have a chat!
                        </p>
                        <div className='text-whiteText'>
                            <ul className='flex gap-3 '>
                                <li className='flex items-center'>
                                    <img src={Linkedin} alt='Linkedin icon' className='w-14' />
                                    <a className='font-mark-pro-bold text-lg'>LD</a>
                                </li>
                                <li className='flex items-center'>
                                    <img src={Github} alt='github icon' className='w-14' />
                                    <a className='font-mark-pro-bold text-lg'>GH</a>
                                </li>
                                <li className='flex items-center'>
                                    <img src={Email} alt='email icon' className='w-14 p-1' />
                                    <a className='font-mark-pro-bold text-lg'>Em</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <h4 className='text-whiteText my-12 font-din-condensed tracking-widest text-lg'>Featured Projects</h4>
                        <div className='flex w-8/12 gap-10'>
                            {projects.filter((_, index) => [0, 1, 5].includes(index)).map((project, index) => (
                                <div key={index} className={`justify-center h-64 flex-1 overflow-hidden rounded-3xl flex items-center transition-transform duration-700`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transform: hoveredIndex === index ? 'scale(1.1)' : hoveredIndex !== null ? 'scale(0.9)' : 'scale(1)',
                                    }}>
                                    <div className='w-full h-full bg-gray-900 flex items-center p-4 bg-opacity-40'>
                                        <p className='text-whiteText text-3xl font-mark-pro-bold'>{project.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
