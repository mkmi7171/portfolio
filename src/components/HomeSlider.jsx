
import Cube from './Cube'
import Mahsa from '../assets/mahsa.jpeg'

export default function HomeSlider() {
  return (
    <div className='h-screen homeSlider flex relative items-center'>
      {/* <Cube /> */}
      <div className='flex relative flex-col px-40 w-fit z-10'>
        <h1 className='text-5xl font-black uppercase'> About mahsa</h1>
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
        <p className='flex-1 leading-relaxed tracking-wide my-8 tracking-[0.3rem] relative w-1/2'> I am a creative front end and mobile application developer. I specialize in creating intuitive and scalabe websites and applications.</p>
        <div className='personal-img h-0 self-end relative after:w-full after:h-72 after:top-0 after:-right-2/3'>
          <div className='w-52 h-72 bg-gray-100 rounded-2xl flex flex-col justify-between p-4'>
            <div className=' w-44 h-48 rounded-2xl overflow-hidden '>
              <img src={Mahsa} alt='personal picture' className='w-44 h-52 object-center object-cover' />
            </div>
            {/* <p className='flex-1 text-gray-600 flex justify-center items-center font-black'>&#60;This is me! /&#62;</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
