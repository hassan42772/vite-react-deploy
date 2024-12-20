import React from 'react'
import './About.css'
import Waleed from '../../Assets/waleed.jpg'
import hassan from '../../Assets/expert.png'
function About() {
  return (
    <>
      <div className="about">
        <section className="about-intro">
          <h1>About Us</h1>
          <p> <span className='about-span'>Expert Mind</span>  provides professional and expert Male Home Tutors all over Pakistan especially in Lahore.</p>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={Waleed} alt="Team Member 1" />
              <h3>Waleed Khan</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src={hassan} alt="Team Member 2" />
              <h3>Rana Hassan</h3>
              <p>Worker</p>
            </div>
         
          </div>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p> Quality education is our priority. We aim to maximize your child's potential through individual coaching.</p>
        </section>
      </div>
    </>
  )
}

export default About
