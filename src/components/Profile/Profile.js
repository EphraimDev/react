import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPeopleCarry, faShoppingCart, faTruck, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const Profile = props => {
    library.add(faChalkboardTeacher, faShoppingCart,  faPeopleCarry, faTruck, faHandHoldingUsd)
        
    let userId = props.userId;

    let addy = document.getElementById('address');

    if(!!addy === true && !!props.address === true ) {
       addy.style.display='block'
    }

     return (
         <section className="blog-content-area section-padding-0-100 user-profile-section col-12 col-md-8">
         
         <div className="user-address" id="address" style={{display: "none"}}>
                     <h5 style={{color: "#ffffff"}}><span style={{fontWeight: "bold"}}>Address:</span> {props.address}, {props.city}, {props.state}</h5>
                     <h6 style={{color: "#ffffff"}}><span style={{fontWeight: "bold"}}>Zip:</span> {props.zip}</h6>
                     </div>
             <div className="container">
                 <div className="row justify-content-center">
                     <div className="col-12">
                 <div className="alazea-benefits-area">
                 <div className="row">
                 
                         <div className="col-12 col-sm-6">
                             <div className="single-benefits-area">
                                 <div className="col-3">
                                     <a href={`/${userId}/trainings-and-consultancy`}><FontAwesomeIcon icon="chalkboard-teacher" className="profile-icon" /></a>
                                 </div>
                                 <div className="col-6">
                                 <a href={`/${userId}/trainings-and-consultancy`}><h5>Training &amp; Consultancy</h5></a>
                                 </div>
                                 <h5 className="col-3">{props.training}</h5>
                             </div>
                         </div>

                         <div className="col-12 col-sm-6">
                             <div className="single-benefits-area">
                                 <div className="col-3"><a href={`/${userId}/order-a-product`}><FontAwesomeIcon icon="shopping-cart" className="profile-icon" /></a></div>
                                 <div className="col-6"><a href={`/${userId}/order-a-product`}><h5>Products &amp; Services</h5></a></div>
                                 <h5>{props.product}</h5>
                             </div>
                         </div>

                         <div className="col-12 col-sm-6">
                             <div className="single-benefits-area">
                                 <div className="col-3"><a href={`/${userId}/investor-corner`}><FontAwesomeIcon icon="people-carry" className="profile-icon" /></a></div>
                                 <div className="col-6"><a href={`/${userId}/investor-corner`}><h5>Join the investors</h5></a></div>
                                 <h5>N{props.investment}</h5>
                             </div>
                         </div>

                         <div className="col-12 col-sm-6">
                             <div className="single-benefits-area">
                                 <div className="col-3"><a href={`/${userId}/delivery-status`}><FontAwesomeIcon icon="truck" className="profile-icon" /></a></div>
                                 <div className="col-6"><a href={`/${userId}/delivery-status`}><h5>Monitor Your Order Delivery</h5></a></div>
                             </div>
                         </div>
                         </div>
                         </div>
                         </div>
                     </div>
                 </div>
         </section>
     )
}

export default Profile