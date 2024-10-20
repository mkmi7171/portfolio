import React from 'react'
import Lottie from 'react-lottie'
import MobileApp from '../assets/rotational.json'

export default function MyWork() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: MobileApp,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='flex justify-space'>
            <div className='flex-1 self-center'>
                <h3 className='text-whiteText text-7xl'>My Work</h3>
                <p className='text-3xl text-whiteText'>Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
                    Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualiza</p>
            </div>
            <div className='flex-1'>
                <p className=' text-whiteText text-2xl'>featured Project</p>
                <Lottie
                    options={defaultOptions}
                    style={{ width: '100%' }}
                />

            </div>
        </div>
    )
}
