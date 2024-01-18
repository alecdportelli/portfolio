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

            <div className='body-par'>
                #NOTE: This case study goes over the high level engineering concepts of the project. I am sharing what I was told I could share.
            </div>

            <div className='body-par-title-fal'>
                Background 
            </div>
            <div className='body-par'>
                In a world where graphics technology is at a new high, many of the tools in the
                engineering industry lack modern rendering capabilities.
            </div>
            <div className='body-par'>
                One of the MITRE internal RF platform projects needed a new tool to visualize their
                scenarios in 3D instead of 2D.  
            </div>
            <div className='body-par'>
                The project lead was hoping to upgrade the 2D web application into something
                where users can really see what is going on during simulations. 
            </div>
            <div className='body-par'>
                I got added to the project as the developer to start building their new 3D capability called
                Falcon. 
            </div>


            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default Falcon;