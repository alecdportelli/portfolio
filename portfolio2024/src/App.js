import React from 'react';
import './App.css'; 

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './components/header-main';
import ImageRow from './components/imageRow';
import TextTypingEffectWithTextsFadeOut from "./components/TextTypingEffectWithTextsFadeOut";

import proj1Tile from "./SVG/proj1.svg";
import proj2Tile from "./SVG/proj2.svg";
import proj3Tile from "./SVG/proj3.svg";
import proj4Tile from "./SVG/proj4.svg";
import proj5Tile from "./SVG/proj4_1.svg";
import proj6Tile from "./SVG/Proj6.svg";

import Footer from './components/footer';

import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  const projectRowOne = [
    { src: proj1Tile, title: 'Aspen', description: 'Combining RL and simulation to train UUVs in digital environments', path: 'aspen' },  
    { src: proj2Tile, title: 'Trailblazer', description: 'A 3D electronic warfare sandbox', path: 'trailblazer' }, 
    { src: proj6Tile, title: 'UAV Systems and Control', description: 'Building and controlling a UAV from scratch', path: 'robokin' }, 
  ];

  const projctRowTwo = [
    { src: proj3Tile, title: 'AI-SAFARI', description: 'A testbed to evaluate the security of RL algorithms', path: 'safari' },  
    { src: proj5Tile, title: 'Intro to RL Final Project', description: 'Training multi-agent UAV delivery systems in Unity', path: 'rl' }, 
    { src: proj4Tile, title: 'Falcon', description: 'A 3D visualization tool for electronic warfare scenarios', path: 'falcon' }, 
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="App">
      <Header />
      
      <div className='text-anim'>
        <div className='typingEffectStyle'>
            <TextTypingEffectWithTextsFadeOut />
          </div>
          {/* Scroll Button */}
          <button onClick={scrollToProjects} className="scroll-button">
            See My Projects
          </button>
      </div>
      
      {/* Projects Section */}
      <section id="projects">
        <div className='projects'>
          <ImageRow images={projectRowOne} />
          <ImageRow images={projctRowTwo} />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
