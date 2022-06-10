import React from 'react';
import './About.css'
import yamin from '../../images/Yamin.jpg';

const About = () => {
    return (
        <div className='aboutme'>
            <div className='aboutimg'>
                <img className='h-100' src={yamin} alt="" />
            </div>
            <div className='about'>
                <div className='about1'>
                    <h2>Hi! i am <span className='aspan'>Yamin Hossen</span>. <br /> I am a <span className='aspan'>Web <br /> Developer</span>. Innovetion is my <span>Passion</span></h2>
                </div>
                <div>
                    <h2>As web developer, I am responsible for designing and developing websites and website applications. Using a variety of web technologies, web developers manage site functionality, implement application features, and integrate security measures.</h2>
                </div>
            </div>
        </div>
    );
};

export default About;