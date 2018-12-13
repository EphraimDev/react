import React from 'react';
import {matchPath} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Example extends React.Component {
    state = {
        product: '',
        address: '',
        quatity: '',
        comment: '',
        orderId: '',
        errorMessage: ''
    };


  handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]:evt.target.value});
    console.log(evt.target.value)
  }

  handleSubmit(event) {
      event.preventDefault();
      const target = this.state;
      let data = {
        product:target.product,
        address: target.address,
        quatity: target.quatity,
        comment: target.comment
      }

      let orderId = this.state.orderId

      const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/orders/${orderId}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('x-access-token'),
        }),
        body: JSON.stringify(data)
      });

      fetch(request)
      .then(res => res.json())
      .then(data => {
          if(data.message !== 'Order has been updated') {
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
              let userId = localStorage.getItem('current-user-id')
              document.location.replace(`/user/${userId}`);
          }
          
      })
        .catch(err => {
          console.log(err);
        })
        
  }

  componentDidMount() {
      console.log('OK')
      let pathway = matchPath(window.location.pathname, {
        path: "/:orderId/update",
        strict: false
    });

    let orderId = pathway.params.orderId;

    const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/${orderId}`, {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('x-access-token'),
        })
    });

    fetch(request)
    .then(res => res.json())
    .then(data => {
        this.setState({
            product: data.order.product,
            address: data.order.address,
            quatity: data.order.quatity,
            comment: data.order.comment,
            orderId: data.order.productsId.trim()
        })
    })
    .catch(err => {
        console.log(err);
    })
  }
  render() {
      let product = this.state.product,
      address = this.state.address,
      quantity = this.state.quatity,
      comment = this.state.comment,
      errorMessage = this.state.errorMessage;
    return (
      <Form className="contact-form" >
        <div><h3>Make An Order</h3></div>
        <div>{errorMessage}</div>
        <FormGroup>
            <Label for="name">Product</Label>
            <Input onChange={evt => this.handleChange(evt)} type="text" name="product" id="name" value={product} />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="address" id="address" value={address} />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="quatity" id="quantity" value={quantity} />
        </FormGroup>
        <FormGroup>
          <Label for="comment">Comment</Label>
          <Input onChange={evt => this.handleChange(evt)} type="textarea" rows="6" name="comment" id="comment" value={comment} />
        </FormGroup>
        <Button onClick={(event) => this.handleSubmit(event)}>Submit</Button>
      </Form>
    );
  }
}