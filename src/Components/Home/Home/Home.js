import React from 'react';
import ContuctUs from '../../About/ContuctUs';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Project></Project>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;