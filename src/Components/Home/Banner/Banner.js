import React from 'react';
import './Banner.css'
import yamin from '../../../images/Yamin.jpg'

const Banner = () => {
    return (
        <div>
            <div className='myself text-center '>
                <div className='fw-bold '>
                    <h2>Hi! i am <span>Yamin Hossen</span>. <br /> I am a <span>Web <br /> Developer</span>. Innovetion is my <span>Passion</span></h2>
                </div>
                <div className='image'>
                    <img className='h-100' src={yamin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;