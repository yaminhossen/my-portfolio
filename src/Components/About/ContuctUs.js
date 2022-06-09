import React from 'react';
import './ContuctUs.css';

const ContuctUs = () => {
    return (
        <div className='w-25 mx-auto text-center'>
            <h1>Contuct Us</h1>
            <form className='form  '>
                <input className='w-100' type="text" name="name" placeholder='Your Name' id="" required />
                <input className='w-100' type="email" name="email" placeholder='Enter Your Email' required id="" />
                <input className='w-100' type="text" name="massage" placeholder='Enter Your Description' id="" />
                <input className='w-100' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContuctUs;