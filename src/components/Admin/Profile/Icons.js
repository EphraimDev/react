import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPeopleCarry, faShoppingCart, faTruck, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';


export default class Icons extends React.Component {
              
      
    render() {
        library.add(faChalkboardTeacher, faShoppingCart,  faPeopleCarry, faTruck, faHandHoldingUsd)
        return (
            <section className="about-us-area section-padding-100-0 profile-section-padding-top">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col-12 col-lg-12">
                    <div className="col-12">
                    <div className="alazea-benefits-area">
                    <div className="row">
                            <div className="col-6 col-sm-3">
                                <div className="single-benefits-area">
                                    <FontAwesomeIcon icon="chalkboard-teacher" className="profile-icon" />
                                    <a href="/post-article"><h5>Post Article</h5></a>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="single-benefits-area">
                                <FontAwesomeIcon icon="shopping-cart" className="profile-icon" />
                                    <a href="/"><h5>Add A Product/Service</h5></a>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="single-benefits-area">
                                <FontAwesomeIcon icon="people-carry" className="profile-icon" />
                                    <a href="/"><h5>Accept Donations</h5></a>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="single-benefits-area">
                                <FontAwesomeIcon icon="truck" className="profile-icon" />
                                    <a href="/"><h5>Set Delivery Status</h5></a>
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
        )
    }
}

