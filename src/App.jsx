import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import LocomotiveScroll from 'locomotive-scroll';
import {BrowserRouter as Router,Routes,Route}from "react"

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
   <div className='w-full min-h-screen bg-slate-300'>
    
    
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Services/>
    <ContactUs/>
    </div>
  )
}

export default App
