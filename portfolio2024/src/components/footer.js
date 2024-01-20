import React from 'react';
import './footer.css';

import Pdf from '../resume.pdf';

const Footer = () => {
    function openEmailApplication(emailLink) {
        var link = document.createElement('a');
        link.href = emailLink;
        link.click();
        }

  return (
    <footer>
        <div className="footer-container">

            <div className="left-column">
                <div className="left-top">Let's start building 🛠️</div>
                <div className="left-bottom">
                    <button onClick={() => openEmailApplication('mailto:alecportelli@icloud.com')} className='connectButton'>Connect</button>
                </div>
            </div>

            <div className="right-column">
                <a href={Pdf} target="_blank" rel="noopener noreferrer">
                    <button className='footerButton hover-underline-animation '>Resume</button>
                </a>

                <a href="https://github.com/alecdportelli" target="_blank" rel="noopener noreferrer">
                    <button className='footerButton hover-underline-animation '>GitHub</button>
                </a>

                <a href="https://www.linkedin.com/in/alec-portelli/" target="_blank" rel="noopener noreferrer">
                    <button className='footerButton hover-underline-animation '>LinkedIn</button>
                </a>
            </div>

        </div>

        <div>
            <hr className="horizontal-line" />
        </div>

        <div className='copyright'>
            @ 2024 Alec Portelli ⚡ Made with React
        </div>
    </footer>
  );
}

export default Footer;