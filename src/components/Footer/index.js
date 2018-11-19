import React from 'react';

import './Footer.css';  

const Footer = (props) => {
  return (
    <footer className="fixed-bottom">
        <div className=" container-fluid padding">
            <div className="row text-center">
                <div className="footer-width footer-logo">
                    <a href="/"><h3>&copy; COMPANY NAME</h3></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;