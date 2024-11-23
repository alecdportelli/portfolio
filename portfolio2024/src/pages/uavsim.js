import React from 'react';

import './uavsim.css';

import Header from '../components/header';
import Footer from '../components/footer';
import RLHeader from '../SVG/RLHeader.svg'
import RLArch from '../SVG/RLArch.svg'

import DroneAgentPic from '../media/drone_agent.png'
import VoxelWorld from '../media/voxel.png'
import Training from '../media/training.png'

import RLNN from '../SVG/RLNN.svg'
import RewEq from '../SVG/RewEq.svg'

import EpLength from '../media/ep_length.png'
import Loss from '../media/loss.png'
import Reward from '../media/reward.png'

import { useEffect } from "react"

const UAVSim = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    return (
        <div>
            <Header />

            <div className='center main-title'>
                Intro To RL Final Project
            </div>

            <div className='center secondary-title'>
                Using reinforcement learning for enhanced multi-agent coordination 
            </div>
            <br></br>
            <div className='RLDroneHeader'>
                <img src={RLHeader}></img>
            </div>

            <div className='body-par-title-rl'>
                Background
            </div>
            <div className='body-par'>
                Reinforcement learning is a really important part of
                autonomous system development, especially with the rise
                of high performance computing. 
            </div>
            <div className='body-par'>
                The final project for Intro To Reinforcement Learning was to 
                train a model using one of the techniques learned in class.
            </div>
            <div className='body-par'>
                Because of my interests in drones and game engines, I wanted to 
                train a drone to navigate an environment using the Unity MLAgents package. 
            </div>
            <div className='body-par'>
                I chose this topic because it can be used to test 
                multi-agent reinforcement learning techinques, which is 
                a unsolved problem in autonomy right now. 
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Project Objective
            </div>
            <div className='body-par'>
                The objective of the research project is to teach the drones to make the 
                correct navigation decision using a technique called curriculum learning.
            </div>
            <div className='body-par'>
                Curriculum learning starts the agent off with a easy task to solve, 
                and then, if it performs well, the tasks get increasingly more difficult. 
            </div>
            <div className='body-par'>
                This teaches drones learn to navigate simple environments
                first, giving them a chance to build up the skills needed to tackle realistic scenarios. 
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Project Approach
            </div>
            <div className='body-par'>
                A lot of reinforcement learning systems start with the control of the vehicle and then
                have it make decisions on where to go.
            </div>
            <div className='body-par'>
                However, RL in some cases doesn't provide superior control as opposed to 
                traditional methods such as a PID. 
            </div>
            <div className='body-par'>
                I chose to take a different approach where the RL makes the decison to choose the setpoint 
                for the PID, rather than the RL model controlling every component.
            </div>
            <div className='body-par'>
                This simplifies the RL model which makes it easier to train and evaluate. 
            </div>
            <div className='RLArchGraphic'>
                <img src={RLArch}></img>
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Agent Task
            </div>
            <div className='body-par'>
                The task for the drones was to navigate voxel environments for package delivery and return. 
            </div>
            <div className='body-par'>
                The drones needed to maneuver around obstacles and other drones to reach their delivery goals. 
            </div>
            <div className='body-par'>
                Key aspects of this task included localization and navigation, essential components
                of effective drone delivery systems.
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Building The Environment 
            </div>
            <div className='body-par'>
                The simulation used Unity, which provided a flexible and customizable 
                platform through its physics engine and world building API.
            </div>
            <div className='body-par'>
                The training process initiated with a simple 3D 36x36x5 voxel environment. 
            </div>
            <div className='image-container'>
                <div className='centered-img'>
                    <img src={VoxelWorld}></img>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='body-par'>
                Voxel environments were chosen so the agents
                could navigate around the world with a little more
                ease. 
            </div>
            <div className='body-par'>
                This also allows for the use of discrete PPO,
                which was deemed as the better choice to work
                with curriculum learning.
            </div>
            <div className='body-par'>
                Obstacles in the simulation were randomly configured buildings.
            </div>
            <div className='body-par'>
                Five different building prefabs 
                with colliders were used, each varying in shape and size to add complexity. 
            </div>
            <div className='body-par'>
                The number of buildings spawned increased with the stage of the curriculum 
                learning process, making the environment progressively more difficult for the agent.
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Building The Agent 
            </div>
            <div className='body-par'>
                The first step was to figure out how the agent would navigate the environment. 
            </div>
            <div className='body-par'>
                Because I only had 3 weeks to complete the task, I didn't build a custom physics model
                for the drone (see my UAV control project for that). 
            </div>
            <div className='body-par'>
                However, I wanted this to be a 3D simulation, so the drone was able to move up, down,
                left, right, forwards, and backwards, but only in those directions. 
            </div>
            <div className='body-par'>
                I also gave the drone a really simple LiDAR attachment that went out in the four cardinal
                directions, which gives it the ability to detect objects around it. 
            </div>
            <div className='image-container'>
                <div className='centered-img'>
                    <img src={DroneAgentPic}></img>
                </div>
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Model Design 
            </div>
            <div className='body-par'>
                The simulation is structured episodically, 
                ending when the agent fails the task or exceeds 5000 steps.
                A per-step penalty ensures task efficiency.
            </div>
            <div className='body-par'>
                Using the Markov Decision Process (MDP) framework, states, 
                actions, transitions, and rewards are defined.
            </div>
            <div className='body-par'>
                Proximal Policy Optimization (PPO) 
                refines the drone's decision-making, 
                balancing exploration and exploitation.
            </div>
            <div className='body-par-title-rl-small'>
                State Space:
            </div>
            <div className='body-par'>
                The state is discrete, which is
                represented by a 1x13 vector.
            </div>
            <div className='body-par'>
                The reward state includes the XYZ position of the
                agent, the XYZ of the other drone within
                the simulation, the XYZ position of the
                goal, and the four values of the LiDAR
                which represent the distances of nearby
                objects.
            </div>
            <div className='body-par-title-rl-small'>
                Action Space:
            </div>
            <div className='body-par'>
                The actions are discrete, which
                are represented in a 1x6 vector. The agent
                can move up, down, left, right, forwards,
                backwards.
            </div>
            <div className='RLArchGraphic'>
                <img src={RLNN}></img>
            </div>
            <div className='body-par-title-rl-small'>
                Reward Space:
            </div>
            <div className='body-par'>
                The reward was shaped so that
                there was a major reward for reaching the
                goal, which is the ultimate objective of
                the task. 
            </div>
            <div className='body-par'>
                However, there was a very large
                penalty for hitting the other drone or
                colliding into a building. This is because
                the first learned behavior of the drone is
                to not just go for the goal as the crow
                flies. 
            </div>
            <div className='body-par'>
                The navigation skills that are needed
                to get to the goal come from obstacle
                avoidance and using the observations to
                localize the agent within the simulation.
            </div>
            <div className='body-par'>
                There is a smaller penalty for the done
                going out of bounds of the simulation
                environment and for each step taken. 
            </div>
            <div className='body-par'>
                This decision makes sure that the agent is taking the
                optimal path to get to the goal.
                The reward equation can be expressed as:
            </div>
            <div className='RLArchGraphic'>
                <img src={RewEq}></img>
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Training The Model
            </div>
            <div className='body-par'>
                The agent trained in these six parallel environments for 50,000 steps 
                without curriculum learning. 
            </div>
            <div className='image-container'>
                <div className='centered-img'>
                    <img src={Training}></img>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='body-par'>
                Following this, curriculum learning was introduced. 
            </div>
            <div className='body-par'>
                Agents started at level 1, with building density reduced by five times. As the 
                average reward improved, the environment difficulty increased every 10,000 steps. 
            </div>
            <div className='body-par'>
                The agent then trained for 50,000 steps using curriculum learning.
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Results
            </div>
            <div className='body-par'>
                The baseline approach showed fluctuating reward scores, indicating ongoing learning but at a lower overall reward compared 
                to the curriculum approach. The RL algorithm struggled without progressive learning stages, 
                resulting in inconsistent performance.
            </div>
            <div className='body-par'>
                The curriculum approach yielded higher overall reward scores, with the agent quickly adapting to simpler environments. 
                However, as complexity increased, the improvement plateaued, indicating challenges in adapting to more complex scenarios. 
                This approach highlighted a trade-off: rapid early learning versus sustained adaptability.
            </div>
            <div className='body-par'>
                The results suggest that while curriculum learning accelerates early-stage learning, 
                it may struggle with higher difficulty levels.
            </div>
            <div className='body-par'>
                Balancing rapid early learning and 
                sustained adaptability is crucial for optimal 
                performance in diverse and challenging delivery scenarios.
            </div>
            <div className='body-par'>
                Here are charts of the results, where pink is the baseline and purple is the curriculum learning. 
            </div>
            <div className='image-container'>
                <div className='centered-img'>
                    <img src={Loss}></img>
                </div>
            </div>
            <div className='body-par-title-rl-small'>
                Loss Over Time
            </div>
            <div className='image-container'>
                <div className='centered-img'>
                    <img src={EpLength}></img>
                </div>
            </div>
            <div className='body-par-title-rl-small'>
                Episode Length Over Time
            </div>
            <div className='image-container'>
                <div className='centered-img'>
                    <img src={EpLength}></img>
                </div>
            </div>
            <div className='body-par-title-rl-small'>
                Reward Over Time
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Future Considerations
            </div>
            <div className='body-par'>
                Moving forward, the reinforcement learning (RL)
                approach for drone training can be refined by
                fine-tuning curriculum parameters, striking a
                balance for adaptability in diverse environments.
                Hybrid Approaches can be utilized to explore
                models integrating curriculum learning with non-
                curriculum methods.
            </div>
            <div className='body-par'>
                It may be possible to leverage strengths from both
                approaches to address observed limitations. It
                helps with scaling to real world environments.
                This can be done by evaluating the generalization
                of learned behaviors, considering real-world
                dynamics and environmental conditions.
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-rl'>
                Conclusion
            </div>
            <div className='body-par'>
                The project successfully showcased the advantages of integrating curriculum learning 
                with Proximal Policy Optimization (PPO) 
                for training multi-agent drone delivery systems, 
                highlighting significant improvements in early-stage learning and overall performance. 
            </div>
            <div className='body-par'>
                Despite the challenges faced in adapting to more complex scenarios, the results emphasize the potential of curriculum learning in 
                enhancing the adaptability and efficiency of reinforcement learning algorithms in dynamic and realistic environments.
            </div>
            <div className='body-par'>
                I look forward to working on projects like this in the future. 
            </div>

            <Footer />
        </div>
    );
};

export default UAVSim;