import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg' // Assuming you have a CSS file for styling
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home'  className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>i'm abdirahman,</span>  fullstack developer  <br />based in somalia</h1>
            <p>
                I am a full-stack developer with a passion for creating dynamic and responsive web applications.
                My expertise lies in both front-end and back-end development, allowing me to build complete solutions 
                that deliver exceptional user experiences.
            </p>
            <div className='hero-btns'>
                <button className='hero-connect'>download cv</button>
                <button className='btn'><AnchorLink className='anchor-link' offset={50} href='#contact'>contact me</AnchorLink></button>
                </div>
        </div>
    );
}

export default Hero;
