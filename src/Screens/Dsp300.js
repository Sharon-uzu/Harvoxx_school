import React,{useEffect} from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import How from '../Components/How'
import Faq300 from '../Components/Faq300'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import Contact from '../Components/Contact'


const Dsp300 = () => {

  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto'; // Enable scrolling

  }, [pathname]);
  return (
    <div>
        <Header/>
        <Hero title='Be A Part Of The Next Tech Force' text='Your passcode to unlocking endless horizons through digital skills.' btn='Enroll for Cohort 4'  type="dsp300"/>
        <How title='About DSP-300 ' text='It is a pioneering initiative under the stewardship of Harvoxx Tech Hub, dedicated to empowering the youth of Rivers State, Nigeria, through comprehensive technology training. It represents a resolute commitment to bridging the digital divide, fostering innovation, and equipping the next generation with the skills needed to thrive in an ever-evolving technological landscape. It is driven by a clear and compelling mission: to nurture and empower the youth of Rivers State by providing them with invaluable digital skills, free of charge. We believe in the transformative power of education, especially in the field of technology, to create a brighter future for the youth of our region. '/>
        <Faq300/>
        {/* <Newsletter/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Dsp300