import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import vector from '../Images/Vector 4.png'
import ab1 from '../Images/Rectangle 6.png';
import ab2 from '../Images/Component 1.png';
import ab3 from '../Images/Rectangle 7.png';
import vid from '../Images/vid.png'
import hero from '../Images/hero-m.png'
import bg from '../Images/Rectangle 1.png'
import Modal from "react-modal";


const Hero = ({title, text, btn, link, type, noLink}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const openModal2 = () =>{
    setIsOpen(false);
  }

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

            {type === "dsp300" ? <>
                <Link to={noLink} >
                  <button type="button" className='enrollment' 
                  onClick={toggleModal}
                  >{btn}</button>
                  </Link>
                </>
                :
                <>
                <Link 
                // to={props.reg}
                 >
                  </Link>
                  {/* <button type="button" className='enrollment'  onClick={openModal}>{props.btn}</button> */}
                  <Link to='/apply' style={{color:'#fff'}}>
                  <button type='button' className='enrollment' 
                  // onClick={toggleModal}
                  >
                    
                      Enroll for Cohort 3
                      
                      </button>
                      </Link>
                </>
                }


            {/* <a href={link}><button>{btn}</button></a> */}

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

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="two"
        style={{
          overlay: {
            position: "fixed",
            top: "0px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 12000,
            // backgroundColor: "hsl(0, 0%, 0%, .5)",
            backgroundColor: "hsl(0, 0%, 0%, .6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {/* <div className="confirm">
          <h3>Hold on!!!</h3>
          <h4>Before you proceed, kindly note the following:</h4>
          
          <ol>
            <li> You must have a LAPTOP or have access to one.</li>
            <li> It is a 100% PHYSICAL training. Not online.</li>
            <li> Training will hold at least TWICE EVERY WEEK for 4 hours daily.</li>
          </ol>
          <p>Do You Still Want To Be Part Of This?</p>
          <button type="button" onClick={apply}>
            Proceed
          </button>
        </div> */}






        <div className="confirm">
          <h4>DSP-300 Cohort 4 Registration Commences November 2024.</h4>
          {/* <h4>Check back next year.</h4> */}
          
          <button type="button" onClick={openModal2}>
            OK
          </button>
        </div>
        
      </Modal>


    </div>
  )
}

export default Hero