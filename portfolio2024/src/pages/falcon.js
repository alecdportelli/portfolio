import React from 'react';

import './falcon.css';

import Header from '../components/header';
import Footer from '../components/footer';

import FalHeader from '../SVG/FalHeader.svg'

const Falcon = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                Falcon
            </div>

            <div className='center secondary-title'>
                A 3D visualization tool for electronic warefare simulations  
            </div>

            <br></br>

            <div className='FalHeader'>
                <img src={FalHeader}></img>
            </div>

            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default Falcon;