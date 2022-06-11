import React from 'react';
import p21 from '../../../images/p221.png'
import p22 from '../../../images/p222.png'
import p23 from '../../../images/p223.png'

const projectDetails2 = () => {
    return (
        <div className='pdetails'>
            <div className='w-75 mx-auto'>
                <div className='scr'>
                    <div><img className='w-100' src={p21} alt="" /></div>
                    <div><img className='w-100' src={p22} alt="" /></div>
                    <div><img className='w-100' src={p23} alt="" /></div>
                </div>
                <h2>Fruits Warehouse</h2>
                <h5>Featurer</h5>
                <ul>
                    <li>In this site user can login and sign up by email and password or google.</li>
                    <li>Login user can update the item quantity.</li>
                    <li>Login user also can add item which is saved the database.</li>
                </ul>
                <h5>Technology:CSS, Bootstrap, Tailwind, Daisy-UI, React, React-Router, Mongodb, Node.js,
                    Express.js, Toastify, Heroku, Firebase.</h5>
                <h4><a className='text-decoration-none' target="blank" href="https://fruits-warehouse-management.web.app/">Live Site</a> | <a className='text-decoration-none' target="blank" href="https://github.com/yaminhossen/warehouse-management-client">Client Site Code</a> | <a className='text-decoration-none' target="blank" href="https://github.com/yaminhossen/warehouse-management-server">Server Site Code</a> </h4>
            </div>
        </div>
    );
};

export default projectDetails2;