// Header.js
import React from 'react';
import './header-main.css';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
  function openEmailApplication(emailLink) {
    var link = document.createElement('a');
    link.href = emailLink;
    link.click();
 }
 
  return (
    <header className="header-main">
      <div className="section-main button-container-main">
      
      </div>

      <div className="section-main button-container-main"> 
        <Link to={`/`}>
          <button className="hover-underline-animation-main header-button-main middle-button-main">Work</button>
        </Link>

        <Link to={`/about`}>
          <button className="hover-underline-animation-main header-button-main middle-button-main">About</button>
        </Link>
      </div>

      <div className="section-main button-container-main">
        <button onClick={() => openEmailApplication('mailto:alecportelli@icloud.com')} className="header-button right-button">Contact</button>
      </div>
    </header>
  );
}

export default HeaderMain;
