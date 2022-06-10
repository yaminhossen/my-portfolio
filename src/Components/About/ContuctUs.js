import React from 'react';
import './ContuctUs.css';

const ContuctUs = () => {

    return (
        <div className='w-25 mx-auto text-center'>
            <h1>Contuct Us</h1>
            <form action="https://formsubmit.co/streatdot616@gmail.com" method="POST" className='form  '>
                <input className='w-100' type="text" name="name" placeholder='Your Name' id="" required />
                <input className='w-100' type="email" name="email" placeholder='Enter Your Email' required id="" />
                <textarea className='w-100' type="text" name="message" required placeholder='Enter Your Message' id="" />
                <input className='w-100' type="submit" value="Submit" />
                {/* <button type='Submit'>Submit</button> */}
            </form>
        </div>
    );
};

export default ContuctUs;