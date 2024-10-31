import ReactIcon from '../assets/reactIcon.png'
import mobileIcon from '../assets/mobileIcon.png'

export default function Expertise() {
  return (
    <div className='flex flex-col item-center justify-center flex-wrap py-12 px-24'>
      <h2 className='text-whiteText mb-8 font-mark-pro-bold font-black experties-title'> Expertise</h2>
      <div className=' flex justify-center w-9/12 self-center projectCard p-6'>
        <div className=' flex flex-col justify-cneter items-center p-4'>
          <div className='flex items-center justify-center gap-2'>
            <img src={ReactIcon} alt='react icon' className='w-32' />
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
            <img src={mobileIcon} alt='mobile icon' className='w-32' />
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
      </div>
    </div>
  )
}
