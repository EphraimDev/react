import React from 'react';

import './Cards.css';
import Crops from './Crops';
import Animals from './Animals';
import Training from './Training';

const Cards = (props) => {
    return (
        <div className="row sections" style={{maxWidth: '100%'}}>
            <div className="title"><h5>Services we offer</h5></div>
            <div className="col-sm-4 cards">
                <Crops />
            </div>
            <div className="col-sm-4 cards">
                <Animals />
            </div>
            <div className="col-sm-4 cards">   
                <Training />
            </div>
        </div>
    );
};

export default Cards;