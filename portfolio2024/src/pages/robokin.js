import React from 'react';
import './robokin.css';
import Header from '../components/header';
import Footer from '../components/footer';
import CodeSnippet from '../components/codeBlock'
import DroneSimHeader from '../SVG/DroneSim.svg'
import EOMs from '../SVG/EOMs.svg'
import FBD from '../SVG/FBD_1.svg'
import FandM from '../SVG/FandM.svg'
import PhysicsLoop from '../SVG/PhsyicsLoop.svg'
import PIR from '../SVG/PIR.svg'
import SensorFusion from '../SVG/SensorFusion.svg'
import KalmanFilter from '../SVG/KalmanFilter.svg';
import QuadArch from '../SVG/QuadArch.svg'
import VideoComponent from '../components/videoComponent'

const myCode = 
`
pn    = x(1);   % North position, m
pe    = x(2);   % East position, m
pd    = x(3);   % Down position, m
u     = x(4);   % body-x groundspeed component, m/s
v     = x(5);   % body-y groundspeed component, m/s
w     = x(6);   % body-z groundspeed component, m/s
phi   = x(7);   % EulerAngle: roll, rad
theta = x(8);   % EulerAngle: pitch, rad
psi   = x(9);   % EulerAngle: yaw, rad
p     = x(10);  % body rate about x, rad/s
q     = x(11);  % body rate about y, rad/s
r     = x(12);  % body rate about z, rad/s
`;

const PIR_code = 
`
function u = PIR_roll_hold(phi_c, phi_hat, p_hat, init_flag, P)

% Set up PI with rate feedback
y_c = phi_c; 
y = phi_hat; 
y_dot = p_hat; 

kp = 0.11;
ki = 0.0075;
kd = 0.025;

u_lower_limit = -0.1;
u_upper_limit = +0.1;

% Perform "PI with rate feedback"
error = y_c - y;  % Error between command and response
error_int = error_int + P.Ts*error; % Update integrator
u = kp*error + ki*error_int - kd*y_dot;

end
`;


const Robokin = () => {
    return (
        <div>
            <Header />

            <div className='center main-title'>
                UAV Controls Masters Course
            </div>

            <div className='center secondary-title'>
                A full quadcopter simulation from scratch in MATLAB
            </div>
            <br></br>
            <div className='UAVSimHeader'>
                <img src={DroneSimHeader}></img>
            </div>

            <div className='body-par-title-uav'>
                Background 
            </div>
            <div className='body-par'>
                Quadcopters are very versatile vehicles and can be used for many different applications.
            </div>
            <div className='body-par'>
                However, despite their versatility, they are often used to accomplish often both difficult and dangerous tasks.
            </div>
            <div className='body-par'>
                Simulation is an extremely important for AUV development because prototypes can be quickly changed. 
                The simulation serves as a testbed for engineers that can help accelerate the 
                development process without expensive hardware being at risk.  
            </div>
            <br></br>
            <br></br>

            <div className='body-par-title-uav'>
                Deriving The Physics Model
            </div>
            <div className='body-par'>
                At the heart of every simulation is an accurate physics model. To build a 
                full 6 degree of freedom model, the kinematics must first be derived. 
            </div>
            <div className='body-par'>
                We assume the quadcopter is a rigid body, which simplifies the physics. We
                also assume a north-east-down (NED) coordinate frame which is industry standard.
            </div>
            <div className='body-par'>
                This yields the following state vector:
            </div>
            <div className='codeSnippetStyle'>
                <CodeSnippet code={myCode} />
            </div>
            <div className='body-par'>
                From this state vector, we can now derive the equations of motion (EoMs)
                that govern the quadcopter kinematics.
            </div>
            <div className='body-par'>
                The quadcopter has 12 equations of motion which are all
                ordinary differential equations, represented here in matrix form:
            </div>
            <div className='EOMGraphic'>
                <img src={EOMs}></img>
            </div>
            <br></br>
            <div className='body-par'>
                Now that we have the kinematics, we need to derive forces and moments.
            </div>
            <div className='body-par'>
                To start, we can reference this quadcopter free-body-diagram:
            </div>
            <div className='EOMGraphic'>
                <img src={FBD}></img>
            </div>
            <div className='body-par'>
                From this free-body-diagram and the parameters of the propellers, we can
                assemble the sum of forces and moments in the following equations:
            </div>
            <div className='FMGraphic'>
                <img src={FandM}></img>
            </div>
            <div className='body-par'>
                With both the kinematics and the dynamics derived, we can build the loop
                between the two which serves as the engine for the rest of the simulation:
            </div>
            <div className='PhysicsLoop'>
                <img src={PhysicsLoop}></img>
            </div>

            <div className='body-par-title-uav'>
                Flight Control
            </div>
            <div className='body-par'>
                The next step to building the simulation was to implement
                ways to control the quadcopter.
            </div>
            <div className='body-par'>
                The most traditional way to control the quadcopter is using  a PID.
                However, for this course, a PI with rate feedback controller
                was used instead to reduce the effect of the derivative. 
            </div>
            <div className='PhysicsLoop'>
                <img src={PIR}></img>
            </div>
            <div className='body-par'>
                This structure is used to control every single degree of freedom 
                on the quadcopter. It takes in the command, the current value, and
                the rate which are all provided by state estimation algorithms
                and sensors on the vehicle.
            </div>
            <div className='body-par'>
                Here is some example code:
            </div>
            <div className='PIRcodeSnippetStyle'>
                <CodeSnippet code={PIR_code} />
            </div>

            <div className='body-par-title-uav'>
                Sensor Fusion
            </div>
            <div className='body-par'>
                To simulate the sensor package, a gyroscope, a magnotometer, and
                an accelerometer were modeled.                 
            </div>
            <div className='body-par'>
                Each sensor was modeled based off of the hardware specs along with
                adding Gaussian noise for realism. All together, the sensors give
                the quadcopter what it needs to perform state estimation.
            </div>
            <div className='SF'>
                <img src={SensorFusion}></img>
            </div>

            <div className='body-par-title-uav'>
                Kalman Filter For State Estimation
            </div>
            <div className='body-par'>
                Raw sensor data is not enough for a quadcopter to determine
                its current state, so a Kalman filter was developed.                  
            </div>
            <div className='body-par'>
                The Kalman filter is an algorithm that takes in the values
                from the sensors and is able to estimate the state of the vehicle
                in real time.                   
            </div>
            <div className='SF'>
                <img src={KalmanFilter}></img>
            </div>
            <div className='body-par'>
                By knowing the state of the vehicle, those estimates
                can then be passed into the PIR controllers for stable flight.                
            </div>

            <div className='body-par-title-uav'>
                Putting It All Together
            </div>
            <div className='body-par'>
                With all of these different components, the simulation
                can finally be assembled. Simulink was used to put all of the
                different pieces together to run the full loop.
            </div>
            <div className='PhysicsLoop'>
                <img src={QuadArch}></img>
            </div>
            <div className='body-par'>
                Here is the final result:
            </div>
            <VideoComponent />

            <div className='body-par-title-uav'>
                Conclusion
            </div>
            <div className='body-par'>
                This class taught me the everything I needed to know about
                simulation, physics, control theory, state estimation, 
                and sensor fusion. 
            </div>
            <div className='body-par'>
                I learned how each individual component of the simulation works,
                but more importantly how the components work together to form
                a complex system. 
            </div>
            <div className='body-par'>
                I look forward to applying what I learned during this course to 
                cutting edge autonomy challenges in the future. 
            </div>

            <Footer />
        </div>
    );
};

export default Robokin;