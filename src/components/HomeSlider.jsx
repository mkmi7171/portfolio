import React from 'react'
import Cube from './Cube'

export default function HomeSlider() {
  return (
    <div className='h-screen homeSlider flex flex-col justify-center items-center'>
      <Cube />
      <div className='flex-1 flex justify-center items-end relative z-20 '>
        <h1 className='text-7xl uppercase text-whiteText font-black font-mark-pro-bold my-10'>mahsa karami</h1>
      </div>
      <h2 className='flex-1 text-whiteText uppercase text-2xl tracking-wide relative'>frontend developer & app developer</h2>
    </div>
  )
}
