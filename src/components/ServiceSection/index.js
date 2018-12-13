import React from 'react';

import Header from './Header';
import Crops from './Crops';
import Animals from './Animals';
import Training from './Training';
import HomeDelivery from './Delivery';


const ServiceSection = (props) => {
    return (
        <section className="our-services-area bg-gray section-padding-100-0">
            <div className="container">
                <Header />
                <div className="row justify-content-between">
                <div className="col-12">
                    <div className="alazea-service-area mb-100">
                        <Crops />
                        <Animals />
                        <Training />
                        <HomeDelivery />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;