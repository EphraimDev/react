import React from 'react';

import '../Cards/Cards.css';
import Rabbit from './Rabbit';
import SnailFeed from './SnailFeed';
import Snail from './SnailRearing';
import Goat from './Goat';

const Cards = (props) => {
    return (
        <div className="row sections" style={{maxWidth: '100%'}}>
            <div className="col-sm-12 crops-title"><h4>Animals Services We Offer</h4></div>
            <div className="col-sm-4 cards">
                <Rabbit />
            </div>
            <div className="col-sm-4 cards">
                <Snail />
            </div>
            <div className="col-sm-4 cards">
                <SnailFeed />
            </div>
            <div className="col-sm-4 cards">
                <Goat />
            </div>
        </div>
    );
};

export default Cards;