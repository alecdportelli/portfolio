// Header.js
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="section button-container">
      
      </div>

      <div className="section button-container"> 
        <Link to={`/`}>
          <button className="hover-underline-animation header-button middle-button">Work</button>
        </Link>

        <Link to={`/about`}>
          <button className="hover-underline-animation header-button middle-button">About</button>
        </Link>
      </div>

      <div className="section button-container">
        <button className="header-button right-button">Contact</button>
      </div>
    </header>
  );
}

export default Header;
