import Front from '../assets/front.png'
import Mobile from '../assets/mobile.png'

export default function Expertise() {
  return (
    <div className='flex relative flex-col item-center justify-center flex-wrap py-12 px-40' style={{ perspective: '1000px' }}>
      <h2 after="Expertise" className='text-whiteText mb-8 font-black experties-title after:content-[attr(after)]'> Expertise</h2>
      <div className='flex flex-col relative'>
        <div className='flex justify-evenly gap-5 h-[36rem] items-end self-end relative' style={{ perspective: 1000 }}>
          <div className='h-full color-circle flex justify-center purple-circle relative after:h-96 after:rotate-[35deg]'>
            <img src={Front} className='h-[60%] object-contain relative z-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3' />
            {/* <div className='w-1/2 h-72 absolute bg-white border border-gray-600 rounded-3xl bottom-36 left-1/3 white-sub'></div> */}
          </div>
          <div className=' w-2/5 rounded-3xl p-3 border self-center'>
            <span className="text-[#6b47e3] font-black">React.js,</span> <span className='font-black text-[#6b47e3]'>Next.js</span>
            <h3 className=' text-2xl uppercase leading-relaxed font-bold'>Frontend Development</h3>
            <div className='flex p-4'>
              <p className=' leading-loose text-lg'>Over 4 years of development experience in React and Next.js frameworks.</p>

            </div>
          </div>

        </div>
        <div className='lg:flex flex-row-reverse justify-between items-end h-[36rem] relative' style={{perspective:1000}}>
          <div className='md:h-[85%] lg:max-w-[55%] color-circle green-circle flex justify-center relative after:w-52 after:h-1/2 after:rounded-tl-3xl '>
            <img src={Mobile} className='object-contain relative z-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-3' />
            {/* <div className='w-36 h-72 absolute bg-white border border-gray-600 rounded-3xl bottom-36 left-[45%] rotate-[22deg]'></div> */}
          </div>
          <div className='self-center rounded-3xl w-2/5 p-4'>
            <span className="text-[#09bc8a] font-black">React Native,</span> 
            <h3 className='text-2xl uppercase leading-relaxed font-bold'>Mobile App Development</h3>
              <p className='leading-loose text-lg'>
                Skilled in developing hybrid mobile apps and cross-platform solutions using React Native framework.
              </p>
          </div>
        </div>

      </div>
    </div>
  )
}
