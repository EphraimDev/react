import React from 'react';
import {matchPath} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
    state = {
        service: '',
        userId: '',
        amount: 0,
        price: 0,
        unit: '',
        email: '',
        quantity: 0,
        error: ''
    }

    handleChange(evt) {
        evt.preventDefault();
        this.setState({
          [evt.target.name]:evt.target.value
        }, () => {
            this.setState({
                amount: this.state.price * this.state.quantity
            })
        });
      }
  
  componentDidMount() {
    let pathway = matchPath(window.location.pathname, {
        path: "/services/:service",
        strict: true
    });

    let title = pathway.params.service;
    this.setState({
        service: title,
        userId: localStorage.getItem('current-user-id')
    })
    if(title === 'banana-plantation' || title === 'plantain-plantation') {
      this.setState({
          price: 1000,
          unit: 'bunch'
      })
  }else if(title === 'garri-production') {
      this.setState({
          price: 800,
          unit: 'sack'
      })
  }else if(title === 'pepper-farming') {
      this.setState({
          price: 700,
          unit: 'basket'
      })
  }else if(title === 'snail-farming') {
      this.setState({
          price: 500,
          unit: '1000 snails'
      })
  }else if(title === 'snail-feed-production') {
      this.setState({
          price: 3000,
          unit: 'sack'
      })
  }else if(title === 'oil-palm-farming') {
      this.setState({
          price: 10000,
          unit: '100 stands'
      })
  }else  {
      this.setState({
          price: 200
      })
  
  }
 
  }
  render() {
      let service = this.state.service,
      price = this.state.price,
      amount = this.state.amount,
      error = this.state.error;
      return (
          <div>
              <Form className="form col-6" >
        <h2>Order Page</h2>
        <span>{error}</span>
        <FormGroup>
          <Label for="service">Service</Label>
          <Input type="text" name="service" id="service" value={service} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="number" name="price" id="price" value={price} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input onChange={evt => this.handleChange(evt)}  type="number" name="quantity" id="quantity" required />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input type="number" name="amount" id="amount" value={amount} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="address" id="address" required />
        </FormGroup>
        <Button className="button-green" onClick={(event) => this.handleSubmit(event)} block>Submit</Button>
      </Form>
      <div id="loader" style={{display:"none"}}></div>
          </div>
      );
  }
}