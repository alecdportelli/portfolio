import React from 'react';

import './ai4robot.css'; 

import { useEffect } from "react";

import Header from '../components/header';
import Footer from '../components/footer';
import CodeSnippet from '../components/codeBlock'

import AI4Header from '../SVG/AI4Header.svg'
import ArmDiagram from '../SVG/ArmDiagram.svg'
import Cam2Arm from '../SVG/Cam2Arm.svg'
import Diagram from '../SVG/AI4Diagram.svg'
import Target from '../media/target.png'
import CNNDiagram from '../SVG/CNNArch.svg'
import IK from "../SVG/IK.svg"

import RobotVideoComponent from '../components/RobotVideoComponent'


const AI4Robot = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); // This ensures it runs only on component mount
  
    const JSONexample = 
    `
        {
            "UnityPosition": {
                "x": -5.550567626953125,
                "y": 0.5,
                "z": 4.19307804107666
            },
            "PixelPosition": {
                "x": 65,
                "y": 80
            }
        }
    `;
  
    return (
      <div>
        <Header />  

        <div className='center main-title'>
            AI For Robots Final Project
        </div>

        <div className='center secondary-title'>
            A full autonomy pipeline to control a digital robotic arm
        </div>

        <div className='AI4-header'>
            <img src={AI4Header}/>
        </div>

        
        {/*******************************************
                        PROJECT CONTEXT
         ********************************************/}
        <div className='AI4-body-header'>
            Project Context
        </div>
        <div className='body-par'>
            The class curriculum was an overview of how AI applies to 
            different fields of robotics such as motion planning and controls.
        </div>
        <div className='body-par'>
            The final project was to design and implement an autonomous system
            that completes a simple task. 
        </div>
        <div className='body-par'>
            I decided to build a robot arm that would be controlled by a camera. 
        </div>
        <div className='body-par'>
            I chose the robot arm because there are many different components that would have to be developed 
            like position solvers, PID controllers, and a trained computer vision model. 
        </div>


        {/*******************************************
                    ROBOT DESIGN AND MODELING
         ********************************************/}
        <div className='AI4-body-header'>
            Robot Design and Modeling 
        </div>
        <div className='body-par'>
            The first step was to design and model the robot arm. 
        </div>
        <div className='body-par'>
            I chose to do all the designing in Unity because it made it easy
            to integrate the robot within the simulation.
        </div>
        <div className='body-par'>
            I went with a 2-planar robot that could rotate at the base, giving
            it 3 total degrees of freedom. 
        </div>
        <div className='AI4-ArmDiagram'>
            <img src={ArmDiagram}/>
        </div>


        {/*******************************************
                    SOFTWARE ARCHITECTURE 
         ********************************************/}
        <div className='AI4-body-header'>
            Software Architecture
        </div>
        <div className='body-par'>
            Once the robot arm was modeled, it was time to figure out how to build
            all the software to control it. 
        </div>
        <div className='body-par'>
            The basic pipeline design is camera takes a picture of the target,
            a CNN detects the position, and then inverse kinematics is performed to calculate
            the rotation of each joint. 
        </div>
        <div className='Cam2Arm'>
            <img src={Cam2Arm}/>
        </div>
        <div className='body-par'>
            I used Unity for the rendering, but I wanted to write a generic robot backend in Python that
            I can use for other projects. 
        </div>
        <div className='body-par'>
            Python allows for more flexibility and has more libraries for machine learning than Unity's C#
            API. Having distributed components is common in robot applications so I wanted to make 
            sure I was following the same design. 
        </div>
        <div className='body-par'>
            I built a bidirectional connection between Unity and the Python backend so the two can constantly
            communicate. 
        </div>
        <div className='body-par'>
            I used TCP because speed in this case was not super important, and the message format was JSON
            because I have used it in the past and it works well in most situations. 
        </div>
        <div className='body-par'>
            This diagram shows the fully designed system:
        </div>
        <div className='Diagram'>
            <img src={Diagram}/>
        </div>


        {/*******************************************
            Synthetic Data For Computer Vision
         ********************************************/}
        <div className='AI4-body-header'>
            Synthetic Data For Computer Vision
        </div>
        <div className='body-par'>
            Computer vision models need a lot of data. One of the biggest advantages
            of simulation is that it is super easy to generate synthetic data to train models.
        </div>
        <div className='body-par'>
            For my use case, the CV model needs to detect where the target is and return
            the pixel coordinates. 
        </div>
        <div className='body-par'>
            To create images to train the model, I wrote a script that placed the target 
            in random locations, used Unity's camera feature to take a picture, and saved
            the image to a local directory. 
        </div>
        <div className='body-par'>
            To simplify the problem, I calculated the maximum and minimum 
            distance the robot arm could reach, and only placed points within
            that radius. 
        </div>
        <div className='image-container'>
            <div className='centered-img-medium'>
                <img src={Target}></img>
            </div>
        </div>
        <div className='body-par'>
            In this case every random target was spawned in the blue area. It also important
            to note that the target (the white cube) is always on the ground (Z position is 0).
        </div>
        <div className='body-par'>
            This further simplifies the problem because I didn't have to consider depth
            perception, which is a tricky task in itself. 
        </div>


        {/*******************************************
         *             DATA LABELING                *
         ********************************************/}
        <div className='AI4-body-header'>
            Data Labeling 
        </div>
        <div className='body-par'>
            The image generation script produced over 2000 256x256 unique images.
        </div>
        <div className='body-par'>
            However, each image needs a label for the model to figure out 
            what it is looking for. 
        </div>
        <div className='body-par'>
            I didn't want to draw 2000 bounding boxes, so I used Unity's 
            camera API to take the targets XYZ coordinates and convert those into
            a pixel coordinate. 
        </div>
        <div className='body-par'>
            I took the target's XYZ coordinates and pixel coordinate
            and created a corresponding JSON file for each image saved 
            in a separate directory. 
        </div>
        <div className='AI4codeSnippetStyle'>
            <CodeSnippet code={JSONexample} />
        </div>
        <div className='body-par'>
            This archived all the necessary information needed 
            for each picture plus it saved me from drawing 2000 bounding
            boxes. 
        </div>


        {/*******************************************
         *            BUILD/TRAIN THE MODEL         *
         ********************************************/}
        <div className='AI4-body-header'>
            Training The Model
        </div>
        <div className='body-par'>
            With all of the data ready, it was finally time to train the model. 
        </div>
        <div className='body-par'>
            I used PyTorch to put together a convolutional neural network (CNN):
        </div>
        <div className='CNNDiagram'>
            <img src={CNNDiagram}/>
        </div>
        <div className='body-par'>
            The model takes in the 256 by 256 image which has 3 channels for RBG. The return
            is the X and Y pixel position of the target in the image. 
        </div>
        <div className='body-par'>
            Since the dataset was pretty big but not huge, I trained for 50 epochs. I did not want
            to train too much because that would end up over fitting the model. 
        </div>


        {/*******************************************
         *            INVERSE KINEMATICS            *
         ********************************************/}
        <div className='AI4-body-header'>
            Inverse Kinematics
        </div>
        <div className='body-par'>
            To convert a target position to joint rotations, inverse kinematics is needed.
        </div>
        <div className='body-par'>
            I wrote a function in the Python backend to first take the pixel position of the target and 
            convert that into back into XYZ coordinates. 
        </div>
        <div className='body-par'>
            The XYZ coordinates were then passed into a inverse kinematics function. The function used the 
            following equations to return a "elbow up" answer:
        </div>
        <div className='IKDiagram'>
            <img src={IK}/>
        </div>
        <div className='body-par'>
            Important to note that the base joint rotation was calculated with arctan 
            to get the azimuth angle.
        </div>


        {/*******************************************
         *               PID CONTROLLERS            *
         ********************************************/}
        <div className='AI4-body-header'>
            PID Controllers
        </div>
        <div className='body-par'>
            Once the angles are computed they are sent back to Unity. 
        </div>
        <div className='body-par'>
            Those angles are then used as setpoints for the PID controllers. 
        </div>
        <div className='body-par'>
            There is a PID controller for each joint that gets updated every physics step. 
        </div>
        <div className='body-par'>
            In a real robot arm, there might be a PID controlling the voltage to induce a RPM 
            that ultimatley causes a torque.
        </div>
        <div className='body-par'>
            However, due to time limitations, torque and voltage mapping were not modeled, so the PIDs simply
            calculate the error and rotate the joint until the error is zero. 
        </div>
        <div className='body-par'>
            This ultimatley places the end effector where the target 
            is within the simulation to complete the task!
        </div>


        {/*******************************************
         *              Demonstration               *
         ********************************************/}
        <div className='AI4-body-header'>
            Video Demonstration
        </div>
        <RobotVideoComponent />


        {/*******************************************
         *           Current Limitations            *
         ********************************************/}
        <div className='AI4-body-header'>
            Current Limitations
        </div>
        <div className='body-par'>
            With any system engineering project, it is important to know
            the current limitations and where future improvements can be made.
        </div>
        <div className='body-par'>
            The robot model could be more physically accurate. Right now the model
            doesn't have properties such as mass or inertia.
        </div>
        <div className='body-par'>
            The robot model also doesn't have modeling for torque, PWM / RPM, or power curves
            for voltages. There isn't any mapping for sending a PID output and having that convert
            to some sort of signal sent to a microcontroller. 
        </div>
        <div className='body-par'>
            There isn't any modeling for the end effector. Right now all the end effector does is have
            a collider on it and detect if it has come in contact with the target. 
        </div>
        <div className='body-par'>
            The CNN is still quite brittle. Despite being trained on 2000 images, every single image is trained
            with the robot arm in the exact same position. 
        </div>
        <div className='body-par'>
            To make the CNN more robust, more images should be generated with the arm at different positions
            and orientations.
        </div>
        <div className='body-par'>
            The CNN also only works with the target on the ground (a Y value of 0). There is no sense of 
            depth perception and thus the target is limited to only being on the ground. 
        </div>


        {/*******************************************
         *               Conclusion                 *
         ********************************************/}
        <div className='AI4-body-header'>
            Conclusion
        </div>
        <div className='body-par'>
            This project taught me how many different parts are needed 
            to make a working autonomy pipeline. 
        </div>
        <div className='body-par'>
            I really enjoyed having to figure out the architecture and then
            getting to build each component out.
        </div>
        <div className='body-par'>
            I look forward to working on projects like this in the future. 
        </div>

        <Footer />
      </div>
    );
  };
  
  export default AI4Robot;