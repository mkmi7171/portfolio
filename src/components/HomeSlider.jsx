import React, { useEffect, useState } from 'react';
import { calcLength, motion, px } from 'framer-motion';
import Cube from './Cube';
import Mahsa from '../assets/mahsa.jpeg';

export default function HomeSlider() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100); // Adjust delay if needed
  }, []);

  const Arrow = () => {
    return (
      <div className="absolute top-1 right-1 group-hover:">
        <svg width="20" height="12" viewBox="0 0 18 17" fill="none" className="icon-svg | w-[1.8rem] h-auto">
          <path d="M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426" className="stroke-current"></path>
          <path d="M13.3857 4.39875L4.90039 12.884" className="stroke-current"></path>
        </svg>
      </div>
    );
  };


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
    <div className="h-screen homeSlider flex flex-col justify-evenly relative items-center">
      <div className="flex px-24 justify-between items-center w-fit z-10">
        <div className="relative">
          <div className="flex items-center w-1/2">
              <motion.h1
              className="text-[6rem] font-[500] uppercase leading-[0.9]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Animating "About" letter-by-letter */}
                {Array.from("About ").map((char, index) => (
                  <motion.div
                    key={index}
                    variants={letterVariants}
                    className="overflow-hidden char border-black"
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
            <div className="w-fit mr-8">
              <svg viewBox="0 0 115 115" xmlns="http://www.w3.org/2000/svg">
                <path id="circlePath" fill="none" strokeWidth="4" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                <text fontFamily="monospace" fontSize="16" fill="black">
                  <textPath href="#circlePath">creative Developer</textPath>
                </text>
              </svg>
            </div>
          </div>
          <p className='flex-1 w-1/2 leading-relaxed tracking-wide my-8 tracking-[0.3rem] relative'> I am a creative front end and mobile application developer. I specialize in creating intuitive and scalabe websites and applications.</p>
        </div>
        <div className='flex w-2/5 h-full gap-8'>
          <h2 className='font-bold text-2xl'>Collabs</h2>
          <div className='text flex flex-col gap-4'>
            <div className='gap-3 flex flex-col'>
              <span className='font-bold'>Mehrayan</span>
              <span className='text-sm'>Frontend and mobile App developer</span>
            </div>
            <div className='gap-3 flex flex-col'>
              <span className='font-bold'>Aran Agency</span>
              <span>React developer</span>
            </div>
          </div>
        </div>
      </div>
      <div className='personal-img** w-full flex justify-center relative after:w-64 after:h-72 after:top-0 after:right-0 after:absolute'>
        <motion.div
              className="flex w-8/12 justify-between relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
          <motion.div
            className={`w-48 h-48 flex justify-between p-4 items-center flex-col rounded-full border border-gray-400 uppercase ${isLoaded? 'left-0' : 'left-full -translate-x-48'}`}
            style={{
              transition: 'all 1.1s ease 0.5s',
              position: isLoaded ? 'relative' : 'absolute',
              // left:isLoaded? '0' : '90%'
            }}
          >
            <span className='text-sm'>FrontEnd</span>
            <span className='text-2xl font-black'>2020</span>
            <span className='text-sm'>developer</span>
          </motion.div>
          <motion.div
            className={`w-48 h-48 flex justify-between p-4 items-center flex-col rounded-full border border-gray-400 uppercase ${isLoaded? 'left-0' : 'left-1/2 -translate-x-24'}`}
            style={{
              marginTop: isLoaded ? '-6rem' : '0',
              position: isLoaded ? 'relative' : 'absolute',
              transition: 'all 1.1s ease 0.7s', 
              left:isLoaded? '0' : '50%'
            }}
          >
            <span className='text-sm'>mobile App</span>
            <span className='text-2xl font-black'>2022</span>
            <span className='text-sm'>developer</span>
          </motion.div>
          <img src={Mahsa} alt='personal picture' className=' rounded-full overflow-hidden w-48 h-48 object-center object-cover z-10' />
        </motion.div>

      </div>
      <ul className='border absolute bottom-0 left-3 flex flex-col  gap-3 my-24'>
        <li className='overflow-hidden relative group border w-24 h-6 border-gray-500 px-2 py-1 rounded-3xl'>
          <div className="flex items-center">
            <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
              LINKEDIN
            </p>
            <Arrow />
          </div>
          <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
            LINKEDIN
          </p>
        </li>

        <li className='overflow-hidden relative group border w-24 h-6 border-gray-500 px-2 py-1 rounded-3xl'>
          <div className="flex items-center">
            <p className='absolute top-1 text-xs group-hover:absolute  group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
              GITHUB
            </p>
            <Arrow />
          </div>
          <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
            GITHUB
          </p>
        </li>
        <li className='overflow-hidden relative group border w-24 h-6 border-gray-500 px-2 py-1 rounded-3xl'>

          <div className="flex items-center">
            <p className='absolute top-1 text-xs group-hover:absolute  group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0'>
              EMAIL
            </p>
            <Arrow />
          </div>
          <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100' >
            EMAIL
          </p>
        </li>
      </ul>
    </div>
  )
}
