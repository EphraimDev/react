import React from 'react';
 
const Animals = (props) => {
  return (
    <div className="single-service-area d-flex align-items-center wow fadeInUp col-lg-6 col-12"data-wow-delay="100ms">
      <div className="service-icon mr-30">
          <img src="img/core-img/s2.png" alt="" />
      </div>
      <div className="service-content">
      <h5>Rearing of Animals</h5>
                                <p>We specialize in rearing of snails, rabbits, goats and poultry birds.
                                    We also produce quality snail feed for snail consumption.
                                </p>
      </div>
    </div>
  );
};

export default Animals;