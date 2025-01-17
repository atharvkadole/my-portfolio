import { useState } from 'react'
import './App.css'
import SimpleBottomNavigation from './navigation'
import Hero from './hero'
import TechStack from './techstack'
import ProjectsSection from './prj'
import Contact from './contact'
import Fade from '@mui/material/Fade';
import { useEffect } from 'react';

function App() {
  // const [isLoaded, setIsLoaded] = useState(false);
  
  //   useEffect(() => {
  //     setIsLoaded(true);
  //   }, []);

  return (
    <>
      {/* <Fade in={isLoaded} timeout={1000}> */}
      <Hero />
      <TechStack />
      <SimpleBottomNavigation />
      <ProjectsSection />
      <Contact />
      {/* </Fade> */}
    </>
  )
}

export default App
