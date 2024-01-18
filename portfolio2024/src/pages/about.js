import React from 'react';

import './about.css';

import Header from '../components/header';
import Footer from '../components/footer';

import Portrait from '../SVG/SelfPort.svg'

const About = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                About
            </div>

            <br></br>

            <div className='Portrait'>
                <img src={Portrait}></img>
            </div>


            <div className='body-par-title-about'>
                I'm Alec  
            </div>
            <div className='body-par'>
                and I'm a robotics engineer at the MITRE Corporation and a autonomous
                systems masters student at Johns Hopkins. 
            </div>
            <div className='body-par'>
                My main focus these days is building technology at the intersection of robots, 
                AI, simulation, and human-centered design. 
            </div>
            <div className='body-par'>
                When I'm not in the lab, I'm designing something new 🖍️, snowboarding 🏂, 
                or cooking 👨‍🍳.
            </div>
            <div className='body-par'>
                #NOTE: I currently have an active secret US government clearance 
            </div>
            <br></br>
            <br></br>


            <div className='body-par-title-about'>
                Engineering Philosophy
            </div>
            <div className='body-par'>
                I do my best to follow a few principles that help me do good work:
            </div>
            <div className='body-par-title-secondary'>
                Staying Curious 
            </div>
            <div className='body-par'>
                I love to learn. I enjoy working in engineering because there are always 
                opportunities to learn new technologies and skills. 
            </div>
            <div className='body-par'>
                One of the reasons why I like working in the robotics space is because it
                is very interdisciplinary. I am constantly learning topics ranging
                from computer science to mechanical engineering to cognitive science. 
            </div>
            <div className='body-par'>
                I never shy away from learning something new, even if it isn't in my comfort zone.
                In my opinion, being able to learn on the fly is the most important skill an
                engineer can have. 
            </div>
            <br></br>

            <div className='body-par-title-secondary'>
                Constant Communication  
            </div>
            <div className='body-par'>
                Even though most of my work is technical, I take every chance I get to
                communicate my ideas to others. 
            </div>
            <div className='body-par'>
                I always make sure to give demos, presentations, tech talks, and whatever else
                gives me the opportunity to share what I am working on. 
            </div>
            <div className='body-par'>
                Being willing to talk about my projects has made me grow.
                Getting feedback from more experienced engineers has improved
                the quality of my work by a lot. 
            </div>
            <br></br>

            <div className='body-par-title-secondary'>
                Speed
            </div>
            <div className='body-par'>
                Even though I do work for the US government, which has a reputation of being 
                very slow, I always find myself on fast paced, cutting edge projects. 
            </div>
            <div className='body-par'>
                I am a firm believer that engineering is an iterative process, and that 
                it takes a lot of tries to innovate something new. 
            </div>
            <div className='body-par'>
                I have a desire to make a meaningful impact which requires
                the need for speed in developing new technologies, solutions, and advancements.
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div className='body-par-title-about'>
                Contact Me
            </div>
            <div className='body-par'>
                If you have any other questions or would just like to reach out, feel free
                to email me at alecportelli@icloud.com.
            </div>
            <div className='body-par'>
                The links to my most updated resume and LinkedIn are right below at the bottom 
                right of the page.
            </div>
            <Footer />
        </div>
    );
};

export default About;