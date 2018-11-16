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
                <div className="footer-width footer-body">
                    <a href="/faq"><h3>FAQ</h3></a>
                    <a href="/terms"><h3>Terms</h3></a>
                    <a href="/contact"><h3>Contact</h3></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;