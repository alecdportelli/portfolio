import React from 'react';
import './videoComponent.css';

const VideoComponent = () => {
    return (
        <div className="video-container">
            <video controls width="50%">
                <source src="/DroneDemo.mp4" type="video/mp4" />                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoComponent;