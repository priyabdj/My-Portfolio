import React from 'react'
import './Hero.css'
import  Resume from '../../assets/Resume.pdf'
import profile from'../../assets/Profile.jpeg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
<img src={profile} className='profile-img' alt="" />
<h1> <span>Hello, I'm Priya</span> ,Frontend Developer </h1>
<div className='hero-action'>
<div className="hero-connect">Connect with me</div>
<div className="hero-resume"><a href={Resume}>My resume</a></div>
</div>
    </div>
  )
}

export default Hero