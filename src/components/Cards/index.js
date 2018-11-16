import React from 'react';

import './Cards.css';
import Crops from './Crops';
import Animals from './Animals';
import CardTen from './Cards-10';
import CardEleven from './Cards-11';
import CardTwelve from './Cards-12';

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
                <CardTen />
            </div>
            <div className="col-sm-4 cards">
                <CardEleven />
            </div>
            <div className="col-sm-4 cards">
                <CardTwelve />
            </div>
        </div>
    );
};

export default Cards;