import React from 'react';
import './Payment.css';

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

        handleCancelSubmit(event) {
            event.preventDefault();
      
            let orderId = this.state.productsId;
            let userId = localStorage.getItem('current-user-id')
      
            const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/order/${orderId}`, {
              method: 'DELETE',
              headers: new Headers({
                'Authorization': localStorage.getItem('x-access-token'),
              })
            });
      
            fetch(request)
            .then(res => res.json())
            .then(data => {
                if(data.message !== 'Order has been canceled') {
                    this.setState({
                        errorMessage: data.message
                    })
                } else {
                    this.setState({
                        product: '',
                        address: '',
                        quatity: '',
                        comment: '',
                        errorMessage: ''
                      });
                      document.location.replace(`/${userId}/order-a-product`)
                }
               
            })
              .catch(err => {
                console.log(err);
              })
              
        }
    
    componentDidMount() {
        let orderId = localStorage.getItem('order-id');
        const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/${orderId}`, {
            headers: new Headers({
              'Authorization': localStorage.getItem('x-access-token'),
            })
        });
    
        fetch(request)
        .then(res => res.json())
        .then(data => {
            if(data.message !== "Successful") {
                this.setState({
                    error: data.message
                })
            } else {
                this.setState({
                    product: data.order.product,
                    quantity: data.order.quatity,
                    email: localStorage.getItem('email'),
                    productsId: data.order.productsId,
                    userId: localStorage.getItem('current-user-id')
                })

                if(this.state.product === 'Banana Plantation' || this.state.product === 'Plantain Plantation') {
                    this.setState({
                        price: 1000,
                        unit: 'bunch'
                    })
                }else if(this.state.product === 'Garri Production') {
                    this.setState({
                        price: 800
                    })
                }else if(this.state.product === 'Pepper Farming') {
                    this.setState({
                        price: 700
                    })
                }else if(this.state.product === 'Snail Farming') {
                    this.setState({
                        price: 500
                    })
                }else if(this.state.product === 'Snail Feed Production') {
                    this.setState({
                        price: 3000
                    })
                }else if(this.state.product === 'Oil Palm Farming') {
                    this.setState({
                        price: 10000
                    })
                }else  {
                    this.setState({
                        price: 200
                    })
                
                }
                this.setState({
                    totalAmount: this.state.price * this.state.quantity
                })
                
            }
            
        })
        .catch(err => {
            console.log(err);
        })
        
    }
    render() {
        let product = this.state.product,
        quantity = this.state.quantity,
        //email = this.state.email,
        price =  this.state.price,
        total = this.state.totalAmount,
        userId = this.state.userId,
        unit = this.state.unit
        return (
            <div>
                <div className="confirm-order" >
                    <div className="title" >Confirm order page</div>
                    <p>Service: {product}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: N{price} per {unit} </p>
                    <p>Total Amount: N{total}</p>
                    <div className="buttons" ><button onClick={(event) => this.handleCancelSubmit(event)} >Cancel</button> </div>
                </div>
                <div className="payment-options" >
                    <div><h6>Payment Options</h6></div>
                    <div>
                        <p style={{fontWeight: "bold"}} >A) Online Payment</p>
                        <p>
                            Click the button below to pay with your debit or credit card
                        </p>
                        <div className="buttons" ><button>Submit</button></div>
                    </div>
                    <div>
                        <p style={{fontWeight: "bold"}}>B) Bank Deposit/Transfer</p>
                        <p>
                            You can also pay by direct deposit / internet or mobile banking transfer to either of the following account numbers
                        </p>
                    </div>
                </div>
            </div>
            
        )
    }
}