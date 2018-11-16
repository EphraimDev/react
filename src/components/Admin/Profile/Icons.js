import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPeopleCarry, faShoppingCart, faTruck, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

import './Profile.css';

export default class Icons extends React.Component {
              
      
    render() {
        library.add(faChalkboardTeacher, faShoppingCart,  faPeopleCarry, faTruck, faHandHoldingUsd)
        return (
            <div className="row col-sm-12" >
                <div className="admin-icon">
                    <div><FontAwesomeIcon icon="chalkboard-teacher" className="profile-icon" /></div>
                    <div><a href="/post-article" className="profile-text">Post Article</a></div>
                </div>
                <div className=" admin-icon">
                    <div><FontAwesomeIcon icon="shopping-cart" className="profile-icon" /></div>
                    <div><a href="/" className="profile-text">Add a Product</a></div>
                </div>
                <div className=" admin-icon">
                    <div><FontAwesomeIcon icon="people-carry" className="profile-icon" /></div>
                    <div><a href="/" className="profile-text">Accept Donations</a></div>
                </div>
                <div className=" admin-icon">
                    <div><FontAwesomeIcon icon="truck" className="profile-icon" /></div>
                    <div><a href="/" className="profile-text">Set Delivery Status</a></div>
                </div>
            </div>
        )
    }
}