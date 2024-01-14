import React from 'react';

import './safari.css';

import Header from '../components/header';
import Footer from '../components/footer';

import SafariHeader from '../SVG/SAFARI-Header.svg'
import Mag from '../SVG/Mag.svg'
import MoonLander from '../SVG/MoonLander.svg'
import SafArch from '../SVG/SafArch.svg'
import NormVsAd from '../SVG/NormVsAd.svg'
import SafMDP from '../SVG/SafMDP.svg'

const Safari = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                AI-SAFARI
            </div>

            <div className='center secondary-title'>
                A Simulation Testbed To Evaluate The Security Of Trained Reinforcement Learning Models
            </div>

            <div className='Safari-Header'>
                <img src={SafariHeader}/>
            </div>

            <div className='body-par'>
                #NOTE: This case study goes over the high level engineering concepts of the project. I am sharing what I was told I could share.
            </div>

            <div className='body-par-title-safari'>
                Background 
            </div>
            <div className='body-par'>
                With AI becoming a bigger part of government engineering systems, there is an urgent need to 
                test the security of trained models. 
            </div>
            <div className='body-par'>
                Many parts of those systems are powered by reinforcement learning models, many in which are susceptible 
                to adverserial attacks. 
            </div>
            <div className='body-par'>
                Being able to train a model and then attack it to see where
                its weaknesses are gives a lot of crucial information needed to build safe autonomous systems. That
                is where AI SAFARI comes in. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-safari'>
                The Project
            </div>
            <div className='body-par'>
                AI SAFARI stands for: AI Simulation for Assurance Foundations and Robust Intelligence. The goal is to 
                understand weak points of a trained policy and discover adverserial attack vectors. 
            </div>
            <div className='Mag'>
                <img src={Mag}></img>
            </div>
            <div className='body-par'>
                AI SAFARI provides the frameworks needed to train a policy, attack it, and collect the data needed 
                to evaluate the performance. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-safari'>
                Recreating OpenAI's Moon Lander
            </div>
            <div className='body-par'>
                To start building this capability, the team had to decide a scenario to build around. 
            </div>
            <div className='body-par'>
                Many of the common scenarios in the RL community, such as cartpole or taxi, are far too simple 
                to demonstrate to a government sponsor. The scenario has to be more realistic than a cartoon drawing
                and needs to be government related. 
            </div>
            <div className='body-par'>
                The team chose to use OpenAI's moon lander because there is a lot of resources available to 
                help us easily implement it into the framework. 
            </div>
            <div className='body-par'>
                It is also a government related topic that allows for a ton of experimentation. 
            </div>
            <div className='MoonLander'>
                <img src={MoonLander}></img>
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-safari'>
                Designing the Architecture
            </div>
            <div className='body-par'>
                There are two main components of this project: the simulation environment needed to train policies
                and the evaluation toolkit. 
            </div>
            <div className='body-par'>
                My role primarily focused on the simulation environments. However, I put a lot of work into building
                the pipelines to the evaluation toolkit. 
            </div>
            <div className='MoonLander'>
                <img src={SafArch}></img>
            </div>
            <div className='body-par'>
                The simulation piece has two parts: the environment that trains the agent and the environment
                that simulates the model during averserial attacks. 
            </div>
            <div className='MoonLander'>
                <img src={NormVsAd}></img>
            </div>
            <div className='body-par'>
                To train agents, we used NVIDIA's Isaac Sim package and StableBaseline3's PPO algorithm. 
                Using these two pieces, the team designed our own RL agent gymnasium similar to the one in the
                Aspen project:
            </div>
            <div className='MoonLander'>
                <img src={SafMDP}></img>
            </div>


            <div className='center secondary-title'>
            🏗️ 🚧 Currently under construction 🚧 🏗️
            </div>

            <Footer />
        </div>
    );
};

export default Safari;