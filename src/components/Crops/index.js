import React from 'react';

import '../Cards/Cards.css';
import CardOne from './Cards-1';
import CardTwo from './Cards-2';
import CardThree from './Cards-3';
import Cardfour from './Cards-4';
import Cardfive from './Cards-5';
import CardSix from './Cards-6';
import CardSeven from './Cards-7';

const Cards = (props) => {
    return (
        <div className="row sections" style={{maxWidth: '100%'}}>
            <div className="col-sm-4 cards">
                <CardOne />
            </div>
            <div className="col-sm-4 cards">
                <CardTwo />
            </div>
            <div className="col-sm-4 cards">
                <CardThree />
            </div>
            <div className="col-sm-4 cards">
                <Cardfour />
            </div>
            <div className="col-sm-4 cards">
                <Cardfive />
            </div>
            <div className="col-sm-4 cards">
                <CardSix />
            </div>
            <div className="col-sm-4 cards">
                <CardSeven />
            </div>
        </div>
    );
};

export default Cards;