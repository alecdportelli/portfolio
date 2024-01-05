import React from 'react';

import './robokin.css';

import Header from '../components/header';
import Footer from '../components/footer';

const Robokin = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                535.630.81 Final Project
            </div>

            <div className='center secondary-title'>
                A Python Library To Calculate Equations Of Motion For Any Robot
            </div>

            <br></br>

            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default Robokin;