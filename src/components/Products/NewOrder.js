import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { getProfile } from '../Auth/GetProfile';
import token from '../Auth/GetToken';
import { newOrder } from '../Auth/NewOrder';
import { productsPrice } from './ProductsPrice';

export default class NewOrder extends React.Component {
    state = {
        product: '',
        address: '',
        comment: '',
        errorMessage: '',
        userId: '',
        amount: 0,
        price: 0,
        unit: 'one',
        email: '',
        quantity: ''
    };


  handleChange(evt) {
    evt.preventDefault();
    let target = evt.target;
    this.setState({
      [target.name]:target.value
    },
    async () => {
      let priceAndUnit = await productsPrice(target.value);
      if(target.name === 'product') {
        this.setState({
          price: priceAndUnit.price,
          unit: priceAndUnit.unit,
          amount: priceAndUnit.price * this.state.quantity
        })
      }

      if(target.name === 'quantity') {
        let reg = /^\d+$/;
        reg.test(target.value) ? this.setState({
          amount: this.state.price * target.value,
          errorMessage: ``
        }) : this.setState({errorMessage: `Quantity must be an integer`})
        
      }
      
    }
  );
  }

  async userProfile() {
    let profile = await getProfile(token);

    return profile
  }

  handleCancel(e) {
    e.preventDefault();
    let user = this.userProfile()
    document.location.replace(`/user/${user.id}`)
  }

  async handleSubmit(event) {
      event.preventDefault();
      document.getElementById('new-order').style.display='block';
      const target = this.state;
      let data = {
        product:target.product,
        address: target.address,
        quantity: target.quantity,
        comment: target.comment,
        amount: target.amount,
        price: target.price,
        unit: target.unit
      }

      let user = await this.userProfile();

      if(!data.product){
        document.getElementById('new-order').style.display='none';
        return  this.setState({errorMessage: `Select your product`})
      }

      console.log(!!isNaN(data.quantity))

      if(data.quantity < 1 || !!isNaN(data.quantity) === true ) {
        document.getElementById('new-order').style.display='none';
        return  this.setState({errorMessage: `Select your quantity`})
      }

      const makeOrder = await newOrder(user.id, data);

      document.getElementById('new-order').style.display='none';

      if(!!makeOrder  === true) {
        localStorage.setItem('order-id', makeOrder.newOrder.productsId)
        document.location.replace(`/confirm-order/${makeOrder.newOrder.productsId}`);
      } else {
        this.setState({errorMessage: 'Order was unsuccessful, try again'})
      }
        
  }

  componentDidMount() {
      localStorage.removeItem('order-id')
  }
  render() {
   let price = this.state.price,
    amount = this.state.amount,
    quantity = this.state.quantity,
    error = this.state.errorMessage;
    return (
      <div>
        <div className="breadcrumb-area">
            <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(../img/bg-img/50.jpg)"}}>
              
            </div>
        </div>

         <section className="blog-content-area section-padding-100 order-product-service col-12 col-md-8">
         
             <div className="container">
                 <div className="row justify-content-center">
                     <div className="col-12">
                        <div className="alazea-benefits-area">
                          <div className="row">
                          <Form className="col-12" >
                            <div id="new-order" style={{display: "none", textAlign: "center"}}>
                                Loading....
                            </div>
                            <div><h3>Make An Order</h3></div>
                            <div><span style={{color: 'red'}}>{error}</span></div>
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
                              <Input value={quantity} onChange={evt => this.handleChange(evt)}  type="text" name="quantity" id="quantity" required />
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
                            <button type="button" className="alazea-btn m-15 order-button" onClick={(event) => this.handleSubmit(event)}>Submit</button>
                            <button type="button" className="alazea-btn m-15 order-button" onClick={(event) => this.handleCancel(event)}>Cancel</button>
                          </Form>
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