import React from 'react';

import './falcon.css';

import Header from '../components/header';
import Footer from '../components/footer';

import FalHeader from '../SVG/FalHeader.svg'
import FalArch from '../SVG/FalArch.svg'
import UnityVD from '../SVG/UnityVennDiagram.svg'

const Falcon = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                Falcon
            </div>

            <div className='center secondary-title'>
                A 3D visualization tool for electronic warfare simulations  
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
                Falcon, which was my first project at MITRE.  
            </div>
            <br></br>
            <br></br>

            
            <div className='body-par-title-fal'>
                Starting Falcon  
            </div>
            <div className='body-par'>
                When I was brought on to the project, I spent time with the project lead
                and other engineers to figure out what capabilities Falcon needed. 
            </div>
            <div className='body-par'>
                After spending time with their current tool and understanding its limitations, 
                it was clear Falcon required the following:
            </div>
            <div className='body-par'> <li>Be a standalone application and not a web application </li> </div>
            <div className='body-par'> <li>Visualize everything in 3D</li> </div>
            <div className='body-par'> <li>Be able to recieve live updates from hardware</li> </div>
            <div className='body-par'> <li>Render map and terrain data</li> </div>
            <div className='body-par'> <li>Allow users to control entities during the simulation</li> </div>
            <div className='body-par'>
                Next was choosing the tool to build Falcon. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-fal'>
                Using Unity 
            </div>
            <div className='body-par'>
                The original proposal for Falcon was to leverage AFSIM, which is a government 
                software suite for simulation and visualization. 
            </div>
            <div className='body-par'>
                However, AFSIM is a heavyweight application that doesn't support great graphics
                and is hard to write custom scripts for. It is very difficult to build custom
                plugins especially with it being government IP.
            </div>
            <div className='body-par'>
                Because AFSIM wasn't an easy and flexible tool to use, I suggested Unity, which 
                I had used in previous roles. 
            </div>
            <div className='body-par'>
                Unity is lightweight, great for building projects from scratch, and supports realistic graphics.
                Becuase of its flexibility and it being made for simulation and visuals, it was the perfect
                tool for the job. 
            </div>
            <div className='UnityVD'>
                <img src={UnityVD} />
            </div>
            <div className='body-par'>
                The next step was to design the system architecture. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-fal'>
                System Architecture
            </div>
            <div className='body-par'>
                Falcon was the first piece of software I designed in industry, so I had 
                to rely on the expertise of others.
            </div>
            <div className='body-par'>
                A lot of the software built in the research and development industry is kept modular
                so it can easily be reused again for something else. 
            </div>
            <div className='body-par'>
                Keeping that in mind, the architecture
                was designed to be composed of loosely coupled modules that can easily be maintained and brought 
                off the shelf for future use. 
            </div>
            <div className='FalArch'>
                <img src={FalArch}></img>
            </div>
            <div className='body-par'>
                Unity serves as the main hub which connects to outside servers
                and data sources. 
            </div>
            <div className='body-par'>
                All of the information can be ingested, processed, and rendered at the same time,
                resulting in a high quality visual. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-fal'>
                Recieving Messages From Hardware
            </div>
            <div className='body-par'>
                The project has a very expensive channel emualator that can publish messages
                during scenario simulation. 
            </div>
            <div className='body-par'>
                My first challenge was to build a pipeline from the channel emualator to Unity
                so that Falcon was able to subscribe to messages. 
            </div>
            <div className='body-par'>
                I had very little network engineering experience at the time, but I learned the basics
                of using TCP sockets and built a connection between the hardware server and Falcon.
            </div>
            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default Falcon;