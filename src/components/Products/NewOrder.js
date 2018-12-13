import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
    state = {
        product: '',
        address: '',
        comment: '',
        errorMessage: '',
        userId: '',
        amount: 0,
        price: 0,
        unit: '',
        email: '',
        quantity: 0
    };


  handleChange(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]:evt.target.value
    },
    () => {
      if(this.state.product === 'Banana Plantation' || this.state.product === 'Plantain Plantation') {
        this.setState({
            price: 1000,
            unit: 'bunch'
        })
    }else if(this.state.product === 'Garri Production') {
        this.setState({
            price: 800,
            unit: 'sack'
        })
    }else if(this.state.product === 'Pepper Farming') {
        this.setState({
            price: 700,
            unit: 'basket'
        })
    }else if(this.state.product === 'Snail Farming') {
        this.setState({
            price: 500,
            unit: '1000 snails'
        })
    }else if(this.state.product === 'Snail Feed Production') {
        this.setState({
            price: 3000,
            unit: 'sack'
        })
    }else if(this.state.product === 'Oil Palm Farming') {
        this.setState({
            price: 10000,
            unit: '100 stands'
        })
    }else  {
        this.setState({
            price: 200
        })
    }
    this.setState({
      amount: this.state.price * this.state.quantity
  })

    }
  );
  }

  handleCancel(e) {
    e.preventDefault();
    document.location.replace(`/user/${localStorage.getItem('current-user-id')}`)
  }

  handleSubmit(event) {
      event.preventDefault();
      const target = this.state;
      let data = {
        product:target.product,
        address: target.address,
        quatity: target.quantity,
        comment: target.comment,
        amount: target.amount
      }

      let userId = localStorage.getItem('current-user-id')

      const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/${userId}/order-produce`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('x-access-token'),
        }),
        mode: 'cors',
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
   let price = this.state.price,
    amount = this.state.amount,
    quantity = this.state.quantity,
    error = this.state.error;
    return (
      <Form className="contact-form" >
        <div><h3>Make An Order</h3></div>
        <div><span>{error}</span></div>
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
          <Label for="price">Price</Label>
          <Input type="number" name="price" id="price" value={price} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input value={quantity} onChange={evt => this.handleChange(evt)}  type="number" name="quantity" id="quantity" required />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input type="number" name="amount" id="amount" value={amount} readOnly />
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
        <Button onClick={(event) => this.handleCancel(event)}>Cancel</Button>
      </Form>
    );
  }
}