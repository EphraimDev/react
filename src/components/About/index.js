import React, { Component } from 'react';
import Heading from './Heading';

class About extends Component {

  render() {
      return (
        <section className="about-us-area section-padding-100-0">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col-12 col-lg-8">
                    <Heading />
                    <div className="col-12">
                    <div className="alazea-benefits-area">
                    <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src="img/core-img/b1.png" alt="" />
                                    <h5>Quality Products</h5>
                                    <p>We guarantee you the best products money can buy.</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src="img/core-img/b2.png" alt="" />
                                    <h5>Perfect Service</h5>
                                    <p>You are guaranteed value for your money and time.</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src="img/core-img/b3.png" alt="" />
                                    <h5>100% Natural</h5>
                                    <p>All our products are hundred percent natural.</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src="img/core-img/b4.png" alt="" />
                                    <h5>Environmentally friendly</h5>
                                    <p>We will set up your farm to be environmentally friendly</p>
                                </div>
                            </div>
                            </div>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="border-line"></div>
                </div>
            </div>
        </div>
        </section>
    );
  }
}


export default About;