import React from 'react'
import { Link } from 'react-router-dom'
import vector from '../Images/Vector 4.png'
import ab1 from '../Images/Rectangle 6.png';
import ab2 from '../Images/Component 1.png';
import ab3 from '../Images/Rectangle 7.png';
import vid from '../Images/vid.png'
import hero from '../Images/hero-m.png'
import bg from '../Images/Rectangle 1.png'

const Hero = ({title, text, btn, link}) => {
  return (
    <div>
      <section className='hero-s'>

        <div className='hero-c'>

          <div className='h-l'>
            <h1>{title}</h1>
            <div className="shape">
              <img src={vector} alt="" />
            </div>
            <p>{text}</p>
            <a href={link}><button>{btn}</button></a>

          </div>

          <div className='h-r'>
          {/* <img src={bg}  className='bg'/> */}
          <img src={hero} className='img'/>
          {/* <img src={ab1}  className='ab ab1'/> */}
          <img src={ab2}  className='ab ab2'/>
          {/* <img src={ab3}  className='ab ab3'/> */}

          <div className='ab-cards'>
              <div className="div1">
                <p>Total Students</p>
                <h4>10,000+</h4>
              </div>
              <a href="">
                <div className="div2">
                  <span className='demo'>
                    <img src={vid} />
                  </span>
                  <span>
                    Watch Demo
                  </span>
              </div>
              </a>
          </div>
          </div>

        </div>

        

      </section>
    </div>
  )
}

export default Hero