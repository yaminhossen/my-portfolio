import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
import b1 from '../../../images/b1.png'
import b2 from '../../../images/b2.png'
import b3 from '../../../images/b3.png'

const Project = () => {
    return (
        <div className='text-center'>
            <h1 className='my-4'>Some of my projects</h1>
            <div className='projects'>
                <div className='project'>
                    <img className='w-75 ' src={b1} alt="" />
                    <h2 className='py-4'>Tools Manufacturer Site</h2>

                    <Link className='linkb' to='/projectDetails1'>Project Details</Link>
                    {/* <a className='text-decoration-none' target="blank" href="https://tools-manufacturer-websi-3d4b5.web.app/">Live Site</a> */}
                </div>
                <div className='project'>
                    <img className='w-75 ' src={b2} alt="" />
                    <h2 className='py-4'>Fruits Warehouse</h2>

                    <Link className='linkb' to='/projectDetails2'>Project Details</Link>
                    {/* <a className='text-decoration-none' target="blank" href="https://fruits-warehouse-management.web.app/">Live Site</a> */}
                </div>
                <div className='project'>
                    <img className='w-75 ' src={b3} alt="" />
                    <h2 className='py-4'>Wild Photographer</h2>

                    <Link className='linkb' to='/projectDetails3'>Project Details</Link>
                    {/* <a className='text-decoration-none' target="blank" href="https://wild-photographer-e3afa.web.app/">Live Site</a> */}
                </div>
            </div>

        </div>
    );
};

export default Project;