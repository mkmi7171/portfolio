
import Email from '../assets/emailIcon.png'
import Linkedin from '../assets/linkedinIcon.png'
import Github from '../assets/git.png'
import { sparklesOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Ui from '../assets/ui.png'
import Back from '../assets/back.png'

export default function Contact() {
    return (
        <div>
            <div className='flex gap-4'>
                <div className='flex-[1.05] px-24 flex flex-col'>
                    <p className='text-3xl leading-loose'>Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, send me an  email<span>
                        <a>
                            <img src={Email} alt='email icon' className='inline w-14 mx-2' />
                        </a>
                    </span>
                    </p>
                    <h2 className='text-whiteText mt-8 font-mark-pro-bold font-black contact-title'>Have an idea?</h2>
                    <p className='my-8'>Connect with me online.</p>
                    <div className='text-whiteText'>
                        <ul className='flex gap-3 '>
                            <li className='flex items-center'>
                                <img src={Linkedin} alt='Linkedin icon' className='w-10' />
                                <a className='text-xs'>LINKEDIN</a>
                            </li>
                            <li className='flex items-center '>
                                <img src={Github} alt='github icon' className='w-10' />
                                <a className='text-xs'>GITHUB</a>
                            </li>
                            <li className='flex items-center '>
                                <img src={Email} alt='email icon' className='w-10 p-1' />
                                <a className='text-xs'>EMAIL</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex-[0.95]'>
                    <div className='border border-gray-800 p-4 relative rounded-3xl m-4 overflow-hidden relative'>
                        <div className='flex justify-between'>
                            {/* <img src={Ui} alt='ui designer' className='absolute bottom-0 right-0 w-44' /> */}
                        </div>
                        <blockquote className='my-4 leading-loose'>Mahsa is an incredibly talented and dedicated mobile app developer who consistently delivers high-quality work. Her technical expertise is top-notch, particularly in iOS and Android development, and she has a great ability to translate complex requirements into intuitive and user-friendly apps.
                        </blockquote>
                        <span className='font-bold block'>- Behdad Montazerin </span>
                        <span className='font-din-condensed'>Product Designer</span>
                    </div>
                    <div className='border border-gray-800 p-4 rounded-3xl m-4 overflow-hidden relative'>
                        <div className='flex justify-between'>
                            {/* <img src={Back} alt='backend' className='absolute bottom-0 right-0 w-44' /> */}
                        </div>
                        <blockquote className='my-4 leading-loose'>
                            Mrs. Mahsa Karami is one of the most delightful people I had the pleasure of working for in my career. Not only did she have a unique ability to keep our team organized and on schedule, but her constant communication helped lift our spirits in challenging situations.
                        </blockquote>
                        <span className='font-bold block'>- Seyed Amirreza Ardebili</span>
                        <span className='font-din-condensed'>Backend Developer</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
