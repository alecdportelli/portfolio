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
import DRLSAT from '../SVG/DRL-SAT.svg'
import RocketDiagram from '../SVG/RocketDiagram.svg'
import CameraFrustrum from '../SVG/CameraFrust.svg'
import NNARch from '../SVG/SafNNArch.svg'

const Safari = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                AI-SAFARI
            </div>

            <div className='center secondary-title'>
                A simulation testbed to evaluate the security of trained reinforcement learning models
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
            <div className='body-par'>
                Once a model has been trained, a user can add attack vectors on to the agent and set
                a config file with experiment parameters. 
            </div>
            <div className='body-par'>
                The data points from the attack are collected, and the policies
                can then be compared using the evaluation toolkit. 
            </div>
            <div className='DRLSAT'>
                <img src={DRLSAT}></img>
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-safari'>
                Building Moon Lander In 3D
            </div>
            <div className='body-par'>
                2D scenarios are not useful for government sponsors, so the first step
                was to rebuild the physics in 3D. 
            </div>
            <div className='body-par'>
                Using diagrams from online, some college physics review, and the NVIDIA articulation
                API, we were able to create a basic kinematic model of a rocket:
            </div>
            <div className='RocketDiagram'>
                <img src={RocketDiagram}></img>
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-safari'>
                Sensor Fusion
            </div>
            <div className='body-par'>
                Sensor fusion is a great way to add additional information beyond just the kinematic state
                of the rocket. 
            </div>
            <div className='body-par'>
                A camera was added to the side of the rocket to assist with landing, along with a fake LiDAR
                that can detect the distance from the ground.
            </div>
            <div className='body-par'>
                While sensor fusion adds realism to the simulation, it also adds attack vectors that an
                adversary can take advantage of. This is helpful for designing experiments on how to
                attack each sensor and to see how it can mess with the trained model. 
            </div>
            <div className='MoonLander'>
                <img src={CameraFrustrum}></img>
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-safari'>
                Training The Rocket
            </div>
            <div className='body-par'>
                To train the rocket to land we used PPO and a continuous action space. The part that
                makes this interesting is that we used the camera feed to guide the rocket to the landing
                pad. 
            </div>
            <div className='body-par'>
                We combined a CNN with an MLP to train the models to control the rocket:
            </div>
            <div className='DRLSAT'>
                <img src={NNARch}></img>
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-safari'>
                Attacking The Model 
            </div>
            <div className='body-par'>
                The next phase of the project was coming up with experiments 
                on how to confuse the camera. 
            </div>
            <div className='body-par'>
                The goal was to add pertubations that were as invisible to the naked
                eye as much as possible.
            </div>
            <div className='body-par'>
                Ideas included: adding a water mark on to the camera lens, 
                changing a filter, putting a sticker or foreign object on the landing pad. 
            </div>
            <div className='body-par'>
                The data was collected during the adverserial attack and then piped into the 
                evaluation toolkit. 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-safari'>
                Takeaways 
            </div>
            <div className='body-par'>
                The number one lesson I learned from this project is that
                machine learning models are brittle!
            </div>
            <div className='body-par'>
                Even though our moon lander scenario was simple, we quickly found ways 
                to disturb the camera feed which sent the rocket out of control. 
            </div>
            <div className='body-par'>
                This means our model had a lack of complex agent interactions, and 
                was not nearly as robust as it needed to be to withstand attacks. 
            </div>
            <div className='body-par'>
                It is incredibly important when using digital twins and simulation techniques 
                to ensure that as many cases are covered as possible. That way when something 
                out of the ordinary happens, the model is prepared for the unexpected. 
            </div>
            <div className='body-par'>
                It is also extremely difficult to understand why models break when they do.
                Without the evaluation toolkit it is virtually impossible to figure out what causes
                a failure and what can be done to avoid it. 
            </div>
            <div className='body-par'>
                Creating evalution toolkits and being able to design and control adverserial attacks
                helps security engineers demystify the model's black box.
            </div>
            <br></br>
            <br></br>


            <div className='center-title-saf'>
                Notable Project Outcomes
            </div>
            <div className='body-par'>
                AI SAFARI allowed me to partake in internal R and D work and present the findings to MITRE:
            </div>
            <div class="styled-list">
                Presented at the MITRE R and D Spring review
                <br></br>
                <br></br>
                Presented at the MITRE R and D Fall review
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-safari'>
                Conculsion 
            </div>
            <div className='body-par'>
                As automation becomes a bigger part of society, AI SAFARI has exposed
                me to the importance of keeping AI safe and secure and the challenges that come with
                it. 
            </div>
            <div className='body-par'>
                I was able to get hands on experience with using PyTorch, the Isaac Sim API,
                and other tools to build and break trained models. I greatly enjoyed 
                working with other AI engineers to creeate the tools needed to help solve
                real world problems.
            </div>
            <div className='body-par'>
                I look forward to working on projects like AI SAFARI in the future. 
            </div>

            <Footer />
        </div>
    );
};

export default Safari;