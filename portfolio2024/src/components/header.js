// Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="section button-container">
      
      </div>

      <div className="section button-container"> 
        <button className="hover-underline-animation header-button middle-button">Work</button>
        <button className="hover-underline-animation header-button middle-button">About</button>
      </div>

      <div className="section button-container">
        <button className="header-button right-button">Contact</button>
      </div>
    </header>
  );
}

export default Header;
