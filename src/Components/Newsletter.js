import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='news'>
            <h2>Subscribe  to our Newsletter</h2>
            <p>Stay updated with our educational news. We promise not to spam with update, Subscribe now.</p>

            <form className='form'>
                <input type="email" placeholder='Enter your email' />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter