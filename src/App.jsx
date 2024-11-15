import React from 'react'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import AnimatedCursor from "react-animated-cursor"
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/manrope';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={50}
        outerScale={1.5}
        outerAlpha={0.3}
        innerScale={1}
        outerStyle={{
          border: '0.5px solid #ff56a0',
          backgroundColor: 'transparent'
        }}
        innerStyle={{
          backgroundColor: '#ff56a0'
        }}
        clickables={['a', 'button', 'input', 'textarea']}
      /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>

  )
}
