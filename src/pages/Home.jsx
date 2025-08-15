import React from 'react'
import HomeSlider from '../components/HomeSlider'
import Expertise from '../components/Expertise'
import Contact from '../components/Contact'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='home'>
      <HomeSlider />
      <div className='rest'>
        <div className='stripes'>
          <Expertise />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  )
}
