import React from 'react';
import p11 from '../../../images/p11.png'
import p12 from '../../../images/p112.png'
import p13 from '../../../images/p113.png'
import './ProjectsDetails.css'

const ProjectDetails1 = () => {
    return (
        <div className='pdetails'>
            <div className='w-75 mx-auto'>
                <div className='scr'>
                    <div><img className='w-100' src={p11} alt="" /></div>
                    <div><img className='w-100' src={p12} alt="" /></div>
                    <div><img className='w-100' src={p13} alt="" /></div>
                </div>
                <h2>Tools Manufacturer</h2>
                <h5>Featurer</h5>
                <ul>
                    <li>In this site user can login and sign up by email and password or google.</li>
                    <li>Login user can purchase the item and deleted. And request for a callback.</li>
                    <li>User also can give a review. Which is show the home page.</li>
                </ul>
                <h5>Technology:CSS, Bootstrap, Tailwind, Daisy-UI, React, React-Router, Mongodb, Node.js,
                    Express.js, Toastify, Heroku, Firebase.</h5>
                <h4><a className='text-decoration-none' target="blank" href="https://tools-manufacturer-websi-3d4b5.web.app/">Live Site</a> | <a className='text-decoration-none' target="blank" href="https://github.com/yaminhossen/tools-manufacturer-site">Client Site Code</a> | <a className='text-decoration-none' target="blank" href="https://github.com/yaminhossen/tools-manufacturer-server">Server Site Code</a> </h4>
            </div>
        </div>
    );
};

export default ProjectDetails1;