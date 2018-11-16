import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../Register/Register.css';

export default class Register extends React.Component {
    state = {
        address: '',
        city: '',
        state: '',
        zip: '',
        errorMessage: '',
    };


  handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]:evt.target.value})
  }

  handleSubmit(event) {
      event.preventDefault();
      const target = this.state;
      let data = {
        address:target.address,
        city: target.city,
        state: target.state,
        zip: target.zip
      }

      let userId = localStorage.getItem('current-user-id');
      const request = new Request(`https://ephaig-web.herokuapp.com/api/v1/user/${userId}/edit-profile`, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('x-access-token')
        }),
        body: JSON.stringify(data)
      });

      fetch(request)
      .then(res => res.json())
      .then(data => {
          if(data.message !== 'Successful') {
            this.setState({errorMessage: 'Try again'})
            console.log(data.message)
          } else {
            document.location.replace(`/user/${userId}`);
          }
      })
        .catch(err => {
          console.log(err);
          return this.setState({error: false})
        })
        
  }

  componentDidMount() {
    console.log('Component has mounted');
  }


  render() {
    let errorMessage = this.state.errorMessage;
    return (
      <Form className="form col-6" >
        <h2>Edit Profile</h2>
        <span>{errorMessage}</span>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="address" id="address"  required />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="city" id="city" required />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input onChange={evt => this.handleChange(evt)}  type="text" name="state" id="state" required />
        </FormGroup>
        <FormGroup>
          <Label for="zip">Zip</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="zip" id="zip" required />
        </FormGroup>
        <Button className="button-green" onClick={(event) => this.handleSubmit(event)} block>Submit</Button>
      </Form> 
    );
  }
}