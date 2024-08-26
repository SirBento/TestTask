import React from 'react'
import './App.css'
import { Navbar,Testimonials,GettingStarted,Footer, SocialMediaLinks, Benefits,ReadyToGrow,UsesCases,Hero } from './components'


function App() {

  return (
    <div >
      <Navbar/>
      <Hero/>
      <GettingStarted/>
      <UsesCases/>
      <Benefits/>
      <Testimonials/>
      <ReadyToGrow/>
      <SocialMediaLinks/>
      <Footer/>
       
    </div>
   
   
  )
}

export default App
