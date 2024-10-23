import React from 'react'
import Home from './pages/Home'
import AnimatedCursor from "react-animated-cursor"

export default function App() {
  return (
    <div className='bg-darkBackground'>
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
      <Home />
    </div>
  )
}
