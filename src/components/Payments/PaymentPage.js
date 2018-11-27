import React, { Component } from 'react';
    //import the library
import PaystackButton from 'react-paystack';
//import Config from '../../config';

class App extends Component {

    state = {
        key: process.env.REACT_APP_PUBLIC_KEY, //PAYSTACK PUBLIC KEY
        email: localStorage.getItem('email'),  // customer email
        amount: localStorage.getItem('amount')*100 //equals NGN100,
    }

    callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    close = () => {
        console.log("Payment closed");
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
        <div className="col-6 paystack">
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
        </div>
    );
    }
}

export default App;