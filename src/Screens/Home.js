import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Why from '../Components/Why'
import Trial from '../Components/Trial'
import Testimony from '../Components/Testimony'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero title="Unlock opportunities with Digital Skills" text="Cultivating Tommorrow's Tech innovators: We empower you with the skills you need to forge and nurture the career of your dreams." btn='Explore Programmes' link='#program'/>
        <Why/>
        <Trial/>
        <Testimony/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home