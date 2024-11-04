
import mobileIcon from '../assets/mobileIcon.png'

export default function Expertise() {
  return (
    <div className='flex relative flex-col item-center justify-center flex-wrap py-12 px-24' style={{ perspective: '1000px' }}>
      <h2 after="Expertise" className='text-whiteText mb-8 font-mark-pro-bold font-black experties-title after:content-[attr(after)]'> Expertise</h2>
      <div className='flex border justify-center w-10/12 self-center box p-6 relative'>
        <div className=' flex flex-col justify-cneter items-center p-4'>
          <div className='flex items-center justify-center gap-2'>
            <div>
              <h3 className='text-whiteText text-3xl uppercase font-mark-pro-bold leading-relaxed'>Frontend Development</h3>
              <h3 className='text-whiteText text-3xl font-din-condensed mt-2 text-[#7D7BFF]'>React, Next.js</h3>
            </div>
          </div>
          <div className='flex p-4'>
            <p className='text-whiteText leading-loose text-lg'>Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
          </div>
        </div>
        <div className='text-whiteText p-4'>
          <div className='flex justify-center items-center gap-2'>
            <img src={mobileIcon} alt='mobile icon' className='w-28' />
            <div>
              <h3 className='text-whiteText text-3xl uppercase font-mark-pro-bold leading-relaxed'>Mobile App Development</h3>
              <h3 className='text-whiteText text-3xl font-din-condensed mt-2'>React Native</h3>
            </div>
          </div>
          <div className='flex p-4'>
            <p className='text-whiteText leading-loose text-lg'>
              Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.
            </p>
          </div>
        </div>
        <div className="absolute bottom-[30%] left-[20%] w-[35px] h-[40px] bg-[#F8F4AD] border border-[#2D2D2D] plant">
          {/* Leaves */}
          <div className="absolute w-[10px] h-[35px] bg-green-500 border border-gray-800 animate-waving z-[-2] leaf1"></div>
          <div className="absolute w-[10px] h-[45px] bg-green-500 border border-gray-800 animate-waving z-[-3] leaf2"></div>
          <div className="absolute w-[10px] h-[25px] bg-green-500 border border-gray-800 animate-waving z-[-2] leaf3"></div>
        </div>
        <div className='cup left-[72%] w-[25px] h-[30px] bg-[#3D8AB6] absolute bottom-[32.3%] border border-[#2D2D2D]'>
          <div className='tea left-[4px] top-[7px] w-[7px] h-[7px] bg-[#EBEBEB] absolute'></div>
          <div className='steam left-[25%] top-[-2px] w-1 h-[10px] bg-[#adadad] absolute z-[-1] '></div>
        </div>

      </div>
    </div>
  )
}
