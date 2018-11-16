import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Contact.css';

export default class Example extends React.Component {
    state = {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
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
        name:target.name,
        email: target.email,
        phoneNumber: target.phoneNumber,
        message: target.message,
      }

      const request = new Request('https://ephaig-web.herokuapp.com/api/v1/contact-us', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        mode: 'no-cors',
        body: JSON.stringify(data)
      });

      fetch(request)
      .then(res => res.json())
      .then(() => {
          this.setState({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
            errorMessage: ''
          });
        setTimeout(() => {
            document.location.replace(`/contact`);
          }, 1000);
      })
        .catch(err => {
          console.log(err);
        })
        
  }

  componentDidMount() {
    console.log('Contact Component has mounted');
  }
  render() {
    return (
      <Form className="contact-form" >
        <div><h3>Contact Us</h3></div>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input onChange={evt => this.handleChange(evt)} type="text" name="name" id="name" />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone Number</Label>
          <Input onChange={evt => this.handleChange(evt)} type="text" name="phoneNumber" id="phoneNuber" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input onChange={evt => this.handleChange(evt)} type="email" name="email" id="email"  />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input onChange={evt => this.handleChange(evt)} type="textarea" rows="6" name="message" id="message" />
        </FormGroup>
        <Button onClick={(event) => this.handleSubmit(event)}>Submit</Button>
      </Form>
    );
  }
}