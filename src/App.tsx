import {stackImgs} from "./components/stackImgs"

import Background from "./components/Background"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Proyects from "./sections/Projects"
import Footer from "./sections/Footer"

import AutoSlider from "./components/AutoSlider/AutoSlider"

import './config/i18n/i18n';

const App = () => {
  return (
    <>
      <Background></Background>
      
      <Navbar></Navbar>
      <Hero></Hero>

      <AutoSlider images={stackImgs} width="100px" height="100px"></AutoSlider>

      <Proyects></Proyects>

      <Footer></Footer>

    </>
  )
}

export default App