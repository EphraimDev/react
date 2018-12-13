import React from 'react';
 
const Crops = (props) => {
  return (
    <div className="single-service-area d-flex align-items-center wow fadeInUp col-lg-6 col-12"data-wow-delay="100ms">
      <div className="service-icon mr-30">
          <img src="img/core-img/s1.png" alt="" />
      </div>
      <div className="service-content">
          <h5>Cultivation of Crops</h5>
          <p>We specialize in the cultivation of cassava, maize, pepper, plantain,
              banana, orange, oil palm, vegetables and a whole lot of other crops.</p>
      </div>
    </div>
  );
};

export default Crops;