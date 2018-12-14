import React from 'react';

import Banana from './Banana';
import Pepper from './Pepper';
import Plantain from './Plantain';
import Garri from './Garri';
import OilPalm from './OilPalm';
import Orange from './Orange';
import Pawpaw from './Pawpaw';

const Cards = (props) => {
    return (
        <div>
        <div className="breadcrumb-area">
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(img/bg-img/51.jpg)"}}>
            
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/"><i className="fa fa-home"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Crops</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
        <section className="alazea-blog-area section-padding-70-0">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>Services Available</h2>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <Garri />
                <Banana />
                <OilPalm />
                <Orange />
                <Pawpaw />
                <Pepper />
                <Plantain />
            </div>
        </div>
    </section>
    </div>
    );
};

export default Cards;