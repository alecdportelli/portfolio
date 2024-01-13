import React from 'react';

import './tbz.css';

import Header from '../components/header';
import Footer from '../components/footer';

import TBZ from '../SVG/TbzHeader_1.svg'
import UnityVD from '../SVG/UnityVennDiagram.svg'
import TBZArch from '../SVG/TBZArch.svg'
import QuadTreeTBZ from '../SVG/QuadTree.svg'
import MapTileTBZ from '../SVG/MapTile.svg'
import JsonOutput from '../SVG/JSONOutput.svg'
import RadVelo from '../SVG/RadVelo.svg'
import FinalCalc from '../SVG/FinalCalc.svg'
import UIProto from '../SVG/UIProto.svg'

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
            <div className='body-par'> <li>Simulate RF physics </li> </div>
            <div className='body-par'> <li>Use path planning to design and build custom scenarios</li> </div>
            <div className='body-par'> <li>Import scenarios from other tools</li> </div>
            <div className='body-par'> <li>Use an intuitive UI to easily complete complex tasks </li> </div>
            <div className='body-par'> <li>Visualize everything in 3D</li> </div>
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
            <div className='body-par'> <li>Interfaces to hardware</li> </div>
            <div className='body-par'>
                After determining what had to be built, I then started to design the software architecture. I collaborated with some senior
                engineers to come up with a design that is easy to develop, but more importantly, flexible and scalable. 
            </div>
            <div className='TBZArch'>
                <img src={TBZArch} />
            </div>
            <br></br>
            <br></br>
            <div className='body-par'>
                The focus of the architecture is to have several decoupled data sources be brought into the simulation hub where all the visuals
                and interactions take place. Many games and simulation packages have tightly coupled monolithic architectures which are
                not designed to scale. The current design keeps all the different data sources modular so they can be changed when needed. 
            </div>


            <div className='body-par-title-tbz'>
                3D Terrain Engine 
            </div>
            <div className='body-par'>
                One of the biggest challenges of building Trailblazer was the terrain engine. I worked with a senior engineer
                to design how the world loads terrain in an optimized way. The first step was to build a quadtree that splits
                the world into chunks based on where the user is.
            </div>
            <div className='QuadTreeTBZ'>
                <img src={QuadTreeTBZ} />
            </div>
            <br></br>
            <div className='body-par'>
                This is the optimal solution because the highest level of resolution doesn't need to be loaded for the entire world. 
            </div>
            <div className='body-par'>
                Each tile location that is queried through a web request gets the Open Street Map texture and DTED 2 terrain information. 
                The texture is applied to the tile and then extruded based off the DTED 2 height map to build the terrain. 
            </div>
            <div className='MapTile'>
                <img src={MapTileTBZ} />
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-tbz'>
                RF Physics Library 
            </div>
            <div className='body-par'>
                The key component of Trailblazer is the RF physics simulation. When a user designs a scenario with platforms
                and antennas, Trailblazer then does all of the math and exports a JSON file with all the RF kinematic
                values at each time step. The JSON then gets fed into the channel emulator which adds hardware into the loop. 
            </div>
            <div className='JSONOutput'>
                <img src={JsonOutput} />
            </div>
            <br></br>
            <div className='body-par'>
                To do the math for the simulation, the waypoints, the velocity of the platform at each waypoint, and sampling frequency get passed 
                into the RF physics factory, which is powered by the 'TrailblazerMath' DLL. 
            </div>
            <div className='body-par'>
                Because the waypoints, velocities, and sampling frequency are known, the simulator interpolates the data to 
                find position over time. These positions and velocities are then used to calculate radial velocity, which is 
                needed for the antenna simulations. 
            </div>
            <div className='RadVelo'>
                <img src={RadVelo}></img>
            </div>
            <br></br>
            <div className='body-par'>
                Based on the antenna parameters such as frequency, TX or RX, and antenna pattern, the free space path loss
                and the doppler can finally be calculated.
            </div>
            <div className='FinalCalc'>
                <img src={FinalCalc}></img>
            </div>
            <div className='body-par'>
                This gives the user all the necessary values to feed the outputs to
                the channel emulator for further hardware emulation. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-tbz'>
                RF Physics Unit Testing
            </div>
            <div className='body-par'>
                If the physics are not accurate, then the entire application is completely useless. To ensure extremely high levels
                of accuracy, I used Unity's built in unit test framework to a build a CI/CD pipeline and linked it to the TrailblazerMath DLL.
            </div>
            <div className='body-par'>
                This is a very important feature because whenever we make any changes to the DLL, the unit tests automatically run and return
                results on the tests. This allows the developers on the team to keep track of when and why the physics break. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-tbz'>
                SQLite Database
            </div>
            <div className='body-par'>
                Trailblazer gave the the opportunity to learn more about building databases. SQLite was the database of choice because
                it is lightweight and serverless. 
            </div>
            <div className='body-par'>
                Designing the database was tricky because it had to be flexible and scalabale at the same time. Trailblazer is
                always evolving, so the database had to be able to adapt to constant change. 
            </div>
            <div className='body-par'>
                Because of how many different components Trailblazer has to support, a relational database was the best option. 
                This allows to easily add and remove different parts from the simulation environment. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-tbz'>
                Interfaces To Hardware
            </div>
            <div className='body-par'>
                Trailblazer in its current state only interfaces with hardware through the JSON file that is generated
                after all the simulations have been exectued. However, in the future we hope to add some live data streams
                over TCP or UDP to the channel emulator.
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-tbz'>
                UI / UX Design
            </div>
            <div className='body-par'>
                Once the foundation of Trailblazer had been built, the last step was to add a polished UI. I have experience 
                with UI design, so I talked to end users on what they wanted and came up with a wireframe. 
            </div>
            <div className='body-par'>
                While I cannot currently show the fully built designs, here is a mock of what the UI looks like:
            </div>
            <div className='UIProto'>
                <img src={UIProto}></img>
            </div>
            <br></br>
            <br></br>
            <div className='body-par'>
                The cylinders represent the vehicles in the simulation which house the antennas. The user can keep track of 
                what is going on through the side panels and add/edit the path, vehicles, or the antennas. 
            </div>
            <br></br>
            <br></br>

            <div className='center-title-tbz'>
                Leadership Opportunities 
            </div>
            <div className='body-par'>
                Working on Trailblazer has exposed me to more than just exciting engineering work: 
            </div>
            <div class="styled-list">
                Performed multiple demos to RF / EW department chief engineers 
                <br></br>
                <br></br>

                Gave a live tech talk to over 50 RF engineers explaining the software and its capabilities
                <br></br>
                <br></br>

                Led live, in-person demos with hardware in-the-loop to US Army and Airforce task leads 
                <br></br>
                <br></br>

                Managed and collaborated with two other software engineers to build the terrain engine 
            </div>
            <br></br>
            <br></br>

            <div className='center-title-tbz'>
                Notable Project Outcomes
            </div>
            <div className='body-par'>
                In just a short period of time, my work on Trailblazer has made a positive impact at MITRE:
            </div>
            <div class="styled-list">
                Deployed software to over 30 RF engineers and counting 
                <br></br>
                <br></br>

                Formal software deployment to the NSA 
                <br></br>
                <br></br>

                Recieved over 18 months of continuous project funding due to very successful demos to high ranking engineers and sponsors
                <br></br>
                <br></br>

                Time needed to build and simulate scenarios decreased by over 300%, increasing productivity and accuracy
                <br></br>
                <br></br>
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-tbz'>
                Conculsion
            </div>
            <div className='body-par'>
                Working on Trailblazer has fortified my software engineering skills. I have been able to get real world experience with simulation, unit testing,
                physics, software architecture, hardware in-the-loop, and full stack development.
            </div>
            <div className='body-par'>
                I now know what it takes to have an idea
                for a complex application, design it, build it, test it, and then deploy.
            </div>
            <div className='body-par'>
                I look forward bringing more ideas like Trailblazer to life in the future. 
            </div>

            <Footer />
        </div>
    );
};

export default Trailblazer;