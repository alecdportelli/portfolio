import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="left-column">
                <div className="left-top">Let's start building.</div>
                <div className="left-bottom">
                    <button className='connectButton'>Connect</button>
                </div>
            </div>
            <div className="right-column">
                    <button className='footerButton hover-underline-animation '>Resume</button>
                    <button className='footerButton hover-underline-animation '>GitHub</button>
                    <button className='footerButton hover-underline-animation '>LinkedIn</button>
            </div>
        </div>

        <div>
            <hr className="horizontal-line" />
        </div>

        <div className='copyright'>
            @ 2024 Alec Portelli
        </div>
    </footer>
  );
}

export default Footer;