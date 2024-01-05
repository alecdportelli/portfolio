import React from 'react';

import './safari.css';

import Header from '../components/header';
import Footer from '../components/footer';

const Safari = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                AI Safari
            </div>

            <div className='center secondary-title'>
                A Reinforcement Learning Testbed To Test and Evaluate Algorithm Security 
            </div>

            <br></br>

            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default Safari;