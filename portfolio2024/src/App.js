// App.js
import React from 'react';
import Header from './components/header';
import './App.css'; // Import your global CSS file for styling

function App() {
  return (
    <div className="App">
      <Header />

      <section className="about">
        <span>
          I'm an engineer with interests at the intersection of AI, computer graphics, simulation, 
          and human-centered design
        </span>
        <br></br>
        <div className='secondaryHeader'>
          <span>
            Currently building autonomous systems 
          </span>

          {/* <span>This is a sentence with a </span>
          <span style={{ color: 'blue' }}>different</span>
          <span> colored word.</span> */}


          <span>
            at MITRE and pursuing a masters in robotics at Johns Hopkins
          </span>
        </div>
      </section>

      {/* Add more sections/components as needed */}
    </div>
  );
}

export default App;
