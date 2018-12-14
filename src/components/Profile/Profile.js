import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPeopleCarry, faShoppingCart, faTruck, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

class Profile extends Component {
    state = {
        training: '',
        products: '',
        investment: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    }


componentDidMount() {
    let userId = localStorage.getItem('current-user-id');
        const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/user/${userId}`, {
                headers: new Headers({
                'Authorization': localStorage.getItem('x-access-token')
            }),
            mode: 'cors'
        });
    
        fetch(request)
        .then(res => res.json())
        .then(data => {
            this.setState({
                products: data.profile.products_services,
                training: data.profile.training_consultancy,
                investment: data.profile.investment,
                zip: data.profile.zip,
                address: data.profile.address,
                city: data.profile.city,
                state: data.profile.state,
            });
            let place = this.state.address;
            !place ? document.getElementById('address').style.display = 'none' : document.getElementById('address').style.display = 'block'
        })
        .catch(err => {
            console.log(err);
            return this.setState({error: false})
        })
          
    }
    render() {

        library.add(faChalkboardTeacher, faShoppingCart,  faPeopleCarry, faTruck, faHandHoldingUsd)
        
       let userId = localStorage.getItem('current-user-id'),
       training = this.state.training,
       product = this.state.products,
        address = this.state.address,
           state = this.state.state,
           city = this.state.city,
           zip = this.state.zip,
       investment = this.state.investment;

        return (
            <section className="blog-content-area section-padding-0-100 user-profile-section col-12 col-md-8">
            
            <div className="user-address" id="address" style={{display: "none"}}>
                        <h5 style={{color: "#ffffff"}}><span style={{fontWeight: "bold"}}>Address:</span> {address}, {city}, {state}</h5>
                        <h6 style={{color: "#ffffff"}}><span style={{fontWeight: "bold"}}>Zip:</span> {zip}</h6>
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
                                    <h5 className="col-3">{training}</h5>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <div className="col-3"><a href={`/${userId}/order-a-product`}><FontAwesomeIcon icon="shopping-cart" className="profile-icon" /></a></div>
                                    <div className="col-6"><a href={`/${userId}/order-a-product`}><h5>Products &amp; Services</h5></a></div>
                                    <h5>{product}</h5>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <div className="col-3"><a href={`/${userId}/investor-corner`}><FontAwesomeIcon icon="people-carry" className="profile-icon" /></a></div>
                                    <div className="col-6"><a href={`/${userId}/investor-corner`}><h5>Join the investors</h5></a></div>
                                    <h5>N{investment}</h5>
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
}

export default Profile