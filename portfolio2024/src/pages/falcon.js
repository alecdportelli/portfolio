import React from 'react';

import './falcon.css';

import Header from '../components/header';
import Footer from '../components/footer';

import FalHeader from '../SVG/FalHeader.svg'
import FalArch from '../SVG/FalArch.svg'
import UnityVD from '../SVG/UnityVennDiagram.svg'
import TCPDiagram from '../SVG/TCPDiagram.svg'
import FalQuad from '../SVG/FalQuad.svg'
import GamepadInput from '../SVG/GamepadInput.svg'

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
            <div className='FalArch'>
                <img src={TCPDiagram}></img>
            </div>
            <div className='body-par'>
                JSON was used because it is a lightweight message that is easy to parse. Falcon
                can quickly take the JSON and make the necessary visual updates. 
            </div>
            <div className='body-par'>
                This TCP connection is the keystone of the application. Being able to receive live 
                updates at a fast rate allows users to see the simulation in real time. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-fal'>
                3D Terrain Engine
            </div>
            <div className='body-par'>
                The terrain engine is exactly the same as the one in Trailblazer. A 
                quadtree approach was used to divy up the terrain and map into 
                an optimized configuration so it can load and render quickly. The Trailblazer
                case study goes over the algorithm in more depth.
            </div>
            <div className='FalArch'>
                <img src={FalQuad}></img>
            </div>
            <div className='body-par'>
                The terrain engine was the most important piece in upgrading the overall 
                user experience. 
            </div>
            <div className='body-par'>
                Being able to see data on 3D terrain with 3D models of vehicles and antennas
                provided users with a lot more insight during simulations. 
            </div>
            <div className='body-par'>
                This made debugging and generating new scenarios for testing exponentially easier. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-fal'>
                Interfaces To Other Devices
            </div>
            <div className='body-par'>
                The terrain engine and JSON messages providing all the necessary information
                to visualize the scenario. However, Falcon also allows inputs from other sources
                to engage with the live simulation.
            </div>
            <div className='body-par'>
                The main use case for allowing additional inputs is to allow users to control 
                vehicles during the simulation, mainly with a flight stick, steering wheel, 
                or game controller. 
            </div>
            <div className='FalArch'>
                <img src={GamepadInput}></img>
            </div>
            <div className='body-par'>
                This feature allows engineers to experiment with different scenarions and see 
                live results on the RF hardware, rather than remaking a scenario and processing 
                the whole thing from scratch.  
            </div>
            <div className='body-par'>
                Adding this interface keeps the hardware in the loop and allows for greater flexibility
                for users. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-fal'>
                Notable Project Outcomes
            </div>
            <div className='body-par'>
                Even though Falcon was my first project at MITRE, it still yielded
                some great outcomes: 
            </div>
            <div class="styled-list">
                Deployed software to over 20 RF engineers and counting 
                <br></br>
                <br></br>

                Performed 10 demos to multiple department chief engineers
                <br></br>
                <br></br>

                Users were able to test and debug scenarios twice as quickly
                <br></br>
                <br></br>

                Conducted live demos with hardware in the loop to army engineers
                <br></br>
                <br></br>
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-fal'>
                Conculsion
            </div>
            <div className='body-par'>
                Falcon was the ideal first project for a new hire. I got introduced to working with 
                senior level engineers, designing systems, testing code, and doing demonstrations. 
            </div>
            <div className='body-par'>
                I really enjoyed being able to have a lot of input on the design of the application and 
                not just handed tasks to complete. My project leads did a great job in helping me learn 
                what I needed to know to be a contributing developer. 
            </div>
            <div className='body-par'>
                I look forward to building more applications like Falcon in the future. 
            </div>

            <Footer />
        </div>
    );
};

export default Falcon;