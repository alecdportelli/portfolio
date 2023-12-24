// App.js
import React from 'react';
import './App.css'; 

import Header from './components/header';
import ImageRow from './components/imageRow';

import proj1Tile from "./SVG/proj1.svg";
import proj2Tile from "./SVG/proj2.svg";
import proj3Tile from "./SVG/proj3.svg";
import proj4Tile from "./SVG/proj4.svg";
import proj5Tile from "./SVG/proj4_1.svg";
import proj6Tile from "./SVG/Proj6.svg";

import Footer from './components/footer';

function App() {
  const projectRowOne = [
    {src: proj1Tile, title: 'Aspen', description: 'Combining RL and simulation to train UUVs in digital environments'},  
    {src: proj2Tile, title: 'Trailblazer', description: 'A 3D electronic warfare sandbox'}, 
    {src: proj3Tile, title: 'AI-SAFARI', description: 'A testbed to evaluate the security of RL algorithms'}, 
  ];

  const projctRowTwo = [
    {src: proj4Tile, title: 'Falcon', description: 'A 3D visualization tool for electronic warfare scenarios'},  
    {src: proj5Tile, title: 'Intro to RL Final Project', description: 'Training multi-agent UAV delivery systems in Unity'}, 
    {src: proj6Tile, title: 'Robot Kinematics and Dynamics Final Project', description: 'A python library to generate equations of motion for any robot'}, 
  ];

  return (
    <div className="App">
      <Header />
      <section className="about">
        
        <span>
          I'm an engineer with interests at the intersection of AI, computer graphics, simulation, 
          and human-centered design
        </span>
        <br></br>
        <div className='secondaryHeader'>
          <span>
            Currently building autonomous systems at MITRE and pursuing a masters in robotics at Johns Hopkins
          </span>

          {/* <span>This is a sentence with a </span>
          <span style={{ color: 'blue' }}>different</span>
          <span> colored word.</span> */}

          {/* <span>
             at MITRE and pursuing a masters in robotics at Johns Hopkins
          </span> */}
        </div>
      </section>
      
      {/* Projects */}
      <section>
        <div className='projects'>
          <ImageRow images={projectRowOne} />
          <ImageRow images={projctRowTwo} />
        </div>
      </section>

      <section>
          <Footer />
      </section>

      {/* Add more sections/components as needed */}
    </div>
  );
}

export default App;
