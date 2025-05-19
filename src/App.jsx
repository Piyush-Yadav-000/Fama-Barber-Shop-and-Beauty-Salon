import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import HeroSection1 from './components/Herosection1.jsx/Herosection1'
import HeroSection2 from './components/Herosection2/Herosection2'
import HeroSection3 from './components/Herosection3/Herosection3'
import Review from './components/review/Review'
import ServicePrices from './components/Serviceplan/Serviceplan'
import Gallery from './components/Gallery/Gallery'
import BarbersSection from './components/Barbers/Barbers'
import FAQ from './components/FAQ/FAQ'  
import LocationSection from './components/Location/Location'
import ContactForm from './components/Contactfrom/ContactForm'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
    <Navbar/>
      <HeroSection1/>
      <HeroSection2/>
      <HeroSection3/>
      <Review/>
      <ServicePrices/>
      <Gallery/>
      <BarbersSection/>
      <LocationSection/>
      <FAQ/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
