import React from 'react';
import './Consultancy.css';

const Consultancy = (props) => {
    
    return (
        <div className="container consultancy">
            <div><h5>Areas available for training and consultancy</h5></div>
            <div>
                <ol>
                    <li><a href="">How to secure your farmland from intruders</a></li>
                    <li><a href="">How to get buyers for your farm produce</a></li>
                    <li><a href="">How to prepare your farm budgets</a></li>
                </ol>
            </div>
        </div>
    );
};

export default Consultancy;