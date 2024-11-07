import React from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AnimatedCursor from "react-animated-cursor"
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/manrope';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        outerScale={1.5}
        outerAlpha={0.3}
        innerScale={1}
        outerStyle={{
          border: '0.5px solid #fff',
          backgroundColor: 'transparent'
        }}
        innerStyle={{
          backgroundColor: '#fff'
        }}
        clickables={['a', 'button', 'input', 'textarea']}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>

  )
}
