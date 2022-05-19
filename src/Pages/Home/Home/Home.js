import React from 'react';
import Banner from '../Banner/Banner';
import Dental from '../Dental/Dental';
import Info from '../Info/Info';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;