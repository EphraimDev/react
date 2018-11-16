import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPeopleCarry, faShoppingCart, faTruck, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';



export default class Icons extends React.Component {
    

    onClickMyProfile() {
        let userId = localStorage.getItem('current-user-id');
        setTimeout(() => {
            document.location.replace(`/user/${userId}/profile`);
        }, 200);
              
      }
    render() {
        library.add(faChalkboardTeacher, faShoppingCart,  faPeopleCarry, faTruck, faHandHoldingUsd)
        let userId = localStorage.getItem('current-user-id')
        return (
            <div className="row col-sm-12" >
                <div className=" icon-con">
                    <div><FontAwesomeIcon icon="chalkboard-teacher" className="profile-icon" /></div>
                    <div><a href={`/${userId}/trainings-and-consultancy`} className="profile-text">Trainings and Consultancy</a></div>
                </div>
                <div className=" icon-con">
                    <div><FontAwesomeIcon icon="shopping-cart" className="profile-icon" /></div>
                    <div><a href={`/${userId}/order-a-product`} className="profile-text">Order A Product</a></div>
                </div>
                <div className=" icon-con">
                    <div><FontAwesomeIcon icon="people-carry" className="profile-icon" /></div>
                    <div><a href={`/${userId}/investor-corner`} className="profile-text">Become An Investor</a></div>
                </div>
                <div className=" icon-con">
                    <div><FontAwesomeIcon icon="truck" className="profile-icon" /></div>
                    <div><a href={`/${userId}/delivery-status`} className="profile-text">Check Delivery Status</a></div>
                </div>
            </div>
        )
    }
}