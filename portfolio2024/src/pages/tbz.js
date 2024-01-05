import React from 'react';

import './tbz.css';

import Header from '../components/header';
import Footer from '../components/footer';

import TBZ from '../SVG/TbzHeader_1.svg'
import UnityVD from '../SVG/UnityVennDiagram.svg'

const Trailblazer = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                Trailblazer
            </div>

            <div className='center secondary-title'>
                A 3D electronic warfare sandbox built for scenario design, radio emulation, and RF simulation
            </div>

            <div className='TbzHeader'>
                <img src={TBZ} />
            </div>

            <div className='body-par'>
                #NOTE: This case study goes over the high level engineering concepts of the project. I am sharing what I was told I could share.
            </div>

            <div className='body-par-title-tbz'>
                Background 
            </div>
            <div className='body-par'>
                Many current electronic warefare (EW), radio frequency (RF), and signal propogation software packages lack all the tools needed
                to properly interface with hardware. 
            </div>
            <div className='body-par'>
                Many RF engineers have to travel to test events, hire pilots and antenna operators, and spend 
                lots of time and money because their software is inadequate. 
            </div>
            <div className='body-par'>
                It is also very common to see these software suites have poor UI design, no 3D graphics, and bad rendering capabilities. This hinders
                engineers from being able to effectively visualize and interpret complex electromagnetic scenarios and data. 
            </div>
            <div className='body-par'>
                There is a clear need to build all an inclusive software package for RF engineers. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-tbz'>
                Starting Trailblazer
            </div>
            <div className='body-par'>
                At the beginning of 2023, I was asked to help design and develop a software suite that can interface with a
                state-of-the-art channel emualator. 
            </div>
            <div className='body-par'>
                I had previous experience with Unity and RF simulation from a previous project, so it was a perfect fit. 
            </div>
            <div className='body-par'>
                The project vision was clear. The project lead needed a software where users can: 
            </div>
            <div class="styled-list">
                Simulate RF physics
                <br></br>

                Simulate vehicle kinematics 
                <br></br>

                Use path planning to design and build custom scenarios
                <br></br>

                Import scenarios from other tools
                <br></br>

                Visualize everything in 3D
                <br></br>

                Use an intuitive UI to easily complete complex tasks 
            </div>
            <div className='body-par'>
                Due to its focus on path planning and being the first software of its kind at MITRE,
                we decided to name the tool Trailblazer. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-tbz'>
                Leveraging Game Engine Technology  
            </div>
            <div className='body-par'>
                Game engines offer a powerful set of capabilities. Many of the problems previously mentioned can be solved by using software
                such as Unity or Unreal because they are optimized for graphics and physics. 
            </div>
            <div className='body-par'>
                Furthermore, game engines have large front end libraries for UI development, making it easy to build applications that
                have a great user experience. 
            </div>
            <div className='body-par'>
                We chose Unity because of my familiarity with the tool and because of all the resources and community forums
                it has to offer. 
            </div>
            <div className='UnityVD'>
                <img src={UnityVD} />
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-tbz'>
                Designing The Software Architecture 
            </div>
            <div className='body-par'>
                Before writing a single line of code, I had a lot of meetings with potential end users to figure out exactly what features Trailblazer
                needed to support:
            </div>
            <div className='body-par'> <li>3D Terrain Engine</li> </div>
            <div className='body-par'> <li>Database / FileIO</li> </div>
            <div className='body-par'> <li>RF Physics Library</li> </div>
            <div className='body-par'> <li>Responsive UI</li> </div>
            <div className='body-par'>
                After determining what had to be built, I then started to design the software architecture. I collaborated with some senior
                engineers to come up with a design that is easy to develop, but more importantly, flexible and scalable. 
            </div>

            <Footer />
        </div>
    );
};

export default Trailblazer;