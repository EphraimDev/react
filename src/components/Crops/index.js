import React from 'react';

import '../Cards/Cards.css';
import Banana from './Banana';
import Pepper from './Pepper';
import Plantain from './Plantain';
import Garri from './Garri';
import OilPalm from './OilPalm';
import Orange from './Orange';
import Pawpaw from './Pawpaw';

const Cards = (props) => {
    return (
        <div className="row sections" style={{maxWidth: '100%'}}>
            <div className="crops-title col-sm-12"><h4>Crop Services We Offer</h4></div>
            <div className="col-sm-4 cards">
                <Banana />
            </div>
            <div className="col-sm-4 cards">
                <Pepper />
            </div>
            <div className="col-sm-4 cards">
                <Plantain />
            </div>
            <div className="col-sm-4 cards">
                <Garri />
            </div>
            <div className="col-sm-4 cards">
                <OilPalm />
            </div>
            <div className="col-sm-4 cards">
                <Orange />
            </div>
            <div className="col-sm-4 cards">
                <Pawpaw />
            </div>
        </div>
    );
};

export default Cards;