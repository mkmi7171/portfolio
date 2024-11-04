import React from 'react'
import HomeSlider from '../components/HomeSlider'
import Expertise from '../components/Expertise'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div >
      <HomeSlider />
      <div className='rest'>
        <Expertise />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
