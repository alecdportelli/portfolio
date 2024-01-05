import React from 'react';

import './about.css';

import Header from '../components/header';
import Footer from '../components/footer';

const About = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                About
            </div>

            <br></br>

            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default About;