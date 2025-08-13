import Front from '../assets/front.png'
import Mobile from '../assets/mobile.png'
import { Link } from 'react-router-dom'
import { Arrow } from './Arrow'
import { useDarkMode } from './DarkModeContext'

export default function Expertise() {
  const {isDarkMode} = useDarkMode()
  return (
    <div className='flex relative flex-col item-center justify-center flex-wrap px-2 py-12 xl:px-32' style={{ perspective: '1000px' }}>
      <div className='flex flex-col relative gap-24'>
        <div className='w-full flex flex-col md:flex-row md:justify-between lg:justify-evenly items-center gap-12 md:gap-5 relative' style={{ perspective: 1000 }}>
          <div className='w-[310px] sm:w-[380px] relative color-circle flex justify-center purple-circle after:h-[14.5rem] after:w-32 sm:after:h-80 sm:after:w-44'>
            <img src={Front} className='w-full object-contain relative z-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3' />
          </div>
          <div className='sm:w-10/12 md:w-[43%] lg:w-2/5 xl:w-6/12 rounded-3xl px-10 md:px-0 lg:px-4 pt-6'>
            <span className="text-[#6b47e3] font-safiro-reg">React.js, Next.js</span> 
            <h3 className='text-xl sm:text-2xl uppercase leading-relaxed font-safiro-reg'>Frontend Development</h3>
            <p className='my-5 text-base sm:text-lg'>I design and build responsive, user friendly, and high performance web apps using modern technologies such as React.js, Next.js, Node.js, and TypeScript. My focus is on writing clean, reusable, and scalable code. I ensure accessibility, performance optimization, cross-browser compatibility, and implement best practices for data safety and security in every project.</p>
            <Link to='/projects' className={`cursor-pointer overflow-hidden relative group border w-28 h-8 ${isDarkMode ? 'border-gray-100' : 'border-gray-500'} flex items-center rounded-xl`}>
              <div className='w-28 h-6 relative overflow-hidden px-2 py-1'>
                <div className="flex items-center">
                  <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-500 ease-in-out group-hover:opacity-0'>
                    PROJECTS
                  </p>
                  <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                </div>
                <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                  PROJECTS
                </p>
                <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
              </div>
            </Link>
          </div>

        </div>
        <div className='w-full flex flex-col md:flex-row-reverse md:justify-evenly gap-5 relative items-center md:items-start' style={{perspective:1000}}>
          <div className='w-[300px] sm:w-[380px] color-circle green-circle flex justify-center relative after:w-44 sm:after:w-52 after:h-1/2 after:rounded-tl-3xl '>
            <img src={Mobile} className='w-full object-contain relative z-10 transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3' />
          </div>
          <div className='rounded-3xl sm:w-10/12 md:w-[43%] lg:w-2/5 xl:w-6/12 px-10 md:px-0 lg:px-4 pt-10'>
            <span className="text-[#09bc8a] font-safiro-reg ">React Native,</span> 
            <h3 className='text-xl sm:text-2xl uppercase leading-relaxed font-safiro-reg'>Mobile App Development</h3>
            <p className='my-5 text-base sm:text-lg'>
            I develop high-performance mobile applications using React Native and TypeScript, delivering smooth, consistent experiences on both iOS and Android. I focus on clean architecture, reusable components, and optimized performance. With experience in implementing secure authentication, encrypted data storage, and best practices for data safety, I ensure user trust and application reliability.
            </p>
            <Link to='/projects' className={`cursor-pointer overflow-hidden relative group border w-28 h-8 ${isDarkMode ? 'border-gray-100' : 'border-gray-500'} flex items-center rounded-xl`}>
              <div className='w-28 h-6 relative overflow-hidden px-2 py-1'>
                <div className="flex items-center">
                  <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-500 ease-in-out group-hover:opacity-0'>
                    PROJECTS
                  </p>
                  <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                </div>
                <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                  PROJECTS
                </p>
                <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
