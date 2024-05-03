import React from 'react'

const Faq300 = () => {

    const Faqs =[
        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
        },

        {
            ques:"How much does it cost to be part of DSP-300?",
            answer:"The program is free. The trainees will not have to pay a dime throughout the training. Certification is also FREE."
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

export default Faq300