import React from 'react';
 
const HomeDelivery = (props) => {
  return (
    <div className="single-service-area d-flex align-items-center wow fadeInUp col-lg-6 col-12"data-wow-delay="100ms">
      <div className="service-icon mr-30">
          <img src="img/core-img/s3.png" alt="" />
      </div>
      <div className="service-content">
      <h5>Home Delivery</h5>
          <p>We will deliver every product you order for to your doorstep. Distance is not a
              barrier at WizzyAgro</p>
      </div>
    </div>
  );
};

export default HomeDelivery;