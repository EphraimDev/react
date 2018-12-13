import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Verify extends React.Component {

  state = {
    email: '',
    token: '',
    errorMessage: 'Check your email for token to verify your account'
  };

  handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]:evt.target.value});
  }

handleSubmit(e) {
  e.preventDefault();
  const target = this.state;
  let data = {
    email: target.email,
    token: target.token
  }
  

  const request = new Request('https://ephaig-web.herokuapp.com/api/v1/verify-user', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('x-access-token')
      }),
      mode: 'no-cors',
      body: JSON.stringify(data)
    });

    fetch(request)
      .then(res => res.json())
      .then(data => {
        if(data.message === 'User does not exist') {
          return this.setState({errorMessage: "User does not exist"});
        }
        if(data.message === 'Invalid token') {
          return this.setState({
            errorMessage: 'Invalid token'
          })
        }
        else {
          setTimeout(() => {
            document.location.replace(`/login`);
          }, 200);
        }
      })
      .catch(err => {
        console.log(err)
      })
}

  componentDidMount() {
    console.log('Component has mounted');

  }


  render() {
    let errorMessage = this.state.errorMessage;
    return (
      <Form className="form col-6" >
        <span>{errorMessage}</span>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" onChange={evt => this.handleChange(evt)} name="email" id="email" placeholder="" required />
        </FormGroup> 
        <FormGroup>
          <Label for="token">Token</Label>
          <Input type="password" onChange={evt => this.handleChange(evt)} name="token" id="token" placeholder="" required />
        </FormGroup>
        <Button className="button-green" block onClick={(event) => this.handleSubmit(event)}>Submit</Button>
      </Form>
    );
  }
}