import React from 'react';
import p31 from '../../../images/p331.png'
import p32 from '../../../images/p332.png'
import p33 from '../../../images/p333.png'

const ProjectDetails3 = () => {
    return (
        <div className='pdetails'>
            <div className='w-75 mx-auto'>
                <div className='scr'>
                    <div><img className='w-100' src={p31} alt="" /></div>
                    <div><img className='w-100' src={p32} alt="" /></div>
                    <div><img className='w-100' src={p33} alt="" /></div>
                </div>
                <h2>Wild Photographer</h2>
                <h5>Featurer</h5>
                <ul>
                    <li>In this site user can login and sign up by email and password or google.</li>
                    <li>New user can login after sign up.</li>
                    <li>Only login user can enter the checkout page.</li>
                </ul>
                <h5>Technology:CSS, Bootstrap, React, React-Router, Firebase.</h5>
                <h4><a className='text-decoration-none' target="blank" href="https://wild-photographer-e3afa.web.app/">Live Site</a> | <a className='text-decoration-none' target="blank" href="https://github.com/yaminhossen/wild-photographer">Client Site Code</a> </h4>
            </div>
        </div>
    );
};

export default ProjectDetails3;