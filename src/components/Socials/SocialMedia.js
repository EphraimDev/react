import React from 'react';
import './SocialMedia.css';

export default class Socials extends React.Component {
  render() {
    return (
        <div className="container-fluid padding connect">
        <div className="row text-center padding">
            <div className="col-12">
                <h2>Connect</h2>
            </div>
            <div className="col-12 social padding">
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>
    ); 
  }
}