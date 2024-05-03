import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../Images/top1.png';
import img1 from '../Images/top2.png'
import { FaStar} from "react-icons/fa";



const Testimony = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 710 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 710, min: 0 },
      items: 1
    }
  };



  return (
    <div className='test'>

        <h2>Learners speak for themselves</h2>
        <p>Excellence is not just a claim; it's our students showcasing what they've learned and conquered. Dive into their success stories!</p>
      
      <Carousel className='one'
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
      <div className='test-main'>
        <div className='flex-main'>

          <div className='stars'>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
          <p>At  edukate, we offer the easiest and most affordable learning solutions  not minding proximity. We are the best and most trusted learning platform At  edukate, we offer the easiest and most affordable learning  </p>

          <div className='f-i'>
            <img src={img} alt="" />
            <div>
              <h4>Lisa Adeyemi</h4>
              <h5>Graduate Intern</h5>
            </div>
          </div>
          
          
        </div>

                    
     </div>

     <div className='test-main'>
        <div className='flex-main'>

          <div className='stars'>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
          <p>At  edukate, we offer the easiest and most affordable learning solutions  not minding proximity. We are the best and most trusted learning platform At  edukate, we offer the easiest and most affordable learning  </p>

          <div className='f-i'>
            <img src={img1} alt="" />
            <div>
              <h4>Lisa Adeyemi</h4>
              <h5>Graduate Intern</h5>
            </div>
          </div>
          
          
        </div>

                    
     </div>

     <div className='test-main'>
        <div className='flex-main'>

          <div className='stars'>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
          <p>At  edukate, we offer the easiest and most affordable learning solutions  not minding proximity. We are the best and most trusted learning platform At  edukate, we offer the easiest and most affordable learning  </p>

          <div className='f-i'>
            <img src={img} alt="" />
            <div>
              <h4>Lisa Adeyemi</h4>
              <h5>Graduate Intern</h5>
            </div>
          </div>
          
          
        </div>

                    
     </div>

     <div className='test-main'>
        <div className='flex-main'>

          <div className='stars'>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
          <p>At  edukate, we offer the easiest and most affordable learning solutions  not minding proximity. We are the best and most trusted learning platform At  edukate, we offer the easiest and most affordable learning  </p>

          <div className='f-i'>
            <img src={img1} alt="" />
            <div>
              <h4>Lisa Adeyemi</h4>
              <h5>Graduate Intern</h5>
            </div>
          </div>
          
          
        </div>

                    
     </div>


     <div className='test-main'>
        <div className='flex-main'>

          <div className='stars'>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
          <p>At  edukate, we offer the easiest and most affordable learning solutions  not minding proximity. We are the best and most trusted learning platform At  edukate, we offer the easiest and most affordable learning  </p>

          <div className='f-i'>
            <img src={img} alt="" />
            <div>
              <h4>Lisa Adeyemi</h4>
              <h5>Graduate Intern</h5>
            </div>
          </div>
          
          
        </div>

                    
      </div>

      <div className='test-main'>
        <div className='flex-main'>

          <div className='stars'>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
          <p>At  edukate, we offer the easiest and most affordable learning solutions  not minding proximity. We are the best and most trusted learning platform At  edukate, we offer the easiest and most affordable learning  </p>

          <div className='f-i'>
            <img src={img1} alt="" />
            <div>
              <h4>Lisa Adeyemi</h4>
              <h5>Graduate Intern</h5>
            </div>
          </div>
          
          
        </div>

                    
      </div>


      <div className='test-main'>
        <div className='flex-main'>

          <div className='stars'>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>

          </div>
          <p>At  edukate, we offer the easiest and most affordable learning solutions  not minding proximity. We are the best and most trusted learning platform At  edukate, we offer the easiest and most affordable learning  </p>

          <div className='f-i'>
            <img src={img} alt="" />
            <div>
              <h4>Lisa Adeyemi</h4>
              <h5>Graduate Intern</h5>
            </div>
          </div>
          
          
        </div>

                    
     </div>
        
      </Carousel>
    </div>
  )
}

export default Testimony