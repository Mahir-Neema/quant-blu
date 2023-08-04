import React from 'react'
import './LandingPage.css'
import StepsCards from '../StepsCards/StepsCards'

function LandingPage() {
  return (
    <section className='Landing_Page'>
      <div className="hero_section">

        <div className="content">
          <div className="content_heading">
            The Value Layer of the Internet
          </div>
          <div className="content_textpara">
          The fundamental protocol that allows anyone to create and exchange value, powered by zero-knowledge technology.
          </div>

          <button className="get_started">
          Get Started
          </button>
        </div>

        <div className="hero_image">
          <img src="/Hero_section_logo.png" alt="main-sec"/>
        </div>

      </div>
      <StepsCards/>
    </section>
  )
}

export default LandingPage