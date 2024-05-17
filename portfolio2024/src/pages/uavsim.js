import React from 'react';

import './uavsim.css';

import Header from '../components/header';
import Footer from '../components/footer';
import UAVSimHeader from '../SVG/RLDroneHeader.svg'

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
            <div className='RLDroneHeader'>
                <img src={UAVSimHeader}></img>
            </div>
            <div className='body-par-title-rl'>
                Background 
            </div>
            <div className='body-par'>
                Many current electronic warefare (EW), radio frequency (RF), and signal propogation software packages lack all the tools needed
                to properly interface with hardware. 
            </div>

            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default UAVSim;