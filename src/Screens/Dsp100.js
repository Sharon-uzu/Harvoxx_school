import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import How from '../Components/How'
import Faq100 from '../Components/Faq100'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'


const Dsp100 = () => {
  return (
    <div>
        <Header/>
        <Hero title='Building The Next Generation Of Female Techies' text='Join millions of other ladies around the world breaking biases with their Tech Skills' btn='Join next cohort' link='/'/>
        <How title='About DSP-100' text='The Digital Skill Project 100 (DSP-100) is an impactful initiative under the umbrella of Harvoxx Tech Hub, specially designed to empower and uplift young female talents in Rivers State, Nigeria. Our mission with DSP-100 is to provide dedicated training, support, and mentorship to 100 promising young women, equipping them with essential digital skills and entrepreneurial opportunities. DSP-100 is more than just a training program; it is a movement to empower and elevate young women in Rivers State. We recognize the tremendous potential of our female youth, and we are committed to creating an inclusive and enabling environment for them to thrive in the technology sector.'/>
        <Faq100/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Dsp100