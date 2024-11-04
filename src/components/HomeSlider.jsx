
import Cube from './Cube'
import Mahsa from '../assets/mahsa.jpeg'
import Arrow from '../assets/arrow.png'

export default function HomeSlider() {
  return (
    <div className='h-screen homeSlider flex relative items-center'>
      <Cube />
      <div className='flex relative flex-col px-40 w-fit z-10'>
        <h1 after="hello there, I'm mahsa" className='text-whiteText font-mark-pro-black  leading-loose tracking-wide experties-title uppercase after:content-[attr(after)]'> hello there, I'm mahsa</h1>
        <div className=' w-fit absolute right-28 rotate-[15deg]'>
          <svg viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
            <path id="circlePath" fill="none" stroke-width="4" d="
                            M 10, 50
                            a 40,40 0 1,1 80,0
                            a 40,40 0 1,1 -80,0
                            " />
            <text id="text" font-family="monospace" font-size="16" fill="white">
              <textPath id="textPath" href="#circlePath">creative Developer</textPath>
            </text>
          </svg>
        </div>
        <h2 className='flex-1 text-whiteText text-4xl leading-relaxed tracking-wide my-8 tracking-[0.3rem] font-black relative'> I am a Front-end and App developer.</h2>
        <div className='personal-img h-0 self-end relative after:w-full after:h-72 after:top-0 after:-right-2/3'>
          <div className='w-52 h-72 bg-gray-100 rounded-2xl flex flex-col justify-between p-4'>
            <img src={Arrow} className='absolute object-contain w-16 -left-1/2 rotate-[100deg]' />
            <div className=' w-44 h-48 rounded-2xl overflow-hidden '>
              <img src={Mahsa} alt='personal picture' className='w-44 h-52 object-center object-cover' />
            </div>
            <p className='flex-1 text-gray-600 flex justify-center items-center font-black'>&#60;This is me! /&#62;</p>
          </div>
        </div>
      </div>
    </div>
  )
}
