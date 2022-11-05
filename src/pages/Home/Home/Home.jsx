import React from 'react';
import ABout from '../About/ABout';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ABout></ABout>
           <Services></Services>
            
        </div>
    );
};

export default Home;