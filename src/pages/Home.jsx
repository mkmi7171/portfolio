import React from 'react'
import HomeSlider from '../components/HomeSlider'
import Expertise from '../components/Expertise'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div >
      <HomeSlider />
      <div className='rest'>
        <div className='stripes'>
          <Expertise />
          <Contact />
        </div>
      </div>
    </div>
  )
}
