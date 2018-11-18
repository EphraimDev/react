import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import './Register.css';

export default class Register extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        errorMessage: '',
    };


  handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]:evt.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();
      const target = this.state;
      let data = {
        firstname:target.firstname,
        lastname: target.lastname,
        email: target.email,
        password: target.password
      }


      const request = new Request('https://ephaig-web.herokuapp.com/api/v1/register-user', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        mode: 'cors',
        body: JSON.stringify(data)
      });

      fetch(request)
      .then(res => res.json())
      .then(data => {
        if(data.message === 'Password must have at least 8 characters, a upper case letter, a number and a special character'){
          return this.setState({errorMessage: 'Password must have at least 8 characters, a upper case letter, a number and a special character'})
        }
        if(!data.success) {
          return this.setState({errorMessage: "Crosscheck your data"});
        } else {
          this.setState({errorMessage: ""});
            const token = `${data.token}`;
            const userId = `${data.authUser.userId}`;
            const firstname = `${data.authUser.firstname}`;
            const lastname = `${data.authUser.lastname}`;
            localStorage.setItem('current-user-id', userId);
            localStorage.setItem('x-access-token', token);
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('lastname', lastname);
            
            document.location.replace(`/user/${userId}`)
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
        <h2>Register Now</h2>
        <span>{errorMessage}</span>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="firstname" id="firstName"  required />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="lastname" id="lastName" required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input onChange={evt => this.handleChange(evt)}  type="email" name="email" id="email" required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input onChange={evt => this.handleChange(evt)} type="password" name="password" id="password" required />
        </FormGroup> 
        <FormGroup check>
          <Input onChange={evt => this.handleChange(evt)} type="checkbox" name="check" id="check"/>
          <Label for="check" check>Remember Me</Label>
        </FormGroup>
        <Button className="button-green" onClick={(event) => this.handleSubmit(event)} block>Register</Button>
        <Row form>
          <Col className="login">
            <FormGroup>
              <NavLink href="/login">Already have an account?</NavLink>
            </FormGroup>
          </Col>
        </Row>
      </Form> 
    );
  }
}