import Front from '../assets/front.png'
import Mobile from '../assets/mobile.png'
import {Link} from 'react-router-dom'

export default function Expertise() {
  const Arrow = ({ className }) => {
    return <div className={`transition-all duration-500 ease-in-out ${className}`}>
      <svg data-v-21a5ab71="" width="20" height="12" viewBox="0 0 18 17" fill="none" class="icon-svg | w-[1.8rem] h-auto"><path data-v-21a5ab71="" d="M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426" class="stroke-current"></path><path data-v-21a5ab71="" d="M13.3857 4.39875L4.90039 12.884" class="stroke-current"></path></svg>
    </div>
  }
  return (
    <div className='flex relative flex-col item-center justify-center flex-wrap py-12 px-40' style={{ perspective: '1000px' }}>
      {/* <h2 after="Expertise" className='text-whiteText mb-8 font-black experties-title after:content-[attr(after)]'> Expertise</h2> */}
      <div className='flex flex-col relative'>
        <div className='flex justify-evenly gap-5 h-[36rem] self-end relative' style={{ perspective: 1000 }}>
          <div className='h-full color-circle flex justify-center purple-circle relative after:h-80 after:w-44'>
            <img src={Front} className='h-[60%] object-contain relative z-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3' />
            {/* <div className='w-1/2 h-72 absolute bg-white border border-gray-600 rounded-3xl bottom-36 left-1/3 white-sub'></div> */}
          </div>
          <div className=' w-2/5 rounded-3xl p-3 mt-6'>
            <span className="text-[#6b47e3] font-safiro-reg">React.js, Next.js</span> 
            <h3 className=' text-2xl uppercase leading-relaxed font-safiro-reg'>Frontend Development</h3>
              <p className='my-5 text-lg'>Over 4 years of development experience in React and Next.js frameworks.</p>
            <Link to='/projects' className='cursor-pointer overflow-hidden relative group border w-28 h-8 border-gray-500 flex items-center rounded-xl'>
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
        <div className='lg:flex flex-row-reverse justify-between h-[36rem] relative' style={{perspective:1000}}>
          <div className='md:h-[85%] lg:max-w-[55%] color-circle green-circle flex justify-center relative after:w-52 after:h-1/2 after:rounded-tl-3xl '>
            <img src={Mobile} className='object-contain relative z-10 transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3' />
          </div>
          <div className='rounded-3xl w-2/5 p-4 mt-6'>
            <span className="text-[#09bc8a] font-safiro-reg ">React Native,</span> 
            <h3 className='text-2xl uppercase leading-relaxed font-safiro-reg'>Mobile App Development</h3>
            <p className='my-5 text-lg'>
                Skilled in developing hybrid mobile apps and cross-platform solutions using React Native framework.
            </p>
            <Link to='/projects' className='cursor-pointer overflow-hidden relative group border w-28 h-8 border-gray-500 flex items-center rounded-xl'>
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
