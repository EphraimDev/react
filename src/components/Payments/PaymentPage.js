import React, { Component } from 'react';
    //import the library
import PaystackButton from 'react-paystack';
//import Config from '../../config';
import { getProfile } from '../Auth/GetProfile';
import token from '../Auth/GetToken';

class App extends Component {

    state = {
        key: process.env.REACT_APP_PUBLIC_KEY, //PAYSTACK PUBLIC KEY
        email: localStorage.getItem('email'),  // customer email
        amount: localStorage.getItem('amount')*100 //equals NGN100,
    }

    callback = async (response) => {
        //console.log(response); // card charged successfully, get reference here

        let profile = await getProfile(token);

        document.location.replace(`/user/${profile.id}`)
    }

    close = async () => {
        let profile = await getProfile(token);

        document.location.replace(`/user/${profile.id}`)
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    render() {

    return (
        <div>
        <div className="breadcrumb-area">
            <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(../img/bg-img/50.jpg)"}}>
                <h2>Order Confirmation Page</h2>
            </div>
        </div>
        <section className="blog-content-area section-padding-100 order-product-service col-12 col-md-8">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="alazea-benefits-area">
                            <div className="">
                                <PaystackButton
                                    text="Make Payment"
                                    class="payButton"
                                    callback={this.callback}
                                    close={this.close}
                                    disabled={true}
                                    embed={true}
                                    reference={this.getReference()}
                                    email={this.state.email}
                                    amount={this.state.amount}
                                    paystackkey={this.state.key}
                                    scrolling="no"
                                />
                                <button type="button" onClick={()=>  this.close()} className="alazea-btn btn m-15">Go back to profile page</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>
    );
    }
}

export default App;