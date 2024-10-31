
import Cube from './Cube'
import Linkedin from '../assets/linkedinIcon.png'
import Github from '../assets/git.png'
import Email from '../assets/emailIcon.png'

export default function HomeSlider() {
  return (
    <div className='h-screen homeSlider flex relative items-center'>
      <Cube />
      <div className='flex flex-col z-20 px-24'>
        <h1 className='text-5xl text-whiteText font-mark-pro-black my-10'> bringing <span className='ideas'>ideas</span> to life is my passion.</h1>
        <h2 className='flex-1 text-whiteText text-2xl tracking-wide font-din-condensed tracking-[0.3rem] relative'> I am a Front-end and App developer.</h2>
      </div>
      <div className='text-whiteText absolute bottom-0 right-10'>
        <ul className='flex gap-3 '>
          <li className='flex items-center'>
            <img src={Linkedin} alt='Linkedin icon' className='w-10' />
            <a className='text-xs'>LD</a>
          </li>
          <li className='flex items-center '>
            <img src={Github} alt='github icon' className='w-10' />
            <a className='text-xs'>GH</a>
          </li>
          <li className='flex items-center '>
            <img src={Email} alt='email icon' className='w-10 p-1' />
            <a className='text-xs'>Em</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
