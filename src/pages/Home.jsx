import React from 'react'
import HomeSlider from '../components/HomeSlider'
import Expertise from '../components/Expertise'
import MyWork from '../components/MyWork'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <Expertise />
      <MyWork />
      <Projects />
    </div>
  )
}
