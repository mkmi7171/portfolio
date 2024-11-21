import { useEffect } from 'react'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import AnimatedCursor from "react-animated-cursor"
import Header from './components/Header'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import ProjectDetail from './pages/ProjectDetail'
import {DarkModeProvider} from './components/DarkModeContext'
import '@fontsource/manrope';

const AnimatedRoutes = () => {
  const location = useLocation();
  

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
};


// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//  useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };
export default function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider> {/* Wrap the app with DarkModeProvider */}
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
        <AnimatePresence mode="wait">
          <AnimatedRoutes />
        </AnimatePresence>
      </DarkModeProvider>
    </BrowserRouter>

  )
}
