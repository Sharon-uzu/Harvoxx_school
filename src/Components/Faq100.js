import React, {useState} from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const Faq100 = () => {

    const Faqs =[
        {
            id: 1,
            ques:"What is DSP-100?",
            answer:"DSP-100 Is a well-structured training on modern and in-demand Tech Skills for 100 female youths in Rivers State. The training is completely free."
        },

        {
            id: 2,
            ques:"What is the ultimate goal for DSP-100?",
            answer:"The ultimate goal is to train and empower at least 2000 female youths in Rivers State on various Tech skills, mentor them to achieve success and produce at least 100 co-founders in the next few years. This will go a long way to reduce unemployment and boost the economy of our state. This is also in line with the overall vision of the Company to make Port Harcourt one of the cities with highest number of female Techies in Africa by 2031."
        },

        {
            id: 3,
            ques:"How much does it cost to be part of DSP-100?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },


    ]

    const Faqs1 =[

        {
            id: 1,
            ques:"Can someone apply for more than one package?",
            answer:"No. You are not allowed to apply for more than one package. NOTE: Duplicate applications by applicants will lead to disqualification, So, before applying, make up your mind on which package tickles your fancy."
        },

        {
            id: 2,
            ques:"How are people selected for the training?",
            answer:"The announcement of beneficiaries will come after the review of online applications by our team. Some trainees, however, are also selected based on the recommendation from very reputable individuals in the State."
        },

        {
            id: 3,
            ques:"What is the difference between DSP-100 and DSP-300?",
            answer:"DSP-100 is a special well-structured training program on modern and in-demand tech skills for 100 female youths ONLY in Rivers State. DSP-300 on the other hand, comprises both genders in Rivers State. Both training however are COMPLETELY FREE."
        },

    ]

      // Initialize state to track the visibility of answers for each FAQ item
        const [open, setOpen] = useState(Array(Faqs.length).fill(false));

        const toggleAnswer = (index) => {
            setOpen(open.map((item, i) => (i === index ? !item : item)));
        };

        const [open1, setOpen1] = useState(Array(Faqs1.length).fill(false));

        const toggleAnswer1 = (index) => {
            setOpen1(open1.map((item, i) => (i === index ? !item : item)));
        };


  return (
    <div>
        <div className="faq">
            <h2>You have got questions? <br />we have got answers!</h2>
            <section className='faq-cards'>
                <div className="faq-main">

                    {
                        Faqs.map((item, index)=>{
                            return(
                                    <div className="faq-c" key={item.id}>
                                        
                                        <h3 onClick={() => toggleAnswer(index)}>
                                            <div>
                                            {open[index] ? (
                                                <IoIosArrowDropup className='arr-icon' />
                                            ) : (
                                                <IoIosArrowDropdown className='arr-icon' />
                                            )}
                                            </div>
                                            {item.ques}
                                        
                                        </h3>
                                        {open[index] && <p>{item.answer}</p>}
                
                                    </div>
                                

                            )
                        })
                    }
                </div>

                <div className="faq-main">

                    {
                        Faqs1.map((item, index)=>{
                            return(

                                    <div className="faq-c" key={item.id}>
                                        
                                        <h3 onClick={() => toggleAnswer1(index)}>
                                            <div>
                                            {open1[index] ? (
                                                <IoIosArrowDropup className='arr-icon' />
                                            ) : (
                                                <IoIosArrowDropdown className='arr-icon' />
                                            )}
                                            </div>
                                            {item.ques}
                                        
                                        </h3>
                                        {open1[index] && <p>{item.answer}</p>}
                
                                    </div>


                                

                            )
                        })
                    }
                </div>
                

            </section>
        </div>
    </div>
  )
}

export default Faq100