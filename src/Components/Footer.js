import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";



const Footer = () => {
  return (
    <div className='footer'>

        <div className="foot">
            <div className="foot1">
                {/* <img src={logo} alt="" /> */}
                <p>Elzazi complex, Opposite WesHarm petrol station along gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt )</p>
                <div className="sos">
                    <IoLogoInstagram className='f-icon'/>
                    <FaFacebook className='f-icon'/>
                    <AiFillTwitterCircle className='f-icon'/>
                </div>
            </div>

            <div className="foot2">
                <h4>Our Program</h4>
                <li><Link to='/dsp300'>DSP-300</Link></li>
                <li><Link to='/dsp100'>DSP-100</Link></li>
                <li><a href='https://harvoxx.com'>Paid Training</a></li>
            </div>

            <div className="foot2">
                <h4>Call Us</h4>
                <li><a href='tel:09011684637'>+2349011684637</a></li>
                <li><a href='tel:09065308024'>+2349065308024</a></li>
                <li><a href='tel:09030643105'>+2349030643105</a></li>
            </div>

            <div className="foot2">
                <h4>Resources</h4>
                <li><a href='https://harvoxx.com' target='_blank'>Harvoxx(Parent)</a></li>
                <li><a href='https://build.harvoxx.com' target='_blank'>Build with Harvoxx</a></li>
                <li><a href='https://techlauncher.harvoxx.com' target='_blank'>TechLauncher</a></li>
                <li><a href='https://school.harvoxx.com' target='_blank'>Harvoxx Product School</a></li>
                <li><a href='https://hackify.harvoxx.com' target='_blank'>Hackify</a></li>
                <li><a href='#'>Harvoxx School</a></li>
            </div>


        </div>
        
    </div>
  )
}

export default Footer