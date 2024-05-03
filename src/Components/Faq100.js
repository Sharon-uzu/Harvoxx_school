import React from 'react'

const Faq100 = () => {

    const Faqs =[
        {
            ques:"What is DSP-100?",
            answer:"DSP-100 Is a well-structured training on modern and in-demand Tech Skills for 100 female youths in Rivers State. The training is completely free."
        },

        {
            ques:"How much does it cost to be part of DSP-100?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How are people selected for the training?",
            answer:"The announcement of beneficiaries will come after the review of online applications by our team. Some trainees, however, are also selected based on the recommendation from very reputable individuals in the State."
        },

        {
            ques:"Can someone apply for more than one package?",
            answer:"No. You are not allowed to apply for more than one package. NOTE: Duplicate applications by applicants will lead to disqualification, So, before applying, make up your mind on which package tickles your fancy."
        },

        {
            ques:"What is the ultimate goal for DSP-100?",
            answer:"The ultimate goal is to train and empower at least 2000 female youths in Rivers State on various Tech skills, mentor them to achieve success and produce at least 100 co-founders in the next few years. This will go a long way to reduce unemployment and boost the economy of our state. This is also in line with the overall vision of the Company to make Port Harcourt one of the cities with highest number of female Techies in Africa by 2031."
        },

        {
            ques:"What is the difference between DSP-100 and DSP-300?",
            answer:"DSP-100 is a special well-structured training program on modern and in-demand tech skills for 100 female youths ONLY in Rivers State. DSP-300 on the other hand, comprises both genders in Rivers State. Both training however are COMPLETELY FREE."
        },

    ]


  return (
    <div>
        <div className="faq">
            <h2>You have got questions? <br />we have got answers!</h2>
            <section className='faq-cards'>
                {
                    Faqs.map((faq)=>{
                        return(

                            <div className="faq-c">

                            <h3>{faq.ques}</h3>
                            <p>{faq.answer}</p>
        
                        </div>

                        )
                    })
                }
                

            </section>
        </div>
    </div>
  )
}

export default Faq100