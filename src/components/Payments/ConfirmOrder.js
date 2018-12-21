import React from 'react';
import { confirmOrder, cancelOrder } from '../Auth/ConfirmOrder';
import { getProfile } from '../Auth/GetProfile';
import token from '../Auth/GetToken';

export default class UserName extends React.Component {
    
        state = {
            product: '',
            productsId: '',
            quantity: '',
            price: '',
            totalAmount: '',
            userId: '',
            email: '',
            unit: '',
            error: ''
        }

        onSubmit(event) {
            event.preventDefault();
            localStorage.setItem('amount', this.state.totalAmount);
            localStorage.setItem('email', this.state.email)
            document.location.replace('/paystack');
        }

        async handleCancelSubmit(event) {
            event.preventDefault();
      
            let orderId = this.state.productsId;

            let stopOrder = await cancelOrder(orderId);

            if(!!stopOrder === true) {
                this.setState({
                    product: '',
                    productsId: '',
                    address: '',
                    quantity: '',
                    price: '',
                    comment: '',
                    errorMessage: ''
                  });
                  localStorage.removeItem('order-id')
                  document.location.replace(`/${this.state.userId}/order-a-product`)
            } 
        }
    
   async componentDidMount() {
        let orderId = localStorage.getItem('order-id');

        let profile = await getProfile(token)

        let orderData = await confirmOrder(orderId);

        if(!!orderData === true) {
            this.setState({
                product: orderData.order.product,
                quantity: orderData.order.quantity,
                email: profile.email,
                price: orderData.order.price,
                unit: orderData.order.unit,
                productsId: orderData.order.productsId,
                userId: profile.id,
                totalAmount: orderData.order.amount
            })
        }
        
    }
    render() {
        let product = this.state.product,
        quantity = this.state.quantity,
        email = this.state.email,
        price =  this.state.price,
        total = this.state.totalAmount,
        unit = this.state.unit
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
                                    <div className="confirm-order" >
                                        <h5>Service: {product}</h5>
                                        <h5>Quantity: {quantity}</h5>
                                        <h5>Price: N{price} per {unit} </h5>
                                        <h5>Total Amount: N{total}</h5>
                                        <h5>Email: {email}</h5>
                                        <div className="buttons" ><button type="button" className="alazea-btn m-15 order-button" onClick={(event) => this.handleCancelSubmit(event)} >Cancel</button> </div>
                                    </div>
                                    <div className="payment-options" >
                                        <div><h6>Payment Options</h6></div>
                                        <div>
                                            <p style={{fontWeight: "bold"}} >A) Online Payment</p>
                                            <p>
                                                Click the button below to pay with your debit or credit card
                                            </p>
                                            <div className="buttons" ><button type="button" className="alazea-btn m-15 order-button" onClick={(event) => this.onSubmit(event)}>Submit</button></div>
                                        </div>
                                        <div>
                                            <p style={{fontWeight: "bold"}}>B) Bank Deposit/Transfer</p>
                                            <p>
                                                You can also pay by direct deposit / internet or mobile banking transfer to either of the following account numbers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            
        )
    }
}