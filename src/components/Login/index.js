import React from 'react';
import { Button, Form, FormGroup, Label, Input, NavLink, Row, Col } from 'reactstrap';
import './Login.css';
 
export default class Login extends React.Component {
  
    state = {
      email: '',
      password: '',
      errorMessage: ''
    };

    handleChange(evt) {
      evt.preventDefault();
      this.setState({[evt.target.name]:evt.target.value});
    }

  onSubmit(e) {
    e.preventDefault();
    const target = this.state;
    let data = {
      email: target.email,
      password: target.password
    }

    const request = new Request('https://ephaig-web.herokuapp.com/v1/login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
      });

      fetch(request)
        .then(res => res.json())
        .then(data => {
          if(data.authUser.email === 'admin@wizzyagro.com') {
            this.setState({errorMessage: ""});
            const token = `${data.token}`;
            const userId = `${data.authUser.userId}`;
            const firstname = `${data.authUser.firstname}`;
            const email = data.authUser.email;
            localStorage.setItem('x-access-token', token);
            localStorage.setItem('firstname', firstname);
            localStorage.setItem('current-user-id', userId);
            localStorage.setItem('email', email);
            
              return document.location.replace(`/admin`)
          }
          if(data.message === 'Invalid Credentials') {
            return this.setState({errorMessage: 'Invalid Credentials'});
          }
          if(data.message === 'Please confirm your email to login') {
            alert('Please confirm your email to login');
            setTimeout(() => {
              document.location.replace(`/verify-user`);
            }, 100);
          }
          else {
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
          <h2>Welcome Back</h2>
          <span>{errorMessage}</span>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" onChange={evt => this.handleChange(evt)} name="email" id="email" placeholder="" required />
        </FormGroup> 
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" onChange={evt => this.handleChange(evt)} name="password" id="password" placeholder="" required />
        </FormGroup>
        <Row form>
          <Col md={6}> 
          <FormGroup check>
            <Input type="checkbox" name="check" id="check"/>
            <Label for="check" check>Remember Me</Label>
          </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <NavLink href="/forgot-password">Forgot password?</NavLink>
            </FormGroup>
          </Col>
        </Row>
        <Button className="button-green" block onClick={(event) => this.onSubmit(event)}>Submit</Button>
        <Row form>
          <Col md={6} className="login">
            <FormGroup>
              <NavLink href="/register">Don't have an account?</NavLink>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}