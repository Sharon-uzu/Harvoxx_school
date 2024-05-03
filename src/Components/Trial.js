import React, {useState} from 'react';
import img from '../Images/blue.png';
import img1 from '../Images/white.png'

const Trial = () => {

  const [list1, setList1] = useState(true)
    const [list2, setList2] = useState(false)

    function year(){
        setList1(true)
        setList2(false)
    }

   

    function month(){
        setList2(true)
        setList1(false)
    }


  return (
    <div className='pricing' id='program'>
        <h2>Our Program</h2>


        {/* <div className='price-plan'>
            <span onClick={year} className={` ${list1 ? 'actives' : 'inactive'}`}>Annual</span>
            <span onClick={month} className={` ${list2 ? 'actives' : 'inactive'}`}>Monthly</span>
        </div> */}


        {list1 ? (

          <section className='plans'>

            <div className='plan'>
              <h3>Digital SkillUpProject-300 <br /><br />(DSP-300)</h3>
              <h2>FREE</h2>
              <h3>3 Months</h3>
            

              <div className='benefit'>
                <img src={img}  />
                <span>Data Analysis</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Product design</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Mobile App Dev.</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Digital Marketing</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Cybersecurity</span>
              </div>

              <div className="btn">
                <button>Learn More</button>
              </div>

            </div>



            <div className='plan plan2'>
              <h3>Exclusive Training</h3>
              <h2>EXCLUSIVE</h2>
              {/* <h3>Per Year</h3> */}
            

              <div className='benefit'>
                <img src={img1}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img1}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img1}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img1}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className="btn">
                <button>Learn More</button>
              </div>

            </div>


            <div className='plan'>
              <h3>Digital SkillUpProject-100 <br /><br />(DSP-100)</h3>
              <h2>FREE</h2>
              <h3>Three Months</h3>
            

              <div className='benefit'>
                <img src={img}  />
                <span>Data Analysis</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Product design</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Mobile App Dev.</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Digital Marketing</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Cybersecurity</span>
              </div>

              <div className="btn">
                <button>Learn More</button>
              </div>

            </div>


          </section>
        

       ) : null}

        {list2 ? (

          <section className='plans'>

            <div className='plan'>
              <h3>Starter</h3>
              <h2>$ 12.99</h2>
              <h3>Per Month</h3>


              <div className='benefit'>
                <img src={img}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className="btn">
                <button>Start free trial</button>
              </div>

            </div>



            <div className='plan plan2'>
              <h3>Starter</h3>
              <h2>$ 42.83</h2>
              <h3>Per Month</h3>


              <div className='benefit'>
                <img src={img1}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img1}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img1}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img1}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className="btn">
                <button>Start free trial</button>
              </div>

            </div>


            <div className='plan'>
              <h3>Starter</h3>
              <h2>$ 20.00</h2>
              <h3>Per Month</h3>


              <div className='benefit'>
                <img src={img}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className='benefit'>
                <img src={img}  />
                <span>Unlimited access to 1 Language Course</span>
              </div>

              <div className="btn">
                <button>Start free trial</button>
              </div>

            </div>


          </section>

        ) : null}



    </div>
  )
}

export default Trial