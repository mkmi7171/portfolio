import React, { useEffect, useState } from 'react';
import { calcLength, motion, px } from 'framer-motion';
import Mahsa from '../assets/mahsa.jpeg';
import Socials from './Socials';
import InteractiveBackground from './InteractiveBackground';

export default function HomeSlider() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100); 
  }, []);

  const customColors = [
   '227, 152, 159',
    '242, 191, 191',
    '#e8e4dc'
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 90,
      },
    },
  };

  return (
    <div className="h-screen flex flex-col justify-evenly relative items-center">
      <InteractiveBackground colors={customColors} />
      <div className="px-8 md:flex md:px-4 lg:px-16 items-center pt-20 md:pt-6 lg:pt-0 w-fit z-10">
        <div className="relative homeSection flex-1">
          <div className="flex items-center w-1/2">
              <motion.h1
              className="text-[3.5rem] md:text-[4.5rem] xl:text-[6rem] font-[500] uppercase leading-[0.9]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {Array.from("About ").map((char, index) => (
                  <motion.div
                    key={index}
                    variants={letterVariants}
                    className="overflow-hidden char"
                    style={{ display: 'inline-block',}}
                  >
                    {char}
                  </motion.div>
                ))}
                <motion.div
                  variants={letterVariants}
                  className="overflow-hidden font-safiro-reg-i char font-[500]"
                  style={{ display: 'inline-block', lineHeight: 0.8 }}
                >
                  Mahsa
                </motion.div>
              </motion.h1>
            <div className="w-fit hidden md:flex mr-8">
              <svg viewBox="0 0 115 115" xmlns="http://www.w3.org/2000/svg">
                <path id="circlePath" fill="none" strokeWidth="4" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                <text fontFamily="monospace" fontSize="16" fill="black">
                  <textPath href="#circlePath">creative Developer</textPath>
                </text>
              </svg>
            </div>
          </div>
          <p className='flex-1 w-2/3 xl:w-1/2 leading-relaxed tracking-wide my-8 tracking-[0.3rem] relative'> I am a creative Front-End and Mobile Application Developer. I specialize in creating intuitive and scalabe websites and applications.</p>
        </div>
        <div className='flex-1 md:flex lg:w-3/4 h-full gap-8 pt-12'>
            <h2 className='font-bold mb-5 md:mb-0 text-2xl font-safiro-reg-i'>Collabs</h2>
          <div className='text flex flex-col gap-4'>
            <div className='gap-3 flex flex-col'>
              <span className='font-black'>Mehrayan <span className='text-xs mx-3'>2022-2024</span></span>
              <span className='text-sm'>Frontend and Mobile App developer</span>
            </div>
            <div className='gap-3 flex flex-col'>
              <span className='font-black'>Aran Agency<span className='text-xs mx-3'>2020-2022</span></span>
              <span className='text-sm'>React developer</span>
            </div>
            <div className='gap-3 flex flex-col'>
              <span className='font-black'>Manzoome Negaran Net<span className='text-xs mx-3'>2018-2020</span></span>
              <span className='text-sm'>Web developer</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:flex flex-row-reverse items-end'>
        <div className='w-full flex justify-center relative after:w-64 after:h-72 after:top-0 after:right-0 after:absolute'>
          <motion.div
            className="flex px-8 w-10/12 lg:w-9/12 xl:w-8/12 justify-end md:justify-between relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className={`hidden md:flex md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 justify-between p-4 items-center flex-col rounded-full border border-gray-400 uppercase ${isLoaded ? 'left-0' : 'left-full -translate-x-48'}`}
              style={{
                transition: 'all 1.1s ease 0.5s',
                position: isLoaded ? 'relative' : 'absolute',
              }}
            >
              <span className='text-xs'>FrontEnd</span>
              <span className='text-4xl font-black number'>2020</span>
              <span className='text-xs'>developer</span>
            </motion.div>
            <motion.div
              className={`hidden md:flex md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 justify-between p-4 items-center flex-col rounded-full border border-gray-400 uppercase ${isLoaded ? 'left-0' : 'left-1/2 -translate-x-24'}`}
              style={{
                marginTop: isLoaded ? '-4rem' : '0',
                position: isLoaded ? 'relative' : 'absolute',
                transition: 'all 1.1s ease 0.7s',
                left: isLoaded ? '0' : '50%'
              }}
            >
              <span className='text-xs'>mobile App</span>
              <span className='text-4xl font-black number'>2022</span>
              <span className='text-xs'>developer</span>
            </motion.div>
            <img src={Mahsa} alt='personal picture' className=' rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 object-center object-cover z-10 -mt-56 md:mt-0 hidden sm:flex' />
          </motion.div>

        </div>
        <Socials ulClass={`flex lg:flex-col gap-3 mt-8 lg:mt-0 px-8`} />
      </div>
    </div>
  )
}
