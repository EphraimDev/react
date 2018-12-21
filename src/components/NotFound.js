import React from 'react';
import { Link } from 'react-router-dom';
//import PageNotFound from '../img/bg-img/50.jpg';
const NotFound = () => (
        <div className="contain">
            <img src="../img/bg-img/51.jpg" alt="not found page" style={{width: "100%"}} />
            <div className="not-found"><Link to="/">Return to Home Page</Link></div>
        </div>
);
export default NotFound;