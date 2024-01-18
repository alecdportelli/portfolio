import React from 'react';

import './uavsim.css';

import Header from '../components/header';
import Footer from '../components/footer';

const UAVSim = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                RL Final Project
            </div>

            <div className='center secondary-title'>
                Using reinforcement learning to train UAVs in Unity
            </div>

            <br></br>

            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default UAVSim;