import React from 'react';
import {matchPath} from 'react-router-dom';

export default class UserName extends React.Component {
    
        state = {
            product: '',
            address: '',
            quantity: '',
            comment: '',
            orderId: '',
            errorMessage: ''
        }

        handleSubmit(event) {
            event.preventDefault();
      
            let orderId = this.state.orderId;
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
                      document.location.replace(`/user/${userId}`);
                }
               
            })
              .catch(err => {
                console.log(err);
              })
              
        }
    
    componentDidMount() {
        let pathway = matchPath(window.location.pathname, {
            path: "/:orderId/delete",
            strict: false
        });
    
        let orderId = pathway.params.orderId;
        const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/${orderId}`, {
            headers: new Headers({
              'Authorization': localStorage.getItem('x-access-token'),
            })
        });
    
        fetch(request)
        .then(res => res.json())
        .then(data => {
            this.setState({
                product: data.order.product,
                address: data.order.address,
                quantity: data.order.quatity,
                comment: data.order.comment,
                orderId: data.order.productsId
            })
        })
        .catch(err => {
            console.log(err);
        })
        
    }
    render() {
        let product=this.state.product,
        quantity=this.state.quantity,
        comment = this.state.comment,
        address=this.state.address,
        userId = localStorage.getItem('current-user-id'),
        errorMessage = this.state.errorMessage

        return (
            <div className="delete-order" >
                <span>{errorMessage}</span>
                <div className="col-12" ><h5>Product: {product}</h5></div>
                <div><p>Address: {address}</p></div>
                <div><p>Quantity: {quantity}</p></div>
                <div><p>Comment: {comment}</p></div>
                <div><p>Are you sure you want to cancel this order?</p><a href="" onClick={(event) => this.handleSubmit(event)}>Yes</a><a href={`/user/${userId}`} >No</a></div>
            </div>
            
        )
    }
}