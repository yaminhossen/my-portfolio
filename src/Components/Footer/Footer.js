import React from 'react';
import copy from '../../images/copy.png'
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer text-center flex justify-center '>
            <p className='flex items-center'>copyright <img src={copy} alt="" /><span className='text-warning'>{year}</span> all right reserve.</p>
        </footer>
    );
};

export default Footer;