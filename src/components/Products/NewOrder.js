import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../ContactForm/Contact.css';

export default class Example extends React.Component {
    state = {
        product: '',
        address: '',
        quatity: '',
        comment: '',
        errorMessage: ''
    };


  handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]:evt.target.value});
    console.log(evt.target.value);
  }

  handleSubmit(event) {
      event.preventDefault();
      const target = this.state;
      let data = {
        product:target.product,
        address: target.address,
        quatity: target.quatity,
        comment: target.comment,
        price: target.price
      }

      let userId = localStorage.getItem('current-user-id')

      const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/${userId}/order-produce`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('x-access-token'),
        }),
        body: JSON.stringify(data)
      });

      fetch(request)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('order-id', data.newOrder.productsId)
          document.location.replace(`/confirm-order`);
      })
        .catch(err => {
          console.log(err);
        })
        
  }

  componentDidMount() {
      console.log('OK');
      localStorage.removeItem('order-id')
  }
  render() {
    return (
      <Form className="contact-form" >
        <div><h3>Make An Order</h3></div>
        <FormGroup>
            <Label for="name">Product</Label>
            <select onChange={evt => this.handleChange(evt)} name="product" id="name" className="form-control" >
              <option>Choose a service</option>
              <option>Banana Plantation</option>
              <option>Plantain Plantation</option>
              <option>Garri Production</option>
              <option>Pepper Farming</option>
              <option>Snail Farming</option>
              <option>Snail Feed Production</option>
              <option>Oil Palm Farming</option>
              <option>Orange Farming</option>
              <option>Pawpaw Farming</option>
              <option>Rabbit Rearing</option>
              <option>Goat Rearing</option>
              <option>Poultry</option>
            </select>
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="quatity" id="quantity" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="address" id="address" />
        </FormGroup>
        <FormGroup>
          <Label for="comment">Comment</Label>
          <Input onChange={evt => this.handleChange(evt)} type="textarea" rows="6" name="comment" id="comment" />
        </FormGroup>
        <Button onClick={(event) => this.handleSubmit(event)}>Submit</Button>
      </Form>
    );
  }
}