import React from 'react';

import './aspen.css'; 

import Header from '../components/header';
import Footer from '../components/footer';

import UUV from "../SVG/UUV.svg";
import VenDiagram from "../SVG/VenDiagram.svg"
import AspenArchDiagram from "../SVG/AspenArch.svg"
import UUVLiDAR from "../SVG/UUVLiDAR.svg"
import ROSOcto from "../SVG/ROSOcto.svg"
import TeleopDiagram from "../SVG/Teleop.svg"
import AspenNN from "../SVG/AspenNN.svg"
import TrainingEnvs from "../SVG/TrainingEnvs.svg"

const Aspen = () => {
  return (
    <div>
      <Header />
      
      <div className='center main-title'>
        Aspen
      </div>

      <div className='center secondary-title'>
        Training UUVs to execute missions with AI, digital twins, and high fidelity physics simulation
      </div>

      <div className='UUV-header'>
        <img src={UUV}/>
      </div>

      <div className='body-par'>
        #NOTE: This case study goes over the high level engineering concepts of the project. I am sharing what I told I could share.
      </div>

      <div className='body-par-title'>
        The Premise
      </div>

      <div className='body-par'>
        AI is evolving at lightning speed. With all of the recent 
        advancements, it is critical that the US Government has an autonomy stack that is completely state-of-the-art.
      </div>

      <div className='body-par'>
        But there are many challenges when integrating AI into existing frameworks. 

        How do engineers know if AI algorithms are
        ready to be deployed for real life situations? 

        Can AI actually solve the problems that high ranking officials want it to solve?

        How can this development be done in a time and cost effective way?
      </div>

      <div className='body-par'>
        The government is looking for answers to all of these questions. 
        That is where project Aspen comes in. 
      </div>

      <br></br>
      <br></br>

      <div className='body-par-title'>
        The Challenge
      </div>

      <div className='body-par'>
        Adding autonomy to unmanned vehicles is an area of interest for the government. However, many unmanned vehicles do not
        come with a built-in autonomous capabilities. To figure out how to add autonomy to pre-existing UUVs, MITRE formed project Aspen.
      </div>

      <div className='body-par'>
        The project objective is straightforward: how can we use AI to train a UUV to execute real life missions completely autonomously?
      </div>

      <br></br>
      <br></br>

      <div className='body-par-title'>
        The Approach 
      </div>
      <div className='body-par'>
        Digital twin technology is on the rise as much as AI and the two go hand in hand. 
      </div>
      <div className='body-par'>
        With breakthroughs in GPU hardware, the clear choice was to build 
        high fidelity digital twins of the UUV and the training environments, model the physics, and then conduct the machine learning.
      </div>
      <div className='VenDiagram'>
        <img src={VenDiagram}/>
      </div>

      <br></br>
      <br></br>

      <div className='body-par-title'>
        An AI Gym For UUVs
      </div>
      <div className='body-par'>
        I played a large role in designing the deep reinforcement learning (DRL) simulation testbed that trains and tests our UUV models. 
      </div>
      <div className='body-par'>
        The testbed is designed to train and evaluate DRL algorithms within adverserial environments. 
      </div>
      <div className='body-par'>
        Aspen partnered up with NVIDIA to leverage their high end GPU hardware and optimized software Isaac Sim. Isaac Sim produces
        photorealistic graphics which serves as high quality synthetic data. This synthetic data is key for creating robust DRL models. 
      </div>
      <div className='ArchDiagram'>
        <img src={AspenArchDiagram}/>
      </div>

      <br></br>
      <br></br>

      <div className='body-par-title'>
        UUV Modeling and Simulation
      </div>
      <div className='body-par'>
        To get the AI model to accuratley control the UUV, a high fidelity physics model is necessary. 
      </div>
      <div className='body-par'>
        I am working with acoustic and hydrodynamic experts to build a 6 degree of freedom Python UUV physics model that interacts
        with the Isaac Sim API. We have built off other UUV models to create our own that can be used for GNC applications. 
      </div>
      <div className='body-par'>
        Isaac Sim also includes a sensor package that is added to the UUV 3D model. UUVs are often equipped with side scan sonars and
        fathometers. To simulate those sensors, we used a LiDAR sensor module and applied a convolution to the raycast to mimic underwater
        signal propogation. While this prototype is in early stages, it has shown promising results. 
      </div>
      <div className='UUVLiDAR'>
        <img src={UUVLiDAR}/>
      </div>
      <div className='body-par'>
        Another critical component when building physics models is unit tests! I wrote a UUV test library using Python Unittest which is still used to this day.
      </div>

      <br></br>
      <br></br>

      <div className='body-par-title'>
        Advanced Autonomy With ROS 2
      </div>
      <div className='body-par'>
        No robot project is complete without ROS. We selected ROS 2 for its wide variety of capabilities, including Nav2 for SLAM, 
        Octomap, and built in control algorithms. 
      </div>
      <div className='body-par'>
        Integrating ROS 2 into our existing architecture was an easy process. Isaac Sim provides a ROS 2 bridge that allows for nodes to publish and
        subscribe to information during the simulation.
      </div>
      <div className='body-par'>
        Because our physics model has input values for control, we connected the inputs to a teleop node so it can be controlled through ROS 2. 
      </div>
      <div className='teleop'>
        <img src={TeleopDiagram}/>
      </div>
      <div className='body-par'>
        We also included a 3D model of the UUV and the bathymetry in Octomap. ROS subscribes to the LiDAR simulation within Isaac Sim to build a voxel map
        of the terrain in real time. 
      </div>
      <div className='octomap'>
        <img src={ROSOcto}/>
      </div>
      <div className='body-par'>
        This voxel map can be used for SLAM and gives the AI model another level of high fidelity information to make better informed decisions. 
      </div>

      <br></br>
      <br></br>
      <div className='body-par-title'>
        Training The UUV
      </div>
      <div className='body-par'>
        With all of the foundational pieces in place, the next phase is to train the UUV. 
      </div>
      <div className='body-par'>
        Reinforcement learning is the method of choice because it is the technique that is best suited for robots and controls. 
      </div>
      <div className='body-par'>
        PPO (proximal policy optimization) is the algorithm of choice. It is the current-state-art for robotic control for both continuous and discrete action spaces
      </div>
      <div className='body-par'>
        For many of our use cases, both continuous and discrete action spaces are used, which adds a layer of sophistication to the nueral network design. 
      </div>
      <div className='AspenNN'>
        <img src={AspenNN}/>
      </div>

      <br></br>
      <br></br>
      <div className='body-par-title'>
        Large Scale Reinforcement Learning
      </div>
      <div className='body-par'>
        Aspen's partnership with NVIDIA has given us access to the world's best compute power. We are pushing AI to the edge by using GPU clusters 
        for faster training and more robust models. This makes it significantly easier to iterate and test algorithms when models are returned quickly. 
      </div>
      <div className='body-par'>
        The team has also made a strong effort to design everything so model training can be done in parallel. Parallel training environments with domain randomization
        allow for agents to not overfit to a single environment or task. 
      </div>
      <div className='training-envs'>
        <img src={TrainingEnvs}/>
      </div>
      <div className='body-par'>
        This gives engineers confidence that when the model is deployed to hardware it can handle any environment that it may encounter. A limited AI model 
        that can only work in certain conditions is useless.
      </div>
      <br></br>
      <br></br>

      <div className='center-title'>
        Leadership Opportunities 
      </div>
      <div className='body-par'>
        Aspen has given me a ton of experience with professional demonstrations, presentations, and leadership opportunities:
      </div>
      <div class="styled-list">
        Presented project work at I/ITSEC 2023
        <br></br>
        <br></br>

        Performed multiple demos to leaders of autonomy at NVIDIA, Microsoft, the Navy, and MITRE
        <br></br>
        <br></br>

        Project work presented to CEO and CTO during digital twin happy hour
        <br></br>
        <br></br>

        Created DoD demo content for NVIDIA using Isaac Sim
        <br></br>
        <br></br>

        Aspen work demonstrated at MITRE tech talk with over 100 people in attendance 
        <br></br>
        <br></br>

        Led training workshops to help teammates get up to speed with Isaac Sim
      </div>
      <br></br>
      <br></br>

      <div className='center-title'>
        Notable Project Outcomes
      </div>
      <div className='body-par'>
        While the Aspen is still in progress, my work has contributed to the following accomplishments:
      </div>
      <div class="styled-list">
        A direct quote from a NVIDIA executive: "MITRE's Aspen work is the most advanced use of NVIDIA Isaac Sim across the DoD"
        <br></br>
        <br></br>

        Having the Aspen autonomy framework selected to host a government challenge for UUVs
        <br></br>
        <br></br>

        Recieving six months of project funding because of successful demos 
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>

      <div className='body-par-title'>
        Conculsion
      </div>
      <div className='body-par'>
        Working on Aspen has been a career changing experience. I have learned so much and got the chance to work on cutting edge engineering problems. 
        Furthermore, I have learned the importance of communicating our ideas and results clearly during high stakes presentations and demonstrations. 
      </div>
      <div className='body-par'>
        I look forward to working on more projects like Aspen in the future. 
      </div>

      <Footer />
    </div>
  );
};

export default Aspen;