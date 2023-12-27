// App.js
import React from 'react';
import './App.css'; 


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';


import Header from './components/header';
import ImageRow from './components/imageRow';


import proj1Tile from "./SVG/proj1.svg";
import proj2Tile from "./SVG/proj2.svg";
import proj3Tile from "./SVG/proj3.svg";
import proj4Tile from "./SVG/proj4.svg";
import proj5Tile from "./SVG/proj4_1.svg";
import proj6Tile from "./SVG/Proj6.svg";


import Footer from './components/footer';

/* Pages */
import Aspen from './aspen'; // Import your new page component

function App() {
  const projectRowOne = [
    {src: proj1Tile, title: 'Aspen', description: 'Combining RL and simulation to train UUVs in digital environments', path: 'aspen'},  
    {src: proj2Tile, title: 'Trailblazer', description: 'A 3D electronic warfare sandbox', path: 'trailblazer'}, 
    {src: proj3Tile, title: 'AI-SAFARI', description: 'A testbed to evaluate the security of RL algorithms', path: 'safari'}, 
  ];

  const projctRowTwo = [
    {src: proj4Tile, title: 'Falcon', description: 'A 3D visualization tool for electronic warfare scenarios', path: 'falcon'},  
    {src: proj5Tile, title: 'Intro to RL Final Project', description: 'Training multi-agent UAV delivery systems in Unity', path: 'rl'}, 
    {src: proj6Tile, title: 'Robot Kinematics and Dynamics Final Project', description: 'A python library to generate equations of motion for any robot', path: 'robokin'}, 
  ];

  return (
    <div className="App">
      <Header />
      <section className="about">
        
        <span>
          I'm an engineer with interests at the intersection of AI, simulation, 
          and human-centered design
        </span>
        <br></br>
        <div className='secondaryHeader'>
          <span>
            Currently building autonomous systems at the MITRE corporation and pursuing a masters in robotics at Johns Hopkins
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
