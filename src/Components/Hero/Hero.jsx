import React from 'react'
import './Hero.css'
import profile from'../../assets/Profile.jpeg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
<img src={profile} className='profile-img' alt="" />
<h1> <span>Hello, I'm Priya</span> ,Frontend Developer </h1>
<div className='hero-action'>
<div className="hero-connect">Connect with me</div>
<div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero