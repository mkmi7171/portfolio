import { IonIcon } from '@ionic/react';
import { logoReact, phonePortraitOutline } from 'ionicons/icons';
import HtmlCode from '../assets/code.png'

export default function Expertise() {
  return (
    <div className='flex flex-col item-center justify-center flex-wrap py-12 px-24'>
      <h2 className='text-whiteText text-7xl self-center mb-8'> Expertise</h2>
      <div className=' flex justify-center w-9/12 self-center'>
        <div className='border flex flex-col justify-cneter items-center p-4'>
          <div className='flex items-center justify-center gap-3'>
            <IonIcon icon={logoReact} style={{ color: 'white', fontSize: '40px' }} />
            <div>
              <h3 className='text-whiteText text-2xl before:w-full before:h-2 before:bg-[#955D33] before:absolute before:rounded relative z-10 before:bottom-0 before:opacity-70 before:left-0 before:z-0 uppercase'>Frontend Development</h3>
              <h3 className='text-whiteText text-2xl'>React, Next.js</h3>
            </div>
          </div>
          <div className='flex p-8 gap-3'>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-sm text-gray-500 opacity-60'>&lt;h3&gt;</span>
              <div className='h-4/6 w-px bg-gray-500 opacity-60'></div>
              <span className='text-sm text-gray-500 opacity-60'>&lt;/h3&gt;</span>
            </div>
            <p className='text-whiteText'>Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
          </div>
        </div>
        <div className='border text-whiteText p-4'>
          <div className='flex justify-center items-center gap-3'>
            <IonIcon icon={phonePortraitOutline} style={{ color: 'white', fontSize: '40px' }} />
            <div>
              <h3 className='text-whiteText text-2xl before:w-full before:h-2 before:bg-[#202E3E] before:rounded before:absolute relative z-10 before:bottom-0 before:opacity-70 before:left-0 before:z-0 uppercase'>Mobile App Development</h3>
              <h3 className='text-whiteText text-2xl'>React Native</h3>
            </div>
          </div>
          <div className='flex p-8 gap-3'>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-sm text-gray-500 opacity-60'>&lt;h3&gt;</span>
              <div className='h-4/6 w-px bg-gray-500 opacity-60'></div>
              <span className='text-sm text-gray-500 opacity-60'>&lt;/h3&gt;</span>
            </div>
            <p className='text-whiteText'>
              Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.
            </p>
          </div>
        </div>
      </div>
      <div className=' overflow-hidden flex justify-center'>
        <img src={HtmlCode} alt="Description" className='opacity-20 w-3/6 -mt-20' />
      </div>
    </div>
  )
}
