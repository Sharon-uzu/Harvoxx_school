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
import Carousel from 'react-multi-carousel';


const How = ({title,text}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
    <div>
        <section className='why'>
            <img src={abs1} className='abs1'/>
            <img src={abs2} className='abs2' />
            <img src={abs3} className='abs3' />
            <h2>How It Works</h2>

            <Carousel className='e-cards'
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={ true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={2000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >

                <div className='card c-card'>
                    <h2>1</h2>
                    <h3>Structured Training Duration:</h3>
                    <p>Selected participants undergo a rigorous 3-month physical training program, conducted 2-3 times weekly, focused on their chosen tech skills.</p>
                </div>

                <div className='card c-card'>
                    <h2>2</h2>
                    <h3>Comprehensive Learning:</h3>
                    <p>Participants not only gain technical proficiency but also acquire business acumen. They learn to monetize their skills, understand the business of tech, collaborate effectively, build high-performance teams, and discover co-founder opportunities.</p>
                </div>

                <div className='card c-card'>
                    <h2>3</h2>
                    <h3>Team Formation:</h3>
                    <p>After 10 weeks, participants are strategically grouped into teams of 5-7 individuals from diverse categories, ensuring a dynamic mix of skills and perspectives.</p>
                </div>

                <div className='card c-card'>
                    <h2>4</h2>
                    <h3>Expert Guidance:</h3>
                    <p>Each team receives dedicated support with a Product Manager, Backend Developer, and an experienced mentor. This guidance is instrumental in developing a successful Minimum Viable Product (MVP).</p>
                </div>

                <div className='card c-card'>
                    <h2>5</h2>
                    <h3>Access to Techlauncher:</h3>
                    <p>Teams and their products gain access to Techlauncher's incubation/acceleration program where they will gain business development training, product development support, pre-launch marketing strategies and potential funding opportunities.</p>
                </div>

                <div className='card c-card'>
                    <h2>6</h2>
                    <h3>Funding for Excellence:</h3>
                    <p>The teams exhibiting outstanding market validation, traction, and teamwork stand a chance to receive instant NGN1,000,000 funding after a 6-month pilot. They continue to benefit from business mentorship and connections to Angel Investors and VC's through Techlauncher.</p>
                </div>

                <div className='card c-card'>
                    <h2>7</h2>
                    <h3>Pathways to Employment:</h3>
                    <p>Successful participants with a desire for employment can explore internship opportunities with our partnering companies upon completing their team projects, ensuring a seamless transition from training to practical industry experience.</p>
                </div>

            </Carousel>


            {/* <div className='learn'>
                <Link to='/' >
                    <button>
                        Learn more 
                        <img src={arr} alt="" />
                    </button>
                </Link>
            </div> */}
            
        
        </section>


        <section className='why2'>

            <div className='why2-l'>
                <img src={wimg1} alt="" className='image1'/>
                {/* <img src={wimg2} alt="" className='image2'/> */}
            </div>

            <div className='why2-r'>
                <h2>{title}</h2>
                <p>{text}</p>

                <div className='props'>

                    <div className='props-l'>

                        <div className='p-item'>
                            <img src={check} alt="" />
                            <span>Web Dev.(Frontend)</span>
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

export default How