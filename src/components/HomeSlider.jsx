import React from 'react'
import Cube from './Cube'
import Lottie from 'react-lottie';
import ArrowDown from '../assets/arrow-down.json'

export default function HomeSlider() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ArrowDown,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className='h-screen homeSlider flex flex-col justify-center items-center'>
      <Cube />
      <div className='flex-1 flex justify-center items-end relative z-100 '>
        <h1 className='text-9xl uppercase text-whiteText'>mahsa karami</h1>
      </div>
      <h2 className='flex-1 text-whiteText uppercase tracking-wide relative'>frontend developer & app developer</h2>
      <div>
        <Lottie
          options={defaultOptions}
        />
      </div>
    </div>
  )
}
