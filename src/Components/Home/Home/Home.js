import React from 'react';
import ContuctUs from '../../About/ContuctUs';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Project></Project>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;