import React from 'react'
import abs1 from '../Images/Rectangle 7.png'
import abs2 from '../Images/Rectangle 6.png'
import abs3 from '../Images/Rectangle 7.png'
import w1 from '../Images/w1.png'
import w2 from '../Images/w2.png'
import w3 from '../Images/w3.png'
import { Link } from 'react-router-dom'
import arr from '../Images/ArrowNarrowRight.png'
import wimg1 from '../Images/learn.png'
// import wimg2 from '../Images//Frame 32 (1).png'
import check from '../Images/check.png'
import arr2 from '../Images/Component 6.png'

const Why = () => {
  return (
    <div>
        <section className='why'>
            <img src={abs1} className='abs1'/>
            <img src={abs2} className='abs2' />
            <img src={abs3} className='abs3' />
            <h2>Why Choose us?</h2>
            <p className='paragraph'>Where Aspiration Takes Flight. <br /> Unleash your potentials with our well designed learning experiences in Harvoxx School.</p>

            <div className='e-cards'>

                <div className='card'>
                    <img src={w1} alt="" />
                    <h3>Physical Classes</h3>
                    <p>Engage in dynamic learning environments with our on-site classes, fostering collaboration and hands-on experience for an immersive educational journey.</p>
                </div>

                <div className='card'>
                    <img src={w2} alt="" />
                    <h3>Hands-on practical</h3>
                    <p>Experience learning through doing. Our hands-on approach ensures practical mastery, empowering you to confidently apply skills in real-world scenarios.</p>
                </div>

                <div className='card'>
                    <img src={w3} alt="" />
                    <h3>Custom BootCamps</h3>
                    <p>Tailor your learning journey with personalized bootcamps, designed to meet your unique goals, offering flexibility and targeted skill development for accelerated growth.</p>
                </div>

            </div>


            <div className='learn'>
                <Link to='/' >
                    <button>
                        Learn more 
                        <img src={arr} alt="" />
                    </button>
                </Link>
            </div>
            
        
        </section>


        <section className='why2'>

            <div className='why2-l'>
                <img src={wimg1} alt="" className='image1'/>
                {/* <img src={wimg2} alt="" className='image2'/> */}
            </div>

            <div className='why2-r'>
                <h2>Our Community Support </h2>
                <p>Join a thriving community of learners. Our support network ensures you're never alone, fostering collaboration, mentorship, and shared success within the Harvoxx School family.</p>

                <div className='props'>

                    <div className='props-l'>

                        <div className='p-item'>
                            <img src={check} alt="" />
                            <span>Mobile App Dev.</span>
                        </div>

                        <div className='p-item'>
                            <img src={check} alt="" />
                            <span>Data Analysis</span>
                        </div>

                        <div className='p-item'>
                            <img src={check} alt="" />
                            <span>Product design</span>
                        </div>

                        <div className='p-item'>
                            <img src={check} alt="" />
                            <span>Mobile App Dev.</span>
                        </div>

                        <div className='p-item'>
                            <img src={check} alt="" />
                            <span>Digital marketing</span>
                        </div>

                        <div className='p-item'>
                            <img src={check} alt="" />
                            <span>Cybersecurity</span>
                        </div>
                        

                    </div>

                    {/* <Link to='/'>
                            <button className='btn'>
                                Learn more
                                <img src={arr} alt="" />
                            </button>
                    </Link> */}

                    

                </div>

                <div className="arr2">
                    <img src={arr2} alt="" className='arr2'/>
                </div>
                

            </div>

        </section>
        
    </div>
  )
}

export default Why