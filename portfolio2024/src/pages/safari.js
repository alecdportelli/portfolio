import React from 'react';

import './safari.css';

import Header from '../components/header';
import Footer from '../components/footer';

import SafariHeader from '../SVG/SAFARI-Header.svg'

const Safari = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                AI-SAFARI
            </div>

            <div className='center secondary-title'>
                A Reinforcement Learning Testbed To Analyze and Evaluate Algorithm Security 
            </div>

            <div className='Safari-Header'>
                <img src={SafariHeader}/>
            </div>

            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default Safari;