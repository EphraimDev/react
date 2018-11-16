import React from 'react';

import './Cards.css';
import CardEight from './Cards-8';
import CardNine from './Cards-9';

const Cards = (props) => {
    return (
        <div className="row sections" style={{maxWidth: '100%'}}>
            <div className="col-sm-4 cards">
                <CardEight />
            </div>
            <div className="col-sm-4 cards">
                <CardNine />
            </div>
        </div>
    );
};

export default Cards;