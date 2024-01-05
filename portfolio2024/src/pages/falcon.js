import React from 'react';

import './falcon.css';

import Header from '../components/header';
import Footer from '../components/footer';

const Falcon = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                Falcon
            </div>

            <div className='center secondary-title'>
                A 3D Visualization Tool For Electronic Warefare Simulations  
            </div>

            <br></br>

            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default Falcon;