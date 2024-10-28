import { IonIcon } from '@ionic/react';
import { logoReact, phonePortraitOutline } from 'ionicons/icons';
import Hand from '../assets/hand.png'

export default function Expertise() {
  return (
    <div className='flex flex-col item-center justify-center flex-wrap py-12 px-24'>
      <h2 className='text-whiteText mb-8 font-mark-pro-bold font-black experties-title'> Expertise</h2>
      <div className=' flex justify-center w-9/12 self-center projectCard p-12'>
        <div className=' flex flex-col justify-cneter items-center p-4'>
          <div className='flex items-center justify-center gap-3'>
            <IonIcon icon={logoReact} style={{ color: 'white', fontSize: '40px' }} />
            <div>
              <h3 className='text-whiteText text-2xl uppercase'>Frontend Development</h3>
              <h3 className='text-whiteText text-2xl'>React, Next.js</h3>
            </div>
          </div>
          <div className='flex p-8'>
            <p className='text-whiteText'>Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
          </div>
        </div>
        <div className='text-whiteText p-4'>
          <div className='flex justify-center items-center gap-3'>
            <IonIcon icon={phonePortraitOutline} style={{ color: 'white', fontSize: '40px' }} />
            <div>
              <h3 className='text-whiteText text-2xl uppercase'>Mobile App Development</h3>
              <h3 className='text-whiteText text-2xl'>React Native</h3>
            </div>
          </div>
          <div className='flex p-8'>
            <p className='text-whiteText'>
              Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
