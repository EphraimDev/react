import React from 'react';

import '../Cards/Cards.css';
import Rabbit from './Rabbit';
import SnailFeed from './SnailFeed';
import Snail from './SnailRearing';
import Goat from './Goat';

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
                            <li className="breadcrumb-item active" aria-current="page">Animals</li>
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
                <Snail />
                <SnailFeed />
                <Goat />
                <Rabbit />
            </div>
        </div>
    </section>
    </div>
    );
};

export default Cards;